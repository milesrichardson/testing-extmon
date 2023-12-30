"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2634],
  {
    368021: (e, t, a) => {
      a.r(t), a.d(t, { CredentialAddPanel: () => T });
      var s = a(696832),
        n = a(133354),
        i = a(416088),
        o = a(889483),
        l = a(526849),
        r = a(660765),
        c = a(441217),
        d = a(453576),
        u = a(482598),
        m = a(299074),
        p = a(448430),
        w = a(96862),
        I = a(382706),
        g = a(172721),
        h = a(201389),
        S = a(787268),
        E = a(62429),
        C = a(676849),
        f = a(635164),
        P = a(352116),
        v = a(796446),
        y = a(169600),
        U = a(819978),
        L = a(142897),
        V = a(383849),
        b = a.n(V);
      const _ = () => {
        const { translate: e } = (0, h.Z)();
        return (0, L.tZ)(v.V9, {
          icon: (0, L.tZ)("div", { className: b()("icon--gEZfcCvjSg", "dummyIcon--ix6eIwyFEN") }),
          title: e("webapp_credential_addition_website")
        });
      };
      var k;
      const A = ["name", "website"],
        R = { name: "itemName", website: "URL" },
        N = ({
          activeSpaces: e,
          onClose: t,
          protectedItemsUnlockerShown: a,
          openProtectedItemsUnlocker: n,
          areProtectedItemsUnlocked: i
        }) => {
          var o, L;
          const V = (0, s.createRef)(),
            [b, N] = (0, s.useState)(!1),
            { routes: T } = (0, f.Xo)(),
            { currentSpaceId: D } = (0, P.fV)(),
            O = (0, S.V)(),
            { translate: q } = (0, h.Z)(),
            x = (0, C.v0)(),
            M = !x.isLoading && x.shouldShowAtOrOverLimitContent,
            { createCollection: Z, updateCollection: B } = (0, u.u)(m.v),
            { addItemToCollections: H } = (0, u.u)(g.a),
            { createVaultItem: X, tempCredentialPreferencesUpdate: F } = (0, u.u)(p.L),
            [W, j] = (0, s.useState)(!1),
            [z, G] = (0, s.useState)(!1),
            K = (0, f.TH)(),
            Y = (0, s.useRef)(K.state?.previouslyGeneratedPassword),
            [J, Q] = (0, s.useState)(Boolean(Y.current)),
            $ = (() => {
              const e = (0, f.CN)();
              return A.reduce((t, a) => ((t[R[a] || a] = e.get(a)), t), {});
            })(),
            ee = {
              alternativeUsername: "",
              email: "",
              itemName: "",
              linkedURLs: [],
              note: "",
              otpURL: "",
              password: null != (o = Y.current) ? o : "",
              spaceId: null != D ? D : "",
              username: "",
              ...$,
              URL: null != (L = K.state?.website) ? L : $.URL,
              onlyAutofillExactDomain: !1,
              requireMasterPassword: !1,
              useAutoLogin: !0
            },
            [te, ae] = (0, s.useState)(ee);
          (0, s.useEffect)(() => {
            const e = !(0, l.equals)(te, ee);
            Q(e);
          }, [te]);
          const se = () => {
            j(!0);
          };
          (0, s.useEffect)(() => {
            M && se(), (0, E.Nc)(r.PageView.ItemCredentialCreate);
          }, [M]);
          const ne = () => O.showAlert(q("_common_generic_error"), c.BLW.ERROR),
            ie = () => {
              (0, E.Nc)(r.PageView.ItemCredentialList), W ? (0, f.uX)(T.userCredentials) : t ? t() : (0, f.uX)(T.userCredentials);
            };
          return s.createElement(
            v.zI,
            {
              isViewingExistingItem: !1,
              isSomeDialogOpen: z,
              itemHasBeenEdited: J,
              onSubmit: async () => {
                Boolean(V.current?.isFormValid()) &&
                  (N(!0),
                  await (async () => {
                    const e = V.current?.getVaultItemCollections(),
                      { onlyAutofillExactDomain: t, useAutoLogin: a, requireMasterPassword: s, ...n } = te,
                      i = await X({ vaultItemType: I.U.Credential, content: n, shouldSkipSync: e?.some((e) => e.isShared) });
                    if ("success" === i.tag)
                      try {
                        const n = [F({ credentialId: i.data.id, onlyAutofillExactDomain: t, useAutoLogin: a, requireMasterPassword: s })];
                        e?.length &&
                          n.push(
                            (async (e, t) => {
                              const a = [];
                              for (const s of t)
                                s.isShared
                                  ? a.push(s.id)
                                  : ((s.vaultItems = [{ id: e, type: d.DataModelType.KWAuthentifiant }]),
                                    s.id
                                      ? await B({ id: s.id, collection: s, operationType: w.C.APPEND_VAULT_ITEMS })
                                      : await Z({ content: s }));
                              a.length && (await H({ collectionIds: a, itemId: e }));
                            })(i.data.id, e)
                          ),
                          await Promise.all(n);
                      } catch (e) {
                        ne();
                      }
                    else ne();
                  })(),
                  M ? se() : ie());
              },
              onNavigateOut: ie,
              formId: "add_credential_panel",
              header: k || (k = s.createElement(_, null)),
              submitPending: b
            },
            s.createElement(y.S, {
              ref: V,
              editableValues: te,
              setEditableValues: ae,
              readonlyValues: { id: "", limitedPermissions: !1, linkedURLs: [] },
              isNewItem: !0,
              signalEditedValues: () => Q(!0),
              activeSpaces: e,
              areProtectedItemsUnlocked: i,
              openProtectedItemsUnlocker: n,
              protectedItemsUnlockerShown: a,
              setHasOpenedDialogs: G
            }),
            W && s.createElement(U.e, { isVisible: W, handleDismiss: ie })
          );
        },
        T = (e) => {
          const t = (0, i.E)(),
            a = (0, o.tY)();
          return t.status !== n.rq.Success ? null : s.createElement(N, { ...e, activeSpaces: t.data, ...a });
        };
    }
  }
]);
