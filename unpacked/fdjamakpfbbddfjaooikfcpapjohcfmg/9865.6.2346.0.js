"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9865],
  {
    313661: (e, t, s) => {
      s.d(t, { Z: () => g });
      var i = s(696832),
        a = s(554712),
        n = s(383849),
        o = s.n(n),
        l = s(526849),
        r = s(769183),
        d = s(317894),
        p = s.n(d),
        h = s(142897),
        c = s(654),
        u = s(83126);
      const m = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class g extends i.Component {
        constructor(e) {
          super(e),
            (this.field = void 0),
            (this.handleChange = (e) => {
              this.setState({ selectionRangeStart: e.target.selectionStart, selectionRangeEnd: e.target.selectionEnd }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.state = { fieldHtmlId: (0, r.Z)(), selectionRangeStart: null, selectionRangeEnd: null });
        }
        componentDidUpdate() {
          null !== this.state.selectionRangeStart &&
            null !== this.state.selectionRangeEnd &&
            this.field.setSelectionRange(this.state.selectionRangeStart, this.state.selectionRangeEnd);
        }
        shouldComponentUpdate(e, t) {
          return !(
            (0, l.equals)(this.props.value, e.value) &&
            (0, l.equals)(this.props.error, e.error) &&
            (0, l.equals)(this.props.mask, e.mask) &&
            (0, l.equals)(this.props.label, e.label) &&
            (0, l.equals)(this.state.selectionRangeStart, t.selectionRangeStart) &&
            (0, l.equals)(this.state.selectionRangeEnd, t.selectionRangeEnd)
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
          return (0, h.tZ)(a.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: u.Z.textarea,
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
            s = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: o()(u.Z.input, { [u.Z.error]: Boolean(this.props.error) }),
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
                p(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, h.tZ)("input", { ...s, ...e })
              )
            : (0, h.tZ)(
                "div",
                { className: u.Z.inputRow },
                (0, h.tZ)("input", { ...s, ...t }),
                (0, h.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: u.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, h.tZ)(
            "div",
            { className: o()(u.Z.container, this.props.multiLine ? u.Z.containerMultiLine : null) },
            this.props.label &&
              (0, h.tZ)(
                "label",
                { className: u.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, h.tZ)("span", { className: u.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, h.tZ)(
              c.Z,
              {
                tooltipText: e,
                className: o()(u.Z.value, { [u.Z.placeholder]: !this.props.value, [u.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    405231: (e, t, s) => {
      s.d(t, { s: () => m });
      var i = s(696832),
        a = s(142897),
        n = s(482598),
        o = s(133354),
        l = s(448430),
        r = s(201389);
      let d = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var p = s(151796);
      const h = ({ reason: e, translations: t, goToSharingAccess: s, closeCantDeleteDialog: n }) => {
        const { translate: o } = (0, r.Z)(),
          l = ((e, t) => {
            const { groupSharingTitle: s, lastAdminTitle: i, genericErrorTitle: a } = e;
            switch (t) {
              case d.LastAdmin:
                return i;
              case d.GroupSharing:
                return s;
              case d.Generic:
                return a;
              default:
                return (0, p.U)(t);
            }
          })(t, e),
          h = ((e, t) => {
            const { groupSharingSubtitle: s, lastAdminSubtitle: i, genericErrorSubtitle: a } = e;
            switch (t) {
              case d.LastAdmin:
                return i;
              case d.GroupSharing:
                return s;
              case d.Generic:
                return a;
              default:
                return (0, p.U)(t);
            }
          })(t, e);
        return i.createElement(
          a.Vq,
          {
            isOpen: !0,
            onClose: n,
            title: null != l ? l : "",
            closeActionLabel: o("_common_dialog_dismiss_button"),
            actions:
              e === d.LastAdmin
                ? {
                    primary: {
                      children: t.lastAdminActionLabel,
                      onClick: () => {
                        s(), n();
                      }
                    }
                  }
                : void 0
          },
          h
        );
      };
      var c = s(177704);
      const u = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: s }) => {
          const { translate: n } = (0, r.Z)(),
            { confirmDeleteSubtitle: o, confirmDeleteTitle: l, confirmDeleteDismiss: d, confirmDeleteConfirm: p } = s;
          return i.createElement(
            a.Vq,
            {
              title: l,
              onClose: e,
              isOpen: !0,
              dialogClassName: c.Ht,
              closeActionLabel: n("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: p, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: d, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            o
          );
        },
        m = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: s,
          itemId: p,
          onDeletionSuccess: c,
          sharingStatus: m,
          translations: g,
          vaultItemType: D
        }) => {
          const { showToast: f } = (0, a.pm)(),
            { translate: C } = (0, r.Z)(),
            { deleteVaultItems: y } = (0, n.u)(l.L);
          if (!s) return null;
          let E;
          return (
            m && m.isShared && (m.groupSharing && (E = d.GroupSharing), m.lastAdmin && (E = d.LastAdmin)),
            E && t
              ? i.createElement(h, { reason: E, translations: g, goToSharingAccess: t, closeCantDeleteDialog: e })
              : i.createElement(u, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await y({ ids: [p], vaultItemType: D })).tag === o.rq.Success
                        ? (f({
                            description: null != (e = g.deleteSuccessToast) ? e : C("webapp_personal_info_edition_delete_success_toast")
                          }),
                          c())
                        : f({ description: C("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      f({ description: C("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: g
                })
          );
        };
    },
    919551: (e, t, s) => {
      s.d(t, { Jh: () => l, UE: () => n, ZP: () => r });
      var i = s(696832),
        a = s(526849);
      const n = (0, a.compose)(a.not, a.isEmpty, a.trim, (0, a.defaultTo)("")),
        o = /.+@.+\..+/,
        l = (e) => o.test(e.trim());
      class r extends i.Component {
        constructor(e) {
          super(e),
            (this.setInternalState = (e) => {
              this.setState({ internal: { ...this.state.internal, ...e } });
            }),
            (this.setUpdatedValues = (e) => {
              const { signalEditedValues: t, onValuesUpdated: s } = this.props,
                i = { ...this.state.values, ...e };
              this.setState({ values: i }, () => {
                t && t(this.hasFormBeenEdited()), s && s(i);
              });
            }),
            (this.handleChange = (e, t = "") => {
              if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
              const s = e?.target ? { [e.target.dataset.name]: e.target.value } : { [t]: e };
              this.setUpdatedValues(s);
            }),
            (this.handleChanges = (e) => {
              this.setUpdatedValues(e);
            }),
            (this.validateValues = (e) => {
              if (0 === Object.keys(e).length) return !0;
              const t = (0, a.reduce)(
                  (t, s) => ((t[s] = e[s] ? (0, a.compose)(a.not, e[s]) : () => !1), t),
                  {},
                  Object.keys(this.state.values)
                ),
                s = (0, a.evolve)(t, this.state.values);
              return this.setState({ errors: s }), (0, a.all)((0, a.equals)(!1), (0, a.values)(s));
            }),
            (this.hasFormBeenEdited = () => !(0, a.equals)(this.state.values, this.props.currentValues)),
            (this.getValues = () => this.state.values);
          const t = Object.keys(e.currentValues).reduce((e, t) => ((e[t] = !1), e), {});
          this.state = { internal: {}, values: e.currentValues, errors: t };
        }
        componentDidUpdate(e) {
          (0, a.equals)(this.props.currentValues, e.currentValues) || this.setState({ values: this.props.currentValues });
        }
      }
    },
    72320: (e, t, s) => {
      s.d(t, { Y: () => f });
      var i = s(696832),
        a = s(453576),
        n = s(660765),
        o = s(382706),
        l = s(796446),
        r = s(347613),
        d = s(635164),
        p = s(405231),
        h = s(66941),
        c = s(418402),
        u = s.n(c),
        m = s(62429);
      const g = {
          DELETE_CONFIRM: "webapp_personal_info_edition_delete_confirm",
          DELETE_DISMISS: "webapp_personal_info_edition_delete_dismiss",
          DELETE_SUBTITLE: "webapp_personal_info_edition_delete_subtitle"
        },
        D = {
          [a.DataModelType.KWAddress]: o.U.Address,
          [a.DataModelType.KWCompany]: o.U.Company,
          [a.DataModelType.KWEmail]: o.U.Email,
          [a.DataModelType.KWIdentity]: o.U.Identity,
          [a.DataModelType.KWPhone]: o.U.Phone,
          [a.DataModelType.KWPersonalWebsite]: o.U.Website
        };
      function f(e) {
        const { getItemTypeDescription: t, getDeleteTitle: s, getTitle: o, iconType: c, kwType: f, renderForm: C } = e;
        return class extends i.Component {
          constructor(...e) {
            super(...e),
              (this.form = (0, i.createRef)()),
              (this.getFormValues = () => {
                var e;
                return null != (e = this.form.current?.getValues()) ? e : null;
              }),
              (this.isFormValid = () => {
                var e;
                return null != (e = this.form.current?.isFormValid()) && e;
              }),
              (this.state = { hasDataBeenModified: !1, displayConfirmDeleteDialog: !1 }),
              (this.componentDidMount = () => {
                const e = {
                  [a.DataModelType.KWAddress]: n.PageView.ItemAddressDetails,
                  [a.DataModelType.KWCompany]: n.PageView.ItemCompanyDetails,
                  [a.DataModelType.KWEmail]: n.PageView.ItemEmailDetails,
                  [a.DataModelType.KWIdentity]: n.PageView.ItemIdentityDetails,
                  [a.DataModelType.KWPhone]: n.PageView.ItemPhoneDetails,
                  [a.DataModelType.KWPersonalWebsite]: n.PageView.ItemWebsiteDetails
                };
                (0, m.Nc)(e[f]);
              }),
              (this.showListView = () => {
                (0, m.Nc)(n.PageView.ItemPersonalInfoList), (0, d.uX)(this.props.lee.routes.userPersonalInfo);
              }),
              (this.handleEditedForm = () => this.setState({ hasDataBeenModified: !0 })),
              (this.handleNavigateOut = () => {
                this.showListView();
              }),
              (this.handleClickDelete = () => this.setState({ displayConfirmDeleteDialog: !0 })),
              (this.closeConfirmDeleteDialog = () => this.setState({ displayConfirmDeleteDialog: !1 })),
              (this.handleSubmit = async () => {
                const { item: e } = this.props;
                if (!e?.id) return;
                if (!this.isFormValid()) return;
                const t = this.getFormValues(),
                  s = { kwType: f, origin: a.SaveOrigin.MANUAL, content: { ...t, id: e.id } };
                await h.C.savePersonalDataItem(s), this.showListView();
              }),
              (this.render = () => {
                const {
                    item: e,
                    lee: { translate: a }
                  } = this.props,
                  { displayConfirmDeleteDialog: n, hasDataBeenModified: d } = this.state,
                  h = e ? o(e, a) : "",
                  m = {
                    confirmDeleteConfirm: a(g.DELETE_CONFIRM),
                    confirmDeleteDismiss: a(g.DELETE_DISMISS),
                    confirmDeleteSubtitle: a(g.DELETE_SUBTITLE),
                    confirmDeleteTitle: s(a)
                  };
                return i.createElement(
                  l.zI,
                  {
                    isViewingExistingItem: Boolean(this.props.match.params?.uuid),
                    itemHasBeenEdited: d,
                    onNavigateOut: this.handleNavigateOut,
                    onSubmit: this.handleSubmit,
                    onClickDelete: this.handleClickDelete,
                    ignoreCloseOnEscape: n,
                    formId: "edit_personalinfo_panel",
                    header: i.createElement(l.V9, {
                      icon: i.createElement(r.ZP, { iconSize: r.Jh.headerEditPanelIcon, iconType: c }),
                      iconBackgroundColor: u()["--dash-green-00"],
                      title: h,
                      titleDescription: t(a)
                    })
                  },
                  e ? C(this.props.lee, e, this.form, this.handleEditedForm) : "",
                  e
                    ? i.createElement(p.s, {
                        isVisible: n,
                        itemId: e.id,
                        closeConfirmDeleteDialog: this.closeConfirmDeleteDialog,
                        onDeletionSuccess: this.showListView,
                        translations: m,
                        vaultItemType: D[f]
                      })
                    : null
                );
              });
          }
        };
      }
    },
    83126: (e, t, s) => {
      s.d(t, { Z: () => i });
      const i = {
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
    }
  }
]);
