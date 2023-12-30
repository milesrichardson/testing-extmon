"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [6612],
  {
    556612: (e, t, i) => {
      i.r(t), i.d(t, { SecretEditPanel: () => Z });
      var a = i(696832),
        n = i(448430),
        s = i(382706),
        r = i(740300),
        l = i(488203),
        o = i(692077),
        c = i(276376),
        d = i(625078),
        u = i(615940),
        _ = i(762042),
        p = i(682994),
        m = i(376452),
        S = i(99822),
        h = i(518544),
        b = i(289243),
        g = i(833090),
        v = i(66485),
        C = i(133354),
        f = i(979808);
      const { CONTENT: T } = u.SecretsTabs,
        A = ({ location: e, secret: t, isShared: i, isAdmin: n, isSharedViaUserGroup: A, isLastAdmin: E }) => {
          const { translate: y } = (0, l.Z)(),
            { routes: I } = (0, c.Xo)(),
            [w, O] = (0, a.useState)(T),
            [x, Z] = (0, a.useState)(!1),
            [N] = (0, a.useState)(null),
            [D, L] = (0, a.useState)(!1),
            [P, R] = (0, a.useState)(!1),
            [k, z] = (0, a.useState)(() => t.content),
            [q, F] = (0, a.useState)(() => t.title),
            { data: M, status: H } = (0, f.r)(t.id),
            { shouldShowTrialDiscontinuedDialog: U } = (0, v.yp)(),
            V = () => {
              e?.state?.entity ? (0, d.d)({ routes: I, location: e }) : (0, o.uX)(I.userSecrets);
            };
          if (!t) return V(), null;
          const G = () => Z(!0),
            W = {
              confirmDeleteConfirm: y("webapp_secure_notes_edition_delete_confirm"),
              confirmDeleteDismiss: y("webapp_credential_edition_delete_dismiss"),
              confirmDeleteSubtitle: y("webapp_credential_edition_confirm_delete_subtitle"),
              confirmDeleteTitle: y("webapp_secure_notes_edition_delete_title"),
              lastAdminActionLabel: y("webapp_credential_edition_change_permissions"),
              lastAdminTitle: y("webapp_credential_edition_last_admin_title"),
              lastAdminSubtitle: y("webapp_credential_edition_last_admin_subtitle"),
              groupSharingTitle: y("webapp_secure_notes_edition_group_sharing_title"),
              groupSharingSubtitle: y("webapp_credential_edition_group_sharing_subtitle"),
              genericErrorTitle: "webapp_account_recovery_generic_error_title",
              genericErrorSubtitle: "webapp_account_recovery_generic_error_subtitle"
            };
          if (null === U) return null;
          const X = { content: t.content, id: t.id, limitedPermissions: i && !n, spaceId: t.spaceId, title: t.title },
            $ = i && H === C.rq.Success ? M.count : 0;
          return a.createElement(
            m.zI,
            {
              isViewingExistingItem: !0,
              itemHasBeenEdited: x,
              onSubmit: async () => {
                var e;
                R(!0);
                const i = null != N ? N : { spaceId: null != (e = t.spaceId) ? e : "" };
                await r.C.updateSecret({ content: k, title: q, id: t.id, ...i }), R(!1), V();
              },
              submitPending: P,
              secondaryActions:
                w === T
                  ? [
                      a.createElement(_._, {
                        key: "shareaction",
                        id: t.id,
                        isShared: i,
                        isAdmin: n,
                        isDiscontinuedUser: U,
                        getSharing: S.fl
                      }),
                      a.createElement(g.q, {
                        key: "copyaction",
                        copyValue: k,
                        buttonText: y("webapp_credential_edition_field_generic_action_copy")
                      })
                    ]
                  : [],
              onNavigateOut: V,
              onClickDelete: () => L(!0),
              ignoreCloseOnEscape: D,
              isSomeDialogOpen: D,
              formId: "edit_secret_panel",
              header: a.createElement(b.h, {
                activeTab: w,
                displaySharedAccess: i,
                recipientsCount: $,
                setActiveTab: O,
                disabled: i && !n,
                title: q,
                setTitle: (e) => {
                  G(), F(e);
                }
              })
            },
            a.createElement(h.e, {
              activeTab: w,
              data: X,
              content: k,
              setContent: z,
              isAdmin: n,
              onModifyData: G,
              saveSecretOptions: (e) => {
                const { spaceId: i } = e;
                r.C.updateSecret({ id: t.id, spaceId: null != i ? i : "" });
              }
            }),
            a.createElement(p.s, {
              isVisible: D,
              itemId: t.id,
              closeConfirmDeleteDialog: () => L(!1),
              goToSharingAccess: () => {
                O(u.SecretsTabs.SHARED_ACCESS);
              },
              onDeletionSuccess: V,
              translations: W,
              vaultItemType: s.U.Secret,
              isShared: i,
              isLastAdmin: E,
              isSharedViaUserGroup: A
            })
          );
        };
      var E = i(995445),
        y = i(799852),
        I = i(348958),
        w = i(982466),
        O = i(830894);
      const x = (e) => {
          const { secret: t } = e,
            i = (0, O.tY)(),
            {
              getPermissionForItem: n,
              getSharingStatusForItem: s,
              getIsLastAdminForItem: r
            } = (0, E.Y)(
              I.X,
              {
                getPermissionForItem: { queryParam: { itemId: t.id } },
                getSharingStatusForItem: { queryParam: { itemId: t.id } },
                getIsLastAdminForItem: { queryParam: { itemId: t.id } }
              },
              []
            );
          if (n.status !== C.rq.Success || s.status !== C.rq.Success || r.status !== C.rq.Success) return null;
          const { isShared: l, isSharedViaUserGroup: o } = s.data,
            { isLastAdmin: c } = r.data;
          return a.createElement(A, {
            ...e,
            ...i,
            isShared: l,
            isAdmin: l && n.data.permission === w.y3.Admin,
            isSharedViaUserGroup: o,
            isLastAdmin: c
          });
        },
        Z = (e) => {
          const { data: t, status: i } = (0, y.k)(n.L, "query", { vaultItemTypes: [s.U.Secret], ids: [`{${e.match.params.uuid}}`] });
          return i === C.rq.Loading
            ? null
            : t?.secretsResult.items.length
            ? a.createElement(x, { ...e, secret: t.secretsResult.items[0] })
            : (e.onClose(), null);
        };
    },
    615940: (e, t, i) => {
      i.d(t, { SecretsTabs: () => a });
      let a = (function (e) {
        return (
          (e[(e.CONTENT = 0)] = "CONTENT"), (e[(e.MORE_OPTIONS = 1)] = "MORE_OPTIONS"), (e[(e.SHARED_ACCESS = 2)] = "SHARED_ACCESS"), e
        );
      })({});
    },
    289243: (e, t, i) => {
      i.d(t, { h: () => p });
      var a = i(876307),
        n = i(615940),
        s = i(488203),
        r = i(376452),
        l = i(573630);
      const o = ({ title: e, disabled: t = !1, onChange: i }) => {
        const { translate: n } = (0, s.Z)(),
          r = n("webapp_secure_notes_addition_field_placeholder_no_title");
        return (0, a.tZ)(
          l.Z,
          { sx: { display: "block", width: "100%" }, tooltipText: e || r },
          (0, a.tZ)("input", {
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
      const { CONTENT: d, MORE_OPTIONS: u, SHARED_ACCESS: _ } = n.SecretsTabs,
        p = ({ activeTab: e, setActiveTab: t, disabled: i, displaySharedAccess: n, recipientsCount: l, title: p, setTitle: m }) => {
          const { translate: S } = (0, s.Z)(),
            h = [{ active: e === d, label: S("webapp_secrets_edition_field_tab_title_details"), onClick: () => t(d) }];
          return (
            n &&
              h.push({
                active: e === _,
                label: `${S("webapp_secure_notes_edition_field_tab_title_shared_access")} (${l})`,
                onClick: () => t(_)
              }),
            h.push({ active: e === u, label: S("webapp_secure_notes_edition_field_tab_title_options"), onClick: () => t(u) }),
            (0, a.tZ)(r.V9, {
              icon: c || (c = (0, a.tZ)(a.JO, { name: "RecoveryKeyOutlined", color: "ds.text.neutral.standard" })),
              title: (0, a.tZ)(o, { title: p, disabled: i, onChange: (e) => m(e.target.value) }),
              tabs: h
            })
          );
        };
    },
    518544: (e, t, i) => {
      i.d(t, { i: () => f, e: () => T });
      var a = i(696832),
        n = i(773817),
        s = i(615940),
        r = i(555449),
        l = i(962899),
        o = i(488203),
        c = i(876307);
      const d = ({ fieldRef: e, value: t, name: i, placeholder: a, disabled: n, onChange: s }) =>
        (0, c.tZ)(
          "div",
          { className: "content--CXM0AnQTUc" },
          (0, c.tZ)("textarea", {
            ref: e,
            name: i,
            className: "textarea--AzmOq0n9Ly",
            sx: { color: "ds.text.neutral.catchy" },
            placeholder: a,
            value: t || "",
            disabled: n,
            onChange: (e) => {
              s && s(e);
            }
          })
        );
      var u = i(71846);
      const _ = ({ content: e, setContent: t, limitedPermissions: i }) => {
        const { translate: n } = (0, o.Z)(),
          [s, r] = (0, a.useState)(!1),
          c = (0, a.useRef)(null);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(d, {
            fieldRef: c,
            placeholder: n("webapp_secrets_addition_field_placeholder_no_content"),
            value: e,
            disabled: i,
            onChange: ({ target: { value: i } }) => {
              const a = i.length > e.length,
                n = e.length >= f;
              if (a && n) return;
              const s = a && i.length > f,
                l = s ? e : i;
              r(s), t(l);
            }
          }),
          s &&
            a.createElement(
              "div",
              { className: "alertContainer--mkHl7uO2wU" },
              a.createElement(u.n, {
                id: Math.floor(1e6 * Math.random()),
                message: n("webapp_secure_notes_addition_field_copy_past_error"),
                onHide: () => {
                  r(!1);
                },
                severity: l.BLW.WARNING
              })
            )
        );
      };
      var p = i(383849),
        m = i.n(p);
      const S = ({ maxAuthorizedSize: e, currentSize: t }) => {
        const { translate: i } = (0, o.Z)(),
          n = 0.95 * e,
          s = 0.995 * e,
          r = e - t,
          l =
            t > e
              ? i("webapp_secure_notes_edition_field_text_over_limit", { overLimit: -r })
              : i("webapp_secure_notes_edition_field_text_max_size_reached", { charLeft: r });
        return t >= n
          ? a.createElement("div", { className: m()("greyWarningCharLeft--FuXiOxlZJX", t >= s ? "redWarningCharLeft--VgzyxMFS1z" : {}) }, l)
          : null;
      };
      var h = i(167406);
      const b = ({ data: e, saveSecretOptions: t }) => {
          var i;
          const [n, s] = (0, a.useState)(null != (i = e?.spaceId) ? i : "");
          return (0, c.tZ)(
            l.Ejs,
            { flexDirection: "column" },
            (0, c.tZ)(h.M, {
              labelSx: h.e,
              spaceId: null != n ? n : "",
              onChange: (e) => {
                s(e), t({ spaceId: e });
              }
            })
          );
        },
        { CONTENT: g, MORE_OPTIONS: v, SHARED_ACCESS: C } = s.SecretsTabs,
        f = 1e4,
        T = ({ activeTab: e, data: t, content: i, setContent: s, isAdmin: l, onModifyData: o, saveSecretOptions: c }) => {
          var d;
          return (0, n.tZ)(
            a.Fragment,
            null,
            e === g &&
              (0, n.tZ)(
                a.Fragment,
                null,
                (0, n.tZ)(
                  "div",
                  { className: "formContent--eLnnqSgzya" },
                  (0, n.tZ)(_, {
                    content: i,
                    setContent: (e) => {
                      o(), s(e);
                    },
                    limitedPermissions: t.limitedPermissions
                  })
                ),
                (0, n.tZ)(S, { maxAuthorizedSize: f, currentSize: i.length })
              ),
            e === C && (0, n.tZ)(r.u, { isAdmin: l, id: t.id }),
            e === v &&
              (0, n.tZ)(b, {
                data: { spaceId: null != (d = t.spaceId) ? d : "" },
                saveSecretOptions: (e) => {
                  c(e);
                }
              })
          );
        };
    }
  }
]);
