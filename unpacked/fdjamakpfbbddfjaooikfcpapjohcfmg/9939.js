"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9939],
  {
    289939: (e, t, i) => {
      i.r(t), i.d(t, { SecretAddPanel: () => C });
      var n = i(689611),
        s = i(886662),
        a = i(696832),
        r = i(876307),
        o = i(148038),
        l = i(739649),
        c = i(692077),
        d = i(740300),
        p = i(114943),
        u = i(276376),
        m = i(376452),
        _ = i(615940),
        g = i(289243),
        h = i(518544);
      const { CONTENT: b } = _.SecretsTabs,
        S = {},
        v = { strategies: S },
        C = (0, n.$)(
          (0, s.i)(({ lee: e }) => {
            var t;
            const { routes: i } = (0, u.Xo)(),
              n = (0, p.Y)(),
              [s, _] = (0, a.useState)(b),
              [S, v] = (0, a.useState)(!1),
              [C, f] = (0, a.useState)(!1),
              [I, Z] = (0, a.useState)({ spaceId: null != (t = (0, l.B)(e.globalState)) ? t : "" }),
              [y, x] = (0, a.useState)(""),
              [w, T] = (0, a.useState)(""),
              E = { id: "", limitedPermissions: !1, content: y, title: w, ...I };
            if (n.status !== o.rq.Success || !n?.data) return null;
            const P = () => {
                (0, c.uX)(i.userSecrets);
              },
              A = () => v(!0);
            return (0, r.tZ)(
              m.zI,
              {
                isViewingExistingItem: !1,
                itemHasBeenEdited: S,
                submitPending: C,
                onSubmit: async () => {
                  if (!C) {
                    f(!0);
                    try {
                      await (async () => {
                        await d.C.addSecret({ ...I, content: y, title: w });
                      })();
                    } catch {
                      f(!1);
                    }
                    P();
                  }
                },
                primaryActions: [],
                onNavigateOut: () => {
                  P();
                },
                formId: "add_secret_panel",
                header: (0, r.tZ)(g.h, {
                  activeTab: s,
                  displaySharedAccess: !1,
                  setActiveTab: _,
                  title: w,
                  setTitle: (e) => {
                    A(), T(e);
                  }
                })
              },
              (0, r.tZ)(h.e, { activeTab: s, data: E, content: y, setContent: x, isAdmin: !1, onModifyData: A, saveSecretOptions: Z })
            );
          }, v),
          S
        );
    },
    615940: (e, t, i) => {
      i.d(t, { SecretsTabs: () => n });
      let n = (function (e) {
        return (
          (e[(e.CONTENT = 0)] = "CONTENT"), (e[(e.MORE_OPTIONS = 1)] = "MORE_OPTIONS"), (e[(e.SHARED_ACCESS = 2)] = "SHARED_ACCESS"), e
        );
      })({});
    },
    289243: (e, t, i) => {
      i.d(t, { h: () => m });
      var n = i(876307),
        s = i(615940),
        a = i(488203),
        r = i(376452),
        o = i(573630);
      const l = ({ title: e, disabled: t = !1, onChange: i }) => {
        const { translate: s } = (0, a.Z)(),
          r = s("webapp_secure_notes_addition_field_placeholder_no_title");
        return (0, n.tZ)(
          o.Z,
          { sx: { display: "block", width: "100%" }, tooltipText: e || r },
          (0, n.tZ)("input", {
            sx: {
              color: "ds.text.neutral.catchy",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "24px",
              lineHeight: "30px",
              fontWeight: "600",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "100%",
              fontFamily: "'GT Walsheim Pro', 'Helvetica', 'Arial', 'sans-serif'",
              "&:focus": { outline: "none", border: "none" }
            },
            placeholder: r,
            value: e || "",
            disabled: t,
            onChange: i
          })
        );
      };
      var c;
      const { CONTENT: d, MORE_OPTIONS: p, SHARED_ACCESS: u } = s.SecretsTabs,
        m = ({ activeTab: e, setActiveTab: t, disabled: i, displaySharedAccess: s, recipientsCount: o, title: m, setTitle: _ }) => {
          const { translate: g } = (0, a.Z)(),
            h = [{ active: e === d, label: g("webapp_secrets_edition_field_tab_title_details"), onClick: () => t(d) }];
          return (
            s &&
              h.push({
                active: e === u,
                label: `${g("webapp_secure_notes_edition_field_tab_title_shared_access")} (${o})`,
                onClick: () => t(u)
              }),
            h.push({ active: e === p, label: g("webapp_secure_notes_edition_field_tab_title_options"), onClick: () => t(p) }),
            (0, n.tZ)(r.V9, {
              icon: c || (c = (0, n.tZ)(n.JO, { name: "RecoveryKeyOutlined", color: "ds.text.neutral.standard" })),
              title: (0, n.tZ)(l, { title: m, disabled: i, onChange: (e) => _(e.target.value) }),
              tabs: h
            })
          );
        };
    },
    518544: (e, t, i) => {
      i.d(t, { i: () => f, e: () => I });
      var n = i(696832),
        s = i(773817),
        a = i(615940),
        r = i(555449),
        o = i(962899),
        l = i(488203),
        c = i(876307);
      const d = ({ fieldRef: e, value: t, name: i, placeholder: n, disabled: s, onChange: a }) =>
        (0, c.tZ)(
          "div",
          { className: "content--CXM0AnQTUc" },
          (0, c.tZ)("textarea", {
            ref: e,
            name: i,
            className: "textarea--AzmOq0n9Ly",
            sx: { color: "ds.text.neutral.catchy" },
            placeholder: n,
            value: t || "",
            disabled: s,
            onChange: (e) => {
              a && a(e);
            }
          })
        );
      var p = i(71846);
      const u = ({ content: e, setContent: t, limitedPermissions: i }) => {
        const { translate: s } = (0, l.Z)(),
          [a, r] = (0, n.useState)(!1),
          c = (0, n.useRef)(null);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(d, {
            fieldRef: c,
            placeholder: s("webapp_secrets_addition_field_placeholder_no_content"),
            value: e,
            disabled: i,
            onChange: ({ target: { value: i } }) => {
              const n = i.length > e.length,
                s = e.length >= f;
              if (n && s) return;
              const a = n && i.length > f,
                o = a ? e : i;
              r(a), t(o);
            }
          }),
          a &&
            n.createElement(
              "div",
              { className: "alertContainer--mkHl7uO2wU" },
              n.createElement(p.n, {
                id: Math.floor(1e6 * Math.random()),
                message: s("webapp_secure_notes_addition_field_copy_past_error"),
                onHide: () => {
                  r(!1);
                },
                severity: o.BLW.WARNING
              })
            )
        );
      };
      var m = i(383849),
        _ = i.n(m);
      const g = ({ maxAuthorizedSize: e, currentSize: t }) => {
        const { translate: i } = (0, l.Z)(),
          s = 0.95 * e,
          a = 0.995 * e,
          r = e - t,
          o =
            t > e
              ? i("webapp_secure_notes_edition_field_text_over_limit", { overLimit: -r })
              : i("webapp_secure_notes_edition_field_text_max_size_reached", { charLeft: r });
        return t >= s
          ? n.createElement("div", { className: _()("greyWarningCharLeft--FuXiOxlZJX", t >= a ? "redWarningCharLeft--VgzyxMFS1z" : {}) }, o)
          : null;
      };
      var h = i(167406);
      const b = ({ data: e, saveSecretOptions: t }) => {
          var i;
          const [s, a] = (0, n.useState)(null != (i = e?.spaceId) ? i : "");
          return (0, c.tZ)(
            o.Ejs,
            { flexDirection: "column" },
            (0, c.tZ)(h.M, {
              labelSx: h.e,
              spaceId: null != s ? s : "",
              onChange: (e) => {
                a(e), t({ spaceId: e });
              }
            })
          );
        },
        { CONTENT: S, MORE_OPTIONS: v, SHARED_ACCESS: C } = a.SecretsTabs,
        f = 1e4,
        I = ({ activeTab: e, data: t, content: i, setContent: a, isAdmin: o, onModifyData: l, saveSecretOptions: c }) => {
          var d;
          return (0, s.tZ)(
            n.Fragment,
            null,
            e === S &&
              (0, s.tZ)(
                n.Fragment,
                null,
                (0, s.tZ)(
                  "div",
                  { className: "formContent--eLnnqSgzya" },
                  (0, s.tZ)(u, {
                    content: i,
                    setContent: (e) => {
                      l(), a(e);
                    },
                    limitedPermissions: t.limitedPermissions
                  })
                ),
                (0, s.tZ)(g, { maxAuthorizedSize: f, currentSize: i.length })
              ),
            e === C && (0, s.tZ)(r.u, { isAdmin: o, id: t.id }),
            e === v &&
              (0, s.tZ)(b, {
                data: { spaceId: null != (d = t.spaceId) ? d : "" },
                saveSecretOptions: (e) => {
                  c(e);
                }
              })
          );
        };
    },
    979808: (e, t, i) => {
      i.d(t, { r: () => a });
      var n = i(799852),
        s = i(348958);
      const a = (e) => (0, n.k)(s.X, "sharedAccessForItem", { itemId: e });
    },
    555449: (e, t, i) => {
      i.d(t, { u: () => k });
      var n,
        s,
        a = i(696832),
        r = i(876307),
        o = i(962899),
        l = i(361607),
        c = i(482598),
        d = i(133354),
        p = i(172721),
        u = i(11098),
        m = i(287279),
        _ = i(740300),
        g = i(488203),
        h = i(343194),
        b = i(448263),
        S = i(232814),
        v = i(904967),
        C = i(873670),
        f = i(989572),
        I = i(58037);
      const Z = ({ cancelStatus: e, itemGroupId: t, setCancelStatus: i, recipientId: l }) => {
        const { translate: c } = (0, g.Z)(),
          d = e === b.V.Loading,
          p = { type: "user", alias: l };
        (0, a.useEffect)(() => {
          let t;
          return (
            e === b.V.Failure && (t = window.setTimeout(() => i(null), 2e3)),
            () => {
              clearTimeout(t);
            }
          );
        }, [e, i]);
        const u = e ? () => i(null) : () => i(b.V.Confirm);
        return e === b.V.Failure
          ? (0, r.tZ)(
              "div",
              { sx: { color: "ds.text.danger.standard", display: "flex", alignItems: "center" } },
              n || (n = (0, r.tZ)(o.aNP, { color: "ds.text.danger.standard" })),
              " ",
              c("webapp_shared_access_cancel_failure")
            )
          : (0, r.tZ)(
              "div",
              null,
              (0, r.tZ)(
                r.zx,
                { intensity: e ? "quiet" : "supershy", disabled: d, onClick: u, size: "small" },
                c(e ? "webapp_shared_access_cancel" : "webapp_shared_access_cancel_invitation")
              ),
              e
                ? (0, r.tZ)(
                    r.zx,
                    {
                      mood: "danger",
                      intensity: "catchy",
                      sx: { ml: "16px" },
                      disabled: d,
                      size: "small",
                      onClick: () =>
                        (async () => {
                          i(b.V.Loading);
                          const e = await (async () => {
                            try {
                              const { success: e } = await _.C.revokeSharing({ itemGroupId: t, recipient: p });
                              return e;
                            } catch (e) {
                              return !1;
                            }
                          })();
                          i(e ? b.V.Success : b.V.Failure);
                        })()
                    },
                    d ? s || (s = (0, r.tZ)(o.HoD, null)) : c("webapp_shared_access_confirm")
                  )
                : null
            );
      };
      var y;
      const x = "webapp_sharing_permissions_full_rights",
        w = "webapp_sharing_permissions_limited_rights",
        T = (e) => {
          const { status: t, permission: i } = e;
          return "pending" === t ? "webapp_shared_access_pending_invitation" : "accepted" === t ? ("admin" === i ? x : w) : "";
        },
        E = ({ itemGroupId: e, openEditPermissionsDialog: t, member: i, isAdmin: n, isItemPermissionsEnabled: s = !1 }) => {
          const [o, l] = (0, a.useState)(null),
            c = (0, I.j)()?.login,
            { translate: d } = (0, g.Z)();
          if (o === b.V.Success) return null;
          const { permission: p, status: m, recipientType: _ } = i,
            h = c === i.recipientId,
            E = n && c !== i.recipientId,
            P =
              "pending" === m
                ? (0, r.tZ)(Z, { recipientId: i.recipientId, itemGroupId: e, cancelStatus: o, setCancelStatus: l })
                : (0, r.tZ)(
                    C.M,
                    {
                      disabled: (s && !n) || (!s && i.recipientType === u.I.Collection),
                      icon: "ActionEditOutlined",
                      layout: "iconLeading",
                      intensity: "supershy",
                      onClick: () => t(i, p, _),
                      content: d("webapp_sharing_collection_access_description_tooltip"),
                      tooltipSx: { textWrap: "wrap", maxWidth: "240px" },
                      size: "small"
                    },
                    d("webapp_shared_access_edit_permissions")
                  );
          return (0, r.tZ)(
            "li",
            { key: i.recipientId, sx: { alignItems: "center", display: "flex", minHeight: "48px", position: "relative" } },
            (0, r.tZ)(v.r, {
              infoAction: E ? P : null,
              logo: i.recipientType === u.I.Group ? y || (y = (0, r.tZ)(f.Z, null)) : (0, r.tZ)(S.q, { email: i.recipientName, size: 36 }),
              text: s ? void 0 : T(i) ? d(T(i)) : d("webapp_shared_permissions_dialog_revoke_success_title"),
              title: i.recipientName,
              permissionBadge: s ? (0, r.tZ)(r.Ct, { mood: "admin" === p ? "brand" : "danger", label: d("admin" === p ? x : w) }) : void 0,
              disabled: o === b.V.Loading,
              titleLogo: h
                ? (0, r.tZ)(r.Ct, {
                    label: d("webapp_shared_access_you_badge").toUpperCase(),
                    layout: "labelOnly",
                    sx: { marginLeft: "4px" }
                  })
                : null
            })
          );
        };
      var P = i(979808),
        A = i(468037),
        O = i(814341);
      const k = ({ id: e, isAdmin: t }) => {
        const { translate: i } = (0, g.Z)(),
          [n, s] = (0, a.useState)(!1),
          [S, v] = (0, a.useState)(null),
          C = (0, l._)(),
          { data: f, status: I } = (0, P.r)(e),
          { updatePermissionForCollectionItem: Z, removeItemFromCollections: y } = (0, c.u)(p.a),
          x = Boolean(C.data?.sharingVault_web_Collection_Item_Permissions_dev);
        if (I !== d.rq.Success)
          return (0, r.tZ)(o.HoD, { color: "ds.container.expressive.brand.catchy.idle", size: 50, sx: { alignSelf: "center", m: "20px" } });
        const { itemGroupId: w, users: T, groups: k, collections: N } = f,
          D = (e) => {
            S && v({ ...S, step: e });
          },
          z = async () => {
            if (!S) return;
            const { recipient: t, permission: i, recipientType: n } = S;
            s(!0);
            const a =
              "revoke" === i
                ? await (async (t, i) => {
                    try {
                      if (i === u.I.Collection) {
                        const i = await y({ collectionIds: [t.recipientId], itemId: e });
                        return !!(0, m.d6)(i);
                      }
                      const { success: n } = await _.C.revokeSharing({ itemGroupId: null != w ? w : "", recipient: (0, O.d)(t) });
                      return n;
                    } catch (e) {
                      return !1;
                    }
                  })(t, n)
                : await (async (e, t, i) => {
                    try {
                      if (i === u.I.Collection) {
                        const i = await Z({ groupId: w, collection: { collectionUUID: e.recipientId, permission: t } });
                        return !!(0, m.d6)(i);
                      }
                      {
                        const { success: i } = await _.C.updateSharingPermission({
                          itemGroupId: null != w ? w : "",
                          recipient: (0, O.d)(e),
                          permission: t
                        });
                        return i;
                      }
                    } catch (e) {
                      return !1;
                    }
                  })(t, i, n);
            if (a) {
              const e = "revoke" === i ? b.PermissionDialogStep.RevokeSuccess : b.PermissionDialogStep.Success;
              D(e);
            } else D(b.PermissionDialogStep.Failure);
            s(!1);
          },
          R = (e, t, i) => {
            const n = {
              recipient: e,
              recipientType: i,
              permission: t,
              originPermission: t,
              step: b.PermissionDialogStep.Permission,
              name: e.recipientName
            };
            v(n);
          },
          V = k?.length > 0,
          F = N?.length > 0,
          G = T?.length > 0,
          L = "collection" === S?.recipientType;
        return (0, r.tZ)(
          "div",
          { sx: { flex: "1", overflowY: "auto" } },
          (0, r.tZ)(
            "ul",
            { sx: { flex: "1" } },
            F
              ? (0, r.tZ)(
                  A.u,
                  { title: i("webapp_shared_access_collections"), additionalSx: { marginBottom: "16px" } },
                  N.map((e) =>
                    (0, r.tZ)(E, {
                      isItemPermissionsEnabled: x,
                      key: e.recipientId,
                      isAdmin: t,
                      member: e,
                      itemGroupId: null != w ? w : "",
                      openEditPermissionsDialog: R
                    })
                  )
                )
              : null,
            V
              ? (0, r.tZ)(
                  A.u,
                  { title: i("webapp_shared_access_groups_card_title"), additionalSx: { marginBottom: "16px" } },
                  k.map((e) =>
                    (0, r.tZ)(E, {
                      key: e.recipientId,
                      isAdmin: t,
                      member: e,
                      itemGroupId: null != w ? w : "",
                      openEditPermissionsDialog: R
                    })
                  )
                )
              : null,
            G
              ? (0, r.tZ)(
                  A.u,
                  { title: i("webapp_shared_access_individuals_card_title") },
                  T.map((e) =>
                    (0, r.tZ)(E, {
                      key: e.recipientId,
                      isAdmin: t,
                      member: e,
                      itemGroupId: null != w ? w : "",
                      openEditPermissionsDialog: R
                    })
                  )
                )
              : null
          ),
          S &&
            (0, r.tZ)(h.E, {
              isOpen: !0,
              isCollectionItemPermission: L,
              loading: n,
              onCancelRevoke: () => {
                S && v({ ...S, step: b.PermissionDialogStep.Permission });
              },
              onConfirmRevoke: z,
              onDismiss: () => v(null),
              onSelectPermission: (e) => {
                S && v({ ...S, permission: e });
              },
              onValidatePermission: () => {
                "revoke" === S?.permission ? v({ ...S, step: b.PermissionDialogStep.ConfirmRevoke }) : z();
              },
              permission: S.permission,
              recipient: S.recipient,
              step: S.step
            })
        );
      };
    }
  }
]);
