"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7577],
  {
    15735: (e, t, a) => {
      a.r(t), a.d(t, { CredentialEditPanel: () => De });
      var i = a(696832),
        n = a(799852),
        s = a(995445),
        l = a(133354),
        r = a(448430),
        o = a(382706),
        d = a(348958),
        c = a(604400),
        m = a(846097),
        p = a(416088),
        u = a(889483),
        _ = a(383849),
        h = a.n(_),
        k = a(526849),
        b = a(453576),
        w = a(482598),
        E = a(172721),
        g = a(441217),
        y = a(299074),
        x = a(96862),
        S = a(787268),
        v = a(66941),
        f = a(915970),
        C = a(201389),
        L = a(635164),
        D = a(796446),
        I = a(405231),
        A = a(905586),
        U = a(372814),
        P = a(793071),
        R = a(880706),
        W = a(642844),
        T = a(846658),
        N = a(169600),
        Z = a(572108),
        B = a(660765),
        z = a(164718),
        q = a(62429);
      const V = async (e) => await Promise.all(e.map((e) => (0, B.hashDomain)(new z.Y(e).getRootDomain())));
      var M,
        O = a(38069),
        F = a(488856),
        H = a(159713);
      const G = i.memo(
          ({
            credential: e,
            onClose: t,
            openWithNewUrlField: a,
            onUpdateLinkedWebsitesAddedByUser: n,
            hasLimitedRights: s,
            dashlaneDefinedLinkedWebsites: l
          }) => {
            const { translate: r } = (0, C.Z)(),
              [o, d] = i.useState(e.linkedURLs),
              [c, m] = i.useState(a);
            return (
              i.useEffect(() => {
                const t = e.linkedURLs,
                  a = !(t.length === o.length && t.every((e, t) => o[t] === e));
                m(a), n(o);
              }, [o]),
              i.createElement(
                "div",
                { className: F.Z.form, "data-testid": "linked-websites-tab" },
                i.createElement(
                  "div",
                  { className: H.Z.header },
                  i.createElement("button", { className: H.Z.backButton, onClick: t }, M || (M = i.createElement(g.wyc, { size: 12 }))),
                  i.createElement(g.X6q, { size: "small" }, r("webapp_credential_linked_websites_title"))
                ),
                i.createElement(
                  "div",
                  { className: F.Z.containerBlock },
                  i.createElement(O.a, {
                    label: "webapp_credential_linked_websites_section_primary",
                    linkedWebsitesList: [e.URL],
                    areItemsLocked: s,
                    credentialId: e.id,
                    isEditing: !1
                  })
                ),
                i.createElement(
                  "div",
                  { className: F.Z.containerBlock },
                  i.createElement(O.a, {
                    label: "webapp_credential_linked_websites_section_added_by_user",
                    linkedWebsitesList: o,
                    areItemsLocked: s,
                    credentialId: e.id,
                    isListEditable: !s,
                    isEditing: c,
                    showUrlProtocol: !0,
                    updateLinkedWebsitesList: d
                  })
                ),
                l && l.length > 1
                  ? i.createElement(
                      "div",
                      { className: F.Z.containerBlock },
                      i.createElement(O.a, {
                        label: "webapp_credential_linked_websites_section_added_by_dashlane",
                        linkedWebsitesList: l,
                        areItemsLocked: !0,
                        credentialId: e.id,
                        isEditing: !1
                      })
                    )
                  : null
              )
            );
          }
        ),
        j = ({ onClose: e, setDisplayLinkedWebsitesDataSavedAlert: t }) => {
          const { translate: a } = (0, C.Z)();
          return (
            ((0, i.useRef)(null).current = window.setTimeout(() => t(!1), 5e3)),
            i.createElement(
              g.YcA,
              null,
              i.createElement(
                g.bZj,
                { size: g.k3y.SMALL, severity: g.BLW.SUCCESS, closeIconName: a("_common_alert_dismiss_button"), onClose: e },
                a("_common_toast_changes_saved")
              )
            )
          );
        };
      var K = a(542293);
      const X = ({ onCancel: e, onLeavePageWithoutSaving: t }) => {
          const { translate: a } = (0, C.Z)();
          return i.createElement(
            K.o,
            {
              isOpen: !0,
              showCloseIcon: !0,
              title: a("webapp_credential_linked_websites_discard_dialog_title"),
              onRequestClose: e,
              footer: i.createElement(
                g.Ejs,
                { justifyContent: "end", gap: "8px" },
                i.createElement(
                  g.zxk,
                  { type: "button", nature: "secondary", onClick: e },
                  a("webapp_credential_linked_websites_discard_dialog_cancel")
                ),
                i.createElement(g.zxk, { type: "button", onClick: t }, a("webapp_credential_linked_websites_discard_dialog_discard"))
              )
            },
            i.createElement(
              g.Ejs,
              { flexDirection: "column", gap: "8px", sx: { width: "576px" } },
              i.createElement(g.nvN, null, a.markup("webapp_credential_linked_websites_discard_dialog_description_markup"))
            )
          );
        },
        Y = ({ duplicateData: e, onCancel: t, onSave: a }) => {
          const { translate: n } = (0, C.Z)(),
            s = e.length > 1,
            l = s
              ? n("webapp_credential_linked_websites_duplicate_prevention_dialog_title_multiple")
              : n("webapp_credential_linked_websites_duplicate_prevention_dialog_title_one", { url: e[0].linkedWebsite }),
            r = s
              ? n("webapp_credential_linked_websites_duplicate_prevention_dialog_description_multiple")
              : n("webapp_credential_linked_websites_duplicate_prevention_dialog_description_one", { credentialName: e[0].credentialName }),
            o = n(
              s
                ? "webapp_credential_linked_websites_duplicate_prevention_dialog_add_websites_multiple"
                : "webapp_credential_linked_websites_duplicate_prevention_dialog_add_websites_one"
            );
          return i.createElement(
            K.o,
            {
              isOpen: !0,
              showCloseIcon: !0,
              title: l,
              onRequestClose: t,
              footer: i.createElement(
                g.Ejs,
                { justifyContent: "end", gap: "8px" },
                i.createElement(
                  g.zxk,
                  { type: "button", nature: "secondary", onClick: t },
                  n("webapp_credential_linked_websites_duplicate_prevention_dialog_cancel")
                ),
                i.createElement(g.zxk, { type: "button", onClick: a }, o)
              )
            },
            i.createElement(
              "div",
              null,
              i.createElement("p", null, r),
              s
                ? i.createElement(
                    "ul",
                    { className: "duplicatesList--SwGmL5ftwe" },
                    e.map((e) => i.createElement("li", { key: e.linkedWebsite, className: "duplicateItem--mPX5urdfL2" }, e.linkedWebsite))
                  )
                : null
            )
          );
        };
      var J,
        $ = a(142897);
      const Q = "webapp_password_history_detailed_password_view_button",
        ee = ({ credentialId: e }) => {
          const { translate: t } = (0, C.Z)(),
            { routes: a } = (0, L.Xo)(),
            n = a.userPasswordHistoryFilteredByCredential(e),
            [s, l] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              v.C.getHasPasswordHistory(e).then((e) => {
                e && l(!0);
              });
            }, [e]),
            s
              ? i.createElement(
                  "div",
                  null,
                  i.createElement(
                    L.rU,
                    { to: n, tabIndex: -1 },
                    i.createElement(
                      $.zx,
                      {
                        mood: "neutral",
                        intensity: "quiet",
                        title: t(Q),
                        icon: J || (J = i.createElement(g.tru, null)),
                        layout: "iconLeading"
                      },
                      t(Q)
                    )
                  )
                )
              : null
          );
        };
      var te = a(121911),
        ae = a(102511),
        ie = a(157668),
        ne = a(281086),
        se = a(782038);
      const le = {
          exit: "exit--p4spwlkedE",
          exitActive: "exitActive--BIpaDF7MkX",
          exitDone: "exitDone--KzowOK4h4K",
          appear: "appear--OcvlWdq5He",
          appearActive: "appearActive--HVwCcEJzKz",
          appearDone: "appearDone--KgBJPzbyTA"
        },
        re = i.memo(({ onPrimaryClick: e }) => {
          const { translate: t } = (0, C.Z)(),
            [a, n] = i.useState(!1);
          return i.createElement(
            se.Z,
            { appear: !0, in: !a, timeout: 600, classNames: le, onExited: e },
            i.createElement(
              "div",
              { className: "infoboxWrapper--wv1g66AwDu" },
              i.createElement(
                g.vDh,
                {
                  title: i.createElement(
                    "div",
                    { className: "boxTitle--OPmhjIjNsk" },
                    t("webapp_credential_edition_health_box_excluded_title")
                  ),
                  severity: "subtle",
                  size: "descriptive",
                  actions: [
                    i.createElement(
                      g.zxk,
                      {
                        nature: "primary",
                        onClick: (e) => {
                          e.preventDefault(), n(!0);
                        },
                        key: "primaryAction",
                        size: "small",
                        type: "button"
                      },
                      t("webapp_credential_edition_health_box_include")
                    )
                  ]
                },
                i.createElement(
                  "div",
                  { className: "descriptionWarning--MZGXiyazU_" },
                  t("webapp_credential_edition_health_box_excluded_description")
                )
              )
            )
          );
        });
      var oe = a(504253),
        de = a(151796);
      const ce = { appear: "appear--MMCjEcRU3u", appearActive: "appearActive--LG103cUrNZ", appearDone: "appearDone--tuYaN3WTGO" },
        me = i.memo(({ onPrimaryClick: e, onSecondaryClick: t, isLimitedSharingPassword: a, corruptionData: i }) => {
          const { translate: n } = (0, C.Z)();
          if (!i) return null;
          const s = ((e, t) => {
              const { riskType: a } = e;
              switch (a) {
                case oe.gI.Compromised:
                  return {
                    title: t("webapp_credential_edition_health_box_compromised_title"),
                    description: t("webapp_credential_edition_health_box_compromised_description"),
                    secondary: t("webapp_credential_edition_health_box_view_compromised")
                  };
                case oe.gI.Reused:
                  return {
                    title: t("webapp_credential_edition_health_box_reused_title"),
                    description: t.markup("webapp_credential_edition_health_box_reused_description_markup", { count: e.reuseCount }),
                    secondary: t("webapp_credential_edition_health_box_view_reused")
                  };
                case oe.gI.Weak:
                  return {
                    title: t("webapp_credential_edition_health_box_weak_title"),
                    description: t("webapp_credential_edition_health_box_weak_description"),
                    secondary: t("webapp_credential_edition_health_box_view_weak")
                  };
                default:
                  return (0, de.U)(a);
              }
            })(i, n),
            l = i.severity === oe.bp.STRONG ? "warning" : "brand";
          return (0, $.tZ)(
            se.Z,
            { in: !0, appear: !0, timeout: 600, classNames: ce },
            (0, $.tZ)(
              "div",
              { className: "infoboxWrapper--HmImoFEcPo", sx: { backgroundColor: "ds.background.default" } },
              (0, $.tZ)($.ke, {
                title: s.title,
                description: s.description,
                mood: l,
                size: "large",
                actions: [
                  (0, $.tZ)($.zx, { onClick: t, intensity: "quiet", key: "view_health", size: "small" }, s.secondary),
                  (0, $.tZ)(
                    g.ua7,
                    {
                      passThrough: !a,
                      key: "change_password",
                      content: n("webapp_credential_edition_health_box_change_limited"),
                      placement: "left",
                      sx: { maxWidth: "312px", fontSize: 2 }
                    },
                    (0, $.tZ)($.zx, { size: "small", onClick: e, disabled: a }, n("webapp_credential_edition_health_box_change_password"))
                  )
                ]
              })
            )
          );
        }),
        pe = JSON.parse(
          '{"v":"5.7.0","fr":30,"ip":0,"op":26,"w":240,"h":240,"nm":"Loading Light Theme","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 4","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,122,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"load","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.05490196078,0.2078431373,0.2392156863,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":12.5,"s":[42]},{"t":25,"s":[10]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[-19]},{"t":25,"s":[341]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"load 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.9058823529,0.9215686275,0.9254901961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":".","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0}],"markers":[]}'
        ),
        ue = "healthInfoContainer--Oetnuw7mbu",
        _e = "loader--q4x90RGHZr",
        he = ({ credentialId: e, isShared: t, hasLimitedPermission: a }) => {
          const s = (0, L.k6)(),
            { routes: l } = (0, L.Xo)(),
            { updateIsCredentialExcluded: r } = (0, ae.$)(),
            { healthData: o } = ((e) => {
              const { data: t } = (0, n.k)(ie.d, "credentialHealthData", { credentialId: e });
              return { healthData: t };
            })(e),
            [d, c] = (0, i.useState)(null);
          return null === o
            ? null
            : o
            ? i.createElement(
                "div",
                { className: ue },
                d ? i.createElement(ne.R, { credentialId: d, dismissCallback: () => c(null) }) : null,
                i.createElement(
                  "div",
                  { className: _e },
                  i.createElement(te.Z, {
                    height: 24,
                    width: 24,
                    animationParams: { renderer: "svg", loop: !0, autoplay: !0, animationData: pe }
                  })
                ),
                o.excluded
                  ? i.createElement(re, {
                      onPrimaryClick: () => {
                        r(e, !1);
                      }
                    })
                  : i.createElement(me, {
                      onPrimaryClick: (t) => {
                        t.preventDefault(), c(e);
                      },
                      onSecondaryClick: (e) => {
                        e.preventDefault(), s.push(l.userPasswordHealth);
                      },
                      isLimitedSharingPassword: t && a,
                      corruptionData: o.corruptionData
                    })
              )
            : i.createElement(
                "div",
                { className: ue },
                i.createElement(
                  "div",
                  { className: _e },
                  i.createElement(te.Z, {
                    height: 24,
                    width: 24,
                    animationParams: { renderer: "svg", loop: !0, autoplay: !0, animationData: pe }
                  })
                )
              );
        };
      var ke = a(130988),
        be = a(417776),
        we = a(509997),
        Ee = a(342573);
      const { SHARED_ACCESS: ge, ACCOUNT_DETAILS: ye } = we.CredentialTabs,
        xe = ({ activeTab: e, credential: t, displayTabs: a, changeTab: i, isAdmin: n }) => {
          const { translate: s } = (0, C.Z)(),
            { users: l, groups: r, collections: o } = (0, Ee.r)(t.id, n),
            d = [
              { active: e === ye, label: s("webapp_credential_edition_account_details"), onClick: () => i(ye) },
              {
                active: e === ge,
                label: `${s("webapp_credential_edition_shared_access")} (${l.length + r.length + o.length})`,
                onClick: () => i(ge)
              }
            ];
          return (0, $.tZ)(D.V9, {
            icon: (0, $.tZ)(be.h, { title: t.itemName, size: ke.o.LARGE, domain: new z.Y(t.URL).getRootDomain() }),
            title: t.itemName,
            tabs: a ? d : void 0
          });
        },
        { SHARED_ACCESS: Se, ACCOUNT_DETAILS: ve, LINKED_WEBSITES: fe } = we.CredentialTabs,
        Ce = ({
          location: e,
          activeSpaces: t,
          credential: a,
          credentialPreferences: n,
          onClose: s,
          protectedItemsUnlockerShown: l,
          dashlaneDefinedLinkedWebsites: r,
          areProtectedItemsUnlocked: d,
          openProtectedItemsUnlocker: c,
          isShared: p,
          isAdmin: u
        }) => {
          const { translate: _ } = (0, C.Z)(),
            { routes: M } = (0, L.Xo)(),
            O = (0, S.V)(),
            H = (() => {
              const { updateLinkedWebsites: e } = (0, w.u)(m.G),
                t = (0, f.w)("autofill_web_grapheneMigration_dev"),
                a = (0, f.w)("autofill_web_grapheneMigration");
              return async (i, n) => {
                t || a
                  ? e({ credentialId: i, updatedLinkedWebsitesList: n })
                  : await v.C.updateLinkedWebsites({ credentialId: i, updatedLinkedWebsitesDomainList: n });
              };
            })(),
            K = (0, i.useRef)(null);
          (0, i.useEffect)(() => {
            v.C.getCredential(a.id).then((e) => {
              K.current = e.sharingStatus;
            });
          }, []);
          const { createCollection: J, updateCollection: $ } = (0, w.u)(y.v),
            { addItemToCollections: Q, removeItemFromCollections: te } = (0, w.u)(E.a),
            ae = (0, i.createRef)(),
            ie = () => {
              var e, t;
              return {
                alternativeUsername: null != (e = a.alternativeUsername) ? e : "",
                email: a.email,
                itemName: a.itemName,
                linkedURLs: a.linkedURLs,
                note: a.note,
                otpURL: null != (t = a.otpURL) ? t : "",
                password: a.password,
                spaceId: a.spaceId,
                URL: a.URL,
                username: a.username,
                onlyAutofillExactDomain: n.onlyAutofillExactDomain,
                requireMasterPassword: n.requireMasterPassword,
                useAutoLogin: n.useAutoLogin
              };
            },
            [ne, se] = (0, i.useState)(ie()),
            [le, re] = (0, i.useState)(
              (() => {
                var e;
                const t = (0, L.CN)();
                return Z.A0[null != (e = t.get("tab")) ? e : "account-details"];
              })()
            ),
            [oe, de] = (0, i.useState)(ve),
            [ce, me] = (0, i.useState)(!1),
            [pe, ue] = (0, i.useState)(a.linkedURLs),
            [_e, ke] = (0, i.useState)(!1),
            [be, we] = (0, i.useState)(!1),
            [Ee, ge] = (0, i.useState)([]),
            [ye, Ce] = (0, i.useState)(!1),
            [Le, De] = (0, i.useState)(!1),
            [Ie, Ae] = (0, i.useState)(!1),
            [Ue, Pe] = (0, i.useState)(!1),
            [Re, We] = (0, i.useState)(!1),
            { current: Te } = (0, i.useRef)({
              confirmDeleteConfirm: _("webapp_credential_edition_delete_confirm"),
              confirmDeleteDismiss: _("webapp_credential_edition_delete_dismiss"),
              confirmDeleteSubtitle: _("webapp_credential_edition_confirm_delete_subtitle"),
              confirmDeleteTitle: _("webapp_credential_edition_confirm_delete_title"),
              lastAdminActionLabel: _("webapp_credential_edition_change_permissions"),
              lastAdminTitle: _("webapp_credential_edition_last_admin_title"),
              lastAdminSubtitle: _("webapp_credential_edition_last_admin_subtitle"),
              groupSharingTitle: _("webapp_credential_edition_group_sharing_title"),
              groupSharingSubtitle: _("webapp_credential_edition_group_sharing_subtitle")
            });
          (0, i.useEffect)(() => {
            var e, t;
            (e = pe), (t = a.linkedURLs), [...e, ...t].filter(Boolean).some((a) => !(e.includes(a) && t.includes(a))) && me(!0);
          }, [pe, a.linkedURLs]),
            (0, i.useEffect)(() => {
              le === ve && se(ie());
            }, [le]),
            (0, i.useEffect)(() => {
              const e = !(0, k.equals)(ne, ie());
              me(e);
            }, [ne]);
          const Ne = (e) => {
              ce ? (de(e), De(!0)) : re(e);
            },
            Ze = () => {
              De(!1), Ce(!1), ge([]);
            },
            Be = (e) => {
              ke(e), Ne(fe);
            },
            ze = () => {
              re(ve), me(!1), Ze();
            },
            qe = (e) => {
              e?.preventDefault(), ce ? (de(ve), Ce(!0)) : ze();
            },
            Ve = () => {
              H(a.id, pe),
                Ae(!0),
                (async (e, t) => {
                  const a = t.filter((t) => t && !e.linkedURLs.includes(t)),
                    i = e.linkedURLs.filter((e) => e && !t.includes(e)),
                    n = new z.Y(e.URL).getRootDomain();
                  (0, q.Kz)(
                    new B.AnonymousUpdateCredentialEvent({
                      action: B.Action.Edit,
                      associatedWebsitesAddedList: await V(a),
                      associatedWebsitesRemovedList: await V(i),
                      fieldList: [B.Field.AssociatedWebsitesList],
                      domain: { type: B.DomainType.Web, id: await (0, B.hashDomain)(n) },
                      space: e.spaceId ? B.Space.Professional : B.Space.Personal
                    })
                  ),
                    (0, q.Kz)(
                      new B.UserUpdateVaultItemEvent({
                        action: B.Action.Edit,
                        itemId: e.id,
                        itemType: B.ItemType.Credential,
                        fieldsEdited: [B.Field.AssociatedWebsitesList],
                        space: e.spaceId ? B.Space.Professional : B.Space.Personal
                      })
                    );
                })(a, pe),
                ze();
            },
            Me = (e) => !e.initiallyExisting && !e.hasBeenDeleted,
            Oe = (e) => e.initiallyExisting && !e.hasBeenDeleted,
            Fe = () => {
              e?.state?.entity ? (0, R.d)({ routes: M, location: e }) : s();
            },
            He = le === fe ? (e, t) => qe(t) : Fe,
            Ge = be || l;
          return i.createElement(
            D.zI,
            {
              isViewingExistingItem: !0,
              itemHasBeenEdited: ce,
              isSomeDialogOpen: ye || Ee.length > 0 || Le || Re || be,
              onSubmit: async () => {
                if (le === fe)
                  return void (async () => {
                    const e = await (async (e, t) => {
                      const a = t.filter((t) => t && !e.linkedURLs.includes(t)).map((e) => new z.Y(e).getRootDomain()),
                        i = a.map(
                          async (t) =>
                            await v.C.getCredentialsByDomain(
                              ((e, t) => ({
                                domain: e,
                                sortToken: { sortCriteria: [{ field: "lastUse", direction: "descend" }], uniqField: "id" },
                                filterToken: { filterCriteria: [{ field: "email", value: t, type: "equals" }] }
                              }))(t, e.email)
                            )
                        );
                      return (await Promise.all(i))
                        .map((e, t) => ({ ...e, linkedWebsite: a[t] }))
                        .filter((e) => e.matchingCount > 0)
                        .map((e) => ({ credentialName: e.items[0].title, linkedWebsite: e.linkedWebsite }));
                    })(a, pe);
                    ge(e), le !== fe || e.length || Ve();
                  })();
                if (!ae.current?.isFormValid()) return;
                const e = ae.current?.getVaultItemCollections();
                if (ce && !e) return;
                var t;
                Pe(!0),
                  n &&
                    ne.requireMasterPassword &&
                    ne.requireMasterPassword !== n.requireMasterPassword &&
                    (0, T.ih)(ne.requireMasterPassword, a.id, a.URL, null != (t = ne.spaceId) ? t : void 0);
                const i = {
                    kwType: "KWAuthentifiant",
                    origin: b.SaveOrigin.MANUAL,
                    content: {
                      id: a.id,
                      login: ne.username,
                      otpUrl: ne.otpURL,
                      secondaryLogin: ne.alternativeUsername,
                      title: ne.itemName,
                      url: ne.URL,
                      onlyForThisSubdomain: ne.onlyAutofillExactDomain,
                      autoLogin: ne.useAutoLogin,
                      protectWithMasterPassword: ne.requireMasterPassword,
                      category: "",
                      linkedWebsites: { addedByDashlane: r, addedByUser: ne.linkedURLs },
                      note: ne.note || "",
                      ...ne
                    },
                    shouldSkipSync: e?.some((e) => e.isShared && !Oe(e))
                  },
                  l = await v.C.savePersonalDataItem(i);
                if (l.success && e)
                  try {
                    await (async (e, t) => {
                      const a = [],
                        i = [];
                      for (const n of t)
                        Oe(n) ||
                          (n.isShared
                            ? Me(n)
                              ? a.push(n.id)
                              : i.push(n.id)
                            : ((n.vaultItems = [{ id: e, type: b.DataModelType.KWAuthentifiant }]),
                              n.id
                                ? await $({
                                    id: n.id,
                                    collection: n,
                                    operationType: n.hasBeenDeleted ? x.C.SUBSTRACT_VAULT_ITEMS : x.C.APPEND_VAULT_ITEMS
                                  })
                                : await J({ content: n })));
                      a.length && (await Q({ collectionIds: a, itemId: e, shouldSkipSync: i.length > 0 })),
                        i.length && (await te({ collectionIds: i, itemId: e }));
                    })(l.itemId, e);
                  } catch (e) {
                    return O.showAlert(_("_common_generic_error"), g.BLW.ERROR), void s();
                  }
                O.showAlert(_("_common_toast_changes_saved"), g.BLW.SUCCESS), s();
              },
              secondaryActions:
                le === fe
                  ? []
                  : [
                      i.createElement(ee, { key: "pwhist", credentialId: a.id }),
                      i.createElement(U.b, { key: "shareaction", id: a.id, isShared: p, isAdmin: u, getSharing: P.Ei })
                    ],
              onNavigateOut: He,
              onClickDelete: () => we(!0),
              withoutDeleteButton: le === fe,
              withoutConfirmationDialog: le === fe,
              ignoreCloseOnEscape: Ge,
              formId: "edit_credential_panel",
              submitPending: Ue,
              header: i.createElement(xe, { activeTab: le, credential: a, displayTabs: p, changeTab: Ne, isAdmin: u })
            },
            p && le === Se ? i.createElement(W.u, { isAdmin: u, id: a.id }) : null,
            le === ve
              ? i.createElement(
                  "div",
                  { className: "healthEditContainer--lJ8iSk3hnU" },
                  i.createElement(he, { credentialId: a.id, isShared: p, hasLimitedPermission: !u }),
                  i.createElement(
                    "div",
                    { className: h()(F.Z.form, "formWithHealth--rKaIE4Sw6v") },
                    i.createElement(N.S, {
                      ref: ae,
                      activeSpaces: t,
                      editableValues: ne,
                      setEditableValues: se,
                      readonlyValues: (() => {
                        const e = p && !u;
                        return { id: a.id, forceCategorizedSpace: (0, Z.UC)(a, t), limitedPermissions: e, linkedURLs: a.linkedURLs };
                      })(),
                      signalEditedValues: (e) => {
                        me(e);
                      },
                      dashlaneDefinedLinkedWebsites: r,
                      areProtectedItemsUnlocked: d,
                      openProtectedItemsUnlocker: c,
                      protectedItemsUnlockerShown: l,
                      onClickLinkedWebsitesCount: () => Be(!1),
                      onClickAddNewWebsite: () => Be(!0),
                      setHasOpenedDialogs: We
                    })
                  )
                )
              : null,
            le === fe
              ? i.createElement(G, {
                  credential: a,
                  dashlaneDefinedLinkedWebsites: r,
                  onClose: qe,
                  openWithNewUrlField: _e,
                  onUpdateLinkedWebsitesAddedByUser: ue,
                  hasLimitedRights: p && !u
                })
              : null,
            K.current
              ? i.createElement(I.s, {
                  isVisible: be,
                  itemId: a.id,
                  closeConfirmDeleteDialog: () => we(!1),
                  goToSharingAccess: () => {
                    Ne(Se);
                  },
                  onDeletionSuccess: Fe,
                  sharingStatus: K.current,
                  translations: Te,
                  vaultItemType: o.U.Credential
                })
              : null,
            ye ? i.createElement(X, { onCancel: () => Ce(!1), onLeavePageWithoutSaving: ze }) : null,
            Ee.length > 0 ? i.createElement(Y, { duplicateData: Ee, onCancel: () => ge([]), onSave: Ve }) : null,
            Le
              ? i.createElement(A.a, {
                  onDismissClick: () => De(!1),
                  onConfirmClick: () => {
                    re(oe), me(!1), Ze();
                  }
                })
              : null,
            Ie ? i.createElement(j, { onClose: () => Ae(!1), setDisplayLinkedWebsitesDataSavedAlert: Ae }) : null
          );
        },
        Le = (e) => {
          const { credential: t } = e,
            a = (0, p.E)(),
            o = (0, u.tY)(),
            _ = (0, n.k)(m.G, "getDashlaneDefinedLinkedWebsites", { url: t.URL }),
            h = (0, n.k)(r.L, "tempCredentialPreferences", { credentialId: t.id }),
            { getPermissionForItem: k, getSharingStatusForItem: b } = (0, s.Y)(
              d.X,
              { getPermissionForItem: { queryParam: { itemId: t.id } }, getSharingStatusForItem: { queryParam: { itemId: t.id } } },
              []
            );
          if (
            h.status !== l.rq.Success ||
            _.status !== l.rq.Success ||
            k.status !== l.rq.Success ||
            b.status !== l.rq.Success ||
            a.status !== l.rq.Success
          )
            return null;
          const w = b.data.isShared;
          return i.createElement(Ce, {
            ...e,
            ...o,
            activeSpaces: a.data,
            dashlaneDefinedLinkedWebsites: _.data,
            credentialPreferences: h.data,
            isShared: w,
            isAdmin: w && k.data.permission === c.y3.Admin
          });
        },
        De = (e) => {
          const { data: t, status: a } = (0, n.k)(r.L, "query", { vaultItemTypes: [o.U.Credential], ids: [`{${e.match.params.uuid}}`] });
          return a === l.rq.Loading
            ? null
            : t?.credentialsResult.items.length
            ? i.createElement(Le, { ...e, credential: t.credentialsResult.items[0] })
            : null;
        };
    }
  }
]);
