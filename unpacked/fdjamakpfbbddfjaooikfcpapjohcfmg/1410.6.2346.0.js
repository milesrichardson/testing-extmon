"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [1410],
  {
    871410: (e, t, i) => {
      i.r(t), i.d(t, { SecretAddPanel: () => f });
      var s = i(947843),
        n = i(988799),
        a = i(696832),
        r = i(142897),
        o = i(148038),
        l = i(537026),
        c = i(635164),
        d = i(66941),
        p = i(38025),
        u = i(60043),
        m = i(796446),
        _ = i(476118),
        g = i(433295),
        h = i(549817);
      const { CONTENT: S } = _.SecretsTabs,
        b = {},
        v = { strategies: b },
        f = (0, s.$)(
          (0, n.i)(({ lee: e }) => {
            var t;
            const { routes: i } = (0, u.Xo)(),
              s = (0, p.Y)(),
              [n, _] = (0, a.useState)(S),
              [b, v] = (0, a.useState)(!1),
              [f, C] = (0, a.useState)(!1),
              [y, x] = (0, a.useState)({ spaceId: null != (t = (0, l.B)(e.globalState)) ? t : "" }),
              [Z, I] = (0, a.useState)(""),
              [w, T] = (0, a.useState)(""),
              A = { id: "", limitedPermissions: !1, content: Z, title: w, ...y };
            if (s.status !== o.rq.Success || !s?.data) return null;
            const P = () => {
                (0, c.uX)(i.userSecrets);
              },
              E = () => v(!0);
            return (0, r.tZ)(
              m.zI,
              {
                isViewingExistingItem: !1,
                itemHasBeenEdited: b,
                submitPending: f,
                onSubmit: async () => {
                  if (!f) {
                    C(!0);
                    try {
                      await (async () => {
                        await d.C.addSecret({ ...y, content: Z, title: w });
                      })();
                    } catch {
                      C(!1);
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
                  activeTab: n,
                  displaySharedAccess: !1,
                  setActiveTab: _,
                  title: w,
                  setTitle: (e) => {
                    E(), T(e);
                  }
                })
              },
              (0, r.tZ)(h.e, {
                activeTab: n,
                data: A,
                content: Z,
                setContent: I,
                isAdmin: !1,
                lee: e,
                onModifyData: E,
                saveSecretOptions: x
              })
            );
          }, v),
          b
        );
    },
    476118: (e, t, i) => {
      i.d(t, { SecretsTabs: () => s });
      let s = (function (e) {
        return (
          (e[(e.CONTENT = 0)] = "CONTENT"), (e[(e.MORE_OPTIONS = 1)] = "MORE_OPTIONS"), (e[(e.SHARED_ACCESS = 2)] = "SHARED_ACCESS"), e
        );
      })({});
    },
    433295: (e, t, i) => {
      i.d(t, { h: () => m });
      var s = i(142897),
        n = i(476118),
        a = i(201389),
        r = i(796446),
        o = i(654);
      const l = ({ title: e, disabled: t = !1, onChange: i }) => {
        const { translate: n } = (0, a.Z)(),
          r = n("webapp_secure_notes_addition_field_placeholder_no_title");
        return (0, s.tZ)(
          o.Z,
          { sx: { display: "block", width: "100%" }, tooltipText: e || r },
          (0, s.tZ)("input", {
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
      const { CONTENT: d, MORE_OPTIONS: p, SHARED_ACCESS: u } = n.SecretsTabs,
        m = ({ activeTab: e, setActiveTab: t, disabled: i, displaySharedAccess: n, recipientsCount: o, title: m, setTitle: _ }) => {
          const { translate: g } = (0, a.Z)(),
            h = [{ active: e === d, label: g("webapp_secrets_edition_field_tab_title_details"), onClick: () => t(d) }];
          return (
            n &&
              h.push({
                active: e === u,
                label: `${g("webapp_secure_notes_edition_field_tab_title_shared_access")} (${o})`,
                onClick: () => t(u)
              }),
            h.push({ active: e === p, label: g("webapp_secure_notes_edition_field_tab_title_options"), onClick: () => t(p) }),
            (0, s.tZ)(r.V9, {
              icon: c || (c = (0, s.tZ)(s.JO, { name: "RecoveryKeyOutlined", color: "ds.text.neutral.standard" })),
              title: (0, s.tZ)(l, { title: m, disabled: i, onChange: (e) => _(e.target.value) }),
              tabs: h
            })
          );
        };
    },
    549817: (e, t, i) => {
      i.d(t, { i: () => C, e: () => y });
      var s = i(696832),
        n = i(695495),
        a = i(476118),
        r = i(642844),
        o = i(441217),
        l = i(201389),
        c = i(142897);
      const d = ({ fieldRef: e, value: t, name: i, placeholder: s, disabled: n, onChange: a }) =>
        (0, c.tZ)(
          "div",
          { className: "content--CXM0AnQTUc" },
          (0, c.tZ)("textarea", {
            ref: e,
            name: i,
            className: "textarea--AzmOq0n9Ly",
            sx: { color: "ds.text.neutral.catchy" },
            placeholder: s,
            value: t || "",
            disabled: n,
            onChange: (e) => {
              a && a(e);
            }
          })
        );
      var p = i(443455);
      const u = ({ content: e, setContent: t, limitedPermissions: i }) => {
        const { translate: n } = (0, l.Z)(),
          [a, r] = (0, s.useState)(!1),
          c = (0, s.useRef)(null);
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(d, {
            fieldRef: c,
            placeholder: n("webapp_secrets_addition_field_placeholder_no_content"),
            value: e,
            disabled: i,
            onChange: ({ target: { value: i } }) => {
              const s = i.length > e.length,
                n = e.length >= C;
              if (s && n) return;
              const a = s && i.length > C,
                o = a ? e : i;
              r(a), t(o);
            }
          }),
          a &&
            s.createElement(
              "div",
              { className: "alertContainer--mkHl7uO2wU" },
              s.createElement(p.n, {
                id: Math.floor(1e6 * Math.random()),
                message: n("webapp_secure_notes_addition_field_copy_past_error"),
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
          n = 0.95 * e,
          a = 0.995 * e,
          r = e - t,
          o =
            t > e
              ? i("webapp_secure_notes_edition_field_text_over_limit", { overLimit: -r })
              : i("webapp_secure_notes_edition_field_text_max_size_reached", { charLeft: r });
        return t >= n
          ? s.createElement("div", { className: _()("greyWarningCharLeft--FuXiOxlZJX", t >= a ? "redWarningCharLeft--VgzyxMFS1z" : {}) }, o)
          : null;
      };
      var h = i(839434);
      const S = ({ data: e, saveSecretOptions: t }) => {
          var i;
          const [n, a] = (0, s.useState)(null != (i = e?.spaceId) ? i : "");
          return (0, c.tZ)(
            o.Ejs,
            { flexDirection: "column" },
            (0, c.tZ)(h.M, {
              labelSx: h.e,
              spaceId: null != n ? n : "",
              onChange: (e) => {
                a(e), t({ spaceId: e });
              }
            })
          );
        },
        { CONTENT: b, MORE_OPTIONS: v, SHARED_ACCESS: f } = a.SecretsTabs,
        C = 1e4,
        y = ({ activeTab: e, data: t, content: i, setContent: a, isAdmin: o, onModifyData: l, saveSecretOptions: c }) => {
          var d;
          return (0, n.tZ)(
            s.Fragment,
            null,
            e === b &&
              (0, n.tZ)(
                s.Fragment,
                null,
                (0, n.tZ)(
                  "div",
                  { className: "formContent--eLnnqSgzya" },
                  (0, n.tZ)(u, {
                    content: i,
                    setContent: (e) => {
                      l(), a(e);
                    },
                    limitedPermissions: t.limitedPermissions
                  })
                ),
                (0, n.tZ)(g, { maxAuthorizedSize: C, currentSize: i.length })
              ),
            e === f && (0, n.tZ)(r.u, { isAdmin: o, id: t.id }),
            e === v &&
              (0, n.tZ)(S, {
                data: { spaceId: null != (d = t.spaceId) ? d : "" },
                saveSecretOptions: (e) => {
                  c(e);
                }
              })
          );
        };
    },
    342573: (e, t, i) => {
      i.d(t, { r: () => h });
      var s = i(133354),
        n = i(604400),
        a = i(242542),
        r = i(172721),
        o = i(799852);
      const l = (e) => {
        const t = ((e) => (0, o.k)(r.a, "getSharedCollections", { collectionIds: e }))(e);
        return t.status === s.rq.Success ? t.data : [];
      };
      var c = i(148038),
        d = i(66941),
        p = i(526849);
      const u = (e, t, i = !1) => ({
          recipientId: e.groupId,
          recipientName: e.name,
          isGroup: !0,
          permission: e.permission,
          status: e.status,
          isAdmin: t,
          isInSharedCollection: i
        }),
        m = (e, t, i = !1) => ({
          recipientId: e.userId,
          recipientName: e.alias,
          isGroup: !1,
          permission: e.permission,
          status: e.status,
          isAdmin: t,
          isInSharedCollection: i
        }),
        _ = (e) => ({
          recipientId: e.uuid,
          recipientName: e.name,
          isGroup: !1,
          status: n.qb.Accepted,
          permission: n.y3.Admin,
          isAdmin: !0,
          isInSharedCollection: !0
        }),
        g = (0, p.sortBy)((0, p.compose)(p.toLower, (0, p.prop)("recipientName")));
      function h(e, t) {
        const { collectionIds: i, itemGroupId: r, isReady: o } = (0, a.b)(e),
          p = (function (e) {
            return (0, c.qr)(
              {
                queryConfig: { query: d.C.getGroupRecipients, queryParam: e },
                liveConfig: { live: d.C.liveGroupRecipients, liveParam: e }
              },
              []
            );
          })(e),
          h = (function (e) {
            return (0, c.qr)(
              { queryConfig: { query: d.C.getUserRecipients, queryParam: e }, liveConfig: { live: d.C.liveUserRecipients, liveParam: e } },
              []
            );
          })(e),
          S = l(i),
          b = i.length ? S : [];
        if (h.status !== s.rq.Success || p.status !== s.rq.Success || !o) return { isReady: !1, users: [], groups: [], collections: [] };
        const v = h.data.map((e) => m(e, t)),
          f = p.data.map((e) => u(e, t)),
          C = b.map((e) => _(e)),
          y = g(v),
          x = g(f),
          Z = g(C),
          I = t && y.filter(({ permission: e, status: t }) => e === n.y3.Admin && t === n.qb.Accepted).length < 2;
        return { users: y, groups: x, itemGroupId: r, isReady: !0, collections: Z, isLastAdmin: I };
      }
    },
    642844: (e, t, i) => {
      i.d(t, { u: () => x });
      var s,
        n,
        a = i(696832),
        r = i(142897),
        o = i(441217),
        l = i(453576),
        c = i(66941),
        d = i(201389),
        p = i(427658),
        u = i(993026),
        m = i(351433),
        _ = i(683773),
        g = i(360592),
        h = i(220315),
        S = i(716514);
      const b = ({ cancelStatus: e, itemGroupId: t, setCancelStatus: i, recipientId: l }) => {
        const { translate: p } = (0, d.Z)(),
          m = e === u.V.Loading,
          _ = { type: "user", alias: l };
        (0, a.useEffect)(() => {
          let t;
          return (
            e === u.V.Failure && (t = window.setTimeout(() => i(null), 2e3)),
            () => {
              clearTimeout(t);
            }
          );
        }, [e, i]);
        const g = e ? () => i(null) : () => i(u.V.Confirm);
        return e === u.V.Failure
          ? (0, r.tZ)(
              "div",
              { sx: { color: "ds.text.danger.standard", display: "flex", alignItems: "center" } },
              s || (s = (0, r.tZ)(o.aNP, { color: "ds.text.danger.standard" })),
              " ",
              p("webapp_shared_access_cancel_failure")
            )
          : (0, r.tZ)(
              "div",
              null,
              (0, r.tZ)(
                r.zx,
                { intensity: e ? "quiet" : "supershy", disabled: m, onClick: g },
                p(e ? "webapp_shared_access_cancel" : "webapp_shared_access_cancel_invitation")
              ),
              e
                ? (0, r.tZ)(
                    r.zx,
                    {
                      mood: "danger",
                      intensity: "catchy",
                      sx: { ml: "16px" },
                      disabled: m,
                      onClick: () =>
                        (async () => {
                          i(u.V.Loading);
                          const e = await (async () => {
                            try {
                              const { success: e } = await c.C.revokeSharing({ itemGroupId: t, recipient: _ });
                              return e;
                            } catch (e) {
                              return !1;
                            }
                          })();
                          i(e ? u.V.Success : u.V.Failure);
                        })()
                    },
                    m ? n || (n = (0, r.tZ)(o.HoD, null)) : p("webapp_shared_access_confirm")
                  )
                : null
            );
      };
      var v;
      const f = (e) => {
          const { status: t, permission: i } = e;
          return "pending" === t
            ? "webapp_shared_access_pending_invitation"
            : "accepted" === t
            ? "admin" === i
              ? "webapp_sharing_permissions_full_rights"
              : "webapp_sharing_permissions_limited_rights"
            : "";
        },
        C = ({ itemGroupId: e, openEditPermissionsDialog: t, member: i }) => {
          const [s, n] = (0, a.useState)(null),
            o = (0, S.j)()?.login,
            { translate: l } = (0, d.Z)();
          if (s === u.V.Success) return null;
          const { permission: c, status: p } = i,
            C = i.isAdmin && o !== i.recipientId,
            y =
              "pending" === p
                ? (0, r.tZ)(b, { recipientId: i.recipientId, itemGroupId: e, cancelStatus: s, setCancelStatus: n })
                : (0, r.tZ)(
                    g.M,
                    {
                      disabled: i.isInSharedCollection,
                      intensity: "supershy",
                      onClick: () =>
                        t(
                          ((e) =>
                            e.isGroup
                              ? { type: "userGroup", groupId: e.recipientId, name: e.recipientName }
                              : { type: "user", alias: e.recipientId })(i),
                          c
                        ),
                      content: l("webapp_sharing_collection_access_description_tooltip"),
                      tooltipSx: { textWrap: "wrap", maxWidth: "240px" }
                    },
                    l("webapp_shared_access_edit_permissions")
                  );
          return (0, r.tZ)(
            "li",
            {
              key: i.recipientId,
              sx: {
                alignItems: "center",
                borderStyle: "solid",
                borderBottomWidth: "1px",
                borderColor: "ds.border.neutral.standard.idle",
                display: "flex",
                minHeight: "64px",
                position: "relative"
              }
            },
            (0, r.tZ)(_.r, {
              infoAction: C ? y : null,
              logo: i.isGroup ? v || (v = (0, r.tZ)(h.Z, null)) : (0, r.tZ)(m.q, { email: i.recipientName, size: 36 }),
              text: l(f(i)),
              title: i.recipientName,
              disabled: s === u.V.Loading
            })
          );
        };
      var y = i(342573);
      const x = ({ id: e, isAdmin: t }) => {
        const { translate: i } = (0, d.Z)(),
          [s, n] = (0, a.useState)(!1),
          [m, _] = (0, a.useState)(null),
          { isReady: g, itemGroupId: h, users: S, groups: b, collections: v } = (0, y.r)(e, t);
        if (!g)
          return (0, r.tZ)(o.HoD, { color: "ds.container.expressive.brand.catchy.idle", size: 50, sx: { alignSelf: "center", m: "20px" } });
        const f = (e) => {
            m && _({ ...m, step: e });
          },
          x = async () => {
            if (!m) return;
            const { recipient: e, permission: t } = m;
            n(!0);
            const i =
              "revoke" === t
                ? await (async (e) => {
                    try {
                      const { success: t } = await c.C.revokeSharing({ itemGroupId: null != h ? h : "", recipient: e });
                      return t;
                    } catch (e) {
                      return !1;
                    }
                  })(e)
                : await (async (e, t) => {
                    try {
                      const { success: i } = await c.C.updateSharingPermission({
                        itemGroupId: null != h ? h : "",
                        recipient: e,
                        permission: t
                      });
                      return i;
                    } catch (e) {
                      return !1;
                    }
                  })(e, t);
            if (i) {
              const e = "revoke" === t ? u.PermissionDialogStep.RevokeSuccess : u.PermissionDialogStep.Success;
              f(e);
            } else f(u.PermissionDialogStep.Failure);
            n(!1);
          },
          Z = (e, t) => {
            const i = {
              recipient: e,
              permission: t,
              originPermission: t,
              step: u.PermissionDialogStep.Permission,
              name: (0, l.isGroupRecipient)(e) ? e.name : e.alias
            };
            _(i);
          };
        return (0, r.tZ)(
          "div",
          { sx: { flex: "1", overflowY: "auto", p: "24px" } },
          v?.length
            ? (0, r.tZ)(
                a.Fragment,
                null,
                (0, r.tZ)(
                  r.X6,
                  { as: "h3", textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet", sx: { textTransform: "uppercase" } },
                  i("webapp_shared_access_collections")
                ),
                (0, r.tZ)(
                  "ul",
                  { sx: { flex: "1" } },
                  v.map((e) =>
                    (0, r.tZ)(C, { key: e.recipientId, member: e, itemGroupId: null != h ? h : "", openEditPermissionsDialog: Z })
                  )
                )
              )
            : null,
          b?.length || S?.length
            ? (0, r.tZ)(
                a.Fragment,
                null,
                (0, r.tZ)(
                  r.X6,
                  {
                    as: "h3",
                    textStyle: "ds.title.block.small",
                    color: "ds.text.neutral.quiet",
                    sx: { m: "20px 0 0 0", textTransform: "uppercase" }
                  },
                  i("webapp_shared_access_users_groups")
                ),
                (0, r.tZ)(
                  "ul",
                  { sx: { flex: "1" } },
                  b.map((e) =>
                    (0, r.tZ)(C, { key: e.recipientId, member: e, itemGroupId: null != h ? h : "", openEditPermissionsDialog: Z })
                  ),
                  S.map((e) =>
                    (0, r.tZ)(C, { key: e.recipientId, member: e, itemGroupId: null != h ? h : "", openEditPermissionsDialog: Z })
                  )
                )
              )
            : null,
          m &&
            (0, r.tZ)(p.E, {
              isOpen: !0,
              loading: s,
              onCancelRevoke: () => {
                m && _({ ...m, step: u.PermissionDialogStep.Permission });
              },
              onConfirmRevoke: x,
              onDismiss: () => _(null),
              onSelectPermission: (e) => {
                m && _({ ...m, permission: e });
              },
              onValidatePermission: () => {
                "revoke" === m?.permission ? _({ ...m, step: u.PermissionDialogStep.ConfirmRevoke }) : x();
              },
              originPermission: m.originPermission,
              permission: m.permission,
              recipient: m.recipient,
              step: m.step
            })
        );
      };
    }
  }
]);
