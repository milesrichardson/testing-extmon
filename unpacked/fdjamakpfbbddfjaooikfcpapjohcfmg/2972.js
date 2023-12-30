"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2972],
  {
    832483: (e, t, i) => {
      i.r(t), i.d(t, { CredentialEditPanel: () => Ce });
      var a,
        n = i(696832),
        s = i(799852),
        l = i(995445),
        r = i(133354),
        d = i(448430),
        o = i(382706),
        c = i(348958),
        p = i(982466),
        u = i(846097),
        _ = i(718108),
        m = i(830894),
        k = i(526849),
        h = i(914662),
        b = i(876307),
        w = i(287279),
        g = i(361607),
        x = i(482598),
        S = i(172721),
        y = i(962899),
        C = i(299074),
        f = i(96862),
        v = i(86498),
        L = i(740300),
        E = i(377377),
        D = i(488203),
        I = i(692077),
        A = i(66485),
        U = i(376452),
        Z = i(682994),
        P = i(133659),
        T = i(762042),
        R = i(99822),
        W = i(625078),
        B = i(555449),
        q = i(810291),
        N = i(210288),
        V = i(760790),
        z = i(117534),
        O = i(684985),
        M = i(468037);
      const G = n.memo(
          ({
            credential: e,
            onClose: t,
            openWithNewUrlField: i,
            onUpdateLinkedWebsitesAddedByUser: s,
            hasLimitedRights: l,
            dashlaneDefinedLinkedWebsites: r
          }) => {
            const { translate: d } = (0, D.Z)(),
              [o, c] = n.useState(e.linkedURLs),
              [p, u] = n.useState(i);
            return (
              n.useEffect(() => {
                const t = e.linkedURLs,
                  i = !(t.length === o.length && t.every((e, t) => o[t] === e));
                u(i), s(o);
              }, [o]),
              (0, b.tZ)(
                "div",
                { "data-testid": "linked-websites-tab" },
                (0, b.tZ)(
                  b.zx,
                  {
                    "data-testid": "back-button",
                    layout: "iconLeading",
                    mood: "neutral",
                    intensity: "supershy",
                    onClick: t,
                    icon: a || (a = (0, b.tZ)(b.JO, { name: "ArrowLeftOutlined" }))
                  },
                  d("webapp_credential_linked_websites_title")
                ),
                (0, b.tZ)(
                  M.u,
                  {
                    title: d("webapp_credential_linked_websites_section_primary"),
                    description: d("webapp_credential_linked_websites_section_primary_description"),
                    additionalSx: { marginTop: "24px" }
                  },
                  (0, b.tZ)(O.a, { linkedWebsitesList: [e.URL], areItemsLocked: l, credentialId: e.id, isEditing: !1 })
                ),
                (0, b.tZ)(
                  M.u,
                  { title: d("webapp_credential_linked_websites_section_added_by_user"), additionalSx: { marginTop: "16px" } },
                  (0, b.tZ)(O.a, {
                    linkedWebsitesList: o,
                    areItemsLocked: l,
                    credentialId: e.id,
                    isListEditable: !l,
                    isEditing: p,
                    showUrlProtocol: !0,
                    updateLinkedWebsitesList: c
                  })
                ),
                r && r.length > 1
                  ? (0, b.tZ)(
                      M.u,
                      {
                        title: d("webapp_credential_linked_websites_section_added_by_dashlane"),
                        description: d("webapp_credential_linked_websites_section_added_by_dashlane_description"),
                        additionalSx: { marginTop: "16px" }
                      },
                      (0, b.tZ)(O.a, { linkedWebsitesList: r, areItemsLocked: !0, credentialId: e.id, isEditing: !1 })
                    )
                  : null
              )
            );
          }
        ),
        F = ({ onClose: e, setDisplayLinkedWebsitesDataSavedAlert: t }) => {
          const { translate: i } = (0, D.Z)();
          return (
            ((0, n.useRef)(null).current = window.setTimeout(() => t(!1), 5e3)),
            n.createElement(
              y.YcA,
              null,
              n.createElement(
                y.bZj,
                { size: y.k3y.SMALL, severity: y.BLW.SUCCESS, closeIconName: i("_common_alert_dismiss_button"), onClose: e },
                i("_common_toast_changes_saved")
              )
            )
          );
        };
      var H = i(717676);
      const j = ({ onCancel: e, onLeavePageWithoutSaving: t }) => {
          const { translate: i } = (0, D.Z)();
          return n.createElement(
            H.o,
            {
              isOpen: !0,
              showCloseIcon: !0,
              title: i("webapp_credential_linked_websites_discard_dialog_title"),
              onRequestClose: e,
              footer: n.createElement(
                y.Ejs,
                { justifyContent: "end", gap: "8px" },
                n.createElement(
                  y.zxk,
                  { type: "button", nature: "secondary", onClick: e },
                  i("webapp_credential_linked_websites_discard_dialog_cancel")
                ),
                n.createElement(y.zxk, { type: "button", onClick: t }, i("webapp_credential_linked_websites_discard_dialog_discard"))
              )
            },
            n.createElement(
              y.Ejs,
              { flexDirection: "column", gap: "8px", sx: { width: "576px" } },
              n.createElement(y.nvN, null, i.markup("webapp_credential_linked_websites_discard_dialog_description_markup"))
            )
          );
        },
        K = ({ duplicateData: e, onCancel: t, onSave: i }) => {
          const { translate: a } = (0, D.Z)(),
            s = e.length > 1,
            l = s
              ? a("webapp_credential_linked_websites_duplicate_prevention_dialog_title_multiple")
              : a("webapp_credential_linked_websites_duplicate_prevention_dialog_title_one", { url: e[0].linkedWebsite }),
            r = s
              ? a("webapp_credential_linked_websites_duplicate_prevention_dialog_description_multiple")
              : a("webapp_credential_linked_websites_duplicate_prevention_dialog_description_one", { credentialName: e[0].credentialName }),
            d = a(
              s
                ? "webapp_credential_linked_websites_duplicate_prevention_dialog_add_websites_multiple"
                : "webapp_credential_linked_websites_duplicate_prevention_dialog_add_websites_one"
            );
          return n.createElement(
            H.o,
            {
              isOpen: !0,
              showCloseIcon: !0,
              title: l,
              onRequestClose: t,
              footer: n.createElement(
                y.Ejs,
                { justifyContent: "end", gap: "8px" },
                n.createElement(
                  y.zxk,
                  { type: "button", nature: "secondary", onClick: t },
                  a("webapp_credential_linked_websites_duplicate_prevention_dialog_cancel")
                ),
                n.createElement(y.zxk, { type: "button", onClick: i }, d)
              )
            },
            n.createElement(
              "div",
              null,
              n.createElement("p", null, r),
              s
                ? n.createElement(
                    "ul",
                    { className: "duplicatesList--SwGmL5ftwe" },
                    e.map((e) => n.createElement("li", { key: e.linkedWebsite, className: "duplicateItem--mPX5urdfL2" }, e.linkedWebsite))
                  )
                : null
            )
          );
        },
        X = "webapp_password_history_detailed_password_view_button",
        J = ({ credentialId: e }) => {
          const { translate: t } = (0, D.Z)(),
            { routes: i } = (0, I.Xo)(),
            a = i.userPasswordHistoryFilteredByCredential(e),
            [s, l] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              L.C.getHasPasswordHistory(e).then((e) => {
                e && l(!0);
              });
            }, [e]),
            s
              ? n.createElement(
                  "div",
                  null,
                  n.createElement(
                    I.rU,
                    { to: a, tabIndex: -1 },
                    n.createElement(
                      b.zx,
                      { mood: "neutral", intensity: "supershy", title: t(X), icon: "HistoryBackupOutlined", layout: "iconLeading" },
                      t(X)
                    )
                  )
                )
              : null
          );
        };
      var Y = i(72133),
        $ = i(924058),
        Q = i(157668),
        ee = i(671738),
        te = i(139632);
      const ie = {
          exit: "exit--p4spwlkedE",
          exitActive: "exitActive--BIpaDF7MkX",
          exitDone: "exitDone--KzowOK4h4K",
          appear: "appear--OcvlWdq5He",
          appearActive: "appearActive--HVwCcEJzKz",
          appearDone: "appearDone--KgBJPzbyTA"
        },
        ae = n.memo(({ onPrimaryClick: e }) => {
          const { translate: t } = (0, D.Z)(),
            [i, a] = n.useState(!1);
          return (0, b.tZ)(
            te.Z,
            { appear: !0, in: !i, timeout: 600, classNames: ie, onExited: e },
            (0, b.tZ)(
              "div",
              { sx: { backgroundColor: "ds.background.default", marginBottom: "24px" } },
              (0, b.tZ)(b.ke, {
                title: t("webapp_credential_edition_health_box_excluded_title"),
                description: t("webapp_credential_edition_health_box_excluded_description"),
                mood: "warning",
                size: "large",
                actions: [
                  (0, b.tZ)(
                    b.zx,
                    {
                      mood: "brand",
                      intensity: "quiet",
                      onClick: (e) => {
                        e.preventDefault(), a(!0);
                      },
                      key: "primaryAction",
                      size: "small",
                      type: "button"
                    },
                    t("webapp_credential_edition_health_box_include")
                  )
                ]
              })
            )
          );
        });
      var ne = i(504253),
        se = i(365580);
      const le = { appear: "appear--MMCjEcRU3u", appearActive: "appearActive--LG103cUrNZ", appearDone: "appearDone--tuYaN3WTGO" },
        re = n.memo(({ onPrimaryClick: e, onSecondaryClick: t, isLimitedSharingPassword: i, corruptionData: a }) => {
          const { translate: n } = (0, D.Z)();
          if (!a) return null;
          const s = ((e, t) => {
              const { riskType: i } = e;
              switch (i) {
                case ne.gI.Compromised:
                  return {
                    title: t("webapp_credential_edition_health_box_compromised_title"),
                    description: t("webapp_credential_edition_health_box_compromised_description"),
                    secondary: t("webapp_credential_edition_health_box_view_compromised")
                  };
                case ne.gI.Reused:
                  return {
                    title: t("webapp_credential_edition_health_box_reused_title"),
                    description: t.markup("webapp_credential_edition_health_box_reused_description_markup", { count: e.reuseCount }),
                    secondary: t("webapp_credential_edition_health_box_view_reused")
                  };
                case ne.gI.Weak:
                  return {
                    title: t("webapp_credential_edition_health_box_weak_title"),
                    description: t("webapp_credential_edition_health_box_weak_description"),
                    secondary: t("webapp_credential_edition_health_box_view_weak")
                  };
                default:
                  return (0, se.U)(i);
              }
            })(a, n),
            l = a.severity === ne.bp.STRONG ? "warning" : "brand";
          return (0, b.tZ)(
            te.Z,
            { in: !0, appear: !0, timeout: 600, classNames: le },
            (0, b.tZ)(
              "div",
              { sx: { position: "relative", backgroundColor: "ds.background.default", marginBottom: "24px" } },
              (0, b.tZ)(b.ke, {
                title: s.title,
                description: s.description,
                mood: l,
                size: "large",
                actions: [
                  (0, b.tZ)(b.zx, { onClick: t, intensity: "quiet", key: "view_health", size: "small" }, s.secondary),
                  (0, b.tZ)(
                    y.ua7,
                    {
                      passThrough: !i,
                      key: "change_password",
                      content: n("webapp_credential_edition_health_box_change_limited"),
                      placement: "left",
                      sx: { maxWidth: "312px", fontSize: 2 }
                    },
                    (0, b.tZ)(b.zx, { size: "small", onClick: e, disabled: i }, n("webapp_credential_edition_health_box_change_password"))
                  )
                ]
              })
            )
          );
        }),
        de = JSON.parse(
          '{"v":"5.7.0","fr":30,"ip":0,"op":26,"w":240,"h":240,"nm":"Loading Light Theme","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 4","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,122,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"load","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.05490196078,0.2078431373,0.2392156863,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":12.5,"s":[42]},{"t":25,"s":[10]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[-19]},{"t":25,"s":[341]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"load 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.9058823529,0.9215686275,0.9254901961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":".","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0}],"markers":[]}'
        ),
        oe = ({ credentialId: e, isShared: t, hasLimitedPermission: i }) => {
          const a = (0, I.k6)(),
            { routes: l } = (0, I.Xo)(),
            { updateIsCredentialExcluded: r } = (0, $.$)(),
            { healthData: d } = ((e) => {
              const { data: t } = (0, s.k)(Q.d, "credentialHealthData", { credentialId: e });
              return { healthData: t };
            })(e),
            [o, c] = (0, n.useState)(null);
          return null === d
            ? null
            : d
            ? (0, b.tZ)(
                "div",
                { sx: { position: "relative" } },
                o ? (0, b.tZ)(ee.R, { credentialId: o, dismissCallback: () => c(null) }) : null,
                d.excluded
                  ? (0, b.tZ)(ae, {
                      onPrimaryClick: () => {
                        r(e, !1);
                      }
                    })
                  : (0, b.tZ)(re, {
                      onPrimaryClick: (t) => {
                        t.preventDefault(), c(e);
                      },
                      onSecondaryClick: (e) => {
                        e.preventDefault(), a.push(l.userPasswordHealth);
                      },
                      isLimitedSharingPassword: t && i,
                      corruptionData: d.corruptionData
                    })
              )
            : (0, b.tZ)(
                "div",
                { sx: { marginBottom: "24px" } },
                (0, b.tZ)(
                  "div",
                  { sx: { display: "flex", justifyContent: "center" } },
                  (0, b.tZ)(Y.Z, { height: 24, width: 24, animationParams: { renderer: "svg", loop: !0, autoplay: !0, animationData: de } })
                )
              );
        };
      var ce = i(164718),
        pe = i(285473),
        ue = i(626555),
        _e = i(662667),
        me = i(979808);
      const { SHARED_ACCESS: ke, ACCOUNT_DETAILS: he } = _e.CredentialTabs,
        be = ({ activeTab: e, credential: t, displayTabs: i, changeTab: a }) => {
          const { translate: n } = (0, D.Z)(),
            { data: s, status: l } = (0, me.r)(t.id),
            d = l === r.rq.Success ? s.count : 0,
            o = [
              { active: e === he, label: n("webapp_credential_edition_account_details"), onClick: () => a(he) },
              { active: e === ke, label: `${n("webapp_credential_edition_shared_access")} (${d})`, onClick: () => a(ke) }
            ];
          return (0, b.tZ)(U.V9, {
            icon: (0, b.tZ)(ue.h, { title: t.itemName, size: pe.o.LARGE, domain: new ce.Y(t.URL).getRootDomain() }),
            title: t.itemName,
            tabs: i ? o : void 0
          });
        },
        { SHARED_ACCESS: we, ACCOUNT_DETAILS: ge, LINKED_WEBSITES: xe } = _e.CredentialTabs,
        Se = ({
          location: e,
          activeSpaces: t,
          credential: i,
          credentialPreferences: a,
          onClose: s,
          protectedItemsUnlockerShown: l,
          dashlaneDefinedLinkedWebsites: r,
          areProtectedItemsUnlocked: c,
          openProtectedItemsUnlocker: _,
          isShared: m,
          isAdmin: O,
          isSharedViaUserGroup: M,
          isLastAdmin: H
        }) => {
          const { translate: X } = (0, D.Z)(),
            Y = (0, g._)(),
            { routes: $ } = (0, I.Xo)(),
            Q = (0, v.V)(),
            ee = (() => {
              const { updateLinkedWebsites: e } = (0, x.u)(u.G),
                t = (0, E.w)("autofill_web_grapheneMigration_dev"),
                i = (0, E.w)("autofill_web_grapheneMigration");
              return async (a, n) => {
                t || i
                  ? e({ credentialId: a, updatedLinkedWebsitesList: n })
                  : await L.C.updateLinkedWebsites({ credentialId: a, updatedLinkedWebsitesDomainList: n });
              };
            })(),
            { tempCredentialPreferencesUpdate: te, updateVaultItem: ie } = (0, x.u)(d.L),
            { createCollection: ae, updateCollection: ne } = (0, x.u)(C.v),
            { addItemToCollections: se, removeItemFromCollections: le } = (0, x.u)(S.a),
            { shouldShowTrialDiscontinuedDialog: re } = (0, A.yp)(),
            de = Boolean(Y.data?.sharingVault_web_Collection_Item_Permissions_dev),
            ce = (0, n.createRef)(),
            pe = () => {
              var e, t, n;
              return {
                alternativeUsername: null != (e = i.alternativeUsername) ? e : "",
                email: i.email,
                itemName: i.itemName,
                linkedURLs: i.linkedURLs,
                note: i.note,
                otpURL: null != (t = i.otpURL) ? t : "",
                otpSecret: null != (n = i.otpSecret) ? n : "",
                password: i.password,
                spaceId: i.spaceId,
                URL: i.URL,
                username: i.username,
                onlyAutofillExactDomain: a.onlyAutofillExactDomain,
                requireMasterPassword: a.requireMasterPassword,
                useAutoLogin: a.useAutoLogin
              };
            },
            [ue, _e] = (0, n.useState)(pe()),
            [me, ke] = (0, n.useState)(
              (() => {
                var e;
                const t = (0, I.CN)();
                return V.A0[null != (e = t.get("tab")) ? e : "account-details"];
              })()
            ),
            [he, Se] = (0, n.useState)(ge),
            [ye, Ce] = (0, n.useState)(!1),
            [fe, ve] = (0, n.useState)(i.linkedURLs),
            [Le, Ee] = (0, n.useState)(!1),
            [De, Ie] = (0, n.useState)(!1),
            [Ae, Ue] = (0, n.useState)([]),
            [Ze, Pe] = (0, n.useState)(!1),
            [Te, Re] = (0, n.useState)(!1),
            [We, Be] = (0, n.useState)(!1),
            [qe, Ne] = (0, n.useState)(!1),
            [Ve, ze] = (0, n.useState)(!1),
            { current: Oe } = (0, n.useRef)({
              confirmDeleteConfirm: X("webapp_credential_edition_delete_confirm"),
              confirmDeleteDismiss: X("webapp_credential_edition_delete_dismiss"),
              confirmDeleteSubtitle: X("webapp_credential_edition_confirm_delete_subtitle"),
              confirmDeleteTitle: X("webapp_credential_edition_confirm_delete_title"),
              lastAdminActionLabel: X("webapp_credential_edition_change_permissions"),
              lastAdminTitle: X("webapp_credential_edition_last_admin_title"),
              lastAdminSubtitle: X("webapp_credential_edition_last_admin_subtitle"),
              groupSharingTitle: X("webapp_credential_edition_group_sharing_title"),
              groupSharingSubtitle: X("webapp_credential_edition_group_sharing_subtitle")
            });
          if (
            ((0, n.useEffect)(() => {
              (0, z.SJ)(fe, i.linkedURLs) && Ce(!0);
            }, [fe, i.linkedURLs]),
            (0, n.useEffect)(() => {
              me === ge && _e(pe());
            }, [me]),
            (0, n.useEffect)(() => {
              const e = !(0, k.equals)(ue, pe());
              Ce(e);
            }, [ue]),
            null === re)
          )
            return null;
          const Me = (e) => {
              ye ? (Se(e), Re(!0)) : ke(e);
            },
            Ge = () => {
              Re(!1), Pe(!1), Ue([]);
            },
            Fe = () => {
              ke(ge), Ce(!1), Ge();
            },
            He = (e) => {
              e?.preventDefault(), ye ? (Se(ge), Pe(!0)) : Fe();
            },
            je = () => {
              ee(i.id, fe), Be(!0), (0, z.Bq)(i, fe), Fe();
            },
            Ke = (e) => !e.initiallyExisting && !e.hasBeenDeleted,
            Xe = (e) => e.initiallyExisting && !e.hasBeenDeleted,
            Je = () => {
              Q.showAlert(X("_common_generic_error"), y.BLW.ERROR), s();
            },
            Ye = () => {
              e?.state?.entity ? (0, W.d)({ routes: $, location: e }) : s();
            },
            $e = me === xe ? (e, t) => He(t) : Ye,
            Qe = De || l;
          return (0, b.tZ)(
            U.zI,
            {
              isUsingNewDesign: !0,
              isViewingExistingItem: !0,
              itemHasBeenEdited: ye,
              isSomeDialogOpen: Ze || Ae.length > 0 || Te || Ve || De,
              onSubmit: async () => {
                if (me === xe)
                  return void (async () => {
                    const e = await (0, z.wb)(i, fe);
                    Ue(e), me !== xe || e.length || je();
                  })();
                if (!ce.current?.isFormValid()) return;
                const e = ce.current?.getVaultItemCollections();
                if (!ye || e) {
                  var t;
                  Ne(!0),
                    a &&
                      ue.requireMasterPassword &&
                      ue.requireMasterPassword !== a.requireMasterPassword &&
                      (0, q.ih)(ue.requireMasterPassword, i.id, i.URL, null != (t = ue.spaceId) ? t : void 0);
                  try {
                    const { onlyAutofillExactDomain: t, useAutoLogin: a, requireMasterPassword: n, ...s } = ue,
                      l = await ie({ vaultItemType: o.U.Credential, content: s, id: i.id, shouldSkipSync: !0 });
                    if (!(0, w.d6)(l)) return Je();
                    const r = [
                      te({
                        credentialId: i.id,
                        onlyAutofillExactDomain: t,
                        useAutoLogin: a,
                        requireMasterPassword: n,
                        shouldSkipSync: e?.some((e) => e.isShared && !Xe(e))
                      })
                    ];
                    e &&
                      r.push(
                        (async (e, t) => {
                          const i = [],
                            a = [];
                          for (const s of t) {
                            var n;
                            Xe(s) ||
                              (s.isShared
                                ? Ke(s)
                                  ? i.push({
                                      collectionUUID: s.id,
                                      permission: de ? (null != (n = s.itemPermission) ? n : p.y3.Limited) : p.y3.Admin
                                    })
                                  : a.push(s.id)
                                : ((s.vaultItems = [{ id: e, type: h.dJ.KWAuthentifiant }]),
                                  s.id
                                    ? await ne({
                                        id: s.id,
                                        collection: s,
                                        operationType: s.hasBeenDeleted ? f.C.SUBSTRACT_VAULT_ITEMS : f.C.APPEND_VAULT_ITEMS
                                      })
                                    : await ae({ content: s })));
                          }
                          i.length && (await se({ collectionPermissions: i, itemId: e, shouldSkipSync: a.length > 0 })),
                            a.length && (await le({ collectionIds: a, itemId: e }));
                        })(i.id, e)
                      ),
                      await Promise.all(r);
                  } catch (e) {
                    return Je();
                  }
                  Q.showAlert(X("_common_toast_changes_saved"), y.BLW.SUCCESS), s();
                }
              },
              secondaryActions:
                me === xe
                  ? []
                  : [
                      (0, b.tZ)(J, { key: "pwhist", credentialId: i.id }),
                      (0, b.tZ)(T._, { key: "shareaction", id: i.id, isShared: m, isAdmin: O, isDiscontinuedUser: re, getSharing: R.Ei })
                    ],
              onNavigateOut: $e,
              onClickDelete: () => Ie(!0),
              withoutDeleteButton: me === xe,
              withoutConfirmationDialog: me === xe,
              ignoreCloseOnEscape: Qe,
              formId: "edit_credential_panel",
              submitPending: qe,
              header: (0, b.tZ)(be, { activeTab: me, credential: i, displayTabs: m, changeTab: Me })
            },
            m && me === we ? (0, b.tZ)(B.u, { isAdmin: O, id: i.id }) : null,
            me === ge
              ? (0, b.tZ)(
                  "div",
                  { sx: { flex: 1, flexDirection: "column", position: "relative" } },
                  (0, b.tZ)(oe, { credentialId: i.id, isShared: m, hasLimitedPermission: !O }),
                  (0, b.tZ)(
                    "div",
                    { sx: { overflowY: "initial", overflowX: "visible" } },
                    (0, b.tZ)(N.S, {
                      ref: ce,
                      activeSpaces: t,
                      editableValues: ue,
                      setEditableValues: _e,
                      readonlyValues: (() => {
                        const e = m && !O;
                        return {
                          id: i.id,
                          forceCategorizedSpace: (0, V.UC)(i, t),
                          isDiscontinuedUser: re,
                          limitedPermissions: e,
                          linkedURLs: i.linkedURLs
                        };
                      })(),
                      signalEditedValues: (e) => {
                        Ce(e);
                      },
                      dashlaneDefinedLinkedWebsites: r,
                      areProtectedItemsUnlocked: c,
                      openProtectedItemsUnlocker: _,
                      protectedItemsUnlockerShown: l,
                      onClickAddNewWebsite: () => (Ee(!0), void Me(xe)),
                      setHasOpenedDialogs: ze
                    })
                  )
                )
              : null,
            me === xe
              ? (0, b.tZ)(G, {
                  credential: i,
                  dashlaneDefinedLinkedWebsites: r,
                  onClose: He,
                  openWithNewUrlField: Le,
                  onUpdateLinkedWebsitesAddedByUser: ve,
                  hasLimitedRights: m && !O
                })
              : null,
            (0, b.tZ)(Z.s, {
              isVisible: De,
              itemId: i.id,
              closeConfirmDeleteDialog: () => Ie(!1),
              goToSharingAccess: () => {
                Me(we);
              },
              onDeletionSuccess: Ye,
              isShared: m,
              isSharedViaUserGroup: M,
              translations: Oe,
              vaultItemType: o.U.Credential,
              isLastAdmin: H
            }),
            Ze ? (0, b.tZ)(j, { onCancel: () => Pe(!1), onLeavePageWithoutSaving: Fe }) : null,
            Ae.length > 0 ? (0, b.tZ)(K, { duplicateData: Ae, onCancel: () => Ue([]), onSave: je }) : null,
            Te
              ? (0, b.tZ)(P.a, {
                  onDismissClick: () => Re(!1),
                  onConfirmClick: () => {
                    ke(he), Ce(!1), Ge();
                  }
                })
              : null,
            We ? (0, b.tZ)(F, { onClose: () => Be(!1), setDisplayLinkedWebsitesDataSavedAlert: Be }) : null
          );
        },
        ye = (e) => {
          const { credential: t } = e,
            i = (0, _.E)(),
            a = (0, m.tY)(),
            o = (0, s.k)(u.G, "getDashlaneDefinedLinkedWebsites", { url: t.URL }),
            k = (0, s.k)(d.L, "tempCredentialPreferences", { credentialId: t.id }),
            {
              getPermissionForItem: h,
              getSharingStatusForItem: b,
              getIsLastAdminForItem: w
            } = (0, l.Y)(
              c.X,
              {
                getPermissionForItem: { queryParam: { itemId: t.id } },
                getSharingStatusForItem: { queryParam: { itemId: t.id } },
                getIsLastAdminForItem: { queryParam: { itemId: t.id } }
              },
              []
            );
          if (
            k.status !== r.rq.Success ||
            o.status !== r.rq.Success ||
            h.status !== r.rq.Success ||
            b.status !== r.rq.Success ||
            i.status !== r.rq.Success ||
            w.status !== r.rq.Success
          )
            return null;
          const { isShared: g, isSharedViaUserGroup: x } = b.data,
            { isLastAdmin: S } = w.data;
          return n.createElement(Se, {
            ...e,
            ...a,
            activeSpaces: i.data,
            dashlaneDefinedLinkedWebsites: o.data,
            credentialPreferences: k.data,
            isShared: g,
            isAdmin: g && h.data.permission === p.y3.Admin,
            isSharedViaUserGroup: x,
            isLastAdmin: S
          });
        },
        Ce = (e) => {
          const { data: t, status: i } = (0, s.k)(d.L, "query", { vaultItemTypes: [o.U.Credential], ids: [`{${e.match.params.uuid}}`] });
          return i === r.rq.Loading
            ? null
            : t?.credentialsResult.items.length
            ? n.createElement(ye, { ...e, credential: t.credentialsResult.items[0] })
            : (e.onClose(), null);
        };
    }
  }
]);
