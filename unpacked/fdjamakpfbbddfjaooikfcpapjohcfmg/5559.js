"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5559],
  {
    611913: (e, t, s) => {
      s.d(t, { Z: () => g });
      var a = s(696832),
        i = s(554712),
        n = s(383849),
        r = s.n(n),
        o = s(526849),
        l = s(957459),
        d = s(158549),
        c = s.n(d),
        p = s(876307),
        u = s(573630);
      const h = {
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
      class g extends a.Component {
        constructor(e) {
          super(e),
            (this.field = void 0),
            (this.handleChange = (e) => {
              this.setState({ selectionRangeStart: e.target.selectionStart, selectionRangeEnd: e.target.selectionEnd }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.state = { fieldHtmlId: (0, l.Z)(), selectionRangeStart: null, selectionRangeEnd: null });
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
          return (0, p.tZ)(i.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: h.textarea,
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
              className: r()(h.input, { [h.error]: Boolean(this.props.error) }),
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
                c(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, p.tZ)("input", { ...s, ...e })
              )
            : (0, p.tZ)(
                "div",
                { className: h.inputRow },
                (0, p.tZ)("input", { ...s, ...t }),
                (0, p.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: h.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, p.tZ)(
            "div",
            { className: r()(h.container, this.props.multiLine ? h.containerMultiLine : null) },
            this.props.label &&
              (0, p.tZ)(
                "label",
                { className: h.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, p.tZ)("span", { className: h.text, title: this.props.label }, this.props.label)
              ),
            (0, p.tZ)(
              u.Z,
              { tooltipText: e, className: r()(h.value, { [h.placeholder]: !this.props.value, [h.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    682994: (e, t, s) => {
      s.d(t, { s: () => m });
      var a = s(696832),
        i = s(876307),
        n = s(482598),
        r = s(133354),
        o = s(448430),
        l = s(488203);
      let d = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var c = s(365580);
      const p = ({ reason: e, translations: t, goToSharingAccess: s, closeCantDeleteDialog: n }) => {
        const { translate: r } = (0, l.Z)(),
          o = ((e, t) => {
            const { groupSharingTitle: s, lastAdminTitle: a, genericErrorTitle: i } = e;
            switch (t) {
              case d.LastAdmin:
                return a;
              case d.GroupSharing:
                return s;
              case d.Generic:
                return i;
              default:
                return (0, c.U)(t);
            }
          })(t, e),
          p = ((e, t) => {
            const { groupSharingSubtitle: s, lastAdminSubtitle: a, genericErrorSubtitle: i } = e;
            switch (t) {
              case d.LastAdmin:
                return a;
              case d.GroupSharing:
                return s;
              case d.Generic:
                return i;
              default:
                return (0, c.U)(t);
            }
          })(t, e);
        return a.createElement(
          i.Vq,
          {
            isOpen: !0,
            onClose: n,
            title: null != o ? o : "",
            closeActionLabel: r("_common_dialog_dismiss_button"),
            actions:
              e === d.LastAdmin || d.GroupSharing
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
          p
        );
      };
      var u = s(837527);
      const h = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: s }) => {
          const { translate: n } = (0, l.Z)(),
            { confirmDeleteSubtitle: r, confirmDeleteTitle: o, confirmDeleteDismiss: d, confirmDeleteConfirm: c } = s;
          return a.createElement(
            i.Vq,
            {
              title: o,
              onClose: e,
              isOpen: !0,
              dialogClassName: u.Ht,
              closeActionLabel: n("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: c, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: d, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            r
          );
        },
        m = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: s,
          itemId: c,
          onDeletionSuccess: u,
          sharingStatus: m,
          translations: g,
          vaultItemType: f,
          isShared: _,
          isSharedViaUserGroup: D,
          isLastAdmin: E
        }) => {
          const { showToast: v } = (0, i.pm)(),
            { translate: S } = (0, l.Z)(),
            { deleteVaultItems: b } = (0, n.u)(o.L);
          if (!s) return null;
          let I;
          return (
            (_ || m?.isShared) && (D && (I = d.GroupSharing), E && (I = d.LastAdmin)),
            I && t
              ? a.createElement(p, { reason: I, translations: g, goToSharingAccess: t, closeCantDeleteDialog: e })
              : a.createElement(h, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await b({ ids: [c], vaultItemType: f })).tag === r.rq.Success
                        ? (v({
                            description: null != (e = g.deleteSuccessToast) ? e : S("webapp_personal_info_edition_delete_success_toast")
                          }),
                          u())
                        : v({ description: S("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      v({ description: S("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: g
                })
          );
        };
    },
    242521: (e, t, s) => {
      s.d(t, { Jh: () => o, UE: () => n, ZP: () => l });
      var a = s(696832),
        i = s(526849);
      const n = (0, i.compose)(i.not, i.isEmpty, i.trim, (0, i.defaultTo)("")),
        r = /.+@.+\..+/,
        o = (e) => r.test(e.trim());
      class l extends a.Component {
        constructor(e) {
          super(e),
            (this.setInternalState = (e) => {
              this.setState({ internal: { ...this.state.internal, ...e } });
            }),
            (this.setUpdatedValues = (e) => {
              const { signalEditedValues: t, onValuesUpdated: s } = this.props,
                a = { ...this.state.values, ...e };
              this.setState({ values: a }, () => {
                t && t(this.hasFormBeenEdited()), s && s(a);
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
              const t = (0, i.reduce)(
                  (t, s) => ((t[s] = e[s] ? (0, i.compose)(i.not, e[s]) : () => !1), t),
                  {},
                  Object.keys(this.state.values)
                ),
                s = (0, i.evolve)(t, this.state.values);
              return this.setState({ errors: s }), (0, i.all)((0, i.equals)(!1), (0, i.values)(s));
            }),
            (this.hasFormBeenEdited = () => !(0, i.equals)(this.state.values, this.props.currentValues)),
            (this.getValues = () => this.state.values);
          const t = Object.keys(e.currentValues).reduce((e, t) => ((e[t] = !1), e), {});
          this.state = { internal: {}, values: e.currentValues, errors: t };
        }
        componentDidUpdate(e) {
          (0, i.equals)(this.props.currentValues, e.currentValues) || this.setState({ values: this.props.currentValues });
        }
      }
    },
    486816: (e, t, s) => {
      s.d(t, { Y: () => E });
      var a = s(696832),
        i = s(593039),
        n = s(448430),
        r = s(382706),
        o = s(482598),
        l = s(962899),
        d = s(376452),
        c = s(615446),
        p = s(682994),
        u = s(692077),
        h = s(86498),
        m = s(488203),
        g = s(45272),
        f = s(418402),
        _ = s.n(f);
      const D = {
        DELETE_CONFIRM: "webapp_personal_info_edition_delete_confirm",
        DELETE_DISMISS: "webapp_personal_info_edition_delete_dismiss",
        DELETE_SUBTITLE: "webapp_personal_info_edition_delete_subtitle"
      };
      function E(e) {
        const { getItemTypeDescription: t, getDeleteTitle: s, getTitle: f, iconType: E, vaultItemType: v, renderForm: S } = e;
        return ({ lee: e, item: b, match: I }) => {
          const C = (0, a.useRef)(null),
            T = (0, h.V)(),
            { translate: y } = (0, m.Z)(),
            { routes: w } = (0, u.Xo)(),
            { updateVaultItem: V } = (0, o.u)(n.L),
            [L, x] = (0, a.useState)(!1),
            [R, k] = (0, a.useState)(!1);
          if (
            ((0, a.useEffect)(() => {
              const e = {
                [r.U.Address]: i.PageView.ItemAddressDetails,
                [r.U.Company]: i.PageView.ItemCompanyDetails,
                [r.U.Email]: i.PageView.ItemEmailDetails,
                [r.U.Identity]: i.PageView.ItemIdentityDetails,
                [r.U.Phone]: i.PageView.ItemPhoneDetails,
                [r.U.Website]: i.PageView.ItemWebsiteDetails
              };
              (0, g.Nc)(e[v]);
            }, []),
            !b)
          )
            return null;
          const A = () => {
              (0, g.Nc)(i.PageView.ItemPersonalInfoList), (0, u.uX)(w.userPersonalInfo);
            },
            Z = b ? f(b, y) : "",
            U = {
              confirmDeleteConfirm: y(D.DELETE_CONFIRM),
              confirmDeleteDismiss: y(D.DELETE_DISMISS),
              confirmDeleteSubtitle: y(D.DELETE_SUBTITLE),
              confirmDeleteTitle: s(y)
            };
          return a.createElement(
            d.zI,
            {
              isViewingExistingItem: Boolean(I.params?.uuid),
              itemHasBeenEdited: L,
              onNavigateOut: A,
              onSubmit: async () => {
                b.id &&
                  Boolean(C.current?.isFormValid()) &&
                  (await (async () => {
                    const e = C.current?.getValues();
                    e &&
                      "success" !== (await V({ vaultItemType: v, content: e, id: b.id })).tag &&
                      T.showAlert(y("_common_generic_error"), l.BLW.ERROR);
                  })(),
                  A());
              },
              onClickDelete: () => k(!0),
              ignoreCloseOnEscape: R,
              formId: "edit_personalinfo_panel",
              header: a.createElement(d.V9, {
                icon: a.createElement(c.ZP, { iconSize: c.Jh.headerEditPanelIcon, iconType: E }),
                iconBackgroundColor: _()["--dash-green-00"],
                title: Z,
                titleDescription: t(y)
              })
            },
            S(e, b, C, () => x(!0)),
            a.createElement(p.s, {
              isVisible: R,
              itemId: b.id,
              closeConfirmDeleteDialog: () => k(!1),
              onDeletionSuccess: A,
              translations: U,
              vaultItemType: v
            })
          );
        };
      }
    }
  }
]);
