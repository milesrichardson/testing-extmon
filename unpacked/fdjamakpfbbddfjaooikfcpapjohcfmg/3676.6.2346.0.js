"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3676],
  {
    59896: (e, t, a) => {
      a.d(t, { Z: () => c });
      var l = a(696832),
        n = a(142897),
        s = a(526849),
        o = a(383849),
        i = a.n(o),
        p = a(769183);
      var r = a(255990);
      function h(e, t) {
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
              null === this.props.defaultOption ? (0, s.head)(this.props.options).value : this.props.defaultOption.value
            )),
            (this.state = { fieldHtmlId: (0, p.Z)(), optionSelected: t, isSelectFocused: !1 });
        }
        getValue() {
          if (!this.select.current) throw new Error("select ref not initialized");
          return this.select.current.value;
        }
        render() {
          var e;
          const t = this.props.marginSide || "none",
            a = i()("selectContainer--mo5uz0qo56", r.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            l = i()("selector--fgNHKzkAC3", this.props.classNames);
          let o;
          this.state.optionSelected
            ? (o = this.state.optionSelected.value)
            : this.props.options.length &&
              (o = null === this.props.defaultOption ? (0, s.head)(this.props.options).value : this.props.defaultOption.value);
          const p = this.state.optionSelected
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
                { className: r.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
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
                (0, n.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, p)
              ),
              (0, n.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: r.Z.select,
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
                this.props.options.map((e) => (0, n.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    470602: (e, t, a) => {
      a.r(t), a.d(t, { Connected: () => m });
      var l = a(696832),
        n = a(799852),
        s = a(448430),
        o = a(382706),
        i = a(526849),
        p = a(453576),
        r = a(882009),
        h = a(131489),
        c = a(72320),
        d = a(347613),
        u = a(933741);
      const _ = {
          [r.z.Any]: p.PhoneType.PHONE_TYPE_ANY,
          [r.z.Fax]: p.PhoneType.PHONE_TYPE_FAX,
          [r.z.Landline]: p.PhoneType.PHONE_TYPE_LANDLINE,
          [r.z.Mobile]: p.PhoneType.PHONE_TYPE_MOBILE,
          [r.z.WorkFax]: p.PhoneType.PHONE_TYPE_WORK_FAX,
          [r.z.WorkLandline]: p.PhoneType.PHONE_TYPE_WORK_LANDLINE,
          [r.z.WorkMobile]: p.PhoneType.PHONE_TYPE_WORK_MOBILE
        },
        b = (0, c.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_phone"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_phone_description"),
          getTitle: u.o3,
          iconType: d.Tu.phone,
          kwType: "KWPhone",
          renderForm: (e, t, a, n) => {
            const s = p.Country[e.globalState.locale.country] || p.Country.US,
              o = {
                ...(0, i.pick)(["spaceId"], t),
                phoneName: t.itemName,
                number: t.phoneNumber,
                localeFormat: t.localeFormat || s,
                type: _[t.type]
              };
            return l.createElement(h.b, { lee: e, currentValues: o, signalEditedValues: n, ref: a });
          }
        }),
        m = (e) => {
          const { data: t } = (0, n.k)(s.L, "query", { vaultItemTypes: [o.U.Phone], ids: [`{${e.match.params.uuid}}`] });
          return l.createElement(b, { ...e, item: t?.phonesResult.items[0] });
        };
    },
    131489: (e, t, a) => {
      a.d(t, { b: () => _ });
      var l = a(696832),
        n = a(526849),
        s = a(142897),
        o = a(919551),
        i = a(313661),
        p = a(59896),
        r = a(453576);
      function h(e, t) {
        const a = e.namespace("country_name_");
        return (e) => ((e = e || r.Country.US), { label: `${a(r.Country[e])} (+${t[e]})`, selectedLabel: `${e} (+${t[e]})`, value: e });
      }
      var c = a(488856),
        d = a(255990),
        u = a(839434);
      class _ extends o.ZP {
        isFormValid() {
          return this.validateValues({ number: o.UE });
        }
        render() {
          var e, t;
          const { lee: a } = this.props,
            o = a.translate.namespace("webapp_personal_info_edition_phone_"),
            _ = (function (e) {
              const t = e.namespace("personal_info_");
              return [
                { label: t("phone_type_mobile"), value: r.PhoneType.PHONE_TYPE_MOBILE },
                { label: t("phone_type_landline"), value: r.PhoneType.PHONE_TYPE_LANDLINE },
                { label: t("phone_type_work_mobile"), value: r.PhoneType.PHONE_TYPE_WORK_MOBILE },
                { label: t("phone_type_work_landline"), value: r.PhoneType.PHONE_TYPE_WORK_LANDLINE },
                { label: t("phone_type_fax"), value: r.PhoneType.PHONE_TYPE_FAX },
                { label: t("phone_type_work_fax"), value: r.PhoneType.PHONE_TYPE_WORK_FAX },
                { label: t("phone_type_any"), value: r.PhoneType.PHONE_TYPE_ANY }
              ];
            })(a.translate),
            b = null != (e = (0, n.find)((0, n.propEq)("value", this.state.values.type), _)) ? e : (0, n.head)(_),
            m = a.globalState.webapp.callingCodes || {},
            y = (function (e, t) {
              const a = h(e, t);
              return Object.keys(t).map((e) => a(r.Country[e]));
            })(a.translate, m),
            P = h(a.translate, m)(this.state.values.localeFormat);
          return (0, s.tZ)(
            l.Fragment,
            null,
            (0, s.tZ)(
              "div",
              { className: c.Z.container },
              (0, s.tZ)(
                "label",
                { className: d.Z.label, sx: { color: "ds.text.neutral.catchy" }, title: o("number_label") },
                o("number_label")
              ),
              (0, s.tZ)(p.Z, { placeholder: P.label, dataName: "localeFormat", options: y, defaultOption: P, onChange: this.handleChange }),
              (0, s.tZ)(i.Z, {
                type: "text",
                placeholder: o("placeholder_no_number"),
                dataName: "number",
                value: this.state.values.number,
                error: this.state.errors.number,
                onChange: this.handleChange
              })
            ),
            (0, s.tZ)(i.Z, {
              type: "text",
              label: o("phonename_label"),
              placeholder: o("placeholder_no_phonename"),
              dataName: "phoneName",
              value: this.state.values.phoneName,
              onChange: this.handleChange
            }),
            (0, s.tZ)(p.Z, {
              label: o("type_label"),
              placeholder: b.label,
              dataName: "type",
              options: _,
              defaultOption: b,
              onChange: this.handleChange
            }),
            (0, s.tZ)(u.M, {
              labelSx: u.e,
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
