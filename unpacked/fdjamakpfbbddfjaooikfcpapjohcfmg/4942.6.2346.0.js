"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4942],
  {
    619733: (e, t, s) => {
      s.d(t, { N: () => l });
      var a = s(696832),
        n = s(383849),
        i = s.n(n);
      const l = ({ disableHover: e = !1, ...t }) => {
        const [s, n] = a.useState(!1),
          { children: [l, ...r] = [] } = t;
        return a.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => n(!0), onMouseLeave: () => n(!1) },
          l,
          t.enabled && a.createElement("span", { className: i()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || s }) }, r)
        );
      };
    },
    313661: (e, t, s) => {
      s.d(t, { Z: () => _ });
      var a = s(696832),
        n = s(554712),
        i = s(383849),
        l = s.n(i),
        r = s(526849),
        o = s(769183),
        d = s(317894),
        p = s.n(d),
        c = s(142897),
        u = s(654),
        m = s(83126);
      const h = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class _ extends a.Component {
        constructor(e) {
          super(e),
            (this.field = void 0),
            (this.handleChange = (e) => {
              this.setState({ selectionRangeStart: e.target.selectionStart, selectionRangeEnd: e.target.selectionEnd }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.state = { fieldHtmlId: (0, o.Z)(), selectionRangeStart: null, selectionRangeEnd: null });
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
            className: m.Z.textarea,
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
              className: l()(m.Z.input, { [m.Z.error]: Boolean(this.props.error) }),
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
                (e) => (0, c.tZ)("input", { ...s, ...e })
              )
            : (0, c.tZ)(
                "div",
                { className: m.Z.inputRow },
                (0, c.tZ)("input", { ...s, ...t }),
                (0, c.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: m.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, c.tZ)(
            "div",
            { className: l()(m.Z.container, this.props.multiLine ? m.Z.containerMultiLine : null) },
            this.props.label &&
              (0, c.tZ)(
                "label",
                { className: m.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, c.tZ)("span", { className: m.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, c.tZ)(
              u.Z,
              {
                tooltipText: e,
                className: l()(m.Z.value, { [m.Z.placeholder]: !this.props.value, [m.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      _.defaultProps = { maskProps: { maskChar: "" } };
    },
    449354: (e, t, s) => {
      s.d(t, { d: () => c });
      var a,
        n = s(142897),
        i = s(695495),
        l = s(441217),
        r = s(619733),
        o = s(313661),
        d = s(201389);
      const p = "webapp_credential_edition_field_website_action_goto",
        c = ({
          url: e,
          hasUrlError: t,
          disabled: s,
          editViewButtonEnabled: c,
          limitedPermissions: u = !1,
          handleChange: m,
          handleGoToWebsite: h
        }) => {
          const { translate: _ } = (0, d.Z)();
          return (0, i.tZ)(
            r.N,
            { enabled: c, disableHover: !0 },
            (0, i.tZ)(o.Z, {
              label: _("webapp_credential_edition_field_website"),
              placeholder: _("webapp_credential_edition_field_placeholder_no_url"),
              dataName: "URL",
              disabled: s,
              value: e,
              error: t,
              readOnly: u,
              onChange: m
            }),
            (0, i.tZ)(
              l.ua7,
              { placement: "top", content: _(p) },
              (0, i.tZ)(
                n.zx,
                {
                  mood: "neutral",
                  intensity: "supershy",
                  type: "button",
                  onClick: h,
                  sx: { border: "none", minWidth: "fit-content", padding: "10px" },
                  role: "link",
                  "aria-label": _(p)
                },
                a || (a = (0, i.tZ)(l.RTC, null))
              )
            )
          );
        };
    },
    405231: (e, t, s) => {
      s.d(t, { s: () => h });
      var a = s(696832),
        n = s(142897),
        i = s(482598),
        l = s(133354),
        r = s(448430),
        o = s(201389);
      let d = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var p = s(151796);
      const c = ({ reason: e, translations: t, goToSharingAccess: s, closeCantDeleteDialog: i }) => {
        const { translate: l } = (0, o.Z)(),
          r = ((e, t) => {
            const { groupSharingTitle: s, lastAdminTitle: a, genericErrorTitle: n } = e;
            switch (t) {
              case d.LastAdmin:
                return a;
              case d.GroupSharing:
                return s;
              case d.Generic:
                return n;
              default:
                return (0, p.U)(t);
            }
          })(t, e),
          c = ((e, t) => {
            const { groupSharingSubtitle: s, lastAdminSubtitle: a, genericErrorSubtitle: n } = e;
            switch (t) {
              case d.LastAdmin:
                return a;
              case d.GroupSharing:
                return s;
              case d.Generic:
                return n;
              default:
                return (0, p.U)(t);
            }
          })(t, e);
        return a.createElement(
          n.Vq,
          {
            isOpen: !0,
            onClose: i,
            title: null != r ? r : "",
            closeActionLabel: l("_common_dialog_dismiss_button"),
            actions:
              e === d.LastAdmin
                ? {
                    primary: {
                      children: t.lastAdminActionLabel,
                      onClick: () => {
                        s(), i();
                      }
                    }
                  }
                : void 0
          },
          c
        );
      };
      var u = s(177704);
      const m = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: s }) => {
          const { translate: i } = (0, o.Z)(),
            { confirmDeleteSubtitle: l, confirmDeleteTitle: r, confirmDeleteDismiss: d, confirmDeleteConfirm: p } = s;
          return a.createElement(
            n.Vq,
            {
              title: r,
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
          isVisible: s,
          itemId: p,
          onDeletionSuccess: u,
          sharingStatus: h,
          translations: _,
          vaultItemType: g
        }) => {
          const { showToast: b } = (0, n.pm)(),
            { translate: f } = (0, o.Z)(),
            { deleteVaultItems: y } = (0, i.u)(r.L);
          if (!s) return null;
          let k;
          return (
            h && h.isShared && (h.groupSharing && (k = d.GroupSharing), h.lastAdmin && (k = d.LastAdmin)),
            k && t
              ? a.createElement(c, { reason: k, translations: _, goToSharingAccess: t, closeCantDeleteDialog: e })
              : a.createElement(m, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await y({ ids: [p], vaultItemType: g })).tag === l.rq.Success
                        ? (b({
                            description: null != (e = _.deleteSuccessToast) ? e : f("webapp_personal_info_edition_delete_success_toast")
                          }),
                          u())
                        : b({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      b({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: _
                })
          );
        };
    },
    794942: (e, t, s) => {
      s.r(t), s.d(t, { Connected: () => S });
      var a = s(696832),
        n = s(448430),
        i = s(382706),
        l = s(799852),
        r = s(352116),
        o = s(142897),
        d = s(441217),
        p = s(796446),
        c = s(635164),
        u = s(201389),
        m = s(66941),
        h = s(60043),
        _ = s(787268),
        g = s(405231),
        b = s(660765),
        f = s(164718),
        y = s(313661),
        k = s(62429),
        Z = s(447725),
        v = s(449354),
        C = s(839434);
      const w = ({ passkeyContent: e, spaceDetails: t, signalEditedValues: s }) => {
        var n;
        const { translate: i } = (0, u.Z)(),
          l = null != (n = t?.teamName) ? n : i("webapp_credential_edition_field_space_personal"),
          { userDisplayName: r, rpId: d, itemName: p, note: c, spaceId: m, id: h } = e;
        (0, a.useEffect)(() => {
          (0, k.Nc)(b.PageView.ItemPasskeyDetails);
        }, []);
        const _ = (t) => (a) => {
            const n = "string" == typeof a ? a : a.target.value;
            s({ ...e, [t]: n });
          },
          g = Boolean(t?.info.forcedDomainsEnabled && e.spaceId === t?.teamId);
        return (0, o.tZ)(
          a.Fragment,
          null,
          (0, o.tZ)(
            "div",
            { sx: { marginBottom: "32px" } },
            (0, o.tZ)(y.Z, {
              key: "passkeyUsername",
              disabled: !0,
              value: r,
              label: i("webapp_passkey_edition_field_username"),
              placeholder: i("webapp_passkey_edition_field_username_placeholder")
            }),
            (0, o.tZ)(v.d, {
              url: d,
              hasUrlError: !1,
              disabled: !0,
              editViewButtonEnabled: !0,
              limitedPermissions: !1,
              handleChange: (e, t = "") => {
                if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
              },
              handleGoToWebsite: () => {
                (0, k.Kz)(
                  new b.UserOpenExternalVaultItemLinkEvent({
                    itemId: h,
                    itemType: b.ItemTypeWithLink.Passkey,
                    domainType: b.DomainType.Web
                  })
                ),
                  (0, Z.Yo)(new f.Y(d).getUrlWithFallbackHttpsProtocol());
              }
            })
          ),
          (0, o.tZ)(y.Z, {
            key: "passkeyItemName",
            value: null != p ? p : r,
            onChange: _("itemName"),
            label: i("webapp_passkey_edition_field_item_name"),
            placeholder: i("webapp_passkey_edition_field_item_name_placeholder")
          }),
          (0, o.tZ)(
            o.u,
            { content: i("webapp_passkey_edition_field_force_categorized", { space: l }), passThrough: !g },
            (0, o.tZ)("div", null, (0, o.tZ)(C.M, { spaceId: m, labelSx: C.e, isDisabled: g, onChange: (e) => _("spaceId")(e) }))
          ),
          (0, o.tZ)(y.Z, {
            label: i("webapp_passkey_edition_field_notes"),
            placeholder: i("webapp_passkey_edition_field_placeholder_no_notes"),
            dataName: "note",
            value: c,
            onChange: _("note"),
            multiLine: !0
          })
        );
      };
      var D;
      const I = ({ item: e }) => {
          const { routes: t } = (0, h.Xo)(),
            { translate: s } = (0, u.Z)(),
            [n, l] = (0, a.useState)(!1),
            b = (0, c.k6)(),
            f = (0, _.V)(),
            { spaceDetails: y } = (0, r.fV)(),
            [k, Z] = (0, a.useState)(e),
            [v, C] = (0, a.useState)(!1),
            [I, S] = (0, a.useState)(!1),
            x = () => {
              (0, c.uX)(t.userPasskeys);
            },
            E = {
              confirmDeleteConfirm: s("webapp_passkey_edition_delete_confirm"),
              confirmDeleteDismiss: s("webapp_passkey_edition_delete_dismiss"),
              confirmDeleteSubtitle: s("webapp_passkey_edition_delete_text"),
              confirmDeleteTitle: s("webapp_passkey_edition_delete_header"),
              deleteSuccessToast: s("webapp_passkey_edition_name_delete_alert", { passkey: e.rpName })
            },
            T = a.useRef({}),
            N = a.useCallback(
              (t) => {
                Object.entries(t).forEach(([t, s]) => {
                  e[t] !== s ? (T.current[t] = s) : delete T.current[t];
                }),
                  S(Object.keys(T.current).length > 0),
                  Z(t);
              },
              [e]
            ),
            R = () => {
              if (y?.info.forcedDomainsEnabled && k.spaceId !== y.teamId) {
                const e = k.userDisplayName?.split("@")[1];
                if (y.info.teamDomains.includes(e)) return y.teamId;
              }
              return k.spaceId;
            };
          return (0, o.tZ)(
            p.zI,
            {
              itemHasBeenEdited: I,
              isViewingExistingItem: !0,
              onNavigateOut: x,
              onClickDelete: () => l(!0),
              onSubmit: async () => {
                if (!v) {
                  C(!0);
                  try {
                    if (!0 === (await m.C.updatePasskey({ id: e.id, spaceId: R(), ...T.current })).success) {
                      const a = s("webapp_passkey_edition_name_update_alert", { passkey: e.rpName });
                      f.showAlert(a, d.BLW.SUCCESS), b.push(t.userPasskeys);
                    } else C(!1);
                  } catch (e) {
                    C(!1), f.showAlert(s("_common_generic_error"), d.BLW.ERROR);
                  }
                }
              },
              formId: "edit_passkey_panel",
              header: (0, o.tZ)(p.V9, {
                icon: (0, o.tZ)(
                  "div",
                  { sx: { display: "flex", alignItems: "center", justifyContent: "center", width: "147px", height: "98px" } },
                  D || (D = (0, o.tZ)(o.JO, { name: "PasskeyOutlined", size: "xlarge", color: "white" }))
                ),
                iconBackgroundColor: "ds.container.expressive.brand.catchy.active",
                title: e.rpName
              })
            },
            (0, o.tZ)(w, { passkeyContent: k, signalEditedValues: N, spaceDetails: y }),
            (0, o.tZ)(g.s, {
              isVisible: n,
              itemId: e.id,
              closeConfirmDeleteDialog: () => l(!1),
              onDeletionSuccess: x,
              translations: E,
              vaultItemType: i.U.Passkey
            })
          );
        },
        S = (e) => {
          const { data: t } = (0, l.k)(n.L, "query", { vaultItemTypes: [i.U.Passkey], ids: [`{${e.match.params.uuid}}`] });
          return t?.passkeysResult.items.length
            ? a.createElement(r.qc, { lee: e.lee }, a.createElement(I, { ...e, item: t.passkeysResult.items[0] }))
            : null;
        };
    },
    83126: (e, t, s) => {
      s.d(t, { Z: () => a });
      const a = {
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
