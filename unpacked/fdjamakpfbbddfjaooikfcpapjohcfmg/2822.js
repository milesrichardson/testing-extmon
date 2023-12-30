"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2822],
  {
    504085: (e, t, a) => {
      a.d(t, { Z: () => d });
      var l = a(696832),
        s = a(876307),
        n = a(526849),
        o = a(383849),
        i = a.n(o),
        r = a(957459);
      var p = a(855541);
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
              null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value
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
            a = i()("selectContainer--mo5uz0qo56", p.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            l = i()("selector--fgNHKzkAC3", this.props.classNames);
          let o;
          this.state.optionSelected
            ? (o = this.state.optionSelected.value)
            : this.props.options.length &&
              (o = null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value);
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
                  value: o,
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
    599300: (e, t, a) => {
      a.r(t), a.d(t, { Connected: () => u });
      var l = a(696832),
        s = a(799852),
        n = a(448430),
        o = a(382706),
        i = a(575257),
        r = a(238983),
        p = a(486816),
        h = a(615446),
        d = a(718462);
      const c = (0, p.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_phone"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_phone_description"),
          getTitle: d.o3,
          iconType: h.Tu.phone,
          vaultItemType: o.U.Phone,
          renderForm: (e, t, a, s) => {
            const n = i.c[e.globalState.locale.country] || i.c.US,
              o = { itemName: t.itemName, phoneNumber: t.phoneNumber, localeFormat: t.localeFormat || n, type: t.type, spaceId: t.spaceId };
            return l.createElement(r.b, { lee: e, currentValues: o, signalEditedValues: s, ref: a });
          }
        }),
        u = (e) => {
          const { data: t } = (0, s.k)(n.L, "query", { vaultItemTypes: [o.U.Phone], ids: [`{${e.match.params.uuid}}`] });
          return l.createElement(c, { ...e, item: t?.phonesResult.items[0] });
        };
    },
    238983: (e, t, a) => {
      a.d(t, { b: () => _ });
      var l = a(696832),
        s = a(526849),
        n = a(876307),
        o = a(611913),
        i = a(504085),
        r = a(66485),
        p = a(242521),
        h = a(89600),
        d = a(167406),
        c = a(575257),
        u = a(882009);
      function b(e, t) {
        const a = e.namespace("country_name_");
        return (e) => ((e = e || c.c.US), { label: `${a(c.c[e])} (+${t[e]})`, selectedLabel: `${e} (+${t[e]})`, value: e });
      }
      var m = a(855541);
      class _ extends p.ZP {
        isFormValid() {
          return this.validateValues({ phoneNumber: p.UE });
        }
        render() {
          var e, t;
          const { lee: a } = this.props,
            r = a.translate.namespace("webapp_personal_info_edition_phone_"),
            { shouldShowTrialDiscontinuedDialog: p } = this.context,
            _ = (function (e) {
              const t = e.namespace("personal_info_");
              return [
                { label: t("phone_type_mobile"), value: u.z.Mobile },
                { label: t("phone_type_landline"), value: u.z.Landline },
                { label: t("phone_type_work_mobile"), value: u.z.WorkMobile },
                { label: t("phone_type_work_landline"), value: u.z.WorkLandline },
                { label: t("phone_type_fax"), value: u.z.Fax },
                { label: t("phone_type_work_fax"), value: u.z.WorkFax },
                { label: t("phone_type_any"), value: u.z.Any }
              ];
            })(a.translate),
            v = null != (e = (0, s.find)((0, s.propEq)("value", this.state.values.type), _)) ? e : (0, s.head)(_),
            g = a.globalState.webapp.callingCodes || {},
            y = (function (e, t) {
              const a = b(e, t);
              return Object.keys(t).map((e) => a(c.c[e]));
            })(a.translate, g),
            f = b(a.translate, g)(this.state.values.localeFormat);
          return (0, n.tZ)(
            l.Fragment,
            null,
            (0, n.tZ)(
              "div",
              { className: h.Z.container },
              (0, n.tZ)(
                "label",
                { className: m.Z.label, sx: { color: "ds.text.neutral.catchy" }, title: r("number_label") },
                r("number_label")
              ),
              (0, n.tZ)(i.Z, {
                placeholder: f.label,
                dataName: "localeFormat",
                options: y,
                defaultOption: f,
                onChange: this.handleChange,
                disabled: !!p
              }),
              (0, n.tZ)(o.Z, {
                type: "text",
                placeholder: r("placeholder_no_number"),
                dataName: "phoneNumber",
                value: this.state.values.phoneNumber,
                error: this.state.errors.phoneNumber,
                onChange: this.handleChange,
                disabled: !!p
              })
            ),
            (0, n.tZ)(o.Z, {
              type: "text",
              label: r("phonename_label"),
              placeholder: r("placeholder_no_phonename"),
              dataName: "itemName",
              value: this.state.values.itemName,
              onChange: this.handleChange,
              disabled: !!p
            }),
            (0, n.tZ)(i.Z, {
              label: r("type_label"),
              placeholder: v.label,
              dataName: "type",
              options: _,
              defaultOption: v,
              onChange: this.handleChange,
              disabled: !!p
            }),
            (0, n.tZ)(d.M, {
              labelSx: d.e,
              spaceId: null != (t = this.state.values.spaceId) ? t : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!p
            })
          );
        }
      }
      _.contextType = r.gD;
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
