"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8903],
  {
    611913: (e, t, a) => {
      a.d(t, { Z: () => b });
      var s = a(696832),
        l = a(554712),
        n = a(383849),
        o = a.n(n),
        r = a(526849),
        i = a(957459),
        d = a(158549),
        c = a.n(d),
        h = a(876307),
        p = a(573630);
      const u = {
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
      class b extends s.Component {
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
            (0, r.equals)(this.props.value, e.value) &&
            (0, r.equals)(this.props.error, e.error) &&
            (0, r.equals)(this.props.mask, e.mask) &&
            (0, r.equals)(this.props.label, e.label) &&
            (0, r.equals)(this.state.selectionRangeStart, t.selectionRangeStart) &&
            (0, r.equals)(this.state.selectionRangeEnd, t.selectionRangeEnd)
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
          return (0, h.tZ)(l.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: u.textarea,
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
              className: o()(u.input, { [u.error]: Boolean(this.props.error) }),
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
            ? (0, h.tZ)(
                c(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, h.tZ)("input", { ...a, ...e })
              )
            : (0, h.tZ)(
                "div",
                { className: u.inputRow },
                (0, h.tZ)("input", { ...a, ...t }),
                (0, h.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: u.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, h.tZ)(
            "div",
            { className: o()(u.container, this.props.multiLine ? u.containerMultiLine : null) },
            this.props.label &&
              (0, h.tZ)(
                "label",
                { className: u.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, h.tZ)("span", { className: u.text, title: this.props.label }, this.props.label)
              ),
            (0, h.tZ)(
              p.Z,
              { tooltipText: e, className: o()(u.value, { [u.placeholder]: !this.props.value, [u.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      b.defaultProps = { maskProps: { maskChar: "" } };
    },
    504085: (e, t, a) => {
      a.d(t, { Z: () => h });
      var s = a(696832),
        l = a(876307),
        n = a(526849),
        o = a(383849),
        r = a.n(o),
        i = a(957459);
      var d = a(855541);
      function c(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class h extends s.Component {
        constructor(e) {
          super(e),
            (this.select = s.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                s = c(this.props.options, a);
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
            (t = c(
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
            a = r()("selectContainer--mo5uz0qo56", d.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            s = r()("selector--fgNHKzkAC3", this.props.classNames);
          let o;
          this.state.optionSelected
            ? (o = this.state.optionSelected.value)
            : this.props.options.length &&
              (o = null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value);
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
                this.props.options.map((e) => (0, l.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    242521: (e, t, a) => {
      a.d(t, { Jh: () => r, UE: () => n, ZP: () => i });
      var s = a(696832),
        l = a(526849);
      const n = (0, l.compose)(l.not, l.isEmpty, l.trim, (0, l.defaultTo)("")),
        o = /.+@.+\..+/,
        r = (e) => o.test(e.trim());
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
    18903: (e, t, a) => {
      a.r(t), a.d(t, { AddressAddPanel: () => i });
      var s = a(696832),
        l = a(575257),
        n = a(382706),
        o = a(615446),
        r = a(916390);
      const i = (0, a(53748).B)({
        iconType: o.Tu.address,
        vaultItemType: n.U.Address,
        renderForm: (e, t, a, n) => {
          const o = {
            building: "",
            city: "",
            digitCode: "",
            door: "",
            floor: "",
            itemName: "",
            linkedPhoneId: "",
            localeFormat: l.c[e.globalState.locale.country] || l.c.US,
            receiver: "",
            spaceId: n,
            stairs: "",
            state: "",
            stateNumber: "",
            streetName: "",
            streetNumber: "",
            zipCode: ""
          };
          return s.createElement(r.k, { lee: e, currentValues: o, signalEditedValues: a, ref: t });
        }
      });
    },
    916390: (e, t, a) => {
      a.d(t, { k: () => T });
      var s = a(696832),
        l = a(575257),
        n = a(611913),
        o = a(504085),
        r = a(66485),
        i = a(242521),
        d = a(50415);
      let c = (function (e) {
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
      const h = new Set([l.c.AR, l.c.BE, l.c.CH, l.c.CL, l.c.CO, l.c.DE, l.c.ES, l.c.IT, l.c.NL, l.c.NO, l.c.PE, l.c.PT, l.c.SE, l.c.MX]),
        p = new Set([l.c.AU, l.c.CA, l.c.US]),
        u = new Set([l.c.GB, l.c.IE]),
        m = new Set([l.c.CN, l.c.IN, l.c.KR, l.c.BR]),
        b = new Set([l.c.JP]),
        g = (0, d.Enum)("streetName", "city", "state", "country", "streetNumber", "zipCode"),
        v = (e) =>
          h.has(e)
            ? c.WITHSTATE
            : p.has(e)
            ? c.NORTHAMERICA
            : u.has(e)
            ? c.UNITEDKINGDOM
            : m.has(e)
            ? c.ASIA
            : b.has(e)
            ? c.JAPAN
            : c.DEFAULT;
      var C = a(718462),
        N = a(167406),
        y = a(799852),
        I = a(133354),
        _ = a(448430),
        E = a(382706),
        S = a(488203);
      const f = ({ linkedPhoneId: e, handleChange: t, disabled: a = !1 }) => {
        var l;
        const { translate: n } = (0, S.Z)(),
          r = (0, y.k)(_.L, "query", { vaultItemTypes: [E.U.Phone] });
        if (r.status !== I.rq.Success) return null;
        const i = r.data.phonesResult.items,
          d = [
            { value: "", label: n("webapp_personal_info_edition_address_phone_number_other") },
            ...i.map((e) => ({
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
          c = null != (l = d.find((t) => t.value === e)) ? l : d[0];
        return s.createElement(o.Z, {
          label: n("webapp_personal_info_edition_address_phone_number_label"),
          placeholder: "",
          dataName: "linkedPhoneId",
          defaultOption: c,
          options: d,
          onChange: t,
          disabled: a
        });
      };
      var Z = a(89600);
      class T extends i.ZP {
        isFormValid() {
          return this.validateValues({ streetName: i.UE });
        }
        buildCountryOptionList() {
          return Object.keys(l.c)
            .filter((e) => e !== l.c[l.c.NO_TYPE] && e !== l.c[l.c.UNIVERSAL])
            .map((e) => ({ value: l.c[e], label: (0, C.go)(this.props.lee.translate, l.c[e]) }))
            .sort((e, t) => e.label.localeCompare(t.label, this.props.lee.translate.getLocale()));
        }
        buildStateOptionListForCountry(e) {
          var t, a;
          const s = null != (a = (null != (t = this.props.lee.globalState.webapp.geographicStates) ? t : {})[e]) ? a : {};
          return Object.keys(s)
            .map((e) => ({ value: e, label: s[e].name }))
            .sort((e, t) => (e.label < t.label ? -1 : 1));
        }
        renderStreetName(e) {
          const { shouldShowTrialDiscontinuedDialog: t } = this.context;
          return s.createElement(n.Z, {
            key: "streetName",
            type: "text",
            label: e("full_address_label"),
            placeholder: e("placeholder_no_full_address"),
            dataName: "streetName",
            value: this.state.values.streetName,
            onChange: this.handleChange,
            error: this.state.errors.streetName,
            disabled: !!t
          });
        }
        renderZipCode(e) {
          const { shouldShowTrialDiscontinuedDialog: t } = this.context;
          return s.createElement(n.Z, {
            key: "zipCode",
            type: "text",
            label: e("zip_code_label"),
            placeholder: e("placeholder_no_zip_code"),
            dataName: "zipCode",
            value: this.state.values.zipCode,
            onChange: this.handleChange,
            disabled: !!t
          });
        }
        renderCity(e) {
          const { shouldShowTrialDiscontinuedDialog: t } = this.context;
          return s.createElement(n.Z, {
            key: "city",
            type: "text",
            label: e("city_label"),
            placeholder: e("placeholder_no_city"),
            dataName: "city",
            value: this.state.values.city,
            onChange: this.handleChange,
            disabled: !!t
          });
        }
        renderState(e) {
          var t;
          const a = this.buildStateOptionListForCountry(this.state.values.localeFormat),
            l = null != (t = a.find((e) => e.value === this.state.values.state)) ? t : a[0],
            { shouldShowTrialDiscontinuedDialog: n } = this.context;
          return s.createElement(o.Z, {
            key: `states_${this.state.values.localeFormat}`,
            label: v(this.state.values.localeFormat) === c.UNITEDKINGDOM ? e("county_label") : e("state_label"),
            dataName: "state",
            placeholder: this.state.values.state,
            defaultOption: l,
            options: a,
            onChange: this.handleChange,
            disabled: !!n
          });
        }
        renderCountry(e) {
          var t;
          const a = this.buildCountryOptionList(),
            l = null != (t = a.find((e) => e.value === this.state.values.localeFormat)) ? t : a[0],
            { shouldShowTrialDiscontinuedDialog: n } = this.context;
          return s.createElement(o.Z, {
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
            },
            disabled: !!n
          });
        }
        renderStreetNumber(e) {
          const { shouldShowTrialDiscontinuedDialog: t } = this.context;
          return s.createElement(n.Z, {
            key: "streetNumber",
            type: "text",
            label: e("street_number_label"),
            placeholder: e("placeholder_no_street_number"),
            dataName: "streetNumber",
            value: this.state.values.streetNumber,
            onChange: this.handleChange,
            disabled: !!t
          });
        }
        renderLocalizedFields() {
          const e = this.props.lee.translate.namespace("webapp_personal_info_edition_address_"),
            t = {
              [g.streetName]: this.renderStreetName,
              [g.city]: this.renderCity,
              [g.country]: this.renderCountry,
              [g.zipCode]: this.renderZipCode,
              [g.streetNumber]: this.renderStreetNumber,
              [g.state]: this.renderState
            };
          return ((e) => {
            const t = v(e);
            return t === c.NORTHAMERICA
              ? [g.streetName, g.city, g.state, g.zipCode, g.country]
              : t === c.UNITEDKINGDOM
              ? [g.streetNumber, g.streetName, g.city, g.state, g.zipCode, g.country]
              : t === c.ASIA
              ? [g.streetName, g.city, g.zipCode, g.country]
              : t === c.JAPAN
              ? [g.zipCode, g.city, g.streetName, g.country]
              : t === c.WITHSTATE
              ? [g.streetName, g.zipCode, g.city, g.state, g.country]
              : [g.streetName, g.zipCode, g.city, g.country];
          })(this.state.values.localeFormat).map((a) => (a in t ? t[a].call(this, e) : null));
        }
        render() {
          var e;
          const t = this.props.lee.translate.namespace("webapp_personal_info_edition_address_"),
            { shouldShowTrialDiscontinuedDialog: a } = this.context;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement("div", { className: Z.Z.containerBlock }, this.renderLocalizedFields()),
            s.createElement(
              "div",
              { className: Z.Z.containerBlock },
              s.createElement(n.Z, {
                type: "text",
                label: t("name_label"),
                placeholder: t("placeholder_no_name"),
                dataName: "itemName",
                value: this.state.values.itemName,
                onChange: this.handleChange,
                disabled: !!a
              }),
              s.createElement(N.M, {
                labelSx: N.e,
                spaceId: null != (e = this.state.values.spaceId) ? e : "",
                onChange: (e) => this.handleChange(e, "spaceId"),
                disabled: !!a
              })
            ),
            s.createElement(
              "div",
              { className: Z.Z.containerBlock },
              s.createElement(n.Z, {
                type: "text",
                label: t("receiver_label"),
                placeholder: t("placeholder_no_receiver"),
                dataName: "receiver",
                value: this.state.values.receiver,
                onChange: this.handleChange,
                disabled: !!a
              }),
              s.createElement(
                "div",
                { className: Z.Z.horizontalContainerBlock },
                s.createElement(n.Z, {
                  type: "text",
                  label: t("building_label"),
                  placeholder: t("placeholder_no_building"),
                  dataName: "building",
                  value: this.state.values.building,
                  onChange: this.handleChange,
                  disabled: !!a
                }),
                s.createElement(
                  "div",
                  { className: Z.Z.secondItem },
                  s.createElement(n.Z, {
                    type: "text",
                    label: t("floor_label"),
                    placeholder: t("placeholder_no_floor"),
                    dataName: "floor",
                    value: this.state.values.floor,
                    onChange: this.handleChange,
                    disabled: !!a
                  })
                )
              ),
              s.createElement(
                "div",
                { className: Z.Z.horizontalContainerBlock },
                s.createElement(n.Z, {
                  type: "text",
                  label: t("door_label"),
                  placeholder: t("placeholder_no_door"),
                  dataName: "door",
                  value: this.state.values.door,
                  onChange: this.handleChange,
                  disabled: !!a
                }),
                s.createElement(
                  "div",
                  { className: Z.Z.secondItem },
                  s.createElement(n.Z, {
                    type: "text",
                    label: t("digit_code_label"),
                    placeholder: t("placeholder_no_digit_code"),
                    dataName: "digitCode",
                    value: this.state.values.digitCode,
                    onChange: this.handleChange,
                    disabled: !!a
                  })
                )
              )
            ),
            s.createElement(
              "div",
              { className: Z.Z.containerBlock },
              s.createElement(f, { linkedPhoneId: this.state.values.linkedPhoneId, handleChange: this.handleChange, disabled: !!a })
            )
          );
        }
      }
      T.contextType = r.gD;
    },
    53748: (e, t, a) => {
      a.d(t, { B: () => I });
      var s = a(696832),
        l = a(593039),
        n = a(876307),
        o = a(962899),
        r = a(482598),
        i = a(448430),
        d = a(382706),
        c = a(692077),
        h = a(739649),
        p = a(86498),
        u = a(488203),
        m = a(45272),
        b = a(66485),
        g = a(376452),
        v = a(615446),
        C = a(718462),
        N = a(418402),
        y = a.n(N);
      function I(e) {
        const { renderForm: t, vaultItemType: a, iconType: N } = e;
        return ({ lee: e }) => {
          const { translate: I } = (0, u.Z)(),
            { routes: _ } = (0, c.Xo)(),
            E = (0, p.V)(),
            { createVaultItem: S } = (0, r.u)(i.L),
            f = (0, s.useRef)(null),
            { openDialog: Z, shouldShowTrialDiscontinuedDialog: T } = (0, b.yp)(),
            [w, x] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            const e = {
              [d.U.Address]: l.PageView.ItemAddressCreate,
              [d.U.Company]: l.PageView.ItemCompanyCreate,
              [d.U.Email]: l.PageView.ItemEmailCreate,
              [d.U.Identity]: l.PageView.ItemIdentityCreate,
              [d.U.Phone]: l.PageView.ItemPhoneCreate,
              [d.U.Website]: l.PageView.ItemWebsiteCreate
            };
            (0, m.Nc)(e[a]);
          }, []),
            (0, s.useEffect)(() => {
              T && Z();
            }, [T]);
          const k = () => {
              (0, m.Nc)(l.PageView.ItemPersonalInfoList), (0, c.uX)(_.userPersonalInfo);
            },
            A = (0, h.B)(e.globalState),
            D = (0, n.tZ)(v.ZP, { iconSize: v.Jh.headerEditPanelIcon, iconType: N }),
            F = (0, C.gV)(I, a);
          return (0, n.tZ)(
            g.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: w,
              onNavigateOut: k,
              onSubmit: async () => {
                Boolean(f.current?.isFormValid()) &&
                  (await (async () => {
                    const e = f.current?.getValues();
                    e &&
                      "success" !== (await S({ vaultItemType: a, content: e })).tag &&
                      E.showAlert(I("_common_generic_error"), o.BLW.ERROR);
                  })(),
                  k());
              },
              formId: "add_personalinfo_panel",
              header: (0, n.tZ)(g.V9, { icon: D, iconBackgroundColor: y()["--dash-green-00"], title: F })
            },
            t(e, f, () => x(!0), A)
          );
        };
      }
    },
    855541: (e, t, a) => {
      a.d(t, { Z: () => s });
      const s = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    },
    89600: (e, t, a) => {
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
