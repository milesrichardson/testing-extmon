"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [1875],
  {
    504085: (e, t, a) => {
      a.d(t, { Z: () => h });
      var l = a(696832),
        s = a(876307),
        n = a(526849),
        o = a(383849),
        i = a.n(o),
        r = a(957459);
      var d = a(855541);
      function c(e, t) {
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
                l = c(this.props.options, a);
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
            (t = c(
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
            a = i()("selectContainer--mo5uz0qo56", d.Z[t], {
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
    34383: (e, t, a) => {
      a.r(t), a.d(t, { Connected: () => p });
      var l = a(696832),
        s = a(799852),
        n = a(448430),
        o = a(382706),
        i = a(575257),
        r = a(615446),
        d = a(916390),
        c = a(486816);
      const h = (0, c.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_address"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_address_description"),
          getTitle: (e) => {
            var t;
            return null != (t = e.itemName) ? t : "";
          },
          iconType: r.Tu.address,
          vaultItemType: o.U.Address,
          renderForm: (e, t, a, s) => {
            const n = i.c[e.globalState.locale.country] || i.c.US,
              o = { ...t, localeFormat: t.localeFormat || n };
            return l.createElement(d.k, { lee: e, currentValues: o, signalEditedValues: s, ref: a });
          }
        }),
        p = (e) => {
          const t = (0, s.k)(n.L, "query", { vaultItemTypes: [o.U.Address], ids: [`{${e.match.params.uuid}}`] });
          return l.createElement(h, { ...e, item: t.data?.addressesResult.items[0] });
        };
    },
    916390: (e, t, a) => {
      a.d(t, { k: () => A });
      var l = a(696832),
        s = a(575257),
        n = a(611913),
        o = a(504085),
        i = a(66485),
        r = a(242521),
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
      const h = new Set([s.c.AR, s.c.BE, s.c.CH, s.c.CL, s.c.CO, s.c.DE, s.c.ES, s.c.IT, s.c.NL, s.c.NO, s.c.PE, s.c.PT, s.c.SE, s.c.MX]),
        p = new Set([s.c.AU, s.c.CA, s.c.US]),
        u = new Set([s.c.GB, s.c.IE]),
        m = new Set([s.c.CN, s.c.IN, s.c.KR, s.c.BR]),
        b = new Set([s.c.JP]),
        N = (0, d.Enum)("streetName", "city", "state", "country", "streetNumber", "zipCode"),
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
      var _ = a(718462),
        C = a(167406),
        g = a(799852),
        y = a(133354),
        S = a(448430),
        E = a(382706),
        I = a(488203);
      const T = ({ linkedPhoneId: e, handleChange: t, disabled: a = !1 }) => {
        var s;
        const { translate: n } = (0, I.Z)(),
          i = (0, g.k)(S.L, "query", { vaultItemTypes: [E.U.Phone] });
        if (i.status !== y.rq.Success) return null;
        const r = i.data.phonesResult.items,
          d = [
            { value: "", label: n("webapp_personal_info_edition_address_phone_number_other") },
            ...r.map((e) => ({
              value: e.id,
              label: `${e.itemName} ${e.phoneNumber}`,
              selectedLabel: l.createElement(
                "span",
                null,
                l.createElement("span", { className: "phoneName--IP3BIyXoAF" }, e.itemName),
                " ",
                e.phoneNumber
              )
            }))
          ],
          c = null != (s = d.find((t) => t.value === e)) ? s : d[0];
        return l.createElement(o.Z, {
          label: n("webapp_personal_info_edition_address_phone_number_label"),
          placeholder: "",
          dataName: "linkedPhoneId",
          defaultOption: c,
          options: d,
          onChange: t,
          disabled: a
        });
      };
      var f = a(89600);
      class A extends r.ZP {
        isFormValid() {
          return this.validateValues({ streetName: r.UE });
        }
        buildCountryOptionList() {
          return Object.keys(s.c)
            .filter((e) => e !== s.c[s.c.NO_TYPE] && e !== s.c[s.c.UNIVERSAL])
            .map((e) => ({ value: s.c[e], label: (0, _.go)(this.props.lee.translate, s.c[e]) }))
            .sort((e, t) => e.label.localeCompare(t.label, this.props.lee.translate.getLocale()));
        }
        buildStateOptionListForCountry(e) {
          var t, a;
          const l = null != (a = (null != (t = this.props.lee.globalState.webapp.geographicStates) ? t : {})[e]) ? a : {};
          return Object.keys(l)
            .map((e) => ({ value: e, label: l[e].name }))
            .sort((e, t) => (e.label < t.label ? -1 : 1));
        }
        renderStreetName(e) {
          const { shouldShowTrialDiscontinuedDialog: t } = this.context;
          return l.createElement(n.Z, {
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
          return l.createElement(n.Z, {
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
          return l.createElement(n.Z, {
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
            s = null != (t = a.find((e) => e.value === this.state.values.state)) ? t : a[0],
            { shouldShowTrialDiscontinuedDialog: n } = this.context;
          return l.createElement(o.Z, {
            key: `states_${this.state.values.localeFormat}`,
            label: v(this.state.values.localeFormat) === c.UNITEDKINGDOM ? e("county_label") : e("state_label"),
            dataName: "state",
            placeholder: this.state.values.state,
            defaultOption: s,
            options: a,
            onChange: this.handleChange,
            disabled: !!n
          });
        }
        renderCountry(e) {
          var t;
          const a = this.buildCountryOptionList(),
            s = null != (t = a.find((e) => e.value === this.state.values.localeFormat)) ? t : a[0],
            { shouldShowTrialDiscontinuedDialog: n } = this.context;
          return l.createElement(o.Z, {
            key: "country",
            label: e("country_label"),
            placeholder: s.label,
            dataName: "localeFormat",
            defaultOption: s,
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
          return l.createElement(n.Z, {
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
              [N.streetName]: this.renderStreetName,
              [N.city]: this.renderCity,
              [N.country]: this.renderCountry,
              [N.zipCode]: this.renderZipCode,
              [N.streetNumber]: this.renderStreetNumber,
              [N.state]: this.renderState
            };
          return ((e) => {
            const t = v(e);
            return t === c.NORTHAMERICA
              ? [N.streetName, N.city, N.state, N.zipCode, N.country]
              : t === c.UNITEDKINGDOM
              ? [N.streetNumber, N.streetName, N.city, N.state, N.zipCode, N.country]
              : t === c.ASIA
              ? [N.streetName, N.city, N.zipCode, N.country]
              : t === c.JAPAN
              ? [N.zipCode, N.city, N.streetName, N.country]
              : t === c.WITHSTATE
              ? [N.streetName, N.zipCode, N.city, N.state, N.country]
              : [N.streetName, N.zipCode, N.city, N.country];
          })(this.state.values.localeFormat).map((a) => (a in t ? t[a].call(this, e) : null));
        }
        render() {
          var e;
          const t = this.props.lee.translate.namespace("webapp_personal_info_edition_address_"),
            { shouldShowTrialDiscontinuedDialog: a } = this.context;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("div", { className: f.Z.containerBlock }, this.renderLocalizedFields()),
            l.createElement(
              "div",
              { className: f.Z.containerBlock },
              l.createElement(n.Z, {
                type: "text",
                label: t("name_label"),
                placeholder: t("placeholder_no_name"),
                dataName: "itemName",
                value: this.state.values.itemName,
                onChange: this.handleChange,
                disabled: !!a
              }),
              l.createElement(C.M, {
                labelSx: C.e,
                spaceId: null != (e = this.state.values.spaceId) ? e : "",
                onChange: (e) => this.handleChange(e, "spaceId"),
                disabled: !!a
              })
            ),
            l.createElement(
              "div",
              { className: f.Z.containerBlock },
              l.createElement(n.Z, {
                type: "text",
                label: t("receiver_label"),
                placeholder: t("placeholder_no_receiver"),
                dataName: "receiver",
                value: this.state.values.receiver,
                onChange: this.handleChange,
                disabled: !!a
              }),
              l.createElement(
                "div",
                { className: f.Z.horizontalContainerBlock },
                l.createElement(n.Z, {
                  type: "text",
                  label: t("building_label"),
                  placeholder: t("placeholder_no_building"),
                  dataName: "building",
                  value: this.state.values.building,
                  onChange: this.handleChange,
                  disabled: !!a
                }),
                l.createElement(
                  "div",
                  { className: f.Z.secondItem },
                  l.createElement(n.Z, {
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
              l.createElement(
                "div",
                { className: f.Z.horizontalContainerBlock },
                l.createElement(n.Z, {
                  type: "text",
                  label: t("door_label"),
                  placeholder: t("placeholder_no_door"),
                  dataName: "door",
                  value: this.state.values.door,
                  onChange: this.handleChange,
                  disabled: !!a
                }),
                l.createElement(
                  "div",
                  { className: f.Z.secondItem },
                  l.createElement(n.Z, {
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
            l.createElement(
              "div",
              { className: f.Z.containerBlock },
              l.createElement(T, { linkedPhoneId: this.state.values.linkedPhoneId, handleChange: this.handleChange, disabled: !!a })
            )
          );
        }
      }
      A.contextType = i.gD;
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
