"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [1113],
  {
    271113: (e, t, a) => {
      a.r(t), a.d(t, { SecretEditPanel: () => x });
      var i = a(66941),
        n = a(947843),
        s = a(988799),
        r = a(696832),
        l = a(382706),
        o = a(201389),
        c = a(635164),
        d = a(60043),
        _ = a(880706),
        u = a(476118),
        p = a(372814),
        m = a(405231),
        S = a(796446),
        h = a(793071),
        b = a(549817),
        g = a(889483),
        C = a(433295),
        v = a(245338);
      const { CONTENT: f, MORE_OPTIONS: E, SHARED_ACCESS: T } = u.SecretsTabs,
        w = (e) => (0, h.fl)(e),
        O = (0, g.DP)(({ lee: e, location: t, secret: a }) => {
          var n;
          const { translate: s } = (0, o.Z)(),
            { routes: h } = (0, d.Xo)(),
            [g, O] = (0, r.useState)(f),
            [A, y] = (0, r.useState)(!1),
            [N] = (0, r.useState)(null),
            [x, Z] = (0, r.useState)(!1),
            [I, D] = (0, r.useState)(!1),
            [P, R] = (0, r.useState)(() => a.content),
            [k, z] = (0, r.useState)(() => a.title),
            M = () => {
              t?.state?.entity ? (0, _.d)({ routes: h, location: t }) : (0, c.uX)(h.userSecrets);
            };
          if (!a) return M(), null;
          const H = () => y(!0),
            L = a?.sharingStatus.isShared,
            F = [f, E];
          L && F.push(T);
          const W = {
              confirmDeleteConfirm: s("webapp_secure_notes_edition_delete_confirm"),
              confirmDeleteDismiss: s("webapp_credential_edition_delete_dismiss"),
              confirmDeleteSubtitle: s("webapp_credential_edition_confirm_delete_subtitle"),
              confirmDeleteTitle: s("webapp_secure_notes_edition_delete_title"),
              lastAdminActionLabel: s("webapp_credential_edition_change_permissions"),
              lastAdminTitle: s("webapp_credential_edition_last_admin_title"),
              lastAdminSubtitle: s("webapp_credential_edition_last_admin_subtitle"),
              groupSharingTitle: s("webapp_secure_notes_edition_group_sharing_title"),
              groupSharingSubtitle: s("webapp_credential_edition_group_sharing_subtitle"),
              genericErrorTitle: "webapp_account_recovery_generic_error_title",
              genericErrorSubtitle: "webapp_account_recovery_generic_error_subtitle"
            },
            q = {
              content: a.content,
              id: a.id,
              limitedPermissions: a.sharingStatus.isShared && "limited" === a.sharingStatus.permission,
              spaceId: a.spaceId,
              title: a.title
            },
            V = a.sharingStatus.isShared ? a.sharingStatus.recipientsCount : 0;
          return r.createElement(
            S.zI,
            {
              isViewingExistingItem: !0,
              itemHasBeenEdited: A,
              onSubmit: async () => {
                var e;
                D(!0);
                const t = null != N ? N : { spaceId: null != (e = a.spaceId) ? e : "" };
                await i.C.updateSecret({ content: P, title: k, id: a.id, ...t }), D(!1), M();
              },
              submitPending: I,
              secondaryActions:
                g === f
                  ? [
                      n || (n = r.createElement(p.N, { item: a, getSharing: w, key: "shareaction" })),
                      r.createElement(v.q, {
                        key: "copyaction",
                        copyValue: P,
                        buttonText: s("webapp_credential_edition_field_generic_action_copy")
                      })
                    ]
                  : [],
              onNavigateOut: M,
              onClickDelete: () => Z(!0),
              ignoreCloseOnEscape: x,
              isSomeDialogOpen: x,
              formId: "edit_secret_panel",
              header: r.createElement(C.h, {
                activeTab: g,
                displaySharedAccess: F.includes(T),
                recipientsCount: V,
                setActiveTab: O,
                disabled: q.limitedPermissions,
                title: k,
                setTitle: (e) => {
                  H(), z(e);
                }
              })
            },
            r.createElement(b.e, {
              activeTab: g,
              data: q,
              content: P,
              setContent: R,
              isAdmin: a.sharingStatus.isShared && "admin" === a.sharingStatus.permission,
              lee: e,
              onModifyData: H,
              saveSecretOptions: (e) => {
                const { spaceId: t } = e;
                i.C.updateSecret({ id: a.id, spaceId: null != t ? t : "" });
              }
            }),
            r.createElement(m.s, {
              isVisible: x,
              itemId: a.id,
              closeConfirmDeleteDialog: () => Z(!1),
              goToSharingAccess: () => {
                O(u.SecretsTabs.SHARED_ACCESS);
              },
              onDeletionSuccess: M,
              sharingStatus: a.sharingStatus,
              translations: W,
              vaultItemType: l.U.Secret
            })
          );
        }),
        A = (e) => {
          if (!e.match.params) throw new Error("missing route `params`");
          return `{${e.match.params.uuid}}`;
        },
        y = { secret: { live: i.C.liveSecret, liveParam: A, query: i.C.getSecret, queryParam: A } },
        N = { strategies: y },
        x = (0, n.$)((0, s.i)(O, N), y);
    },
    476118: (e, t, a) => {
      a.d(t, { SecretsTabs: () => i });
      let i = (function (e) {
        return (
          (e[(e.CONTENT = 0)] = "CONTENT"), (e[(e.MORE_OPTIONS = 1)] = "MORE_OPTIONS"), (e[(e.SHARED_ACCESS = 2)] = "SHARED_ACCESS"), e
        );
      })({});
    },
    433295: (e, t, a) => {
      a.d(t, { h: () => p });
      var i = a(142897),
        n = a(476118),
        s = a(201389),
        r = a(796446),
        l = a(654);
      const o = ({ title: e, disabled: t = !1, onChange: a }) => {
        const { translate: n } = (0, s.Z)(),
          r = n("webapp_secure_notes_addition_field_placeholder_no_title");
        return (0, i.tZ)(
          l.Z,
          { sx: { display: "block", width: "100%" }, tooltipText: e || r },
          (0, i.tZ)("input", {
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
            onChange: a
          })
        );
      };
      var c;
      const { CONTENT: d, MORE_OPTIONS: _, SHARED_ACCESS: u } = n.SecretsTabs,
        p = ({ activeTab: e, setActiveTab: t, disabled: a, displaySharedAccess: n, recipientsCount: l, title: p, setTitle: m }) => {
          const { translate: S } = (0, s.Z)(),
            h = [{ active: e === d, label: S("webapp_secrets_edition_field_tab_title_details"), onClick: () => t(d) }];
          return (
            n &&
              h.push({
                active: e === u,
                label: `${S("webapp_secure_notes_edition_field_tab_title_shared_access")} (${l})`,
                onClick: () => t(u)
              }),
            h.push({ active: e === _, label: S("webapp_secure_notes_edition_field_tab_title_options"), onClick: () => t(_) }),
            (0, i.tZ)(r.V9, {
              icon: c || (c = (0, i.tZ)(i.JO, { name: "RecoveryKeyOutlined", color: "ds.text.neutral.standard" })),
              title: (0, i.tZ)(o, { title: p, disabled: a, onChange: (e) => m(e.target.value) }),
              tabs: h
            })
          );
        };
    },
    549817: (e, t, a) => {
      a.d(t, { i: () => f, e: () => E });
      var i = a(696832),
        n = a(695495),
        s = a(476118),
        r = a(642844),
        l = a(441217),
        o = a(201389),
        c = a(142897);
      const d = ({ fieldRef: e, value: t, name: a, placeholder: i, disabled: n, onChange: s }) =>
        (0, c.tZ)(
          "div",
          { className: "content--CXM0AnQTUc" },
          (0, c.tZ)("textarea", {
            ref: e,
            name: a,
            className: "textarea--AzmOq0n9Ly",
            sx: { color: "ds.text.neutral.catchy" },
            placeholder: i,
            value: t || "",
            disabled: n,
            onChange: (e) => {
              s && s(e);
            }
          })
        );
      var _ = a(443455);
      const u = ({ content: e, setContent: t, limitedPermissions: a }) => {
        const { translate: n } = (0, o.Z)(),
          [s, r] = (0, i.useState)(!1),
          c = (0, i.useRef)(null);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(d, {
            fieldRef: c,
            placeholder: n("webapp_secrets_addition_field_placeholder_no_content"),
            value: e,
            disabled: a,
            onChange: ({ target: { value: a } }) => {
              const i = a.length > e.length,
                n = e.length >= f;
              if (i && n) return;
              const s = i && a.length > f,
                l = s ? e : a;
              r(s), t(l);
            }
          }),
          s &&
            i.createElement(
              "div",
              { className: "alertContainer--mkHl7uO2wU" },
              i.createElement(_.n, {
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
      var p = a(383849),
        m = a.n(p);
      const S = ({ maxAuthorizedSize: e, currentSize: t }) => {
        const { translate: a } = (0, o.Z)(),
          n = 0.95 * e,
          s = 0.995 * e,
          r = e - t,
          l =
            t > e
              ? a("webapp_secure_notes_edition_field_text_over_limit", { overLimit: -r })
              : a("webapp_secure_notes_edition_field_text_max_size_reached", { charLeft: r });
        return t >= n
          ? i.createElement("div", { className: m()("greyWarningCharLeft--FuXiOxlZJX", t >= s ? "redWarningCharLeft--VgzyxMFS1z" : {}) }, l)
          : null;
      };
      var h = a(839434);
      const b = ({ data: e, saveSecretOptions: t }) => {
          var a;
          const [n, s] = (0, i.useState)(null != (a = e?.spaceId) ? a : "");
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
        { CONTENT: g, MORE_OPTIONS: C, SHARED_ACCESS: v } = s.SecretsTabs,
        f = 1e4,
        E = ({ activeTab: e, data: t, content: a, setContent: s, isAdmin: l, onModifyData: o, saveSecretOptions: c }) => {
          var d;
          return (0, n.tZ)(
            i.Fragment,
            null,
            e === g &&
              (0, n.tZ)(
                i.Fragment,
                null,
                (0, n.tZ)(
                  "div",
                  { className: "formContent--eLnnqSgzya" },
                  (0, n.tZ)(u, {
                    content: a,
                    setContent: (e) => {
                      o(), s(e);
                    },
                    limitedPermissions: t.limitedPermissions
                  })
                ),
                (0, n.tZ)(S, { maxAuthorizedSize: f, currentSize: a.length })
              ),
            e === v && (0, n.tZ)(r.u, { isAdmin: l, id: t.id }),
            e === C &&
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
