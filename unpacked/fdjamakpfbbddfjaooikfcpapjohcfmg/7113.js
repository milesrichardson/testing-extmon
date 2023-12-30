"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7113],
  {
    504085: (e, t, s) => {
      s.d(t, { Z: () => h });
      var a = s(696832),
        l = s(876307),
        i = s(526849),
        n = s(383849),
        o = s.n(n),
        r = s(957459);
      var d = s(855541);
      function p(e, t) {
        const s = e.find((e) => String(e.value) === String(t));
        return null != s ? s : null;
      }
      class h extends a.Component {
        constructor(e) {
          super(e),
            (this.select = a.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const s = t.value,
                a = p(this.props.options, s);
              this.setState({ optionSelected: a }), this.props.onChange && this.props.onChange(e);
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
            s = o()("selectContainer--mo5uz0qo56", d.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            a = o()("selector--fgNHKzkAC3", this.props.classNames);
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
          return (0, l.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, l.tZ)(
                "label",
                { className: d.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, l.tZ)(
              "div",
              { className: s },
              (0, l.tZ)(
                "div",
                { className: a },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, l.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, l.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, r)
              ),
              (0, l.tZ)(
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
                this.props.options.map((e) => (0, l.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    987808: (e, t, s) => {
      s.r(t), s.d(t, { Connected: () => h });
      var a = s(696832),
        l = s(799852),
        i = s(448430),
        n = s(382706),
        o = s(546257),
        r = s(486816),
        d = s(615446);
      const p = (0, r.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_email"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_email_description"),
          getTitle: (e) => e.itemName,
          iconType: d.Tu.email,
          vaultItemType: n.U.Email,
          renderForm: (e, t, s, l) => {
            const i = { type: t.type, itemName: t.itemName, emailAddress: t.emailAddress, spaceId: t.spaceId || "" };
            return a.createElement(o._, { lee: e, currentValues: i, signalEditedValues: l, ref: s });
          }
        }),
        h = (e) => {
          const { data: t } = (0, l.k)(i.L, "query", { vaultItemTypes: [n.U.Email], ids: [`{${e.match.params.uuid}}`] });
          return a.createElement(p, { ...e, item: t?.emailsResult.items[0] });
        };
    },
    546257: (e, t, s) => {
      s.d(t, { _: () => h });
      var a = s(696832),
        l = s(526849),
        i = s(649341),
        n = s(611913),
        o = s(504085),
        r = s(66485),
        d = s(242521),
        p = s(167406);
      class h extends d.ZP {
        isFormValid() {
          return this.validateValues({ emailAddress: d.Jh });
        }
        render() {
          var e, t;
          const s = this.props.lee.translate.namespace("webapp_personal_info_edition_email_"),
            { shouldShowTrialDiscontinuedDialog: r } = this.context,
            d = [
              { label: s("perso_type"), value: i.V.Perso },
              { label: s("pro_type"), value: i.V.Pro }
            ],
            h = null != (e = (0, l.find)((0, l.propEq)("value", this.state.values.type), d)) ? e : (0, l.head)(d);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(n.Z, {
              type: "email",
              label: s("email_label"),
              placeholder: s("placeholder_no_email"),
              dataName: "emailAddress",
              value: this.state.values.emailAddress,
              error: this.state.errors.emailAddress,
              onChange: this.handleChange,
              disabled: !!r
            }),
            a.createElement(o.Z, {
              label: s("type_label"),
              placeholder: h.label,
              dataName: "type",
              options: d,
              defaultOption: h,
              onChange: this.handleChange,
              disabled: !!r
            }),
            a.createElement(n.Z, {
              label: s("name_label"),
              placeholder: s("placeholder_no_emailName"),
              dataName: "itemName",
              value: this.state.values.itemName,
              onChange: this.handleChange,
              disabled: !!r
            }),
            a.createElement(p.M, {
              labelSx: p.e,
              spaceId: null != (t = this.state.values.spaceId) ? t : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!r
            })
          );
        }
      }
      h.contextType = r.gD;
    },
    855541: (e, t, s) => {
      s.d(t, { Z: () => a });
      const a = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    }
  }
]);
