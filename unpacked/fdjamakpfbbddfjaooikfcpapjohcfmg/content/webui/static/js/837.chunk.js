(this.webpackChunk_dashlane_webcards = this.webpackChunk_dashlane_webcards || []).push([
  [837],
  {
    8338: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => Zn });
      var n = t(6832),
        o = t(3750),
        i = t(1757),
        r = t(9771),
        s = t(3358),
        l = t(9329),
        d = t(730);
      const E = n.createContext({ features: {}, hasFeature: () => !1 }),
        c = ({ children: e, featureFlips: a }) => {
          const t = a || {},
            o = { features: t, hasFeature: (e) => !!t && Boolean(t[e]) };
          return n.createElement(E.Provider, { value: o }, e);
        },
        T = n.createContext({ sendWebcardGeometry: null }),
        u = t(6361),
        R = (e) => (a) => (t, n) => {
          let o = u[e][a]?.[t] || u.en[a]?.[t] || t;
          if (
            "object" == typeof (i = o) &&
            null !== i &&
            "one" in i &&
            "string" == typeof i.one &&
            "other" in i &&
            "string" == typeof i.other
          ) {
            const e = n && Object.keys(n).find((e) => "number" == typeof n[e]);
            o = e && 1 !== n?.[e] ? o.other : o.one;
          }
          var i;
          return "string" != typeof o ? t : n ? Object.keys(n).reduce((e, a) => e.replace(`{${a}}`, n[a].toString()), o) : o;
        },
        _ = { nameSpace: "", translate: (e) => e, langCode: "en" },
        C = n.createContext({ ..._, dispatch: null }),
        S = ({ children: e, langCode: a }) => {
          const [t, o] = n.useReducer(
            (e, a) => {
              switch (a.type) {
                case "setLanguage":
                  return { langCode: a.payload, nameSpace: e.nameSpace, translate: R(a.payload)(e.nameSpace) };
                case "setNameSpace":
                  return { langCode: e.langCode, nameSpace: a.payload, translate: R(e.langCode)(a.payload) };
                default:
                  return { ..._ };
              }
            },
            { ..._, langCode: a || _.langCode }
          );
          return (
            n.useLayoutEffect(() => {
              document.documentElement.lang = t.langCode;
            }, [t.langCode]),
            n.createElement(C.Provider, { value: { ...t, dispatch: o } }, e)
          );
        },
        p = () => n.useContext(C),
        m = n.createContext(void 0),
        g = ({ children: e, timeToWebcard: a }) => n.createElement(m.Provider, { value: a }, e),
        P = () => {
          const e = n.useContext(m);
          if (void 0 === e) throw new Error("usePerformanceContext was used outside of its Provider");
          return e;
        };
      var h = t(3039);
      const w = {
          FOOTNOTE_TEXT: {
            fontSize: "12px",
            lineHeight: "1.33",
            fontFamily: "'Public Sans', 'PublicSans-Regular', 'Public Sans Regular', 'Helvetica', 'Arial', sans-serif",
            color: "ds.text.neutral.quiet"
          }
        },
        A = n.createContext({}),
        O = ({ autofillEngineCommands: e, autofillEngineDispatcher: a, children: t, setAutofillEngineActionsHandlers: o }) => {
          const i = { autofillEngineCommands: e, autofillEngineDispatcher: a, setAutofillEngineActionsHandlers: o };
          return n.createElement(A.Provider, { value: i }, t);
        },
        L = () => n.useContext(A);
      let N = (function (e) {
        return (
          (e.ARROW_UP = "ArrowUp"),
          (e.ARROW_DOWN = "ArrowDown"),
          (e.TAB = "Tab"),
          (e.ENTER = "Enter"),
          (e.ESCAPE = "Escape"),
          (e.SPACE = " "),
          e
        );
      })({});
      let b = null,
        D = 0,
        I = 0;
      const f = "active",
        v = (e) => e.getAttribute("data-keyboard-accessible"),
        y = (e) => Boolean(v(e)) && "false" !== v(e),
        F = ({ children: e }) => n.createElement("div", { "aria-live": "polite", className: "ScreenReaderSpeech_visuallyHidden" }, e),
        k = { "*.active": { outline: "5px auto", outlineColor: "ds.oddity.focus", outlineOffset: "-4px" } },
        M = {
          CARD_LAYOUT: { backgroundColor: "ds.container.agnostic.neutral.supershy", margin: "0", overflow: "hidden", ...k },
          DIALOG_LAYOUT: { width: "380px" },
          DROPDOWN_LAYOUT: { maxWidth: "650px" },
          ROUNDED_BORDERS: { borderRadius: "8px" },
          MAIN_WITH_PADDING: { padding: "16px 0" },
          MAIN_WITHOUT_PADDING: { padding: "0" }
        },
        B = ({ children: e, footer: a, header: t, isDropdown: o, webcardData: s, withNoMainPadding: l, withAllBordersRounded: d }) => {
          const { sendWebcardGeometry: E } = (0, n.useContext)(T),
            c = (({ sendWebcardGeometry: e }) => {
              const a = n.useRef(null);
              return (
                n.useEffect(() => {
                  if (!a.current || !e) return () => {};
                  const { current: t } = a,
                    n = () => {
                      if (t) {
                        const a = t.getBoundingClientRect(),
                          n = ((e, a) =>
                            ((e, { width: a, height: t }) => {
                              const n = e && e[0];
                              return n ? { width: a / n, height: t / n } : { width: a, height: t };
                            })(
                              (window.getComputedStyle(e).transform || "")
                                .split(/\(|,|\)/)
                                .slice(1, -1)
                                .map((e) => parseFloat(e)),
                              a
                            ))(t, a),
                          o = Math.round(n.width),
                          i = Math.round(n.height);
                        if (t === b && o === D && i === I) return;
                        (I = i), (D = o), (b = t), e({ width: o, height: i });
                      }
                    };
                  n();
                  const o = new ResizeObserver(() => {
                    n();
                  });
                  return o.observe(a.current), () => o.disconnect();
                }, [a, e]),
                a
              );
            })({ sendWebcardGeometry: E }),
            u = (0, i.jM)([M.CARD_LAYOUT, o ? M.DROPDOWN_LAYOUT : M.DIALOG_LAYOUT]),
            R = ((e) => {
              const { container: a, srcElement: t, webcardId: o } = e,
                { autofillEngineDispatcher: i } = L(),
                s = n.useRef(null),
                l = n.useRef(null),
                [d, E] = n.useState(),
                c = (e) => {
                  if (e) {
                    l.current?.classList.remove(f),
                      (l.current = e),
                      l.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }),
                      l.current.classList.add(f);
                    const a = v(l.current);
                    a && "true" !== a && E(a);
                  }
                },
                T = n.useCallback((e, a = !1) => {
                  for (let t = 0; t < e.children.length; t++) {
                    const n = e.children[a ? e.children.length - 1 - t : t];
                    if (y(n)) return n;
                    const o = T(n, a);
                    if (o) return o;
                  }
                  return null;
                }, []),
                u = n.useCallback(
                  (e, a = !1) => {
                    let t = e;
                    if (!a) {
                      const e = T(t);
                      if (e) return e;
                    }
                    for (; t && t !== s.current; ) {
                      const e = a ? t.previousElementSibling : t.nextElementSibling;
                      if (!e) {
                        if (a && t.parentElement && y(t.parentElement)) return t.parentElement;
                        t = t.parentElement;
                        continue;
                      }
                      const n = y(e),
                        o = T(e, a);
                      if (n && o) return a ? o : e;
                      if (n || o) return null != o ? o : e;
                      t = e;
                    }
                    return null;
                  },
                  [T]
                ),
                R = n.useCallback(
                  (e) => {
                    if (!s.current) return;
                    if (!l.current || !s.current.contains(l.current)) return void c(T(s.current));
                    let a = null;
                    switch (e) {
                      case N.ARROW_DOWN:
                      case N.ARROW_UP:
                        a = u(l.current, e === N.ARROW_UP);
                    }
                    c(a);
                  },
                  [T, u]
                ),
                _ = n.useCallback(
                  (e) => {
                    switch (e) {
                      case N.ARROW_UP:
                      case N.ARROW_DOWN:
                        R(e);
                        break;
                      case N.ENTER:
                        l?.current?.click();
                    }
                  },
                  [R]
                );
              return (
                n.useEffect(() => {
                  a && ((s.current = a.current), (l.current = null), E(void 0));
                }, [a]),
                n.useEffect(() => {
                  const e = (e) => {
                    _(e.key);
                  };
                  return window.document.addEventListener("keydown", e), () => window.document.removeEventListener("keydown", e);
                }, [a, _]),
                n.useEffect(
                  () => (
                    o &&
                      t &&
                      (i?.sendMessage(
                        { message: r.DispatcherMessages.SubscribeKeyboardNavigationEvents, targetFrameId: Number(t.frameId) },
                        o,
                        t.elementId
                      ),
                      i?.addListener(r.DispatcherMessages.KeyboardNavigationEvent, (e, a, t) => {
                        a === o && _(t);
                      })),
                    () => {
                      o && t && i?.removeListener(r.DispatcherMessages.KeyboardNavigationEvent);
                    }
                  ),
                  [i, _, t, o]
                ),
                d
              );
            })({ container: c, webcardId: s?.webcardId, srcElement: s?.srcElement });
          return (0, i.tZ)(
            "div",
            { sx: (0, i.jM)([u, d ? M.ROUNDED_BORDERS : {}]), ref: c },
            null != t ? t : null,
            (0, i.tZ)("main", { sx: l ? M.MAIN_WITHOUT_PADDING : M.MAIN_WITH_PADDING }, e),
            null != a ? a : null,
            R ? (0, i.tZ)(F, null, R) : null
          );
        },
        x = {
          BORDER_TOP: { border: "none", borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle" },
          DESCRIPTION: { marginRight: "4px" },
          DIVIDER: { padding: "0", margin: "0 16px" },
          EXTENSION_SHORTCUTS_WRAPPER: { display: "flex", alignItems: "center", flexDirection: "row", padding: "14px 16px 12px 16px" },
          FOOTER: { padding: "16px", paddingTop: "8px" },
          WITH_DIVIDER: { paddingTop: "16px" },
          WITHOUT_FOOTER_PADDING: { margin: "0", padding: "0" },
          SHORTCUT_ITEM: { marginLeft: "4px" }
        },
        W = ({ children: e, withFooterDivider: a, withFooterPadding: t = !0, extensionShortcuts: r }) => {
          const { translate: s } = n.useContext(C);
          return (0, i.tZ)(
            "footer",
            null,
            e
              ? (0, i.tZ)(
                  n.Fragment,
                  null,
                  a ? (0, i.tZ)("hr", { sx: (0, i.jM)([x.DIVIDER, x.BORDER_TOP]) }) : null,
                  (0, i.tZ)("div", { sx: (0, i.jM)([t ? x.FOOTER : x.WITHOUT_FOOTER_PADDING, a ? x.WITH_DIVIDER : {}]) }, e)
                )
              : null,
            r && r?.length > 0
              ? (0, i.tZ)(
                  "div",
                  { sx: (0, i.jM)([x.EXTENSION_SHORTCUTS_WRAPPER, x.BORDER_TOP]) },
                  (0, i.tZ)(o.nvN, { sx: x.DESCRIPTION, color: "ds.text.neutral.quiet", size: "x-small" }, s("openTheExtension")),
                  r.map((e) => (0, i.tZ)("div", { sx: x.SHORTCUT_ITEM, key: e }, (0, i.tZ)(i.Ct, { label: e, intensity: "supershy" })))
                )
              : null
          );
        };
      var U = t(9430),
        z = t.n(U);
      const H = {
          HEADER: {
            display: "flex",
            backgroundColor: "ds.container.agnostic.neutral.standard",
            alignItems: "center",
            justifyContent: "center"
          },
          DIALOG: { minHeight: "64px" },
          DIALOG_ACTION: {
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "ds.container.expressive.neutral.quiet.hover" },
            cursor: "pointer",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "flex-start",
            justifyContent: "center",
            marginRight: "16px",
            width: "32px",
            height: "32px",
            borderRadius: "2px",
            marginTop: "20px"
          },
          DIALOG_CONTENT: { flex: "1", padding: "16px" },
          DIALOG_LOGO: { flexShrink: "0", display: "block", width: "28px", height: "28px", marginLeft: "20px" },
          DROPDOWN: { minHeight: "36px" },
          DROPDOWN_ACTION: {
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "ds.container.expressive.neutral.quiet.hover", svg: { fill: "ds.text.neutral.standard" } },
            width: "36px",
            height: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          },
          DROPDOWN_LOGO: { flexShrink: "0", display: "block", width: "15px", height: "15px", marginLeft: "16px" },
          DROPDOWN_CONTENT: { flex: "1", display: "flex", alignItems: "center", overflowX: "hidden", padding: "16px" }
        },
        V = "closeWindow",
        Y = ({ isDropdown: e, onClose: a }) => {
          const { translate: t } = (0, n.useContext)(C);
          return (0, i.tZ)(
            "button",
            {
              type: "button",
              sx: e ? H.DROPDOWN_ACTION : H.DIALOG_ACTION,
              onClick: a,
              "aria-label": t(V),
              "data-testid": "header-close-button",
              "data-keyboard-accessible": e ? `${t(V)}: ${t("roleButton")}` : t(V)
            },
            (0, i.tZ)(i.JO, { name: "ActionCloseOutlined", "aria-hidden": !0, size: e ? "small" : "medium" })
          );
        };
      var G;
      const Z = ({ autofillOptionsVisible: e, onMoreOptions: a }) => {
        const { translate: t } = (0, n.useContext)(C),
          o = t(e ? "optionsCloseMenu" : "optionsOpenMenu"),
          r = e ? (0, i.jM)([H.DROPDOWN_ACTION, { backgroundColor: "ds.container.expressive.neutral.quiet.active" }]) : H.DROPDOWN_ACTION;
        return (0, i.tZ)(
          "button",
          { id: "dropdownMoreOptions", type: "button", sx: r, onClick: a, "data-keyboard-accessible": `${o}: ${t("roleButton")}` },
          G || (G = (0, i.tZ)(i.JO, { name: "ActionMoreOutlined", "aria-hidden": !0, size: "large" }))
        );
      };
      var K;
      const q = ({
          children: e,
          withDashlaneLogo: a,
          isOptionsMenuOpen: t,
          isDropdown: o,
          onClickClose: r,
          onClickOptions: s,
          onClickSearch: l
        }) => {
          const { translate: d } = (0, n.useContext)(C);
          return (0, i.tZ)(
            "header",
            { sx: (0, i.jM)([H.HEADER, o ? H.DROPDOWN : H.DIALOG]) },
            a ? (0, i.tZ)(z(), { viewBox: "0 0 10.4 14.9", sx: o ? H.DROPDOWN_LOGO : H.DIALOG_LOGO, "aria-hidden": !0 }) : null,
            (0, i.tZ)("div", { sx: o ? H.DROPDOWN_CONTENT : H.DIALOG_CONTENT }, e),
            o && l
              ? (0, i.tZ)(
                  "button",
                  {
                    id: "dropdownSearchButton",
                    type: "button",
                    sx: H.DROPDOWN_ACTION,
                    onClick: l,
                    "data-keyboard-accessible": `${d("search")}:\n            ${d("roleButton")}`
                  },
                  K || (K = (0, i.tZ)(i.JO, { name: "ActionSearchOutlined", size: "small", "aria-hidden": !0 }))
                )
              : null,
            o && s ? (0, i.tZ)(Z, { onMoreOptions: s, autofillOptionsVisible: t }) : null,
            r ? (0, i.tZ)(Y, { onClose: () => r(h.S77.CloseCross), isDropdown: o }) : null
          );
        },
        j = ({
          children: e,
          closeWebcard: a,
          extensionShortcuts: t,
          footerContent: o,
          headerContent: i,
          withFooterDivider: r,
          withHeaderCloseButton: s,
          withHeaderLogo: l,
          withFooterPadding: d,
          withNoMainPadding: E
        }) => {
          const c = i ? n.createElement(q, { onClickClose: s ? a : void 0, withDashlaneLogo: l }, i) : null,
            T = o ? n.createElement(W, { withFooterDivider: r, withFooterPadding: d, extensionShortcuts: t }, o) : null;
          return n.createElement(B, { header: c, footer: T, withNoMainPadding: E }, e);
        },
        X = { overflowWrap: "anywhere" },
        $ = ({ title: e }) =>
          (0, i.tZ)(i.X6, {
            as: "h1",
            color: "ds.text.neutral.catchy",
            textStyle: "ds.title.block.small",
            dangerouslySetInnerHTML: { __html: e },
            sx: X,
            "data-testid": "header-title"
          }),
        J = ({ label: e, onClick: a, intensity: t }) =>
          n.createElement(
            i.zx,
            {
              mood: "neutral",
              intensity: null != t ? t : "quiet",
              size: "small",
              type: "button",
              onClick: a,
              "data-keyboard-accessible": e,
              "aria-label": e
            },
            e
          ),
        Q = ({ label: e, onClick: a, ref: t, disabled: o, icon: r }) =>
          n.createElement(
            i.zx,
            {
              mood: "brand",
              intensity: "catchy",
              size: "small",
              type: "button",
              ref: t,
              disabled: o,
              onClick: a,
              "data-keyboard-accessible": e,
              icon: null != r ? r : void 0,
              layout: r ? "iconLeading" : "labelOnly",
              "aria-label": e
            },
            e
          );
      var ee;
      const ae = { FOOTER_TEXT: (0, i.jM)([w, { paddingLeft: "16px" }]) },
        te = ({ data: { pendingOperation: e, tabRootDomain: a }, closeWebcard: t }) => {
          const { translate: o } = n.useContext(C),
            { autofillEngineCommands: r } = L(),
            s = async ({ withEscapeKey: e = !1 } = {}) => {
              r?.logEvent(new h.KQ6({ dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross })),
                r?.logEvent(
                  new h.RXg({
                    domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != a ? a : "") },
                    isNativeApp: !1,
                    dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross
                  })
                ),
                t();
            };
          return (
            n.useEffect(() => {
              const e = (e) => {
                e.key === N.ESCAPE && s({ withEscapeKey: !0 });
              };
              return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
            }, []),
            (0, i.tZ)(
              j,
              {
                closeWebcard: s,
                footerContent: (0, i.tZ)(
                  "div",
                  { className: "AutofillConfirmation_footer" },
                  ee || (ee = (0, i.tZ)(i.JO, { name: "UnlockOutlined" })),
                  (0, i.tZ)("div", { sx: ae.FOOTER_TEXT }, o("warning"))
                ),
                headerContent: (0, i.tZ)($, { title: o("title") }),
                withFooterDivider: !0,
                withHeaderCloseButton: !0,
                withHeaderLogo: !0
              },
              (0, i.tZ)(
                "div",
                { className: "AutofillConfirmation_main" },
                (0, i.tZ)(J, {
                  onClick: async () => {
                    r?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })),
                      r?.logEvent(
                        new h.RXg({
                          domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != a ? a : "") },
                          isNativeApp: !1,
                          dismissType: h.S77.Cancel
                        })
                      ),
                      t();
                  },
                  label: o("cancel")
                }),
                (0, i.tZ)(Q, {
                  onClick: () => {
                    e && r?.resetProtectedItemsTimerAndApplyRecipe(e), t();
                  },
                  label: o("confirm")
                })
              )
            )
          );
        },
        ne = (e, a) => e.findIndex((e) => e.itemId === a.itemId) + 1,
        oe = (e) => async () => {
          const a = Boolean(
            await e.autofillEngineDispatcher?.sendMessage(
              { targetFrameId: 0, message: r.DispatcherMessages.VisibilityCheckRequest },
              e.webcardId
            )
          );
          return !1 === a && e.closeWebcard(), a;
        };
      var ie = t(8364);
      var re = t(3849),
        se = t.n(re);
      const le = ({ data: e, pager: { displayDot: a, hasScroll: t } }) => {
          const [o, i] = n.useState(0),
            r = e || [],
            s = Math.ceil(r.length / 5),
            l = a ? r.slice(5 * o, 5 * o + 5) : r,
            d = Array.from(Array(s)).map((e, a) => a);
          return n.createElement(
            "div",
            { className: se()({ List_list: !0, List_withScroll: t }) },
            n.createElement("div", null, l),
            a &&
              s > 1 &&
              n.createElement(
                "div",
                { className: "List_pager" },
                d.map((e) =>
                  n.createElement("button", {
                    type: "button",
                    key: e,
                    onClick: () => i(e),
                    className: se()("List_pageDot", { List_selected: e === o }),
                    "aria-label": `page-number-${e}`
                  })
                )
              )
          );
        },
        de = {
          [ie.k.Address]: "ADDRESS",
          [ie.k.BankAccount]: "BANK_STATEMENT",
          [ie.k.Company]: "COMPANY",
          [ie.k.Credential]: "AUTHENTICATION",
          [ie.k.DriverLicense]: "DRIVER_LICENCE",
          [ie.k.Email]: "EMAIL",
          [ie.k.FiscalId]: "FISCAL",
          [ie.k.GeneratedPassword]: "GENERATED_PASSWORD",
          [ie.k.IdCard]: "ID_CARD",
          [ie.k.Identity]: "IDENTITY",
          [ie.k.Passkey]: "AUTHENTICATION",
          [ie.k.Passport]: "PASSPORT",
          [ie.k.PaymentCard]: "PAYMENT_MEAN_CREDITCARD",
          [ie.k.PersonalWebsite]: "WEBSITE",
          [ie.k.Phone]: "PHONE",
          [ie.k.SocialSecurityId]: "SOCIAL_SECURITY"
        },
        Ee = {
          PHONE_TYPE_ANY: "phoneAny",
          PHONE_TYPE_FAX: "phoneFax",
          PHONE_TYPE_LANDLINE: "phoneLandline",
          PHONE_TYPE_MOBILE: "phoneMobile",
          PHONE_TYPE_WORK_FAX: "phoneWorkFax",
          PHONE_TYPE_WORK_LANDLINE: "phoneWorkLandline",
          PHONE_TYPE_WORK_MOBILE: "phoneWorkMobile",
          EMAIL_PERSO: "emailPersonal",
          EMAIL_PRO: "emailBusiness"
        };
      var ce;
      const Te = () => {
          const e = n.useContext(C).translate("defaultSpace");
          return (a) => (a.color || a.letter ? a : { displayName: e, letter: e[0], color: "#D000AF", spaceId: a.spaceId });
        },
        ue = ({ letter: e, color: a, name: t }) =>
          n.createElement(
            "svg",
            { "aria-label": t, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n.createElement("path", { d: "M0.800014 5.10801V15.148H10.836L15.136 10.876V0.800018H5.06001L0.800014 5.10801Z", fill: a }),
            ce ||
              (ce = n.createElement("path", {
                d: "M10.5268 14.398H1.55001V5.41622L5.37314 1.55002H14.386V10.5639L10.5268 14.398Z",
                stroke: "black",
                strokeOpacity: "0.24",
                strokeWidth: "1.5"
              })),
            n.createElement(
              "text",
              { fill: "#FFF", fontFamily: "GT Walsheim Pro", fontSize: "9", fontWeight: "600" },
              n.createElement("tspan", { x: "48%", y: "50%", textAnchor: "middle", dominantBaseline: "central" }, e)
            )
          ),
        Re = (e) => {
          switch (e) {
            case ie.k.Identity:
              return "ItemPersonalInfoOutlined";
            case ie.k.Email:
              return "ItemEmailOutlined";
            case ie.k.Phone:
              return "ItemPhoneHomeOutlined";
            case ie.k.Address:
              return "HomeOutlined";
            case ie.k.Company:
              return "ItemCompanyOutlined";
            case ie.k.PersonalWebsite:
              return "WebOutlined";
            case ie.k.PaymentCard:
              return "ItemPaymentOutlined";
            case ie.k.Credential:
              return "ItemLoginOutlined";
            case ie.k.BankAccount:
              return "ItemBankAccountOutlined";
            case ie.k.Passport:
              return "ItemPassportOutlined";
            case ie.k.SocialSecurityId:
              return "ItemSocialSecurityOutlined";
            case ie.k.DriverLicense:
              return "ItemDriversLicenseOutlined";
            case ie.k.IdCard:
              return "ItemIdOutlined";
            case ie.k.FiscalId:
              return "ItemTaxNumberOutlined";
            case ie.k.Passkey:
              return "PasskeyOutlined";
            case ie.k.GeneratedPassword:
              return "FeaturePasswordGeneratorOutlined";
            default:
              return null;
          }
        },
        _e = ({ text: e, search: a }) => {
          if (!a || !e) return (0, i.tZ)("span", null, e);
          const t = e.toLowerCase().indexOf(a.toLowerCase());
          return t < 0
            ? (0, i.tZ)("span", null, e)
            : (0, i.tZ)(
                n.Fragment,
                null,
                (0, i.tZ)("span", null, e.substring(0, t)),
                (0, i.tZ)("span", { sx: { color: "ds.text.brand.standard" } }, e.substring(t, t + a.length)),
                (0, i.tZ)("span", null, e.substring(t + a.length))
              );
        },
        Ce = "moreButton",
        Se = { display: "inline-flex", marginLeft: "auto" },
        pe = {
          CONTENT: { overflow: "hidden", fontSize: "12px" },
          ICON_CONTAINER: {
            display: "flex",
            flexShrink: "0",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            borderRadius: "4px",
            width: "56px",
            height: "36px",
            margin: "0px 16px 0px 0px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "transparent",
            borderWidth: "0px"
          },
          SIMPLE_ICON_BACKGROUND: {
            backgroundColor: "ds.container.agnostic.neutral.quiet",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "ds.border.neutral.quiet.idle"
          },
          ITEM: {
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            cursor: "pointer",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "ds.container.agnostic.neutral.quiet" },
            [`.${Ce}`]: { display: "none", "&.active": { ...Se, ...k } },
            [`&.active .${Ce}, &:hover .${Ce}`]: Se
          },
          TITLE: {
            color: "ds.text.neutral.catchy",
            display: "flex",
            alignItems: "center",
            textOverflow: "ellipsis",
            minHeight: "18px",
            lineHeight: "20px",
            fontSize: "14px",
            fontWeight: "500",
            fontFamily: "Public Sans, PublicSans-Regular, Public Sans Regular",
            whiteSpace: "nowrap"
          },
          TITLE_BADGE_CONTAINER: { display: "flex", flexDirection: "row" },
          SUBTITLE: {
            color: "ds.text.neutral.quiet",
            display: "flex",
            flexDirection: "row",
            height: "20px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: "400",
            fontStyle: "normal"
          },
          DIVIDER: { border: "none", borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle", padding: "0", margin: "0 0" },
          ITEM_BUTTON: {
            backgroundColor: "ds.container.agnostic.neutral.quiet",
            color: "ds.text.neutral.standard",
            "&:hover": { backgroundColor: "ds.container.agnostic.neutral.standard" }
          },
          ICON: { marginLeft: "3px", paddingTop: "3px" },
          SPACE: { marginLeft: "8px", flexShrink: "0" },
          WITH_WARNING: { marginRight: "10px" }
        };
      var me, ge;
      const Pe = ({ withLastUsedBadge: e, item: a, onClick: t, onClickMoreButton: o, showIcon: r, itemIndex: s, searchValue: l }) => {
          const { translate: d } = n.useContext(C),
            { itemId: E, itemType: c } = a,
            { content: T, communicationType: u, isLinkedWebsite: R, isTitleFixedType: _, space: S, title: p } = a,
            m = Te(),
            g = Re(c),
            P = ((e, a, t, n, o) => {
              if (!t) return a;
              const i = o(Ee[t]);
              return "Email" === e ? ("" === a ? i : a) : "Phone" === e ? (a && a !== n ? `${a} (${i})` : i) : a;
            })(c, T, u, p, d),
            h = _ ? d(p) : p;
          return (0, i.tZ)(
            "div",
            {
              key: E,
              sx: pe.ITEM,
              onClick: () => t(a),
              onKeyUp: (e) => {
                (e.key !== N.ENTER && e.key !== N.SPACE) || t(a);
              },
              "data-testid": E,
              role: "button",
              tabIndex: 0,
              "data-keyboard-accessible": `${p}: ${T}`
            },
            r && g
              ? (0, i.tZ)(
                  "div",
                  { sx: (0, i.jM)([pe.ICON_CONTAINER, pe.SIMPLE_ICON_BACKGROUND]) },
                  (0, i.tZ)(i.JO, { name: g, size: "large" })
                )
              : null,
            (0, i.tZ)(
              "div",
              { sx: pe.CONTENT },
              (0, i.tZ)(
                "div",
                { "data-testid": "item-title", sx: pe.TITLE },
                (0, i.tZ)(
                  "div",
                  { sx: pe.TITLE_BADGE_CONTAINER, "data-testid": "title-badge" },
                  (0, i.tZ)(_e, { text: h || "--", search: l }),
                  e && 0 === s
                    ? (0, i.tZ)(i.Ct, { mood: "brand", intensity: "quiet", label: d("lastUsedItem"), sx: { marginLeft: "5px" } })
                    : null
                ),
                S
                  ? (0, i.tZ)(
                      "div",
                      { sx: pe.SPACE, "data-testid": `SpaceBadge-${s?.toString()}` },
                      (0, i.tZ)(ue, { ...m(S), name: S.displayName })
                    )
                  : null
              ),
              P
                ? (0, i.tZ)(
                    "div",
                    { sx: pe.SUBTITLE },
                    (0, i.tZ)(_e, { text: P, search: l }),
                    R
                      ? (0, i.tZ)(
                          "div",
                          { sx: pe.ICON, "data-testid": "LinkIcon" },
                          me || (me = (0, i.tZ)(i.JO, { name: "LinkOutlined", size: "xsmall" }))
                        )
                      : null
                  )
                : null
            ),
            o
              ? (0, i.tZ)(i.zx, {
                  type: "button",
                  mood: "neutral",
                  intensity: "supershy",
                  size: "small",
                  layout: "iconOnly",
                  className: Ce,
                  onClick: (e) => {
                    e.stopPropagation(), o(a);
                  },
                  icon: ge || (ge = (0, i.tZ)(i.JO, { name: "CaretRightOutlined", "aria-hidden": !0 })),
                  "data-keyboard-accessible": !0
                })
              : null
          );
        },
        he = {
          idFr: "EnhancedSelectionItem_idFr",
          idGeneric: "EnhancedSelectionItem_idGeneric",
          ssnGeneric: "EnhancedSelectionItem_ssnGeneric",
          ssnFr: "EnhancedSelectionItem_ssnFr",
          ssnGb: "EnhancedSelectionItem_ssnGb",
          ssnUs: "EnhancedSelectionItem_ssnUs",
          driversLicense: "EnhancedSelectionItem_driversLicense",
          generic: "EnhancedSelectionItem_generic",
          european: "EnhancedSelectionItem_european",
          taxNumber: "EnhancedSelectionItem_taxNumber",
          passport: "EnhancedSelectionItem_passport",
          AT: "EnhancedSelectionItem_AT",
          BR: "EnhancedSelectionItem_BR",
          CN: "EnhancedSelectionItem_CN",
          DE: "EnhancedSelectionItem_DE",
          DK: "EnhancedSelectionItem_DK",
          ES: "EnhancedSelectionItem_ES",
          FR: "EnhancedSelectionItem_FR",
          GB: "EnhancedSelectionItem_GB",
          IE: "EnhancedSelectionItem_IE",
          JP: "EnhancedSelectionItem_JP",
          LU: "EnhancedSelectionItem_LU",
          NL: "EnhancedSelectionItem_NL",
          AU: "EnhancedSelectionItem_AU",
          IN: "EnhancedSelectionItem_IN",
          MX: "EnhancedSelectionItem_MX",
          BE: "EnhancedSelectionItem_BE",
          CH: "EnhancedSelectionItem_CH",
          IT: "EnhancedSelectionItem_IT",
          CA: "EnhancedSelectionItem_CA",
          KR: "EnhancedSelectionItem_KR",
          bankStatement: "EnhancedSelectionItem_bankStatement",
          paymentCard: "EnhancedSelectionItem_paymentCard",
          black: "EnhancedSelectionItem_black",
          blue_1: "EnhancedSelectionItem_blue_1",
          blue_2: "EnhancedSelectionItem_blue_2",
          gold: "EnhancedSelectionItem_gold",
          green_1: "EnhancedSelectionItem_green_1",
          green_2: "EnhancedSelectionItem_green_2",
          orange: "EnhancedSelectionItem_orange",
          red: "EnhancedSelectionItem_red",
          silver: "EnhancedSelectionItem_silver",
          paymentType: "EnhancedSelectionItem_paymentType",
          hidden: "EnhancedSelectionItem_hidden",
          paymentCardNetworkVisa: "EnhancedSelectionItem_paymentCardNetworkVisa",
          paymentCardNetworkJCB: "EnhancedSelectionItem_paymentCardNetworkJCB",
          paymentCardNetworkDiscover: "EnhancedSelectionItem_paymentCardNetworkDiscover",
          paymentCardNetworkMastercard: "EnhancedSelectionItem_paymentCardNetworkMastercard",
          paymentCardNetworkDinersClub: "EnhancedSelectionItem_paymentCardNetworkDinersClub",
          paymentCardNetworkContainer: "EnhancedSelectionItem_paymentCardNetworkContainer"
        };
      var we, Ae;
      var Oe = (function (e) {
        return (
          (e.DINERSCLUB = "PAYMENT_TYPE_DINERSCLUB"),
          (e.DISCOVER = "PAYMENT_TYPE_DISCOVER"),
          (e.JCB = "PAYMENT_TYPE_JCB"),
          (e.MASTERCARD = "PAYMENT_TYPE_MASTERCARD"),
          (e.VISA = "PAYMENT_TYPE_VISA"),
          e
        );
      })(Oe || {});
      const Le = ({ item: e, onClick: a, onClickMoreButton: t, searchValue: o, showIcon: r }) => {
        const { translate: s } = n.useContext(C),
          {
            itemId: l,
            itemType: d,
            title: E,
            content: c,
            expired: T,
            aboutToExpire: u,
            incomplete: R,
            displayCountry: _,
            country: S,
            backgroundName: p,
            paymentType: m,
            color: g
          } = e,
          P = _ || S;
        let h = "";
        d === ie.k.DriverLicense && (h = "FR" === S || "eu" === p ? "european" : "generic");
        const w = ((e, a) => {
            switch (e) {
              case ie.k.IdCard:
                return a && "FR" === a ? he.idFr : he.idGeneric;
              case ie.k.Passport:
                return he.passport;
              case ie.k.SocialSecurityId:
                switch (a) {
                  case "FR":
                    return he.ssnFr;
                  case "GB":
                    return he.ssnGb;
                  case "US":
                    return he.ssnUs;
                  default:
                    return he.ssnGeneric;
                }
              case ie.k.DriverLicense:
                return he.driversLicense;
              case ie.k.FiscalId:
                return he.taxNumber;
              case ie.k.BankAccount:
                return he.bankStatement;
              case ie.k.PaymentCard:
                return he.paymentCard;
              default:
                return null;
            }
          })(d, P),
          A = ((e) => {
            switch (e) {
              case Oe.DINERSCLUB:
                return he.paymentCardNetworkDinersClub;
              case Oe.DISCOVER:
                return he.paymentCardNetworkDiscover;
              case Oe.JCB:
                return he.paymentCardNetworkJCB;
              case Oe.MASTERCARD:
                return he.paymentCardNetworkMastercard;
              case Oe.VISA:
                return he.paymentCardNetworkVisa;
              default:
                return null;
            }
          })(null != m ? m : "");
        let O = "";
        return (
          T ? (O = s("expired")) : u ? (O = s("aboutToExpire")) : R && (O = s("incomplete")),
          (0, i.tZ)(
            "div",
            {
              key: l,
              sx: pe.ITEM,
              onClick: () => a(e),
              onKeyUp: (t) => {
                (t.key !== N.ENTER && t.key !== N.SPACE) || a(e);
              },
              "data-testid": l,
              role: "button",
              tabIndex: 0,
              "data-keyboard-accessible": `${E}: ${c}`
            },
            r && d === ie.k.BankAccount
              ? (0, i.tZ)(
                  "div",
                  { sx: pe.ICON_CONTAINER },
                  we || (we = (0, i.tZ)(i.JO, { name: "ItemBankAccountOutlined", size: "large" }))
                )
              : null,
            r && d !== ie.k.BankAccount
              ? (0, i.tZ)("div", { sx: pe.ICON_CONTAINER, className: se()(w, P && he[P], h && he[h], g && he[g]) })
              : null,
            (0, i.tZ)(
              "div",
              { sx: (0, i.jM)([pe.CONTENT, O ? pe.WITH_WARNING : {}]) },
              (0, i.tZ)(
                "div",
                { "data-testid": "item-title", sx: pe.TITLE },
                (0, i.tZ)(
                  "div",
                  { sx: pe.TITLE_BADGE_CONTAINER },
                  (0, i.tZ)(_e, { text: null != E ? E : "", search: o }),
                  O ? (0, i.tZ)(i.Ct, { mood: "warning", intensity: "quiet", label: O, sx: { marginLeft: "5px" } }) : null
                )
              ),
              c
                ? (0, i.tZ)(
                    "div",
                    { sx: pe.SUBTITLE },
                    A ? (0, i.tZ)("div", { className: se()(he.paymentCardNetworkContainer, A) }) : null,
                    (0, i.tZ)(_e, { text: c, search: o })
                  )
                : null
            ),
            t
              ? (0, i.tZ)(i.zx, {
                  type: "button",
                  mood: "neutral",
                  intensity: "supershy",
                  size: "small",
                  layout: "iconOnly",
                  className: Ce,
                  onClick: (a) => {
                    a.stopPropagation(), t(e);
                  },
                  icon: Ae || (Ae = (0, i.tZ)(i.JO, { name: "CaretRightOutlined", "aria-hidden": !0 })),
                  "data-keyboard-accessible": !0
                })
              : null
          )
        );
      };
      var Ne = t(4309);
      let be = (function (e) {
        return (e.Nothing = "Nothing"), e;
      })({});
      const De = {
        [ie.k.Address]: "TR_SELFCORRECT_STEP1_ADDRESS",
        [ie.k.BankAccount]: "TR_SELFCORRECT_STEP1_BANKDETAILS",
        [ie.k.Company]: "TR_SELFCORRECT_STEP2_COMPANYNAME",
        [ie.k.Credential]: "TR_SELFCORRECT_STEP1_LOGININFO",
        [ie.k.CredentialCategory]: "",
        [ie.k.DriverLicense]: "TR_SELFCORRECT_STEP1_DRIVERSLICENSE",
        [ie.k.Email]: "TR_SELFCORRECT_STEP2_EMAIL",
        [ie.k.FiscalId]: "TR_SELFCORRECT_STEP2_TAXNUM",
        [ie.k.GeneratedPassword]: "",
        [ie.k.IdCard]: "TR_SELFCORRECT_STEP1_IDCARD",
        [ie.k.Identity]: "TR_SELFCORRECT_STEP1_PERSONALINFO",
        [ie.k.Note]: "",
        [ie.k.NoteCategory]: "",
        [ie.k.Passkey]: "",
        [ie.k.Passport]: "TR_SELFCORRECT_STEP1_PASSPORT",
        [ie.k.PaymentCard]: "TR_SELFCORRECT_STEP1_PAYMENTINFO",
        [ie.k.PersonalWebsite]: "TR_SELFCORRECT_STEP2_WEBSITE",
        [ie.k.Phone]: "TR_SELFCORRECT_STEP2_PHONENUM",
        [ie.k.SocialSecurityId]: "TR_SELFCORRECT_STEP2_SSN",
        [be.Nothing]: "TR_SELFCORRECT_STEP1_DONT_AUTOFILL"
      };
      let Ie = (function (e) {
        return (e.Categories = "categories"), (e.Options = "options"), e;
      })({});
      const fe = [
          { itemType: ie.k.Credential, localizationKey: De[ie.k.Credential] },
          { itemType: ie.k.PaymentCard, localizationKey: De[ie.k.PaymentCard] },
          { itemType: ie.k.Identity, localizationKey: De[ie.k.Identity] },
          { itemType: ie.k.Address, localizationKey: De[ie.k.Address] },
          { itemType: ie.k.Passport, localizationKey: De[ie.k.Passport] },
          { itemType: ie.k.IdCard, localizationKey: De[ie.k.IdCard] },
          { itemType: ie.k.DriverLicense, localizationKey: De[ie.k.DriverLicense] },
          { itemType: ie.k.BankAccount, localizationKey: De[ie.k.BankAccount] },
          { itemType: be.Nothing, localizationKey: De[be.Nothing] }
        ],
        ve = {
          [ie.k.Credential]: [
            { itemType: ie.k.Credential, itemProperty: "email", localizationKey: "TR_SELFCORRECT_STEP2_EMAIL" },
            { itemType: ie.k.Credential, itemProperty: "login", localizationKey: "TR_SELFCORRECT_STEP2_LOGIN" },
            { itemType: ie.k.Credential, itemProperty: "secondaryLogin", localizationKey: "TR_SELFCORRECT_STEP2_LOGIN_SECONDARY" },
            { itemType: ie.k.Credential, itemProperty: "password", localizationKey: "TR_SELFCORRECT_STEP2_PASSWORD_CURRENT" },
            { itemType: Ne.JV.NewPassword, itemProperty: Ne.JV.NewPassword, localizationKey: "TR_SELFCORRECT_STEP2_PASSWORD_NEW" },
            { itemType: Ne.JV.NewPassword, itemProperty: Ne.JV.NewPassword, localizationKey: "TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM" },
            { itemType: ie.k.Credential, itemProperty: "otpSecret", localizationKey: "TR_SELFCORRECT_STEP2_OTP" }
          ],
          [ie.k.PaymentCard]: [
            { itemType: ie.k.PaymentCard, itemProperty: "cardNumber", localizationKey: "TR_SELFCORRECT_STEP2_CREDITCARDNUM" },
            { itemType: ie.k.PaymentCard, itemProperty: "expireMonth", localizationKey: "TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH" },
            { itemType: ie.k.PaymentCard, itemProperty: "expireYear", localizationKey: "TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR" },
            { itemType: ie.k.PaymentCard, itemProperty: "securityCode", localizationKey: "TR_SELFCORRECT_STEP2_CREDITCARDCCV" },
            { itemType: ie.k.PaymentCard, itemProperty: "ownerName", localizationKey: "TR_SELFCORRECT_STEP2_CREDITCARDOWNER" },
            { itemType: ie.k.PaymentCard, itemProperty: "bank", localizationKey: "TR_SELFCORRECT_STEP2_CREDITCARDBANK" }
          ],
          [ie.k.Identity]: [
            { itemType: ie.k.Identity, itemProperty: "fullName", localizationKey: "TR_SELFCORRECT_STEP2_FULLNAME" },
            { itemType: ie.k.Identity, itemProperty: "firstName", localizationKey: "TR_SELFCORRECT_STEP2_FIRSTNAME" },
            { itemType: ie.k.Identity, itemProperty: "middleName", localizationKey: "TR_SELFCORRECT_STEP2_MIDDLENAME" },
            { itemType: ie.k.Identity, itemProperty: "middleNameInitial", localizationKey: "TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL" },
            { itemType: ie.k.Identity, itemProperty: "lastName", localizationKey: "TR_SELFCORRECT_STEP2_LASTNAME" },
            { itemType: ie.k.Identity, itemProperty: "age", localizationKey: "TR_SELFCORRECT_STEP2_AGE" },
            { itemType: ie.k.Identity, itemProperty: "birthDate", localizationKey: "TR_SELFCORRECT_STEP2_DOB" },
            { itemType: ie.k.Identity, itemProperty: "birthPlace", localizationKey: "TR_SELFCORRECT_STEP2_POB" },
            { itemType: ie.k.Email, itemProperty: "email", localizationKey: "TR_SELFCORRECT_STEP2_EMAIL" },
            { itemType: ie.k.Phone, itemProperty: "number", localizationKey: "TR_SELFCORRECT_STEP2_PHONENUM" },
            { itemType: ie.k.Phone, itemProperty: "number", localizationKey: "TR_SELFCORRECT_STEP2_PHONENUMEXT" },
            { itemType: ie.k.Phone, itemProperty: "numberInternational", localizationKey: "TR_SELFCORRECT_STEP2_COUNTRYCODE" },
            { itemType: ie.k.SocialSecurityId, itemProperty: "idNumber", localizationKey: "TR_SELFCORRECT_STEP2_SSN" },
            { itemType: ie.k.FiscalId, itemProperty: "idNumber", localizationKey: "TR_SELFCORRECT_STEP2_TAXNUM" },
            { itemType: ie.k.Company, itemProperty: "name", localizationKey: "TR_SELFCORRECT_STEP2_COMPANYNAME" },
            { itemType: ie.k.Company, itemProperty: "jobTitle", localizationKey: "TR_SELFCORRECT_STEP2_JOBPOSITION" },
            { itemType: ie.k.PersonalWebsite, itemProperty: "website", localizationKey: "TR_SELFCORRECT_STEP2_WEBSITE" }
          ],
          [ie.k.Address]: [
            { itemType: ie.k.Address, itemProperty: "addressFull", localizationKey: "TR_SELFCORRECT_STEP2_AL1" },
            { itemType: ie.k.Address, itemProperty: "zipCode", localizationKey: "TR_SELFCORRECT_STEP2_ZIP" },
            { itemType: ie.k.Address, itemProperty: "city", localizationKey: "TR_SELFCORRECT_STEP2_CITY" },
            { itemType: ie.k.Address, itemProperty: "country", localizationKey: "TR_SELFCORRECT_STEP2_COUNTRY" },
            { itemType: ie.k.Address, itemProperty: "door", localizationKey: "TR_SELFCORRECT_STEP2_APTNUM" },
            { itemType: ie.k.Address, itemProperty: "floor", localizationKey: "TR_SELFCORRECT_STEP2_FLOOR" },
            { itemType: ie.k.Address, itemProperty: "streetNumber", localizationKey: "TR_SELFCORRECT_STEP2_STREETNUM" },
            { itemType: ie.k.Address, itemProperty: "streetTitle", localizationKey: "TR_SELFCORRECT_STEP2_STREETTYPE" },
            { itemType: ie.k.Address, itemProperty: "addressFull", localizationKey: "TR_SELFCORRECT_STEP2_STREETNAME" },
            { itemType: ie.k.Address, itemProperty: "state", localizationKey: "TR_SELFCORRECT_STEP2_STATE" },
            { itemType: ie.k.Address, itemProperty: "stateCode", localizationKey: "TR_SELFCORRECT_STEP2_STATECODE" }
          ],
          [ie.k.Passport]: [
            { itemType: ie.k.Passport, itemProperty: "idNumber", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTNUM" },
            { itemType: ie.k.Passport, itemProperty: "name", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME" },
            { itemType: ie.k.Identity, itemProperty: "birthDate", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTDOB" },
            { itemType: ie.k.Identity, itemProperty: "title", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTGENDER" },
            { itemType: ie.k.Passport, itemProperty: "issueDateFull", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTDELIVERY" },
            { itemType: ie.k.Passport, itemProperty: "expirationDateFull", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTEXP" },
            { itemType: ie.k.Passport, itemProperty: "deliveryPlace", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTLOCATION" },
            { itemType: ie.k.Passport, itemProperty: "country", localizationKey: "TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY" }
          ],
          [ie.k.IdCard]: [
            { itemType: ie.k.IdCard, itemProperty: "idNumber", localizationKey: "TR_SELFCORRECT_STEP2_IDCARDNUM" },
            { itemType: ie.k.IdCard, itemProperty: "name", localizationKey: "TR_SELFCORRECT_STEP2_IDCARDHOLDER" },
            { itemType: ie.k.Identity, itemProperty: "birthDate", localizationKey: "TR_SELFCORRECT_STEP2_IDCARDDOB" },
            { itemType: ie.k.Identity, itemProperty: "title", localizationKey: "TR_SELFCORRECT_STEP2_IDCARDGENDER" },
            { itemType: ie.k.IdCard, itemProperty: "issueDateFull", localizationKey: "TR_SELFCORRECT_STEP2_IDCARDDELIVERY" },
            { itemType: ie.k.IdCard, itemProperty: "expirationDateFull", localizationKey: "TR_SELFCORRECT_STEP2_IDCARDEXP" },
            { itemType: ie.k.IdCard, itemProperty: "country", localizationKey: "TR_SELFCORRECT_STEP2_IDCARDNATIONALITY" }
          ],
          [ie.k.DriverLicense]: [
            { itemType: ie.k.DriverLicense, itemProperty: "idNumber", localizationKey: "TR_SELFCORRECT_STEP2_DRIVERNUM" },
            { itemType: ie.k.DriverLicense, itemProperty: "name", localizationKey: "TR_SELFCORRECT_STEP2_DRIVERNAME" },
            { itemType: ie.k.Identity, itemProperty: "title", localizationKey: "TR_SELFCORRECT_STEP2_DRIVERGENDER" },
            { itemType: ie.k.DriverLicense, itemProperty: "issueDateFull", localizationKey: "TR_SELFCORRECT_STEP2_DRIVERDELIVERY" },
            { itemType: ie.k.DriverLicense, itemProperty: "expirationDateFull", localizationKey: "TR_SELFCORRECT_STEP2_DRIVEREXP" },
            { itemType: ie.k.DriverLicense, itemProperty: "state", localizationKey: "TR_SELFCORRECT_STEP2_DRIVERSTATE" }
          ],
          [ie.k.BankAccount]: [
            { itemType: ie.k.BankAccount, itemProperty: "IBAN", localizationKey: "TR_SELFCORRECT_STEP2_BANKACCOUNTNUM" },
            { itemType: ie.k.BankAccount, itemProperty: "owner", localizationKey: "TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER" },
            { itemType: ie.k.BankAccount, itemProperty: "bank", localizationKey: "TR_SELFCORRECT_STEP2_BANKNAME" },
            { itemType: ie.k.BankAccount, itemProperty: "IBAN", localizationKey: "TR_SELFCORRECT_STEP2_IBAN" },
            { itemType: ie.k.BankAccount, itemProperty: "BIC", localizationKey: "TR_SELFCORRECT_STEP2_ROUTING_NUMBER" },
            { itemType: ie.k.BankAccount, itemProperty: "BIC", localizationKey: "TR_SELFCORRECT_STEP2_SORT_CODE" }
          ]
        },
        ye = {
          [ie.k.Address]: "/addresses",
          [ie.k.Credential]: "/passwords",
          [ie.k.BankAccount]: "/bank-accounts",
          [ie.k.Company]: "/companies",
          [ie.k.DriverLicense]: "/driver-licenses",
          [ie.k.Email]: "/emails",
          [ie.k.FiscalId]: "/fiscals",
          [ie.k.IdCard]: "/id-cards",
          [ie.k.Identity]: "/identities",
          [ie.k.Passport]: "/passports",
          [ie.k.PaymentCard]: "/credit-cards",
          [ie.k.Phone]: "/phones",
          [ie.k.SocialSecurityId]: "/social-security-numbers",
          [ie.k.PersonalWebsite]: "/websites"
        };
      var Fe;
      const ke = {
          DIVIDER: { border: "none", borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle", padding: "0", margin: "0 0" },
          EMPTY_STATE_ADD_ITEM: { backgroundColor: "ds.container.agnostic.neutral.supershy", color: "ds.text.brand.quiet" },
          EMPTY_STATE_MESSAGE: {
            display: "flex",
            alignItems: "center",
            color: "ds.text.neutral.quiet",
            height: "40px",
            paddingLeft: "18px",
            paddingRight: "10px",
            fontSize: "12px"
          }
        },
        Me = {
          [ie.k.Address]: h.B4$.AutofillDropdownAddAddress,
          [ie.k.Credential]: h.B4$.AutofillDropdownAddPassword,
          [ie.k.BankAccount]: h.B4$.AutofillDropdownAddBankStatement,
          [ie.k.Company]: h.B4$.AutofillDropdownAddCompany,
          [ie.k.DriverLicense]: h.B4$.AutofillDropdownAddDriverLicense,
          [ie.k.Email]: h.B4$.AutofillDropdownAddEmail,
          [ie.k.FiscalId]: h.B4$.AutofillDropdownAddFiscal,
          [ie.k.IdCard]: h.B4$.AutofillDropdownAddIdCard,
          [ie.k.Identity]: h.B4$.AutofillDropdownAddIdentity,
          [ie.k.PaymentCard]: h.B4$.AutofillDropdownAddCreditCard,
          [ie.k.Phone]: h.B4$.AutofillDropdownAddPhone,
          [ie.k.SocialSecurityId]: h.B4$.AutofillDropdownAddSocialSecurity,
          [ie.k.PersonalWebsite]: h.B4$.AutofillDropdownAddWebsite
        },
        Be = ({ fieldType: e, tabUrl: a, tabRootDomain: t, onAddNewItem: o, withAddNewButton: r }) => {
          const { translate: s } = (0, n.useContext)(C),
            { autofillEngineCommands: l } = L(),
            d = s(e === ie.k.Credential ? "emptyStateWebcard_noLogin" : "emptyStateWebcard_noOtherInfo", { domain: null != t ? t : "" });
          return (0, i.tZ)(
            "div",
            { className: "EmptyPanel_emptyState" },
            (0, i.tZ)("div", { sx: ke.EMPTY_STATE_MESSAGE }, d),
            r
              ? (0, i.tZ)(
                  n.Fragment,
                  null,
                  (0, i.tZ)("hr", { sx: ke.DIVIDER }),
                  (0, i.tZ)(
                    "button",
                    {
                      className: "EmptyPanel_emptyStateAddItem",
                      sx: ke.EMPTY_STATE_ADD_ITEM,
                      onClick: async () => {
                        ye[e] &&
                          (l?.openWebapp({ id: "new", route: ye[e], query: { website: null != a ? a : "" } }),
                          l?.logEvent(new h.n5J({ autofillButton: h.nUM.AddNewItem }))),
                          o();
                      },
                      "data-keyboard-accessible": s(`v5_addNew_${de[e]}`)
                    },
                    (0, i.tZ)(
                      "div",
                      { className: "EmptyPanel_iconWrapper" },
                      Fe || (Fe = (0, i.tZ)(i.JO, { name: "ActionAddOutlined", size: "xsmall" }))
                    ),
                    s(`v5_addNew_${de[e]}`)
                  )
                )
              : null
          );
        },
        xe = ({
          withLastUsedBadge: e,
          fieldType: a,
          items: t,
          onAddNewItem: o,
          onClickItem: i,
          onClickItemDetails: r,
          searchValue: s,
          tabUrl: l,
          tabRootDomain: E,
          withPages: c,
          withScroll: T,
          withAddNewButton: u
        }) =>
          t.length
            ? n.createElement(le, {
                pager: { displayDot: null != c && c, hasScroll: null != T && T },
                data: t.map((a, t) => {
                  const o = ve[a.itemType] ? r : void 0;
                  return a.type === d.WebcardItemType.SimpleItem
                    ? n.createElement(Pe, {
                        showIcon: !0,
                        key: a.itemId,
                        item: a,
                        onClick: i,
                        onClickMoreButton: o,
                        itemIndex: t,
                        searchValue: s,
                        withLastUsedBadge: e
                      })
                    : n.createElement(Le, { showIcon: !0, key: a.itemId, item: a, onClick: i, onClickMoreButton: o, searchValue: s });
                })
              })
            : n.createElement(Be, {
                fieldType: null != a ? a : ie.k.Credential,
                onAddNewItem: o,
                tabUrl: l,
                tabRootDomain: E,
                withAddNewButton: u
              }),
        We = ({
          data: { autofillRecipes: e, formType: a, webcardType: t, webcards: o, extensionShortcuts: i, tabRootDomain: r, webcardId: s },
          closeWebcard: l
        }) => {
          const { translate: E } = n.useContext(C),
            { autofillEngineCommands: c, autofillEngineDispatcher: T } = L(),
            u = P(),
            R = oe({ webcardId: s, autofillEngineDispatcher: T, closeWebcard: l });
          n.useEffect(() => {
            c?.logPageView({ pageView: h.B4$.AutofillNotificationSuggestion, browseComponent: h.QIA.Webcard });
          }, [c]),
            n.useEffect(() => {
              u &&
                (c?.logEvent(
                  new h.jQL({ isNativeApp: !1, msToWebcard: u, vaultTypeList: [h.qGq.Credential], webcardItemTotalCount: o.length })
                ),
                (async () => {
                  c?.logEvent(
                    new h.hrg({
                      domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != r ? r : "") },
                      vaultTypeList: [h.qGq.Credential],
                      isNativeApp: !1,
                      msToWebcard: u,
                      webcardItemTotalCount: o.length
                    })
                  );
                })());
            }, [c, r, u, o.length]);
          const _ = async () => {
            c?.logEvent(new h.KQ6({ dismissType: h.S77.CloseCross })),
              c?.logEvent(
                new h.RXg({
                  domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != r ? r : "") },
                  isNativeApp: !1,
                  dismissType: h.S77.CloseCross
                })
              ),
              l();
          };
          return n.createElement(
            j,
            {
              closeWebcard: _,
              extensionShortcuts: i,
              headerContent: n.createElement($, { title: E("header") }),
              withHeaderCloseButton: !0,
              withHeaderLogo: !0,
              withNoMainPadding: !0
            },
            n.createElement(xe, {
              onAddNewItem: _,
              items: o,
              onClickItem: async (n) => {
                const i = n.isProtected;
                c?.logEvent(new h.NYX({ dataTypeList: [h.qGq.Credential], itemPosition: ne(o, n), isProtected: i })),
                  (async () => {
                    c?.logEvent(
                      new h.edP({
                        domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != r ? r : "") },
                        itemPosition: ne(o, n),
                        isProtected: i
                      })
                    );
                  })();
                const s = e[n.itemType];
                s &&
                  (await R()) &&
                  c?.applyAutofillRecipe({
                    autofillRecipe: s,
                    dataSource: { type: n.itemType, vaultId: n.itemId },
                    formClassification: a,
                    requestOrigin: { type: d.AutofillRequestOriginType.Webcard, webcardType: t }
                  }),
                  l();
              },
              withPages: !0
            })
          );
        },
        Ue = ({ label: e, form: a, buttonRef: t, disabled: o }) =>
          n.createElement(
            i.zx,
            {
              mood: "brand",
              intensity: "catchy",
              size: "small",
              type: "submit",
              form: a,
              ref: t,
              disabled: o,
              "data-keyboard-accessible": e
            },
            e
          ),
        ze = { TITLE: (0, i.jM)([w.FOOTNOTE_TEXT, { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }]) },
        He = ({ id: e, item: a, checked: t, onClick: r }) => {
          const { translate: s } = n.useContext(C),
            l = Re(a.type),
            d = de[a.type] ? s(`types_${de[a.type]}`) : "";
          return (0, i.tZ)(
            "label",
            { id: `DataCaptureItem-${e}`, className: "DataCaptureItem_item" },
            l
              ? (0, i.tZ)("div", { className: "DataCaptureItem_img" }, (0, i.tZ)(i.JO, { name: l, "aria-label": a.type, size: "large" }))
              : null,
            (0, i.tZ)(
              "div",
              { className: "DataCaptureItem_text" },
              (0, i.tZ)("div", { className: "DataCaptureItem_content" }, a.content),
              (0, i.tZ)("div", { sx: ze.TITLE }, d)
            ),
            (0, i.tZ)(o.XZJ, { checked: t, onChange: () => r(!t) })
          );
        },
        Ve = "data-capture-form",
        Ye = { checked: !0 },
        Ge = ({ data: e, closeWebcard: a }) => {
          const { translate: t } = n.useContext(C),
            { autofillEngineCommands: o, autofillEngineDispatcher: i } = L(),
            { data: r, tabRootDomain: s, webcardId: l } = e,
            E = oe({ webcardId: l, autofillEngineDispatcher: i, closeWebcard: a }),
            c = P();
          n.useEffect(() => {
            o?.logPageView({ pageView: h.B4$.AutofillNotificationDataCapture, browseComponent: h.QIA.Webcard });
          }, [o]),
            n.useEffect(() => {
              const e = r.reduce((e, a) => {
                const t = d.vaultSourceTypeToHermesItemTypeMap[a.type];
                return t && e.push(t), e;
              }, []);
              c &&
                (o?.logEvent(new h.jQL({ isNativeApp: !1, vaultTypeList: e, msToWebcard: c })),
                (async () => {
                  o?.logEvent(
                    new h.hrg({
                      isNativeApp: !1,
                      vaultTypeList: e,
                      domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != s ? s : "") },
                      msToWebcard: c
                    })
                  );
                })());
            }, [o, r, s, c]);
          const [T, u] = n.useState([]),
            R = (e) => {
              var a;
              return null != (a = T[e]) ? a : Ye;
            },
            _ = async ({ withEscapeKey: e = !1 } = {}) => {
              o?.logEvent(new h.KQ6({ dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross })),
                o?.logEvent(
                  new h.RXg({
                    domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != s ? s : "") },
                    isNativeApp: !1,
                    dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross
                  })
                ),
                a();
            };
          n.useEffect(() => {
            const e = (e) => {
              e.key === N.ESCAPE && _({ withEscapeKey: !0 });
            };
            return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
          }, []);
          const S = r.map((e, a) =>
            n.createElement(He, {
              key: a,
              id: a,
              item: e,
              checked: R(a).checked,
              onClick: (e) => {
                return (
                  (t = a),
                  (n = { checked: e }),
                  void u((e) => {
                    var a;
                    const o = [...e],
                      i = null != (a = e[t]) ? a : Ye;
                    return (o[t] = { ...i, ...n }), o;
                  })
                );
                var t, n;
              }
            })
          );
          return n.createElement(
            j,
            {
              closeWebcard: _,
              footerContent: n.createElement(
                "div",
                { className: se()("DataCapture_footer") },
                n.createElement(
                  "div",
                  { className: "DataCapture_buttonsContainer" },
                  n.createElement(J, {
                    onClick: async () => {
                      o?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })),
                        o?.logEvent(
                          new h.RXg({
                            domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != s ? s : "") },
                            isNativeApp: !1,
                            dismissType: h.S77.Cancel
                          })
                        ),
                        a();
                    },
                    label: t("cancel")
                  }),
                  n.createElement(Ue, { form: Ve, label: t("save") })
                )
              ),
              headerContent: n.createElement($, { title: t("header") }),
              withHeaderCloseButton: !0,
              withHeaderLogo: !0
            },
            n.createElement(
              "form",
              {
                id: Ve,
                onSubmit: (e) => {
                  e.preventDefault(),
                    (async () => {
                      const e = [];
                      r.forEach((a, t) => {
                        R(t).checked && e.push(a);
                      }),
                        o?.logEvent(
                          new h.NYX({
                            dataTypeList: e.reduce((e, a) => {
                              const t = d.vaultSourceTypeToHermesItemTypeMap[a.type];
                              return t && e.push(t), e;
                            }, [])
                          })
                        ),
                        (async () => {
                          o?.logEvent(new h.edP({ domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != s ? s : "") } }));
                        })(),
                        (await E()) && o?.savePersonalData(e),
                        a();
                    })();
                }
              },
              n.createElement(le, { data: S, pager: { displayDot: !1, hasScroll: !1 } })
            )
          );
        },
        Ze = {
          H1: {
            color: "ds.text.neutral.catchy",
            fontSize: "16px",
            lineHeight: "125%",
            display: "inline",
            fontFamily: "GTWalsheimPro, GT Walsheim Pro, Helvetica, Arial, sans-serif"
          },
          DOMAIN: {
            fontSize: "10px",
            textTransform: "uppercase",
            color: "ds.text.brand.standard",
            letterSpacing: "0.2px",
            lineHeight: "100%",
            fontWeight: "500",
            marginBottom: "5px"
          },
          EDIT: {
            color: "ds.text.brand.standard",
            backgroundColor: "white",
            textDecoration: "underline",
            "&:hover": { color: "ds.text.brand.standard.hover", cursor: "pointer" }
          },
          FEEDBACK_CONTAINER: { display: "flex", justifyContent: "space-between", padding: "16px" }
        };
      var Ke, qe;
      const je = ({ data: e, closeWebcard: a }) => {
        const { translate: t } = n.useContext(C),
          { autofillEngineCommands: o } = L(),
          r = n.useRef(),
          { operation: s } = e,
          l = s.type === d.CredentialOperationType.UpdateCredential;
        return (
          n.useEffect(
            () => (
              (r.current = setTimeout(() => {
                a();
              }, 5e3)),
              o?.logPageView({
                pageView: l ? h.B4$.AutofillNotificationLoginUpdated : h.B4$.AutofillNotificationLoginCreated,
                browseComponent: h.QIA.Webcard
              }),
              () => r.current && clearTimeout(r.current)
            ),
            [o, a, l]
          ),
          (0, i.tZ)(
            B,
            null,
            (0, i.tZ)(
              "div",
              { sx: Ze.FEEDBACK_CONTAINER },
              Ke || (Ke = (0, i.tZ)(i.JO, { name: "FeedbackSuccessOutlined", size: "xlarge" })),
              (0, i.tZ)(
                "div",
                null,
                (0, i.tZ)("div", { sx: Ze.DOMAIN }, s.fullDomain),
                (0, i.tZ)("h1", { sx: Ze.H1, dangerouslySetInnerHTML: { __html: l ? `${t("loginUpdated")} ` : `${t("loginCreated")} ` } }),
                (0, i.tZ)(
                  "button",
                  {
                    onClick: () => {
                      o?.openWebapp({ route: "/passwords", id: s.credentialId });
                    },
                    sx: Ze.EDIT
                  },
                  t("editButton")
                )
              ),
              (0, i.tZ)(i.zx, {
                mood: "neutral",
                intensity: "supershy",
                size: "medium",
                type: "button",
                layout: "iconOnly",
                icon: qe || (qe = (0, i.tZ)(i.JO, { name: "ActionCloseOutlined" })),
                onClick: () => (r.current && clearTimeout(r.current), void a()),
                "aria-label": t("closeWindow")
              })
            )
          )
        );
      };
      var Xe = t(4338);
      let $e = (function (e) {
        return (
          (e.Text = "text"),
          (e.Password = "password"),
          (e.OtpSecret = "otpSecret"),
          (e.CardNumber = "cardNumber"),
          (e.SecurityCode = "securityCode"),
          (e.BIC = "BIC"),
          (e.IBAN = "IBAN"),
          e
        );
      })({});
      const Je = "copyTooltip",
        Qe = (e) => {
          const { translate: a } = (0, n.useContext)(C),
            {
              disabled: t = !1,
              autofillEngineCommands: r,
              itemId: s,
              webcardId: l,
              itemType: d,
              property: E,
              isPropertyCopied: c,
              onClickCopyButton: T,
              previouslyCopiedProperties: u
            } = e,
            [R, _] = (0, n.useState)(c);
          return (0, i.tZ)(
            o.ua7,
            { content: a(R ? "copiedTooltip" : Je), placement: "bottom", passThrough: t },
            (0, i.tZ)(i.zx, {
              "aria-label": a(Je),
              type: "button",
              mood: "brand",
              intensity: "supershy",
              size: "medium",
              layout: "iconOnly",
              icon: (0, i.tZ)(i.JO, {
                name: c ? "FeedbackSuccessFilled" : "ActionCopyOutlined",
                color: c ? "ds.text.positive.standard" : "ds.text.neutral.catchy"
              }),
              onClick: () => {
                T(E), r?.copyToClipboard(s, { type: d, property: E }, l, u), _(!0);
              },
              disabled: t,
              onMouseLeave: () => _(!1)
            })
          );
        },
        ea = {
          CONTAINER: { width: "100%", display: "flex", justifyContent: "space-between", padding: "12px 16px 5px 16px" },
          COPIED_CONTAINER: { backgroundColor: "ds.container.expressive.positive.quiet.idle" },
          PROPERTY_LABEL: { fontWeight: "400", fontSize: "12px", lineHeight: "16px", marginBottom: "4px" },
          PROPERTY_VALUE: { fontWeight: "400", fontSize: "16px", lineHeight: "20px" },
          DIVIDER: { border: "none", borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle", padding: "0", margin: "0" }
        },
        aa = (e) => {
          const {
            itemId: a,
            webcardId: t,
            itemType: o,
            property: r,
            label: s,
            value: l,
            inputType: d,
            isPropertyCopied: E,
            isCopyButtonDisabled: c = !1,
            autofillEngineCommands: T,
            onClickCopyButton: u,
            previouslyCopiedProperties: R
          } = e;
          return (0, i.tZ)(
            n.Fragment,
            null,
            (0, i.tZ)(
              "div",
              { sx: E ? { ...ea.CONTAINER, ...ea.COPIED_CONTAINER } : ea.CONTAINER },
              (0, i.tZ)(
                "div",
                { className: "FollowUpNotificationItemComponent_labelContainer" },
                (0, i.tZ)("span", { sx: { ...ea.PROPERTY_LABEL, color: E ? "ds.text.positive.quiet" : "ds.text.neutral.quiet" } }, s),
                (0, i.tZ)(
                  "span",
                  { sx: { ...ea.PROPERTY_VALUE, color: E ? "ds.text.positive.quiet" : "ds.text.neutral.catchy" } },
                  d !== $e.Text
                    ? ((e) => {
                        switch (e) {
                          case $e.Password:
                            return "••••••••••••";
                          case $e.OtpSecret:
                            return "••• •••";
                          case $e.CardNumber:
                            return "•••• •••• •••• ••••";
                          case $e.SecurityCode:
                            return "•••";
                          case $e.BIC:
                            return "••••••";
                          case $e.IBAN:
                            return "••••••••••••••••";
                          default:
                            return "••••";
                        }
                      })(d)
                    : l
                )
              ),
              (0, i.tZ)(
                "div",
                { className: "FollowUpNotificationItemComponent_actionList" },
                (0, i.tZ)(Qe, {
                  disabled: c,
                  autofillEngineCommands: T,
                  property: r,
                  itemId: a,
                  webcardId: t,
                  onClickCopyButton: u,
                  itemType: o,
                  isPropertyCopied: E,
                  previouslyCopiedProperties: R
                })
              )
            ),
            (0, i.tZ)("hr", { sx: ea.DIVIDER })
          );
        },
        ta = "accountHolderLabel",
        na = {
          FOOTER: {
            backgroundColor: "ds.container.agnostic.neutral.quiet",
            color: "ds.text.neutral.standard",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            padding: "16px"
          }
        },
        oa = ({ data: e, closeWebcard: a }) => {
          const { webcardData: t, copiedProperties: o } = e,
            { autofillEngineCommands: i } = L(),
            { translate: r } = n.useContext(C),
            [s, l] = n.useState(5e3),
            [E, c] = n.useState(o);
          n.useEffect(() => {
            i?.logPageView({ pageView: h.B4$.NotificationFollowUpNotification, browseComponent: h.QIA.Webcard }),
              i?.logEvent(new h.vpP({ action: h.VKf.Trigger, itemType: d.vaultSourceTypeToHermesItemTypeMap[t.type] }));
          }, [i, t.type]),
            n.useEffect(() => {
              const e = setTimeout(() => {
                a();
              }, s);
              return () => {
                clearTimeout(e);
              };
            }, [a, s]);
          const T = (e) => {
            l(7e3),
              c([e].concat(E)),
              i?.logEvent(new h.vpP({ action: h.VKf.Copy, itemType: d.vaultSourceTypeToHermesItemTypeMap[t.type] }));
          };
          return (0, Xe.tZ)(
            j,
            {
              closeWebcard: () => {
                i?.logEvent(new h.vpP({ action: h.VKf.Dismiss })), a();
              },
              headerContent: (0, Xe.tZ)($, { title: r("headerTitle") }),
              footerContent: (0, Xe.tZ)("div", { sx: na.FOOTER }, r("footerInformation")),
              withHeaderCloseButton: !0,
              withHeaderLogo: !0,
              withNoMainPadding: !0,
              withFooterPadding: !1
            },
            t.type === ie.k.Credential
              ? (0, Xe.tZ)(
                  "div",
                  null,
                  t.email
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.Credential,
                        property: "email",
                        isPropertyCopied: E.includes("email"),
                        label: r("emailLabel"),
                        value: t.email,
                        inputType: $e.Text,
                        autofillEngineCommands: i,
                        onClickCopyButton: T,
                        previouslyCopiedProperties: E
                      })
                    : null,
                  t.login
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.Credential,
                        property: "login",
                        isPropertyCopied: E.includes("login"),
                        label: r("loginLabel"),
                        value: t.login,
                        inputType: $e.Text,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null,
                  t.secondaryLogin
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.Credential,
                        property: "secondaryLogin",
                        isPropertyCopied: E.includes("secondaryLogin"),
                        label: r("secondaryLoginLabel"),
                        value: t.secondaryLogin,
                        inputType: $e.Text,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null,
                  t.hasPassword
                    ? (0, Xe.tZ)(aa, {
                        webcardId: e.webcardId,
                        itemId: t.itemId,
                        itemType: ie.k.Credential,
                        property: "password",
                        isPropertyCopied: E.includes("password"),
                        label: r("passwordLabel"),
                        inputType: $e.Password,
                        isCopyButtonDisabled: t.hasLimitedRights,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null,
                  t.hasOTP
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.Credential,
                        property: "otpSecret",
                        isPropertyCopied: E.includes("otpSecret"),
                        label: r("otpLabel"),
                        inputType: $e.OtpSecret,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null
                )
              : null,
            t.type === ie.k.BankAccount
              ? (0, Xe.tZ)(
                  "div",
                  null,
                  t.ownerName
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.BankAccount,
                        property: "owner",
                        isPropertyCopied: E.includes("owner"),
                        label: r(ta),
                        value: t.ownerName,
                        inputType: $e.Text,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null,
                  t.hasIBAN
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.BankAccount,
                        property: "IBAN",
                        isPropertyCopied: E.includes("IBAN"),
                        label: r("ibanLabel"),
                        inputType: $e.IBAN,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null,
                  t.hasBIC
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.BankAccount,
                        property: "BIC",
                        isPropertyCopied: E.includes("BIC"),
                        label: r("bicLabel"),
                        inputType: $e.BIC,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null
                )
              : null,
            t.type === ie.k.PaymentCard
              ? (0, Xe.tZ)(
                  "div",
                  null,
                  t.ownerName
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.PaymentCard,
                        property: "ownerName",
                        isPropertyCopied: E.includes("ownerName"),
                        label: r(ta),
                        value: t.ownerName,
                        inputType: $e.Text,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null,
                  t.hasCardNumber
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.PaymentCard,
                        property: "cardNumber",
                        isPropertyCopied: E.includes("cardNumber"),
                        label: r("cardNumberLabel"),
                        inputType: $e.CardNumber,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null,
                  t.hasSecurityCode
                    ? (0, Xe.tZ)(aa, {
                        itemId: t.itemId,
                        webcardId: e.webcardId,
                        itemType: ie.k.PaymentCard,
                        property: "securityCode",
                        isPropertyCopied: E.includes("securityCode"),
                        label: r("securityCodeLabel"),
                        inputType: $e.SecurityCode,
                        autofillEngineCommands: i,
                        previouslyCopiedProperties: E,
                        onClickCopyButton: T
                      })
                    : null
                )
              : null
          );
        },
        ia = {
          main: "MasterPassword_main",
          loggedInInfo: "MasterPassword_loggedInInfo",
          buttonsContainer: "MasterPassword_buttonsContainer"
        },
        ra = {
          LOGGED_IN_INFO: { color: "ds.text.neutral.quiet", paddingTop: "8px", display: "flex", alignItems: "center" },
          LOGGED_IN_INFO_TEXT: { paddingRight: "4px", "& > span": { color: "ds.text.brand.quiet" } }
        },
        sa = ({ data: e, closeWebcard: a }) => {
          const { translate: t } = (0, n.useContext)(C),
            { autofillEngineCommands: r, autofillEngineDispatcher: s, setAutofillEngineActionsHandlers: l } = L(),
            E = oe({ webcardId: e.webcardId, autofillEngineDispatcher: s, closeWebcard: a }),
            { tabRootDomain: c } = e,
            [T, u] = (0, n.useState)(""),
            [R, _] = (0, n.useState)(!1),
            [S, p] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            r?.logPageView({ pageView: h.B4$.AutofillNotificationAuthenticate, browseComponent: h.QIA.Webcard });
          }, [r]),
            l?.({
              setMasterPasswordValidationResult: (t) => {
                p(!t),
                  t &&
                    (R &&
                      e.pendingOperation.type === d.PendingOperationType.ApplyAutofillDetails &&
                      r?.disableAccessProtectionForVaultItem(e.pendingOperation.data.dataSource.vaultId),
                    r?.userValidatedMasterPassword(e.pendingOperation, e.webcardId),
                    e.pendingOperation.type !== d.PendingOperationType.CopyValue && a());
              }
            });
          const m = () => {
              e.pendingOperation.type === d.PendingOperationType.Webauthn && r?.webauthnUserCanceled(e.pendingOperation.request);
            },
            g = async ({ withEscapeKey: e = !1 } = {}) => {
              r?.logEvent(new h.KQ6({ dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross })),
                r?.logEvent(
                  new h.RXg({
                    domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != c ? c : "") },
                    isNativeApp: !1,
                    dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross
                  })
                ),
                m(),
                a();
            },
            P = () => {
              r?.validateMasterPassword(T);
            };
          (0, n.useEffect)(() => {
            const e = (e) => {
              e.key === N.ESCAPE && g({ withEscapeKey: !0 });
            };
            return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
          }, []);
          const w = (0, n.useMemo)(() => {
            switch (e.neverAskAgainMode) {
              case d.NeverAskAgainMode.Global:
                return (0, i.tZ)(
                  o.T5p,
                  {
                    sx: { margin: "12px 0px", rowGap: "12px" },
                    alignItems: "flex-start",
                    gridTemplateAreas: "'checkbox label' 'info info'",
                    gridTemplateColumns: "min-content auto"
                  },
                  (0, i.tZ)(o.XZJ, {
                    name: "alwaysAskMPCheckbox",
                    checked: R,
                    onChange: (e) => {
                      _(e.target.checked);
                    }
                  }),
                  (0, i.tZ)(o.nvN, { size: "small" }, t("neverAskAgainAnyCredentialCheckbox")),
                  (0, i.tZ)(
                    o.dDn,
                    { gridArea: "info" },
                    (0, i.tZ)(i.ke, { title: t("neverAskAgainAnyCredentialInfobox"), mood: "warning" })
                  )
                );
              case d.NeverAskAgainMode.VaultItem:
                return (0, i.tZ)(o.XZJ, {
                  name: "alwaysAskMPCheckbox",
                  checked: R,
                  onChange: (e) => {
                    _(e.target.checked);
                  },
                  sx: { margin: "12px 0px" },
                  label: t("neverAskAgainCredentialCheckbox")
                });
              default:
                return null;
            }
          }, [e.neverAskAgainMode, R, _, t]);
          return (0, i.tZ)(
            j,
            {
              closeWebcard: g,
              headerContent: (0, i.tZ)($, { title: t("title") }),
              withFooterDivider: !0,
              withHeaderCloseButton: !0,
              withHeaderLogo: !0
            },
            (0, i.tZ)(
              "form",
              {
                className: ia.main,
                onSubmit: (e) => {
                  e.preventDefault(), P();
                }
              },
              (0, i.tZ)(o.WUg, {
                autoFocus: !0,
                hidePasswordTooltipText: t("hide"),
                showPasswordTooltipText: t("show"),
                placeholder: t("enterMasterPassword"),
                value: T,
                onChange: async (e) => {
                  const a = e.target.value;
                  u(a), T !== a && p(!1), await E();
                },
                feedbackType: S ? "error" : void 0,
                feedbackText: S ? t("wrongPassword") : void 0
              }),
              (0, i.tZ)(
                "div",
                { id: "master-password-logged-in", className: ia.loggedInInfo, sx: ra.LOGGED_IN_INFO },
                (0, i.tZ)("span", {
                  className: ia.loggedInInfoText,
                  dangerouslySetInnerHTML: { __html: t("loggedIn", { 0: e.userLogin }) }
                })
              ),
              w,
              (0, i.tZ)(
                "div",
                { className: ia.buttonsContainer },
                (0, i.tZ)(J, {
                  onClick: async () => {
                    r?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })),
                      r?.logEvent(
                        new h.RXg({
                          domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != c ? c : "") },
                          isNativeApp: !1,
                          dismissType: h.S77.Cancel
                        })
                      ),
                      m(),
                      a();
                  },
                  label: t("cancel")
                }),
                (0, i.tZ)(Q, { disabled: !T, onClick: P, label: t("unlock") })
              )
            )
          );
        },
        la = ({ data: { configuration: e, tabRootDomain: a }, closeWebcard: t }) => {
          const { translate: o } = n.useContext(C),
            { autofillEngineCommands: i } = L();
          n.useEffect(() => {
            i?.logPageView({
              pageView:
                e === d.OnboardingNotificationConfiguration.AfterLogin
                  ? h.B4$.AutofillNotificationOnboardingDashlanePro
                  : e === d.OnboardingNotificationConfiguration.AfterSave
                  ? h.B4$.AutofillNotificationOnboardingFirstPasswordSaved
                  : h.B4$.AutofillNotificationOnboardingTryAgainOrGoApp,
              browseComponent: h.QIA.Webcard
            });
          }, [i, e]);
          const r = async ({ withEscapeKey: e = !1 } = {}) => {
            i?.logEvent(new h.KQ6({ dismissType: e ? h.S77.CloseEscape : h.S77.Cancel })),
              i?.logEvent(
                new h.RXg({
                  domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != a ? a : "") },
                  isNativeApp: !1,
                  dismissType: e ? h.S77.CloseEscape : h.S77.Cancel
                })
              ),
              t();
          };
          return (
            n.useEffect(() => {
              const e = (e) => {
                e.key === N.ESCAPE && r({ withEscapeKey: !0 });
              };
              return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
            }, []),
            n.createElement(
              j,
              {
                closeWebcard: r,
                headerContent: n.createElement($, { title: o(`${e}Title`) }),
                withHeaderLogo: !0,
                withHeaderCloseButton: !0
              },
              n.createElement(
                "div",
                { className: "Onboarding_buttonsContainer" },
                e === d.OnboardingNotificationConfiguration.AfterCancel ? n.createElement(J, { onClick: r, label: o(`${e}Cancel`) }) : null,
                n.createElement(Q, {
                  onClick: async () => {
                    i?.openWebapp({ route: e === d.OnboardingNotificationConfiguration.AfterSave ? "/passwords" : "/getting-started" }),
                      t();
                  },
                  label: o(`${e}Confirm`)
                })
              )
            )
          );
        };
      var da;
      const Ea = {
          BUTTONS_CONTAINER: {
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            button: { marginRight: "8px", fontSize: "16px", height: "40px", borderRadius: "3px" }
          },
          CONTAINER: { display: "flex", flexDirection: "column", padding: "0px 24px" },
          FIELD: {
            height: "40px",
            marginBottom: "12px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "ds.text.neutral.catchy",
            textIndent: "12px",
            border: "0px",
            borderRadius: "4px"
          },
          FOOTER: { display: "flex", alignItems: "center", justifyContent: "flex-end" },
          LABEL: {
            fontWeight: "600",
            fontSize: "10px",
            margin: "6px 0px",
            span: { display: "flex", flexDirection: "row", alignItems: "flex-end" },
            textTransform: "uppercase"
          },
          LINK: {
            backgroundColor: "transparent",
            marginLeft: "8px",
            fontSize: "14px",
            "&:hover": { textDecoration: "underline", cursor: "pointer" }
          },
          MORE_INFO: { display: "flex", flexDirection: "row", alignItems: "center", marginTop: "12px", button: { borderRadius: "3px" } }
        },
        ca = "phishingCTALink",
        Ta = "cancelButton",
        ua = "okButton",
        Ra = ({ data: e, closeWebcard: a }) => {
          const { autofillEngineCommands: t } = L(),
            { translate: o } = (0, n.useContext)(C),
            r = P(),
            { isRestoredWebcard: s, urlOfCopiedItem: l, urlOfPasteDestination: E, metadata: c } = e;
          (0, n.useEffect)(() => {
            if (!r) return;
            t?.logPageView({ pageView: h.B4$.AutofillNotificationPhishingPrevention, browseComponent: h.QIA.Webcard });
            const e = [h.OxQ.PotentialPhishingRisk];
            t?.logEvent(new h.jQL({ isNativeApp: !1, msToWebcard: r, autofillMessageTypeList: e, isRestoredWebcard: s })),
              (async () => {
                t?.logEvent(
                  new h.hrg({
                    isNativeApp: !1,
                    msToWebcard: r,
                    autofillMessageTypeList: e,
                    domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != E ? E : "") }
                  })
                );
              })();
          }, [t, r, s, E]),
            (0, n.useEffect)(() => {
              const e = (e) => {
                e.key === N.ESCAPE && a(h.S77.CloseEscape);
              };
              return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
            }, []);
          const T = () => {
              t?.openNewTabWithUrl(
                "https://www.dashlane.com/blog/dont-take-the-bait-password-managers-can-help-shield-you-from-phishing-attacks"
              ),
                t?.logEvent(new h.n5J({ autofillButton: h.nUM.LearnMoreAboutPhishing }));
            },
            u = (0, i.tZ)(
              "div",
              { sx: Ea.FOOTER },
              (0, i.tZ)(
                "div",
                { sx: Ea.BUTTONS_CONTAINER },
                (0, i.tZ)(J, {
                  onClick: async () => {
                    t?.signalPasteDecision({ allowedByUser: !0, urlOfCopiedItem: l, urlOfPasteDestination: E }, c), a();
                    const e = d.vaultSourceTypeToHermesItemTypeMap[ie.k.Credential],
                      n = e ? [e] : [],
                      o = h.E7T.TrustAndPaste;
                    t?.logEvent(new h.NYX({ dataTypeList: n, webcardOptionSelected: o })),
                      t?.logEvent(
                        new h.edP({ webcardOptionSelected: o, domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != E ? E : "") } })
                      );
                  },
                  label: o(ua),
                  "aria-label": o(ua)
                }),
                (0, i.tZ)(Q, {
                  onClick: async () => {
                    t?.signalPasteDecision({ allowedByUser: !1, urlOfCopiedItem: l, urlOfPasteDestination: E }, c), a(h.S77.DoNotTrust);
                  },
                  label: o(Ta),
                  "aria-label": o(Ta)
                })
              )
            ),
            R = (0, i.tZ)("span", null, o("headerTitle"));
          return (0, i.tZ)(
            j,
            {
              closeWebcard: () => {
                t?.signalPasteDecision({ allowedByUser: !1, urlOfCopiedItem: l, urlOfPasteDestination: E }, c), a();
              },
              headerContent: R,
              footerContent: u,
              withHeaderLogo: !0,
              withHeaderCloseButton: !0
            },
            (0, i.tZ)(
              "div",
              { sx: Ea.CONTAINER },
              (0, i.tZ)(
                "label",
                { htmlFor: "trustedUrlInput", sx: (0, i.jM)([Ea.LABEL, { color: "ds.text.neutral.quiet" }]) },
                (0, i.tZ)(
                  "span",
                  null,
                  o("trustedUrlLabel"),
                  (0, i.tZ)(i.JO, {
                    name: "LockFilled",
                    size: "xsmall",
                    sx: { width: "10px", marginLeft: "5px", color: "ds.text.neutral.standard" }
                  })
                )
              ),
              (0, i.tZ)("input", {
                type: "text",
                id: "trustedUrlInput",
                value: e.urlOfCopiedItem,
                disabled: !0,
                sx: (0, i.jM)([Ea.FIELD, { backgroundColor: "ds.container.expressive.positive.quiet.idle" }])
              }),
              (0, i.tZ)(
                "label",
                { htmlFor: "currentUrlInput", sx: (0, i.jM)([Ea.LABEL, { color: "ds.text.warning.quiet" }]) },
                o("currentUrlLabel")
              ),
              (0, i.tZ)("input", {
                type: "text",
                id: "currentUrlInput",
                value: e.urlOfPasteDestination,
                disabled: !0,
                sx: (0, i.jM)([Ea.FIELD, { backgroundColor: "ds.container.expressive.warning.quiet.idle" }])
              }),
              (0, i.tZ)(
                "div",
                { sx: Ea.MORE_INFO },
                (0, i.tZ)(i.zx, {
                  role: "link",
                  layout: "iconOnly",
                  mood: "neutral",
                  intensity: "quiet",
                  size: "small",
                  "aria-label": o(ca),
                  icon: da || (da = (0, i.tZ)(i.JO, { name: "FeedbackInfoOutlined" })),
                  onClick: T
                }),
                (0, i.tZ)("button", { role: "link", "aria-label": o(ca), onClick: T, sx: Ea.LINK }, o(ca))
              )
            )
          );
        },
        _a = (e, a) => `https://www.dashlane.com/getpremium?subCode=${e}&utm_source=${a}`,
        Ca = (e, a) => {
          a({
            updateUserSubscriptionCode: (t) => {
              e.openNewTabWithUrl(((e, a) => `https://www.dashlane.com/business/directbuy?subCode=${e}&utm_source=undefined`)(t)),
                a({ updateUserSubscriptionCode: () => {} });
            }
          }),
            e.getUserSubscriptionCode();
        },
        Sa = "35px",
        pa = "16px",
        ma = "Public Sans, PublicSans-Regular, Public Sans Regular, Helvetica, Arial, sans-serif",
        ga = {
          CONTAINER: { position: "relative", backgroundColor: "ds.container.agnostic.neutral.supershy", width: "100%" },
          CURRENT_ELEMENT: {
            alignItems: "center",
            background: "none",
            border: "1px solid",
            borderRadius: "4px",
            borderColor: "ds.border.brand.standard.idle",
            display: "flex",
            fontFamily: ma,
            fontSize: "16px",
            height: Sa,
            outline: "none",
            paddingLeft: pa,
            paddingRight: pa,
            width: "100%",
            zIndex: "1"
          },
          ARROW_ELEMENT: { paddingRight: "30px" },
          ERROR: {
            border: "1px solid",
            borderColor: "ds.border.warning.quiet.idle",
            color: "ds.text.warning.quiet",
            "&::placeholder": { color: "ds.text.warning.quiet" }
          },
          DROPDOWN: {
            backgroundColor: "ds.container.agnostic.neutral.supershy",
            borderRadius: "4px",
            border: "1px solid",
            borderColor: "ds.border.neutral.quiet.idle",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            fontFamily: ma,
            marginTop: "4px",
            overflowY: "auto",
            position: "absolute",
            top: Sa,
            outline: "none",
            width: "100%",
            zIndex: "10"
          },
          DROPDOWN_CONTROLS: {
            alignItems: "center",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            position: "absolute",
            right: "0",
            top: "0",
            width: "30px"
          },
          DROPDOWN_ITEM: {
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            height: Sa,
            overflowX: "hidden",
            overflowY: "hidden",
            padding: pa,
            textOverflow: "ellipsis",
            "&:hover": { backgroundColor: "ds.container.expressive.brand.quiet.hover" }
          },
          FOCUSED_ITEM: { backgroundColor: "ds.container.expressive.brand.quiet.hover" },
          EMPHASIZED_TEXT: { fontWeight: "600" },
          LABEL: {
            color: "ds.text.brand.standard",
            textTransform: "uppercase",
            height: "20px",
            fontSize: "10px",
            lineHeight: "20px",
            fontWeight: "600",
            marginBottom: "4px",
            display: "block"
          },
          ROOT: { width: "100%" },
          SPACE_CONTAINER: { paddingRight: "4px" },
          READONLY: { backgroundColor: "ds.container.expressive.brand.quiet.disabled" }
        },
        Pa = (e) => `${e.key}_${e.value}`,
        ha = ({
          canAddNewValue: e,
          focusOnMount: a,
          id: t,
          isReadOnly: o = !1,
          onChange: r,
          options: s,
          label: l,
          placeholder: d,
          value: E,
          isErrored: c,
          letter: T,
          color: u,
          name: R,
          dropdownElementsToDisplay: _ = 4,
          boldEmailDomains: C = !1,
          required: S
        }) => {
          const [p, m] = n.useState(!1),
            [g, P] = n.useState(null),
            [h, w] = n.useState(!1),
            [A, O] = n.useState(a),
            L = n.useRef(null),
            b =
              e && h
                ? s.filter((e) => {
                    const a = (e.value || "").toLowerCase(),
                      t = (E || "").toLowerCase();
                    return a.includes(t);
                  })
                : s,
            D = b.findIndex(({ key: e }) => g === e);
          let I,
            f = b[0],
            v = b[0];
          -1 !== D && ((I = b[D]), (f = b[Math.max(D - 1, 0)]), (v = b[Math.min(D + 1, b.length - 1)]));
          const y = (e) => {
              e
                ? (P(e.key),
                  ((e) => {
                    const a = Pa(e),
                      t = document.getElementById(a);
                    t && t.scrollIntoView();
                  })(e))
                : P(null);
            },
            F = (e) => {
              m(!1), r(e);
            },
            k = (e) => {
              e.key === N.ENTER
                ? I && (e.preventDefault(), m(!1), F(I))
                : e.key === N.ARROW_DOWN
                ? (o || m(!0), y(v))
                : e.key === N.ARROW_UP
                ? y(f)
                : e.key === N.ESCAPE
                ? (y(null), m(!1))
                : e.key === N.TAB
                ? m(!1)
                : (o || (w(!0), m(!0)), b[0] && P(b[0].key));
            };
          n.useEffect(() => {
            a && L?.current && L.current.focus();
          }, [a]);
          let M = null;
          n.useEffect(
            () => () => {
              M && clearTimeout(M);
            },
            [M]
          ),
            n.useEffect(() => {
              p || P(null);
            }, [p]);
          const B = `${t}-input`,
            x = `${t}-listbox`,
            W = {
              onBlur: () => {
                M = setTimeout(() => m(!1), 150);
              },
              onFocus: () => {
                M && clearTimeout(M), A ? O(!1) : o || m(!0);
              }
            },
            U = { "aria-activedescendant": I && Pa(I), id: B, onKeyDown: k, ...W };
          return (0, i.tZ)(
            "div",
            { sx: ga.ROOT },
            l && (0, i.tZ)("span", { sx: ga.LABEL }, l),
            (0, i.tZ)(
              "div",
              { sx: ga.CONTAINER, role: e ? "combobox" : "listbox", "aria-expanded": p, "aria-haspopup": "listbox", id: t },
              e
                ? (0, i.tZ)("input", {
                    ...U,
                    "aria-autocomplete": "list",
                    "aria-controls": x,
                    ref: L,
                    sx: (0, i.jM)([ga.CURRENT_ELEMENT, c ? ga.ERROR : {}, o ? ga.READONLY : {}]),
                    "aria-invalid": c,
                    type: "text",
                    value: E || "",
                    placeholder: d,
                    required: S,
                    onKeyDown: k,
                    onChange: (a) => {
                      w(!0), e && r({ id: t, key: -1, value: a.target.value });
                    },
                    readOnly: o
                  })
                : (0, i.tZ)(
                    "div",
                    null,
                    (0, i.tZ)(
                      "button",
                      { ...U, ref: L, type: "button", sx: (0, i.jM)([ga.CURRENT_ELEMENT, ga.ARROW_ELEMENT]) },
                      T &&
                        u &&
                        (0, i.tZ)("span", { sx: ga.SPACE_CONTAINER }, (0, i.tZ)(ue, { letter: T, color: u, name: null != R ? R : "" })),
                      E
                    ),
                    (0, i.tZ)(
                      "button",
                      {
                        sx: ga.DROPDOWN_CONTROLS,
                        onClick: p
                          ? () => m(!1)
                          : () => {
                              w(!1), m(!0), L?.current && L.current.focus();
                            },
                        type: "button",
                        "data-testid": "combobox-dropdown-controls-button"
                      },
                      (0, i.tZ)(i.JO, { name: p ? "CaretUpOutlined" : "CaretDownOutlined" })
                    )
                  ),
              p &&
                b.length > 0 &&
                (0, i.tZ)(
                  "ul",
                  {
                    sx: (0, i.jM)([ga.DROPDOWN, { maxHeight: (_ + 0.4) * (L?.current?.offsetHeight || 35) }]),
                    role: "listbox",
                    id: x,
                    tabIndex: -1,
                    ...W
                  },
                  b.map((a) => {
                    const t = Pa(a),
                      n = a.key === I?.key;
                    let o = (0, i.tZ)("span", null, a.value);
                    if (e && h && E) {
                      const e = a.value.toLowerCase().indexOf(E.toLowerCase());
                      if (e >= 0) {
                        const t = e + E.length;
                        o = (0, i.tZ)(
                          "span",
                          null,
                          a.value.substring(0, e),
                          (0, i.tZ)("span", { sx: ga.EMPHASIZED_TEXT }, a.value.substring(e, E.length)),
                          a.value.substring(t)
                        );
                      }
                    } else if (C) {
                      const e = a.value.indexOf("@");
                      e >= 0 &&
                        (o = (0, i.tZ)(
                          "span",
                          null,
                          a.value.substring(0, e + 1),
                          (0, i.tZ)("span", { sx: ga.EMPHASIZED_TEXT }, a.value.substring(e + 1))
                        ));
                    }
                    return (0, i.tZ)(
                      "li",
                      {
                        role: "option",
                        "aria-selected": n,
                        id: t,
                        key: t,
                        sx: (0, i.jM)([ga.DROPDOWN_ITEM, n ? ga.FOCUSED_ITEM : {}]),
                        onMouseDown: () => F(a),
                        onKeyDown: k
                      },
                      o
                    );
                  })
                )
            )
          );
        },
        wa = {
          main: "SavePassword_main",
          selectRow: "SavePassword_selectRow",
          checkboxLabel: "SavePassword_checkboxLabel",
          labelText: "SavePassword_labelText",
          buttonsContainer: "SavePassword_buttonsContainer",
          moreButtonContainer: "SavePassword_moreButtonContainer",
          moreButton: "SavePassword_moreButton",
          upsellContainer: "SavePassword_upsellContainer",
          passwordContainer: "SavePassword_passwordContainer",
          addNewLoginContainer: "SavePassword_addNewLoginContainer",
          addNewLoginIcon: "SavePassword_addNewLoginIcon",
          addNewLoginTitle: "SavePassword_addNewLoginTitle",
          logo: "SavePassword_logo",
          backButton: "SavePassword_backButton",
          logoContainer: "SavePassword_logoContainer",
          logoTitleContainer: "SavePassword_logoTitleContainer"
        };
      var Aa;
      const Oa = {
          ADD_NEW_LOGIN_TITLE: { color: "ds.text.neutral.catchy" },
          MORE_BUTTON: { color: "ds.text.neutral.quiet", "&:hover": { color: "ds.text.neutral.catchy" } }
        },
        La = "createNewLogin",
        Na = "collapse",
        ba = "moreOptions",
        Da = "upgradeToPremium",
        Ia = ({
          isReplaceWebcardFormat: e,
          isLimited: a,
          showFrozenB2BStatus: t,
          displayExtraInfo: o,
          emailOrLogin: r,
          formId: s,
          saveButtonRef: l,
          mainButtonLabel: d,
          accountSubscriptionCode: E,
          onCancel: c,
          onClickExtraInfo: T,
          handleClickCreateNewLogin: u,
          withExtraInfoButton: R,
          handleClickOnBuyDashlane: _
        }) => {
          const { translate: S } = n.useContext(C);
          return e
            ? a
              ? (0, i.tZ)(i.ke, {
                  title: S("passwordLimitReachedTitleReplace"),
                  description: (0, i.tZ)("a", { href: _a(E), key: S(Da), target: "_blank", rel: "noopener noreferrer" }, S(Da)),
                  mood: "warning",
                  icon: "PremiumOutlined"
                })
              : (0, i.tZ)(
                  "div",
                  {
                    className: se()(wa.addNewLoginContainer, wa.active),
                    onClick: u,
                    onKeyUp: (e) => {
                      (e.key !== N.ENTER && e.key !== N.SPACE) || u();
                    },
                    role: "button",
                    tabIndex: 0,
                    "data-keyboard-accessible": S(La)
                  },
                  (0, i.tZ)(
                    "div",
                    { className: wa.addNewLoginIcon, sx: pe.ICON_CONTAINER },
                    Aa || (Aa = (0, i.tZ)(i.JO, { name: "ActionAddOutlined", size: "large" }))
                  ),
                  (0, i.tZ)("div", { className: wa.addNewLoginTitle, sx: Oa.ADD_NEW_LOGIN_TITLE }, S(La))
                )
            : (0, i.tZ)(
                "div",
                { className: wa.buttonsContainer },
                R
                  ? (0, i.tZ)(
                      "div",
                      { className: wa.moreButtonContainer },
                      (0, i.tZ)(
                        "button",
                        {
                          className: wa.moreButton,
                          sx: Oa.MORE_BUTTON,
                          onClick: T,
                          type: "button",
                          "data-keyboard-accessible": S(o ? Na : ba)
                        },
                        (0, i.tZ)(i.JO, { name: o ? "CaretUpOutlined" : "CaretDownOutlined" }),
                        (0, i.tZ)("span", { "aria-hidden": !0, className: o ? wa.moreOpened : wa.moreCollapsed }),
                        S(o ? Na : ba)
                      )
                    )
                  : null,
                (0, i.tZ)(J, { onClick: c, label: S(t ? "footerDismiss" : "cancel") }),
                a ? (0, i.tZ)(Q, { onClick: _, label: S(Da), icon: "PremiumOutlined" }) : null,
                t ? (0, i.tZ)(Q, { onClick: _, label: S("footerBuyDashlane") }) : null,
                a || t ? null : (0, i.tZ)(Ue, { disabled: !r, form: s, buttonRef: l, label: d })
              );
        };
      var fa;
      const va = "save-password-form",
        ya = "savePassword-combobox-email",
        Fa = "savePassword-combobox-spaces",
        ka = "passwordShowButton",
        Ma = "alwaysUseMasterPwd",
        Ba = "useOnlyOnSubdomain",
        xa = "selectEmailOrUsernamePlaceholder",
        Wa = "upgradeToPremium",
        Ua = {
          CHECKBOX_LABEL: { color: "ds.text.neutral.quiet" },
          DOMAIN: {
            fontSize: "10px",
            textTransform: "uppercase",
            color: "ds.text.brand.standard.quiet",
            letterSpacing: "0.2px",
            lineHeight: "100%",
            fontWeight: "500"
          },
          PASSWORD_INPUT: {
            border: "1px solid",
            borderColor: "ds.border.brand.standard.idle",
            backgroundColor: "ds.container.expressive.brand.quiet.disabled !important"
          }
        },
        za = ({ data: e, closeWebcard: a }) => {
          const t = Te(),
            r = e.spaces.map(t),
            { translate: s } = n.useContext(C),
            { autofillEngineCommands: l, autofillEngineDispatcher: E, setAutofillEngineActionsHandlers: c } = L(),
            T = P(),
            u = oe({ webcardId: e.webcardId, autofillEngineDispatcher: E, closeWebcard: a }),
            [R, _] = n.useState(!1),
            [S, p] = n.useState(!1),
            [m, g] = n.useState(""),
            [w, A] = n.useState(!1),
            [O, b] = n.useState(!1),
            [D, I] = n.useState(!1),
            [f, v] = n.useState(!1),
            [y, F] = n.useState(""),
            [k, M] = n.useState(""),
            [B, x] = n.useState(e),
            {
              webcardId: W,
              category: U,
              domain: H,
              capturedUsernames: V,
              fullDomain: Y,
              url: G,
              emailOrLogin: Z,
              existingCredentialsForDomain: K,
              dropdownLoginOptions: q,
              space: X,
              showSpacesList: J,
              showSubdomainOpt: Q,
              passwordToSave: ee,
              allowMasterPasswordProtection: ae,
              isRestoredWebcard: te,
              passwordLimitStatus: ne,
              showFrozenB2BStatus: re
            } = B,
            le = n.useRef(null),
            [de, Ee] = n.useState(!re && ((!V.email && !V.login && !V.secondaryLogin && K.length > 0) || K.length > 0));
          n.useEffect(() => {
            l?.logPageView({
              pageView: re
                ? h.B4$.AutofillNotificationB2bTrialEndReached
                : ne.shouldShowPasswordLimitReached
                ? h.B4$.AutofillNotificationFreeUserPasswordLimitReached
                : de
                ? h.B4$.AutofillNotificationUpdateOrSaveAsNew
                : h.B4$.AutofillNotificationSave,
              browseComponent: h.QIA.Webcard
            }),
              Z && le.current?.focus();
          }, [l]),
            n.useEffect(() => {
              if (T) {
                const e = de ? [h.E7T.SaveAsNew, h.E7T.Replace] : [h.E7T.Save],
                  a = de ? K.length : void 0;
                l?.logEvent(
                  new h.jQL({
                    webcardSaveOptions: e,
                    isNativeApp: !1,
                    isLoginPrefilled: !!Z,
                    vaultTypeList: [h.qGq.Credential],
                    msToWebcard: T,
                    webcardItemTotalCount: a,
                    isRestoredWebcard: te
                  })
                ),
                  (async () => {
                    l?.logEvent(
                      new h.hrg({
                        domain: { id: await (0, h.ogC)(null != H ? H : ""), type: h.YZS.Web },
                        webcardSaveOptions: e,
                        isNativeApp: !1,
                        isLoginPrefilled: !!Z,
                        vaultTypeList: [h.qGq.Credential],
                        msToWebcard: T,
                        webcardItemTotalCount: a
                      })
                    );
                  })();
              }
            }, [T, de, l]),
            n.useEffect(() => {
              de || le.current?.focus();
            }, [de]);
          const ce = (e) => {
            x((a) => ({ ...a, ...e }));
          };
          n.useEffect(() => {
            x((a) => (e.emailOrLogin === a.emailOrLogin ? { ...a, ...e } : a));
          }, [e]),
            n.useEffect(() => {
              c?.({
                updateSavePasswordTargetCredential: (e, a) => {
                  a
                    ? (F(a.id),
                      p(a.onlyForThisSubdomain),
                      x((t) => ({ ...t, space: e.space, showSpacesList: e.showSpacesList, category: a.category })),
                      I(a.isProtected))
                    : (F(""), p(!1), x((a) => ({ ...a, space: e.space, showSpacesList: e.showSpacesList })), I(!1)),
                    g(e.space);
                },
                updateSavePasswordCapturedData: (e, a, t, n) => {
                  e === W &&
                    x(
                      (e) => (
                        e.emailOrLogin !== t && (l?.findSavePasswordTargetCredential(t, e.url), b(!1)),
                        { ...e, passwordToSave: a, emailOrLogin: t, capturedUsernames: n }
                      )
                    );
                },
                updateUserSubscriptionCode: (e) => {
                  M(e);
                }
              });
            }, [l, c, W]),
            n.useEffect(() => {
              l?.findSavePasswordTargetCredential(Z, G);
            }, [l, Z, G]);
          const ue = (e, a) => {
              const t = "" !== B.category,
                n = B.space !== m,
                o = d.vaultSourceTypeToHermesItemTypeMap[ie.k.Credential];
              l?.logEvent(
                new h.NYX({
                  dataTypeList: o ? [o] : [],
                  isSetAsDefault: !(R || S || t || n),
                  isProtected: D || R,
                  webcardOptionSelected: e,
                  itemPosition: a
                })
              ),
                (async () => {
                  l?.logEvent(
                    new h.edP({
                      domain: { type: h.YZS.Web, id: await (0, h.ogC)(H) },
                      isSetAsDefault: !(R || S || t || n),
                      isProtected: D || R,
                      webcardOptionSelected: e
                    })
                  );
                })();
            },
            Re = async ({ withEscapeKey: e = !1 } = {}) => {
              ne.shouldShowPasswordLimitReached
                ? l?.logEvent(
                    new h.fi5({ callToActionList: [h.Jdo.BuyDashlane, h.Jdo.Dismiss], chosenAction: h.Jdo.Dismiss, hasChosenNoAction: !1 })
                  )
                : l?.logEvent(new h.KQ6({ dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross })),
                l?.logEvent(
                  new h.RXg({
                    domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != H ? H : "") },
                    isNativeApp: !1,
                    dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross
                  })
                ),
                a();
            };
          n.useEffect(() => {
            const e = (e) => {
              e.key === N.ESCAPE && Re({ withEscapeKey: !0 });
            };
            return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
          }, []);
          const _e = r.find(({ spaceId: e }) => e === X),
            Ce = w ? 5 : 3,
            Se = (e) => {
              var a;
              if (e) {
                const a = K.indexOf(e) + 1;
                ue(h.E7T.Replace, a);
              }
              l?.updateCredential(W, {
                id: null != (a = e?.itemId) ? a : y,
                newPassword: ee,
                category: U,
                onlyForThisSubdomain: S,
                spaceId: J && !de ? X : void 0
              });
            },
            pe = (J || ae || Q) && !ne.shouldShowPasswordLimitReached && !re,
            me = (0, i.tZ)(Ia, {
              displayExtraInfo: w,
              emailOrLogin: Z,
              formId: va,
              isReplaceWebcardFormat: de,
              isLimited: ne.shouldShowPasswordLimitReached,
              showFrozenB2BStatus: re,
              saveButtonRef: le,
              mainButtonLabel: s("save"),
              handleClickCreateNewLogin: () => {
                Ee(!1), v(!0), ue(h.E7T.SaveAsNew);
              },
              handleClickOnBuyDashlane: () => {
                l &&
                  c &&
                  (re
                    ? Ca(l, c)
                    : ((e, a) => {
                        a({
                          updateUserSubscriptionCode: (t) => {
                            e.openNewTabWithUrl(_a(t)), a({ updateUserSubscriptionCode: () => {} });
                          }
                        }),
                          e.getUserSubscriptionCode();
                      })(l, c)),
                  l?.logEvent(
                    new h.fi5({
                      callToActionList: [h.Jdo.BuyDashlane, h.Jdo.Dismiss],
                      chosenAction: h.Jdo.BuyDashlane,
                      hasChosenNoAction: !1
                    })
                  );
              },
              handleReplace: Se,
              onCancel: async () => {
                l?.cancelSaveCredential(),
                  ne.shouldShowPasswordLimitReached || re
                    ? l?.logEvent(
                        new h.fi5({
                          callToActionList: [h.Jdo.BuyDashlane, h.Jdo.Dismiss],
                          chosenAction: h.Jdo.Dismiss,
                          hasChosenNoAction: !1
                        })
                      )
                    : l?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })),
                  l?.logEvent(
                    new h.RXg({
                      domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != H ? H : "") },
                      isNativeApp: !1,
                      dismissType: h.S77.Cancel
                    })
                  ),
                  a();
              },
              onClickExtraInfo: () => {
                A(!w), l?.logEvent(new h.n5J({ autofillButton: h.nUM.ShowOption }));
              },
              withExtraInfoButton: pe,
              accountSubscriptionCode: k
            }),
            ge = (0, i.tZ)(o.WUg, {
              sx: Ua.PASSWORD_INPUT,
              id: "savePassword-password-readonly",
              label: s("passwordFieldLabel"),
              hidePasswordTooltipText: s("passwordHideButton"),
              showPasswordTooltipText: s(ka),
              value: ee,
              readOnly: !0,
              onPasswordVisibilityChanged: () => {
                event && event.preventDefault();
              },
              "data-keyboard-accessible": s(ka)
            });
          return (0, i.tZ)(
            j,
            {
              closeWebcard: Re,
              footerContent: me,
              withFooterDivider: de && !ne.shouldShowPasswordLimitReached,
              headerContent: (0, i.tZ)(
                n.Fragment,
                null,
                (0, i.tZ)(
                  "div",
                  { className: wa.logoTitleContainer },
                  (0, i.tZ)(
                    "div",
                    { className: wa.logoContainer },
                    f
                      ? (0, i.tZ)(
                          "div",
                          {
                            onClick: () => {
                              Ee((e) => !e);
                            },
                            className: se()(wa.logo, wa.backButton),
                            "aria-hidden": !0,
                            "data-keyboard-accessible": !0
                          },
                          fa || (fa = (0, i.tZ)(i.JO, { name: "ArrowLeftOutlined" }))
                        )
                      : (0, i.tZ)(z(), { viewBox: "0 0 10.4 14.9", className: se()(wa.logo), "aria-hidden": !0 })
                  ),
                  (0, i.tZ)(
                    "div",
                    null,
                    Y ? (0, i.tZ)("div", { sx: Ua.DOMAIN }, Y) : null,
                    (0, i.tZ)($, {
                      title: s(
                        re
                          ? "headerTitleB2BTrialDiscontinued"
                          : de
                          ? ne.shouldShowPasswordLimitReached
                            ? "updatePasswordOrCreateNewLoginLimit"
                            : "updatePasswordOrCreateNewLogin"
                          : "header_nohtml"
                      )
                    })
                  )
                ),
                de ? (0, i.tZ)("div", { className: wa.passwordContainer }, ge) : null
              ),
              withHeaderCloseButton: !0
            },
            de
              ? (0, i.tZ)(xe, { onAddNewItem: a, items: K, onClickItem: Se, withScroll: !0, withLastUsedBadge: K.length > 2 })
              : (0, i.tZ)(
                  "form",
                  {
                    id: va,
                    className: wa.main,
                    onSubmit: (e) => {
                      e.preventDefault(),
                        (async () => {
                          ue(h.E7T.Save),
                            (await u()) &&
                              l?.saveCredential(W, {
                                emailOrLogin: Z,
                                capturedUsernames: V,
                                password: ee,
                                url: G,
                                category: U,
                                onlyForThisSubdomain: S,
                                protectWithMasterPassword: R,
                                spaceId: J ? X : void 0
                              });
                        })();
                    }
                  },
                  re
                    ? (0, i.tZ)(i.ke, {
                        sx: { marginBottom: "12px" },
                        title: s("infoboxTitleB2BTrialDiscontinued"),
                        description: s("infoboxDescriptionB2BTrialDiscontinued"),
                        mood: "danger"
                      })
                    : null,
                  ne.shouldShowPasswordLimitReached
                    ? (0, i.tZ)(i.ke, {
                        sx: { marginBottom: "12px" },
                        title: s("passwordLimitReachedTitle"),
                        description: s("passwordLimitReachedSubtitle"),
                        mood: "danger",
                        icon: "PremiumOutlined"
                      })
                    : null,
                  ne.shouldShowNearPasswordLimit && ne.passwordsLeft
                    ? (0, i.tZ)(i.ke, {
                        sx: { marginBottom: "12px" },
                        title: s("passwordNearLimitTitle", { count: ne.passwordsLeft }),
                        description: (0, i.tZ)(
                          "a",
                          {
                            href: _a(
                              k,
                              "button:buy_dashlane+click_origin:button+origin_page:autofill/notification/update_or_save_as_new+origin_component:webcard"
                            ),
                            key: s(Wa),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: async () => {
                              l?.logEvent(
                                new h.eJT({
                                  clickOrigin: h.$uk.SavePasswordWebcardPasswordLimitCloseToBeReached,
                                  button: h.zxk.BuyDashlane
                                })
                              ),
                                a();
                            }
                          },
                          s(Wa)
                        ),
                        mood: "brand",
                        icon: "PremiumOutlined"
                      })
                    : null,
                  (0, i.tZ)(
                    "div",
                    { className: wa.selectRow },
                    (0, i.tZ)(ha, {
                      id: ya,
                      label: s("loginFieldLabel"),
                      placeholder: s(xa),
                      value: Z,
                      options: q.map((e, a) => ({ id: ya, value: e, key: a })),
                      onChange: ({ value: e }) => {
                        ce({ emailOrLogin: e }), b(!1);
                      },
                      canAddNewValue: !0,
                      isErrored: O,
                      isReadOnly: re || ne.shouldShowPasswordLimitReached,
                      focusOnMount: !Z && !re,
                      dropdownElementsToDisplay: Ce,
                      boldEmailDomains: !0,
                      required: !0,
                      "data-keyboard-accessible": s(xa)
                    })
                  ),
                  (0, i.tZ)("div", { className: wa.selectRow }, ge),
                  w
                    ? (0, i.tZ)(
                        n.Fragment,
                        null,
                        J
                          ? (0, i.tZ)(
                              "div",
                              { className: wa.selectRow },
                              (0, i.tZ)(ha, {
                                id: Fa,
                                value: _e?.displayName,
                                options: r.map((e) => ({ id: Fa, value: e.displayName, key: e.spaceId })),
                                onChange: ({ key: e }) => {
                                  "string" == typeof e && ce({ space: e });
                                },
                                letter: _e?.letter,
                                color: _e?.color,
                                name: _e?.displayName,
                                dropdownElementsToDisplay: 2,
                                "data-keyboard-accessible": !0
                              })
                            )
                          : null,
                        ae
                          ? (0, i.tZ)(
                              "label",
                              { className: wa.checkboxLabel, sx: Ua.CHECKBOX_LABEL, id: "savePassword-checkProtectedOpt-label" },
                              (0, i.tZ)(o.XZJ, {
                                checked: R || !1,
                                onChange: (e) => _(e.currentTarget.checked),
                                "data-keyboard-accessible": s(Ma)
                              }),
                              (0, i.tZ)("span", { className: wa.labelText }, s(Ma))
                            )
                          : null,
                        Q
                          ? (0, i.tZ)(
                              "label",
                              { className: wa.checkboxLabel, sx: Ua.CHECKBOX_LABEL, id: "savePassword-checkSubdomainOpt-label" },
                              (0, i.tZ)(o.XZJ, {
                                checked: S,
                                onChange: (e) => p(e.currentTarget.checked),
                                "data-keyboard-accessible": s(Ba)
                              }),
                              (0, i.tZ)("span", { className: wa.labelText }, s(Ba))
                            )
                          : null
                      )
                    : null
                )
          );
        },
        Ha = {
          MASTERPASSWORD_PANEL_CONTAINER: {},
          LOGGED_IN_INFO: { color: "ds.text.neutral.quiet", paddingTop: "8px", display: "flex", alignItems: "center" },
          LOGGED_IN_INFO_TEXT: { paddingRight: "4px", "& > span": { color: "ds.text.brand.quiet" } }
        },
        Va = "enterMasterPassword",
        Ya = ({ webcardId: e, userLogin: a, closeWebcard: t, onVerificationSucessful: o, onCancel: r, makeUserVerificationDialog: s }) => {
          const { translate: l } = (0, n.useContext)(C),
            { autofillEngineCommands: d, autofillEngineDispatcher: E, setAutofillEngineActionsHandlers: c } = L(),
            T = oe({ webcardId: e, autofillEngineDispatcher: E, closeWebcard: t }),
            [u, R] = (0, n.useState)(""),
            [_, S] = (0, n.useState)(!1);
          c?.({
            setMasterPasswordValidationResult: (e) => {
              S(!e), e && o();
            }
          });
          const p = () => {
            d?.validateMasterPassword(u);
          };
          return s(
            (0, i.tZ)(
              "form",
              {
                sx: Ha.MASTERPASSWORD_PANEL_CONTAINER,
                onSubmit: (e) => {
                  e.preventDefault(), p();
                }
              },
              (0, i.tZ)(i.ZI, {
                autoFocus: !0,
                toggleVisibilityLabel: { hide: l("hide"), show: l("show") },
                placeholder: l(Va),
                value: u,
                onChange: async (e) => {
                  const a = e.target.value;
                  R(a), u !== a && S(!1), await T();
                },
                error: _,
                feedback: _ ? l("wrongPassword") : void 0,
                label: l(Va),
                labelPersists: !1
              }),
              (0, i.tZ)(
                "div",
                { sx: Ha.LOGGED_IN_INFO },
                (0, i.tZ)(i.nv, {
                  sx: Ha.LOGGED_IN_INFO_TEXT,
                  as: "span",
                  textStyle: "ds.body.helper.regular",
                  dangerouslySetInnerHTML: { __html: l("loggedIn", { 0: a }) }
                })
              )
            ),
            (0, i.tZ)(
              n.Fragment,
              null,
              (0, i.tZ)(J, { onClick: r, label: l("cancel") }),
              (0, i.tZ)(Q, { disabled: !u, onClick: p, label: l("unlock") })
            )
          );
        },
        Ga = {
          MAIN: { display: "flex", flexDirection: "column", padding: "0 16px", gap: "8px" },
          ROW: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            background: "transparent",
            padding: "12px",
            cursor: "pointer"
          },
          ROW_LABEL_CONTAINER: { display: "flex", alignItems: "center", "& > p": { marginLeft: "8px" } }
        };
      var Za;
      const Ka = { masterPassword: "selectionPanelMasterPassword", webauthn: "selectionPanelBiometric" },
        qa = ({ availableMethods: e, onChooseMethod: a, onCancel: t, makeUserVerificationDialog: n }) => {
          const { translate: o } = p();
          return n(
            (0, i.tZ)(
              "div",
              { sx: Ga.MAIN },
              (0, i.tZ)(i.nv, { textStyle: "ds.body.standard.regular" }, o("selectionPanelTitle")),
              e.map((e) => {
                const t = o(Ka[e]);
                return ((e, a, t) =>
                  (0, i.tZ)(
                    "button",
                    { key: a, "aria-label": a, sx: Ga.ROW, type: "button", onClick: t },
                    (0, i.tZ)(
                      "div",
                      { sx: Ga.ROW_LABEL_CONTAINER },
                      (0, i.tZ)(i.JO, { name: e, size: "large", color: "ds.text.neutral.standard" }),
                      (0, i.tZ)(i.nv, { textStyle: "ds.body.standard.regular" }, a)
                    ),
                    Za || (Za = (0, i.tZ)(i.JO, { name: "CaretRightOutlined", size: "large", color: "ds.text.neutral.standard" }))
                  ))("webauthn" === e ? "FingerprintOutlined" : "LockOutlined", t, () => a(e));
              })
            ),
            (0, i.tZ)(J, { onClick: t, label: o("cancel") })
          );
        },
        ja = Math.pow(10, 6),
        Xa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        $a = new Uint8Array(256);
      for (let e = 0; e < Xa.length; e++) $a[Xa.charCodeAt(e)] = e;
      function Ja(e) {
        const a = e.replace(/-/g, "+").replace(/_/g, "/"),
          t = (4 - (a.length % 4)) % 4;
        return (function (e) {
          let a = 0.75 * e.length;
          const t = e.length;
          let n,
            o,
            i,
            r,
            s,
            l = 0;
          e.endsWith("=") && (a--, "=" === e[e.length - 2] && a--);
          const d = new ArrayBuffer(a),
            E = new Uint8Array(d);
          for (n = 0; n < t; n += 4)
            (o = $a[e.charCodeAt(n)]),
              (i = $a[e.charCodeAt(n + 1)]),
              (r = $a[e.charCodeAt(n + 2)]),
              (s = $a[e.charCodeAt(n + 3)]),
              (E[l++] = (o << 2) | (i >> 4)),
              (E[l++] = ((15 & i) << 4) | (r >> 2)),
              (E[l++] = ((3 & r) << 6) | (63 & s));
          return d;
        })(a.padEnd(a.length + t, "="));
      }
      function Qa(e) {
        const a = e.length,
          t = [];
        for (let n = 0; n < a; n += 3)
          t.push(Xa[e[n] >> 2]),
            t.push(Xa[((3 & e[n]) << 4) | (e[n + 1] >> 4)]),
            t.push(Xa[((15 & e[n + 1]) << 2) | (e[n + 2] >> 6)]),
            t.push(Xa[63 & e[n + 2]]);
        return t.join("");
      }
      function et(e) {
        return (function (e, a = ja) {
          const t = new Uint8Array(e),
            n = t.length,
            o = a % 3,
            i = 0 === o ? a : a + (3 - o),
            r = Math.ceil(n / i);
          let s = "",
            l = -1;
          for (; l++ < r; ) {
            const e = l * i,
              a = l === r - 1 ? n : (l + 1) * i,
              o = Qa(t.slice(e, a));
            s = s.concat(o);
          }
          return n % 3 == 2 ? s.substring(0, s.length - 1) + "=" : n % 3 == 1 ? s.substring(0, s.length - 2) + "==" : s;
        })(new Uint8Array(e))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      async function at(e) {
        const a = await (async function (e) {
            var a;
            const t = {
                challenge: Ja(e.challenge),
                userVerification: e.userVerification,
                rpId: e.rpId,
                timeout: e.timeout,
                allowCredentials: (null != (a = e.allowCredentials) ? a : []).map((e) => ({ id: Ja(e.id), type: e.type }))
              },
              n = await navigator.credentials.get({ publicKey: t });
            if (!n) throw new Error("Passwordless assertion could not be completed as credential cannot be created");
            return n;
          })(e),
          t = a.response;
        return {
          id: a.id,
          type: a.type,
          rawId: et(a.rawId),
          response: { authenticatorData: et(t.authenticatorData), clientDataJSON: et(t.clientDataJSON), signature: et(t.signature) },
          clientExtensionResults: a.getClientExtensionResults(),
          authenticatorAttachment: "platform"
        };
      }
      const tt = {
          CONTAINER: { display: "flex", flexDirection: "column", padding: "0 16px", gap: "12px" },
          ICON_CONTAINER: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "12px 0" },
          ICON: { width: "96px", height: "96px" },
          ERROR_LABEL: { color: "ds.text.danger.standard" }
        },
        nt = "webauthnGenericErrorTitle",
        ot = "webauthnGenericErrorDescription",
        it = ({ onVerificationSucessful: e, onCancel: a, makeUserVerificationDialog: t }) => {
          const { translate: o } = p(),
            [r, s] = (0, n.useState)(void 0),
            { autofillEngineCommands: l, setAutofillEngineActionsHandlers: E } = L(),
            c = (0, n.useCallback)(() => {
              l?.startWebAuthnUserVerificationFlow();
            }, [l]);
          return (
            (0, n.useEffect)(() => {
              E?.({
                updateWebAuthnChallenge: async ({ publicKeyOptions: e }) => {
                  try {
                    const a = await at(e);
                    l?.validateWebAuthnUserVerificationFlow(a);
                  } catch (e) {
                    s({ title: nt, description: ot });
                  }
                },
                updateWebAuthnStatus: async (a) => {
                  a === d.WebAuthnStatus.Success ? e() : s({ title: nt, description: ot });
                }
              });
            }, [l, e, E, o]),
            (0, n.useEffect)(() => {
              c();
            }, [c]),
            t(
              (0, i.tZ)(
                "div",
                { sx: tt.CONTAINER },
                r
                  ? (0, i.tZ)(i.ke, { title: o(r.title), description: o(r.description), mood: "danger" })
                  : (0, i.tZ)(
                      n.Fragment,
                      null,
                      (0, i.tZ)(i.nv, { textStyle: "ds.body.standard.regular" }, o("webauthnPanelTitle")),
                      (0, i.tZ)(
                        "div",
                        { sx: tt.ICON_CONTAINER },
                        (0, i.tZ)(i.JO, { sx: tt.ICON, name: "FingerprintOutlined", size: "xlarge", color: "ds.text.brand.quiet" })
                      )
                    )
              ),
              r
                ? (0, i.tZ)(Q, {
                    onClick: () => {
                      s(void 0), c();
                    },
                    label: o("tryAgain")
                  })
                : (0, i.tZ)(J, { onClick: a, label: o("cancel") })
            )
          );
        },
        rt = {
          CONTENT_CONTAINER: { paddingLeft: "16px", paddingRight: "16px" },
          NEVER_ASK_AGAIN_CONTAINER: { display: "inline-grid", gap: "12px", margin: "12px 0px" },
          BUTTONS_CONTAINER: { display: "flex", justifyContent: "space-between" },
          BUTTONS_GROUP: { display: "flex", alignItems: "center", gap: "8px" },
          BUTTONS_RIGHT: { display: "flex", alignItems: "center", gap: "8px" }
        },
        st = ({ data: e, closeWebcard: a }) => {
          const { metadata: t, webcardId: o, neverAskAgainMode: r } = e,
            s = t[d.WebcardMetadataType.PendingOperation],
            { translate: E } = (0, n.useContext)(C),
            { autofillEngineCommands: c } = L(),
            [T, u] = (0, n.useState)(e.defaultMethod),
            [R, _] = (0, n.useState)(!1),
            S = e.availableMethods.length > 1 ? () => u(void 0) : void 0,
            p = async () => {
              c?.userVerificationComplete(s, l.UserVerificationResult.Failure, {}, o), a();
            },
            m = async () => {
              c?.userVerificationComplete(s, l.UserVerificationResult.Failure, {}, o), a();
            },
            g = (0, n.useCallback)(() => {
              const e = r !== d.NeverAskAgainMode.None && R;
              s && c?.userVerificationComplete(s, l.UserVerificationResult.Success, { neverAgain: e }, o);
            }, [r, R, s, c, o]),
            P = (0, n.useMemo)(() => {
              switch (e.neverAskAgainMode) {
                case d.NeverAskAgainMode.Global:
                  return (0, i.tZ)(
                    "div",
                    { sx: rt.NEVER_ASK_AGAIN_CONTAINER },
                    (0, i.tZ)(i.XZ, {
                      name: "alwaysAskMPCheckbox",
                      checked: R,
                      onChange: (e) => {
                        _(e.target.checked);
                      },
                      label: E("neverAskAgainAnyCredentialCheckbox")
                    }),
                    (0, i.tZ)(i.ke, { title: E("neverAskAgainAnyCredentialInfobox"), mood: "warning" })
                  );
                case d.NeverAskAgainMode.VaultItem:
                  return (0, i.tZ)(
                    "div",
                    { sx: rt.NEVER_ASK_AGAIN_CONTAINER },
                    (0, i.tZ)(i.XZ, {
                      name: "alwaysAskMPCheckbox",
                      checked: R,
                      onChange: (e) => {
                        _(e.target.checked);
                      },
                      label: E("neverAskAgainCredentialCheckbox")
                    })
                  );
                default:
                  return null;
              }
            }, [e.neverAskAgainMode, R, _, E]),
            h = (e, a) => {
              const t = (0, i.tZ)(
                  "div",
                  { sx: rt.BUTTONS_CONTAINER },
                  (0, i.tZ)(
                    "div",
                    { sx: rt.BUTTONS_GROUP },
                    void 0 !== T && S ? (0, i.tZ)(J, { onClick: S, label: E("useAnotherMethod"), intensity: "supershy" }) : null
                  ),
                  (0, i.tZ)("div", { sx: rt.BUTTONS_GROUP }, a)
                ),
                n = (0, i.tZ)("div", { sx: rt.CONTENT_CONTAINER }, e, void 0 !== T ? P : void 0);
              return (0, i.tZ)(
                j,
                { closeWebcard: p, headerContent: E("webcardTitle"), footerContent: t, withHeaderCloseButton: !0, withHeaderLogo: !0 },
                n
              );
            };
          let w = null;
          switch (T) {
            case "masterPassword":
              w = (0, i.tZ)(Ya, {
                onVerificationSucessful: g,
                onCancel: m,
                makeUserVerificationDialog: h,
                userLogin: e.userLogin,
                webcardId: e.webcardId,
                closeWebcard: a
              });
              break;
            case "webauthn":
              w = (0, i.tZ)(it, { onVerificationSucessful: g, onCancel: m, makeUserVerificationDialog: h });
              break;
            case void 0:
              if (e.availableMethods.length > 1)
                return (0, i.tZ)(qa, {
                  onCancel: m,
                  makeUserVerificationDialog: h,
                  availableMethods: e.availableMethods,
                  onChooseMethod: u
                });
              1 === e.availableMethods.length
                ? u(e.availableMethods[0])
                : (c?.userVerificationComplete(s, l.UserVerificationResult.Failure, {}, o), a());
          }
          return w;
        },
        lt = ({ data: { pendingOperation: e, webcardId: a, tabRootDomain: t }, closeWebcard: o }) => {
          const { translate: i } = n.useContext(C),
            { autofillEngineCommands: r, autofillEngineDispatcher: s } = L();
          n.useEffect(() => {
            r?.logPageView({
              pageView: h.B4$.AutofillNotificationWarningGeneratePasswordDashlaneAccountEmail,
              browseComponent: h.QIA.Webcard
            });
          }, [r]);
          const l = oe({ webcardId: a, autofillEngineDispatcher: s, closeWebcard: o }),
            E = async ({ withEscapeKey: e = !1 } = {}) => {
              r?.logEvent(new h.KQ6({ dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross })),
                r?.logEvent(
                  new h.RXg({
                    domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != t ? t : "") },
                    isNativeApp: !1,
                    dismissType: e ? h.S77.CloseEscape : h.S77.CloseCross
                  })
                ),
                o();
            };
          return (
            n.useEffect(() => {
              const e = (e) => {
                e.key === N.ESCAPE && E({ withEscapeKey: !0 });
              };
              return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
            }, []),
            n.createElement(
              j,
              {
                closeWebcard: E,
                footerContent: n.createElement(
                  "div",
                  { className: "WarnGeneratedPassword_footer" },
                  n.createElement(J, {
                    onClick: async () => {
                      r?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })),
                        r?.logEvent(
                          new h.RXg({
                            domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != t ? t : "") },
                            isNativeApp: !1,
                            dismissType: h.S77.Cancel
                          })
                        ),
                        o();
                    },
                    label: i("cancel")
                  }),
                  n.createElement(Q, {
                    onClick: async () => {
                      e &&
                        e.dataSource.type === Ne.JV.NewPassword &&
                        (await l()) &&
                        (0, d.isAutofillDetailsForOtherDataSource)(e) &&
                        r?.applyAutofillRecipeForOtherDataSource(e),
                        o();
                    },
                    label: i("continue")
                  })
                ),
                headerContent: n.createElement($, { title: i("header") }),
                withHeaderCloseButton: !0,
                withHeaderLogo: !0
              },
              n.createElement("div", { className: "WarnGeneratedPassword_main" }, i("contentWarnGeneratedPassword"))
            )
          );
        },
        dt = "WebauthnCreateConfirmation_highlite",
        Et = ({ data: { request: e, userDisplayName: a, rpName: t, webcardId: o, isRestoredWebcard: i }, closeWebcard: r }) => {
          const { translate: s } = n.useContext(C),
            { autofillEngineCommands: l } = L(),
            d = P();
          return (
            n.useEffect(() => {
              l?.logPageView({ pageView: h.B4$.AutofillNotificationSavePasskey, browseComponent: h.QIA.Webcard });
            }, [l]),
            n.useEffect(() => {
              d &&
                l?.logEvent(
                  new h.jQL({
                    isNativeApp: !1,
                    isRestoredWebcard: i,
                    msToWebcard: d,
                    vaultTypeList: [h.qGq.Passkey],
                    webcardSaveOptions: [h.E7T.Save]
                  })
                );
            }, [l, i, d]),
            n.createElement(
              j,
              {
                closeWebcard: async () => {
                  l?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })), l?.webauthnUserCanceled(e), r();
                },
                footerContent: n.createElement(
                  "div",
                  { className: "WebauthnCreateConfirmation_footer" },
                  n.createElement(J, {
                    onClick: async () => {
                      l?.webauthnUseOtherAuthenticator(e), r();
                    },
                    label: s("create_cancelButton")
                  }),
                  n.createElement(Q, {
                    onClick: async () => {
                      l?.logEvent(new h.NYX({ webcardOptionSelected: h.E7T.Save, dataTypeList: [h.qGq.Passkey] })),
                        l?.webauthnCreateUserConfirmed(e, o);
                    },
                    label: s("create_confirmButton")
                  })
                ),
                headerContent: n.createElement($, { title: s("create_headerTitle") }),
                withHeaderCloseButton: !0,
                withHeaderLogo: !0
              },
              n.createElement(
                "div",
                { className: "WebauthnCreateConfirmation_main" },
                n.createElement("p", {
                  dangerouslySetInnerHTML: {
                    __html: s("create_content", { 0: `<span class=${dt}>${a}</span>`, 1: `<span class=${dt}>${t}</span>` })
                  }
                })
              )
            )
          );
        },
        ct = "WebauthnGetConfirmation_highlite",
        Tt = ({
          data: { request: e, passkey: a, rpName: t, webcardId: o, isRestoredWebcard: r, allowUsingOtherAuthenticator: s },
          closeWebcard: l
        }) => {
          const { translate: d } = n.useContext(C),
            { autofillEngineCommands: E } = L(),
            c = P();
          n.useEffect(() => {
            E?.logPageView({ pageView: h.B4$.AutofillNotificationAuthenticatePasskey, browseComponent: h.QIA.Webcard });
          }, [E]),
            n.useEffect(() => {
              c && E?.logEvent(new h.jQL({ isNativeApp: !1, isRestoredWebcard: r, msToWebcard: c, vaultTypeList: [h.qGq.Passkey] }));
            }, [E, r, c]);
          const T = async () => {
            E?.logEvent(new h.KQ6({ dismissType: h.S77.Never })), E?.webauthnUseOtherAuthenticator(e), l();
          };
          return n.createElement(
            j,
            {
              closeWebcard: async () => {
                E?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })), E?.webauthnUserCanceled(e), l();
              },
              footerContent: n.createElement(
                "div",
                { className: "WebauthnGetConfirmation_footer" },
                s
                  ? n.createElement(
                      i.zx,
                      { mood: "brand", intensity: "quiet", size: "small", type: "button", onClick: T },
                      d("get_withoutDashlaneButton")
                    )
                  : n.createElement(J, { onClick: T, label: d("cancelButton") }),
                n.createElement(Q, {
                  onClick: async () => {
                    E?.logEvent(new h.NYX({ dataTypeList: [h.qGq.Passkey] })), E?.webauthnGetUserConfirmed(e, a.passkeyItemId, o);
                  },
                  label: d("confirmButton")
                })
              ),
              headerContent: n.createElement($, { title: d("headerTitle") }),
              withHeaderCloseButton: !0,
              withHeaderLogo: !0
            },
            n.createElement(
              "div",
              { className: "WebauthnGetConfirmation_main" },
              n.createElement("p", {
                dangerouslySetInnerHTML: {
                  __html: d("content", { 0: `<span class=${ct}>${a.userDisplayName}</span>`, 1: `<span class=${ct}>${t}</span>` })
                }
              })
            )
          );
        },
        ut = ({ data: { webcardId: e, isRestoredWebcard: a, passkeys: t, metadata: o }, closeWebcard: r }) => {
          const { translate: s } = n.useContext(C),
            { autofillEngineCommands: l } = L(),
            E = P();
          n.useEffect(() => {
            l?.logPageView({ pageView: h.B4$.AutofillNotificationAuthenticatePasskey, browseComponent: h.QIA.Webcard });
          }, [l]),
            n.useEffect(() => {
              E &&
                l?.logEvent(
                  new h.jQL({
                    isNativeApp: !1,
                    isRestoredWebcard: a,
                    msToWebcard: E,
                    vaultTypeList: [h.qGq.Passkey],
                    webcardItemTotalCount: t.length
                  })
                );
            }, [l, a, t.length, E]);
          const c = o?.[d.WebcardMetadataType.WebauthnRequest],
            T = async () => {
              l?.logEvent(new h.KQ6({ dismissType: h.S77.Cancel })), c && l?.webauthnUserCanceled(c), r();
            };
          return (
            n.useEffect(() => {
              const e = (e) => {
                e.key === N.ESCAPE && T();
              };
              return window.addEventListener("keyup", e), () => window.removeEventListener("keyup", e);
            }, []),
            n.createElement(
              j,
              {
                closeWebcard: T,
                headerContent: n.createElement($, { title: s("headerTitle") }),
                footerContent: n.createElement(
                  i.zx,
                  {
                    mood: "brand",
                    intensity: "quiet",
                    size: "small",
                    type: "button",
                    onClick: async () => {
                      l?.logEvent(new h.KQ6({ dismissType: h.S77.Never })), c && l?.webauthnUseOtherAuthenticator(c), r();
                    }
                  },
                  s("selection_withoutDashlaneButton")
                ),
                withHeaderCloseButton: !0,
                withHeaderLogo: !0,
                withNoMainPadding: !0,
                withFooterDivider: !0
              },
              n.createElement(xe, {
                onAddNewItem: T,
                items: t,
                onClickItem: async (a) => {
                  var n;
                  const i = t.indexOf(a) + 1;
                  l?.logEvent(new h.NYX({ dataTypeList: [h.qGq.Passkey], itemPosition: i })),
                    l?.webcardItemSelected(
                      a,
                      (0, d.filterWebcardMetadataStore)(null != o ? o : {}, null != (n = a.metadataKeys) ? n : []),
                      e
                    );
                },
                withPages: !0
              })
            )
          );
        },
        Rt = {
          OPTION_CONTAINER: {
            display: "flex",
            alignItems: "center",
            color: "ds.text.neutral.quiet",
            cursor: "pointer",
            height: "48px",
            "&:hover": { backgroundColor: "ds.container.agnostic.neutral.quiet" }
          }
        };
      let _t = (function (e) {
        return (
          (e.OPTION_CLOSE = "OPTION_CLOSE"),
          (e.OPTION_NEVER_SUGGEST = "OPTION_NEVER_SUGGEST"),
          (e.OPTION_SELF_CORRECT = "OPTION_SELF_CORRECT"),
          e
        );
      })({});
      const Ct = ({ onClick: e, type: a }) => {
          const { translate: t } = n.useContext(C),
            o = ((e) => {
              switch (e) {
                case _t.OPTION_NEVER_SUGGEST:
                case _t.OPTION_CLOSE:
                  return "MuteAutofillOutlined";
                case _t.OPTION_SELF_CORRECT:
                  return "ActionSearchOutlined";
                default:
                  return null;
              }
            })(a),
            r = ((e) => {
              switch (e) {
                case _t.OPTION_CLOSE:
                  return "optionsClose";
                case _t.OPTION_NEVER_SUGGEST:
                  return "optionsNeverSuggest";
                case _t.OPTION_SELF_CORRECT:
                  return "optionsFillSomethingElse";
                default:
                  return "";
              }
            })(a);
          return (0, i.tZ)(
            "div",
            null,
            (0, i.tZ)(
              "div",
              {
                id: a,
                sx: Rt.OPTION_CONTAINER,
                role: "button",
                onClick: e,
                onKeyUp: (a) => {
                  (a.key !== N.ENTER && a.key !== N.SPACE) || e();
                },
                tabIndex: 0,
                "data-keyboard-accessible": t(r)
              },
              o
                ? (0, i.tZ)(
                    "div",
                    { className: "DropdownOption_iconWrapper" },
                    (0, i.tZ)(i.JO, { name: o, "aria-hidden": !0, color: "ds.text.brand.quiet" })
                  )
                : null,
              (0, i.tZ)("div", { className: "DropdownOption_textWrapper" }, t(r))
            )
          );
        },
        St = {
          DIVIDER: { border: "none", borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle", padding: "0", margin: "0 0" }
        },
        pt = ({ onCloseOption: e, onNeverSuggestOption: a, onSelfCorrectOption: t, showSelfCorrectingOption: o = !0 }) =>
          (0, i.tZ)(
            "div",
            { className: "DropdownOptionsList_dropdownOptionsList" },
            (0, i.tZ)(Ct, { onClick: e, type: _t.OPTION_CLOSE }),
            (0, i.tZ)("hr", { sx: St.DIVIDER }),
            (0, i.tZ)(Ct, { onClick: a, type: _t.OPTION_NEVER_SUGGEST }),
            o
              ? (0, i.tZ)(
                  n.Fragment,
                  null,
                  (0, i.tZ)("hr", { sx: St.DIVIDER }),
                  (0, i.tZ)(Ct, { onClick: t, type: _t.OPTION_SELF_CORRECT })
                )
              : null
          ),
        mt = {
          background: "none",
          cursor: "pointer",
          fontSize: "12px",
          lineHeight: "1.43",
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" }
        },
        gt = ({ children: e, colorToken: a, sxStyle: t, onClick: n, withUnderline: o = !1 }) =>
          (0, i.tZ)(
            "a",
            {
              onClick: (e) => {
                e.preventDefault(), n(e);
              },
              type: "button",
              sx: (0, i.jM)([mt, null != t ? t : {}, a ? { color: a } : {}, o ? { textDecoration: "underline !important" } : {}]),
              href: "#",
              "data-testid": "link-button"
            },
            e
          );
      var Pt, ht, wt;
      const At = {
          DROPDOWN_MESSAGE: (0, i.jM)([
            w.FOOTNOTE_TEXT,
            { display: "flex", alignItems: "center", svg: { display: "block", flexShrink: "0", marginRight: "8px" } }
          ]),
          RED_WARNING: {
            display: "flex",
            width: "100%",
            alignItems: "flex-start",
            padding: "16px",
            color: "ds.text.warning.quiet",
            backgroundColor: "ds.container.expressive.warning.quiet.idle"
          },
          BLUE_WARNING: {
            display: "flex",
            width: "100%",
            alignItems: "flex-start",
            padding: "16px",
            color: "ds.text.brand.standard",
            backgroundColor: "ds.container.expressive.brand.quiet.idle"
          }
        },
        Ot = ({ type: e, onSeeCredentialOnWebapp: a }) => {
          const { translate: t } = n.useContext(C);
          let o = null;
          switch (e) {
            case d.AutofillDropdownWebcardWarningType.UnsecureProtocol:
            case d.AutofillDropdownWebcardWarningType.UnsecureIframe:
              o = (0, i.tZ)(
                "div",
                { sx: At.RED_WARNING },
                Pt || (Pt = (0, i.tZ)(i.JO, { name: "FeedbackInfoOutlined", size: "small", color: "ds.text.warning.quiet" })),
                (0, i.tZ)(
                  "span",
                  null,
                  e === d.AutofillDropdownWebcardWarningType.UnsecureProtocol && t("websiteUnsecure"),
                  e === d.AutofillDropdownWebcardWarningType.UnsecureIframe && t("websiteUnsecureIframe")
                )
              );
              break;
            case d.AutofillDropdownWebcardWarningType.PasswordGenerationDashlaneLogin:
              o = (0, i.tZ)(
                "div",
                { sx: At.RED_WARNING },
                ht || (ht = (0, i.tZ)(i.JO, { name: "FeedbackInfoOutlined", size: "small", color: "ds.text.warning.quiet" })),
                (0, i.tZ)("span", null, t("contactEmailGeneration"))
              );
              break;
            case d.AutofillDropdownWebcardWarningType.PossibleDuplicateRegistration:
              o =
                a &&
                (0, i.tZ)(
                  "div",
                  { sx: At.BLUE_WARNING },
                  wt || (wt = (0, i.tZ)(i.JO, { name: "FeedbackInfoOutlined", size: "small", color: "ds.text.brand.standard" })),
                  (0, i.tZ)(
                    "span",
                    null,
                    t("existingPassword"),
                    " ",
                    (0, i.tZ)(gt, { onClick: a, colorToken: "ds.text.brand.standard", withUnderline: !0 }, t("seePasswordLink"))
                  )
                );
          }
          return (0, i.tZ)("div", { sx: At.DROPDOWN_MESSAGE, id: "webcard-dropdown-message" }, o);
        },
        Lt = ({ context: e, closeWebcard: a, warningType: t }) => {
          const { autofillEngineCommands: o } = L(),
            i = {
              onSeeCredentialOnWebapp: async () => {
                o?.openWebapp({ id: e, route: "/passwords" }), a();
              }
            };
          return t ? n.createElement(Ot, { type: t, ...i }) : null;
        },
        Nt = {
          ITEM: {
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "ds.container.agnostic.neutral.quiet", cursor: "pointer" },
            display: "flex",
            alignItems: "center"
          }
        },
        bt = ({
          selfCorrectingOptions: e = [],
          selfCorrectingStep: a,
          onClickSelfCorrectingCategory: t,
          onClickSelfCorrectingOption: o,
          isInputPasswordField: r
        }) => {
          const { translate: s } = n.useContext(C),
            l = (e) =>
              a === Ie.Options &&
              !r &&
              [
                "TR_SELFCORRECT_STEP2_PASSWORD_NEW",
                "TR_SELFCORRECT_STEP2_PASSWORD_CURRENT",
                "TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM"
              ].includes(e.localizationKey),
            d = (e) => (l(e) ? (0, i.jM)([Nt.ITEM, { color: "ds.text.oddity.disabled", "&:hover": { cursor: "not-allowed" } }]) : Nt.ITEM);
          return (0, i.tZ)(le, {
            pager: { displayDot: !1, hasScroll: !0 },
            data: e.map((e) =>
              (0, i.tZ)(
                "button",
                {
                  type: "button",
                  key: e.itemType + e.localizationKey,
                  className: se()("SelfCorrectingMenu_item", "SelfCorrectingMenu_withIcon"),
                  sx: d(e),
                  onClick: () => (a === Ie.Categories ? t(e) : o(e)),
                  disabled: l(e),
                  "data-keyboard-accessible": s(e.localizationKey)
                },
                (() => {
                  if (a === Ie.Categories) {
                    const a = e.itemType === be.Nothing ? "MuteAutofillOutlined" : Re(e.itemType);
                    if (a) return (0, i.tZ)(i.JO, { name: a, size: "large" });
                  }
                  return null;
                })(),
                (0, i.tZ)("div", { className: "SelfCorrectingMenu_text" }, s(e.localizationKey))
              )
            )
          });
        };
      var Dt;
      const It = ({ closeWebcard: e, data: a, onMoreOptions: t }) => {
          const { translate: o } = n.useContext(C),
            { autofillEngineCommands: r } = L(),
            { tabRootDomain: s, srcElement: l, fieldType: E, warningType: c, context: T, configuration: u } = a,
            [R, _] = n.useState(Ie.Categories),
            S = o("fixAutofillHeader"),
            [p, m] = n.useState(fe),
            [g, P] = n.useState(S);
          n.useEffect(() => {
            r?.logPageView({ pageView: h.B4$.AutofillDropdownCorrect, browseComponent: h.QIA.Webcard });
          }, [r]);
          const w = n.createElement(bt, {
              selfCorrectingOptions: p,
              selfCorrectingStep: R,
              onClickSelfCorrectingCategory: (e) => {
                const t = ve[e.itemType];
                e.itemType === be.Nothing
                  ? r?.disableDashlaneOnField(a, d.DisableDashlaneOnFieldOption.PermanentlyDisable)
                  : t && (P(o(De[e.itemType])), m(t), _(Ie.Options));
              },
              onClickSelfCorrectingOption: async (e) => {
                (async (e) => {
                  const t = E?.reduce((e, a) => {
                      const t = d.vaultSourceTypeToHermesItemTypeMap[a];
                      return t && e.push(t), e;
                    }, []),
                    n = d.vaultSourceTypeToHermesItemTypeMap[e.itemType];
                  if (u === d.AutofillDropdownWebcardConfiguration.SelfCorrecting && n) {
                    const { elementHasImpala: e } = a;
                    r?.logEvent(
                      new h.Ath({
                        fieldInitialClassificationList: t,
                        fieldFilled: n,
                        isFieldDetectedByAnalysisEngine: e,
                        rightClickMenuFlowStep: h.hqx.SelectVaultItem
                      })
                    ),
                      r?.logEvent(
                        new h.o47({
                          domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != s ? s : "") },
                          fieldInitialClassificationList: t,
                          fieldFilled: n,
                          isFieldDetectedByAnalysisEngine: e,
                          isNativeApp: !1,
                          rightClickMenuFlowStep: h.hqx.SelectVaultItem
                        })
                      );
                  }
                  t?.length &&
                    n &&
                    (r?.logEvent(
                      new h.Wcx({
                        correctionType: h.YaV.ChangeClassification,
                        fieldCorrected: t[0],
                        initialFieldClassificationList: t,
                        newFieldClassification: n
                      })
                    ),
                    r?.logEvent(
                      new h._gL({
                        domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != s ? s : "") },
                        isNativeApp: !1,
                        correctionType: h.YaV.ChangeClassification,
                        fieldCorrected: t[0],
                        initialFieldClassificationList: t,
                        newFieldClassification: n
                      })
                    ));
                })(e),
                  r?.applySelfCorrectingAutofill(a, { dataSource: { [e.itemType]: e.itemProperty } });
              },
              isInputPasswordField: !!l.isInputPassword
            }),
            A = n.createElement(
              "div",
              { className: "SelfCorrectingMenu_header" },
              R === Ie.Options
                ? n.createElement(
                    "button",
                    {
                      type: "button",
                      className: "SelfCorrectingMenu_backLink",
                      onClick: () => {
                        m(fe), _(Ie.Categories), P(S);
                      },
                      "data-keyboard-accessible": !0
                    },
                    Dt || (Dt = n.createElement(i.JO, { name: "CaretLeftOutlined" }))
                  )
                : null,
              n.createElement($, { title: g })
            ),
            O =
              c && c !== d.AutofillDropdownWebcardWarningType.PossibleDuplicateRegistration
                ? n.createElement(Lt, { context: T, warningType: c, closeWebcard: e })
                : null,
            N = R === Ie.Categories;
          return a.configuration === d.AutofillDropdownWebcardConfiguration.SelfCorrecting
            ? n.createElement(
                Kt,
                {
                  closeWebcard: e,
                  footerContent: O,
                  headerContent: A,
                  webcardData: a,
                  withHeaderLogo: N,
                  withHeaderOptionsButton: !0,
                  withHeaderSearchButton: !0,
                  withNoMainPadding: !0,
                  withFooterPadding: !1
                },
                w
              )
            : n.createElement(
                B,
                {
                  header: n.createElement(q, { isDropdown: !0, isOptionsMenuOpen: !0, onClickOptions: t, withDashlaneLogo: N }, A),
                  footer: n.createElement(W, { withFooterPadding: !1 }, O),
                  isDropdown: !0,
                  webcardData: a,
                  withNoMainPadding: !0
                },
                w
              );
        },
        ft = ({ onMoreOptions: e, closeWebcard: a, webcardData: t }) => {
          const { translate: o } = n.useContext(C),
            { autofillEngineCommands: i } = L(),
            [r, s] = n.useState(!1),
            { tabRootDomain: l } = t;
          return (
            n.useEffect(() => {
              i?.logPageView({ pageView: h.B4$.AutofillDropdownSettings, browseComponent: h.QIA.Webcard });
            }, [i]),
            r
              ? n.createElement(It, { data: t, closeWebcard: a, onMoreOptions: e })
              : n.createElement(
                  B,
                  {
                    header: n.createElement(
                      q,
                      { isDropdown: !0, isOptionsMenuOpen: !0, onClickOptions: e, withDashlaneLogo: !0 },
                      n.createElement($, { title: o("optionsTitle") })
                    ),
                    isDropdown: !0,
                    webcardData: t,
                    withNoMainPadding: !0
                  },
                  n.createElement(pt, {
                    onCloseOption: async () => {
                      i?.logEvent(
                        new h.OLt({
                          disableSetting: {
                            scope: h.lLB.Field,
                            configuration: h.Bin.AutofillDisabled,
                            duration_setting: h.ms9.OnceForThisVisit
                          },
                          isBulk: !1
                        })
                      ),
                        i?.logEvent(
                          new h.Omg({
                            isNativeApp: !1,
                            domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != l ? l : "") },
                            disableSetting: {
                              scope: h.lLB.Field,
                              configuration: h.Bin.AutofillDisabled,
                              duration_setting: h.ms9.OnceForThisVisit
                            }
                          })
                        ),
                        i?.disableDashlaneOnField(t, d.DisableDashlaneOnFieldOption.TemporarilyDisable),
                        a();
                    },
                    onNeverSuggestOption: async () => {
                      i?.logEvent(
                        new h.OLt({
                          disableSetting: {
                            scope: h.lLB.Field,
                            configuration: h.Bin.AutofillDisabled,
                            duration_setting: h.ms9.UntilTurnedBackOn
                          },
                          isBulk: !1
                        })
                      ),
                        i?.logEvent(
                          new h.Omg({
                            isNativeApp: !1,
                            domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != l ? l : "") },
                            disableSetting: {
                              scope: h.lLB.Field,
                              configuration: h.Bin.AutofillDisabled,
                              duration_setting: h.ms9.UntilTurnedBackOn
                            }
                          })
                        ),
                        i?.disableDashlaneOnField(t, d.DisableDashlaneOnFieldOption.PermanentlyDisable);
                    },
                    onSelfCorrectOption: () => s(!0),
                    showSelfCorrectingOption: t.configuration !== d.AutofillDropdownWebcardConfiguration.SelfCorrecting
                  })
                )
          );
        },
        vt = "allItemsButton",
        yt = "suggestedButton",
        Ft = {
          HEADER: {
            padding: "8px 16px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            color: "ds.text.neutral.quiet",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
            width: "100%",
            backgroundColor: "ds.container.agnostic.neutral.standard"
          },
          BUTTON_SELECTED: { backgroundColor: "ds.container.expressive.brand.catchy.idle" },
          BUTTON_NOT_SELECTED: { backgroundColor: "transparent", color: "ds.text.neutral.quiet" }
        },
        kt = ({ itemsCount: e, onClickAllItemsButton: a, onClickSuggestedButton: t, allItemsButtonSelected: o = !1 }) => {
          const { translate: r } = n.useContext(C);
          return (0, i.tZ)(
            "div",
            { sx: Ft.HEADER },
            (0, i.tZ)(
              "div",
              { className: "SearchResultsHeader_buttonsContainer" },
              t
                ? (0, i.tZ)(
                    i.zx,
                    {
                      size: "small",
                      id: "dropdownSuggestedItemsButton",
                      type: "button",
                      sx: o ? Ft.BUTTON_NOT_SELECTED : Ft.BUTTON_SELECTED,
                      onClick: t,
                      "aria-label": r(yt),
                      "data-keyboard-accessible": r(yt)
                    },
                    r(yt)
                  )
                : null,
              a
                ? (0, i.tZ)(
                    i.zx,
                    {
                      id: "dropdownAllItemsButton",
                      type: "button",
                      size: "small",
                      sx: o ? Ft.BUTTON_SELECTED : Ft.BUTTON_NOT_SELECTED,
                      onClick: a,
                      "aria-label": r(vt),
                      "data-keyboard-accessible": r(vt)
                    },
                    r(vt)
                  )
                : null
            ),
            (0, i.tZ)("span", null, 0 !== e ? r("itemsCountLabel", { count: e }) : "")
          );
        },
        Mt = {
          CONTAINER: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            padding: "9px 16px",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "ds.container.agnostic.neutral.quiet" }
          },
          PROPERTY_LABEL: {
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "12px",
            color: "ds.text.neutral.quiet",
            overflowX: "unset",
            whiteSpace: "nowrap"
          },
          PROPERTY_VALUE: {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "ds.text.neutral.standard",
            overflowX: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          DIVIDER: { border: "none", borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle", padding: "0", margin: "0" }
        },
        Bt = ({ onClick: e, label: a, value: t }) =>
          (0, i.tZ)(
            n.Fragment,
            null,
            (0, i.tZ)(
              "div",
              { sx: Mt.CONTAINER, onClick: e, role: "button", tabIndex: 0, "data-keyboard-accessible": !0 },
              (0, i.tZ)("span", { sx: Mt.PROPERTY_LABEL }, a),
              (0, i.tZ)("span", { sx: Mt.PROPERTY_VALUE }, t)
            ),
            (0, i.tZ)("hr", { sx: Mt.DIVIDER })
          );
      var xt, Wt;
      const Ut = {
          BACK_ARROW: { cursor: "pointer", backgroundColor: "transparent", marginRight: "8px" },
          ICON_CONTAINER: { ...pe.ICON_CONTAINER, margin: "8px 0px" }
        },
        zt = ({ closeWebcard: e, onCloseItemDetails: a, webcardInfos: t, webcardItem: o }) => {
          const { title: r, itemId: s, itemType: l } = o,
            { autofillEngineCommands: E, setAutofillEngineActionsHandlers: c } = L(),
            { translate: T } = n.useContext(C),
            [u, R] = n.useState({}),
            _ = Re(l),
            S = ve[l],
            p = Object.keys(u).filter((e) => Boolean(u[e])),
            m = p.length > 0 || !S,
            g = (e) => {
              var a;
              return null !=
                (a = Object.values(ve)
                  .flatMap((e) => e)
                  .find((a) => a.itemType === l && a.itemProperty === e)?.localizationKey)
                ? a
                : e.toString();
            },
            P = (a) => {
              const n = t.autofillRecipes[l]?.ingredients.find(
                (e) =>
                  e.frameId === t.srcElement.frameId &&
                  e.srcElementId === t.srcElement.elementId &&
                  e.ingredient.type === l &&
                  e.ingredient.property === a
              );
              n
                ? (E?.applyAutofillRecipe({
                    autofillRecipe: { ingredients: [n] },
                    dataSource: { type: l, vaultId: s },
                    focusedElement: { elementId: t.srcElement.elementId, frameId: t.srcElement.frameId },
                    formClassification: t.formType,
                    requestOrigin: { type: d.AutofillRequestOriginType.Webcard, webcardType: t.webcardType }
                  }),
                  e())
                : E?.applySelfCorrectingAutofill(t, { dataSource: { [l]: a }, selectedItem: o });
            };
          n.useEffect(() => {
            E?.getVaultItemDetails(s, l);
          }, [E, s, l]),
            c?.({
              updateWebcardItemDetails: (e, a, t) => {
                e === s && a === l && R(t);
              }
            });
          const h = (0, i.tZ)(
              q,
              { isDropdown: !0 },
              (0, i.tZ)(i.zx, {
                type: "button",
                mood: "neutral",
                intensity: "supershy",
                size: "small",
                layout: "iconOnly",
                onClick: (e) => {
                  e.stopPropagation(), a();
                },
                icon: xt || (xt = (0, i.tZ)(i.JO, { name: "CaretLeftOutlined", "aria-hidden": !0 })),
                "data-keyboard-accessible": !0
              }),
              _ ? (0, i.tZ)("div", { sx: Ut.ICON_CONTAINER }, (0, i.tZ)(i.JO, { name: _ })) : null,
              (0, i.tZ)($, { title: m ? r : T(De[l]) }),
              m
                ? (0, i.tZ)(i.zx, {
                    type: "button",
                    mood: "neutral",
                    intensity: "supershy",
                    size: "small",
                    layout: "iconOnly",
                    sx: { ...H.DROPDOWN_ACTION, marginLeft: "auto" },
                    onClick: (a) => {
                      a.stopPropagation(),
                        (() => {
                          const a = ye[l];
                          E?.openWebapp({ route: a, id: s }), e();
                        })();
                    },
                    icon: Wt || (Wt = (0, i.tZ)(i.JO, { name: "ActionEditOutlined", "aria-hidden": !0 })),
                    "data-keyboard-accessible": !0
                  })
                : null
            ),
            w = m
              ? (0, i.tZ)(le, {
                  pager: { displayDot: !1, hasScroll: !0 },
                  data: p.map((e) => (0, i.tZ)(Bt, { onClick: () => P(e), key: `${s}-${e.toString()}`, label: T(g(e)), value: u[e] }))
                })
              : (0, i.tZ)(bt, {
                  selfCorrectingOptions: S,
                  selfCorrectingStep: Ie.Options,
                  onClickSelfCorrectingCategory: () => ({}),
                  onClickSelfCorrectingOption: (e) => {
                    P(e.itemProperty);
                  },
                  isInputPasswordField: !!t.srcElement.isInputPassword
                });
          return (0, i.tZ)(B, { isDropdown: !0, header: h, withNoMainPadding: !0, webcardData: t }, w);
        };
      var Ht,
        Vt = t(7852),
        Yt = t.n(Vt);
      const Gt = {
          SEARCH_INPUT_CONTAINER: { display: "flex", flexDirection: "row", alignItems: "center", gap: "4px" },
          SEARCH_INPUT_TEXT: {
            "&::placeholder": { color: "ds.text.neutral.quiet" },
            border: "none",
            background: "none",
            padding: "0",
            height: "auto",
            fontSize: "12px"
          }
        },
        Zt = ({ closeWebcard: e, onCloseSearch: a, srcElementValue: t = "", webcardData: r }) => {
          const { autofillEngineCommands: s, autofillEngineDispatcher: l, setAutofillEngineActionsHandlers: E } = L(),
            { translate: c } = n.useContext(C),
            T = oe({ webcardId: r.webcardId, autofillEngineDispatcher: l, closeWebcard: e }),
            u = n.useRef(r.configuration === d.AutofillDropdownWebcardConfiguration.Classic ? r.items : []),
            [R, _] = n.useState(u.current),
            [S, p] = n.useState(0 === u.current.length),
            [m, g] = n.useState(!1),
            [P, w] = n.useState(),
            [A, O] = n.useState(t),
            [N, b] = n.useState(!1),
            D = n.useRef();
          n.useEffect(() => () => D.current && clearTimeout(D.current), []),
            n.useEffect(() => O(t), [t]),
            n.useEffect(() => {
              s?.logPageView({ pageView: h.B4$.AutofillDropdownSuggestionSearch, browseComponent: h.QIA.Webcard });
            }, [s]),
            n.useEffect(() => {
              if (!A && !S) return _(u.current), void p(0 === u.current.length);
              b(!0),
                s?.queryVaultItems(
                  A,
                  S ? void 0 : { autofillRecipes: r.autofillRecipes, formClassification: r.formType, srcElementDetails: r.srcElement }
                );
            }, [A, S]),
            E?.({
              updateWebcardItems: (e) => {
                _(e), b(!1);
              }
            });
          const I = (e) => {
              s?.logEvent(
                new h._lB({
                  highlight: S ? h.y$I.None : h.y$I.Suggested,
                  hasInteracted: e,
                  charactersTypedCount: A.length,
                  totalCount: R.length
                })
              );
            },
            f = (e) => {
              w(e), g(!0);
            },
            v = (0, i.tZ)(
              q,
              {
                isDropdown: !0,
                onClickClose: () => {
                  I(!1), s?.logEvent(new h.n5J({ autofillButton: h.nUM.CloseCross })), a();
                },
                withDashlaneLogo: !0
              },
              (0, i.tZ)(
                "div",
                { sx: Gt.SEARCH_INPUT_CONTAINER },
                (0, i.tZ)(o.oil, {
                  sx: Gt.SEARCH_INPUT_TEXT,
                  placeholder: t || c("searchInputPlaceholder"),
                  autoFocus: !t,
                  onChange: (e) => {
                    return (
                      (a = e.target.value),
                      D.current && clearTimeout(D.current),
                      void (D.current = setTimeout(() => {
                        O(a.trim());
                      }, 200))
                    );
                    var a;
                  },
                  "data-testid": "search-input"
                }),
                N ? Ht || (Ht = (0, i.tZ)(Yt(), null)) : null
              )
            ),
            y =
              S && R.length > 0
                ? (0, i.tZ)(Lt, { warningType: d.AutofillDropdownWebcardWarningType.UnsecureIframe, closeWebcard: e })
                : null;
          return m && P
            ? (0, i.tZ)(zt, {
                closeWebcard: e,
                onCloseItemDetails: () => {
                  w(void 0), g(!1), O("");
                },
                webcardInfos: r,
                webcardItem: P
              })
            : (0, i.tZ)(
                B,
                { isDropdown: !0, header: v, footer: y, webcardData: r, withNoMainPadding: !0 },
                (0, i.tZ)(kt, {
                  itemsCount: R.length,
                  onClickAllItemsButton: () => {
                    p(!0);
                  },
                  onClickSuggestedButton: u.current.length
                    ? () => {
                        p(!1);
                      }
                    : void 0,
                  allItemsButtonSelected: S
                }),
                (0, i.tZ)(xe, {
                  onAddNewItem: () => {
                    I(!1), e();
                  },
                  fieldType: r.fieldType?.[0],
                  items: R,
                  onClickItem: async (a) => {
                    const t = d.vaultSourceTypeToHermesItemTypeMap[a.itemType];
                    t &&
                      (I(!0),
                      s?.logEvent(
                        new h.ELG({
                          highlight: S ? h.y$I.None : h.y$I.Suggested,
                          itemId: a.itemId,
                          itemType: t,
                          totalCount: R.length,
                          index: ne(R, a)
                        })
                      ));
                    const n = r.autofillRecipes[a.itemType];
                    n
                      ? ((await T()) &&
                          s?.applyAutofillRecipe({
                            autofillRecipe: n,
                            dataSource: { type: a.itemType, vaultId: a.itemId },
                            focusedElement: { elementId: r.srcElement.elementId, frameId: r.srcElement.frameId },
                            formClassification: r.formType,
                            requestOrigin: { type: d.AutofillRequestOriginType.Webcard, webcardType: r.webcardType }
                          }),
                        e())
                      : ((a) => {
                          if (ve[a.itemType]) f(a);
                          else {
                            const o = Object.values(ve)
                              .flatMap((e) => e)
                              .find((e) => e?.itemType === a.itemType);
                            o
                              ? ((t = o),
                                (n = a),
                                s?.applySelfCorrectingAutofill(r, {
                                  dataSource: { [t.itemType]: t.itemProperty },
                                  selectedItem: null != P ? P : n
                                }))
                              : e();
                          }
                          var t, n;
                        })(a);
                  },
                  onClickItemDetails: f,
                  searchValue: A,
                  tabRootDomain: r.tabRootDomain,
                  tabUrl: r.tabUrl,
                  withScroll: !0
                })
              );
        },
        Kt = ({
          children: e,
          closeWebcard: a,
          extensionShortcuts: t,
          footerContent: o,
          headerContent: i,
          isSearchActive: r = !1,
          srcElementValue: s,
          webcardData: l,
          withAllBordersRounded: d,
          withFooterDivider: E,
          withHeaderCloseButton: c,
          withHeaderLogo: T,
          withHeaderOptionsButton: u,
          withHeaderSearchButton: R,
          withFooterPadding: _,
          withNoMainPadding: C
        }) => {
          const [S, p] = n.useState(r),
            [m, g] = n.useState(!1),
            P = () => g((e) => !e);
          if (
            (n.useEffect(() => {
              g(!1), p(!1);
            }, [l]),
            n.useEffect(() => {
              p(r);
            }, [r]),
            S)
          )
            return n.createElement(Zt, { closeWebcard: a, onCloseSearch: () => p(!1), srcElementValue: s, webcardData: l });
          if (m) return n.createElement(ft, { onMoreOptions: P, closeWebcard: a, webcardData: l });
          const h = i
              ? n.createElement(
                  q,
                  {
                    isDropdown: !0,
                    isOptionsMenuOpen: m,
                    onClickClose: c ? a : void 0,
                    onClickOptions: u ? P : void 0,
                    onClickSearch: R ? () => p(!0) : void 0,
                    withDashlaneLogo: T
                  },
                  i
                )
              : null,
            w = o || t ? n.createElement(W, { withFooterDivider: E, withFooterPadding: _, extensionShortcuts: t }, o) : null;
          return n.createElement(
            B,
            { isDropdown: !0, header: h, footer: w, webcardData: l, withAllBordersRounded: d, withNoMainPadding: C },
            e
          );
        },
        qt = ({ onClick: e, icon: a, value: t }) => {
          const n = a ? Re(a) : null;
          return (0, i.tZ)(
            "div",
            null,
            (0, i.tZ)("hr", { sx: pe.DIVIDER }),
            (0, i.tZ)(
              "div",
              {
                sx: (0, i.jM)([pe.ITEM_BUTTON, pe.ITEM]),
                key: "todo",
                onClick: e,
                onKeyUp: (a) => {
                  (a.key !== N.ENTER && a.key !== N.SPACE) || e();
                },
                role: "button",
                tabIndex: 0,
                "data-keyboard-accessible": t
              },
              n
                ? (0, i.tZ)(
                    "div",
                    { sx: (0, i.jM)([pe.ICON_CONTAINER, pe.SIMPLE_ICON_BACKGROUND]) },
                    (0, i.tZ)(i.JO, { name: n, size: "large" })
                  )
                : null,
              (0, i.tZ)("div", { sx: pe.CONTENT }, (0, i.tZ)("div", { sx: pe.TITLE }, t))
            )
          );
        },
        jt = ({ data: e, closeWebcard: a }) => {
          const {
              autofillRecipes: t,
              webcardId: o,
              webcardType: i,
              items: r,
              formType: s,
              fieldType: l,
              warningType: E,
              srcElement: c,
              tabRootDomain: T,
              withSearch: u,
              withNonDashlaneKeyButton: R,
              webauthnRequest: _
            } = e,
            { translate: S } = n.useContext(C),
            { autofillEngineCommands: p, autofillEngineDispatcher: m } = L(),
            g = oe({ webcardId: o, autofillEngineDispatcher: m, closeWebcard: a }),
            w = P(),
            [A, O] = n.useState(!1),
            [N, b] = n.useState(""),
            D = l?.[0],
            I = r && r.length > 0 ? S(`types_${de[r[0].itemType]}`) : D ? S(`types_${de[D]}`) : "";
          n.useEffect(() => {
            if (r.length > 0) return void p?.logPageView({ pageView: h.B4$.AutofillDropdownSuggestion, browseComponent: h.QIA.Webcard });
            const e = D ? Me[D] : void 0;
            e && p?.logPageView({ pageView: e, browseComponent: h.QIA.Webcard });
          }, [p, D, r.length]),
            n.useEffect(() => {
              if (!w) return;
              let e = [];
              e = r.reduce((e, a) => {
                const t = d.vaultSourceTypeToHermesItemTypeMap[a.itemType];
                return t && !e.includes(t) && t !== h.qGq.GeneratedPassword && e.push(t), e;
              }, []);
              const a = e.includes(h.qGq.Credential) && r.some((e) => e.itemType === ie.k.GeneratedPassword);
              p?.logEvent(
                new h.jQL({
                  isNativeApp: !1,
                  vaultTypeList: e,
                  msToWebcard: w,
                  webcardItemTotalCount: r.length,
                  isSuggestLastUnsaved: a,
                  autofillMessageTypeList: E ? [d.dropdownWebcardWarningTypeToHermesWarningType[E]] : void 0
                })
              ),
                (async () => {
                  p?.logEvent(
                    new h.hrg({
                      domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != T ? T : "") },
                      isNativeApp: !1,
                      vaultTypeList: e,
                      msToWebcard: w,
                      webcardItemTotalCount: r.length,
                      isSuggestLastUnsaved: a,
                      autofillMessageTypeList: E ? [d.dropdownWebcardWarningTypeToHermesWarningType[E]] : void 0
                    })
                  );
                })();
            }, [p, r, T, w, E]);
          const [f, v] = n.useState(!1),
            [y, F] = n.useState(),
            k =
              E && E !== d.AutofillDropdownWebcardWarningType.PossibleDuplicateRegistration
                ? n.createElement(Lt, { context: e.context, warningType: e.warningType, closeWebcard: a })
                : null;
          return f && y
            ? n.createElement(zt, {
                closeWebcard: a,
                onCloseItemDetails: () => {
                  v(!1), F(void 0);
                },
                webcardInfos: e,
                webcardItem: y
              })
            : n.createElement(
                Kt,
                {
                  closeWebcard: a,
                  headerContent: n.createElement($, { title: I }),
                  footerContent: k,
                  isSearchActive: A,
                  srcElementValue: N,
                  webcardData: e,
                  withHeaderLogo: !0,
                  withHeaderOptionsButton: !0,
                  withHeaderSearchButton: u,
                  withFooterPadding: !1,
                  withNoMainPadding: !0
                },
                n.createElement(xe, {
                  onAddNewItem: a,
                  fieldType: D,
                  items: r,
                  onClickItem: async (n) => {
                    const l = n.isProtected,
                      E = d.vaultSourceTypeToHermesItemTypeMap[n.itemType];
                    if (
                      (E && p?.logEvent(new h.NYX({ dataTypeList: [E], itemPosition: ne(r, n), isProtected: l })),
                      p?.logEvent(
                        new h.edP({
                          domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != T ? T : "") },
                          itemPosition: ne(r, n),
                          isProtected: l
                        })
                      ),
                      n.metadataKeys && e.metadata)
                    ) {
                      if (await g()) {
                        const a = (0, d.filterWebcardMetadataStore)(e.metadata, n.metadataKeys);
                        p?.webcardItemSelected(n, a, o);
                      }
                      !1 !== n.closeOnSelect && a();
                    } else {
                      const e = t[n.itemType];
                      e &&
                        (await g()) &&
                        p?.applyAutofillRecipe({
                          autofillRecipe: e,
                          dataSource: { type: n.itemType, vaultId: n.itemId },
                          focusedElement: { elementId: c.elementId, frameId: c.frameId },
                          formClassification: s,
                          requestOrigin: { type: d.AutofillRequestOriginType.Webcard, webcardType: i }
                        }),
                        a();
                    }
                  },
                  onClickItemDetails: (e) => {
                    v(!0), F(e);
                  },
                  tabRootDomain: e.tabRootDomain,
                  tabUrl: e.tabUrl,
                  withScroll: !0,
                  withAddNewButton: !R
                }),
                R
                  ? n.createElement(qt, {
                      icon: ie.k.Passkey,
                      key: "nonDashlaneKeyButton",
                      onClick: async () => {
                        p?.logEvent(new h.KQ6({ dismissType: h.S77.UseLocalPasskey })), _ && p?.webauthnUseOtherAuthenticator(_), a();
                      },
                      value: S("webauthnConditionalUINotWithDashlaneButton")
                    })
                  : null
              );
        };
      var Xt;
      const $t = {
          MAIN_CONTAINER: {
            color: "ds.text.brand.standard",
            fontSize: "12px",
            fontWeight: "500",
            padding: "0px 16px",
            paddingRight: "8px"
          },
          ICON_CONTAINER: { ml: "auto", pr: 0, alignSelf: "center" },
          INLINE_LINK: { fontWeight: "500", paddingLeft: "8px" }
        },
        Jt = ({ closeWebcard: e, data: a }) => {
          const { translate: t } = n.useContext(C),
            { autofillEngineCommands: r } = L();
          return (
            n.useEffect(() => {
              r?.logPageView({ pageView: h.B4$.AutofillNotificationAutofillIsDisabled, browseComponent: h.QIA.Webcard });
            }, [r]),
            (0, i.tZ)(
              Kt,
              { closeWebcard: e, webcardData: a, withNoMainPadding: !0, withAllBordersRounded: !0 },
              (0, i.tZ)(
                "div",
                { className: "FieldDisabledNotification_main", sx: $t.MAIN_CONTAINER },
                (0, i.tZ)(z(), { className: "FieldDisabledNotification_logo" }),
                (0, i.tZ)(
                  "span",
                  { className: "FieldDisabledNotification_feedback" },
                  t("shush_feedback"),
                  (0, i.tZ)(
                    gt,
                    {
                      onClick: () => {
                        r?.openNewTabWithUrl("https://support.dashlane.com/hc/articles/202699111#title2"),
                          r?.logEvent(new h.nbV({ helpCenterArticleCta: h.rLC.GetHelp })),
                          e();
                      },
                      withUnderline: !0,
                      colorToken: "ds.text.brand.standard",
                      sxStyle: $t.INLINE_LINK
                    },
                    (0, i.tZ)("span", null, t("shush_feedback_learnMore"))
                  )
                ),
                (0, i.tZ)(
                  o.Ejs,
                  { sx: $t.ICON_CONTAINER },
                  (0, i.tZ)(o.hU, {
                    "aria-label": t("_common_alert_dismiss_button"),
                    icon: Xt || (Xt = (0, i.tZ)(i.JO, { name: "ActionCloseOutlined" })),
                    onClick: () => {
                      e();
                    }
                  })
                )
              )
            )
          );
        },
        Qt = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890&@$!#?";
      function en(e = 0, a = 1) {
        return Math.floor(Math.random() * (a - e)) + e;
      }
      function an() {
        const e = en(0, Qt.length - 1);
        return Qt.substring(e, e + 1);
      }
      function tn(e) {
        return Qt.substring(0, e)
          .split("")
          .map(() => an())
          .join("");
      }
      function nn(e, a = en(0, e.length)) {
        return e.substring(0, a) + an() + e.substring(a + 1);
      }
      const on = { 0: "tooGuessable", 1: "veryGuessable", 2: "somewhatGuessable", 3: "safelyUnguessable", 4: "veryUnguessable" };
      function rn(e) {
        return e >= 100 ? 4 : e >= 75 ? 3 : e >= 50 ? 2 : e >= 25 ? 1 : e >= 0 ? 0 : void 0;
      }
      const sn = "GeneratorOptions_checkbox",
        ln = n.memo(({ options: e, onOptionsChanged: a }) => {
          const { translate: t } = n.useContext(C),
            o = n.useCallback(
              (e) => {
                const a = t(e),
                  n = a.split("_");
                return n.length < 3
                  ? a
                  : (0, i.tZ)("div", null, n[0], " ", (0, i.tZ)("span", { className: "GeneratorOptions_monoExample" }, n[1]), " ", n[2]);
              },
              [t]
            );
          return (0, i.tZ)(
            "div",
            { sx: { marginTop: "16px" } },
            (0, i.tZ)(i.XZ, {
              id: "checkbox_use_letters",
              label: o("generatePasswordOption_letters"),
              onChange: (t) => {
                const n = t.currentTarget.checked;
                a({ ...e, letters: n });
              },
              checked: e.letters,
              className: sn,
              disabled: e.letters && !e.digits,
              "data-keyboard-accessible": o("generatePasswordOption_letters")
            }),
            (0, i.tZ)(i.XZ, {
              id: "checkbox_use_digits",
              label: o("generatePasswordOption_digits"),
              onChange: (t) => {
                const n = t.currentTarget.checked;
                a({ ...e, digits: n });
              },
              checked: e.digits,
              className: sn,
              disabled: e.digits && !e.letters,
              "data-keyboard-accessible": o("generatePasswordOption_digits")
            }),
            (0, i.tZ)(i.XZ, {
              id: "checkbox_use_symbols",
              label: o("generatePasswordOption_symbols"),
              onChange: (t) => {
                const n = t.currentTarget.checked;
                a({ ...e, symbols: n });
              },
              checked: e.symbols,
              className: sn,
              disabled: e.symbols && !e.letters && !e.digits,
              "data-keyboard-accessible": o("generatePasswordOption_symbols")
            }),
            (0, i.tZ)(i.XZ, {
              id: "checkbox_use_similar_characters",
              label: o("generatePasswordOption_similarCharacters"),
              onChange: (t) => {
                const n = t.currentTarget.checked;
                a({ ...e, avoidAmbiguous: !n });
              },
              checked: !e.avoidAmbiguous,
              className: sn,
              "data-keyboard-accessible": o("generatePasswordOption_similarCharacters")
            })
          );
        }),
        dn = n.memo(({ length: e, onLengthChanged: a }) => {
          const { translate: t } = n.useContext(C),
            [i, r] = n.useState(e),
            s = t("generatePasswordOption_length", { 0: i });
          return n.createElement(o.iRW, {
            id: "passwordLengthSlider",
            label: s,
            min: 4,
            max: 40,
            step: 1,
            onChange: (e) => {
              e && r(e);
            },
            onChangeComplete: a,
            value: i,
            "data-keyboard-accessible": s
          });
        }),
        En = n.memo(
          ({ options: e, backgroundColorToken: a, handleSettingsChange: t, autofillEngineCommands: o }) => (
            n.useEffect(() => {
              o?.logPageView({ pageView: h.B4$.AutofillDropdownPasswordGeneratorSettings, browseComponent: h.QIA.Webcard });
            }, [o]),
            (0, i.tZ)(
              "div",
              { className: se()("GeneratorSettings_generatorSettingsWrapper"), sx: { backgroundColor: a }, id: "settingsMenu" },
              (0, i.tZ)(
                "div",
                { className: "GeneratorSettings_options" },
                (0, i.tZ)(dn, {
                  length: e.length || 16,
                  onLengthChanged: (a) => {
                    a && t({ ...e, length: a });
                  }
                }),
                (0, i.tZ)(ln, {
                  onOptionsChanged: (e) => {
                    t(e);
                  },
                  options: e
                })
              )
            )
          )
        ),
        cn = ({ password: e }) => {
          const a = (e) =>
            "0123456789".includes(e)
              ? "ds.text.oddity.passwordDigits"
              : "&@$!#?".includes(e)
              ? "ds.text.oddity.passwordSymbols"
              : "ds.text.neutral.catchy";
          return (0, i.tZ)(
            "div",
            null,
            e.split("").map((e, t) => (0, i.tZ)("span", { key: t, sx: { color: a(e) } }, e))
          );
        },
        Tn = new RegExp("{[-a-zA-Z0-9]{36}}"),
        un = ({ data: e, closeWebcard: a }) => {
          var t;
          const { autofillEngineCommands: o } = L(),
            i = null != (t = e.warningType) ? t : d.AutofillDropdownWebcardWarningType.None,
            r = e.context;
          n.useEffect(() => {
            o?.logPageView({ pageView: h.B4$.AutofillDropdownSuggestion, browseComponent: h.QIA.Webcard });
          }, [o]);
          let s = i !== d.AutofillDropdownWebcardWarningType.None;
          return (
            i !== d.AutofillDropdownWebcardWarningType.PossibleDuplicateRegistration || Tn.test(r || "") || (s = !1),
            s
              ? n.createElement(Ot, {
                  type: i,
                  onSeeCredentialOnWebapp: async () => {
                    o?.openWebapp({ id: r, route: "/passwords" }), o?.logEvent(new h.n5J({ autofillButton: h.nUM.SeeAllPasswords })), a();
                  }
                })
              : null
          );
        };
      var Rn, _n, Cn, Sn;
      const pn = "ds.container.expressive.neutral.quiet.disabled",
        mn = "button:buy_dashlane+click_origin:button+origin_page:autofill/dropdown/password_generator+origin_component:webcard",
        gn = { PASSWORD_TEXT: { color: "ds.text.neutral.catchy", transition: "opacity 0.1s ease", marginTop: "10px" } },
        Pn = "roleButton",
        hn = "usePassword",
        wn = "passwordLimitSubtitle",
        An = "upgradeToPremium",
        On = ({ data: e, closeWebcard: a }) => {
          const {
              formType: t,
              webcardType: r,
              passwordGenerationSettings: s,
              srcElement: l,
              tabRootDomain: c,
              webcardId: T,
              autofillRecipes: u,
              passwordLimitStatus: R,
              showFrozenB2BStatus: _
            } = e,
            { translate: S } = (0, n.useContext)(C),
            p = (0, n.useContext)(E),
            m = P(),
            { autofillEngineCommands: g, autofillEngineDispatcher: w, setAutofillEngineActionsHandlers: A } = L(),
            O = oe({ webcardId: T, autofillEngineDispatcher: w, closeWebcard: a }),
            [N, b] = (0, n.useState)(""),
            [D, I] = (0, n.useState)(""),
            [f, v] = (0, n.useState)(-1),
            [y, F] = (0, n.useState)(!1),
            [k, M] = (0, n.useState)(!1),
            [B, x] = (0, n.useState)(!1),
            [W, U] = (0, n.useState)(s);
          (0, n.useEffect)(() => {
            g?.logPageView({ pageView: h.B4$.AutofillDropdownPasswordGenerator, browseComponent: h.QIA.Webcard }),
              g?.generateNewPassword(s);
          }, [g, s]),
            (0, n.useEffect)(() => {
              m &&
                (g?.logEvent(new h.jQL({ isNativeApp: !1, vaultTypeList: [h.qGq.GeneratedPassword], msToWebcard: m })),
                (async () => {
                  g?.logEvent(
                    new h.hrg({
                      domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != c ? c : "") },
                      isNativeApp: !1,
                      vaultTypeList: [h.qGq.GeneratedPassword],
                      msToWebcard: m
                    })
                  );
                })());
            }, [g, c, m]),
            (0, n.useEffect)(() => {
              A?.({
                updateNewPassword: (e, a) => {
                  b(e),
                    v(a),
                    g?.logEvent(
                      new h.aT4({
                        hasDigits: W.digits,
                        hasLetters: W.letters,
                        hasSimilar: !W.avoidAmbiguous,
                        hasSymbols: W.symbols,
                        length: W.length
                      })
                    );
                },
                updateUserSubscriptionCode: (e) => {
                  I(e);
                }
              });
            });
          const { shuffledPassword: z, isPasswordShuffling: H } = (function ({ shouldShuffle: e, passwordLength: a }) {
              const t = n.useRef(null),
                [o, i] = n.useState(tn(a)),
                r = n.useCallback(() => {
                  let e = nn(o);
                  const a = e.length / 6;
                  for (let t = 0; t < a; t++) e = nn(e);
                  i(e);
                }, [o]),
                [s, l] = n.useState(e);
              return (
                n.useEffect(() => {
                  e
                    ? l(!0)
                    : window.setTimeout(() => {
                        l(!1);
                      }, 150);
                }, [e]),
                n.useEffect(
                  () => (
                    o.length !== a && i(tn(a)),
                    s ? (t.current = window.setInterval(r, 10)) : t.current && window.clearInterval(t.current),
                    () => {
                      t.current && window.clearInterval(t.current);
                    }
                  ),
                  [s, a, r, o]
                ),
                { shuffledPassword: o, isPasswordShuffling: s }
              );
            })({ shouldShuffle: B, passwordLength: N?.length || 0 }),
            V = H ? z : N;
          (0, n.useEffect)(() => {
            x(!1);
          }, [N]);
          const Y = (0, n.useMemo)(
              () =>
                (function (e) {
                  return `generatePasswordStrength_${(function (e) {
                    const a = rn(e);
                    return void 0 === a ? "none" : on[a];
                  })(e)}`;
                })(f),
              [f]
            ),
            G = (0, n.useMemo)(() => rn(f), [f]),
            Z = (0, i.tZ)(un, { data: e, closeWebcard: a });
          return (0, i.tZ)(
            Kt,
            {
              closeWebcard: a,
              footerContent: Z,
              headerContent: (0, i.tZ)($, { title: S("generatePasswordDropdownTitle") }),
              webcardData: e,
              withHeaderLogo: !0,
              withHeaderOptionsButton: !0,
              withHeaderSearchButton: !0,
              withFooterPadding: !1
            },
            (0, i.tZ)(
              "div",
              { className: "GeneratePassword_newMain" },
              R.shouldShowPasswordLimitReached
                ? (0, i.tZ)(i.ke, {
                    title: S("passwordLimitTitle"),
                    description: (0, i.tZ)(
                      "a",
                      {
                        href: _a(D, mn),
                        key: S(wn),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: async () => {
                          g?.logEvent(
                            new h.eJT({ clickOrigin: h.$uk.GeneratePasswordWebcardPasswordLimitReached, button: h.zxk.BuyDashlane })
                          ),
                            a();
                        }
                      },
                      S(wn)
                    ),
                    mood: "warning",
                    icon: "PremiumOutlined"
                  })
                : null,
              R.shouldShowNearPasswordLimit && R.passwordsLeft
                ? (0, i.tZ)(i.ke, {
                    sx: { marginBottom: "12px" },
                    title: S("passwordNearLimitTitle", { count: R.passwordsLeft }),
                    description: (0, i.tZ)(
                      "a",
                      {
                        href: _a(D, mn),
                        key: S(An),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: () => {
                          g?.logEvent(
                            new h.eJT({
                              clickOrigin: h.$uk.GeneratePasswordWebcardPasswordLimitCloseToBeReached,
                              button: h.zxk.BuyDashlane
                            })
                          ),
                            a();
                        }
                      },
                      S(An)
                    ),
                    mood: "brand",
                    icon: "PremiumOutlined"
                  })
                : null,
              _
                ? (0, i.tZ)(i.ke, {
                    sx: { marginBottom: "8px" },
                    title: S("infoboxTitleB2BTrialDiscontinued"),
                    description: S("infoboxDescriptionB2BTrialDiscontinued"),
                    mood: "warning",
                    icon: "FeedbackFailOutlined"
                  })
                : null,
              (0, i.tZ)(
                "div",
                { className: "GeneratePassword_password" },
                (0, i.tZ)(
                  "div",
                  { id: "passwordGeneratorText", className: "GeneratePassword_passwordText", sx: gn.PASSWORD_TEXT },
                  V && (y ? (0, i.tZ)(cn, { password: V }) : "•".repeat(V.length || 0))
                ),
                (0, i.tZ)(
                  "div",
                  { id: "passwordGeneratorMenu", className: "GeneratePassword_buttonMenu" },
                  y
                    ? (0, i.tZ)(i.zx, {
                        disabled: _,
                        mood: "neutral",
                        intensity: "supershy",
                        id: "refreshButton",
                        type: "button",
                        size: "small",
                        onClick: (e) => {
                          e.stopPropagation(), g?.generateNewPassword(W), g?.logEvent(new h.n5J({ autofillButton: h.nUM.Shuffle })), x(!0);
                        },
                        layout: "iconOnly",
                        icon: Rn || (Rn = (0, i.tZ)(i.JO, { name: "ActionRefreshOutlined" })),
                        "data-keyboard-accessible": `${S("generatePasswordButtons_reshuffle")}:\n                   ${S(Pn)}`
                      })
                    : null,
                  (0, i.tZ)(i.zx, {
                    disabled: _,
                    mood: "neutral",
                    intensity: "supershy",
                    id: "showPassword",
                    onClick: (e) => {
                      e.stopPropagation(), F((e) => !e), g?.logEvent(new h.n5J({ autofillButton: h.nUM.Reveal }));
                    },
                    type: "button",
                    size: "small",
                    layout: "iconOnly",
                    icon: y
                      ? _n || (_n = (0, i.tZ)(i.JO, { name: "ActionHideOutlined" }))
                      : Cn || (Cn = (0, i.tZ)(i.JO, { name: "ActionRevealOutlined" })),
                    "data-keyboard-accessible": y
                      ? `${S("generatePasswordButtons_hidePassword")}:\n                     ${S(Pn)}`
                      : `${S("generatePasswordButtons_showPassword")}:\n                     ${S(Pn)}`
                  }),
                  W &&
                    (0, i.tZ)(i.zx, {
                      disabled: _,
                      mood: "neutral",
                      intensity: "supershy",
                      id: "settingsButton",
                      type: "button",
                      size: "small",
                      onClick: (e) => {
                        e.stopPropagation(), M((e) => !e), F(() => !k);
                      },
                      layout: "iconOnly",
                      icon: Sn || (Sn = (0, i.tZ)(i.JO, { name: "ConfigureOutlined" })),
                      "data-keyboard-accessible": k
                        ? `${S("generatePasswordButtons_closeSettings")}:\n                       ${S(Pn)}`
                        : `${S("generatePasswordButtons_openSettings")}:\n                       ${S(Pn)}`
                    })
                )
              ),
              k &&
                W &&
                (0, i.tZ)(
                  "div",
                  { className: "GeneratePassword_expandedView" },
                  (0, i.tZ)(o.YVT, {
                    elementId: "password-strength",
                    score: G,
                    showAdditionalText: !0,
                    additionalText: S(Y),
                    backgroundColor: pn,
                    showQueerColors: p.hasFeature("webplatform_web_prideColors")
                  }),
                  (0, i.tZ)(En, {
                    options: W,
                    backgroundColorToken: pn,
                    handleSettingsChange: (e) => {
                      U(e), g?.generateNewPassword(e), g?.logEvent(new h.n5J({ autofillButton: h.nUM.Shuffle })), x(!0);
                    },
                    autofillEngineCommands: g
                  })
                ),
              (0, i.tZ)(
                "div",
                { className: "GeneratePassword_mainButtonContainer" },
                (0, i.tZ)(
                  i.zx,
                  {
                    mood: "brand",
                    intensity: "catchy",
                    size: "small",
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation(),
                        _
                          ? (g?.logEvent(
                              new h.eJT({ clickOrigin: h.$uk.GeneratePasswordWebcardB2bTrialEndReached, button: h.zxk.BuyDashlane })
                            ),
                            a(),
                            g && A && Ca(g, A))
                          : (async () => {
                              const e = JSON.stringify(W) === JSON.stringify(s);
                              g?.logEvent(new h.NYX({ dataTypeList: [h.qGq.GeneratedPassword], isSetAsDefault: e })),
                                g?.logEvent(
                                  new h.edP({ domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != c ? c : "") }, isSetAsDefault: e })
                                );
                              const n = u[Ne.JV.NewPassword];
                              n &&
                                (await O()) &&
                                g?.applyAutofillRecipe({
                                  autofillRecipe: n,
                                  dataSource: { type: Ne.JV.NewPassword, value: N },
                                  focusedElement: { elementId: l.elementId, frameId: l.frameId },
                                  formClassification: t,
                                  requestOrigin: { type: d.AutofillRequestOriginType.Webcard, webcardType: r }
                                }),
                                a();
                            })();
                    },
                    className: "GeneratePassword_mainButton",
                    "data-keyboard-accessible": `${S(hn)}:\n               ${S(Pn)}`
                  },
                  S(_ ? "buyDashlane" : hn)
                )
              )
            )
          );
        },
        Ln = ({ closeWebcard: e, data: a }) => {
          const { translate: t } = n.useContext(C),
            { autofillEngineCommands: o } = L(),
            { extensionShortcuts: r, tabRootDomain: s } = a;
          return (
            n.useEffect(() => {
              o?.logPageView({ pageView: h.B4$.AutofillDropdownReactivationLoginOnly, browseComponent: h.QIA.Webcard });
            }, [o]),
            n.createElement(
              Kt,
              {
                closeWebcard: e,
                extensionShortcuts: r,
                headerContent: n.createElement($, { title: t("mavReactivationTitle") }),
                webcardData: a,
                withHeaderCloseButton: !0,
                withHeaderLogo: !0
              },
              n.createElement(
                "div",
                { className: "Reactivation_main" },
                n.createElement(
                  i.zx,
                  {
                    type: "button",
                    mood: "brand",
                    intensity: "catchy",
                    fullsize: !0,
                    onClick: async () => {
                      o?.logEvent(new h.NYX({ dataTypeList: [] })),
                        o?.logEvent(new h.edP({ domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != s ? s : "") } })),
                        o?.openWebapp({}),
                        e();
                    },
                    size: "small"
                  },
                  t("mavReactivationBtn")
                ),
                n.createElement(
                  i.zx,
                  {
                    type: "button",
                    mood: "neutral",
                    intensity: "quiet",
                    fullsize: !0,
                    onClick: () => {
                      o?.disableReactivationWebcards(), e();
                    },
                    size: "small"
                  },
                  t("mavReactivationDismiss")
                )
              )
            )
          );
        },
        Nn = "webAuthnReactivationDontAskAgain",
        bn = "webAuthnReactivationFallbackToMasterPassword",
        Dn = "webAuthnReactivationHeader",
        In = "webAuthnReactivationLoginButton",
        fn = "webAuthnReactivationErrorMessage",
        vn = "webAuthnReactivationLoginButtonError",
        yn = ({ closeWebcard: e, data: a }) => {
          const { translate: t } = n.useContext(C),
            { autofillEngineCommands: r, setAutofillEngineActionsHandlers: s } = L(),
            { extensionShortcuts: l, tabRootDomain: E } = a,
            [c, T] = n.useState(!1);
          n.useEffect(() => {
            r?.logPageView({ pageView: h.B4$.AutofillDropdownReactivationBiometrics, browseComponent: h.QIA.Webcard });
          }, [r]);
          const u = () => {
            r?.logEvent(new h.NYX({ dataTypeList: [] })),
              (async () => {
                r?.logEvent(new h.edP({ domain: { type: h.YZS.Web, id: await (0, h.ogC)(null != E ? E : "") } }));
              })();
          };
          return (
            n.useEffect(() => {
              s?.({
                updateWebAuthnChallenge: async ({ login: e, publicKeyOptions: a }) => {
                  try {
                    const t = await at(a);
                    r?.completeWebAuthnLoginFlow(e, t);
                  } catch {
                    T(!0);
                  }
                },
                updateWebAuthnStatus: (a) => {
                  a === d.WebAuthnStatus.Success ? e() : T(!0);
                }
              });
            }, [r, e, s]),
            n.createElement(
              Kt,
              {
                closeWebcard: e,
                extensionShortcuts: l,
                headerContent: n.createElement($, { title: t(Dn) }),
                webcardData: a,
                withHeaderCloseButton: !0,
                withHeaderLogo: !0
              },
              n.createElement(
                "div",
                { className: "WebAuthnReactivation_main" },
                c &&
                  n.createElement(
                    o.nvN,
                    { color: "errors.5", sx: { fontSize: "14px", fontWeight: "light", textAlign: "center", marginBottom: "16px" } },
                    t(fn)
                  ),
                n.createElement(
                  i.zx,
                  {
                    type: "button",
                    mood: "brand",
                    intensity: "catchy",
                    fullsize: !0,
                    onClick: async () => {
                      T(!1), u(), r?.startWebAuthnLoginFlow();
                    },
                    size: "small"
                  },
                  t(c ? vn : In)
                ),
                n.createElement(
                  i.zx,
                  {
                    type: "button",
                    mood: "brand",
                    intensity: "quiet",
                    fullsize: !0,
                    onClick: async () => {
                      u(), r?.openWebapp({ route: "/askmp" }), e();
                    },
                    size: "small"
                  },
                  t(bn)
                ),
                n.createElement(
                  i.zx,
                  {
                    type: "button",
                    mood: "neutral",
                    intensity: "quiet",
                    fullsize: !0,
                    onClick: () => {
                      r?.disableReactivationWebcards(), e();
                    },
                    size: "small"
                  },
                  t(Nn)
                )
              )
            )
          );
        },
        Fn = {
          [d.WebcardType.AutofillDropdown]: "autofill-dropdown",
          [d.WebcardType.AutologinSelection]: "autologin-selection",
          [d.WebcardType.DataCapture]: "data-capture",
          [d.WebcardType.MasterPassword]: "master-password",
          [d.WebcardType.SavePassword]: "save-password",
          [d.WebcardType.AutofillConfirmationPasswordLess]: "autofill-confirmation",
          [d.WebcardType.WarnGeneratedPassword]: "warn-generated-password",
          [d.WebcardType.OnboardingNotification]: "notification",
          [d.WebcardType.WebauthnCreateConfirmation]: "webauthn-create-confirmation",
          [d.WebcardType.WebauthnGetConfirmation]: "webauthn-get-confirmation",
          [d.WebcardType.WebauthnPasskeySelection]: "webauthn-passkey-selection",
          [d.WebcardType.FollowUpNotification]: "follow-up-notification",
          [d.WebcardType.FeedbackNotification]: "feedback-notification",
          [d.WebcardType.PhishingPrevention]: "phishing-prevention",
          [d.WebcardType.UserVerification]: "user-verification"
        },
        kn = (e) => {
          const { dispatch: a, nameSpace: t, langCode: o } = n.useContext(C),
            { data: i } = e;
          return (
            n.useEffect(() => {
              a && a({ type: "setNameSpace", payload: Fn[i.webcardType] });
            }, [i.webcardType, a]),
            Boolean(i && t && o)
              ? (() => {
                  switch (i?.webcardType) {
                    case d.WebcardType.FeedbackNotification:
                      return n.createElement(je, { ...e, data: i });
                    case d.WebcardType.FollowUpNotification:
                      return n.createElement(oa, { ...e, data: i });
                    case d.WebcardType.PhishingPrevention:
                      return n.createElement(Ra, { ...e, data: i });
                    case d.WebcardType.MasterPassword:
                      return n.createElement(sa, { ...e, data: i });
                    case d.WebcardType.SavePassword:
                      return n.createElement(za, { ...e, data: i });
                    case d.WebcardType.AutologinSelection:
                      return n.createElement(We, { ...e, data: i });
                    case d.WebcardType.AutofillConfirmationPasswordLess:
                      return n.createElement(te, { ...e, data: i });
                    case d.WebcardType.DataCapture:
                      return n.createElement(Ge, { ...e, data: i });
                    case d.WebcardType.WarnGeneratedPassword:
                      return n.createElement(lt, { ...e, data: i });
                    case d.WebcardType.OnboardingNotification:
                      return n.createElement(la, { ...e, data: i });
                    case d.WebcardType.WebauthnCreateConfirmation:
                      return n.createElement(Et, { ...e, data: i });
                    case d.WebcardType.WebauthnGetConfirmation:
                      return n.createElement(Tt, { ...e, data: i });
                    case d.WebcardType.WebauthnPasskeySelection:
                      return n.createElement(ut, { ...e, data: i });
                    case d.WebcardType.UserVerification:
                      return n.createElement(st, { ...e, data: i });
                    case d.WebcardType.AutofillDropdown:
                      switch (i?.configuration) {
                        case d.AutofillDropdownWebcardConfiguration.GeneratePassword:
                          return n.createElement(On, { ...e, data: i });
                        case d.AutofillDropdownWebcardConfiguration.Reactivation:
                          return n.createElement(Ln, { ...e, data: i });
                        case d.AutofillDropdownWebcardConfiguration.WebAuthnReactivation:
                          return n.createElement(yn, { ...e, data: i });
                        case d.AutofillDropdownWebcardConfiguration.FieldDisabledNotification:
                          return n.createElement(Jt, { ...e, data: i });
                        case d.AutofillDropdownWebcardConfiguration.Classic:
                          return n.createElement(jt, { ...e, data: i });
                        case d.AutofillDropdownWebcardConfiguration.SelfCorrecting:
                          return n.createElement(It, { ...e, data: i });
                        default:
                          return null;
                      }
                    default:
                      return null;
                  }
                })()
              : null
          );
        },
        Mn = {
          SANDBOX: { display: "flex", flex: "1", justifyContent: "center", alignItems: "center", overflow: "hidden" },
          DARK_MODE: { backgroundColor: "ds.container.expressive.brand.catchy.active" }
        },
        Bn = ({ useDarkMode: e, ...a }) =>
          (0, i.tZ)("div", { sx: (0, i.jM)([Mn.SANDBOX, e ? Mn.DARK_MODE : {}]) }, (0, i.tZ)(kn, { ...a }));
      var xn = t(2921),
        Wn = t(7822),
        Un = t(1885);
      const zn = () => {
        const { commandCalls: e } = (0, Un.h)(),
          a = JSON.stringify(e, null, 2);
        return n.createElement(
          "label",
          null,
          "Autofill engine commands called",
          n.createElement("textarea", { rows: 45, cols: 60, readOnly: !0, value: a })
        );
      };
      var Hn;
      const Vn = ({ toggleDarkMode: e, getInitialState: a, utils: t }) => {
          const [o, r] = n.useState(!1),
            s = Object.keys(xn.q.dialogs).concat(Object.keys(xn.q.dropdowns)),
            { type: l, mockData: d, langCode: E } = t.getFromUrl(),
            c = l && s.includes(l) ? l : s[0],
            T = Object.keys(xn.q.dialogs[c] || xn.q.dropdowns[c]),
            u = d && T.includes(d) ? d : T[0],
            [R, _] = n.useState(c),
            [S, p] = n.useState(u),
            [m, g] = n.useState(E),
            { dispatch: P } = n.useContext(C);
          return (
            n.useEffect(() => {
              o ? (t.loadUrl(R, S, m), a(), P && P({ type: "setLanguage", payload: m || "en" })) : r(!0);
            }, [m, R, S, t]),
            (0, i.tZ)(
              "div",
              { className: "Menu_menu", sx: { backgroundColor: "ds.container.agnostic.neutral.quiet" } },
              (0, i.tZ)(
                "label",
                null,
                "Language",
                (0, i.tZ)(
                  "select",
                  { value: m, onChange: (e) => g(e.target.value) },
                  Wn.a2.map((e) => (0, i.tZ)("option", { value: e, key: e }, e))
                )
              ),
              (0, i.tZ)(
                "label",
                null,
                "Webcard",
                (0, i.tZ)(
                  "select",
                  {
                    value: R,
                    onChange: (e) => {
                      p("default"), _(e.target.value);
                    }
                  },
                  (0, i.tZ)(
                    "optgroup",
                    { label: "Dialogs" },
                    Object.keys(xn.q.dialogs).map((e) => (0, i.tZ)("option", { value: e, key: e }, e))
                  ),
                  (0, i.tZ)(
                    "optgroup",
                    { label: "Dropdowns" },
                    Object.keys(xn.q.dropdowns).map((e) => (0, i.tZ)("option", { value: e, key: e }, e))
                  )
                )
              ),
              (0, i.tZ)(
                "label",
                null,
                "Mock data",
                (0, i.tZ)(
                  "select",
                  { value: S, onChange: (e) => p(e.target.value) },
                  Object.keys(xn.q.dialogs[R] || xn.q.dropdowns[R]).map((e) => (0, i.tZ)("option", { value: e, key: e }, e))
                )
              ),
              (0, i.tZ)("button", { type: "button", onClick: () => e() }, "Toggle Dark Mode"),
              Hn || (Hn = (0, i.tZ)(zn, null))
            )
          );
        },
        Yn = ({ data: e, utils: a, getInitialState: t, ...o }) => {
          const [i, r] = n.useState(!1);
          return n.createElement(
            "div",
            { className: "Playground_playground" },
            n.createElement(Vn, { value: e?.webcardType, utils: a, toggleDarkMode: () => r(!i), getInitialState: t }),
            n.createElement(Bn, { key: o.sandboxKey, data: e, useDarkMode: i, ...o })
          );
        },
        Gn = (e) => {
          const { utils: a } = e;
          return n.createElement(
            n.Fragment,
            null,
            a.env.isProduction || a.env.isDevBuild || a.getFromUrl().noPlayground
              ? n.createElement(kn, { ...e })
              : n.createElement(Yn, { ...e })
          );
        },
        Zn = ({ utils: e }) => {
          var a;
          const [t, E] = n.useState(null),
            [u, R] = n.useState(null),
            [_, C] = n.useState(() => () => {}),
            [p, m] = n.useState(() => () => {}),
            [P, h] = n.useState(() => () => {}),
            [w, A] = n.useState(null != (a = e.getFromUrl().features) ? a : {}),
            L = n.useMemo(() => e.getFromUrl().langCode || (0, s.getLanguage)(), []),
            [N, b] = ((e) => {
              const [a, t] = n.useState(),
                [o] = n.useState({});
              return (
                n.useEffect(() => {
                  t(
                    e.connectToAutofillEngine(
                      new l.WebExtensionApiManager().getBrowserApi(),
                      o,
                      d.AutofillEngineClientType.Webcards,
                      (a, t) => {
                        e.log(`[AutofillEngine] ${a}\n${JSON.stringify(t, null, 2)}`);
                      }
                    )
                  );
                }, [o, e]),
                [
                  a,
                  (e) => {
                    Object.keys(e).forEach((a) => {
                      o[a] && delete o[a], (o[a] = e[a]);
                    });
                  }
                ]
              );
            })(e),
            D = ((e) => {
              const [a, t] = n.useState();
              return (
                n.useEffect(() => {
                  t(e.connectToDispatcher(new l.WebExtensionApiManager().getBrowserApi(), d.AutofillEngineClientType.Webcards));
                }, [e]),
                a
              );
            })(e);
          return (
            n.useEffect(() => {
              const a = e.getFromUrl().token;
              if (D && a) {
                const t = async () => {
                  const t = await D.sendMessage({ message: r.DispatcherMessages.GetWebcardInitialData, targetFrameId: 0 }, a);
                  t &&
                    (e.clearPlaygroundLogs(),
                    R((e) => {
                      var a;
                      return { ...t, sandboxKey: (null != (a = e?.sandboxKey) ? a : 0) + 1 };
                    }));
                };
                t(),
                  C(() => t),
                  m(
                    () => (e) =>
                      D.sendMessage({ message: r.DispatcherMessages.UpdateWebcardGeometry, targetFrameId: 0 }, a, e).then((e) => {
                        e && (E(Number(e)), D.sendMessage({ message: r.DispatcherMessages.WebcardOpened }));
                      })
                  ),
                  h(() => (e) => {
                    D.sendMessage({ message: r.DispatcherMessages.WebcardClosed, targetFrameId: 0 }, a, e), N?.webcardClosed(a);
                  }),
                  b({
                    updateUserFeatureFlips: (e) => {
                      A(null != e ? e : {});
                    }
                  }),
                  N?.getUserFeatureFlips();
              }
            }, [N, D, e]),
            u && N && D
              ? (b({
                  updateWebcard: (e) => {
                    e.webcardId === u.webcardId && R({ ...e, sandboxKey: u.sandboxKey });
                  },
                  closeWebcard: (e) => {
                    e === u.webcardId && P();
                  },
                  updateDomainAnalysisStatus: (e) => {
                    e || P();
                  }
                }),
                n.createElement(
                  o.f6W,
                  { theme: (0, i.It)(i.uH, o.uHP) },
                  n.createElement(
                    S,
                    { langCode: L },
                    n.createElement(
                      O,
                      { autofillEngineCommands: N, autofillEngineDispatcher: D, setAutofillEngineActionsHandlers: b },
                      n.createElement(
                        c,
                        { featureFlips: w },
                        n.createElement(
                          g,
                          { timeToWebcard: t },
                          n.createElement(
                            T.Provider,
                            { value: { sendWebcardGeometry: p } },
                            n.createElement(Gn, { utils: e, data: u, getInitialState: _, sandboxKey: u.sandboxKey, closeWebcard: P })
                          )
                        )
                      )
                    )
                  )
                ))
              : null
          );
        };
    },
    9430: (e, a, t) => {
      var n = t(6832);
      function o(e) {
        return n.createElement(
          "svg",
          e,
          n.createElement("path", {
            d: "M10.398 4.722c0-.094-.094-.19-.226-.226L8.587 3.91c-.265-.114-.566.019-.566.207v6.898a.312.312 0 00.188.245l1.623.585c.245.094.566-.038.566-.245zm-4.02 5.256c0-.095-.095-.19-.227-.227l-1.585-.585c-.264-.113-.566.02-.566.208v4.302a.312.312 0 00.189.246l1.622.585c.246.094.567-.038.567-.246zm0-8.794c0-.095-.095-.19-.227-.227L4.566.372C4.302.259 4 .392 4 .58v4.302a.312.312 0 00.189.246l1.622.585c.246.094.567-.038.567-.246zm-4-.33c0-.095-.095-.19-.227-.227L.566.042C.302-.071 0 .062 0 .25v13.774a.312.312 0 00.188.246l1.623.585c.246.094.566-.038.566-.246V.854z",
            fill: "#0e353d"
          })
        );
      }
      (o.defaultProps = { fill: "none" }), (e.exports = o), (o.default = o);
    },
    7852: (e, a, t) => {
      var n = t(6832);
      function o(e) {
        return n.createElement("svg", e, [
          n.createElement("circle", { cx: "16", cy: "16", r: "15", stroke: "#0E6476", strokeOpacity: "0.2", strokeWidth: "2", key: 0 }),
          n.createElement("path", {
            d: "M1 16C1 14.0302 1.38799 12.0796 2.14181 10.2597C2.89563 8.43987 4.00052 6.78628 5.3934 5.3934C6.78628 4.00052 8.43986 2.89563 10.2597 2.14181C12.0796 1.38799 14.0302 1 16 1C17.9698 1 19.9204 1.38799 21.7403 2.14181C23.5601 2.89563 25.2137 4.00052 26.6066 5.3934C27.9995 6.78628 29.1044 8.43986 29.8582 10.2597C30.612 12.0796 31 14.0302 31 16",
            stroke: "#0E6476",
            strokeWidth: "2",
            key: 1
          }),
          n.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 0 0",
            to: "360 0 0",
            dur: "0.5s",
            repeatCount: "indefinite",
            key: 2
          })
        ]);
      }
      (o.defaultProps = { width: "16", height: "16", viewBox: "0 0 32 32", fill: "none" }), (e.exports = o), (o.default = o);
    },
    3358: (e) => {
      (() => {
        "use strict";
        var a = {
            d: (e, t) => {
              for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            },
            o: (e, a) => Object.prototype.hasOwnProperty.call(e, a),
            r: (e) => {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }
          },
          t = {};
        a.r(t), a.d(t, { getLanguage: () => s });
        const n = new Set(["en", "fr", "es", "ja", "de", "pt", "it", "ko", "zh", "nl", "sv"]),
          o = "en";
        function i(e) {
          return e.substr(0, 2);
        }
        function r(e) {
          const a = i(e);
          return n.has(a);
        }
        function s() {
          const e = [navigator.language].concat(navigator.languages).find(r);
          return e ? (e.includes("-") ? i(e) : e) : o;
        }
        e.exports = t;
      })();
    },
    5495: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Abbrechen",
          closeWindow: "Schließen",
          confirm: "Autovervollständigen",
          title: "Möchten Sie diese sicheren Daten von Dashlane autovervollständigen lassen?",
          warning: "Wenn Sie nach mehr als 5 Minuten wieder auf Ihre Daten zugreifen möchten, fordern wir Sie erneut zur Eingabe auf."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Letztes ungespeichertes Passwort",
          TR_SELFCORRECT_STEP1_ADDRESS: "Adresse",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Authentifizierung",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Kontoverbindung",
          TR_SELFCORRECT_STEP1_COMPANY: "Firma",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Kreditkarte",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "Dies nicht automatisch ausfüllen",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Führerschein",
          TR_SELFCORRECT_STEP1_EMAIL: "E-Mail",
          TR_SELFCORRECT_STEP1_FISCAL: "Steuernummer",
          TR_SELFCORRECT_STEP1_IDCARD: "Ausweis",
          TR_SELFCORRECT_STEP1_IDENTITY: "Identität",
          TR_SELFCORRECT_STEP1_LOGININFO: "Anmeldedaten",
          TR_SELFCORRECT_STEP1_NOTHING: "Nichts",
          TR_SELFCORRECT_STEP1_PASSPORT: "Reisepass",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Zahlungsdaten",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Persönliche Daten",
          TR_SELFCORRECT_STEP1_PHONE: "Telefonnummer",
          TR_SELFCORRECT_STEP1_SSN: "Sozialversicherungsnummer",
          TR_SELFCORRECT_STEP1_WEBSITE: "Website",
          TR_SELFCORRECT_STEP2_ADDRESS: "Adresse",
          TR_SELFCORRECT_STEP2_AGE: "Alter",
          TR_SELFCORRECT_STEP2_AL1: "Adresszeile 1",
          TR_SELFCORRECT_STEP2_AL2: "Adresszeile 2",
          TR_SELFCORRECT_STEP2_AL3: "Adresszeile 3",
          TR_SELFCORRECT_STEP2_APTNUM: "Wohnungsnummer",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Name des Kontoinhabers",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Bankkontonummer",
          TR_SELFCORRECT_STEP2_BANKNAME: "Bankname",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Hausnummer",
          TR_SELFCORRECT_STEP2_CITY: "Ort",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Firmenname",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Position im Unternehmen",
          TR_SELFCORRECT_STEP2_COUNTRY: "Land",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Länderkennung",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Ausstellende Bank",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Ablaufmonat und -jahr",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Ablaufmonat",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Ablaufjahr",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Kreditkartennummer",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Vollständiger Name, wie auf der Karte",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "Vorname, wie auf der Karte",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Nachname, wie auf der Karte",
          TR_SELFCORRECT_STEP2_DOB: "Geburtsdatum",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Lieferdatum",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Geburtsdatum",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Gültig bis",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "Vorname",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Geschlecht",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Nachname",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Vollständiger Name",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Führerscheinnummer",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "Ausstellungsstaat",
          TR_SELFCORRECT_STEP2_EMAIL: "E-Mail",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "E-Mail-Adresse",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "Vorname",
          TR_SELFCORRECT_STEP2_FLOOR: "Stockwerk",
          TR_SELFCORRECT_STEP2_FULLNAME: "Vollständiger Name",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Lieferdatum",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Geburtsdatum",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Gültig bis",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "Vorname",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Geschlecht",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Vollständiger Name",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Nachname",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Staatsangehörigkeit",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "Personalausweisnummer",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Funktion",
          TR_SELFCORRECT_STEP2_LASTNAME: "Nachname",
          TR_SELFCORRECT_STEP2_LOGIN: "Benutzername",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Alternativer Benutzername",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Mädchenname",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "Zweiter Vorname",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Anfangsbuchstabe des zweiten Vornamens",
          TR_SELFCORRECT_STEP2_NOTHING: "Nichts",
          TR_SELFCORRECT_STEP2_OTP: "2FA-Token",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Lieferdatum",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Geburtsdatum",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Gültig bis",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Geschlecht",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "Vorname",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Nachname",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Vollständiger Name",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Lieferadresse",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Staatsangehörigkeit",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Reisepassnummer",
          TR_SELFCORRECT_STEP2_PASSWORD: "Passwort",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Passwort bestätigen",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Aktuelles Passwort",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "Neues Passwort",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Ländervorwahl",
          TR_SELFCORRECT_STEP2_PHONENUM: "Telefonnummer",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Durchwahl",
          TR_SELFCORRECT_STEP2_POB: "Geburtsort",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Bankleitzahl",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Bankleitzahl",
          TR_SELFCORRECT_STEP2_SSN: "Sozialversicherungsnummer",
          TR_SELFCORRECT_STEP2_STATE: "Bundesland (z. B. Nordrhein-Westfalen)",
          TR_SELFCORRECT_STEP2_STATECODE: "Ländercode (z. B. NW)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Straßenname",
          TR_SELFCORRECT_STEP2_STREETNUM: "Hausnummer",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Straßentyp (z. B. Allee)",
          TR_SELFCORRECT_STEP2_TAXNUM: "Steuernummer",
          TR_SELFCORRECT_STEP2_WEBSITE: "Website",
          TR_SELFCORRECT_STEP2_ZIP: "PLZ",
          aboutToExpire: "LÄUFT BALD AB",
          addNew_ADDRESS: "Neue Anschrift hinzufügen",
          addNew_AUTHENTICATION: "Authentifizierungsmethode",
          addNew_BANK_STATEMENT: "Neues Bankkonto hinzufügen",
          addNew_COMPANY: "Ein neues Unternehmen hinzufügen",
          addNew_DRIVER_LICENCE: "Einen neuen Führerschein hinzufügen",
          addNew_EMAIL: "Eine neue E-Mail-Adresse hinzufügen",
          addNew_FISCAL: "Neue Steuer-ID hinzufügen",
          addNew_IDENTITY: "Einen neuen Namen hinzufügen",
          addNew_ID_CARD: "Eine neue ID hinzufügen",
          addNew_NOTHING: "Nichts",
          addNew_PASSPORT: "Einen neuen Reisepass hinzufügen",
          addNew_PAYMENT_MEAN_CREDITCARD: "Eine neue Kreditkarte hinzufügen",
          addNew_PAYMENT_MEAN_PAYPAL: "Ein neues PayPal-Konto hinzufügen",
          addNew_PHONE: "Eine neue Telefonnummer hinzufügen",
          addNew_SOCIAL_SECURITY: "Eine neue Sozialversicherungsnummer hinzufügen",
          addNew_WEBSITE: "Eine neue Website hinzufügen",
          addObjectHeader: "Diese Informationen auf allen Websites automatisch eintragen.",
          allItemsButton: "Alle Elemente",
          buyDashlane: "Dashlane kaufen",
          closeWindow: "Schließen",
          connectAs: "Anmelden als",
          contactEmailGeneration:
            "Sie wollen ein starkes Passwort für die E-Mail-Adresse erzeugen, die mit Ihrem Dashlane-Konto verknüpft ist.",
          defaultSpace: "Privat",
          emailBusiness: "Business",
          emailPersonal: "Privat",
          emptyStateWebcard_noLogin: "Kein Login für {domain} gespeichert.",
          emptyStateWebcard_noOtherInfo: "Sie haben diese Daten noch nicht gespeichert.",
          emptyStateWebcard_noPassword: "Noch kein Passwort für diese Website gespeichert.",
          existingPassword: "Sie haben für diese Website bereits ein Passwort gespeichert. Möchten Sie wirklich ein neues erzeugen?",
          expired: "ABGELAUFEN",
          fixAutofillHeader: "Was sollte hier stehen?",
          fixAutofillIssue: "Jetzt korrigieren",
          generatePasswordButtons_closeSettings: "Passworteinstellungen schließen",
          generatePasswordButtons_hidePassword: "Passwort ausblenden",
          generatePasswordButtons_openSettings: "Passworteinstellungen öffnen",
          generatePasswordButtons_reshuffle: "Neues Passwort erzeugen",
          generatePasswordButtons_showPassword: "Passwort anzeigen",
          generatePasswordDropdownTitle: "Passwortgenerator",
          generatePasswordOption_digits: "Ziffern (z. B. 345)",
          generatePasswordOption_length: "Länge ({0})",
          generatePasswordOption_letters: "Buchstaben (z. B. Aa)",
          generatePasswordOption_similarCharacters: "Ähnliche Zeichen (z. B. 0O 1| 2Z)",
          generatePasswordOption_symbols: "Sonderzeichen (@&$!#?)",
          generatePasswordStrength_none: "Wird berechnet …",
          generatePasswordStrength_safelyUnguessable: "Das ist ein wirklich sicheres Passwort!",
          generatePasswordStrength_somewhatGuessable: "Das ist fast schon großartig.",
          generatePasswordStrength_tooGuessable: "Lassen Sie uns dieses Passwort sicherer machen.",
          generatePasswordStrength_veryGuessable: "Ein guter Anfang, aber es gibt noch Luft nach oben.",
          generatePasswordStrength_veryUnguessable: "Die bestmögliche Passwortstärke wurde erreicht!",
          generatePwd: "Ein starkes Passwort erzeugen",
          hasAutofillIssue: "Gibt es ein Problem beim Autovervollständigen?",
          incomplete: "UNVOLLSTÄNDIG",
          infoboxDescriptionB2BTrialDiscontinued: "Sie können keine neuen Passwörter generieren",
          infoboxTitleB2BTrialDiscontinued: "Ihr Probeabo ist abgelaufen und Ihr Konto wurde eingefroren.",
          itemsCountLabel: { one: "{count} Element", other: "{count} Elemente" },
          mavReactivationBtn: "Jetzt anmelden",
          mavReactivationCreateBtn: "Konto erstellen",
          mavReactivationDismiss: "Fordern Sie diese Sitzung nicht erneut an",
          mavReactivationOr: "oder",
          mavReactivationTitle: "Melden Sie sich bei Dashlane an, um Formulare mit einem Klick auszufüllen.",
          openTheExtenion: "Erweiterung öffnen",
          openTheExtension: "Erweiterung öffnen",
          optionsAutofillSomethingElse: "Sonstiges automatisch ausfüllen",
          optionsClose: "Für diesen Besuch pausieren",
          optionsCloseMenu: "Weitere Optionen schließen",
          optionsDontAutofill: "Pausieren, bis ich es wieder aktiviere",
          optionsFillSomethingElse: "Sonstiges autovervollständigen",
          optionsNeverSuggest: "Pausieren, bis ich es wieder aktiviere",
          optionsOpenMenu: "Weitere Optionen öffnen",
          optionsTitle: "Dieses Feld automatisch ausfüllen",
          optionsTooltip: "Dieses Feld automatisch ausfüllen",
          password: "Geben Sie Ihr Passwort ein",
          passwordHistoryDomain: "Diese Website",
          passwordHistorySee: "Passwortverlauf anzeigen",
          passwordHistoryTitle: "Passwort",
          passwordLimitSubtitle: "Upgrade auf Premium",
          passwordLimitTitle: "Sie haben Ihr Passwortlimit für den Free-Tarif erreicht. Dieses Passwort wird nicht gespeichert.",
          passwordLimitWarningButton: "Mit einem Upgrade auf Premium profitieren Sie von unbegrenztem Speicherplatz",
          passwordLimitWarningDesc:
            "Mit Ihrem kostenlosen Dashlane-Konto können Sie keine weiteren Logins speichern. Sie haben die maximale Speicherkapazität des Free-Tarifs erreicht und können ab jetzt nur noch bestehende Logins bearbeiten.",
          passwordLimitWarningLabel: "Warnung:",
          passwordNearLimitTitle: { one: "Ein Passwort übrig in Ihrem Free-Tarif", other: "{count} Passwörter übrig in Ihrem Free-Tarif" },
          phoneAny: "Sonstige",
          phoneFax: "Fax",
          phoneLandline: "Festnetz",
          phoneMobile: "Handy",
          phoneWorkFax: "Fax Arbeit",
          phoneWorkLandline: "Arbeit",
          phoneWorkMobile: "Handy Arbeit",
          reactivationHeader: "Aktivieren Sie Dashlane, um Formulare mit einem Klick auszufüllen.",
          roleButton: "Schaltfläche",
          sca_feedback: "Für diese Website wurden noch keine Passwörter gespeichert.",
          sca_feedback_add: "Ein Passwort hinzufügen",
          search: "Suche",
          searchInputPlaceholder: "Durchsuchen Sie Ihre ELemente …",
          seePasswordLink: "Passwort anzeigen",
          shush_feedback: "Wir werden dies nicht automatisch vervollständigen.",
          shush_feedback_learnMore: "Mehr erfahren",
          strongPassword: "Das ist ein wirklich sicheres Passwort!",
          suggestedButton: "Vorgeschlagen",
          topOfWalletSeparator: "Ihre anderen Zahlungsmethoden",
          types_ADDRESS: "Adresse",
          types_AUTHENTICATION: "Anmelden als",
          types_BANK_STATEMENT: "Bankkonto",
          types_COMPANY: "Unternehmen",
          types_DRIVER_LICENCE: "Führerschein",
          types_EMAIL: "E-Mail",
          types_FISCAL: "Steuernummer",
          types_GENERATED_PASSWORD: "Anmelden als",
          types_IDENTITY: "Identität",
          types_ID_CARD: "Ausweis",
          types_PASSPORT: "Reisepass",
          types_PASSWORD: "Passwort",
          types_PAYMENT_MEAN_CREDITCARD: "Kreditkarte",
          types_PHONE: "Telefonnummer",
          types_SOCIAL_SECURITY: "Sozialversicherungskarte",
          types_WEBSITE: "Website",
          upgradeToPremium: "Upgrade auf Premium",
          usePassword: "Generiertes Passwort verwenden",
          v5_addNew_ADDRESS: "Neue Adresse hinzufügen",
          v5_addNew_AUTHENTICATION: "Neuen Login hinzufügen",
          v5_addNew_BANK_STATEMENT: "Neues Bankkonto hinzufügen",
          v5_addNew_COMPANY: "Neue Firma hinzufügen",
          v5_addNew_DRIVER_LICENCE: "Neuen Führerschein hinzufügen",
          v5_addNew_EMAIL: "Neue Email-Adresse hinzufügen",
          v5_addNew_FISCAL: "Eine neue Steuernummer hinzufügen",
          v5_addNew_IDENTITY: "Neue persönliche Angaben hinzufügen",
          v5_addNew_ID_CARD: "Einen neuen Ausweis hinzufügen",
          v5_addNew_PASSPORT: "Neuen Reisepass hinzufügen",
          v5_addNew_PASSWORD: "Ein neues Passwort hinzufügen",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Neue Kreditkarte hinzufügen",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Ein neues PayPal-Konto hinzufügen",
          v5_addNew_PHONE: "Neue Telefonnummer hinzufügen",
          v5_addNew_SOCIAL_SECURITY: "Neue Sozialversicherungsnummer hinzufügen",
          v5_addNew_WEBSITE: "Eine neue Website hinzufügen",
          v5_addObjectHeader: "Diese Informationen auf allen Websites automatisch eintragen",
          v5_connectAs: "Anmelden als",
          veryWeakPassword: "Das von Ihnen eingegebene Passwort ist sehr schwach",
          weakPassword: "Lassen Sie uns dieses Passwort sicherer machen.",
          webAuthnReactivationDontAskAgain: "Fordern Sie diese Sitzung nicht erneut an",
          webAuthnReactivationErrorMessage: "Können Sie es noch einmal versuchen?",
          webAuthnReactivationFallbackToMasterPassword: "Master-Passwort verwenden",
          webAuthnReactivationHeader: "Entsperren Sie Dashlane, um sich anzumelden",
          webAuthnReactivationLoginButton: "Mit Biometriefunktionen entsperren",
          webAuthnReactivationLoginButtonError: "Biometrische Authentifizierung erneut versuchen",
          webauthnConditionalUINotWithDashlaneButton: "Anderen Passkey verwenden",
          websiteUnsecure: "Diese Website ist nicht sicher. Informationen, die Sie hier eingeben, könnten gefährdet sein.",
          websiteUnsecureIframe:
            "Vergewissern Sie sich, dass Sie dieser Website vertrauen, da dieses Formular von einer anderen Domain kommen könnte."
        },
        "autologin-selection": {
          autologinHeader: "WÄHLEN SIE DAS KONTO, MIT DEM SIE SICH ANMELDEN WOLLEN:",
          autologinLoggingIn: "DASHLANE MELDET SIE AUTOMATISCH AN",
          clickToDismiss: "Erneut klicken, um das auszublenden",
          closeWindow: "Schließen",
          connectAs: "Anmelden als",
          defaultSpace: "Privat",
          header: "Wählen Sie aus, mit welchem Konto Sie sich anmelden möchten",
          headerInner: "Konto",
          openTheExtenion: "Erweiterung öffnen",
          openTheExtension: "Erweiterung öffnen",
          password: "Passwort",
          v5_autologinLoggingIn: "Dashlane meldet Sie automatisch an"
        },
        "data-capture": {
          cancel: "Abbrechen",
          closeWindow: "Schließen",
          creditCardDetails: "Kreditkartendaten",
          enterLogin: "Login eingeben",
          enterMasterPassword: "Master-Passwort",
          header: "Speichern Sie diese Information in Dashlane, um sie nie wieder online eingeben zu müssen.",
          headerLoggedout: "Melden Sie sich bei Dashlane an, um diese Information zu speichern.",
          login: "Anmelden",
          neverAgain: "Mich nie wieder fragen",
          neverForThisWebsite: "Nie für diese Seite",
          openDashlane: "Dashlane öffnen",
          save: "Speichern",
          types_ADDRESS: "Adresse",
          types_COMPANY: "Unternehmen",
          types_EMAIL: "E-Mail-Adresse",
          types_IDENTITY: "Name",
          types_PAYMENT_MEAN_CREDITCARD: "Kreditkarte",
          types_PHONE: "Telefonnummer",
          types_WEBSITE: "Website",
          wrongLogin: "Falscher Login",
          wrongPassword: "Falsches Passwort"
        },
        "feedback-notification": {
          editButton: "Bearbeiten",
          loginCreated: "Neues Login erstellt.",
          loginUpdated: "Login aktualisiert.",
          undoButton: "Widerrufen"
        },
        "follow-up-notification": {
          accountHolderLabel: "Kontoinhaber",
          bicLabel: "BIC-/SWIFT-Code",
          cardNumberLabel: "Kartennummer",
          copiedTooltip: "Kopiert",
          copyTooltip: "Kopieren",
          emailLabel: "E-Mail",
          footerInformation:
            "Sie können die Pop-up-Fenster zum Kopieren und Einfügen in Ihren Einstellungen für das Autovervollständigen deaktivieren.",
          headerTitle: "Elementdetails kopieren und einfügen",
          ibanLabel: "IBAN",
          loginLabel: "Benutzername",
          otpLabel: "2FA-Token",
          passwordLabel: "Passwort",
          secondaryLoginLabel: "Alternativer Benutzername",
          securityCodeLabel: "Sicherheitscode",
          usernameLabel: "Benutzername"
        },
        "generic-popup": {
          click: "Jetzt ändern!",
          closeWindow: "Schließen",
          inputPlaceholder: "Geben Sie Ihren Namen ein",
          subtitle: "Ihr Geschlecht ist",
          title: "Hallo"
        },
        "limited-capability": {
          cancelPasswordLimit: "Nicht jetzt",
          closeWindow: "Schließen",
          contentEssentialsPasswordLimit:
            "Führen Sie ein Upgrade auf unseren Essentials-Tarif durch, um unbegrenzt viele Passwörter auf zwei Geräten zu synchronisieren.",
          contentPasswordLimit:
            "Mit Ihrem kostenlosen Dashlane-Konto können Sie keine weiteren Logins speichern. Um von unbegrenztem Speicherplatz zu profitieren, führen Sie ein Upgrade auf den Premium-Tarif durch.",
          contentPremiumPasswordLimit:
            "Führen Sie ein Upgrade auf unseren Premium-Tarif durch, um unbegrenzt viele Logins auf unbegrenzt vielen Geräten zu synchronisieren.",
          enterMasterPassword: "**************",
          goPremium: "Premium holen",
          headerPasswordLimit: "Speicherlimit erreicht",
          hide: "Ausblenden",
          passwordLabel: "Passwort",
          show: "Anzeigen",
          upgradeToEssentials: "Upgrade auf Essentials durchführen",
          upgradeToPremium: "Upgrade auf Premium"
        },
        "master-password": {
          alwaysAuthorize: "Immer autorisieren",
          cancel: "Abbrechen",
          closeWindow: "Schließen",
          emailHelpText: "Durch die Anzeige Ihrer E-Mail-Adresse wird bestätigt, dass Sie sich tatsächlich bei Dashlane anmelden.",
          enterMasterPassword: "Master-Passwort",
          hide: "Ausblenden",
          loggedIn: "Sie sind als <span>{0}</span> angemeldet",
          neverAskAgainAnyCredentialCheckbox: "Nie um die Eingabe des Master-Passworts bitten, um Passwörter zu entsperren",
          neverAskAgainAnyCredentialInfobox:
            "Durch das Markieren dieses Kästchens wird „Master-Passwort erfordern“ für alle Passwörter deaktiviert.",
          neverAskAgainCredentialCheckbox: "Nie um die Eingabe des Master-Passworts bitten, um dieses sichere Element zu entsperren",
          ok: "OK",
          show: "Anzeigen",
          title: "Sichere Elemente 5 Minuten lang entsperren",
          unlock: "Entsperren",
          unlockContent:
            "Wenn Sie nach 5 Minuten weiterhin Zugang zu Ihren sicheren Daten benötigen, müssen Sie Ihr Master-Passwort erneut eingeben.",
          wrongPassword: "Falsches Passwort"
        },
        notification: {
          cancel: "Abbrechen",
          closeWindow: "Schließen",
          ok: "OK",
          webOnboardingAfterCancelCancel: "Erneut versuchen",
          webOnboardingAfterCancelConfirm: "Zurück zur App",
          webOnboardingAfterCancelTitle:
            "Sie können es nochmals mit dieser Webseite versuchen oder stattdessen eine andere Seite verwenden.",
          webOnboardingAfterLoginCancel: "Schließen",
          webOnboardingAfterLoginConfirm: "Zurück zu Dashlane",
          webOnboardingAfterLoginTitle: "Herzlichen Glückwunsch, Sie sind jetzt Dashlane-Profi!",
          webOnboardingAfterSaveConfirm: "In Dashlane anzeigen",
          webOnboardingAfterSaveTitle: "Sie haben Ihren ersten Zugangsdatensatz gespeichert!"
        },
        "phishing-prevention": {
          cancelButton: "Nicht vertrauen",
          currentUrlLabel: "Aktuelle URL",
          headerTitle: "Stellen Sie sicher, dass Sie dieser Website vertrauen, bevor Sie Ihre Login-Daten einfügen",
          okButton: "Vertrauen und Einfügen",
          phishingCTALink: "Erfahren Sie mehr über Phishing",
          trustedUrlLabel: "Vertrauenswürdige URL"
        },
        "purchase-receipt": {
          addRow: "Element hinzufügen",
          cancel: "Abbrechen",
          closeWindow: "Schließen",
          collapse: "Weniger",
          disable: "Nicht erneut fragen",
          expand: "Mehr anzeigen",
          header: "Möchten Sie Ihren <strong>{0}</strong> -Beleg in Dashlane speichern?",
          header_nohtml: "Möchten Sie Ihren {0}-Beleg in Dashlane speichern?",
          save: "Speichern",
          showLess: "Weniger",
          showMore: "Mehr anzeigen",
          total: "GESAMT",
          untitledItem: "Unbenanntes Element",
          v5_header_nohtml: "Speichern Sie Ihren {0}-Beleg in Dashlane",
          v5_total: "Gesamtbetrag"
        },
        "save-password": {
          alwaysUseMasterPwd: "Vor der Verwendung Master-Passwort verlangen",
          cancel: "Abbrechen",
          closeWindow: "Schließen",
          collapse: "Weniger anzeigen",
          contentPremiumPasswordLimit:
            "Führen Sie ein Upgrade auf unseren Premium-Tarif durch, um unbegrenzt viele Logins auf unbegrenzt vielen Geräten zu synchronisieren.",
          createNewLogin: "Neues Login erstellen",
          defaultSpace: "Privat",
          enterLogin: "Wählen Sie Ihren Dashlane-Login ...",
          enterMasterPassword: "Master-Passwort",
          expand: "Mehr anzeigen",
          footerBuyDashlane: "Dashlane kaufen",
          footerDismiss: "Ablehnen",
          header: "Möchten Sie dieses Konto in Dashlane speichern?",
          headerLoggedout: "Melden Sie sich bei Dashlane an, um Ihr <strong>{0}</strong> -Passwort zu speichern.",
          headerLoggedout_nohtml: "Melden Sie sich bei Dashlane an, um Ihr {0}-Passwort zu speichern.",
          headerPasswordLimit: "Speicherlimit erreicht",
          headerReplace: "Möchten Sie dieses Passwort in Dashlane ersetzen?",
          headerReplace_nohtml: "Möchten Sie dieses Passwort in Dashlane ersetzen?",
          headerTitleB2BTrialDiscontinued: "Ihr -Konto ist eingefroren",
          header_nohtml: "Diesen Login in Dashlane speichern?",
          infoboxDescriptionB2BTrialDiscontinued: "Ihr Passwort wird nicht gespeichert.",
          infoboxTitleB2BTrialDiscontinued: "Ihr Probeabo ist abgelaufen und Ihr Konto wurde eingefroren.",
          lastUsedItem: "Zuletzt verwendet",
          login: "Anmelden",
          loginFieldLabel: "Benutzername",
          moreOptions: "Weitere Optionen",
          neverAgain: "Mich nie wieder fragen",
          neverForThisWebsite: "Nie für diese Seite",
          openDashlane: "Dashlane öffnen",
          passwordFieldLabel: "PASSWORT",
          passwordHideButton: "Ausblenden",
          passwordLimitReachedSubtitle: "Ihr Passwort wird nicht gespeichert.",
          passwordLimitReachedTitle: "Sie haben Ihr Passwortlimit für den Free-Tarif erreicht",
          passwordLimitReachedTitleReplace:
            "Sie haben die Höchstzahl an Passwörtern erreicht, die Sie in Ihrem Free-Tarif speichern können.",
          passwordNearLimitTitle: { one: "Ein Passwort übrig in Ihrem Free-Tarif", other: "{count} Passwörter übrig in Ihrem Free-Tarif" },
          passwordShowButton: "Anzeigen",
          replace: "Ersetzen",
          save: "Speichern",
          saveAsNew: "Als neu speichern",
          saveAsNewLimited: "Als neu speichern",
          saveAsNewLimitedPlaceholder: "Speicherlimit erreicht",
          saveLimited: "Premium holen",
          selectEmailOrUsernamePlaceholder: "E-Mail-Adresse / Benutzernamen eingeben",
          selectEmailPlaceholder: "Eine E-Mail-Adresse eingeben",
          updatePasswordOrCreateNewLogin: "Aktualisieren Sie ein bestehendes Login mit diesem Passwort oder erstellen Sie ein neues Login.",
          updatePasswordOrCreateNewLoginLimit: "Vorhandenen Login ersetzen",
          upgradeToPremium: "Upgrade auf Premium",
          upsellButton: "Premium holen für unbegrenzte Passwortspeicherung",
          useOnlyOnSubdomain: "Nur auf dieser Subdomain verwenden",
          wrongLogin: "Falscher Login",
          wrongPassword: "Falsches Passwort"
        },
        survey: { extension971: "Feedback zur Verbesserung von Dashlane" },
        "user-verification": {
          cancel: "Abbrechen",
          enterMasterPassword: "Master-Passwort",
          hide: "Ausblenden",
          loggedIn: "Sie sind als <span>{0}</span> angemeldet",
          neverAskAgainAnyCredentialCheckbox: "Nie um die Eingabe des Master-Passworts bitten, um Passwörter zu entsperren",
          neverAskAgainAnyCredentialInfobox:
            "Durch das Markieren dieses Kästchens wird „Master-Passwort erfordern“ für alle Passwörter deaktiviert.",
          neverAskAgainCredentialCheckbox: "Nie um die Eingabe des Master-Passworts bitten, um dieses sichere Element zu entsperren",
          selectionPanelBiometric: "Biometriefunktionen",
          selectionPanelMasterPassword: "Master-Passwort",
          selectionPanelTitle: "Wählen Sie eine Methode zum Entsperren:",
          show: "Anzeigen",
          tryAgain: "Erneut versuchen",
          unknownError: "Ein unbekannter Fehler ist aufgetreten",
          unlock: "Entsperren",
          useAnotherMethod: "Eine andere Methode verwenden",
          webauthnGenericErrorDescription: "Bei der Sicherheitsverifizierung ist ein Fehler aufgetreten.",
          webauthnGenericErrorTitle: "Something went wrong",
          webauthnPanelTitle:
            "Verwenden Sie Biometriefunktionen, einen Sicherheitsschlüssel oder Ihren Geräte-PIN-Code, um Dashlane zu entsperren.",
          webcardTitle: "Sicherheitsverifizierung abschließen",
          wrongPassword: "Falsches Passwort"
        },
        "warn-generated-password": {
          cancel: "Abbrechen",
          closeWindow: "Schließen",
          contentWarnGeneratedPassword:
            "Dashlane kontaktiert Sie über dieses E-Mail-Konto, um wichtige Aktionen wie die Überprüfung Ihrer Identität durchzuführen. Wir empfehlen Ihnen, ein Passwort zu erstellen, das sicher, aber für Sie leicht zu merken ist.",
          continue: "Fortfahren",
          header: "Sind Sie sicher, dass Sie sich später an dieses Passwort erinnern können?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Abbrechen",
          create_confirmButton: "Bestätigen",
          create_content: "Mit Dashlane einen neuen Passkey für Benutzer {0} auf Website {1} erstellen?",
          create_headerTitle: "Neuen Passkey erstellen",
          create_withoutDashlaneButton: "Schlüssel verwenden, der nicht von Dashlane ist"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Abbrechen",
          confirmButton: "Bestätigen",
          content: "Möchten Sie sich bei {1} als {0} anmelden?",
          get_withoutDashlaneButton: "Schlüssel verwenden, der nicht von Dashlane ist",
          headerTitle: "Mit Dashlane anmelden"
        },
        "webauthn-passkey-selection": {
          headerTitle: "Wählen Sie aus, mit welchem Konto Sie sich anmelden möchten",
          selection_withoutDashlaneButton: "Anderen Passkey verwenden"
        }
      };
    },
    5143: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Cancel",
          closeWindow: "Close",
          confirm: "Autofill",
          title: "Do you want Dashlane to autofill this secure info?",
          warning: "We’ll prompt you again if you need to access your data after 5 minutes."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Last unsaved password",
          TR_SELFCORRECT_STEP1_ADDRESS: "Address",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Authentication",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Bank details",
          TR_SELFCORRECT_STEP1_COMPANY: "Company",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Credit card",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "Don’t autofill on this field",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Driver's license",
          TR_SELFCORRECT_STEP1_EMAIL: "Email",
          TR_SELFCORRECT_STEP1_FISCAL: "Tax number",
          TR_SELFCORRECT_STEP1_IDCARD: "ID card",
          TR_SELFCORRECT_STEP1_IDENTITY: "Identity",
          TR_SELFCORRECT_STEP1_LOGININFO: "Login info",
          TR_SELFCORRECT_STEP1_NOTHING: "Nothing",
          TR_SELFCORRECT_STEP1_PASSPORT: "Passport",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Payment info",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Personal info",
          TR_SELFCORRECT_STEP1_PHONE: "Phone number",
          TR_SELFCORRECT_STEP1_SSN: "Social security number",
          TR_SELFCORRECT_STEP1_WEBSITE: "Website",
          TR_SELFCORRECT_STEP2_ADDRESS: "Address",
          TR_SELFCORRECT_STEP2_AGE: "Age",
          TR_SELFCORRECT_STEP2_AL1: "Address line 1",
          TR_SELFCORRECT_STEP2_AL2: "Address line 2",
          TR_SELFCORRECT_STEP2_AL3: "Address line 3",
          TR_SELFCORRECT_STEP2_APTNUM: "Apartment number",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Account holder name",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Bank account number",
          TR_SELFCORRECT_STEP2_BANKNAME: "Bank name",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Building number",
          TR_SELFCORRECT_STEP2_CITY: "City",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Company name",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Company position",
          TR_SELFCORRECT_STEP2_COUNTRY: "Country",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Country code",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Issuing bank",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Expiration month and year",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Expiration month",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Expiration year",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Credit card number",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Full name on card",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "First name on card",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Last name on card",
          TR_SELFCORRECT_STEP2_DOB: "Date of birth",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Delivery date",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Date of birth",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Expiration date",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "First name",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Gender",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Last name",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Full name",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Driver's license number",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "Issuing state",
          TR_SELFCORRECT_STEP2_EMAIL: "Email",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "Email",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "First name",
          TR_SELFCORRECT_STEP2_FLOOR: "Floor",
          TR_SELFCORRECT_STEP2_FULLNAME: "Full name",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Delivery date",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Date of birth",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Expiration date",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "First name",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Gender",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Full name",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Last name",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Nationality",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "ID card number",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Position",
          TR_SELFCORRECT_STEP2_LASTNAME: "Last name",
          TR_SELFCORRECT_STEP2_LOGIN: "Username",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Alternate username",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Maiden name",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "Middle name",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Middle name initial",
          TR_SELFCORRECT_STEP2_NOTHING: "Nothing",
          TR_SELFCORRECT_STEP2_OTP: "2FA token",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Delivery date",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Date of birth",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Expiration date",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Gender",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "First name",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Last name",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Full name",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Delivery place",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Nationality",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Passport number",
          TR_SELFCORRECT_STEP2_PASSWORD: "Password",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Confirm password",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Current password",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "New password",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Phone country code",
          TR_SELFCORRECT_STEP2_PHONENUM: "Phone number",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Phone number extension",
          TR_SELFCORRECT_STEP2_POB: "Place of birth",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Routing number",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Sort code",
          TR_SELFCORRECT_STEP2_SSN: "Social security number",
          TR_SELFCORRECT_STEP2_STATE: "State (e.g. Florida)",
          TR_SELFCORRECT_STEP2_STATECODE: "State code (e.g. FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Street name",
          TR_SELFCORRECT_STEP2_STREETNUM: "House number",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Street type (e.g. Avenue)",
          TR_SELFCORRECT_STEP2_TAXNUM: "Tax number",
          TR_SELFCORRECT_STEP2_WEBSITE: "Website",
          TR_SELFCORRECT_STEP2_ZIP: "Zip code",
          aboutToExpire: "EXPIRES SOON",
          addNew_ADDRESS: "Add a new address",
          addNew_AUTHENTICATION: "Authentication method",
          addNew_BANK_STATEMENT: "Add a new bank account",
          addNew_COMPANY: "Add a new company",
          addNew_DRIVER_LICENCE: "Add a new driver's licence",
          addNew_EMAIL: "Add a new email address",
          addNew_FISCAL: "Add a new tax ID",
          addNew_IDENTITY: "Add a new name",
          addNew_ID_CARD: "Add a new ID",
          addNew_NOTHING: "Nothing",
          addNew_PASSPORT: "Add a new passport",
          addNew_PAYMENT_MEAN_CREDITCARD: "Add a new credit card",
          addNew_PAYMENT_MEAN_PAYPAL: "Add a new PayPal account",
          addNew_PHONE: "Add a new phone number",
          addNew_SOCIAL_SECURITY: "Add a new social security number",
          addNew_WEBSITE: "Add a new website",
          addObjectHeader: "Autofill this info on any website.",
          allItemsButton: "All items",
          buyDashlane: "Buy Dashlane",
          closeWindow: "Close",
          connectAs: "Log in as",
          contactEmailGeneration: "You're about to generate a strong password for the email address associated with your Dashlane account.",
          defaultSpace: "Personal",
          emailBusiness: "Business",
          emailPersonal: "Personal",
          emptyStateWebcard_noLogin: "No login saved for {domain}.",
          emptyStateWebcard_noOtherInfo: "You don't have this info saved yet.",
          emptyStateWebcard_noPassword: "No password saved for this website yet.",
          existingPassword: "You already have a password saved for this website. Are you sure you want to generate a new one?",
          expired: "EXPIRED",
          fixAutofillHeader: "What should be here?",
          fixAutofillIssue: "Fix it now",
          generatePasswordButtons_closeSettings: "Close password settings",
          generatePasswordButtons_hidePassword: "Hide password",
          generatePasswordButtons_openSettings: "Open password settings",
          generatePasswordButtons_reshuffle: "Generate new password",
          generatePasswordButtons_showPassword: "Show password",
          generatePasswordDropdownTitle: "Password Generator",
          generatePasswordOption_digits: "Digits (e.g. 345)",
          generatePasswordOption_length: "Length ({0})",
          generatePasswordOption_letters: "Letters (e.g. Aa)",
          generatePasswordOption_similarCharacters: "Similar characters (e.g. 0O 1| 2Z)",
          generatePasswordOption_symbols: "Symbols (@&$!#?)",
          generatePasswordStrength_none: "⁣⁢Calculating...",
          generatePasswordStrength_safelyUnguessable: "⁣⁢Now that's a strong password!",
          generatePasswordStrength_somewhatGuessable: "⁣⁢It's just short of great.",
          generatePasswordStrength_tooGuessable: "Let's make this password stronger.",
          generatePasswordStrength_veryGuessable: "⁣⁢Good start, but we can make it stronger.",
          generatePasswordStrength_veryUnguessable: "Ultimate password strength reached!",
          generatePwd: "Generate a strong password",
          hasAutofillIssue: "Experiencing an autofill issue?",
          incomplete: "INCOMPLETE",
          infoboxDescriptionB2BTrialDiscontinued: "You're not able to generate new passwords",
          infoboxTitleB2BTrialDiscontinued: "Your trial ended and your account is frozen",
          itemsCountLabel: { one: "{count} item", other: "{count} items" },
          mavReactivationBtn: "Log in now",
          mavReactivationCreateBtn: "Create an account",
          mavReactivationDismiss: "Don't ask again for this session",
          mavReactivationOr: "or",
          mavReactivationTitle: "Log in to Dashlane to fill forms in one click.",
          openTheExtenion: "Open the extension",
          openTheExtension: "Open the extension",
          optionsAutofillSomethingElse: "Autofill something else",
          optionsClose: "Pause for this visit",
          optionsCloseMenu: "Close more options",
          optionsDontAutofill: "Pause until I turn it back on",
          optionsFillSomethingElse: "Autofill something else",
          optionsNeverSuggest: "Pause until I turn it back on",
          optionsOpenMenu: "Open more options",
          optionsTitle: "Autofill on this field",
          optionsTooltip: "Autofill on this field",
          password: "Password",
          passwordHistoryDomain: "This website",
          passwordHistorySee: "See Password History",
          passwordHistoryTitle: "Password",
          passwordLimitSubtitle: "Upgrade to Premium",
          passwordLimitTitle: "You've reached your Free plan password limit. This password won't be saved.",
          passwordLimitWarningButton: "Upgrade to Premium for unlimited storage",
          passwordLimitWarningDesc:
            "You cannot store any more logins with your Dashlane Free account. You have reached the Free plan storage limit and can only modify existing logins.",
          passwordLimitWarningLabel: "Warning:",
          passwordNearLimitTitle: { one: "One password left in your Free plan", other: "{count} passwords left in your Free plan" },
          phoneAny: "Other",
          phoneFax: "Fax",
          phoneLandline: "Home",
          phoneMobile: "Cell",
          phoneWorkFax: "Work fax",
          phoneWorkLandline: "Work",
          phoneWorkMobile: "Work cell",
          reactivationHeader: "Turn Dashlane on to fill forms in one click.",
          roleButton: "Button",
          sca_feedback: "No saved passwords for this website yet.",
          sca_feedback_add: "Add a password",
          search: "Search",
          searchInputPlaceholder: "Search your items...",
          seePasswordLink: "See password",
          shush_feedback: "We won’t autofill here.",
          shush_feedback_learnMore: "Learn more",
          strongPassword: "Now that's a strong password!",
          suggestedButton: "Suggested",
          topOfWalletSeparator: "Your other payment methods",
          types_ADDRESS: "Address",
          types_AUTHENTICATION: "Log in as",
          types_BANK_STATEMENT: "Bank account",
          types_COMPANY: "Company",
          types_DRIVER_LICENCE: "Driver's license",
          types_EMAIL: "Email",
          types_FISCAL: "Tax number",
          types_GENERATED_PASSWORD: "Log in as",
          types_IDENTITY: "Identity",
          types_ID_CARD: "ID card",
          types_PASSPORT: "Passport",
          types_PASSWORD: "Password",
          types_PAYMENT_MEAN_CREDITCARD: "Credit card",
          types_PHONE: "Phone number",
          types_SOCIAL_SECURITY: "Social security card",
          types_WEBSITE: "Website",
          upgradeToPremium: "Upgrade to Premium",
          usePassword: "Use generated password",
          v5_addNew_ADDRESS: "Add a new address",
          v5_addNew_AUTHENTICATION: "Add a new login",
          v5_addNew_BANK_STATEMENT: "Add a new bank account",
          v5_addNew_COMPANY: "Add a new company",
          v5_addNew_DRIVER_LICENCE: "Add a new driver's license",
          v5_addNew_EMAIL: "Add a new email address",
          v5_addNew_FISCAL: "Add a new tax number",
          v5_addNew_IDENTITY: "Add new personal info",
          v5_addNew_ID_CARD: "Add a new ID card",
          v5_addNew_PASSPORT: "Add a new passport",
          v5_addNew_PASSWORD: "Add a new password",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Add a new credit card",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Add a new PayPal account",
          v5_addNew_PHONE: "Add a new phone number",
          v5_addNew_SOCIAL_SECURITY: "Add a new social security number",
          v5_addNew_WEBSITE: "Add a new website",
          v5_addObjectHeader: "Autofill this info on any website.",
          v5_connectAs: "Log in as",
          veryWeakPassword: "The password you entered is very weak",
          weakPassword: "Let's make this password stronger.",
          webAuthnReactivationDontAskAgain: "Don't ask again for this session",
          webAuthnReactivationErrorMessage: "Can you try that again?",
          webAuthnReactivationFallbackToMasterPassword: "Use Master Password",
          webAuthnReactivationHeader: "Unlock Dashlane to log in",
          webAuthnReactivationLoginButton: "Unlock with biometrics",
          webAuthnReactivationLoginButtonError: "Try biometrics again",
          webauthnConditionalUINotWithDashlaneButton: "Use a different passkey",
          websiteUnsecure: "This website is not secure. Information you enter here could be compromised.",
          websiteUnsecureIframe: "Make sure you trust this site, as this form might be coming from a different domain."
        },
        "autologin-selection": {
          autologinHeader: "CHOOSE THE ACCOUNT YOU WOULD LIKE TO LOG IN WITH:",
          autologinLoggingIn: "DASHLANE IS LOGGING YOU IN AUTOMATICALLY",
          clickToDismiss: "Click again to hide this",
          closeWindow: "Close",
          connectAs: "Log in as",
          defaultSpace: "Personal",
          header: "Choose the account you would like to log in with",
          headerInner: "Account",
          openTheExtenion: "Open the extension",
          openTheExtension: "Open the extension",
          password: "Password",
          v5_autologinLoggingIn: "Dashlane is logging you in automatically"
        },
        "data-capture": {
          cancel: "Cancel",
          closeWindow: "Close",
          creditCardDetails: "Credit card details",
          enterLogin: "Enter login",
          enterMasterPassword: "Master Password",
          header: "Save this info to Dashlane, so you never have to type it online again.",
          headerLoggedout: "Log in to Dashlane to save this info.",
          login: "Log in",
          neverAgain: "Never ask me again",
          neverForThisWebsite: "Never for this website",
          openDashlane: "Open Dashlane",
          save: "Save",
          types_ADDRESS: "Address",
          types_COMPANY: "Company",
          types_EMAIL: "Email",
          types_IDENTITY: "Name",
          types_PAYMENT_MEAN_CREDITCARD: "Credit card",
          types_PHONE: "Phone number",
          types_WEBSITE: "Website",
          wrongLogin: "Incorrect login",
          wrongPassword: "Incorrect password"
        },
        "feedback-notification": {
          editButton: "Edit",
          loginCreated: "New login created.",
          loginUpdated: "Login updated.",
          undoButton: "Undo"
        },
        "follow-up-notification": {
          accountHolderLabel: "Account holder",
          bicLabel: "BIC/SWIFT code",
          cardNumberLabel: "Card number",
          copiedTooltip: "Copied",
          copyTooltip: "Copy",
          emailLabel: "Email",
          footerInformation: "You can turn off copy and paste pop-ups in your Autofill settings.",
          headerTitle: "Copy and paste item details",
          ibanLabel: "IBAN",
          loginLabel: "Username",
          otpLabel: "2FA token",
          passwordLabel: "Password",
          secondaryLoginLabel: "Alternate username",
          securityCodeLabel: "Security Code",
          usernameLabel: "Username"
        },
        "generic-popup": {
          click: "Change it now!",
          closeWindow: "Close",
          inputPlaceholder: "Type your name",
          subtitle: "Your sex is",
          title: "Hello"
        },
        "limited-capability": {
          cancelPasswordLimit: "Not now",
          closeWindow: "Close",
          contentEssentialsPasswordLimit: "Upgrade to our Essentials plan to get unlimited passwords and sync across two devices.",
          contentPasswordLimit:
            "You cannot store any more logins with your Dashlane Free account. To get unlimited storage, upgrade to Premium.",
          contentPremiumPasswordLimit: "Upgrade to our Premium plan to get unlimited logins and sync across unlimited devices.",
          enterMasterPassword: "**************",
          goPremium: "Go Premium",
          headerPasswordLimit: "Storage limit reached",
          hide: "Hide",
          passwordLabel: "Password",
          show: "Show",
          upgradeToEssentials: "Upgrade to Essentials",
          upgradeToPremium: "Upgrade to Premium"
        },
        "master-password": {
          alwaysAuthorize: "Always authorize",
          cancel: "Cancel",
          closeWindow: "Close",
          emailHelpText: "Your email here confirms that you're logging in to Dashlane.",
          enterMasterPassword: "Master Password",
          hide: "Hide",
          loggedIn: "You're logged in as <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Never ask for Master Password to unlock passwords",
          neverAskAgainAnyCredentialInfobox: "Selecting this checkbox will turn off require Master Password for all passwords.",
          neverAskAgainCredentialCheckbox: "Never ask for Master Password to unlock this secure item",
          ok: "OK",
          show: "Show",
          title: "Unlock secure items for 5 minutes",
          unlock: "Unlock",
          unlockContent: "If you still need to access your secure data after 5 minutes, you’ll have to enter your Master Password again.",
          wrongPassword: "Incorrect password"
        },
        notification: {
          cancel: "Cancel",
          closeWindow: "Close",
          ok: "OK",
          webOnboardingAfterCancelCancel: "Try again",
          webOnboardingAfterCancelConfirm: "Back to app",
          webOnboardingAfterCancelTitle: "You can try this website again, or use another site instead.",
          webOnboardingAfterLoginCancel: "Close",
          webOnboardingAfterLoginConfirm: "Go back to Dashlane",
          webOnboardingAfterLoginTitle: "Congrats, you're a Dashlane pro!",
          webOnboardingAfterSaveConfirm: "See it in Dashlane",
          webOnboardingAfterSaveTitle: "You saved your first login!"
        },
        "phishing-prevention": {
          cancelButton: "Don't trust",
          currentUrlLabel: "Current URL",
          headerTitle: "Make sure you trust this website before pasting your login details",
          okButton: "Trust and paste",
          phishingCTALink: "Learn about phishing",
          trustedUrlLabel: "Trusted URL"
        },
        "purchase-receipt": {
          addRow: "Add item",
          cancel: "Cancel",
          closeWindow: "Close",
          collapse: "Less",
          disable: "Don't ask again",
          expand: "Show more",
          header: "Save your <strong>{0}</strong> receipt to Dashlane?",
          header_nohtml: "Save your {0} receipt to Dashlane?",
          save: "Save",
          showLess: "Less",
          showMore: "Show more",
          total: "TOTAL",
          untitledItem: "Untitled item",
          v5_header_nohtml: "Save your {0} receipt in Dashlane",
          v5_total: "Total"
        },
        "save-password": {
          alwaysUseMasterPwd: "Require Master Password before using",
          cancel: "Cancel",
          closeWindow: "Close",
          collapse: "Show less",
          contentPremiumPasswordLimit: "Upgrade to our Premium plan to get unlimited logins and sync across unlimited devices.",
          createNewLogin: "Create new login",
          defaultSpace: "Personal",
          enterLogin: "Choose your Dashlane login...",
          enterMasterPassword: "Master Password",
          expand: "Show more",
          footerBuyDashlane: "Buy Dashlane",
          footerDismiss: "Dismiss",
          header: "Save this account in Dashlane?",
          headerLoggedout: "Log in to Dashlane to save your <strong>{0}</strong> password.",
          headerLoggedout_nohtml: "Log in to Dashlane to save your {0} password.",
          headerPasswordLimit: "Storage limit reached",
          headerReplace: "Replace this password in Dashlane?",
          headerReplace_nohtml: "Replace this password in Dashlane?",
          headerTitleB2BTrialDiscontinued: "Your account is frozen",
          header_nohtml: "Save this login in Dashlane?",
          infoboxDescriptionB2BTrialDiscontinued: "Your password won't be saved.",
          infoboxTitleB2BTrialDiscontinued: "Your trial ended and your account is frozen",
          lastUsedItem: "Last used",
          login: "Log in",
          loginFieldLabel: "USERNAME",
          moreOptions: "More options",
          neverAgain: "Never ask me again",
          neverForThisWebsite: "Never for this website",
          openDashlane: "Open Dashlane",
          passwordFieldLabel: "PASSWORD",
          passwordHideButton: "Hide",
          passwordLimitReachedSubtitle: "Your password won't be saved.",
          passwordLimitReachedTitle: "You've reached your Free plan password limit",
          passwordLimitReachedTitleReplace: "You've reached the limit of passwords you can save in your Free plan",
          passwordNearLimitTitle: { one: "One password left in your Free plan", other: "{count} passwords left in your Free plan" },
          passwordShowButton: "Show",
          replace: "Replace",
          save: "Save",
          saveAsNew: "Save as new",
          saveAsNewLimited: "Save as new",
          saveAsNewLimitedPlaceholder: "Storage limit reached",
          saveLimited: "Go Premium",
          selectEmailOrUsernamePlaceholder: "Enter your email or username",
          selectEmailPlaceholder: "Enter an email address",
          updatePasswordOrCreateNewLogin: "Update an existing login with this password, or create a new login.",
          updatePasswordOrCreateNewLoginLimit: "Replace an existing login",
          upgradeToPremium: "Upgrade to Premium",
          upsellButton: "Go Premium for unlimited password storage",
          useOnlyOnSubdomain: "Use only on this subdomain",
          wrongLogin: "Incorrect login",
          wrongPassword: "Incorrect password"
        },
        survey: { extension971: "Feedback to improve Dashlane" },
        "user-verification": {
          cancel: "Cancel",
          enterMasterPassword: "Master Password",
          hide: "Hide",
          loggedIn: "You're logged in as <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Never ask for Master Password to unlock passwords",
          neverAskAgainAnyCredentialInfobox: "Selecting this checkbox will turn off require Master Password for all passwords.",
          neverAskAgainCredentialCheckbox: "Never ask for Master Password to unlock this secure item",
          selectionPanelBiometric: "Biometrics",
          selectionPanelMasterPassword: "Master Password",
          selectionPanelTitle: "Select an unlock method:",
          show: "Show",
          tryAgain: "Try again",
          unknownError: "An unknown error occurred",
          unlock: "Unlock",
          useAnotherMethod: "Use another method",
          webauthnGenericErrorDescription: "An error occurred during the security verification.",
          webauthnGenericErrorTitle: "Something went wrong",
          webauthnPanelTitle: "Use biometrics, a security key, or your device PIN code to unlock Dashlane.",
          webcardTitle: "Complete security verification",
          wrongPassword: "Incorrect password"
        },
        "warn-generated-password": {
          cancel: "Cancel",
          closeWindow: "Close",
          contentWarnGeneratedPassword:
            "Dashlane contacts you via this email account to perform important actions like verifying your identity. We recommend creating a password that is strong but easy to remember.",
          continue: "Continue",
          header: "Are you sure you'll be able to remember this password?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Cancel",
          create_confirmButton: "Confirm",
          create_content: "Create a new passkey with Dashlane for user {0} on site {1}?",
          create_headerTitle: "Create new passkey",
          create_withoutDashlaneButton: "Use non-Dashlane key"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Cancel",
          confirmButton: "Confirm",
          content: "Do you want to log in as {0} on {1}?",
          get_withoutDashlaneButton: "Use a different passkey",
          headerTitle: "Log in with Dashlane"
        },
        "webauthn-passkey-selection": {
          headerTitle: "Choose the account you would like to log in with",
          selection_withoutDashlaneButton: "Use a different passkey"
        }
      };
    },
    6982: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Cancelar",
          closeWindow: "Cerrar",
          confirm: "Llenado automático",
          title: "¿Deseas que Dashlane llene automáticamente esta información segura?",
          warning: "Se lo pediremos otra vez si debe acceder a sus datos después de 5 minutos."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Última contraseña no guardada",
          TR_SELFCORRECT_STEP1_ADDRESS: "Dirección",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Autenticación",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Datos bancarios",
          TR_SELFCORRECT_STEP1_COMPANY: "Compañía",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Tarjeta de crédito",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "No llenar este campo",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Licencia de conducir",
          TR_SELFCORRECT_STEP1_EMAIL: "Correo electrónico",
          TR_SELFCORRECT_STEP1_FISCAL: "Número fiscal",
          TR_SELFCORRECT_STEP1_IDCARD: "Tarjeta de ID",
          TR_SELFCORRECT_STEP1_IDENTITY: "Entidad",
          TR_SELFCORRECT_STEP1_LOGININFO: "Información de ingreso",
          TR_SELFCORRECT_STEP1_NOTHING: "Nada",
          TR_SELFCORRECT_STEP1_PASSPORT: "Pasaporte",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Información de pago",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Información personal",
          TR_SELFCORRECT_STEP1_PHONE: "Número de teléfono",
          TR_SELFCORRECT_STEP1_SSN: "Número de seguridad social",
          TR_SELFCORRECT_STEP1_WEBSITE: "Sitio web",
          TR_SELFCORRECT_STEP2_ADDRESS: "Dirección",
          TR_SELFCORRECT_STEP2_AGE: "Edad",
          TR_SELFCORRECT_STEP2_AL1: "Dirección línea 1",
          TR_SELFCORRECT_STEP2_AL2: "Dirección línea 2",
          TR_SELFCORRECT_STEP2_AL3: "Dirección línea 3",
          TR_SELFCORRECT_STEP2_APTNUM: "Número de departamento",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Nombre del titular de la cuenta",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Número de cuenta bancaria",
          TR_SELFCORRECT_STEP2_BANKNAME: "Nombre del banco",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Número del edificio",
          TR_SELFCORRECT_STEP2_CITY: "Ciudad",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Nombre de la empresa",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Cargo en la compañía",
          TR_SELFCORRECT_STEP2_COUNTRY: "País",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Código del país",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Banco emisor",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Mes y año de vencimiento",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Mes de vencimiento",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Año de vencimiento",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Número de tarjeta de crédito",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Nombre completo que figura en la tarjeta",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "Nombre que figura en la tarjeta",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Apellido que figura en la tarjeta",
          TR_SELFCORRECT_STEP2_DOB: "Fecha de nacimiento",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Datos de entrega",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Fecha de nacimiento",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Fecha de vencimiento",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "Nombre",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Sexo",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Apellido(s)",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Nombre completo",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Número de licencia",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "Estado emisor",
          TR_SELFCORRECT_STEP2_EMAIL: "Correo electrónico",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "Correo electrónico",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "Nombre",
          TR_SELFCORRECT_STEP2_FLOOR: "Piso",
          TR_SELFCORRECT_STEP2_FULLNAME: "Nombre completo",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Datos de entrega",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Fecha de nacimiento",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Fecha de vencimiento",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "Nombre",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Sexo",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Nombre completo",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Apellido(s)",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Nacionalidad",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "Número de tarjeta de ID",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Puesto",
          TR_SELFCORRECT_STEP2_LASTNAME: "Apellido(s)",
          TR_SELFCORRECT_STEP2_LOGIN: "Nombre de usuario",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Nombre de usuario alternativo",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Nombre de soltera",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "Segundo nombre",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Inicial del segundo nombre",
          TR_SELFCORRECT_STEP2_NOTHING: "Nada",
          TR_SELFCORRECT_STEP2_OTP: "Token de la 2FA",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Datos de entrega",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Fecha de nacimiento",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Fecha de vencimiento",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Sexo",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "Nombre",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Apellido(s)",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Nombre completo",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Lugar de entrega",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Nacionalidad",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Número de pasaporte",
          TR_SELFCORRECT_STEP2_PASSWORD: "Contraseña",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Confirmar contraseña",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Contraseña actual",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "Contraseña nueva",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Código telefónico del país",
          TR_SELFCORRECT_STEP2_PHONENUM: "Número de teléfono",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Extensión telefónica",
          TR_SELFCORRECT_STEP2_POB: "Lugar de nacimiento",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Número de enrutamiento",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Código de clasificación",
          TR_SELFCORRECT_STEP2_SSN: "Número de seguridad social",
          TR_SELFCORRECT_STEP2_STATE: "Estado (p. ej., Florida)",
          TR_SELFCORRECT_STEP2_STATECODE: "Código estatal (p. ej., FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Nombre de calle",
          TR_SELFCORRECT_STEP2_STREETNUM: "Número de vivienda",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Tipo de calle (p. ej., Avenida)",
          TR_SELFCORRECT_STEP2_TAXNUM: "Número fiscal",
          TR_SELFCORRECT_STEP2_WEBSITE: "Sitio web",
          TR_SELFCORRECT_STEP2_ZIP: "Código postal",
          aboutToExpire: "CADUCA PRONTO",
          addNew_ADDRESS: "Agregar nueva dirección",
          addNew_AUTHENTICATION: "Método de autenticación",
          addNew_BANK_STATEMENT: "Agregar una nueva cuenta bancaria",
          addNew_COMPANY: "Agregar una nueva compañía",
          addNew_DRIVER_LICENCE: "Agregar una nueva licencia de conducir",
          addNew_EMAIL: "Agregar una dirección de correo electrónico nueva",
          addNew_FISCAL: "Agregar una nueva identificación fiscal",
          addNew_IDENTITY: "Agregar un nombre nuevo",
          addNew_ID_CARD: "Agregar una nueva ID",
          addNew_NOTHING: "Nada",
          addNew_PASSPORT: "Agregar un nuevo pasaporte",
          addNew_PAYMENT_MEAN_CREDITCARD: "Agregar una nueva tarjeta de crédito",
          addNew_PAYMENT_MEAN_PAYPAL: "Agregar una nueva cuenta de PayPal",
          addNew_PHONE: "Agregar un número telefónico nuevo",
          addNew_SOCIAL_SECURITY: "Agregar un nuevo número de seguridad social",
          addNew_WEBSITE: "Agregar un nuevo sitio web",
          addObjectHeader: "Autocompletar esta información en cualquier sitio web.",
          allItemsButton: "Todos los elementos",
          buyDashlane: "Comprar Dashlane",
          closeWindow: "Cerrar",
          connectAs: "Ingresar como",
          contactEmailGeneration:
            "Está a punto de generar una contraseña segura para la dirección de correo electrónico con su cuenta de Dashlane.",
          defaultSpace: "Personal",
          emailBusiness: "Comercial",
          emailPersonal: "Personal",
          emptyStateWebcard_noLogin: "No hay ningún ingreso guardado para {domain}.",
          emptyStateWebcard_noOtherInfo: "Aún no ha guardado esta información.",
          emptyStateWebcard_noPassword: "Aún no se guardó ninguna contraseña para este sitio web.",
          existingPassword: "Está a punto de guardar una contraseña para este sitio web. ¿Seguro que quiere generar una nueva?",
          expired: "EXPIRÓ",
          fixAutofillHeader: "¿Qué debería ir aquí?",
          fixAutofillIssue: "Reparar ahora",
          generatePasswordButtons_closeSettings: "Cerrar opciones de contraseña",
          generatePasswordButtons_hidePassword: "Ocultar contraseña",
          generatePasswordButtons_openSettings: "Abrir opciones de contraseña",
          generatePasswordButtons_reshuffle: "Generar nueva contraseña",
          generatePasswordButtons_showPassword: "Mostrar contraseña",
          generatePasswordDropdownTitle: "Generador de contraseñas",
          generatePasswordOption_digits: "Dígitos (por ejemplo, 345)",
          generatePasswordOption_length: "Longitud ({0})",
          generatePasswordOption_letters: "Letras (por ejemplo, Aa)",
          generatePasswordOption_similarCharacters: "Caracteres similares (por ejemplo, 0O 1| 2Z)",
          generatePasswordOption_symbols: "Símbolos (@&$!#?)",
          generatePasswordStrength_none: "Calculando…",
          generatePasswordStrength_safelyUnguessable: "¡Esa es una contraseña segura!",
          generatePasswordStrength_somewhatGuessable: "Aún no es perfecta.",
          generatePasswordStrength_tooGuessable: "Hagamos que su contraseña sea más segura.",
          generatePasswordStrength_veryGuessable: "Es un buen comienzo, pero podemos mejorarla.",
          generatePasswordStrength_veryUnguessable: "¡Logró la contraseña más segura!",
          generatePwd: "Generar una contraseña segura",
          hasAutofillIssue: "¿Está experimentando un problema con la función de autocompletar?",
          incomplete: "INCOMPLETA",
          infoboxDescriptionB2BTrialDiscontinued: "No puede generar nuevas contraseñas",
          infoboxTitleB2BTrialDiscontinued: "Su prueba terminó y su cuenta está congelada.",
          itemsCountLabel: { one: "{count} artículo", other: "{count} artículos" },
          mavReactivationBtn: "Ingrese ahora",
          mavReactivationCreateBtn: "Crear una cuenta",
          mavReactivationDismiss: "No vuelva a preguntar por esta sesión",
          mavReactivationOr: "o",
          mavReactivationTitle: "Inicie sesión en Dashlane para completar formularios con un clic.",
          openTheExtenion: "Abrir la extensión",
          openTheExtension: "Abrir la extensión",
          optionsAutofillSomethingElse: "Llenar automáticamente algo más",
          optionsClose: "Pausar para esta visita",
          optionsCloseMenu: "Cerrar más opciones",
          optionsDontAutofill: "Pausar hasta que vuelva a activarlo",
          optionsFillSomethingElse: "Llenar automáticamente algo más",
          optionsNeverSuggest: "Pausar hasta que vuelva a activarlo",
          optionsOpenMenu: "Abrir más opciones",
          optionsTitle: "Llenar automáticamente este campo",
          optionsTooltip: "Llenar automáticamente este campo",
          password: "Contraseña",
          passwordHistoryDomain: "Este sitio web",
          passwordHistorySee: "Ver Historial de contraseñas",
          passwordHistoryTitle: "Contraseña",
          passwordLimitSubtitle: "Actualizar a Premium",
          passwordLimitTitle: "Ha alcanzado el límite de contraseñas de su plan Free. Esta contraseña no se guardará.",
          passwordLimitWarningButton: "Actualice a Premium para obtener almacenamiento ilimitado",
          passwordLimitWarningDesc:
            "No puede guardar más credenciales de ingreso con la cuenta Dashlane Free. Ha alcanzado el límite de almacenamiento de este plan y solo puede modificar las credenciales de ingreso existentes.",
          passwordLimitWarningLabel: "Aviso:",
          passwordNearLimitTitle: { one: "Queda una contraseña en su plan Free", other: "Quedan {count} contraseñas en su plan Free" },
          phoneAny: "Otro",
          phoneFax: "Fax",
          phoneLandline: "Casa",
          phoneMobile: "Teléfono celular",
          phoneWorkFax: "Fax laboral",
          phoneWorkLandline: "Trabajo",
          phoneWorkMobile: "Teléfono laboral",
          reactivationHeader: "Activar Dashlane para completar formularios con un clic.",
          roleButton: "Botón",
          sca_feedback: "Aún no se guardaron contraseñas para este sitio web.",
          sca_feedback_add: "Agregar una contraseña",
          search: "Buscar",
          searchInputPlaceholder: "Busque sus artículos...",
          seePasswordLink: "Ver contraseña",
          shush_feedback: "No llenaremos nada automáticamente aquí.",
          shush_feedback_learnMore: "Obtenga más información",
          strongPassword: "¡Esa es una contraseña segura!",
          suggestedButton: "Sugerido",
          topOfWalletSeparator: "Sus otros métodos de pago",
          types_ADDRESS: "Dirección",
          types_AUTHENTICATION: "Ingresar como",
          types_BANK_STATEMENT: "Cuenta bancaria",
          types_COMPANY: "Compañía",
          types_DRIVER_LICENCE: "Licencia de conducir",
          types_EMAIL: "Correo electrónico",
          types_FISCAL: "Número fiscal",
          types_GENERATED_PASSWORD: "Ingresar como",
          types_IDENTITY: "Entidad",
          types_ID_CARD: "Tarjeta de ID",
          types_PASSPORT: "Pasaporte",
          types_PASSWORD: "Contraseña",
          types_PAYMENT_MEAN_CREDITCARD: "Tarjeta de crédito",
          types_PHONE: "Número de teléfono",
          types_SOCIAL_SECURITY: "Tarjeta de seguridad social",
          types_WEBSITE: "Sitio web",
          upgradeToPremium: "Actualizar a Premium",
          usePassword: "Usar la contraseña generada",
          v5_addNew_ADDRESS: "Agregar nueva dirección",
          v5_addNew_AUTHENTICATION: "Agregar un nuevo ingreso",
          v5_addNew_BANK_STATEMENT: "Agregar una nueva cuenta bancaria",
          v5_addNew_COMPANY: "Agregar una nueva compañía",
          v5_addNew_DRIVER_LICENCE: "Agregar una nueva licencia de conducir",
          v5_addNew_EMAIL: "Agregar una nueva dirección de correo electrónico",
          v5_addNew_FISCAL: "Agregar un nuevo número fiscal",
          v5_addNew_IDENTITY: "Agregar nueva información personal",
          v5_addNew_ID_CARD: "Agregar una nueva tarjeta de ID",
          v5_addNew_PASSPORT: "Agregar un nuevo pasaporte",
          v5_addNew_PASSWORD: "Agregar una contraseña nueva",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Agregar una nueva tarjeta de crédito",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Agregar una nueva cuenta de PayPal",
          v5_addNew_PHONE: "Agregar un número telefónico nuevo",
          v5_addNew_SOCIAL_SECURITY: "Agregar un nuevo número de seguridad social",
          v5_addNew_WEBSITE: "Agregar un nuevo sitio web",
          v5_addObjectHeader: "Completar esta información automáticamente en cualquier sitio web.",
          v5_connectAs: "Ingresar como",
          veryWeakPassword: "La contraseña que introdujo es muy débil",
          weakPassword: "Hagamos que su contraseña sea más segura.",
          webAuthnReactivationDontAskAgain: "No vuelva a preguntar por esta sesión",
          webAuthnReactivationErrorMessage: "¿Puede intentarlo nuevamente?",
          webAuthnReactivationFallbackToMasterPassword: "Usar contraseña maestra",
          webAuthnReactivationHeader: "Desbloquear Dashlane para ingresar",
          webAuthnReactivationLoginButton: "Desbloquear con los datos biométricos",
          webAuthnReactivationLoginButtonError: "Probar con los datos biométricos otra vez",
          webauthnConditionalUINotWithDashlaneButton: "Use una clave de acceso diferente",
          websiteUnsecure: "Este sitio web no es seguro. La información que introduzca aquí puede ser hackeada.",
          websiteUnsecureIframe: "Asegúrese de que confía en este sitio, ya que el formulario puede provenir de otro dominio."
        },
        "autologin-selection": {
          autologinHeader: "ELIJA LA CUENTA CON LA QUE LE GUSTARÍA INGRESAR:",
          autologinLoggingIn: "DASHLANE LE ESTÁ INGRESANDO AUTOMÁTICAMENTE",
          clickToDismiss: "Haga clic nuevamente para ocultar esto",
          closeWindow: "Cerrar",
          connectAs: "Ingresar como",
          defaultSpace: "Personal",
          header: "Elija la cuenta con la que le gustaría ingresar",
          headerInner: "Cuenta",
          openTheExtenion: "Abrir la extensión",
          openTheExtension: "Abrir la extensión",
          password: "Contraseña",
          v5_autologinLoggingIn: "Dashlane lo está ingresando automáticamente"
        },
        "data-capture": {
          cancel: "Cancelar",
          closeWindow: "Cerrar",
          creditCardDetails: "Detalles de la tarjeta de crédito",
          enterLogin: "Introducir ingreso",
          enterMasterPassword: "Contraseña maestra",
          header: "Guarde esta contraseña en Dashlane y no tendrá que volver a escribirla en línea.",
          headerLoggedout: "Ingrese en Dashlane para guardar esta información.",
          login: "Ingresar",
          neverAgain: "No preguntarme nuevamente",
          neverForThisWebsite: "Nunca para este sitio web",
          openDashlane: "Abrir Dashlane",
          save: "Guardar",
          types_ADDRESS: "Dirección",
          types_COMPANY: "Compañía",
          types_EMAIL: "Correo electrónico",
          types_IDENTITY: "Nombre",
          types_PAYMENT_MEAN_CREDITCARD: "Tarjeta de crédito",
          types_PHONE: "Número de teléfono",
          types_WEBSITE: "Sitio web",
          wrongLogin: "Ingreso incorrecto",
          wrongPassword: "Contraseña incorrecta"
        },
        "feedback-notification": {
          editButton: "Edit",
          loginCreated: "Nuevo inicio de sesión creado.",
          loginUpdated: "Actualización del inicio de sesión.",
          undoButton: "Deshacer"
        },
        "follow-up-notification": {
          accountHolderLabel: "Account holder",
          bicLabel: "Código BIC/SWIFT",
          cardNumberLabel: "Número de tarjeta",
          copiedTooltip: "Copiado",
          copyTooltip: "Copiar",
          emailLabel: "Correo electrónico",
          footerInformation: "Puede desactivar la opción copiar y pegar ventanas emergentes en sus opciones de llenado automático.",
          headerTitle: "Copie y pegue los detalles del artículo",
          ibanLabel: "IBAN",
          loginLabel: "Nombre de usuario",
          otpLabel: "Token de la 2FA",
          passwordLabel: "Contraseña",
          secondaryLoginLabel: "Nombre de usuario alternativo",
          securityCodeLabel: "Código de seguridad",
          usernameLabel: "Nombre de usuario"
        },
        "generic-popup": {
          click: "Cambiar ahora",
          closeWindow: "Cerrar",
          inputPlaceholder: "Escriba su nombre",
          subtitle: "Indique su sexo",
          title: "Hola"
        },
        "limited-capability": {
          cancelPasswordLimit: "Ahora no",
          closeWindow: "Cerrar",
          contentEssentialsPasswordLimit:
            "Actualice a nuestro plan Essentials para tener contraseñas ilimitadas y sincronizarlas en sus dos dispositivos.",
          contentPasswordLimit:
            "No puede guardar más credenciales de ingreso con la cuenta Dashlane Free. Para obtener almacenamiento ilimitado, actualice a un plan Premium.",
          contentPremiumPasswordLimit:
            "Actualice a nuestro plan Premium para almacenar una cantidad ilimitada de credenciales de ingreso y para poder sincronizarlas en un sinfín de dispositivos.",
          enterMasterPassword: "**************",
          goPremium: "Obtener beneficios Premium",
          headerPasswordLimit: "Se alcanzó el límite de almacenamiento",
          hide: "Ocultar",
          passwordLabel: "Contraseña",
          show: "Mostrar",
          upgradeToEssentials: "Actualizar a Essentials",
          upgradeToPremium: "Actualizar a Premium"
        },
        "master-password": {
          alwaysAuthorize: "Siempre autorizar",
          cancel: "Cancelar",
          closeWindow: "Cerrar",
          emailHelpText: "Su correo electrónico aquí confirma que inició sesión en Dashlane.",
          enterMasterPassword: "Contraseña maestra",
          hide: "Ocultar",
          loggedIn: "Inició sesión como <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Nunca solicitar la contraseña maestra para desbloquear contraseñas.",
          neverAskAgainAnyCredentialInfobox:
            "Al seleccionar esta casilla de verificación, se desactivará la solicitud de la contraseña maestra para todas las contraseñas.",
          neverAskAgainCredentialCheckbox: "Nunca solicitar la contraseña maestra para desbloquear este artículo seguro",
          ok: "Aceptar",
          show: "Mostrar",
          title: "Desbloquear artículos seguros durante 5 minutos",
          unlock: "Desbloquear",
          unlockContent:
            "Si aún necesita acceder a sus datos protegidos después de 5 minutos, deberá ingresar su contraseña maestra nuevamente.",
          wrongPassword: "Contraseña incorrecta"
        },
        notification: {
          cancel: "Cancelar",
          closeWindow: "Cerrar",
          ok: "Aceptar",
          webOnboardingAfterCancelCancel: "Inténtelo nuevamente",
          webOnboardingAfterCancelConfirm: "Volver a la aplicación",
          webOnboardingAfterCancelTitle: "Puede intentar de nuevo este sitio web o usar otro sitio en su lugar.",
          webOnboardingAfterLoginCancel: "Cerrar",
          webOnboardingAfterLoginConfirm: "Regresar a Dashlane",
          webOnboardingAfterLoginTitle: "¡Felicitaciones! Es un experto en Dashlane",
          webOnboardingAfterSaveConfirm: "Véalo en Dashlane",
          webOnboardingAfterSaveTitle: "¡Guardó su primer credencial de ingreso!"
        },
        "phishing-prevention": {
          cancelButton: "No confiar",
          currentUrlLabel: "URL actual",
          headerTitle: "Asegúrese de confiar en este sitio web antes de pegar sus datos de inicio de sesión",
          okButton: "Confiar y pegar",
          phishingCTALink: "Más información sobre «phishing»",
          trustedUrlLabel: "URL de confianza"
        },
        "purchase-receipt": {
          addRow: "Agregar artículo",
          cancel: "Cancelar",
          closeWindow: "Cerrar",
          collapse: "Menos",
          disable: "No preguntar de nuevo",
          expand: "Mostrar más",
          header: "¿Guardar su recibo de <strong>{0}</strong> en Dashlane?",
          header_nohtml: "¿Guardar su recibo de {0} en Dashlane?",
          save: "Guardar",
          showLess: "Menos",
          showMore: "Mostrar más",
          total: "TOTAL",
          untitledItem: "Elemento sin título",
          v5_header_nohtml: "Guarde su recibo de {0} en Dashlane",
          v5_total: "Total"
        },
        "save-password": {
          alwaysUseMasterPwd: "Solicitar contraseña maestra antes de su uso",
          cancel: "Cancelar",
          closeWindow: "Cerrar",
          collapse: "Ver menos",
          contentPremiumPasswordLimit:
            "Actualice a nuestro plan Premium para almacenar una cantidad ilimitada de credenciales de ingreso y para poder sincronizarlos en un sinfín de dispositivos.",
          createNewLogin: "Crear nueva información de ingreso",
          defaultSpace: "Personal",
          enterLogin: "Seleccione su ingreso de Dashlane...",
          enterMasterPassword: "Contraseña maestra",
          expand: "Mostrar más",
          footerBuyDashlane: "Comprar Dashlane",
          footerDismiss: "Descartar",
          header: "¿Quiere guardar esta cuenta en Dashlane?",
          headerLoggedout: "Ingresar en Dashlane para guardar su contraseña de <strong>{0}</strong> .",
          headerLoggedout_nohtml: "Ingresar en Dashlane para guardar su contraseña de {0}.",
          headerPasswordLimit: "Se alcanzó el límite de almacenamiento",
          headerReplace: "¿Quiere reemplazar esta contraseña en Dashlane?",
          headerReplace_nohtml: "¿Quiere reemplazar esta contraseña en Dashlane?",
          headerTitleB2BTrialDiscontinued: "Su cuenta está congelada",
          header_nohtml: "¿Desea guardar esta credencial de ingreso en Dashlane?",
          infoboxDescriptionB2BTrialDiscontinued: "Su contraseña no se guardará.",
          infoboxTitleB2BTrialDiscontinued: "Su prueba terminó y su cuenta está congelada.",
          lastUsedItem: "Última vez usado",
          login: "Ingresar",
          loginFieldLabel: "Nombre de usuario",
          moreOptions: "Más opciones",
          neverAgain: "No preguntarme nuevamente",
          neverForThisWebsite: "Nunca para este sitio web",
          openDashlane: "Abrir Dashlane",
          passwordFieldLabel: "CONTRASEÑA",
          passwordHideButton: "Ocultar",
          passwordLimitReachedSubtitle: "Su contraseña no se guardará.",
          passwordLimitReachedTitle: "Ha alcanzado el límite de contraseñas de su plan Free",
          passwordLimitReachedTitleReplace: "Ha alcanzado el límite de contraseñas que puede guardar en su plan Free",
          passwordNearLimitTitle: { one: "Queda una contraseña en su plan Free", other: "Quedan {count} contraseñas en su plan Free" },
          passwordShowButton: "Mostrar",
          replace: "Reemplazar",
          save: "Guardar",
          saveAsNew: "Guardar como nuevo",
          saveAsNewLimited: "Guardar como nuevo",
          saveAsNewLimitedPlaceholder: "Se alcanzó el límite de almacenamiento",
          saveLimited: "Volverse Premium",
          selectEmailOrUsernamePlaceholder: "Escriba su correo electrónico o usuario",
          selectEmailPlaceholder: "Introducir una nueva dirección de correo electrónico",
          updatePasswordOrCreateNewLogin:
            "Actualice una información de ingreso ya existente con esta contraseña o cree una nueva información de ingreso.",
          updatePasswordOrCreateNewLoginLimit: "Reemplazar un ingreso existente",
          upgradeToPremium: "Actualizar a Premium",
          upsellButton: "Obtenga la versión Premium para obtener un almacenamiento ilimitado de contraseñas",
          useOnlyOnSubdomain: "Usar solo en este subdominio",
          wrongLogin: "Ingreso incorrecto",
          wrongPassword: "Contraseña incorrecta"
        },
        survey: { extension971: "Comente para mejorar Dashlane" },
        "user-verification": {
          cancel: "Cancelar",
          enterMasterPassword: "Contraseña maestra",
          hide: "Ocultar",
          loggedIn: "Ha ingresado como <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Nunca solicitar la contraseña maestra para desbloquear contraseñas.",
          neverAskAgainAnyCredentialInfobox:
            "Al seleccionar esta casilla de verificación, se desactivará la solicitud de la contraseña maestra para todas las contraseñas.",
          neverAskAgainCredentialCheckbox: "Nunca solicitar la contraseña maestra para desbloquear este artículo seguro",
          selectionPanelBiometric: "Biometría",
          selectionPanelMasterPassword: "Contraseña maestra",
          selectionPanelTitle: "Seleccione un método de desbloqueo:",
          show: "Mostrar",
          tryAgain: "Inténtelo nuevamente",
          unknownError: "Se produjo un error desconocido",
          unlock: "Desbloquea",
          useAnotherMethod: "Usar otro método",
          webauthnGenericErrorDescription: "Se produjo un error durante la verificación de seguridad.",
          webauthnGenericErrorTitle: "Something went wrong",
          webauthnPanelTitle: "Utilice la biometría, una llave de seguridad o el código PIN del dispositivo para desbloquear Dashlane.",
          webcardTitle: "Completar verificación de seguridad",
          wrongPassword: "Contraseña incorrecta"
        },
        "warn-generated-password": {
          cancel: "Cancelar",
          closeWindow: "Cerrar",
          contentWarnGeneratedPassword:
            "Dashlane se pondrá en contacto con usted a través de esta cuenta de correo electrónico para realizar acciones importantes, como verificar su identidad. Le recomendamos crear una contraseña que sea segura, pero fácil de recordar.",
          continue: "Continuar",
          header: "¿Está seguro de que recordará esta contraseña?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Cancelar",
          create_confirmButton: "Confirmar",
          create_content: "Cree una nueva clave de acceso con Dashlane para el usuario {0} in el sitio {1}?",
          create_headerTitle: "Crear una nueva clave de acceso",
          create_withoutDashlaneButton: "Utilice una clave distinta a la de Dashlane"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Cancelar",
          confirmButton: "Confirmar",
          content: "¿Desea ingresar como {0} en {1}?",
          get_withoutDashlaneButton: "Utilice una clave distinta a la de Dashlane",
          headerTitle: "Ingrese con Dashlane"
        },
        "webauthn-passkey-selection": {
          headerTitle: "Elija la cuenta con la que le gustaría ingresar",
          selection_withoutDashlaneButton: "Use una clave de acceso diferente"
        }
      };
    },
    9033: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Annuler",
          closeWindow: "Fermer",
          confirm: "Saisie automatique",
          title: "Souhaitez-vous que Dashlane saisisse automatiquement ces informations sécurisées ?",
          warning: "Vous recevrez une nouvelle invite si vous tentez d'accéder à vos données dans plus de 5 minutes."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Dernier mot de passe non enregistré",
          TR_SELFCORRECT_STEP1_ADDRESS: "Adresse",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Authentification",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Coordonnées bancaires",
          TR_SELFCORRECT_STEP1_COMPANY: "Entreprise",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Carte de crédit",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "Ne pas remplir ce champ",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Permis de conduire",
          TR_SELFCORRECT_STEP1_EMAIL: "E-mail",
          TR_SELFCORRECT_STEP1_FISCAL: "N° fiscal",
          TR_SELFCORRECT_STEP1_IDCARD: "Carte d'identité",
          TR_SELFCORRECT_STEP1_IDENTITY: "Identité",
          TR_SELFCORRECT_STEP1_LOGININFO: "Informations de connexion",
          TR_SELFCORRECT_STEP1_NOTHING: "Rien",
          TR_SELFCORRECT_STEP1_PASSPORT: "Passeport",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Informations de paiement",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Données personnelles",
          TR_SELFCORRECT_STEP1_PHONE: "Numéro de téléphone",
          TR_SELFCORRECT_STEP1_SSN: "Num. de sécurité sociale",
          TR_SELFCORRECT_STEP1_WEBSITE: "Site Web",
          TR_SELFCORRECT_STEP2_ADDRESS: "Adresse",
          TR_SELFCORRECT_STEP2_AGE: "Âge",
          TR_SELFCORRECT_STEP2_AL1: "Adresse ligne 1",
          TR_SELFCORRECT_STEP2_AL2: "Adresse ligne 2",
          TR_SELFCORRECT_STEP2_AL3: "Adresse ligne 3",
          TR_SELFCORRECT_STEP2_APTNUM: "Numéro de l'appartement",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Titulaire du compte",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Numéro de compte",
          TR_SELFCORRECT_STEP2_BANKNAME: "Nom de la banque",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Numéro de bâtiment",
          TR_SELFCORRECT_STEP2_CITY: "Ville",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Nom de l'entreprise",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Poste dans l'entreprise",
          TR_SELFCORRECT_STEP2_COUNTRY: "Pays",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Pays",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Banque",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Date d'expiration mois et année",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Mois d'expiration",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Année d'expiration",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Numéro de carte bancaire",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Nom complet figurant sur la carte",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "Prénom figurant sur la carte",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Nom figurant sur la carte",
          TR_SELFCORRECT_STEP2_DOB: "Né(e) le",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Date de livraison",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Date de naissance",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Expire en",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "Prénom",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Sexe",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Nom",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Nom",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Num. de permis de conduire",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "État d’émission",
          TR_SELFCORRECT_STEP2_EMAIL: "E-mail",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "E-mail",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "Prénom",
          TR_SELFCORRECT_STEP2_FLOOR: "Étage",
          TR_SELFCORRECT_STEP2_FULLNAME: "Nom",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Date de livraison",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Né(e) le",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Expire en",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "Prénom",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Sexe",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Nom",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Nom",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Nationalité",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "Numéro carte d'identité",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Position",
          TR_SELFCORRECT_STEP2_LASTNAME: "Nom",
          TR_SELFCORRECT_STEP2_LOGIN: "Nom d'utilisateur",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Nom d'utilisateur secondaire",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Nom de jeune fille",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "2e prénom",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Initiale du deuxième prénom",
          TR_SELFCORRECT_STEP2_NOTHING: "Rien",
          TR_SELFCORRECT_STEP2_OTP: "Jeton 2FA",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Date de livraison",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Né(e) le",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Expire en",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Sexe",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "Prénom",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Nom",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Nom",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Lieu de livraison",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Nationalité",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Numéro de passeport",
          TR_SELFCORRECT_STEP2_PASSWORD: "Mot de passe",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Confirmer le mot de passe",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Mot de passe actuel",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "Nouveau mot de passe",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Indicatif téléphonique du pays",
          TR_SELFCORRECT_STEP2_PHONENUM: "Numéro de téléphone",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Numéro de poste",
          TR_SELFCORRECT_STEP2_POB: "Né(e) à",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Numéro de routage",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Code banque",
          TR_SELFCORRECT_STEP2_SSN: "Num. de sécurité sociale",
          TR_SELFCORRECT_STEP2_STATE: "État (ex. Floride)",
          TR_SELFCORRECT_STEP2_STATECODE: "Code d’État (ex. FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Adresse",
          TR_SELFCORRECT_STEP2_STREETNUM: "N° de bâtiment",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Type de rue (ex. Avenue)",
          TR_SELFCORRECT_STEP2_TAXNUM: "N° fiscal",
          TR_SELFCORRECT_STEP2_WEBSITE: "Site Web",
          TR_SELFCORRECT_STEP2_ZIP: "Code postal",
          aboutToExpire: "EXPIRE BIENTÔT",
          addNew_ADDRESS: "Ajouter une nouvelle adresse",
          addNew_AUTHENTICATION: "Moyen d'authentification",
          addNew_BANK_STATEMENT: "Ajouter un compte bancaire",
          addNew_COMPANY: "Ajouter une nouvelle entreprise",
          addNew_DRIVER_LICENCE: "Ajouter un permis",
          addNew_EMAIL: "Ajouter une nouvelle adresse e-mail",
          addNew_FISCAL: "Ajouter de nouveaux identifiants fiscaux",
          addNew_IDENTITY: "Ajouter une nouvelle identité",
          addNew_ID_CARD: "Ajouter une pièce d'identité",
          addNew_NOTHING: "Rien",
          addNew_PASSPORT: "Nouveau passeport",
          addNew_PAYMENT_MEAN_CREDITCARD: "Nouvelle carte de crédit",
          addNew_PAYMENT_MEAN_PAYPAL: "Ajouter un compte PayPal",
          addNew_PHONE: "Ajouter un nouveau téléphone",
          addNew_SOCIAL_SECURITY: "Ajouter un numéro de sécurité sociale",
          addNew_WEBSITE: "Ajouter un nouveau site Web",
          addObjectHeader: "Vous pouvez saisir toutes ces informations automatiquement sur tous vos sites préférés.",
          allItemsButton: "Tous les éléments",
          buyDashlane: "Acheter Dashlane",
          closeWindow: "Fermer",
          connectAs: "Connecter",
          contactEmailGeneration:
            "Attention : Dashlane utilise cette adresse électronique pour authentifier vos appareils et gérer votre compte. Il n'est PAS recommandé de définir un mot de passe difficile à retenir pour ce site.",
          defaultSpace: "Personnel",
          emailBusiness: "Professionnel",
          emailPersonal: "Personnel",
          emptyStateWebcard_noLogin: "Aucun identifiant enregistré pour {domain}.",
          emptyStateWebcard_noOtherInfo: "Cette information n'est pas encore enregistrée.",
          emptyStateWebcard_noPassword: "Aucun mot de passe enregistré pour ce site Web.",
          existingPassword: "Vous avez déjà un compte enregistré dans Dashlane pour ce site. Souhaitez-vous vraiment en créer un autre ?",
          expired: "EXPIRÉ",
          fixAutofillHeader: "Qu'est-ce qui devrait s'afficher ici ?",
          fixAutofillIssue: "Rectifiez-les dès maintenant.",
          generatePasswordButtons_closeSettings: "Fermer les paramètres des mots de passe",
          generatePasswordButtons_hidePassword: "Masquer le mot de passe",
          generatePasswordButtons_openSettings: "Ouvrir les paramètres des mots de passe",
          generatePasswordButtons_reshuffle: "Générer un nouveau mot de passe",
          generatePasswordButtons_showPassword: "Afficher le mot de passe",
          generatePasswordDropdownTitle: "Générateur de mots de passe",
          generatePasswordOption_digits: "Chiffres (p. ex. 345)",
          generatePasswordOption_length: "Longueur ({0})",
          generatePasswordOption_letters: "Lettres (p. ex. Aa)",
          generatePasswordOption_similarCharacters: "Caractères semblables (p. ex. 0O 1| 2Z)",
          generatePasswordOption_symbols: "Symboles (@&$!#?)",
          generatePasswordStrength_none: "Évaluation en cours...",
          generatePasswordStrength_safelyUnguessable: "Robuste comme on les aime !",
          generatePasswordStrength_somewhatGuessable: "Pas parfait, mais pas loin !",
          generatePasswordStrength_tooGuessable: "Renforçons ce mot de passe ensemble.",
          generatePasswordStrength_veryGuessable: "Un bon début, mais il y a de la marge.",
          generatePasswordStrength_veryUnguessable: "On ne peut pas faire plus robuste !",
          generatePwd: "Générer un mot de passe fort",
          hasAutofillIssue: "Vous rencontrez des erreurs avec la saisie automatique ?",
          incomplete: "INCOMPLET",
          infoboxDescriptionB2BTrialDiscontinued: "Vous ne pouvez pas générer de nouveaux mots de passe",
          infoboxTitleB2BTrialDiscontinued: "Votre essai s'est terminé et votre compte est bloqué.",
          itemsCountLabel: { one: "{count} élément", other: "{count} éléments" },
          mavReactivationBtn: "Connexion",
          mavReactivationCreateBtn: "Créer un compte",
          mavReactivationDismiss: "Ne demandez pas à nouveau cette session",
          mavReactivationOr: "ou",
          mavReactivationTitle: "Connectez-vous à Dashlane pour remplir les formulaires en un seul clic.",
          openTheExtenion: "Ouvrir l'extension",
          openTheExtension: "Ouvrir l'extension",
          optionsAutofillSomethingElse: "Modifier l'élément à saisir",
          optionsClose: "Suspendre pour cette visite",
          optionsCloseMenu: "Fermer plus d'options",
          optionsDontAutofill: "Suspendre jusqu'à ce que je la réactive",
          optionsFillSomethingElse: "Modifier l'élément à saisir",
          optionsNeverSuggest: "Suspendre jusqu'à ce que je la réactive",
          optionsOpenMenu: "Ouvrir plus d'options",
          optionsTitle: "Saisie automatique dans ce champ",
          optionsTooltip: "Saisie automatique dans ce champ",
          password: "Mot de passe",
          passwordHistoryDomain: "Ce site Web",
          passwordHistorySee: "Voir l'historique des mots de passe",
          passwordHistoryTitle: "Mot de passe",
          passwordLimitSubtitle: "Devenez membre Premium",
          passwordLimitTitle:
            "Vous avez atteint la limite de mots de passe de votre forfait gratuit. Ce mot de passe ne sera pas enregistré.",
          passwordLimitWarningButton: "Passez Premium pour profiter d'un stockage illimité",
          passwordLimitWarningDesc:
            "Votre compte Dashlane Free ne vous permet pas de stocker davantage d'identifiants. Vous avez atteint votre limite de stockage gratuit et vous pouvez uniquement modifier vos identifiants enregistrés.",
          passwordLimitWarningLabel: "Attention :",
          passwordNearLimitTitle: {
            one: "Un mot de passe restant dans votre forfait Free",
            other: "{count} mots de passe restants dans votre forfait Free"
          },
          phoneAny: "Autre",
          phoneFax: "Fax",
          phoneLandline: "Accueil",
          phoneMobile: "Mobile",
          phoneWorkFax: "Fax pro",
          phoneWorkLandline: "Fixe pro",
          phoneWorkMobile: "Mobile pro",
          reactivationHeader: "Activer Dashlane pour remplir ce formulaire.",
          roleButton: "Bouton",
          sca_feedback: "Aucun mot de passe enregistré pour ce site Web.",
          sca_feedback_add: "Ajouter un mot de passe",
          search: "Rechercher",
          searchInputPlaceholder: "Rechercher vos éléments...",
          seePasswordLink: "Voir le mot de passe",
          shush_feedback: "Nous ne remplirons pas ce champ.",
          shush_feedback_learnMore: "En savoir plus",
          strongPassword: "En voilà un mot de passe en béton !",
          suggestedButton: "Suggestions",
          topOfWalletSeparator: "Vos autres moyens de paiement",
          types_ADDRESS: "Adresse",
          types_AUTHENTICATION: "Connecter",
          types_BANK_STATEMENT: "Compte bancaire",
          types_COMPANY: "Entreprise",
          types_DRIVER_LICENCE: "Permis de conduire",
          types_EMAIL: "E-mail",
          types_FISCAL: "N° fiscal",
          types_GENERATED_PASSWORD: "Connecter",
          types_IDENTITY: "Identité",
          types_ID_CARD: "Carte d'identité",
          types_PASSPORT: "Passeport",
          types_PASSWORD: "Mot de passe",
          types_PAYMENT_MEAN_CREDITCARD: "Carte de crédit",
          types_PHONE: "Numéro de téléphone",
          types_SOCIAL_SECURITY: "Carte de sécurité sociale",
          types_WEBSITE: "Site Web",
          upgradeToPremium: "Passer à Dashlane Premium",
          usePassword: "Utiliser le mot de passe généré",
          v5_addNew_ADDRESS: "Ajouter une adresse",
          v5_addNew_AUTHENTICATION: "Ajouter un identifiant",
          v5_addNew_BANK_STATEMENT: "Nouveau compte bancaire",
          v5_addNew_COMPANY: "Ajouter une entreprise",
          v5_addNew_DRIVER_LICENCE: "Ajouter un permis de conduire",
          v5_addNew_EMAIL: "Ajouter une adresse e-mail",
          v5_addNew_FISCAL: "Ajouter un nouveau numéro fiscal",
          v5_addNew_IDENTITY: "Ajouter des données personnelles",
          v5_addNew_ID_CARD: "Ajouter une carte d'identité",
          v5_addNew_PASSPORT: "Ajouter un passeport",
          v5_addNew_PASSWORD: "Ajouter un mot de passe",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Ajouter une carte bancaire",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Ajouter un compte PayPal",
          v5_addNew_PHONE: "Ajouter un numéro de téléphone",
          v5_addNew_SOCIAL_SECURITY: "Ajouter un numéro de sécurité sociale",
          v5_addNew_WEBSITE: "Ajouter un site Web",
          v5_addObjectHeader: "Vous pouvez saisir toutes ces informations automatiquement sur tous vos sites préférés.",
          v5_connectAs: "Se connecter en tant que",
          veryWeakPassword: "Force du mot de passe : très faible",
          weakPassword: "Renforçons ce mot de passe ensemble.",
          webAuthnReactivationDontAskAgain: "Ne demandez pas à nouveau cette session",
          webAuthnReactivationErrorMessage: "Pourriez-vous réessayer ?",
          webAuthnReactivationFallbackToMasterPassword: "Utiliser le mot de passe Maître",
          webAuthnReactivationHeader: "Déverrouillez Dashlane pour vous connecter",
          webAuthnReactivationLoginButton: "Déverrouillage par authentification biométrique",
          webAuthnReactivationLoginButtonError: "Réessayer par biométrie",
          webauthnConditionalUINotWithDashlaneButton: "Utiliser une clé d'accès différente",
          websiteUnsecure: "Ce site Web n'est pas sûr. La sécurité des données que vous saisissez risque d'être compromise.",
          websiteUnsecureIframe: "Assurez-vous de faire confiance à ce site, car ce formulaire pourrait provenir d'un autre domaine."
        },
        "autologin-selection": {
          autologinHeader: "Choisissez le compte que vous souhaitez utiliser :",
          autologinLoggingIn: "Dashlane vous connecte automatiquement",
          clickToDismiss: "Cliquez à nouveau pour masquer",
          closeWindow: "Fermer",
          connectAs: "Connecter",
          defaultSpace: "Personnel",
          header: "Choisissez le compte avec lequel vous souhaitez vous connecter",
          headerInner: "Compte",
          openTheExtenion: "Ouvrir l'extension",
          openTheExtension: "Ouvrir l'extension",
          password: "Mot de passe",
          v5_autologinLoggingIn: "Dashlane vous connecte automatiquement."
        },
        "data-capture": {
          cancel: "Annuler",
          closeWindow: "Fermer",
          creditCardDetails: "Informations de la carte bancaire",
          enterLogin: "Saisir le nom d'utilisateur",
          enterMasterPassword: "Mot de passe Maître",
          header: "Enregistrez ces informations dans Dashlane. Vous n'aurez plus jamais à les saisir manuellement sur le Web.",
          headerLoggedout: "Connectez-vous à Dashlane pour enregister cette information.",
          login: "Connexion",
          neverAgain: "Ne plus me demander",
          neverForThisWebsite: "Jamais pour ce site",
          openDashlane: "Ouvrir Dashlane",
          save: "Enregistrer",
          types_ADDRESS: "Adresse",
          types_COMPANY: "Entreprise",
          types_EMAIL: "E-mail",
          types_IDENTITY: "Nom",
          types_PAYMENT_MEAN_CREDITCARD: "Carte bancaire",
          types_PHONE: "Numéro de téléphone",
          types_WEBSITE: "Site Web",
          wrongLogin: "Login incorrect",
          wrongPassword: "Mot de passe incorrect"
        },
        "feedback-notification": {
          editButton: "Modifier",
          loginCreated: "Nouvel identifiant créé.",
          loginUpdated: "Identifiants mis à jour",
          undoButton: "Annuler"
        },
        "follow-up-notification": {
          accountHolderLabel: "Titulaire",
          bicLabel: "Code BIC/SWIFT",
          cardNumberLabel: "Numéro de carte",
          copiedTooltip: "Copié",
          copyTooltip: "Copier",
          emailLabel: "E-mail",
          footerInformation:
            "Vous pouvez désactiver les fenêtres contextuelles en copier-coller dans les préférences de la saisie automatique.",
          headerTitle: "Copiez et collez les détails d'un élément",
          ibanLabel: "IBAN",
          loginLabel: "Nom d'utilisateur",
          otpLabel: "Jeton 2FA",
          passwordLabel: "Mot de passe",
          secondaryLoginLabel: "Nom d'utilisateur secondaire",
          securityCodeLabel: "Code de sécurité",
          usernameLabel: "Nom d'utilisateur"
        },
        "generic-popup": {
          click: "Changer maintenant",
          closeWindow: "Fermer",
          inputPlaceholder: "Votre nom",
          subtitle: "Your sex is",
          title: "Bonjour"
        },
        "limited-capability": {
          cancelPasswordLimit: "Pas maintenant",
          closeWindow: "Fermer",
          contentEssentialsPasswordLimit:
            "Passez au forfait Essentials pour enregistrer et synchroniser un nombre illimité de mots de passe sur deux appareils.",
          contentPasswordLimit:
            "Votre compte Dashlane Free ne vous permet pas de stocker davantage d'identifiants. Passez à un compte Premium pour bénéficier du stockage illimité.",
          contentPremiumPasswordLimit:
            "Passez au forfait Premium pour pouvoir synchroniser un nombre illimité d'identifiants sur tous vos appareils.",
          enterMasterPassword: "**************",
          goPremium: "Passez Premium",
          headerPasswordLimit: "Limite de stockage atteinte",
          hide: "Masquer",
          passwordLabel: "Mot de passe",
          show: "Afficher",
          upgradeToEssentials: "Passer à Dashlane Essentials",
          upgradeToPremium: "Passer à Dashlane Premium"
        },
        "master-password": {
          alwaysAuthorize: "Toujours autoriser",
          cancel: "Annuler",
          closeWindow: "Fermer",
          emailHelpText: "Cet e-mail confirme que vous êtes connecté à Dashlane.",
          enterMasterPassword: "Mot de passe Maître",
          hide: "Masquer",
          loggedIn: "Vous êtes connecté(e) en tant que <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Ne jamais demander mon mot de passe Maître pour déverrouiller les mots de passe",
          neverAskAgainAnyCredentialInfobox:
            "Si vous cochez cette case, la saisie du mot de passe Maître sera désactivée pour tous les mots de passe.",
          neverAskAgainCredentialCheckbox: "Ne jamais demander mon mot de passe Maître pour déverrouiller cet élément sécurisé",
          ok: "OK",
          show: "Afficher",
          title: "Déverrouiller les éléments sécurisés pendant 5 minutes",
          unlock: "Déverrouiller",
          unlockContent:
            "Si vous avez encore besoin d'accéder à vos données sécurisées après 5 minutes, vous devrez saisir à nouveau votre mot de passe Maître.",
          wrongPassword: "Mot de passe incorrect"
        },
        notification: {
          cancel: "Annuler",
          closeWindow: "Fermer",
          ok: "OK",
          webOnboardingAfterCancelCancel: "Réessayer",
          webOnboardingAfterCancelConfirm: "Retour à l'application",
          webOnboardingAfterCancelTitle: "Vous pouvez à nouveau essayer ce site Web ou utiliser un autre site.",
          webOnboardingAfterLoginCancel: "Recommencer",
          webOnboardingAfterLoginConfirm: "Retour à Dashlane",
          webOnboardingAfterLoginTitle: "Bravo ! Vous maîtrisez parfaitement Dashlane.",
          webOnboardingAfterSaveConfirm: "Afficher dans Dashlane",
          webOnboardingAfterSaveTitle: "Vous avez enregistré votre premier identifiant !"
        },
        "phishing-prevention": {
          cancelButton: "Ne pas faire confiance",
          currentUrlLabel: "URL actuelle",
          headerTitle: "Assurez-vous que vous faites confiance à ce site Web avant de coller vos informations de connexion",
          okButton: "Faire confiance et coller",
          phishingCTALink: "En savoir plus sur l'hameçonnage",
          trustedUrlLabel: "URL de confiance"
        },
        "purchase-receipt": {
          addRow: "Ajouter un article",
          cancel: "Annuler",
          closeWindow: "Fermer",
          collapse: "Masquer",
          disable: "Ne plus me demander",
          expand: "Afficher plus",
          header: "Souhaitez-vous enregistrer cet achat sur <strong>{0}</strong> dans Dashlane ?",
          header_nohtml: "Souhaitez-vous enregistrer cet achat sur {0} dans Dashlane ?",
          save: "Enregistrer",
          showLess: "Masquer",
          showMore: "En savoir plus",
          total: "TOTAL",
          untitledItem: "Article sans nom",
          v5_header_nohtml: "Enregistrez votre reçu {0} dans Dashlane",
          v5_total: "Total"
        },
        "save-password": {
          alwaysUseMasterPwd: "Protéger avec le mot de passe Dashlane",
          cancel: "Annuler",
          closeWindow: "Fermer",
          collapse: "Afficher moins",
          contentPremiumPasswordLimit:
            "Passez au forfait Premium pour pouvoir synchroniser un nombre illimité d'identifiants sur tous vos appareils.",
          createNewLogin: "Créez un nouvel identifiant",
          defaultSpace: "Personnel",
          enterLogin: "Choisissez un identifiant Dashlane",
          enterMasterPassword: "Mot de passe Maître",
          expand: "En savoir plus",
          footerBuyDashlane: "Acheter Dashlane",
          footerDismiss: "Fermer",
          header: "Enregistrer ce compte dans Dashlane ?",
          headerLoggedout: "Sauver ce mot de passe <strong>{0}</strong> dans Dashlane ?",
          headerLoggedout_nohtml: "Connectez-vous à Dashlane pour enregistrer votre mot de passe {0}.",
          headerPasswordLimit: "Limite de stockage atteinte",
          headerReplace: "Remplacer ce mot de passe dans Dashlane ?",
          headerReplace_nohtml: "Remplacer ce mot de passe dans Dashlane ?",
          headerTitleB2BTrialDiscontinued: "Votre compte est bloqué",
          header_nohtml: "Enregistrer cet identifiant dans Dashlane ?",
          infoboxDescriptionB2BTrialDiscontinued: "Votre mot de passe ne sera pas enregistré.",
          infoboxTitleB2BTrialDiscontinued: "Votre essai s'est terminé et votre compte est bloqué.",
          lastUsedItem: "Dernière utilisation",
          login: "Connexion",
          loginFieldLabel: "Pseudo",
          moreOptions: "Plus d'options",
          neverAgain: "Ne plus me demander",
          neverForThisWebsite: "Jamais pour ce site",
          openDashlane: "Ouvrir Dashlane",
          passwordFieldLabel: "MOT DE PASSE",
          passwordHideButton: "Masquer",
          passwordLimitReachedSubtitle: "Votre mot de passe ne sera pas enregistré.",
          passwordLimitReachedTitle: "Vous avez atteint la limite de mots de passe de votre forfait Free",
          passwordLimitReachedTitleReplace:
            "Vous avez atteint la limite des mots de passe que vous pouvez enregistrer dans votre forfait Free",
          passwordNearLimitTitle: {
            one: "Un mot de passe restant dans votre forfait Free",
            other: "{count} mots de passe restants dans votre forfait Free"
          },
          passwordShowButton: "Afficher",
          replace: "Remplacer",
          save: "Enregistrer",
          saveAsNew: "Enregister un nouveau",
          saveAsNewLimited: "Enregistrer",
          saveAsNewLimitedPlaceholder: "Limite de stockage atteinte",
          saveLimited: "Passez Premium",
          selectEmailOrUsernamePlaceholder: "Saisissez votre e-mail ou identifiant",
          selectEmailPlaceholder: "Veuillez saisir une adresse e-mail",
          updatePasswordOrCreateNewLogin: "Mettez à jour le mot de passe d'un identifiant existant ou créez un nouvel identifiant.",
          updatePasswordOrCreateNewLoginLimit: "Remplacer un identifiant existant",
          upgradeToPremium: "Passer à Dashlane Premium",
          upsellButton: "Passez à la version Premium pour bénéficier d'un stockage illimité de mots de passe",
          useOnlyOnSubdomain: "Seulement pour ce sous-domaine",
          wrongLogin: "Login incorrect",
          wrongPassword: "Mot de passe incorrect"
        },
        survey: { extension971: "Comment pouvons-nous améliorer Dashlane ?" },
        "user-verification": {
          cancel: "Annuler",
          enterMasterPassword: "Mot de passe Maître",
          hide: "Masquer",
          loggedIn: "Vous êtes connecté(e) en tant que <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Ne jamais demander mon mot de passe Maître pour déverrouiller les mots de passe",
          neverAskAgainAnyCredentialInfobox:
            "Si vous cochez cette case, la saisie du mot de passe Maître sera désactivée pour tous les mots de passe.",
          neverAskAgainCredentialCheckbox: "Ne jamais demander mon mot de passe Maître pour déverrouiller cet élément sécurisé",
          selectionPanelBiometric: "Biométrie",
          selectionPanelMasterPassword: "Mot de passe Maître",
          selectionPanelTitle: "Sélectionnez une méthode de déverrouillage :",
          show: "Afficher",
          tryAgain: "Veuillez réessayer",
          unknownError: "Une erreur inconnue est survenue",
          unlock: "Déverrouiller",
          useAnotherMethod: "Utiliser une autre méthode",
          webauthnGenericErrorDescription: "Une erreur est survenue lors de la vérification de sécurité.",
          webauthnGenericErrorTitle: "Something went wrong",
          webauthnPanelTitle:
            "Utilisez des données biométriques, une clé de sécurité ou le code PIN de votre appareil pour déverrouiller Dashlane.",
          webcardTitle: "Terminer la vérification de sécurité",
          wrongPassword: "Mot de passe incorrect"
        },
        "warn-generated-password": {
          cancel: "Annuler",
          closeWindow: "Fermer",
          contentWarnGeneratedPassword:
            "Dashlane vous contacte à cette adresse e-mail pour effectuer certaines actions critiques, comme la vérification de votre identité. Nous vous recommandons de créer un mot de passe à la fois fort et facile à retenir.",
          continue: "Continuer",
          header: "Êtes-vous sûr(e) que vous pourrez retenir ce mot de passe ?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Annuler",
          create_confirmButton: "Confirmer",
          create_content: "Créer une nouvelle clé d'accès avec Dashlane pour l'utilisateur {0} sur le site {1} ?",
          create_headerTitle: "Créer une nouvelle clé d'accès",
          create_withoutDashlaneButton: "Utiliser une clé autre que Dashlane"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Annuler",
          confirmButton: "Confirmer",
          content: "Voulez-vous vous connecter en tant que {0} sur {1} ?",
          get_withoutDashlaneButton: "Utiliser une clé autre que Dashlane",
          headerTitle: "Se connecter avec Dashlane"
        },
        "webauthn-passkey-selection": {
          headerTitle: "Choisissez le compte avec lequel vous souhaitez vous connecter",
          selection_withoutDashlaneButton: "Utiliser une clé d'accès différente"
        }
      };
    },
    6361: (e, a, t) => {
      e.exports = {
        de: t(5495),
        en: t(5143),
        es: t(6982),
        fr: t(9033),
        it: t(9244),
        ja: t(1376),
        ko: t(5299),
        nl: t(8199),
        pt: t(596),
        sv: t(8277),
        zh: t(1717)
      };
    },
    9244: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Annulla",
          closeWindow: "Chiudi",
          confirm: "Compilazione automatica",
          title: "Vuoi che Dashlane compili automaticamente questi dati protetti?",
          warning: "Ti verrà chiesta una nuova conferma se hai bisogno di accedere ai dati dopo 5 minuti."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Ultima password non salvata",
          TR_SELFCORRECT_STEP1_ADDRESS: "Indirizzo",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Autenticazione",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Coordinate bancarie",
          TR_SELFCORRECT_STEP1_COMPANY: "Azienda",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Carta di credito",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "Non compilare automaticamente",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Patente",
          TR_SELFCORRECT_STEP1_EMAIL: "Email",
          TR_SELFCORRECT_STEP1_FISCAL: "Partita IVA",
          TR_SELFCORRECT_STEP1_IDCARD: "Carta d'identità",
          TR_SELFCORRECT_STEP1_IDENTITY: "Identità",
          TR_SELFCORRECT_STEP1_LOGININFO: "Dati di accesso",
          TR_SELFCORRECT_STEP1_NOTHING: "Nessuno",
          TR_SELFCORRECT_STEP1_PASSPORT: "Passaporto",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Informazioni di pagamento",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Dati personali",
          TR_SELFCORRECT_STEP1_PHONE: "Numero di telefono",
          TR_SELFCORRECT_STEP1_SSN: "Codice fiscale",
          TR_SELFCORRECT_STEP1_WEBSITE: "Sito web",
          TR_SELFCORRECT_STEP2_ADDRESS: "Indirizzo",
          TR_SELFCORRECT_STEP2_AGE: "Età",
          TR_SELFCORRECT_STEP2_AL1: "Indirizzo riga 1",
          TR_SELFCORRECT_STEP2_AL2: "Indirizzo riga 2",
          TR_SELFCORRECT_STEP2_AL3: "Indirizzo riga 3",
          TR_SELFCORRECT_STEP2_APTNUM: "Numero dell'appartamento",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Nome dell'intestatario del conto",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Numero di conto bancario",
          TR_SELFCORRECT_STEP2_BANKNAME: "Nome della banca",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Numero edificio",
          TR_SELFCORRECT_STEP2_CITY: "Città",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Nome dell'azienda",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Ruolo",
          TR_SELFCORRECT_STEP2_COUNTRY: "Paese",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Prefisso internazionale",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Banca emittente",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Data di scadenza",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Mese di scadenza",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Anno di scadenza",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Numero di carta di credito",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Nome completo riportato sulla carta",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "Nome proprio riportato sulla carta",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Cognome riportato sulla carta",
          TR_SELFCORRECT_STEP2_DOB: "Data di nascita",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Data di consegna",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Data di nascita",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Data di scadenza",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "Nome",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Sesso",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Cognome",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Nome completo",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Numero di patente",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "Stato di emissione",
          TR_SELFCORRECT_STEP2_EMAIL: "Email",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "E-mail",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "Nome",
          TR_SELFCORRECT_STEP2_FLOOR: "Piano",
          TR_SELFCORRECT_STEP2_FULLNAME: "Nome completo",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Data di consegna",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Data di nascita",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Data di scadenza",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "Nome",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Sesso",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Nome completo",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Cognome",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Nazionalità",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "Numero di carta d'identità",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Posizione lavorativa",
          TR_SELFCORRECT_STEP2_LASTNAME: "Cognome",
          TR_SELFCORRECT_STEP2_LOGIN: "Nome utente",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Nome utente alternativo",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Nome da nubile",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "Secondo nome",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Iniziale del secondo nome",
          TR_SELFCORRECT_STEP2_NOTHING: "Nessuno",
          TR_SELFCORRECT_STEP2_OTP: "Token 2FA",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Data di consegna",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Data di nascita",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Data di scadenza",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Sesso",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "Nome",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Cognome",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Nome completo",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Luogo di consegna",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Nazionalità",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Numero di passaporto",
          TR_SELFCORRECT_STEP2_PASSWORD: "Password",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Conferma password",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Password attuale",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "Nuova Password",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Prefisso internazionale",
          TR_SELFCORRECT_STEP2_PHONENUM: "Numero di telefono",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Estensione del numero di telefono",
          TR_SELFCORRECT_STEP2_POB: "Luogo di nascita",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Numero di instradamento",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Sort code",
          TR_SELFCORRECT_STEP2_SSN: "Codice fiscale",
          TR_SELFCORRECT_STEP2_STATE: "Stato (es. Florida)",
          TR_SELFCORRECT_STEP2_STATECODE: "Codice stato (es. FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Nome della via",
          TR_SELFCORRECT_STEP2_STREETNUM: "Numero civico",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Tipo di strada (es. Viale)",
          TR_SELFCORRECT_STEP2_TAXNUM: "Partita IVA",
          TR_SELFCORRECT_STEP2_WEBSITE: "Sito",
          TR_SELFCORRECT_STEP2_ZIP: "CAP",
          aboutToExpire: "SCADE A BREVE",
          addNew_ADDRESS: "Aggiungi un nuovo indirizzo",
          addNew_AUTHENTICATION: "Metodo di autenticazione",
          addNew_BANK_STATEMENT: "Aggiungi un nuovo conto bancario",
          addNew_COMPANY: "Aggiungi una nuova società",
          addNew_DRIVER_LICENCE: "Aggiungi una nuova patente",
          addNew_EMAIL: "Aggiungi un nuovo indirizzo email",
          addNew_FISCAL: "Aggiungere un nuovo codice fiscale",
          addNew_IDENTITY: "Aggiungi un nuovo nome",
          addNew_ID_CARD: "Aggiungi una nuova carta d'identità",
          addNew_NOTHING: "Nessuno",
          addNew_PASSPORT: "Aggiungi un nuovo passaporto",
          addNew_PAYMENT_MEAN_CREDITCARD: "Aggiungi una nuova carta di credito",
          addNew_PAYMENT_MEAN_PAYPAL: "Aggiungi un nuovo account PayPal",
          addNew_PHONE: "Aggiungi un nuovo numero di telefono",
          addNew_SOCIAL_SECURITY: "Aggiungi un nuovo codice fiscale",
          addNew_WEBSITE: "Aggiungi un nuovo sito web",
          addObjectHeader: "Compila automaticamente questa informazione su qualsiasi sito.",
          allItemsButton: "Tutti gli elementi",
          buyDashlane: "Acquista Dashlane",
          closeWindow: "Chiudi",
          connectAs: "Accedi come",
          contactEmailGeneration: "Stai per generare una password forte per l'indirizzo email associato al tuo account Dashlane.",
          defaultSpace: "Personale",
          emailBusiness: "Aziendale",
          emailPersonal: "Personale",
          emptyStateWebcard_noLogin: "Nessun accesso salvato per {domain}.",
          emptyStateWebcard_noOtherInfo: "Non hai ancora salvato questa informazione.",
          emptyStateWebcard_noPassword: "Ancora nessuna password salvata per questo sito web.",
          existingPassword: "Hai già una password salvata per questo sito web. Sei sicuro di volerne generare una nuova?",
          expired: "SCADUTO",
          fixAutofillHeader: "Cosa dovrebbe esserci qui?",
          fixAutofillIssue: "Risolvi ora",
          generatePasswordButtons_closeSettings: "Chiudi impostazioni password",
          generatePasswordButtons_hidePassword: "Nascondi password",
          generatePasswordButtons_openSettings: "Apri impostazioni password",
          generatePasswordButtons_reshuffle: "Genera nuova password",
          generatePasswordButtons_showPassword: "Mostra password",
          generatePasswordDropdownTitle: "Generatore di password",
          generatePasswordOption_digits: "Cifre (es. 345)",
          generatePasswordOption_length: "Lunghezza ({0})",
          generatePasswordOption_letters: "Lettere (es. Aa)",
          generatePasswordOption_similarCharacters: "Caratteri simili (es. 0O 1| 2Z)",
          generatePasswordOption_symbols: "Simboli (@&$!#?)",
          generatePasswordStrength_none: "Calcolo in corso...",
          generatePasswordStrength_safelyUnguessable: "Questa sì che è una password forte!",
          generatePasswordStrength_somewhatGuessable: "È quasi perfetta.",
          generatePasswordStrength_tooGuessable: "Rafforziamo questa password.",
          generatePasswordStrength_veryGuessable: "Non male, ma si può migliorare.",
          generatePasswordStrength_veryUnguessable: "Massima sicurezza delle password raggiunta!",
          generatePwd: "Genera una password forte",
          hasAutofillIssue: "C'è un problema di compilazione automatica?",
          incomplete: "INCOMPLETO",
          infoboxDescriptionB2BTrialDiscontinued: "Non sei in grado di generare nuove password",
          infoboxTitleB2BTrialDiscontinued: "La tua prova è terminata e il tuo account è bloccato.",
          itemsCountLabel: { one: "{count} articolo", other: "{count} articoli" },
          mavReactivationBtn: "Accedi ora",
          mavReactivationCreateBtn: "Crea un account",
          mavReactivationDismiss: "Non chiedere di nuovo per questa sessione",
          mavReactivationOr: "o",
          mavReactivationTitle: "Accedi a Dashlane per compilare i moduli con un solo clic.",
          openTheExtenion: "Apri l'estensione",
          openTheExtension: "Apri l'estensione",
          optionsAutofillSomethingElse: "Compila automaticamente altro",
          optionsClose: "Metti in pausa per questa sessione",
          optionsCloseMenu: "Nascondi più opzioni",
          optionsDontAutofill: "Metti in pausa finché non lo riattivo",
          optionsFillSomethingElse: "Compila automaticamente altro",
          optionsNeverSuggest: "Metti in pausa finché non lo riattivo",
          optionsOpenMenu: "Mostra più opzioni",
          optionsTitle: "Compilazione automatica di questo campo",
          optionsTooltip: "Compilazione automatica di questo campo",
          password: "Password",
          passwordHistoryDomain: "Questo sito",
          passwordHistorySee: "Vedi cronologia delle password",
          passwordHistoryTitle: "Password",
          passwordLimitSubtitle: "Passa a Premium",
          passwordLimitTitle: "Hai raggiunto il limite di password del tuo piano Free. Questa password non verrà salvata.",
          passwordLimitWarningButton: "Passa a Premium per avere l'archiviazione illimitata",
          passwordLimitWarningDesc:
            "Non puoi archiviare altri dati di accesso con un account Dashlane Free. Hai raggiunto il limite di archiviazione previsto dal tuo account Free: puoi solo modificare i dati esistenti.",
          passwordLimitWarningLabel: "Attenzione:",
          passwordNearLimitTitle: { one: "Una password rimasta nel tuo piano Free", other: "{count} password rimaste nel tuo piano Free" },
          phoneAny: "Altro",
          phoneFax: "Fax",
          phoneLandline: "Casa",
          phoneMobile: "Cellulare",
          phoneWorkFax: "Fax ufficio",
          phoneWorkLandline: "Ufficio",
          phoneWorkMobile: "Cellulare di lavoro",
          reactivationHeader: "Attiva Dashlane per compilare i moduli con un solo clic.",
          roleButton: "Pulsante",
          sca_feedback: "Ancora nessuna password per questo sito web.",
          sca_feedback_add: "Aggiungi una password",
          search: "Cerca",
          searchInputPlaceholder: "Cerca i tuoi articoli...",
          seePasswordLink: "Vedi password",
          shush_feedback: "Questo non verrà compilato automaticamente.",
          shush_feedback_learnMore: "Scopri di più",
          strongPassword: "Questa sì che è una password forte!",
          suggestedButton: "Consigliati",
          topOfWalletSeparator: "Altre modalità di pagamento",
          types_ADDRESS: "Indirizzo",
          types_AUTHENTICATION: "Accedi come",
          types_BANK_STATEMENT: "Conto bancario",
          types_COMPANY: "Azienda",
          types_DRIVER_LICENCE: "Patente di guida",
          types_EMAIL: "Email",
          types_FISCAL: "Partita IVA",
          types_GENERATED_PASSWORD: "Accedi come",
          types_IDENTITY: "Identità",
          types_ID_CARD: "Carta d'identità",
          types_PASSPORT: "Passaporto",
          types_PASSWORD: "Password",
          types_PAYMENT_MEAN_CREDITCARD: "Carta di credito",
          types_PHONE: "Numero di telefono",
          types_SOCIAL_SECURITY: "Codice fiscale",
          types_WEBSITE: "Sito web",
          upgradeToPremium: "Passa a Premium",
          usePassword: "Utilizza password generata",
          v5_addNew_ADDRESS: "Aggiungi un nuovo indirizzo",
          v5_addNew_AUTHENTICATION: "Aggiungi nuovi dati di accesso",
          v5_addNew_BANK_STATEMENT: "Aggiungi un conto bancario",
          v5_addNew_COMPANY: "Aggiungi una nuova azienda",
          v5_addNew_DRIVER_LICENCE: "Aggiungi una nuova patente di guida",
          v5_addNew_EMAIL: "Aggiungi un indirizzo email",
          v5_addNew_FISCAL: "Aggiungi un nuovo numero di partita IVA",
          v5_addNew_IDENTITY: "Aggiungi nuovi dati personali",
          v5_addNew_ID_CARD: "Aggiungi una nuova carta d'identità",
          v5_addNew_PASSPORT: "Aggiungi un nuovo passaporto",
          v5_addNew_PASSWORD: "Aggiungi una nuova password",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Aggiungi una nuova carta di credito",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Aggiungi un nuovo conto PayPal",
          v5_addNew_PHONE: "Aggiungi un numero di telefono",
          v5_addNew_SOCIAL_SECURITY: "Aggiungi un nuovo codice fiscale",
          v5_addNew_WEBSITE: "Aggiungi un nuovo sito web",
          v5_addObjectHeader: "Inserisci automaticamente questo dato su qualsiasi sito.",
          v5_connectAs: "Accedi come",
          veryWeakPassword: "La password immessa è molto debole",
          weakPassword: "Rafforziamo questa password.",
          webAuthnReactivationDontAskAgain: "Non chiedere di nuovo per questa sessione",
          webAuthnReactivationErrorMessage: "Puoi riprovare?",
          webAuthnReactivationFallbackToMasterPassword: "Usa Master Password",
          webAuthnReactivationHeader: "Sblocca Dashlane per accedere",
          webAuthnReactivationLoginButton: "Sblocca con la biometria",
          webAuthnReactivationLoginButtonError: "Prova di nuovo la biometria",
          webauthnConditionalUINotWithDashlaneButton: "Usa una passkey differente",
          websiteUnsecure: "Questo sito non è sicuro. Le informazioni inserite qui potrebbero essere compromesse.",
          websiteUnsecureIframe: "Assicurati che sia un sito affidabile, questo modulo potrebbe provenire da un dominio diverso."
        },
        "autologin-selection": {
          autologinHeader: "SCEGLI L'ACCOUNT CON CUI DESIDERI ACCEDERE:",
          autologinLoggingIn: "DASHLANE ESEGUE AUTOMATICAMENTE L'ACCESSO",
          clickToDismiss: "Clicca di nuovo per nasconderlo",
          closeWindow: "Chiudi",
          connectAs: "Accedi come",
          defaultSpace: "Personale",
          header: "Scegli l'account con cui desideri accedere",
          headerInner: "Account",
          openTheExtenion: "Apri l'estensione",
          openTheExtension: "Apri l'estensione",
          password: "Password",
          v5_autologinLoggingIn: "Dashlane sta effettuando automaticamente l'accesso"
        },
        "data-capture": {
          cancel: "Annulla",
          closeWindow: "Chiudi",
          creditCardDetails: "Dati della carta di credito",
          enterLogin: "Inserisci dati di accesso",
          enterMasterPassword: "Master Password",
          header: "Salva questa informazione in Dashlane, così non dovrai più digitarla online.",
          headerLoggedout: "Accedi a Dashlane per salvare questa informazione.",
          login: "Accedi",
          neverAgain: "Non chiedermelo più",
          neverForThisWebsite: "Mai per questo sito",
          openDashlane: "Apri Dashlane",
          save: "Salva",
          types_ADDRESS: "Indirizzo",
          types_COMPANY: "Azienda",
          types_EMAIL: "E-mail",
          types_IDENTITY: "Nome",
          types_PAYMENT_MEAN_CREDITCARD: "Carta di credito",
          types_PHONE: "Numero di telefono",
          types_WEBSITE: "Sito",
          wrongLogin: "Dati di accesso sbagliati",
          wrongPassword: "Password errata"
        },
        "feedback-notification": {
          editButton: "Modifica",
          loginCreated: "Creato nuovo login.",
          loginUpdated: "Login aggiornato.",
          undoButton: "Annulla"
        },
        "follow-up-notification": {
          accountHolderLabel: "Intestatario del conto",
          bicLabel: "Codice BIC/SWIFT",
          cardNumberLabel: "Numero della carta",
          copiedTooltip: "Copiato",
          copyTooltip: "Copia",
          emailLabel: "E-mail",
          footerInformation: "Puoi disattivare i pop-up di copia e incolla in Impostazioni compilazione automatica.",
          headerTitle: "Copia e incolla i dettagli dell'elemento",
          ibanLabel: "IBAN",
          loginLabel: "Nome utente",
          otpLabel: "Token 2FA",
          passwordLabel: "Password",
          secondaryLoginLabel: "Nome utente alternativo",
          securityCodeLabel: "Codice di sicurezza",
          usernameLabel: "Nome utente"
        },
        "generic-popup": {
          click: "Cambiala ora!",
          closeWindow: "Chiudi",
          inputPlaceholder: "Digita il tuo nome",
          subtitle: "Sesso",
          title: "Ciao"
        },
        "limited-capability": {
          cancelPasswordLimit: "Non ora",
          closeWindow: "Chiudi",
          contentEssentialsPasswordLimit:
            "Passa al piano Essentials per avere un numero illimitato di password e la possibilità di sincronizzazione su due dispositivi.",
          contentPasswordLimit:
            "Non puoi archiviare altri dati di accesso con un account Dashlane Free. Per avere l'archiviazione illimitata, passa a Premium.",
          contentPremiumPasswordLimit:
            "Passa al piano Premium per avere un numero illimitato di accessi e la sincronizzazione su un numero illimitato di dispositivi.",
          enterMasterPassword: "**************",
          goPremium: "Passa a Premium",
          headerPasswordLimit: "Limite di archiviazione raggiunto",
          hide: "Nascondi",
          passwordLabel: "Password",
          show: "Mostra",
          upgradeToEssentials: "Passa a Essentials",
          upgradeToPremium: "Passa a Premium"
        },
        "master-password": {
          alwaysAuthorize: "Autorizza sempre",
          cancel: "Annulla",
          closeWindow: "Chiudi",
          emailHelpText: "La tua email qui conferma che stai effettuando l'accesso a Dashlane.",
          enterMasterPassword: "Master Password",
          hide: "Nascondi",
          loggedIn: "Hai effettuato l'accesso come <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Non richiedere mai la Master Password per sbloccare le password",
          neverAskAgainAnyCredentialInfobox: "Selezionando questa casella, disattivi Richiedi Master Password per tutte le password.",
          neverAskAgainCredentialCheckbox: "Non richiedere mai la Master Password per sbloccare questo elemento sicuro",
          ok: "Ok",
          show: "Mostra",
          title: "Sblocca gli elementi sicuri per 5 minuti",
          unlock: "Sblocca",
          unlockContent: "Se dopo 5 minuti hai ancora bisogno di accedere ai tuoi dati protetti, dovrai inserirla di nuovo.",
          wrongPassword: "Password errata"
        },
        notification: {
          cancel: "Annulla",
          closeWindow: "Chiudi",
          ok: "Ok",
          webOnboardingAfterCancelCancel: "Riprova",
          webOnboardingAfterCancelConfirm: "Torna all'app",
          webOnboardingAfterCancelTitle: "Puoi provare di nuovo da questo sito o utilizzarne un altro.",
          webOnboardingAfterLoginCancel: "Chiudi",
          webOnboardingAfterLoginConfirm: "Torna a Dashlane",
          webOnboardingAfterLoginTitle: "Congratulazioni, sei un professionista di Dashlane!",
          webOnboardingAfterSaveConfirm: "Vedi in Dashlane",
          webOnboardingAfterSaveTitle: "Hai salvato il tuo primo accesso!"
        },
        "phishing-prevention": {
          cancelButton: "Non autorizzare",
          currentUrlLabel: "URL attuale",
          headerTitle: "Assicurati che questo sito web sia attendibile prima d'incollare i dati di accesso",
          okButton: "Autorizza e incolla",
          phishingCTALink: "Scopri di più su phishing",
          trustedUrlLabel: "URL attendibile"
        },
        "purchase-receipt": {
          addRow: "Aggiungi elemento",
          cancel: "Annulla",
          closeWindow: "Chiudi",
          collapse: "Meno",
          disable: "Non chiedermelo di nuovo",
          expand: "Mostra altro",
          header: "Salvare la tua ricevuta di <strong>{0}</strong> su Dashlane?",
          header_nohtml: "Salvare la tua ricevuta di {0} su Dashlane?",
          save: "Salva",
          showLess: "Meno",
          showMore: "Mostra altro",
          total: "TOTALE",
          untitledItem: "Elemento senza titolo",
          v5_header_nohtml: "Salva la tua ricevuta {0} su Dashlane",
          v5_total: "Totale"
        },
        "save-password": {
          alwaysUseMasterPwd: "Richiedi master password prima di usare",
          cancel: "Annulla",
          closeWindow: "Chiudi",
          collapse: "Mostra meno",
          contentPremiumPasswordLimit:
            "Passa al piano Premium per avere un numero illimitato di accessi e la sincronizzazione su un numero illimitato di dispositivi.",
          createNewLogin: "Crea un nuovo login",
          defaultSpace: "Personale",
          enterLogin: "Scegli il tuo login Dashlane...",
          enterMasterPassword: "Master Password",
          expand: "Mostra di più",
          footerBuyDashlane: "Acquista Dashlane",
          footerDismiss: "Ignora",
          header: "Salvare questo account in Dashlane?",
          headerLoggedout: "Accedi a Dashlane per salvare la tua password di <strong>{0}</strong>.",
          headerLoggedout_nohtml: "Accedi a Dashlane per salvare la tua password di {0}.",
          headerPasswordLimit: "Limite di archiviazione raggiunto",
          headerReplace: "Sostituire questa password in Dashlane?",
          headerReplace_nohtml: "Sostituire questa password in Dashlane?",
          headerTitleB2BTrialDiscontinued: "Il tuo account è bloccato",
          header_nohtml: "Salvare questi dati di accesso in Dashlane?",
          infoboxDescriptionB2BTrialDiscontinued: "La tua password non verrà salvata.",
          infoboxTitleB2BTrialDiscontinued: "La tua prova è terminata e il tuo account è bloccato.",
          lastUsedItem: "Ultimo utilizzo",
          login: "Accedi",
          loginFieldLabel: "Nome utente",
          moreOptions: "Altre opzioni",
          neverAgain: "Non chiedermelo più",
          neverForThisWebsite: "Mai per questo sito",
          openDashlane: "Apri Dashlane",
          passwordFieldLabel: "PASSWORD",
          passwordHideButton: "Nascondi",
          passwordLimitReachedSubtitle: "La tua password non verrà salvata.",
          passwordLimitReachedTitle: "Hai raggiunto il limite di password del tuo piano Free",
          passwordLimitReachedTitleReplace: "Hai raggiunto il limite di password che puoi salvare nel tuo piano Free",
          passwordNearLimitTitle: { one: "Una password rimasta nel tuo piano Free", other: "{count} password rimaste nel tuo piano Free" },
          passwordShowButton: "Mostra",
          replace: "Sostituisci",
          save: "Salva",
          saveAsNew: "Salva come nuovo",
          saveAsNewLimited: "Salva come nuovo",
          saveAsNewLimitedPlaceholder: "Limite di archiviazione raggiunto",
          saveLimited: "Passa a Premium",
          selectEmailOrUsernamePlaceholder: "Inserisci e-mail o nome utente",
          selectEmailPlaceholder: "Inserisci un indirizzo email",
          updatePasswordOrCreateNewLogin: "Aggiorna un login esistente con questa password o crea un nuovo login.",
          updatePasswordOrCreateNewLoginLimit: "Sostituisci un accesso esistente",
          upgradeToPremium: "Passa a Premium",
          upsellButton: "Passa a Premium per archiviare un numero illimitato di password",
          useOnlyOnSubdomain: "Usa solo questo sottodominio",
          wrongLogin: "Dati di accesso errati",
          wrongPassword: "Password errata"
        },
        survey: { extension971: "Lascia un feedback per migliorare Dashlane" },
        "user-verification": {
          cancel: "Annulla",
          enterMasterPassword: "Master Password",
          hide: "Nascondi",
          loggedIn: "Hai effettuato l'accesso come<span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Non richiedere mai la Master Password per sbloccare le password",
          neverAskAgainAnyCredentialInfobox: "Selezionando questa casella, disattivi Richiedi Master Password per tutte le password.",
          neverAskAgainCredentialCheckbox: "Non richiedere mai la Master Password per sbloccare questo elemento sicuro",
          selectionPanelBiometric: "Dati biometrici",
          selectionPanelMasterPassword: "Master Password",
          selectionPanelTitle: "Seleziona un metodo di sblocco:",
          show: "Mostra",
          tryAgain: "Riprova",
          unknownError: "Si è verificato un errore sconosciuto",
          unlock: "Sblocca",
          useAnotherMethod: "Utilizza un altro metodo",
          webauthnGenericErrorDescription: "Si è verificato un errore durante la verifiche di sicurezza.",
          webauthnGenericErrorTitle: "Qualcosa è andato storto",
          webauthnPanelTitle: "Utilizza dati biometrici, una chiave di sicurezza o il codice PIN del dispositivo per sbloccare Dashlane.",
          webcardTitle: "Completa la verifica di sicurezza",
          wrongPassword: "Password errata"
        },
        "warn-generated-password": {
          cancel: "Annulla",
          closeWindow: "Chiudi",
          contentWarnGeneratedPassword:
            "Dashlane ti contatta tramite questo account e-mail per svolgere azioni importanti, quali la verifica dell'identità. Ti consigliamo di creare una password sicura ma facile da ricordare.",
          continue: "Continua",
          header: "Sei sicuro di riuscire a ricordare questa password?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Annulla",
          create_confirmButton: "Conferma",
          create_content: "Creare una nuova passkey con Dashlane per l'utente {0} sul sito {1}?",
          create_headerTitle: "Crea nuova passkey",
          create_withoutDashlaneButton: "Usa una chiave non Dashlane"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Annulla",
          confirmButton: "Conferma",
          content: "Vuoi accedere come {0} su {1}?",
          get_withoutDashlaneButton: "Usa una chiave non Dashlane",
          headerTitle: "Accedi con Dashlane"
        },
        "webauthn-passkey-selection": {
          headerTitle: "Scegli l'account con cui desideri accedere",
          selection_withoutDashlaneButton: "Usa una passkey differente"
        }
      };
    },
    1376: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "キャンセル",
          closeWindow: "閉じる",
          confirm: "自動入力",
          title: "Dashlane を使用して、このセキュアな情報を自動入力しますか？",
          warning: "データへのアクセスが必要な場合は、5分後に再度プロンプトを表示します。"
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "最新の未保存パスワード",
          TR_SELFCORRECT_STEP1_ADDRESS: "住所",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "認証",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "銀行の詳細",
          TR_SELFCORRECT_STEP1_COMPANY: "会社",
          TR_SELFCORRECT_STEP1_CREDITCARD: "クレジットカード",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "このフィールドに自動入力しない",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "運転免許証",
          TR_SELFCORRECT_STEP1_EMAIL: "E メール",
          TR_SELFCORRECT_STEP1_FISCAL: "税番号",
          TR_SELFCORRECT_STEP1_IDCARD: "ID カード",
          TR_SELFCORRECT_STEP1_IDENTITY: "アイデンティティ",
          TR_SELFCORRECT_STEP1_LOGININFO: "ログイン情報",
          TR_SELFCORRECT_STEP1_NOTHING: "なし",
          TR_SELFCORRECT_STEP1_PASSPORT: "パスポート",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "支払い情報",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "個人情報",
          TR_SELFCORRECT_STEP1_PHONE: "電話番号",
          TR_SELFCORRECT_STEP1_SSN: "社会保障番号カード",
          TR_SELFCORRECT_STEP1_WEBSITE: "ウェブサイト",
          TR_SELFCORRECT_STEP2_ADDRESS: "住所",
          TR_SELFCORRECT_STEP2_AGE: "年齢",
          TR_SELFCORRECT_STEP2_AL1: "住所（1 行目）",
          TR_SELFCORRECT_STEP2_AL2: "住所（2 行目）",
          TR_SELFCORRECT_STEP2_AL3: "住所（3 行目）",
          TR_SELFCORRECT_STEP2_APTNUM: "アパート番号",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "口座名義人名",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "銀行口座番号",
          TR_SELFCORRECT_STEP2_BANKNAME: "銀行名",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "建物番号",
          TR_SELFCORRECT_STEP2_CITY: "市",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "会社名",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "役職",
          TR_SELFCORRECT_STEP2_COUNTRY: "国",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "国番号",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "発行銀行",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "有効期限（月、年）",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "有効期限（月）",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "有効期限（年）",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "クレジットカード番号",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "カード名義人名（フルネーム）",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "名",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "姓",
          TR_SELFCORRECT_STEP2_DOB: "生年月日",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "配送日",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "生年月日",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "有効期限",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "名",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "性別",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "姓",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "氏名",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "運転免許証番号",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "発行した都道府県",
          TR_SELFCORRECT_STEP2_EMAIL: "E メール",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "E メール",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "名",
          TR_SELFCORRECT_STEP2_FLOOR: "フロア",
          TR_SELFCORRECT_STEP2_FULLNAME: "氏名",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "配送日",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "生年月日",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "有効期限",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "名",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "性別",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "氏名",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "姓",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "国籍",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "ID カード番号",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "部署/役職",
          TR_SELFCORRECT_STEP2_LASTNAME: "姓",
          TR_SELFCORRECT_STEP2_LOGIN: "ユーザーネーム",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "代替ユーザーネーム",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "旧姓",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "ミドルネーム",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "ミドルネームのイニシャル",
          TR_SELFCORRECT_STEP2_NOTHING: "なし",
          TR_SELFCORRECT_STEP2_OTP: "2FA トークン",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "配送日",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "生年月日",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "有効期限",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "性別",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "名",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "姓",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "氏名",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "配送場所",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "国籍",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "パスポート番号",
          TR_SELFCORRECT_STEP2_PASSWORD: "パスワード",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "パスワードを確認",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "現在のパスワード",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "新しいパスワード",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "電話の国番号",
          TR_SELFCORRECT_STEP2_PHONENUM: "電話番号",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "内線番号",
          TR_SELFCORRECT_STEP2_POB: "出生地",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "ルーティング番号",
          TR_SELFCORRECT_STEP2_SORT_CODE: "ソートコード",
          TR_SELFCORRECT_STEP2_SSN: "社会保障番号カード",
          TR_SELFCORRECT_STEP2_STATE: "都道府県（例：東京）",
          TR_SELFCORRECT_STEP2_STATECODE: "都道府県コード（例：東京）",
          TR_SELFCORRECT_STEP2_STREETNAME: "町名",
          TR_SELFCORRECT_STEP2_STREETNUM: "家屋番号",
          TR_SELFCORRECT_STEP2_STREETTYPE: "通りの種類（例：アベニュー）",
          TR_SELFCORRECT_STEP2_TAXNUM: "税番号",
          TR_SELFCORRECT_STEP2_WEBSITE: "ウェブサイト",
          TR_SELFCORRECT_STEP2_ZIP: "郵便番号",
          aboutToExpire: "まもなく期限切れです",
          addNew_ADDRESS: "新しい住所を追加する",
          addNew_AUTHENTICATION: "認証方法",
          addNew_BANK_STATEMENT: "新しい銀行口座を追加",
          addNew_COMPANY: "新しい会社を追加する",
          addNew_DRIVER_LICENCE: "新しい運転免許証を追加する",
          addNew_EMAIL: "新しい E メールアドレスを追加する",
          addNew_FISCAL: "新しい納税者番号を追加する",
          addNew_IDENTITY: "新しい名前を追加する",
          addNew_ID_CARD: "新しい ID 追加する",
          addNew_NOTHING: "なし",
          addNew_PASSPORT: "新しいパスポートを追加する",
          addNew_PAYMENT_MEAN_CREDITCARD: "新しいクレジットカードを追加する",
          addNew_PAYMENT_MEAN_PAYPAL: "新しい PayPal アカウントを追加する",
          addNew_PHONE: "新しい電話番号を追加する",
          addNew_SOCIAL_SECURITY: "新しい社会保障番号を追加する",
          addNew_WEBSITE: "新しいウェブサイトを追加する",
          addObjectHeader: "どのウェブサイトでもこの情報を自動入力する。",
          allItemsButton: "すべてのアイテム",
          buyDashlane: "Dashlane を購入",
          closeWindow: "閉じる",
          connectAs: "以下でログイン：",
          contactEmailGeneration: "Dashlane アカウントに登録した E メールアドレス用に、強固なパスワードを生成しようとしています。",
          defaultSpace: "パーソナル",
          emailBusiness: "ビジネス",
          emailPersonal: "パーソナル",
          emptyStateWebcard_noLogin: "{domain} のログイン情報が保存されていません。",
          emptyStateWebcard_noOtherInfo: "この情報がまだ保存されていません。",
          emptyStateWebcard_noPassword: "このウェブサイトのパスワードがまだ保存されていません。",
          existingPassword: "すでにこのウェブサイト用に保存されているパスワードがあります。新しいパスワードを生成しますか？",
          expired: "期限切れ",
          fixAutofillHeader: "ここには何が含まれますか？",
          fixAutofillIssue: "今すぐ修正",
          generatePasswordButtons_closeSettings: "パスワード設定を閉じる",
          generatePasswordButtons_hidePassword: "パスワードを非表示にする",
          generatePasswordButtons_openSettings: "パスワード設定を開く",
          generatePasswordButtons_reshuffle: "新しいパスワードを生成",
          generatePasswordButtons_showPassword: "パスワードを表示",
          generatePasswordDropdownTitle: "パスワード生成機",
          generatePasswordOption_digits: "数字（例:345）",
          generatePasswordOption_length: "長さ（{0}）",
          generatePasswordOption_letters: "文字（例:Aa）",
          generatePasswordOption_similarCharacters: "類似文字（例:0O、1|、2Z）",
          generatePasswordOption_symbols: "記号 (@&$!#?)",
          generatePasswordStrength_none: "診断しています...",
          generatePasswordStrength_safelyUnguessable: "強力なパスワードになりました！",
          generatePasswordStrength_somewhatGuessable: "あと少しで素晴らしい強さになります。",
          generatePasswordStrength_tooGuessable: "このパスワードをさらに強力にしましょう。",
          generatePasswordStrength_veryGuessable: "スタートとしては素晴らしいですが、もう少し強力なものにできます。",
          generatePasswordStrength_veryUnguessable: "最高のパスワード強度に達しました！",
          generatePwd: "強固なパスワードを作成",
          hasAutofillIssue: "自動入力に問題が発生しましたか？",
          incomplete: "不完全",
          infoboxDescriptionB2BTrialDiscontinued: "新しいパスワードを生成できません",
          infoboxTitleB2BTrialDiscontinued: "トライアルが終了し、アカウントが凍結されました。",
          itemsCountLabel: { other: "{count}項目" },
          mavReactivationBtn: "今すぐログイン",
          mavReactivationCreateBtn: "アカウントを作成",
          mavReactivationDismiss: "このセッションを今後表示しない",
          mavReactivationOr: "または",
          mavReactivationTitle: "Dashlane にログインして、ワンクリックでフォームに入力しましょう。",
          openTheExtenion: "拡張機能を開く",
          openTheExtension: "拡張機能を開く",
          optionsAutofillSomethingElse: "他の項目を自動入力",
          optionsClose: "この閲覧で一時停止",
          optionsCloseMenu: "その他のオプションを閉じる",
          optionsDontAutofill: "オンにするまで一時停止",
          optionsFillSomethingElse: "他の項目を自動入力",
          optionsNeverSuggest: "オンにするまで一時停止",
          optionsOpenMenu: "その他のオプションを開く",
          optionsTitle: "このフィールドに自動入力",
          optionsTooltip: "このフィールドに自動入力",
          password: "パスワード",
          passwordHistoryDomain: "このウェブサイト",
          passwordHistorySee: "パスワード履歴を表示",
          passwordHistoryTitle: "パスワード",
          passwordLimitSubtitle: "プレミアムへのアップグレード",
          passwordLimitTitle: "無料プランのパスワード制限に達しました。このパスワードは保存されません。",
          passwordLimitWarningButton: "ストレージ容量に制限のないプレミアムプランにアップグレードしましょう",
          passwordLimitWarningDesc:
            "無料の Dashlane アカウントではこれ以上ログイン情報を保存することができません。無料プランのストレージ制限に達したため、既存のログイン情報のみ変更できます。",
          passwordLimitWarningLabel: "警告：",
          passwordNearLimitTitle: { other: "無料プランで利用可能なパスワードはあと {count} 個です" },
          phoneAny: "その他",
          phoneFax: "Fax",
          phoneLandline: "ホーム",
          phoneMobile: "携帯電話",
          phoneWorkFax: "勤務先ファックス",
          phoneWorkLandline: "仕事",
          phoneWorkMobile: "勤務先携帯電話",
          reactivationHeader: "Dashlane を使ってワンクリックでフォームに記入しましょう。",
          roleButton: "ボタン",
          sca_feedback: "このウェブサイトのパスワードはまだ保存されていません。",
          sca_feedback_add: "パスワードを追加",
          search: "検索",
          searchInputPlaceholder: "項目を検索...",
          seePasswordLink: "パスワードを見る",
          shush_feedback: "ここには自動入力しません。",
          shush_feedback_learnMore: "もっと詳しく",
          strongPassword: "強固なパスワードです！",
          suggestedButton: "おすすめ",
          topOfWalletSeparator: "その他のお支払い方法",
          types_ADDRESS: "住所",
          types_AUTHENTICATION: "以下でログイン：",
          types_BANK_STATEMENT: "銀行口座",
          types_COMPANY: "会社",
          types_DRIVER_LICENCE: "運転免許証",
          types_EMAIL: "E メール",
          types_FISCAL: "税番号",
          types_GENERATED_PASSWORD: "以下でログイン：",
          types_IDENTITY: "アイデンティティ",
          types_ID_CARD: "ID カード",
          types_PASSPORT: "パスポート",
          types_PASSWORD: "パスワード",
          types_PAYMENT_MEAN_CREDITCARD: "クレジットカード",
          types_PHONE: "電話番号",
          types_SOCIAL_SECURITY: "社会保障番号 カード",
          types_WEBSITE: "ウェブサイト",
          upgradeToPremium: "プレミアムへのアップグレード",
          usePassword: "生成されたパスワードを使用",
          v5_addNew_ADDRESS: "新しい住所を追加",
          v5_addNew_AUTHENTICATION: "新しいログインを追加",
          v5_addNew_BANK_STATEMENT: "新しい銀行口座を追加",
          v5_addNew_COMPANY: "新しい会社を追加",
          v5_addNew_DRIVER_LICENCE: "新しい免許証を追加",
          v5_addNew_EMAIL: "新しい E メールアドレスを追加する",
          v5_addNew_FISCAL: "新しい税番号を追加",
          v5_addNew_IDENTITY: "新しい個人情報を追加する",
          v5_addNew_ID_CARD: "新しい ID カードを追加",
          v5_addNew_PASSPORT: "新しいパスポートを追加",
          v5_addNew_PASSWORD: "新しいパスワードを追加",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "新しいクレジットカードを追加",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "新しい PayPal アカウントを追加",
          v5_addNew_PHONE: "新しい電話番号を追加",
          v5_addNew_SOCIAL_SECURITY: "新しい社会保障番号を追加する",
          v5_addNew_WEBSITE: "新しいウェブサイトを追加",
          v5_addObjectHeader: "どのウェブサイトでもこの情報を自動入力する。",
          v5_connectAs: "以下でログイン：",
          veryWeakPassword: "入力されたパスワードは非常に脆弱です",
          weakPassword: "このパスワードをさらに強力にしましょう。",
          webAuthnReactivationDontAskAgain: "このセッションを今後表示しない",
          webAuthnReactivationErrorMessage: "もう一度お試しいただけますか？",
          webAuthnReactivationFallbackToMasterPassword: "マスターパスワードを使用",
          webAuthnReactivationHeader: "Dashlane のロックを解除してログイン",
          webAuthnReactivationLoginButton: "生体認証でロック解除",
          webAuthnReactivationLoginButtonError: "生体認証をもう一度試す",
          webauthnConditionalUINotWithDashlaneButton: "別のパスキーを使用",
          websiteUnsecure: "このウェブサイトは安全ではありません。ここで入力した情報が侵害される可能性があります。",
          websiteUnsecureIframe:
            "このサイトが信頼できるサイトであることをご確認ください。このフォームは別のドメインに由来する可能性があります。"
        },
        "autologin-selection": {
          autologinHeader: "ログインに使用するアカウントを選んでください：",
          autologinLoggingIn: "Dashlane に自動的にログインしています",
          clickToDismiss: "再度クリックしてこれを非表示にする",
          closeWindow: "閉じる",
          connectAs: "以下でログイン：",
          defaultSpace: "パーソナル",
          header: "ログインしたいアカウントを選んでください",
          headerInner: "アカウント",
          openTheExtenion: "拡張機能を開く",
          openTheExtension: "拡張機能を開く",
          password: "パスワード",
          v5_autologinLoggingIn: "Dashlane に自動的にログインしています"
        },
        "data-capture": {
          cancel: "キャンセル",
          closeWindow: "閉じる",
          creditCardDetails: "クレジットカードの詳細",
          enterLogin: "ログインを入力",
          enterMasterPassword: "マスターパスワード",
          header: "この情報を Dashlane に保存しておけば、オンラインで再度入力する必要がなくなります。",
          headerLoggedout: "Dashlane にログインしてこの情報を保存する。",
          login: "ログイン",
          neverAgain: "今後表示しない",
          neverForThisWebsite: "このウェブサイトではしない",
          openDashlane: "Dashlane を開く",
          save: "保存",
          types_ADDRESS: "住所",
          types_COMPANY: "会社",
          types_EMAIL: "E メール",
          types_IDENTITY: "氏名",
          types_PAYMENT_MEAN_CREDITCARD: "クレジットカード",
          types_PHONE: "電話番号",
          types_WEBSITE: "ウェブサイト",
          wrongLogin: "ログイン情報が違います",
          wrongPassword: "パスワードが違います"
        },
        "feedback-notification": {
          editButton: "編集",
          loginCreated: "新しいログイン情報を作成しました。",
          loginUpdated: "ログイン情報を更新しました。",
          undoButton: "取り消す"
        },
        "follow-up-notification": {
          accountHolderLabel: "口座名義人",
          bicLabel: "BIC/SWIFT コード",
          cardNumberLabel: "カード番号",
          copiedTooltip: "コピー済",
          copyTooltip: "コピー",
          emailLabel: "E メール",
          footerInformation: "コピー＆ペーストのポップアップ表示は、自動入力設定でオフにすることができます。",
          headerTitle: "アイテムの詳細をコピー＆ペースト",
          ibanLabel: "IBAN",
          loginLabel: "ユーザーネーム",
          otpLabel: "2FA トークン",
          passwordLabel: "パスワード",
          secondaryLoginLabel: "代替ユーザーネーム",
          securityCodeLabel: "セキュリティコード",
          usernameLabel: "ユーザーネーム"
        },
        "generic-popup": {
          click: "今すぐ変更",
          closeWindow: "閉じる",
          inputPlaceholder: "名前を入力",
          subtitle: "あなたの性別は",
          title: "こんにちは"
        },
        "limited-capability": {
          cancelPasswordLimit: "今はしない",
          closeWindow: "閉じる",
          contentEssentialsPasswordLimit: "基本プランにアップグレードして、無制限のパスワードを 2 台のデバイスで同期しましょう。",
          contentPasswordLimit:
            "無料の Dashlane アカウントではこれ以上ログイン情報を保存することができません。無制限のストレージを得るには、Dashlane プレミアムにアップグレードしてください。",
          contentPremiumPasswordLimit: "プレミアムプランにアップグレードして、無制限のログイン情報を無制限のデバイスで同期しましょう。",
          enterMasterPassword: "**************",
          goPremium: "プレミアムに変更",
          headerPasswordLimit: "ストレージ制限に達しました",
          hide: "非表示にする",
          passwordLabel: "パスワード",
          show: "表示する",
          upgradeToEssentials: "基本プランにアップグレード",
          upgradeToPremium: "プレミアムへのアップグレード"
        },
        "master-password": {
          alwaysAuthorize: "常に許可",
          cancel: "キャンセル",
          closeWindow: "閉じる",
          emailHelpText: "このメールは、あなたが Dashlane にログイン中であることを確認するものです。",
          enterMasterPassword: "マスターパスワード",
          hide: "非表示",
          loggedIn: "<span>{0}</span> としてログイン中",
          neverAskAgainAnyCredentialCheckbox: "パスワードのアンロック時にマスターパスワードを求めない",
          neverAskAgainAnyCredentialInfobox:
            "このボックスにチェックを入れると、すべてのパスワードの「マスターパスワードを要求」をオフにします。",
          neverAskAgainCredentialCheckbox: "この保護された項目のアンロック時にマスターパスワードを求めない",
          ok: "OK",
          show: "表示",
          title: "保護された項目のロックを5分間解除",
          unlock: "ロック解除する",
          unlockContent: "5分経っても保管されたデータにアクセスする必要がある場合は、マスターパスワードを再度入力する必要があります。",
          wrongPassword: "パスワードが違います"
        },
        notification: {
          cancel: "キャンセル",
          closeWindow: "閉じる",
          ok: "OK",
          webOnboardingAfterCancelCancel: "再度お試しください",
          webOnboardingAfterCancelConfirm: "アプリに戻る",
          webOnboardingAfterCancelTitle: "このウェブサイトを再度お試しになるか、別のサイトを使用してください。",
          webOnboardingAfterLoginCancel: "閉じる",
          webOnboardingAfterLoginConfirm: "Dashlane に戻る",
          webOnboardingAfterLoginTitle: "おめでとうございます。あなたは Dashlane の達人です！",
          webOnboardingAfterSaveConfirm: "Dashlane で確認する",
          webOnboardingAfterSaveTitle: "1 つめのログイン情報を保存しました。"
        },
        "phishing-prevention": {
          cancelButton: "信用しない",
          currentUrlLabel: "現在のURL",
          headerTitle: "ログイン情報をペーストする前に、このウェブサイトが信頼できるかどうか確認してください",
          okButton: "信頼してペースト",
          phishingCTALink: "フィッシング詐欺について学ぶ",
          trustedUrlLabel: "信頼できるURL"
        },
        "purchase-receipt": {
          addRow: "項目を追加",
          cancel: "キャンセル",
          closeWindow: "閉じる",
          collapse: "少なく表示",
          disable: "今後表示しない",
          expand: "もっと見る",
          header: "<strong>{0}</strong> のレシートを Dashlane に保存しますか？",
          header_nohtml: "{0} のレシートを Dashlane に保存しますか？",
          save: "保存",
          showLess: "少なく表示",
          showMore: "もっと見る",
          total: "合計",
          untitledItem: "無題の項目",
          v5_header_nohtml: "{0} のレシートを Dashlane に保存",
          v5_total: "合計"
        },
        "save-password": {
          alwaysUseMasterPwd: "使用前にマスターパスワードを要求",
          cancel: "キャンセル",
          closeWindow: "閉じる",
          collapse: "表示件数を減らす",
          contentPremiumPasswordLimit: "プレミアムプランにアップグレードして、無制限のログイン情報を無制限のデバイスで同期しましょう。",
          createNewLogin: "新しいログイン情報を作成",
          defaultSpace: "パーソナル",
          enterLogin: "Dashlane のログインを選択…",
          enterMasterPassword: "マスターパスワード",
          expand: "もっと見る",
          footerBuyDashlane: "Dashlane を購入",
          footerDismiss: "終了",
          header: "このアカウントを Dashlane に保存しますか？",
          headerLoggedout: " Dashlane にログインして <strong>{0}</strong> のパスワードを保存する。",
          headerLoggedout_nohtml: "{0} のパスワードを保存するには Dashlane にログインしてください。",
          headerPasswordLimit: "ストレージ制限に達しました",
          headerReplace: "Dashlane にあるこのパスワードを変更しますか？",
          headerReplace_nohtml: "Dashlane にあるこのパスワードを変更しますか？",
          headerTitleB2BTrialDiscontinued: "アカウントが凍結されました",
          header_nohtml: "このログイン情報を Dashlane に保存しますか？",
          infoboxDescriptionB2BTrialDiscontinued: "パスワードは保存されません。",
          infoboxTitleB2BTrialDiscontinued: "トライアルが終了し、アカウントが凍結されました。",
          lastUsedItem: "最終使用日",
          login: "ログイン",
          loginFieldLabel: "ユーザーネーム",
          moreOptions: "その他のオプション",
          neverAgain: "今後表示しない",
          neverForThisWebsite: "このウェブサイトではしない",
          openDashlane: "Dashlane を開く",
          passwordFieldLabel: "パスワード",
          passwordHideButton: "非表示",
          passwordLimitReachedSubtitle: "パスワードは保存されません。",
          passwordLimitReachedTitle: "無料プランのパスワード制限に達しました",
          passwordLimitReachedTitleReplace: "無料プランで保存できるパスワード数の制限に達しました",
          passwordNearLimitTitle: { other: "無料プランで利用可能なパスワードはあと {count} 個です" },
          passwordShowButton: "表示",
          replace: "変更",
          save: "保存",
          saveAsNew: "新規保存",
          saveAsNewLimited: "新規保存",
          saveAsNewLimitedPlaceholder: "ストレージ制限に達しました",
          saveLimited: "Dashlane プレミアムを利用する",
          selectEmailOrUsernamePlaceholder: "E メールまたはユーザー名を入力",
          selectEmailPlaceholder: "E メールアドレスを入力する",
          updatePasswordOrCreateNewLogin: "このパスワードでログイン情報を更新するか、新しいログイン情報を作成してください。",
          updatePasswordOrCreateNewLoginLimit: "既存のログインを置き換えます",
          upgradeToPremium: "プレミアムへのアップグレード",
          upsellButton: "プレミアムに変更して無制限のパスワードストレージを使用する",
          useOnlyOnSubdomain: "このサブドメインでのみ使用",
          wrongLogin: "ログインが違います",
          wrongPassword: "パスワードが違います"
        },
        survey: { extension971: "Dashlane に関するご意見" },
        "user-verification": {
          cancel: "キャンセル",
          enterMasterPassword: "マスターパスワード",
          hide: "非表示",
          loggedIn: "<span>{0}</span> としてログイン中",
          neverAskAgainAnyCredentialCheckbox: "パスワードのアンロック時にマスターパスワードを求めない",
          neverAskAgainAnyCredentialInfobox:
            "このボックスにチェックを入れると、すべてのパスワードの「マスターパスワードを要求」をオフにします。",
          neverAskAgainCredentialCheckbox: "この保護された項目のアンロック時にマスターパスワードを求めない",
          selectionPanelBiometric: "生体認証",
          selectionPanelMasterPassword: "マスターパスワード",
          selectionPanelTitle: "ロック解除方法を選択してください：",
          show: "表示",
          tryAgain: "再度お試しください",
          unknownError: "予期しないエラーが発生しました",
          unlock: "アンロック",
          useAnotherMethod: "別の方法を使用する",
          webauthnGenericErrorDescription: "セキュリティ検証中にエラーが発生しました。",
          webauthnGenericErrorTitle: "問題が発生しました",
          webauthnPanelTitle: "生体認証、セキュリティキー、またはデバイスの PIN コードを使用して、Dashlane のロックを解除します。",
          webcardTitle: "セキュリティ検証を完了する",
          wrongPassword: "パスワードが違います"
        },
        "warn-generated-password": {
          cancel: "キャンセル",
          closeWindow: "閉じる",
          contentWarnGeneratedPassword:
            "Dashlane は、お客様のIDの確認などの重要なアクションを行う際に、この E メールアカウントを通してお客様に連絡します。強力でありながら覚えやすいパスワードの作成をお勧めします。",
          continue: "続行",
          header: "このパスワードを覚えておくことができますか？"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "キャンセル",
          create_confirmButton: "確認",
          create_content: "サイト{1}のユーザー{0}用にDashlaneで新しいパスキーを作成しますか？",
          create_headerTitle: "新しいパスキーを作成",
          create_withoutDashlaneButton: "Dashlane以外のキーを使用"
        },
        "webauthn-get-confirmation": {
          cancelButton: "キャンセル",
          confirmButton: "確認",
          content: "{1}に{0}としてログインしますか？",
          get_withoutDashlaneButton: "Dashlane以外のキーを使用",
          headerTitle: "Dashlane でログイン"
        },
        "webauthn-passkey-selection": {
          headerTitle: "ログインしたいアカウントを選んでください",
          selection_withoutDashlaneButton: "別のパスキーを使用"
        }
      };
    },
    5299: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "취소하기",
          closeWindow: "닫기",
          confirm: "자동 입력",
          title: "이 보안 정보를 Dashlane이 자동 입력하도록 하시겠습니까?",
          warning: "5분 후 데이터에 액세스해야 하는 경우 메시지를 다시 표시합니다."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "마지막 저장되지 않은 암호",
          TR_SELFCORRECT_STEP1_ADDRESS: "주소",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "인증",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "은행 상세 정보",
          TR_SELFCORRECT_STEP1_COMPANY: "직장",
          TR_SELFCORRECT_STEP1_CREDITCARD: "신용 카드",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "여기에 자동 입력 안 함",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "운전면허증",
          TR_SELFCORRECT_STEP1_EMAIL: "이메일",
          TR_SELFCORRECT_STEP1_FISCAL: "납세 번호",
          TR_SELFCORRECT_STEP1_IDCARD: "ID 카드",
          TR_SELFCORRECT_STEP1_IDENTITY: "ID",
          TR_SELFCORRECT_STEP1_LOGININFO: "로그인 정보",
          TR_SELFCORRECT_STEP1_NOTHING: "없음",
          TR_SELFCORRECT_STEP1_PASSPORT: "여권",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "결제 정보",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "개인 정보",
          TR_SELFCORRECT_STEP1_PHONE: "전화 번호",
          TR_SELFCORRECT_STEP1_SSN: "주민등록번호",
          TR_SELFCORRECT_STEP1_WEBSITE: "웹 사이트",
          TR_SELFCORRECT_STEP2_ADDRESS: "주소",
          TR_SELFCORRECT_STEP2_AGE: "연령",
          TR_SELFCORRECT_STEP2_AL1: "주소 라인 1",
          TR_SELFCORRECT_STEP2_AL2: "주소 라인 2",
          TR_SELFCORRECT_STEP2_AL3: "주소 라인 3",
          TR_SELFCORRECT_STEP2_APTNUM: "아파트 번호",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "예금주 이름",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "은행 계좌 번호",
          TR_SELFCORRECT_STEP2_BANKNAME: "은행 이름",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "건물 번호",
          TR_SELFCORRECT_STEP2_CITY: "시/군/구",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "회사명",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "회사 직책",
          TR_SELFCORRECT_STEP2_COUNTRY: "국가",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "국가 번호",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "발급 은행",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "만료 월 및 연도",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "만료 월",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "만료 연도",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "신용 카드 번호",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "카드에 기재된 성명",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "카드에 기재된 이름",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "카드에 기재된 성",
          TR_SELFCORRECT_STEP2_DOB: "생년월일",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "배송 날짜",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "생년월일",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "만료 날짜",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "이름",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "성별",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "성",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "성명",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "운전면허증 번호",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "발급 날짜",
          TR_SELFCORRECT_STEP2_EMAIL: "이메일",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "이메일",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "이름",
          TR_SELFCORRECT_STEP2_FLOOR: "층",
          TR_SELFCORRECT_STEP2_FULLNAME: "성명",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "배송 날짜",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "생년월일",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "만료 날짜",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "이름",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "성별",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "성명",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "성",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "국적",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "ID 카드 번호",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "직위",
          TR_SELFCORRECT_STEP2_LASTNAME: "성",
          TR_SELFCORRECT_STEP2_LOGIN: "사용자 이름",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "다른 사용자 이름",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "결혼 전 이름",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "중간 이름",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "중간 이름 이니셜",
          TR_SELFCORRECT_STEP2_NOTHING: "없음",
          TR_SELFCORRECT_STEP2_OTP: "2FA 토큰",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "배송 날짜",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "생년월일",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "만료 날짜",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "성별",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "이름",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "성",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "성명",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "배송 장소",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "국적",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "여권 번호",
          TR_SELFCORRECT_STEP2_PASSWORD: "암호",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "암호 확인",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "현재 암호",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "새 암호",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "국가 전화번호",
          TR_SELFCORRECT_STEP2_PHONENUM: "전화 번호",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "내선 전화 번호",
          TR_SELFCORRECT_STEP2_POB: "출생 장소",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "라우팅 번호",
          TR_SELFCORRECT_STEP2_SORT_CODE: "정렬 코드",
          TR_SELFCORRECT_STEP2_SSN: "주민등록번호",
          TR_SELFCORRECT_STEP2_STATE: "주(예: 플로리다)",
          TR_SELFCORRECT_STEP2_STATECODE: "주 코드(예: FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "거리명",
          TR_SELFCORRECT_STEP2_STREETNUM: "호수",
          TR_SELFCORRECT_STEP2_STREETTYPE: "거리 유형(예: Avenue)",
          TR_SELFCORRECT_STEP2_TAXNUM: "납세 번호",
          TR_SELFCORRECT_STEP2_WEBSITE: "웹 사이트",
          TR_SELFCORRECT_STEP2_ZIP: "Zip 코드",
          aboutToExpire: "곧 만료 예정",
          addNew_ADDRESS: "새 주소 추가",
          addNew_AUTHENTICATION: "인증 방법",
          addNew_BANK_STATEMENT: "새 은행 계좌 추가",
          addNew_COMPANY: "새 회사 추가",
          addNew_DRIVER_LICENCE: "새 운전면허증 추가",
          addNew_EMAIL: "새 이메일 주소 추가",
          addNew_FISCAL: "새 납세 ID 추가",
          addNew_IDENTITY: "새 이름 추가",
          addNew_ID_CARD: "새 ID를 추가하세요.",
          addNew_NOTHING: "없음",
          addNew_PASSPORT: "새 여권 추가",
          addNew_PAYMENT_MEAN_CREDITCARD: "새 신용 카드 추가",
          addNew_PAYMENT_MEAN_PAYPAL: "새 PayPal 계정 추가",
          addNew_PHONE: "새 전화 번호 추가",
          addNew_SOCIAL_SECURITY: "새 주민등록번호 추가",
          addNew_WEBSITE: "새 웹 사이트 추가",
          addObjectHeader: "모든 웹 사이트에서 이 정보를 자동 입력합니다.",
          allItemsButton: "모든 항목",
          buyDashlane: "Dashlane 구매",
          closeWindow: "닫기",
          connectAs: "다음 사용자로 로그인:",
          contactEmailGeneration: "Dashlane 계정과 연결된 이메일 주소에 대한 강력한 암호를 생성하려고 합니다.",
          defaultSpace: "개인",
          emailBusiness: "직장",
          emailPersonal: "개인",
          emptyStateWebcard_noLogin: "{domain}에 대해 저장된 로그인이 없습니다.",
          emptyStateWebcard_noOtherInfo: "이 정보를 아직 저장하지 않았습니다.",
          emptyStateWebcard_noPassword: "아직 저장된 이 웹사이트 암호가 없습니다.",
          existingPassword: "이 웹 사이트에 대해 저장된 암호가 이미 있습니다. 새로운 암호를 생성하시겠습니까?",
          expired: "만료됨",
          fixAutofillHeader: "여기 표시될 내용은 무엇인가요?",
          fixAutofillIssue: "지금 수정",
          generatePasswordButtons_closeSettings: "암호 설정 닫기",
          generatePasswordButtons_hidePassword: "암호 숨기기",
          generatePasswordButtons_openSettings: "암호 설정 열기",
          generatePasswordButtons_reshuffle: "새 암호 생성",
          generatePasswordButtons_showPassword: "암호 표시",
          generatePasswordDropdownTitle: "암호 생성",
          generatePasswordOption_digits: "숫자 (예: 345)",
          generatePasswordOption_length: "길이 ({0})",
          generatePasswordOption_letters: "문자 (예: Aa)",
          generatePasswordOption_similarCharacters: "유사 문자 (예: 0O 1| 2Z)",
          generatePasswordOption_symbols: "기호(@&$!#?)",
          generatePasswordStrength_none: "계산 중...",
          generatePasswordStrength_safelyUnguessable: "이제 강력한 암호가 생성되었습니다!",
          generatePasswordStrength_somewhatGuessable: "암호가 다소 취약합니다.",
          generatePasswordStrength_tooGuessable: "이 암호를 더욱 강력하게 만들어 볼까요?",
          generatePasswordStrength_veryGuessable: "나쁘진 않지만, 조금 더 강력한 암호를 만드는 건 어떨까요?",
          generatePasswordStrength_veryUnguessable: "최강의 암호를 만들었습니다!",
          generatePwd: "강력한 암호를 생성하세요.",
          hasAutofillIssue: "자동 입력에 문제가 발생했나요?",
          incomplete: "완료 안 됨",
          infoboxDescriptionB2BTrialDiscontinued: "새 암호를 생성할 수 없습니다",
          infoboxTitleB2BTrialDiscontinued: "체험판이 종료되어 계정이 동결되었습니다.",
          itemsCountLabel: { other: "{count} 항목" },
          mavReactivationBtn: "지금 로그인",
          mavReactivationCreateBtn: "계정을 생성합니다",
          mavReactivationDismiss: "이 세션을 다시 요청하지 않음",
          mavReactivationOr: "또는",
          mavReactivationTitle: "한 번의 클릭으로 양식을 작성하려면 Dashlane에 로그인하세요.",
          openTheExtenion: "확장 프로그램 열기",
          openTheExtension: "확장 프로그램 열기",
          optionsAutofillSomethingElse: "다른 정보 자동 입력",
          optionsClose: "이번에만 일시 중지",
          optionsCloseMenu: "옵션 더 보기 닫기",
          optionsDontAutofill: "다시 켤 때까지 일시 중지",
          optionsFillSomethingElse: "다른 정보 자동 입력",
          optionsNeverSuggest: "다시 켤 때까지 일시 중지",
          optionsOpenMenu: "옵션 더 보기 열기",
          optionsTitle: "여기에 자동 입력",
          optionsTooltip: "여기에 자동 입력",
          password: "암호",
          passwordHistoryDomain: "이 웹 사이트",
          passwordHistorySee: "암호 기록 보기",
          passwordHistoryTitle: "암호",
          passwordLimitSubtitle: "프리미엄으로 업그레이드",
          passwordLimitTitle: "Free 요금제 암호 한도에 도달했습니다. 이 암호는 저장되지 않습니다.",
          passwordLimitWarningButton: "Premium으로 업그레이드하여 무제한 저장소를 이용하세요",
          passwordLimitWarningDesc:
            "무료 Dashlane 계정으로는 더 이상 로그인을 추가할 수 없습니다. Free 로그인 저장소 제한에 도달하여 기존 로그인 수정만 가능합니다.",
          passwordLimitWarningLabel: "경고:",
          passwordNearLimitTitle: { other: "무료 요금제에 {count}개 암호가 남았습니다." },
          phoneAny: "기타",
          phoneFax: "팩스",
          phoneLandline: "홈",
          phoneMobile: "휴대폰",
          phoneWorkFax: "직장 팩스",
          phoneWorkLandline: "직장",
          phoneWorkMobile: "직장 휴대폰",
          reactivationHeader: "한 번의 클릭으로 양식을 작성하려면 Dashlane을 켜세요.",
          roleButton: "버튼",
          sca_feedback: "아직 저장된 이 웹사이트 암호가 없습니다.",
          sca_feedback_add: "암호를 추가하세요",
          search: "검색",
          searchInputPlaceholder: "항목을 검색합니다...",
          seePasswordLink: "암호 보기",
          shush_feedback: "여기에 자동 입력을 하지 않습니다.",
          shush_feedback_learnMore: "자세히 알아보기",
          strongPassword: "이제 강력한 암호가 생성되었습니다!",
          suggestedButton: "추천",
          topOfWalletSeparator: "다른 결제 방법",
          types_ADDRESS: "주소",
          types_AUTHENTICATION: "다음 사용자로 로그인:",
          types_BANK_STATEMENT: "은행 계좌",
          types_COMPANY: "직장",
          types_DRIVER_LICENCE: "운전면허증",
          types_EMAIL: "이메일",
          types_FISCAL: "납세 번호",
          types_GENERATED_PASSWORD: "다음 사용자로 로그인:",
          types_IDENTITY: "ID",
          types_ID_CARD: "ID 카드",
          types_PASSPORT: "여권",
          types_PASSWORD: "암호",
          types_PAYMENT_MEAN_CREDITCARD: "신용 카드",
          types_PHONE: "전화 번호",
          types_SOCIAL_SECURITY: "주민등록증",
          types_WEBSITE: "웹 사이트",
          upgradeToPremium: "프리미엄으로 업그레이드",
          usePassword: "생성된 암호 사용",
          v5_addNew_ADDRESS: "새 주소 추가",
          v5_addNew_AUTHENTICATION: "새 로그인 추가",
          v5_addNew_BANK_STATEMENT: "새 은행 계좌 추가",
          v5_addNew_COMPANY: "새 회사 추가",
          v5_addNew_DRIVER_LICENCE: "새 운전면허증 추가",
          v5_addNew_EMAIL: "새 이메일 주소 추가",
          v5_addNew_FISCAL: "새 납세 번호 추가",
          v5_addNew_IDENTITY: "새 개인 정보 추가하기",
          v5_addNew_ID_CARD: "새 ID 카드 추가",
          v5_addNew_PASSPORT: "새 여권 추가",
          v5_addNew_PASSWORD: "새 암호 추가하기",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "새 신용 카드 추가",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "새 PayPal 계정 추가",
          v5_addNew_PHONE: "새 전화 번호 추가",
          v5_addNew_SOCIAL_SECURITY: "새 주민등록번호 추가",
          v5_addNew_WEBSITE: "새 웹 사이트 추가",
          v5_addObjectHeader: "모든 웹 사이트에서 이 정보를 자동 입력합니다.",
          v5_connectAs: "다음 사용자로 로그인:",
          veryWeakPassword: "입력한 암호가 매우 취약합니다.",
          weakPassword: "이 암호를 더욱 강화해볼까요?",
          webAuthnReactivationDontAskAgain: "이 세션을 다시 요청하지 않음",
          webAuthnReactivationErrorMessage: "다시 시도하시겠어요?",
          webAuthnReactivationFallbackToMasterPassword: "마스터 암호 사용",
          webAuthnReactivationHeader: "로그인하려면 Dashlane 잠금을 해제하세요",
          webAuthnReactivationLoginButton: "생체 인증으로 잠금 해제",
          webAuthnReactivationLoginButtonError: "생체 인증을 다시 시도하세요",
          webauthnConditionalUINotWithDashlaneButton: "다른 암호 사용",
          websiteUnsecure: "이 웹 사이트는 안전하지 않습니다. 여기에 입력하신 정보가 노출될 수 있습니다.",
          websiteUnsecureIframe: "이 양식은 다른 도메인에서 제공되었을 수 있습니다. 이 사이트를 신뢰할 수 있는지 확인하세요."
        },
        "autologin-selection": {
          autologinHeader: "로그인할 계정 선택:",
          autologinLoggingIn: "Dashlane이 자동으로 로그인합니다.",
          clickToDismiss: "이 항목을 숨기려면 다시 클릭하세요.",
          closeWindow: "닫기",
          connectAs: "다음 사용자로 로그인:",
          defaultSpace: "개인",
          header: "로그인할 계정 선택:",
          headerInner: "계정",
          openTheExtenion: "확장 프로그램 열기",
          openTheExtension: "확장 프로그램 열기",
          password: "암호",
          v5_autologinLoggingIn: "Dashlane으로 자동 로그인합니다"
        },
        "data-capture": {
          cancel: "취소",
          closeWindow: "닫기",
          creditCardDetails: "신용 카드 정보",
          enterLogin: "로그인 입력",
          enterMasterPassword: "마스터 암호",
          header: "이 정보를 Dashlane에 저장하면 다시 온라인에서 암호를 입력할 필요가 없습니다.",
          headerLoggedout: "이 정보를 저장하려면 Dashlane에 로그인하세요.",
          login: "로그인",
          neverAgain: "이 메시지를 다시 표시 안 함",
          neverForThisWebsite: "이 웹 사이트에 대해 안 함",
          openDashlane: "Dashlane 열기",
          save: "저장",
          types_ADDRESS: "주소",
          types_COMPANY: "직장",
          types_EMAIL: "이메일",
          types_IDENTITY: "이름",
          types_PAYMENT_MEAN_CREDITCARD: "신용 카드",
          types_PHONE: "전화 번호",
          types_WEBSITE: "웹 사이트",
          wrongLogin: "잘못된 로그인",
          wrongPassword: "잘못된 암호"
        },
        "feedback-notification": {
          editButton: "수정",
          loginCreated: "새 로그인 생성됨.",
          loginUpdated: "로그인 업데이트됨.",
          undoButton: "실행 취소"
        },
        "follow-up-notification": {
          accountHolderLabel: "Account holder",
          bicLabel: "BIC/SWIFT 코드",
          cardNumberLabel: "카드 번호",
          copiedTooltip: "복사됨",
          copyTooltip: "복사",
          emailLabel: "이메일",
          footerInformation: "자동 입력 설정에서 팝업 복사 및 붙여 넣기를 해제할 수 있습니다.",
          headerTitle: "항목 상세 정보 복사 및 붙여 넣기",
          ibanLabel: "IBAN",
          loginLabel: "사용자 이름",
          otpLabel: "2FA 토큰",
          passwordLabel: "암호",
          secondaryLoginLabel: "다른 사용자 이름",
          securityCodeLabel: "보안 코드",
          usernameLabel: "사용자 이름"
        },
        "generic-popup": {
          click: "지금 변경하세요!",
          closeWindow: "닫기",
          inputPlaceholder: "이름 입력",
          subtitle: "귀하의 성별은",
          title: "안녕하세요."
        },
        "limited-capability": {
          cancelPasswordLimit: "나중에",
          closeWindow: "닫기",
          contentEssentialsPasswordLimit: "기기 2대에서 무제한 암호와 동기화를 사용하려면 Essentials 플랜으로 업그레이드하세요.",
          contentPasswordLimit:
            "무료 Dashlane 계정으로는 더 이상 로그인을 추가할 수 없습니다. 무제한 로그인 저장을 원하시면 Premium으로 업그레이드하세요.",
          contentPremiumPasswordLimit: "Premium 플랜으로 업그레이드하여 기기 제한 없이 로그인을 무제한으로 동기화하세요.",
          enterMasterPassword: "**************",
          goPremium: "Premium으로 전환",
          headerPasswordLimit: "저장소 한도 도달",
          hide: "숨기기",
          passwordLabel: "암호",
          show: "표시",
          upgradeToEssentials: "Essentials로 업그레이드",
          upgradeToPremium: "프리미엄으로 업그레이드"
        },
        "master-password": {
          alwaysAuthorize: "항상 승인",
          cancel: "취소",
          closeWindow: "닫기",
          emailHelpText: "이 이메일로 Dashlane에 로그인하였음을 확인합니다.",
          enterMasterPassword: "마스터 암호",
          hide: "숨기기",
          loggedIn: "<span>{0}</span>로 로그인함",
          neverAskAgainAnyCredentialCheckbox: "암호를 잠금 해제하기 위해 마스터 암호 요청 안 함",
          neverAskAgainAnyCredentialInfobox: "이 확인란을 선택하면 모든 암호에 대해 '마스터 암호 필요' 기능이 비활성화됩니다.",
          neverAskAgainCredentialCheckbox: "이 보안 항목을 잠금 해제하기 위해 마스터 암호 요청 안 함",
          ok: "확인",
          show: "표시",
          title: "5분간 보안 항목 잠금 해제",
          unlock: "잠금 해제",
          unlockContent: "5분 후에도 보안 데이터에 액세스해야 하는 경우 마스터 암호를 다시 입력해야 합니다.",
          wrongPassword: "잘못된 암호"
        },
        notification: {
          cancel: "취소",
          closeWindow: "닫기",
          ok: "확인",
          webOnboardingAfterCancelCancel: "다시 시도하세요.",
          webOnboardingAfterCancelConfirm: "앱으로 돌아가기",
          webOnboardingAfterCancelTitle: "이 웹 사이트를 다시 시도하거나 다른 사이트를 사용할 수 있습니다.",
          webOnboardingAfterLoginCancel: "닫기",
          webOnboardingAfterLoginConfirm: "Dashlane으로 돌아가기",
          webOnboardingAfterLoginTitle: "축하합니다. Dashlane 전문가가 되셨군요.",
          webOnboardingAfterSaveConfirm: "Dashlane에서 보기",
          webOnboardingAfterSaveTitle: "첫 로그인을 저장했습니다!"
        },
        "phishing-prevention": {
          cancelButton: "신뢰하지 않습니다",
          currentUrlLabel: "현재 URL",
          headerTitle: "로그인 상세 정보를 붙여넣기 전 이 웹사이트를 신뢰할 수 있는지 확인하세요",
          okButton: "신뢰하고 붙여넣기",
          phishingCTALink: "피싱에 대해 알아보기",
          trustedUrlLabel: "신뢰할 수 있는 URL"
        },
        "purchase-receipt": {
          addRow: "항목 추가",
          cancel: "취소",
          closeWindow: "닫기",
          collapse: "간단히",
          disable: "이 메시지를 다시 표시 안 함",
          expand: "다른 항목 보기",
          header: "<strong>{0}</strong> 영수증을 Dashlane에 저장하시겠습니까?",
          header_nohtml: "{0} 영수증을 Dashlane에 저장하시겠습니까?",
          save: "저장",
          showLess: "간단히",
          showMore: "더 보기",
          total: "합계",
          untitledItem: "제목이 없는 항목",
          v5_header_nohtml: "Dashlane에 {0} 영수증 저장",
          v5_total: "전체"
        },
        "save-password": {
          alwaysUseMasterPwd: "사용하려면 마스터 암호 필요",
          cancel: "취소",
          closeWindow: "닫기",
          collapse: "간단히 보기",
          contentPremiumPasswordLimit: "Premium 플랜으로 업그레이드하여 기기 제한 없이 로그인을 무제한으로 동기화하세요.",
          createNewLogin: "새 로그인 생성하기",
          defaultSpace: "개인",
          enterLogin: "Dashlane 로그인 선택...",
          enterMasterPassword: "마스터 암호",
          expand: "더 보기",
          footerBuyDashlane: "Dashlane 구매",
          footerDismiss: "무시",
          header: "Dashlane에 이 계정을 저장하시겠어요?",
          headerLoggedout: "<strong>{0}</strong> 암호를 저장하려면 Dashlane에 로그인하세요.",
          headerLoggedout_nohtml: "{0} 암호를 저장하려면 Dashlane에 로그인하세요.",
          headerPasswordLimit: "저장소 한도 도달",
          headerReplace: "Dashlane에 저장된 암호를 변경하시겠어요?",
          headerReplace_nohtml: "Dashlane에 저장된 암호를 변경하시겠어요?",
          headerTitleB2BTrialDiscontinued: "계정이 동결되었습니다",
          header_nohtml: "이 로그인을 Dashlane에 저장할까요?",
          infoboxDescriptionB2BTrialDiscontinued: "귀하의 암호는 저장되지 않습니다.",
          infoboxTitleB2BTrialDiscontinued: "체험판이 종료되어 계정이 동결되었습니다.",
          lastUsedItem: "최근 사용 날짜",
          login: "로그인",
          loginFieldLabel: "사용자 이름",
          moreOptions: "추가 옵션",
          neverAgain: "이 메시지를 다시 표시 안 함",
          neverForThisWebsite: "이 웹 사이트에 대해 안 함",
          openDashlane: "Dashlane 열기",
          passwordFieldLabel: "암호",
          passwordHideButton: "숨기기",
          passwordLimitReachedSubtitle: "귀하의 암호는 저장되지 않습니다.",
          passwordLimitReachedTitle: "무료 요금제 암호 한도에 도달했습니다.",
          passwordLimitReachedTitleReplace: "Free 요금제에 저장할 수 있는 암호의 한도에 도달했습니다.",
          passwordNearLimitTitle: { other: "무료 요금제에 {count}개 암호가 남았습니다." },
          passwordShowButton: "더 보기",
          replace: "대체",
          save: "저장",
          saveAsNew: "새로 저장",
          saveAsNewLimited: "새로 저장",
          saveAsNewLimitedPlaceholder: "저장소 한도 도달",
          saveLimited: "Premium으로 전환",
          selectEmailOrUsernamePlaceholder: "이메일이나 사용자 이름을 입력하세요.",
          selectEmailPlaceholder: "이메일 주소를 입력하세요.",
          updatePasswordOrCreateNewLogin: "이 암호로 기존 로그인을 업데이트하거나 새 로그인을 만드십시오.",
          updatePasswordOrCreateNewLoginLimit: "기존 로그인 바꾸기",
          upgradeToPremium: "프리미엄으로 업그레이드",
          upsellButton: "무제한 암호 저장을 위해 Premium으로 전환",
          useOnlyOnSubdomain: "이 하위 도메인에만 사용",
          wrongLogin: "잘못된 로그인",
          wrongPassword: "잘못된 암호"
        },
        survey: { extension971: "Dashlane 개선을 위한 피드백" },
        "user-verification": {
          cancel: "취소",
          enterMasterPassword: "마스터 암호",
          hide: "숨기기",
          loggedIn: "<span>{0}</span>로 로그인함",
          neverAskAgainAnyCredentialCheckbox: "암호를 잠금 해제하기 위해 마스터 암호 요청 안 함",
          neverAskAgainAnyCredentialInfobox: "이 확인란을 선택하면 모든 암호에 대해 '마스터 암호 필요' 기능이 비활성화됩니다.",
          neverAskAgainCredentialCheckbox: "이 보안 항목을 잠금 해제하기 위해 마스터 암호 요청 안 함",
          selectionPanelBiometric: "생체 인증",
          selectionPanelMasterPassword: "마스터 암호",
          selectionPanelTitle: "잠금 해제 방법을 선택하십시오.",
          show: "표시",
          tryAgain: "Try again",
          unknownError: "알 수 없는 오류가 발생했습니다.",
          unlock: "잠금 해제",
          useAnotherMethod: "다른 방법 사용하기",
          webauthnGenericErrorDescription: "보안 검증 중에 오류가 발생했습니다.",
          webauthnGenericErrorTitle: "오류가 발생했습니다",
          webauthnPanelTitle: "Dashlane을 잠금 해제하려면 생체 인증, 보안 키 또는 장치의 PIN 코드를 사용하십시오.",
          webcardTitle: "보안 검증을 하십시오.",
          wrongPassword: "잘못된 암호"
        },
        "warn-generated-password": {
          cancel: "취소",
          closeWindow: "닫기",
          contentWarnGeneratedPassword:
            "Dashlane이 이메일 계정을 통해 귀하에게 연락하여 ID 확인과 같은 중요 활동을 수행합니다. 강력하지만 기억하기 쉬운 암호를 생성하시기 바랍니다.",
          continue: "계속",
          header: "이 암호를 기억할 수 있나요?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "취소",
          create_confirmButton: "확인",
          create_content: "사이트 {1}의 사용자 {0}에 대해 Dashlane을 사용하여 새 암호를 생성하시겠습니까?",
          create_headerTitle: "새 암호 생성",
          create_withoutDashlaneButton: "비 Dashlane 키 사용"
        },
        "webauthn-get-confirmation": {
          cancelButton: "취소",
          confirmButton: "확인",
          content: "{1}에서 {0}(으)로 로그인하시겠습니까?",
          get_withoutDashlaneButton: "비 Dashlane 키 사용",
          headerTitle: "Dashlane으로 로그인"
        },
        "webauthn-passkey-selection": { headerTitle: "로그인할 계정 선택:", selection_withoutDashlaneButton: "다른 암호 사용" }
      };
    },
    8199: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Annuleren",
          closeWindow: "Sluiten",
          confirm: "Automatisch invullen",
          title: "Wilt u dat Dashlane deze beveiligde gegevens automatisch invult?",
          warning: "We vragen u over 5 minuten opnieuw om uw wachtwoord als u toegang nodig heeft tot uw gegevens."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Laatste niet-opgeslagen wachtwoord",
          TR_SELFCORRECT_STEP1_ADDRESS: "Adres",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Verificatie",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Bankgegevens",
          TR_SELFCORRECT_STEP1_COMPANY: "Bedrijf",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Creditcard",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "Veld niet automatisch invullen",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Rijbewijs",
          TR_SELFCORRECT_STEP1_EMAIL: "E-mail",
          TR_SELFCORRECT_STEP1_FISCAL: "Belastingnummer",
          TR_SELFCORRECT_STEP1_IDCARD: "Identiteitskaart",
          TR_SELFCORRECT_STEP1_IDENTITY: "Identiteit",
          TR_SELFCORRECT_STEP1_LOGININFO: "Inloggegevens",
          TR_SELFCORRECT_STEP1_NOTHING: "Geen",
          TR_SELFCORRECT_STEP1_PASSPORT: "Paspoort",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Betalingsgegevens",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Persoonlijke informatie",
          TR_SELFCORRECT_STEP1_PHONE: "Telefoonnummer",
          TR_SELFCORRECT_STEP1_SSN: "Burgerservicenummer",
          TR_SELFCORRECT_STEP1_WEBSITE: "Website",
          TR_SELFCORRECT_STEP2_ADDRESS: "Adres",
          TR_SELFCORRECT_STEP2_AGE: "Leeftijd",
          TR_SELFCORRECT_STEP2_AL1: "Adresregel 1",
          TR_SELFCORRECT_STEP2_AL2: "Adresregel 2",
          TR_SELFCORRECT_STEP2_AL3: "Adresregel 3",
          TR_SELFCORRECT_STEP2_APTNUM: "Apartementnummer",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Naam rekeninghouder",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Bankrekeningnummer",
          TR_SELFCORRECT_STEP2_BANKNAME: "Banknaam",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Gebouwnummer",
          TR_SELFCORRECT_STEP2_CITY: "Plaats",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Bedrijfsnaam",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Functietitel",
          TR_SELFCORRECT_STEP2_COUNTRY: "Land",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Landcode",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Uitgevende bank",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Vervalmaand en -jaar",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Vervalmaand",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Vervaljaar",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Creditcardnummer",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Volledige naam op kaart",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "Voornaam op kaart",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Achternaam op kaart",
          TR_SELFCORRECT_STEP2_DOB: "Geboortedatum",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Bezorgdatum",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Geboortedatum",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Vervaldatum",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "Voornaam",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Geslacht",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Achternaam",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Volledige naam",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Rijbewijsnummer",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "Uitgevende staat",
          TR_SELFCORRECT_STEP2_EMAIL: "E-mail",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "E-mail",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "Voornaam",
          TR_SELFCORRECT_STEP2_FLOOR: "Verdieping",
          TR_SELFCORRECT_STEP2_FULLNAME: "Volledige naam",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Bezorgdatum",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Geboortedatum",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Vervaldatum",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "Voornaam",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Geslacht",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Volledige naam",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Achternaam",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Nationaliteit",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "Identiteitskaartnummer",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Functie",
          TR_SELFCORRECT_STEP2_LASTNAME: "Achternaam",
          TR_SELFCORRECT_STEP2_LOGIN: "Gebruikersnaam",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Alternatieve gebruikersnaam",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Meisjesnaam",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "Tweede voornaam",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Initiaal tweede voornaam",
          TR_SELFCORRECT_STEP2_NOTHING: "Geen",
          TR_SELFCORRECT_STEP2_OTP: "2FA-token",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Bezorgdatum",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Geboortedatum",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Vervaldatum",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Geslacht",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "Voornaam",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Achternaam",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Volledige naam",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Bezorgplaats",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Nationaliteit",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Paspoortnummer",
          TR_SELFCORRECT_STEP2_PASSWORD: "Wachtwoord",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Wachtwoord bevestigen",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Huidig wachtwoord",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "Nieuw wachtwoord",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Landcode",
          TR_SELFCORRECT_STEP2_PHONENUM: "Telefoonnummer",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Extensie telefoonnummer",
          TR_SELFCORRECT_STEP2_POB: "Geboorteplaats",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Routingnummer",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Sorteercode",
          TR_SELFCORRECT_STEP2_SSN: "Burgerservicenummer",
          TR_SELFCORRECT_STEP2_STATE: "Staat (bijv. Florida)",
          TR_SELFCORRECT_STEP2_STATECODE: "Staatcode (bijv. FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Straatnaam",
          TR_SELFCORRECT_STEP2_STREETNUM: "Huisnummer",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Soort straat (bijv. laan)",
          TR_SELFCORRECT_STEP2_TAXNUM: "Belastingnummer",
          TR_SELFCORRECT_STEP2_WEBSITE: "Website",
          TR_SELFCORRECT_STEP2_ZIP: "Postcode",
          aboutToExpire: "VERLOOPT BINNENKORT",
          addNew_ADDRESS: "Een nieuw adres toevoegen",
          addNew_AUTHENTICATION: "Verificatiemethode",
          addNew_BANK_STATEMENT: "Een nieuwe bankrekening toevoegen",
          addNew_COMPANY: "Een nieuw bedrijf toevoegen",
          addNew_DRIVER_LICENCE: "Een nieuw rijbewijs toevoegen",
          addNew_EMAIL: "Een nieuw e-mailadres toevoegen",
          addNew_FISCAL: "Een nieuw belastingnummer toevoegen",
          addNew_IDENTITY: "Een nieuwe naam toevoegen",
          addNew_ID_CARD: "Een nieuwe ID toevoegen",
          addNew_NOTHING: "Geen",
          addNew_PASSPORT: "Een nieuw paspoort toevoegen",
          addNew_PAYMENT_MEAN_CREDITCARD: "Een nieuwe creditcard toevoegen",
          addNew_PAYMENT_MEAN_PAYPAL: "Een nieuw Paypal-account toevoegen",
          addNew_PHONE: "Een nieuw telefoonnummer toevoegen",
          addNew_SOCIAL_SECURITY: "Een nieuw burgerservicenummer toevoegen",
          addNew_WEBSITE: "Een nieuwe website toevoegen",
          addObjectHeader: "Vul deze informatie automatisch in op alle websites.",
          allItemsButton: "Alle items",
          buyDashlane: "Koop Dashlane",
          closeWindow: "Sluiten",
          connectAs: "Inloggen als",
          contactEmailGeneration:
            "U staat op het punt om een sterk wachtwoord te genereren voor het e-mailadres dat aan uw Dashlane-account gekoppeld is.",
          defaultSpace: "Persoonlijk",
          emailBusiness: "Bedrijf",
          emailPersonal: "Persoonlijk",
          emptyStateWebcard_noLogin: "Er is nog geen login opgeslagen voor {domain}.",
          emptyStateWebcard_noOtherInfo: "U heeft deze informatie nog niet opgeslagen.",
          emptyStateWebcard_noPassword: "Er is nog geen wachtwoord opgeslagen voor deze website.",
          existingPassword:
            "U heeft al een wachtwoord voor deze website opgeslagen. Weet u zeker dat u een nieuw wachtwoord wilt genereren?",
          expired: "VERLOPEN",
          fixAutofillHeader: "Wat zou hier moeten zijn?",
          fixAutofillIssue: "Nu oplossen",
          generatePasswordButtons_closeSettings: "Wachtwoordinstellingen sluiten",
          generatePasswordButtons_hidePassword: "Wachtwoord verbergen",
          generatePasswordButtons_openSettings: "Wachtwoordinstellingen openen",
          generatePasswordButtons_reshuffle: "Nieuw wachtwoord genereren",
          generatePasswordButtons_showPassword: "Wachtwoord tonen",
          generatePasswordDropdownTitle: "Wachtwoordgenerator",
          generatePasswordOption_digits: "Cijfers (bijv. 345)",
          generatePasswordOption_length: "Lengte ({0})",
          generatePasswordOption_letters: "Letters (bijv. Aa)",
          generatePasswordOption_similarCharacters: "Tekens die op elkaar lijken (bijv. 0O 1| 2Z)",
          generatePasswordOption_symbols: "Symbolen (@&$!#?)",
          generatePasswordStrength_none: "Aan het berekenen...",
          generatePasswordStrength_safelyUnguessable: "Dat is pas een sterk wachtwoord!",
          generatePasswordStrength_somewhatGuessable: "Dit wachtwoord is bijna geweldig.",
          generatePasswordStrength_tooGuessable: "Laten we dit wachtwoord sterker maken.",
          generatePasswordStrength_veryGuessable: "Een goede start, maar het kan nog beter.",
          generatePasswordStrength_veryUnguessable: "Ultieme wachtwoordsterkte bereikt!",
          generatePwd: "Een sterk wachtwoord genereren",
          hasAutofillIssue: "Heeft u een probleem met het automatisch invullen?",
          incomplete: "ONVOLLEDIG",
          infoboxDescriptionB2BTrialDiscontinued: "U kunt geen nieuwe wachtwoorden genereren",
          infoboxTitleB2BTrialDiscontinued: "Uw proefperiode is beëindigd en uw account is geblokkeerd. ",
          itemsCountLabel: { one: "{count} item", other: "{count} items" },
          mavReactivationBtn: "Nu inloggen",
          mavReactivationCreateBtn: "Een account aanmaken",
          mavReactivationDismiss: "Niet opnieuw om deze sessie vragen",
          mavReactivationOr: "of",
          mavReactivationTitle: "Log in bij Dashlane om formulieren met één klik in te vullen.",
          openTheExtenion: "Open de extensie",
          openTheExtension: "Open de extensie",
          optionsAutofillSomethingElse: "Iets anders automatisch invullen",
          optionsClose: "Pauzeren voor dit bezoek",
          optionsCloseMenu: "Meer opties sluiten",
          optionsDontAutofill: "Pauzeren totdat ik dit opnieuw inschakel",
          optionsFillSomethingElse: "Iets anders automatisch invullen",
          optionsNeverSuggest: "Pauzeren totdat ik dit opnieuw inschakel",
          optionsOpenMenu: "Meer opties openen",
          optionsTitle: "Dit veld automatisch invullen",
          optionsTooltip: "Dit veld automatisch invullen",
          password: "Wachtwoord",
          passwordHistoryDomain: "Deze website",
          passwordHistorySee: "Bekijk wachtwoordgeschiedenis",
          passwordHistoryTitle: "Wachtwoord",
          passwordLimitSubtitle: "Upgrade naar premium",
          passwordLimitTitle: "U zit aan het limiet voor wachtwoorden van uw gratis abonnement. Dit wachtwoord wordt niet opgeslagen.",
          passwordLimitWarningButton: "Upgrade naar Premium voor onbeperkte opslag",
          passwordLimitWarningDesc:
            "U kunt geen logins meer opslaan met uw gratis Dashlane-account. U heeft uw gratis opslaglimiet bereikt en kunt alleen nog bestaande logins wijzigen.",
          passwordLimitWarningLabel: "Waarschuwing:",
          passwordNearLimitTitle: {
            one: "Eén wachtwoord over in uw gratis abonnement",
            other: "nog {count} wachtwoorden resterend in uw gratis lidmaatschap"
          },
          phoneAny: "Overig",
          phoneFax: "Fax",
          phoneLandline: "Thuis",
          phoneMobile: "Mobiel",
          phoneWorkFax: "Fax werk",
          phoneWorkLandline: "Werk",
          phoneWorkMobile: "Mobiel werk",
          reactivationHeader: "Open Dashlane om formulieren met één klik in te vullen.",
          roleButton: "Knop",
          sca_feedback: "Nog geen wachtwoorden opgeslagen voor deze website.",
          sca_feedback_add: "Een wachtwoord toevoegen",
          search: "Zoeken",
          searchInputPlaceholder: "Doorzoek uw items...",
          seePasswordLink: "Zie wachtwoord",
          shush_feedback: "We zullen hier geen gegevens automatisch invullen.",
          shush_feedback_learnMore: "Meer informatie",
          strongPassword: "Dat is pas een sterk wachtwoord!",
          suggestedButton: "Aanbevolen",
          topOfWalletSeparator: "Uw andere betaalmethoden",
          types_ADDRESS: "Adres",
          types_AUTHENTICATION: "Inloggen als",
          types_BANK_STATEMENT: "Bankrekening",
          types_COMPANY: "Bedrijf",
          types_DRIVER_LICENCE: "Rijbewijs",
          types_EMAIL: "E-mail",
          types_FISCAL: "Belastingnummer",
          types_GENERATED_PASSWORD: "Inloggen als",
          types_IDENTITY: "Identiteit",
          types_ID_CARD: "Identiteitskaart",
          types_PASSPORT: "Paspoort",
          types_PASSWORD: "Wachtwoord",
          types_PAYMENT_MEAN_CREDITCARD: "Creditcard",
          types_PHONE: "Telefoonnummer",
          types_SOCIAL_SECURITY: "burgerservicenummerkaart",
          types_WEBSITE: "Website",
          upgradeToPremium: "Upgrade naar premium",
          usePassword: "Gegenereerd wachtwoord gebruiken",
          v5_addNew_ADDRESS: "Een nieuw adres toevoegen",
          v5_addNew_AUTHENTICATION: "Nieuwe inloggegevens toevoegen",
          v5_addNew_BANK_STATEMENT: "Een nieuwe bankrekening toevoegen",
          v5_addNew_COMPANY: "Een nieuw bedrijf toevoegen",
          v5_addNew_DRIVER_LICENCE: "Een nieuw rijbewijs toevoegen",
          v5_addNew_EMAIL: "Een nieuw e-mailadres toevoegen",
          v5_addNew_FISCAL: "Een nieuw fiscaal nummer toevoegen",
          v5_addNew_IDENTITY: "Nieuwe persoonlijke informatie toevoegen",
          v5_addNew_ID_CARD: "Een nieuwe identiteitskaart toevoegen",
          v5_addNew_PASSPORT: "Een nieuw paspoort toevoegen",
          v5_addNew_PASSWORD: "Voeg een nieuw wachtwoord toe",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Een nieuwe creditcard toevoegen",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Een nieuw Paypal-account toevoegen",
          v5_addNew_PHONE: "Een nieuw telefoonnummer toevoegen",
          v5_addNew_SOCIAL_SECURITY: "Een nieuw burgerservicenummer toevoegen",
          v5_addNew_WEBSITE: "Een nieuwe website toevoegen",
          v5_addObjectHeader: "Vul deze informatie automatisch in op alle websites.",
          v5_connectAs: "Inloggen als",
          veryWeakPassword: "Het ingevoerde wachtwoord is zeer zwak",
          weakPassword: "Laten we dit wachtwoord sterker maken.",
          webAuthnReactivationDontAskAgain: "Niet opnieuw om deze sessie vragen",
          webAuthnReactivationErrorMessage: "Kunt u dat opnieuw proberen?",
          webAuthnReactivationFallbackToMasterPassword: "Masterwachtwoord gebruiken",
          webAuthnReactivationHeader: "Ontgrendel Dashlane om in te loggen—",
          webAuthnReactivationLoginButton: "Ontgrendelen met biometrische gegevens",
          webAuthnReactivationLoginButtonError: "Probeer opnieuw in te loggen met biometrie",
          webauthnConditionalUINotWithDashlaneButton: "Een andere wachtwoordsleutel gebruiken",
          websiteUnsecure: "Deze website is niet veilig. Gegevens die u hier invoert, kunnen gecompromitteerd worden.",
          websiteUnsecureIframe: "Controleer of u deze site vertrouwt, want dit formulier is mogelijk afkomstig van een ander domein."
        },
        "autologin-selection": {
          autologinHeader: "KIES HET ACCOUNT WAARMEE U WILT INLOGGEN:",
          autologinLoggingIn: "U WORDT AUTOMATISCH INGELOGD DOOR DASHLANE",
          clickToDismiss: "Klik nogmaals om dit te verbergen",
          closeWindow: "Sluiten",
          connectAs: "Inloggen als",
          defaultSpace: "Persoonlijk",
          header: "Kies het account waarmee u wilt inloggen",
          headerInner: "Account",
          openTheExtenion: "Open de extensie",
          openTheExtension: "Open de extensie",
          password: "Wachtwoord",
          v5_autologinLoggingIn: "Dashlane meldt u automatisch aan"
        },
        "data-capture": {
          cancel: "Annuleren",
          closeWindow: "Sluiten",
          creditCardDetails: "Creditcardgegevens",
          enterLogin: "Voer inloggegevens in",
          enterMasterPassword: "Masterwachtwoord",
          header: "Sla deze informatie op in Dashlane zodat u ze nooit meer online hoeft in te tikken.",
          headerLoggedout: "Log in bij Dashlane om deze informatie op te slaan.",
          login: "Inloggen",
          neverAgain: "Nooit meer vragen",
          neverForThisWebsite: "Nooit voor deze website",
          openDashlane: "Dashlane openen",
          save: "Opslaan",
          types_ADDRESS: "Adres",
          types_COMPANY: "Bedrijf",
          types_EMAIL: "E-mail",
          types_IDENTITY: "Naam",
          types_PAYMENT_MEAN_CREDITCARD: "Creditcard",
          types_PHONE: "Telefoonnummer",
          types_WEBSITE: "Website",
          wrongLogin: "Onjuiste login",
          wrongPassword: "Onjuist wachtwoord"
        },
        "feedback-notification": {
          editButton: "Bewerken",
          loginCreated: "Nieuwe login aangemaakt.",
          loginUpdated: "Login bijgewerkt.",
          undoButton: "Ongedaan maken"
        },
        "follow-up-notification": {
          accountHolderLabel: "Account holder",
          bicLabel: "BIC/SWIFT-code",
          cardNumberLabel: "Kaartnummer",
          copiedTooltip: "Gekopieerd",
          copyTooltip: "Kopiëren",
          emailLabel: "E-mail",
          footerInformation: "U kunt pop-ups voor kopiëren en plakken uitschakelen in uw instellingen voor automatisch invullen.",
          headerTitle: "Artikelgegevens kopiëren",
          ibanLabel: "IBAN",
          loginLabel: "Gebruikersnaam",
          otpLabel: "2FA-token",
          passwordLabel: "Wachtwoord",
          secondaryLoginLabel: "Alternatieve gebruikersnaam",
          securityCodeLabel: "Beveiligingscode",
          usernameLabel: "Gebruikersnaam"
        },
        "generic-popup": {
          click: "Nu wijzigen",
          closeWindow: "Sluiten",
          inputPlaceholder: "Vul uw naam in",
          subtitle: "Uw geslacht is",
          title: "Hallo"
        },
        "limited-capability": {
          cancelPasswordLimit: "Niet nu",
          closeWindow: "Sluiten",
          contentEssentialsPasswordLimit:
            "Upgrade naar ons Essentials-abonnement om een onbeperkt aantal wachtwoorden te synchroniseren op twee apparaten.",
          contentPasswordLimit:
            "U kunt geen logins meer opslaan met uw gratis Dashlane-account. Upgrade naar Premium voor onbeperkte opslag.",
          contentPremiumPasswordLimit:
            "Upgrade naar ons Premium-abonnement voor een onbeperkt aantal logins en om te synchroniseren op een onbeperkt aantal apparaten.",
          enterMasterPassword: "**************",
          goPremium: "Kies voor Premium",
          headerPasswordLimit: "Opslaglimiet bereikt",
          hide: "Verbergen",
          passwordLabel: "Wachtwoord",
          show: "Weergeven",
          upgradeToEssentials: "Upgrade naar Essentials",
          upgradeToPremium: "Upgrade naar premium"
        },
        "master-password": {
          alwaysAuthorize: "Altijd machtigen",
          cancel: "Annuleren",
          closeWindow: "Sluiten",
          emailHelpText: "Uw e-mailadres bevestigt dat u inlogt bij Dashlane.",
          enterMasterPassword: "Masterwachtwoord",
          hide: "Verbergen",
          loggedIn: "U bent ingelogd als <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Nooit om masterwachtwoord vragen om wachtwoorden te ontgrendelen",
          neverAskAgainAnyCredentialInfobox:
            "Als u dit selectievakje aanvinkt, wordt masterwachtwoord vereisen voor alle wachtwoorden uitgeschakeld.",
          neverAskAgainCredentialCheckbox: "Nooit om masterwachtwoord vragen om dit beveiligde item te ontgrendelen",
          ok: "OK",
          show: "Weergeven",
          title: "Beveiligde items 5 minuten lang ontgrendelen",
          unlock: "Ontgrendelen",
          unlockContent:
            "Als u na 5 minuten nog steeds toegang tot uw beveiligde gegevens nodig heeft, dan moet u uw masterwachtwoord opnieuw invoeren.",
          wrongPassword: "Onjuist wachtwoord"
        },
        notification: {
          cancel: "Annuleren",
          closeWindow: "Sluiten",
          ok: "OK",
          webOnboardingAfterCancelCancel: "Probeer het opnieuw",
          webOnboardingAfterCancelConfirm: "Terug naar app",
          webOnboardingAfterCancelTitle: "U kunt deze website opnieuw proberen of in plaats daarvan een andere site gebruiken.",
          webOnboardingAfterLoginCancel: "Sluiten",
          webOnboardingAfterLoginConfirm: "Ga terug naar Dashlane",
          webOnboardingAfterLoginTitle: "Gefeliciteerd, u bent een Dashlane-pro!",
          webOnboardingAfterSaveConfirm: "Bekijken in Dashlane",
          webOnboardingAfterSaveTitle: "U hebt uw eerste login opgeslagen!"
        },
        "phishing-prevention": {
          cancelButton: "Niet vertrouwen",
          currentUrlLabel: "Huidige URL",
          headerTitle: "Zorg ervoor dat u deze website vertrouwt voordat u uw logingegevens plakt",
          okButton: "Vertrouwen en plakken",
          phishingCTALink: "Meer informatie over phishing",
          trustedUrlLabel: "Vertrouwde URL"
        },
        "purchase-receipt": {
          addRow: "Item toevoegen",
          cancel: "Annuleren",
          closeWindow: "Sluiten",
          collapse: "Minder",
          disable: "Niet meer vragen",
          expand: "Meer weergeven",
          header: "Uw aankoopbewijs voor <strong>{0}</strong> opslaan in Dashlane?",
          header_nohtml: "Uw aankoopbewijs voor {0} opslaan in Dashlane?",
          save: "Opslaan",
          showLess: "Minder",
          showMore: "Meer weergeven",
          total: "TOTAAL",
          untitledItem: "Naamloos item",
          v5_header_nohtml: "Uw aankoopbewijs voor {0} bewaren in Dashlane",
          v5_total: "Totaal"
        },
        "save-password": {
          alwaysUseMasterPwd: "Masterwachtwoord vereisen voor gebruik",
          cancel: "Annuleren",
          closeWindow: "Sluiten",
          collapse: "Minder weergeven",
          contentPremiumPasswordLimit:
            "Upgrade naar ons Premium-abonnement voor een onbeperkt aantal logins en om te synchroniseren op een onbeperkt aantal apparaten.",
          createNewLogin: "Nieuwe login creëren",
          defaultSpace: "Persoonlijk",
          enterLogin: "Kies uw Dashlane-login...",
          enterMasterPassword: "Masterwachtwoord",
          expand: "Meer weergeven",
          footerBuyDashlane: "Koop Dashlane",
          footerDismiss: "Afwijzen",
          header: "Dit account opslaan in Dashlane?",
          headerLoggedout: "Log in bij Dashlane om uw wachtwoord voor <strong>{0}</strong> op te slaan.",
          headerLoggedout_nohtml: "Log in bij Dashlane om uw wachtwoord voor {0} op te slaan.",
          headerPasswordLimit: "Opslaglimiet bereikt",
          headerReplace: "Dit wachtwoord vervangen in Dashlane?",
          headerReplace_nohtml: "Dit wachtwoord vervangen in Dashlane?",
          headerTitleB2BTrialDiscontinued: "Uw account is geblokkeerd",
          header_nohtml: "Deze login opslaan in Dashlane?",
          infoboxDescriptionB2BTrialDiscontinued: "Uw wachtwoord wordt niet opgeslagen.",
          infoboxTitleB2BTrialDiscontinued: "Uw proefperiode is beëindigd en uw account is geblokkeerd. ",
          lastUsedItem: "Laatst gebruikt",
          login: "Inloggen",
          loginFieldLabel: "Gebruikersnaam",
          moreOptions: "Meer opties",
          neverAgain: "Nooit meer vragen",
          neverForThisWebsite: "Nooit voor deze website",
          openDashlane: "Dashlane openen",
          passwordFieldLabel: "WACHTWOORD",
          passwordHideButton: "Verbergen",
          passwordLimitReachedSubtitle: "Uw wachtwoord wordt niet opgeslagen.",
          passwordLimitReachedTitle: "U zit aan het limiet voor wachtwoorden van uw gratis abonnement",
          passwordLimitReachedTitleReplace: "U hebt het limiet van wachtwoorden bereikt dat u kunt opslaan in uw gratis abonnement",
          passwordNearLimitTitle: {
            one: "Eén wachtwoord over in uw gratis abonnement",
            other: "nog {count} wachtwoorden resterend in uw gratis lidmaatschap"
          },
          passwordShowButton: "Weergeven",
          replace: "Vervangen",
          save: "Opslaan",
          saveAsNew: "Opslaan als nieuw",
          saveAsNewLimited: "Opslaan als nieuw",
          saveAsNewLimitedPlaceholder: "Opslaglimiet bereikt",
          saveLimited: "Kies voor Premium",
          selectEmailOrUsernamePlaceholder: "Voer uw e-mailadres of gebruikersnaam in",
          selectEmailPlaceholder: "Voer een e-mailadres in",
          updatePasswordOrCreateNewLogin: "Update een bestaande login met dit wachtwoord of creëer een nieuwe login.",
          updatePasswordOrCreateNewLoginLimit: "Een bestaande login vervangen",
          upgradeToPremium: "Upgrade naar premium",
          upsellButton: "Neem Premium voor onbeperkte opslag van wachtwoorden",
          useOnlyOnSubdomain: "Alleen in dit subdomein gebruiken",
          wrongLogin: "Onjuiste login",
          wrongPassword: "Onjuist wachtwoord"
        },
        survey: { extension971: "Feedback om Dashlane te verbeteren" },
        "user-verification": {
          cancel: "Annuleren",
          enterMasterPassword: "Masterwachtwoord",
          hide: "Verbergen",
          loggedIn: "U bent ingelogd als <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Nooit om masterwachtwoord vragen om wachtwoorden te ontgrendelen",
          neverAskAgainAnyCredentialInfobox:
            "Als u dit selectievakje aanvinkt, wordt masterwachtwoord vereisen voor alle wachtwoorden uitgeschakeld.",
          neverAskAgainCredentialCheckbox: "Nooit om masterwachtwoord vragen om dit beveiligde item te ontgrendelen",
          selectionPanelBiometric: "Biometrische gegevens",
          selectionPanelMasterPassword: "Masterwachtwoord",
          selectionPanelTitle: "Selecteer een ontgrendelingsmethode:",
          show: "Weergeven",
          tryAgain: "Try again",
          unknownError: "Er is een onbekende fout opgetreden",
          unlock: "Unlock",
          useAnotherMethod: "Gebruik een andere methode",
          webauthnGenericErrorDescription: "Er is een fout opgetreden tijdens de beveiligingsverificatie.",
          webauthnGenericErrorTitle: "Something went wrong",
          webauthnPanelTitle:
            "Gebruik biometrische gegevens, een beveiligingssleutel of de pincode van uw apparaat om Dashlane te ontgrendelen.",
          webcardTitle: "Volledige beveiligingsverificatie",
          wrongPassword: "Onjuist wachtwoord"
        },
        "warn-generated-password": {
          cancel: "Annuleren",
          closeWindow: "Sluiten",
          contentWarnGeneratedPassword:
            "Dashlane neemt contact met u op via dit e-mailaccount om belangrijke acties te ondernemen, zoals uw identiteit verifiëren. We raden u aan om een wachtwoord aan te maken dat sterk is, maar ook gemakkelijk te onthouden.",
          continue: "Doorgaan",
          header: "Bent u zeker dat u dit wachtwoord zult kunnen onthouden?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Annuleren",
          create_confirmButton: "Bevestigen",
          create_content: "Maak een nieuw passkey aan met Dashlane voor gebruiker {0} op site {1}?",
          create_headerTitle: "Nieuw passkey aanmaken",
          create_withoutDashlaneButton: "Gebruik een code die niet van Dashlane is"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Annuleren",
          confirmButton: "Bevestigen",
          content: "Wilt u inloggen als {0} op {1}?",
          get_withoutDashlaneButton: "Gebruik een code die niet van Dashlane is",
          headerTitle: "Inloggen met Dashlane "
        },
        "webauthn-passkey-selection": {
          headerTitle: "Kies het account waarmee u wilt inloggen",
          selection_withoutDashlaneButton: "Een andere wachtwoordsleutel gebruiken"
        }
      };
    },
    596: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Cancelar",
          closeWindow: "Fechar",
          confirm: "Preencher automaticamente",
          title: "Você quer que a Dashlane preencha essas informações automaticamente?",
          warning: "Se precisar acessar seus dados depois de 5 minutos, solicitaremos novamente."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Última senha não salva",
          TR_SELFCORRECT_STEP1_ADDRESS: "Endereço",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Autenticação",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Detalhes bancários",
          TR_SELFCORRECT_STEP1_COMPANY: "Empresa",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Cartão de crédito",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "Não usar pre. auto. neste campo",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Carteira de motorista",
          TR_SELFCORRECT_STEP1_EMAIL: "E-mail",
          TR_SELFCORRECT_STEP1_FISCAL: "Número de imposto",
          TR_SELFCORRECT_STEP1_IDCARD: "Documento de identidade",
          TR_SELFCORRECT_STEP1_IDENTITY: "Identidade",
          TR_SELFCORRECT_STEP1_LOGININFO: "Informações de login",
          TR_SELFCORRECT_STEP1_NOTHING: "Nada",
          TR_SELFCORRECT_STEP1_PASSPORT: "Passaporte",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Informações de pagamento",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Informações pessoais",
          TR_SELFCORRECT_STEP1_PHONE: "Número de telefone",
          TR_SELFCORRECT_STEP1_SSN: "Número de seguro social",
          TR_SELFCORRECT_STEP1_WEBSITE: "Site",
          TR_SELFCORRECT_STEP2_ADDRESS: "Endereço",
          TR_SELFCORRECT_STEP2_AGE: "Idade",
          TR_SELFCORRECT_STEP2_AL1: "Linha 1 de endereço",
          TR_SELFCORRECT_STEP2_AL2: "Linha 2 de endereço",
          TR_SELFCORRECT_STEP2_AL3: "Linha 3 de endereço",
          TR_SELFCORRECT_STEP2_APTNUM: "Número do apartamento",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Nome do titular da conta",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Número da conta bancária",
          TR_SELFCORRECT_STEP2_BANKNAME: "Nome do banco",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Número do edifício",
          TR_SELFCORRECT_STEP2_CITY: "Cidade",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Nome da empresa",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Cargo na empresa",
          TR_SELFCORRECT_STEP2_COUNTRY: "País",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Código do país",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Banco emissor",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Mês e ano do vencimento",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Mês de vencimento",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Ano de vencimento",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Número do cartão de crédito",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Nome completo como no cartão",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "Nome como no cartão",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Sobrenome como no cartão",
          TR_SELFCORRECT_STEP2_DOB: "Data de nascimento",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Data de entrega",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Data de nascimento",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Data de vencimento",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "Nome",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Gênero",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Sobrenome",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Nome completo",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Número de carteira de motorista",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "Estado de emissão",
          TR_SELFCORRECT_STEP2_EMAIL: "E-mail",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "E-mail",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "Nome",
          TR_SELFCORRECT_STEP2_FLOOR: "Andar",
          TR_SELFCORRECT_STEP2_FULLNAME: "Nome completo",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Data de entrega",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Data de nascimento",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Data de vencimento",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "Nome",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Gênero",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Nome completo",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Sobrenome",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Nacionalidade",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "Número de documento de identidade",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Cargo",
          TR_SELFCORRECT_STEP2_LASTNAME: "Sobrenome",
          TR_SELFCORRECT_STEP2_LOGIN: "Nome de usuário",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Nome de usuário secundário",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Nome de solteira",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "Segundo nome",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Inicial do nome do meio",
          TR_SELFCORRECT_STEP2_NOTHING: "Nada",
          TR_SELFCORRECT_STEP2_OTP: "Token de 2FA",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Data de entrega",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Data de nascimento",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Data de vencimento",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Sexo",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "Nome",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Sobrenome",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Nome completo",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Local de entrega",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Nacionalidade",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Número de passaporte",
          TR_SELFCORRECT_STEP2_PASSWORD: "Senha",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Confirmar senha",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Senha atual",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "Nova senha",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Código do telefone do país",
          TR_SELFCORRECT_STEP2_PHONENUM: "Número de telefone",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Extensão do número de telefone",
          TR_SELFCORRECT_STEP2_POB: "Local de nascimento",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Número do banco",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Código bancário",
          TR_SELFCORRECT_STEP2_SSN: "Número de seguro social",
          TR_SELFCORRECT_STEP2_STATE: "Estado (por exemplo, Flórida)",
          TR_SELFCORRECT_STEP2_STATECODE: "Sigla do estado (por exemplo, FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Nome da rua",
          TR_SELFCORRECT_STEP2_STREETNUM: "Número",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Tipo de rua (por exemplo, avenida)",
          TR_SELFCORRECT_STEP2_TAXNUM: "Número de imposto",
          TR_SELFCORRECT_STEP2_WEBSITE: "Site",
          TR_SELFCORRECT_STEP2_ZIP: "Código postal",
          aboutToExpire: "EXPIRA EM BREVE",
          addNew_ADDRESS: "Adicione um novo endereço",
          addNew_AUTHENTICATION: "Método de autenticação",
          addNew_BANK_STATEMENT: "Adicione uma nova conta bancária",
          addNew_COMPANY: "Adicione uma nova empresa",
          addNew_DRIVER_LICENCE: "Adicione uma nova carteira de motorista",
          addNew_EMAIL: "Adicione um novo endereço de e-mail",
          addNew_FISCAL: "Adicione uma nova ID de imposto",
          addNew_IDENTITY: "Adicione um novo nome",
          addNew_ID_CARD: "Adicione uma nova identidade",
          addNew_NOTHING: "Nada",
          addNew_PASSPORT: "Adicione um novo passaporte",
          addNew_PAYMENT_MEAN_CREDITCARD: "Adicione um novo cartão de crédito",
          addNew_PAYMENT_MEAN_PAYPAL: "Adicione uma nova conta do PayPal",
          addNew_PHONE: "Adicione um novo número de telefone",
          addNew_SOCIAL_SECURITY: "Adicione um novo número de seguro social",
          addNew_WEBSITE: "Adicione um novo site",
          addObjectHeader: "Preencha automaticamente estas informações em qualquer site.",
          allItemsButton: "Todos os itens",
          buyDashlane: "Comprar o Dashlane",
          closeWindow: "Fechar",
          connectAs: "Fazer login como",
          contactEmailGeneration: "Você vai gerar uma senha forte para o endereço de e-mail associado à sua conta do Dashlane.",
          defaultSpace: "Pessoal",
          emailBusiness: "Comercial",
          emailPersonal: "Pessoal",
          emptyStateWebcard_noLogin: "Não há login salvo para o {domain}.",
          emptyStateWebcard_noOtherInfo: "Você não tem essa informação salva.",
          emptyStateWebcard_noPassword: "Nenhuma senha foi salva para este site.",
          existingPassword: "Você já tem uma senha salva para este site. Tem certeza que deseja gerar uma nova?",
          expired: "EXPIRADO",
          fixAutofillHeader: "O que deveria estar aqui?",
          fixAutofillIssue: "Corrigir agora",
          generatePasswordButtons_closeSettings: "Fechar configurações de senha",
          generatePasswordButtons_hidePassword: "Ocultar senha",
          generatePasswordButtons_openSettings: "Abrir configurações de senha",
          generatePasswordButtons_reshuffle: "Gerar nova senha",
          generatePasswordButtons_showPassword: "Mostrar senha",
          generatePasswordDropdownTitle: "Gerador de senhas",
          generatePasswordOption_digits: "Números (ex., 345)",
          generatePasswordOption_length: "Comprimento ({0})",
          generatePasswordOption_letters: "Letras (ex., Aa)",
          generatePasswordOption_similarCharacters: "Caracteres semelhantes (ex., 0O 1| 2Z)",
          generatePasswordOption_symbols: "Símbolos (@&$!#?)",
          generatePasswordStrength_none: "Calculando...",
          generatePasswordStrength_safelyUnguessable: "Ótimo! Essa senha é bem forte.",
          generatePasswordStrength_somewhatGuessable: "Ainda falta um pouco.",
          generatePasswordStrength_tooGuessable: "Vamos deixar essa senha mais forte.",
          generatePasswordStrength_veryGuessable: "É um bom começo, mas ela poder ser mais forte.",
          generatePasswordStrength_veryUnguessable: "Você atingiu o nível máximo de segurança da senha!",
          generatePwd: "Gere uma senha forte",
          hasAutofillIssue: "Vivenciando algum problema com o preenchimento automático?",
          incomplete: "INCOMPLETO",
          infoboxDescriptionB2BTrialDiscontinued: "Você não pode gerar novas senhas",
          infoboxTitleB2BTrialDiscontinued: "Sua avaliação terminou e sua conta está congelada.",
          itemsCountLabel: { one: "{count} item", other: "{count} itens" },
          mavReactivationBtn: "Fazer login agora",
          mavReactivationCreateBtn: "Criar uma conta",
          mavReactivationDismiss: "Não peça novamente para esta sessão",
          mavReactivationOr: "ou",
          mavReactivationTitle: "Faça login no Dashlane para preencher formulários com apenas um clique.",
          openTheExtenion: "Abrir a extensão",
          openTheExtension: "Abrir a extensão",
          optionsAutofillSomethingElse: "Usar pre. auto. em outra coisa",
          optionsClose: "Pausar para esta visita",
          optionsCloseMenu: "Fechar mais opções",
          optionsDontAutofill: "Pausar até eu ativá-lo novamente",
          optionsFillSomethingElse: "Usar pre. auto. em outra coisa",
          optionsNeverSuggest: "Pausar até eu ativá-lo novamente",
          optionsOpenMenu: "Abrir mais opções",
          optionsTitle: "Usar preenchimento automático neste campo",
          optionsTooltip: "Usar preenchimento auto. neste campo",
          password: "Senha",
          passwordHistoryDomain: "Este site",
          passwordHistorySee: "Ver histórico de senhas",
          passwordHistoryTitle: "Senha",
          passwordLimitSubtitle: "Fazer o upgrade para o Premium",
          passwordLimitTitle: "Você atingiu o limite de senhas do seu plano Free. Esta senha não será salva.",
          passwordLimitWarningButton: "Faça upgrade para o plano Premium para obter armazenamento ilimitado",
          passwordLimitWarningDesc:
            "Sua conta do Dashlane Free não permite armazenar mais logins. Você atingiu o limite de armazenamento de logins do plano Free e, agora, pode apenas modificar os existentes.",
          passwordLimitWarningLabel: "Aviso:",
          passwordNearLimitTitle: { one: "Uma senha restante em seu plano Free", other: "{count} senhas restantes em seu plano Free" },
          phoneAny: "Outro",
          phoneFax: "Fax",
          phoneLandline: "Residencial",
          phoneMobile: "Celular",
          phoneWorkFax: "Fax do trabalho",
          phoneWorkLandline: "Trabalho",
          phoneWorkMobile: "Celular do trabalho",
          reactivationHeader: "Ative o Dashlane para preencher formulários em apenas um clique.",
          roleButton: "Botão",
          sca_feedback: "Ainda não há senhas salvas para este site.",
          sca_feedback_add: "Adicione uma senha",
          search: "Pesquisar",
          searchInputPlaceholder: "Pesquise seus itens…",
          seePasswordLink: "Ver senha",
          shush_feedback: "Não vamos fazer preencher automaticamente aqui.",
          shush_feedback_learnMore: "Saiba mais",
          strongPassword: "Ótimo! Essa é uma senha forte",
          suggestedButton: "Sugerido",
          topOfWalletSeparator: "Seus demais métodos de pagamento",
          types_ADDRESS: "Endereço",
          types_AUTHENTICATION: "Fazer login como",
          types_BANK_STATEMENT: "Conta bancária",
          types_COMPANY: "Empresa",
          types_DRIVER_LICENCE: "Carteira de motorista",
          types_EMAIL: "E-mail",
          types_FISCAL: "Número de imposto",
          types_GENERATED_PASSWORD: "Fazer login como",
          types_IDENTITY: "Identidade",
          types_ID_CARD: "Documento de identidade",
          types_PASSPORT: "Passaporte",
          types_PASSWORD: "Senha",
          types_PAYMENT_MEAN_CREDITCARD: "Cartão de crédito",
          types_PHONE: "Número de telefone",
          types_SOCIAL_SECURITY: "Cartão de seguro social",
          types_WEBSITE: "Site",
          upgradeToPremium: "Faça o upgrade para o Premium",
          usePassword: "Usar senha gerada",
          v5_addNew_ADDRESS: "Adicionar um novo endereço",
          v5_addNew_AUTHENTICATION: "Adicionar novo login",
          v5_addNew_BANK_STATEMENT: "Adicionar uma nova conta bancária",
          v5_addNew_COMPANY: "Adicionar uma nova empresa",
          v5_addNew_DRIVER_LICENCE: "Adicionar uma nova carteira de motorista",
          v5_addNew_EMAIL: "Adicionar um novo endereço de e-mail",
          v5_addNew_FISCAL: "Adicionar um novo número de imposto",
          v5_addNew_IDENTITY: "Adicionar novas informações pessoais",
          v5_addNew_ID_CARD: "Adicionar um novo documento de identidade",
          v5_addNew_PASSPORT: "Adicionar um novo passaporte",
          v5_addNew_PASSWORD: "Adicione uma senha nova",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Adicionar um novo cartão de crédito",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Adicionar uma nova conta do PayPal",
          v5_addNew_PHONE: "Adicionar um novo número de telefone",
          v5_addNew_SOCIAL_SECURITY: "Adicionar um novo número de seguro social",
          v5_addNew_WEBSITE: "Adicionar um novo site",
          v5_addObjectHeader: "Preencha automaticamente estas informações em qualquer site.",
          v5_connectAs: "Fazer login como",
          veryWeakPassword: "A senha inserida é muito fraca",
          weakPassword: "Vamos deixar essa senha mais forte.",
          webAuthnReactivationDontAskAgain: "Não peça novamente para esta sessão",
          webAuthnReactivationErrorMessage: "Você pode tentar de novo?",
          webAuthnReactivationFallbackToMasterPassword: "Utilizar senha mestra",
          webAuthnReactivationHeader: "Desbloqueie a Dashlane para fazer login",
          webAuthnReactivationLoginButton: "Desbloquear com biometria",
          webAuthnReactivationLoginButtonError: "Tentar biometria novamente",
          webauthnConditionalUINotWithDashlaneButton: "Utilize uma senha diferente",
          websiteUnsecure: "Este site não é seguro. As informações que você insere aqui podem ser comprometidas.",
          websiteUnsecureIframe: "Certifique-se de que você confia neste site, pois este formulário pode ser de outro domínio."
        },
        "autologin-selection": {
          autologinHeader: "ESCOLHA A CONTA COM A QUAL VOCÊ DESEJA FAZER LOGIN:",
          autologinLoggingIn: "O DASHLANE ESTÁ FAZENDO SEU LOGIN AUTOMATICAMENTE",
          clickToDismiss: "Clique novamente para ocultar isto",
          closeWindow: "Fechar",
          connectAs: "Fazer login como",
          defaultSpace: "Pessoal",
          header: "Escolha a conta com a qual gostaria de fazer login",
          headerInner: "Conta",
          openTheExtenion: "Abrir a extensão",
          openTheExtension: "Abrir a extensão",
          password: "Senha",
          v5_autologinLoggingIn: "A DASHLANE ESTÁ FAZENDO SEU LOGIN AUTOMATICAMENTE"
        },
        "data-capture": {
          cancel: "Cancelar",
          closeWindow: "Fechar",
          creditCardDetails: "Informações do cartão de crédito",
          enterLogin: "Inserir login",
          enterMasterPassword: "Senha mestra",
          header: "Salve estas informações no Dashlane para nunca mais precisar digitá-las.",
          headerLoggedout: "Faça login no Dashlane para salvar estas informações.",
          login: "Fazer login",
          neverAgain: "Não me perguntar novamente",
          neverForThisWebsite: "Nunca para este site",
          openDashlane: "Abrir o Dashlane",
          save: "Salvar",
          types_ADDRESS: "Endereço",
          types_COMPANY: "Empresa",
          types_EMAIL: "E-mail",
          types_IDENTITY: "Nome",
          types_PAYMENT_MEAN_CREDITCARD: "Cartão de crédito",
          types_PHONE: "Número de telefone",
          types_WEBSITE: "Site",
          wrongLogin: "Login incorreto",
          wrongPassword: "Senha incorreta"
        },
        "feedback-notification": {
          editButton: "Editar",
          loginCreated: "Novo login criado.",
          loginUpdated: "Login atualizado.",
          undoButton: "Desfazer"
        },
        "follow-up-notification": {
          accountHolderLabel: "Titular da conta",
          bicLabel: "Código BIC/SWIFT",
          cardNumberLabel: "Número do cartão",
          copiedTooltip: "Copiado",
          copyTooltip: "Copiar",
          emailLabel: "E-mail",
          footerInformation: "Você pode desativar copiar e colar pop-ups nas configurações de preenchimento automático.",
          headerTitle: "Copiar e colar os detalhes do item",
          ibanLabel: "IBAN",
          loginLabel: "Nome de usuário",
          otpLabel: "Token de 2FA",
          passwordLabel: "Senha",
          secondaryLoginLabel: "Nome de usuário secundário",
          securityCodeLabel: "Código de segurança",
          usernameLabel: "Nome de usuário"
        },
        "generic-popup": {
          click: "Altere agora!",
          closeWindow: "Fechar",
          inputPlaceholder: "Digite seu nome",
          subtitle: "Sexo",
          title: "Olá"
        },
        "limited-capability": {
          cancelPasswordLimit: "Agora não",
          closeWindow: "Fechar",
          contentEssentialsPasswordLimit:
            "Faça upgrade para o plano Essencial para obter senhas ilimitadas e sincronizar entre dois dispositivos.",
          contentPasswordLimit:
            "Sua conta do Dashlane Free não permite armazenar mais logins. Para aproveitar um armazenamento ilimitado, faça upgrade para o Premium.",
          contentPremiumPasswordLimit:
            "Faça upgrade para o plano Premium para ter logins ilimitados e sincronização em dispositivos ilimitados.",
          enterMasterPassword: "**************",
          goPremium: "Mudar para o Premium",
          headerPasswordLimit: "Você atingiu o limite de armazenamento",
          hide: "Ocultar",
          passwordLabel: "Senha",
          show: "Exibir",
          upgradeToEssentials: "Fazer upgrade para o plano Essencial",
          upgradeToPremium: "Fazer o upgrade para Premium"
        },
        "master-password": {
          alwaysAuthorize: "Sempre autorizar",
          cancel: "Cancelar",
          closeWindow: "Fechar",
          emailHelpText: "Seu e-mail confirma que você está fazendo login no Dashlane.",
          enterMasterPassword: "Senha mestra",
          hide: "Ocultar",
          loggedIn: "Você fez login como <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Nunca pedir a senha mestra para desbloquear senhas",
          neverAskAgainAnyCredentialInfobox:
            "Ao marcar essa caixa de seleção, a opção de exigir a senha mestra para todas as senhas será desativada.",
          neverAskAgainCredentialCheckbox: "Nunca pedir a senha mestra para desbloquear esse item seguro",
          ok: "OK",
          show: "Exibir",
          title: "Desbloquear itens seguros por 5 minutos",
          unlock: "Desbloquear",
          unlockContent:
            "Caso ainda precise acessar seus dados protegidos depois de 5 minutos, será necessário inserir a sua Senha Mestra novamente.",
          wrongPassword: "Senha incorreta"
        },
        notification: {
          cancel: "Cancelar",
          closeWindow: "Fechar",
          ok: "OK",
          webOnboardingAfterCancelCancel: "Tente novamente",
          webOnboardingAfterCancelConfirm: "Voltar para o aplicativo",
          webOnboardingAfterCancelTitle: "Você pode tentar usar este site novamente ou usar outro.",
          webOnboardingAfterLoginCancel: "Fechar",
          webOnboardingAfterLoginConfirm: "Voltar para a Dashlane",
          webOnboardingAfterLoginTitle: "Parabéns, você é um expert em Dashlane!",
          webOnboardingAfterSaveConfirm: "Veja na Dashlane",
          webOnboardingAfterSaveTitle: "Você salvou seu primeiro login!"
        },
        "phishing-prevention": {
          cancelButton: "Não confiar",
          currentUrlLabel: "URL atual",
          headerTitle: "Certifique-se de que confia neste site antes de colar os detalhes do seu login",
          okButton: "Confiar e colar",
          phishingCTALink: "Saiba mais sobre phishing",
          trustedUrlLabel: "URL confiável"
        },
        "purchase-receipt": {
          addRow: "Adicionar item",
          cancel: "Cancelar",
          closeWindow: "Fechar",
          collapse: "Menos",
          disable: "Não perguntar novamente",
          expand: "Mostrar mais",
          header: "Deseja salvar o recibo de <strong>{0}</strong> no Dashlane?",
          header_nohtml: "Deseja salvar seu recibo do(a) {0} na Dashlane?",
          save: "Salvar",
          showLess: "Menos",
          showMore: "Mostrar mais",
          total: "TOTAL",
          untitledItem: "Item sem título",
          v5_header_nohtml: "Salve seu recibo de {0} na Dashlane",
          v5_total: "Total"
        },
        "save-password": {
          alwaysUseMasterPwd: "Exigir senha mestra antes de utilizar",
          cancel: "Cancelar",
          closeWindow: "Fechar",
          collapse: "Mostrar menos",
          contentPremiumPasswordLimit:
            "Faça upgrade para o plano Premium para ter logins ilimitados e sincronização em dispositivos ilimitados.",
          createNewLogin: "Criar um login",
          defaultSpace: "Pessoal",
          enterLogin: "Escolha seu login do Dashlane...",
          enterMasterPassword: "Senha mestra",
          expand: "Mostrar mais",
          footerBuyDashlane: "Comprar o Dashlane",
          footerDismiss: "Dispensar",
          header: "Salvar esta conta na Dashlane?",
          headerLoggedout: "Faça login no Dashlane para salvar sua senha de <strong>{0}</strong> .",
          headerLoggedout_nohtml: "Faça login na Dashlane para salvar sua senha de {0}.",
          headerPasswordLimit: "Você atingiu o limite de armazenamento",
          headerReplace: "Substituir esta senha na Dashlane?",
          headerReplace_nohtml: "Substituir esta senha na Dashlane?",
          headerTitleB2BTrialDiscontinued: "Sua conta está congelada",
          header_nohtml: "Salvar este login na Dashlane?",
          infoboxDescriptionB2BTrialDiscontinued: "Sua senha não será salva.",
          infoboxTitleB2BTrialDiscontinued: "Sua avaliação terminou e sua conta está congelada.",
          lastUsedItem: "Última utilização",
          login: "Fazer login",
          loginFieldLabel: "Nome de usuário",
          moreOptions: "Mais opções",
          neverAgain: "Não me perguntar novamente",
          neverForThisWebsite: "Nunca para este site",
          openDashlane: "Abrir o Dashlane",
          passwordFieldLabel: "Senha",
          passwordHideButton: "Ocultar",
          passwordLimitReachedSubtitle: "Sua senha não será salva.",
          passwordLimitReachedTitle: "Você atingiu o limite de senhas do seu plano Free",
          passwordLimitReachedTitleReplace: "Você atingiu o limite de senhas que pode salvar em seu plano Free",
          passwordNearLimitTitle: { one: "Uma senha restante em seu plano Free", other: "{count} senhas restantes em seu plano Free" },
          passwordShowButton: "Exibir",
          replace: "Substituir",
          save: "Salvar",
          saveAsNew: "Salvar como nova",
          saveAsNewLimited: "Salvar como nova",
          saveAsNewLimitedPlaceholder: "Você atingiu o limite de armazenamento",
          saveLimited: "Mudar para o Premium",
          selectEmailOrUsernamePlaceholder: "Insira seu e-mail ou nome de usuário",
          selectEmailPlaceholder: "Insira um endereço de e-mail",
          updatePasswordOrCreateNewLogin: "Atualize um login existente com esta senha ou crie um login.",
          updatePasswordOrCreateNewLoginLimit: "Substituir um login existente",
          upgradeToPremium: "Faça o upgrade para o Premium",
          upsellButton: "Mude para o Premium para ter armazenamento ilimitado de senhas",
          useOnlyOnSubdomain: "Utilizar apenas neste subdomínio",
          wrongLogin: "Login incorreto",
          wrongPassword: "Senha incorreta"
        },
        survey: { extension971: "Deixe um comentário para melhorar o Dashlane" },
        "user-verification": {
          cancel: "Cancelar",
          enterMasterPassword: "Senha mestra",
          hide: "Ocultar",
          loggedIn: "Você fez login como <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Nunca pedir a senha mestra para desbloquear senhas",
          neverAskAgainAnyCredentialInfobox:
            "Ao marcar essa caixa de seleção, a opção de exigir a senha mestra para todas as senhas será desativada.",
          neverAskAgainCredentialCheckbox: "Nunca pedir a senha mestra para desbloquear esse item seguro",
          selectionPanelBiometric: "Biometria",
          selectionPanelMasterPassword: "Senha mestra",
          selectionPanelTitle: "Selecione um método de desbloqueio:",
          show: "Exibir",
          tryAgain: "Tentar novamente",
          unknownError: "Ocorreu um erro inesperado",
          unlock: "Unlock",
          useAnotherMethod: "Usar outro método",
          webauthnGenericErrorDescription: "Ocorreu um erro durante a verificação de segurança.",
          webauthnGenericErrorTitle: "Ocorreu um problema",
          webauthnPanelTitle: "Use biometria, uma chave de segurança ou o código PIN do seu dispositivo para desbloquear o Dashlane.",
          webcardTitle: "Conclua a verificação de segurança",
          wrongPassword: "Senha incorreta"
        },
        "warn-generated-password": {
          cancel: "Cancelar",
          closeWindow: "Fechar",
          contentWarnGeneratedPassword:
            "O Dashlane entra em contato com você através desta conta de e-mail para realizar ações importantes, como verificar sua identidade. Recomendamos criar uma senha segura, mas que seja fácil de lembrar.",
          continue: "Continuar",
          header: "Tem certeza de que você conseguirá lembrar desta senha?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Cancelar",
          create_confirmButton: "Confirmar",
          create_content: "Criar nova chaves-senha com o Dashlane para o usuário {0} no site {1}?",
          create_headerTitle: "Criar nova chaves-senha",
          create_withoutDashlaneButton: "Usar chave não Dashlane"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Cancelar",
          confirmButton: "Confirmar",
          content: "Deseja fazer login como {0} em {1}?",
          get_withoutDashlaneButton: "Usar chave não Dashlane",
          headerTitle: "Fazer login com Dashlane"
        },
        "webauthn-passkey-selection": {
          headerTitle: "Escolha a conta com a qual gostaria de fazer login",
          selection_withoutDashlaneButton: "Utilize uma senha diferente"
        }
      };
    },
    8277: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "Avbryt",
          closeWindow: "Stäng",
          confirm: "Fyll i automatiskt",
          title: "Vill du att Dashlane ska fylla i den här säkra informationen automatiskt?",
          warning: "Vi frågar dig igen om du behöver komma åt dina data efter fem minuter."
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "Senaste lösenordet som inte sparades",
          TR_SELFCORRECT_STEP1_ADDRESS: "Adress",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "Autentisering",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "Bankuppgifter",
          TR_SELFCORRECT_STEP1_COMPANY: "Företag",
          TR_SELFCORRECT_STEP1_CREDITCARD: "Kreditkort",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "Fyll inte i fältet automatiskt",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "Körkort",
          TR_SELFCORRECT_STEP1_EMAIL: "E-post",
          TR_SELFCORRECT_STEP1_FISCAL: "Skattenummer",
          TR_SELFCORRECT_STEP1_IDCARD: "ID-kort",
          TR_SELFCORRECT_STEP1_IDENTITY: "Identitet",
          TR_SELFCORRECT_STEP1_LOGININFO: "Inloggningsuppgifter",
          TR_SELFCORRECT_STEP1_NOTHING: "Ingenting",
          TR_SELFCORRECT_STEP1_PASSPORT: "Pass",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "Betalningsuppgifter",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "Personlig information",
          TR_SELFCORRECT_STEP1_PHONE: "Telefonnummer",
          TR_SELFCORRECT_STEP1_SSN: "Personnummer",
          TR_SELFCORRECT_STEP1_WEBSITE: "Webbplats",
          TR_SELFCORRECT_STEP2_ADDRESS: "Adress",
          TR_SELFCORRECT_STEP2_AGE: "Ålder",
          TR_SELFCORRECT_STEP2_AL1: "Adress (rad 1)",
          TR_SELFCORRECT_STEP2_AL2: "Adress (rad 2)",
          TR_SELFCORRECT_STEP2_AL3: "Adress (rad 3)",
          TR_SELFCORRECT_STEP2_APTNUM: "Lägenhetsnummer",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "Kontoinnehavares namn",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "Bankkontonummer",
          TR_SELFCORRECT_STEP2_BANKNAME: "Banknamn",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "Husnummer",
          TR_SELFCORRECT_STEP2_CITY: "Stad",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "Företagsnamn",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "Jobbtitel",
          TR_SELFCORRECT_STEP2_COUNTRY: "Land",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "Landsnummer",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "Utfärdande bank",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "Utgångsmånad och år",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "Utgångsmånad",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "Utgångsår",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "Kreditkortsnummer",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "Fullständigt namn på kortet",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "Förnamn på kortet",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "Efternamn på kortet",
          TR_SELFCORRECT_STEP2_DOB: "Födelsedatum",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "Leveransdatum",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "Födelsedatum",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "Utgångsdatum",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "Förnamn",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "Kön",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "Efternamn",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "Fullständigt namn",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "Körkortsnummer",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "Land för utfärdande",
          TR_SELFCORRECT_STEP2_EMAIL: "E-post",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "E-post",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "Förnamn",
          TR_SELFCORRECT_STEP2_FLOOR: "Våning",
          TR_SELFCORRECT_STEP2_FULLNAME: "Fullständigt namn",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "Leveransdatum",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "Födelsedatum",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "Utgångsdatum",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "Förnamn",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "Kön",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "Fullständigt namn",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "Efternamn",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "Nationalitet",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "ID-kortsnummer",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "Ställning",
          TR_SELFCORRECT_STEP2_LASTNAME: "Efternamn",
          TR_SELFCORRECT_STEP2_LOGIN: "Användarnamn",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "Alternativt användarnamn",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "Flicknamn",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "Mellannamn",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "Mellannamnets initial",
          TR_SELFCORRECT_STEP2_NOTHING: "Ingenting",
          TR_SELFCORRECT_STEP2_OTP: "2FA-token",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "Leveransdatum",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "Födelsedatum",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "Utgångsdatum",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "Kön",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "Förnamn",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "Efternamn",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "Fullständigt namn",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "Leveransplats",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "Nationalitet",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "Passnummer",
          TR_SELFCORRECT_STEP2_PASSWORD: "Lösenord",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "Bekräfta lösenord",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "Nuvarande lösenord",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "Nytt lösenord",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "Landsnummer",
          TR_SELFCORRECT_STEP2_PHONENUM: "Telefonnummer",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "Anknytningsnummer",
          TR_SELFCORRECT_STEP2_POB: "Födelseort",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "Clearingnummer",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Clearingnummer",
          TR_SELFCORRECT_STEP2_SSN: "Personnummer",
          TR_SELFCORRECT_STEP2_STATE: "Stat (t.ex. Florida)",
          TR_SELFCORRECT_STEP2_STATECODE: "Statskod (t.ex. FL)",
          TR_SELFCORRECT_STEP2_STREETNAME: "Gatunamn",
          TR_SELFCORRECT_STEP2_STREETNUM: "Husnummer",
          TR_SELFCORRECT_STEP2_STREETTYPE: "Gatutyp (t.ex. Aveny)",
          TR_SELFCORRECT_STEP2_TAXNUM: "Skattenummer",
          TR_SELFCORRECT_STEP2_WEBSITE: "Webbplats",
          TR_SELFCORRECT_STEP2_ZIP: "Postnummer",
          aboutToExpire: "LÖPER UT SNART",
          addNew_ADDRESS: "Lägg till en ny adress",
          addNew_AUTHENTICATION: "Autentiseringsmetod",
          addNew_BANK_STATEMENT: "Lägg till ett nytt bankkonto",
          addNew_COMPANY: "Lägg till ett nytt företag",
          addNew_DRIVER_LICENCE: "Lägg till ett nytt körtkort",
          addNew_EMAIL: "Lägg till en ny e-postadress",
          addNew_FISCAL: "Lägg till ett nytt skatteregistreringsnummer",
          addNew_IDENTITY: "Lägg till ett nytt namn",
          addNew_ID_CARD: "Lägg till ett nytt ID",
          addNew_NOTHING: "Ingenting",
          addNew_PASSPORT: "Lägg till ett nytt pass",
          addNew_PAYMENT_MEAN_CREDITCARD: "Lägg till ett nytt kreditkort",
          addNew_PAYMENT_MEAN_PAYPAL: "Lägg till ett nytt PayPal-konto",
          addNew_PHONE: "Lägg till ett nytt telefonnummer",
          addNew_SOCIAL_SECURITY: "Lägg till ett nytt personnummer",
          addNew_WEBSITE: "Lägg till en ny webbplats",
          addObjectHeader: "Fyll i dessa uppgifter automatiskt på alla webbplatser.",
          allItemsButton: "Alla objekt",
          buyDashlane: "Köp Dashlane",
          closeWindow: "Stäng",
          connectAs: "Logga in som",
          contactEmailGeneration: "Du kommer att generera ett starkt lösenord för e-postadressen som är anslutet till ditt Dashlane-konto.",
          defaultSpace: "Personlig",
          emailBusiness: "Affärer",
          emailPersonal: "Personlig",
          emptyStateWebcard_noLogin: "Ingen inloggning sparad för {domain}.",
          emptyStateWebcard_noOtherInfo: "Du har inte sparat den här informationen ännu.",
          emptyStateWebcard_noPassword: "Inget lösenord sparat för webbplatsen ännu.",
          existingPassword:
            "Du har redan sparat ett lösenord för den här webbplatsen. Är du säker på att du vill generera ett nytt lösenord?",
          expired: "LÖPT UT",
          fixAutofillHeader: "Vad ska finnas här?",
          fixAutofillIssue: "Fixa det nu",
          generatePasswordButtons_closeSettings: "Stäng inställningar för lösenord",
          generatePasswordButtons_hidePassword: "Dölj lösenord",
          generatePasswordButtons_openSettings: "Öppna inställningar för lösenord",
          generatePasswordButtons_reshuffle: "Generera nytt lösenord",
          generatePasswordButtons_showPassword: "Visa lösenord",
          generatePasswordDropdownTitle: "Lösenordsgenerator",
          generatePasswordOption_digits: "Siffror (t.ex. 345)",
          generatePasswordOption_length: "Längd ({0})",
          generatePasswordOption_letters: "Bokstäver (t.ex. Aa)",
          generatePasswordOption_similarCharacters: "Liknande tecken (t.ex. 0O 1| 2Z)",
          generatePasswordOption_symbols: "Symboler (@&$!#?)",
          generatePasswordStrength_none: "Beräknar ...",
          generatePasswordStrength_safelyUnguessable: "Det kan man kalla ett starkt lösenord!",
          generatePasswordStrength_somewhatGuessable: "Det är nästan perfekt.",
          generatePasswordStrength_tooGuessable: "Låt oss göra det här lösenordet starkare.",
          generatePasswordStrength_veryGuessable: "Bra början, men vi kan göra det ännu starkare.",
          generatePasswordStrength_veryUnguessable: "Ultimat lösenordsstyrka uppnådd!",
          generatePwd: "Generera ett starkt lösenord",
          hasAutofillIssue: "Upplever du problem med funktionen automatisk ifyllning av formulär?",
          incomplete: "OFULLSTÄNDIG",
          infoboxDescriptionB2BTrialDiscontinued: "Du kan inte generera nya lösenord",
          infoboxTitleB2BTrialDiscontinued: "Din provperiod har löpt ut och ditt konto har frusits.",
          itemsCountLabel: { one: "{count} objekt", other: "{count} objekt" },
          mavReactivationBtn: "Logga in nu",
          mavReactivationCreateBtn: "Skapa ett konto",
          mavReactivationDismiss: "Fråga inte igen för den här sessionen",
          mavReactivationOr: "eller",
          mavReactivationTitle: "Logga in på Dashlane för att fylla i formulär med ett klick.",
          openTheExtenion: "Öppna tillägget",
          openTheExtension: "Öppna tillägget",
          optionsAutofillSomethingElse: "Fyll i något annat automatiskt",
          optionsClose: "Pausa under det här besöket",
          optionsCloseMenu: "Stäng fler alternativ",
          optionsDontAutofill: "Pausa tills jag sätter på det igen",
          optionsFillSomethingElse: "Fyll i något annat automatiskt",
          optionsNeverSuggest: "Pausa tills jag sätter på det igen",
          optionsOpenMenu: "Öppna fler alternativ",
          optionsTitle: "Fyll i fältet automatiskt",
          optionsTooltip: "Fyll i fältet automatiskt",
          password: "Lösenord",
          passwordHistoryDomain: "Denna webbplats",
          passwordHistorySee: "Se lösenordshistorik",
          passwordHistoryTitle: "Lösenord",
          passwordLimitSubtitle: "",
          passwordLimitTitle: "Du har nått gränsen för lösenord för din Free-prenumeration. Detta lösenord kommer inte att sparas.",
          passwordLimitWarningButton: "Uppgradera till Premium för obegränsad lagring",
          passwordLimitWarningDesc:
            "Du kan inte lagra fler inloggningar med ditt Dashlane Free-konto. Du har nått lagringsgränsen för en Free-prenumeration och kan nu endast ändra befintliga inloggningar.",
          passwordLimitWarningLabel: "Varning:",
          passwordNearLimitTitle: {
            one: "Ett lösenord kvar i din Free-prenumeration",
            other: "{count} lösenord kvar i din gratisprenumeration"
          },
          phoneAny: "Annat",
          phoneFax: "Fax",
          phoneLandline: "Hem",
          phoneMobile: "Mobil",
          phoneWorkFax: "Fax (arbete)",
          phoneWorkLandline: "Arbete",
          phoneWorkMobile: "Mobiltelefon (arbete)",
          reactivationHeader: "Sätt igång Dashlane för att fylla i formulär med ett enda klick.",
          roleButton: "Knapp",
          sca_feedback: "Inga lösenord sparade för den här webbplatsen än.",
          sca_feedback_add: "Lägg till ett lösenord",
          search: "Sök",
          searchInputPlaceholder: "Sök i dina objekt...",
          seePasswordLink: "Se lösenord",
          shush_feedback: "Vi kommer inte att fylla i automatiskt här.",
          shush_feedback_learnMore: "Mer information",
          strongPassword: "Det kan man kalla ett starkt lösenord!",
          suggestedButton: "Förslag",
          topOfWalletSeparator: "Dina andra betalningsmetoder",
          types_ADDRESS: "Adress",
          types_AUTHENTICATION: "Logga in som",
          types_BANK_STATEMENT: "Bankkonto",
          types_COMPANY: "Företag",
          types_DRIVER_LICENCE: "Körkort",
          types_EMAIL: "E-post",
          types_FISCAL: "Skattenummer",
          types_GENERATED_PASSWORD: "Logga in som",
          types_IDENTITY: "Identitet",
          types_ID_CARD: "ID-kort",
          types_PASSPORT: "Pass",
          types_PASSWORD: "Lösenord",
          types_PAYMENT_MEAN_CREDITCARD: "Kreditkort",
          types_PHONE: "Telefonnummer",
          types_SOCIAL_SECURITY: "socialförsäkringskort",
          types_WEBSITE: "Webbplats",
          upgradeToPremium: "Uppgradera till Premium",
          usePassword: "Använd genererat lösenord",
          v5_addNew_ADDRESS: "Lägg till en ny adress",
          v5_addNew_AUTHENTICATION: "Lägg till ny inloggning",
          v5_addNew_BANK_STATEMENT: "Lägg till ett nytt bankkonto",
          v5_addNew_COMPANY: "Lägg till ett nytt företag",
          v5_addNew_DRIVER_LICENCE: "Lägg till ett nytt körkort",
          v5_addNew_EMAIL: "Lägg till en ny e-postadress",
          v5_addNew_FISCAL: "Lägg till ett nytt skattenummer",
          v5_addNew_IDENTITY: "Lägg till ny personlig information",
          v5_addNew_ID_CARD: "Lägg till ett nytt ID-kort",
          v5_addNew_PASSPORT: "Lägg till ett nytt pass",
          v5_addNew_PASSWORD: "Lägg till ett nytt lösenord",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "Lägg till ett nytt kreditkort",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "Lägg till ett nytt PayPal-konto",
          v5_addNew_PHONE: "Lägg till ett nytt telefonnummer",
          v5_addNew_SOCIAL_SECURITY: "Lägg till ett nytt personnummer",
          v5_addNew_WEBSITE: "Lägg till en ny webbplats",
          v5_addObjectHeader: "Fyll i dessa uppgifter automatiskt på alla webbplatser.",
          v5_connectAs: "Logga in som",
          veryWeakPassword: "Lösenordet du angav är väldigt svagt",
          weakPassword: "Låt oss göra det här lösenordet starkare.",
          webAuthnReactivationDontAskAgain: "Fråga inte igen för den här sessionen",
          webAuthnReactivationErrorMessage: "Skulle du kunna prova igen?",
          webAuthnReactivationFallbackToMasterPassword: "Använd huvudlösenord",
          webAuthnReactivationHeader: "Lås upp Dashlane för att logga in",
          webAuthnReactivationLoginButton: "Lås upp med biometri",
          webAuthnReactivationLoginButtonError: "Prova med biometri igen",
          webauthnConditionalUINotWithDashlaneButton: "Använd en annan lösennyckel",
          websiteUnsecure: "Den här webbplatsen är inte säker. Uppgifter som du anger här kan komprometteras.",
          websiteUnsecureIframe: "Försäkra dig om att du litar på den här webbplatsen, eftersom formuläret kan komma från en annan domän."
        },
        "autologin-selection": {
          autologinHeader: "VÄLJ KONTOT SOM DU VILL LOGGA IN MED:",
          autologinLoggingIn: "DASHLANE LOGGAR IN DIG AUTOMATISKT",
          clickToDismiss: "Klicka igen för att gömma det här",
          closeWindow: "Stäng",
          connectAs: "Logga in som",
          defaultSpace: "Personlig",
          header: "Välj kontot du vill logga in med",
          headerInner: "Konto",
          openTheExtenion: "Öppna tillägget",
          openTheExtension: "Öppna tillägget",
          password: "Lösenord",
          v5_autologinLoggingIn: "Dashlane loggar in dig automatiskt"
        },
        "data-capture": {
          cancel: "Avbryt",
          closeWindow: "Stäng",
          creditCardDetails: "Kreditkortsuppgifter",
          enterLogin: "Ange inloggningsuppgifter",
          enterMasterPassword: "Huvudlösenord",
          header: "Spara dessa uppgifter på Dashlane så att du inte behöver skriva det själv igen.",
          headerLoggedout: "Logga in på Dashlane för att spara dessa uppgifter.",
          login: "Logga in",
          neverAgain: "Fråga mig aldrig igen",
          neverForThisWebsite: "Aldrig på denna webbplats",
          openDashlane: "Öppna Dashlane",
          save: "Spara",
          types_ADDRESS: "Adress",
          types_COMPANY: "Företag",
          types_EMAIL: "E-post",
          types_IDENTITY: "Namn",
          types_PAYMENT_MEAN_CREDITCARD: "Kreditkort",
          types_PHONE: "Telefonnummer",
          types_WEBSITE: "Webbplats",
          wrongLogin: "Felaktig inloggning",
          wrongPassword: "Fel lösenord"
        },
        "feedback-notification": {
          editButton: "Redigera",
          loginCreated: "Ny inloggning skapad.",
          loginUpdated: "Inloggning uppdaterad.",
          undoButton: "Ångra"
        },
        "follow-up-notification": {
          accountHolderLabel: "Kontoinnehavare",
          bicLabel: "BIC/SWIFT-kod",
          cardNumberLabel: "Kortnummer",
          copiedTooltip: "Kopierad",
          copyTooltip: "Kopiera",
          emailLabel: "E-post",
          footerInformation: "Du kan stänga popup-fönster för kopiera och klistra in i dina inställningar för automatisk ifyllning.",
          headerTitle: "Kopiera och klistra in objektinformation",
          ibanLabel: "IBAN",
          loginLabel: "Användarnamn",
          otpLabel: "2FA-token",
          passwordLabel: "Lösenord",
          secondaryLoginLabel: "Alternativt användarnamn",
          securityCodeLabel: "Säkerhetskod",
          usernameLabel: "Användarnamn"
        },
        "generic-popup": {
          click: "Ändra det nu!",
          closeWindow: "Stäng",
          inputPlaceholder: "Skriv in ditt namn",
          subtitle: "Kön",
          title: "Hej"
        },
        "limited-capability": {
          cancelPasswordLimit: "Inte nu",
          closeWindow: "Stäng",
          contentEssentialsPasswordLimit:
            "Uppgradera till vår Essentials-prenumeration för att få ett obegränsat antal lösenord och synkronisera mellan två enheter.",
          contentPasswordLimit:
            "Du kan inte lagra fler inloggningar med ditt Dashlane Free-konto. Uppgradera till Premium om du vill ha obegränsad lagring.",
          contentPremiumPasswordLimit:
            "Uppgradera till vår Premium-prenumeration för att synkronisera ett obegränsat antal inloggningar på ett obegränsat antal enheter.",
          enterMasterPassword: "**************",
          goPremium: "Skaffa Premium",
          headerPasswordLimit: "Lagringsgränsen har uppnåtts",
          hide: "Dölj",
          passwordLabel: "Lösenord",
          show: "Visa",
          upgradeToEssentials: "Uppgradera till Essentials",
          upgradeToPremium: "Uppgradera till Premium"
        },
        "master-password": {
          alwaysAuthorize: "Ge alltid behörighet",
          cancel: "Avbryt",
          closeWindow: "Stäng",
          emailHelpText: "Din e-postadress bekräftar att du loggar in på Dashlane.",
          enterMasterPassword: "Huvudlösenord",
          hide: "Dölj",
          loggedIn: "Du är inloggad som <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Be aldrig om huvudlösenord för att låsa upp lösenord",
          neverAskAgainAnyCredentialInfobox: "Om du markerar den här kryssrutan stängs Huvudlösenord krävs av för alla lösenord.",
          neverAskAgainCredentialCheckbox: "Be aldrig om huvudlösenord för att låsa upp det här säkra objektet",
          ok: "Ok",
          show: "Visa",
          title: "Lås upp säkra objekt i fem minuter",
          unlock: "Lås upp",
          unlockContent: "Om du fortfarande behöver åtkomst till dina skyddade data efter fem minuter måste du ange huvudlösenordet igen.",
          wrongPassword: "Fel lösenord"
        },
        notification: {
          cancel: "Avbryt",
          closeWindow: "Stäng",
          ok: "Ok",
          webOnboardingAfterCancelCancel: "Försök igen",
          webOnboardingAfterCancelConfirm: "Tillbaka till app",
          webOnboardingAfterCancelTitle: "Du kan prova den här webbplatsen igen, eller använda en annan webbplats.",
          webOnboardingAfterLoginCancel: "Stäng",
          webOnboardingAfterLoginConfirm: "Gå tillbaka till Dashlane",
          webOnboardingAfterLoginTitle: "Grattis! Du är ett Dashlane-proffs!",
          webOnboardingAfterSaveConfirm: "Visa i Dashlane",
          webOnboardingAfterSaveTitle: "Du har sparat din första inloggning!"
        },
        "phishing-prevention": {
          cancelButton: "Lita inte på",
          currentUrlLabel: "Aktuell URL",
          headerTitle: "Se till att du litar på den här webbplatsen innan du klistrar in dina inloggningsuppgifter",
          okButton: "Lita på och klistra in",
          phishingCTALink: "Läs om nätfiske",
          trustedUrlLabel: "Betrodd URL"
        },
        "purchase-receipt": {
          addRow: "Lägg till objekt",
          cancel: "Avbryt",
          closeWindow: "Stäng",
          collapse: "Mindre",
          disable: "Fråga mig inte igen",
          expand: "Visa mer",
          header: "Spara ditt <strong>{0}</strong> kvitto på Dashlane?",
          header_nohtml: "Spara ditt {0} kvitto på Dashlane?",
          save: "Spara",
          showLess: "Mindre",
          showMore: "Visa mer",
          total: "TOTALT",
          untitledItem: "Objekt utan titel",
          v5_header_nohtml: "Spara ditt {0} kvitto på Dashlane",
          v5_total: "Totalt"
        },
        "save-password": {
          alwaysUseMasterPwd: "Kräv huvudlösenord innan användning",
          cancel: "Avbryt",
          closeWindow: "Stäng",
          collapse: "Visa mindre",
          contentPremiumPasswordLimit:
            "Uppgradera till vår Premium-prenumeration för att synkronisera ett obegränsat antal inloggningar på ett obegränsat antal enheter.",
          createNewLogin: "Skapa ny inloggning",
          defaultSpace: "Personlig",
          enterLogin: "Välj din Dashlane-inloggning...",
          enterMasterPassword: "Huvudlösenord",
          expand: "Visa mer",
          footerBuyDashlane: "Köp Dashlane",
          footerDismiss: "Avvisa",
          header: "Vill du spara kontot i Dashlane?",
          headerLoggedout: "Logga in på Dashlane för att spara ditt <strong>{0}</strong> lösenord.",
          headerLoggedout_nohtml: "Logga in på Dashlane för att spara ditt {0} lösenord.",
          headerPasswordLimit: "Lagringsgränsen har uppnåtts",
          headerReplace: "Vill du ersätta lösenordet i Dashlane?",
          headerReplace_nohtml: "Vill du ersätta lösenordet i Dashlane?",
          headerTitleB2BTrialDiscontinued: "Ditt konto har frusit",
          header_nohtml: "Vill du spara den här inloggningen i Dashlane?",
          infoboxDescriptionB2BTrialDiscontinued: "Ditt lösenord kommer inte att sparas.",
          infoboxTitleB2BTrialDiscontinued: "Din provperiod har löpt ut och ditt konto har frusits.",
          lastUsedItem: "Senast använt",
          login: "Logga in",
          loginFieldLabel: "Användarnamn",
          moreOptions: "Fler alternativ",
          neverAgain: "Fråga mig aldrig igen",
          neverForThisWebsite: "Aldrig på denna webbplats",
          openDashlane: "Öppna Dashlane",
          passwordFieldLabel: "LÖSENORD",
          passwordHideButton: "Dölj",
          passwordLimitReachedSubtitle: "Ditt lösenord kommer inte att sparas.",
          passwordLimitReachedTitle: "",
          passwordLimitReachedTitleReplace: "Du har nått gränsen för lösenord du kan spara i din gratisprenumeration",
          passwordNearLimitTitle: {
            one: "Ett lösenord kvar i din Free-prenumeration",
            other: "{count} lösenord kvar i din gratisprenumeration"
          },
          passwordShowButton: "Visa",
          replace: "Ersätt",
          save: "Spara",
          saveAsNew: "Spara som ny",
          saveAsNewLimited: "Spara som ny",
          saveAsNewLimitedPlaceholder: "Lagringsgränsen har uppnåtts",
          saveLimited: "Skaffa Premium",
          selectEmailOrUsernamePlaceholder: "Ange din e-postadress eller användarnamn",
          selectEmailPlaceholder: "Ange en e-postadress",
          updatePasswordOrCreateNewLogin: "Uppdatera en inloggning med det här lösenordet eller skapa en ny inloggning.",
          updatePasswordOrCreateNewLoginLimit: "Ersätt en befintlig inloggning",
          upgradeToPremium: "Uppgradera till Premium",
          upsellButton: "Skaffa Premium för obegränsad lösenordslagring",
          useOnlyOnSubdomain: "Använd endast på denna underdomän",
          wrongLogin: "Felaktig inloggning",
          wrongPassword: "Fel lösenord"
        },
        survey: { extension971: "Återkoppling för att förbättra Dashlane" },
        "user-verification": {
          cancel: "Avbryt",
          enterMasterPassword: "Huvudlösenord",
          hide: "Dölj",
          loggedIn: "Du är inloggad som <span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "Be aldrig om huvudlösenord för att låsa upp lösenord",
          neverAskAgainAnyCredentialInfobox: "Om du markerar den här kryssrutan stängs Huvudlösenord krävs av för alla lösenord.",
          neverAskAgainCredentialCheckbox: "Be aldrig om huvudlösenord för att låsa upp det här säkra objektet",
          selectionPanelBiometric: "Biometri",
          selectionPanelMasterPassword: "Huvudlösenord",
          selectionPanelTitle: "Välj en upplåsningsmetod:",
          show: "Visa",
          tryAgain: "Försök igen",
          unknownError: "Ett okänt fel har inträffat",
          unlock: "Unlock",
          useAnotherMethod: "Använd en annan metod",
          webauthnGenericErrorDescription: "Ett fel uppstod under säkerhetsverifieringen.",
          webauthnGenericErrorTitle: "Något gick fel.",
          webauthnPanelTitle: "Använd biometri, en säkerhetsnyckel eller din enhets PIN-kod för att låsa upp Dashlane.",
          webcardTitle: "Fullständig säkerhetsverifiering",
          wrongPassword: "Fel lösenord"
        },
        "warn-generated-password": {
          cancel: "Avbryt",
          closeWindow: "Stäng",
          contentWarnGeneratedPassword:
            "Dashlane kontaktar dig via detta e-postkonto för att utföra viktiga åtgärder, så som att bekräfta din identitet. Vi rekommenderar att du skapar ett starkt lösenord som är lätt att komma ihåg.",
          continue: "Fortsätt",
          header: "Är du säker på att du kommer att komma ihåg detta lösenord?"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "Avbryt",
          create_confirmButton: "Bekräfta",
          create_content: "Skapa ett nytt lösenord med Dashlane för användare {0} på plats {1}?",
          create_headerTitle: "Skapa nytt lösenord",
          create_withoutDashlaneButton: "Använd icke-Dashlane nyckel"
        },
        "webauthn-get-confirmation": {
          cancelButton: "Avbryt",
          confirmButton: "Bekräfta",
          content: "Vill du logga in som {0} på {1}?",
          get_withoutDashlaneButton: "Använd icke-Dashlane nyckel",
          headerTitle: "Logga in med Dashlane"
        },
        "webauthn-passkey-selection": {
          headerTitle: "Välj kontot du vill logga in med",
          selection_withoutDashlaneButton: "Använd en annan lösennyckel"
        }
      };
    },
    1717: (e) => {
      e.exports = {
        "autofill-confirmation": {
          cancel: "取消",
          closeWindow: "关闭",
          confirm: "自动填充",
          title: "希望 Dashlane 自动填写此安全信息吗？",
          warning: "如果您需要访问数据，我们会在 5 分钟后再次提示您。"
        },
        "autofill-dropdown": {
          LAST_GENERATED_BUT_UNSAVED_PASSWORD: "上一个未保存的密码",
          TR_SELFCORRECT_STEP1_ADDRESS: "地址",
          TR_SELFCORRECT_STEP1_AUTHENTICATION: "身份验证",
          TR_SELFCORRECT_STEP1_BANKDETAILS: "银行详细信息",
          TR_SELFCORRECT_STEP1_COMPANY: "公司",
          TR_SELFCORRECT_STEP1_CREDITCARD: "信用卡",
          TR_SELFCORRECT_STEP1_DONT_AUTOFILL: "不要在此字段上自动填充",
          TR_SELFCORRECT_STEP1_DRIVERSLICENSE: "驾驶证",
          TR_SELFCORRECT_STEP1_EMAIL: "电子邮件地址",
          TR_SELFCORRECT_STEP1_FISCAL: "税号",
          TR_SELFCORRECT_STEP1_IDCARD: "身份证",
          TR_SELFCORRECT_STEP1_IDENTITY: "身份",
          TR_SELFCORRECT_STEP1_LOGININFO: "登录信息",
          TR_SELFCORRECT_STEP1_NOTHING: "无内容",
          TR_SELFCORRECT_STEP1_PASSPORT: "护照",
          TR_SELFCORRECT_STEP1_PAYMENTINFO: "付款信息",
          TR_SELFCORRECT_STEP1_PERSONALINFO: "个人信息",
          TR_SELFCORRECT_STEP1_PHONE: "电话号码",
          TR_SELFCORRECT_STEP1_SSN: "社会保险号",
          TR_SELFCORRECT_STEP1_WEBSITE: "网站",
          TR_SELFCORRECT_STEP2_ADDRESS: "地址",
          TR_SELFCORRECT_STEP2_AGE: "年龄",
          TR_SELFCORRECT_STEP2_AL1: "地址（第 1 行）",
          TR_SELFCORRECT_STEP2_AL2: "地址（第 2 行）",
          TR_SELFCORRECT_STEP2_AL3: "地址（第 3 行）",
          TR_SELFCORRECT_STEP2_APTNUM: "公寓号码",
          TR_SELFCORRECT_STEP2_BANKACCOUNTHOLDER: "帐户持有人姓名",
          TR_SELFCORRECT_STEP2_BANKACCOUNTNUM: "银行帐号",
          TR_SELFCORRECT_STEP2_BANKNAME: "银行名称",
          TR_SELFCORRECT_STEP2_BUILDINGNUMBER: "楼号",
          TR_SELFCORRECT_STEP2_CITY: "城市",
          TR_SELFCORRECT_STEP2_COMPANYNAME: "公司名称",
          TR_SELFCORRECT_STEP2_COMPANYPOSITION: "公司职位",
          TR_SELFCORRECT_STEP2_COUNTRY: "国家/地区",
          TR_SELFCORRECT_STEP2_COUNTRYCODE: "国家/地区代码",
          TR_SELFCORRECT_STEP2_CREDITCARDBANK: "发卡银行",
          TR_SELFCORRECT_STEP2_CREDITCARDCCV: "CCV",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP: "到期月份和年份",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_MONTH: "到期月份",
          TR_SELFCORRECT_STEP2_CREDITCARDEXP_YEAR: "到期年份",
          TR_SELFCORRECT_STEP2_CREDITCARDNUM: "信用卡号",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER: "持卡人全名",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_FIRSTNAME: "持卡人名字",
          TR_SELFCORRECT_STEP2_CREDITCARDOWNER_LASTNAME: "持卡人姓氏",
          TR_SELFCORRECT_STEP2_DOB: "出生日期",
          TR_SELFCORRECT_STEP2_DRIVERDELIVERY: "送货日期",
          TR_SELFCORRECT_STEP2_DRIVERDOB: "出生日期",
          TR_SELFCORRECT_STEP2_DRIVEREXP: "到期日期",
          TR_SELFCORRECT_STEP2_DRIVERFIRSTNAME: "名字",
          TR_SELFCORRECT_STEP2_DRIVERGENDER: "性别",
          TR_SELFCORRECT_STEP2_DRIVERLASTNAME: "姓氏",
          TR_SELFCORRECT_STEP2_DRIVERNAME: "全名",
          TR_SELFCORRECT_STEP2_DRIVERNUM: "驾驶证编号",
          TR_SELFCORRECT_STEP2_DRIVERSTATE: "发卡状态",
          TR_SELFCORRECT_STEP2_EMAIL: "电子邮件地址",
          TR_SELFCORRECT_STEP2_EMAIL_UNKNOWN: "电子邮件地址",
          TR_SELFCORRECT_STEP2_FIRSTNAME: "名字",
          TR_SELFCORRECT_STEP2_FLOOR: "楼层",
          TR_SELFCORRECT_STEP2_FULLNAME: "全名",
          TR_SELFCORRECT_STEP2_IBAN: "IBAN",
          TR_SELFCORRECT_STEP2_IDCARDDELIVERY: "送货日期",
          TR_SELFCORRECT_STEP2_IDCARDDOB: "出生日期",
          TR_SELFCORRECT_STEP2_IDCARDEXP: "到期日期",
          TR_SELFCORRECT_STEP2_IDCARDFIRSTNAME: "名字",
          TR_SELFCORRECT_STEP2_IDCARDGENDER: "性别",
          TR_SELFCORRECT_STEP2_IDCARDHOLDER: "全名",
          TR_SELFCORRECT_STEP2_IDCARDLASTNAME: "姓氏",
          TR_SELFCORRECT_STEP2_IDCARDNATIONALITY: "国籍",
          TR_SELFCORRECT_STEP2_IDCARDNUM: "身份证号",
          TR_SELFCORRECT_STEP2_JOBPOSITION: "位置",
          TR_SELFCORRECT_STEP2_LASTNAME: "姓氏",
          TR_SELFCORRECT_STEP2_LOGIN: "用户名",
          TR_SELFCORRECT_STEP2_LOGIN_SECONDARY: "备用用户名",
          TR_SELFCORRECT_STEP2_MAIDENNAME: "婚前姓",
          TR_SELFCORRECT_STEP2_MIDDLENAME: "中间名",
          TR_SELFCORRECT_STEP2_MIDDLENAMEINITIAL: "中间名首写字母",
          TR_SELFCORRECT_STEP2_NOTHING: "无内容",
          TR_SELFCORRECT_STEP2_OTP: "2FA 令牌",
          TR_SELFCORRECT_STEP2_PASSPORTDELIVERY: "送货日期",
          TR_SELFCORRECT_STEP2_PASSPORTDOB: "出生日期",
          TR_SELFCORRECT_STEP2_PASSPORTEXP: "到期日期",
          TR_SELFCORRECT_STEP2_PASSPORTGENDER: "性别",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER: "名字",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_FIRSTNAME: "姓氏",
          TR_SELFCORRECT_STEP2_PASSPORTHOLDER_LASTNAME: "全名",
          TR_SELFCORRECT_STEP2_PASSPORTLOCATION: "送货地址",
          TR_SELFCORRECT_STEP2_PASSPORTNATIONALITY: "国籍",
          TR_SELFCORRECT_STEP2_PASSPORTNUM: "护照号",
          TR_SELFCORRECT_STEP2_PASSWORD: "密码",
          TR_SELFCORRECT_STEP2_PASSWORD_CONFIRM: "确认密码",
          TR_SELFCORRECT_STEP2_PASSWORD_CURRENT: "当前密码",
          TR_SELFCORRECT_STEP2_PASSWORD_NEW: "新密码",
          TR_SELFCORRECT_STEP2_PHONECOUNTRYCODE: "电话国家/地区代码",
          TR_SELFCORRECT_STEP2_PHONENUM: "电话号码",
          TR_SELFCORRECT_STEP2_PHONENUMEXT: "电话号码分机",
          TR_SELFCORRECT_STEP2_POB: "出生地点",
          TR_SELFCORRECT_STEP2_ROUTING_NUMBER: "银行 Routing 号码",
          TR_SELFCORRECT_STEP2_SORT_CODE: "Sort code",
          TR_SELFCORRECT_STEP2_SSN: "社会保险号",
          TR_SELFCORRECT_STEP2_STATE: "州/省（例如：弗罗里达州）",
          TR_SELFCORRECT_STEP2_STATECODE: "州/省代码（例如：FL）",
          TR_SELFCORRECT_STEP2_STREETNAME: "街道名称",
          TR_SELFCORRECT_STEP2_STREETNUM: "门牌号",
          TR_SELFCORRECT_STEP2_STREETTYPE: "街道类型（例如：大道）",
          TR_SELFCORRECT_STEP2_TAXNUM: "税号",
          TR_SELFCORRECT_STEP2_WEBSITE: "网站",
          TR_SELFCORRECT_STEP2_ZIP: "邮政编码",
          aboutToExpire: "即将到期",
          addNew_ADDRESS: "添加新的地址",
          addNew_AUTHENTICATION: "身份验证方式",
          addNew_BANK_STATEMENT: "添加新银行帐户",
          addNew_COMPANY: "添加新的公司",
          addNew_DRIVER_LICENCE: "添加新的驾驶证",
          addNew_EMAIL: "添加新的电子邮件地址",
          addNew_FISCAL: "添加新的税号",
          addNew_IDENTITY: "添加新的姓名",
          addNew_ID_CARD: "添加新的身份证号",
          addNew_NOTHING: "无内容",
          addNew_PASSPORT: "添加新的护照",
          addNew_PAYMENT_MEAN_CREDITCARD: "添加新的信用卡",
          addNew_PAYMENT_MEAN_PAYPAL: "添加新的 PayPal 帐户",
          addNew_PHONE: "添加新的电话号码",
          addNew_SOCIAL_SECURITY: "添加新的社会保险号",
          addNew_WEBSITE: "添加新的网站",
          addObjectHeader: "在任何网站上自动填充此信息。",
          allItemsButton: "所有项目",
          buyDashlane: "购买 Dashlane",
          closeWindow: "关闭",
          connectAs: "以下列身份登录",
          contactEmailGeneration: "即将为与您的 Dashlane 帐户关联的电子邮件地址生成安全程度高的密码。",
          defaultSpace: "个人",
          emailBusiness: "公司",
          emailPersonal: "个人",
          emptyStateWebcard_noLogin: "未为 {domain} 保存任何登录凭证。",
          emptyStateWebcard_noOtherInfo: "您尚未保存此信息。",
          emptyStateWebcard_noPassword: "尚未为该网站保存任何密码。",
          existingPassword: "您已经保存了此网站的密码。确定要生成新密码吗？",
          expired: "已到期",
          fixAutofillHeader: "此处应该有什么内容？",
          fixAutofillIssue: "立即修复",
          generatePasswordButtons_closeSettings: "关闭密码设置",
          generatePasswordButtons_hidePassword: "隐藏密码",
          generatePasswordButtons_openSettings: "打开密码设置",
          generatePasswordButtons_reshuffle: "生成新密码",
          generatePasswordButtons_showPassword: "显示密码",
          generatePasswordDropdownTitle: "密码生成器",
          generatePasswordOption_digits: "数字（例如 345）",
          generatePasswordOption_length: "长度 ({0})",
          generatePasswordOption_letters: "字母（例如 Aa）",
          generatePasswordOption_similarCharacters: "相似字符（例如 0O 1| 2Z）",
          generatePasswordOption_symbols: "符号 (@&$!#?)",
          generatePasswordStrength_none: "正在计算...",
          generatePasswordStrength_safelyUnguessable: "这个密码安全程度就很高了！",
          generatePasswordStrength_somewhatGuessable: "离很棒还差一些。",
          generatePasswordStrength_tooGuessable: "我们来提高此密码的安全程度。",
          generatePasswordStrength_veryGuessable: "良好的开端，但我们可以提高其安全程度。",
          generatePasswordStrength_veryUnguessable: "达到了终极密码安全程度！",
          generatePwd: "生成安全程度高的密码",
          hasAutofillIssue: "遇到了自动填充问题？",
          incomplete: "不完整",
          infoboxDescriptionB2BTrialDiscontinued: "您无法生成新的密码",
          infoboxTitleB2BTrialDiscontinued: "您的试用已结束，您的帐户已冻结。",
          itemsCountLabel: { other: "{count} 条项目" },
          mavReactivationBtn: "立即登录",
          mavReactivationCreateBtn: "创建帐户",
          mavReactivationDismiss: "此会话不再询问",
          mavReactivationOr: "或",
          mavReactivationTitle: "登录 Dashlane，只需点击一下即可填充表单。",
          openTheExtenion: "打开扩展程序",
          openTheExtension: "打开扩展程序",
          optionsAutofillSomethingElse: "自动填充其他内容",
          optionsClose: "本次访问暂停",
          optionsCloseMenu: "关闭更多选项",
          optionsDontAutofill: "暂停至我重新启用为止",
          optionsFillSomethingElse: "自动填充其他内容",
          optionsNeverSuggest: "暂停至我重新启用为止",
          optionsOpenMenu: "打开更多选项",
          optionsTitle: "在此字段上自动填充",
          optionsTooltip: "在此字段上自动填充",
          password: "密码",
          passwordHistoryDomain: "此网站",
          passwordHistorySee: "查看密码历史记录",
          passwordHistoryTitle: "密码",
          passwordLimitSubtitle: "升级到高级版",
          passwordLimitTitle: "您已达到免费版套餐的密码数量限制。 此密码将不会被保存。",
          passwordLimitWarningButton: "升级至高级版，即可获享无限量存储空间",
          passwordLimitWarningDesc:
            "您无法再继续使用 Dashlane 免费版帐户存储任何登录凭证。您已达到免费版套餐存储空间限制，且只能修改现有登录凭证。",
          passwordLimitWarningLabel: "警告：",
          passwordNearLimitTitle: { other: "{count} 您的免费版套餐还剩下的密码数量" },
          phoneAny: "其他",
          phoneFax: "传真",
          phoneLandline: "家庭电话",
          phoneMobile: "手机",
          phoneWorkFax: "工作传真",
          phoneWorkLandline: "工作用品",
          phoneWorkMobile: "工作手机",
          reactivationHeader: "打开 Dashlane，只需点击一下即可填充表单。",
          roleButton: "按钮",
          sca_feedback: "此网站尚无已保存的密码。",
          sca_feedback_add: "添加密码",
          search: "搜索",
          searchInputPlaceholder: "搜索您的项目…",
          seePasswordLink: "参见密码",
          shush_feedback: "我们不会在此处自动填充。",
          shush_feedback_learnMore: "了解详情",
          strongPassword: "这个密码安全程度就很高了！",
          suggestedButton: "建议",
          topOfWalletSeparator: "您的其他付款方式",
          types_ADDRESS: "地址",
          types_AUTHENTICATION: "以下列身份登录",
          types_BANK_STATEMENT: "银行帐户",
          types_COMPANY: "公司",
          types_DRIVER_LICENCE: "驾驶证",
          types_EMAIL: "电子邮件",
          types_FISCAL: "税号",
          types_GENERATED_PASSWORD: "以下列身份登录",
          types_IDENTITY: "身份",
          types_ID_CARD: "身份证",
          types_PASSPORT: "护照",
          types_PASSWORD: "密码",
          types_PAYMENT_MEAN_CREDITCARD: "信用卡",
          types_PHONE: "电话号码",
          types_SOCIAL_SECURITY: "社会保障卡",
          types_WEBSITE: "网站",
          upgradeToPremium: "升级到高级版",
          usePassword: "使用生成的密码",
          v5_addNew_ADDRESS: "添加新地址",
          v5_addNew_AUTHENTICATION: "添加新登录名",
          v5_addNew_BANK_STATEMENT: "添加新的银行帐户",
          v5_addNew_COMPANY: "添加新公司",
          v5_addNew_DRIVER_LICENCE: "添加新驾驶证",
          v5_addNew_EMAIL: "添加新的电子邮件地址",
          v5_addNew_FISCAL: "添加新的税号",
          v5_addNew_IDENTITY: "添加新个人信息",
          v5_addNew_ID_CARD: "添加新身份证件",
          v5_addNew_PASSPORT: "添加新护照",
          v5_addNew_PASSWORD: "添加新密码",
          v5_addNew_PAYMENT_MEAN_CREDITCARD: "添加新信用卡",
          v5_addNew_PAYMENT_MEAN_PAYPAL: "添加新 PayPal 帐户",
          v5_addNew_PHONE: "添加新电话号码",
          v5_addNew_SOCIAL_SECURITY: "添加新的社会保险号",
          v5_addNew_WEBSITE: "添加新网站",
          v5_addObjectHeader: "在任何网站上自动填充此信息。",
          v5_connectAs: "以下列身份登录",
          veryWeakPassword: "您输入的密码的安全程度非常低",
          weakPassword: "我们来提高此密码的安全程度。",
          webAuthnReactivationDontAskAgain: "此会话不再询问",
          webAuthnReactivationErrorMessage: "您可以再试一次吗？",
          webAuthnReactivationFallbackToMasterPassword: "使用主密码",
          webAuthnReactivationHeader: "解锁 Dashlane 以登录",
          webAuthnReactivationLoginButton: "使用生物识别解锁",
          webAuthnReactivationLoginButtonError: "再次尝试使用生物识别",
          webauthnConditionalUINotWithDashlaneButton: "使用另一个 key",
          websiteUnsecure: "此网站不安全。您在此输入的信息可能存在安全风险。",
          websiteUnsecureIframe: "请确保您信任此网站，因为此表单可能来自不同的域。"
        },
        "autologin-selection": {
          autologinHeader: "选择登录所用的帐户：",
          autologinLoggingIn: "DASHLANE 正在自动为您登录",
          clickToDismiss: "再次点击即可隐藏此",
          closeWindow: "关闭",
          connectAs: "以下列身份登录",
          defaultSpace: "个人",
          header: "选择您想用来登录的帐户",
          headerInner: "帐户",
          openTheExtenion: "打开扩展程序",
          openTheExtension: "打开扩展程序",
          password: "密码",
          v5_autologinLoggingIn: "Dashlane 正在自动为您登录"
        },
        "data-capture": {
          cancel: "取消",
          closeWindow: "关闭",
          creditCardDetails: "信用卡详细信息",
          enterLogin: "输入登录名",
          enterMasterPassword: "主密码",
          header: "将此信息保存到 Dashlane 中，您再也不用重新在线输入了。",
          headerLoggedout: "登录 Dashlane 以保存此信息。",
          login: "登录",
          neverAgain: "不再询问我",
          neverForThisWebsite: "始终不针对此网站",
          openDashlane: "打开 Dashlane",
          save: "保存",
          types_ADDRESS: "地址",
          types_COMPANY: "公司",
          types_EMAIL: "电子邮件地址",
          types_IDENTITY: "姓名",
          types_PAYMENT_MEAN_CREDITCARD: "信用卡",
          types_PHONE: "电话号码",
          types_WEBSITE: "网站",
          wrongLogin: "登录名不正确",
          wrongPassword: "密码不正确"
        },
        "feedback-notification": {
          editButton: "编辑",
          loginCreated: "已创建新的登录信息。",
          loginUpdated: "登录信息已更新。",
          undoButton: "撤销"
        },
        "follow-up-notification": {
          accountHolderLabel: "Account holder",
          bicLabel: "BIC/SWIFT 代码",
          cardNumberLabel: "卡号",
          copiedTooltip: "已复制",
          copyTooltip: "复制",
          emailLabel: "电子邮件地址",
          footerInformation: "您可关闭自动填充设置中的复制和粘贴弹窗功能。",
          headerTitle: "复制并粘贴项目详情",
          ibanLabel: "IBAN",
          loginLabel: "用户名",
          otpLabel: "2FA 令牌",
          passwordLabel: "密码",
          secondaryLoginLabel: "备用用户名",
          securityCodeLabel: "安全码",
          usernameLabel: "用户名"
        },
        "generic-popup": { click: "立即更改！", closeWindow: "关闭", inputPlaceholder: "输入您的姓名", subtitle: "性别", title: "您好" },
        "limited-capability": {
          cancelPasswordLimit: "现在不行",
          closeWindow: "关闭",
          contentEssentialsPasswordLimit: "升级为我们的核心版套餐，即可获取不限数量的密码并在两台设备之间进行同步。",
          contentPasswordLimit: "您无法再继续使用 Dashlane 免费版帐户存储任何登录凭证。要获得无限量存储空间，请升级到高级版。",
          contentPremiumPasswordLimit: "升级为高级版套餐，在任意数量的设备上同步不限数量的登录凭证。",
          enterMasterPassword: "**************",
          goPremium: "升级至高级版",
          headerPasswordLimit: "已达到存储限制",
          hide: "隐藏",
          passwordLabel: "密码",
          show: "显示",
          upgradeToEssentials: "升级为核心版",
          upgradeToPremium: "升级到高级版"
        },
        "master-password": {
          alwaysAuthorize: "始终授权",
          cancel: "取消",
          closeWindow: "关闭",
          emailHelpText: "此处的电子邮件确认您已登录 Dashlane。",
          enterMasterPassword: "主密码",
          hide: "隐藏",
          loggedIn: "您已使用以下身份登录：<span>{0}</span>",
          neverAskAgainAnyCredentialCheckbox: "切勿要求提供主密码以解锁密码",
          neverAskAgainAnyCredentialInfobox: "选中此复选框将关闭“需要主密码才能访问所有密码”。",
          neverAskAgainCredentialCheckbox: "切勿要求提供主密码以解锁此安全项目",
          ok: "确定",
          show: "显示",
          title: "解锁安全项目 5 分钟",
          unlock: "解锁",
          unlockContent: "如果您在 5 分钟后仍需要访问您的安全数据，则必须再次输入主密码。",
          wrongPassword: "密码不正确"
        },
        notification: {
          cancel: "取消",
          closeWindow: "关闭",
          ok: "确定",
          webOnboardingAfterCancelCancel: "请重试",
          webOnboardingAfterCancelConfirm: "返回应用",
          webOnboardingAfterCancelTitle: "您可以重新尝试此网站，或改用其他网站。",
          webOnboardingAfterLoginCancel: "关闭",
          webOnboardingAfterLoginConfirm: "返回 Dashlane",
          webOnboardingAfterLoginTitle: "恭喜！您已成为 Dashlane 专家！",
          webOnboardingAfterSaveConfirm: "在 Dashlane 中查看",
          webOnboardingAfterSaveTitle: "您已保存自己的第一个登录凭证！"
        },
        "phishing-prevention": {
          cancelButton: "不信任",
          currentUrlLabel: "当前 URL",
          headerTitle: "在粘贴登录信息之前，确保您信任此网站",
          okButton: "信任并粘贴",
          phishingCTALink: "了解网络钓鱼",
          trustedUrlLabel: "可信 URL"
        },
        "purchase-receipt": {
          addRow: "添加项目",
          cancel: "取消",
          closeWindow: "关闭",
          collapse: "收起",
          disable: "不再询问",
          expand: "显示更多",
          header: "要将您的 <strong>{0}</strong> 收据保存到 Dashlane 中吗？",
          header_nohtml: "要将您的 {0} 收据保存到 Dashlane 中吗？",
          save: "保存",
          showLess: "收起",
          showMore: "显示更多",
          total: "总计",
          untitledItem: "未命名的项目",
          v5_header_nohtml: "将您的 {0} 收据保存到 Dashlane",
          v5_total: "总计"
        },
        "save-password": {
          alwaysUseMasterPwd: "必须输入主密码才能使用",
          cancel: "取消",
          closeWindow: "关闭",
          collapse: "显示更少",
          contentPremiumPasswordLimit: "升级为高级版套餐，在任意数量的设备上同步不限数量的登录凭证。",
          createNewLogin: "新建登录凭证",
          defaultSpace: "个人",
          enterLogin: "选择 Dashlane 登录名...",
          enterMasterPassword: "主密码",
          expand: "显示更多",
          footerBuyDashlane: "购买 Dashlane",
          footerDismiss: "关闭",
          header: "要将此帐户保存在 Dashlane 中吗？",
          headerLoggedout: "登录 Dashlane 以保存 <strong>{0}</strong> 密码。",
          headerLoggedout_nohtml: "登录 Dashlane 以保存 {0} 密码。",
          headerPasswordLimit: "已达到存储限制",
          headerReplace: "要替换 Dashlane 中的此密码吗？",
          headerReplace_nohtml: "要替换 Dashlane 中的此密码吗？",
          headerTitleB2BTrialDiscontinued: "您的帐户已冻结",
          header_nohtml: "要在 Dashlane 中保存此登录凭证？",
          infoboxDescriptionB2BTrialDiscontinued: "您的密码将不会被保存。",
          infoboxTitleB2BTrialDiscontinued: "您的试用已结束，您的帐户已冻结。",
          lastUsedItem: "最后一次使用时间",
          login: "登录",
          loginFieldLabel: "用户名",
          moreOptions: "更多选项",
          neverAgain: "不再询问我",
          neverForThisWebsite: "始终不针对此网站",
          openDashlane: "打开 Dashlane",
          passwordFieldLabel: "密码",
          passwordHideButton: "隐藏",
          passwordLimitReachedSubtitle: "您的密码将不会被保存。",
          passwordLimitReachedTitle: "您已达到免费版套餐的密码数量限制",
          passwordLimitReachedTitleReplace: "您已达到免费套餐可以保存的密码数量限制",
          passwordNearLimitTitle: { other: "{count} 您的免费版套餐还剩下的密码数量" },
          passwordShowButton: "显示",
          replace: "替换",
          save: "保存",
          saveAsNew: "另存为新密码",
          saveAsNewLimited: "另存为新",
          saveAsNewLimitedPlaceholder: "已达到存储限制",
          saveLimited: "升级至高级版",
          selectEmailOrUsernamePlaceholder: "输入您的电子邮件或用户名",
          selectEmailPlaceholder: "输入电子邮件地址",
          updatePasswordOrCreateNewLogin: "使用此密码更新现有登录凭证，或新建登录凭证。",
          updatePasswordOrCreateNewLoginLimit: "替换现有登录凭证",
          upgradeToPremium: "升级到高级版",
          upsellButton: "升级至高级版，存储无限量的密码",
          useOnlyOnSubdomain: "仅在此子域中使用",
          wrongLogin: "登录名不正确",
          wrongPassword: "密码不正确"
        },
        survey: { extension971: "改进 Dashlane 的反馈" },
        "user-verification": {
          cancel: "取消",
          enterMasterPassword: "主密码",
          hide: "隐藏",
          loggedIn: "您已使用 <span>{0}</span> 身份登录",
          neverAskAgainAnyCredentialCheckbox: "切勿要求提供主密码以解锁密码",
          neverAskAgainAnyCredentialInfobox: "选中此复选框将关闭“需要主密码才能访问所有密码”。",
          neverAskAgainCredentialCheckbox: "切勿要求提供主密码以解锁此安全项目",
          selectionPanelBiometric: "生物识别",
          selectionPanelMasterPassword: "主密码",
          selectionPanelTitle: "选择解锁方法：",
          show: "显示",
          tryAgain: "重试",
          unknownError: "发生未知错误",
          unlock: "解锁",
          useAnotherMethod: "使用另一种方法",
          webauthnGenericErrorDescription: "安全验证期间发生了错误。",
          webauthnGenericErrorTitle: "出问题了",
          webauthnPanelTitle: "使用生物识别、安全密钥或您的设备 PIN 码来解锁 Dashlane。",
          webcardTitle: "完成安全验证",
          wrongPassword: "密码不正确"
        },
        "warn-generated-password": {
          cancel: "取消",
          closeWindow: "关闭",
          contentWarnGeneratedPassword:
            "Dashlane 通过此电子邮件帐户与您联系，以执行重要操作，如验证您的身份。我们建议创建一个安全程度高但易于记忆的密码。",
          continue: "继续",
          header: "确定能记住此密码吗？"
        },
        "webauthn-create-confirmation": {
          create_cancelButton: "取消",
          create_confirmButton: "确认",
          create_content: "为用户 {0} 创建新的 Dashlane 密码用于站点 {1}？",
          create_headerTitle: "创建新密码",
          create_withoutDashlaneButton: "使用非 Dashlane 密码"
        },
        "webauthn-get-confirmation": {
          cancelButton: "取消",
          confirmButton: "确认",
          content: "要在 {1} 上以 {0} 的身份登录吗？",
          get_withoutDashlaneButton: "使用非 Dashlane 密码",
          headerTitle: "使用 Dashlane 登录"
        },
        "webauthn-passkey-selection": { headerTitle: "选择您想用来登录的帐户", selection_withoutDashlaneButton: "使用另一个 key" }
      };
    },
    4450: () => {},
    8263: () => {},
    1973: () => {},
    3350: () => {}
  }
]);
