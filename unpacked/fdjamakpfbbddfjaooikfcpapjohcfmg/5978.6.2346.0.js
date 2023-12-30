"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5978],
  {
    313661: (e, t, a) => {
      a.d(t, { Z: () => C });
      var s = a(696832),
        l = a(554712),
        n = a(383849),
        r = a.n(n),
        o = a(526849),
        i = a(769183),
        d = a(317894),
        h = a.n(d),
        p = a(142897),
        u = a(654),
        c = a(83126);
      const m = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class C extends s.Component {
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
          return (0, p.tZ)(l.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: c.Z.textarea,
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
              className: r()(c.Z.input, { [c.Z.error]: Boolean(this.props.error) }),
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
            ? (0, p.tZ)(
                h(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, p.tZ)("input", { ...a, ...e })
              )
            : (0, p.tZ)(
                "div",
                { className: c.Z.inputRow },
                (0, p.tZ)("input", { ...a, ...t }),
                (0, p.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: c.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, p.tZ)(
            "div",
            { className: r()(c.Z.container, this.props.multiLine ? c.Z.containerMultiLine : null) },
            this.props.label &&
              (0, p.tZ)(
                "label",
                { className: c.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, p.tZ)("span", { className: c.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, p.tZ)(
              u.Z,
              {
                tooltipText: e,
                className: r()(c.Z.value, { [c.Z.placeholder]: !this.props.value, [c.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      C.defaultProps = { maskProps: { maskChar: "" } };
    },
    59896: (e, t, a) => {
      a.d(t, { Z: () => p });
      var s = a(696832),
        l = a(142897),
        n = a(526849),
        r = a(383849),
        o = a.n(r),
        i = a(769183);
      var d = a(255990);
      function h(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class p extends s.Component {
        constructor(e) {
          super(e),
            (this.select = s.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                s = h(this.props.options, a);
              this.setState({ optionSelected: s }), this.props.onChange && this.props.onChange(e);
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
            s = o()("selector--fgNHKzkAC3", this.props.classNames);
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
              { className: a },
              (0, l.tZ)(
                "div",
                { className: s },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, l.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, l.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, i)
              ),
              (0, l.tZ)(
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
                this.props.options.map((e) => (0, l.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    919551: (e, t, a) => {
      a.d(t, { Jh: () => o, UE: () => n, ZP: () => i });
      var s = a(696832),
        l = a(526849);
      const n = (0, l.compose)(l.not, l.isEmpty, l.trim, (0, l.defaultTo)("")),
        r = /.+@.+\..+/,
        o = (e) => r.test(e.trim());
      class i extends s.Component {
        constructor(e) {
          super(e),
            (this.setInternalState = (e) => {
              this.setState({ internal: { ...this.state.internal, ...e } });
            }),
            (this.setUpdatedValues = (e) => {
              const { signalEditedValues: t, onValuesUpdated: a } = this.props,
                s = { ...this.state.values, ...e };
              this.setState({ values: s }, () => {
                t && t(this.hasFormBeenEdited()), a && a(s);
              });
            }),
            (this.handleChange = (e, t = "") => {
              if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
              const a = e?.target ? { [e.target.dataset.name]: e.target.value } : { [t]: e };
              this.setUpdatedValues(a);
            }),
            (this.handleChanges = (e) => {
              this.setUpdatedValues(e);
            }),
            (this.validateValues = (e) => {
              if (0 === Object.keys(e).length) return !0;
              const t = (0, l.reduce)(
                  (t, a) => ((t[a] = e[a] ? (0, l.compose)(l.not, e[a]) : () => !1), t),
                  {},
                  Object.keys(this.state.values)
                ),
                a = (0, l.evolve)(t, this.state.values);
              return this.setState({ errors: a }), (0, l.all)((0, l.equals)(!1), (0, l.values)(a));
            }),
            (this.hasFormBeenEdited = () => !(0, l.equals)(this.state.values, this.props.currentValues)),
            (this.getValues = () => this.state.values);
          const t = Object.keys(e.currentValues).reduce((e, t) => ((e[t] = !1), e), {});
          this.state = { internal: {}, values: e.currentValues, errors: t };
        }
        componentDidUpdate(e) {
          (0, l.equals)(this.props.currentValues, e.currentValues) || this.setState({ values: this.props.currentValues });
        }
      }
    },
    635978: (e, t, a) => {
      a.d(t, { k: () => I });
      var s = a(696832),
        l = a(453576),
        n = a(313661),
        r = a(59896),
        o = a(919551),
        i = a(50415);
      let d = (function (e) {
        return (
          (e[(e.DEFAULT = 0)] = "DEFAULT"),
          (e[(e.WITHSTATE = 1)] = "WITHSTATE"),
          (e[(e.NORTHAMERICA = 2)] = "NORTHAMERICA"),
          (e[(e.UNITEDKINGDOM = 3)] = "UNITEDKINGDOM"),
          (e[(e.ASIA = 4)] = "ASIA"),
          (e[(e.JAPAN = 5)] = "JAPAN"),
          e
        );
      })({});
      const h = new Set([
          l.Country.AR,
          l.Country.BE,
          l.Country.CH,
          l.Country.CL,
          l.Country.CO,
          l.Country.DE,
          l.Country.ES,
          l.Country.IT,
          l.Country.NL,
          l.Country.NO,
          l.Country.PE,
          l.Country.PT,
          l.Country.SE,
          l.Country.MX
        ]),
        p = new Set([l.Country.AU, l.Country.CA, l.Country.US]),
        u = new Set([l.Country.GB, l.Country.IE]),
        c = new Set([l.Country.CN, l.Country.IN, l.Country.KR, l.Country.BR]),
        m = new Set([l.Country.JP]),
        C = (0, i.Enum)("StreetName", "City", "State", "Country", "StreetNumber", "ZipCode"),
        b = (e) =>
          h.has(e)
            ? d.WITHSTATE
            : p.has(e)
            ? d.NORTHAMERICA
            : u.has(e)
            ? d.UNITEDKINGDOM
            : c.has(e)
            ? d.ASIA
            : m.has(e)
            ? d.JAPAN
            : d.DEFAULT;
      var v = a(933741),
        y = a(488856),
        g = a(839434),
        N = a(799852),
        _ = a(133354),
        Z = a(448430),
        S = a(382706),
        E = a(201389);
      const f = ({ linkedPhoneId: e, handleChange: t }) => {
        var a;
        const { translate: l } = (0, E.Z)(),
          n = (0, N.k)(Z.L, "query", { vaultItemTypes: [S.U.Phone] });
        if (n.status !== _.rq.Success) return null;
        const o = n.data.phonesResult.items,
          i = [
            { value: "", label: l("webapp_personal_info_edition_address_phone_number_other") },
            ...o.map((e) => ({
              value: e.id,
              label: `${e.itemName} ${e.phoneNumber}`,
              selectedLabel: s.createElement(
                "span",
                null,
                s.createElement("span", { className: "phoneName--IP3BIyXoAF" }, e.itemName),
                " ",
                e.phoneNumber
              )
            }))
          ],
          d = null != (a = i.find((t) => t.value === e)) ? a : i[0];
        return s.createElement(r.Z, {
          label: l("webapp_personal_info_edition_address_phone_number_label"),
          placeholder: "",
          dataName: "linkedPhone",
          defaultOption: d,
          options: i,
          onChange: t
        });
      };
      class I extends o.ZP {
        isFormValid() {
          return this.validateValues({ streetName: o.UE });
        }
        buildCountryOptionList() {
          return Object.keys(l.Country)
            .filter((e) => e !== l.Country[l.Country.NO_TYPE] && e !== l.Country[l.Country.UNIVERSAL])
            .map((e) => ({ value: l.Country[e], label: (0, v.go)(this.props.lee.translate, l.Country[e]) }))
            .sort((e, t) => e.label.localeCompare(t.label, this.props.lee.translate.getLocale()));
        }
        buildStateOptionListForCountry(e) {
          var t, a;
          const s = null != (a = (null != (t = this.props.lee.globalState.webapp.geographicStates) ? t : {})[e]) ? a : {};
          return Object.keys(s)
            .map((e) => ({ value: e, label: s[e].name }))
            .sort((e, t) => (e.label < t.label ? -1 : 1));
        }
        renderAddressFull(e) {
          return s.createElement(n.Z, {
            key: "streetName",
            type: "text",
            label: e("full_address_label"),
            placeholder: e("placeholder_no_full_address"),
            dataName: "streetName",
            value: this.state.values.streetName,
            onChange: this.handleChange,
            error: this.state.errors.streetName
          });
        }
        renderZipCode(e) {
          return s.createElement(n.Z, {
            key: "zipCode",
            type: "text",
            label: e("zip_code_label"),
            placeholder: e("placeholder_no_zip_code"),
            dataName: "zipCode",
            value: this.state.values.zipCode,
            onChange: this.handleChange
          });
        }
        renderCity(e) {
          return s.createElement(n.Z, {
            key: "city",
            type: "text",
            label: e("city_label"),
            placeholder: e("placeholder_no_city"),
            dataName: "city",
            value: this.state.values.city,
            onChange: this.handleChange
          });
        }
        renderState(e) {
          var t;
          const a = this.buildStateOptionListForCountry(this.state.values.localeFormat),
            l = null != (t = a.find((e) => e.value === this.state.values.state)) ? t : a[0];
          return s.createElement(r.Z, {
            key: `states_${this.state.values.localeFormat}`,
            label: b(this.state.values.localeFormat) === d.UNITEDKINGDOM ? e("county_label") : e("state_label"),
            dataName: "state",
            placeholder: this.state.values.state,
            defaultOption: l,
            options: a,
            onChange: this.handleChange
          });
        }
        renderCountry(e) {
          var t;
          const a = this.buildCountryOptionList(),
            l = null != (t = a.find((e) => e.value === this.state.values.localeFormat)) ? t : a[0];
          return s.createElement(r.Z, {
            key: "country",
            label: e("country_label"),
            placeholder: l.label,
            dataName: "localeFormat",
            defaultOption: l,
            options: a,
            onChange: (e) => {
              const t = e.target.value,
                a = this.buildStateOptionListForCountry(t);
              this.handleChanges({ localeFormat: t, state: a && Object.keys(a).length ? Object.keys(a)[0] : "" });
            }
          });
        }
        renderStreetNumber(e) {
          return s.createElement(n.Z, {
            key: "streetNumber",
            type: "text",
            label: e("street_number_label"),
            placeholder: e("placeholder_no_street_number"),
            dataName: "streetNumber",
            value: this.state.values.streetNumber,
            onChange: this.handleChange
          });
        }
        renderLocalizedFields() {
          const e = this.props.lee.translate.namespace("webapp_personal_info_edition_address_"),
            t = {
              [C.AddressFull]: this.renderAddressFull,
              [C.City]: this.renderCity,
              [C.Country]: this.renderCountry,
              [C.ZipCode]: this.renderZipCode,
              [C.StreetNumber]: this.renderStreetNumber,
              [C.State]: this.renderState
            };
          return ((e) => {
            const t = b(e);
            return t === d.NORTHAMERICA
              ? [C.AddressFull, C.City, C.State, C.ZipCode, C.Country]
              : t === d.UNITEDKINGDOM
              ? [C.StreetNumber, C.AddressFull, C.City, C.State, C.ZipCode, C.Country]
              : t === d.ASIA
              ? [C.AddressFull, C.City, C.ZipCode, C.Country]
              : t === d.JAPAN
              ? [C.ZipCode, C.City, C.AddressFull, C.Country]
              : t === d.WITHSTATE
              ? [C.AddressFull, C.ZipCode, C.City, C.State, C.Country]
              : [C.AddressFull, C.ZipCode, C.City, C.Country];
          })(this.state.values.localeFormat).map((a) => (a in t ? t[a].call(this, e) : null));
        }
        render() {
          var e;
          const t = this.props.lee.translate.namespace("webapp_personal_info_edition_address_");
          return s.createElement(
            s.Fragment,
            null,
            s.createElement("div", { className: y.Z.containerBlock }, this.renderLocalizedFields()),
            s.createElement(
              "div",
              { className: y.Z.containerBlock },
              s.createElement(n.Z, {
                type: "text",
                label: t("name_label"),
                placeholder: t("placeholder_no_name"),
                dataName: "addressName",
                value: this.state.values.addressName,
                onChange: this.handleChange
              }),
              s.createElement(g.M, {
                labelSx: g.e,
                spaceId: null != (e = this.state.values.spaceId) ? e : "",
                onChange: (e) => this.handleChange(e, "spaceId")
              })
            ),
            s.createElement(
              "div",
              { className: y.Z.containerBlock },
              s.createElement(n.Z, {
                type: "text",
                label: t("receiver_label"),
                placeholder: t("placeholder_no_receiver"),
                dataName: "receiver",
                value: this.state.values.receiver,
                onChange: this.handleChange
              }),
              s.createElement(
                "div",
                { className: y.Z.horizontalContainerBlock },
                s.createElement(n.Z, {
                  type: "text",
                  label: t("building_label"),
                  placeholder: t("placeholder_no_building"),
                  dataName: "building",
                  value: this.state.values.building,
                  onChange: this.handleChange
                }),
                s.createElement(
                  "div",
                  { className: y.Z.secondItem },
                  s.createElement(n.Z, {
                    type: "text",
                    label: t("floor_label"),
                    placeholder: t("placeholder_no_floor"),
                    dataName: "floor",
                    value: this.state.values.floor,
                    onChange: this.handleChange
                  })
                )
              ),
              s.createElement(
                "div",
                { className: y.Z.horizontalContainerBlock },
                s.createElement(n.Z, {
                  type: "text",
                  label: t("door_label"),
                  placeholder: t("placeholder_no_door"),
                  dataName: "door",
                  value: this.state.values.door,
                  onChange: this.handleChange
                }),
                s.createElement(
                  "div",
                  { className: y.Z.secondItem },
                  s.createElement(n.Z, {
                    type: "text",
                    label: t("digit_code_label"),
                    placeholder: t("placeholder_no_digit_code"),
                    dataName: "digitCode",
                    value: this.state.values.digitCode,
                    onChange: this.handleChange
                  })
                )
              )
            ),
            s.createElement(
              "div",
              { className: y.Z.containerBlock },
              s.createElement(f, { linkedPhoneId: this.state.values.linkedPhone, handleChange: this.handleChange })
            )
          );
        }
      }
    },
    83126: (e, t, a) => {
      a.d(t, { Z: () => s });
      const s = {
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
      a.d(t, { Z: () => s });
      const s = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    },
    488856: (e, t, a) => {
      a.d(t, { Z: () => s });
      const s = {
        container: "container--BvfulnQcuP",
        containerBlock: "containerBlock--lIB_8rMAqf",
        horizontalContainerBlock: "horizontalContainerBlock--XzyL0HxXte",
        secondItem: "secondItem--YxYGi1WTY5"
      };
    }
  }
]);
