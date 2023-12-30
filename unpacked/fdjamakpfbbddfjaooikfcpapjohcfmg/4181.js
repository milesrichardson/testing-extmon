"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4181],
  {
    438182: (e, t, a) => {
      a.r(t), a.d(t, { CredentialAddPanel: () => q });
      var s = a(696832),
        n = a(133354),
        i = a(718108),
        o = a(830894),
        l = a(526849),
        r = a(876307),
        c = a(593039),
        d = a(962899),
        u = a(914662),
        m = a(287279),
        p = a(361607),
        w = a(482598),
        g = a(299074),
        h = a(448430),
        I = a(96862),
        S = a(382706),
        f = a(172721),
        C = a(982466),
        _ = a(488203),
        y = a(86498),
        P = a(45272),
        U = a(108403),
        v = a(692077),
        E = a(66485),
        L = a(619122),
        b = a(376452),
        V = a(210288),
        k = a(199975),
        A = a(383849),
        D = a.n(A);
      const N = () => {
        const { translate: e } = (0, _.Z)();
        return (0, r.tZ)(b.V9, {
          icon: (0, r.tZ)("div", { className: D()("icon--gEZfcCvjSg", "dummyIcon--ix6eIwyFEN") }),
          title: e("webapp_credential_addition_website")
        });
      };
      var R;
      const T = ["name", "website"],
        Z = { name: "itemName", website: "URL" },
        O = ({
          activeSpaces: e,
          onClose: t,
          protectedItemsUnlockerShown: a,
          openProtectedItemsUnlocker: n,
          areProtectedItemsUnlocked: i
        }) => {
          var o, A;
          const D = (0, s.createRef)(),
            [O, q] = (0, s.useState)(!1),
            { routes: x } = (0, v.Xo)(),
            { currentSpaceId: B } = (0, L.fV)(),
            M = (0, p._)(),
            H = (0, y.V)(),
            { translate: X } = (0, _.Z)(),
            F = (0, U.v0)(),
            W = !F.isLoading && F.shouldShowAtOrOverLimitContent,
            { openDialog: j, shouldShowTrialDiscontinuedDialog: z } = (0, E.yp)(),
            { createCollection: G, updateCollection: J } = (0, w.u)(g.v),
            { addItemToCollections: K } = (0, w.u)(f.a),
            { createVaultItem: Y, tempCredentialPreferencesUpdate: Q } = (0, w.u)(h.L),
            [$, ee] = (0, s.useState)(!1),
            [te, ae] = (0, s.useState)(!1),
            se = (0, v.TH)(),
            ne = (0, s.useRef)(se.state?.previouslyGeneratedPassword),
            ie = Boolean(M.data?.sharingVault_web_Collection_Item_Permissions_dev),
            [oe, le] = (0, s.useState)(Boolean(ne.current)),
            re = (() => {
              const e = (0, v.CN)();
              return T.reduce((t, a) => ((t[Z[a] || a] = e.get(a)), t), {});
            })(),
            ce = {
              alternativeUsername: "",
              email: "",
              itemName: "",
              linkedURLs: [],
              note: "",
              otpURL: "",
              password: null != (o = ne.current) ? o : "",
              spaceId: null != B ? B : "",
              username: "",
              ...re,
              URL: null != (A = se.state?.website) ? A : re.URL,
              onlyAutofillExactDomain: !1,
              requireMasterPassword: !1,
              useAutoLogin: !0
            },
            [de, ue] = (0, s.useState)(ce);
          (0, s.useEffect)(() => {
            const e = !(0, l.equals)(de, ce);
            le(e);
          }, [de]);
          const me = () => {
            ee(!0);
          };
          (0, s.useEffect)(() => {
            W && (me(), t()), z && (j(), t());
          }, [W, z]),
            (0, s.useEffect)(() => {
              (0, P.Nc)(c.PageView.ItemCredentialCreate);
            }, []);
          const pe = () => H.showAlert(X("_common_generic_error"), d.BLW.ERROR),
            we = () => {
              (0, P.Nc)(c.PageView.ItemCredentialList), $ ? (0, v.uX)(x.userCredentials) : t ? t() : (0, v.uX)(x.userCredentials);
            };
          return F.isLoading || null === z
            ? null
            : (0, r.tZ)(
                b.zI,
                {
                  isUsingNewDesign: !0,
                  isViewingExistingItem: !1,
                  isSomeDialogOpen: te,
                  itemHasBeenEdited: oe,
                  onSubmit: async () => {
                    Boolean(D.current?.isFormValid()) &&
                      (q(!0),
                      await (async () => {
                        const e = D.current?.getVaultItemCollections(),
                          { onlyAutofillExactDomain: t, useAutoLogin: a, requireMasterPassword: s, ...n } = de;
                        try {
                          const i = await Y({ vaultItemType: S.U.Credential, content: n, shouldSkipSync: !0 });
                          if (!(0, m.d6)(i)) return void pe();
                          const o = (0, m.db)(i).id,
                            l = [
                              Q({
                                credentialId: o,
                                onlyAutofillExactDomain: t,
                                useAutoLogin: a,
                                requireMasterPassword: s,
                                shouldSkipSync: e?.some((e) => e.isShared)
                              })
                            ];
                          e?.length &&
                            l.push(
                              (async (e, t) => {
                                const a = [];
                                for (const s of t)
                                  s.isShared
                                    ? a.push({ collectionUUID: s.id, permission: ie ? C.y3.Limited : C.y3.Admin })
                                    : ((s.vaultItems = [{ id: e, type: u.dJ.KWAuthentifiant }]),
                                      s.id
                                        ? await J({ id: s.id, collection: s, operationType: I.C.APPEND_VAULT_ITEMS })
                                        : await G({ content: s }));
                                a.length && (await K({ collectionPermissions: a, itemId: e }));
                              })(o, e)
                            ),
                            await Promise.all(l);
                        } catch (e) {
                          pe();
                        }
                      })(),
                      W ? me() : we());
                  },
                  onNavigateOut: we,
                  formId: "add_credential_panel",
                  header: R || (R = (0, r.tZ)(N, null)),
                  submitPending: O
                },
                (0, r.tZ)(V.S, {
                  ref: D,
                  editableValues: de,
                  setEditableValues: ue,
                  readonlyValues: { id: "", limitedPermissions: !1, linkedURLs: [] },
                  isNewItem: !0,
                  signalEditedValues: () => le(!0),
                  activeSpaces: e,
                  areProtectedItemsUnlocked: i,
                  openProtectedItemsUnlocker: n,
                  protectedItemsUnlockerShown: a,
                  setHasOpenedDialogs: ae
                }),
                $ && (0, r.tZ)(k.e, { isVisible: $, handleDismiss: we })
              );
        },
        q = (e) => {
          const t = (0, i.E)(),
            a = (0, o.tY)();
          return t.status !== n.rq.Success ? null : s.createElement(O, { ...e, activeSpaces: t.data, ...a });
        };
    }
  }
]);
