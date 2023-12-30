"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2373],
  {
    363338: (e, t, a) => {
      a.d(t, { N: () => l });
      var s = a(696832),
        n = a(383849),
        i = a.n(n);
      const l = ({ disableHover: e = !1, ...t }) => {
        const [a, n] = s.useState(!1),
          { children: [l, ...o] = [] } = t;
        return s.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => n(!0), onMouseLeave: () => n(!1) },
          l,
          t.enabled && s.createElement("span", { className: i()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || a }) }, o)
        );
      };
    },
    611913: (e, t, a) => {
      a.d(t, { Z: () => _ });
      var s = a(696832),
        n = a(554712),
        i = a(383849),
        l = a.n(i),
        o = a(526849),
        r = a(957459),
        d = a(158549),
        p = a.n(d),
        c = a(876307),
        u = a(573630);
      const m = {
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
        h = (e) => {
          navigator.clipboard.writeText(e.replaceAll(" ", ""));
        };
      class _ extends s.Component {
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
          return (0, c.tZ)(n.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: m.textarea,
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
              className: l()(m.input, { [m.error]: Boolean(this.props.error) }),
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
            ? (0, c.tZ)(
                p(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => h(t.value), onCut: () => h(t.value) },
                (e) => (0, c.tZ)("input", { ...a, ...e })
              )
            : (0, c.tZ)(
                "div",
                { className: m.inputRow },
                (0, c.tZ)("input", { ...a, ...t }),
                (0, c.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: m.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, c.tZ)(
            "div",
            { className: l()(m.container, this.props.multiLine ? m.containerMultiLine : null) },
            this.props.label &&
              (0, c.tZ)(
                "label",
                { className: m.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, c.tZ)("span", { className: m.text, title: this.props.label }, this.props.label)
              ),
            (0, c.tZ)(
              u.Z,
              { tooltipText: e, className: l()(m.value, { [m.placeholder]: !this.props.value, [m.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      _.defaultProps = { maskProps: { maskChar: "" } };
    },
    684098: (e, t, a) => {
      a.d(t, { d: () => u });
      var s,
        n = a(876307),
        i = a(488203),
        l = a(363338),
        o = a(611913),
        r = a(962899);
      const d = "webapp_credential_edition_field_website",
        p = "webapp_credential_edition_field_placeholder_no_url",
        c = "webapp_credential_edition_field_website_action_goto",
        u = ({
          url: e,
          hasUrlError: t,
          disabled: a,
          editViewButtonEnabled: u,
          isWebsiteFieldReadonly: m,
          handleChange: h,
          handleGoToWebsite: _,
          isUsingNewDesign: g = !1
        }) => {
          const { translate: b } = (0, i.Z)();
          return g
            ? (0, n.tZ)(n.qZ, {
                "data-name": "URL",
                label: b(d),
                placeholder: b(p),
                disabled: a || (!e && m),
                value: e,
                error: t,
                readOnly: !!e && m,
                onChange: h,
                sx: { marginTop: "8px" },
                showOpenWebsite: u ? { label: b(c), onClick: _ } : void 0
              })
            : (0, n.tZ)(
                l.N,
                { enabled: u, disableHover: !0 },
                (0, n.tZ)(o.Z, {
                  label: b(d),
                  placeholder: b(p),
                  dataName: "URL",
                  disabled: a,
                  value: e,
                  error: t,
                  readOnly: m,
                  onChange: h
                }),
                (0, n.tZ)(
                  r.ua7,
                  { placement: "top", content: b(c) },
                  (0, n.tZ)(
                    n.zx,
                    {
                      mood: "neutral",
                      intensity: "supershy",
                      type: "button",
                      onClick: _,
                      sx: { border: "none", minWidth: "fit-content", padding: "10px" },
                      role: "link",
                      "aria-label": b(c)
                    },
                    s || (s = (0, n.tZ)(r.RTC, null))
                  )
                )
              );
        };
    },
    682994: (e, t, a) => {
      a.d(t, { s: () => h });
      var s = a(696832),
        n = a(876307),
        i = a(482598),
        l = a(133354),
        o = a(448430),
        r = a(488203);
      let d = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var p = a(365580);
      const c = ({ reason: e, translations: t, goToSharingAccess: a, closeCantDeleteDialog: i }) => {
        const { translate: l } = (0, r.Z)(),
          o = ((e, t) => {
            const { groupSharingTitle: a, lastAdminTitle: s, genericErrorTitle: n } = e;
            switch (t) {
              case d.LastAdmin:
                return s;
              case d.GroupSharing:
                return a;
              case d.Generic:
                return n;
              default:
                return (0, p.U)(t);
            }
          })(t, e),
          c = ((e, t) => {
            const { groupSharingSubtitle: a, lastAdminSubtitle: s, genericErrorSubtitle: n } = e;
            switch (t) {
              case d.LastAdmin:
                return s;
              case d.GroupSharing:
                return a;
              case d.Generic:
                return n;
              default:
                return (0, p.U)(t);
            }
          })(t, e);
        return s.createElement(
          n.Vq,
          {
            isOpen: !0,
            onClose: i,
            title: null != o ? o : "",
            closeActionLabel: l("_common_dialog_dismiss_button"),
            actions:
              e === d.LastAdmin || d.GroupSharing
                ? {
                    primary: {
                      children: t.lastAdminActionLabel,
                      onClick: () => {
                        a(), i();
                      }
                    }
                  }
                : void 0
          },
          c
        );
      };
      var u = a(837527);
      const m = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: a }) => {
          const { translate: i } = (0, r.Z)(),
            { confirmDeleteSubtitle: l, confirmDeleteTitle: o, confirmDeleteDismiss: d, confirmDeleteConfirm: p } = a;
          return s.createElement(
            n.Vq,
            {
              title: o,
              onClose: e,
              isOpen: !0,
              dialogClassName: u.Ht,
              closeActionLabel: i("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: p, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: d, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            l
          );
        },
        h = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: a,
          itemId: p,
          onDeletionSuccess: u,
          sharingStatus: h,
          translations: _,
          vaultItemType: g,
          isShared: b,
          isSharedViaUserGroup: f,
          isLastAdmin: y
        }) => {
          const { showToast: v } = (0, n.pm)(),
            { translate: k } = (0, r.Z)(),
            { deleteVaultItems: w } = (0, i.u)(o.L);
          if (!a) return null;
          let C;
          return (
            (b || h?.isShared) && (f && (C = d.GroupSharing), y && (C = d.LastAdmin)),
            C && t
              ? s.createElement(c, { reason: C, translations: _, goToSharingAccess: t, closeCantDeleteDialog: e })
              : s.createElement(m, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await w({ ids: [p], vaultItemType: g })).tag === l.rq.Success
                        ? (v({
                            description: null != (e = _.deleteSuccessToast) ? e : k("webapp_personal_info_edition_delete_success_toast")
                          }),
                          u())
                        : v({ description: k("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      v({ description: k("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: _
                })
          );
        };
    },
    682373: (e, t, a) => {
      a.r(t), a.d(t, { Connected: () => E });
      var s = a(696832),
        n = a(448430),
        i = a(382706),
        l = a(799852),
        o = a(619122),
        r = a(526849),
        d = a(482598),
        p = a(287279),
        c = a(876307),
        u = a(962899),
        m = a(376452),
        h = a(692077),
        _ = a(488203),
        g = a(276376),
        b = a(86498),
        f = a(682994),
        y = a(593039),
        v = a(164718),
        k = a(611913),
        w = a(45272),
        C = a(561605),
        D = a(684098),
        Z = a(167406);
      const I = ({ passkeyContent: e, spaceDetails: t, signalEditedValues: a }) => {
        var n;
        const { translate: i } = (0, _.Z)(),
          l = null != (n = t?.teamName) ? n : i("webapp_credential_edition_field_space_personal"),
          { userDisplayName: o, rpId: r, itemName: d, note: p, spaceId: u, id: m } = e;
        (0, s.useEffect)(() => {
          (0, w.Nc)(y.PageView.ItemPasskeyDetails);
        }, []);
        const h = (t) => (s) => {
            const n = "string" == typeof s ? s : s.target.value;
            a({ ...e, [t]: n });
          },
          g = Boolean(t?.info.forcedDomainsEnabled && e.spaceId === t?.teamId);
        return (0, c.tZ)(
          s.Fragment,
          null,
          (0, c.tZ)(
            "div",
            { sx: { marginBottom: "32px" } },
            (0, c.tZ)(k.Z, {
              key: "passkeyUsername",
              disabled: !0,
              value: o,
              label: i("webapp_passkey_edition_field_username"),
              placeholder: i("webapp_passkey_edition_field_username_placeholder")
            }),
            (0, c.tZ)(D.d, {
              url: r,
              hasUrlError: !1,
              disabled: !0,
              editViewButtonEnabled: !0,
              isWebsiteFieldReadonly: !1,
              handleChange: (e, t = "") => {
                if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
              },
              handleGoToWebsite: () => {
                (0, w.Kz)(
                  new y.UserOpenExternalVaultItemLinkEvent({
                    itemId: m,
                    itemType: y.ItemTypeWithLink.Passkey,
                    domainType: y.DomainType.Web
                  })
                ),
                  (0, C.Yo)(new v.Y(r).getUrlWithFallbackHttpsProtocol());
              }
            })
          ),
          (0, c.tZ)(k.Z, {
            key: "passkeyItemName",
            value: null != d ? d : o,
            onChange: h("itemName"),
            label: i("webapp_passkey_edition_field_item_name"),
            placeholder: i("webapp_passkey_edition_field_item_name_placeholder")
          }),
          (0, c.tZ)(
            c.u,
            { content: i("webapp_passkey_edition_field_force_categorized", { space: l }), passThrough: !g },
            (0, c.tZ)("div", null, (0, c.tZ)(Z.M, { spaceId: u, labelSx: Z.e, isDisabled: g, onChange: (e) => h("spaceId")(e) }))
          ),
          (0, c.tZ)(k.Z, {
            label: i("webapp_passkey_edition_field_notes"),
            placeholder: i("webapp_passkey_edition_field_placeholder_no_notes"),
            dataName: "note",
            value: p,
            onChange: h("note"),
            multiLine: !0
          })
        );
      };
      var S;
      const x = ({ item: e }) => {
          const { routes: t } = (0, g.Xo)(),
            { translate: a } = (0, _.Z)(),
            { updateVaultItem: l } = (0, d.u)(n.L),
            [y, v] = (0, s.useState)(!1),
            k = (0, h.k6)(),
            w = (0, b.V)(),
            { spaceDetails: C } = (0, o.fV)(),
            [D, Z] = (0, s.useState)(e),
            [x, E] = (0, s.useState)(!1),
            [T, N] = (0, s.useState)(!1),
            R = () => {
              (0, h.uX)(t.userPasskeys);
            },
            L = {
              confirmDeleteConfirm: a("webapp_passkey_edition_delete_confirm"),
              confirmDeleteDismiss: a("webapp_passkey_edition_delete_dismiss"),
              confirmDeleteSubtitle: a("webapp_passkey_edition_delete_text"),
              confirmDeleteTitle: a("webapp_passkey_edition_delete_header"),
              deleteSuccessToast: a("webapp_passkey_edition_name_delete_alert", { passkey: e.rpName })
            },
            A = () => {
              w.showAlert(a("_common_generic_error"), u.BLW.ERROR);
            },
            V = () => {
              if (C?.info.forcedDomainsEnabled && D.spaceId !== C.teamId) {
                const e = D.userDisplayName?.split("@")[1];
                if (C.info.teamDomains.includes(e)) return C.teamId;
              }
              return D.spaceId;
            };
          return (0, c.tZ)(
            m.zI,
            {
              itemHasBeenEdited: T,
              isViewingExistingItem: !0,
              onNavigateOut: R,
              onClickDelete: () => v(!0),
              onSubmit: async () => {
                if (!x) {
                  E(!0);
                  try {
                    const s = await l({ vaultItemType: i.U.Passkey, content: { ...D, spaceId: V() }, id: e.id });
                    if ((0, p.d6)(s)) {
                      const s = a("webapp_passkey_edition_name_update_alert", { passkey: e.rpName });
                      w.showAlert(s, u.BLW.SUCCESS), k.push(t.userPasskeys);
                    } else E(!1), A();
                  } catch (e) {
                    E(!1), A();
                  }
                }
              },
              formId: "edit_passkey_panel",
              header: (0, c.tZ)(m.V9, {
                icon: (0, c.tZ)(
                  "div",
                  { sx: { display: "flex", alignItems: "center", justifyContent: "center", width: "147px", height: "98px" } },
                  S || (S = (0, c.tZ)(c.JO, { name: "PasskeyOutlined", size: "xlarge", color: "white" }))
                ),
                iconBackgroundColor: "ds.container.expressive.brand.catchy.active",
                title: e.rpName
              })
            },
            (0, c.tZ)(I, {
              passkeyContent: D,
              signalEditedValues: (t) => {
                N(!(0, r.equals)(t, e)), Z(t);
              },
              spaceDetails: C
            }),
            (0, c.tZ)(f.s, {
              isVisible: y,
              itemId: e.id,
              closeConfirmDeleteDialog: () => v(!1),
              onDeletionSuccess: R,
              translations: L,
              vaultItemType: i.U.Passkey
            })
          );
        },
        E = (e) => {
          const { data: t } = (0, l.k)(n.L, "query", { vaultItemTypes: [i.U.Passkey], ids: [`{${e.match.params.uuid}}`] });
          return t?.passkeysResult.items.length
            ? s.createElement(o.qc, { lee: e.lee }, s.createElement(x, { ...e, item: t.passkeysResult.items[0] }))
            : null;
        };
    }
  }
]);
