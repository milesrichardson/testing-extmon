"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8052],
  {
    59896: (e, t, a) => {
      a.d(t, { Z: () => d });
      var l = a(696832),
        s = a(142897),
        i = a(526849),
        n = a(383849),
        o = a.n(n),
        r = a(769183);
      var p = a(255990);
      function h(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class d extends l.Component {
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
            a = o()("selectContainer--mo5uz0qo56", p.Z[t], {
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
                { className: p.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
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
                  className: p.Z.select,
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
    424575: (e, t, a) => {
      a.r(t), a.d(t, { Connected: () => d });
      var l = a(696832),
        s = a(799852),
        i = a(448430),
        n = a(382706),
        o = a(122036),
        r = a(72320),
        p = a(347613);
      const h = (0, r.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_email"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_email_description"),
          getTitle: (e) => e.itemName,
          iconType: p.Tu.email,
          kwType: "KWEmail",
          renderForm: (e, t, a, s) => {
            const i = { type: t.type, emailName: t.itemName, email: t.emailAddress, spaceId: t.spaceId || "" };
            return l.createElement(o._, { lee: e, currentValues: i, signalEditedValues: s, ref: a });
          }
        }),
        d = (e) => {
          const { data: t } = (0, s.k)(i.L, "query", { vaultItemTypes: [n.U.Email], ids: [`{${e.match.params.uuid}}`] });
          return l.createElement(h, { ...e, item: t?.emailsResult.items[0] });
        };
    },
    122036: (e, t, a) => {
      a.d(t, { _: () => p });
      var l = a(696832),
        s = a(526849),
        i = a(919551),
        n = a(313661),
        o = a(59896),
        r = a(839434);
      class p extends i.ZP {
        isFormValid() {
          return this.validateValues({ email: i.Jh });
        }
        render() {
          var e, t;
          const a = this.props.lee.translate.namespace("webapp_personal_info_edition_email_"),
            i = [
              { label: a("perso_type"), value: "PERSO" },
              { label: a("pro_type"), value: "PRO" }
            ],
            p = null != (e = (0, s.find)((0, s.propEq)("value", this.state.values.type), i)) ? e : (0, s.head)(i);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(n.Z, {
              type: "email",
              label: a("email_label"),
              placeholder: a("placeholder_no_email"),
              dataName: "email",
              value: this.state.values.email,
              error: this.state.errors.email,
              onChange: this.handleChange
            }),
            l.createElement(o.Z, {
              label: a("type_label"),
              placeholder: p.label,
              dataName: "type",
              options: i,
              defaultOption: p,
              onChange: this.handleChange
            }),
            l.createElement(n.Z, {
              label: a("name_label"),
              placeholder: a("placeholder_no_emailName"),
              dataName: "emailName",
              value: this.state.values.emailName,
              onChange: this.handleChange
            }),
            l.createElement(r.M, {
              labelSx: r.e,
              spaceId: null != (t = this.state.values.spaceId) ? t : "",
              onChange: (e) => this.handleChange(e, "spaceId")
            })
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
    }
  }
]);
