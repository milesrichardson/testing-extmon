"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5440],
  {
    280148: (e, t, a) => {
      a.d(t, { j: () => E });
      var l = a(696832),
        i = a(651154),
        s = a(307973),
        n = a(535473),
        o = a(53830),
        r = a(400711),
        d = a(820283),
        p = a(201389),
        h = a(59896),
        c = a(441217);
      const _ = (e, t) => (0, i.Z)(e, t, new Date("1900-01-01")),
        u = (e, t, a) => (l) => (i) => {
          if ("" === i.target.value) return void a("");
          const n = parseInt(i.target.value, 10),
            o = _(e, t),
            r = isNaN(o.getTime())
              ? (() => {
                  const e = new Date();
                  return e.setUTCHours(0, 0, 0, 0), e;
                })()
              : o;
          a((0, s.Z)(l(r, n), t));
        },
        m = (e, t) => {
          var a;
          return null != (a = e.find(({ value: e }) => t === e)) ? a : e[0];
        },
        b = "webapp_id_form_field_placeholder_day",
        v = "webapp_id_form_field_placeholder_month",
        f = "webapp_id_form_field_placeholder_year",
        y = (e) => ({ label: e, value: "" }),
        E = ({
          yearsRange: e = [-120, 0],
          sortYears: t = "ASC",
          hideDay: a = !1,
          value: i,
          label: s,
          dateFormat: E,
          monthLabelFormatter: N,
          onChange: g,
          allowEmpty: S = !1,
          locale: A
        }) => {
          const { translate: C } = (0, p.Z)(),
            w = (([e, t], a = "ASC") => {
              const l = new Date().getFullYear() + e,
                i = Math.abs(t - e) + 1,
                s = new Array(i).fill(null).map((e, t) => ({ label: (l + t).toString(), value: l + t }));
              return "ASC" === a ? s : s.sort(({ value: e }, { value: t }) => t - e);
            })(e, t),
            T = ((D = (e) => N(e)), new Array(12).fill(null).map((e, t) => ({ label: D((0, r.Z)(new Date(), t)), value: t })));
          var D;
          const M = u(i, E, g),
            Z = M(n.Z),
            I = M(o.Z),
            F = M(r.Z),
            L = _(i, E),
            k =
              ((B = (0, d.Z)("" === i ? 31 : L)),
              new Array(B || 31).fill(null).map((e, t) => ({ label: (t + 1).toString(), value: t + 1 })));
          var B;
          S && (w.unshift(y(C(f))), T.unshift(y(C(v))), k.unshift(y(C(b))));
          const H = m(w, L.getFullYear()),
            R = m(T, L.getMonth()),
            O = m(k, L.getDate()),
            P = A || new Intl.NumberFormat().resolvedOptions().locale,
            V = new Date(Date.UTC(2013, 11, 21)),
            x = /\D/g,
            Y = V.toLocaleDateString(P, { day: "numeric" }).replace(x, ""),
            $ = V.toLocaleDateString(P, { month: "numeric" }).replace(x, ""),
            z = V.toLocaleDateString(P, { year: "numeric" }).replace(x, ""),
            K = V.toLocaleDateString(P, { year: "numeric", month: "numeric", day: "numeric" }),
            U = K.match(/[.\-/]/);
          let X = ["month", "day", "year"];
          if (U) {
            const e = K.replace(/[\u200E\u200F]/g, "").split(U[0]);
            if (e.length >= 3) {
              const t = e.reduce((e, t) => {
                switch (t.replace(x, "")) {
                  case Y:
                    a || e.push("day");
                    break;
                  case $:
                    e.push("month");
                    break;
                  case z:
                    e.push("year");
                }
                return e;
              }, []);
              (3 === t.length || (a && 2 === t.length)) && (X = t);
            }
          }
          return l.createElement(
            c.Ejs,
            { alignItems: "center" },
            X.map((e, t) => {
              switch (e) {
                case "day":
                  return a
                    ? ""
                    : l.createElement(h.Z, {
                        key: `day-${i}`,
                        label: t ? "" : s,
                        ariaLabel: `${s} :${C(b)}`,
                        placeholder: O.label,
                        dataName: "dateDay",
                        options: k,
                        defaultOption: O,
                        onChange: Z
                      });
                case "month":
                  return l.createElement(h.Z, {
                    key: `month-${i}`,
                    label: t ? "" : s,
                    ariaLabel: `${s} :${C(v)}`,
                    placeholder: R.label,
                    dataName: "dateMonth",
                    options: T,
                    defaultOption: R,
                    onChange: F
                  });
                case "year":
                  return l.createElement(h.Z, {
                    key: `year-${i}`,
                    label: t ? "" : s,
                    ariaLabel: `${s} :${C(f)}`,
                    placeholder: H.label,
                    dataName: "dateYear",
                    options: w,
                    defaultOption: H,
                    onChange: I
                  });
                default:
                  return "";
              }
            })
          );
        };
    },
    59896: (e, t, a) => {
      a.d(t, { Z: () => h });
      var l = a(696832),
        i = a(142897),
        s = a(526849),
        n = a(383849),
        o = a.n(n),
        r = a(769183);
      var d = a(255990);
      function p(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class h extends l.Component {
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
              null === this.props.defaultOption ? (0, s.head)(this.props.options).value : this.props.defaultOption.value
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
              (n = null === this.props.defaultOption ? (0, s.head)(this.props.options).value : this.props.defaultOption.value);
          const r = this.state.optionSelected
            ? this.state.optionSelected.selectedLabel
              ? this.state.optionSelected.selectedLabel
              : this.state.optionSelected.label
            : this.props.placeholder;
          return (0, i.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, i.tZ)(
                "label",
                { className: d.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, i.tZ)(
              "div",
              { className: a },
              (0, i.tZ)(
                "div",
                { className: l },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, i.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, i.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, r)
              ),
              (0, i.tZ)(
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
                this.props.options.map((e) => (0, i.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    985440: (e, t, a) => {
      a.d(t, { P: () => N });
      var l = a(696832),
        i = a(526849),
        s = a(919551),
        n = a(313661),
        o = a(59896),
        r = a(280148),
        d = a(935562);
      let p = (function (e) {
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
      const h = (e) => e !== d.n.JAPAN,
        c = (e) => e === d.n.NORTH_AMERICA_AND_ASIA,
        _ = (e) => e === d.n.SPANISH;
      var u = a(488856),
        m = a(819923),
        b = a(307973),
        v = a(433117),
        f = a(839434);
      const y = "webapp_personal_info_edition_identity_error",
        E = "yyyy-MM-dd";
      class N extends s.ZP {
        constructor(...e) {
          super(...e),
            (this.isFieldVisible = ((e) => {
              const t = (0, d.S)(e),
                a = {
                  [p.TITLE]: h(t),
                  [p.FIRSTNAME]: !0,
                  [p.MIDDLENAME]: c(t),
                  [p.LASTNAME]: !0,
                  [p.LASTNAME2]: _(t),
                  [p.PSEUDO]: !0,
                  [p.BIRTHDATE]: !0,
                  [p.BIRTHPLACE]: !0
                };
              return (e, t) => a[e] || !!t;
            })(this.props.currentValues.localeFormat));
        }
        isFormValid() {
          return this.validateValues({ firstName: s.UE, lastName: s.UE });
        }
        render() {
          var e, t;
          const a = this.props.lee.translate,
            s = [
              { label: a("webapp_personal_info_edition_identity_title_mr"), value: "MR" },
              { label: a("webapp_personal_info_edition_identity_title_mrs"), value: "MME" },
              { label: a("webapp_personal_info_edition_identity_title_miss"), value: "MLLE" },
              { label: a("webapp_personal_info_edition_identity_title_ms"), value: "MS" },
              { label: a("webapp_personal_info_edition_identity_title_mx"), value: "MX" },
              { label: a("webapp_personal_info_edition_identity_title_none_of_these"), value: "NONE_OF_THESE" }
            ],
            d = (0, i.uniqBy)((e) => e.label, s),
            h = null != (e = d.find(({ value: e }) => this.state.values.title === e)) ? e : d[d.length - 1];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "div",
              { className: u.Z.containerBlock },
              this.isFieldVisible(p.TITLE, this.state.values.title) &&
                l.createElement(o.Z, {
                  label: a("webapp_personal_info_edition_identity_title_label"),
                  placeholder: h.label,
                  dataName: "title",
                  options: d,
                  defaultOption: h,
                  onChange: this.handleChange
                }),
              this.isFieldVisible(p.FIRSTNAME, this.state.values.firstName) &&
                l.createElement(n.Z, {
                  type: "text",
                  label: a("webapp_personal_info_edition_identity_firstname_label"),
                  placeholder: a("webapp_personal_info_edition_identity_placeholder_no_firstname"),
                  dataName: "firstName",
                  value: this.state.values.firstName,
                  error: this.state.errors.firstName ? a(y) : void 0,
                  onChange: this.handleChange
                }),
              this.isFieldVisible(p.MIDDLENAME, this.state.values.middleName) &&
                l.createElement(n.Z, {
                  type: "text",
                  label: a("webapp_personal_info_edition_identity_middlename_label"),
                  placeholder: a("webapp_personal_info_edition_identity_placeholder_no_middlename"),
                  dataName: "middleName",
                  value: this.state.values.middleName,
                  error: this.state.errors.middleName,
                  onChange: this.handleChange
                }),
              this.isFieldVisible(p.LASTNAME, this.state.values.lastName) &&
                l.createElement(n.Z, {
                  type: "text",
                  label: a("webapp_personal_info_edition_identity_lastname_label"),
                  placeholder: a("webapp_personal_info_edition_identity_placeholder_no_lastname"),
                  dataName: "lastName",
                  value: this.state.values.lastName,
                  error: this.state.errors.lastName ? a(y) : void 0,
                  onChange: this.handleChange
                }),
              this.isFieldVisible(p.LASTNAME2, this.state.values.lastName2) &&
                l.createElement(n.Z, {
                  type: "text",
                  label: a("webapp_personal_info_edition_identity_lastname2_label"),
                  placeholder: a("webapp_personal_info_edition_identity_placeholder_no_lastname2"),
                  dataName: "lastName2",
                  value: this.state.values.lastName2,
                  error: this.state.errors.lastName2,
                  onChange: this.handleChange
                })
            ),
            l.createElement(
              "div",
              { className: u.Z.containerBlock },
              this.isFieldVisible(p.PSEUDO, this.state.values.pseudo) &&
                l.createElement(n.Z, {
                  type: "text",
                  label: a("webapp_personal_info_edition_identity_pseudo_label"),
                  placeholder: a("webapp_personal_info_edition_identity_placeholder_no_pseudo"),
                  dataName: "pseudo",
                  value: this.state.values.pseudo,
                  error: this.state.errors.pseudo,
                  onChange: this.handleChange
                }),
              this.isFieldVisible(p.BIRTHDATE, this.state.values.birthDate) &&
                l.createElement(r.j, {
                  label: a("webapp_personal_info_edition_identity_birthdate_label"),
                  value: (0, b.Z)((0, v.Z)(this.state.values.birthDate), E),
                  monthLabelFormatter: (e) => this.props.lee.translate.shortDate(e, m._T.MMMM),
                  dateFormat: E,
                  sortYears: "DESC",
                  onChange: (e) => this.handleChange(e, "birthDate")
                }),
              this.isFieldVisible(p.BIRTHPLACE, this.state.values.birthPlace) &&
                l.createElement(n.Z, {
                  type: "textDateFieldSelect",
                  label: a("webapp_personal_info_edition_identity_birthplace_label"),
                  placeholder: a("webapp_personal_info_edition_identity_placeholder_no_birthplace"),
                  dataName: "birthPlace",
                  value: this.state.values.birthPlace,
                  error: this.state.errors.birthPlace,
                  onChange: this.handleChange
                }),
              l.createElement(f.M, {
                labelSx: f.e,
                spaceId: null != (t = this.state.values.spaceId) ? t : "",
                onChange: (e) => this.handleChange(e, "spaceId")
              })
            )
          );
        }
      }
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
    },
    488856: (e, t, a) => {
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
