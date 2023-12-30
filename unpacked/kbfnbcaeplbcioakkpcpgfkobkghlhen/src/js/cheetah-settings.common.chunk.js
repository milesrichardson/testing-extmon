(self.webpackChunk = self.webpackChunk || []).push([
  [6077],
  {
    17579: (e, t, a) => {
      a.d(t, { N: () => o });
      var n = a(27378);
      const o = ({ title: e, titleId: t, desc: a, descId: o, ...i }) =>
        n.createElement(
          "svg",
          {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          a ? n.createElement("desc", { id: o }, a) : null,
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            d: "M5.727 6.615H3V14h10V6.615h-2.727m-4.546 0V4.273a2.273 2.273 0 1 1 4.545 0v2.342m-4.545 0h4.546",
            stroke: "#646B81",
            strokeLinejoin: "round"
          })
        );
      o.__brand = "color";
    },
    72889: (e, t, a) => {
      a.d(t, { O: () => o });
      var n = a(27378);
      const o = ({ title: e, titleId: t, desc: a, descId: o, ...i }) =>
        n.createElement(
          "svg",
          {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          a ? n.createElement("desc", { id: o }, a) : null,
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            d: "M2 6.448 4.526 3h2.527M2 6.448 8 13M2 6.448h3.474m8.526 0L11.474 3H8.947M14 6.448 8 13m6-6.552h-3.79M8 13 5.474 6.448M8 13l2.21-6.552m-4.736 0h4.736m-4.736 0L7.053 3m3.157 3.448L8.947 3m0 0H7.053",
            stroke: "#646B81",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        );
      o.__brand = "color";
    },
    64757: (e, t, a) => {
      a.d(t, { L_: () => g, RZ: () => b, zx: () => p });
      var n = a(50858),
        o = a(55818),
        i = a(27378),
        l = a(8543),
        s = a(54001),
        r = a(31278),
        c = a(86732),
        d = a(1509),
        m = a(26215),
        u = a(94632);
      function p(e) {
        return i.createElement(m.Y, g(e, u.LI));
      }
      function g(e, t) {
        var a = (0, s.Sh)(e.className, t).className;
        return (0, o._)((0, n._)({}, e), { className: a });
      }
      !(function (e) {
        var t = (e.Animated = function (e) {
          return i.createElement(
            m.Y,
            (0, o._)((0, n._)({}, e), { animationMode: Boolean(e.animationMode) ? e.animationMode : c.m.FromClickPoint })
          );
        });
        (e.Primary = function (e) {
          return i.createElement(t, (0, n._)({ styleType: d.Z.Type.Button }, g(e, u.T$)));
        }),
          (e.Secondary = function (e) {
            return i.createElement(t, (0, n._)({ styleType: d.Z.Type.Button }, g(e, u.BD)));
          }),
          (e.Ghost = function (e) {
            return i.createElement(t, (0, n._)({ styleType: d.Z.Type.Button }, g(e, u.fk)));
          }),
          (e.Tertiary = function (e) {
            return i.createElement(t, (0, n._)({ styleType: d.Z.Type.Base }, g(e, u.UF)));
          }),
          (e.Flat = function (e) {
            return i.createElement(t, g(e, u.$H));
          }),
          (e.White = function (e) {
            return i.createElement(t, g(e, u.ix));
          }),
          (e.SidebarFlat = function (e) {
            return i.createElement(m.Y, (0, n._)({ styleType: d.Z.Type.H3Legacy }, g(e, u.HN)));
          }),
          (e.Caps = function (e) {
            return i.createElement(m.Y, (0, n._)({ styleType: d.Z.Type.H3Legacy }, g(e, u.Mp)));
          }),
          (e.Group = function (e) {
            var t = e.children,
              a = e.className,
              r = e.align,
              c = void 0 === r ? "horizontal" : r,
              d = e.sticky,
              m = e.name;
            return i.createElement(
              l.F.div,
              (0, o._)((0, n._)({ role: "group" }, (0, s.Sh)(a, "horizontal" === c ? (!0 === d ? u.vD : u.ru) : u.oc)), { "data-name": m }),
              t
            );
          });
      })(p || (p = {}));
      var b = function (e) {
        var t = e.title,
          a = e.titleAlign,
          n = e.buttonClass,
          o = e.iconClass,
          c = e.iconWidth,
          d = e.tooltipClass;
        return i.createElement(
          p,
          {
            name: "info-button",
            "aria-label": t,
            tag: m.X.div,
            title: i.createElement(l.F.div, (0, s.Sh)(u.bC, d), i.createElement("p", null, t)),
            titleAlign: a,
            className: n
          },
          i.createElement(r.JO.Info, { width: c, className: o })
        );
      };
    },
    50357: (e, t, a) => {
      a.r(t), a.d(t, { SettingsView: () => w });
      var n = a(27378),
        o = a(85441),
        i = a(8543),
        l = a(3736),
        s = a(31212),
        r = a(9205),
        c = a(50445),
        d = a(21928),
        m = a(56913),
        u = a(40303),
        p = a(33394),
        g = a(22484),
        b = a(95948),
        h = a(44724);
      const E = (e) =>
        (0, b.Lt)(e) || (0, h.c)(e) || ((e) => e.isGateEnabled(r.K.KnowledgeHubSlack) || e.isGateEnabled(r.K.KnowledgeHubWord))(e);
      var v = a(74344),
        k = a(33678),
        y = a(864);
      const w = ({ assistantSettingsViewModel: e, experimentClient: t, openSubscriptionDialog: a, getEnv: b }) => {
        const { domain: h, actions: w, state: f } = e,
          [C, S] = n.useState(!!f.view("page", "enabled").get()),
          x = { checked: C, update: S },
          T = n.useMemo(() => new y.C((0, o.nD)(b())), []);
        return n.createElement(
          k.a.Context.Provider,
          { value: T },
          n.createElement(
            i.F.div,
            { role: "region", "aria-label": "Grammarly settings" },
            f.view(({ user: e, page: a, dynamicConfig: o, dapi: i }) =>
              n.createElement(l.a, {
                actions: w,
                config: { enabled: !0, domain: h },
                settings: a,
                user: e,
                dapi: i,
                dynamicConfig: o,
                siteCategory: u.y.other,
                openGBLanding: (e) => {
                  const t = (0, p.Z4)(e, "gbExtensionSettingsAssistant");
                  self.open(t), g.J.getGBButtonClick("gbExtAssistantSettings", "ExploreGrammarlyBusiness");
                },
                isReportBugFeatureAllowed: !t.isGateEnabled(r.K.HideReportBugByGrammarlyEmployeeFeature),
                openReportBugForm: (e) => {
                  self.open(d.WY(e));
                },
                openUrl: (e) => self.open(e),
                showGBUpHook: (0, m.i7)(),
                placement: "assistant",
                showCitationBuilderToggle: !1,
                siteSwitcherChecked: x,
                isIndianEnglishDialectSupported:
                  t.isGateEnabled(r.K.IndianEnglishDialect) || t.isGateEnabled(r.K.IndianEnglishDialectInternal),
                isAutoApplySupported: t.isGateEnabled(r.K.SuggestionDeliveryAutoApply),
                downloadDebugReports: () => c.B.download(),
                isKeyboardAccessible: t.isGateEnabled(r.K.ExtensionA11yKeyboardNavigation),
                isCheetahSupported: !0,
                showSerengetiFeatureToggle: t.isGateEnabled(r.K.KnowledgeEngineSearchV2Alpha),
                isKnowledgeHubSupported: E(t),
                isPiiDetectionSupported: (0, v.z)(t, e)
              })
            ),
            f.view(({ user: e }) => n.createElement(s.Z, { user: e, openSubscriptionDialog: a, isAssistant: !0 }))
          )
        );
      };
    },
    9172: (e, t, a) => {
      if (
        (a.d(t, {
          FU: () => g,
          OY: () => S,
          Td: () => p,
          UI: () => h,
          XG: () => C,
          ab: () => k,
          eC: () => m,
          ex: () => w,
          fo: () => v,
          gO: () => r,
          r4: () => E,
          xq: () => u
        }),
        1388 == a.j)
      )
        var n = a(57050);
      var o = a(7992),
        i = a(48015);
      if (1388 == a.j) var l = a(5114);
      if (1388 == a.j) var s = a(55415);
      function r(e, t) {
        var a, n, o;
        const i =
          null ===
            (o =
              null === (n = null === (a = null == t ? void 0 : t.citationBuilder) || void 0 === a ? void 0 : a.domains) || void 0 === n
                ? void 0
                : n[e]) || void 0 === o
            ? void 0
            : o.disabled;
        return void 0 !== i ? !i : void 0;
      }
      function c(e, t) {
        return k(t).some((t) => new RegExp(t.domain).test(e));
      }
      function d(e) {
        var t, a;
        return !(null !== (a = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.disabled) && void 0 !== a && a);
      }
      function m(e, t) {
        return k(t).some((t) => {
          const a = new RegExp(t.domain),
            n = new RegExp(t.pathname);
          return a.test(e.hostname) && n.test(e.pathname);
        });
      }
      function u(e) {
        return l.tryCatch(() => {
          const t = new URL(e).hostname.split(".");
          return t.slice(t.length - 2).join(".");
        });
      }
      function p(e, t, a, n) {
        return a
          ? (function (e, t, a) {
              const n = r(e, a);
              return d(t) && ((void 0 === n && c(e, t)) || !0 === n);
            })(e, t, n)
          : (function (e, t, a) {
              return d(t) && c(e, t) && !1 !== r(e, a);
            })(e, t, n);
      }
      function g(e, t) {
        return k(t).some((t) => new RegExp(t.domain).test(e) && !0 === t.reparse);
      }
      const b = { verticalLocation: "bottom", horizontalLocation: "left", offsetX: 17, offsetY: 32 };
      function h(e, t) {
        var a;
        return (null === (a = k(t).find((t) => new RegExp(t.domain).test(e))) || void 0 === a ? void 0 : a.buttonPosition) || b;
      }
      function E(e, t, a) {
        return (
          d(t) &&
          (a
            ? !(function (e, t) {
                var a, n;
                return (
                  null !== (n = null === (a = t.citationBuilder) || void 0 === a ? void 0 : a.blockedDomains) && void 0 !== n ? n : []
                ).includes(e);
              })(e, t)
            : c(e, t))
        );
      }
      function v(e, t) {
        var a, n, o;
        const i = new Set(
          null !== (n = null === (a = e.citationBuilder) || void 0 === a ? void 0 : a.blockedDomains) && void 0 !== n ? n : []
        );
        return Object.entries((null === (o = t.citationBuilder) || void 0 === o ? void 0 : o.domains) || {})
          .filter(([, e]) => void 0 !== e && !e.disabled)
          .filter(([e]) => {
            return (t = e), !i.has(t);
            var t;
          })
          .map(([e]) => e);
      }
      function k(e) {
        var t, a;
        return null !== (a = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.sources) && void 0 !== a ? a : [];
      }
      const y = (0, i.hz)(() => {
          const e = document.location.href;
          return (0, o.KK)(e);
        }),
        w = (0, i.hz)((e) => {
          const t = document.location.href;
          return { url: t, domain: (0, o.KK)(t), isUrlAllowlisted: m(document.location, e) };
        }),
        f = (0, i.hz)(() => i.iy.create());
      function C(e) {
        const t = f(),
          a = y();
        return (0, n.zG)(
          e,
          s.H6(
            "citeCopyButtonClick",
            "citeCopyIntextClick",
            "citePopupButtonDisable",
            "citePopupButtonShow",
            "citePopupEditClick",
            "citePopupButtonClick",
            "citePopupEditSuccess",
            "citePopupMissingInfoShow",
            "citePopupMissingInfoFormShow",
            "feedbackSentButtonClick",
            "citePopupAddMissingClick"
          ),
          (e) => ({ ...e, domain: a, sessionId: t })
        );
      }
      function S(e, t) {
        return e.manualInvocation && !0 === r(t.domain, t);
      }
    },
    44724: (e, t, a) => {
      a.d(t, { c: () => o });
      var n = a(9205);
      const o = (e) => e.isGateEnabled(n.K.KnowledgeHubGmail);
    },
    73385: (e, t, a) => {
      a.d(t, { v: () => l });
      var n = a(57050),
        o = a(27378),
        i = a(89872);
      const l = ({ browser: e, className: t, title: a = "BETA", color: l = "blue" }) =>
        "safari" !== e
          ? o.createElement(i.C, { title: a, className: t, kind: "blue" === l ? "primary" : "green" === l ? "success" : (0, n.Rz)(l) })
          : null;
    },
    57226: (e, t, a) => {
      a.d(t, { d: () => o });
      var n = a(27378);
      const o = () =>
        n.createElement(
          "svg",
          { width: "11", height: "12", viewBox: "0 0 11 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          n.createElement("path", {
            d: "M4 1H2.5C1.39543 1 0.5 1.89543 0.5 3V9C0.5 10.1046 1.39543 11 2.5 11H8.5C9.60457 11 10.5 10.1046 10.5 9V7.5M5.5 6L10.5 1M10.5 1H6.5M10.5 1V5",
            stroke: "#4A6EE0",
            strokeLinecap: "round"
          })
        );
    },
    65515: (e, t, a) => {
      a.d(t, { Y: () => d });
      var n = a(27378),
        o = a(62369),
        i = a(93947),
        l = a(72889),
        s = a(54001),
        r = a(32502),
        c = a.n(r);
      const d = ({ onClick: e, dataGrammarlyPart: t = "unlock-premium-button", className: a }) =>
        n.createElement(
          o.z,
          { kind: "premium", onClick: e, dataGrammarlyPart: t, ...(0, s.Sh)(c().premiumButton, a) },
          n.createElement(i.J, { icon: l.O, variant: "premium", accessibilityLabel: "" }),
          n.createElement("span", null, "Unlock Premium")
        );
    },
    63260: (e, t, a) => {
      a.d(t, { R: () => d });
      var n = a(27378),
        o = a(17579),
        i = a(64757),
        l = a(6726),
        s = a(93265),
        r = a(10926),
        c = a(80394);
      const d = ({ lock: e = { message: "", isLocked: !1 }, dialect: t }) =>
        n.createElement(
          "div",
          { className: c.label },
          e.isLocked &&
            n.createElement(
              l.u,
              { message: e.message },
              n.createElement("div", { className: c.lockIconWrapper }, n.createElement(o.N, null))
            ),
          n.createElement(
            i.zx.White,
            { name: "dialect.box", style: { padding: "0" }, disabled: e.isLocked },
            n.createElement(
              "div",
              { className: `${c.selected} ${e.isLocked ? c.disabled : ""}` },
              n.createElement(r.G, { dialect: t, className: c.option }),
              n.createElement(s.pL, null)
            )
          )
        );
    },
    10926: (e, t, a) => {
      a.d(t, { G: () => r });
      var n = a(27378),
        o = a(93265),
        i = a(65479),
        l = a(18208);
      const s = {
          american: n.createElement(o.UE, null),
          australian: n.createElement(o.aE, null),
          british: n.createElement(o.M8, null),
          canadian: n.createElement(o._P, null),
          indian: n.createElement(o.kj, null)
        },
        r = ({ dialect: e, className: t }) =>
          n.createElement(
            n.Fragment,
            null,
            s[e],
            n.createElement(
              "span",
              { "data-test-attr": `dialect_${e}`, className: `${i.option} ${null != t ? t : ""}` },
              l.kC(e) + " English"
            )
          );
    },
    98427: (e, t, a) => {
      a.d(t, { X: () => c });
      var n = a(27378),
        o = a(64757),
        i = a(18813),
        l = a(63260),
        s = a(44103),
        r = a(10926);
      class c extends n.Component {
        render() {
          var e;
          const t = this.props.dropdownOnTop
            ? { customPosition: { top: `-${32 * (this.props.dialects.length - 1) + 4}px`, left: "0" }, vAlign: "top" }
            : { customPosition: { top: "36px", left: "0" } };
          return (null === (e = this.props.lock) || void 0 === e ? void 0 : e.isLocked)
            ? n.createElement(l.R, { lock: this.props.lock, dialect: this.props.dialect })
            : n.createElement(
                i.L,
                {
                  ...t,
                  showDelay: 0,
                  closeDelay: 150,
                  appearanceBehavior: "mouseClick",
                  name: "dialect",
                  label: n.createElement(l.R, { dialect: this.props.dialect })
                },
                this.props.dialects
                  .filter((e) => e !== this.props.dialect)
                  .map((e) =>
                    n.createElement(
                      o.zx.Flat,
                      { name: e, key: e, onClick: (t) => (null == t ? void 0 : t.isTrusted) && this.props.onSetDialect(e) },
                      n.createElement("div", { className: s.option }, n.createElement(r.G, { className: s.label, dialect: e }))
                    )
                  )
              );
        }
      }
    },
    93265: (e, t, a) => {
      a.d(t, { M8: () => r, UE: () => l, _P: () => c, aE: () => s, kj: () => d, pL: () => i });
      var n = a(27378),
        o = a(34917);
      const i = () =>
          n.createElement(
            "svg",
            { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            n.createElement("path", { d: "M13.9207 15L15.5 17.2562L17.0793 15H13.9207Z", stroke: "#6D758D", strokeWidth: "2" })
          ),
        l = () => n.createElement("div", { className: o.american, role: "presentation" }),
        s = () => n.createElement("div", { className: o.australian, role: "presentation" }),
        r = () => n.createElement("div", { className: o.british, role: "presentation" }),
        c = () => n.createElement("div", { className: o.canadian, role: "presentation" }),
        d = () => n.createElement("div", { className: o.indian, role: "presentation" });
    },
    34601: (e, t, a) => {
      a.d(t, { w: () => s });
      var n = a(27378),
        o = a(48015),
        i = a(6726),
        l = a(50945);
      const s = ({ children: e, blocked: t, wrapperClassName: a, disabledText: s = "Sign in to use this feature" }) =>
        t
          ? n.createElement(
              i.u,
              { message: s, position: "top" },
              n.createElement(
                "div",
                { className: a },
                n.createElement("div", { className: l.hover_blocker, onClick: o.EI, onDoubleClick: o.EI }, e)
              )
            )
          : n.createElement(n.Fragment, null, e);
    },
    9234: (e, t, a) => {
      a.d(t, { C: () => c });
      var n = a(27378),
        o = a(48015),
        i = a(98716),
        l = a(34601),
        s = a(56913),
        r = a(54001);
      class c extends n.Component {
        constructor() {
          super(...arguments),
            (this.handleChange = (e) => {
              (this.props.skipTrustedCheck || e.isTrusted) && this.props.onChange(e);
            });
        }
        render() {
          return n.createElement(
            "div",
            { ...(0, r.Sh)(this.props.extraClassName, i.setting_item, this.props.disabled && i.disabled) },
            n.createElement(
              "label",
              {
                ...(0, r.Sh)(
                  i.select_checkbox,
                  this.props.centered && i.centered,
                  this.props.isKeyboardAccessible && i.keyboard_accessible
                ),
                "data-grammarly-part": this.props.dataGrammarlyPart
              },
              n.createElement(
                "div",
                { className: i.select_children },
                this.props.children,
                this.props.beta && n.createElement("span", { className: (0, s.G6)() ? i.new : i.beta }),
                this.props.alpha && n.createElement("span", { className: (0, s.G6)() ? i.new : i.alpha }),
                this.props.new && n.createElement("span", { className: i.new })
              ),
              n.createElement(l.w, {
                wrapperClassName: i.checkbox_control_wrapper,
                blocked: this.props.disabled,
                disabledText: this.props.disabledText
              }),
              n.createElement("input", {
                className: i.checkbox,
                onChange: this.props.disabled ? o.EI : this.handleChange,
                checked: this.props.checked,
                type: "checkbox"
              }),
              n.createElement(
                "div",
                { ...(0, r.Sh)(i.checkbox_check, this.props.grayOut && i.grayOut, this.props.checked ? i.on : i.off) },
                n.createElement("div", { ...(0, r.Sh)(i.on_off) }, this.props.checked ? "ON" : "OFF"),
                n.createElement("div", { className: i.checkbox_check_round })
              )
            )
          );
        }
      }
    },
    88326: (e, t, a) => {
      a.d(t, { W: () => r });
      var n = a(20641),
        o = a(27378),
        i = a(49405),
        l = a(9234),
        s = a(11250);
      class r extends o.Component {
        constructor() {
          super(...arguments),
            (this.onEnableDefsClick = (e) => {
              const { toggleDefs: t } = this.props,
                a = e.target.checked;
              t(a), s.J.definitionToggleClick(a ? "on" : "off"), (0, n.Tb)().toggleExtensionDefs(a);
            });
        }
        render() {
          const { enabledDefs: e, disabled: t } = this.props;
          return o.createElement(
            l.C,
            {
              onChange: this.onEnableDefsClick,
              checked: e,
              extraClassName: i.def_switcher,
              dataGrammarlyPart: "definitionAndSynonymsSwitcher",
              disabled: t,
              skipTrustedCheck: this.props.skipTrustedCheck
            },
            "Show definitions and synonyms ",
            o.createElement("br", null),
            "via double clicks (all sites)"
          );
        }
      }
    },
    24627: (e, t, a) => {
      a.d(t, { m: () => c });
      var n = a(27378),
        o = a(17347),
        i = a(98427),
        l = a(34601),
        s = a(54001),
        r = a(11250);
      class c extends n.Component {
        constructor() {
          super(...arguments),
            (this.setDialect = (e) => {
              const { changeStrongDialect: t, dialectWeak: a } = this.props;
              t(e);
              const n = e + "English";
              r.J.languageSettingUpdate(n, "user", a && e === a);
            });
        }
        render() {
          const e = this.props.dialectStrong || this.props.dialectWeak || "american";
          return n.createElement(
            "div",
            { ...(0, s.Sh)(o.line, this.props.disabled && o.disabled) },
            n.createElement("div", null, "I write in"),
            n.createElement(
              l.w,
              { blocked: this.props.disabled },
              n.createElement(
                "div",
                { className: o.dialectPicker },
                n.createElement(i.X, {
                  dialect: e,
                  dialects: this.props.dialects,
                  onSetDialect: this.setDialect,
                  dropdownOnTop: !!this.props.dropdownOnTop,
                  lock: this.props.lock
                })
              )
            )
          );
        }
      }
    },
    61363: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(20641),
        o = a(27378),
        i = a(65287),
        l = a(62369),
        s = a(56913),
        r = a(54001);
      const c = ({ showTitle: e, showBackground: t, openGBLanding: a }) =>
        o.createElement(
          "div",
          { ...(0, r.Sh)(i.container, t ? i.containerWithBackground : null) },
          o.createElement(
            "div",
            { className: i.content },
            e && o.createElement("div", { className: i.title }, "Grammarly for your team"),
            o.createElement("div", null, "Help your team make your business look great with top-notch writing."),
            o.createElement(
              l.z,
              {
                size: "medium",
                onClick: () => {
                  a((0, s.Um)().businessHomepage), (0, n.Tb)().gGbUpHookClick();
                },
                className: i.button
              },
              "Explore Grammarly Business"
            )
          )
        );
    },
    3736: (e, t, a) => {
      a.d(t, { a: () => R });
      var n = a(42356),
        o = a(27378),
        i = a(49405),
        l = a(9264),
        s = a(9172),
        r = a(82828),
        c = a(62369),
        d = a(73385),
        m = a(57226),
        u = a(19374),
        p = a(9234),
        g = a(61363),
        b = a(21928),
        h = a(56913),
        E = a(6294),
        v = a(20641),
        k = a(51129),
        y = a(75463),
        w = a(11250),
        f = a(88326),
        C = a(24627),
        S = a(49475),
        x = a(34455);
      const T = (e) =>
          o.createElement(
            p.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: i.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            e.isAutoApplySupported ? "Correct text automatically" : "Correct spelling automatically"
          ),
        N = (e) =>
          o.createElement(
            p.C,
            {
              checked: !e.enabled,
              extraClassName: i.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible,
              onChange: (t) => {
                e.toggle(!t.target.checked);
              },
              dataGrammarlyPart: "disableDesktopIntegrationToggle"
            },
            o.createElement("div", { className: i.llamaTitle }, "Check text with browser extension"),
            e.enabled &&
              o.createElement(
                "div",
                { className: i.llamaDescription },
                "Grammarly's browser extension was deactivated since you're using Grammarly's desktop application."
              )
          ),
        A = (e) =>
          o.createElement(
            p.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              beta: !0,
              checked: e.enabled,
              extraClassName: i.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show phrasal predictions"
          ),
        B = (e) =>
          o.createElement(
            p.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: i.def_switcher,
              dataGrammarlyPart: "settings-toggle-show-emoji-for-detected-tones",
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show emoji for detected tones"
          ),
        _ = (e) =>
          o.createElement(
            "div",
            { className: i.cheetahLabelAndButton },
            o.createElement("div", { className: i.cheetahLabel }, o.createElement("b", null, "GrammarlyGO")),
            o.createElement(
              c.z,
              {
                className: i.cheetahManageButton,
                kind: "transparent",
                dataGrammarlyPart: "cheetahManageBtn",
                onClick: () => {
                  e.manageButtonClick();
                }
              },
              o.createElement("span", null, "Manage")
            )
          ),
        K = (e) =>
          o.createElement(
            p.C,
            {
              disabled: e.disabled,
              grayOut: e.disabled,
              disabledText: "",
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: i.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            e.label
          ),
        G = (e) =>
          o.createElement(
            p.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: i.def_switcher,
              dataGrammarlyPart: "settings-toggle-include-serengeti-context",
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Use organizational context in",
            " ",
            o.createElement(
              "span",
              { className: i.nobr },
              "GrammarlyGO ",
              o.createElement(d.v, { browser: (0, h.qs)(), color: "green", title: "internal" })
            )
          ),
        L = (e) =>
          o.createElement(
            p.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: i.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show Knowledge Share"
          ),
        D = (e) =>
          o.createElement(
            p.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              beta: !0,
              checked: e.enabled,
              extraClassName: i.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show Grammarly Guard"
          ),
        H = (e) =>
          o.createElement(
            p.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              new: !0,
              checked: e.enabled,
              extraClassName: i.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show “Get citation” button on ",
            o.createElement("br", null),
            e.domain
          ),
        P = ({ showReportBugButton: e, ...t }) =>
          o.createElement(
            "div",
            { "data-grammarly-part": "debugMenu" },
            o.createElement("div", { className: x.separator }),
            o.createElement(
              "div",
              { className: x.debugMenu },
              o.createElement(
                "div",
                { className: x.heading },
                o.createElement("div", null, "Debug Menu"),
                t.showHideButton &&
                  o.createElement(
                    c.z,
                    {
                      dataGrammarlyPart: "debugMenuHideBtn",
                      kind: "transparent",
                      onClick: () => {
                        (0, u.E)().bgRpc.api.toggleDebugMenu(!1);
                      }
                    },
                    o.createElement("span", null, "Hide")
                  )
              ),
              o.createElement(
                p.C,
                {
                  onChange: (e) => {
                    e.target.checked ? (0, u.E)().bgRpc.api.enableHistoryLoggerUntil(-1) : (0, u.E)().bgRpc.api.disableHistoryLogger();
                  },
                  dataGrammarlyPart: "debugMenuLoggingToggle",
                  checked: t.isEnabled,
                  extraClassName: i.def_switcher,
                  isKeyboardAccessible: t.isKeyboardAccessible
                },
                "Logging"
              ),
              o.createElement("div", { className: x.separator }),
              o.createElement(
                p.C,
                {
                  onChange: (e) => {
                    e.target.checked
                      ? (0, u.E)().bgRpc.api.enableAdvancedHistoryLoggerUntil(Date.now() + 36e5)
                      : (0, u.E)().bgRpc.api.disableAdvancedHistoryLogger();
                  },
                  dataGrammarlyPart: "debugMenuAdvanceLoggingToggle",
                  checked: t.isAdvancedEnabled,
                  extraClassName: i.def_switcher,
                  disabled: !t.isEnabled,
                  disabledText: "Enable logging first",
                  isKeyboardAccessible: t.isKeyboardAccessible
                },
                "Advanced Logging",
                " ",
                t.isAdvancedEnabled &&
                  t.advancedHistoryLoggerEnabledUntil &&
                  o.createElement(
                    "span",
                    { className: x.timer },
                    Math.ceil((t.advancedHistoryLoggerEnabledUntil - Date.now()) / 6e4),
                    " mins left"
                  )
              ),
              o.createElement("div", { className: x.separator }),
              o.createElement(
                "div",
                { className: x.heading },
                o.createElement(
                  c.z,
                  {
                    className: x.downloadBtn,
                    kind: "transparent",
                    disabled: !t.isEnabled,
                    onClick: t.downloadDebugReports,
                    dataGrammarlyPart: "debugMenuDownloadLogBtn"
                  },
                  o.createElement("span", null, "Download Logs")
                ),
                !0 === e.enabled
                  ? o.createElement(
                      c.z,
                      {
                        className: x.downloadBtn,
                        kind: "transparent",
                        dataGrammarlyPart: "debugMenuReportBugBtn",
                        onClick: () => {
                          e.onClick();
                        }
                      },
                      o.createElement("span", null, "Report a bug")
                    )
                  : null
              )
            )
          ),
        R = (e) => {
          var t, a, i, d, u, p, R, F, I, M, U, O, J, z, W, Z, V, j, q, Y, Q;
          const {
            actions: X,
            activeTab: $,
            config: ee,
            settings: te,
            dapi: ae,
            user: ne,
            siteCategory: oe,
            openGBLanding: ie,
            showGBUpHook: le,
            placement: se,
            dynamicConfig: re,
            enableRenderingHack: ce = !1,
            showCitationBuilderToggle: de = !0,
            citationBuilderSessionId: me,
            isCitationBuilderManualInvocationEnabled: ue = !1,
            isKnowledgeHubSupported: pe = !1,
            isPiiDetectionSupported: ge = !1,
            isIndianEnglishDialectSupported: be = !1,
            isCheetahSupported: he = !1,
            showSerengetiFeatureToggle: Ee = !1,
            isReportBugFeatureAllowed: ve,
            isAutoApplySupported: ke = !1,
            className: ye,
            downloadDebugReports: we
          } = e;
          ce &&
            o.useEffect(() => {
              (0, h.CB)() &&
                (self.screenLeft < 0 || self.screenTop < 0 || self.screenLeft > self.screen.width || self.screenTop > self.screen.height) &&
                chrome.runtime.getPlatformInfo((e) => {
                  if ("mac" === e.os) {
                    const e = new CSSStyleSheet();
                    e.insertRule(
                      "\n            @keyframes redraw {\n              0% {\n                opacity: 1;\n              }\n              100% {\n                opacity: .99;\n              }\n            }\n          "
                    ),
                      e.insertRule("\n            html {\n              animation: redraw 1s linear infinite;\n            }\n          "),
                      (document.adoptedStyleSheets = [...document.adoptedStyleSheets, e]);
                  }
                });
            }, []);
          const { premium: fe, experiments: Ce, anonymous: Se } = ne,
            xe = k.n5.isGrammarlyEmployee(ne) && ve,
            Te = le && fe && !k.n5.doesUserBelongToInstitution(ne),
            { dialectSettings: Ne } = te,
            Ae = (null == Ne ? void 0 : Ne.dialect) || ae.dialectStrong,
            Be = ["british", "american", "australian", "canadian", ...(be ? ["indian"] : [])],
            _e = e.siteSwitcherChecked || {
              checked: !!te.enabled,
              update: (t) => {
                const { siteCategory: a } = e;
                X.toggleSite(t, ee.domain),
                  w.J.checkingToggleClick("toolbar", a, t ? "on" : "off"),
                  (0, v.Tb)().toggleExtension(t, "toolbar", (0, y.FN)(ee.domain));
              }
            },
            Ke = o.useCallback(
              (e) => {
                const t = $ && new URL($.url).pathname;
                X.toggleCitationBuilderForDomain({
                  domain: ee.domain,
                  enabled: e,
                  pathName: t,
                  inAllowList: $ && (0, s.eC)(new URL($.url), re)
                }),
                  e || w.J.citePopupButtonDisable(ee.domain, "permanent", me || "", "toolbar", ue && !0 === (0, s.gO)(ee.domain, te));
              },
              [null == $ ? void 0 : $.url, ee.domain, me]
            );
          return o.createElement(
            "div",
            { className: (0, n.cs)(x.settingsContent, ye), "data-grammarly-part": "settings" },
            o.createElement(
              "div",
              { className: x.heading },
              o.createElement("div", null, "Quick Settings"),
              o.createElement(
                c.z,
                {
                  kind: "link",
                  onClick: () => {
                    e.openUrl((0, h.Um)().allSettings), w.J.allSettingsButtonClick(se);
                  }
                },
                o.createElement(
                  "div",
                  { className: x.allSettings },
                  o.createElement("span", null, "All Settings"),
                  o.createElement(m.d, null)
                )
              )
            ),
            r.q.showSettingPopupToggle(ae, te, re, null == $ ? void 0 : $.url) &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(N, {
                  toggle: (e) => {
                    X.setDesktopIntegration(e), w.J.desktopIntegrationToggleClick(e ? "on" : "off");
                  },
                  enabled: te.isDesktopIntegrationEnabled,
                  isKeyboardAccessible: e.isKeyboardAccessible
                }),
                o.createElement("div", { className: x.separator })
              ),
            o.createElement(S.w, {
              domain: ee.domain,
              enabledInConfig: null !== (t = ee.enabled) && void 0 !== t && t,
              siteSwitcherChecked: _e,
              favicon: null == $ ? void 0 : $.favIconUrl,
              siteCategory: oe,
              experiments: Ce
            }),
            o.createElement("div", { className: x.separator }),
            he &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(_, { manageButtonClick: () => e.openUrl((0, h.Um)().featuresSettings) }),
                o.createElement(K, {
                  label: o.createElement(o.Fragment, null, "Show GrammarlyGO on text selection"),
                  enabled:
                    !1 !==
                      (null === (i = null === (a = te.cheetah) || void 0 === a ? void 0 : a.status) || void 0 === i
                        ? void 0
                        : i.cheetahEnabled) &&
                    !1 !==
                      (null ===
                        (p =
                          null === (u = null === (d = te.cheetah) || void 0 === d ? void 0 : d.status) || void 0 === u
                            ? void 0
                            : u.entryPointsConfig) || void 0 === p
                        ? void 0
                        : p.inlineRewriteEnabled),
                  disabled:
                    !1 ===
                    (null === (F = null === (R = te.cheetah) || void 0 === R ? void 0 : R.status) || void 0 === F
                      ? void 0
                      : F.cheetahEnabled),
                  toggle: (e) => X.cheetahToggleInlineRewrite(e),
                  isKeyboardAccessible: e.isKeyboardAccessible
                }),
                o.createElement(K, {
                  label: o.createElement(o.Fragment, null, "Show GrammarlyGO for quick replies"),
                  enabled:
                    !1 !==
                      (null === (M = null === (I = te.cheetah) || void 0 === I ? void 0 : I.status) || void 0 === M
                        ? void 0
                        : M.cheetahEnabled) &&
                    !1 !==
                      (null ===
                        (J =
                          null === (O = null === (U = te.cheetah) || void 0 === U ? void 0 : U.status) || void 0 === O
                            ? void 0
                            : O.entryPointsConfig) || void 0 === J
                        ? void 0
                        : J.inlineQuickReplyEnabled),
                  disabled:
                    !1 ===
                    (null === (W = null === (z = te.cheetah) || void 0 === z ? void 0 : z.status) || void 0 === W
                      ? void 0
                      : W.cheetahEnabled),
                  toggle: (e) => X.cheetahToggleInlineQuickReply(e),
                  isKeyboardAccessible: e.isKeyboardAccessible
                }),
                o.createElement("div", { className: x.separator })
              ),
            Ee &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(G, {
                  enabled: "disabled" !== ae.serengetiState,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    X.setSerengetiState(!0 === e ? "enabled" : "disabled");
                  }
                }),
                o.createElement("div", { className: x.separator })
              ),
            de &&
              (0, s.r4)(ee.domain, re, ue) &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(H, {
                  enabled: (0, s.Td)(ee.domain, re, ue, te),
                  domain: ee.domain,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: Ke
                }),
                o.createElement("div", { className: x.separator })
              ),
            pe &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(L, {
                  enabled: null === (V = null === (Z = te.knowledgeHubSettings) || void 0 === Z ? void 0 : Z.enabled) || void 0 === V || V,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    X.toggleKnowledgeHub(e),
                      w.J.knowledgeHubFeatureToggleClick("popup", l.JJ.fromDomain(ee.domain), e ? l.L5.on : l.L5.off),
                      (0, v.Tb)().knowledgeHub.featureToggleClick(l.JJ.fromDomain(ee.domain), e ? l.L5.on : l.L5.off);
                  }
                }),
                o.createElement("div", { className: x.separator })
              ),
            ge &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(D, {
                  enabled: null === (q = null === (j = te.piiDetectionSettings) || void 0 === j ? void 0 : j.enabled) || void 0 === q || q,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    w.J.grammarlyGuardFeatureToggleClick(e ? "on" : "off", ee.domain), X.togglePiiDetection(e);
                  }
                }),
                o.createElement("div", { className: x.separator })
              ),
            o.createElement(f.W, { disabled: Se, enabledDefs: te.enabledDefs, toggleDefs: X.toggleDefs }),
            o.createElement("div", { className: x.separator }),
            o.createElement(T, {
              enabled: te.autocorrectEnabled || !1,
              isKeyboardAccessible: e.isKeyboardAccessible,
              isAutoApplySupported: ke,
              toggle: (e) => {
                X.toggleAutocorrect(e);
                const t = e ? "on" : "off";
                w.J.autocorrectToggleClick("popup", t), (0, v.Tb)().autoFix.featureToggleClick(t, "popup");
              }
            }),
            o.createElement("div", { className: x.separator }),
            o.createElement(A, {
              enabled: te.autocompleteEnabled || !1,
              isKeyboardAccessible: e.isKeyboardAccessible,
              toggle: (e) => {
                X.toggleAutocomplete(e), w.J.autocompleteFeatureToggleClick("popup", e ? "on" : "off");
              }
            }),
            (!he ||
              !1 ===
                (null === (Q = null === (Y = te.cheetah) || void 0 === Y ? void 0 : Y.status) || void 0 === Q
                  ? void 0
                  : Q.cheetahEnabled)) &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement("div", { className: x.separator }),
                o.createElement(B, {
                  enabled: "hide" !== ae.emogenieEmojiState,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    X.setEmogenieEmojiState(!0 === e ? "show" : "hide"),
                      w.J.settingsShowEmojiForDetectedTonesToggleClick(ee.domain, !0 === e ? "on" : "off");
                  }
                })
              ),
            o.createElement("div", { className: x.separator }),
            o.createElement(C.m, {
              dialects: Be,
              changeStrongDialect: X.changeStrongDialect,
              dialectStrong: Ae,
              dialectWeak: ae.dialectWeak,
              dropdownOnTop: !0,
              disabled: Se,
              lock: { isLocked: Boolean(null == Ne ? void 0 : Ne.dialectLockedByInstitution), message: "Locked by your organization" }
            }),
            Te && o.createElement(g.Z, { openGBLanding: ie, showTitle: "popup" === se, showBackground: "popup" === se }),
            (te.isDebugMenuVisible || xe) &&
              o.createElement(P, {
                isAdvancedEnabled: te.advancedHistoryLoggerEnabled,
                isEnabled: te.historyLoggerEnabled,
                advancedHistoryLoggerEnabledUntil: te.advancedHistoryLoggerEnabledUntil,
                isKeyboardAccessible: e.isKeyboardAccessible,
                showReportBugButton: xe
                  ? {
                      enabled: !0,
                      onClick: () => {
                        e.openReportBugForm(
                          b.ZD({ domain: ee.domain, userType: b.Ng(ne), version: (0, h.bo)(), systemInfo: E.Rd().systemInfo })
                        );
                      }
                    }
                  : { enabled: !1 },
                showHideButton: !xe,
                downloadDebugReports: we
              })
          );
        };
    },
    49475: (e, t, a) => {
      a.d(t, { w: () => s });
      var n = a(27378),
        o = a(49405),
        i = a(9234),
        l = a(54001);
      const s = (e) => {
        const t = "docs.google.com" === e.domain ? "Google Docs" : e.domain,
          { enabledInConfig: a, siteSwitcherChecked: s, favicon: r } = e,
          c = s.checked && a,
          d = a ? "Check for writing suggestions" : "Checking is not supported";
        return n.createElement(
          i.C,
          {
            grayOut: !a,
            onChange: (e) => s.update(e.target.checked),
            checked: c,
            extraClassName: o.site_switcher,
            dataGrammarlyPart: "siteSwitcher",
            skipTrustedCheck: e.skipTrustedCheck,
            centered: !!e.centeredToggle
          },
          n.createElement(
            "div",
            { "data-test-attr": "siteControlsLabelText" },
            d,
            n.createElement("br", null),
            " ",
            n.createElement(
              "span",
              { ...(0, l.Sh)(o.domain, e.centeredToggle && o.centered) },
              n.createElement("span", { className: o.thin_text }, "on"),
              " ",
              r && n.createElement("span", { className: o.favicon }, n.createElement("img", { width: "16px", height: "16px", src: r })),
              t
            )
          )
        );
      };
    },
    31212: (e, t, a) => {
      a.d(t, { Z: () => g });
      var n = a(20641),
        o = a(43124),
        i = a(27378),
        l = a(30955),
        s = a(54001),
        r = a(11250),
        c = a(44358),
        d = a(65515),
        m = a(49708),
        u = a(85985),
        p = a(56913);
      const g = ({ user: e, isAssistant: t, openSubscriptionDialog: a }) => {
        const { registrationDate: g, anonymous: b, premium: h } = e,
          E = (0, o.p6)(g);
        if (b || h) return null;
        const v = () => {
          (0, c.n)(r.J, {
            placement: t ? "assistantSettings" : "settingsToolbar",
            bannerType: "GoPremiumToEnableAdvancedFixes",
            upgradeHookName: "extensionSettings",
            upgradeHookSlot: t ? "assistantSettingsPopup" : "browserToolbar"
          }),
            (0, n.Tb)().upgradeHooks.showUpgradeHook("extensionSettings", t ? "assistantSettingsPopup" : "browserToolbar");
        };
        i.useEffect(() => {
          if ((0, p.G6)()) {
            const e = (0, m.R)(document, "visibilitychange")
              .pipe((0, u.h)(() => "visible" === document.visibilityState))
              .subscribe(() => {
                v();
              });
            return () => e.unsubscribe();
          }
          return v(), () => {};
        }, []);
        const k = i.useCallback(() => {
            a({ utmSource: "upHook", utmCampaign: "extensionSettingsToolbar" }),
              (0, c.Q)(r.J, {
                placement: t ? "assistantSettings" : "settingsToolbar",
                bannerType: "GoPremiumToEnableAdvancedFixes",
                upgradeHookName: "extensionSettings",
                upgradeHookSlot: t ? "assistantSettingsPopup" : "browserToolbar"
              }),
              (0, n.Tb)().upgradeHooks.clickUpgradeHook("extensionSettings", t ? "assistantSettingsPopup" : "browserToolbar"),
              (0, n.Tb)().userUpgradeClick("settingsToolbar");
          }, []),
          y = E
            ? i.createElement("div", { "data-test-attr": "checked_since" }, "Grammarly has been correcting your text since ", E, ".")
            : null;
        return i.createElement(
          "div",
          { className: t ? l.borderTop : void 0 },
          i.createElement(
            "div",
            { ...(0, s.Sh)(l.content, t ? void 0 : l.borderBottom) },
            y,
            i.createElement(d.Y, { onClick: k, className: l.premiumButton, dataGrammarlyPart: "settings-upgrade-button" })
          )
        );
      };
    },
    11250: (e, t, a) => {
      a.d(t, { J: () => o });
      var n = a(19374);
      const o = new Proxy(
        {},
        {
          get:
            (e, t) =>
            (...e) =>
              (0, n.E)().bgRpc.api.trackGnar(t, e)
        }
      );
    },
    21928: (e, t, a) => {
      a.d(t, { Ng: () => i, WY: () => s, ZD: () => l });
      var n = a(56913),
        o = a(51129);
      const i = (e) => {
          const t = o.n5.getType(e);
          return "registered" === t ? "free" : t;
        },
        l = (e) => {
          return {
            clientVersion: e.version,
            platformVersion: "",
            application: e.domain,
            browser: e.systemInfo.browser.type,
            os: ((t = e.systemInfo.os), t.isWindows ? "windows" : t.isMac ? "mac" : t.isChromeOS ? "chromeos" : "other"),
            userType: e.userType,
            team: "browserextensions"
          };
          var t;
        },
        s = (e) => {
          const t = new URL((0, n.Um)().grammarlyEmployeesBugReportsUrl);
          return (
            Object.entries(e).forEach(([e, a]) => {
              a && t.searchParams.set(e, a);
            }),
            t.toString()
          );
        };
    },
    32502: (e) => {
      e.exports = { premiumButton: "QpA64" };
    },
    80394: (e) => {
      e.exports = { label: "cLK4q", selected: "hbRki", option: "UytwF", disabled: "mTk5j", lockIconWrapper: "o4NOU" };
    },
    65479: (e) => {
      e.exports = { option: "XNQPo" };
    },
    44103: (e) => {
      e.exports = { option: "dRYWx" };
    },
    34917: (e) => {
      e.exports = { american: "JRPow", australian: "FZNcB", british: "MzB3a", canadian: "_fn3J", indian: "eqgex" };
    },
    50945: (e) => {
      e.exports = { hover_blocker: "np9cY" };
    },
    34455: (e) => {
      e.exports = {
        settingsContent: "C3SN4",
        fullWidth: "dRfoN",
        heading: "_HqAa",
        allSettings: "pUfgB",
        separator: "vlSkx",
        settingsLink: "d_ohh",
        debugMenu: "iovEn",
        downloadBtn: "u6BF0",
        timer: "DQHsO"
      };
    },
    98716: (e) => {
      e.exports = {
        select_checkbox: "cIqfV",
        centered: "yfVcZ",
        select_children: "lRjE2",
        beta: "wvPnO",
        new: "QHuhM",
        alpha: "cThIl",
        checkbox: "F2Xdn",
        checkbox_check: "QRTZ2",
        on: "jzBvy",
        off: "HVvmV",
        checkbox_check_round: "qeH5k",
        checkbox_control_wrapper: "UMoTL",
        grayOut: "Ta6y3",
        on_off: "c2IdT",
        keyboard_accessible: "o7ug_",
        disabled: "KQoMv",
        setting_item: "HfRCc"
      };
    },
    17347: (e) => {
      e.exports = { line: "OBGgK", disabled: "SvddX", dialectPicker: "QNfvS", lockedInfo: "oAPBC" };
    },
    65287: (e) => {
      e.exports = { container: "FaEBj", containerWithBackground: "W15V7", content: "lof2m", title: "R97wU", button: "Udw_0" };
    },
    49405: (e) => {
      e.exports = {
        windows: "ScRGR",
        setting_item: "byTue",
        fixing: "tGQgu",
        thin_text: "Zw2iF",
        footer: "VarAw",
        gr_popup_settings: "sCOqq",
        iOS: "xw90P",
        footer_btn: "dFcxY",
        short_border: "GPdi3",
        top: "a8_HB",
        content: "eJi6K",
        upgraded: "fPnHa",
        since: "KcwUv",
        business: "HH96k",
        edu: "C_xJH",
        my_grammarly: "TPdm3",
        new_document: "b5rRu",
        unsupported_site: "FV6cP",
        unsupported_item: "kI6Es",
        unsupported_title: "TvJkj",
        domain: "mbOuw",
        domain_in_details: "HyZRA",
        unsupported_temporary: "aeiHl",
        unsupported_permanently: "e63AG",
        unsupported_grammarly: "SK755",
        diamond: "z0724",
        userPanel: "bG2GY",
        email: "U4qfE",
        link: "Vrj67",
        blue: "Dstaa",
        edc_stripe: "GEFvM",
        line: "_o71L",
        not_supported: "Z9hzt",
        site_switcher: "LXeMc",
        upgrade: "BAl_v",
        def_switcher: "aVnnG",
        on: "CcnIo",
        off: "LZuFk",
        cheetahToggle: "YHW25",
        favicon: "L5Hrq",
        centered: "T0qTK",
        summary: "tuG8u",
        upgrade_title: "KRcNq",
        settingsContentWrapper: "OeKpx",
        settingsContent: "AwQr3",
        withBackground: "JRZMC",
        llamaTitle: "WnzAW",
        llamaDescription: "dDIsV",
        cheetahLabelAndButton: "WwKRI",
        cheetahLabel: "aMCQq",
        cheetahManageButton: "hfCbo",
        nobr: "wae8U"
      };
    },
    30955: (e) => {
      e.exports = { content: "IJam9", borderTop: "oKEr5", borderBottom: "lZ1ZL", premiumButton: "bvxiF" };
    }
  }
]);