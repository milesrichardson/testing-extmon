"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [288],
  {
    363338: (e, t, i) => {
      i.d(t, { N: () => l });
      var a = i(696832),
        n = i(383849),
        s = i.n(n);
      const l = ({ disableHover: e = !1, ...t }) => {
        const [i, n] = a.useState(!1),
          { children: [l, ...o] = [] } = t;
        return a.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => n(!0), onMouseLeave: () => n(!1) },
          l,
          t.enabled && a.createElement("span", { className: s()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || i }) }, o)
        );
      };
    },
    611913: (e, t, i) => {
      i.d(t, { Z: () => b });
      var a = i(696832),
        n = i(554712),
        s = i(383849),
        l = i.n(s),
        o = i(526849),
        r = i(957459),
        d = i(158549),
        c = i.n(d),
        p = i(876307),
        u = i(573630);
      const _ = {
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
      class b extends a.Component {
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
          return (0, p.tZ)(n.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: _.textarea,
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
            i = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: l()(_.input, { [_.error]: Boolean(this.props.error) }),
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
                (e) => (0, p.tZ)("input", { ...i, ...e })
              )
            : (0, p.tZ)(
                "div",
                { className: _.inputRow },
                (0, p.tZ)("input", { ...i, ...t }),
                (0, p.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: _.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, p.tZ)(
            "div",
            { className: l()(_.container, this.props.multiLine ? _.containerMultiLine : null) },
            this.props.label &&
              (0, p.tZ)(
                "label",
                { className: _.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, p.tZ)("span", { className: _.text, title: this.props.label }, this.props.label)
              ),
            (0, p.tZ)(
              u.Z,
              { tooltipText: e, className: l()(_.value, { [_.placeholder]: !this.props.value, [_.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      b.defaultProps = { maskProps: { maskChar: "" } };
    },
    210288: (e, t, i) => {
      i.d(t, { S: () => Ae });
      var a = i(696832),
        n = i(593039),
        s = i(962899),
        l = i(164718),
        o = i(86498),
        r = i(740300),
        d = i(488203),
        c = i(45272);
      let p = (function (e) {
        return (e[(e.SECONDARY_LOGIN = 0)] = "SECONDARY_LOGIN"), (e[(e.OTP_CODE = 1)] = "OTP_CODE"), e;
      })({});
      const u = (e) => Boolean(e.otpURL) || Boolean(e.otpSecret),
        _ = (e) => {
          const { username: t, alternativeUsername: i } = e;
          return Boolean(t) || Boolean(i);
        };
      var m = i(167406),
        b = i(830894),
        h = i(868819),
        g = i(921310),
        w = i(876307),
        f = i(773817),
        y = i(148038),
        C = i(810291);
      const v = {
          title: "webapp_lock_items_require_master_password_for_credential_title_on",
          subtitle: "webapp_lock_items_require_master_password_for_credential_subtitle_on",
          confirm: "webapp_lock_items_require_master_password_confirm_on_for_credential"
        },
        x = {
          title: "webapp_lock_items_require_master_password_for_credential_title_off",
          subtitle: "webapp_lock_items_require_master_password_for_credential_subtitle_off",
          confirm: "webapp_lock_items_require_master_password_confirm_off_for_credential"
        },
        Z = ({ name: e, title: t, description: i, setValue: n, isMpProtected: s = !1, value: l, disabled: o = !1 }) => {
          const { areProtectedItemsUnlocked: r, openProtectedItemsUnlocker: d } = (0, b.tY)(),
            c = (0, a.useCallback)(
              (e) => {
                const t = e.target.checked,
                  i = async () => {
                    await n(t);
                  };
                return s && !r
                  ? ((0, C.jF)(),
                    d({ itemType: h.R.SecuritySettings, options: { fieldsKeys: t ? v : x, translated: !1 }, successCallback: i }))
                  : i();
              },
              [r, s, d, n]
            ),
            p = `setting-${e}`;
          return (0, f.tZ)(w.XZ, { label: t, description: i, checked: l, onChange: c, id: p, disabled: o });
        };
      var k = i(632197),
        I = i(433988),
        P = i(154350);
      const E = "webapp_credential_edition_field_options_always_log_me",
        D = "webapp_credential_edition_field_options_always_log_me_details",
        S = "webapp_credential_edition_field_options_added_by_user_only",
        R = "webapp_credential_edition_field_options_added_by_user_only_details",
        L = "webapp_credential_edition_field_options_always_require_master_password",
        T = "webapp_credential_edition_field_options_always_require_master_password_details",
        U = "webapp_credential_edition_field_options_always_require_master_password_disable_feedback_markup",
        O = ({ credentialPreferences: e, isNewCredential: t, url: i, isPreferenceDisabled: n = !1, update: l }) => {
          const o = (0, k.q)(),
            r = (0, a.useMemo)(() => {
              if (!i) return !1;
              try {
                return new URL(i), !0;
              } catch (e) {
                try {
                  return new URL("https://" + i), !0;
                } catch (e) {
                  return !1;
                }
              }
            }, [i]),
            { translate: c } = (0, d.Z)(),
            p = (0, I.F)(),
            u = (0, P.Z)(),
            _ = !p && !u.isMPLessUser,
            m = (t) => l({ ...e, requireMasterPassword: t });
          return (0, f.tZ)(
            "div",
            null,
            r
              ? null
              : (0, f.tZ)(w.ke, {
                  mood: "warning",
                  size: "small",
                  title: c("webapp_credential_edition_field_options_no_url_warning"),
                  sx: { marginBottom: "8px" }
                }),
            (0, f.tZ)(Z, {
              name: "useAutoLogin",
              description: c(D),
              isMpProtected: !1,
              title: c(E),
              setValue: (t) => l({ ...e, useAutoLogin: t }),
              value: e.useAutoLogin,
              disabled: !r || n
            }),
            (0, f.tZ)(Z, {
              name: "onlyAutofillExactDomain",
              isMpProtected: !1,
              title: c(S),
              description: c(R),
              setValue: (t) => l({ ...e, onlyAutofillExactDomain: t }),
              value: e.onlyAutofillExactDomain,
              disabled: !r || n
            }),
            _
              ? o.status === y.rq.Success
                ? (0, f.tZ)(Z, {
                    name: "requireMasterPassword",
                    isMpProtected: !t,
                    title: c(L),
                    description: (0, f.tZ)(
                      "div",
                      null,
                      o.data ? (0, f.tZ)("div", { sx: { marginBottom: "8px", color: s.colors.midGreen00 } }, c.markup(U)) : null,
                      (0, f.tZ)("span", null, c(T))
                    ),
                    setValue: m,
                    value: !!o.data || e.requireMasterPassword,
                    disabled: !r || o.data || n
                  })
                : (0, f.tZ)(Z, {
                    name: "requireMasterPassword",
                    isMpProtected: !t,
                    title: c(L),
                    description: c(T),
                    setValue: m,
                    value: e.requireMasterPassword,
                    disabled: !r || n
                  })
              : null
          );
        };
      var W = i(812027),
        A = i(86970),
        q = i(50663);
      const N = (0, a.createContext)({}),
        V = (0, a.createContext)({}),
        B = ({
          children: e,
          vaultItemId: t,
          vaultItemTitle: i,
          spaceId: s,
          isAddCollectionDisabled: l,
          signalEditedValues: o,
          setHasOpenedDialogs: r
        }) => {
          const [d, p] = (0, a.useState)(""),
            [u, _] = (0, a.useState)(!1),
            { allCollections: m } = (0, W.b)(),
            [b, h] = (0, a.useState)(() =>
              "" === t
                ? []
                : m.flatMap((e) => (e.vaultItems.some((e) => e.id === t) ? { ...e, initiallyExisting: !0, hasBeenDeleted: !1 } : []))
            ),
            g = (0, a.useMemo)(() => b.filter((e) => !e.hasBeenDeleted), [b]),
            w = (0, a.useMemo)(() => m.filter((e) => !g.some((t) => t.id === e.id)), [m, g]),
            f = {
              setInput: p,
              setIsInputVisible: _,
              onSubmit: (e = d, t) => {
                if ((e = e.trim()).length <= 0) return;
                const i = b.findIndex((t) => t.name === e);
                if (-1 === i)
                  h((i) => {
                    var a;
                    const n = [...i],
                      l = m.find((t) => t.name === e && t.spaceId === s);
                    return (
                      n.push({
                        id: null != (a = l?.id) ? a : "",
                        name: e,
                        spaceId: s,
                        isShared: l?.isShared,
                        vaultItems: [],
                        initiallyExisting: !1,
                        hasBeenDeleted: !1,
                        itemPermission: t
                      }),
                      (0, q.p)(n)
                    );
                  });
                else {
                  const e = b[i];
                  e.initiallyExisting &&
                    e.hasBeenDeleted &&
                    h((e) => {
                      const t = [...e];
                      return (t[i].hasBeenDeleted = !1), t;
                    });
                }
                o?.(!0), p("");
              },
              onDelete: (e) => {
                const t = b.findIndex((t) => t.name === e);
                if (-1 === t) return;
                const i = b[t];
                h((e) => {
                  const a = [...e];
                  return i.initiallyExisting ? (a[t].hasBeenDeleted = !0) : a.splice(t, 1), a;
                }),
                  (0, c.Nc)(n.PageView.CollectionDelete),
                  o?.(!0);
              },
              clearVaultItemCollections: () => h((e) => e.flatMap((e) => (e.initiallyExisting ? { ...e, hasBeenDeleted: !0 } : [])))
            };
          return a.createElement(
            N.Provider,
            {
              value: {
                input: d,
                isInputVisible: u,
                filteredCollections: w,
                vaultItemCollections: b,
                vaultItemCollectionsToDisplay: g,
                vaultItemId: t,
                vaultItemTitle: i,
                setHasOpenedDialogs: r,
                spaceId: s,
                isAddCollectionDisabled: l
              }
            },
            a.createElement(V.Provider, { value: f }, e)
          );
        },
        F = () => (0, a.useContext)(N),
        M = () => (0, a.useContext)(V);
      var G,
        z = i(361607),
        H = i(982466),
        K = i(267678),
        Y = i(333918);
      const j = ({ id: e, hasCollections: t, vaultItemTitle: i, setHasOpenedDialogs: n, isDisabled: s = !1 }) => {
          const { translate: l } = (0, d.Z)(),
            o = (0, a.useRef)(null),
            r = (0, z._)(),
            { isInputVisible: c, filteredCollections: p, input: u, spaceId: _ } = F(),
            m = Boolean(r.data?.sharingVault_web_Collection_Item_Permissions_dev),
            { openDialog: b, closeDialog: h } = (0, K.R)(),
            { setInput: g, setIsInputVisible: f, onSubmit: y } = M(),
            C = (e, t) => {
              y(t, e), h(), n?.(!1), o.current?.focus();
            },
            v = () => {
              h(), n?.(!1);
            };
          return c
            ? (0, w.tZ)(A.x5, {
                collections: p,
                id: e,
                input: u,
                inputRef: o,
                spaceId: _,
                selectionAsDropdown: !0,
                onSubmit: (e) => {
                  const t = p.find((t) => t.name === e && t.spaceId === _);
                  t?.isShared
                    ? (b((0, w.tZ)(Y.B, { onSubmit: C, onClose: v, itemTitle: i, isItemPermissionsEnabled: m, collectionName: t.name })),
                      n?.(!0))
                    : C(H.y3.Admin, e);
                },
                setInput: g,
                onBlur: (e) => {
                  e.currentTarget.contains(e.relatedTarget) ||
                    window.setTimeout(() => {
                      f(!1);
                    }, 100);
                }
              })
            : (0, w.tZ)(
                w.zx,
                {
                  onClick: () => f(!0),
                  layout: "iconLeading",
                  intensity: "supershy",
                  disabled: s,
                  mood: "neutral",
                  icon: G || (G = (0, w.tZ)(w.JO, { name: "ActionAddOutlined" }))
                },
                l(t ? "webapp_collections_input_placeholder_add_another" : "webapp_collections_input_placeholder_add_new")
              );
        },
        X = (e) => (0, w.tZ)("div", { sx: { flex: "1", display: "flex", flexDirection: "column" }, ...e });
      var J,
        $ = i(660756);
      const Q = ({ hasMultipleCollections: e, ...t }) => {
          const { spaceId: i } = F(),
            n = (0, $.b)(i),
            { translate: s } = (0, d.Z)();
          return (0, w.tZ)(
            "label",
            { sx: { display: "flex", width: "149px", justifyContent: "flex-end", fontWeight: "600", textAlign: "right" }, ...t },
            (0, w.tZ)(
              "span",
              { sx: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
              n && (0, w.tZ)(a.Fragment, null, `${n}`, J || (J = (0, w.tZ)("br", null))),
              s(e ? "webapp_credentials_header_row_category" : "webapp_credential_edition_field_category")
            )
          );
        },
        ee = (e) => (0, w.tZ)("div", { sx: { display: "flex", flexDirection: "row" }, ...e }),
        te = "collectionsFieldId",
        ie = (0, a.forwardRef)(({ hasLabel: e = !0 }, t) => {
          const {
              vaultItemCollections: i,
              vaultItemCollectionsToDisplay: n,
              vaultItemTitle: s,
              isAddCollectionDisabled: l,
              setHasOpenedDialogs: o
            } = F(),
            { onDelete: r, clearVaultItemCollections: d } = M(),
            c = n?.length > 0;
          return (
            (0, a.useImperativeHandle)(t, () => ({ getVaultItemCollections: () => i, clearVaultItemCollections: d })),
            (0, w.tZ)(
              ee,
              { sx: { gap: "24px", alignItems: !c && "center" } },
              e ? (0, w.tZ)(Q, { hasMultipleCollections: n?.length > 1, htmlFor: te, sx: { marginTop: c && "15px" } }) : null,
              (0, w.tZ)(
                X,
                { sx: { ...(c && { gap: "8px", marginTop: "10px" }) } },
                (0, w.tZ)(A.zT, {
                  sx: { marginLeft: "16px" },
                  collectionListItems: n.map((e) =>
                    (0, w.tZ)(
                      A.cF,
                      { key: `collections_field_li_${e.name}` },
                      (0, w.tZ)(A.KH, { onDismiss: () => r(e.name), isShared: e.isShared }, e.name)
                    )
                  )
                }),
                (0, w.tZ)(j, { id: te, hasCollections: c, vaultItemTitle: s, setHasOpenedDialogs: o, isDisabled: l })
              )
            )
          );
        }),
        ae = (0, a.forwardRef)(
          (
            {
              vaultItemId: e,
              vaultItemTitle: t,
              spaceId: i,
              isAddCollectionDisabled: a,
              signalEditedValues: n,
              setHasOpenedDialogs: s,
              hasLabel: l
            },
            o
          ) => {
            const { isCollectionsLoading: r } = (0, W.b)();
            return r
              ? null
              : (0, w.tZ)(
                  B,
                  {
                    vaultItemId: e,
                    vaultItemTitle: t,
                    spaceId: i,
                    signalEditedValues: n,
                    setHasOpenedDialogs: s,
                    isAddCollectionDisabled: a
                  },
                  (0, w.tZ)(ie, { ref: o, hasLabel: l })
                );
          }
        );
      var ne = i(561605),
        se = i(833840),
        le = i(139378);
      const oe = (e, t) => {
        (0, se.k)(e, t), (0, ne.Yo)(t);
      };
      var re = i(671738);
      const de = (0, a.memo)(({ credential: e }) => {
        const { translate: t } = (0, d.Z)(),
          [i, n] = (0, a.useState)(null),
          s = (0, a.useCallback)((e) => n(e), []),
          l = (0, a.useCallback)(() => n(null), []);
        return (0, w.tZ)(
          a.Fragment,
          null,
          (0, w.tZ)(w.zx, {
            layout: "iconOnly",
            icon: "ActionRefreshOutlined",
            mood: "brand",
            intensity: "supershy",
            onClick: () => s(e.id),
            disabled: e.limitedPermissions,
            tooltip: t("webapp_credential_edition_autochange")
          }),
          i && (0, w.tZ)(re.R, { credentialId: i, dismissCallback: l })
        );
      });
      var ce = i(684985),
        pe = i(684098);
      const ue = ({
          children: e,
          url: t,
          hasUrlError: i,
          isWebsiteFieldReadonly: n,
          editViewButtonEnabled: s,
          handleMainWebsiteChange: l,
          handleGoToWebsite: o
        }) =>
          a.createElement(
            "div",
            null,
            a.createElement(pe.d, {
              url: t,
              hasUrlError: i,
              editViewButtonEnabled: s,
              handleChange: l,
              handleGoToWebsite: o,
              isWebsiteFieldReadonly: n,
              isUsingNewDesign: !0
            }),
            e
          ),
        _e = ({ url: e, hasUrlError: t, handleMainWebsiteChange: i, handleChanges: n, handleGoToWebsite: s }) => {
          const [l, o] = a.useState(!1),
            [r, d] = a.useState([]);
          return (
            a.useEffect(() => {
              r.length && o(!0), n({ linkedURLs: r });
            }, [r]),
            a.createElement(
              ue,
              {
                url: e,
                hasUrlError: t,
                isWebsiteFieldReadonly: !1,
                editViewButtonEnabled: !1,
                handleMainWebsiteChange: i,
                handleGoToWebsite: s
              },
              a.createElement(ce.a, {
                linkedWebsitesList: r,
                areItemsLocked: !1,
                credentialId: "",
                isListEditable: !0,
                isEditing: l,
                showUrlProtocol: !0,
                updateLinkedWebsitesList: d
              })
            )
          );
        },
        me = ({ totalLinkedWebsitesLength: e }) => {
          const { translate: t } = (0, d.Z)();
          return e > 0
            ? (0, w.tZ)(
                w.nv,
                { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.quiet", sx: { marginTop: "12px", marginLeft: "12px" } },
                t("webapp_credential_edition_linked_websites_title_with_count", { count: e })
              )
            : null;
        };
      var be = i(539506);
      const he = ({
        url: e,
        linkedWebsitesAddedByUser: t,
        dashlaneDefinedLinkedWebsites: i,
        hasUrlError: a,
        editViewButtonEnabled: n,
        limitedPermissions: s = !1,
        handleChange: l,
        handleGoToWebsite: o,
        onClickAddNewWebsite: r,
        isWebsiteFieldReadonly: c
      }) => {
        const { translate: p } = (0, d.Z)(),
          u = t.length + (i && i.length > 1 ? i.length : 0);
        return (0, w.tZ)(
          ue,
          { url: e, hasUrlError: a, editViewButtonEnabled: n, handleMainWebsiteChange: l, handleGoToWebsite: o, isWebsiteFieldReadonly: c },
          (0, w.tZ)(
            "div",
            { sx: { display: "flex", justifyContent: u > 0 ? "space-between" : "flex-end" } },
            (0, w.tZ)(me, { totalLinkedWebsitesLength: u }),
            r && !s
              ? (0, w.tZ)(be.E, {
                  handleOnClickAddLinkedWebsiteButton: r,
                  disabled: c,
                  label: p(
                    u > 0 ? "webapp_credential_edition_linked_websites_manage" : "webapp_credential_edition_linked_websites_add_website"
                  )
                })
              : null
          )
        );
      };
      var ge = i(468037);
      const we = ({ options: e, onOptionsChanged: t }) => {
          const { translate: i } = (0, d.Z)(),
            n = (0, a.useCallback)(
              (i) => {
                const a = i.currentTarget.checked;
                t({ ...e, digits: a });
              },
              [t, e]
            ),
            s = (0, a.useCallback)(
              (i) => {
                const a = i.currentTarget.checked;
                t({ ...e, letters: a });
              },
              [t, e]
            ),
            l = (0, a.useCallback)(
              (i) => {
                const a = i.currentTarget.checked;
                t({ ...e, symbols: a });
              },
              [t, e]
            ),
            o = (0, a.useCallback)(
              (i) => {
                const a = i.currentTarget.checked;
                t({ ...e, avoidAmbiguous: !a });
              },
              [t, e]
            );
          return (0, f.tZ)(
            "div",
            { sx: { display: "flex", justifyContent: "space-between", marginTop: "8px", marginBottom: "8px" } },
            (0, f.tZ)(
              "div",
              null,
              (0, f.tZ)(w.XZ, {
                label: i("webapp_credential_edition_field_generator_use_letters"),
                onChange: s,
                checked: e.letters,
                disabled: e.letters && !e.digits
              }),
              (0, f.tZ)(w.XZ, {
                label: i("webapp_credential_edition_field_generator_use_digits"),
                onChange: n,
                checked: e.digits,
                disabled: e.digits && !e.letters
              })
            ),
            (0, f.tZ)(
              "div",
              null,
              (0, f.tZ)(w.XZ, { label: i("webapp_credential_edition_field_generator_use_symbols"), onChange: l, checked: e.symbols }),
              (0, f.tZ)(w.XZ, {
                label: i("webapp_credential_edition_field_generator_similar_characters"),
                onChange: o,
                checked: !e.avoidAmbiguous
              })
            )
          );
        },
        fe = ({ length: e, onLengthChanged: t }) => {
          const { translate: i } = (0, d.Z)(),
            [n, l] = (0, a.useState)(e);
          return (0, w.tZ)(
            "div",
            {
              "aria-label": i("webapp_credential_edition_field_generator_min_max_a11y", { min: 4, max: 40 }),
              sx: { "> div": { "> label": { color: "ds.text.neutral.quiet" }, "> p": { color: "ds.text.neutral.quiet" } } }
            },
            (0, w.tZ)(s.iRW, {
              label: i("webapp_credential_edition_field_generator_password_length", { length: n }),
              min: 4,
              max: 40,
              step: 1,
              onChange: (e) => {
                l(e);
              },
              onChangeComplete: t,
              value: n
            })
          );
        },
        ye = ({ options: e, handleSettingsChange: t, handleGenerateNewPassword: i, handleClose: a }) => {
          const { translate: n } = (0, d.Z)();
          return (0, f.tZ)(
            s.T5p,
            { gap: "10px", sx: { padding: "10px" } },
            (0, f.tZ)(
              s.T5p,
              { gap: "10px", sx: { textAlign: "left", padding: "10px", borderRadius: "4px" } },
              (0, f.tZ)(fe, {
                length: e.length,
                onLengthChanged: (i) => {
                  t({ ...e, length: i });
                }
              }),
              (0, f.tZ)(we, {
                onOptionsChanged: (e) => {
                  t(e);
                },
                options: e
              })
            ),
            (0, f.tZ)(
              w.zx,
              { fullsize: !0, mood: "brand", intensity: "catchy", onClick: i },
              n("webapp_credential_edition_button_generate_another_password")
            ),
            (0, f.tZ)(
              w.zx,
              { fullsize: !0, mood: "neutral", intensity: "quiet", onClick: a },
              n("webapp_credential_edition_button_close_password_generator")
            )
          );
        },
        Ce = ({ generatorSettings: e, setGeneratorSettings: t, handleChangePassword: i, handleClose: s }) => {
          const l = (e) => {
            r.C.generatePassword({ settings: e })
              .then((e) => {
                e.success && i(e.password);
              })
              .finally(() => {
                (0, c.Kz)(
                  new n.UserGeneratePasswordEvent({
                    hasDigits: e.digits,
                    hasLetters: e.letters,
                    hasSymbols: e.symbols,
                    hasSimilar: !e.avoidAmbiguous,
                    length: e.length
                  })
                );
              });
          };
          return (
            (0, a.useEffect)(() => {
              l(e);
            }, [e]),
            (0, f.tZ)(
              ge.u,
              { additionalSx: { backgroundColor: "ds.container.agnostic.neutral.quiet", marginTop: "8px" } },
              (0, f.tZ)(ye, {
                options: e,
                handleSettingsChange: (e) => {
                  t(e), l(e);
                },
                handleGenerateNewPassword: () => {
                  l(e);
                },
                handleClose: s
              })
            )
          );
        };
      var ve = i(133354),
        xe = i(242714);
      let Ze = (function (e) {
        return (e.Success = "success"), (e.Loading = "loading"), (e.Error = "error"), e;
      })({});
      Ze.Loading;
      var ke = i(397855),
        Ie = i(690056),
        Pe = i(799852);
      function Ee(e) {
        return (0, Pe.k)(Ie.i, "otpCodeForSecretOrUrl", { secretOrUrl: e });
      }
      const De = ({ rank: e, content: t }) =>
          (0, w.tZ)(
            s.T5p,
            {
              as: "li",
              gap: "16px",
              gridTemplateColumns: "35px 1fr",
              alignItems: "center",
              justifyContent: "flex-start",
              sx: { width: "100%" }
            },
            (0, w.tZ)(s.dDn, { as: ke.m, rank: e }),
            t
          ),
        Se = ({ title: e, isOpen: t, url: i, onClose: n, onSubmit: o }) => {
          const { translate: r } = (0, d.Z)(),
            [c, p] = (0, a.useState)(""),
            u = Ee(c),
            _ = !!c && u.status === Ze.Error,
            m = u.status !== Ze.Success,
            b = new l.Y(i).getHostname();
          return (0, w.tZ)(
            w.Vq,
            {
              title: `Set up OTP for ${e}`,
              isOpen: t,
              onClose: n,
              closeActionLabel: "Close",
              actions: {
                primary: b
                  ? {
                      icon: "ActionOpenExternalLinkOutlined",
                      layout: "iconTrailing",
                      children: r("webapp_credential_otp_setup_goto_website_button", { domain: b }),
                      onClick: () => (0, ne.Yo)(i)
                    }
                  : void 0,
                secondary: {
                  children: r("webapp_credential_otp_setup_next_button"),
                  onClick: () => {
                    u.status === Ze.Success && (o(u.data?.url), n());
                  },
                  disabled: m,
                  tooltip: r("webapp_credential_otp_setup_next_button_disabled_tooltip")
                }
              }
            },
            (0, w.tZ)(
              s.Ejs,
              { as: "ol", gap: "16px" },
              (0, w.tZ)(De, { rank: 1, key: "2fa-settings", content: r("webapp_credential_otp_setup_step1_text") }),
              (0, w.tZ)(De, { rank: 2, key: "2fa-turn-on", content: r("webapp_credential_otp_setup_step2_text") }),
              (0, w.tZ)(De, { rank: 3, key: "enter-setup-code", content: r("webapp_credential_otp_setup_step3_text") })
            ),
            (0, w.tZ)(w.Kx, {
              error: _,
              feedback: _ ? "Incorrect setup code entered" : "",
              label: "Enter setup code",
              onChange: (e) => {
                e.preventDefault(), e.stopPropagation(), p(e.target.value);
              }
            })
          );
        },
        Re = ({ setHasOpenedDialogs: e, url: t, title: i, onSubmit: n }) => {
          const { translate: l } = (0, d.Z)(),
            [o, r] = (0, a.useState)(!1);
          return (0, w.tZ)(
            s.Ejs,
            { justifyContent: "flex-end" },
            (0, w.tZ)(
              w.zx,
              {
                icon: "ArrowRightOutlined",
                layout: "iconTrailing",
                intensity: "supershy",
                mood: "brand",
                onClick: () => {
                  r(!0), e?.(!0);
                }
              },
              l("webapp_credential_edition_field_otp_setup_title")
            ),
            (0, w.tZ)(Se, {
              url: t,
              title: i,
              isOpen: o,
              onSubmit: n,
              onClose: () => {
                r(!1), e?.(!1);
              }
            })
          );
        },
        Le = ({ secretOrUrl: e, onCopy: t }) => {
          const { translate: i } = (0, d.Z)(),
            { data: a, status: n } = Ee(e);
          if (n !== ve.rq.Success || null == a) return null;
          const [s, l, o] = n === ve.rq.Success && a ? [a.code, a.validityTime, a.validityEndDate] : [null, 3e4, 1 / 0];
          return (0, w.tZ)(w.Oc, {
            sx: { marginTop: "8px" },
            action: s
              ? {
                  iconName: "ActionCopyOutlined",
                  label: i("webapp_credential_edition_field_generic_action_copy"),
                  onClick: async () => {
                    if (s)
                      try {
                        await navigator.clipboard.writeText(s), t(!0, void 0);
                      } catch (e) {
                        t(!1, e);
                      }
                  }
                }
              : void 0,
            code: null != s ? s : "",
            label: i("webapp_credential_edition_field_security_code"),
            validityEndDate: o,
            validityPeriod: l,
            "data-testid": "otp-field"
          });
        },
        Te = ({ secretOrUrl: e, url: t, title: i, isEditable: a, onCopy: n, onSubmit: s, setHasOpenedDialogs: l }) => {
          const o = (0, xe.o)("sharingVault_web_otp_setup_dev");
          return e
            ? (0, w.tZ)(Le, { secretOrUrl: e, isEditable: a && !!o, onCopy: n })
            : a && o
            ? (0, w.tZ)(Re, { url: t, title: i, onSubmit: s, setHasOpenedDialogs: l })
            : null;
        };
      var Ue = i(157668);
      const Oe = { length: 16, digits: !0, letters: !0, symbols: !0, avoidAmbiguous: !0 },
        We = "webapp_credential_edition_field_generator_generate_tooltip",
        Ae = (0, a.forwardRef)(
          (
            {
              activeSpaces: e,
              areProtectedItemsUnlocked: t,
              dashlaneDefinedLinkedWebsites: i,
              editableValues: f,
              isNewItem: y,
              onClickAddNewWebsite: C,
              openProtectedItemsUnlocker: v,
              readonlyValues: x,
              setEditableValues: Z,
              setHasOpenedDialogs: k,
              signalEditedValues: I
            },
            P
          ) => {
            var E, D, S, R, L;
            const [T, U] = (0, a.useState)({
                showingPassword: !1,
                showGeneratePassword: !1,
                credentialsGloballyRequireMP: !1,
                defaultSpaceId: null != (E = f.spaceId) ? E : "",
                generatorSettings: Oe
              }),
              [W, A] = (0, a.useState)([]),
              [q, N] = (0, a.useState)(!1),
              { translate: V } = (0, d.Z)(),
              B = (0, a.useRef)(null),
              F = (0, o.V)();
            (0, a.useImperativeHandle)(P, () => ({
              isFormValid: () => !0,
              getVaultItemCollections: () => B.current?.getVaultItemCollections()
            }));
            const { data: M, status: G } = ((z = f.password), (0, Pe.k)(Ue.d, "scoreForPassword", { password: z }));
            var z;
            (0, a.useEffect)(() => {
              Promise.all([r.C.arePasswordsProtected(), r.C.getPasswordGenerationSettings()]).then(([e, t]) => {
                U((i) => ({ ...i, credentialsGloballyRequireMP: e, generatorSettings: t }));
              });
            }, []),
              (0, a.useEffect)(() => {
                y &&
                  !q &&
                  Z((e) => {
                    return { ...e, itemName: ((t = f.URL), (0, le.capitalize)(new l.Y(t).getRootDomainName())) };
                    var t;
                  });
              }, [y, f.URL]);
            const H = () => {
                U((e) => ({ ...e, showGeneratePassword: !e.showGeneratePassword }));
              },
              K = () => !!f.password && (void 0 !== t ? !t && (f.requireMasterPassword || T.credentialsGloballyRequireMP) : void 0),
              Y = (e, t = "") => {
                if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
                if (!x.limitedPermissions || "spaceId" === t) {
                  const i = e?.target ? { [e.target.dataset.name]: e.target.value } : { [t]: e },
                    a = Object.keys(i)[0];
                  Z({ ...f, [a]: i[a] });
                }
              };
            let j = f.spaceId;
            x.forceCategorizedSpace?.teamName && (j = x.forceCategorizedSpace?.teamId);
            const X = e?.find((e) => e.teamId === j),
              J = null != (D = X?.teamName) ? D : "webapp_credential_edition_field_space_personal",
              $ = (e) => {
                f.spaceId !== e &&
                  e !== T.defaultSpaceId &&
                  (U((t) => ({ ...t, defaultSpaceId: e })), B.current?.clearVaultItemCollections(), Y(e, "spaceId"));
              },
              Q = (t) => {
                if (e && e.length > 0 && e[0].info?.teamAdmins?.length > 0)
                  for (const a of e[0].info.teamAdmins)
                    if (t.target.value.includes(a)) {
                      var i;
                      U({ ...T, defaultSpaceId: null != (i = e[0].teamId) ? i : "" });
                      break;
                    }
              },
              ee = (e) => {
                Z({ ...f, ...e });
              },
              te = ((e) => {
                const t = { [p.OTP_CODE]: u(e), [p.SECONDARY_LOGIN]: _(e) };
                return (e, i) => t[e] || !!i;
              })(f);
            (0, a.useEffect)(() => {
              var e;
              $(null != (e = T.defaultSpaceId) ? e : "");
            }, [T]);
            const ie = async (e, t) => {
                const i = new l.Y(f.URL).getRootDomain();
                (0, c.Kz)(
                  new n.UserCopyVaultItemFieldEvent({
                    itemType: n.ItemType.Credential,
                    field: e,
                    itemId: x.id,
                    isProtected: !(e !== n.Field.Password || (!f.requireMasterPassword && !T.credentialsGloballyRequireMP))
                  })
                ),
                  (0, c.Kz)(
                    new n.AnonymousCopyVaultItemFieldEvent({
                      itemType: n.ItemType.Credential,
                      field: e,
                      domain: { id: await (0, n.hashDomain)(i), type: n.DomainType.Web }
                    })
                  ),
                  t || F.showAlert(V("_common_generic_error"), s.BLW.ERROR);
              },
              ne = ie.bind(void 0, n.Field.Email),
              se = ie.bind(void 0, n.Field.Login),
              re = ie.bind(void 0, n.Field.OtpCode),
              ce = ie.bind(void 0, n.Field.Password),
              pe = ie.bind(void 0, n.Field.SecondaryLogin);
            (0, a.useEffect)(() => {
              let e = [];
              y || x.limitedPermissions || !f.password
                ? (f.password && x.isDiscontinuedUser) ||
                  T.showGeneratePassword ||
                  (e = [
                    (0, w.tZ)(w.zx, {
                      key: "generate-password",
                      "aria-label": V(We),
                      layout: "iconOnly",
                      mood: "brand",
                      intensity: "supershy",
                      onClick: H,
                      disabled: x.limitedPermissions,
                      icon: "FeaturePasswordGeneratorOutlined",
                      tooltip: V(We)
                    })
                  ])
                : (e = [
                    (0, w.tZ)(g.m, {
                      buttonId: "copyPasswordButton",
                      key: "copy-password",
                      itemId: x.id,
                      disabled: void 0 === K(),
                      data: f.password,
                      checkProtected: K,
                      onCopy: ce
                    }),
                    (0, w.tZ)(de, { key: "password-change", credential: { id: x.id, limitedPermissions: x.limitedPermissions } })
                  ]),
                A(e);
            }, [y, x.limitedPermissions, f.password, t, T.credentialsGloballyRequireMP, T.showGeneratePassword]);
            const ue = Boolean(B.current?.getVaultItemCollections()?.some((e) => e.isShared)),
              me = Boolean(x.forceCategorizedSpace) || ue || x.isDiscontinuedUser;
            return (0, w.tZ)(
              a.Fragment,
              null,
              (0, w.tZ)(
                ge.u,
                { title: V("webapp_credential_box_title_login_details"), additionalSx: { marginBottom: "16px" } },
                y
                  ? (0, w.tZ)(_e, {
                      url: f.URL,
                      hasUrlError: !1,
                      handleMainWebsiteChange: Y,
                      handleChanges: ee,
                      handleGoToWebsite: () => oe(x.id, f.URL)
                    })
                  : null,
                y
                  ? null
                  : (0, w.tZ)(w.s8, {
                      "data-name": "email",
                      label: V("webapp_credential_edition_field_email"),
                      placeholder: V("webapp_credential_edition_field_placeholder_no_email"),
                      readOnly: (!!f.email && x.limitedPermissions) || x.isDiscontinuedUser,
                      disabled: !f.email && x.limitedPermissions,
                      value: f.email,
                      onChange: (e) => {
                        Y(e), Q(e);
                      },
                      actions: [(0, w.tZ)(g.m, { key: "copy-email", data: f.email, onCopy: ne })],
                      sx: { marginBottom: "8px" }
                    }),
                (0, w.tZ)(w.qo, {
                  "data-name": "username",
                  label: V("webapp_credential_edition_field_login"),
                  placeholder: V("webapp_credential_edition_field_placeholder_no_login"),
                  readOnly: (!!f.username && x.limitedPermissions) || x.isDiscontinuedUser,
                  disabled: !f.username && x.limitedPermissions,
                  value: f.username,
                  onChange: (e) => {
                    Y(e), Q(e);
                  },
                  actions: !y && Boolean(f.username) ? [(0, w.tZ)(g.m, { key: "copy-login", data: f.username, onCopy: se })] : void 0,
                  sx: { marginBottom: "8px" }
                }),
                te(p.SECONDARY_LOGIN, f.alternativeUsername)
                  ? (0, w.tZ)(w.qo, {
                      "data-name": "alternativeUsername",
                      label: V("webapp_credential_edition_field_secondary_login"),
                      placeholder: V("webapp_credential_edition_field_placeholder_no_secondary_login"),
                      value: f.alternativeUsername,
                      readOnly: !!f.alternativeUsername && (x.limitedPermissions || x.isDiscontinuedUser),
                      disabled: !f.alternativeUsername && (x.limitedPermissions || x.isDiscontinuedUser),
                      onChange: Y,
                      actions: f.alternativeUsername
                        ? [(0, w.tZ)(g.m, { key: "copy-secondary-login", data: f.alternativeUsername, onCopy: pe })]
                        : void 0,
                      sx: { marginBottom: "8px" }
                    })
                  : null,
                (0, w.tZ)(w.ZI, {
                  id: "password",
                  "data-name": "password",
                  label: V("webapp_credential_edition_field_password"),
                  placeholder: V("webapp_credential_edition_field_placeholder_no_password"),
                  toggleVisibilityLabel: {
                    hide: V("webapp_credential_edition_field_password_action_hide"),
                    show: V("webapp_credential_edition_field_password_action_show")
                  },
                  value: f.password,
                  disabled: !y && x.limitedPermissions,
                  readOnly: (!y && K()) || x.isDiscontinuedUser,
                  onFocus: (e) => {
                    if (!y && K() && !T.showingPassword) {
                      const { currentTarget: t } = e,
                        i = () => {
                          t?.focus();
                        };
                      v({ action: b.P7.Show, itemType: h.R.Password, showNeverAskOption: !0, credentialId: x.id, successCallback: i });
                    }
                  },
                  onChange: Y,
                  onPasswordVisibilityChangeRequest: (e) => (
                    e &&
                      (async (e, t, i, a) => {
                        const s = new l.Y(e).getRootDomain(),
                          o = !!i || !!a;
                        t &&
                          ((0, c.Kz)(
                            new n.UserRevealVaultItemFieldEvent({
                              field: n.Field.Password,
                              isProtected: o,
                              itemId: t,
                              itemType: n.ItemType.Credential
                            })
                          ),
                          (0, c.Kz)(
                            new n.AnonymousRevealVaultItemFieldEvent({
                              field: n.Field.Password,
                              itemType: n.ItemType.Credential,
                              domain: { id: await (0, n.hashDomain)(s), type: n.DomainType.Web }
                            })
                          ));
                      })(f.URL, x.id, f.requireMasterPassword, T.credentialsGloballyRequireMP),
                    y || !K() || T.showingPassword
                      ? (U({ ...T, showingPassword: e }), Promise.resolve())
                      : new Promise((e, t) => {
                          v({
                            action: b.P7.Show,
                            itemType: h.R.Password,
                            showNeverAskOption: !0,
                            credentialId: x.id,
                            successCallback: () => (U({ ...T, showingPassword: !0 }), e()),
                            cancelCallback: () => t()
                          });
                        })
                  ),
                  actions: W,
                  passwordStrength:
                    f.password && void 0 !== M && G === ve.rq.Success
                      ? {
                          score: M,
                          description: {
                            NoScore: V("webapp_credential_edition_field_generator_strength/none"),
                            TooGuessable: V("webapp_credential_edition_field_generator_strength/weak"),
                            VeryGuessable: V("webapp_credential_edition_field_generator_strength/very_guessable"),
                            SomewhatGuessable: V("webapp_credential_edition_field_generator_strength/somewhat_guessable"),
                            SafelyUnGuessable: V("webapp_credential_edition_field_generator_strength/safely_unguessable"),
                            VeryUnGuessable: V("webapp_credential_edition_field_generator_strength/very_unguessable")
                          },
                          descriptionId: M.toString()
                        }
                      : void 0
                }),
                T.showGeneratePassword
                  ? (0, w.tZ)(Ce, {
                      generatorSettings: T.generatorSettings,
                      setGeneratorSettings: (e) => {
                        U((t) => ({ ...t, generatorSettings: e }));
                      },
                      handleChangePassword: (e) => {
                        Y(e, "password");
                      },
                      handleClose: H
                    })
                  : null,
                (0, w.tZ)(Te, {
                  secretOrUrl: f.otpURL || f.otpSecret || "",
                  isEditable: !x.limitedPermissions,
                  url: f.URL,
                  title: f.itemName,
                  onCopy: re,
                  onSubmit: (e) => Y(e, "otpUrl"),
                  setHasOpenedDialogs: k
                }),
                y
                  ? null
                  : (0, w.tZ)(he, {
                      url: f.URL,
                      linkedWebsitesAddedByUser: x.linkedURLs.length > 0 ? x.linkedURLs : f.linkedURLs,
                      dashlaneDefinedLinkedWebsites: i,
                      hasUrlError: !1,
                      editViewButtonEnabled: !y && Boolean(f.URL),
                      limitedPermissions: x.limitedPermissions,
                      handleChange: Y,
                      handleGoToWebsite: () => oe(x.id, f.URL),
                      onClickAddNewWebsite: C,
                      isWebsiteFieldReadonly: x.isDiscontinuedUser || x.limitedPermissions
                    }),
                (0, w.tZ)(w.Kx, {
                  "data-name": "note",
                  "test-id": "credential_edit_note_value",
                  label: V("webapp_credential_edition_field_note"),
                  placeholder: V("webapp_credential_edition_field_placeholder_no_note"),
                  value: f.note,
                  disabled: x.limitedPermissions || x.isDiscontinuedUser,
                  onChange: Y,
                  sx: { marginTop: "8px" }
                })
              ),
              (0, w.tZ)(
                ge.u,
                { title: V("webapp_credential_box_title_organisation"), additionalSx: { marginBottom: "16px" } },
                (0, w.tZ)(w.qo, {
                  "data-name": "itemName",
                  label: V("webapp_credential_edition_field_name"),
                  placeholder: V("webapp_credential_edition_field_placeholder_no_title"),
                  value: f.itemName,
                  readOnly: !!f.itemName && (x.limitedPermissions || x.isDiscontinuedUser),
                  disabled: !f.itemName && (x.limitedPermissions || x.isDiscontinuedUser),
                  onChange: (e) => {
                    q || N(!0), Y(e);
                  },
                  sx: { marginBottom: "8px" }
                }),
                (0, w.tZ)(
                  w.u,
                  { content: V("webapp_credential_edition_field_force_categorized", { space: J }), passThrough: !me },
                  (0, w.tZ)(
                    "div",
                    null,
                    (0, w.tZ)(m.M, {
                      spaceId: null != (S = f.spaceId) ? S : "",
                      disabled: me,
                      onChange: $,
                      defaultSpaceId: null != (R = T.defaultSpaceId) ? R : "",
                      isUsingNewDesign: !0
                    })
                  )
                ),
                (0, w.tZ)(ae, {
                  hasLabel: !1,
                  spaceId: null != (L = f.spaceId) ? L : "",
                  vaultItemId: x.id,
                  vaultItemTitle: f.itemName,
                  ref: B,
                  signalEditedValues: I,
                  setHasOpenedDialogs: k,
                  isAddCollectionDisabled: x.isDiscontinuedUser
                })
              ),
              (0, w.tZ)(
                ge.u,
                { title: V("webapp_credential_box_title_preferences") },
                (0, w.tZ)(O, {
                  isNewCredential: !!y,
                  credentialPreferences: {
                    useAutoLogin: f.useAutoLogin,
                    requireMasterPassword: !!f.requireMasterPassword,
                    onlyAutofillExactDomain: !!f.onlyAutofillExactDomain
                  },
                  update: (e) => (
                    ee({
                      useAutoLogin: e.useAutoLogin,
                      requireMasterPassword: e.requireMasterPassword,
                      onlyAutofillExactDomain: e.onlyAutofillExactDomain
                    }),
                    Promise.resolve()
                  ),
                  isPreferenceDisabled: x.isDiscontinuedUser,
                  url: f.URL
                })
              )
            );
          }
        );
      Ae.displayName = "CredentialForm";
    },
    684098: (e, t, i) => {
      i.d(t, { d: () => u });
      var a,
        n = i(876307),
        s = i(488203),
        l = i(363338),
        o = i(611913),
        r = i(962899);
      const d = "webapp_credential_edition_field_website",
        c = "webapp_credential_edition_field_placeholder_no_url",
        p = "webapp_credential_edition_field_website_action_goto",
        u = ({
          url: e,
          hasUrlError: t,
          disabled: i,
          editViewButtonEnabled: u,
          isWebsiteFieldReadonly: _,
          handleChange: m,
          handleGoToWebsite: b,
          isUsingNewDesign: h = !1
        }) => {
          const { translate: g } = (0, s.Z)();
          return h
            ? (0, n.tZ)(n.qZ, {
                "data-name": "URL",
                label: g(d),
                placeholder: g(c),
                disabled: i || (!e && _),
                value: e,
                error: t,
                readOnly: !!e && _,
                onChange: m,
                sx: { marginTop: "8px" },
                showOpenWebsite: u ? { label: g(p), onClick: b } : void 0
              })
            : (0, n.tZ)(
                l.N,
                { enabled: u, disableHover: !0 },
                (0, n.tZ)(o.Z, {
                  label: g(d),
                  placeholder: g(c),
                  dataName: "URL",
                  disabled: i,
                  value: e,
                  error: t,
                  readOnly: _,
                  onChange: m
                }),
                (0, n.tZ)(
                  r.ua7,
                  { placement: "top", content: g(p) },
                  (0, n.tZ)(
                    n.zx,
                    {
                      mood: "neutral",
                      intensity: "supershy",
                      type: "button",
                      onClick: b,
                      sx: { border: "none", minWidth: "fit-content", padding: "10px" },
                      role: "link",
                      "aria-label": g(p)
                    },
                    a || (a = (0, n.tZ)(r.RTC, null))
                  )
                )
              );
        };
    },
    539506: (e, t, i) => {
      i.d(t, { E: () => s });
      var a = i(696832),
        n = i(876307);
      const s = ({ disabled: e = !1, handleOnClickAddLinkedWebsiteButton: t, label: i }) =>
        a.createElement(
          n.zx,
          { layout: "iconTrailing", icon: "ArrowRightOutlined", onClick: t, disabled: e, mood: "brand", intensity: "supershy" },
          i
        );
    },
    117534: (e, t, i) => {
      i.d(t, { Bq: () => p, SJ: () => r, cS: () => u, wb: () => d });
      var a = i(593039),
        n = i(164718),
        s = i(740300),
        l = i(45272),
        o = i(561605);
      const r = (e, t) => [...e, ...t].filter(Boolean).some((i) => !(e.includes(i) && t.includes(i))),
        d = async (e, t) => {
          const i = t.filter((t) => t && !e.linkedURLs.includes(t)).map((e) => new n.Y(e).getRootDomain()),
            a = i.map(
              async (t) =>
                await s.C.getCredentialsByDomain(
                  ((e, t) => ({
                    domain: e,
                    sortToken: { sortCriteria: [{ field: "lastUse", direction: "descend" }], uniqField: "id" },
                    filterToken: { filterCriteria: [{ field: "email", value: t, type: "equals" }] }
                  }))(t, e.email)
                )
            );
          return (await Promise.all(a))
            .map((e, t) => ({ ...e, linkedWebsite: i[t] }))
            .filter((e) => e.matchingCount > 0)
            .map((e) => ({ credentialName: e.items[0].title, linkedWebsite: e.linkedWebsite }));
        },
        c = async (e) => await Promise.all(e.map((e) => (0, a.hashDomain)(new n.Y(e).getRootDomain()))),
        p = async (e, t) => {
          const i = t.filter((t) => t && !e.linkedURLs.includes(t)),
            s = e.linkedURLs.filter((e) => e && !t.includes(e)),
            o = new n.Y(e.URL).getRootDomain();
          (0, l.Kz)(
            new a.AnonymousUpdateCredentialEvent({
              action: a.Action.Edit,
              associatedWebsitesAddedList: await c(i),
              associatedWebsitesRemovedList: await c(s),
              fieldList: [a.Field.AssociatedWebsitesList],
              domain: { type: a.DomainType.Web, id: await (0, a.hashDomain)(o) },
              space: e.spaceId ? a.Space.Professional : a.Space.Personal
            })
          ),
            (0, l.Kz)(
              new a.UserUpdateVaultItemEvent({
                action: a.Action.Edit,
                itemId: e.id,
                itemType: a.ItemType.Credential,
                fieldsEdited: [a.Field.AssociatedWebsitesList],
                space: e.spaceId ? a.Space.Professional : a.Space.Personal
              })
            );
        },
        u = async (e, t) => {
          const i = new n.Y(e);
          (0, l.Kz)(
            new a.UserOpenExternalVaultItemLinkEvent({ domainType: a.DomainType.Web, itemId: t, itemType: a.ItemTypeWithLink.Credential })
          ),
            (0, l.Kz)(
              new a.AnonymousOpenExternalVaultItemLinkEvent({
                itemType: a.ItemTypeWithLink.Credential,
                domain: { id: await (0, a.hashDomain)(i.getRootDomain()), type: a.DomainType.Web }
              })
            ),
            (0, o.Yo)(i.getUrlWithFallbackHttpsProtocol());
        };
    },
    684985: (e, t, i) => {
      i.d(t, { a: () => m });
      var a,
        n = i(696832),
        s = i(139378),
        l = i.n(s),
        o = i(876307),
        r = i(488203),
        d = i(539506),
        c = i(117534);
      const p = "webapp_credential_linked_websites_action_delete",
        u = "webapp_credential_linked_websites_action_goto",
        _ = (e) => {
          const t = e.match(/^(?:\w+:\/\/)?(.*)$/);
          return t && t.length >= 2 ? t[1] : e;
        },
        m = n.memo(
          ({
            linkedWebsitesList: e,
            credentialId: t,
            isListEditable: i = !1,
            isEditing: s = !1,
            showUrlProtocol: m = !1,
            updateLinkedWebsitesList: b
          }) => {
            const { translate: h } = (0, r.Z)(),
              g = n.useRef(null),
              [w, f] = n.useState(!1),
              [y, C] = n.useState(e.length),
              [v, x] = n.useState(e.map((e, t) => ({ linkedWebsite: e, id: t }))),
              Z = (e) => {
                f(!0);
                const t = y + 1;
                x([...v, { linkedWebsite: "", id: t }]), C(t), e?.preventDefault(), e?.stopPropagation();
              },
              k = (e) => {
                const { name: t, value: i } = e.target,
                  a = Number(t),
                  n = v.findIndex((e) => e.id === a);
                if (-1 !== n) {
                  const e = l().cloneDeep(v);
                  (e[n].linkedWebsite = i), x(e);
                }
              },
              I = (e) => {
                "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), Z());
              };
            return (
              n.useEffect(() => {
                s && Z();
              }, []),
              n.useEffect(() => {
                y !== e.length && g.current?.focus();
              }, [y]),
              n.useEffect(() => {
                b?.(v.map(({ linkedWebsite: e }) => e)),
                  ((e) => {
                    e.every((e) => e.linkedWebsite) ? f(!1) : f(!0);
                  })(v);
              }, [b, JSON.stringify(v)]),
              (0, o.tZ)(
                "div",
                null,
                i
                  ? (0, o.tZ)(
                      "div",
                      null,
                      v.map(({ linkedWebsite: e, id: i }, n) =>
                        (0, o.tZ)(o.qZ, {
                          className: "row",
                          key: i,
                          name: i.toString(),
                          label: "example.com",
                          labelPersists: !1,
                          placeholder: h("webapp_credential_linked_websites_new_website_placeholder"),
                          ref: g,
                          onChange: k,
                          onKeyDown: I,
                          value: e,
                          showOpenWebsite: { label: h(u), onClick: () => (0, c.cS)(e, t) },
                          actions: [
                            (0, o.tZ)(o.zx, {
                              key: "delete",
                              "data-testid": "delete-button",
                              layout: "iconOnly",
                              mood: "brand",
                              intensity: "supershy",
                              onClick: () =>
                                ((e) => {
                                  x(v.filter((t) => t.id !== e));
                                })(i),
                              "aria-label": h(p),
                              icon: a || (a = (0, o.tZ)(o.JO, { name: "ActionDeleteOutlined" })),
                              tooltip: h(p)
                            })
                          ],
                          sx: { marginTop: 0 === n ? "0px" : "8px" }
                        })
                      ),
                      (0, o.tZ)(
                        "div",
                        { sx: { display: "flex", justifyContent: "flex-end" } },
                        (0, o.tZ)(d.E, {
                          disabled: w,
                          handleOnClickAddLinkedWebsiteButton: Z,
                          label: h("webapp_credential_edition_linked_websites_add_website")
                        })
                      )
                    )
                  : (0, o.tZ)(
                      "div",
                      null,
                      v.map(({ linkedWebsite: e, id: i }, a) =>
                        (0, o.tZ)(o.qZ, {
                          className: "readonly-row",
                          key: i,
                          label: "example.com",
                          labelPersists: !1,
                          readOnly: !0,
                          value: m ? e : _(e),
                          showOpenWebsite: { label: h(u), onClick: () => (0, c.cS)(e, t) },
                          sx: { marginTop: 0 === a ? "0px" : "8px" }
                        })
                      )
                    )
              )
            );
          }
        );
    }
  }
]);
