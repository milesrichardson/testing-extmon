(self.webpackChunk = self.webpackChunk || []).push([
  [8721],
  {
    35111: (e, t, i) => {
      var a = i(91980),
        s = "chrome-extension://__MSG_@@extension_id__/",
        r = "moz-extension://__MSG_@@extension_id__/",
        n = "safari-web-extension://__MSG_@@extension_id__/",
        o = self.GR_RESOURCE_ROOT || s,
        l = self.GR_RESOURCE_ROOT || r,
        c = self.GR_RESOURCE_ROOT || n;
      e.exports = {
        __css: a.toString().replace(new RegExp(s, "g"), o).replace(new RegExp(r, "g"), l).replace(new RegExp(n, "g"), c),
        ...a.locals
      };
    },
    9172: (e, t, i) => {
      if (
        (i.d(t, {
          FU: () => g,
          OY: () => k,
          Td: () => m,
          UI: () => v,
          XG: () => C,
          ab: () => w,
          eC: () => u,
          ex: () => y,
          fo: () => b,
          gO: () => l,
          r4: () => f,
          xq: () => p
        }),
        1388 == i.j)
      )
        var a = i(57050);
      var s = i(7992),
        r = i(48015);
      if (1388 == i.j) var n = i(5114);
      if (1388 == i.j) var o = i(55415);
      function l(e, t) {
        var i, a, s;
        const r =
          null ===
            (s =
              null === (a = null === (i = null == t ? void 0 : t.citationBuilder) || void 0 === i ? void 0 : i.domains) || void 0 === a
                ? void 0
                : a[e]) || void 0 === s
            ? void 0
            : s.disabled;
        return void 0 !== r ? !r : void 0;
      }
      function c(e, t) {
        return w(t).some((t) => new RegExp(t.domain).test(e));
      }
      function d(e) {
        var t, i;
        return !(null !== (i = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.disabled) && void 0 !== i && i);
      }
      function u(e, t) {
        return w(t).some((t) => {
          const i = new RegExp(t.domain),
            a = new RegExp(t.pathname);
          return i.test(e.hostname) && a.test(e.pathname);
        });
      }
      function p(e) {
        return n.tryCatch(() => {
          const t = new URL(e).hostname.split(".");
          return t.slice(t.length - 2).join(".");
        });
      }
      function m(e, t, i, a) {
        return i
          ? (function (e, t, i) {
              const a = l(e, i);
              return d(t) && ((void 0 === a && c(e, t)) || !0 === a);
            })(e, t, a)
          : (function (e, t, i) {
              return d(t) && c(e, t) && !1 !== l(e, i);
            })(e, t, a);
      }
      function g(e, t) {
        return w(t).some((t) => new RegExp(t.domain).test(e) && !0 === t.reparse);
      }
      const h = { verticalLocation: "bottom", horizontalLocation: "left", offsetX: 17, offsetY: 32 };
      function v(e, t) {
        var i;
        return (null === (i = w(t).find((t) => new RegExp(t.domain).test(e))) || void 0 === i ? void 0 : i.buttonPosition) || h;
      }
      function f(e, t, i) {
        return (
          d(t) &&
          (i
            ? !(function (e, t) {
                var i, a;
                return (
                  null !== (a = null === (i = t.citationBuilder) || void 0 === i ? void 0 : i.blockedDomains) && void 0 !== a ? a : []
                ).includes(e);
              })(e, t)
            : c(e, t))
        );
      }
      function b(e, t) {
        var i, a, s;
        const r = new Set(
          null !== (a = null === (i = e.citationBuilder) || void 0 === i ? void 0 : i.blockedDomains) && void 0 !== a ? a : []
        );
        return Object.entries((null === (s = t.citationBuilder) || void 0 === s ? void 0 : s.domains) || {})
          .filter(([, e]) => void 0 !== e && !e.disabled)
          .filter(([e]) => {
            return (t = e), !r.has(t);
            var t;
          })
          .map(([e]) => e);
      }
      function w(e) {
        var t, i;
        return null !== (i = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.sources) && void 0 !== i ? i : [];
      }
      const S = (0, r.hz)(() => {
          const e = document.location.href;
          return (0, s.KK)(e);
        }),
        y = (0, r.hz)((e) => {
          const t = document.location.href;
          return { url: t, domain: (0, s.KK)(t), isUrlAllowlisted: u(document.location, e) };
        }),
        E = (0, r.hz)(() => r.iy.create());
      function C(e) {
        const t = E(),
          i = S();
        return (0, a.zG)(
          e,
          o.H6(
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
          (e) => ({ ...e, domain: i, sessionId: t })
        );
      }
      function k(e, t) {
        return e.manualInvocation && !0 === l(t.domain, t);
      }
    },
    45828: (e, t, i) => {
      if ((i.d(t, { O: () => r }), 3075 == i.j)) var a = i(55415);
      if (3075 == i.j) var s = i(57050);
      function r(e) {
        return (0, s.zG)(e, a.H6("gdocsPlagiarismButtonClick", "plagiarismAlertEditToLook"));
      }
    },
    56143: (e, t, i) => {
      i.d(t, { u: () => c });
      var a = i(5802),
        s = i(41966),
        r = i(61813),
        n = i(23239);
      const o = {
        priority: a.P.Priority.low,
        timeout: a.P.DefaultTimeout,
        position: a.P.Position.bottomRight,
        viewType: a.P.ViewType.standard
      };
      var l;
      !(function (e) {
        e.createFactory = function () {
          return { referenceCopied: s.r.createBuilder().build(o) };
        };
      })(l || (l = {}));
      const c = new r.y(n.h.create([]), l.createFactory(), 1, 5e3);
    },
    70315: (e, t, i) => {
      i.d(t, { T: () => r });
      var a = i(27378);
      if (3075 == i.j) var s = i(65242);
      function r() {
        return a.createElement(
          "div",
          { style: { display: "flex", justifyItems: "flex-start", gap: "8px" } },
          a.createElement("div", null, s.m),
          a.createElement("p", { style: { fontSize: "12px", color: "#6D758D" } }, "One moment, checking updated text ...")
        );
      }
    },
    65242: (e, t, i) => {
      i.d(t, { m: () => s });
      var a = i(27378);
      const s = a.createElement(
        "svg",
        { width: "28", height: "36", viewBox: "0 0 28 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        a.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.753 19.0813C22.1893 19.0134 23.798 29.1843 24.0765 31.8872C24.1134 32.2449 23.8297 32.54 23.4701 32.54L4.0362 32.54C3.67648 32.54 3.39275 32.245 3.43014 31.8872C3.71078 29.2023 5.32414 19.1492 13.753 19.0813ZM13.753 16.3491C17.5002 16.4275 24.1112 10.446 24.1307 2.89034C24.1362 0.755411 22.4849 1.34762 20.1116 2.19872C18.4408 2.79791 16.4122 3.52541 14.352 3.52001C12.1688 3.51428 9.95019 2.84258 8.08428 2.27767C5.36044 1.45302 3.38826 0.855938 3.37536 2.89034C3.33347 9.50154 10.0059 16.2707 13.753 16.3491Z",
          fill: "#EDF5FF"
        }),
        a.createElement("path", {
          d: "M13.753 19.0813L13.7555 19.3961L13.753 19.0813ZM24.1307 2.89034L24.4455 2.89115L24.1307 2.89034ZM13.753 16.3491L13.7596 16.0343L13.753 16.3491ZM20.1116 2.19872L20.0054 1.90239L20.1116 2.19872ZM14.352 3.52001L14.3528 3.20519L14.352 3.52001ZM8.08428 2.27767L7.99306 2.57898L8.08428 2.27767ZM3.37536 2.89034L3.06056 2.88834L3.37536 2.89034ZM3.43014 31.8872L3.74325 31.9199L3.43014 31.8872ZM24.3897 31.855C24.2491 30.4902 23.7722 27.2249 22.2533 24.3001C20.7297 21.3661 18.1289 18.7312 13.7504 18.7665L13.7555 19.3961C17.8134 19.3634 20.2352 21.7801 21.6946 24.5903C23.1587 27.4097 23.6255 30.5813 23.7634 31.9195L24.3897 31.855ZM4.0362 32.8549L23.4701 32.8549L23.4701 32.2252L4.0362 32.2252L4.0362 32.8549ZM13.7504 18.7665C9.37936 18.8017 6.78114 21.4381 5.25692 24.3571C3.73746 27.2671 3.25878 30.4984 3.11703 31.8545L3.74325 31.9199C3.88214 30.5911 4.35046 27.4534 5.81505 24.6486C7.27487 21.8528 9.69774 19.4288 13.7555 19.3961L13.7504 18.7665ZM23.8159 2.88953C23.8064 6.57564 22.1878 9.88931 20.1027 12.2753C19.0609 13.4675 17.9086 14.4209 16.7943 15.0697C15.6752 15.7212 14.6175 16.0523 13.7596 16.0343L13.7465 16.6638C14.7622 16.6851 15.9361 16.2979 17.1111 15.6138C18.2908 14.927 19.495 13.9275 20.5768 12.6896C22.7388 10.2156 24.4355 6.76071 24.4455 2.89115L23.8159 2.88953ZM20.2179 2.49506C20.8138 2.28135 21.3522 2.08842 21.8294 1.94983C22.3101 1.81025 22.7019 1.73417 23.0077 1.73954C23.3064 1.74477 23.4833 1.82579 23.5961 1.96239C23.719 2.11124 23.8172 2.38657 23.8159 2.88953L24.4455 2.89115C24.447 2.32665 24.3408 1.87541 24.0815 1.56144C23.8121 1.23523 23.4288 1.11719 23.0187 1.11C22.6157 1.10294 22.1501 1.20107 21.6538 1.34518C21.1541 1.49029 20.5961 1.69055 20.0054 1.90239L20.2179 2.49506ZM14.3512 3.83482C16.4756 3.8404 18.5559 3.0911 20.2179 2.49506L20.0054 1.90239C18.3258 2.50472 16.3488 3.21043 14.3528 3.20519L14.3512 3.83482ZM7.99306 2.57898C9.85098 3.14147 12.114 3.82895 14.3512 3.83482L14.3528 3.20519C12.2236 3.19961 10.0494 2.54369 8.1755 1.97636L7.99306 2.57898ZM3.69017 2.89233C3.6931 2.42976 3.80694 2.18451 3.95006 2.04891C4.09608 1.91056 4.33403 1.82756 4.71395 1.82668C5.09238 1.82579 5.56475 1.90666 6.1258 2.04507C6.68437 2.18286 7.30993 2.37216 7.99306 2.57898L8.1755 1.97636C7.49671 1.77086 6.8543 1.57628 6.27661 1.43376C5.70139 1.29186 5.16918 1.19598 4.71248 1.19705C4.25727 1.19811 3.82951 1.29575 3.517 1.59185C3.2016 1.8907 3.06407 2.33371 3.06056 2.88834L3.69017 2.89233ZM13.7596 16.0343C12.9064 16.0165 11.8452 15.6128 10.7164 14.8789C9.59395 14.149 8.43258 13.1106 7.38401 11.8666C5.28175 9.37254 3.66986 6.09768 3.69017 2.89233L3.06056 2.88834C3.03897 6.2942 4.74232 9.70951 6.90259 12.2724C7.98527 13.5569 9.19198 14.6387 10.3732 15.4067C11.548 16.1706 12.7261 16.6425 13.7465 16.6638L13.7596 16.0343ZM4.0362 32.2252C3.85034 32.2252 3.7266 32.0793 3.74325 31.9199L3.11703 31.8545C3.05889 32.4107 3.50263 32.8549 4.0362 32.8549L4.0362 32.2252ZM23.7634 31.9195C23.7798 32.0792 23.6556 32.2252 23.4701 32.2252L23.4701 32.8549C24.0037 32.8549 24.4469 32.4106 24.3897 31.855L23.7634 31.9195Z",
          fill: "#1F243C"
        }),
        a.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.1703 13.6849C17.7789 14.966 16.2896 15.8447 14.9816 16.1887V19.1477C23.5373 20.1649 24.1307 32.5404 24.1307 32.5404H3.37537C3.37537 32.5404 3.96598 20.3668 12.463 19.1749V16.1037C11.281 15.707 9.95321 14.852 8.68529 13.6849C9.94457 12.3355 16.5556 12.3355 19.1703 13.6849Z",
          fill: "#F9EA9E"
        }),
        a.createElement("path", {
          d: "M14.9816 16.1887L14.9015 15.8842L14.6667 15.946V16.1887H14.9816ZM19.1703 13.6849L19.3836 13.9165L19.7148 13.6116L19.3147 13.4051L19.1703 13.6849ZM14.9816 19.1477H14.6667V19.4273L14.9444 19.4603L14.9816 19.1477ZM24.1307 32.5404V32.8552H24.461L24.4452 32.5253L24.1307 32.5404ZM3.37537 32.5404L3.06092 32.5252L3.04491 32.8552H3.37537V32.5404ZM12.463 19.1749L12.5068 19.4867L12.7779 19.4487V19.1749H12.463ZM12.463 16.1037H12.7779V15.8772L12.5632 15.8052L12.463 16.1037ZM8.68529 13.6849L8.45513 13.4701L8.23887 13.7018L8.47208 13.9165L8.68529 13.6849ZM15.0616 16.4931C16.4336 16.1324 17.9668 15.2209 19.3836 13.9165L18.9571 13.4533C17.5909 14.7111 16.1457 15.557 14.9015 15.8842L15.0616 16.4931ZM15.2964 19.1477V16.1887H14.6667V19.1477H15.2964ZM24.1307 32.5404C24.4452 32.5253 24.4452 32.5252 24.4452 32.525C24.4452 32.5249 24.4451 32.5246 24.4451 32.5244C24.4451 32.5238 24.4451 32.5231 24.445 32.5222C24.4449 32.5205 24.4448 32.5179 24.4446 32.5147C24.4443 32.5081 24.4438 32.4987 24.443 32.4863C24.4416 32.4617 24.4393 32.4257 24.436 32.379C24.4294 32.2855 24.4186 32.1494 24.4019 31.9764C24.3684 31.6303 24.311 31.1363 24.2151 30.5408C24.0236 29.3511 23.6777 27.7504 23.059 26.1142C21.8265 22.8542 19.4729 19.3646 15.0187 18.8351L14.9444 19.4603C19.0459 19.9479 21.267 23.1547 22.4701 26.3368C23.0692 27.9216 23.4064 29.4784 23.5935 30.6409C23.687 31.2215 23.7428 31.7023 23.7752 32.037C23.7914 32.2043 23.8017 32.3351 23.8079 32.4234C23.8111 32.4676 23.8132 32.5012 23.8145 32.5234C23.8152 32.5346 23.8156 32.5429 23.8159 32.5482C23.816 32.5509 23.8161 32.5529 23.8162 32.5541C23.8162 32.5547 23.8163 32.5551 23.8163 32.5554C23.8163 32.5555 23.8163 32.5555 23.8163 32.5556C23.8163 32.5556 23.8163 32.5555 24.1307 32.5404ZM3.37537 32.8552H24.1307V32.2256H3.37537V32.8552ZM12.4193 18.8632C7.99959 19.4831 5.66316 22.9612 4.43842 26.1931C3.82383 27.8149 3.48002 29.3957 3.28966 30.5693C3.19439 31.1567 3.13732 31.6435 3.10402 31.9844C3.08736 32.1549 3.07664 32.289 3.07006 32.381C3.06677 32.427 3.06451 32.4624 3.06306 32.4867C3.06234 32.4988 3.06182 32.5082 3.06147 32.5146C3.0613 32.5178 3.06117 32.5203 3.06108 32.5221C3.06103 32.523 3.061 32.5237 3.06097 32.5242C3.06096 32.5244 3.06094 32.5247 3.06094 32.5248C3.06093 32.525 3.06092 32.5252 3.37537 32.5404C3.68981 32.5557 3.68981 32.5557 3.68981 32.5558C3.68981 32.5557 3.68981 32.5557 3.68982 32.5556C3.68983 32.5553 3.68985 32.5549 3.68988 32.5543C3.68994 32.5531 3.69004 32.5512 3.69018 32.5486C3.69047 32.5433 3.69092 32.5352 3.69158 32.5242C3.69288 32.5024 3.69498 32.4693 3.69809 32.4259C3.7043 32.339 3.71457 32.2103 3.73066 32.0456C3.76285 31.7161 3.81831 31.2426 3.91117 30.6701C4.09709 29.5239 4.432 27.9868 5.02719 26.4162C6.22203 23.2632 8.42943 20.0586 12.5068 19.4867L12.4193 18.8632ZM12.1482 16.1037V19.1749H12.7779V16.1037H12.1482ZM8.47208 13.9165C9.76014 15.1022 11.1254 15.9868 12.3629 16.4021L12.5632 15.8052C11.4366 15.4271 10.1463 14.6019 8.8985 13.4533L8.47208 13.9165ZM19.3147 13.4051C17.9391 12.6952 15.5709 12.358 13.4195 12.358C12.3366 12.358 11.2887 12.4433 10.425 12.6172C9.99323 12.7042 9.60067 12.8146 9.26998 12.9511C8.94292 13.0862 8.65579 13.2551 8.45513 13.4701L8.91545 13.8997C9.02961 13.7773 9.22454 13.6511 9.51027 13.5331C9.79237 13.4166 10.1433 13.3162 10.5493 13.2345C11.3611 13.071 12.3654 12.9877 13.4195 12.9877C15.5421 12.9877 17.7868 13.3252 19.026 13.9646L19.3147 13.4051Z",
          fill: "#1F243C"
        }),
        a.createElement("rect", {
          x: "0.5",
          y: "1.00195",
          width: "26.4444",
          height: "4.40741",
          rx: "2.2037",
          fill: "#638EEB",
          stroke: "#1F243C",
          strokeWidth: "0.62963"
        }),
        a.createElement("rect", {
          x: "26.9445",
          y: "35.002",
          width: "26.4444",
          height: "4.4074",
          rx: "2.2037",
          transform: "rotate(-180 26.9445 35.002)",
          fill: "#638EEB",
          stroke: "#1F243C",
          strokeWidth: "0.62963"
        })
      );
    },
    45854: (e, t, i) => {
      i.d(t, { I: () => c, O: () => a });
      var a,
        s = i(27378),
        r = i(50474),
        n = i(88056),
        o = i(19429),
        l = i(35407);
      !(function (e) {
        (e.Context = s.createContext(n.Y.invariantContent("AssistantTextResources"))),
          (e.holder = o.VF(() => ({
            setGoalsTooltip: "Set goals to get tailored writing suggestions",
            proofitTooltip: "Expert writing help"
          })));
      })(a || (a = {}));
      const c = l.Pj(l.GG({ denali: r.m.holder, assistant: a.holder }))(() => ({ denali: {} }));
    },
    18430: (e, t, i) => {
      i.d(t, { t: () => B });
      var a = i(57050),
        s = i(67534),
        r = i(7604),
        n = i(89456),
        o = i(14315),
        l = i(70063),
        c = i(32385),
        d = i(55649),
        u = i(32952),
        p = i(85985),
        m = i(77176),
        g = i(93508);
      class h {
        constructor() {
          (this._mapByHighlightId = new Map()),
            (this._mapByAlertId = new Map()),
            (this._highlightDataChanged = new u.xQ()),
            (this.highlightDataChanged = this._highlightDataChanged);
        }
        getByHighlightId(e) {
          return this._mapByHighlightId.get(e);
        }
        getByAlertId(e) {
          const t = this._mapByAlertId.get(e) || new Set();
          return Array.from(t)
            .map((e) => this._mapByHighlightId.get(e))
            .filter((e) => !!e);
        }
        get(e) {
          return this._mapByHighlightId.get(e);
        }
        has(e) {
          return this._mapByHighlightId.has(e);
        }
        set(e, t) {
          this._mapByHighlightId.set(e, t);
          const i = this._mapByAlertId.get(t.alertId) || new Set();
          i.add(e), this._mapByAlertId.set(t.alertId, i), this._highlightDataChanged.next(e);
        }
        delete(e) {
          const t = this._mapByHighlightId.get(e);
          if (t) {
            const i = this._mapByAlertId.get(t.alertId);
            void 0 !== i && (i.delete(e), 0 === i.size && this._mapByAlertId.delete(t.alertId)), this._mapByHighlightId.delete(e);
          }
          this._highlightDataChanged.next(e);
        }
        forEach(e) {
          this._mapByHighlightId.forEach(e);
        }
        getHighlightDataObs(e) {
          return this._highlightDataChanged.pipe(
            p.h((t) => t === e),
            m.U(() => this.getByHighlightId(e)),
            g.O(this.getByHighlightId(e))
          );
        }
      }
      class v {
        constructor(e, t, i, a, s = () => l.E9.zero, r = d.Y.create("DenaliHighlightsUpdater")) {
          (this._denaliHighlights = e),
            (this._getFluidHighlights = t),
            (this._getTextMap = i),
            (this._getParentRect = a),
            (this._getParentScroll = s),
            (this._log = r);
        }
        register(e, t, i, a) {
          if (null !== e) {
            if (this._denaliHighlights.has(e)) return this.update(e, t, i, a);
            {
              const s = new o.Fd(e, t, this._getFluidHighlights(), this._getParentRect, this._getParentScroll),
                r = { id: e, alertId: a.alertId, mark: s, visualization: i };
              this._denaliHighlights.set(e, r);
              const n = this._getTextMap().getPlainText();
              return this._getFluidHighlights().addHighlight(e, (0, c.rX)((0, c.mp)(s.range), n), a), r;
            }
          }
          return null;
        }
        remove(e) {
          this._denaliHighlights.has(e)
            ? (this._getFluidHighlights().removeHighlights([e]), this._denaliHighlights.delete(e))
            : this._log.warn(`can't remove mark #${e}, doesn't exist`);
        }
        update(e, t, i, a) {
          const s = this._denaliHighlights.get(e);
          if (s) {
            this._denaliHighlights.set(e, { ...s, visualization: i });
            const r = this._getTextMap().getPlainText();
            return this._getFluidHighlights().updateHighlight(e, (0, c.rX)(t.meta.range(), r), a), s;
          }
          return this._log.warn("cannot update not existing highlight", e), null;
        }
        clearAll() {
          this._denaliHighlights.forEach((e) => {
            this._getFluidHighlights().removeHighlights([e.id]);
          });
        }
      }
      var f = i(88355),
        b = i(98805),
        w = i(25938),
        S = i(8709),
        y = i(59443),
        E = i(24645),
        C = i(51374),
        k = i(9922),
        _ = i(24209),
        A = i(40151),
        I = i(76974),
        x = i(95300),
        T = i(77150),
        M = i(80900),
        R = i(50628),
        P = i(95195),
        L = i(5114),
        F = i(22232),
        D = i(71249),
        N = i(95574);
      class B {
        constructor(e, t, i, s, l, c, g = d.Y.create("DenaliViewAdapter"), f, b) {
          (this._highlights = e),
            (this._textObserver = t),
            (this._replacementService = i),
            (this._layout = s),
            (this._scroller = l),
            (this._selectedHighlightsTracker = c),
            (this._log = g),
            (this._requestAwaitService = f),
            (this._formattingService = b),
            (this._subs = new k.w.Keeper()),
            (this._disposed = !1),
            (this._highlightedAlertId = null),
            (this._marks = new Map()),
            (this.markChangeApplied = new u.xQ()),
            (this._highlightsDataStore = new h()),
            (this._highlightUpdater = new v(
              this._highlightsDataStore,
              () => this._highlights,
              () => this._textObserver.getTextSource(),
              () => {
                const e = this._layout.textField.rect.getApproximate();
                return n.Pf.create({ ...e.client, ...e.size });
              },
              () => this._layout.textField.scroll.getApproximate()
            )),
            (this.highlightHoverProvider = {
              getHoveredStateBehavior: (e) =>
                this._highlightsDataStore
                  .getHighlightDataObs(e)
                  .pipe(
                    m.U((e) =>
                      e && e.visualization.type === o.sO.Change.VisualState.Type.highlighted
                        ? {
                            [o.sO.Change.VisualState.Source.sidebar]: r.pc.hoveredNeedsAttention,
                            [o.sO.Change.VisualState.Source.text]: r.pc.hovered,
                            [o.sO.Change.VisualState.Source.api]: this._highlightedAlertId === e.alertId ? r.pc.hovered : r.pc.none
                          }[e.visualization.source]
                        : r.pc.none
                    )
                  )
            }),
            (this._updateContentsBuffer = new u.xQ()),
            (this._flushUpdater = new u.xQ()),
            (this.getContents = (e, t) => {
              if ((this._log.trace(`getContents, ${String(e)}, ${String(t)}`), this._formattingService)) {
                const i = this._textObserver.getTextSource().getRichText();
                return w.RI.unsafeRes(void 0 !== e ? i.slice(e, void 0 !== t ? e + t : void 0) : i);
              }
              {
                const i = void 0 !== e ? this.getText().slice(e, void 0 !== t ? e + t : void 0) : this.getText();
                return w.RI.resFromText(i);
              }
            }),
            (this.changes = _.T(
              (0, a.zG)(
                w.RI.res(this.getContents().delta),
                P.fold(
                  () => A.E,
                  (e) => I.of(e)
                )
              ),
              this._textObserver.contentChanges.async.pipe(
                p.h((e) => e.changes.length > 0),
                m.U(({ deltaChange: e }) => e)
              )
            )),
            (this.activeMarks = new x.X(L.none)),
            (this.contentUpdated = new u.xQ()),
            (this.hoveredMarks = new x.X(L.none)),
            (this.textChangedAfterPaste = new u.xQ()),
            (this.activeWord = new x.X(L.none)),
            (this.clickedWord = new x.X(L.none)),
            (this.ongoingSelection = new x.X(!1)),
            this._log.info(`${B.name} created`),
            this._subs.push(this._subscribeToContentUpdates(), this._subscribeToSelectedHighlight(), this._trackFocusedAlert());
        }
        _trackFocusedAlert() {
          return this._highlightsDataStore.highlightDataChanged
            .pipe(
              m.U((e) => this._highlightsDataStore.getByHighlightId(e)),
              p.h((e) => !!e)
            )
            .subscribe((e) => {
              this._highlightedAlertId === e.alertId ||
              e.visualization.type !== o.sO.Change.VisualState.Type.highlighted ||
              (e.visualization.source !== o.sO.Change.VisualState.Source.text &&
                e.visualization.source !== o.sO.Change.VisualState.Source.sidebar)
                ? e.alertId === this._highlightedAlertId &&
                  e.visualization.type === o.sO.Change.VisualState.Type.visible &&
                  ((this._highlightedAlertId = null), this._log.trace(`Mark ${e.id} unfocused - alertId ${e.alertId}`))
                : ((this._highlightedAlertId = e.alertId), this._log.trace(`Mark ${e.id} focused - alertId ${e.alertId}`));
            });
        }
        pushChanges(e, t) {
          this._log.trace("pushChanges", { change: e, source: t }),
            w.RI.isFlush(e)
              ? this._flushUpdater.next()
              : w.RI.isReset(e)
              ? this._log.warn("Got unknown reset")
              : this._updateContents(e.delta, t);
        }
        getText() {
          return (
            this._log.trace("getText"),
            this._formattingService
              ? (0, f.l)(this._textObserver.getTextSource().getRichText(), "")
              : this._textObserver.getTextSource().getPlainText()
          );
        }
        getTextLength() {
          return this._log.trace("getTextLength"), this.getText().length;
        }
        flushChanges() {
          this._log.trace("flushChanges");
        }
        getCursor() {
          return this._log.trace("getCursor"), y.Y1.empty;
        }
        setCursor(e, t, i) {
          return this._log.trace("setCursor", { _index: e, _length: t, _source: i }), P.right(void 0);
        }
        getLastPossibleCursorPosition() {
          return this._log.trace("getLastPossibleCursorPosition"), 0;
        }
        _doMarkAction(e) {
          const t = r.y$.Id.createFromMark(e.id),
            i = e.meta.capiAlertId;
          switch (e.action) {
            case E.v.Change.ActionType.create: {
              const a = this._highlightUpdater.register(t, e, e.meta.visualState, {
                  alertId: i,
                  highlightId: t,
                  highlightColor: e.meta.highlightColor,
                  highlightDisplayFormat: e.meta.highlightDisplayFormat,
                  highlightDisappearOnHoverDelay: e.meta.highlightDisappearOnHoverDelay,
                  highlightLiveliness: null
                }),
                s = (null == a ? void 0 : a.mark) || null;
              return s && this._marks.set(s.id, s), s;
            }
            case E.v.Change.ActionType.update: {
              const a = this._highlightUpdater.update(t, e, e.meta.visualState, {
                  alertId: i,
                  highlightId: t,
                  highlightColor: e.meta.highlightColor,
                  highlightDisplayFormat: e.meta.highlightDisplayFormat,
                  highlightDisappearOnHoverDelay: e.meta.highlightDisappearOnHoverDelay,
                  highlightLiveliness: null
                }),
                s = (null == a ? void 0 : a.mark) || null;
              return s && this._marks.set(s.id, s), s;
            }
            case E.v.Change.ActionType.remove:
              return this._highlightUpdater.remove(t), this._marks.delete(e.id), null;
            default:
              (0, F.vE)(e);
          }
        }
        changeMarks(e) {
          return this._disposed
            ? (this._log.debug("changeMarks called after disposed, returning empty result"), E.v.Change.Result.getEmpty())
            : (this._log.trace("changeMarks", { rawMarks: e }),
              e.reduce((e, t) => {
                switch (t.action) {
                  case E.v.Change.ActionType.create:
                    e.created.set(t.id, P.fromNullable(new Error("Cannot create mark"))(this._doMarkAction(t)));
                    break;
                  case E.v.Change.ActionType.update:
                    e.updated.set(t.id, P.fromNullable(new Error("Cannot update mark"))(this._doMarkAction(t)));
                    break;
                  case E.v.Change.ActionType.remove:
                    this._doMarkAction(t), e.removed.set(t.id, P.right(void 0));
                }
                return e;
              }, E.v.Change.Result.getEmpty()));
        }
        scrollToMark(e, t) {
          var i;
          const a = null !== (i = this._marks.get(e)) && void 0 !== i ? i : null;
          return (
            this._log.trace("scrollToMark", { markId: e, mark: a, opts: t }),
            a ? this._scroller.scrollToMark(a, t) : (this._log.warn(`Tried to scroll to nonexistent mark with id: ${e}`), A.E)
          );
        }
        _subscribeToContentUpdates() {
          return this._updateContentsBuffer
            .pipe(
              T.R(() => _.T(M.H((0, b.Xd)(20)), this._flushUpdater).pipe(R.P())),
              p.h((e) => e.length > 0),
              m.U((e) => e.reduce((e, t) => e.compose(t), new S.i()))
            )
            .subscribe((e) => {
              const t = this._replacementService.performBatchReplacements((0, s.g)(e)).then(
                () => {
                  const t = (0, s.B)(e);
                  this._formattingService &&
                    t.length &&
                    (this._log.trace("Have formattings, applying", t),
                    t.forEach((e) => {
                      this._formattingService && this._formattingService.apply(e.range, e.formatting);
                    }));
                },
                () => {
                  this._log.warn("Failed to apply batch replacements");
                }
              );
              this._requestAwaitService && this._requestAwaitService.addRequest(t);
            });
        }
        _subscribeToSelectedHighlight() {
          return this._selectedHighlightsTracker
            .pipe(
              m.U(
                (0, a.ls)(
                  D.UI((e) => {
                    var t;
                    return (0, a.zG)(
                      L.fromNullable(null === (t = this._highlightsDataStore.get(e)) || void 0 === t ? void 0 : t.mark),
                      L.filter((e) => (0, a.zG)(e.range(), P.fold(a.W8, (0, a.ff)(C.x.isEnclosingView))))
                    );
                  }),
                  D.oA
                )
              )
            )
            .subscribe((e) => this.activeMarks.next(L.some(e)));
        }
        _updateContents(e, t) {
          this._updateContentsBuffer.next((0, f.AQ)(e));
        }
        getSelectionRect() {
          throw (this._log.trace("getSelectionRect"), Error("not implemented"));
        }
        setContents(e) {
          this._log.trace("setContents", { _value: e });
        }
        getHTML() {
          return this._log.trace("getHTML"), "";
        }
        getPossibleCursorPosition(e, t) {
          return (
            this._log.trace("getPossibleCursorPosition", { _x: e, _y: t }),
            N.vM(() => {
              throw new Error("Not implemented");
            })
          );
        }
        dispose() {
          this._highlightUpdater.clearAll(), this._subs.dispose(), this._log.info(`${B.name} disposed`), (this._disposed = !0);
        }
      }
    },
    67534: (e, t, i) => {
      i.d(t, { B: () => o, g: () => n });
      var a = i(17528),
        s = i(48015),
        r = i(36991);
      const n = (e) =>
          e
            .reduce(
              ({ actions: e, index: t }, i) => {
                const a = e[0];
                return r.s.isInsertString(i)
                  ? (e.unshift({ pos: { start: t, end: t }, value: i.insert }), { actions: e, index: t })
                  : r.s.isInsertEmbed(i)
                  ? { actions: e, index: t + 1 }
                  : r.s.isRetain(i)
                  ? { actions: e, index: t + i.retain }
                  : r.s.isDelete(i)
                  ? (a && a.pos.start === a.pos.end && a.pos.end === t
                      ? (a.pos = { ...a.pos, end: a.pos.end + i.delete })
                      : e.unshift({ pos: { start: t, end: t + i.delete }, value: "" }),
                    { actions: e, index: t + i.delete })
                  : void (0, s.vE)(i);
              },
              { actions: [], index: 0 }
            )
            .actions.reduce(
              (e, t) => (
                e.length && e[e.length - 1].value && e[e.length - 1].pos.start === t.pos.start
                  ? (e[e.length - 1].value = `${t.value}${e[e.length - 1].value}`)
                  : e.push(t),
                e
              ),
              []
            ),
        o = (e) =>
          e.reduce(
            ({ formattings: e, index: t }, i) =>
              a.m.hasFormatting(i)
                ? r.s.isInsertString(i)
                  ? (e.push({ range: { start: t, end: "\n" === i.insert ? t : t + i.insert.length }, formatting: i.attributes }),
                    { formattings: e, index: t + i.insert.length })
                  : r.s.isInsertEmbed(i)
                  ? { formattings: e, index: t + 1 }
                  : r.s.isRetain(i)
                  ? (e.push({ range: { start: t, end: t + i.retain }, formatting: i.attributes }), { formattings: e, index: t + i.retain })
                  : { formattings: e, index: t }
                : r.s.isInsertString(i)
                ? { formattings: e, index: t + i.insert.length }
                : r.s.isInsertEmbed(i)
                ? { formattings: e, index: t + 1 }
                : r.s.isRetain(i)
                ? { formattings: e, index: t + i.retain }
                : r.s.isDelete(i)
                ? { formattings: e, index: t }
                : void (0, s.vE)(i),
            { formattings: [], index: 0 }
          ).formattings;
    },
    25952: (e, t, i) => {
      i.d(t, { Y: () => p, q: () => m });
      var a = i(57050),
        s = i(41398),
        r = i(77176),
        n = i(93508),
        o = i(5381),
        l = i(42466),
        c = i(73607),
        d = i(66896),
        u = i(5114);
      const p = (e, t) => {
          const i = (0, c.ux)(e.lensState, e.cardsListScrollManager, e.capabilities),
            a = Math.max(600, t.size.height + o.O.headerHeight + o.O.panelHeight);
          return i.pipe(
            (0, s.M)(e.predictionsPreviewViewModel.previewState),
            (0, r.U)(([e, t]) => {
              if (t.kind !== l.fA.visible) return e;
              const i = [t.tone].filter(u.isSome).length;
              return i > 0
                ? e + o.O.predictionsPreviewHeaderHeight + o.O.predictionInsightHeight * i + o.O.predictionInsightBottomMargin
                : e;
            }),
            (0, n.O)(0),
            (0, r.U)((e) => Math.max(e + o.O.headerHeight, a)),
            (0, r.U)((e) => Math.min(e, 750))
          );
        },
        m = (e, t, i) => (s) => {
          const r = e(),
            n = (e) => e * i(),
            o = n(1),
            l = n(2.25);
          return (0, a.zG)(
            t(),
            u.map((e) => e - (0, c.US)(r)),
            u.map((e) => (d.R.isMainLens(r) && s ? e - l - o : e - o)),
            u.map((e) => e - n(1)),
            u.filter((e) => e > 0)
          );
        };
    },
    23167: (e, t, i) => {
      i.d(t, { f: () => o });
      var a = i(95300),
        s = i(2844),
        r = i(66310),
        n = i(7604);
      class o {
        constructor(e) {
          (this._originalHoverProvider = e), (this._assistantHoverProviderSbj = new a.X(null));
        }
        setAssistantHover(e) {
          this._assistantHoverProviderSbj.next(e);
        }
        removeAssistantHover() {
          this._assistantHoverProviderSbj.next(null);
        }
        getHoveredStateBehavior(e) {
          const t = this._originalHoverProvider.getHoveredStateBehavior(e);
          return this._assistantHoverProviderSbj.pipe(
            (0, r.w)((i) => (null == i ? t : (0, s.aj)(t, i.getHoveredStateBehavior(e), (e, t) => (t !== n.pc.none ? t : e))))
          );
        }
      }
    },
    74789: (e, t, i) => {
      i.d(t, { W: () => a });
      const a = (e, t, i) => {
        const a = e.textField.visibleRect.getApproximate();
        let s = (i || 0) - a.client.top;
        (s <= 0 || s >= a.size.height) && (s = a.size.height / 2);
        const r = t.top - s - a.client.top;
        requestAnimationFrame(() => e.textField.scroller.scrollBy({ top: r }));
      };
    },
    26035: (e, t, i) => {
      i.d(t, { t: () => c });
      var a = i(40327),
        s = i(32385),
        r = i(14315),
        n = i(91402),
        o = i(44586),
        l = i(95195);
      function c({ scrollToMarkRect: e, scrollToRange: t }) {
        return {
          scrollToMark: (i, c) =>
            (0, a.pipe)(
              r.Fd.getMarkRect(i),
              l.orElse(() => (t((0, s.mp)(i.range)), r.Fd.getMarkRect(i))),
              l.fold(
                (e) => n._(new Error(`Cannot get mark's rect: ${i.id}: ${e.message}`)),
                (t) =>
                  new o.y((i) => {
                    i.next(void 0), e(t, c);
                  })
              )
            )
        };
      }
    },
    29914: (e, t, i) => {
      i.r(t),
        i.d(t, {
          AssistantController: () => a.AssistantController,
          AssistantControllerImpl: () => Hr,
          AssistantControllerInjectedParams: () => a.AssistantControllerInjectedParams,
          AssistantService: () => Qr,
          AssistantServiceInjectedParams: () => s.AssistantServiceInjectedParams,
          LocalAssistantHighlightCollection: () => r.c
        });
      var a = {};
      i.r(a), i.d(a, { Z: () => Hr });
      var s = {};
      i.r(s), i.d(s, { e: () => Qr });
      var r = i(74564),
        n = i(40327),
        o = i(27378),
        l = i(55649),
        c = i(20236),
        d = i(31528),
        u = i(25952),
        p = i(35214),
        m = i(20641),
        g = i(48015),
        h = i(68169),
        v = i(46680),
        f = i(72578),
        b = i(39758),
        w = i(72833);
      const S = "Assistant",
        y = v.i.WARN;
      const E = (e) => (t) => {
        switch (t.level) {
          case v.i.DEBUG:
            e(t.logger).debug(t.message);
            break;
          case v.i.ERROR:
            const i = ((e) => {
              const t = (0, m.Tb)(),
                i = ((e) => e.replace(/^.*\./, ""))(e);
              return i === h.SC.loggerName ? t.assistant.alertManagerError.bind(t) : null;
            })(t.logger);
            null !== i && i(t.exception, t.extra, t.message), e(t.logger).error(t.message);
            break;
          case v.i.FATAL:
            e(t.logger).fatal(t.message);
            break;
          case v.i.INFO:
            e(t.logger).info(t.message);
            break;
          case v.i.TRACE:
            e(t.logger).trace(t.message);
            break;
          case v.i.WARN:
            e(t.logger).warn(t.message);
            break;
          case v.i.OFF:
            break;
          default:
            return (0, g.vE)(t.level);
        }
        return Promise.resolve();
      };
      var C = i(22027),
        k = i(92693),
        _ = i(57050),
        A = i(85441),
        I = i(95294),
        x = i(7737),
        T = i(26109),
        M = i(59881),
        R = i(89131),
        P = i(62623),
        L = i(33194),
        F = i(9205),
        D = i(14601),
        N = i(77176),
        B = i(28043),
        V = i(2844),
        H = i(98403),
        O = i(23239);
      class U {
        constructor(e, t, i, a) {
          if (
            ((this._cardsViewModel = t),
            (this._subs = new D.w()),
            (this._successReportFooterBulkDismissAlertsCount = O.h.create(0)),
            (this.showBulkDismissFeed = () => {
              this._cardsViewModel.actionEvents.next(
                L.fr.create([{ type: "pushAssistantFeed", feedId: L.D1.AssistantFeed.BULK_DISMISS_CARD_FEED_ID }])
              );
            }),
            a.isGateEnabled(F.K.SduiBulkDismiss))
          ) {
            const t = e.pipe(
              N.U(L.D1.StrongAlertRef.getStrongAlertRefBulkDismissAlertIds),
              N.U((e) => e.size),
              B.x()
            );
            this._subs.add(
              V.aj([t, i.pipe(B.x())])
                .pipe(N.U(([e, t]) => (t ? e : 0)))
                .subscribe(H.wW(this._successReportFooterBulkDismissAlertsCount))
            );
          }
        }
        get successReportFooterBulkDismissAlertsCount() {
          return this._successReportFooterBulkDismissAlertsCount.view();
        }
        dispose() {
          this._subs.unsubscribe();
        }
      }
      var j,
        G = i(74660),
        W = i(16892),
        z = i(48521),
        q = i(35416),
        K = i(6100),
        Z = i(5114),
        X = i(45701),
        Y = i(8125),
        Q = i(34217),
        J = i(52976),
        $ = i(98182),
        ee = i(74813),
        te = i(60984),
        ie = i(52726);
      !(function (e) {
        const t = (e) => (0, n.pipe)(q.In.getActiveItemOfType(a)(e), Z.chain(J.P.Capabilities.toAlertItem));
        function i(e) {
          return q.nL.Items.mapper((e) => e.kind, { [J.P.Kind]: e });
        }
        function a(e) {
          return e.kind === J.P.Kind;
        }
        function s() {
          return { viewState: () => (e) => (e.kind, J.P.Kind, { view: e, kind: "alertRefSDUI" }) };
        }
        (e.isSelectableItem = a),
          (e.getActiveItemWithAlert = function (e) {
            return t(e);
          }),
          (e.getActiveAlignableItem = (e) => t(e)),
          (e.getActiveFocusableItem = (e) => t(e)),
          (e.checksFeedItemsMapper = i),
          (e.isAlertRefSDUI = a),
          (e.defaultOrd = (t) =>
            (0, p.fold)(X.getMonoid())([
              (0, n.pipe)(X.ordBoolean, X.contramap((0, Y.ff)(J.P.Item.isBulkAcceptSDUI))),
              (0, n.pipe)(X.ordBoolean, X.contramap(J.P.Item.isBulkDismissSDUI)),
              e.getByActiveAlertPositionOrd(t)
            ])),
          (e.sduiToChecksFeedOrd = function (t) {
            return (i) =>
              X.fromCompare((a, s) =>
                $.e.isSDUIItem(a) && $.e.isSDUIItem(s) ? $.e.getOrd(i).compare(a, s) : e.getByActiveAlertPositionOrd(t).compare(a, s)
              );
          }),
          (e.getByActiveAlertPositionOrd = (e) =>
            (0, p.fold)(X.getMonoid())([
              (0, n.pipe)(
                G.h$.ordHRange,
                X.contramap((t) =>
                  (0, n.pipe)(
                    e.hasActiveAlert(t),
                    Z.map((e) => e.alert),
                    Z.getOrElse(() => ({ getHighlightRanges: () => [{ start: 0, end: 0 }] }))
                  )
                )
              )
            ])),
          (e.item = (e) => Q.UI.Union.make("kind", { alertRefSDUI: ee.p.SingleCard(e), empty: te.Q.Empty })),
          (e.viewState = s),
          (e.createCardListFlow = ie.p),
          (e.listItemOrd = (e) => X.contramap((e) => e.cell.item.view)(e).compare);
        const r = { equals: (e, t) => e.kind === t.kind && W.s.eqById.equals(e, t) },
          o = (e) => ({
            equals: (t, i) => {
              const a = { [J.P.Kind]: e };
              return (
                r.equals(t, i) &&
                (function (e, t) {
                  return (i, a) => t[e(i)].equals(i, a);
                })((e) => e.kind, a)(t, i)
              );
            }
          });
        function l() {
          return { changePosition: (e) => i(J.P.Capabilities.changePosition(e)) };
        }
        function c() {
          return {
            completeTransition: (e) => i(J.P.Capabilities.animatable.completeTransition(e)),
            transitionTo: (e) => i(J.P.Capabilities.animatable.transitionTo(e)),
            changeVisualState: (e) => i(J.P.Capabilities.animatable.changeVisualState(e))
          };
        }
        function d() {
          return {
            select: (e, t) => i(J.P.Capabilities.select.select(e, t)),
            selectByAlert: (e, t, a) => i(J.P.Capabilities.select.selectByAlert(e, t, a)),
            unselect: (e, t) => i(J.P.Capabilities.select.unselect((0, _.MZ)(e), t))
          };
        }
        function u() {
          return {
            removeAlertFromItem: (e, t) =>
              i((i) => (i.id === L.D1.SuccessReport.ID ? i : J.P.Capabilities.removeAlert.removeAlertFromItem(e, t)(i)))
          };
        }
        function m() {
          return { remove: (e, t) => i(J.P.Capabilities.remove.remove(e, t)) };
        }
        function g() {
          return { updateWithAlerts: (e) => i(_.yR) };
        }
        function h() {
          return { nextAlert: i(() => Z.none), prevAlert: i(() => Z.none) };
        }
        function v() {
          return { updateUserInput: (e) => i(_.yR) };
        }
        (e.equatable = { structEq: o(J.P.eq), idEq: o(r), visualStateEq: o(J.P.eq) }),
          (e.changePosition = l),
          (e.disposable = { isScheduledToDispose: i(J.P.Capabilities.disposable.isScheduledToDispose) }),
          (e.hidable = { isHidden: i(z.o.isHidden) }),
          (e.animatableItem = c),
          (e.hasAlertsQueries = {
            isSelectableByAlert: (e) => i(J.P.Capabilities.hasAlerts.isSelectableByAlert(e)),
            hasAlert: (e) => i(J.P.Capabilities.hasAlerts.hasAlert(e)),
            hasActiveAlert: i(J.P.Capabilities.hasAlerts.hasActiveAlert)
          }),
          (e.changePositionStrategyQueries = { useReferenceHeightOnRemove: i(_.jv) }),
          (e.select = d),
          (e.removeAlert = u),
          (e.remove = m),
          (e.updateWithAlert = g),
          (e.releaseAlert = () => K.v.Capabilities.getAlertReleaser({ ...u(), ...e.disposable })),
          (e.unselectable = () => K.v.Capabilities.getUnselectable(q.In.getActiveItem, { ...d(), ...e.disposable })),
          (e.selectableByAlert = () =>
            K.v.Capabilities.getSelectableByAlert(q.In.getActiveItem, {
              ...e.hasAlertsQueries,
              ...d(),
              ...K.v.Capabilities.getHasChecksFeed(),
              ...e.disposable
            })),
          (e.selectableById = () => K.v.Capabilities.getSelectableById(q.In.getActiveItem, { ...d(), ...e.disposable })),
          (e.updateMeta = () => ({ updateMeta: K.v.Capabilities.getMetaUpdatable().updateMeta })),
          (e.animatableFeed = (e) => K.v.Capabilities.getAnimatable(e, { ...u(), ...c(), ...K.v.Capabilities.getHasChecksFeed() })),
          (e.hasPriorityToggle = () => K.v.WithPriority.getHasPriorityToggle({ ...c(), ...e.hasAlertsQueries, ...e.disposable })),
          (e.alignable = { isValidToAlign: i((t) => !e.disposable.isScheduledToDispose(t)) }),
          (e.alertIterator = h),
          (e.itemReleaser = () => K.v.Capabilities.getItemReleaser()),
          (e.hasAlerts = K.v.Capabilities.getHasAlerts),
          (e.hasUserInput = v),
          (e.verifiable = () => K.v.Capabilities.getVerifiable(e.disposable)),
          (e.cloneable = () => ({ clone: i(W.s.Capabilities.getPojoCloneable().clone) }));
        const f = {
          getFeatures: i((e) =>
            J.P.Item.isBulkDismissSDUI(e) ? [J.P.Features.BulkDismiss] : J.P.Item.isBulkAcceptSDUI(e) ? [J.P.Features.BulkAccept] : []
          )
        };
        e.getCapabilities = function (t, i) {
          return {
            ...s(),
            ...e.disposable,
            ...e.hidable,
            ...e.equatable,
            ...v(),
            ...e.cloneable(),
            ...l(),
            ...c(),
            ...d(),
            ...m(),
            ...u(),
            ...g(),
            ...e.hasAlertsQueries,
            ...e.changePositionStrategyQueries,
            ...e.alignable,
            ...e.releaseAlert(t),
            ...e.unselectable(t),
            ...e.selectableByAlert(t),
            ...e.selectableById(t),
            ...e.updateMeta(t),
            ...e.animatableFeed(t),
            ...e.hasPriorityToggle(t),
            ...e.itemReleaser(),
            ...f,
            ...e.verifiable(),
            ...e.cloneable(),
            ...e.hasAlerts(h(), i, () => e.isSelectableItem, { ...e.hasAlertsQueries, ...e.disposable })
          };
        };
      })(j || (j = {}));
      var ae = i(60797),
        se = i(41398),
        re = i(71249);
      class ne {
        constructor(e, t) {
          this._sub = new D.w();
          const i = (0, n.pipe)(
            e,
            N.U(
              (0, _.ls)(
                (e) => e.actions,
                re.Ew((e) => "openCreateSnippetModal" === e.type)
              )
            ),
            ae.oA
          );
          this._sub.add(
            (0, n.pipe)(i, se.M(t.pipe(N.U(Z.getOrElseW(() => null))))).subscribe(([e, t]) => {
              t && t.showSnippetsEditor(e.snippetContent);
            })
          );
        }
        dispose() {
          this._sub.unsubscribe();
        }
      }
      var oe,
        le = i(86061);
      class ce {
        constructor(e, t) {
          (this._domain = e), (this._gnar = t);
        }
        getDomain() {
          return this._domain;
        }
        submitFeedback(e) {
          this._gnar.assistantFeedbackSubmitButtonClick("single_card_assistant", e.domain, e.text, (0, le.dK)(e) ? e.score : void 0);
        }
      }
      !(function (e) {
        (e.AccountCreation = "accountCreation"), (e.Tour = "tour"), (e.TryWebsite = "tryWebsite"), (e.ViewApps = "viewApps");
      })(oe || (oe = {}));
      const de = { completedItems: [] };
      var ue, pe;
      !(function (e) {
        (e.installed = "installed"), (e.notInstalled = "notInstalled");
      })(ue || (ue = {})),
        (function (e) {
          (e.macExtension = "macExtension"),
            (e.windowsExtension = "windowsExtension"),
            (e.mobileIOS = "mobile-ios"),
            (e.mobileAndroid = "mobile-android");
        })(pe || (pe = {}));
      class me {
        constructor(e, t, i, a) {
          (this.anonymous = e),
            (this.state = t),
            (this.gnar = i),
            (this._dapiActions = a),
            (this.actions = {
              updateChecklistState: (e) => {
                var t;
                this._dapiActions.setGetStartedChecklistState(
                  ((t = e),
                  encodeURI(JSON.stringify({ ...t, completedItems: t.completedItems.filter((e) => null != e && "string" == typeof e) })))
                );
              }
            });
        }
        get userClientState() {
          return (e = this.state.user), new Map(Object.values(pe).map((t) => [t, e.groups.includes(t) ? ue.installed : ue.notInstalled]));
          var e;
        }
        get isStudent() {
          var e, t;
          return (
            "school" ===
            (null === (t = null === (e = this.state.user) || void 0 === e ? void 0 : e.customFields) || void 0 === t
              ? void 0
              : t.frontend_role)
          );
        }
        get checklistState() {
          return this.state.dapi["DN:getStartedChecklistSettings"]
            ? ((e) => {
                try {
                  const t = decodeURI(e),
                    i = JSON.parse(t);
                  if ("completedItems" in i && Array.isArray(i.completedItems)) {
                    const e = i.completedItems.filter((e) => null !== e && "string" == typeof e);
                    return { ...i, completedItems: e };
                  }
                } catch (e) {
                  return de;
                }
                return de;
              })(this.state.dapi["DN:getStartedChecklistSettings"])
            : de;
        }
      }
      var ge,
        he = i(14532);
      !(function (e) {
        (e.correct = "correct"), (e.incorrect = "incorrect"), (e.neutral = "neutral");
      })(ge || (ge = {}));
      class ve {
        constructor(e, t, i, a, s) {
          (this._learnMoreInfo = O.h.create(null)), (this._sub = new D.w());
          const r = (0, n.pipe)(
            a,
            N.U(
              (0, _.ls)(
                (e) => e.actions,
                re.Ew((e) => "openLearnMore" === e.type || ("switchView" === e.type && "learn-more" === e.selected))
              )
            ),
            ae.oA
          );
          this._sub.add(
            (0, n.pipe)(
              r,
              se.M(e),
              N.U(([e, a]) => {
                let r = null;
                if (q.nL.hasItems(a)) {
                  const o = (0, n.pipe)(
                      s(a.currentLens),
                      Z.getOrElseW(() => null)
                    ),
                    l = o
                      ? (0, n.pipe)(
                          t.getById(o.activeAlert.id),
                          Z.getOrElseW(() => null)
                        )
                      : null,
                    d = (0, n.pipe)(
                      Z.fromNullable(l),
                      Z.chain(G.bZ.getRawId),
                      Z.getOrElseW(() => null)
                    ),
                    u = d ? i.alerts.getAlertById(d) : null;
                  u &&
                    c.S.isCapiAlert(u) &&
                    (r = {
                      title: u.todo,
                      showTitleOnContent: "switchView" === e.type,
                      details: u.details || u.explanation,
                      examples: (0, n.pipe)(
                        he.J.parse(u.examples, u.point.includes("Italicization")),
                        Z.map((e) =>
                          e
                            .map((e) =>
                              e.map((e) => ({
                                type: e.color === he.J.Color.green ? ge.correct : e.color === he.J.Color.red ? ge.incorrect : ge.neutral,
                                title: (0, n.pipe)(
                                  e.title,
                                  Z.map((e) => `${e}:`),
                                  Z.getOrElseW(() => null)
                                ),
                                text: e.text,
                                useItalicText: !e.hasItalic
                              }))
                            )
                            .flat()
                        ),
                        Z.getOrElseW(() => [])
                      )
                    });
                }
                return r;
              })
            ).subscribe(H.wW(this._learnMoreInfo))
          );
        }
        get learnMoreInfo() {
          return this._learnMoreInfo.view();
        }
        dispose() {
          this._sub.unsubscribe();
        }
      }
      var fe = i(32952),
        be = i(9922),
        we = i(2834);
      class Se {
        get header() {
          return this._header;
        }
        constructor(e, t) {
          (this.popView = new fe.xQ()),
            (this._header = O.h.create(Z.none)),
            (this._subs = new be.w.Keeper()),
            this._subs.push(
              (0, _.zG)(
                this.popView,
                se.M(V.aj([t.sduiManager.state, t.sduiFeedManager.feed])),
                N.U(([e, [t, i]]) => L.D1.AssistantFeed.Header.getSelectedViewBackButtonActions(t, i.feedId)),
                ae.oA,
                we.b((t) => e.actionEvents.next(L.fr.create(t)))
              ).subscribe()
            ),
            this._subs.push(t.sduiFeedManager.header.pipe(N.U(Z.of)).subscribe(H.wW(this._header)));
        }
        dispose() {
          this._subs.dispose();
        }
      }
      var ye = i(10389),
        Ee = i(9629),
        Ce = i(66268);
      class ke {
        constructor(e, t, i, a, s, r) {
          (this._cardEvents = e),
            (this._alertProcessor = t),
            (this._pageState = i),
            (this._actions = a),
            (this._experimentClient = s),
            (this._gnar = r),
            (this._subs = new D.w()),
            (this.currentCard = O.h.create(void 0)),
            (this._getExtraFooterOutcomeType = (e) => {
              var t, i;
              if (e) {
                const a = this._alertProcessor.alerts.getAlertById(e.toString());
                if (a && c.S.isCapiAlert(a)) {
                  const e = a.outcome;
                  if (
                    (0, ye.wF)(e) &&
                    !(null === (i = null === (t = this._pageState.get().lifetimeAlertStats) || void 0 === t ? void 0 : t.seen) ||
                    void 0 === i
                      ? void 0
                      : i[e])
                  )
                    return this._actions.setHasSeenSuggestionType(e), e;
                }
              }
            }),
            (this.onShow = () => {
              var e;
              this._gnar.firstAcceptFooterShow(null !== (e = this.extraFooterOutcomeType.get()) && void 0 !== e ? e : "other", "assistant");
            }),
            this._pageState.get().showFirstSuggestionFooters && "test" === this._experimentClient.getTreatment(Ee.p.ProgressiveExposure)
              ? (this._subs.add(
                  this._cardEvents.subscribe((e) => {
                    if (e.type === Ce.eI.Kind.completeTransitionTo) {
                      const t = e.id;
                      ("number" != typeof t && "string" != typeof t) || this.currentCard.set(t);
                    }
                  })
                ),
                (this.extraFooterOutcomeType = this.currentCard.view((e) => this._getExtraFooterOutcomeType(e))))
              : (this.extraFooterOutcomeType = O.h.create(void 0));
        }
        dispose() {
          this._subs.unsubscribe();
        }
      }
      var _e = i(80800),
        Ae = i(66310),
        Ie = i(40151),
        xe = i(95195),
        Te = i(18208),
        Me = i(40330),
        Re = i(79880),
        Pe = i(26393),
        Le = i(85985),
        Fe = i(93508);
      const De = (e) =>
          e.pipe(
            Le.h((e) => "sdui_add" === e.kind || "sdui_update" === e.kind),
            N.U((e) => e.sdui),
            Le.h((e) => "assistantFeed" === e.type && "default-feed" === e.id),
            N.U((e) => Pe.ab.getCardPropsForFeed(e)),
            Fe.O({})
          ),
        Ne = (e, t, i) => [
          {
            type: "text",
            id: Me.JX.from("text"),
            meta: { label: "You accepted " },
            size: Re.yH.Regular,
            text: "You accepted ",
            textColor: Re.Il.CoreNeutral50,
            format: []
          },
          {
            type: "text",
            id: Me.JX.from("text"),
            meta: { label: `${i}` },
            size: Re.yH.Regular,
            text: `${i}`,
            textColor: Re.Il.CoreNeutral50,
            format: [Re.SQ.Bold]
          },
          {
            type: "text",
            id: Me.JX.from("text"),
            meta: { label: " suggestions and improved your quality score by " },
            size: Re.yH.Regular,
            text: " suggestions and improved your quality score by ",
            textColor: Re.Il.CoreNeutral50,
            format: []
          },
          {
            type: "text",
            id: Me.JX.from("text"),
            meta: { label: "" + (e - t) },
            size: Re.yH.Regular,
            text: "" + (e - t),
            textColor: Re.Il.CoreNeutral50,
            format: [Re.SQ.Bold]
          },
          {
            type: "text",
            id: Me.JX.from("text"),
            meta: { label: " points." },
            size: Re.yH.Regular,
            text: " points.",
            textColor: Re.Il.CoreNeutral50,
            format: []
          }
        ],
        Be = [
          {
            type: "text",
            id: Me.JX.from("text"),
            meta: { label: "Keep it up! You’ve earned a perfect quality score." },
            size: Re.yH.Regular,
            text: "Keep it up! You’ve earned a perfect quality score.",
            textColor: Re.Il.CoreNeutral50,
            format: []
          }
        ];
      var Ve;
      !(function (e) {
        (e[(e.default = 0)] = "default"),
          (e[(e.withQualityScore = 1)] = "withQualityScore"),
          (e[(e.withPerformanceScore = 2)] = "withPerformanceScore");
      })(Ve || (Ve = {}));
      class He {
        constructor(e, t, i, a, s, r, o, l) {
          (this._sduiManager = e),
            (this._sduiBufferService = i),
            (this._statisticsService = a),
            (this._upgradeHookCardExists = r),
            (this._sessionModel = o),
            (this._experimentClient = l),
            (this._subs = new D.w()),
            (this.shouldShowSuccessReportWithPerformanceScore = (e, t) =>
              e === _e.v0.ScoresStatus.OK && t >= 3 && "test" === this._experimentClient.getTreatment(Ee.p.PerformanceScoreSuccessState)),
            (this.shouldShowSuccessReportWithQualityScore = (e) =>
              e === _e.v0.ScoresStatus.OK &&
              ("text" === this._experimentClient.getTreatment(Ee.p.QualityScore) ||
                "progress_bar" === this._experimentClient.getTreatment(Ee.p.QualityScore))),
            (this.focusSuccessReportStateTransformer = ({ state: e, metadata: t }) => {
              if (!q.nL.hasCards(e)) return xe.left({ state: e, metadata: t });
              const i = q.nL.Prism.getLens();
              return xe.left({
                state: i.modify(
                  (e) =>
                    Z.isSome(e.cardIndex) ||
                    e.items.size > 1 ||
                    (0, n.pipe)(
                      e.items.getAt(0),
                      Z.map((e) => e.id !== L.D1.SuccessReport.ID),
                      Z.getOrElse(_.jv)
                    )
                      ? e
                      : { ...e, cardIndex: Z.some(0) },
                  e
                ),
                metadata: t
              });
            });
          const c = this._sduiManager.state.pipe(
              N.U((e) => L.D1.GButton.getPushAssistantFeedAction(e, L.D1.GButton.DEFAULT_GBUTTON_ID)),
              ae.oA,
              N.U((e) => e.feedId)
            ),
            d = s.pipe(
              N.U(
                (e) =>
                  q.nL.hasSuccess(e) &&
                  q.nL.hasItems(e) &&
                  (0 === e.currentLens.items.size ||
                    (0, n.pipe)(
                      e.currentLens.items.getAt(0),
                      Z.map((e) => e.id === L.D1.SuccessReport.ID),
                      Z.getOrElse(_.jv)
                    ))
              )
            ),
            u = t.feed.pipe(
              se.M(c),
              N.U(([e, t]) => e.feedId === t)
            );
          this.isSuccess = V.aj([d, u]).pipe(N.U(([e, t]) => e && t));
        }
        _getSuccessMessages(e, t) {
          return {
            title: t < 2 ? "Looking good so far" : e > 0 ? `${e} ${Te._6(e, "issue addressed", "issues addressed")}` : "Nice job!",
            subTitle: t < 2 ? "Keep writing to see suggestions." : e > 0 ? "All clear!" : "You made that look easy!"
          };
        }
        _getSduiKnownId(e) {
          switch (e) {
            case Ve.withQualityScore:
              return L.D1.SuccessReport.SUCCESS_REPORT_WITH_QUALITY_SCORE_CARD_ID;
            case Ve.withPerformanceScore:
              return L.D1.SuccessReport.SUCCESS_REPORT_WITH_PERFORMANCE_SCORE_CARD_ID;
            default:
              return L.D1.SuccessReport.SUCCESS_REPORT_CARD_ID;
          }
        }
        _getSuccessReportSDUI(e, t, i, a) {
          const { title: s, subTitle: r } = this._getSuccessMessages(e, t),
            n = [
              {
                type: "block",
                id: Me.JX.from("block"),
                parts: [
                  {
                    type: "image",
                    id: Me.JX.from("image"),
                    meta: {},
                    name: Me.yL.unknown("success_report_image"),
                    url: "https://assets.grammarly.com/icons/v1/notification-ok.svg",
                    width: 2,
                    height: 2
                  }
                ],
                name: Me.yL.unknown("success_report_image_block"),
                spacing: { top: Re.T.D1, right: Re.T.D0, bottom: Re.T.D075, left: Re.T.D0 },
                horizontalAlign: Re.Kq.Center
              },
              {
                type: "block",
                id: Me.JX.from("block"),
                parts: [
                  {
                    type: "text",
                    id: Me.JX.from("text"),
                    size: Re.yH.Regular,
                    meta: { label: s },
                    text: s,
                    textColor: Re.Il.CoreNeutral90,
                    format: [Re.SQ.Bold]
                  }
                ],
                name: Me.yL.unknown("success_report_title_block"),
                horizontalAlign: Re.Kq.Center
              },
              {
                type: "block",
                id: Me.JX.from("block"),
                parts: [
                  {
                    type: "text",
                    id: Me.JX.from("text"),
                    size: Re.yH.Regular,
                    meta: { label: r },
                    text: r,
                    textColor: Re.Il.CoreNeutral50,
                    format: []
                  }
                ],
                name: Me.yL.unknown("success_report_subtitle_block"),
                horizontalAlign: Re.Kq.Center
              },
              {
                type: "block",
                id: Me.JX.from("block"),
                parts: [],
                name: Me.yL.unknown("success_report_subtitle_space_1_block"),
                spacing: { top: Re.T.D0, right: Re.T.D0, bottom: Re.T.D1, left: Re.T.D0 }
              },
              {
                type: "block",
                id: Me.JX.from("block"),
                parts: [],
                name: Me.yL.unknown("success_report_subtitle_space_2_block"),
                spacing: { top: Re.T.D0, right: Re.T.D0, bottom: Re.T.D1, left: Re.T.D0 }
              },
              {
                type: "block",
                id: Me.JX.from("block"),
                parts: [],
                name: Me.yL.unknown("success_report_subtitle_space_3_block"),
                spacing: { top: Re.T.D0, right: Re.T.D0, bottom: Re.T.D1, left: Re.T.D0 }
              },
              {
                type: "block",
                id: Me.JX.from("block"),
                parts: [],
                name: Me.yL.unknown("success_report_subtitle_space_4_block"),
                spacing: { top: Re.T.D0, right: Re.T.D0, bottom: Re.T.D1, left: Re.T.D0 }
              }
            ],
            o = this._getSduiKnownId(null == a ? void 0 : a.layout),
            l = a
              ? ((t) => {
                  switch (t.layout) {
                    case Ve.withPerformanceScore:
                      return ((e, t, i) => [
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [],
                          name: Me.yL.unknown("success_report_top_spacing_block"),
                          spacing: { top: Re.T.D1, right: Re.T.D0, bottom: Re.T.D1, left: Re.T.D0 }
                        },
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [
                            {
                              type: "text",
                              id: Me.JX.from("text"),
                              meta: { label: `${e}` },
                              size: Re.yH.HeadingLevel1,
                              text: `${e}`,
                              textColor: Re.Il.CoreNeutral90,
                              format: [Re.SQ.Bold]
                            }
                          ],
                          name: Me.yL.unknown("success_report_score_block"),
                          spacing: { top: Re.T.D0, right: Re.T.D0, bottom: Re.T.D025, left: Re.T.D0 },
                          horizontalAlign: Re.Kq.Center
                        },
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [
                            {
                              type: "text",
                              id: Me.JX.from("text"),
                              meta: { label: "Out of 100" },
                              size: Re.yH.Medium,
                              text: "Out of 100",
                              textColor: Re.Il.CoreNeutral90,
                              format: [Re.SQ.Bold]
                            }
                          ],
                          name: Me.yL.unknown("success_report_out_of_100_block"),
                          horizontalAlign: Re.Kq.Center
                        },
                        {
                          type: "row",
                          id: Me.JX.from("row"),
                          left: [
                            {
                              type: "block",
                              id: Me.JX.from("block"),
                              parts: [],
                              name: Me.yL.unknown("success_report_you_corrected_left_spacing_block"),
                              fraction: 1,
                              horizontalAlign: Re.Kq.Center
                            },
                            {
                              type: "block",
                              id: Me.JX.from("block"),
                              parts: [
                                {
                                  type: "text",
                                  id: Me.JX.from("text"),
                                  meta: { label: "You corrected " },
                                  size: Re.yH.Regular,
                                  text: "You corrected ",
                                  textColor: Re.Il.CoreNeutral50,
                                  format: []
                                },
                                {
                                  type: "text",
                                  id: Me.JX.from("text"),
                                  meta: { label: `${i}` },
                                  size: Re.yH.Regular,
                                  text: `${i}`,
                                  textColor: Re.Il.CoreNeutral50,
                                  format: [Re.SQ.Bold]
                                },
                                {
                                  type: "text",
                                  id: Me.JX.from("text"),
                                  meta: { label: " issues and improved your writing by " },
                                  size: Re.yH.Regular,
                                  text: " issues and improved your writing by ",
                                  textColor: Re.Il.CoreNeutral50,
                                  format: []
                                },
                                {
                                  type: "text",
                                  id: Me.JX.from("text"),
                                  meta: { label: "" + (e - t) },
                                  size: Re.yH.Regular,
                                  text: "" + (e - t),
                                  textColor: Re.Il.CoreNeutral50,
                                  format: [Re.SQ.Bold]
                                },
                                {
                                  type: "text",
                                  id: Me.JX.from("text"),
                                  meta: { label: " points." },
                                  size: Re.yH.Regular,
                                  text: " points.",
                                  textColor: Re.Il.CoreNeutral50,
                                  format: []
                                }
                              ],
                              name: Me.yL.unknown("success_report_you_corrected_text_block"),
                              fraction: 4,
                              horizontalAlign: Re.Kq.Center
                            },
                            {
                              type: "block",
                              id: Me.JX.from("block"),
                              parts: [],
                              name: Me.yL.unknown("success_report_you_corrected_right_spacing_block"),
                              fraction: 1,
                              horizontalAlign: Re.Kq.Center
                            }
                          ],
                          right: [],
                          verticalAlign: Re.g$.Middle,
                          name: Me.yL.unknown("success_report_you_corrected_row"),
                          spacing: { top: Re.T.D025, right: Re.T.D0, bottom: Re.T.D025, left: Re.T.D0 }
                        },
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [
                            {
                              type: "button",
                              id: L.D1.SuccessReport.OPEN_PERFORMANCE_SCORE_INTERACTION_ID,
                              meta: { label: "See Details" },
                              name: Me.yL.unknown("success_report_see_details_button"),
                              kind: Re.Lv.Primary,
                              state: Re.BN.Enabled,
                              label: {
                                type: "block",
                                id: Me.JX.from("block"),
                                parts: [
                                  {
                                    type: "text",
                                    id: Me.JX.from("text"),
                                    meta: { label: "See Details" },
                                    size: Re.yH.Regular,
                                    text: "See Details",
                                    textColor: Re.Il.CoreNeutral0,
                                    format: []
                                  }
                                ],
                                name: Me.yL.unknown("textContainer"),
                                spacing: { top: Re.T.D0, right: Re.T.D05, bottom: Re.T.D0, left: Re.T.D05 },
                                verticalAlign: Re.g$.Middle
                              },
                              actions: [
                                { type: "pushAssistantFeed", feedId: "performance-score-feed" },
                                { type: "notify", userAction: Re.nz.Click }
                              ],
                              shape: Re.jL.Square
                            }
                          ],
                          name: Me.yL.unknown("success_report_cta_block"),
                          spacing: { top: Re.T.D025, right: Re.T.D0, bottom: Re.T.D0, left: Re.T.D0 },
                          horizontalAlign: Re.Kq.Center
                        },
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [],
                          name: Me.yL.unknown("success_report_bottom_spacing_block"),
                          spacing: { top: Re.T.D1, right: Re.T.D0, bottom: Re.T.D1, left: Re.T.D0 }
                        }
                      ])(t.score, t.lowestScore, e);
                    case Ve.withQualityScore:
                      return ((e, t, i) => [
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [],
                          name: Me.yL.unknown("success_report_top_spacing_block"),
                          spacing: { top: Re.T.D125, right: Re.T.D0, bottom: Re.T.D125, left: Re.T.D0 }
                        },
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [
                            {
                              type: "image",
                              id: Me.JX.from("image"),
                              meta: {},
                              name: Me.yL.unknown("illustration"),
                              url: "https://assets.grammarly.com/sdui/v1/paper-plane.svg",
                              width: 5,
                              height: 5
                            }
                          ],
                          name: Me.yL.unknown("success_report_illustration_block"),
                          spacing: { top: Re.T.D0, right: Re.T.D0, bottom: Re.T.D1, left: Re.T.D0 },
                          horizontalAlign: Re.Kq.Center
                        },
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [
                            {
                              type: "text",
                              id: Me.JX.from("text"),
                              meta: { label: "Quality Score: " },
                              size: Re.yH.Medium,
                              text: "Quality Score: ",
                              textColor: Re.Il.CoreNeutral90,
                              format: [Re.SQ.Bold]
                            },
                            {
                              type: "text",
                              id: Me.JX.from("text"),
                              meta: { label: `${e}` },
                              size: Re.yH.Medium,
                              text: `${e}`,
                              textColor: Re.Il.CoreNeutral90,
                              format: [Re.SQ.Bold]
                            }
                          ],
                          name: Me.yL.unknown("success_report_quality_score_block"),
                          horizontalAlign: Re.Kq.Center
                        },
                        {
                          type: "row",
                          id: Me.JX.from("row"),
                          left: [
                            {
                              type: "block",
                              id: Me.JX.from("block"),
                              parts: [],
                              name: Me.yL.unknown("success_report_you_accepted_left_spacing_block"),
                              fraction: 8,
                              horizontalAlign: Re.Kq.Center
                            },
                            {
                              type: "block",
                              id: Me.JX.from("block"),
                              parts: e >= 100 && t >= 100 ? Be : Ne(e, t, i),
                              name: Me.yL.unknown("success_report_you_accepted_text_block"),
                              fraction: 84,
                              horizontalAlign: Re.Kq.Center
                            },
                            {
                              type: "block",
                              id: Me.JX.from("block"),
                              parts: [],
                              name: Me.yL.unknown("success_report_you_accepted_right_spacing_block"),
                              fraction: 8,
                              horizontalAlign: Re.Kq.Center
                            }
                          ],
                          right: [],
                          verticalAlign: Re.g$.Middle,
                          name: Me.yL.unknown("success_report_you_accepted_row"),
                          spacing: { top: Re.T.D0, right: Re.T.D0, bottom: Re.T.D0, left: Re.T.D0 }
                        },
                        {
                          type: "block",
                          id: Me.JX.from("block"),
                          parts: [],
                          name: Me.yL.unknown("success_report_bottom_spacing_block"),
                          spacing: { top: Re.T.D125, right: Re.T.D0, bottom: Re.T.D125, left: Re.T.D0 }
                        }
                      ])(t.score, t.lowestScore, e);
                    case Ve.default:
                      return n;
                  }
                })(a)
              : n;
          return {
            type: "assistantCard",
            id: o,
            meta: {},
            child: {
              type: "viewStack",
              id: "card-viewStack",
              views: {
                "default-suggestion": {
                  type: "column",
                  id: Me.JX.from("column"),
                  children: l,
                  name: Me.yL.unknown("success_report_content_column")
                },
                "tone-insights": { type: "nativeToneInsightsModal", id: "card-nativeToneInsightsModal" },
                feedback: { type: "nativeFeedbackModal", id: "card-nativeFeedbackModal" },
                settings: { type: "nativeSettingsModal", id: "card-nativeSettingsModal" }
              },
              selected: "default-suggestion"
            },
            onFocus: [
              { type: "switchView", where: "openToneDetectorButton-viewStack", selected: "show-open-tone-detector-button" },
              { type: "switchView", where: "card-viewStack", selected: "default-suggestion" },
              { type: "switchView", where: "header-viewStack", selected: "default-suggestion" },
              { type: "notify", userAction: Re.nz.Focus }
            ],
            onBlur: [],
            properties: i
          };
        }
        initSuccessReportSDUIEmulation() {
          const e = this._statisticsService.sessionStats.view((e) => (e ? e.alertsStats.accepted.total : 0)),
            t = this._statisticsService.generalScore.view((e) => (null != e ? e : 0)).pipe(B.x()),
            i = this._statisticsService.lowestGeneralScore.view((e) => (null != e ? e : 0)).pipe(B.x()),
            a = this._sessionModel.scoreStatus.pipe(B.x(), N.U(Z.getOrElse(() => _e.v0.ScoresStatus.ERROR)));
          this._subs.add(
            V.aj([
              this.isSuccess.pipe(B.x()),
              this._sduiManager.state.pipe(N.U(L.D1.SuccessReport.findSuccessReportSduiItem), N.U(Z.isSome), B.x()),
              this._upgradeHookCardExists,
              t,
              i,
              a
            ])
              .pipe(
                se.M(De(this._sduiBufferService.capiEvents)),
                N.U(([[e, t, i, a, s, r], n]) => {
                  var o, l, c, d;
                  const u =
                      null !==
                        (l =
                          null === (o = this._statisticsService.sessionStats.get()) || void 0 === o
                            ? void 0
                            : o.alertsStats.accepted.total) && void 0 !== l
                        ? l
                        : 0,
                    p =
                      null !==
                        (d =
                          null === (c = this._statisticsService.sessionStats.get()) || void 0 === c
                            ? void 0
                            : c.alertsStats.dismissed.total) && void 0 !== d
                        ? d
                        : 0,
                    m = this._statisticsService.wordsCount.get(),
                    g = this.shouldShowSuccessReportWithPerformanceScore(r, u + p),
                    h = this.shouldShowSuccessReportWithQualityScore(r);
                  if (!e || i || t)
                    return (
                      !(!e || !t) ||
                      (!(e || !t) &&
                        (this._sduiBufferService.pushCapiSduiEvent({ kind: "sdui_remove", rev: 0, sduiRootId: L.D1.SuccessReport.ID }), !1))
                    );
                  {
                    const e = this._getSuccessReportSDUI(
                      u,
                      m,
                      n,
                      g
                        ? { layout: Ve.withPerformanceScore, score: a, lowestScore: s }
                        : h
                        ? { layout: Ve.withQualityScore, score: a, lowestScore: s }
                        : { layout: Ve.default }
                    );
                    return (
                      this._sduiBufferService.pushCapiSduiEvent({ kind: "sdui_add", rev: 0, sduiRootId: L.D1.SuccessReport.ID, sdui: e }),
                      !0
                    );
                  }
                }),
                Ae.w((s) =>
                  s
                    ? V.aj([e, this._statisticsService.wordsCount, t, i, a, De(this._sduiBufferService.capiEvents)]).pipe(
                        we.b(([e, t, i, a, s, r]) => {
                          var n, o;
                          const l =
                              null !==
                                (o =
                                  null === (n = this._statisticsService.sessionStats.get()) || void 0 === n
                                    ? void 0
                                    : n.alertsStats.dismissed.total) && void 0 !== o
                                ? o
                                : 0,
                            c = this.shouldShowSuccessReportWithPerformanceScore(s, e + l),
                            d = this.shouldShowSuccessReportWithQualityScore(s),
                            u = this._getSuccessReportSDUI(
                              e,
                              t,
                              r,
                              c
                                ? { layout: Ve.withPerformanceScore, score: i, lowestScore: a }
                                : d
                                ? { layout: Ve.withQualityScore, score: i, lowestScore: a }
                                : { layout: Ve.default }
                            );
                          this._sduiBufferService.pushCapiSduiEvent({
                            kind: "sdui_update",
                            rev: 0,
                            sduiRootId: L.D1.SuccessReport.ID,
                            sdui: u
                          });
                        })
                      )
                    : Ie.E
                )
              )
              .subscribe()
          );
        }
        dispose() {
          this._subs.unsubscribe();
        }
      }
      i(92310);
      const Oe =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
      var Ue = i(8901),
        je = i(4390),
        Ge = i(24209),
        We = i(83078),
        ze = i(44358);
      const qe = {
          "Style/ToneImprovement/ConfidentRewrite/ToneAI": "1f91d",
          "Style/ToneImprovement/PersonableRewrite/ToneAI": "1f917",
          "Style/ToneImprovement/PositiveFraming/ToneAI": "1f64c"
        },
        Ke = ["Style/Sensitivity/SupportUkraine/WarLanguage", "Style/Sensitivity/ExtremelySensitive/SuicideIdeation"],
        Ze = (e) => e.patternName.startsWith("Style/Sensitivity") && !Ke.some((t) => e.patternName === t);
      var Xe;
      !(function (e) {
        (e.isToneImprovementSuggestionInfo = function (e) {
          return "emojiId" in e;
        }),
          (e.isInclusiveLanguageToneSuggestionInfo = function (e) {
            return "iconId" in e && "inclusive_language" === e.toneCategory;
          }),
          (e.createToneImprovementSuggestionUphookInfo = function (e) {
            const t = e._raw.minicardTitle || e._raw.title || "",
              i = t.replace(Oe, "").trim(),
              a = t.match(Oe),
              s = a && a.length ? a[0] : null,
              r = qe[e.patternName];
            return {
              ...(s ? { emojiLiteral: s } : r ? { emojiId: r } : {}),
              title: i,
              alertId: e.id,
              toneCategory: i,
              patternName: e.patternName,
              isUphook: !0
            };
          }),
          (e.isToneImprovementSuggestionUphookInfo = function (e) {
            return "isUphook" in e && e.isUphook;
          });
      })(Xe || (Xe = {}));
      class Ye {
        constructor(e, t, i, a, s, r, n, o, l, c) {
          (this._alertsReader = e),
            (this._getSessionUuid = i),
            (this._gnar = a),
            (this.emogenieService = r),
            (this._upgradeViewModel = n),
            (this._cardActions = l),
            (this._sduiItems = c),
            (this._toneSuggestionInfo = O.h.create(void 0)),
            (this._sub = new D.w());
          const d = this._sduiItems.view(L.D1.StrongAlertRef.getStrongAlertRefBulkDismissAlertIds),
            u = O.h.combine(t, d, (e, t) => je.p.reduce([], (e, i) => (t.has(i.id) || e.push(i.alert), e))(e)),
            p = r.viewState.view("isBrandTonesEnabled"),
            m = o.view("isPremium"),
            g = O.h.combine(u, p, m, (e, t, i) => Ye.getToneSuggestionInfoFromAlerts(e, t, i)),
            h = g.pipe(Le.h((e) => void 0 === e || !Xe.isToneImprovementSuggestionUphookInfo(e))),
            v = g.pipe(
              Le.h((e) => void 0 !== e && Xe.isToneImprovementSuggestionUphookInfo(e) && "test" === s.getTreatment(Ee.p.ToneDetectorUphook))
            );
          this._sub.add(Ge.T(h, v).subscribe(H.wW(this._toneSuggestionInfo))), (this.toneSuggestionInfo = this._toneSuggestionInfo.view());
        }
        static getToneSuggestionInfoFromAlerts(e, t, i) {
          let a;
          if (i) {
            a = e
              .filter((e) => e.patternName.startsWith("Style/ToneImprovement") || Ze(e))
              .map((e) => {
                var t, i, a;
                return Ze(e)
                  ? {
                      iconId: null !== (t = e._raw.extra_properties.icon_id) && void 0 !== t ? t : "",
                      title: e.miniCardTitle,
                      alertId: e.id,
                      toneCategory: "inclusive_language",
                      patternName: e.patternName
                    }
                  : {
                      emojiId: null !== (i = e._raw.extra_properties.emoji_id) && void 0 !== i ? i : "",
                      title: G.bZ.isToneAI(e) ? e.miniCardTitle : e.miniCardTitle.replace(Oe, "").trim(),
                      alertId: e.id,
                      toneCategory: null !== (a = e._raw.extra_properties.tone) && void 0 !== a ? a : "",
                      patternName: e.patternName
                    };
              });
          } else {
            a = e
              .filter((e) => e._raw.hidden && ((e) => e.patternName.startsWith("Style/ToneImprovement"))(e))
              .map(Xe.createToneImprovementSuggestionUphookInfo);
          }
          const s = new Set(a.map((e) => e.toneCategory)),
            r = a[0],
            n = t ? "Want to sound more on-brand?" : s.size > 1 ? "Strike the right tone" : null == r ? void 0 : r.title;
          return r ? { ...r, title: n } : r;
        }
        _getCurrentSessionUuid() {
          return (0, n.pipe)(
            this._getSessionUuid(),
            Z.getOrElse(() => "")
          );
        }
        onShowToneSuggestionInfo(e) {
          const t = Xe.isToneImprovementSuggestionInfo(e)
              ? e.emojiId
              : Xe.isInclusiveLanguageToneSuggestionInfo(e)
              ? e.iconId
              : e.emojiId || e.emojiLiteral || "",
            i = Xe.isToneImprovementSuggestionUphookInfo(e);
          this._gnar.toneDetectorToneSuggestionInfoShow(i, e.patternName, this._getCurrentSessionUuid(), e.title, t),
            i &&
              ((0, ze.n)(this._gnar, { placement: "toneDetector", upgradeHookName: "toneDetector", upgradeHookSlot: "emogenieReport" }),
              (0, m.Tb)().upgradeHooks.showUpgradeHook("toneDetector", "emogenieReport"));
        }
        onClickToneSuggestionInfoCta(e) {
          const t = Xe.isToneImprovementSuggestionInfo(e)
              ? e.emojiId
              : Xe.isInclusiveLanguageToneSuggestionInfo(e)
              ? e.iconId
              : e.emojiId || e.emojiLiteral || "",
            i = Xe.isToneImprovementSuggestionUphookInfo(e);
          if ((this._gnar.toneDetectorToneSuggestionInfoCtaClick(i, e.patternName, this._getCurrentSessionUuid(), e.title, t), i))
            (0, ze.Q)(this._gnar, { placement: "toneDetector", upgradeHookName: "toneDetector", upgradeHookSlot: "emogenieReport" }),
              (0, m.Tb)().upgradeHooks.clickUpgradeHook("toneDetector", "emogenieReport"),
              this._upgradeViewModel.openUpgradeUrl(Ue.L.Place.toneSuggestion);
          else {
            const t = this._sduiItems.get(),
              i = (0, n.pipe)(
                this._alertsReader.getById(e.alertId),
                Z.chain(G.bZ.getRawId),
                Z.chain((e) => L.D1.getByAlertId(t, e)),
                We.MH
              );
            this._cardActions.next(
              L.fr.create([L.D1.AssistantFeed.createPushAssistantFeedAction(L.D1.AssistantFeed.TONE_INSIGHTS_SUGGESTIONS_FEED_ID, i.id)])
            );
          }
        }
        dispose() {
          this._sub.unsubscribe();
        }
      }
      var Qe = i(66896),
        Je = i(60682),
        $e = i(50628),
        et = i(73975),
        tt = i(22232),
        it = i(7992);
      const at = (e) => {
          switch (e) {
            case Qe.R.Type.Critical:
            case Qe.R.Type.Correctness:
              return Re.Il.CoreRed50;
            case Qe.R.Type.Clarity:
              return Re.Il.CoreBlue50;
            case Qe.R.Type.Engagement:
              return Re.Il.CoreGreen60;
            case Qe.R.Type.Delivery:
              return Re.Il.CorePurple40;
            case Qe.R.Type.Vox:
              return Re.Il.CoreNeutral50;
            case Qe.R.Type.Plagiarism:
              return Re.Il.CoreCyan50;
            case Qe.R.Type.Advanced:
            case Qe.R.Type.Other:
            case Qe.R.Type.KnowledgeHub:
              return;
            default:
              return (0, tt.vE)(e);
          }
        },
        st = (e, t) => {
          var i;
          const a = ((i = e),
            Object.values(
              i.reduce((e, t) => {
                const i = t.lensType;
                return (
                  e[i]
                    ? (e[i] = { ...e[i], lensNames: re.jj(et.w4)([...e[i].lensNames, t.lensName]), alertsCount: e[i].alertsCount + 1 })
                    : (e[i] = { lensNames: [t.lensName], lensType: t.lensType, alertsCount: 1 }),
                  e
                );
              }, {})
            )).map((e) => {
              var t;
              return Me.X2.create(
                [
                  {
                    type: "block",
                    fraction: 1,
                    horizontalAlign: Re.Kq.Center,
                    id: Me.JX.from("block"),
                    name: Me.yL.unknown("upgrade_hook_counter"),
                    parts: [Me.XF.create(e.alertsCount.toString(), null !== (t = at(e.lensType)) && void 0 !== t ? t : Re.Il.CoreNeutral50)]
                  },
                  {
                    type: "block",
                    fraction: 11,
                    id: Me.JX.from("block"),
                    name: Me.yL.unknown("upgrade_hook_alert_group"),
                    parts: [
                      Me.xv.create(Te.kC(e.lensType), Re.yH.Regular, [], Re.Il.CoreNeutral90, void 0, void 0),
                      Me.xv.create(` · ${e.lensNames.join(", ")}`, Re.yH.Regular, [], Re.Il.CoreNeutral50, void 0, void 0)
                    ]
                  }
                ],
                [],
                Me.Ki.create("0.5", "0.25", "0.25", "0.75"),
                Re.g$.Middle
              );
            }),
            s = Me.sg.create([
              Me.X2.create(
                [
                  Me.gO.create(
                    "title",
                    void 0,
                    void 0,
                    Me.xv.create("Premium suggestions available:", Re.yH.Regular, [Re.SQ.Bold], Re.Il.CoreNeutral90, void 0, void 0)
                  )
                ],
                [],
                Me.Ki.create("0.75", "0.25", "0.5", "0.75"),
                Re.g$.Middle
              ),
              Me.gO.create("content", void 0, void 0, ...a),
              Me.X2.create(
                [
                  {
                    ...Me.gO.create(
                      "actions",
                      void 0,
                      Me.n4.create("0.5", "0"),
                      {
                        type: "button",
                        meta: {},
                        id: Me.JX.from("goPremium"),
                        name: Me.yL.unknown("goPremium"),
                        shape: Re.jL.Square,
                        actions: [{ type: "upgradeToPremium" }, { type: "notify", userAction: Re.nz.Click }],
                        kind: Re.Lv.Primary,
                        state: Re.BN.Enabled,
                        label: {
                          ...Me.gO.create(
                            "",
                            Me.Ki.create("0", "0.5", "0", "0.25"),
                            Me.n4.create("0.25", "0.25"),
                            Me.JO.create(Me.JO.Source.createKnown(Re.Tb.Diamond), void 0),
                            Me.xv.create("Unlock Premium", Re.yH.Regular, [], Re.Il.CoreYellow80, void 0, void 0)
                          ),
                          verticalAlign: Re.g$.Middle
                        }
                      },
                      {
                        type: "button",
                        meta: {},
                        id: Me.JX.from("button"),
                        name: Me.yL.unknown("dismiss"),
                        shape: Re.jL.Square,
                        actions: [{ type: "removeRoot" }, { type: "notify", userAction: Re.nz.Click }],
                        kind: Re.Lv.Secondary,
                        state: Re.BN.Enabled,
                        label: Me.gO.create(
                          "",
                          Me.Ki.create("0", "0.5", "0", "0.5"),
                          { horizontal: Re.T.D025, vertical: Re.T.D0 },
                          Me.xv.create("Dismiss", Re.yH.Regular, [], Re.Il.CoreNeutral50, void 0, void 0)
                        )
                      }
                    ),
                    verticalAlign: Re.g$.Middle
                  }
                ],
                [
                  Me.gO.create(
                    "navigation-arrows",
                    void 0,
                    void 0,
                    Me.zx.createIcon(
                      Re.MU.ButtonPrev,
                      Me.JO.Source.createKnown(Re.Tb.ArrowLeft),
                      [
                        { type: "prevCard" },
                        {
                          type: "transition",
                          fromName: "content",
                          toName: "content",
                          animateFrom: Re.c1.SlideRight,
                          animateTo: Re.c1.SlideRight
                        },
                        {
                          type: "transition",
                          fromName: "title",
                          toName: "title",
                          animateFrom: Re.c1.SlideRight,
                          animateTo: Re.c1.SlideRight
                        },
                        { type: "notify", userAction: Re.nz.Click }
                      ],
                      Re.Lv.Secondary,
                      "Previous suggestion"
                    ),
                    Me.zx.createIcon(
                      Re.MU.ButtonNext,
                      Me.JO.Source.createKnown(Re.Tb.ArrowRight),
                      [{ type: "nextCard" }, { type: "notify", userAction: Re.nz.Click }],
                      Re.Lv.Secondary,
                      "Next suggestion"
                    )
                  )
                ],
                Me.Ki.create("0.5", "0.25", "1", "0.75"),
                Re.g$.Middle
              )
            ]);
          return {
            id: L.D1.NativeUpgradeHook.ID,
            type: "assistantCard",
            meta: { label: "Premium suggestions available:" },
            child: {
              ...Me.XJ.create("default-suggestion", {
                "default-suggestion": s,
                feedback: { type: "nativeFeedbackModal", id: "card-nativeFeedbackModal" },
                settings: { type: "nativeSettingsModal", id: "card-nativeSettingsModal" },
                "tone-insights": { type: "nativeToneInsightsModal", id: "card-nativeToneInsightsModal" }
              }),
              id: "card-viewStack"
            },
            onFocus: [
              { type: "switchView", where: "openToneDetectorButton-viewStack", selected: "show-open-tone-detector-button" },
              { type: "switchView", where: "card-viewStack", selected: "default-suggestion" },
              { type: "switchView", where: "header-viewStack", selected: "default-suggestion" },
              { type: "notify", userAction: Re.nz.Focus }
            ],
            onBlur: [],
            properties: { ...t, "feed-order": 1 }
          };
        };
      var rt = i(71242);
      class nt {
        constructor(e) {
          (this._subs = new D.w()),
            (this._upgradeHookCard = O.h.create(Z.none)),
            (this._upgradeHookCardFocused = O.h.create(!1)),
            (this.processUpgradeHookSduiCardActions = (e, t, i, a, s) =>
              e
                .pipe(
                  se.M(this._upgradeHookCard),
                  N.U(([{ actions: e, cardId: r }, n]) => {
                    e.forEach((e) => {
                      "upgradeToPremium" === e.type
                        ? t.openUpgradeUrl(Ue.L.Place.assistantCardList)
                        : "notify" === e.type &&
                          e.userAction === Re.nz.Focus &&
                          (0, _.zG)(
                            n,
                            Z.fold(_.jv, (e) => e.id.toString() === r),
                            (e) => {
                              this._upgradeHookCardFocused.set(e), e && i.upgradeHooksExp.upgradeHookCardShown(a, s, (0, it.ge)());
                            }
                          );
                    });
                  })
                )
                .subscribe()),
            this._subs.add(e.pipe(N.U(L.D1.StrongAlertRef.findStrongAlertRefUpgradeHookSduiItem)).subscribe(H.wW(this._upgradeHookCard)));
        }
        get upgradeHookCard() {
          return this._upgradeHookCard.view();
        }
        get upgradeHookCardExists() {
          return this._upgradeHookCard.view(Z.isSome);
        }
        get upgradeHookCardFocused() {
          return this._upgradeHookCardFocused.view();
        }
        dispose() {
          this._subs.unsubscribe();
        }
      }
      var ot = i(64757),
        lt = i(1509),
        ct = i(54001);
      const dt = {
          caption: "Compose an email",
          buttons: [
            { id: "gmail", icon: "gmail", label: "Gmail", href: "https://mail.google.com/#compose" },
            { id: "outlook", icon: "outlook", label: "Outlook", href: "https://outlook.office.com/mail/" }
          ]
        },
        ut = {
          caption: "Edit a document",
          buttons: [
            { id: "gDocs", icon: "gdocs", label: "Google Docs", href: "https://docs.google.com/" },
            { id: "word", icon: "word", label: "Word", href: "https://www.microsoft365.com/launch/word" }
          ]
        },
        pt = [
          dt,
          ut,
          {
            caption: "Update your profile",
            buttons: [{ id: "linkedIn", icon: "linkedIn", label: "LinkedIn", href: "https://www.linkedin.com/feed/" }]
          }
        ],
        mt = [
          dt,
          ut,
          {
            caption: "Send a message",
            buttons: [
              { id: "slack", icon: "slack", label: "Slack", href: "https://app.slack.com/client/" },
              { id: "teams", icon: "teams", label: "Teams", href: "https://teams.microsoft.com/" }
            ]
          }
        ];
      var gt = i(22484),
        ht = i(31926);
      const vt = ({ isStudent: e }) => (
        o.useEffect(() => {
          gt.J.getStartedUseCasesShow();
        }, []),
        o.createElement(
          "div",
          { className: ht.getStartedUseCases },
          o.createElement(
            "section",
            { className: ht.copyContainer },
            o.createElement("p", { className: ht.title }, "Now, see Grammarly in action"),
            o.createElement("p", { className: ht.subtitle }, "Start writing something new, or proofread a piece of text you already wrote.")
          ),
          o.createElement(
            "section",
            { className: ht.ctaContainer },
            (e ? pt : mt).map(({ caption: e, buttons: t }) =>
              o.createElement(
                "div",
                { key: e },
                o.createElement("p", { className: ht.ctaCaption }, e),
                o.createElement(
                  "div",
                  { className: ht.ctaButtons },
                  t.map(({ id: e, icon: t, label: i, href: a }) =>
                    o.createElement(
                      ot.zx,
                      {
                        key: e,
                        className: ht.externalLink,
                        "data-part": `use-case-link-${e}`,
                        "aria-label": e,
                        name: `get-started-use-cases-${e}`,
                        styleType: lt.Z.Type.Base,
                        href: a,
                        target: "_blank",
                        onClick: () => {
                          gt.J.getStartedUseCasesLinkClick(e);
                        }
                      },
                      t && o.createElement("div", { ...(0, ct.Sh)(ht.icon, ht[t]) }),
                      o.createElement("span", null, i)
                    )
                  )
                )
              )
            )
          )
        )
      );
      var ft = i(2639),
        bt = i(12764);
      const wt = [
          {
            id: oe.AccountCreation,
            title: "Create an account",
            description: "Sign up for free or sign in to an existing account to start receiving writing insights."
          },
          { id: oe.Tour, title: "Take a quick tour", description: "Want to see how Grammarly works?" },
          {
            id: oe.TryWebsite,
            title: "Try writing with Grammarly",
            description: "Get suggestions wherever you write online with the browser extension."
          },
          {
            id: oe.ViewApps,
            title: "Explore other Grammarly products",
            description: "Get suggestions from Grammarly when you write on all your favorite platforms and devices."
          }
        ],
        St = [
          { id: "gmail", text: "Try it in Gmail", icon: "gmail", href: "https://mail.google.com/#compose" },
          { id: "outlook", text: "Try it in Microsoft Outlook", icon: "outlook", href: "https://outlook.live.com/mail" },
          { id: "gDocs", text: "Try it in Google Docs", icon: "gdocs", href: "https://docs.google.com" }
        ],
        yt = [
          { id: "desktop", text: "Grammarly for Desktop", href: "https://www.grammarly.com/desktop" },
          { id: "keyboard", text: "The Grammarly Keyboard", href: "https://www.grammarly.com/mobile" }
        ];
      var Et = i(93405);
      const Ct = ({ label: e, href: t, onClick: i }) =>
          o.createElement(
            ot.zx.Primary,
            { className: Et.link, "data-part": e.toLowerCase().split(" ").join("-"), onClick: i, target: t ? "_blank" : "_self", href: t },
            e
          ),
        kt = ({ items: e, onClick: t }) =>
          o.createElement(
            o.Fragment,
            null,
            e.map(({ id: e, text: i, icon: a, href: s }) =>
              o.createElement(
                ot.zx,
                {
                  key: e,
                  className: Et.externalLink,
                  "data-part": `try-${e}`,
                  "aria-label": e,
                  name: `get-started-${e}`,
                  styleType: lt.Z.Type.Base,
                  href: s,
                  target: "_blank",
                  onClick: () => t(e)
                },
                a && o.createElement("div", { ...(0, ct.Sh)(Et.icon, Et[a]) }),
                o.createElement("span", null, i)
              )
            )
          ),
        _t = (e, t) => {
          const i = e.find((e) => !t.has(e.id));
          return null == i ? void 0 : i.id;
        };
      var At = i(91308);
      const It = ({ completed: e, total: t }) =>
        o.createElement(
          "div",
          { className: At.progressBarBg },
          o.createElement("div", {
            "data-name": "progress-bar",
            "aria-label": "completionProgress",
            className: At.progressBar,
            role: "progressbar",
            "aria-valuenow": e,
            style: { width: (e <= t && e >= 0 ? (e / t) * 100 : e < 0 ? 0 : 100) + "%" }
          })
        );
      var xt,
        Tt,
        Mt = i(52426);
      !(function (e) {
        (e.Complete = "complete"), (e.Incomplete = "incomplete");
      })(xt || (xt = {})),
        (function (e) {
          (e.macDesktop = "macDesktop"), (e.winDesktop = "winDesktop"), (e.android = "android"), (e.iOS = "iOS");
        })(Tt || (Tt = {}));
      const Rt = (e) => {
          switch (e) {
            case pe.macExtension:
              return Tt.macDesktop;
            case pe.windowsExtension:
              return Tt.winDesktop;
            case pe.mobileAndroid:
              return Tt.android;
            case pe.mobileIOS:
              return Tt.iOS;
            default:
              (0, tt.vE)(e);
          }
        },
        Pt = ({ getStartedChecklistViewModel: e, notify: t }) => {
          const { anonymous: i, checklistState: a, gnar: s, actions: r, userClientState: n } = e,
            [l, c] = o.useState(() => {
              const e = new Set([...a.completedItems, ...(i ? [] : [oe.AccountCreation])]);
              return { items: e, count: e.size };
            }),
            [d, u] = o.useState(
              ((e, t) => {
                const i = _t(e, t);
                return i ? new Set([i]) : new Set();
              })(wt, l.items)
            ),
            p = (e, i) => {
              const o = new Set(),
                d = new Set(l.items);
              if (e !== oe.AccountCreation) {
                l.items.has(e) || (d.add(e), c({ items: d, count: d.size }), Object.values(oe).every((e) => d.has(e)) && t());
                const p = _t(wt, d);
                o.delete(e), p && o.add(p), u(o);
                const m = Object.values(pe)
                  .filter((e) => n.get(e) === ue.installed)
                  .map(Rt);
                s.getStartedLinkClick(m, i, e, d.size, wt.length), r.updateChecklistState({ ...a, completedItems: [...d] });
              }
            },
            m = (e) => (l.items.has(e) ? xt.Complete : xt.Incomplete);
          return (
            o.useEffect(() => {
              s.getStartedChecklistShow(Array.from(l.items), _t(wt, l.items));
            }, []),
            o.createElement(
              "div",
              { className: Mt.getStartedChecklist },
              o.createElement("div", { className: Mt.logo }),
              o.createElement(lt.Z.H3, { className: Mt.title }, "Welcome! Here are a few steps to get you started."),
              o.createElement(
                lt.Z.Base,
                { className: Mt.progressCaption },
                "You’ve completed ",
                o.createElement("strong", null, l.count),
                " out of",
                " ",
                o.createElement("strong", null, wt.length),
                " steps."
              ),
              o.createElement(It, { total: wt.length, completed: l.count }),
              o.createElement(ft.W, {
                allChecklistItems: wt,
                completedItems: l,
                expandedItems: d,
                onExpandItem: (e) => {
                  const t = new Set(),
                    a = m(e),
                    r = i ? oe.AccountCreation : e,
                    n = m(r);
                  if ((s.getStartedSectionClick(a, e), 0 === d.size)) t.add(r), s.getStartedItemExpand(n, r);
                  else {
                    const [i] = d;
                    i != e ? (t.add(r), s.getStartedItemCollapse(a, i), s.getStartedItemExpand(n, r)) : s.getStartedItemCollapse(a, i);
                  }
                  u(t);
                },
                getCTA: (e) =>
                  ((e, t) => {
                    switch (e) {
                      case "accountCreation":
                        return o.createElement(Ct, {
                          label: "Sign up",
                          href: "https://www.grammarly.com/signup",
                          onClick: () => t(oe.AccountCreation, oe.AccountCreation)
                        });
                      case "tour":
                        return o.createElement(Ct, {
                          label: "Start tour",
                          onClick: () => {
                            t(oe.Tour, oe.Tour), (0, A.OB)().bgRpc.api.sendToFocusTab({ kind: bt.B.Kind.showOnboardingDialog });
                          }
                        });
                      case "tryWebsite":
                        return o.createElement(kt, { items: St, onClick: (e) => t(oe.TryWebsite, e) });
                      case "viewApps":
                        return o.createElement(kt, { items: yt, onClick: (e) => t(oe.ViewApps, e) });
                      default:
                        return null;
                    }
                  })(e, p)
              })
            )
          );
        };
      var Lt = i(31699);
      const Ft = ({ htmlToSanitize: e, ...t }) =>
        o.createElement("div", { ...t, dangerouslySetInnerHTML: { __html: (0, Lt.sanitize)(e) } });
      var Dt = i(25079);
      const Nt = ({ title: e, details: t, examples: i }) =>
        o.createElement(
          "div",
          { className: Dt.learnMore },
          void 0 !== e ? o.createElement("div", { className: Dt.learnMoreTitle }, Te.kC(e)) : null,
          o.createElement(Ft, { htmlToSanitize: t }),
          i.map((e, t) => {
            const i = e.type === ge.correct,
              a = e.type === ge.incorrect,
              s =
                i || a
                  ? o.createElement("div", {
                      ...(0, ct.Sh)(
                        Dt.learnMoreExampleIcon,
                        i ? Dt.learnMoreExampleCorrectIcon : null,
                        a ? Dt.learnMoreExampleIncorrectIcon : null
                      )
                    })
                  : null;
            return o.createElement(
              "div",
              { className: Dt.learnMoreExample, key: `learn-more-example-${t}` },
              e.title
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "div",
                      { className: Dt.learnMoreExampleIconAndTitle },
                      s,
                      o.createElement("div", { className: Dt.learnMoreExampleTitle }, e.title)
                    ),
                    o.createElement(Ft, {
                      ...(0, ct.Sh)(s ? Dt.learnMoreExampleTextMarginLeft : null, e.useItalicText ? Dt.learnMoreExampleTextItalic : null),
                      htmlToSanitize: e.text
                    })
                  )
                : o.createElement(Ft, { ...(0, ct.Sh)(e.useItalicText ? Dt.learnMoreExampleTextItalic : null), htmlToSanitize: e.text })
            );
          })
        );
      var Bt = i(8543);
      const Vt = ({ learnMoreInfo: e }) =>
        o.createElement(
          Bt.F.Fragment,
          null,
          e.view((e) =>
            e ? o.createElement(Nt, { title: e.showTitleOnContent ? e.title : void 0, details: e.details, examples: e.examples }) : null
          )
        );
      var Ht = i(31480),
        Ot = i(15346),
        Ut = i(72154);
      const jt = ({
        children: e,
        popActiveView: t,
        panelClassName: i,
        contentClassName: a,
        footer: s,
        onClickBack: r,
        hideBackButton: n = O.h.create(!1),
        dataPartName: l
      }) =>
        o.createElement(
          "div",
          { className: Ot.viewOverlay, "data-grammarly-part": "assistant-view-overlay" },
          o.createElement(
            Bt.F.Fragment,
            null,
            n.view(
              (e) =>
                !e &&
                o.createElement(
                  Ut.M,
                  { className: Ot.viewOverlayGoBack, clickHandler: () => (r ? r() : t()), dataGrammarlyPart: "assistant-go-back" },
                  "<- Back"
                )
            )
          ),
          o.createElement(
            "div",
            { className: i || Ot.defaultViewOverlayPanel },
            o.createElement("div", { className: a || Ot.content, "data-grammarly-part": l }, e),
            s && o.createElement("div", { className: Ot.footer }, s)
          )
        );
      var Gt = i(73385);
      const Wt = ({ popActiveView: e, browser: t, onClickBack: i, children: a }) => {
        const [s, r] = o.useState(!1);
        return o.createElement(
          jt,
          { dataPartName: "proofit-view-overlay", popActiveView: e, panelClassName: Ht.proofitViewOverlayPanel, onClickBack: i },
          o.createElement(
            "div",
            {
              className: Ht.proofitViewOverlayContent,
              tabIndex: -1,
              ref: (e) => {
                null === e || s || (e.focus(), r(!0));
              }
            },
            o.createElement(
              "div",
              { className: Ot.defaultViewOverlayHeader },
              o.createElement(
                "div",
                { className: Ht.proofitViewOverlayHeader },
                "Expert Writing Help",
                o.createElement(Gt.v, { browser: t, className: Ht.proofitViewOverlayHeaderBetaBadge })
              )
            ),
            a
          )
        );
      };
      var zt = i(78002),
        qt = i(62369),
        Kt = i(68610),
        Zt = i(80860);
      var Xt = i(78258),
        Yt = i(92647),
        Qt = i(96528);
      const Jt = ({ turnaroundTime: e }) =>
          o.createElement(
            "div",
            { className: Yt.proofitHowItWorksSteps },
            o.createElement(
              "div",
              { ...(0, ct.Sh)(Yt.proofitHowItWorksStep, Yt.proofitHowItWorksStepOne) },
              "Your draft will be minimized and shared with writing experts.",
              o.createElement(
                "div",
                { ...(0, ct.Sh)(Yt.proofitHowItWorksStepNumberContainer, Yt.proofitHowItWorksStepOneNumberContainer) },
                o.createElement("div", { ...(0, ct.Sh)(Yt.proofitHowItWorksStepNumber, Yt.proofitHowItWorksStepOneNumber) }, "1")
              )
            ),
            o.createElement(
              "div",
              { ...(0, ct.Sh)(Yt.proofitHowItWorksStep, Yt.proofitHowItWorksStepTwo) },
              "You will see progress indication. The average turnaround is ",
              e,
              " seconds.",
              o.createElement(
                "div",
                { ...(0, ct.Sh)(Yt.proofitHowItWorksStepNumberContainer, Yt.proofitHowItWorksStepTwoNumberContainer) },
                o.createElement("div", { ...(0, ct.Sh)(Yt.proofitHowItWorksStepNumber, Yt.proofitHowItWorksStepTwoNumber) }, "2")
              )
            ),
            o.createElement(
              "div",
              { ...(0, ct.Sh)(Yt.proofitHowItWorksStep, Yt.proofitHowItWorksStepThree) },
              "Your draft will re-open with revisions highlighted.",
              o.createElement(
                "div",
                { ...(0, ct.Sh)(Yt.proofitHowItWorksStepNumberContainer, Yt.proofitHowItWorksStepThreeNumberContainer) },
                o.createElement("div", { ...(0, ct.Sh)(Yt.proofitHowItWorksStepNumber, Yt.proofitHowItWorksStepThreeNumber) }, "3")
              )
            )
          ),
        $t = ({
          turnaroundTime: e,
          freeTrialQuota: t,
          onSubmit: i,
          disabledInfo: a = null,
          isLoading: s = !1,
          style: r,
          onTogglePrivacyInfo: n,
          showPrivacyInfo: l,
          disableHowItWorksInfo: c = !1,
          onDisableHowItWorksInfo: d,
          showHowItWorksInfo: u,
          onShowHowItWorksInfo: p
        }) => {
          const [m, g] = o.useState(null != l && l),
            [h, v] = o.useState(null != u && u),
            f = t > 0 ? t : 0;
          var b, w;
          o.useEffect(() => {
            null == n || n(m);
          }, [m]),
            o.useEffect(() => {
              g(null != l && l);
            }, [l]),
            o.useEffect(() => {
              v(null != u && u);
            }, [u]),
            (b = () => (null == p ? void 0 : p())),
            (w = h),
            o.useEffect(() => {
              w && b();
            }, [w]);
          const S = o.useCallback(() => {
            c || h ? i() : v(!0);
          }, [c, h, i]);
          return o.createElement(
            "div",
            { "data-grammarly-part": "proofit-request-form", style: { width: "100%", height: "100%", ...r } },
            o.createElement(
              "div",
              { className: Qt.proofitRequestForm },
              m
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement("div", { className: Qt.proofitRequestFormPrivacyInfoTitle }, "How we protect you"),
                    o.createElement(
                      "div",
                      { className: Qt.proofitRequestFormPrivacyInfoDescription },
                      o.createElement(
                        "div",
                        { className: Qt.proofitRequestFormPrivacyInfoDescriptionItem },
                        o.createElement("div", { className: Qt.proofitRequestFormPrivacyInfoDescriptionItemBulletPoint }),
                        o.createElement(
                          "div",
                          { className: Qt.proofitRequestFormPrivacyInfoDescriptionItemText },
                          "Our writing experts will see only your current email draft—no prior messages or contact details."
                        )
                      ),
                      o.createElement(
                        "div",
                        { className: Qt.proofitRequestFormPrivacyInfoDescriptionItem },
                        o.createElement("div", { className: Qt.proofitRequestFormPrivacyInfoDescriptionItemBulletPoint }),
                        o.createElement(
                          "div",
                          { className: Qt.proofitRequestFormPrivacyInfoDescriptionItemText },
                          "We will not sell, rent, or make public any of your personal data."
                        )
                      )
                    ),
                    o.createElement(qt.z, { kind: "outlined", onClick: () => g(!1) }, "Continue")
                  )
                : o.createElement(
                    o.Fragment,
                    null,
                    h
                      ? o.createElement(Jt, { turnaroundTime: e })
                      : o.createElement(
                          o.Fragment,
                          null,
                          o.createElement("div", { className: Qt.proofitRequestFormImg }),
                          o.createElement("div", { className: Qt.proofitRequestFormTitle }, "Get instant writing help"),
                          o.createElement(
                            "div",
                            { className: Qt.proofitRequestFormDescription },
                            "Our writing experts are standing by to review your email."
                          ),
                          o.createElement(
                            "div",
                            { className: Qt.proofitRequestFormCostAndTime },
                            o.createElement(
                              "div",
                              { className: Qt.proofitRequestFormCost },
                              o.createElement(
                                "div",
                                { className: Qt.proofitRequestFormCostAndTimeTitle },
                                f,
                                " free ",
                                Te._6(f, "review", "reviews")
                              ),
                              o.createElement(
                                "div",
                                { className: Qt.proofitRequestFormCostAndTimeSubtitle },
                                "left this month",
                                o.createElement("sup", null, "*")
                              )
                            ),
                            o.createElement(
                              "div",
                              { className: Qt.proofitRequestFormTime },
                              o.createElement("div", { className: Qt.proofitRequestFormCostAndTimeTitle }, e, " seconds"),
                              o.createElement("div", { className: Qt.proofitRequestFormCostAndTimeSubtitle }, "average turnaround")
                            )
                          )
                        ),
                    o.createElement(
                      qt.z,
                      { kind: "primary", className: Qt.proofitRequestFormRequestBtn, disabled: Boolean(a || s), onClick: S },
                      s
                        ? o.createElement("div", { className: Xt.proofitRequestFormBtnLoadingSpinner })
                        : c || h
                        ? "Start review"
                        : "Request now"
                    ),
                    a || s
                      ? a
                        ? o.createElement("div", { className: Qt.proofitRequestFormUnavailableMsg }, o.createElement(Zt.Q, { info: a }))
                        : null
                      : o.createElement(qt.z, { kind: "link", onClick: () => g(!0) }, "Learn how we protect your privacy"),
                    o.createElement(
                      "div",
                      {
                        ...(0, ct.Sh)(
                          Qt.proofitRequestFormFootnote,
                          h ? Qt.proofitRequestFormFootnoteHowItWorksDontShowAgainCheckbox : Qt.proofitRequestFormFootnoteFreeTrial
                        )
                      },
                      h
                        ? o.createElement(
                            Kt.J,
                            { labelId: "proofit-request-form-how-it-works-dont-show-again", onChange: d },
                            "Don't show this again"
                          )
                        : o.createElement("span", null, o.createElement("sup", null, "*"), " included with your Premium subscription")
                    )
                  )
            )
          );
        };
      var ei = i(20067);
      const ti = ({ proofitVM: e, ...t }) => {
        const i = (0, ei.fW)(),
          [a, s] = o.useState(!1),
          [r, n] = o.useState(!1),
          l = o.createElement(
            Bt.F.Fragment,
            null,
            (0, V.aj)([
              e.feature.layoutCreated,
              e.feature.requestInfo,
              e.feature.turnaroundTime,
              e.feature.quotaRemaining,
              e.feature.requestDisabledInfo,
              e.feature.disableHowItWorksInfo
            ]).pipe(
              (0, N.U)(([t, l, c, d, u, p]) =>
                t && l.status !== zt.eE.REVIEWING
                  ? o.createElement($t, {
                      turnaroundTime: c,
                      freeTrialQuota: d,
                      onSubmit: () => e.onSubmitRequest(i),
                      style: { height: "calc(100% - 48px)" },
                      disabledInfo: u,
                      isLoading: l.status === zt.eE.PREPARING || l.status === zt.eE.PRE_SUBMIT,
                      showPrivacyInfo: a,
                      onTogglePrivacyInfo: s,
                      disableHowItWorksInfo: p,
                      onDisableHowItWorksInfo: (t) => e.feature.onDisableHowItWorksInfo(t),
                      showHowItWorksInfo: r,
                      onShowHowItWorksInfo: () => n(!0)
                    })
                  : null
              )
            )
          );
        return t.insideSingleCardAssistant
          ? l
          : o.createElement(
              Wt,
              {
                popActiveView: t.popActiveView,
                browser: t.browser,
                onClickBack: () => {
                  a ? s(!1) : r ? n(!1) : t.popActiveView();
                }
              },
              l
            );
      };
      var ii = i(60561),
        ai = i(21023);
      const si = ({ suggestionsMade: e, onAccept: t, onFeedbackFormSubmitted: i, experimentClient: a }) =>
          o.createElement(
            "div",
            { className: ai.proofitReviewForm, "data-grammarly-part": "proofit-review-form" },
            o.createElement(
              "div",
              { className: ai.proofitReviewFormTitle },
              "Our experts made ",
              e,
              " ",
              Te._6(e, "suggestion", "suggestions")
            ),
            o.createElement(
              "div",
              { className: ai.proofitReviewFormDescription },
              "Are you satisfied with the suggestions that our experts provided?"
            ),
            o.createElement(
              "div",
              { className: ai.proofitFeedbackForm },
              o.createElement(ii.q, {
                hideLogo: !0,
                hideTitle: !0,
                hideTextBoxTitle: !0,
                withScore: !0,
                placeholderText: "How can we improve?",
                onSubmit: i,
                showPostSubmitScreen: !1,
                experimentClient: a
              })
            ),
            o.createElement("div", { className: ai.proofitDoneButton }, o.createElement(qt.z, { kind: "link", onClick: t }, "Done"))
          ),
        ri = ({ proofitVM: e, experimentClient: t, ...i }) => {
          const a = (0, ei.fW)(),
            s = o.createElement(
              Bt.F.Fragment,
              null,
              (0, V.aj)([e.feature.layoutCreated, e.feature.requestInfo]).pipe(
                (0, N.U)(([i, s]) =>
                  i && s.status === zt.eE.REVIEWING
                    ? o.createElement(si, {
                        suggestionsMade: s.suggestionsMade,
                        onAccept: () => e.onCompleteRequest(a),
                        onFeedbackFormSubmitted: (t) => {
                          e.onSubmitFeedback(t), e.onCompleteRequest(a);
                        },
                        experimentClient: t
                      })
                    : null
                )
              )
            );
          return i.insideSingleCardAssistant ? s : o.createElement(Wt, { popActiveView: i.popActiveView, browser: i.browser }, s);
        };
      var ni = i(31470),
        oi = i(5397),
        li = i(6726),
        ci = i(69324),
        di = i(70836),
        ui = i(6943);
      const pi = ({ feedbackVM: e, entryPoint: t }) =>
        o.createElement(
          li.u,
          { showDelay: oi.gk, message: "Leave feedback" },
          o.createElement(
            "div",
            { className: ui.feedbackButton, onClick: () => e.openFeedback(t), "data-grammarly-part": "assistant-feedback-btn" },
            o.createElement(ci.A, { color: di.Z.blue50 }),
            "Anything we can improve?"
          )
        );
      var mi = i(3736),
        gi = i(56913),
        hi = i(33394),
        vi = i(75463),
        fi = i(40303),
        bi = i(2005),
        wi = i(31212),
        Si = i(21928),
        yi = i(50445);
      const Ei = ({
          assistantSettingsViewModel: e,
          upgradeViewModel: t,
          experimentClient: i,
          assistantFeedbackViewModel: a,
          onClose: s,
          children: r
        }) => {
          const { domain: n, actions: l, state: c } = e,
            d = o.useCallback(() => t.openUpgradeUrl(Ue.L.Place.extensionSettingsAssistant), [t]),
            [u, p] = o.useState(!!c.view("page", "enabled").get()),
            g = { checked: u, update: p },
            h = o.createElement(
              Bt.F.div,
              { role: "region", "aria-label": "Grammarly settings" },
              c.view(({ user: e, page: t, dynamicConfig: a, dapi: s }) =>
                o.createElement(mi.a, {
                  actions: l,
                  config: { enabled: !0, domain: n },
                  settings: t,
                  user: e,
                  dapi: s,
                  dynamicConfig: a,
                  siteCategory: fi.y.other,
                  openGBLanding: (e) => {
                    const t = (0, hi.Z4)(e, "gbExtensionSettingsAssistant");
                    self.open(t), gt.J.getGBButtonClick("gbExtAssistantSettings", "ExploreGrammarlyBusiness");
                  },
                  isReportBugFeatureAllowed: !i.isGateEnabled(F.K.HideReportBugByGrammarlyEmployeeFeature),
                  openReportBugForm: (e) => {
                    self.open(Si.WY(e));
                  },
                  openUrl: (e) => self.open(e),
                  showGBUpHook: (0, gi.i7)(),
                  placement: "assistant",
                  showCitationBuilderToggle: !1,
                  siteSwitcherChecked: g,
                  isIndianEnglishDialectSupported:
                    i.isGateEnabled(F.K.IndianEnglishDialect) || i.isGateEnabled(F.K.IndianEnglishDialectInternal),
                  isAutoApplySupported: i.isGateEnabled(F.K.SuggestionDeliveryAutoApply),
                  downloadDebugReports: () => yi.B.download(),
                  isKeyboardAccessible: i.isGateEnabled(F.K.ExtensionA11yKeyboardNavigation)
                })
              ),
              a ? o.createElement(pi, { feedbackVM: a, entryPoint: ni.Q.settings }) : null
            ),
            v = o.createElement(
              qt.z,
              {
                kind: "primary",
                type: "submit",
                onClick: () => {
                  l.toggleSite(u, n),
                    gt.J.checkingToggleClick("assistant", fi.y.other, u ? "on" : "off"),
                    (0, m.Tb)().toggleExtension(u, "assistant", (0, vi.FN)(n)),
                    null == s || s();
                },
                className: bi.settingsViewDoneButton,
                dataGrammarlyPart: "single-card-assistant-settings-done-button"
              },
              "Done"
            );
          return r({
            content: h,
            footer: o.createElement(
              Bt.F.Fragment,
              null,
              c.view(({ user: e }) => o.createElement(wi.Z, { user: e, openSubscriptionDialog: d, isAssistant: !0 })),
              v
            )
          });
        },
        Ci = ({ viewModels: e, experimentClient: t }) =>
          o.createElement(
            Ei,
            {
              onClose: () => e.assistantLayoutViewModel.popActiveView(),
              assistantSettingsViewModel: e.assistantSettingsViewModel,
              upgradeViewModel: e.upgradeViewModel,
              assistantFeedbackViewModel: e.assistantFeedbackViewModel,
              experimentClient: t
            },
            ({ content: t, footer: i }) =>
              o.createElement(
                jt,
                {
                  dataPartName: "settings-view-overlay",
                  popActiveView: () => e.assistantLayoutViewModel.popActiveView(),
                  panelClassName: bi.settingsViewOverlayPanel,
                  contentClassName: bi.settingsViewOverlayContent,
                  footer: i
                },
                t
              )
          );
      var ki = i(89872),
        _i = i(67506),
        Ai = i(40578);
      const Ii = ({
        message: e,
        children: t,
        placement: i,
        size: a,
        hideAfter: s,
        onClose: r,
        dataGrammarlyPart: n = "ui-kit-popover-notification"
      }) => {
        const [l, c] = o.useState(!1);
        return (
          o.useEffect(() => {
            let e;
            return (
              s > 0 &&
                (c(!0),
                (e = self.setTimeout(() => {
                  c(!1), null == r || r();
                }, s))),
              () => {
                e && self.clearTimeout(e);
              }
            );
          }, [s]),
          o.createElement(
            _i.J,
            {
              dataGrammarlyPart: n,
              isOutsideReferenceElement: !1,
              headerContent: o.createElement("div", { className: Ai.popoverNotificationMessage }, e),
              mainContent: null,
              show: l,
              placement: i,
              size: a,
              onClose: () => {
                c(!1), null == r || r();
              },
              showArrow: !1,
              includeMainContentPadding: !1
            },
            t
          )
        );
      };
      var xi = i(37902),
        Ti = i(31742),
        Mi = i(37522),
        Ri = i(84966),
        Pi = i(31278),
        Li = i(3618);
      const Fi = ({ emotion: e, isBrandTonesEnabled: t, index: i, onFeedback: a }) => {
        const [s, r] = o.useState(0),
          n = o.createElement(
            li.u,
            { message: `${e.prevalence} intensity`, showDelay: 300 },
            o.createElement(
              "div",
              { className: Li.emogenieReportItemEmotionIntensity },
              [0, 1, 2, 3, 4].map((t) => {
                const i = t / 5 <= e.confidence;
                return o.createElement("div", {
                  key: `${e.name}-intensity-${t}`,
                  ...(0, ct.Sh)(Li.emogenieReportItemEmotionIntensityDot, i && Li.emogenieReportItemEmotionIntensityDotActive)
                });
              })
            )
          ),
          l = o.createElement(
            li.u,
            { message: e.brandToneDescription, showDelay: 300 },
            o.createElement(
              "div",
              null,
              o.createElement(Pi.JO.Info, {
                width: 10,
                className: "off" === e.brandToneLabel ? Li.emogenieBrandToneInfoIconOff : Li.emogenieBrandToneInfoIconOn
              })
            )
          ),
          c = o.createElement(ki.C, {
            title: o.createElement(o.Fragment, null, e.brandToneLabel, "-BRAND ", l),
            kind: "off" === e.brandToneLabel ? "error" : "primary"
          }),
          d = e.brandToneLabel ? c : n;
        return o.createElement(
          Bt.F.div,
          {
            ...(0, ct.Sh)(Li.emogenieReportItem, t ? Li.emogenieReportItemBrandTone : null),
            "data-grammarly-part": "tone-detector-emotion",
            "data-tone-detector-emotion-name": e.name
          },
          o.createElement(
            "div",
            { role: `emotion-${i}-${e.name}` },
            o.createElement(
              "div",
              { className: Li.emogenieReportItemEmotion },
              o.createElement(
                "div",
                { className: Li.emogenieReportItemEmotionEmojiAndNameContainer },
                o.createElement(
                  Ii,
                  {
                    dataGrammarlyPart: "tone-detector-emotion-feedback-notification",
                    message: "Thank you for the feedback!",
                    hideAfter: s,
                    placement: "right",
                    onClose: () => r(0),
                    size: "medium"
                  },
                  o.createElement(
                    "div",
                    { className: Li.emogenieReportItemEmotionEmojiAndName },
                    o.createElement(xi.dy, {
                      size: "small-medium",
                      unicodeHexArray: [e.emojiId],
                      unicodeLiteral: e.emoji,
                      className: Li.emogenieReportItemEmotionEmoji
                    }),
                    o.createElement("span", { className: Li.emogenieReportItemEmotionName }, e.name)
                  )
                )
              ),
              o.createElement("div", { className: Li.emogenieReportItemEmotionBadgeOrIntensity }, d),
              o.createElement(
                Ti.m,
                {
                  dataGrammarlyPart: "tone-detector-emotion-actions-menu",
                  ariaMenuId: `${e.name}-emotion-actions-menu`,
                  ariaMenuLabel: `${e.name} Emotion Actions Menu`,
                  sections: [
                    {
                      title: "Help us improve",
                      items: [
                        {
                          id: "tone-detector-emotion-actions-menu-item-like",
                          icon: o.createElement("div", { className: Li.emogenieReportItemEmootionActionsMenuThumsUpIcon }),
                          label: "Tone seems correct",
                          onClick: () => {
                            a({ emotionName: e.name, feedbackType: Ri.y_.EMOTION_LIKE }), r(1200);
                          }
                        },
                        {
                          id: "tone-detector-emotion-actions-menu-item-dislike",
                          icon: o.createElement("div", { className: Li.emogenieReportItemEmootionActionsMenuThumsDownIcon }),
                          label: "Tone seems incorrect",
                          onClick: () => {
                            a({ emotionName: e.name, feedbackType: Ri.y_.EMOTION_DISLIKE }), r(1200);
                          }
                        }
                      ]
                    }
                  ],
                  size: "medium",
                  placement: "left"
                },
                o.createElement(
                  Mi.h,
                  {
                    dataGrammarlyPart: "tone-detector-emotion-actions-menu-button",
                    className: Li.emogenieReportItemEmotionActionsMenuButton
                  },
                  o.createElement("div", { className: Li.emogenieReportItemEmotionActionsMenuIcon })
                )
              )
            )
          )
        );
      };
      var Di = i(24812),
        Ni = i(65515);
      const Bi = ({ emotions: e, isBrandTonesEnabled: t, toneSuggestionInfo: i, onMount: a, onReportEmotionFeedback: s, ...r }) => {
          let n;
          switch ((o.useEffect(a, []), !0)) {
            case e.some((e) => e.brandToneLabel && "off" === e.brandToneLabel && e.confidence > 0.75):
              n = "Your tone may sound off to readers";
              break;
            case e.some((e) => e.brandToneLabel && "off" === e.brandToneLabel):
              n = "Something sounds slightly off...";
              break;
            case e.some((e) => e.brandToneLabel && "on" === e.brandToneLabel):
              n = t ? "You're on-brand! Great job!" : "Your writing sounds clear and aligned. Great job!";
              break;
            default:
              n = "How this may sound to readers:";
          }
          return o.createElement(
            "div",
            { className: Di.emogenieReport, "data-grammarly-part": "tone-detector" },
            o.createElement(
              "div",
              { className: Di.emogenieReportHeader },
              o.createElement("div", { className: Di.emogenieReportHeaderTitle }, n),
              r.showBetaLabel ? o.createElement(Gt.v, { browser: r.browser }) : null
            ),
            o.createElement(
              "div",
              { className: Di.emogenieReportItems, "data-grammarly-part": "tone-detector-emotions" },
              e.map((e, i) => o.createElement(Fi, { key: e.name, index: i, emotion: e, isBrandTonesEnabled: t, onFeedback: s }))
            ),
            i ? o.createElement(Vi, { ...i }) : null
          );
        },
        Vi = ({ onMount: e, emojiId: t, emojiLiteral: i, iconId: a, title: s, onClickCta: r, ctaText: n, isUphook: l }) => (
          o.useEffect(e, []),
          o.createElement(
            "div",
            { className: Di.emogenieReportToneSuggestionInfo },
            o.createElement(
              "div",
              { className: Di.emogenieReportToneSuggestionInfoEmojiAndTitle },
              t
                ? o.createElement(xi.dy, {
                    size: "small-medium",
                    unicodeHexArray: [t],
                    unicodeLiteral: null,
                    className: Di.emogenieReportToneSuggestionInfoEmoji
                  })
                : i
                ? o.createElement(xi.dy, {
                    size: "small-medium",
                    unicodeHexArray: null,
                    unicodeLiteral: i,
                    className: Di.emogenieReportToneSuggestionInfoEmoji
                  })
                : a
                ? o.createElement("img", {
                    alt: a,
                    src: `https://assets.grammarly.com/icons/v1/${a}.svg`,
                    style: { width: 20, height: 20 },
                    className: Di.emogenieReportToneSuggestionInfoEmoji
                  })
                : null,
              o.createElement("div", null, s)
            ),
            l
              ? o.createElement(Ni.Y, { onClick: r, dataGrammarlyPart: "tone-detector-tone-suggestion-info-cta" })
              : o.createElement(qt.z, { kind: "primary", onClick: r, dataGrammarlyPart: "tone-detector-tone-suggestion-info-cta" }, n)
          )
        ),
        Hi = ({
          emogenieService: e,
          toneSuggestionInfo: t,
          onShowToneSuggestionInfo: i,
          onClickToneSuggestionInfoCta: a,
          showBetaLabel: s,
          browser: r
        }) =>
          o.createElement(
            Bt.F.Fragment,
            null,
            O.h.combine(e.viewState, null != t ? t : O.h.create(void 0), ({ report: t, isBrandTonesEnabled: n }, l) => {
              let c;
              if (
                (l &&
                  ((c = {
                    title: l.title,
                    onMount() {
                      null == i || i(l);
                    },
                    onClickCta() {
                      null == a || a(l);
                    },
                    ctaText: "See suggestions",
                    isUphook: !1
                  }),
                  Xe.isToneImprovementSuggestionUphookInfo(l) &&
                    (c = { ...c, isUphook: !0, emojiId: l.emojiId, emojiLiteral: l.emojiLiteral }),
                  (c = Xe.isInclusiveLanguageToneSuggestionInfo(l) ? { ...c, iconId: l.iconId } : { ...c, emojiId: l.emojiId })),
                t && Array.isArray(t.emotions))
              ) {
                const i = {
                  emotions: t.emotions,
                  isBrandTonesEnabled: n,
                  onMount: () => e.actions.trackReportShow(n),
                  onReportEmotionFeedback: (t) => e.actions.reportEmotionFeedback(t),
                  toneSuggestionInfo: c
                };
                return s ? o.createElement(Bi, { ...i, showBetaLabel: !0, browser: r }) : o.createElement(Bi, { ...i, showBetaLabel: !1 });
              }
              return null;
            })
          );
      var Oi = i(77678),
        Ui = i(94632),
        ji = i(89894),
        Gi = i(46324),
        Wi = i(89572),
        zi = i(38575);
      const qi = ({ children: e }) => o.createElement("div", { className: zi.gbUpsellFooter }, e),
        Ki = () =>
          o.createElement(
            "svg",
            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
            o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.271 3.5c-1.254 0-2.287 1.04-2.287 2.342v1.421c0 1.303 1.033 2.342 2.287 2.342s2.287-1.04 2.287-2.342v-1.42c0-1.304-1.033-2.343-2.287-2.343zM4.984 5.842C4.984 4.006 6.446 2.5 8.27 2.5s3.287 1.506 3.287 3.342v1.421a3.358 3.358 0 01-1.393 2.732c.001.217.005.328.018.428a2.2 2.2 0 001.024 1.589c.114.07.25.133.605.294l1.194.541a.5.5 0 01-.412.911l-1.228-.556c-.31-.141-.51-.231-.685-.34a3.2 3.2 0 01-1.499-2.387 3.243 3.243 0 01-1.817.002 3.2 3.2 0 01-1.302 2.336c-.206.15-.445.272-.818.462l-1.119.57c-.426.218-.589.303-.722.4a2.2 2.2 0 00-.876 1.43 2.362 2.362 0 00-.025.325h3.33a.5.5 0 010 1H2a.5.5 0 01-.5-.5v-.045c0-.418 0-.686.04-.938a3.2 3.2 0 011.274-2.08c.206-.15.445-.272.818-.462l1.12-.57c.425-.218.588-.303.722-.4a2.2 2.2 0 00.876-1.43c.02-.132.026-.277.027-.58a3.358 3.358 0 01-1.393-2.732v-1.42z",
              fill: "#05735A"
            }),
            o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.529 8c1.254 0 2.287 1.04 2.287 2.342v1.421c0 1.303-1.033 2.342-2.287 2.342s-2.287-1.04-2.287-2.342v-1.42C13.242 9.038 14.275 8 15.529 8zm3.287 2.342C18.816 8.506 17.354 7 15.53 7s-3.287 1.506-3.287 3.342v1.421c0 1.837 1.462 3.342 3.287 3.342.315 0 .618-.045.906-.128a3.2 3.2 0 001.302 2.336c.206.15.445.272.818.462l1.119.57c.426.218.589.303.723.4a2.2 2.2 0 01.875 1.43 2.3 2.3 0 01.025.325h-3.33a.5.5 0 100 1H21.8a.5.5 0 00.5-.5v-.045c0-.418 0-.686-.04-.938a3.2 3.2 0 00-1.274-2.08c-.206-.15-.445-.272-.818-.462l-.04-.02-1.08-.55c-.425-.218-.588-.303-.722-.4a2.2 2.2 0 01-.876-1.43 3.835 3.835 0 01-.027-.58 3.358 3.358 0 001.393-2.732v-1.42z",
              fill: "#05735A"
            }),
            o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.471 8c-1.254 0-2.287 1.04-2.287 2.342v1.421c0 1.303 1.033 2.342 2.287 2.342s2.287-1.04 2.287-2.342v-1.42C17.758 9.038 16.725 8 15.471 8zm-3.287 2.342C12.184 8.506 13.646 7 15.47 7s3.287 1.506 3.287 3.342v1.421c0 1.837-1.462 3.342-3.287 3.342-.315 0-.618-.045-.906-.128a3.2 3.2 0 01-1.302 2.336c-.206.15-.445.272-.818.462l-1.119.57c-.426.218-.589.303-.722.4a2.2 2.2 0 00-.876 1.43 2.365 2.365 0 00-.025.325h8.73a.5.5 0 010 1H9.2a.5.5 0 01-.5-.5v-.045c0-.418 0-.686.04-.938a3.2 3.2 0 011.274-2.08c.206-.15.445-.272.818-.462l.04-.02 1.08-.55c.425-.218.588-.303.722-.4a2.2 2.2 0 00.876-1.43c.02-.132.026-.277.027-.58a3.358 3.358 0 01-1.393-2.732v-1.42z",
              fill: "#05735A"
            })
          ),
        Zi = (e) => (
          o.useEffect(() => {
            e.trackShow();
          }, []),
          o.createElement(
            qi,
            null,
            o.createElement("div", { className: zi.icon }, o.createElement(Ki, null)),
            o.createElement(
              "div",
              null,
              "Want your team to save time and write more consistently? Explore style guides in",
              " ",
              o.createElement("span", { className: zi.clickableLink, onClick: e.onClick }, "Grammarly Business.")
            )
          )
        ),
        Xi = (e) => (
          o.useEffect(() => {
            e.trackShow();
          }, []),
          o.createElement(
            qi,
            null,
            o.createElement(
              "div",
              null,
              "Want your team to use a consistent brand voice wherever they write? Explore brand tones in",
              " ",
              o.createElement("span", { className: zi.clickableLink, onClick: e.onClick }, "Grammarly Business.")
            )
          )
        );
      var Yi;
      !(function (e) {
        (e.Feedback = "feedback"), (e.Settings = "settings"), (e.ToneInsight = "toneInsight"), (e.LearnMore = "learnMore");
      })(Yi || (Yi = {}));
      const Qi = o.createContext({ isEnabled: !1, currentView: null, setCurrentView: () => {} }),
        Ji = ({ children: e, view: t }) => {
          const { setCurrentView: i, isEnabled: a } = o.useContext(Qi);
          return (
            o.useEffect(() => {
              if (a) return i(t), () => i(null);
            }, [a, t]),
            o.createElement(o.Fragment, null, e)
          );
        };
      var $i = i(711),
        ea = i(54678),
        ta = i(64015);
      const ia = (e) => {
          const t = (t) =>
            "known" === t.source.kind
              ? o.createElement(e.designSystem.icon[t.source.name], { key: t.source.name, backgroundColor: t.backgroundColor })
              : o.createElement(e.designSystem.image, { key: t.source.name, backgroundColor: t.backgroundColor, ...t.source });
          return o.createElement(
            ea.v.Dropdown,
            {
              label: t(e.icon),
              placement: "top right",
              theme: { button: ra.button, item: ra.item },
              "aria-label": e.menu.meta.label,
              onAction: (t) =>
                (0, _.zG)(
                  e.menu.sections,
                  ta.tS((e) => e.items),
                  ta.Ew((e) => e.id === String(t)),
                  We.bw((t) => e.onClick(t.onClickActions, t.id)())
                )
            },
            e.menu.sections.map((e, i) =>
              o.createElement(
                ea.v.Section,
                { key: i, title: e.title },
                e.items.map((e) => o.createElement(ea.v.Item, { key: e.id, textValue: e.id }, e.icon && t(e.icon), e.text))
              )
            )
          );
        },
        aa = { flexShrink: 0, alignItems: "center", justifyContent: "center", height: ji.ux.rem(2), width: ji.ux.rem(2) },
        sa = { $nest: { "& i": { height: ji.ux.rem(2), width: ji.ux.rem(2) } } },
        ra = ji.ux.stylesheet({ button: [aa], item: [sa] }),
        na = {
          ...(0, Ui.T)({ default: {}, hovered: { backgroundColor: Oi.CoreNeutral10 }, clicked: {}, disabled: {}, toggled: {}, hidden: {} })
        },
        oa = ji.ux.stylesheet({
          main: [Gi.o_],
          primary: [Gi.U8],
          secondary: [na, Gi.P5],
          toggle: Gi.hc,
          round: [Gi.$O],
          yellow: Gi.g2,
          outlined: [na, Gi.Yf],
          link: [Gi.wy],
          darkPrimary: [Gi.hx],
          darkSecondary: [Gi.kG],
          ggoPrimary: [Gi.KF]
        });
      const la = ({ children: e }) => o.createElement("div", { className: $i.singleCardAssistantNativeContentWithPadding }, e),
        ca = ({ children: e, maxHeight: t }) => o.createElement("div", { style: { maxHeight: t, overflowY: "auto" } }, e),
        da = ji.ux.style(
          Gi.o_,
          (0, Ui.T)({
            default: {
              backgroundColor: Oi.CoreYellow20,
              color: Oi.CoreYellow80,
              lineHeight: ji.ux.rem(2),
              transitionDuration: ".2s",
              $nest: { "& span": { color: Oi.CoreYellow80 } }
            },
            hovered: {
              backgroundColor: Oi.CoreYellow30,
              $nest: { "& i": { fill: Oi.CoreYellow80, stroke: Oi.CoreYellow80 }, "& span": { color: Oi.CoreYellow80 } }
            },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          }),
          { $nest: { "& i": { fill: Oi.CoreYellow80, stroke: Oi.CoreYellow80 }, "& span": { color: Oi.CoreYellow80 } } }
        ),
        ua = () => {
          const e = (0, Gi.ND)(),
            t = e.primary;
          return {
            ...e,
            primary: (e) =>
              "goPremium" === e.name
                ? o.createElement(ot.zx.Primary, { name: e.name, onClick: e.onClick, className: da }, e.text)
                : o.createElement(t, { ...e })
          };
        };
      var pa = i(55563),
        ma = i(864),
        ga = i(13299),
        ha = i(52098),
        va = i(14592),
        fa = i(52622),
        ba = i(13313),
        wa = i(21619),
        Sa = i(54216),
        ya = i(54466),
        Ea = i(92485),
        Ca = i(20594),
        ka = i(35607),
        _a = i(4890),
        Aa = i(73841),
        Ia = i(89770),
        xa = i(39920),
        Ta = i(30013),
        Ma = i(66866),
        Ra = i(55935),
        Pa = i(76974),
        La = i(95574),
        Fa = i(81531),
        Da = i(84174),
        Na = i(8821),
        Ba = i(64998);
      class Va {
        constructor(e, t, i, a) {
          (this._gnar = e),
            (this.experimentClient = t),
            (this.user = i),
            (this.toneDetectorViewModel = a),
            (this.shouldShowGBUpgradeFooter = (e) =>
              this.user.isPremium && !this.user.institutionInfo && "test" === this.experimentClient.getTreatment(e)),
            (this.onClick = (e, t) => {
              this._gnar.getGBButtonClick(e, void 0, this.hasToneSuggestions(e)), self.open((0, hi.Z4)(t, e));
            }),
            (this.trackShow = (e) => {
              this._gnar.getGBButtonShow(e, this.hasToneSuggestions(e));
            });
        }
        hasToneSuggestions(e) {
          return "gbToneDetector" === e ? void 0 !== this.toneDetectorViewModel.toneSuggestionInfo.get() : void 0;
        }
      }
      var Ha = i(26804);
      const Oa = (e, t, i, a, s, r, l, c, u, p, g, h, v, f, b, w, S, y, E, W, z, X, Y, Q, $, ee, te, ie, ae) => {
        const re = Fa.C8.Logging.getLogger("SingleCardAssistant.ViewModels"),
          oe = O.h.create(ba.A.defaultState),
          le = Sa.t.create(Sa.t.defaultLensFilters, {
            ...Sa.t.defaultTextFilters,
            [Qe.R.SpecialId.Closed]: _.jv,
            [Qe.R.SpecialId.AllAlerts]: G.bZ.belongsToAllAlerts
          }),
          de = ba.A.get(e.alertsList.state, e.alertsList.lensesScores, le).subscribe(H.wW(oe)),
          ue = new ha.t(oe.view("lenses"), le, e.sessionModel.scoreStatus),
          pe = (0, Ea.$y)((0, fa.a)(t).getContents),
          ge = {
            features: new Set([Ca.IG.Features.showCardLabelInOutcomes]),
            cardLayoutDensityMode: _a.j.Density.minimal,
            shouldAnimateAlertApply: Ca.IG.Default.shouldAnimateAlertApply,
            cardVisualMode: O.h.create(_a.j.CardVisualMode.RegularLightMode)
          },
          he = (0, Ca.Ls)(pe, e.alertsReader, ge, () => Pa.of(Z.none), e.mutingAlertsReader),
          be = O.h.create(16),
          ye = j.getCapabilities(he, e.alertsReader),
          Ce = new xa.gi(j.equatable.structEq, j.defaultOrd(ye)),
          _e = () => () => _.yR,
          Te = Ta.v.createWithInitialAlerts(Ce, _e, le, (0, _.ff)(G.bZ.isMuted), ye),
          Me = new Ia.oq(e.alertsList.state, e.alertsReader, oe.view("lenses"), e.positionManager, ue, Te, _e, ye, le),
          Pe = O.h.create(Me.emptyState(Qe.R.SpecialId.AllAlerts).patch({ alertSource: G.l$.sidebar }));
        i.next({ kind: pa.R.ChangeLens, selectedLens: "all" });
        const Fe = new ma.C((0, A.nD)(S())),
          Ne = new ya.Xx(
            { flush: () => t.flushChanges() },
            new fe.xQ(),
            he,
            e.alertsService,
            e.alertsReader,
            () => Promise.resolve(),
            () => Promise.resolve(),
            (0, _.zG)(
              e.mutedAlertsCategoriesModel,
              Z.map((e) => ({ model: e, openSuggestionsManagement: () => self.open((0, gi.Um)().suggestionsSettings) }))
            ),
            Z.some(T.B.getCardsViewModelSendToURLExperiment(Fe, l)),
            _.jv,
            j.getActiveItemWithAlert,
            ye,
            Pe,
            Fe,
            { bufferTransitions: !0, showGbPrompt: T.B.shouldShow(u.get()) }
          ),
          Be = new Da.q(z.sduiFeedbackService, ye, Pe, z.sduiManager, z.sduiFeedManager, e.alertsReader, e.plagiarismClient, Ne, Fe),
          Ve = Be.sduiActionEvents.subscribe(({ actions: e }) =>
            e.forEach((e) => {
              "closeCard" === e.type && p();
            })
          ),
          Oe = new ce(c, l),
          je = new x.y(Ne.actionEvents, l, e.alertsReader),
          Ge = new ka.o(() => xe.right(void 0)),
          ze = O.h.create(!1),
          qe = new Ue.x(e.alertsList, Pe, 3, ae, l),
          Ke = O.h.create(!1),
          { nativeUpgradeHook: Ze, upgradeHookExperiment: Xe, experimentGroup: et } = (0, rt.o)(y),
          tt = Xe.name;
        ie.upgradeHooksExp.upgradeHookExperimentPeek(tt, et, c);
        const at = new nt(z.sduiManager.state),
          ot = ((e, t, i, a, s, r) => {
            const n = t.pipe(N.U(L.D1.NativeUpgradeHook.findUpgradeHookSduiItem), N.U(Z.isSome));
            return e.pipe(
              se.M(n, i),
              N.U(([{ actions: e }, t, i]) => {
                e.forEach((e) => {
                  "pushAssistantFeed" === e.type &&
                    "default-feed" === e.feedId &&
                    (t || i) &&
                    a.upgradeHooksExp.upgradeHookFeedRendered(s, r, (0, it.ge)());
                });
              })
            );
          })(Be.sduiActionEvents, z.sduiManager.state, at.upgradeHookCardExists, ie, tt, et).subscribe(),
          lt = Ze
            ? ((e, t, i, a, s) =>
                Je.B.getPremiumAlerts(e, t)
                  .pipe(
                    B.x((e, t) => {
                      const i = new Set(e.map((e) => e.id));
                      return e.length === t.length && t.every((e) => i.has(e.id));
                    }),
                    se.M(a.pipe(N.U(L.D1.NativeUpgradeHook.findUpgradeHookSduiItem), N.U(Z.isSome)), s, De(i.capiEvents)),
                    we.b(([e, t, a, s]) => {
                      if (0 === e.length && t) i.pushCapiSduiEvent({ kind: "sdui_remove", rev: 0, sduiRootId: L.D1.NativeUpgradeHook.ID });
                      else if (e.length > 0 && !a) {
                        let a;
                        (a = t ? "sdui_update" : "sdui_add"),
                          i.pushCapiSduiEvent({ kind: a, rev: 0, sduiRootId: L.D1.NativeUpgradeHook.ID, sdui: st(e, s) });
                      }
                    })
                  )
                  .subscribe())(e.alertsList.state, Pe, z.sduiBufferService, z.sduiManager.state, Ke)
            : D.w.EMPTY,
          ct = Ze
            ? ((e, t, i, a, s, r, n) =>
                e
                  .pipe(
                    N.U(({ actions: e, cardId: o }) =>
                      e.forEach((e) => {
                        "upgradeToPremium" === e.type
                          ? (i.trackUpgradeButtonClick({
                              placement: "advancedIssues",
                              bannerType: "SeeWhatsInPremium",
                              upgradeHookName: "advancedIssues",
                              upgradeHookSlot: "singleCardAssistant"
                            }),
                            i.openUpgradeUrl(Ue.L.Place.assistantCardList))
                          : "notify" === e.type && e.userAction === Re.nz.Focus
                          ? o === L.D1.NativeUpgradeHook.ID
                            ? (t.set(!0),
                              i.trackUpgradeButtonShow({
                                placement: "advancedIssues",
                                bannerType: "SeeWhatsInPremium",
                                upgradeHookName: "advancedIssues",
                                upgradeHookSlot: "singleCardAssistant"
                              }),
                              (0, m.Tb)().upgradeHooksExp.upgradeHookCardShown(r, n, (0, it.ge)()))
                            : t.set(!1)
                          : "removeRoot" === e.type &&
                            o === L.D1.NativeUpgradeHook.ID &&
                            (t.set(!1),
                            s.set(!0),
                            a.pushCapiSduiEvent({ kind: "sdui_remove", rev: 0, sduiRootId: L.D1.NativeUpgradeHook.ID }));
                      })
                    )
                  )
                  .subscribe())(Be.sduiActionEvents, ze, qe, z.sduiBufferService, Ke, tt, et)
            : at.processUpgradeHookSduiCardActions(Be.sduiActionEvents, qe, ie, tt, et),
          dt = Ze ? ze : at.upgradeHookCardFocused,
          ut = dt.subscribe((e) => {
            e && Ha.p.dismissInlineYellowUnderlines.set(!0);
          }),
          pt = z.sduiFeedManager.feed.pipe(N.U((e) => e.feedId === L.D1.AssistantFeed.PERFORMANCE_SCORE_FEED)),
          mt = O.h.create(!1),
          gt = V.aj([dt, pt])
            .pipe(N.U(([e, t]) => e || t))
            .subscribe(H.wW(mt)),
          ht = ((e, t, i) =>
            i.pipe(Le.h(Boolean), $e.P()).subscribe(() => {
              t !== Ee.p.UpgradeCardGBRebrand && e.getTreatment(t);
            }))(y, Xe, mt),
          ft = V.aj([(0, va.gM)(z.sduiManager.state, z.sduiFeedManager.feed), mt]).pipe(
            N.U(
              ([e, t]) =>
                (i) =>
                  (e(i) && !G.bZ.isHidden(i)) || (t && G.bZ.isPremium(i) && G.bZ.isHidden(i))
            )
          ),
          bt = new va.o$(e.alertsList, e.alertsReader, e.positionManager, e.alertsService, t, Pe, ft, j.getActiveItemWithAlert, a, !0, mt),
          wt = (0, ga.hp)(Pe, bt, be, Ge, t, re),
          St = Pe.view(q.nL.getActiveAlertHighlight(j.getActiveItemWithAlert)),
          yt = new wa.mN(
            t,
            bt,
            e.alertsReader,
            St,
            Pe.view((e) => e.currentLens.meta.filter)
          ),
          Et = new Ye(
            e.alertsReader,
            e.alertsList.state,
            () => Z.fromNullable(null == v ? void 0 : v.sessionUuid),
            l,
            y,
            W,
            qe,
            u,
            Ne.actionEvents,
            z.sduiManager.state
          ),
          Ct = new ve(Pe, e.alertsReader, h, Be.sduiActionEvents, j.getActiveItemWithAlert),
          kt = new ne(Be.sduiActionEvents, te),
          _t = new He(z.sduiManager, z.sduiFeedManager, z.sduiBufferService, b, Pe, at.upgradeHookCardExists, e.sessionModel, y);
        _t.initSuccessReportSDUIEmulation();
        const At = new U(z.sduiManager.state, Ne, _t.isSuccess, y),
          It = yt.alertClicked
            .pipe(
              Ra.T(1),
              Ae.w(Z.fold(() => Ie.E, Pa.of)),
              Le.h((e) => e.alert.lensId !== Qe.R.SpecialId.Premium),
              se.M(z.sduiManager.state),
              N.U(([t, i]) =>
                (0, _.zG)(
                  e.alertsReader.getById(t.alert.id),
                  Z.chain(G.bZ.getRawId),
                  Z.chain((e) => L.D1.getByAlertId(i, e)),
                  We.MH
                )
              ),
              se.M(z.sduiFeedManager.feed)
            )
            .subscribe(([e, t]) => {
              let i;
              (i =
                t.feedId === L.D1.AssistantFeed.TONE_INSIGHTS_CARD_FEED_ID || t.feedId === L.D1.AssistantFeed.PERFORMANCE_SCORE_FEED
                  ? [L.D1.AssistantFeed.createPopAssistantFeedAction(), L.D1.AssistantFeed.createFocusAssistantCardAction(e.id)]
                  : [L.D1.AssistantFeed.createFocusAssistantCardAction(e.id)]),
                Ne.actionEvents.next(L.fr.create(i));
            }),
          xt = ((e, t, i, a) =>
            e
              .pipe(
                Ra.T(1),
                Ae.w(Z.fold(() => Ie.E, Pa.of)),
                Le.h((e) => e.alert.lensId === Qe.R.SpecialId.Premium),
                se.M(t, i)
              )
              .subscribe(([e, t, i]) => {
                if (i.feedId === L.D1.AssistantFeed.PERFORMANCE_SCORE_FEED) {
                  const e = (0, _.zG)(
                      t,
                      Z.fold(
                        () => L.D1.NativeUpgradeHook.ID,
                        (e) => e.id
                      )
                    ),
                    i = [L.D1.AssistantFeed.createPopAssistantFeedAction(), L.D1.AssistantFeed.createFocusAssistantCardAction(e)];
                  a.next(L.fr.create(i));
                }
              }))(yt.alertClicked, at.upgradeHookCard, z.sduiFeedManager.feed, Ne.actionEvents),
          Tt = [
            (0, _.zG)(
              Ma.EQ.focusMarkByActiveAlert(
                Pe,
                bt,
                e.alertsReader,
                j.getActiveFocusableItem,
                re.getLogger("MarksEffects.focusMarkByActiveAlert")
              ),
              q.nL.Effect.Producer.delayed(a)
            ),
            ...Ne.getApplicatorEffects(),
            ...Be.getApplicatorEffects(),
            (0, _.zG)((0, ga.k9)(Pe, wt, O.h.create(Z.none), j.getActiveAlignableItem, ye), q.nL.Effect.Producer.delayed(a)),
            Na.N.PrevNextNavigation.sideEffect(Na.N.PrevNextNavigation.Events.fromSduiCardActions(Be.sduiActionEvents), Pe, ye),
            J.P.SideEffects.createSDUIFeedSideEffect(ye, z.sduiFeedManager.feed, j.sduiToChecksFeedOrd(ye), e.alertsReader)
          ],
          Mt = Ze
            ? ({ state: e, metadata: t }) => {
                if (!q.nL.hasCards(e)) return xe.left({ state: e, metadata: t });
                const i = q.nL.Prism.getLens();
                return xe.left({
                  state: i.modify(
                    (e) =>
                      Z.isSome(e.cardIndex) ||
                      e.items.size > 1 ||
                      (0, n.pipe)(
                        e.items.getAt(0),
                        Z.map((e) => e.id !== L.D1.NativeUpgradeHook.ID),
                        Z.getOrElse(_.jv)
                      )
                        ? e
                        : { ...e, cardIndex: Z.some(0) },
                    e
                  ),
                  metadata: t
                });
              }
            : xe.left,
          Rt = K.v.Items.getRemoveDisposedItemsTransformer(ye),
          Lt = Ba.i.DisablePrevNextButtons.create(ye),
          Ft = K.v.Items.getSingleItemFeedPositionsUpdateTransformer(ye),
          Dt = (0, _.ls)(Mt, La.L9(_t.focusSuccessReportStateTransformer), La.L9(Rt), La.L9(Lt), La.L9(Ft)),
          Nt = new Aa.l(Pe, Me, e.alertsReader, e.alertsService, Tt, j.getActiveItemWithAlert, Dt),
          Bt = new P.X(s, r, ee, c),
          Ht = Ne.actionEvents.subscribe(
            (0, _.ls)(
              (0, I.JH)(e.alertsReader, I.SV.Source.assistant),
              We.bw((e) => (e.kind === I.SV.Kind.alertApply && e.source === I.SV.Source.assistant && E.incrementCounter(), f.next(e)))
            )
          ),
          Ot = (0, M.W)(g),
          Ut = w
            .pipe(
              Ae.w(
                Z.fold(
                  () => Ie.E,
                  (t) => t.initSingleCardAssistantActionsProcessing(e.alertsReader, (0, C.X5)(yt, Pe))
                )
              )
            )
            .subscribe(),
          jt = new Se(Ne, z),
          Gt = new k.D(l, Q, $, X),
          Wt = (0, _.zG)(
            Y,
            Z.map((e) => new R.S(Gt, e, p, l))
          ),
          zt = new ke(Ne.actionEvents, h, s.view("page"), r, y, l),
          qt = new Va(l, y, u.get(), Et),
          Kt = new me(u.get().isAnonymous, s.get(), l, ee),
          Zt = (function (e, t, i, a, s, r, n, l, c, u, p) {
            const m = () => n.next();
            return {
              ...Wi.k,
              button: ua(),
              dropDownMenuButton: r.isGateEnabled(F.K.ExtensionA11ySingleCardAssistantDragging) ? ia : Wi.k.dropDownMenuButton,
              nativeToneInsightsModal: () =>
                o.createElement(
                  Ji,
                  { view: Yi.ToneInsight },
                  o.createElement(
                    la,
                    null,
                    o.createElement(Hi, {
                      emogenieService: e.emogenieService,
                      toneSuggestionInfo: e.toneSuggestionInfo,
                      onShowToneSuggestionInfo: (t) => e.onShowToneSuggestionInfo(t),
                      onClickToneSuggestionInfoCta: (t) => e.onClickToneSuggestionInfoCta(t),
                      showBetaLabel: !0,
                      browser: l
                    })
                  )
                ),
              nativeLearnMoreModal: () =>
                o.createElement(
                  Ji,
                  { view: Yi.LearnMore },
                  o.createElement(
                    ca,
                    { maxHeight: 216 },
                    o.createElement(la, null, o.createElement(Vt, { learnMoreInfo: t.learnMoreInfo }))
                  )
                ),
              nativeFeedbackModal: () =>
                o.createElement(
                  Ji,
                  { view: Yi.Feedback },
                  o.createElement(
                    la,
                    null,
                    o.createElement(ii.q, {
                      domain: i.getDomain(),
                      hideDomainHelpText: !0,
                      onClose: m,
                      align: "left",
                      title: o.createElement("span", null, "How do you like Grammarly?"),
                      onSubmit: (e) => {
                        i.submitFeedback(e);
                      },
                      withScore: !0,
                      hideLogo: !0,
                      hideTextBoxTitle: !0,
                      placeholderText: "How can we improve?",
                      compactDisplay: !0,
                      submitButtonKind: "primary",
                      experimentClient: r
                    })
                  )
                ),
              nativeSettingsModal: () =>
                o.createElement(
                  Ji,
                  { view: Yi.Settings },
                  o.createElement(
                    la,
                    null,
                    o.createElement(
                      Ei,
                      { onClose: m, assistantSettingsViewModel: a, upgradeViewModel: s, experimentClient: r },
                      ({ content: e, footer: t }) => o.createElement(o.Fragment, null, e, t)
                    )
                  )
                ),
              nativeProofitModal: () =>
                (0, _.zG)(
                  c,
                  Z.fold(
                    () => null,
                    (e) => {
                      const t = e.feature.dialogCaller().type;
                      return t === d.WT.proofitReview
                        ? o.createElement(
                            la,
                            null,
                            o.createElement(ri, { proofitVM: e, experimentClient: r, insideSingleCardAssistant: !0 })
                          )
                        : t === d.WT.proofitRequest
                        ? o.createElement(la, null, o.createElement(ti, { proofitVM: e, insideSingleCardAssistant: !0 }))
                        : null;
                    }
                  )
                ),
              nativeExperimentalGBConsistencyUpsellFooter: () => {
                const { onClick: e, trackShow: t, shouldShowGBUpgradeFooter: i } = u;
                return i(Ee.p.GBUphookStyleGuideFooterV1)
                  ? o.createElement(Zi, {
                      onClick: () => e("gbInconsistencyCard", (0, gi.Um)().businessStyleGuide),
                      trackShow: () => t("gbInconsistencyCard")
                    })
                  : null;
              },
              nativeExperimentalGBToneInsightsUpsellFooter: () => {
                const { onClick: e, trackShow: t, shouldShowGBUpgradeFooter: i } = u;
                return i(Ee.p.GBUphookBrandTonesFooterV1)
                  ? o.createElement(Xi, {
                      onClick: () => e("gbToneDetector", (0, gi.Um)().businessBrandTones),
                      trackShow: () => t("gbToneDetector")
                    })
                  : null;
              },
              nativeGetStartedChecklistModal: ({ notify: e }) => {
                const t = "test" === r.getTreatment(Ee.p.ChecklistUX);
                return o.createElement(
                  la,
                  null,
                  t ? o.createElement(vt, { isStudent: p.isStudent }) : o.createElement(Pt, { getStartedChecklistViewModel: p, notify: e })
                );
              }
            };
          })(Et, Ct, Oe, Bt, qe, y, jt.popView, X, Wt, qt, Kt),
          Xt = { ...Wi.k, button: (0, Gi.ND)(oa) },
          Yt = Pe.lens(q.nL.Prism.getLens());
        return {
          checksFeedItem: () => j.item(Zt),
          checksFeedFlow: () => j.createCardListFlow(Yt, ye),
          lensState: Pe,
          cardsViewModel: Ne,
          lensPreviewViewModel: ue,
          cardsListScrollManager: Ge,
          alertProcessor: h,
          checkingService: v,
          assistantFeedbackViewModel: Oe,
          assistantSettingsViewModel: Bt,
          getStartedChecklistViewModel: Kt,
          marksViewModel: bt,
          upgradeViewModel: qe,
          gnar: l,
          user: u,
          positionViewModel: Ot,
          remSize: be,
          isSingleCardAssistant: !0,
          statisticsService: b,
          toneDetectorViewModel: Et,
          learnMoreViewModel: Ct,
          createSnippetModalViewModel: kt,
          closeAssistant: p,
          bulkDismissViewModel: At,
          nativeViewsViewModel: jt,
          successReportViewModel: _t,
          outcomeExtraFooterViewModel: zt,
          designSystem: Zt,
          headerDesignSystem: Xt,
          sduiEngine: z,
          sduiCardsViewModel: Be,
          dispose: () => {
            Ht.unsubscribe(),
              Ne.dispose(),
              Nt.dispose(),
              bt.dispose(),
              de.unsubscribe(),
              je.dispose(),
              Ut.unsubscribe(),
              kt.dispose(),
              Ct.dispose(),
              Et.dispose(),
              null == At || At.dispose(),
              null == jt || jt.dispose(),
              _t.dispose(),
              It.unsubscribe(),
              xt.unsubscribe(),
              lt.unsubscribe(),
              ct.unsubscribe(),
              Ve.unsubscribe(),
              Be.dispose(),
              zt.dispose(),
              at.dispose(),
              ht.unsubscribe(),
              ot.unsubscribe(),
              gt.unsubscribe(),
              ut.unsubscribe();
          }
        };
      };
      var Ua = i(45854),
        ja = i(46149),
        Ga = i(98325),
        Wa = i(84447),
        za = i(42466),
        qa = i(95305),
        Ka = i(73607),
        Za = i(94785),
        Xa = i(19962),
        Ya = i(94895),
        Qa = i(83598),
        Ja = i(50474),
        $a = i(89379),
        es = i(43805),
        ts = i(30280);
      const is = o.forwardRef(({ successView: e }, t) => {
          const i = o.useContext(Ja.m.Context),
            a = (0, $a.hM)((0, $a.JT)((0, n.pipe)(e, ae.oA), i));
          return o.createElement(
            "div",
            { className: ts.compactSuccessLens, ref: t },
            o.createElement("div", { className: ts.compactSuccessLensContainer }, Ya.UI.mount(es.q, a))
          );
        }),
        as = o.forwardRef(function ({ viewModels: e }, t) {
          return o.createElement(
            "div",
            { className: Qa.mainView },
            o.createElement(rs, {
              ref: t,
              state: e.lensState,
              cardsViewModel: e.cardsViewModel,
              cardsListScrollManager: e.cardsListScrollManager,
              assistantCardListViewModel: e.assistantCardListViewModel,
              predictionsPreviewViewModel: e.predictionsPreviewViewModel,
              assistantFeedbackViewModel: e.assistantFeedbackViewModel,
              headerViewModel: e.assistantHeaderViewModel,
              layoutViewModel: e.assistantLayoutViewModel,
              capabilities: e.capabilities
            })
          );
        }),
        ss = ({ position: e, isSuccess: t, children: i }) =>
          o.createElement(
            Bt.F.Fragment,
            null,
            e.pipe(
              B.x((e, t) => e.offset === t.offset && e.visible === t.visible),
              N.U((e) =>
                e.visible
                  ? o.createElement(
                      Bt.F.div,
                      {
                        ...(0, ct.Sh)(
                          Qa.cardListFooterStatic,
                          e.animationInProgress ? Qa.cardListFooterAnimate : void 0,
                          t ? void 0 : Qa.cardListFooterDynamic
                        ),
                        style: t ? {} : { transform: Xa.ux.translateY(e.offset) }
                      },
                      i
                    )
                  : null
              )
            )
          ),
        rs = o.forwardRef(function (
          { state: e, assistantCardListViewModel: t, cardsViewModel: i, cardsListScrollManager: a, capabilities: s, ...r },
          l
        ) {
          const c = H.jw((e) => {
              let t = 7;
              return (t = 31 * t + (0, ja.AC)(e.currentLens.id)), (t = 31 * t + (K.v.WithSuccess.State.isInSuccess(s)(e) ? 1231 : 1237)), t;
            }, e),
            d = (0, n.pipe)(
              c,
              N.U((e) => {
                const t = e.get();
                return K.v.WithSuccess.State.isInSuccess(s)(t);
              })
            ),
            u = (0, n.pipe)(
              (0, Ka.ux)(e, a, s),
              se.M(e),
              N.U(([e, t]) => ({
                visible: !q.nL.hasCards(t) || Z.isNone(t.currentLens.items.find((e) => !e.positionState.isHeightValid)),
                offset: e + 6,
                animationInProgress: !0
              })),
              Fe.O({ visible: !1, offset: 0, animationInProgress: !0 })
            );
          return o.createElement(
            qa.C,
            {
              className: Qa.cardList,
              onClick: (e) => {
                e.target.getAttribute("class") === Qa.cardList && t.assistantActions.next({ type: Ga.lo.Type.clickOnEmpty });
              },
              footer: o.createElement(
                Bt.F.Fragment,
                null,
                (0, n.pipe)(
                  d,
                  N.U((e) =>
                    o.createElement(
                      ss,
                      { key: "assistant-footer", position: u, isSuccess: e },
                      o.createElement(za.pL, { predictionsVM: r.predictionsPreviewViewModel })
                    )
                  )
                )
              ),
              ref: (e) => {
                t.cardListViewportHeight.set(Z.fromNullable(null == e ? void 0 : e.offsetHeight));
              }
            },
            (r) =>
              o.createElement(
                Bt.F.Fragment,
                null,
                (0, n.pipe)(
                  V.aj([d, t.havePremiumAlerts]),
                  N.U(([n, c]) =>
                    n && !c
                      ? o.createElement(o.Fragment, null, o.createElement(is, { successView: t.successView, ref: l }))
                      : o.createElement(Ka.hz, {
                          state: e,
                          cardsViewModel: i,
                          cardsListScrollManager: a,
                          connectorElements: r,
                          ref: l,
                          header: o.createElement(
                            o.Fragment,
                            null,
                            c
                              ? o.createElement(
                                  "div",
                                  { className: Qa.upgradeHookWrapper, "data-role": "uphook-wrapper" },
                                  Ya.UI.mount(Za.n.TogglablePanel, t.upgradeHookFlow)
                                )
                              : null
                          ),
                          comparator: Wa.O.listItemOrd,
                          capabilities: s
                        })
                  )
                )
              )
          );
        }),
        ns = o.forwardRef(function ({ viewModels: e, header: t, footer: i, className: a }, s) {
          return o.createElement(
            qa.C,
            {
              ref: (t) => {
                "function" == typeof s ? s(t) : s && (s.current = t),
                  e.assistantCardListViewModel.cardListViewportHeight.set(Z.fromNullable(null == t ? void 0 : t.offsetHeight));
              },
              className: a
            },
            (a) =>
              o.createElement(Ka.hz, {
                state: e.lensState,
                cardsViewModel: e.cardsViewModel,
                cardsListScrollManager: e.cardsListScrollManager,
                connectorElements: a,
                header: t,
                footer: i,
                comparator: Wa.O.listItemOrd,
                capabilities: e.capabilities
              })
          );
        });
      var os = i(41572),
        ls = i(64012),
        cs = i(40643);
      const ds = o.lazy(() =>
          i
            .e(2826)
            .then(i.bind(i, 53262))
            .then(({ BrandTonesActivationUphookView: e }) => ({ default: e }))
        ),
        us = o.forwardRef(function ({ emogenieService: e, viewModels: t }, i) {
          const a = o.createElement(
            o.Fragment,
            null,
            o.createElement(ps, {
              isBrandTonesEnabled: e.viewState.view("isBrandTonesEnabled"),
              institutionLogo: e.viewState.view("report").view((e) => (null == e ? void 0 : e.institutionLogo)),
              institutionName: e.viewState.view("institutionName"),
              browser: t.assistantLayoutViewModel.browser
            }),
            o.createElement(Hi, { emogenieService: e, showBetaLabel: !1, browser: t.assistantLayoutViewModel.browser }),
            o.createElement(
              Bt.F.Fragment,
              null,
              e.viewState.view(
                (t) =>
                  !t.isBrandTonesEnabled &&
                  !t.isBrandTonesConfigured &&
                  !t.settings.hideBrandTonesActivationUphook &&
                  t.settings.shouldShowBrandTonesActivationUphook &&
                  o.createElement(
                    o.Suspense,
                    { fallback: o.createElement(o.Fragment, null) },
                    o.createElement(
                      os.L,
                      { chunkName: "brandTonesActivationUphook" },
                      o.createElement(ds, {
                        trackShow: e.actions.trackBrandToneActivationUphookShow,
                        onActivateClick: e.actions.brandToneActivationUphookCTAClick,
                        onDismissClick: e.actions.brandToneActivationUphookDismissClick
                      })
                    )
                  )
              )
            )
          );
          return o.createElement(
            jt,
            {
              dataPartName: "emogenie-view-overlay",
              popActiveView: () => t.assistantLayoutViewModel.popActiveView(),
              panelClassName: Ot.gradientViewOverlayPanel,
              hideBackButton: t.user.view((e) => e.isAnonymous)
            },
            o.createElement(
              Bt.F.Fragment,
              null,
              t.lensPreviewViewModel.getLens(Qe.R.SpecialId.PredictionEmogenie).pipe(
                N.U((e) => e.count > 0),
                B.x(),
                N.U((e) =>
                  e
                    ? o.createElement(ns, {
                        key: "emogeniePredictionCardList",
                        viewModels: t,
                        ref: i,
                        header: o.createElement(
                          o.Fragment,
                          null,
                          a,
                          o.createElement("div", { className: cs.relatedSuggestionsTitle }, "RELATED SUGGESTIONS")
                        )
                      })
                    : o.createElement("div", { className: Ot.gradientViewOverlayContent }, a)
                )
              )
            )
          );
        });
      us.displayName = "EmogenieView";
      const ps = ({ isBrandTonesEnabled: e, institutionLogo: t, institutionName: i, browser: a }) =>
          o.createElement(
            Bt.F.Fragment,
            null,
            O.h.combine(e, t, i, (e, t, i) =>
              o.createElement(
                "div",
                { className: Ot.defaultViewOverlayHeader },
                o.createElement(
                  "div",
                  { className: ls.emogenieViewOverlayHeader },
                  e
                    ? o.createElement("div", null, t ? o.createElement("img", { className: Ot.logo, src: t }) : null, i, " Tone detector")
                    : "Tone detector",
                  o.createElement(Gt.v, { browser: a, className: ls.emogenieViewOverlayHeaderBetaBadge })
                )
              )
            )
          ),
        ms = ({ feedbackVM: e, layoutVM: t, experimentClient: i }) =>
          o.createElement(
            jt,
            { dataPartName: "feedback-view-overlay", popActiveView: () => t.popActiveView(), panelClassName: Ot.gradientViewOverlayPanel },
            o.createElement(
              "div",
              { className: Ot.gradientViewOverlayContent },
              o.createElement("div", { className: Ot.defaultViewOverlayHeader }, "Product Feedback"),
              o.createElement(ii.q, {
                domain: e.getDomain(),
                onClose: () => t.popActiveView(),
                align: "left",
                style: { height: "calc(100% - 48px)" },
                onSubmit: (t) => e.submitFeedback(t),
                withScore: !0,
                fixSubmitButtonOverflowBottomPadding: !0,
                hideLogo: !0,
                experimentClient: i
              })
            )
          );
      var gs = i(57796),
        hs = i(76875);
      const vs = o.memo(({ width: e, strokeWidth: t, generalScore: i, componentStyle: a, fontSize: s = 9, isLoading: r }) => {
        const n = e / 2,
          l = n - t / 2,
          c = 2 * l * Math.PI,
          d = ((r ? 75 : i) / 100) * c,
          u = c - d,
          p = ((e) => {
            const { red40: t, yellow50: i, green50: a } = di.Z;
            return e < 65 ? t : e < 95 ? i : a;
          })(i);
        return o.createElement(
          "div",
          { ...(0, ct.Sh)(hs.scoreRing, r && hs.loading), style: a },
          o.createElement(
            "svg",
            { width: e, height: e, viewBox: `0 0 ${e} ${e}` },
            o.createElement("circle", { fill: "white", r: l, cx: n, cy: n }),
            o.createElement("circle", {
              stroke: di.Z.neutral20,
              fill: "transparent",
              strokeWidth: t,
              style: { strokeDashoffset: d },
              r: l,
              cx: n,
              cy: n
            }),
            o.createElement("circle", {
              stroke: p,
              fill: "transparent",
              strokeWidth: t,
              strokeDasharray: `${c} ${c}`,
              style: { strokeDashoffset: u },
              r: l,
              cx: n,
              cy: n
            }),
            o.createElement(
              "text",
              { className: hs.scoreText, x: "50%", y: "-35%", fontSize: s, fill: "black", textAnchor: "middle", transform: "rotate(90)" },
              i > 0 && !r ? i : ""
            )
          )
        );
      });
      var fs = i(93756),
        bs = i(83178);
      const ws = (e) => {
          const t = Ya.Z.animatingFlow(() => e.headerVM.logoScore, Ss);
          return o.createElement("div", { className: bs.logo_score }, Ya.UI.mount(_s, t));
        },
        Ss = (e, t) =>
          (0, n.pipe)(
            e,
            Z.filter((e) => e.type !== t.type),
            Z.map(() => fs.Hk("fadeout", "fadein"))
          ),
        ys = Ya.UI.Node.make(() => o.createElement(gs.K, { className: bs.grammarly_logo, size: 22 })),
        Es = Ya.UI.Node.make(({ view: e }) =>
          o.createElement(
            Bt.F.div,
            { className: bs.score_container, "data-grammarly-part": "assistant-score" },
            (0, n.pipe)(
              e("score"),
              (0, N.U)(({ capiScore: e, isLoading: t }) =>
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(vs, {
                    generalScore: e,
                    strokeWidth: 2,
                    width: 22,
                    fontSize: e < 100 ? 11 : 9,
                    isLoading: t,
                    componentStyle: { transform: "translate(2px, -2px) rotate(-90deg)", cursor: "default" }
                  })
                )
              )
            )
          )
        ),
        Cs = Ya.UI.Union.make("type", { logo: ys, score: Es }),
        ks = Ya.UI.Transition.make({ fadein: bs.logoscore_fadein }, { fadeout: bs.logoscore_fadeout }),
        _s = Ya.UI.Animated.make(ks, Cs);
      var As = i(96309),
        Is = i(20330);
      const xs = (e) => {
          const [t, i] = o.useState(!1),
            [a, s] = o.useState(!1),
            r = e.viewModels.assistantLayoutViewModel,
            l = e.viewModels.assistantHeaderViewModel,
            c = o.useContext(Ua.O.Context),
            d = (0, n.pipe)(
              e.viewModels.assistantProofitViewModel,
              Z.map((e) => e.feature),
              Z.map((t) =>
                o.createElement(
                  Bt.F.Fragment,
                  null,
                  V.aj([t.layoutCreated, r.activeView.view((e) => e.type === t.assistantViewType())]).pipe(
                    N.U(([i, a]) =>
                      i
                        ? o.createElement(
                            li.u,
                            { message: c.proofitTooltip, showDelay: oi.gk, disabled: a },
                            o.createElement(
                              Mi.h,
                              {
                                onClick: () => {
                                  a
                                    ? r.popActiveView()
                                    : (e.viewModels.gnar.proofitButtonClick("assistant_header"),
                                      r.pushActiveView({ type: t.assistantViewType() }));
                                },
                                dataGrammarlyPart: "assistant-header-action-btn-proofit"
                              },
                              o.createElement("div", { className: bs.headerActionBtnProofitIcon })
                            )
                          )
                        : null
                    )
                  )
                )
              ),
              Z.toNullable
            ),
            u = o.createElement(As.P, {
              onClick: l.close,
              tooltipMessage: "Close panel",
              dataGrammarlyPart: "assistant-header-action-btn-close"
            });
          return o.createElement(
            li.u,
            { message: "Grab and drag to move panel", showDelay: oi.gk, disabled: t },
            o.createElement(
              "div",
              { ...(0, ct.Sh)(bs.header, a && bs.actions_hovered), ref: e.draggableRef, onMouseDown: () => i(!0), onMouseOut: () => i(!1) },
              o.createElement(ws, { headerVM: l }),
              o.createElement(Ts, null),
              o.createElement(
                Bt.F.div,
                { className: bs.headerActions, onMouseOver: () => s(!0), onMouseOut: () => s(!1) },
                r.isHeaderNavigationEnabled.view((e) =>
                  e
                    ? o.createElement(
                        o.Fragment,
                        null,
                        d,
                        o.createElement(
                          Bt.F.Fragment,
                          null,
                          l.showSetGoalsActionButton.view(
                            (e) =>
                              e &&
                              o.createElement(
                                li.u,
                                { message: c.setGoalsTooltip, showDelay: oi.gk },
                                o.createElement(
                                  Mi.h,
                                  { onClick: () => l.open("setGoals"), dataGrammarlyPart: "assistant-header-action-btn-set-goals" },
                                  o.createElement("div", { className: bs.headerActionBtnGoalsIcon })
                                )
                              )
                          )
                        ),
                        o.createElement(
                          Bt.F.Fragment,
                          null,
                          O.h.combine(l.showSettingsActionButton, r.activeView, (e, t) => {
                            const i = t.type === k.a.Type.settings;
                            return (
                              e &&
                              o.createElement(Is.l, {
                                onClick: () => (i ? r.popActiveView() : r.pushActiveView({ type: k.a.Type.settings })),
                                enableTooltip: !i,
                                dataGrammarlyPart: "assistant-header-action-btn-settings"
                              })
                            );
                          })
                        ),
                        u
                      )
                    : u
                )
              )
            )
          );
        },
        Ts = () =>
          o.createElement(
            "div",
            { className: bs.draggableWrapper, "data-grammarly-part": "assistant-draggable-handler" },
            o.createElement("div", { className: bs.draggable })
          );
      var Ms = i(85665),
        Rs = i(78249),
        Ps = i(88571),
        Ls = i(25814),
        Fs = i(84021),
        Ds = i(33895),
        Ns = i(53211),
        Bs = i(42455),
        Vs = i(98805),
        Hs = i(51369),
        Os = i(42103),
        Us = i(33678),
        js = i(15073),
        Gs = i(101),
        Ws = i(16118),
        zs = i(85089),
        qs = i(83401),
        Ks = i(89068),
        Zs = i(78674),
        Xs = i(72481),
        Ys = i(91463);
      const Qs = ({ children: e, experimentClient: t }) => {
          const i = t.isGateEnabled(F.K.ExtensionA11yUIFixes),
            [a, s] = o.useState(null),
            r = o.useMemo(() => ({ currentView: a, setCurrentView: s, isEnabled: i }), [a, i]);
          return o.createElement(Qi.Provider, { value: r }, e);
        },
        Js = o.memo(function ({
          viewModels: e,
          experimentClient: t,
          emogenieService: i,
          height: a,
          ready: s,
          OuterElementsPortalSource: r
        }) {
          const l = new ma.C((0, A.nD)());
          (0, Y.iR)("viewModels", e);
          const c = (0, ei.IQ)(),
            d = (0, ei.e8)(),
            u = o.useContext(ei.Dg).state.pipe(
              Le.h((e) => !e.dragging),
              Fe.O(Fs.h.create())
            ),
            p = o.useContext(Ds.Y4),
            m = (0, Ns.C7)(),
            g = O.h.create(Xa.UL.empty);
          (0, Bs.A)(
            V.aj([u, p]).pipe(
              N.U(([e, t]) => {
                const i = t.top + e.translate.y,
                  a = t.left + e.translate.x,
                  s = m.height - i - t.height,
                  r = m.width - a - t.width;
                return { height: t.height, width: t.width, top: i, left: a, bottom: s, right: r };
              }),
              we.b(H.wW(g))
            )
          ),
            (0, Bs.A)(u.pipe(we.b((t) => e.positionViewModel.onDrag(t)))),
            (0, Bs.A)(
              e.assistantLayoutViewModel.activeView.pipe(
                Ws.G(),
                we.b(([t, i]) => {
                  t.type !== i.type && k.a.isDefault(i) && e.cardsListScrollManager.paddingTop.set(0);
                })
              )
            );
          const h = o.useRef(null);
          return (
            o.useEffect(() => {
              e.assistantCardListViewModel.cardListContext.next(Z.fromNullable(h.current));
              const t = h.current ? zs.rl(h.current, { subtree: !0, childList: !0 }) : qs.C,
                i = g.view((e) => ({ top: e.top, left: e.left })),
                a = (0, n.pipe)(t, Ks.V((0, Vs.m9)(1)), Zs.b(10), $e.P()).subscribe(
                  () => s(i, c),
                  () => {
                    s(i, c, !0);
                  }
                );
              return () => {
                a.unsubscribe();
              };
            }, []),
            o.createElement(
              $s,
              { remSize: e.remSize, environment: l, viewport: g, experimentClient: t },
              o.createElement(
                Bt.F.div,
                {
                  "data-grammarly-part": "assistant-popup-content",
                  ...(0, ct.Sh)(
                    Qa.assistant,
                    c.pipe(
                      Fe.O(!1),
                      N.U((e) => (e ? Qa.dragging : null))
                    )
                  ),
                  style: { height: a, maxHeight: "90vh" }
                },
                o.createElement(xs, { viewModels: e, draggableRef: d }),
                e.assistantLayoutViewModel.activeView.view((a) =>
                  k.a.isDefault(a)
                    ? o.createElement(as, { viewModels: e, ref: h, key: "default-view" })
                    : k.a.isEmogenie(a)
                    ? o.createElement(us, { emogenieService: i, viewModels: e, key: "emogenie-view", ref: h })
                    : k.a.isFeedback(a)
                    ? o.createElement(ms, {
                        feedbackVM: e.assistantFeedbackViewModel,
                        layoutVM: e.assistantLayoutViewModel,
                        experimentClient: t,
                        key: "feedback-view"
                      })
                    : k.a.isSettings(a)
                    ? o.createElement(Ci, { viewModels: e, experimentClient: t, key: "settings-view" })
                    : k.a.isProofitRequest(a) && Z.isSome(e.assistantProofitViewModel)
                    ? o.createElement(ti, {
                        browser: e.assistantLayoutViewModel.browser,
                        popActiveView: () => e.assistantLayoutViewModel.popActiveView(),
                        proofitVM: e.assistantProofitViewModel.value,
                        key: "proofit-request-view"
                      })
                    : k.a.isProofitReview(a) && Z.isSome(e.assistantProofitViewModel)
                    ? o.createElement(ri, {
                        browser: e.assistantLayoutViewModel.browser,
                        popActiveView: () => e.assistantLayoutViewModel.popActiveView(),
                        proofitVM: e.assistantProofitViewModel.value,
                        experimentClient: t,
                        key: "proofit-review-view"
                      })
                    : null
                )
              ),
              o.createElement(r, null, o.createElement(Ls.jv, null, o.createElement(Rs.L, { modalManager: e.assistantModalManager }))),
              o.createElement(Hs.X, null)
            )
          );
        }),
        $s = ({ environment: e, viewport: t, children: i, remSize: a, experimentClient: s }) => {
          var r;
          const n = o.useRef((0, Ua.I)(Ja.m.getConfig(e.has(ma.U.Flag.isAppleSystem) ? "mac" : "windows"))),
            l = null === (r = o.useContext(Ms.nS.Context)) || void 0 === r ? void 0 : r.host;
          return o.createElement(
            Ps.Q,
            { remSize: a, setter: (e) => js.u.setRootCssVar(l || document.documentElement, e) },
            o.createElement(
              Xs.p.Manager,
              {
                cardWidth: Xs.p.withCardWidthEffect(Xs.p.defaultSizeObserver, (e) => {
                  Xs.p.setRootCssVar(l || document.documentElement, e);
                })
              },
              o.createElement(
                ma.U.Context.Provider,
                { value: e },
                o.createElement(
                  Us.a.Context.Provider,
                  { value: e },
                  o.createElement(
                    Ua.O.Context.Provider,
                    { value: n.current.assistant },
                    o.createElement(
                      Ja.m.Context.Provider,
                      { value: n.current.denali },
                      o.createElement(
                        Ys.TG.ContextMock,
                        null,
                        o.createElement(
                          Gs.l.RootVirtualContainer,
                          { viewport: t, name: "draggable" },
                          o.createElement(
                            Os.G.DefaultProvider,
                            null,
                            o.createElement(Ls.jv, null, o.createElement(Qs, { experimentClient: s }, i))
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      var er = i(59358),
        tr = i(70063),
        ir = i(89456),
        ar = i(59421);
      const sr = ({ textFieldRect: e, viewModels: t, gButtonRect: i, draggableGButtonType: a, children: s }) => {
        const { initialPositionOffset: r } = t.positionViewModel,
          n = ir.UL.shift(i, tr.E9.minus(e.client, e.page)),
          l = null === a ? { ...e.client, ...e.size } : n,
          c = (0, Ns.C7)(),
          d = null === a ? t.assistantLayoutViewModel.layout : er.V.draggableGButtonAssistantLayout(n, e);
        return o.createElement(ar._, { bounds: c, hasDragHandle: !0 }, ({ translate: e }) =>
          o.createElement(
            Ds.sX,
            {
              anchorRect: l,
              viewportRect: c,
              anchorOrigin: d.anchorOrigin,
              elementOrigin: d.assistantOrigin,
              anchorMargin: d.anchorMargin,
              repositioning: d.repositioningStrategy,
              stickToTarget: !1,
              viewportMargin: 0,
              postRepositioningOffset: { horizontal: r.left, vertical: r.top }
            },
            ({ top: t, left: i }) =>
              o.createElement(
                "div",
                {
                  "data-grammarly-part": "assistant-popup",
                  style: { position: "fixed", transform: `translate(${e.x}px, ${e.y}px)`, zIndex: oi.Eq, top: t, left: i }
                },
                s
              )
          )
        );
      };
      var rr = i(46544),
        nr = i(98429);
      const or = ({
        alignmentRect: e,
        viewModels: t,
        onDomRectChange: i,
        anchor: a,
        experimentClient: s,
        isAccessible: r,
        onMaxHeightChange: n,
        children: l
      }) => {
        const c = (0, Ns.C7)(),
          { top: d, setTop: u, left: p, setLeft: m, width: g, height: h, positionerRef: v } = (0, rr.G)(),
          { x: f, y: b, setDragState: w } = (0, nr.f)(d, u, p, m),
          S = r ? c.height : 0;
        o.useEffect(() => {
          const e = c.height - d - h,
            t = c.width - p - g;
          if ((i({ top: d, left: p, bottom: e, right: t, height: h, width: g }), n)) {
            n(S);
          }
        }, [d, p, g, h, S]);
        const y =
          "textField" === a
            ? {
                anchorOrigin: { horizontal: "right", vertical: "bottom" },
                elementOrigin: { horizontal: "left", vertical: "bottom" },
                anchorMargin: { top: 0, bottom: 0, left: 16, right: 16 },
                repositioning: [{ horizontal: "flip", vertical: "translate" }]
              }
            : "GButton" === a
            ? {
                anchorOrigin: { horizontal: "right", vertical: "top" },
                elementOrigin: { horizontal: "right", vertical: "bottom" },
                anchorMargin: { top: 4, bottom: 4, left: 0, right: 0 },
                repositioning: [{ horizontal: "translate", vertical: "flip" }]
              }
            : (0, tt.vE)(a);
        let E;
        s.isGateEnabled(F.K.ExtensionA11yUIFixes) && (E = (e) => !e.target.closest("button"));
        const { bottom: C, right: k } = (function (e, t, i, a, s) {
          const r = s.height - a,
            n = s.width - i,
            o = Math.max(0, Math.min(r, r - e)),
            l = Math.max(0, Math.min(n, n - t));
          return { bottom: o, right: l };
        })(d, p, g, h, c);
        return o.createElement(
          ar._,
          { hasDragHandle: !0, bounds: c, onChangeDragState: w, dragEventFilter: E },
          o.createElement(
            Ds.sX,
            {
              ...y,
              anchorRect: e,
              viewportRect: c,
              stickToTarget: !1,
              viewportMargin: 0,
              postRepositioningOffset: {
                horizontal: t.positionViewModel.initialPositionOffset.left,
                vertical: t.positionViewModel.initialPositionOffset.top
              },
              onChangePosition: (e) => v.current.next(e)
            },
            o.createElement(
              "div",
              {
                style: {
                  position: "fixed",
                  transform: `translate(${f}px, ${b}px)`,
                  zIndex: oi.Eq,
                  bottom: r ? C : c.height - d - h,
                  right: r ? k : c.width - p - g
                }
              },
              l
            )
          )
        );
      };
      var lr = i(78594),
        cr = i(75397),
        dr = i.n(cr);
      const ur = {
          [Yi.Settings]: "Grammarly settings are active",
          [Yi.Feedback]: "Grammarly feedback form is active",
          [Yi.ToneInsight]: "Grammarly tone settings are active",
          [Yi.LearnMore]: "Additional information about Grammarly suggestion is active"
        },
        pr = () => {
          const { currentView: e, isEnabled: t } = o.useContext(Qi);
          if (!t) return null;
          const i = null === e ? "Grammarly assistant is active" : ur[e];
          return o.createElement(
            "div",
            {
              "aria-live": "assertive",
              "aria-atomic": !0,
              className: dr().viewAnnouncer,
              "data-grammarly-part": "assistant-view-announcer"
            },
            o.createElement("p", null, i)
          );
        };
      var mr = i(81237);
      const gr = ({
        dragHandle: e,
        headerContent: t,
        className: i,
        children: a,
        includeContentPadding: s,
        footer: r,
        dataGrammarlyPart: n = "single-card-assistant",
        maxHeight: l,
        onHeightChange: c
      }) => {
        const [d, u] = o.useState(0),
          [p, m] = o.useState(0),
          [g, h] = o.useState(0),
          v = o.useRef(null),
          f = o.useRef(null),
          b = o.useRef(null);
        o.useEffect(() => {
          null == c || c(d + p + g);
        }, [d, p, g]);
        const w = o.useRef(null);
        o.useEffect(() => {
          var e;
          return (
            v.current
              ? (null === (e = w.current) || void 0 === e || e.disconnect(),
                (w.current = lr.N.getResizeObserver(() => {
                  v.current && u(v.current.getBoundingClientRect().height);
                })),
                w.current.observe(v.current))
              : u(0),
            () => {
              var e;
              return null === (e = w.current) || void 0 === e ? void 0 : e.disconnect();
            }
          );
        }, [v.current]);
        const S = o.useRef(null);
        o.useEffect(() => {
          var e;
          return (
            f.current
              ? (null === (e = S.current) || void 0 === e || e.disconnect(),
                (S.current = lr.N.getResizeObserver(() => {
                  f.current && m(f.current.getBoundingClientRect().height);
                })),
                S.current.observe(f.current))
              : m(0),
            () => {
              var e;
              return null === (e = S.current) || void 0 === e ? void 0 : e.disconnect();
            }
          );
        }, [f.current]);
        const y = o.useRef(null);
        return (
          o.useEffect(() => {
            var e;
            return (
              b.current
                ? (null === (e = y.current) || void 0 === e || e.disconnect(),
                  (y.current = lr.N.getResizeObserver(() => {
                    b.current && h(b.current.getBoundingClientRect().height);
                  })),
                  y.current.observe(b.current))
                : h(0),
              () => {
                var e;
                return null === (e = y.current) || void 0 === e ? void 0 : e.disconnect();
              }
            );
          }, [r, b.current]),
          o.useEffect(() => {
            f.current && (f.current.scrollTop = 0);
          }, [f.current, p]),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              {
                ...(0, ct.Sh)(mr.singleCardAssistant, i),
                style: l ? { maxHeight: l, overflowY: "auto" } : void 0,
                "data-grammarly-part": n,
                role: "region",
                "aria-label": "Grammarly assistant"
              },
              o.createElement(
                "header",
                {
                  "data-grammarly-part": n + "-header",
                  "aria-label": "Grammarly assistant toolbar",
                  ...(0, ct.Sh)(mr.singleCardAssistantHeader, e ? mr.singleCardAssistantHeaderDraggable : null),
                  ref: (t) => {
                    (v.current = t), null == e || e(t);
                  }
                },
                o.createElement(Bt.F.Fragment, null, t)
              ),
              o.createElement(
                "div",
                {
                  "data-grammarly-part": n + "-content",
                  ...(0, ct.Sh)(mr.singleCardAssistantContent, s ? mr.singleCardAssistantContentWithPadding : null),
                  ref: f
                },
                a
              ),
              r
                ? o.createElement(
                    "footer",
                    { "data-grammarly-part": n + "-footer", className: mr.singleCardAssistantFooter, ref: b, onClick: () => r.onClick() },
                    o.createElement("div", { className: mr.singleCardAssistantFooterText }, r.content),
                    r.tooltip &&
                      o.createElement(
                        li.u,
                        { message: r.tooltip, showDelay: oi.gk },
                        o.createElement(
                          Mi.h,
                          { onClick: () => r.onClick() },
                          o.createElement("div", { className: mr.singleCardAssistantFooterButtonIcon })
                        )
                      )
                  )
                : null
            ),
            o.createElement(pr, null)
          )
        );
      };
      var hr = i(17766),
        vr = i(45711),
        fr = i(23447),
        br = i(74453),
        wr = i(35583),
        Sr = i.n(wr);
      const yr = { clarity: hr.G, correctness: vr.a, tone: fr.D, engagement: br.L },
        Er = ({ suggestionType: e }) => {
          const t = yr[e];
          return o.createElement("div", { className: Sr().container }, o.createElement(t, null), "Your first ", e, " suggestion!");
        };
      var Cr = i(18702),
        kr = i(94810);
      const _r = o.memo(function ({ viewModels: e, height: t, domRect: i, ready: a, maxHeight: s, experimentClient: r }) {
        const l = new ma.C((0, A.nD)());
        (0, Y.iR)("viewModels", e);
        const c = (0, ei.IQ)(),
          d = (0, ei.e8)(),
          u = o.useContext(ei.Dg).state.pipe(
            Le.h((e) => !e.dragging),
            Fe.O(Fs.h.create())
          );
        (0, Bs.A)(
          u.pipe(
            we.b((t) => {
              e.positionViewModel.onDrag(t);
            })
          )
        ),
          o.useEffect(() => {
            const e = i.view((e) => ({ top: e.top, left: e.left }));
            a(e, c);
          }, []);
        const p = e.nativeViewsViewModel.header.view(
            Z.fold(
              () => o.createElement(o.Fragment, null),
              (t) =>
                o.createElement(Cr.P, {
                  key: "header",
                  sduiRootId: t.id,
                  content: t,
                  designSystem: e.headerDesignSystem,
                  notify: (i, a, s) =>
                    e.cardsViewModel.actionEvents.next({
                      type: Ce.lY.Type.sduiCardAction,
                      sourceId: i,
                      cardId: t.id,
                      actions: a,
                      scope: s
                    }),
                  transitions: [],
                  prevContent: Z.none,
                  onAnimationEnd: Y.Q1,
                  onMount: Y.Q1
                })
            )
          ),
          m = e.checksFeedFlow(),
          g = (0, n.pipe)(
            m,
            Q.Z.extendActions(
              we.b((t) => {
                "content" === t.key &&
                  "card" === t.action.key &&
                  "alertRefSDUI" === t.action.action.key &&
                  e.cardsViewModel.actionEvents.next(t.action.action.action);
              })
            )
          );
        return o.createElement(
          $s,
          { remSize: e.remSize, environment: l, viewport: i, experimentClient: r },
          o.createElement(
            Bt.F.Fragment,
            null,
            V.aj([
              e.bulkDismissViewModel.successReportFooterBulkDismissAlertsCount,
              e.outcomeExtraFooterViewModel.extraFooterOutcomeType
            ]).pipe(
              N.U(([i, a]) =>
                o.createElement(
                  gr,
                  {
                    key: "single-card-assistant",
                    className: $i.singleCardAssistant,
                    dragHandle: d,
                    headerContent: p,
                    maxHeight: s,
                    footer: Ar(e, i, a),
                    onHeightChange: (e) => t.set(e)
                  },
                  Q.UI.mount(kr.c.assistant(e.checksFeedItem(e.cardsViewModel.actionEvents)), g)
                )
              )
            )
          ),
          o.createElement(Hs.X, null)
        );
      });
      function Ar(e, t, i) {
        return t > 0
          ? (function (e, t) {
              return {
                content: o.createElement(
                  o.Fragment,
                  null,
                  "We hid ",
                  t,
                  " ",
                  Te._6(t, "suggestion", "suggestions"),
                  " ",
                  "that didn’t seem relevant to your text. Want to review",
                  " ",
                  Te._6(t, "it", "them"),
                  "?"
                ),
                tooltip: "Review suggestions",
                onClick: () => {
                  e.bulkDismissViewModel.showBulkDismissFeed();
                }
              };
            })(e, t)
          : void 0 !== i
          ? (function (e) {
              return { content: o.createElement(Er, { suggestionType: e }), onClick: () => null };
            })(i)
          : void 0;
      }
      var Ir = i(51129),
        xr = i(79692),
        Tr = i(49708),
        Mr = i(2768),
        Rr = i(14454),
        Pr = i(55826),
        Lr = i(31442),
        Fr = i(80358);
      var Dr = i(28811),
        Nr = i(21038);
      function Br(e, t) {
        return (0, _.zG)(
          t,
          Z.fold(
            () => e,
            ({ feedId: t }) => e.filter((e) => "pushAssistantFeed" === e.type && e.feedId !== t)
          )
        );
      }
      function Vr(e, t) {
        if (e.isSingleCardAssistant) {
          if (t.type === d.WT.sdui) {
            const i = (function (e) {
              const t = (0, _.zG)(
                e.find((e) => "pushAssistantFeed" === e.type),
                Z.fromNullable,
                Z.fold(
                  () => [],
                  (e) => (null != e.cardId ? [e.cardId, e.feedId] : [e.feedId])
                ),
                re.UI((e) => (0, _.ls)(Dr.a.get(Nr.j.Item.Id.from(e)), Z.isSome))
              );
              return (e) => t.every((t) => t(e));
            })(t.action.actions);
            return e.sduiEngine.sduiManager.state.pipe(Le.h(i), $e.P()).subscribe((i) => e.cardsViewModel.actionEvents.next(t.action));
          }
          const i = (0, _.zG)(
            (function (e) {
              const t = e.type;
              switch (t) {
                case d.WT.gButton:
                case d.WT.card:
                  return Z.some({ id: L.D1.GButton.DEFAULT_GBUTTON_ID, getContent: L.D1.GButton.getContent });
                case d.WT.emogenie:
                  return Z.some({ id: L.D1.GButton.TONE_GBUTTON_ID, getContent: L.D1.GButton.getContent });
                case d.WT.getStartedChecklist:
                  return Z.some({ id: L.D1.GButton.GET_STARTED_GBUTTON_ID, getContent: L.D1.GButton.getContent });
                case d.WT.proofitRequest:
                case d.WT.proofitReview:
                  return Z.some({ id: L.D1.Proofit.ID, getContent: L.D1.Proofit.getContent });
                default:
                  (0, tt.L0)(t);
              }
            })(t),
            Z.getOrElse(() => ({ id: L.D1.GButton.DEFAULT_GBUTTON_ID, getContent: L.D1.GButton.getContent }))
          );
          return e.sduiEngine.sduiManager.state
            .pipe(
              N.U((e) => i.getContent(e, i.id)),
              ae.oA,
              $e.P(),
              se.M(e.sduiEngine.sduiManager.state),
              N.U(([e, i]) => {
                const a = t.type === d.WT.card ? t.alertId : null;
                return (0, _.zG)(
                  Z.fromNullable(a),
                  Z.chain((e) => L.D1.getByAlertId(i, e)),
                  Z.map((e) => e.id),
                  Z.fold(
                    () => ({ initialSduiItemId: Z.none, openingButtonActions: e.actions }),
                    (t) => ({ initialSduiItemId: Z.some(t), openingButtonActions: e.actions })
                  )
                );
              }),
              N.U(({ initialSduiItemId: i, openingButtonActions: a }) => {
                const s = Br(a, e.sduiEngine.sduiFeedManager.currentFeed),
                  r = L.fr.create(s);
                return (0, _.zG)(
                  i,
                  Z.fold(
                    () => (
                      (t.type === d.WT.proofitRequest || t.type === d.WT.proofitReview) &&
                        s.some((e) => "pushAssistantFeed" === e.type) &&
                        e.gnar.proofitButtonClick("gmail_toolbar"),
                      r
                    ),
                    (e) => ({ ...r, actions: r.actions.map((t) => ("pushAssistantFeed" === t.type ? { ...t, cardId: e } : t)) })
                  )
                );
              })
            )
            .subscribe((t) => e.cardsViewModel.actionEvents.next(t));
        }
        return (
          t.type === d.WT.emogenie
            ? e.assistantLayoutViewModel.pushActiveView({ type: k.a.Type.emogenie })
            : t.type === d.WT.proofitRequest
            ? e.assistantLayoutViewModel.pushActiveView({ type: k.a.Type.proofitRequest })
            : t.type === d.WT.proofitReview
            ? e.assistantLayoutViewModel.pushActiveView({ type: k.a.Type.proofitReview })
            : e.assistantLayoutViewModel.pushActiveView({ type: k.a.Type.default }),
          D.w.EMPTY
        );
      }
      !(function () {
        const e = l.Y.create("denaliPlatform.metric"),
          t = new b.d5((t) => e.trace(t));
        b.EF.configure(t);
        const i = (function (e, t) {
          const i = f.u3,
            a = (0, n.pipe)(
              ((s = "Assistant.log"),
              (0, n.pipe)(
                E((e) => l.Y.create(`${s}.${e}`)),
                f.ui()
              )),
              f.w9(e.logLevelGetter)
            );
          var s;
          const r = f.w9(e.logLevelGetter)(f.u3),
            o = [t.collectLogs ? a : f.lw, t.copyLogsToConsole ? r : f.lw];
          return f.O0(S, e.rootLogLevelGetter)((0, p.fold)(f.aP(i))(o));
        })({ rootLogLevelGetter: () => y, logLevelGetter: () => y }, { collectLogs: !0, copyLogsToConsole: !0 });
        w.cx.configure(i);
      })();
      class Hr {
        constructor(e, t) {
          (this._params = e),
            (this._felog = t),
            (this._log = l.Y.create("AssistantControllerImpl")),
            (this._integration = null),
            (this._viewModels = O.h.create(null)),
            (this._assistantPopupIsReady = new fe.xQ()),
            (this._initPerformance = void 0),
            (this._openMeasure = void 0),
            (this._height = O.h.create(0)),
            (this._domRect = O.h.create(Xa.UL.empty)),
            (this._maxHeight = O.h.create((0, Ns.C7)().height)),
            (this._openState = O.h.create("closed")),
            (this._subs = new be.w.Keeper()),
            (this.openState = this._openState.view()),
            (this.open = (e) => {
              var t, i;
              const a = this._params.contentScriptState
                  .view("user")
                  .view((e) => ({
                    isPremium: e.premium,
                    isAnonymous: e.anonymous,
                    experiments: e.experiments,
                    customFields: e.customFields,
                    institutionInfo: e.institutionInfo,
                    isGrammarlyEmployee: Ir.n5.isGrammarlyEmployee(e),
                    isTestUser: Ir.n5.isTestUser(e),
                    isFreeTrial: Ir.n5.isFreeTrial(e)
                  })),
                s = this._viewModels.get();
              if (null !== s) this._subs.push(Vr(s, e));
              else {
                this._openMeasure = this._felog.assistant.openTime.startMeasure();
                const s = this._felog.assistant.initTime.startMeasure();
                this._openState.set("opening");
                const r = this._params.assistantService,
                  o = r.createIntegration({
                    gnar: this._params.gnar,
                    felog: this._felog,
                    snippetsFeature: this._params.snippetsFeature,
                    experimentClient: this._params.experimentClient
                  });
                if (!o)
                  return (
                    this._log.warn("tried to open assistant with checking service not initialized"),
                    s.cancelMeasure(),
                    void this._openMeasure.cancelMeasure()
                  );
                null === (i = (t = this._params).onOpen) || void 0 === i || i.call(t, o), (this._integration = o);
                const l = (0, n.pipe)(Z.fromNullable(e.type === d.WT.card ? e.alertId : null), Z.map(Ri.wQ.Id.create)),
                  c = Z.isSome(o.engine.sduiEngine)
                    ? (0, n.pipe)(
                        We.MH(o.engine.sduiEngine),
                        ({ sduiBufferService: e, sduiFeedbackService: t, sduiPopoverManager: i }) =>
                          ((e, t, i, a, s) => {
                            const r = (0, n.pipe)(
                                e.capiEvents,
                                Le.h(Fr.h.is("sdui_add", "sdui_remove", "sdui_update")),
                                Le.h((e) => "sdui_remove" === e.kind || !L.D1.InlineCard.isInlineCard(e.sdui))
                              ),
                              o = new Pr.A(t, r, i, s),
                              l = new Lr._(o.state);
                            return {
                              sduiBufferService: e,
                              sduiFeedbackService: a,
                              sduiManager: o,
                              sduiFeedManager: l,
                              dispose: () => {
                                o.dispose(), l.dispose();
                              }
                            };
                          })(e, o.engine.alertsList.state, o.engine.getByRawAlertId, t, i),
                        (e) => {
                          const t = Oa(
                            o.engine,
                            o.denaliViewAdapter,
                            r.sidebarEvents,
                            this._assistantPopupIsReady,
                            this._params.contentScriptState,
                            this._params.contentScriptActions,
                            this._params.gnar,
                            this._params.domain,
                            a,
                            this.close,
                            this._params.assistantService.positionModel,
                            this._params.alertProcessor,
                            this._params.checkingService,
                            this._params.cardEvents,
                            this._params.statisticsService,
                            this._params.toneAIFeature,
                            () => this._params.envFactory(),
                            this._params.experimentClient,
                            this._params.userEngagedByAlertsAcceptedService,
                            this._params.emogenieService,
                            e,
                            this._params.browser,
                            Z.fromNullable(this._params.proofitFeature),
                            this._params.assistantService.selectedHighlightsTracker,
                            this._params.assistantService.isTextFieldEmpty,
                            this._params.dapiActions,
                            this._params.snippetsFeature,
                            this._felog,
                            () => this._params.checkingService
                          );
                          return {
                            ...t,
                            dispose: () => {
                              t.dispose(), e.dispose();
                            }
                          };
                        }
                      )
                    : (0, C.n)(
                        o.engine,
                        o.denaliViewAdapter,
                        o.document.settings.lens("selectedLens"),
                        this._params.emogenieService,
                        this._params.toneAIFeature,
                        this._params.ethicalAIFeature,
                        this._params.snippetsFeature,
                        Z.fromNullable(this._params.proofitFeature),
                        r.sidebarEvents,
                        this._assistantPopupIsReady,
                        l,
                        this._params.contentScriptState,
                        this._params.contentScriptActions,
                        this._params.gnar,
                        this._params.domain,
                        a,
                        this.close,
                        this._params.assistantService.selectedHighlightsTracker,
                        this._params.assistantService.isTextFieldEmpty,
                        this._params.assistantService.positionModel,
                        this._params.alertProcessor,
                        this._params.cardEvents,
                        this._params.browser,
                        this._params.layout.assistant,
                        () => this._params.envFactory(),
                        this._params.userEngagedByAlertsAcceptedService,
                        this._params.dapiActions,
                        () => this._params.checkingService
                      );
                this._subs.push(Vr(c, e)),
                  c.isSingleCardAssistant &&
                    this._subs.push(
                      c.cardsViewModel.actionEvents
                        .pipe(
                          Le.h(Rr.t.isSduiCardAction),
                          Le.h((e) => e.sourceId === L.D1.Proofit.ID),
                          N.U((e) => Br(e.actions, c.sduiEngine.sduiFeedManager.currentFeed)),
                          Le.h((e) => e.length > 0)
                        )
                        .subscribe(() => {
                          c.gnar.proofitButtonClick("assistant_header");
                        })
                    ),
                  (this._initPerformance = s.endMeasure()),
                  this._viewModels.set(c);
              }
            }),
            (this.close = () => {
              var e, t, i, a;
              null !== this._viewModels.get() &&
                (this._trackAssistantClose(),
                (0, n.pipe)(
                  Z.fromNullable(this._integration),
                  Z.chain((e) => e.engine.sduiEngine),
                  Z.map(() => this._viewModels.get()),
                  Z.map((e) => e.sduiCardsViewModel.onAssistantClose())
                ),
                null === (t = (e = this._params).onClose) || void 0 === t || t.call(e),
                this._openState.set("closed"),
                null === (i = this._integration) || void 0 === i || i.dispose(),
                (this._integration = null),
                null === (a = this._viewModels.get()) || void 0 === a || a.dispose(),
                this._viewModels.set(null));
            }),
            (this._asyncReadyCbSub = null),
            (this._getReadyFn = () => {
              const e = this._felog.assistant.renderTime.startMeasure();
              return (t, i, a) => {
                const s = e.endMeasure();
                let r;
                if (((0, tt.kG)(!!this._openMeasure, "Expected Assistant to be open"), a)) this._openMeasure.cancelMeasure();
                else {
                  const e = this._openMeasure.endMeasure();
                  (r = null == e ? void 0 : e.duration),
                    this._initPerformance &&
                      s &&
                      e &&
                      e.duration > 500 &&
                      this._log.warn("assistant popup took too long to open:", {
                        init: this._initPerformance.duration,
                        render: s.duration,
                        total: e.duration
                      });
                }
                this._asyncReadyCbSub = xr.E.schedule(() => {
                  this._openState.set("open"),
                    this._assistantPopupIsReady.next(),
                    this._trackAssistantOpen(t, r),
                    this._trackAssistantDrag(t, i);
                });
              };
            }),
            (this._applyIframeOffset = (e) => {
              var t, i;
              const a = null === (i = (t = this._params).getCustomOffset) || void 0 === i ? void 0 : i.call(t);
              return a
                ? {
                    ...e,
                    size: { width: a.width, height: a.height },
                    client: { ...e.client, left: a.left + e.client.left, top: a.top + e.client.top },
                    offset: { ...e.offset, left: a.left + e.offset.left, top: a.top + e.offset.top },
                    page: { ...e.page, left: a.left + e.page.left, top: a.top + e.page.top }
                  }
                : e;
            });
        }
        get view() {
          const e = this._params.experimentClient.isGateEnabled(F.K.ExtensionA11ySingleCardAssistantDragging);
          return this._viewModels.pipe(
            Ae.w((t) =>
              null === t
                ? Pa.of(null)
                : V.aj([Tr.R(self, "resize").pipe(Fe.O(null)), this._maxHeight]).pipe(
                    se.M(this._params.layout.textField.rect.behavior),
                    se.M(
                      V.aj([this._params.layout.gbutton.positionBehavior, this._params.layout.gbutton.sizeBehavior]).pipe(
                        N.U(([e, t]) => {
                          const i = t.draggable ? t.width : t.heightAndWidth,
                            a = t.draggable ? t.height : t.heightAndWidth;
                          return {
                            top: e.draggable ? e.client.top : e.client.top - a,
                            left: e.draggable ? e.client.left : e.client.left - i,
                            width: i,
                            height: a
                          };
                        })
                      )
                    ),
                    N.U(([[[i, a], s], r]) => {
                      const n = this._applyIframeOffset(s),
                        l = this._getReadyFn();
                      let c;
                      const d = "test" === this._params.experimentClient.getTreatment(Ee.p.SingleCardAssistantNextToTextField);
                      let p;
                      return (
                        (c = d ? { ...n.client, ...n.size } : r),
                        e &&
                          (p = (e) => {
                            this._maxHeight.set(e);
                          }),
                        t.isSingleCardAssistant
                          ? o.createElement(
                              or,
                              {
                                isAccessible: e,
                                anchor: d ? "textField" : "GButton",
                                alignmentRect: c,
                                viewModels: t,
                                onDomRectChange: (e) => {
                                  this._domRect.set(e);
                                },
                                onMaxHeightChange: p,
                                experimentClient: this._params.experimentClient
                              },
                              o.createElement(_r, {
                                viewModels: t,
                                height: this._height,
                                ready: l,
                                maxHeight: e ? a : void 0,
                                domRect: this._domRect.view(),
                                experimentClient: this._params.experimentClient
                              })
                            )
                          : o.createElement(
                              sr,
                              { textFieldRect: n, gButtonRect: r, viewModels: t, draggableGButtonType: this._params.draggableGButtonType },
                              o.createElement(Js, {
                                viewModels: t,
                                experimentClient: this._params.experimentClient,
                                emogenieService: this._params.emogenieService,
                                height: (0, u.Y)(t, n).pipe(Mr.R(this._assistantPopupIsReady.asObservable()), we.b(H.wW(this._height))),
                                ready: l,
                                OuterElementsPortalSource: this._params.OuterElementsPortalSource
                              })
                            )
                      );
                    })
                  )
            )
          );
        }
        get activeView() {
          return this._viewModels.pipe(
            Ae.w((e) => {
              var t;
              return (null == e ? void 0 : e.isSingleCardAssistant)
                ? Pa.of(null)
                : null !== (t = null == e ? void 0 : e.assistantLayoutViewModel.activeView) && void 0 !== t
                ? t
                : Pa.of(null);
            })
          );
        }
        dispose() {
          var e;
          this.close(), this._subs.dispose(), null === (e = this._asyncReadyCbSub) || void 0 === e || e.unsubscribe();
        }
        _trackAssistantOpen(e, t) {
          var i, a;
          const s = this._viewModels.get();
          if (null !== s) {
            const r = s.isSingleCardAssistant ? { top: 0, left: 0 } : s.positionViewModel.initialPositionOffset,
              { statisticsService: n } = this._params,
              o = n.alertCounts.get(),
              l =
                0 === r.top && 0 === r.left
                  ? s.isSingleCardAssistant || "default" === s.assistantLayoutViewModel.layout.name
                    ? "smart"
                    : "hardcoded"
                  : "sticky",
              d = s.isSingleCardAssistant ? "default" : s.assistantLayoutViewModel.activeView.get().type;
            this._params.gnar.assistantPopupShow(
              d,
              this._height.get(),
              e.get().left,
              e.get().top,
              o.unmutedCapiAlerts,
              o.filter((e) => c.S.isCapiAlert(e) && e.outcome === ye.TC.clarity).visibleNotInlineCapiAlerts,
              o.visibleInlineCapiAlerts,
              o.filter((e) => c.S.isCapiAlert(e) && "priority" === e.assistantView).unmutedCapiAlerts,
              n.wordsCount.get(),
              l,
              null !== (a = null === (i = this._params.checkingService) || void 0 === i ? void 0 : i.sessionUuid) && void 0 !== a ? a : "",
              void 0,
              t,
              n.generalScore.get()
            );
          }
        }
        _trackAssistantClose() {
          var e;
          const { statisticsService: t } = this._params,
            i = t.alertCounts.get(),
            a = this._viewModels.get(),
            s = (null == a ? void 0 : a.isSingleCardAssistant)
              ? "default"
              : null !== (e = null == a ? void 0 : a.assistantLayoutViewModel.activeView.get().type) && void 0 !== e
              ? e
              : k.a.Type.default;
          this._params.gnar.assistantPopupCloseButtonClick(
            s,
            i.unmutedCapiAlerts,
            i.filter((e) => c.S.isCapiAlert(e) && e.outcome === ye.TC.clarity).visibleNotInlineCapiAlerts,
            i.visibleInlineCapiAlerts,
            i.filter((e) => c.S.isCapiAlert(e) && "priority" === e.assistantView).unmutedCapiAlerts,
            void 0
          );
        }
        _trackAssistantDrag(e, t) {
          const i = e.get();
          let a = i;
          this._subs.push(
            t
              .pipe(
                Ws.G(),
                Le.h(([e, t]) => e && !t)
              )
              .subscribe(() => {
                const t = e.get();
                tr.E9.l1Distance(t, a) < 10 ||
                  (this._params.gnar.assistantPopupDrag(t.left, t.top, this._height.get(), i.left, i.top), (a = t));
              })
          );
        }
      }
      var Or = i(23167),
        Ur = i(18430),
        jr = i(7177),
        Gr = i(30627),
        Wr = i(99111),
        zr = i(41127);
      class qr {
        constructor(e, t, i, a, s, r, n, o, l, c) {
          (this.connectionState = e),
            (this.gnar = t),
            (this.user = i),
            (this._hoverProvider = a),
            (this.document = s),
            (this.formattingService = r),
            (this.denaliViewAdapter = n),
            (this.capiProxy = o),
            (this.engine = l),
            (this.experimentClient = c),
            a.setAssistantHover(n.highlightHoverProvider);
        }
        static create(e) {
          var t;
          const i = new Ur.t(
              e.highlights,
              e.textObserver,
              e.replacementService,
              e.layout,
              e.scroller,
              e.selectedHighlightsTracker,
              void 0,
              e.requestAwaitService,
              null === (t = e.formattingService) || void 0 === t ? void 0 : t.get()
            ),
            a = Gr.p.create(
              e.checkingService.get(),
              e.checkingServiceInitialState,
              e.alertsTransformer,
              e.alertProcessor,
              e.sidebarEvents,
              e.customEventsFilter
            ),
            s = (0, Wr.r)(
              a,
              i,
              e.document.settings.lens("context"),
              () => {
                var t, i;
                return null !== (i = null === (t = e.getExistingAlerts) || void 0 === t ? void 0 : t.call(e)) && void 0 !== i
                  ? i
                  : (0, jr.q)(e.alertProcessor);
              },
              e.textObserver,
              () => e.checkingServiceInitialState.value.lastStart,
              e.snippetsFeature,
              e.sduiBufferService,
              e.sduiPopoverManager,
              e.felog,
              e.experimentClient,
              (t) => t.forEach((t) => e.alertProcessor.removeAlert(t, { _tag: zr.i.alertAccepted }))
            );
          return new qr(e.connectionState, e.gnar, e.user, e.hoverProvider, e.document, e.formattingService, i, a, s, e.experimentClient);
        }
        dispose() {
          this.capiProxy.dispose(), this.denaliViewAdapter.dispose(), this.engine.shutdown(), this._hoverProvider.removeAssistantHover();
        }
      }
      var Kr = i(26035),
        Zr = i(74789);
      class Xr {
        constructor({ layout: e }) {
          this._scroller = (0, Kr.t)({
            scrollToMarkRect(t, i) {
              (0, Zr.W)(e, t, null == i ? void 0 : i.paddingTop);
            },
            scrollToRange() {}
          });
        }
        scrollToMark(e, t) {
          return this._scroller.scrollToMark(e, t);
        }
      }
      var Yr = i(44248);
      class Qr {
        constructor(e) {
          (this._params = e),
            (this.sidebarEvents = new fe.xQ()),
            (this.hoverProvider = new Or.f(this._params.hoverProvider)),
            (this.selectedHighlightsTracker = this._params.highlights.getSelectedHighlightsTracker({
              textField: this._params.originalTextField,
              selectionService: this._params.selectionService
            })),
            (this.positionModel = (0, Yr.j)(
              this._params.originalTextField,
              this._params.state,
              this._params.fieldSettings,
              this._params.actions
            )),
            (this.isTextFieldEmpty = this._params.textObserver.contentChanges.async.pipe(
              N.U((e) => "" === e.newText.trim()),
              B.x()
            )),
            (this._checkingService = null);
        }
        setCheckingService(e) {
          this._checkingService = e;
        }
        getCheckingServiceState() {
          var e;
          return null === (e = this._checkingService) || void 0 === e ? void 0 : e.state.value;
        }
        createIntegration(e) {
          var t, i;
          const {
            layout: a,
            highlights: s,
            textObserver: r,
            replacementService: n,
            alertProcessor: o,
            state: l,
            document: c,
            requestAwaitService: d,
            formattingService: u,
            sduiBufferService: p,
            sduiPopoverManager: m
          } = this._params;
          if (null == this._checkingService) return null;
          const g = null === (i = (t = this._params).getCheckingServicePreviousState) || void 0 === i ? void 0 : i.call(t);
          g && (this._checkingService.state.value = g);
          const h = this._params.createAssistantScroller ? this._params.createAssistantScroller() : new Xr({ layout: a }),
            { user: v } = l.get();
          return qr.create({
            layout: a,
            alertProcessor: o,
            connectionState: l.view((e) => e.connection),
            highlights: s,
            textObserver: r,
            replacementService: n,
            checkingService: this._checkingService.lazyCheckingService,
            checkingServiceInitialState: this._checkingService.state,
            gnar: e.gnar,
            felog: e.felog,
            user: {
              isPremium: v.premium,
              isAnonymous: v.anonymous,
              experiments: v.experiments,
              customFields: v.customFields,
              isGrammarlyEmployee: Ir.n5.isGrammarlyEmployee(v),
              isTestUser: Ir.n5.isTestUser(v),
              isFreeTrial: Ir.n5.isFreeTrial(v)
            },
            hoverProvider: this.hoverProvider,
            selectedHighlightsTracker: this.selectedHighlightsTracker,
            scroller: h,
            sidebarEvents: this.sidebarEvents,
            document: c,
            alertsTransformer: this._params.alertsTransformer,
            requestAwaitService: d,
            formattingService: u,
            getExistingAlerts: this._params.getExistingAlerts
              ? () => (this._params.getExistingAlerts ? this._params.getExistingAlerts() : null)
              : void 0,
            snippetsFeature: e.snippetsFeature,
            experimentClient: e.experimentClient,
            sduiBufferService: p,
            sduiPopoverManager: m,
            customEventsFilter: this._params.customEventsFilter
          });
        }
        dispose() {
          var e;
          null === (e = this._checkingService) || void 0 === e || e.state.dispose();
        }
      }
    },
    99111: (e, t, i) => {
      i.d(t, { r: () => Z });
      var a = i(57050),
        s = i(35214),
        r = i(40327),
        n = i(2050),
        o = i(73353),
        l = i(21729),
        c = i(5114),
        d = i(83078),
        u = i(51072),
        p = i(23239);
      var m = i(54696),
        g = i(75099),
        h = i(75982),
        v = i(55649),
        f = i(25938),
        b = i(80358),
        w = i(84966),
        S = i(34101),
        y = i(6488),
        E = i(79227),
        C = i(74660),
        k = i(68169),
        _ = i(95362),
        A = i(5008),
        I = i(43320),
        x = i(35301),
        T = i(85654),
        M = i(4390),
        R = i(55360),
        P = i(9922),
        L = i(67434),
        F = i(41398),
        D = i(2834),
        N = i(78674),
        B = i(77176),
        V = i(98403),
        H = i(93508),
        O = i(16118),
        U = i(95195),
        j = i(95574),
        G = i(71249),
        W = i(92843),
        z = i(31903),
        q = i(17771),
        K = i(9205);
      const Z = (e, t, i, C, M, H, O, W, Z, Y, Q, J) => {
          const $ = v.Y.create("createEngine"),
            ee = new P.w.Keeper(),
            te = (function (e, t, i) {
              const s = p.h.create(c.none),
                n = p.h.create(c.none);
              return {
                score: p.h.create(c.none),
                scoreStatus: p.h.create(c.none),
                title: p.h.create(void 0),
                textInfo: p.h.create(c.none),
                checkingState: p.h.create(e.checkingState),
                asyncChecksState: p.h.create(e.asyncChecksState),
                context: i,
                contextCompleteness: i.view(l.j.calculateCompleteness),
                updateContext: (e) => {
                  const t = !o.R$.eq.equals(i.get(), e);
                  return i.set(e), t;
                },
                defaultContext: s,
                updateDefaultContext: (e) => {
                  const t = !(0, r.pipe)((0, a.bc)([s.get(), e], d.vB(o.R$.eq.equals)));
                  return s.set(e), t;
                },
                documentText: t.getText(),
                documentLength: p.h.create({ full: t.getTextLength(), trimmed: t.getTextLength() }),
                counters: p.h.create(l.dM.group.empty),
                calculateStats: () => u.Vi(e.requestDocStats).then((e) => (n.set(c.some(e)), e)),
                recentDocumentStats: n
              };
            })(e, t, i),
            ie = t.changes.pipe(
              L.R(
                (e, i) =>
                  f.RI.isReset(i)
                    ? (0, r.pipe)(
                        i.text,
                        U.fold(() => t.getText(), a.yR)
                      )
                    : f.RI.isDelta(i)
                    ? (0, r.pipe)(
                        f.RI.resFromText(e).compose(i),
                        j.VS((e) => e.text),
                        U.fold(() => t.getText(), a.yR)
                      )
                    : e,
                ""
              )
            );
          ee.push(
            e.events
              .pipe(
                F.M(ie),
                D.b(([e, t]) => {
                  if ("alert_received" === e.kind) {
                    const i = (0, g.IM)(e.alert, h.Q.fromString("fake"));
                    m.$.isConsistentWithText(i, t) ||
                      (Y.alerts.inconsistentAlertWithText("assistant", null == i ? void 0 : i._tag), (0, n.i)($, i, t, "logging"));
                  }
                })
              )
              .subscribe(),
            e.events
              .pipe(
                D.b((t) => {
                  te.checkingState.set(e.checkingState),
                    b.h.is("text_info")(t)
                      ? te.textInfo.set(c.some(t.data))
                      : b.h.is("finish")(t)
                      ? (te.score.set(t.score), te.scoreStatus.set(t.scoreStatus))
                      : b.h.is("feedback_ack")(t)
                      ? ((0, r.pipe)(
                          t,
                          c.fromPredicate(b.h.isUserFeedbackWithGeneralScore),
                          c.map((e) => e.outcomeScores.GeneralScore),
                          c.map((e) => Math.trunc(100 * e)),
                          d.bw((e) =>
                            te.score.modify(
                              (0, a.ls)(
                                c.map((t) => ({ ...t, rank: e })),
                                d.vx(c.some({ errorRateScore: 0, rank: e }))
                              )
                            )
                          )
                        ),
                        (0, r.pipe)(
                          t,
                          c.fromPredicate(b.h.isUserFeedbackWithScoreStatus),
                          c.map((e) => e.scoreStatus),
                          d.bw((e) => te.scoreStatus.set(c.some(e)))
                        ))
                      : b.h.is("session_started")(t) && te.updateDefaultContext(t.defaultDocumentContext);
                })
              )
              .subscribe(),
            e.events
              .pipe(
                D.b((e) => {
                  (b.h.is("session_started")(e) || b.h.is("finish")(e)) &&
                    (0, r.pipe)(
                      W,
                      c.map((t) => t.pushStartFinishEvent(e))
                    );
                })
              )
              .subscribe(),
            M.contentChanges.async
              .pipe(
                N.b(300),
                B.U((e) => e.newText),
                B.U((e) => ({ full: e.length - 1, trimmed: e.trim().length })),
                D.b(V.wW(te.documentLength))
              )
              .subscribe()
          ),
            (0, r.pipe)(
              H(),
              c.map((e) => {
                te.updateDefaultContext(o.R$.parseDefault(e.defaultDocumentContext));
              })
            );
          const ae = new R.Xr(),
            se = new _.Ek(),
            re = (0, s.fold)((0, s.getEndomorphismMonoid)())(
              G.oA([
                c.some((e) =>
                  (0, r.pipe)(
                    O.get(),
                    c.fold(
                      () => e,
                      (t) => t.addSnippetsTriggerToAlert(e)
                    )
                  )
                )
              ])
            ),
            ne = new S.a(),
            oe = new k.SC(ae, se, () => t.getContents().delta, e.events, e, te.counters, re, void 0, ne),
            le = y.e.create(oe.state),
            ce = new E.k(le, oe._ops);
          ee.push(
            I.R.init(
              I.R.UserTextChangesSync.create(t),
              e.events,
              A.n.ignoreTEResult(e),
              A.n.ignoreResult(ae),
              se,
              A.A.merge([oe])
            ).subscribe()
          ),
            e.loadAlerts(C()),
            oe.flushAlerts(),
            Q.isGateEnabled(K.K.DontSyncAlertApplicationsWithInlineMode) || ee.push(X(oe.state, J));
          const de = c.some(x.J.CategoriesModel.create(e.events, e, oe.state, ce, w.JW.ScopeType.GLOBAL)),
            ue = c.some(T.k.create(le)),
            pe = (0, r.pipe)(
              (0, q.g)(c.option)(W, Z),
              c.map(([t, i]) => ({ sduiBufferService: t, sduiFeedbackService: new z.Q(e), sduiPopoverManager: i }))
            ),
            me = { enablePlagiarismSearch: e.enablePlagiarismSearch, disablePlagiarismSearch: e.disablePlagiarismSearch };
          return {
            alertsList: oe,
            alertsReader: le,
            alertsService: ce,
            positionManager: ae,
            getByRawAlertId: ne.getByRawAlertId.bind(ne),
            sessionModel: te,
            mutedAlertsCategoriesModel: de,
            mutingAlertsReader: ue,
            shutdown: () => {
              oe.dispose(), ee.dispose();
            },
            sduiEngine: pe,
            plagiarismClient: me
          };
        },
        X = (e, t) =>
          e
            .pipe(
              H.O(M.p.empty),
              O.G(),
              B.U(([e, t]) => M.p.diff(e, t)),
              B.U((e) =>
                (0, r.pipe)(
                  e,
                  W.v.reduce(
                    [],
                    (e, t) =>
                      (0, r.pipe)(
                        t.alert,
                        c.fromPredicate((e) => C.bZ.isApplied(e)),
                        c.map((e) => e.rawId),
                        c.getOrElse(() => c.none),
                        c.fold(
                          () => e,
                          (t) => [...e, t]
                        )
                      ),
                    a.yR,
                    a.yR
                  )
                )
              )
            )
            .subscribe((e) => {
              e.length && t(e);
            });
    },
    22027: (e, t, i) => {
      i.d(t, { aU: () => Ne, X5: () => Be, n: () => Ve });
      var a,
        s = i(57050),
        r = i(35214),
        n = i(5114),
        o = i(40327),
        l = i(85441),
        c = i(95294),
        d = i(25952),
        u = i(7737),
        p = i(98325),
        m = i(84447),
        g = i(31470),
        h = i(26109),
        v = i(2844),
        f = i(92693),
        b = i(81301),
        w = i(77176),
        S = i(28043),
        y = i(9922),
        E = i(16118),
        C = i(22232),
        k = i(83078),
        _ = i(23239);
      !(function (e) {
        e.equals = (e, t) => ("score" in e && "score" in t ? e.score === t.score : e.type === t.type);
      })(a || (a = {}));
      class A {
        constructor(e, t, i, r, l, c) {
          (this._sessionModel = e),
            (this._layoutVM = t),
            (this._modalManager = i),
            (this._user = r),
            (this._gnar = l),
            (this._closeAssistant = c),
            (this.showSetGoalsActionButton = _.h.create(!0)),
            (this.showSettingsActionButton = _.h.create(!0)),
            (this.close = () => {
              this._closeAssistant();
            }),
            (this.score = v
              .aj([this._sessionModel.score.view(n.map((e) => ({ capiScore: e.rank }))), this._sessionModel.checkingState])
              .pipe(
                w.U(([e, t]) =>
                  (0, o.pipe)(
                    e,
                    n.map((e) => ({ ...e, isLoading: "idle" !== t }))
                  )
                )
              )),
            (this.summary = this._sessionModel.textInfo.view(
              (0, s.ls)(
                n.chain((e) => e.messages),
                n.map((e) => e.assistantHeader),
                n.getOrElse(() => "Looking good so far"),
                (e) => ({ content: e })
              )
            )),
            (this.logoScore = (0, v.aj)([this._layoutVM.activeView, this.score]).pipe(
              w.U(([e, t]) =>
                (0, o.pipe)(
                  t,
                  n.fold(
                    () => ({ type: "logo" }),
                    (t) => (e.type !== f.a.Type.default ? { type: "logo" } : { type: "score", score: t })
                  )
                )
              ),
              S.x(a.equals)
            )),
            (this.visibility = this._layoutVM.activeView.view((e) => (e.type === f.a.Type.default ? "visible" : "hidden"))),
            (this._subs = new y.w.Keeper()),
            this._trackHeaderMessageChanges(),
            this._trackToShowActionButtons();
        }
        open(e) {
          if ("setGoals" === e) this._subs.push(this._modalManager.show(b.Iy.setGoals("user")).subscribe());
          else (0, C.vE)(e);
        }
        _trackHeaderMessageChanges() {
          const e = this.summary.pipe(E.G()).subscribe(([e, t]) => {
            var i, a;
            this._gnar.assistantHeaderMessageUpdate(
              e.content,
              t.content,
              null === (i = (0, o.pipe)(this._sessionModel.textInfo.get(), n.toUndefined)) || void 0 === i ? void 0 : i.wordsCount,
              null === (a = (0, o.pipe)(this._sessionModel.score.get(), k.Fc)) || void 0 === a ? void 0 : a.rank
            );
          });
          this._subs.push(e);
        }
        _trackToShowActionButtons() {
          const e = this._user.subscribe((e) => {
            e.isAnonymous
              ? (this.showSetGoalsActionButton.set(!1), this.showSettingsActionButton.set(!1))
              : (this.showSetGoalsActionButton.set(!0), this.showSettingsActionButton.set(!0));
          });
          this._subs.push(e);
        }
        dispose() {
          this._subs.dispose();
        }
      }
      var I = i(59881),
        x = i(42466),
        T = i(66896),
        M = i(98403),
        R = i(94895);
      class P {
        constructor(e, t, i, a, r) {
          (this._lensPreviewVM = e),
            (this._layoutVM = t),
            (this._emogenieService = i),
            (this._session = a),
            (this._gnar = r),
            (this._subs = new y.w.Keeper()),
            (this.previewState = _.h.create({ kind: x.fA.hidden })),
            (this.previewFlow = R.Z.fromSideEffect((e) => {
              if ("tone" === e.action.key) {
                const e = this._emogenieService.viewState.view("prevalentEmotion").get();
                return e && this._gnar.emogeniePredictionButtonClick(e.name), this._layoutVM.pushActiveView({ type: f.a.Type.emogenie });
              }
              (0, C.vE)(e.action.key);
            }, this.previewState)),
            (this._previewState = (0, s.zG)(
              v.aj([
                this._emogenieService.viewState.view((e) => n.fromNullable(e.settings.hiddenReport ? void 0 : e.prevalentEmotion)),
                this._emogenieService.viewState.view("brandToneOffImageUrl"),
                this._session.documentLength,
                this._lensPreviewVM.getLens(T.R.SpecialId.PredictionEmogenie)
              ]),
              w.U(([e, t, i, a]) =>
                n.isSome(e) && i.trimmed > 0
                  ? {
                      kind: x.fA.visible,
                      tone: (0, s.zG)(
                        e,
                        n.map((e) => ({ emotion: e, alertsCount: a.count, brandToneOffImageUrl: t }))
                      )
                    }
                  : i.trimmed > 0
                  ? { kind: x.fA.zero }
                  : { kind: x.fA.hidden }
              )
            )),
            this._subs.push(this._previewState.subscribe(M.wW(this.previewState)));
        }
        dispose() {
          this._subs.dispose();
        }
      }
      var L = i(89131),
        F = i(62623),
        D = i(13299),
        N = i(74660),
        B = i(66268),
        V = i(35416),
        H = i(66866),
        O = i(66310),
        U = i(91402),
        j = i(40151),
        G = i(76974),
        W = i(85985),
        z = i(78674),
        q = i(60797),
        K = i(41398),
        Z = i(95195);
      function X(e, t, i, a, s) {
        return {
          id: "changeAlertEffect",
          when: T.R.isWithAlertsId,
          what: V.nL.Effect.SwitchAlert.create(
            e.actionEvents.pipe(
              O.w((e) => {
                const r = t.get();
                if (!V.nL.hasCards(r)) return U._(new C.ej("Cannot update state without cards"));
                switch (e.type) {
                  case B.lY.Type.alertMinicardButtonClick:
                    return (0, o.pipe)(
                      i.getRegistered(e.alertHighlight.alert.id),
                      n.fold(
                        () => (s.warn("somehow we got click on non registered alert", e.alertHighlight.alert), j.E),
                        () => G.of(e.alertHighlight)
                      )
                    );
                  case B.lY.Type.cardMatchesNavigationButtonClick:
                    const t = e.transitionTo;
                    switch (t.kind) {
                      case "anotherAlert":
                        return (0, o.pipe)(
                          "right" === e.direction
                            ? a.nextAlert(t.card)
                            : (0, o.pipe)(a.prevAlert(t.card), k.vx(a.anyRegisteredAlert(t.card))),
                          n.fold(
                            () => j.E,
                            (e) => G.of({ alert: e, highlightIndex: 0 })
                          )
                        );
                      case "sameAlert":
                        return (0, o.pipe)(
                          i.getRegistered(t.card.activeAlert.id),
                          n.fold(
                            () => j.E,
                            () => G.of({ alert: t.card.activeAlert, highlightIndex: t.highlightIndex })
                          )
                        );
                      default:
                        return (0, C.vE)(t);
                    }
                  default:
                    return j.E;
                }
              }),
              w.U((e) => ({ alertHighlight: e, alertSource: N.l$.sidebar, options: { order: "lensOrder" } }))
            )
          )
        };
      }
      function Y(e, t, i) {
        const a = e.pipe(
          W.h(V.nL.hasCards),
          z.b(0),
          W.h((e) => e.currentLens.items.size > 0 && n.isNone(V.In.getActiveItem(e.currentLens)) && i.get()),
          w.U((e) =>
            (0, o.pipe)(
              e.currentLens.items.getAt(0),
              n.chain(
                m.O.checksFeedItemsMapper(
                  (e) => n.some(e.activeAlert),
                  (e) => n.some(e.activeAlert)
                )
              ),
              k.bw(() => t.set(n.some(D.CV.skip)))
            )
          ),
          q.oA,
          W.h((e) => e.state.type === N.bZ.State.Type.REGISTERED),
          S.x()
        );
        return {
          id: "focusFirstCardSideEffect",
          when: (e) => e !== T.R.SpecialId.PredictionEmogenie,
          what: V.nL.Effect.SwitchLens.create(
            a.pipe(
              K.M(e),
              w.U(([e, t]) => ({
                lensId: t.currentLens.id,
                alertSource: N.l$.text,
                options: { order: "lensOrder", toFocus: V.nL.Effect.FocusBehavior.focusAlert({ alert: e, highlightIndex: 0 }) }
              }))
            )
          )
        };
      }
      function Q(e, t, i) {
        const a = e.pipe(
          w.U(
            (e) => (a) =>
              e.type === H.ay.Type.AppliedAlertAnimationFinished && a.currentLens.meta.filter(e.alert) && V.nL.hasItems(a)
                ? a.patch({
                    currentLens: (0, o.pipe)(
                      Z.tryCatch(
                        () => (N.bZ.isApplicableAlert(e.alert) ? t.finishApplyAnimation([e.alert])(a.currentLens) : a.currentLens),
                        (e) => i.error("could not update lens state on applied animation finish", e)
                      ),
                      Z.getOrElse(() => a.currentLens)
                    ),
                    alertSource: e.alert.state.source
                  })
                : a
          )
        );
        return { id: "onAlertApply", when: s.W8, what: V.nL.Effect.Applicator.create(a) };
      }
      function J(e, t) {
        return {
          id: "lensChangeEffect",
          when: s.W8,
          what: V.nL.Effect.SwitchLens.create(
            e.pipe(
              K.M(t),
              W.h(([e, t]) => e.lensId !== t),
              w.U(([e]) => ({
                lensId: e.lensId,
                alertSource: N.l$.sidebar,
                options: {
                  order: "lensOrder",
                  toFocus: e.focusFirstCard ? V.nL.Effect.FocusBehavior.focusFirst : V.nL.Effect.FocusBehavior.noFocus
                }
              }))
            )
          )
        };
      }
      var $,
        ee = i(54466),
        te = i(71249);
      !(function (e) {
        const t = (e, t) =>
          e.pipe(
            W.h(B.lY.isCreateSnippetAction),
            w.U(({ id: e }) => (i) => {
              const a = (0, s.zG)(
                i.currentLens.items.update(e, t({ type: "success", clockwise: !0 })),
                Z.fold(() => i.currentLens.items, s.yR)
              );
              return ee.sU.itemsLens.set(a, i);
            })
          );
        e.applicatorEffects = (e, i) =>
          (0, s.zG)(
            [[t(e, i), "suggestedSnippetSuccessEffect"]],
            te.UI(([e, t]) => ({ id: `cardsViewModel.effects.${t}`, when: T.R.isWithAlertsId, what: V.nL.Effect.Applicator.create(e) }))
          );
      })($ || ($ = {}));
      var ie = i(55563),
        ae = i(864),
        se = i(36689),
        re = i(52098),
        ne = i(14592),
        oe = i(1050),
        le = i(8901),
        ce = i(56913),
        de = i(51129),
        ue = i(48015),
        pe = i(52622),
        me = i(13313),
        ge = i(21619),
        he = i(54216),
        ve = i(92485),
        fe = i(91549),
        be = i(83167),
        we = i(20594),
        Se = i(35607),
        ye = i(20291),
        Ee = i(4890),
        Ce = i(6100),
        ke = i(73841),
        _e = i(89770),
        Ae = i(39920),
        Ie = i(30013),
        xe = i(93508),
        Te = i(68425),
        Me = i(24209),
        Re = i(17343),
        Pe = i(32952),
        Le = i(8125),
        Fe = i(95574),
        De = i(81531);
      const Ne = (e) =>
          e
            .view((e) =>
              (0, o.pipe)(
                n.fromPredicate(V.nL.hasItems)(e),
                n.map((e) => e.currentLens.items),
                n.map((e) => e.filter((0, Le.Kg)(m.O.isAlertCard, m.O.isAlertsBundle))),
                n.map((e) => e.filter((e) => "rendered" === e.visualState.transition.type)),
                n.fold(
                  () => null,
                  (e) => e.values()
                )
              )
            )
            .pipe(
              xe.O([]),
              W.h(ue.Nf),
              E.G(),
              w.U(([e, t]) => {
                const i = new Set(e.map((e) => e.id));
                return t.filter((e) => !i.has(e.id));
              }),
              Te.J()
            ),
        Be = (e, t) =>
          e.alertClicked.pipe(
            w.U((e) =>
              (0, o.pipe)(
                e,
                n.fold(s.gn, (e) => e.alert)
              )
            ),
            W.h(ue.fQ),
            K.M(
              ((e) =>
                e.pipe(
                  w.U((e) => (V.nL.hasCards(e) && T.R.isMainLens(e.currentLens.id) ? m.O.getActiveItemWithAlert(e.currentLens) : n.none)),
                  w.U((e) =>
                    (0, o.pipe)(
                      e,
                      n.fold(
                        () => null,
                        (e) => e.activeAlert
                      )
                    )
                  )
                ))(t)
            ),
            W.h(([e, t]) => e.id !== (null == t ? void 0 : t.id)),
            w.U(([e, t]) => e)
          ),
        Ve = (e, t, i, a, v, y, C, x, R, U, z, q, K, te, Te, Ve, He, Oe, Ue, je, Ge, We, ze, qe, Ke, Ze, Xe, Ye) => {
          const Qe = De.C8.Logging.getLogger("view_models"),
            Je = _.h.create(me.A.defaultState),
            $e = _.h.create(!1),
            et = _.h.create(!1),
            tt = _.h.create(!1),
            it = de.n5.isFree(q.view("user").get()),
            at = (e) =>
              (0, Le.W9)(
                () => !et.get(),
                (0, Le.W9)((e) => !tt.get() || N.bZ.isInline(e), e)
              ),
            st = he.t.create(
              {
                ...he.t.defaultLensFilters,
                [T.R.SpecialId.Priority]: N.bZ.belongsToPriorityLens,
                [T.R.SpecialId.AllAlerts]: N.bZ.belongsToAllAlerts
              },
              {
                ...he.t.defaultTextFilters,
                [T.R.SpecialId.Closed]: s.jv,
                [T.R.SpecialId.Priority]: at(N.bZ.belongsToPriorityLens),
                [T.R.SpecialId.AllAlerts]: at(N.bZ.belongsToAllAlerts)
              }
            ),
            rt = Me.T(et, $e, tt).pipe(Re.h(M.PU)),
            nt = me.A.get(e.alertsList.state, e.alertsList.lensesScores, st).subscribe(M.wW(Je)),
            ot = new re.t(Je.view("lenses"), st, e.sessionModel.scoreStatus),
            lt = (0, ve.$y)((0, pe.a)(t).getContents),
            ct = {
              features: new Set([we.IG.Features.showCardLabelInOutcomes]),
              cardLayoutDensityMode: Ee.j.Density.minimal,
              shouldAnimateAlertApply: we.IG.Default.shouldAnimateAlertApply,
              cardVisualMode: _.h.create(Ee.j.CardVisualMode.RegularLightMode)
            },
            dt = (0, we.Ls)(lt, e.alertsReader, ct, () => G.of(n.none), e.mutingAlertsReader),
            ut = fe.R.ItemFactory.create(lt, e.mutingAlertsReader, ct, () => G.of(n.none)),
            pt = _.h.create(n.none),
            mt = _.h.create(16),
            gt = (0, d.q)(
              () => Ct.get().currentLens.id,
              () => pt.get(),
              () => mt.get()
            ),
            ht = m.O.getCapabilities(dt, ut, e.alertsReader, lt, gt),
            vt = new Ae.gi(m.O.equatable.structEq, m.O.defaultOrd),
            ft = (0, Ae.is)(dt, ht),
            bt = new Ae.ad((e) => e.id === T.R.SpecialId.Priority, vt, m.O.equatable.structEq, m.O.bundlesOrd),
            wt = (0, Ae.kn)(ut, ct, (e) => e === T.R.SpecialId.Priority, ft, ht),
            St = Ie.v.createWithInitialAlerts(bt, wt, st, (0, s.ff)(N.bZ.isMuted), ht),
            yt = new _e.oq(e.alertsList.state, e.alertsReader, Je.view("lenses"), e.positionManager, ot, St, wt, ht, st),
            Et = i.get(),
            Ct = _.h.create(yt.emptyState(Et).patch({ alertSource: N.l$.sidebar }));
          R.next({ kind: ie.R.ChangeLens, selectedLens: Et === T.R.SpecialId.Priority ? "priority" : "all" });
          const kt = (0, be.u0)(() => t.getCursor().index, yt),
            _t = new le.x(e.alertsList, Ct, 3, Ye, te),
            At = new b.EQ(new oe.o(e.sessionModel, _t, Ve.get().isPremium, te)),
            It = new ae.C((0, l.nD)(Ke())),
            xt = new ee.Xx(
              { flush: () => t.flushChanges() },
              new Pe.xQ(),
              dt,
              e.alertsService,
              e.alertsReader,
              () => Promise.resolve(),
              () => Promise.resolve(),
              (0, o.pipe)(
                e.mutedAlertsCategoriesModel,
                n.map((e) => ({ model: e, openSuggestionsManagement: () => self.open((0, ce.Um)().suggestionsSettings) }))
              ),
              n.some(h.B.getCardsViewModelSendToURLExperiment(It, te)),
              () => !1,
              m.O.getActiveItemWithAlert,
              ht,
              Ct,
              It,
              { bufferTransitions: !0, showGbPrompt: h.B.shouldShow(Ve.get()) }
            ),
            Tt = new u.y(xt.actionEvents, te, e.alertsReader),
            Mt = new f.D(te, Oe, Ue, ze, qe),
            Rt = new P(ot, Mt, a, e.sessionModel, te),
            Pt = new p.WY(Ct, Rt, _t, ht, te, it),
            Lt = new Se.o(() => Z.right(void 0)),
            Ft = Pt.upgradeHookExpanded
              .pipe(
                w.U((e) => e && it),
                S.x()
              )
              .subscribe(M.wW($e)),
            Dt = (0, ne.xl)(Ct, st, rt, $e),
            Nt = new ne.o$(
              e.alertsList,
              e.alertsReader,
              e.positionManager,
              e.alertsService,
              t,
              Ct,
              Dt,
              m.O.getActiveItemWithAlert,
              U,
              !0,
              $e
            ),
            Bt = (0, D.hp)(Ct, Nt, _.h.create(16), Lt, t, Qe),
            Vt = new Pe.xQ(),
            Ht = Ct.pipe(w.U((e) => e.currentLens.id)),
            Ot = new A(e.sessionModel, Mt, At, Ve, te, He),
            Ut = Mt.activeView
              .pipe(
                w.U((e) => e.type),
                xe.O(f.a.Type.startupPlaceholder),
                E.G(),
                w.U(([e, t]) => e === f.a.Type.startupPlaceholder && t === f.a.Type.proofitRequest)
              )
              .subscribe(M.wW(tt)),
            jt = Pt.cardListViewportHeight.subscribe(M.wW(pt)),
            Gt = new g._(Mt, Te, te),
            Wt = (0, o.pipe)(
              x,
              n.map((e) => new L.S(Mt, e, He, te))
            ),
            zt = Ct.view(V.nL.getActiveAlertHighlight(m.O.getActiveItemWithAlert)),
            qt = new ge.mN(
              t,
              Nt,
              e.alertsReader,
              zt,
              Ct.view((e) => e.currentLens.meta.filter)
            ),
            Kt = Ne(Ct),
            Zt = Be(qt, Ct),
            Xt = v
              .pipe(
                O.w(
                  n.fold(
                    () => j.E,
                    (t) => t.initAssistantCardActionsProcessing(xt.actionEvents, e.alertsReader, Ct, Kt, Zt)
                  )
                )
              )
              .subscribe(),
            Yt = y
              .pipe(
                O.w(
                  n.fold(
                    () => j.E,
                    (t) => t.initCardActionsProcessing(xt.actionEvents, e.alertsReader, Kt, Zt, Ct)
                  )
                )
              )
              .subscribe(),
            Qt = C.pipe(
              O.w(
                n.fold(
                  () => j.E,
                  (t) => t.initCardActionsProcessing(xt.actionEvents, e.alertsReader, Kt, Ct)
                )
              )
            ).subscribe(),
            Jt = _.h.create(
              (0, o.pipe)(
                z,
                n.fold(
                  () => D.CV.skip,
                  () => N.l$.text
                ),
                n.some
              )
            ),
            $t = [
              (0, se.A7)(qt, Ct, it),
              (0, o.pipe)(
                H.EQ.focusMarkByActiveAlert(
                  Ct,
                  Nt,
                  e.alertsReader,
                  m.O.getActiveFocusableItem,
                  Qe.getLogger("MarksEffects.focusMarkByActiveAlert")
                ),
                V.nL.Effect.Producer.delayed(U)
              ),
              Q(Nt.events, ht, Qe.getLogger("createOnAlertApplySideEffect")),
              X(xt, Ct, e.alertsReader, dt, Qe),
              Y(Ct, Jt, Pt.autoFocusEnabled),
              ...xt.getApplicatorEffects(),
              Pt.applicatorEffects,
              ye.R7(Ct, Lt, ht, (0, s.MZ)(xt.actionEvents), { cardsAroundActive: 10, cardsBeyondViewport: 10 }),
              (0, o.pipe)((0, D.k9)(Ct, Bt, Jt, m.O.getActiveAlignableItem, ht), V.nL.Effect.Producer.delayed(U)),
              ye.XU(Ct, Lt, ht),
              J(Vt, Ht),
              ee.dv.createSendActiveAlertFeedbacksEffect(
                Ct,
                m.O.getActiveItemWithAlert,
                e.alertsService,
                e.alertsReader,
                Qe.getLogger("CardsViewModelEffects.createSendActiveAlertFeedbacksEffect")
              ),
              ...$.applicatorEffects(xt.actionEvents, ht.transitionTo)
            ],
            ei = _.h.create(T.R.SpecialId.AllAlerts),
            ti = Ct.view((e) => e.currentLens.id)
              .pipe(W.h((e) => e === T.R.SpecialId.Priority || e === T.R.SpecialId.AllAlerts))
              .subscribe(M.wW(ei)),
            ii = (0, be.VC)(yt, kt, ei, ht),
            ai = _.h.create(z),
            si = (0, be.Dv)((e) => T.R.isMainLens(e.currentLens.id), ii, ht),
            ri = new be.vM(e.sessionModel.checkingState, Ct),
            ni = (0, o.pipe)(
              [
                (0, o.pipe)(
                  (e) => be.Py.whenShouldVerifyCurrentLens(m.O.getActiveItemWithAlert, ht)(e),
                  be.Py.behaviorToEffect(() => n.some(V.nL.Effect.FocusBehavior.focusNext))
                ),
                (0, o.pipe)(
                  (0, Le.W9)(() => n.isSome(ai.get()), be.Py.whenNoActiveCard),
                  be.Py.behaviorToEffect((e) =>
                    (0, o.pipe)(
                      ((e) => {
                        const t = (0, n.fromPredicate)((0, Le.Kg)(m.O.isAlertCard, m.O.isAlertsBundle));
                        return (0, o.pipe)(
                          ai.get(),
                          n.chain(
                            (i) => (
                              ai.set(n.none),
                              V.nL.hasCards(e)
                                ? (0, o.pipe)(
                                    e.currentLens.items.reduce(
                                      (e, a) =>
                                        (0, o.pipe)(
                                          e,
                                          n.alt(() =>
                                            (0, o.pipe)(
                                              a,
                                              t,
                                              n.chain((e) => n.fromNullable(e.alerts.find((e) => e.id.startsWith(i + "_"))))
                                            )
                                          )
                                        ),
                                      n.none
                                    ),
                                    n.map((t) => ({ alert: t, highlightIndex: 0, lensId: e.currentLens.id }))
                                  )
                                : n.none
                            )
                          )
                        );
                      })(e),
                      n.map((e) => V.nL.Effect.FocusBehavior.focusAlert(e))
                    )
                  )
                ),
                (0, o.pipe)(
                  (0, Le.W9)(
                    () => Pt.autoFocusEnabled.get(),
                    (0, Le.W9)(be.Py.whenFirstOpeningDocumentWithAlerts(ri), be.Py.whenNoActiveCard)
                  ),
                  be.Py.behaviorToEffect(() => n.some(V.nL.Effect.FocusBehavior.focusFirst))
                )
              ],
              (0, r.fold)((0, r.getFunctionMonoid)(n.getFirstMonoid())())
            ),
            oi = be.Py.getStateTransformer(
              ni,
              si,
              e.alertsReader,
              ht,
              (e) => Pt.autoFocusEnabled.get() && "text" !== e.alertSource,
              s.Q1,
              ei
            ),
            li = Ce.v.Items.getItemsPositionsUpdateTransformer(ht),
            ci = (0, s.ls)(oi, Fe.L9(li)),
            di = new ke.l(Ct, yt, e.alertsReader, e.alertsService, $t, m.O.getActiveItemWithAlert, ci),
            ui = Vt.pipe(
              w.U(({ lensId: e }) => e),
              W.h((e) => e === T.R.SpecialId.AllAlerts || e === T.R.SpecialId.Priority),
              S.x()
            ).subscribe((e) => {
              i.set(e), R.next({ kind: ie.R.ChangeLens, selectedLens: e === T.R.SpecialId.Priority ? "priority" : "all" });
            }),
            pi = Mt.activeView
              .pipe(
                w.U((e) => {
                  switch (e.type) {
                    case f.a.Type.default:
                      return i.get();
                    case f.a.Type.emogenie:
                      return T.R.SpecialId.PredictionEmogenie;
                    case f.a.Type.proofitReview:
                      return T.R.SpecialId.RealTimeProofit;
                    default:
                      return null;
                  }
                }),
                W.h(ue.fQ),
                S.x(),
                w.U((e) => [e, e === T.R.SpecialId.AllAlerts || e === T.R.SpecialId.Priority])
              )
              .subscribe(([e, t]) => Vt.next({ lensId: e, focusFirstCard: t })),
            mi = new F.X(q, K, Xe, Te),
            gi = xt.actionEvents.pipe(W.h(B.lY.isOpenIdeasGallery)).subscribe(() => self.open((0, ce.Um)().grammarlyIdeasSales, "_blank")),
            hi = (0, I.W)(je),
            vi = xt.actionEvents.subscribe(
              (0, s.ls)(
                (0, c.JH)(e.alertsReader, c.SV.Source.assistant),
                k.bw((e) => {
                  (async () => {
                    e.kind === c.SV.Kind.alertApply && e.source === c.SV.Source.assistant && (await Ze.incrementCounter()), We.next(e);
                  })();
                })
              )
            );
          return {
            lensState: Ct,
            cardsViewModel: xt,
            lensPreviewViewModel: ot,
            cardsListScrollManager: Lt,
            upgradeViewModel: _t,
            alertProcessor: Ge,
            assistantHeaderViewModel: Ot,
            assistantLayoutViewModel: Mt,
            assistantCardListViewModel: Pt,
            lensChanged: Vt,
            predictionsPreviewViewModel: Rt,
            assistantFeedbackViewModel: Gt,
            assistantSettingsViewModel: mi,
            assistantProofitViewModel: Wt,
            assistantModalManager: At,
            marksViewModel: Nt,
            gnar: te,
            positionViewModel: hi,
            user: Ve,
            capabilities: ht,
            remSize: mt,
            isSingleCardAssistant: !1,
            dispose: () => {
              vi.unsubscribe(),
                xt.dispose(),
                di.dispose(),
                Nt.dispose(),
                Rt.dispose(),
                ui.unsubscribe(),
                nt.unsubscribe(),
                pi.unsubscribe(),
                Ot.dispose(),
                Pt.dispose(),
                At.hideAll(),
                ti.unsubscribe(),
                jt.unsubscribe(),
                Ut.unsubscribe(),
                gi.unsubscribe(),
                Yt.unsubscribe(),
                Qt.unsubscribe(),
                Xt.unsubscribe(),
                Ft.unsubscribe(),
                (0, o.pipe)(
                  Wt,
                  k.bw((e) => e.dispose())
                ),
                Tt.dispose();
            }
          };
        };
    },
    7737: (e, t, i) => {
      i.d(t, { t: () => c, y: () => o });
      var a = i(67331),
        s = i(66268),
        r = i(85985),
        n = i(77176);
      class o {
        constructor(e, t, i) {
          (this._cardActions = e),
            (this._gnar = t),
            (this._alertsReader = i),
            (this._subs = [
              c(this._cardActions, this._gnar, "assistant"),
              l(this._cardActions, this._gnar),
              a.g.createSubscription(this._cardActions, this._gnar, this._alertsReader.getById)
            ]);
        }
        dispose() {
          this._subs.forEach((e) => e.unsubscribe());
        }
      }
      const l = (e, t) =>
          e.pipe(r.h((e) => e.type === s.lY.Type.sduiCardAction && "learn-more" === e.sourceId)).subscribe(() => {
            t.learnMoreButtonClick();
          }),
        c = (e, t, i) =>
          e
            .pipe(
              n.U((e) => e.type),
              r.h(
                (e) =>
                  e === s.lY.Type.muteAlertCategory ||
                  e === s.lY.Type.undoMuteAlertCategory ||
                  e === s.lY.Type.mutedAlertSuggestionManagementClick ||
                  e === s.lY.Type.mutedAlertSuccessShow
              )
            )
            .subscribe((e) => {
              switch (e) {
                case s.lY.Type.muteAlertCategory:
                  t.mutedAlertsCardTurnOffButtonClick(i);
                  break;
                case s.lY.Type.undoMuteAlertCategory:
                  t.mutedAlertsTurnBackOnButtonClick(i);
                  break;
                case s.lY.Type.mutedAlertSuggestionManagementClick:
                  t.suggestionManagementClick(i);
                  break;
                case s.lY.Type.mutedAlertSuccessShow:
                  t.categoryDeactivatedShow(i);
              }
            });
    },
    98325: (e, t, i) => {
      i.d(t, { WY: () => U, lo: () => a });
      var a,
        s = i(57050),
        r = i(40327),
        n = i(84447),
        o = i(42466),
        l = i(8901),
        c = i(20641),
        d = i(48015),
        u = i(66896),
        p = i(74660),
        m = i(70023),
        g = i(94785),
        h = i(9922),
        v = i(77176),
        f = i(95300),
        b = i(28043),
        w = i(2834),
        S = i(95093),
        y = i(32952),
        E = i(16782),
        C = i(85985),
        k = i(24209),
        _ = i(78674),
        A = i(60797),
        I = i(57091),
        x = i(50628),
        T = i(66310),
        M = i(85089),
        R = i(41398),
        P = i(16118),
        L = i(35416),
        F = i(6100),
        D = i(27125),
        N = i(5114),
        B = i(8125),
        V = i(23239),
        H = i(94895),
        O = i(44358);
      !(function (e) {
        let t;
        !(function (e) {
          (e.clickOnEmpty = "clickOnEmpty"), (e.clickOnFakeCard = "clickOnFakeCard"), (e.clickOnUpgradeCard = "clickOnUpgradeCard");
        })((t = e.Type || (e.Type = {})));
      })(a || (a = {}));
      class U {
        constructor(e, t, i, U, j, G) {
          (this._lensState = e),
            (this._predictionsVM = t),
            (this._upgradeViewModel = i),
            (this._capabilities = U),
            (this._gnar = j),
            (this._isYellowUnderlinesExperimentActive = G),
            (this._subs = new h.w.Keeper()),
            (this.activeAlert = this._lensState.pipe(
              v.U((e) => (L.nL.hasCards(e) && u.R.isMainLens(e.currentLens.id) ? n.O.getActiveItemWithAlert(e.currentLens) : N.none)),
              v.U((e) =>
                (0, r.pipe)(
                  e,
                  N.fold(
                    () => null,
                    (e) => e.activeAlert
                  )
                )
              )
            )),
            (this.successView = V.h.combine(this._lensState, this._predictionsVM.previewState, (e, t) =>
              F.v.WithSuccess.State.isInSuccess(this._capabilities)(e)
                ? t.kind === o.fA.visible
                  ? N.some(D.g.SuccessType.applied)
                  : N.some(D.g.SuccessType.small)
                : N.none
            )),
            (this._premiumAlertsCount = this._upgradeViewModel.advancedAlerts.view(
              (0, s.ls)(
                N.map((e) => e.count),
                N.getOrElse(() => 0)
              )
            )),
            (this.havePremiumAlerts = this._premiumAlertsCount.view((e) => e > 0)),
            (this._upgradeHookExpanded = new f.X(!1)),
            (this.upgradeHookExpanded = (0, r.pipe)(this._upgradeHookExpanded, b.x())),
            (this.upgradeHookFlow = (0, r.pipe)(
              (0, m.d)(this._upgradeViewModel.advancedAlerts),
              H.Z.extendActions(
                w.b((e) => {
                  e.key === g.n.State.expanded
                    ? "upgrade" === e.action.kind
                      ? ((0, O.Q)(this._gnar, {
                          placement: "advancedIssues",
                          bannerType: "SeeWhatsInPremium",
                          upgradeHookName: "advancedIssues",
                          upgradeHookSlot: "singleCardAssistant"
                        }),
                        (0, c.Tb)().upgradeHooks.clickUpgradeHook("advancedIssues", "singleCardAssistant"),
                        this._upgradeViewModel.openUpgradeUrl(l.L.Place.assistantCardList))
                      : "onUpgradeButtonMount" === e.action.kind && this._onUpgradeButtonMount.next(e.action.element)
                    : e.key === g.n.State.minimized &&
                      "onClick" === e.action.action &&
                      (this._upgradeHookExpandReason.next("click"),
                      this._isYellowUnderlinesExperimentActive && this.assistantActions.next({ type: a.Type.clickOnUpgradeCard }));
                })
              ),
              H.Z.patchState(S.T(this._minimizeUpgradeHook())),
              H.Z.patchState(S.T(this._autoOpenUpgradeHook())),
              H.Z.patchState(
                w.b((e) =>
                  this._onUpgradeHookShown.next(
                    (function (e) {
                      switch (e) {
                        case "hidden":
                          return g.n.State.hidden;
                        case "expanded":
                          return g.n.State.expanded;
                        case "minimized":
                          return g.n.State.minimized;
                        default:
                          (0, d.vE)(e);
                      }
                    })(e.kind)
                  )
                )
              ),
              H.Z.patchState(w.b((e) => this._upgradeHookExpanded.next("expanded" === e.kind)))
            )),
            (this.cardListContext = new f.X(N.none)),
            (this.assistantActions = new y.xQ()),
            (this.autoFocusEnabled = V.h.create(!0)),
            (this.cardListViewportHeight = V.h.create(N.none)),
            (this._onUpgradeButtonMount = new E.t()),
            (this._upgradeHookExpandReason = new E.t()),
            (this._onUpgradeHookShown = new y.xQ()),
            (this._unselectActiveAlert = this.assistantActions.pipe(
              C.h(
                (e) =>
                  e.type === a.Type.clickOnEmpty ||
                  e.type === a.Type.clickOnFakeCard ||
                  !(!this._isYellowUnderlinesExperimentActive || e.type !== a.Type.clickOnUpgradeCard)
              ),
              w.b(() => this.autoFocusEnabled.set(!1)),
              v.U(
                () => (e) =>
                  e.patch({
                    currentLens: (0, r.pipe)(
                      L.In.getActiveItem(e.currentLens),
                      N.fold(
                        () => e.currentLens,
                        (t) => (L.nL.hasItems(e) ? this._capabilities.unselectItem()(e.currentLens) : e.currentLens)
                      )
                    ),
                    switchOrder: "lensOrder",
                    alertSource: p.l$.sidebar
                  })
              )
            )),
            (this.applicatorEffects = {
              id: "assistantCardListViewModel.effects",
              when: u.R.isWithAlertsId,
              what: L.nL.Effect.Applicator.create(k.T(this._unselectActiveAlert))
            }),
            this._subs.push(
              this._onUpgradeHookShown
                .pipe(
                  _.b(1),
                  b.x(),
                  C.h((e) => e === g.n.State.minimized)
                )
                .subscribe(() => {
                  this._gnar.assistantCollapsedUpgradeHookShow();
                }),
              this._onUpgradeButtonMount
                .pipe(
                  A.oA,
                  I.a(this.cardListContext.pipe(A.oA, x.P())),
                  T.w(([e, t]) => M.n(e, { root: t }).pipe(x.P())),
                  C.h(B.Dw),
                  v.U((e) => Math.trunc(100 * e[0].intersectionRatio)),
                  R.M(this._upgradeHookExpandReason, this._premiumAlertsCount)
                )
                .subscribe(([e, t, i]) => {
                  this._gnar.assistantExpandedUpgradeHookShow(i, e, t);
                }),
              this._lensState
                .pipe(
                  C.h(L.nL.hasCards),
                  v.U((e) => L.In.getActiveItem(e.currentLens)),
                  P.G(),
                  C.h(([e, t]) => N.isNone(e) && N.isSome(t))
                )
                .subscribe((e) => {
                  this.autoFocusEnabled.set(!0);
                })
            );
        }
        dispose() {
          this._subs.dispose();
        }
        _minimizeUpgradeHook() {
          return this.activeAlert.pipe(
            b.x(),
            R.M(this.upgradeHookExpanded),
            C.h(([e, t]) => !!(e && t && this._isYellowUnderlinesExperimentActive)),
            R.M(this._upgradeViewModel.advancedAlerts),
            v.U(([e, t]) =>
              (0, r.pipe)(
                t,
                N.fold(
                  () => ({ kind: g.n.State.hidden }),
                  (e) => ({ kind: g.n.State.minimized, alertsCount: e.count })
                )
              )
            )
          );
        }
        _autoOpenUpgradeHook() {
          return this._lensState.pipe(
            C.h((e) => (0, r.pipe)(e.currentLens.id, (0, B.Kg)(u.R.isPriority, u.R.isAllAlerts))),
            v.U(F.v.WithSuccess.State.isInSuccess(this._capabilities)),
            I.a(this.havePremiumAlerts, (e, t) => e && t),
            b.x(),
            w.b((e) => {
              e && this._upgradeHookExpandReason.next("alertsAddressed");
            }),
            R.M(this._upgradeViewModel.advancedAlerts),
            v.U(([e, t]) =>
              (0, r.pipe)(
                t,
                N.fold(
                  () => ({ kind: g.n.State.hidden }),
                  (t) =>
                    e
                      ? { kind: g.n.State.expanded, showCloseButton: !0, alertsState: { count: t.count, alerts: t.alerts() } }
                      : { kind: g.n.State.minimized, alertsCount: t.count }
                )
              )
            )
          );
        }
      }
    },
    84447: (e, t, i) => {
      i.d(t, { O: () => a });
      var a,
        s = i(57050),
        r = i(35214),
        n = i(40327),
        o = i(22373),
        l = i(7910),
        c = i(27195),
        d = i(17594),
        u = i(26027),
        p = i(91549),
        m = i(20594),
        g = i(77610),
        h = i(16892),
        v = i(48521),
        f = i(35416),
        b = i(6100),
        w = i(8125),
        S = i(45701),
        y = i(73975),
        E = i(5114),
        C = i(94895);
      !(function (e) {
        function t(e, t) {
          return f.nL.Items.mapper((e) => e.kind, { [u.X.Kind]: e, [p.R.Kind]: t });
        }
        function i(e) {
          return e.kind === u.X.Kind;
        }
        function a(e) {
          return e.kind === p.R.Kind;
        }
        function k(e) {
          return i(e) && g.i.isEthicalAIItem(e);
        }
        function _(e) {
          return a(e) && g.i.isEthicalAIItem(e);
        }
        function A(e) {
          return {
            viewState: (i, a) =>
              t(
                (t) => ({ view: t, isLastCard: i, kind: "alertCard", visibleViewportHeight: e(a) }),
                (t) => ({ view: t, isLastCard: i, kind: "alertsBundle", visibleViewportHeight: e(a) })
              )
          };
        }
        (e.isSelectableWithAlertItem = (0, w.Kg)(i, a)),
          (e.getActiveItemWithAlert = f.In.getActiveItemOfType(e.isSelectableWithAlertItem)),
          (e.getActiveAlignableItem = f.In.getActiveItemOfType(e.isSelectableWithAlertItem)),
          (e.getActiveFocusableItem = f.In.getActiveItemOfType(e.isSelectableWithAlertItem)),
          (e.checksFeedItemsMapper = t),
          (e.isAlertCard = i),
          (e.isAlertsBundle = a),
          (e.isEthicalAIAlertCard = k),
          (e.isEthicalAIAlertsBundle = _),
          (e.defaultOrd = (0, r.fold)(S.getMonoid())([
            (0, n.pipe)(S.ordBoolean, S.contramap((0, w.ff)(k))),
            S.fromCompare((e, t) => (i(e) && i(t) ? u.X.ord.compare(e, t) : 0))
          ])),
          (e.bundlesOrd = (0, r.fold)(S.getMonoid())([
            (0, n.pipe)(S.ordBoolean, S.contramap((0, w.ff)(_))),
            S.fromCompare((e, t) => (a(e) && a(t) ? p.R.ord.compare(e, t) : 0))
          ])),
          (e.item = (e) => C.UI.Union.make("kind", { alertCard: o.p.Card(e), alertsBundle: c.Q.Card(e) })),
          (e.viewState = A),
          (e.createCardListFlow = () => (0, l.sJ)(s.Q1)),
          (e.listItemOrd = (e) => S.contramap((e) => e.cell.item.view)(e).compare);
        const I = { equals: (e, t) => e.kind === t.kind && h.s.eqById.equals(e, t) },
          x = (e, t) => ({
            equals: (i, a) => {
              const s = { [u.X.Kind]: e, [p.R.Kind]: t };
              return I.equals(i, a) && ((r = (e) => e.kind), (n = s), (e, t) => n[r(e)].equals(e, t))(i, a);
              var r, n;
            }
          }),
          T = (0, r.fold)(y.uZ())([v.o.eq, h.s.verticalPositionEq, I]);
        function M(e) {
          const i = u.X.Capabilities.getChangePosition(e);
          return { changePosition: (e) => t(i.changePosition(e), p.R.changePosition(e)) };
        }
        function R(e, i) {
          const a = u.X.Capabilities.getAnimatable(e),
            s = p.R.Capabilities.getAnimatable(i);
          return {
            completeTransition: (e) => t(a.completeTransition(e), s.completeTransition(e)),
            transitionTo: (e) => t(a.transitionTo(e), s.transitionTo(e)),
            changeVisualState: (e) => t(a.changeVisualState(e), s.changeVisualState(e))
          };
        }
        function P(e, i, a, r) {
          const n = p.R.getCardHydrator(r),
            o = p.R.getSelect(i, a, n),
            l = p.R.getSelectByAlert(i, a, n),
            c = u.X.Capabilities.getSelect(e);
          return {
            select: (e, i) => t(c.select(e, i), o(e, i)),
            selectByAlert: (e, i, a) => t(c.selectByAlert(e, i, a), l(i, e, a)),
            unselect: (e, i) => t(c.unselect((0, s.MZ)(e), i), p.R.unselect((0, s.MZ)(e), i))
          };
        }
        function L(e, s, r, n) {
          return {
            removeAlertFromItem: (o, l) =>
              t(
                (t) => u.X.Capabilities.getRemoveAlerts(e, l.itemsOrd)(o, f.In.getActiveItemOfType(i)(l))(t),
                (e) => p.R.Capabilities.getRemoveAlertsCapability(s, r, n, l.itemsOrd)(o, f.In.getActiveItemOfType(a)(l))(e)
              )
          };
        }
        function F(e, i, a) {
          const s = u.X.Capabilities.getRemove(e);
          return { remove: (e, r) => t(s.remove(e, r), (t) => (e(t) ? p.R.Capabilities.getRemove(i, a)([t.activeAlert], r(t))(t) : t)) };
        }
        function D(e, i, a) {
          const s = u.X.Capabilities.getUpdateWithAlert(e),
            r = p.R.Capabilities.getUpdatableWithAlertsCapability(i, a);
          return { updateWithAlerts: (e) => t(s.updateWithAlerts(e), r(e)) };
        }
        (e.equatable = { structEq: x(u.X.eq, p.R.eq), idEq: x(I, I), visualStateEq: x(T, T) }),
          (e.changePosition = M),
          (e.disposable = {
            isScheduledToDispose: t(
              (e) => g.i.willBeDisposed(e, e.removedAlertsIds),
              (e) => g.i.willBeDisposed(e, e.removedAlertsIds)
            )
          }),
          (e.hidable = { isHidden: t(v.o.isHidden, v.o.isHidden) }),
          (e.animatableItem = R),
          (e.hasAlertsQueries = {
            isSelectableByAlert: (e) => t(g.i.hasAlert(e.alert.id), g.i.hasAlert(e.alert.id)),
            hasAlert: (e) => t(g.i.hasAlert(e), g.i.hasAlert(e)),
            hasActiveAlert: t(g.i.hasActiveAlert, g.i.hasActiveAlert)
          }),
          (e.changePositionStrategyQueries = { useReferenceHeightOnRemove: t(s.jv, s.jv) }),
          (e.select = P),
          (e.removeAlert = L),
          (e.remove = F),
          (e.updateWithAlert = D),
          (e.releaseAlert = (t, i, a, s) => b.v.Capabilities.getAlertReleaser({ ...L(t, i, a, s), ...e.disposable })),
          (e.unselectable = (t, i, a, s) => b.v.Capabilities.getUnselectable(f.In.getActiveItem, { ...P(t, i, a, s), ...e.disposable })),
          (e.selectableByAlert = (t, i, a, s) =>
            b.v.Capabilities.getSelectableByAlert(f.In.getActiveItem, {
              ...e.hasAlertsQueries,
              ...P(t, i, a, s),
              ...b.v.Capabilities.getHasChecksFeed(),
              ...e.disposable
            })),
          (e.selectableById = (t, i, a, s) =>
            b.v.Capabilities.getSelectableById(f.In.getActiveItem, { ...P(t, i, a, s), ...e.disposable })),
          (e.updateMeta = () => ({ updateMeta: b.v.Capabilities.getMetaUpdatable().updateMeta })),
          (e.animatableFeed = (e, t, i, a) =>
            b.v.Capabilities.getAnimatable(e, { ...L(e, t, i, a), ...R(e, a), ...b.v.Capabilities.getHasChecksFeed() })),
          (e.hasPriorityToggle = (t, i) => b.v.WithPriority.getHasPriorityToggle({ ...R(t, i), ...e.hasAlertsQueries, ...e.disposable }));
        const N = (t) => ["focused", "expanded"].includes(t.visualState.transition.type) && !e.disposable.isScheduledToDispose(t);
        function B(e) {
          const i = m.Mq.getCardSelections(e);
          return { nextAlert: t(i.nextAlert, i.nextAlert), prevAlert: t(i.prevAlert, i.prevAlert) };
        }
        function V() {
          return { updateUserInput: (e) => t(u.X.updateUserInput(e), p.R.changeUserInput(e)) };
        }
        (e.alignable = { isValidToAlign: t(N, N) }),
          (e.alertIterator = B),
          (e.itemReleaser = () => b.v.Capabilities.getItemReleaser()),
          (e.hasAlerts = b.v.Capabilities.getHasAlerts),
          (e.getDefaultNextAlertItemFilter = (t) =>
            (0, w.W9)(
              e.isSelectableWithAlertItem,
              (i) =>
                !e.disposable.isScheduledToDispose(i) &&
                (0, n.pipe)(
                  i,
                  e.hasAlertsQueries.hasActiveAlert,
                  E.map((e) => t.isRegistered(e.alert.id)),
                  E.getOrElse(s.jv)
                )
            )),
          (e.hasUserInput = V),
          (e.priorityTest = (0, w.W9)(i, (e) => d.$.isPriority(e.activeAlert))),
          (e.verifiable = () => b.v.Capabilities.getVerifiable(e.disposable)),
          (e.cloneable = () => {
            const e = h.s.Capabilities.getPojoCloneable().clone;
            return { clone: t(u.X.Capabilities.getCloneable().clone, e) };
          }),
          (e.getCapabilities = function (t, i, a, r, n = (0, s.a9)(E.none), o = m.IG.Default) {
            return {
              ...A(n),
              ...e.disposable,
              ...e.hidable,
              ...e.equatable,
              ...V(),
              ...e.cloneable(),
              ...M(t),
              ...R(t, r),
              ...P(t, a, o, r),
              ...F(t, o, r),
              ...L(t, a, o, r),
              ...D(t, i, r),
              ...e.hasAlertsQueries,
              ...e.changePositionStrategyQueries,
              ...e.alignable,
              ...e.releaseAlert(t, a, o, r),
              ...e.unselectable(t, a, o, r),
              ...e.selectableByAlert(t, a, o, r),
              ...e.selectableById(t, a, o, r),
              ...e.updateMeta(t),
              ...e.animatableFeed(t, a, o, r),
              ...e.hasPriorityToggle(t, r),
              ...e.itemReleaser(),
              ...e.verifiable(),
              ...e.cloneable(),
              ...e.hasAlerts(B(a), a, () => e.isSelectableWithAlertItem, { ...e.hasAlertsQueries, ...e.disposable })
            };
          });
      })(a || (a = {}));
    },
    31470: (e, t, i) => {
      i.d(t, { Q: () => a, _: () => n });
      var a,
        s = i(92693),
        r = i(86061);
      !(function (e) {
        e.settings = "settings";
      })(a || (a = {}));
      class n {
        constructor(e, t, i) {
          (this._assistantLayoutViewModel = e), (this._domain = t), (this._gnar = i), (this._entryPoint = void 0);
        }
        getDomain() {
          return this._domain;
        }
        openFeedback(e) {
          (this._entryPoint = e),
            this._gnar.assistantFeedbackButtonClick(),
            this._assistantLayoutViewModel.pushActiveView({ type: s.a.Type.feedback });
        }
        submitFeedback(e) {
          this._entryPoint &&
            this._gnar.assistantFeedbackSubmitButtonClick(this._entryPoint, e.domain, e.text, (0, r.dK)(e) ? e.score : void 0);
        }
      }
    },
    26109: (e, t, i) => {
      i.d(t, { B: () => a });
      var a,
        s = i(56913),
        r = i(54466);
      !(function (e) {
        e.shouldShow = (e) => {
          var t;
          return !!(null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.voxEnabled);
        };
        const t = (e) => ({
          onShow: (t) => e.gbPromptFormShow(t),
          onAccept: (t) => e.gbPromptAcceptClick(t),
          onDismiss: (t) => e.gbPromptDismissClick(t)
        });
        e.getCardsViewModelSendToURLExperiment = (e, i) => ({
          handleGbPrompt: r.sU.Experiments.handleGbPrompt(
            e,
            { account: { styleGuide: (0, s.Um)().styleGuideSettings, writingStyle: (0, s.Um)().writingStyleSettings } },
            t(i)
          )
        });
      })(a || (a = {}));
    },
    92693: (e, t, i) => {
      i.d(t, { D: () => d, a: () => a });
      var a,
        s = i(59358),
        r = i(81591),
        n = i(48015),
        o = i(14601),
        l = i(78674),
        c = i(85985);
      !(function (e) {
        let t;
        !(function (e) {
          (e.default = "default"),
            (e.emogenie = "emogenie"),
            (e.feedback = "feedback"),
            (e.settings = "settings"),
            (e.proofitRequest = "proofitRequest"),
            (e.proofitReview = "proofitReview"),
            (e.startupPlaceholder = "startupPlaceholder");
        })((t = e.Type || (e.Type = {}))),
          (e.isDefault = function (t) {
            return t.type === e.Type.default;
          }),
          (e.isEmogenie = function (t) {
            return t.type === e.Type.emogenie;
          }),
          (e.isFeedback = function (t) {
            return t.type === e.Type.feedback;
          }),
          (e.isSettings = function (t) {
            return t.type === e.Type.settings;
          }),
          (e.isProofitRequest = function (t) {
            return t.type === e.Type.proofitRequest;
          }),
          (e.isProofitReview = function (t) {
            return t.type === e.Type.proofitReview;
          });
      })(a || (a = {}));
      class d extends r.A {
        constructor(e, t, i, r, d = s.V.defaultLayout) {
          super({ type: a.Type.startupPlaceholder }, { type: a.Type.default }),
            (this.browser = r),
            (this.layout = d),
            (this._sub = new o.w()),
            this._sub.add(
              t.subscribe((e) => {
                if (e.length > 0) for (; !this.activeViewHasAlerts(); ) this.popActiveView();
              })
            );
          const u = new Set([a.Type.emogenie]);
          this._sub.add(
            i.pipe(l.b(100), c.h(n.fQ)).subscribe(() => {
              if (u.has(this._activeView.get().type)) for (; this._activeView.get().type !== this._defaultView.type; ) this.popActiveView();
            })
          ),
            this._sub.add(
              this._activeView.subscribe((t) => {
                switch (t.type) {
                  case a.Type.settings:
                    return void e.assistantSettingsShow();
                  case a.Type.proofitRequest:
                    return void e.proofitRequestFormShow();
                  default:
                    return;
                }
              })
            );
        }
        activeViewHasAlerts() {
          switch (this._activeView.get().type) {
            case a.Type.default:
            case a.Type.emogenie:
              return !0;
            default:
              return !1;
          }
        }
        popActiveView() {
          const e = this._viewHistory.pop() || this._defaultView;
          this._activeView.set(e);
        }
        get isHeaderNavigationEnabled() {
          return this._activeView.view((e) => e.type !== a.Type.feedback);
        }
        dispose() {
          this._sub.unsubscribe();
        }
      }
    },
    89131: (e, t, i) => {
      i.d(t, { S: () => u });
      var a = i(77843),
        s = i(28043),
        r = i(16118),
        n = i(41398),
        o = i(85985),
        l = i(2768),
        c = i(92693),
        d = i(78002);
      class u {
        constructor(e, t, i, a) {
          (this.feature = t),
            (this._closeAssistant = i),
            (this._gnar = a),
            (this._subs = []),
            this._subs.push(
              this.feature.requestInfo
                .view("status")
                .pipe((0, s.x)(), (0, r.G)(), (0, n.M)(e.activeView))
                .subscribe(([[t, i], a]) => {
                  t === d.eE.REVIEWING && a.type === c.a.Type.proofitReview && e.popActiveView();
                })
            ),
            this._subs.push(
              this.feature.layoutCreated.pipe((0, n.M)(e.activeView)).subscribe(([t, i]) => {
                (i.type !== c.a.Type.proofitRequest && i.type !== c.a.Type.proofitReview) || t || e.popActiveView();
              })
            );
        }
        onSubmitRequest(e) {
          this.feature.submitRequest(), this._gnar.proofitRequestFormSubmit();
          const t = this.feature.requestInfo.lens("status").pipe((0, o.h)((e) => e === d.eE.ACCEPTED));
          (0, a.F)(100)
            .pipe((0, l.R)(t))
            .subscribe({ complete: () => this._closeAssistant(e) });
        }
        onCompleteRequest(e) {
          this.feature.resetRequest(), this._gnar.proofitOrderDone(), this._closeAssistant(e);
        }
        onSubmitFeedback(e) {
          this._gnar.proofitFeedbackFormSubmit(e.text, e.score);
        }
        dispose() {
          this._subs.forEach((e) => e.unsubscribe());
        }
      }
    },
    42466: (e, t, i) => {
      i.d(t, { fA: () => l, pL: () => v });
      var a = i(40327),
        s = i(27378),
        r = i(37902),
        n = i(26284);
      const o = ({ message: e, emoji: t, emojiId: i, icon: a, iconPartName: o }) =>
        s.createElement(
          "div",
          { className: n.insight },
          t &&
            i &&
            s.createElement(
              "div",
              { className: n.insight__inline_icon },
              s.createElement(r.dy, { unicodeHexArray: [i], unicodeLiteral: t })
            ),
          a && s.createElement("div", { className: n.insight__inline_icon, "data-grammarly-part": o }, a),
          s.createElement("div", { className: n.insight__inline_text }, e)
        );
      var l,
        c = i(24264),
        d = i(72154),
        u = i(3656),
        p = i(77176),
        m = i(8543),
        g = i(94895),
        h = i(22521);
      !(function (e) {
        (e.hidden = "hidden"), (e.zero = "zero"), (e.visible = "visible");
      })(l || (l = {}));
      const v = ({ predictionsVM: e }) => g.UI.mount(E, e.previewFlow),
        f = g.UI.Grid.make(({ slots: e }) =>
          s.createElement(
            "div",
            { className: h.predictions },
            s.createElement("div", { className: h.predictions__header }, "Predictions"),
            e.children
          )
        ),
        b = ({ children: e, count: t, dataPartName: i }) =>
          s.createElement(
            c.Z,
            { kind: "assistant-priority-lens", dataPartName: i, marginBottom: "12px" },
            s.createElement(
              "div",
              { className: h.predictions__card },
              e,
              t > 0 && s.createElement("div", { className: h.counterContainer }, s.createElement(u.CL, null, t))
            )
          ),
        w = g.UI.Node.make(({ state: e, notify: t }) =>
          s.createElement(
            d.M,
            { clickHandler: t("select") },
            s.createElement(
              m.F.Fragment,
              null,
              e.pipe(
                p.U((e) =>
                  s.createElement(
                    b,
                    { count: e.alertsCount, dataPartName: "emogenie-prediction-card" },
                    s.createElement(o, {
                      key: "tone",
                      message:
                        "off" === e.emotion.brandToneLabel
                          ? s.createElement(
                              s.Fragment,
                              null,
                              "May sound ",
                              s.createElement("span", { className: h.predictions__off_brand }, "off-brand")
                            )
                          : `Sounds ${e.emotion.name}`,
                      emoji: e.emotion.emoji,
                      emojiId: e.emotion.emojiId
                    })
                  )
                )
              )
            )
          )
        ),
        S = g.UI.Group.make({
          tone:
            ((y = w),
            {
              tag: "_tag",
              members: {
                Some: (0, a.pipe)(
                  y,
                  g.UI.contramapState((e) => e.value)
                ),
                None: g.UI.Node.empty
              }
            })
        });
      var y;
      const E = g.UI.Union.make("kind", { [l.hidden]: g.UI.Node.empty, [l.zero]: g.UI.Node.empty, [l.visible]: g.UI.Composite.make(f, S) });
    },
    67331: (e, t, i) => {
      i.d(t, { g: () => a });
      var a,
        s = i(40327),
        r = i(85985),
        n = i(66268),
        o = i(83078);
      !(function (e) {
        e.createSubscription = function (e, t, i) {
          return e.pipe(r.h(n.lY.isAlertApplyAction)).subscribe((e) =>
            (0, s.pipe)(
              i(e.alertId),
              o.bw((e) => {
                "unlocked" === o.Fc(e.extraProperties.freePremium) && t.freePremiumSuggestionAcceptButtonClick("assistant");
              })
            )
          );
        };
      })(a || (a = {}));
    },
    74564: (e, t, i) => {
      i.d(t, { c: () => s });
      var a = i(12102);
      class s {
        constructor(e) {
          this._highlights = e;
        }
        addHighlight(e, t, i) {
          return this._highlights.addHighlight(e, t, i);
        }
        updateHighlight(e, t, i) {
          return this._highlights.updateHighlight(e, t, i);
        }
        removeHighlights(e) {
          return this._highlights.removeHighlights(e);
        }
        recalculateHighlight(e) {
          return this._highlights.recalculateHighlight(e);
        }
        recalculateAllHighlights() {
          return this._highlights.recalculateAllHighlights();
        }
        maintainConsistency(e, t = (e) => e, i = !1) {
          return this._highlights.maintainConsistency(e, t, i);
        }
        hasHighlight(e) {
          return this._highlights.hasHighlight(e);
        }
        getSelectedHighlightsTracker(e) {
          return (0, a.H)({ ...e, highlights: this._highlights });
        }
        getGeometryByHighlightId(e) {
          return this._highlights.geometry.get().get(e);
        }
      }
    },
    81591: (e, t, i) => {
      i.d(t, { A: () => s });
      var a = i(23239);
      class s {
        constructor(e, t) {
          (this._viewHistory = []),
            (this._startupPlaceHolder = e),
            (this._activeView = a.h.create(this._startupPlaceHolder)),
            (this._defaultView = t);
        }
        get activeView() {
          return this._activeView.view();
        }
        get lastView() {
          return this._viewHistory[this._viewHistory.length - 1] || this._defaultView;
        }
        pushActiveView(e) {
          const t = this._activeView.get();
          e.type !== t.type && (t.type !== this._startupPlaceHolder.type && this._viewHistory.push(t), this._activeView.set(e));
        }
        popActiveView() {
          const e = this._viewHistory.pop() || this._defaultView;
          this._activeView.set(e);
        }
        replaceActiveView(e) {
          e.type !== this._activeView.get().type && this._activeView.set(e);
        }
      }
    },
    30912: (e, t, i) => {
      i.d(t, { I: () => c, S: () => a });
      var a,
        s = i(27378),
        r = i(50474),
        n = i(88056),
        o = i(19429),
        l = i(35407);
      !(function (e) {
        (e.Context = s.createContext(n.Y.invariantContent("SidebarTextResources"))),
          (e.holder = o.VF(() => ({
            logoText: "GRAMMARLY",
            plagiarismTooltip: "Scan for plagiarism",
            setGoalsTooltip: "Adjust goals",
            statisticsTooltip: "See performance"
          })));
      })(a || (a = {}));
      const c = l.GG({ denali: r.m.holder, sidebar: a.holder });
    },
    73607: (e, t, i) => {
      i.d(t, { US: () => j, hz: () => G, ux: () => W });
      var a = i(57050),
        s = i(27378),
        r = i(84447),
        n = i(20067),
        o = i(66896),
        l = i(89894),
        c = i(68579),
        d = i(36156),
        u = i(71841),
        p = i(74238),
        m = i(99116),
        g = i(35416),
        h = i(18955),
        v = i(77176),
        f = i(98403),
        b = i(32952),
        w = i(93508),
        S = i(76974),
        y = i(2844),
        E = i(60797),
        C = i(24209),
        k = i(18625),
        _ = i(66310),
        A = i(40151),
        I = i(85089),
        x = i(2834),
        T = i(95093),
        M = i(24713),
        R = i(85985),
        P = i(49708),
        L = i(17343),
        F = i(19751),
        D = i(5114),
        N = i(19962),
        B = i(8543),
        V = i(81531),
        H = i(94895),
        O = i(66853);
      const U = H.UI.Grid.make(({ slots: e, view: t }) =>
        s.createElement(B.F.div, { style: { marginBottom: t("spacing").pipe(v.U(l.ux.rem)) } }, e.children)
      );
      function j(e) {
        return e === o.R.SpecialId.Priority ? 0.75 : 1;
      }
      const G = s.forwardRef(function (
          {
            state: e,
            cardsViewModel: t,
            cardsListScrollManager: i,
            connectorElements: o,
            header: l,
            footer: p,
            capabilities: m,
            comparator: v
          },
          y
        ) {
          const E = f
              .jw((e) => {
                let t = 7;
                return (t = 31 * t + (0, d.AC)(e.currentLens.id)), (t = 31 * t + (g.nL.hasItems(e) ? 1231 : 1237)), t;
              }, e)
              .view((e) => (g.nL.hasItems(e.get()) ? e.view(g.nL.Prism.getLens()) : null))
              .view((e) => (e ? { state: e, spacing: j(e.get().id) } : null)),
            C = s.useContext(n.Dg).state;
          return s.createElement(
            h.d,
            { className: S.of(""), name: "cardlist", stateSyncListener: z(i, o, C), height: W(e, i, m), isMaster: !0 },
            s.createElement(
              s.Fragment,
              null,
              l
                ? s.createElement(B.F.div, { className: O.headerOrFooterWrapper, mount: (e) => o.lens("title").set(D.fromNullable(e)) }, l)
                : null,
              s.createElement(
                B.F.div,
                { mount: y },
                E.view((e) => {
                  return e
                    ? H.UI.mount(
                        ((s = e.spacing),
                        (0, a.zG)(
                          c.A.cardList(r.O.item(t.actionEvents)),
                          H.UI.patch(
                            "content",
                            "cell",
                            "item"
                          )((e) =>
                            (0, a.zG)(
                              H.UI.Knot.make(U, { children: e.child }),
                              H.UI.squash,
                              H.UI.contramapState((e) => ({ children: e, root: { spacing: s } }))
                            )
                          )
                        )),
                        ((e) => (0, a.zG)(r.O.createCardListFlow()(t, e, new b.xQ(), u.i$(i).pipe(w.O(!1)), m, v)))(e.state)
                      )
                    : null;
                  var s;
                })
              ),
              p ? s.createElement(B.F.div, { className: O.headerOrFooterWrapper }, p) : null
            )
          );
        }),
        W = (e, t, i) => {
          const a = (0, m.Sd)(i)(e.view(g.nL.mapper(({ currentLens: e, alertSource: t }) => D.some({ currentLens: e, alertSource: t }))));
          return y
            .aj([
              a.pipe(
                E.oA,
                v.U(({ currentLens: e }) => e.cardsHeight),
                w.O(0)
              ),
              t.paddingTop
            ])
            .pipe(v.U(([e, t]) => e + t));
        },
        z = (e, t, i) => {
          const a = V.C8.Logging.getLogger("view_models");
          return C.T(
            k.P(() => {
              e.paddingTop.set(0);
            }),
            t.view("viewport").pipe(
              _.w(
                D.fold(
                  () => A.E,
                  (e) =>
                    I.YC(e).pipe(
                      x.b(() => a.debug("update card list viewport due to viewport resize event")),
                      T.T(
                        i.pipe(
                          M.j("dragging"),
                          R.h((e) => !e),
                          _.w(f.b2.rafScheduler),
                          x.b(() => a.debug("update card list viewport due to drag end event"))
                        )
                      ),
                      v.U(() => e.getBoundingClientRect()),
                      v.U((e) => ({ top: p.r.FromWindowTop.ISO.wrap(e.top), height: e.height }))
                    )
                )
              ),
              x.b(f.wW(e.viewport))
            ),
            t.view("scrollProvider").pipe(
              _.w(
                D.fold(
                  () => A.E,
                  (t) =>
                    P.R(t, "scroll").pipe(
                      v.U(() => t.scrollTop),
                      w.O(t.scrollTop),
                      x.b(f.wW(e.scrollTop)),
                      L.h(f.PU)
                    )
                )
              )
            ),
            t.view("title").pipe(
              _.w(
                D.fold(
                  () => S.of(N.UL.empty),
                  (e) => I.YC(e)
                )
              ),
              v.U((e) => e.height),
              F.shareReplay({ bufferSize: 1, refCount: !0 }),
              x.b(f.wW(e.paddingTop))
            ),
            t.view("scrollConsumer").pipe(
              _.w(
                D.fold(
                  () => A.E,
                  (t) =>
                    e.scrollOffset.pipe(
                      x.b((e) => {
                        t.scrollTop += e;
                      })
                    )
                )
              )
            )
          ).pipe(L.h(void 0));
        };
    },
    95305: (e, t, i) => {
      i.d(t, { C: () => R, S: () => M });
      var a = i(57050),
        s = i(46149),
        r = i(27378),
        n = i(84447),
        o = i(73607),
        l = i(101),
        c = i(66896),
        d = i(94785),
        u = i(6100),
        p = i(18955),
        m = i(98403),
        g = i(60797),
        h = i(77176),
        v = i(19962),
        f = i(5114),
        b = i(8543),
        w = i(94895),
        S = i(764),
        y = i(8901),
        E = i(38819),
        C = i(10339);
      const k = ({ upgradeViewModel: e }) => {
        const t = e.advancedAlerts.pipe(h.U(f.map((e) => ({ count: e.count, alerts: e.alerts() }))));
        return r.createElement(
          b.F.div,
          { className: C.premiumLens },
          w.UI.mount(
            E.r,
            w.Z.fromSideEffect((t) => {
              "upgrade" === t.action.action.action.kind
                ? (e.trackUpgradeButtonClick({
                    placement: "advancedIssues",
                    bannerType: "GoPremium",
                    upgradeHookName: "advancedIssues",
                    upgradeHookSlot: "gDocsSidebarSuccessView"
                  }),
                  e.openUpgradeUrl(y.L.Place.gdocsSidebarCardList))
                : "onUpgradeButtonMount" === t.action.action.action.kind &&
                  e.trackUpgradeButtonShow({
                    placement: "advancedIssues",
                    bannerType: "GoPremium",
                    upgradeHookName: "advancedIssues",
                    upgradeHookSlot: "gDocsSidebarSuccessView"
                  });
            }, t)
          )
        );
      };
      var _ = i(50474),
        A = i(89379),
        I = i(43805),
        x = i(11102);
      const T = ({ successLensViewModel: e }) => {
          const t = (0, A.hM)((0, A.wK)(e.successState.view("type"), r.useContext(_.m.Context)));
          return r.createElement(b.F.div, { className: x.successLens }, w.UI.mount(I.q, t));
        },
        M = r.forwardRef(function (
          { state: e, cardsViewModel: t, upgradeViewModel: i, cardsListScrollManager: a, capabilities: l, upgradeHookFlow: p, ...g },
          h
        ) {
          const v = m.jw((e) => {
            let t = 7;
            return (t = 31 * t + (0, s.AC)(e.currentLens.id)), (t = 31 * t + (u.v.WithSuccess.State.isInSuccess(l)(e) ? 1231 : 1237)), t;
          }, e);
          return r.createElement(R, { ref: h }, (e) =>
            r.createElement(
              b.F.Fragment,
              null,
              v.view((s) => {
                const m = s.get();
                return m.currentLens.id === c.R.SpecialId.Premium
                  ? r.createElement(k, { upgradeViewModel: i })
                  : u.v.WithSuccess.State.isInSuccess(l)(m)
                  ? r.createElement(T, { successLensViewModel: g.successLensViewModel })
                  : r.createElement(
                      "div",
                      null,
                      r.createElement(o.hz, {
                        state: s,
                        cardsViewModel: t,
                        cardsListScrollManager: a,
                        connectorElements: e,
                        header: w.UI.mount(d.n.TogglablePanel, p),
                        comparator: n.O.listItemOrd,
                        capabilities: l
                      })
                    );
              })
            )
          );
        }),
        R = r.forwardRef(function ({ children: e, onClick: t, className: i = S.cardList, footer: s, ...n }, o) {
          const c = p.d.Elements.create(),
            d = (0, a.zG)(c.view("viewport"), g.oA, h.U(v.UL.fromEl));
          return r.createElement(
            "div",
            {
              ...n,
              onClick: t,
              className: i,
              ref: (e) => {
                "function" == typeof o ? o(e) : o && (o.current = e);
                const t = f.fromNullable(e);
                c.lens("scrollConsumer").set(t), c.lens("scrollProvider").set(t), c.lens("viewport").set(t);
              }
            },
            r.createElement(l.l.RootVirtualContainer, { name: "cardListConnector", viewport: d }, e(c)),
            s
          );
        });
    },
    55272: (e, t, i) => {
      i.d(t, { Z: () => d });
      var a = i(27378);
      if (3075 == i.j) var s = i(62295);
      if (3075 == i.j) var r = i(31278);
      if (3075 == i.j) var n = i(66896);
      if (3075 == i.j) var o = i(8543);
      var l = i(34162);
      if (3075 == i.j) var c = i(70315);
      const d = ({
        lensPreviewViewModel: e,
        openPlagiarismPage: t,
        showPlagiarismButton: i,
        isPlagiarismPageActive: s,
        closePlagiarismPage: r,
        plagiarismCheckingStatus: d,
        plagiarismPopover: p,
        plagiarismPopoverActionsHandler: m
      }) => {
        const g = e.getLens(n.R.SpecialId.AllAlerts).view((e) => e.count);
        return a.createElement(
          o.F.div,
          { className: l.footer },
          d.view((e) =>
            "OnTextChange" === e
              ? a.createElement("div", { style: { marginLeft: "12px", marginTop: "4px" } }, a.createElement(c.T, null))
              : a.createElement(u, {
                  activeAlerts: g,
                  openPlagiarismPage: t,
                  showPlagiarismButton: i,
                  isPlagiarismPageActive: s,
                  closePlagiarismPage: r,
                  plagiarismPopover: p,
                  plagiarismPopoverActionsHandler: m
                })
          )
        );
      };
      function u({
        activeAlerts: e,
        openPlagiarismPage: t,
        showPlagiarismButton: s,
        isPlagiarismPageActive: r,
        closePlagiarismPage: n,
        plagiarismPopover: o,
        plagiarismPopoverActionsHandler: l
      }) {
        const c = a.lazy(() =>
          Promise.all([i.e(5068), i.e(7470)])
            .then(i.bind(i, 6586))
            .then(({ PlagiarismButton: e }) => ({ default: e }))
        );
        return a.createElement(
          "div",
          { style: { display: "flex", justifyContent: "space-between", width: "100%" } },
          a.createElement(
            "div",
            { style: { display: "flex", justifyContent: "flex-start", gap: "2px", alignItems: "center" } },
            a.createElement(p, { activeAlerts: e }),
            a.createElement("p", { style: { fontSize: "12px" } }, "Alerts left")
          ),
          a.createElement(
            a.Suspense,
            { fallback: a.createElement("div", null) },
            a.createElement(c, {
              showPlagiarismButton: s,
              openPlagiarismPage: t,
              isPlagiarismPageActive: r,
              closePlagiarismPage: n,
              popover: o,
              popoverActionsHandler: l
            })
          )
        );
      }
      const p = ({ activeAlerts: e }) =>
        a.createElement(
          o.F.Fragment,
          null,
          e.view((e) =>
            e > 0
              ? a.createElement(s.x.OutcomeCounter, { count: e, theme: { counterWrapper: l.counterWrapper, counterContent: l.counter } })
              : a.createElement(r.JO.CheckmarkOutcomes, { className: l.counterCheckmarkIcon })
          )
        );
    },
    86338: (e, t, i) => {
      i.d(t, { $l: () => x, yR: () => R });
      var a = i(27378);
      if (3075 == i.j) var s = i(55563);
      if (3075 == i.j) var r = i(30912);
      if (3075 == i.j) var n = i(57796);
      if (3075 == i.j) var o = i(64757);
      if (3075 == i.j) var l = i(31278);
      if (3075 == i.j) var c = i(81301);
      if (3075 == i.j) var d = i(3656);
      if (3075 == i.j) var u = i(66896);
      if (3075 == i.j) var p = i(74660);
      if (3075 == i.j) var m = i(40743);
      if (3075 == i.j) var g = i(87667);
      if (3075 == i.j) var h = i(92644);
      if (3075 == i.j) var v = i(39474);
      if (3075 == i.j) var f = i(43623);
      if (3075 == i.j) var b = i(84317);
      if (3075 == i.j) var w = i(77176);
      if (3075 == i.j) var S = i(85985);
      if (3075 == i.j) var y = i(22232);
      if (3075 == i.j) var E = i(8125);
      if (3075 == i.j) var C = i(5114);
      if (3075 == i.j) var k = i(54001);
      var _ = i(94895),
        A = i(86642);
      if (3075 == i.j) var I = i(9629);
      const x = ({ state: e, navigationViewModel: t, modalManager: i, lensPreviewViewModel: r, features: n, experimentClient: o }) => {
          switch (n.priorityLens.kind) {
            case s.h.Kind.dropdown:
              return a.createElement(T, {
                state: e,
                navigationViewModel: t,
                modalManager: i,
                lensPreviewViewModel: r,
                experimentClient: o
              });
            case s.h.Kind.priorityToggle:
              return a.createElement(M, {
                state: e,
                navigationViewModel: t,
                modalManager: i,
                lensPreviewViewModel: r,
                defaultMode: n.priorityLens.defaultMode,
                experimentClient: o
              });
            case s.h.Kind.none:
              return a.createElement(R, { navigationViewModel: t, modalManager: i, experimentClient: o });
            default:
              (0, y.vE)(n.priorityLens);
          }
        },
        T = ({ state: e, navigationViewModel: t, modalManager: i, lensPreviewViewModel: s, experimentClient: r }) =>
          a.createElement(
            "div",
            { className: A.priorityLensHeader },
            a.createElement(P, { modalManager: i, experimentClient: r, navigationViewModel: t }),
            a.createElement(
              "div",
              { className: A.prioritySwitchWrapper },
              _.UI.mount(g.n.Switch, (0, h.i)(s, t, e.pipe(w.U((e) => e.currentLens.id))))
            )
          ),
        M = ({ state: e, navigationViewModel: t, modalManager: i, lensPreviewViewModel: s, defaultMode: r, experimentClient: n }) =>
          a.createElement(
            "div",
            { className: A.priorityLensHeader },
            a.createElement(P, { modalManager: i, navigationViewModel: t, experimentClient: n }),
            a.createElement(
              "div",
              { className: A.prioritySwitchFlatWrapper },
              _.UI.mount(
                f.B.DefaultHeader,
                (0, b.HP)(
                  t,
                  e.pipe(
                    w.U((e) => e.currentLens.id),
                    S.h((0, E.Kg)(u.R.isPriority, u.R.isAllAlerts))
                  ),
                  "priority" === r ? v.H.LensMode.priority : v.H.LensMode.all,
                  "compact",
                  s,
                  10
                )
              )
            )
          ),
        R = ({ navigationViewModel: e, modalManager: t, experimentClient: i, showLensNavigation: s = !0 }) =>
          a.createElement(
            "div",
            { className: s ? A.defaultHeaderWithLenses : A.defaultHeader },
            a.createElement(P, { modalManager: t, experimentClient: i, navigationViewModel: e }),
            s &&
              a.createElement(
                "div",
                { ...(0, k.Sh)(A.lensNavigation, A.disabledLensNavigation) },
                _.UI.mount(
                  m.C,
                  _.Z.fromSideEffect(
                    (t) => {
                      e.events.next({ type: "switchToLens", id: t.lens.id, focusFirst: !1, actionSource: p.l$.sidebar });
                    },
                    {
                      activeLensId: C.none,
                      previews: Object.values(e.lensPreviews.get()).filter((e) => e.id !== u.R.SpecialId.Vox),
                      disabled: !1
                    }
                  )
                )
              )
          ),
        P = ({ navigationViewModel: e, modalManager: t, experimentClient: i }) => {
          const s = a.useContext(r.S.Context),
            u = "test" !== i.getTreatment(I.p.RemoveSetGoalsGDocs),
            m = t.state.view(C.exists((e) => e.instance.type === c.dC.SetGoals));
          return a.createElement(
            "div",
            { className: A.head },
            a.createElement(
              "div",
              { className: A.headerGroup },
              a.createElement(n.K, { className: A.logoIcon, size: 18 }),
              a.createElement(d.H5, { className: A.logoText }, s.logoText)
            ),
            u &&
              a.createElement(
                o.zx.Flat,
                {
                  name: "setGoals",
                  className: A.setGoalsButton,
                  title: s.setGoalsTooltip,
                  titleAlign: "bottomCenter",
                  active: m,
                  disabled: m,
                  onClick: () => e.events.next({ type: "setGoals" })
                },
                a.createElement(l.JO.GoalsEmpty, { width: 24 })
              ),
            a.createElement(
              "div",
              { className: A.headerGroup },
              u && a.createElement("div", { className: A.divider }),
              a.createElement(
                o.zx.Flat,
                { name: "closeSidebar", onClick: () => e.events.next({ type: "toggleSidebar", actionSource: p.l$.sidebar }) },
                a.createElement(l.JO.Close, { width: 16 })
              )
            )
          );
        };
    },
    78249: (e, t, i) => {
      i.d(t, { L: () => o });
      var a = i(57050),
        s = i(27378),
        r = i(5114),
        n = i(8543);
      const o = ({ modalManager: e }) =>
        s.createElement(
          n.F.Fragment,
          null,
          e.state.view(
            (0, a.ls)(
              r.map(({ component: e }) => e),
              r.toNullable
            )
          )
        );
    },
    29274: (e, t, i) => {
      i.d(t, { P: () => o });
      var a = i(27378),
        s = i(50790),
        r = i(82858),
        n = i(32380);
      const o = {
          unauthorizedError: (e, t) => a.createElement(r.s.UnauthorizedError, { action: t("gotoLogin") }),
          offline: () => a.createElement(l, null),
          alertUndo: (e, t) => a.createElement(n.A.Standard, { action: t("undo"), params: e.args.params })
        },
        l = () => a.createElement(s.DI.TitledContent, { title: "Lost Connection" }, "Your Internet session was interrupted.");
    },
    88571: (e, t, i) => {
      i.d(t, { Q: () => l });
      var a = i(27378),
        s = i(15073),
        r = i(60797),
        n = i(95300),
        o = i(5114);
      const l = ({ children: e, remSize: t, setter: i }) => (
        (c += 1),
        a.useEffect(() => {
          const e = t.subscribe((e) => {
            d.next(o.some(e)), i(o.some(e));
          });
          return () => {
            e.unsubscribe(), (c -= 1), 0 === c && (d.next(o.none), i(o.none));
          };
        }, [t]),
        a.createElement(s.u.Context.Provider, { value: d.pipe(r.oA) }, e)
      );
      let c = 0;
      const d = new n.X(o.none);
    },
    54657: (e, t, i) => {
      i.d(t, { _: () => r });
      var a = i(27378);
      if (3075 == i.j) var s = i(5494);
      const r = ({ children: e, className: t }) =>
        a.createElement(
          "div",
          {
            className: t,
            style: {
              position: "fixed",
              right: "0px",
              top: "0px",
              bottom: "0px",
              width: s.xK,
              zIndex: 1e3,
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100vh"
            }
          },
          e
        );
    },
    5494: (e, t, i) => {
      i.d(t, { H2: () => r, iB: () => a, kl: () => n, xK: () => s });
      const a = ".docs-companion-sidebar",
        s = "300px";
      var r;
      !(function (e) {
        (e.selector = ".companion-guest-app-switcher .app-switcher-button"),
          (e.selectedClass = "app-switcher-button-selected"),
          (e.selectedSelector = `.${e.selectedClass}`),
          (e.activeClass = "app-switcher-button-active"),
          (e.hoverClass = "app-switcher-button-hover"),
          (e.disabledClass = "app-switcher-button-disabled");
      })(r || (r = {}));
      const n = ".companion-about-panel-button";
    },
    9780: (e, t, i) => {
      i.d(t, { I: () => n });
      var a = i(5802),
        s = i(41966);
      const r = {
        priority: a.P.Priority.highest,
        timeout: a.P.TimeoutDisabled,
        position: a.P.Position.top,
        viewType: a.P.ViewType.standard
      };
      var n;
      !(function (e) {
        e.createFactory = function () {
          return {
            alertUndo: s.r
              .createBuilder()
              .build({
                priority: a.P.Priority.low,
                timeout: a.P.DefaultTimeout,
                position: a.P.Position.bottomRight,
                viewType: a.P.ViewType.standard
              }),
            unauthorizedError: s.r.createBuilder().build(r),
            offline: s.r.createBuilder().build(r)
          };
        };
      })(n || (n = {}));
    },
    25814: (e, t, i) => {
      i.d(t, { U9: () => z, jv: () => K });
      var a = i(27378);
      if (3075 == i.j) var s = i(864);
      if (3075 == i.j) var r = i(30912);
      if (3075 == i.j) var n = i(95305);
      if (3075 == i.j) var o = i(55272);
      if (3075 == i.j) var l = i(86338);
      if (3075 == i.j) var c = i(78249);
      if (3075 == i.j) var d = i(29274);
      if (3075 == i.j) var u = i(88571);
      if (3075 == i.j) var p = i(54657);
      if (3075 == i.j) var m = i(69910);
      if (3075 == i.j) var g = i(42455);
      var h = i(8307),
        v = i(4147);
      if (3075 == i.j) var f = i(51369);
      if (3075 == i.j) var b = i(42103);
      if (3075 == i.j) var w = i(33678);
      if (3075 == i.j) var S = i(15073);
      if (3075 == i.j) var y = i(50474);
      if (3075 == i.j) var E = i(47861);
      if (3075 == i.j) var C = i(60797);
      if (3075 == i.j) var k = i(2834);
      if (3075 == i.j) var _ = i(66310);
      if (3075 == i.j) var A = i(77176);
      if (3075 == i.j) var I = i(18625);
      if (3075 == i.j) var x = i(98403);
      if (3075 == i.j) var T = i(90845);
      if (3075 == i.j) var M = i(76974);
      if (3075 == i.j) var R = i(91463);
      if (3075 == i.j) var P = i(5114);
      if (3075 == i.j) var L = i(22232);
      if (3075 == i.j) var F = i(8543);
      if (3075 == i.j) var D = i(23239);
      var N = i(31584),
        B = i(3320),
        V = i(2479);
      if (3075 == i.j) var H = i(45828);
      if (3075 == i.j) var O = i(72944);
      if (3075 == i.j) var U = i(85441);
      if (3075 == i.j) var j = i(4694);
      if (3075 == i.j) var G = i(56143);
      const W = ({
        state: e,
        cardsViewModel: t,
        navigationViewModel: s,
        successLensViewModel: r,
        upgradeViewModel: c,
        cardsListScrollManager: u,
        notificationManager: m,
        lensPreviewViewModel: h,
        modalManager: v,
        features: f,
        capabilities: b,
        upgradeHookFlow: w,
        plagiarismEntities: S,
        onTogglePlagiarism: y,
        plagiarismCheckingState: I,
        experimentClient: x,
        gnar: T
      }) => {
        const M = new O.W(P.none),
          R = (0, H.O)(T);
        (0, g.A)(
          ((e, t) =>
            e.pipe(
              C.oA,
              k.b(({ plagiarismVM: e }) => {
                t.setPlagiarismVM(e);
              }),
              _.w(({ plagiarismVM: e, plagiarismButtonSub: t }) => t.pipe(A.U(P.map((t) => ({ gbutton: t, plagiarismVM: e }))))),
              C.oA,
              k.b(({ gbutton: e, plagiarismVM: i }) => {
                i.setPlagiarismButtonActions((0, j.Zq)(e.actions, e.id)), t.setShowPlagiarismButton(!0);
              })
            ))(S, M)
        ),
          (0, g.A)(
            ((e, t) =>
              e.pipe(
                C.oA,
                _.w(({ trackPlagiarismAlertsEditing: e }) => e(t.plagiarismAlertEditToLook))
              ))(S, R)
          );
        const N = a.lazy(() =>
            Promise.all([i.e(5068), i.e(2043), i.e(9366)])
              .then(i.bind(i, 73726))
              .then(({ Plagiarism: e }) => ({ default: e }))
          ),
          U = a.createElement(
            F.F.Fragment,
            null,
            M.activeSidebarPage.view((i) => {
              switch (i) {
                case "Default":
                  return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(l.$l, {
                      state: e,
                      navigationViewModel: s,
                      modalManager: v,
                      lensPreviewViewModel: h,
                      features: f,
                      experimentClient: x
                    }),
                    a.createElement(n.S, {
                      cardsViewModel: t,
                      state: e,
                      successLensViewModel: r,
                      upgradeViewModel: c,
                      cardsListScrollManager: u,
                      capabilities: b,
                      upgradeHookFlow: w
                    })
                  );
                case "Plagiarism":
                  return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(l.yR, { navigationViewModel: s, modalManager: v, experimentClient: x, showLensNavigation: !1 }),
                    a.createElement(
                      a.Suspense,
                      { fallback: a.createElement("div", null) },
                      a.createElement(N, {
                        cardsListScrollManager: u,
                        plagiarismEngine: M.unsafeGetPlagiarismVM().plagiarismEngine,
                        notificationManager: G.u,
                        switchToDefaultFeed: () => M.closePlagiarismPage(),
                        plagiarismCheckingState: I
                      })
                    )
                  );
                default:
                  (0, L.vE)(i);
              }
            })
          ),
          W = () => {
            I.set("OnSwitchToPlagiarism"), y(!0), M.openPlagiarismPage(), R.gdocsPlagiarismButtonClick();
          },
          z = {
            handleGButtonPopoverAction: (e) => {
              const t = S.get();
              P.isSome(t) && t.value.popoverActionsHandler({ openPlagiarism: () => W() }).handleGButtonPopoverAction(e);
            }
          };
        return a.createElement(
          p._,
          { className: V.sidebarContainer },
          U,
          "none" !== f.priorityLens.kind
            ? null
            : a.createElement(o.Z, {
                lensPreviewViewModel: h,
                openPlagiarismPage: W,
                closePlagiarismPage: () => {
                  y(!1), M.closePlagiarismPage();
                },
                showPlagiarismButton: M.isShouldShowPlagiarismButton,
                isPlagiarismPageActive: M.showPlagiarismPage(),
                plagiarismCheckingStatus: I,
                plagiarismPopover: S.pipe(
                  _.w(
                    P.fold(
                      () => D.h.create(P.none),
                      (e) => e.popover
                    )
                  )
                ),
                plagiarismPopoverActionsHandler: z
              }),
          a.createElement(E.i, {
            key: "notificationCenter",
            manager: m,
            views: d.P,
            theme: {
              grid: { container: B.container, bottomLeft: B.bottomLeft, bottomRight: B.bottomRight, top: B.top },
              view: { wrapper: B.notificationWrapper }
            }
          })
        );
      };
      function z(e) {
        return ({
          integration: t,
          sidebarReady: r,
          ethicalAIFeature: n,
          cardEvents: o,
          sduiEngine: l,
          user: d,
          _getByRawAlertId: u,
          startWithExpandedUphook: p,
          alertProcessor: g,
          experimentClient: h,
          plagiarismCheckingState: v,
          getCheckingService: b
        }) =>
          function () {
            const w = t.engine,
              S = new s.C((0, U.nD)()),
              y = D.h.create(!1),
              {
                lensState: E,
                cardsViewModel: C,
                navigationViewModel: k,
                successLensViewModel: _,
                upgradeViewModel: M,
                dispose: R,
                cardsListScrollManager: L,
                notificationManager: F,
                lensPreviewViewModel: N,
                modalManager: B,
                capabilities: V,
                upgradeHookFlow: H
              } = (0, m.G)(
                w,
                t.denaliViewAdapter,
                e,
                t.connectionState,
                t.gnar,
                t.user,
                d,
                t.document.settings.lens("selectedLens"),
                t.features,
                r,
                n,
                o,
                t.experimentClient,
                p,
                y,
                b
              ),
              O = D.h.create(P.none),
              j = I.P(() =>
                Promise.all([i.e(5068), i.e(4650), i.e(2812), i.e(2043), i.e(1442), i.e(6209), i.e(1196)]).then(i.bind(i, 87982))
              )
                .pipe(
                  A.U(({ setupSduiManagement: e, createPlagiarismViewModels: i, createPlagiarismEntities: a }) => {
                    const { sduiFeedbackService: s, capiClient: r, sduiManager: n } = e(l, u, w.alertsList.state);
                    return a(P.some({ sduiManager: n, sduiFeedbackService: s, capiClient: r }), i, {
                      engine: t.engine,
                      capiProxy: t.capiProxy,
                      ded: t.denaliViewAdapter,
                      environment: S,
                      alertProcessor: g,
                      showPlagiarismAlerts: y
                    });
                  })
                )
                .subscribe(x.wW(O));
            return (
              T.P.useEffectOnWillUnmount(() => {
                w.shutdown(), j.unsubscribe(), R();
              }),
              a.createElement(
                q,
                { environment: S },
                a.createElement(W, {
                  user: d,
                  gnar: t.gnar,
                  state: E,
                  cardsViewModel: C,
                  navigationViewModel: k,
                  successLensViewModel: _,
                  upgradeViewModel: M,
                  cardsListScrollManager: L,
                  notificationManager: F,
                  lensPreviewViewModel: N,
                  modalManager: B,
                  features: t.features,
                  capabilities: V,
                  upgradeHookFlow: H,
                  plagiarismEntities: O,
                  onTogglePlagiarism: (e) => y.set(e),
                  plagiarismCheckingState: v,
                  experimentClient: h
                }),
                a.createElement(c.L, { modalManager: B }),
                a.createElement(f.X, null)
              )
            );
          };
      }
      const q = ({ environment: e, children: t }) => {
          const i = a.useRef((0, r.I)(y.m.getConfig(e.has(s.U.Flag.isAppleSystem) ? "mac" : "windows")));
          return a.createElement(
            u.Q,
            { remSize: M.of(16), setter: (e) => S.u.setRootCssVar(document.documentElement, e) },
            a.createElement(
              s.U.Context.Provider,
              { value: e },
              a.createElement(
                w.a.Context.Provider,
                { value: e },
                a.createElement(
                  r.S.Context.Provider,
                  { value: i.current.sidebar },
                  a.createElement(
                    y.m.Context.Provider,
                    { value: i.current.denali },
                    a.createElement(R.TG.ContextMock, null, a.createElement(b.G.DefaultProvider, null, a.createElement(K, null, t)))
                  )
                )
              )
            )
          );
        },
        K = ({ children: e }) =>
          a.createElement(
            a.Fragment,
            null,
            a.createElement(v.o, { "data-grammarly-part": "gdocs-sidebar", className: N.wrapper }, e),
            a.createElement(h.p, { thin: !0, thinItalic: !0, regular: !0, italic: !0, bold: !0, boldItalic: !0, semiBold: !0 })
          );
    },
    13299: (e, t, i) => {
      i.d(t, { CV: () => V, hp: () => B, k9: () => H });
      var a = i(57050),
        s = i(40327),
        r = i(55649),
        n = i(59443),
        o = i(74660),
        l = i(66896),
        c = i(18625),
        d = i(60797),
        u = i(77176),
        p = i(66310),
        m = i(17343),
        g = i(98403),
        h = i(91224),
        v = i(40151),
        f = i(38194),
        b = i(76974),
        w = i(24209),
        S = i(93508),
        y = i(16118),
        E = i(85985),
        C = i(28043),
        k = i(41398),
        _ = i(83401),
        A = i(598),
        I = i(25980),
        x = i(52658),
        T = i(74238),
        M = i(99116),
        R = i(4890),
        P = i(35416),
        L = i(5114),
        F = i(83078),
        D = i(23239);
      class N {
        constructor(e, t) {
          (this._cardPositions = e), (this._markPositions = t), (this._log = r.Y.create("SidebarAlignmentViewModelImpl"));
        }
        alignCardToMark({ id: e, renderOptions: { features: t }, activeAlert: i, activeHighlightIndex: a }, r) {
          return c
            .P(() => this._markPositions.getMarkAlertPosition({ alert: i, highlightIndex: a }))
            .pipe(
              d.oA,
              u.U((i) =>
                (0, s.pipe)(
                  this._cardPositions.getCardSuggestedPositionInViewport(e, t.has(R.j.Features.showLabel), L.some(i), "cardContentTop"),
                  L.fromEither
                )
              ),
              d.oA,
              p.w((i) => this._cardPositions.setCardPosition(e, t.has(R.j.Features.showLabel), !0, i.top)),
              m.h(g.PU),
              h.K((e) => (this._log.error("Cannot align card to mark", e), v.E)),
              f.B()
            );
        }
        alignMarkTo(e, t, i, a) {
          return c
            .P(() =>
              b
                .of(
                  (0, s.pipe)(
                    this._cardPositions.getCardSuggestedPositionInViewport(
                      e.id,
                      e.renderOptions.features.has(R.j.Features.showLabel),
                      L.some(i),
                      "cardContentTop"
                    ),
                    L.fromEither
                  )
                )
                .pipe(d.oA)
            )
            .pipe(
              p.w((i) =>
                w.T(
                  this._markPositions.moveAlertHighlightInViewport(
                    t,
                    T.r.FromWindowTop.ISO.modify(T.L.concatC(i.contentOffset))(i.top),
                    n.uq.initial
                  ),
                  this._cardPositions.setCardPosition(e.id, e.renderOptions.features.has(R.j.Features.showLabel), !0, i.top)
                )
              ),
              m.h(g.PU),
              h.K((e) => (this._log.error("Cannot align mark to suggested position", e), v.E)),
              f.B()
            );
        }
        alignMarkToCard({ id: e, renderOptions: { features: t }, activeHighlightIndex: i, activeAlert: a }, r, o = L.none) {
          return c
            .P(() =>
              b
                .of(
                  (0, s.pipe)(
                    this._cardPositions.getCardSuggestedPositionInViewport(e, t.has(R.j.Features.showLabel), o, "cardContentTop"),
                    L.fromEither
                  )
                )
                .pipe(d.oA)
            )
            .pipe(
              p.w((s) =>
                w.T(
                  this._markPositions.moveAlertHighlightInViewport(
                    { alert: a, highlightIndex: i },
                    T.r.FromWindowTop.ISO.modify(T.L.concatC(s.contentOffset))(s.top),
                    n.uq.initial
                  ),
                  this._cardPositions.setCardPosition(e, t.has(R.j.Features.showLabel), !0, s.top)
                )
              ),
              m.h(g.PU),
              h.K((e) => (this._log.error("Cannot align mark to card", e), v.E)),
              f.B()
            );
        }
        alignCardTo(e, t, i) {
          const a = i !== I.v.Animation.NO_ANIMATION;
          return c
            .P(() =>
              b
                .of(
                  (0, s.pipe)(
                    this._cardPositions.getCardSuggestedPosition(
                      e.id,
                      e.renderOptions.features.has(R.j.Features.showLabel),
                      L.some(t),
                      "cardTop"
                    ),
                    L.fromEither
                  )
                )
                .pipe(d.oA)
            )
            .pipe(
              p.w((t) => this._cardPositions.setCardPosition(e.id, e.renderOptions.features.has(R.j.Features.showLabel), a, t.top)),
              m.h(g.PU),
              h.K((e) => (this._log.error("Cannot align card to required top", e), v.E)),
              f.B()
            );
        }
      }
      const B = (e, t, i, a, s, r) => new N(x.eZ.getSuperScrollMapper(e, a, D.h.create(16)), x.UC.getMapper(t, s, r));
      var V;
      !(function (e) {
        e.skip = "skip";
      })(V || (V = {}));
      const H = (e, t, i, r, n, c = g.b2.rafScheduler) => {
        const d = (e, i, a, s) => {
            if (a === o.l$.text) return t.alignCardToMark(e, i ? I.v.Animation.ANIMATE_ALL : I.v.Animation.NO_ANIMATION, !0);
            if (a === P.h8.forceText) return t.alignCardToMark(e, I.v.Animation.NO_ANIMATION, !1);
            {
              const r = a === o.l$.sidebar;
              return t.alignMarkToCard(e, r ? (i ? I.v.Animation.ANIMATE_ALL : I.v.Animation.ANIMATE_MARK) : I.v.Animation.NO_ANIMATION, s);
            }
          },
          h = w
            .T(
              e.view(P.nL.mapper(({ currentLens: e, alertSource: t }) => L.some({ currentLens: e, alertSource: t }))).pipe(
                S.O(L.none),
                u.U(L.map((e) => e.currentLens.id)),
                y.G(),
                E.h(([e, t]) => (0, s.pipe)(F.vB((e, t) => e !== t)(e, t), L.exists(a.yR))),
                m.h(L.none)
              ),
              e.view(P.nL.mapper(({ currentLens: e, alertSource: t }) => L.some({ currentLens: e, alertSource: t }))).pipe(
                E.h(L.exists(({ currentLens: e }) => (0, M.Bk)(n)(e))),
                u.U(
                  L.chain(({ currentLens: e, alertSource: t }) =>
                    (0, s.pipe)(
                      r(e),
                      L.filter(n.isValidToAlign),
                      L.map((i) => ({ item: i, source: t, lensId: e.id }))
                    )
                  )
                )
              )
            )
            .pipe(
              C.x(
                (0, a.ls)(
                  F.vB(
                    (e, t) =>
                      e.lensId === t.lensId &&
                      e.item.activeAlert.id === t.item.activeAlert.id &&
                      e.item.visualState.transition.type === t.item.visualState.transition.type &&
                      e.item.activeHighlightIndex === t.item.activeHighlightIndex
                  ),
                  L.exists(a.yR)
                )
              ),
              S.O(L.none),
              y.G(),
              u.U(([e, t]) =>
                (0, s.pipe)(
                  t,
                  L.map((i) => ({
                    item: i.item,
                    source: i.source,
                    animate: (0, s.pipe)(
                      e,
                      F.wo(({ lensId: e }) => e === i.lensId)
                    ),
                    suggestedPosition: (0, s.pipe)(
                      e,
                      L.filter((e) => !n.isScheduledToDispose(e.item)),
                      L.chain((e) =>
                        (0, s.pipe)(
                          t,
                          L.map((t) => [e.item, t.item])
                        )
                      ),
                      L.filter(([e, t]) => t.lensId === e.lensId && t.positionState.absTop > e.positionState.absTop),
                      L.map(([e, t]) => T.r.FromWindowTop.ISO.wrap(t.positionState.absTop))
                    )
                  }))
                )
              ),
              p.w(L.fold(() => v.E, c)),
              k.M(i),
              p.w(([{ item: e, source: t, animate: a, suggestedPosition: r }, n]) =>
                (0, s.pipe)(
                  n,
                  L.fold(
                    () => d(e, a, t, r),
                    (t) => (i.set(L.none), t === V.skip ? _.C : d(e, a, t, r))
                  )
                )
              )
            );
        return { id: "alignmentSideEffect", when: l.R.isWithAlertsId, what: P.nL.Effect.Applicator.create(h.pipe(A.c(_.C))) };
      };
    },
    34849: (e, t, i) => {
      if ((i.d(t, { C: () => n }), 3075 == i.j)) var a = i(7737);
      if (3075 == i.j) var s = i(67331);
      if (3075 == i.j) var r = i(9922);
      class n {
        constructor(e, t, i) {
          (this._cardsViewModel = e),
            (this._gnar = t),
            (this._getAlertById = i),
            (this._subs = new r.w.Keeper()),
            this.subscribeToSidebarCardActions();
        }
        subscribeToSidebarCardActions() {
          this._subs.push(
            s.g.createSubscription(this._cardsViewModel.actionEvents, this._gnar, this._getAlertById),
            (0, a.t)(this._cardsViewModel.actionEvents, this._gnar, "gdocs")
          );
        }
        dispose() {
          this._subs.dispose();
        }
      }
    },
    36689: (e, t, i) => {
      i.d(t, { A7: () => k, CH: () => I, Ng: () => A, uo: () => _ });
      var a = i(57050),
        s = i(66896),
        r = i(74660),
        n = i(55935),
        o = i(66310),
        l = i(40151),
        c = i(76974),
        d = i(85985),
        u = i(41398),
        p = i(77176);
      if (3075 == i.j) var m = i(28043);
      if (3075 == i.j) var g = i(598);
      if (3075 == i.j) var h = i(83401);
      if (3075 == i.j) var v = i(13444);
      if (3075 == i.j) var f = i(57091);
      if (3075 == i.j) var b = i(16118);
      var w = i(35416);
      if (3075 == i.j) var S = i(6100);
      var y = i(5114);
      if (3075 == i.j) var E = i(83078);
      if (3075 == i.j) var C = i(23239);
      function k(e, t, i) {
        return {
          id: "alertSwitchingByClickSideEffect",
          when: a.W8,
          what: w.nL.Effect.SwitchAlert.create(
            e.alertClicked.pipe(
              n.T(1),
              o.w(y.fold(() => l.E, c.of)),
              d.h((e) => !i || e.alert.lensId !== s.R.SpecialId.Premium),
              u.M(
                t.pipe(
                  d.h(w.nL.hasCards),
                  p.U((e) => e.currentLens.id)
                ),
                (e, t) => ({ ...e, lensId: t })
              ),
              p.U(({ alert: e, highlightIndex: t, lensId: i }) => ({
                alertHighlight: { alert: e, highlightIndex: t },
                alertSource: r.l$.text,
                options: { lensId: i, order: "textOrder" }
              }))
            )
          )
        };
      }
      function _(e, t) {
        return {
          id: "connectionManager",
          when: () => !0,
          what: w.nL.Effect.SwitchAlert.create(
            e.pipe(
              p.U((e) => e.online),
              m.x(),
              o.w((e) => (e ? l.E : t.enqueue("offline", { reconnectTime: C.h.create(10) }))),
              g.c(h.C)
            )
          )
        };
      }
      function A(e, t, i) {
        const a = e.getLens(s.R.SpecialId.Premium).pipe(
          p.U((e) => e.count > 0),
          m.x()
        );
        return {
          id: "autoSwitchToPremiumLensSideEffect",
          when: (e) => e === s.R.SpecialId.AllAlerts || e === s.R.SpecialId.Priority,
          what: w.nL.Effect.SwitchLens.create(
            t.pipe(
              p.U(S.v.WithSuccess.State.isInSuccess(i)),
              m.x(),
              v.g(1),
              f.a(a),
              d.h(([e, t]) => e && t),
              p.U(() => ({
                lensId: s.R.SpecialId.Premium,
                alertSource: r.l$.sidebar,
                options: { toFocus: w.nL.Effect.FocusBehavior.noFocus }
              }))
            )
          )
        };
      }
      function I(e, t) {
        const i = e.getLens(s.R.SpecialId.AllAlerts).pipe(
            p.U((e) => e.count > 0),
            m.x()
          ),
          n = e.getLens(s.R.SpecialId.Priority).pipe(
            p.U((e) => e.count > 0),
            m.x()
          );
        return {
          id: "autoSwitchFromPremiumLensSideEffect",
          when: a.W8,
          what: w.nL.Effect.SwitchLens.create(
            t.pipe(
              p.U((e) => e.currentLens.id),
              m.x(),
              b.G(),
              d.h(([e, t]) => t === s.R.SpecialId.Premium),
              p.U(([e, t]) => e),
              f.a(i, n),
              p.U(([e, t, i]) =>
                e === s.R.SpecialId.Priority && i
                  ? y.some(s.R.SpecialId.Priority)
                  : e === s.R.SpecialId.AllAlerts && t
                  ? y.some(s.R.SpecialId.AllAlerts)
                  : y.none
              ),
              d.h(y.isSome),
              p.U(E.MH),
              p.U((e) => ({ lensId: e, alertSource: r.l$.sidebar, options: { toFocus: w.nL.Effect.FocusBehavior.noFocus } }))
            )
          )
        };
      }
    },
    82001: (e, t, i) => {
      i.d(t, { D: () => a });
      var a,
        s = i(40327),
        r = i(73353),
        n = i(5114),
        o = i(55415);
      !(function (e) {
        e.updateCitationStyle = (e, t) => (i) => {
          const a = (0, s.pipe)(
              e.defaultContext.get(),
              n.getOrElse(() => r.R$.defaultContextFallback)
            ),
            l = (0, s.pipe)(e.context.get(), r.R$.OutcomeContext.withCitationStyle(i));
          (0, s.pipe)(l, e.updateContext) &&
            t.goalsFormSuccess(
              (0, s.pipe)(
                l.domain,
                n.getOrElse(() => a.domain)
              ),
              (0, s.pipe)(
                l.goals,
                n.getOrElse(() => a.goals),
                (e) => Array.from(e)
              ),
              "essayDetectionCard",
              (0, s.pipe)(l.outcomeContext, n.map(o.ei("type")), n.toUndefined),
              void 0,
              (0, s.pipe)(l.outcomeContext, n.map(o.ei("citation")), n.toUndefined),
              void 0
            );
        };
      })(a || (a = {}));
    },
    69910: (e, t, i) => {
      if ((i.d(t, { G: () => Ee }), 3075 == i.j)) var a = i(57050);
      if (3075 == i.j) var s = i(40327);
      if (3075 == i.j) var r = i(95294);
      if (3075 == i.j) var n = i(53391);
      if (3075 == i.j) var o = i(22027);
      if (3075 == i.j) var l = i(84447);
      if (3075 == i.j) var c = i(55563);
      if (3075 == i.j) var d = i(864);
      if (3075 == i.j) var u = i(9780);
      if (3075 == i.j) var p = i(34849);
      if (3075 == i.j) var m = i(82001);
      if (3075 == i.j) var g = i(14592);
      if (3075 == i.j) var h = i(57882);
      if (3075 == i.j) var v = i(8901);
      if (3075 == i.j) var f = i(53945);
      if (3075 == i.j) var b = i(9205);
      if (3075 == i.j) var w = i(56913);
      if (3075 == i.j) var S = i(51129);
      if (3075 == i.j) var y = i(52622);
      if (3075 == i.j) var E = i(81301);
      if (3075 == i.j) var C = i(61813);
      if (3075 == i.j) var k = i(74660);
      if (3075 == i.j) var _ = i(66896);
      if (3075 == i.j) var A = i(13313);
      if (3075 == i.j) var I = i(94785);
      if (3075 == i.j) var x = i(70023);
      if (3075 == i.j) var T = i(98403);
      if (3075 == i.j) var M = i(76974);
      if (3075 == i.j) var R = i(77176);
      if (3075 == i.j) var P = i(85985);
      if (3075 == i.j) var L = i(24209);
      if (3075 == i.j) var F = i(60797);
      if (3075 == i.j) var D = i(23063);
      if (3075 == i.j) var N = i(93508);
      if (3075 == i.j) var B = i(55935);
      if (3075 == i.j) var V = i(2834);
      if (3075 == i.j) var H = i(2844);
      if (3075 == i.j) var O = i(17343);
      if (3075 == i.j) var U = i(28043);
      if (3075 == i.j) var j = i(66310);
      if (3075 == i.j) var G = i(40151);
      if (3075 == i.j) var W = i(21619);
      if (3075 == i.j) var z = i(54216);
      if (3075 == i.j) var q = i(54466);
      if (3075 == i.j) var K = i(92485);
      if (3075 == i.j) var Z = i(91549);
      if (3075 == i.j) var X = i(83167);
      if (3075 == i.j) var Y = i(20594);
      if (3075 == i.j) var Q = i(35607);
      if (3075 == i.j) var J = i(20291);
      if (3075 == i.j) var $ = i(4890);
      if (3075 == i.j) var ee = i(35416);
      if (3075 == i.j) var te = i(6100);
      if (3075 == i.j) var ie = i(73841);
      if (3075 == i.j) var ae = i(89770);
      if (3075 == i.j) var se = i(39920);
      if (3075 == i.j) var re = i(30013);
      if (3075 == i.j) var ne = i(17372);
      if (3075 == i.j) var oe = i(66866);
      if (3075 == i.j) var le = i(27125);
      if (3075 == i.j) var ce = i(5114);
      if (3075 == i.j) var de = i(83078);
      if (3075 == i.j) var ue = i(95195);
      if (3075 == i.j) var pe = i(8125);
      if (3075 == i.j) var me = i(95574);
      if (3075 == i.j) var ge = i(23239);
      if (3075 == i.j) var he = i(81531);
      var ve = i(34217);
      if (3075 == i.j) var fe = i(13299);
      if (3075 == i.j) var be = i(36689);
      if (3075 == i.j) var we = i(52098);
      if (3075 == i.j) var Se = i(1050);
      if (3075 == i.j) var ye = i(85441);
      const Ee = (e, t, i, Ee, Ce, ke, _e, Ae, Ie, xe, Te, Me, Re, Pe, Le, Fe) => {
        const De = he.C8.Logging.getLogger("view_models"),
          Ne = ge.h.create(A.A.defaultState),
          Be = ge.h.create(!1),
          Ve = z.t.create(z.t.defaultLensFilters, z.t.defaultTextFilters),
          He = e.alertsList.state.pipe((t) => A.A.get(t, e.alertsList.lensesScores, Ve)).subscribe(T.wW(Ne)),
          Oe = new we.t(Ne.view("lenses"), Ve, e.sessionModel.scoreStatus),
          Ue = (0, K.$y)((0, y.a)(t).getContents),
          je = {
            features: (() => {
              const e = new Set();
              return e.add(Y.IG.Features.showCardLabelInOutcomes), e;
            })(),
            cardLayoutDensityMode: $.j.Density.compact,
            shouldAnimateAlertApply: a.jv,
            cardVisualMode: ge.h.create($.j.CardVisualMode.RegularLightMode)
          },
          Ge = (0, Y.Ls)(Ue, e.alertsReader, je, () => M.of(ce.none), e.mutingAlertsReader),
          We = Z.R.ItemFactory.create(Ue, e.mutingAlertsReader, je, () => M.of(ce.none)),
          ze = l.O.getCapabilities(Ge, We, e.alertsReader, Ue),
          qe = new se.gi(l.O.equatable.structEq, l.O.defaultOrd),
          Ke = (0, se.is)(Ge, ze),
          Ze = re.v.createWithInitialAlerts(qe, Ke, Ve, (0, a.ff)(k.bZ.isMuted), ze),
          Xe = new ae.oq(e.alertsList.state, e.alertsReader, Ne.view("lenses"), e.positionManager, Oe, Ze, Ke, ze, Ve),
          Ye = _.R.SpecialId.AllAlerts;
        i.next({ kind: c.R.ChangeLens, selectedLens: "all" });
        const Qe = ge.h.create(Xe.emptyState(Ye)),
          Je = Qe.pipe(
            R.U((e) => e.currentLens.id),
            P.h(n.U.SelectedLens.filter)
          ).subscribe((e) => Ae.set(e)),
          $e = (0, X.u0)(() => t.getCursor().index, Xe),
          et = new v.x(e.alertsList, Qe, 5, Fe, Ce),
          tt = new f.r(e.alertsList, Qe),
          it = Re.isGateEnabled(b.K.StudentsOFEGdocs) || Re.isGateEnabled(b.K.StudentsOFEInternal),
          at = new E.EQ(new Se.o(e.sessionModel, et, ke.isPremium, Ce, it)),
          st = new h.$(Qe, Oe, i, at, t, Ie, Ce, ne.z.all),
          rt = new q.Xx(
            { flush: () => t.flushChanges() },
            st.events,
            Ge,
            e.alertsService,
            e.alertsReader,
            () => Promise.resolve(),
            () => Promise.resolve(),
            (0, s.pipe)(
              e.mutedAlertsCategoriesModel,
              ce.map((e) => ({ model: e, openSuggestionsManagement: () => self.open((0, w.Um)().suggestionsSettings) }))
            ),
            ce.none,
            () => !1,
            l.O.getActiveItemWithAlert,
            ze,
            Qe,
            new d.C((0, ye.nD)()),
            { bufferTransitions: !0, showGbPrompt: !1 },
            m.D.updateCitationStyle(e.sessionModel, Ce)
          ),
          nt = new p.C(rt, Ce, (t) => e.alertsReader.getById(t)),
          ot = S.n5.isFree(_e.get()),
          lt = (0, s.pipe)(
            Pe
              ? (e) =>
                  L.T(
                    et.advancedAlerts.pipe(
                      F.oA,
                      R.U((e) => ({ kind: I.n.State.expanded, showCloseButton: !0, alertsState: { count: e.count, alerts: e.alerts() } })),
                      D.q(1),
                      N.O({ kind: I.n.State.minimized, alertsCount: 0 })
                    ),
                    (0, x.d)(et.advancedAlerts)(e).pipe(B.T(1))
                  )
              : (0, x.d)(et.advancedAlerts),
            ve.Z.extendActions(
              V.b((e) => {
                e.key === I.n.State.minimized && "onClick" === e.action.action && ot && Be.set(!0),
                  e.key === I.n.State.expanded && "collapse" === e.action.kind && Be.set(!1),
                  e.key === I.n.State.expanded &&
                    "upgrade" === e.action.kind &&
                    (et.trackUpgradeButtonClick({
                      placement: "advancedIssues",
                      bannerType: "SeeWhatsInPremium",
                      upgradeHookName: "advancedIssues",
                      upgradeHookSlot: "gDocsSidebar"
                    }),
                    et.openUpgradeUrl(v.L.Place.gdocsSidebarCardList)),
                  e.key === I.n.State.expanded &&
                    "onUpgradeButtonMount" === e.action.kind &&
                    et.trackUpgradeButtonShow({
                      placement: "advancedIssues",
                      bannerType: "SeeWhatsInPremium",
                      upgradeHookName: "advancedIssues",
                      upgradeHookSlot: "gDocsSidebar"
                    });
              })
            )
          ),
          ct = H.aj([Be, Le]).pipe(O.h(T.PU)),
          dt = tt.freeAlerts
            .pipe(
              R.U((e) => {
                var t;
                return !(null === (t = (0, s.pipe)(e, de.Fc)) || void 0 === t ? void 0 : t.count) && ot;
              }),
              U.x()
            )
            .subscribe(T.wW(Be)),
          ut = (0, g.xl)(Qe, Ve, ct, Be, ge.h.create(!1)),
          pt = H.aj(ut, Le).pipe(R.U(([e, t]) => (t ? a.jv : e))),
          mt = new g.o$(
            e.alertsList,
            e.alertsReader,
            e.positionManager,
            e.alertsService,
            t,
            Qe,
            pt,
            l.O.getActiveItemWithAlert,
            xe,
            !1,
            Be
          ),
          gt = new Q.o(() => ue.right(void 0)),
          ht = (0, fe.hp)(Qe, mt, ge.h.create(16), gt, t, De),
          vt = Qe.view(ee.nL.getActiveAlertHighlight(l.O.getActiveItemWithAlert)),
          ft = new W.mN(
            t,
            mt,
            e.alertsReader,
            vt,
            Qe.view((e) => e.currentLens.meta.filter)
          ),
          bt = new C.y(ge.h.create([]), u.I.createFactory(), 3, 5e3),
          wt = [
            q.dv.changeAlertEffect(
              Qe,
              rt,
              Ge,
              l.O.getActiveItemWithAlert,
              e.alertsReader,
              ce.some(ht),
              $e,
              De.getLogger("CardsViewModelEffects.changeAlertEffect")
            ),
            ...rt.getApplicatorEffects(),
            J.R7(Qe, gt, ze, (0, a.MZ)(rt.actionEvents), { cardsAroundActive: 25, cardsBeyondViewport: 25 }),
            be.A7(ft, Qe),
            (0, fe.k9)(Qe, ht, ge.h.create(ce.none), l.O.getActiveAlignableItem, ze),
            J.XU(Qe, gt, ze),
            oe.EQ.focusMarkByActiveAlert(
              Qe,
              mt,
              e.alertsReader,
              l.O.getActiveFocusableItem,
              De.getLogger("MarksEffects.focusMarkByActiveAlert")
            ),
            be.uo(Ee, bt),
            q.dv.createSendActiveAlertFeedbacksEffect(
              Qe,
              l.O.getActiveItemWithAlert,
              e.alertsService,
              e.alertsReader,
              De.getLogger("CardsViewModelEffects.createSendActiveAlertFeedbacksEffect")
            ),
            be.Ng(Oe, Qe, ze),
            be.CH(Oe, Qe),
            st.lensChangeEffect
          ],
          St =
            "none" !== Ie.priorityLens.kind
              ? st.lensMode.view(ne.K.isPriorityMode).view((0, pe.RN)(_.R.SpecialId.Priority, _.R.SpecialId.AllAlerts))
              : ge.h.create(_.R.SpecialId.AllAlerts),
          yt = (0, X.VC)(Xe, $e, St, ze),
          Et = ge.h.create(!0),
          Ct = X.Py.getStateTransformer(
            X.Py.getDefaultBehavior(l.O.getActiveItemWithAlert, ze),
            yt,
            e.alertsReader,
            ze,
            (e) => Et.get() && "text" !== e.alertSource,
            a.Q1,
            St
          ),
          kt = te.v.Items.getItemsPositionsUpdateTransformer(ze),
          _t = (0, a.ls)(Ct, me.L9(kt)),
          At = new ie.l(Qe, Xe, e.alertsReader, e.alertsService, wt, l.O.getActiveItemWithAlert, _t),
          It = new le.L(
            Qe,
            e.sessionModel,
            a.Q1,
            ze,
            ce.none,
            ce.none,
            (e) => ee.nL.isWithPriorityList(e) && te.v.WithPriority.onlyNonPriorityAlertsLeft(e.currentLens, l.O.priorityTest, ze),
            te.v.WithPriority.isInSuccess(l.O.priorityTest, ze),
            ge.h.create(!1)
          ),
          xt = Te.pipe(
            j.w(
              ce.fold(
                () => G.E,
                (t) => t.initCardActionsProcessing(rt.actionEvents, e.alertsReader, (0, o.aU)(Qe), (0, o.X5)(ft, Qe), Qe)
              )
            )
          ).subscribe(),
          Tt = rt.actionEvents.subscribe(
            (0, a.ls)(
              (0, r.JH)(e.alertsReader, r.SV.Source.sidebar),
              de.bw((e) => Me.next(e))
            )
          );
        return {
          lensState: Qe,
          lensStateManager: At,
          cardsViewModel: rt,
          marksViewModel: mt,
          navigationViewModel: st,
          successLensViewModel: It,
          alignmentViewModel: ht,
          lensPreviewViewModel: Oe,
          cardsListScrollManager: gt,
          notificationManager: bt,
          upgradeViewModel: et,
          modalManager: at,
          capabilities: ze,
          upgradeHookFlow: lt,
          dispose: () => {
            Tt.unsubscribe(),
              mt.dispose(),
              Je.unsubscribe(),
              He.unsubscribe(),
              nt.dispose(),
              xt.unsubscribe(),
              dt.unsubscribe(),
              tt.dispose();
          }
        };
      };
    },
    52098: (e, t, i) => {
      i.d(t, { t: () => f });
      var a = i(71249),
        s = i(57050),
        r = i(40327),
        n = i(45614),
        o = i(32426),
        l = i(80800),
        c = i(66896),
        d = i(37539),
        u = i(64992),
        p = i(8125),
        m = i(22232),
        g = i(5114),
        h = i(50147),
        v = i(23239);
      class f {
        constructor(e, t, i) {
          (this._lensesList = e),
            (this._alertsFilterService = t),
            (this._scoreStatus = i),
            (this.getLens = (0, p.HP)(function (e) {
              switch (e) {
                case c.R.SpecialId.AllAlerts:
                  return this._lensesList.view(
                    b(c.R.Info.allAlerts, c.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(c.R.SpecialId.AllAlerts))
                  );
                case c.R.SpecialId.Priority:
                  return this._lensesList.view(
                    b(c.R.Info.priority, c.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(c.R.SpecialId.Priority))
                  );
                case c.R.SpecialId.PredictionTakeaways:
                  return this._lensesList.view(
                    b(
                      c.R.Info.predictionTakeaways,
                      c.R.Meta.group.empty,
                      this._alertsFilterService.getLensesFilter(c.R.SpecialId.PredictionTakeaways)
                    )
                  );
                case c.R.SpecialId.PredictionEmogenie:
                  return this._lensesList.view(
                    b(
                      c.R.Info.predictionEmogenie,
                      c.R.Meta.group.empty,
                      this._alertsFilterService.getLensesFilter(c.R.SpecialId.PredictionEmogenie)
                    )
                  );
                case c.R.SpecialId.RealTimeProofit:
                  return this._lensesList.view(
                    b(
                      c.R.Info.realTimeProofit,
                      c.R.Meta.group.empty,
                      this._alertsFilterService.getLensesFilter(c.R.SpecialId.RealTimeProofit)
                    )
                  );
                case c.R.SpecialId.Plagiarism:
                  return this._lensesList.view(this._getPlagiarismLens);
                case c.R.SpecialId.Premium:
                  return this._lensesList.view(
                    b(c.R.Info.premium, c.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(c.R.SpecialId.Premium))
                  );
                case c.R.SpecialId.FreePremiumAlerts:
                  return this._lensesList.view(
                    b(
                      c.R.Info.freePremium,
                      c.R.Meta.group.empty,
                      this._alertsFilterService.getLensesFilter(c.R.SpecialId.FreePremiumAlerts)
                    )
                  );
                case c.R.SpecialId.Correctness:
                case c.R.SpecialId.Clarity:
                case c.R.SpecialId.Engagement:
                case c.R.SpecialId.Delivery:
                case c.R.SpecialId.Vox:
                case c.R.SpecialId.CorrectnessPriority:
                case c.R.SpecialId.ClarityPriority:
                case c.R.SpecialId.EngagementPriority:
                case c.R.SpecialId.DeliveryPriority:
                case c.R.SpecialId.VoxPriority:
                case c.R.SpecialId.KnowledgeHub:
                case c.R.SpecialId.KnowledgeHubPriority:
                  return this._lensesList.view(
                    b(c.R.Info.createOutcome(e), c.R.Meta.group.empty, this._alertsFilterService.getLensesFilter(e))
                  );
                default:
                  return (0, m.vE)(e);
              }
            })),
            (this._outcomes = [c.R.SpecialId.Correctness, c.R.SpecialId.Clarity, c.R.SpecialId.Engagement, c.R.SpecialId.Delivery]),
            (this._previews = (0, p.HP)(() => n.uX((0, o.getFirstSemigroup)(), a.IX)(this._outcomes, (e) => [e, this._getPreview(e)]))),
            (this._isDocumentEmpty = v.h.create(!1)),
            (this._isFree = v.h.create(!1)),
            (this._outcomeStatusMask = v.h.combine(this._isDocumentEmpty, this._isFree, (e, t) => {
              let i = 0;
              return e && (i |= u.x.IsDocumentEmpty), t && (i |= u.x.IsFreeUser), i;
            })),
            (this._getPlagiarismLens = (0, s.ls)(
              b(
                c.R.Info.plagiarism,
                { ...c.R.Meta.group.empty, percentile: d.T.MAX },
                this._alertsFilterService.getLensesFilter(c.R.SpecialId.Plagiarism)
              ),
              c.R.WithAlerts.modifyMeta((e) => ({ ...e, percentile: d.T.groupSum.concat(d.T.MAX, d.T.groupSum.inverse(e.percentile)) }))
            ));
        }
        findLens(e) {
          return (0, r.pipe)(
            g.fromNullable([this.getLens(c.R.SpecialId.AllAlerts), this.getLens(c.R.SpecialId.Premium)].find((t) => e(t.get()))),
            g.map((e) => e.get().id)
          );
        }
        _getPreview(e) {
          return { ...c.R.Info.base, logo: g.none, ...this._getOutcomeButtonData(e) };
        }
        get lensPreviews() {
          return this._previews();
        }
        _getOutcomeButtonData(e) {
          const t = this.getLens(e),
            i = t.get().title,
            a = this._isFree.view((t) => t && (e === c.R.SpecialId.Engagement || e === c.R.SpecialId.Delivery)),
            n = v.h.combine(
              t.view("count").view((e) => 0 === e),
              a,
              (e, t) => e && !t
            ),
            { description: o, stateMessage: p } = (0, u.O)(e),
            m = v.h
              .combine(this._isDocumentEmpty, n, t.view("percentile"), (e, t, i) => (e ? d.T.MIN : t ? d.T.MAX : i))
              .view(d.g.fromRatio),
            h = v.h.create(!1),
            f = v.h.combine(
              this._scoreStatus.view((e) =>
                (0, r.pipe)(
                  e,
                  g.map((e) => e === l.v0.ScoresStatus.SENSITIVE),
                  g.getOrElse(s.jv)
                )
              ),
              t,
              m,
              this._outcomeStatusMask,
              h,
              p
            );
          return { id: e, title: i, description: o, status: f, progress: m, isUnavailable: a };
        }
        get nonEmptyLensId() {
          return (0, r.pipe)(
            g.fromNullable([this.getLens(c.R.SpecialId.AllAlerts), this.getLens(c.R.SpecialId.Premium)].find((e) => e.get().count > 0)),
            g.map((e) => e.get().id)
          );
        }
      }
      function b(e, t, i) {
        return (a) => {
          return new c.R.LensImpl(
            e,
            ((s = e.id),
            (n = t),
            (e) =>
              (0, r.pipe)(
                h.P5(c.R.Id.ord)(s, e),
                g.getOrElse(() => n)
              ))(a),
            i
          );
          var s, n;
        };
      }
    },
    14592: (e, t, i) => {
      i.d(t, { gM: () => X, o$: () => Q, xl: () => Y });
      var a,
        s = i(57050),
        r = i(40327),
        n = i(32409),
        o = i(84447),
        l = i(10389),
        c = i(33194),
        d = i(14315),
        u = i(98805),
        p = i(66896),
        m = i(74660),
        g = i(51374),
        h = i(4390),
        v = i(9922),
        f = i(98403),
        b = i(59368),
        w = i(16746),
        S = i(17594),
        y = i(35416),
        E = i(6100),
        C = i(66866),
        k = i(77176),
        _ = i(67434),
        A = i(2844),
        I = i(24209),
        x = i(85985),
        T = i(28043),
        M = i(41398),
        R = i(76974),
        P = i(32952),
        L = i(16118),
        F = i(40151),
        D = i(2834),
        N = i(60797),
        B = i(24713),
        V = i(92843),
        H = i(71249),
        O = i(8125),
        U = i(5114),
        j = i(95195),
        G = i(83078),
        W = i(55415),
        z = i(22232),
        q = i(23239),
        K = i(81531),
        Z = i(75167);
      !(function (e) {
        (e.create = (e, t, i, a, s, r) => (n, o) => {
          const l = o.to.visualState === b.Bd.highlighted;
          return d.sO.Change.getCreateAction({
            range: n,
            capiAlertId: e,
            visualState: l
              ? { type: d.sO.Change.VisualState.Type.highlighted, source: t() }
              : { type: d.sO.Change.VisualState.Type.visible },
            highlightColor: i,
            highlightDisplayFormat: a(n(), l),
            highlightDisappearOnHoverDelay: s,
            order: r
          });
        }),
          (e.update = (e, t, i, a, s, r) => (n, o) => {
            const l = o.to.visualState === b.Bd.highlighted;
            return d.sO.Change.getUpdateAction({
              range: n,
              capiAlertId: e,
              visualState: l
                ? { type: d.sO.Change.VisualState.Type.highlighted, source: t() }
                : { type: d.sO.Change.VisualState.Type.visible },
              highlightColor: i,
              highlightDisplayFormat: a(n(), l),
              highlightDisappearOnHoverDelay: s,
              order: r
            });
          }),
          (e.remove = (e) => (t) => d.sO.Change.getRemoveAction({ range: t, capiAlertId: e }));
      })(a || (a = {}));
      const X = (e, t) => {
          const i = e.pipe(k.U(c.D1.StrongAlertRef.getStrongAlertRefBulkDismissAlertIds)),
            a = t.pipe(
              k.U((e) => e.cards),
              _.R(
                (e, t) =>
                  (0, r.pipe)(
                    t,
                    V.v.reduce(
                      e,
                      (e, t) => (e.delete(t.id), e),
                      (e, t, i) =>
                        e.set(
                          i.id,
                          i.alertIds.map((e) => e.toString())
                        ),
                      (e, t) =>
                        e.set(
                          t.id,
                          t.alertIds.map((e) => e.toString())
                        )
                    )
                  ),
                new Map()
              ),
              k.U((e) => (0, r.pipe)(Array.from(e.values()), H.xH)),
              k.U((e) => new Set(e))
            ),
            s = t.pipe(k.U((e) => e.feedId === c.D1.AssistantFeed.TONE_INSIGHTS_CARD_FEED_ID)),
            n = t.pipe(k.U((e) => e.feedId === c.D1.AssistantFeed.PERFORMANCE_SCORE_FEED)),
            o = t.pipe(k.U((e) => e.feedId === c.D1.AssistantFeed.BULK_DISMISS_CARD_FEED_ID)),
            l = t.pipe(k.U((e) => e.feedId === c.D1.AssistantFeed.BULK_DISMISS_REVIEW_FEED_ID));
          return A.aj([i, a, s, n, o, l]).pipe(
            k.U(([e, t, i, a, s, r]) => (i || a ? (t) => !e.has(t.id) : s || r ? (e) => t.has(e.id) : (i) => t.has(i.id) && !e.has(i.id)))
          );
        },
        Y = (e, t, i, a = q.h.create(!1), s = q.h.create(!1)) =>
          I.T(
            e.pipe(
              x.h((e) => e.currentLens.id !== p.R.SpecialId.Premium),
              T.x(
                (e, t) =>
                  !(
                    e.currentLens.id !== t.currentLens.id ||
                    (y.nL.isWithPriorityList(e) &&
                      y.nL.isWithPriorityList(t) &&
                      E.v.WithPriority.isNonPriorityListOpened(e.currentLens) !== E.v.WithPriority.isNonPriorityListOpened(t.currentLens))
                  )
              ),
              T.x()
            ),
            i.pipe(
              M.M(e),
              k.U(([e, t]) => t)
            )
          ).pipe(
            M.M(a, s),
            k.U(([e, i, a]) =>
              i
                ? (0, O.W9)(m.bZ.isPremium, m.bZ.isHidden)
                : a
                ? m.bZ.isPlagiarism
                : t.alertVisibleInText(e.currentLens.id, E.v.WithPriority.nonPriorityAlertsVisible(e))
            )
          );
      class Q {
        constructor(e, t, i, c, u, f, E, _, A = R.of(void 0), I = !1, T = q.h.create(!1)) {
          (this._alertList = e),
            (this._alertsReader = t),
            (this._positionManager = i),
            (this._alertsService = c),
            (this._ded = u),
            (this._lensState = f),
            (this._filterChanges = E),
            (this._getActiveItemWithAlert = _),
            (this._readyObs = A),
            (this._emulateAppliedAlertAnimation = I),
            (this._showYellowUnderlines = T),
            (this._highlightedAlert = U.none),
            (this._focusedAlert = U.none),
            (this._marksMap = new Map()),
            (this._subs = new v.w.Keeper()),
            (this.events = new P.xQ()),
            (this._alertStateDiff = this._alertList.state.pipe(
              L.G(),
              k.U(([e, t]) => h.p.diff(e, t)),
              x.h((0, O.ff)(V.v.isEmpty))
            )),
            (this._alertsFilter = q.h.create(s.jv)),
            (this._filteredAlerts = q.h.create(U.none)),
            (this._ready = !1),
            (this._log = K.C8.Logging.getLogger("marks_view_model")),
            (this.unhighlightAlertHighlight = () => {
              throw new Error("Method not implemented.");
            }),
            (this.getMarkByAlert = (e) =>
              (0, r.pipe)(
                this._marksMap.get(e.alert.id),
                U.fromNullable,
                U.chain((t) => t.markByIndex(e.highlightIndex))
              )),
            (this.getAlertByMark = (e) =>
              (0, r.pipe)(
                this._alertsReader.getRegistered(g.P.fromRangeIdToAlertId(e.id)),
                U.chain((t) =>
                  (0, r.pipe)(
                    C.$A.getHighlightIndex(t, e.range()),
                    j.map((e) => ({ alert: S.$.fromModel(t), highlightIndex: e })),
                    U.fromEither
                  )
                )
              )),
            (this.ensureAlertHighlightInViewport = (e, t, i) =>
              (0, r.pipe)(
                this.getMarkByAlert(e),
                U.fold(
                  () => F.E,
                  (e) => this._ded.scrollToMark(e.id, { animate: i, paddingTop: t })
                )
              )),
            (this._createMA = (e, t) => {
              const i = t && m.bZ.isPremium(e) && m.bZ.isHidden(e),
                c = G.MH(e.rawId),
                {
                  impact: u,
                  cardLayout: { outcome: h },
                  extra_properties: v
                } = e.toRawAlert(),
                f = n.M.getHighlightColor(
                  { outcome: l.DD.createOutcomeType(h), impact: u, extraProperties: v, patternName: e.patternName },
                  i
                ),
                E = this._lensState.view(y.nL.getActiveItem(o.O.getActiveItemWithAlert)).view(
                  (0, s.ls)(
                    U.filter((t) => t.activeAlert.id === e.id),
                    U.map((e) => e.activeHighlightIndex),
                    U.getOrElse(() => 0)
                  )
                ),
                k = (e) => (t, i) => {
                  const a = g.x.isEnclosingView(t),
                    s = e.getHighlightRanges().some(g.x.isEnclosingView),
                    o = g.x.isMainView(t),
                    l = g.x.isMainStartView(t),
                    c = e.getHighlightRanges(),
                    d =
                      (0, r.pipe)(
                        c,
                        H.cx((e) => e.start === t.start && e.end === t.end),
                        U.getOrElse(() => 0)
                      ) === E.get(),
                    u = m.bZ.isSuperAlert(e);
                  return n.M.getHighlightDisplayFormat({
                    isEnclosing: a,
                    isEnclosed: s,
                    isMain: o,
                    isMainStart: l,
                    isActive: d,
                    belongsToActiveAlert: i,
                    belongsToSuperAlert: u
                  });
                },
                _ = p.R.getSortOrder(e.lensType),
                A = new w.v(
                  (t) =>
                    (0, r.pipe)(
                      this._alertsReader.getById(e.id),
                      U.alt(() => (t && this._log.warn("Could not find alert for provided MarkAlert", { alert: e, source: t }), U.some(e))),
                      U.map(S.$.fromModel),
                      G.MH
                    ),
                  this._alertsService,
                  this._alertsService,
                  (e) => this._ded.changeMarks(e),
                  a.create(c, () => d.sO.Change.VisualState.Source.api, f, k(e), null, _),
                  a.update(c, () => J.getAlertSource(e, this._lensState.get(), this._getActiveItemWithAlert), f, k(e), null, _),
                  a.remove(c),
                  (t) => {
                    t.to.visualState === b.Bd.applied &&
                      (this.events.next({ type: C.ay.Type.AppliedAlertAnimationFinished, alert: e }),
                      this._handleRemovedAlerts([e]).forEach((e) => e.apply()));
                  }
                );
              return this._marksMap.set(e.id, A), A;
            }),
            (this._handleRemovedAlerts = (e) =>
              e.map(({ id: e }) => {
                const t = this._marksMap.get(e);
                return this._marksMap.delete(e), t.scheduleApply(b.Bd.disposed), t;
              })),
            (this._handleAlertUpdate = (e, t) =>
              e
                .map((e) =>
                  m.bZ.isRegistered(e) && !m.bZ.isMuted(e)
                    ? (0, r.pipe)(
                        U.fromNullable(this._marksMap.get(e.id)),
                        U.fold(
                          () => (this._alertsFilter.get()(e) ? this._createMA(e, t) : null),
                          (e) => (e.scheduleUpdate(), b.Oe.isOrWillBe(b.Bd.success)(e) && e.scheduleApply(b.Bd.highlighted), e)
                        )
                      )
                    : (0, r.pipe)(
                        U.fromNullable(this._marksMap.get(e.id)),
                        U.fold(
                          () => {},
                          (t) => (
                            e.allowUpdate && m.bZ.isCapiDone(e) && m.bZ.isRated(e) && b.Oe.isOrWillBe(b.Bd.highlighted)(t)
                              ? (t.scheduleUpdate(), t.scheduleApply(b.Bd.success))
                              : (t.scheduleApply(b.Bd.disposed), this._marksMap.delete(t.alert.id)),
                            t
                          )
                        )
                      )
                )
                .filter((e) => Boolean(e))),
            this._subs.push(
              this._readyObs.subscribe(() => {
                this._subs.push(
                  this._listenAlertsUpdates(),
                  this._listenRangesUpdates(),
                  this._listenFilterChange(),
                  this._listenFilteredAlerts()
                ),
                  (this._ready = !0);
              })
            );
        }
        getPlagiarismAlertsEditingTracker() {
          return (e) =>
            this._alertList.state.pipe(
              x.h(
                (0, s.ls)(
                  Z.v.iso.get,
                  (e) => e.latestChangeDiff,
                  V.v.filter(
                    s.jv,
                    (e, t) =>
                      t.alert.lensType === p.R.Type.Plagiarism &&
                      t.state.type === m.bZ.State.Type.REMOVED &&
                      (t.state.reason === m.bZ.State.Removed.Reason.capiDone || t.state.reason === m.bZ.State.Removed.Reason.textChange),
                    s.jv
                  ),
                  (0, O.ff)(V.v.isEmpty)
                )
              ),
              D.b(() => e())
            );
        }
        focusAlertHighlight(e) {
          return this._ready
            ? (0, r.pipe)(
                this._marksMap.get(e.alert.id),
                U.fromNullable,
                U.map((t) => {
                  (this._focusedAlert = U.some(e.alert.id)), t.scheduleApply(b.Bd.highlighted), t.scheduleForceUpdate(), t.apply();
                }),
                j.fromOption(() => new Error("Unknown alert")),
                j.map(() => ({
                  dispose: () => {
                    U.exists((t) => t === e.alert.id)(this._focusedAlert) && (this._highlightedAlert = U.none),
                      (0, r.pipe)(
                        this._marksMap.get(e.alert.id),
                        U.fromNullable,
                        U.filter(
                          () =>
                            !(0, r.pipe)(
                              this._highlightedAlert,
                              U.exists((t) => t === e.alert.id)
                            )
                        ),
                        U.map((e) => {
                          e.scheduleApply(b.Bd.visible), e.apply();
                        })
                      );
                  }
                }))
              )
            : j.left(new Error("marks view model is not ready yet"));
        }
        highlightAlertHighlight(e) {
          return this._ready
            ? (0, r.pipe)(
                this._marksMap.get(e.id),
                U.fromNullable,
                U.map((t) => {
                  (this._highlightedAlert = U.some(e.id)), t.scheduleApply(b.Bd.highlighted), t.apply();
                }),
                j.fromOption(() => new Error("Unknown alert")),
                j.map(() => ({
                  dispose: () => {
                    U.exists((t) => t === e.id)(this._highlightedAlert) && (this._highlightedAlert = U.none),
                      (0, r.pipe)(
                        this._marksMap.get(e.id),
                        U.fromNullable,
                        U.filter(
                          () =>
                            !(0, r.pipe)(
                              this._focusedAlert,
                              U.exists((t) => t === e.id)
                            )
                        ),
                        U.map((e) => {
                          e.scheduleApply(b.Bd.visible), e.apply();
                        })
                      );
                  }
                }))
              )
            : j.left(new Error("marks view model is not ready yet"));
        }
        moveCursorToHighlight(e, t) {
          return this._ready
            ? (0, r.pipe)(
                this._marksMap.get(e.alert.id),
                U.fromNullable,
                U.chain((t) => t.markByIndex(e.highlightIndex)),
                U.chain((e) => U.fromEither(e.range())),
                U.fold(
                  () => j.left(new Error("Cannot find mark for given range")),
                  (e) => {
                    const { index: i, length: a } = this._ded.getCursor();
                    if (0 === a && (i < e.start || i > e.end)) {
                      const i = Math.min(e[t], this._ded.getLastPossibleCursorPosition());
                      return (0, r.pipe)(this._ded.setCursor(i, 0), j.orElse(j.left));
                    }
                    return j.right(void 0);
                  }
                )
              )
            : j.left(new Error("marks view model is not ready yet"));
        }
        dispose() {
          this._subs.dispose();
        }
        _listenAlertsUpdates() {
          const e = (e) => ({ activeAlerts: [], updatedAlerts: [], removedAlerts: [], acceptedAlerts: [], hiddenMarkAlerts: [], ...e });
          return I.T(
            this._filteredAlerts.pipe(N.cp(({ visible: t, hidden: i }) => R.of(e({ activeAlerts: W.qo(t), removedAlerts: W.qo(i) })))),
            this._alertStateDiff.pipe(
              M.M(this._alertsFilter),
              k.U(([t, i]) =>
                (0, r.pipe)(
                  t,
                  V.v.reduce(
                    e({}),
                    (e, t) => (this._marksMap.has(t.alert.id) && e.removedAlerts.push(t.alert), e),
                    (e, t, i) => (m.bZ.isAccepted(i.alert) ? e.acceptedAlerts.push(i.alert) : e.updatedAlerts.push(i.alert), e),
                    (e, t) => (i(t.alert) && e.activeAlerts.push(t.alert), e)
                  )
                )
              )
            )
          )
            .pipe(
              M.M(this._showYellowUnderlines),
              k.U(([{ activeAlerts: e, removedAlerts: t, updatedAlerts: i, acceptedAlerts: a }, s]) => {
                let r = [];
                return (
                  (r = r.concat(
                    e
                      .filter(
                        (0, O.W9)(
                          (0, O.Kg)((e) => s && m.bZ.isPremium(e) && m.bZ.isHidden(e), (0, O.ff)(m.bZ.isPremium)),
                          (e) => U.isSome(e.rawId)
                        )
                      )
                      .map((e) => {
                        const t = this._marksMap.get(e.id);
                        return void 0 !== t ? (t.scheduleForceUpdate(), t) : this._createMA(e, s);
                      })
                  )),
                  this._emulateAppliedAlertAnimation &&
                    setTimeout(
                      () => {
                        a.forEach((e) => {
                          this.events.next({ type: C.ay.Type.AppliedAlertAnimationFinished, alert: e });
                        });
                      },
                      3 * (0, u.Xd)(20)
                    ),
                  (r = r.concat(this._handleRemovedAlerts(t.concat(a).filter((e) => this._marksMap.has(e.id))))),
                  (r = r.concat(this._handleAlertUpdate(i, s))),
                  r
                );
              })
            )
            .subscribe((e) => {
              if (e.length > 0) {
                const [t, ...i] = e;
                t.applyWith(i);
              }
            });
        }
        _listenRangesUpdates() {
          return this._positionManager.rangeChanged
            .pipe(
              B.j("changed"),
              k.U((e) => e.filter((e) => g.P.is(e) && g.x.isVisible(e) && this._marksMap.has(e.meta.alertId))),
              x.h((e) => e.length > 0)
            )
            .subscribe((e) => {
              const t = Array.from(e.values()).reduce(
                  (e, t) =>
                    (0, r.pipe)(
                      this._alertsReader.getById(t.meta.alertId),
                      U.chain((e) => this._alertsReader.getRegistered(e.id)),
                      U.chain((e) => U.fromNullable(this._marksMap.get(e.id))),
                      G.bw((t) => e.set(t.alert.id, t)),
                      (0, s.a9)(e)
                    ),
                  new Map()
                ),
                i = Array.from(t.values());
              if (
                (i.forEach((e) => {
                  e.scheduleForceUpdate();
                }),
                i.length > 0)
              ) {
                const [e, ...t] = i;
                e.applyWith(t);
              }
            });
        }
        _listenFilterChange() {
          return this._filterChanges.subscribe((e) => {
            f.wW(this._alertsFilter)(e);
          });
        }
        _listenFilteredAlerts() {
          return this._alertsFilter
            .pipe(
              M.M(this._alertList.state),
              k.U(([e, t]) =>
                (0, r.pipe)(
                  t,
                  h.p.reduce(
                    { visible: {}, hidden: {} },
                    (t, i) => (
                      e(i.alert) && m.bZ.isRegistered(i.alert) ? (t.visible[i.alert.id] = i.alert) : (t.hidden[i.alert.id] = i.alert), t
                    )
                  ),
                  (e) => U.some(e)
                )
              )
            )
            .subscribe(f.wW(this._filteredAlerts));
        }
      }
      var J;
      !(function (e) {
        (e.toSidebarFluidMarkSource = (e) => {
          switch (e) {
            case m.l$.text:
            case y.h8.forceText:
              return d.sO.Change.VisualState.Source.text;
            case m.l$.sidebar:
            case y.h8.forceSidebar:
              return d.sO.Change.VisualState.Source.sidebar;
            case m.l$.api:
              return d.sO.Change.VisualState.Source.api;
            default:
              return (0, z.vE)(e);
          }
        }),
          (e.getAlertSource = (t, i, a) =>
            y.nL.hasCards(i)
              ? (0, r.pipe)(
                  a(i.currentLens),
                  U.fold(
                    () => d.sO.Change.VisualState.Source.api,
                    (a) => (a.activeAlert.id === t.id ? e.toSidebarFluidMarkSource(i.alertSource) : d.sO.Change.VisualState.Source.api)
                  )
                )
              : d.sO.Change.VisualState.Source.api);
      })(J || (J = {}));
    },
    1050: (e, t, i) => {
      i.d(t, { o: () => F });
      var a = i(40327),
        s = i(8901),
        r = i(20641),
        n = i(73353),
        o = i(56305),
        l = i(83078),
        c = i(5114),
        d = i(55415),
        u = i(8125),
        p = i(44358);
      function m({ documentModel: e, features: t, gnar: i, modalOperations: m, upgradeVM: g, source: h }) {
        return (0, o.k)(
          e,
          (function (e, t, i) {
            return {
              goalsPopupShow: (t) => {
                e.goalsPopupShow(t),
                  (0, p.n)(e, {
                    placement: "goPremium",
                    bannerType: "setGoalsPopup",
                    upgradeHookName: "assistantGoals",
                    upgradeHookSlot: "gDocsSetGoalsPopup"
                  }),
                  (0, r.Tb)().upgradeHooks.showUpgradeHook("assistantGoals", "gDocsSetGoalsPopup");
              },
              getPremiumButtonClick: () => {
                (0, p.Q)(e, {
                  placement: "goPremium",
                  bannerType: "setGoalsPopup",
                  upgradeHookName: "assistantGoals",
                  upgradeHookSlot: "gDocsSetGoalsPopup"
                }),
                  (0, r.Tb)().upgradeHooks.clickUpgradeHook("assistantGoals", "gDocsSetGoalsPopup");
              },
              goalsFormSuccess: (s, r) => {
                const n = () => l.FX("academic")(s.domain) && t;
                return e.goalsFormSuccess(
                  (0, a.pipe)(
                    s.domain,
                    c.getOrElse(() => r.domain)
                  ),
                  (0, a.pipe)(
                    s.goals,
                    c.map((e) => (n() ? [] : e)),
                    c.getOrElse(() => r.goals),
                    (e) => Array.from(e)
                  ),
                  i,
                  (0, a.pipe)(s.outcomeContext, c.filter(n), c.map(d.ei("type")), c.toUndefined),
                  (0, a.pipe)(s.audience, c.filter((0, u.ff)(n)), c.toUndefined),
                  (0, a.pipe)(s.outcomeContext, c.filter(n), c.map(d.ei("citation")), c.toUndefined),
                  (0, a.pipe)(s.style, c.filter((0, u.ff)(n)), c.toUndefined)
                );
              }
            };
          })(i, t.isStudentsOFE, h),
          m,
          h,
          n.R$.defaultContextFallback,
          t,
          () => g.openUpgradeUrl(s.L.Place.gdocsGoals),
          !1
        );
      }
      var g = i(18625),
        h = i(98403),
        v = i(57091),
        f = i(66310),
        b = i(76974),
        w = i(13444),
        S = i(93508),
        y = i(48403),
        E = i(95343),
        C = i(12768),
        k = i(95195),
        _ = i(23239),
        A = i(81531);
      class I {
        constructor(e, t) {
          (this._documentModel = e),
            (this._modalOperations = t),
            (this.reportViewModel = c.none),
            (this.state = g
              .P(() => h.GQ(() => this._documentModel.calculateStats()))
              .pipe(
                v.a(this._documentModel.checkingState, (e, t) =>
                  (0, a.pipe)(
                    e,
                    c.filter(() => "idle" === t)
                  )
                ),
                f.w(
                  c.fold(
                    () => b.of({ type: C.g.State.Type.LOADING }).pipe(w.g(150)),
                    k.fold(
                      (e) => (
                        A.C8.Logging.getLogger("editor.toolbar").error("Error on requesting document stats", e),
                        this.onModalClose(),
                        b.of({ type: C.g.State.Type.ERROR })
                      ),
                      (e) =>
                        _.h.combine(
                          this._documentModel.score,
                          this._documentModel.counters,
                          this._documentModel.documentLength.view("trimmed"),
                          (t, i, s) =>
                            (0, a.pipe)(
                              t,
                              c.fold(
                                () => ({ type: C.g.State.Type.SHORT_CONTENT }),
                                (t) => ({ type: C.g.State.Type.READY, documentIsEmpty: 0 === s, score: t, counters: i, stats: e })
                              )
                            )
                        )
                    )
                  )
                ),
                S.O({ type: C.g.State.Type.EMPTY }),
                y._(1),
                E.x()
              )),
            (this.onModalClose = () => {
              this._modalOperations.onClose();
            });
        }
      }
      var x = i(81301),
        T = i(13863),
        M = i(87195),
        R = i(77176),
        P = i(22232),
        L = i(94895);
      class F {
        constructor(e, t, i, a, s = !1) {
          (this._documentModel = e), (this._upgradeViewModel = t), (this._isPremiumUser = i), (this._gnar = a), (this._isStudentsOFE = s);
        }
        load(e) {
          switch (e.type) {
            case x.dC.SetGoals:
              return this._loadSetGoals(e.source);
            case x.dC.Performance:
              return this._loadPerformance();
            default:
              return (0, P.vE)(e);
          }
        }
        _loadSetGoals(e) {
          return Promise.resolve((t) => {
            const i = m({
              features: { demoMode: !1, isRedesign: !1, isFree: !this._isPremiumUser, isStudentsOFE: this._isStudentsOFE },
              documentModel: this._documentModel,
              upgradeVM: this._upgradeViewModel,
              source: e,
              modalOperations: t,
              gnar: this._gnar
            });
            return { instance: { type: x.dC.SetGoals, source: e }, component: L.UI.mount(T.R.Modal, i) };
          });
        }
        _loadPerformance() {
          return Promise.resolve((e) => {
            const t = new I(this._documentModel, e),
              i = L.UI.Knot.make(M.q.ModalView, { downloadButton: L.UI.Node.empty }),
              a = L.Z.fromSideEffect(
                (t) => {
                  if (t.action.kind === M.q.ActionsKind.close) e.onClose();
                  else (0, P.vE)(t.action.kind);
                },
                t.state.pipe(R.U((e) => ({ root: e })))
              );
            return { instance: { type: x.dC.Performance }, component: L.UI.mount(i, a) };
          });
        }
      }
    },
    57882: (e, t, i) => {
      if ((i.d(t, { $: () => y }), 3075 == i.j)) var a = i(57050);
      if (3075 == i.j) var s = i(55563);
      if (3075 == i.j) var r = i(81301);
      if (3075 == i.j) var n = i(74660);
      if (3075 == i.j) var o = i(66896);
      if (3075 == i.j) var l = i(32952);
      if (3075 == i.j) var c = i(9922);
      if (3075 == i.j) var d = i(41398);
      if (3075 == i.j) var u = i(77176);
      if (3075 == i.j) var p = i(85985);
      if (3075 == i.j) var m = i(66310);
      if (3075 == i.j) var g = i(40151);
      if (3075 == i.j) var h = i(4890);
      if (3075 == i.j) var v = i(35416);
      if (3075 == i.j) var f = i(91605);
      if (3075 == i.j) var b = i(5114);
      if (3075 == i.j) var w = i(22232);
      if (3075 == i.j) var S = i(23239);
      class y {
        constructor(e, t, i, s, r, m, g, w) {
          (this._state = e),
            (this._lensPreviewVM = t),
            (this._sidebarEvents = i),
            (this._modalManager = s),
            (this._ded = r),
            (this._features = m),
            (this._gnar = g),
            (this._defaultLensMode = w),
            (this.isUphooksRedesign = !1),
            (this.popover = S.h.create(b.none)),
            (this.events = new l.xQ()),
            (this.activeLensId = this._state.view("currentLens", "id")),
            (this.documentActions = S.h.create({
              proofit: f.Bo.proofitDisabled(f.TV.NotAvailable),
              plagiarism: f.Bo.plagiarismDisabled(f.eh.NotAvailable),
              cheetah: f.Bo.cheetahDisabled(f.Sh.NotAvailable)
            })),
            (this.showMuteControl = S.h.create(!1)),
            (this._subs = new c.w.Keeper()),
            (this._lensSwitch = new l.xQ()),
            (this.lensMode = S.h.create(this._defaultLensMode)),
            (this.lensTitleType = "none" !== this._features.priorityLens.kind ? f.Bo.LensTitleType.priority : f.Bo.LensTitleType.default),
            (this.lensChangeEffect = {
              id: "lensChangeEffect",
              when: a.W8,
              what: v.nL.Effect.SwitchLens.create(
                this._lensSwitch.pipe(
                  d.M(this._state.pipe(u.U((e) => e.currentLens.id))),
                  p.h(([{ lensId: e }, t]) => e !== t),
                  u.U(([{ lensId: e, focusFirst: t }]) => ({
                    lensId: e,
                    alertSource: n.l$.sidebar,
                    options: { order: "lensOrder", toFocus: t ? v.nL.Effect.FocusBehavior.focusFirst : v.nL.Effect.FocusBehavior.noFocus }
                  }))
                )
              )
            }),
            (this.cardVisualMode = S.h.create(h.j.CardVisualMode.RegularLightMode)),
            this._listenNavigationEvent();
          const y = [o.R.SpecialId.Correctness, o.R.SpecialId.Clarity, o.R.SpecialId.Engagement, o.R.SpecialId.Delivery].reduce(
            (e, t) => ((e[t] = this._lensPreviewVM.lensPreviews[t]), e),
            {}
          );
          (this.lensPreviews = S.h.create(y)), (this.a11yContrast = !1);
        }
        dispose() {
          this._subs.dispose();
        }
        _listenNavigationEvent() {
          this._subs.push(
            this.events
              .pipe(
                m.w((e) => {
                  switch (e.type) {
                    case "toggleSidebar":
                      return this._sidebarEvents.next({ kind: s.R.Close }), g.E;
                    case "switchToLens":
                      if ("none" !== this._features.priorityLens.kind) {
                        const t = e.id === o.R.SpecialId.Priority ? "priority" : "all";
                        this._sidebarEvents.next({ kind: s.R.ChangeLens, selectedLens: t }),
                          this._lensSwitch.next({ lensId: e.id, focusFirst: e.focusFirst }),
                          this._gnar.gdocsSidebarChangeLensButtonClick(
                            t,
                            this._lensPreviewVM.getLens(o.R.SpecialId.AllAlerts).get().count,
                            this._ded.getTextLength(),
                            this._lensPreviewVM.getLens(o.R.SpecialId.Priority).get().count,
                            "dropdown" === this._features.priorityLens.kind ? "dropdown" : "priorityToggle"
                          );
                      } else this._gnar.gdocsSidebarOpenLensButtonClick(e.id);
                      return g.E;
                    case "setGoals":
                      return this._modalManager.show(r.Iy.setGoals("user"));
                    case "performance":
                      return this._modalManager.show(r.Iy.performance);
                    case "switchToCritical":
                    case "switchToAdvanced":
                    case "preferences":
                    case "switchToAll":
                      return g.E;
                    default:
                      return (0, w.vE)(e);
                  }
                })
              )
              .subscribe()
          );
        }
      }
    },
    72944: (e, t, i) => {
      if ((i.d(t, { W: () => n }), 3075 == i.j)) var a = i(83078);
      if (3075 == i.j) var s = i(5114);
      if (3075 == i.j) var r = i(23239);
      class n {
        constructor(e) {
          (this._plagiarismVM = e), (this.activeSidebarPage = r.h.create("Default")), (this.isShouldShowPlagiarismButton = r.h.create(!1));
        }
        showGeneralFeed() {
          return this.activeSidebarPage.view((e) => "Default" === e);
        }
        showPlagiarismPage() {
          return this.activeSidebarPage.view((e) => "Plagiarism" === e);
        }
        setActivePage(e) {
          this.activeSidebarPage.set(e);
        }
        openPlagiarismPage() {
          this.setActivePage("Plagiarism"), a.MH(this._plagiarismVM).openPlagiarismPage();
        }
        closePlagiarismPage() {
          this.setActivePage("Default"), a.MH(this._plagiarismVM).closePlagiarismPage();
        }
        setPlagiarismVM(e) {
          this._plagiarismVM = s.some(e);
        }
        setShowPlagiarismButton(e) {
          this.isShouldShowPlagiarismButton.set(e);
        }
        unsafeGetPlagiarismVM() {
          return a.MH(this._plagiarismVM);
        }
      }
    },
    53945: (e, t, i) => {
      if ((i.d(t, { r: () => p }), 3075 == i.j)) var a = i(6782);
      if (3075 == i.j) var s = i(74660);
      if (3075 == i.j) var r = i(4390);
      if (3075 == i.j) var n = i(14601);
      if (3075 == i.j) var o = i(2844);
      if (3075 == i.j) var l = i(77176);
      if (3075 == i.j) var c = i(28043);
      if (3075 == i.j) var d = i(5114);
      if (3075 == i.j) var u = i(23239);
      class p {
        constructor(e, t) {
          (this._alertsList = e),
            (this._lensState = t),
            (this._sub = new n.w()),
            (this._freeAlerts = u.h.create([])),
            (this.freeAlerts = this._freeAlerts.view((e) =>
              e.length > 0
                ? d.some({
                    count: e.length,
                    alerts: () =>
                      (function (e) {
                        return a.Q.group(e.map((e) => e.toLiteAlert()));
                      })(e)
                  })
                : d.none
            )),
            this._sub.add(
              o
                .aj([
                  this._lensState
                    .view("currentLens")
                    .view("id")
                    .view(() => (e) => s.bZ.isRegistered(e) && !s.bZ.isHidden(e) && !s.bZ.isPremium(e)),
                  this._alertsList.state
                ])
                .pipe(
                  l.U(([e, t]) => r.p.reduce([], (t, { alert: i }) => (e(i) && t.push(i), t))(t)),
                  c.x()
                )
                .subscribe((e) => {
                  this._freeAlerts.set(e);
                })
            );
        }
        dispose() {
          this._sub.unsubscribe();
        }
      }
    },
    73385: (e, t, i) => {
      i.d(t, { v: () => n });
      var a = i(57050),
        s = i(27378),
        r = i(89872);
      const n = ({ browser: e, className: t, title: i = "BETA", color: n = "blue" }) =>
        "safari" !== e
          ? s.createElement(r.C, { title: i, className: t, kind: "blue" === n ? "primary" : "green" === n ? "success" : (0, a.Rz)(n) })
          : null;
    },
    20330: (e, t, i) => {
      i.d(t, { l: () => d });
      var a = i(27378),
        s = i(5397),
        r = i(37522),
        n = i(6726),
        o = i(54001),
        l = i(71212),
        c = i.n(l);
      const d = ({ enableTooltip: e = !1, size: t = "medium", ...i }) =>
        a.createElement(
          n.u,
          { message: "Settings", showDelay: s.gk, disabled: !e },
          a.createElement(
            r.h,
            { ...i },
            a.createElement("div", {
              ...(0, o.Sh)("small" === t ? c().settingsButtonSmallIcon : null, "medium" === t ? c().settingsButtonMediumIcon : null)
            })
          )
        );
    },
    68610: (e, t, i) => {
      i.d(t, { J: () => d });
      var a = i(57050),
        s = i(27378),
        r = i(90845),
        n = i(60797),
        o = i(2834),
        l = i(54001),
        c = i(66206);
      const d = ({
        onChange: e,
        labelId: t,
        className: i,
        checkboxClassName: d,
        labelClassName: u,
        checked: p,
        children: m,
        disabled: g,
        useDS: h,
        dataGrammarlyPart: v = "ui-kit-checkbox",
        tabIndex: f = 0,
        onMount: b = a.Q1
      }) => {
        const [w, S] = s.useState(null != p && p);
        s.useEffect(() => {
          S(Boolean(p));
        }, [p]);
        const y = (t) => {
            t.preventDefault(), t.stopPropagation(), S(!w), null == e || e(!w);
          },
          { ref: E, onMount: C } = r.P.useElWatcher();
        return (
          s.useEffect(() => {
            const e = E.pipe(n.oA, o.b(b)).subscribe();
            return () => e.unsubscribe();
          }, []),
          s.createElement(
            "div",
            { "data-grammarly-part": v, ...(0, l.Sh)(c.checkboxContainer, i) },
            s.createElement(
              "div",
              {
                ...(0, l.Sh)(c.checkbox, d, w ? c.checkboxChecked : null, h ? c.checkboxDS : null),
                role: "checkbox",
                "aria-checked": w,
                tabIndex: f,
                "aria-labelledby": t,
                onKeyDown: (e) => {
                  " " === e.key && y(e);
                },
                onClick: g ? a.Q1 : y,
                ref: C
              },
              w ? s.createElement("div", { className: c.checkboxCheckmark }) : null
            ),
            s.createElement("label", { id: t, onClick: y, className: u }, m)
          )
        );
      };
    },
    8096: (e, t, i) => {
      i.d(t, { z: () => c });
      var a = i(27378),
        s = i(31542);
      const r = ({ children: e, style: t, dataGrammarlyPart: i = "ui-kit-iframe", ...r }) => {
        const [n, o] = a.useState(null),
          l = a.useCallback((e) => {
            var t, i;
            let a = null;
            "contentDocument" in e.target &&
              (a = null !== (i = null === (t = e.target.contentDocument) || void 0 === t ? void 0 : t.body) && void 0 !== i ? i : null),
              o(a),
              a && ((a.style.margin = "0"), (a.style.height = "100vh"), (a.style.overflowY = "hidden"));
          }, []);
        return a.createElement(
          "iframe",
          { ...r, style: { border: "none", ...t }, onLoad: l, srcDoc: "<html><body></body></html>", "data-grammarly-part": i },
          n && (0, s.createPortal)(e, n)
        );
      };
      var n = i(29927),
        o = i(35111),
        l = i.n(o);
      const c = ({ placeholder: e, onChange: t, ariaLabel: i, iframeTitle: s, className: o }) => {
        const [c, d] = a.useState("");
        return (
          a.useEffect(() => {
            t(c);
          }, [c]),
          a.createElement(
            r,
            { dataGrammarlyPart: "ui-kit-textbox", className: o, style: { width: "100%", height: "100%" }, title: s },
            a.createElement(n.b, null, l().__css),
            a.createElement("div", {
              role: "textbox",
              className: l().textBox,
              contentEditable: !0,
              onInput: (e) => d(e.target.innerText),
              "data-placeholder": e,
              "aria-placeholder": e,
              "aria-label": i
            })
          )
        );
      };
    },
    57226: (e, t, i) => {
      i.d(t, { d: () => s });
      var a = i(27378);
      const s = () =>
        a.createElement(
          "svg",
          { width: "11", height: "12", viewBox: "0 0 11 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          a.createElement("path", {
            d: "M4 1H2.5C1.39543 1 0.5 1.89543 0.5 3V9C0.5 10.1046 1.39543 11 2.5 11H8.5C9.60457 11 10.5 10.1046 10.5 9V7.5M5.5 6L10.5 1M10.5 1H6.5M10.5 1V5",
            stroke: "#4A6EE0",
            strokeLinecap: "round"
          })
        );
    },
    65515: (e, t, i) => {
      i.d(t, { Y: () => d });
      var a = i(27378),
        s = i(62369),
        r = i(93947),
        n = i(72889),
        o = i(54001),
        l = i(32502),
        c = i.n(l);
      const d = ({ onClick: e, dataGrammarlyPart: t = "unlock-premium-button", className: i }) =>
        a.createElement(
          s.z,
          { kind: "premium", onClick: e, dataGrammarlyPart: t, ...(0, o.Sh)(c().premiumButton, i) },
          a.createElement(r.J, { icon: n.O, variant: "premium", accessibilityLabel: "" }),
          a.createElement("span", null, "Unlock Premium")
        );
    },
    80860: (e, t, i) => {
      i.d(t, { Q: () => o });
      var a = i(27378),
        s = i(48015),
        r = i(78002);
      const n = (e) => {
          if (e.reason === r.rS.NO_FREE_TRIALS_LEFT) {
            const t = "No email reviews left this month";
            let i;
            if (e.meta.quotaResetDate) {
              const t = Intl.DateTimeFormat([], { month: "short", day: "numeric" }).format(new Date(Date.parse(e.meta.quotaResetDate)));
              i = `You will get ${r.SR} free reviews again next month (${t}). You can also use paid expert writing help in Grammarly's web editor anytime.`;
            } else
              i = `You will get ${r.SR} free reviews again next month. You can also use paid expert writing help in Grammarly's web editor anytime.`;
            return { title: t, message: i };
          }
          return e.reason === r.rS.NOT_ENOUGH_WORDS
            ? { message: `Your email must be at least ${r.fy} words (currently ${e.meta.wordsCount}).` }
            : e.reason === r.rS.TOO_MANY_WORDS
            ? { message: `Your email must be under ${r.Vw} words (currently ${e.meta.wordsCount}).` }
            : ((e) => {
                switch (e) {
                  case r.rS.NOT_AVAILABLE:
                    return { message: "Our experts are currently working on other text. Please try again later." };
                  case r.rS.NOT_AVAILABLE_QUOTA_ERROR:
                    return {
                      title: "Something went wrong",
                      message: "We couldn't determine how many requests you have left. Please try again later."
                    };
                  case r.rS.CONFLICTING_REQUEST:
                    return {
                      title: "Separate request in progress",
                      message: "You can submit this request once the experts are finished with the one you already submitted."
                    };
                  case r.rS.CHECKING_INITIAL_AVAILABILITY:
                    return { message: "Checking for available experts..." };
                  case r.rS.UNSUPPORTED_LANGUAGE:
                    return { message: "Our writing experts can only help with emails written in English." };
                  default:
                    (0, s.vE)(e);
                }
              })(e.reason);
        },
        o = ({ info: e, includeTitle: t }) => {
          const i = n(e);
          return a.createElement(
            a.Fragment,
            null,
            t
              ? a.createElement(
                  a.Fragment,
                  null,
                  i.title ? a.createElement("b", null, i.title) : a.createElement("b", null, "Get expert writing help"),
                  a.createElement("br", null)
                )
              : null,
            i.message
          );
        };
      o.defaultProps = { includeTitle: !1 };
    },
    60561: (e, t, i) => {
      i.d(t, { q: () => I });
      var a = i(27378),
        s = i(9205),
        r = i(54001),
        n = i(62369),
        o = i(13311);
      const l = ({ fixSubmitButtonOverflowBottomPadding: e, className: t, ...i }) =>
          a.createElement(
            a.Fragment,
            null,
            a.createElement(n.z, { ...i, className: null != t ? t : o.feedbackFormSubmitButton }, i.children),
            a.createElement(c, { isEnabled: e })
          ),
        c = (e) =>
          e.isEnabled
            ? a.createElement(
                "div",
                { className: o.feedbackFormSubmitButtonFixOverflowBottomPadding },
                a.createElement("div", { className: o.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
              )
            : null,
        d = (e) =>
          a.createElement(
            "div",
            {
              "data-grammarly-part": "surveys-feedback-form-thank-you",
              ...(0, r.Sh)(o.feedbackFormContainer, o.feedbackFormContainerAlignCenter)
            },
            a.createElement(
              "div",
              { className: o.feedbackFormSuccessMessageTextContainer },
              a.createElement("div", { className: o.feedbackFormSuccessMessageIcon }),
              a.createElement("div", { className: o.feedbackFormSuccessMessageTitle }, "Thank you!"),
              a.createElement("div", { className: o.feedbackFormSuccessMessageSubtitle }, "Your feedback helps us improve.")
            ),
            a.createElement(l, { type: "button", kind: "success", onClick: e.onClose }, "Done")
          );
      var u = i(8096),
        p = i(48015),
        m = i(25985);
      const g = ({ options: e, onChange: t = () => null, ariaLabel: i, className: s }) => {
        const n = [],
          [o, l] = a.useState(null);
        a.useEffect(() => {
          var i;
          null !== o && (null === (i = n[o]) || void 0 === i || i.focus()), t(null !== o ? e[o].value : null);
        }, [o]);
        const c = null !== o ? e[o] : null;
        return a.createElement(
          "div",
          { "data-grammarly-part": "ui-kit-radio-group", className: s },
          a.createElement(
            "div",
            {
              className: m.radioGroup,
              role: "radiogroup",
              "aria-label": i,
              onKeyDown: (t) => {
                if (" " !== t.key || c) {
                  if ("ArrowRight" === t.key || "ArrowDown" === t.key) {
                    t.preventDefault(), t.stopPropagation();
                    l(((o || 0) + 1) % e.length);
                  } else if ("ArrowLeft" === t.key || "ArrowUp" === t.key) {
                    t.preventDefault(), t.stopPropagation();
                    const i = (o || 0) - 1;
                    l(i < 0 ? e.length - 1 : i);
                  }
                } else t.preventDefault(), t.stopPropagation(), l(0);
              }
            },
            e.map((e, t) => {
              const i = (null == c ? void 0 : c.value) === e.value,
                s = 0 === t;
              return a.createElement(
                "div",
                {
                  key: e.value,
                  ...(0, r.Sh)(m.radioGroupOption, i ? m.radioGroupOptionSelected : null),
                  role: "radio",
                  tabIndex: i || (s && !c) ? 0 : -1,
                  "aria-checked": i,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), l(t);
                  },
                  ref: (e) => n.push(e)
                },
                e.render()
              );
            })
          )
        );
      };
      var h;
      !(function (e) {
        (e.bad = "bad"), (e.ok = "ok"), (e.good = "good");
      })(h || (h = {}));
      var v = i(73610);
      const f = (e) => {
        const t = [h.bad, h.ok, h.good];
        return e.isEnabled
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(g, {
                ariaLabel: "Feedback Score",
                options: t.map((e) => ({
                  value: e,
                  render: () =>
                    a.createElement(
                      "div",
                      { className: v.feedbackFormOption },
                      a.createElement("div", { ...(0, r.Sh)(v.feedbackFormOptionIcon, b(e)) }),
                      a.createElement(
                        "div",
                        null,
                        (function (e) {
                          switch (e) {
                            case h.bad:
                              return "I dislike it";
                            case h.ok:
                              return "It’s OK";
                            case h.good:
                              return "I like it";
                            default:
                              (0, p.vE)(e);
                          }
                        })(e)
                      )
                    )
                })),
                onChange: e.onChange,
                ...(0, r.Sh)(o.feedbackFormScore, e.compactDisplay && o.compact)
              }),
              !e.hideTextBoxTitle && a.createElement("div", { className: o.feedbackFormTextBoxTitle }, "Anything we can improve?")
            )
          : null;
      };
      function b(e) {
        switch (e) {
          case h.bad:
            return v.feedbackFormOptionIconDisheartening;
          case h.ok:
            return v.feedbackFormOptionIconNeutral;
          case h.good:
            return v.feedbackFormOptionIconSmiling;
          default:
            (0, p.vE)(e);
        }
      }
      const w = (e) => (e.isEnabled ? a.createElement("div", { className: o.feedbackFormLogo }) : null),
        S = (e) => {
          var t;
          if (!e.isEnabled) return null;
          const i =
            null !== (t = e.title) && void 0 !== t
              ? t
              : a.createElement("span", null, "How do you like ", a.createElement("br", null), " Grammarly?");
          return a.createElement("h3", { ...(0, r.Sh)(o.feedbackFormTitle, e.isCompact && o.compact) }, i);
        };
      var y = i(68610);
      const E = (e) =>
          e.domain
            ? a.createElement(
                a.Fragment,
                null,
                e.withHelpText &&
                  a.createElement(
                    "div",
                    { className: o.feedbackFormShareDomainTitle },
                    "Help improve Grammarly by sharing the domain you’re on:"
                  ),
                a.createElement(
                  y.J,
                  { labelId: "feedback-form-share-domain-checkbox", onChange: e.onChange, className: o.feedbackFormShareDomainCheckbox },
                  "Include the domain ",
                  a.createElement("b", null, e.domain),
                  " with my feedback"
                )
              )
            : null,
        C = (e) => {
          var t, i, s;
          const [n, c] = a.useState(null),
            [d, p] = a.useState(""),
            [m, g] = a.useState(!1);
          return a.createElement(
            "form",
            {
              "data-grammarly-part": "surveys-feedback-form-fields",
              ...(0, r.Sh)(o.feedbackFormContainer, "center" === e.align && o.feedbackFormContainerAlignCenter)
            },
            a.createElement(
              "div",
              { className: o.feedbackFormFields },
              a.createElement(w, { isEnabled: !e.hideLogo }),
              a.createElement(S, {
                isEnabled: !e.hideTitle,
                title: e.title,
                isCompact: null !== (t = e.compactDisplay) && void 0 !== t && t
              }),
              a.createElement(f, {
                isEnabled: e.withScore,
                compactDisplay: e.compactDisplay,
                hideTextBoxTitle: e.hideTextBoxTitle,
                onChange: c
              }),
              a.createElement(u.z, {
                onChange: p,
                placeholder: null !== (i = e.placeholderText) && void 0 !== i ? i : "Your thoughts here",
                ariaLabel: "Feedback Text",
                iframeTitle: "Feedback text field",
                ...(0, r.Sh)(o.feedbackFormTextBox, e.compactDisplay && o.compact)
              }),
              a.createElement(E, { domain: e.domain, withHelpText: !e.hideDomainHelpText, onChange: g })
            ),
            a.createElement(
              l,
              {
                type: "submit",
                kind: null !== (s = e.submitButtonKind) && void 0 !== s ? s : "success",
                disabled: e.withScore ? !n : !d,
                fixSubmitButtonOverflowBottomPadding: e.fixSubmitButtonOverflowBottomPadding,
                onClick: (t) => {
                  t.preventDefault();
                  const i = m ? e.domain : void 0;
                  e.withScore && n ? e.onSubmit({ score: n, text: d, domain: i }) : !e.withScore && d && e.onSubmit({ text: d, domain: i });
                }
              },
              "Submit"
            )
          );
        };
      var k = i(86061);
      const _ = ({
          hideLogo: e = !1,
          align: t = "center",
          fixSubmitButtonOverflowBottomPadding: i = !1,
          showPostSubmitScreen: s = !0,
          ...r
        }) => {
          const [n, o] = a.useState(!1),
            l = n && s;
          return a.createElement(
            "div",
            {
              style: r.style,
              "data-grammarly-part": "surveys-feedback-form",
              role: "region",
              "aria-label": "Provide feedback",
              "aria-live": "polite"
            },
            l
              ? a.createElement(d, { fixSubmitButtonOverflowBottomPadding: i, onClose: r.onClose })
              : a.createElement(C, {
                  ...r,
                  hideLogo: e,
                  align: t,
                  fixSubmitButtonOverflowBottomPadding: i,
                  onSubmit: (e) => {
                    r.withScore ? ((0, k.n8)(e), r.onSubmit(e)) : ((0, k.TY)(e), r.onSubmit(e)), o(!0);
                  }
                })
          );
        },
        A = ({ hideLogo: e = !1, align: t = "center", fixSubmitButtonOverflowBottomPadding: i = !1, ...s }) => {
          var l;
          const c = [h.bad, h.ok, h.good],
            [d, p] = a.useState(null),
            [m, f] = a.useState(""),
            [b, w] = a.useState(!1),
            [S, E] = a.useState(!1);
          let C;
          return (
            (C =
              S && !1 !== s.showPostSubmitScreen
                ? a.createElement(
                    "div",
                    {
                      "data-grammarly-part": "surveys-feedback-form-thank-you",
                      ...(0, r.Sh)(o.feedbackFormContainer, o.feedbackFormContainerAlignCenter)
                    },
                    a.createElement(
                      "div",
                      { className: o.feedbackFormSuccessMessageTextContainer },
                      a.createElement("div", { className: o.feedbackFormSuccessMessageIcon }),
                      a.createElement("div", { className: o.feedbackFormSuccessMessageTitle }, "Thank you!"),
                      a.createElement("div", { className: o.feedbackFormSuccessMessageSubtitle }, "Your feedback helps us improve.")
                    ),
                    a.createElement(
                      n.z,
                      { className: o.feedbackFormSubmitButton, kind: "success", type: "submit", onClick: s.onClose },
                      "Done"
                    ),
                    i
                      ? a.createElement(
                          "div",
                          { className: o.feedbackFormSubmitButtonFixOverflowBottomPadding },
                          a.createElement("div", { className: o.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
                        )
                      : null
                  )
                : a.createElement(
                    "div",
                    {
                      "data-grammarly-part": "surveys-feedback-form-fields",
                      ...(0, r.Sh)(o.feedbackFormContainer, "center" === t ? o.feedbackFormContainerAlignCenter : null)
                    },
                    a.createElement(
                      "div",
                      { className: o.feedbackFormFields },
                      e ? null : a.createElement("div", { className: o.feedbackFormLogo }),
                      s.hideTitle
                        ? null
                        : a.createElement(
                            "div",
                            { ...(0, r.Sh)(o.feedbackFormTitle, s.compactDisplay ? o.compact : null) },
                            s.title || a.createElement("span", null, "How do you like ", a.createElement("br", null), " Grammarly?")
                          ),
                      s.withScore
                        ? a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(g, {
                              ariaLabel: "Feedback Score",
                              options: c.map((e) => ({
                                value: e,
                                render() {
                                  let t, i;
                                  return (
                                    e === h.bad
                                      ? ((t = v.feedbackFormOptionIconDisheartening), (i = "I dislike it"))
                                      : e === h.ok
                                      ? ((t = v.feedbackFormOptionIconNeutral), (i = "It’s OK"))
                                      : ((t = t = v.feedbackFormOptionIconSmiling), (i = "I like it")),
                                    a.createElement(
                                      "div",
                                      { className: v.feedbackFormOption },
                                      a.createElement("div", { ...(0, r.Sh)(v.feedbackFormOptionIcon, t) }),
                                      a.createElement("div", null, i)
                                    )
                                  );
                                }
                              })),
                              onChange: p,
                              ...(0, r.Sh)(o.feedbackFormScore, s.compactDisplay ? o.compact : null)
                            }),
                            s.hideTextBoxTitle
                              ? null
                              : a.createElement("div", { className: o.feedbackFormTextBoxTitle }, "Anything we can improve?")
                          )
                        : null,
                      a.createElement(u.z, {
                        onChange: f,
                        placeholder: s.placeholderText || "Your thoughts here",
                        ariaLabel: "Feedback Text",
                        ...(0, r.Sh)(o.feedbackFormTextBox, s.compactDisplay ? o.compact : null)
                      }),
                      s.domain
                        ? a.createElement(
                            a.Fragment,
                            null,
                            s.hideDomainHelpText
                              ? null
                              : a.createElement(
                                  "div",
                                  { className: o.feedbackFormShareDomainTitle },
                                  "Help improve Grammarly by sharing the domain you’re on:"
                                ),
                            a.createElement(
                              y.J,
                              { labelId: "feedback-form-share-domain-checkbox", onChange: w, className: o.feedbackFormShareDomainCheckbox },
                              "Include the domain ",
                              a.createElement("b", null, s.domain),
                              " with my feedback"
                            )
                          )
                        : null
                    ),
                    a.createElement(
                      n.z,
                      {
                        className: o.feedbackFormSubmitButton,
                        kind: null !== (l = s.submitButtonKind) && void 0 !== l ? l : "success",
                        type: "submit",
                        disabled: s.withScore ? !d : !m,
                        onClick: () => {
                          var e, t;
                          s.withScore && d
                            ? (null === (e = s.onSubmit) || void 0 === e || e.call(s, { score: d, text: m, domain: b ? s.domain : void 0 }),
                              E(!0))
                            : !s.withScore &&
                              m &&
                              (null === (t = s.onSubmit) || void 0 === t || t.call(s, { text: m, domain: b ? s.domain : void 0 }), E(!0));
                        }
                      },
                      "Submit"
                    ),
                    i
                      ? a.createElement(
                          "div",
                          { className: o.feedbackFormSubmitButtonFixOverflowBottomPadding },
                          a.createElement("div", { className: o.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
                        )
                      : null
                  )),
            a.createElement(
              "div",
              { style: s.style, "data-grammarly-part": "surveys-feedback-form", role: "region", "aria-label": "Provide feedback" },
              C
            )
          );
        },
        I = ({ experimentClient: e, ...t }) =>
          e.isGateEnabled(s.K.ExtensionA11yKeyboardNavigation) ? a.createElement(_, { ...t }) : a.createElement(A, { ...t });
    },
    86061: (e, t, i) => {
      function a(e) {
        return "score" in e;
      }
      function s(e) {
        if (!a(e)) throw new Error("Received unexpected feedback form data without score");
      }
      function r(e) {
        if (a(e)) throw new Error("Received unexpected feedback form data with score");
      }
      i.d(t, { TY: () => r, dK: () => a, n8: () => s });
    },
    63260: (e, t, i) => {
      i.d(t, { R: () => d });
      var a = i(27378),
        s = i(17579),
        r = i(64757),
        n = i(6726),
        o = i(93265),
        l = i(10926),
        c = i(80394);
      const d = ({ lock: e = { message: "", isLocked: !1 }, dialect: t }) =>
        a.createElement(
          "div",
          { className: c.label },
          e.isLocked &&
            a.createElement(
              n.u,
              { message: e.message },
              a.createElement("div", { className: c.lockIconWrapper }, a.createElement(s.N, null))
            ),
          a.createElement(
            r.zx.White,
            { name: "dialect.box", style: { padding: "0" }, disabled: e.isLocked },
            a.createElement(
              "div",
              { className: `${c.selected} ${e.isLocked ? c.disabled : ""}` },
              a.createElement(l.G, { dialect: t, className: c.option }),
              a.createElement(o.pL, null)
            )
          )
        );
    },
    10926: (e, t, i) => {
      i.d(t, { G: () => l });
      var a = i(27378),
        s = i(93265),
        r = i(65479),
        n = i(18208);
      const o = {
          american: a.createElement(s.UE, null),
          australian: a.createElement(s.aE, null),
          british: a.createElement(s.M8, null),
          canadian: a.createElement(s._P, null),
          indian: a.createElement(s.kj, null)
        },
        l = ({ dialect: e, className: t }) =>
          a.createElement(
            a.Fragment,
            null,
            o[e],
            a.createElement(
              "span",
              { "data-test-attr": `dialect_${e}`, className: `${r.option} ${null != t ? t : ""}` },
              n.kC(e) + " English"
            )
          );
    },
    98427: (e, t, i) => {
      i.d(t, { X: () => c });
      var a = i(27378),
        s = i(64757),
        r = i(18813),
        n = i(63260),
        o = i(44103),
        l = i(10926);
      class c extends a.Component {
        render() {
          var e;
          const t = this.props.dropdownOnTop
            ? { customPosition: { top: `-${32 * (this.props.dialects.length - 1) + 4}px`, left: "0" }, vAlign: "top" }
            : { customPosition: { top: "36px", left: "0" } };
          return (null === (e = this.props.lock) || void 0 === e ? void 0 : e.isLocked)
            ? a.createElement(n.R, { lock: this.props.lock, dialect: this.props.dialect })
            : a.createElement(
                r.L,
                {
                  ...t,
                  showDelay: 0,
                  closeDelay: 150,
                  appearanceBehavior: "mouseClick",
                  name: "dialect",
                  label: a.createElement(n.R, { dialect: this.props.dialect })
                },
                this.props.dialects
                  .filter((e) => e !== this.props.dialect)
                  .map((e) =>
                    a.createElement(
                      s.zx.Flat,
                      { name: e, key: e, onClick: (t) => (null == t ? void 0 : t.isTrusted) && this.props.onSetDialect(e) },
                      a.createElement("div", { className: o.option }, a.createElement(l.G, { className: o.label, dialect: e }))
                    )
                  )
              );
        }
      }
    },
    93265: (e, t, i) => {
      i.d(t, { M8: () => l, UE: () => n, _P: () => c, aE: () => o, kj: () => d, pL: () => r });
      var a = i(27378),
        s = i(34917);
      const r = () =>
          a.createElement(
            "svg",
            { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            a.createElement("path", { d: "M13.9207 15L15.5 17.2562L17.0793 15H13.9207Z", stroke: "#6D758D", strokeWidth: "2" })
          ),
        n = () => a.createElement("div", { className: s.american, role: "presentation" }),
        o = () => a.createElement("div", { className: s.australian, role: "presentation" }),
        l = () => a.createElement("div", { className: s.british, role: "presentation" }),
        c = () => a.createElement("div", { className: s.canadian, role: "presentation" }),
        d = () => a.createElement("div", { className: s.indian, role: "presentation" });
    },
    34601: (e, t, i) => {
      i.d(t, { w: () => o });
      var a = i(27378),
        s = i(48015),
        r = i(6726),
        n = i(50945);
      const o = ({ children: e, blocked: t, wrapperClassName: i, disabledText: o = "Sign in to use this feature" }) =>
        t
          ? a.createElement(
              r.u,
              { message: o, position: "top" },
              a.createElement(
                "div",
                { className: i },
                a.createElement("div", { className: n.hover_blocker, onClick: s.EI, onDoubleClick: s.EI }, e)
              )
            )
          : a.createElement(a.Fragment, null, e);
    },
    9234: (e, t, i) => {
      i.d(t, { C: () => c });
      var a = i(27378),
        s = i(48015),
        r = i(98716),
        n = i(34601),
        o = i(56913),
        l = i(54001);
      class c extends a.Component {
        constructor() {
          super(...arguments),
            (this.handleChange = (e) => {
              (this.props.skipTrustedCheck || e.isTrusted) && this.props.onChange(e);
            });
        }
        render() {
          return a.createElement(
            "div",
            { ...(0, l.Sh)(this.props.extraClassName, r.setting_item, this.props.disabled && r.disabled) },
            a.createElement(
              "label",
              {
                ...(0, l.Sh)(
                  r.select_checkbox,
                  this.props.centered && r.centered,
                  this.props.isKeyboardAccessible && r.keyboard_accessible
                ),
                "data-grammarly-part": this.props.dataGrammarlyPart
              },
              a.createElement(
                "div",
                { className: r.select_children },
                this.props.children,
                this.props.beta && a.createElement("span", { className: (0, o.G6)() ? r.new : r.beta }),
                this.props.alpha && a.createElement("span", { className: (0, o.G6)() ? r.new : r.alpha }),
                this.props.new && a.createElement("span", { className: r.new })
              ),
              a.createElement(n.w, {
                wrapperClassName: r.checkbox_control_wrapper,
                blocked: this.props.disabled,
                disabledText: this.props.disabledText
              }),
              a.createElement("input", {
                className: r.checkbox,
                onChange: this.props.disabled ? s.EI : this.handleChange,
                checked: this.props.checked,
                type: "checkbox"
              }),
              a.createElement(
                "div",
                { ...(0, l.Sh)(r.checkbox_check, this.props.grayOut && r.grayOut, this.props.checked ? r.on : r.off) },
                a.createElement("div", { ...(0, l.Sh)(r.on_off) }, this.props.checked ? "ON" : "OFF"),
                a.createElement("div", { className: r.checkbox_check_round })
              )
            )
          );
        }
      }
    },
    88326: (e, t, i) => {
      i.d(t, { W: () => l });
      var a = i(20641),
        s = i(27378),
        r = i(49405),
        n = i(9234),
        o = i(11250);
      class l extends s.Component {
        constructor() {
          super(...arguments),
            (this.onEnableDefsClick = (e) => {
              const { toggleDefs: t } = this.props,
                i = e.target.checked;
              t(i), o.J.definitionToggleClick(i ? "on" : "off"), (0, a.Tb)().toggleExtensionDefs(i);
            });
        }
        render() {
          const { enabledDefs: e, disabled: t } = this.props;
          return s.createElement(
            n.C,
            {
              onChange: this.onEnableDefsClick,
              checked: e,
              extraClassName: r.def_switcher,
              dataGrammarlyPart: "definitionAndSynonymsSwitcher",
              disabled: t,
              skipTrustedCheck: this.props.skipTrustedCheck
            },
            "Show definitions and synonyms ",
            s.createElement("br", null),
            "via double clicks (all sites)"
          );
        }
      }
    },
    24627: (e, t, i) => {
      i.d(t, { m: () => c });
      var a = i(27378),
        s = i(17347),
        r = i(98427),
        n = i(34601),
        o = i(54001),
        l = i(11250);
      class c extends a.Component {
        constructor() {
          super(...arguments),
            (this.setDialect = (e) => {
              const { changeStrongDialect: t, dialectWeak: i } = this.props;
              t(e);
              const a = e + "English";
              l.J.languageSettingUpdate(a, "user", i && e === i);
            });
        }
        render() {
          const e = this.props.dialectStrong || this.props.dialectWeak || "american";
          return a.createElement(
            "div",
            { ...(0, o.Sh)(s.line, this.props.disabled && s.disabled) },
            a.createElement("div", null, "I write in"),
            a.createElement(
              n.w,
              { blocked: this.props.disabled },
              a.createElement(
                "div",
                { className: s.dialectPicker },
                a.createElement(r.X, {
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
    61363: (e, t, i) => {
      i.d(t, { Z: () => c });
      var a = i(20641),
        s = i(27378),
        r = i(65287),
        n = i(62369),
        o = i(56913),
        l = i(54001);
      const c = ({ showTitle: e, showBackground: t, openGBLanding: i }) =>
        s.createElement(
          "div",
          { ...(0, l.Sh)(r.container, t ? r.containerWithBackground : null) },
          s.createElement(
            "div",
            { className: r.content },
            e && s.createElement("div", { className: r.title }, "Grammarly for your team"),
            s.createElement("div", null, "Help your team make your business look great with top-notch writing."),
            s.createElement(
              n.z,
              {
                size: "medium",
                onClick: () => {
                  i((0, o.Um)().businessHomepage), (0, a.Tb)().gGbUpHookClick();
                },
                className: r.button
              },
              "Explore Grammarly Business"
            )
          )
        );
    },
    3736: (e, t, i) => {
      i.d(t, { a: () => B });
      var a = i(42356),
        s = i(27378),
        r = i(49405),
        n = i(9264),
        o = i(9172),
        l = i(82828),
        c = i(62369),
        d = i(73385),
        u = i(57226),
        p = i(19374),
        m = i(9234),
        g = i(61363),
        h = i(21928),
        v = i(56913),
        f = i(6294),
        b = i(20641),
        w = i(51129),
        S = i(75463),
        y = i(11250),
        E = i(88326),
        C = i(24627),
        k = i(49475),
        _ = i(34455);
      const A = (e) =>
          s.createElement(
            m.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: r.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            e.isAutoApplySupported ? "Correct text automatically" : "Correct spelling automatically"
          ),
        I = (e) =>
          s.createElement(
            m.C,
            {
              checked: !e.enabled,
              extraClassName: r.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible,
              onChange: (t) => {
                e.toggle(!t.target.checked);
              },
              dataGrammarlyPart: "disableDesktopIntegrationToggle"
            },
            s.createElement("div", { className: r.llamaTitle }, "Check text with browser extension"),
            e.enabled &&
              s.createElement(
                "div",
                { className: r.llamaDescription },
                "Grammarly's browser extension was deactivated since you're using Grammarly's desktop application."
              )
          ),
        x = (e) =>
          s.createElement(
            m.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              beta: !0,
              checked: e.enabled,
              extraClassName: r.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show phrasal predictions"
          ),
        T = (e) =>
          s.createElement(
            m.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: r.def_switcher,
              dataGrammarlyPart: "settings-toggle-show-emoji-for-detected-tones",
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show emoji for detected tones"
          ),
        M = (e) =>
          s.createElement(
            "div",
            { className: r.cheetahLabelAndButton },
            s.createElement("div", { className: r.cheetahLabel }, s.createElement("b", null, "GrammarlyGO")),
            s.createElement(
              c.z,
              {
                className: r.cheetahManageButton,
                kind: "transparent",
                dataGrammarlyPart: "cheetahManageBtn",
                onClick: () => {
                  e.manageButtonClick();
                }
              },
              s.createElement("span", null, "Manage")
            )
          ),
        R = (e) =>
          s.createElement(
            m.C,
            {
              disabled: e.disabled,
              grayOut: e.disabled,
              disabledText: "",
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: r.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            e.label
          ),
        P = (e) =>
          s.createElement(
            m.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: r.def_switcher,
              dataGrammarlyPart: "settings-toggle-include-serengeti-context",
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Use organizational context in",
            " ",
            s.createElement(
              "span",
              { className: r.nobr },
              "GrammarlyGO ",
              s.createElement(d.v, { browser: (0, v.qs)(), color: "green", title: "internal" })
            )
          ),
        L = (e) =>
          s.createElement(
            m.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              checked: e.enabled,
              extraClassName: r.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show Knowledge Share"
          ),
        F = (e) =>
          s.createElement(
            m.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              beta: !0,
              checked: e.enabled,
              extraClassName: r.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show Grammarly Guard"
          ),
        D = (e) =>
          s.createElement(
            m.C,
            {
              onChange: (t) => {
                e.toggle(t.target.checked);
              },
              new: !0,
              checked: e.enabled,
              extraClassName: r.def_switcher,
              isKeyboardAccessible: e.isKeyboardAccessible
            },
            "Show “Get citation” button on ",
            s.createElement("br", null),
            e.domain
          ),
        N = ({ showReportBugButton: e, ...t }) =>
          s.createElement(
            "div",
            { "data-grammarly-part": "debugMenu" },
            s.createElement("div", { className: _.separator }),
            s.createElement(
              "div",
              { className: _.debugMenu },
              s.createElement(
                "div",
                { className: _.heading },
                s.createElement("div", null, "Debug Menu"),
                t.showHideButton &&
                  s.createElement(
                    c.z,
                    {
                      dataGrammarlyPart: "debugMenuHideBtn",
                      kind: "transparent",
                      onClick: () => {
                        (0, p.E)().bgRpc.api.toggleDebugMenu(!1);
                      }
                    },
                    s.createElement("span", null, "Hide")
                  )
              ),
              s.createElement(
                m.C,
                {
                  onChange: (e) => {
                    e.target.checked ? (0, p.E)().bgRpc.api.enableHistoryLoggerUntil(-1) : (0, p.E)().bgRpc.api.disableHistoryLogger();
                  },
                  dataGrammarlyPart: "debugMenuLoggingToggle",
                  checked: t.isEnabled,
                  extraClassName: r.def_switcher,
                  isKeyboardAccessible: t.isKeyboardAccessible
                },
                "Logging"
              ),
              s.createElement("div", { className: _.separator }),
              s.createElement(
                m.C,
                {
                  onChange: (e) => {
                    e.target.checked
                      ? (0, p.E)().bgRpc.api.enableAdvancedHistoryLoggerUntil(Date.now() + 36e5)
                      : (0, p.E)().bgRpc.api.disableAdvancedHistoryLogger();
                  },
                  dataGrammarlyPart: "debugMenuAdvanceLoggingToggle",
                  checked: t.isAdvancedEnabled,
                  extraClassName: r.def_switcher,
                  disabled: !t.isEnabled,
                  disabledText: "Enable logging first",
                  isKeyboardAccessible: t.isKeyboardAccessible
                },
                "Advanced Logging",
                " ",
                t.isAdvancedEnabled &&
                  t.advancedHistoryLoggerEnabledUntil &&
                  s.createElement(
                    "span",
                    { className: _.timer },
                    Math.ceil((t.advancedHistoryLoggerEnabledUntil - Date.now()) / 6e4),
                    " mins left"
                  )
              ),
              s.createElement("div", { className: _.separator }),
              s.createElement(
                "div",
                { className: _.heading },
                s.createElement(
                  c.z,
                  {
                    className: _.downloadBtn,
                    kind: "transparent",
                    disabled: !t.isEnabled,
                    onClick: t.downloadDebugReports,
                    dataGrammarlyPart: "debugMenuDownloadLogBtn"
                  },
                  s.createElement("span", null, "Download Logs")
                ),
                !0 === e.enabled
                  ? s.createElement(
                      c.z,
                      {
                        className: _.downloadBtn,
                        kind: "transparent",
                        dataGrammarlyPart: "debugMenuReportBugBtn",
                        onClick: () => {
                          e.onClick();
                        }
                      },
                      s.createElement("span", null, "Report a bug")
                    )
                  : null
              )
            )
          ),
        B = (e) => {
          var t, i, r, d, p, m, B, V, H, O, U, j, G, W, z, q, K, Z, X, Y, Q;
          const {
            actions: J,
            activeTab: $,
            config: ee,
            settings: te,
            dapi: ie,
            user: ae,
            siteCategory: se,
            openGBLanding: re,
            showGBUpHook: ne,
            placement: oe,
            dynamicConfig: le,
            enableRenderingHack: ce = !1,
            showCitationBuilderToggle: de = !0,
            citationBuilderSessionId: ue,
            isCitationBuilderManualInvocationEnabled: pe = !1,
            isKnowledgeHubSupported: me = !1,
            isPiiDetectionSupported: ge = !1,
            isIndianEnglishDialectSupported: he = !1,
            isCheetahSupported: ve = !1,
            showSerengetiFeatureToggle: fe = !1,
            isReportBugFeatureAllowed: be,
            isAutoApplySupported: we = !1,
            className: Se,
            downloadDebugReports: ye
          } = e;
          ce &&
            s.useEffect(() => {
              (0, v.CB)() &&
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
          const { premium: Ee, experiments: Ce, anonymous: ke } = ae,
            _e = w.n5.isGrammarlyEmployee(ae) && be,
            Ae = ne && Ee && !w.n5.doesUserBelongToInstitution(ae),
            { dialectSettings: Ie } = te,
            xe = (null == Ie ? void 0 : Ie.dialect) || ie.dialectStrong,
            Te = ["british", "american", "australian", "canadian", ...(he ? ["indian"] : [])],
            Me = e.siteSwitcherChecked || {
              checked: !!te.enabled,
              update: (t) => {
                const { siteCategory: i } = e;
                J.toggleSite(t, ee.domain),
                  y.J.checkingToggleClick("toolbar", i, t ? "on" : "off"),
                  (0, b.Tb)().toggleExtension(t, "toolbar", (0, S.FN)(ee.domain));
              }
            },
            Re = s.useCallback(
              (e) => {
                const t = $ && new URL($.url).pathname;
                J.toggleCitationBuilderForDomain({
                  domain: ee.domain,
                  enabled: e,
                  pathName: t,
                  inAllowList: $ && (0, o.eC)(new URL($.url), le)
                }),
                  e || y.J.citePopupButtonDisable(ee.domain, "permanent", ue || "", "toolbar", pe && !0 === (0, o.gO)(ee.domain, te));
              },
              [null == $ ? void 0 : $.url, ee.domain, ue]
            );
          return s.createElement(
            "div",
            { className: (0, a.cs)(_.settingsContent, Se), "data-grammarly-part": "settings" },
            s.createElement(
              "div",
              { className: _.heading },
              s.createElement("div", null, "Quick Settings"),
              s.createElement(
                c.z,
                {
                  kind: "link",
                  onClick: () => {
                    e.openUrl((0, v.Um)().allSettings), y.J.allSettingsButtonClick(oe);
                  }
                },
                s.createElement(
                  "div",
                  { className: _.allSettings },
                  s.createElement("span", null, "All Settings"),
                  s.createElement(u.d, null)
                )
              )
            ),
            l.q.showSettingPopupToggle(ie, te, le, null == $ ? void 0 : $.url) &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(I, {
                  toggle: (e) => {
                    J.setDesktopIntegration(e), y.J.desktopIntegrationToggleClick(e ? "on" : "off");
                  },
                  enabled: te.isDesktopIntegrationEnabled,
                  isKeyboardAccessible: e.isKeyboardAccessible
                }),
                s.createElement("div", { className: _.separator })
              ),
            s.createElement(k.w, {
              domain: ee.domain,
              enabledInConfig: null !== (t = ee.enabled) && void 0 !== t && t,
              siteSwitcherChecked: Me,
              favicon: null == $ ? void 0 : $.favIconUrl,
              siteCategory: se,
              experiments: Ce
            }),
            s.createElement("div", { className: _.separator }),
            ve &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(M, { manageButtonClick: () => e.openUrl((0, v.Um)().featuresSettings) }),
                s.createElement(R, {
                  label: s.createElement(s.Fragment, null, "Show GrammarlyGO on text selection"),
                  enabled:
                    !1 !==
                      (null === (r = null === (i = te.cheetah) || void 0 === i ? void 0 : i.status) || void 0 === r
                        ? void 0
                        : r.cheetahEnabled) &&
                    !1 !==
                      (null ===
                        (m =
                          null === (p = null === (d = te.cheetah) || void 0 === d ? void 0 : d.status) || void 0 === p
                            ? void 0
                            : p.entryPointsConfig) || void 0 === m
                        ? void 0
                        : m.inlineRewriteEnabled),
                  disabled:
                    !1 ===
                    (null === (V = null === (B = te.cheetah) || void 0 === B ? void 0 : B.status) || void 0 === V
                      ? void 0
                      : V.cheetahEnabled),
                  toggle: (e) => J.cheetahToggleInlineRewrite(e),
                  isKeyboardAccessible: e.isKeyboardAccessible
                }),
                s.createElement(R, {
                  label: s.createElement(s.Fragment, null, "Show GrammarlyGO for quick replies"),
                  enabled:
                    !1 !==
                      (null === (O = null === (H = te.cheetah) || void 0 === H ? void 0 : H.status) || void 0 === O
                        ? void 0
                        : O.cheetahEnabled) &&
                    !1 !==
                      (null ===
                        (G =
                          null === (j = null === (U = te.cheetah) || void 0 === U ? void 0 : U.status) || void 0 === j
                            ? void 0
                            : j.entryPointsConfig) || void 0 === G
                        ? void 0
                        : G.inlineQuickReplyEnabled),
                  disabled:
                    !1 ===
                    (null === (z = null === (W = te.cheetah) || void 0 === W ? void 0 : W.status) || void 0 === z
                      ? void 0
                      : z.cheetahEnabled),
                  toggle: (e) => J.cheetahToggleInlineQuickReply(e),
                  isKeyboardAccessible: e.isKeyboardAccessible
                }),
                s.createElement("div", { className: _.separator })
              ),
            fe &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(P, {
                  enabled: "disabled" !== ie.serengetiState,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    J.setSerengetiState(!0 === e ? "enabled" : "disabled");
                  }
                }),
                s.createElement("div", { className: _.separator })
              ),
            de &&
              (0, o.r4)(ee.domain, le, pe) &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(D, {
                  enabled: (0, o.Td)(ee.domain, le, pe, te),
                  domain: ee.domain,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: Re
                }),
                s.createElement("div", { className: _.separator })
              ),
            me &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(L, {
                  enabled: null === (K = null === (q = te.knowledgeHubSettings) || void 0 === q ? void 0 : q.enabled) || void 0 === K || K,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    J.toggleKnowledgeHub(e),
                      y.J.knowledgeHubFeatureToggleClick("popup", n.JJ.fromDomain(ee.domain), e ? n.L5.on : n.L5.off),
                      (0, b.Tb)().knowledgeHub.featureToggleClick(n.JJ.fromDomain(ee.domain), e ? n.L5.on : n.L5.off);
                  }
                }),
                s.createElement("div", { className: _.separator })
              ),
            ge &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(F, {
                  enabled: null === (X = null === (Z = te.piiDetectionSettings) || void 0 === Z ? void 0 : Z.enabled) || void 0 === X || X,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    y.J.grammarlyGuardFeatureToggleClick(e ? "on" : "off", ee.domain), J.togglePiiDetection(e);
                  }
                }),
                s.createElement("div", { className: _.separator })
              ),
            s.createElement(E.W, { disabled: ke, enabledDefs: te.enabledDefs, toggleDefs: J.toggleDefs }),
            s.createElement("div", { className: _.separator }),
            s.createElement(A, {
              enabled: te.autocorrectEnabled || !1,
              isKeyboardAccessible: e.isKeyboardAccessible,
              isAutoApplySupported: we,
              toggle: (e) => {
                J.toggleAutocorrect(e);
                const t = e ? "on" : "off";
                y.J.autocorrectToggleClick("popup", t), (0, b.Tb)().autoFix.featureToggleClick(t, "popup");
              }
            }),
            s.createElement("div", { className: _.separator }),
            s.createElement(x, {
              enabled: te.autocompleteEnabled || !1,
              isKeyboardAccessible: e.isKeyboardAccessible,
              toggle: (e) => {
                J.toggleAutocomplete(e), y.J.autocompleteFeatureToggleClick("popup", e ? "on" : "off");
              }
            }),
            (!ve ||
              !1 ===
                (null === (Q = null === (Y = te.cheetah) || void 0 === Y ? void 0 : Y.status) || void 0 === Q
                  ? void 0
                  : Q.cheetahEnabled)) &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement("div", { className: _.separator }),
                s.createElement(T, {
                  enabled: "hide" !== ie.emogenieEmojiState,
                  isKeyboardAccessible: e.isKeyboardAccessible,
                  toggle: (e) => {
                    J.setEmogenieEmojiState(!0 === e ? "show" : "hide"),
                      y.J.settingsShowEmojiForDetectedTonesToggleClick(ee.domain, !0 === e ? "on" : "off");
                  }
                })
              ),
            s.createElement("div", { className: _.separator }),
            s.createElement(C.m, {
              dialects: Te,
              changeStrongDialect: J.changeStrongDialect,
              dialectStrong: xe,
              dialectWeak: ie.dialectWeak,
              dropdownOnTop: !0,
              disabled: ke,
              lock: { isLocked: Boolean(null == Ie ? void 0 : Ie.dialectLockedByInstitution), message: "Locked by your organization" }
            }),
            Ae && s.createElement(g.Z, { openGBLanding: re, showTitle: "popup" === oe, showBackground: "popup" === oe }),
            (te.isDebugMenuVisible || _e) &&
              s.createElement(N, {
                isAdvancedEnabled: te.advancedHistoryLoggerEnabled,
                isEnabled: te.historyLoggerEnabled,
                advancedHistoryLoggerEnabledUntil: te.advancedHistoryLoggerEnabledUntil,
                isKeyboardAccessible: e.isKeyboardAccessible,
                showReportBugButton: _e
                  ? {
                      enabled: !0,
                      onClick: () => {
                        e.openReportBugForm(
                          h.ZD({ domain: ee.domain, userType: h.Ng(ae), version: (0, v.bo)(), systemInfo: f.Rd().systemInfo })
                        );
                      }
                    }
                  : { enabled: !1 },
                showHideButton: !_e,
                downloadDebugReports: ye
              })
          );
        };
    },
    49475: (e, t, i) => {
      i.d(t, { w: () => o });
      var a = i(27378),
        s = i(49405),
        r = i(9234),
        n = i(54001);
      const o = (e) => {
        const t = "docs.google.com" === e.domain ? "Google Docs" : e.domain,
          { enabledInConfig: i, siteSwitcherChecked: o, favicon: l } = e,
          c = o.checked && i,
          d = i ? "Check for writing suggestions" : "Checking is not supported";
        return a.createElement(
          r.C,
          {
            grayOut: !i,
            onChange: (e) => o.update(e.target.checked),
            checked: c,
            extraClassName: s.site_switcher,
            dataGrammarlyPart: "siteSwitcher",
            skipTrustedCheck: e.skipTrustedCheck,
            centered: !!e.centeredToggle
          },
          a.createElement(
            "div",
            { "data-test-attr": "siteControlsLabelText" },
            d,
            a.createElement("br", null),
            " ",
            a.createElement(
              "span",
              { ...(0, n.Sh)(s.domain, e.centeredToggle && s.centered) },
              a.createElement("span", { className: s.thin_text }, "on"),
              " ",
              l && a.createElement("span", { className: s.favicon }, a.createElement("img", { width: "16px", height: "16px", src: l })),
              t
            )
          )
        );
      };
    },
    31212: (e, t, i) => {
      i.d(t, { Z: () => g });
      var a = i(20641),
        s = i(43124),
        r = i(27378),
        n = i(30955),
        o = i(54001),
        l = i(11250),
        c = i(44358),
        d = i(65515),
        u = i(49708),
        p = i(85985),
        m = i(56913);
      const g = ({ user: e, isAssistant: t, openSubscriptionDialog: i }) => {
        const { registrationDate: g, anonymous: h, premium: v } = e,
          f = (0, s.p6)(g);
        if (h || v) return null;
        const b = () => {
          (0, c.n)(l.J, {
            placement: t ? "assistantSettings" : "settingsToolbar",
            bannerType: "GoPremiumToEnableAdvancedFixes",
            upgradeHookName: "extensionSettings",
            upgradeHookSlot: t ? "assistantSettingsPopup" : "browserToolbar"
          }),
            (0, a.Tb)().upgradeHooks.showUpgradeHook("extensionSettings", t ? "assistantSettingsPopup" : "browserToolbar");
        };
        r.useEffect(() => {
          if ((0, m.G6)()) {
            const e = (0, u.R)(document, "visibilitychange")
              .pipe((0, p.h)(() => "visible" === document.visibilityState))
              .subscribe(() => {
                b();
              });
            return () => e.unsubscribe();
          }
          return b(), () => {};
        }, []);
        const w = r.useCallback(() => {
            i({ utmSource: "upHook", utmCampaign: "extensionSettingsToolbar" }),
              (0, c.Q)(l.J, {
                placement: t ? "assistantSettings" : "settingsToolbar",
                bannerType: "GoPremiumToEnableAdvancedFixes",
                upgradeHookName: "extensionSettings",
                upgradeHookSlot: t ? "assistantSettingsPopup" : "browserToolbar"
              }),
              (0, a.Tb)().upgradeHooks.clickUpgradeHook("extensionSettings", t ? "assistantSettingsPopup" : "browserToolbar"),
              (0, a.Tb)().userUpgradeClick("settingsToolbar");
          }, []),
          S = f
            ? r.createElement("div", { "data-test-attr": "checked_since" }, "Grammarly has been correcting your text since ", f, ".")
            : null;
        return r.createElement(
          "div",
          { className: t ? n.borderTop : void 0 },
          r.createElement(
            "div",
            { ...(0, o.Sh)(n.content, t ? void 0 : n.borderBottom) },
            S,
            r.createElement(d.Y, { onClick: w, className: n.premiumButton, dataGrammarlyPart: "settings-upgrade-button" })
          )
        );
      };
    },
    11250: (e, t, i) => {
      i.d(t, { J: () => s });
      var a = i(19374);
      const s = new Proxy(
        {},
        {
          get:
            (e, t) =>
            (...e) =>
              (0, a.E)().bgRpc.api.trackGnar(t, e)
        }
      );
    },
    21928: (e, t, i) => {
      i.d(t, { Ng: () => r, WY: () => o, ZD: () => n });
      var a = i(56913),
        s = i(51129);
      const r = (e) => {
          const t = s.n5.getType(e);
          return "registered" === t ? "free" : t;
        },
        n = (e) => {
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
        o = (e) => {
          const t = new URL((0, a.Um)().grammarlyEmployeesBugReportsUrl);
          return (
            Object.entries(e).forEach(([e, i]) => {
              i && t.searchParams.set(e, i);
            }),
            t.toString()
          );
        };
    },
    91980: (e, t, i) => {
      var a = i(54933),
        s = i(93476)(a);
      s.push([
        e.id,
        "._z3YOv-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._z3YOv-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",
        ""
      ]),
        (s.locals = { textBox: "_z3YOv-textBox" }),
        (e.exports = s);
    },
    75397: (e) => {
      e.exports = { viewAnnouncer: "I0c5l" };
    },
    93405: (e) => {
      e.exports = { link: "QgFSd", externalLink: "oGmOe", icon: "i3roU", gmail: "h0anR", outlook: "NM8XU", gdocs: "Y9XfU", spin: "YUQEk" };
    },
    91308: (e) => {
      e.exports = { progressBarBg: "Hz_iW", progressBar: "JxiOG" };
    },
    711: (e) => {
      e.exports = { singleCardAssistant: "XPx7S", singleCardAssistantNativeContentWithPadding: "He99k" };
    },
    52426: (e) => {
      e.exports = { getStartedChecklist: "QE3tb", logo: "DOz7G", title: "CzlXc", progressCaption: "TKilD" };
    },
    31926: (e) => {
      e.exports = {
        getStartedUseCases: "V1X0D",
        copyContainer: "AN8Cu",
        title: "jjHIP",
        subtitle: "gjGEx",
        ctaContainer: "s7nMi",
        ctaCaption: "BJWKo",
        ctaButtons: "SWGns",
        externalLink: "JLzQ9",
        icon: "DhhQ7",
        gmail: "hRR0U",
        outlook: "lnWHG",
        gdocs: "b0ty6",
        word: "eHkAg",
        slack: "OppdY",
        teams: "Hfv16",
        linkedIn: "hc5LW"
      };
    },
    83598: (e) => {
      e.exports = {
        cardList: "O6x_6",
        cardListFooterDynamic: "NzU4C",
        cardListFooterStatic: "kdk1x",
        cardListFooterAnimate: "CUEf1",
        upgradeHookWrapper: "fpqSf",
        assistant: "ziFUs",
        dragging: "dl2Z_",
        mainView: "OfKqp"
      };
    },
    64012: (e) => {
      e.exports = { emogenieViewOverlayHeader: "saNAB", emogenieViewOverlayHeaderBetaBadge: "J16CK" };
    },
    6943: (e) => {
      e.exports = { footerButton: "j5lp5", feedbackButton: "_i7kC" };
    },
    38575: (e) => {
      e.exports = { gbUpsellFooter: "yOr0u", clickableLink: "EfS5Y", icon: "Mmj0G" };
    },
    83178: (e) => {
      e.exports = {
        actions_hovered: "FONqd",
        header: "uDOFr",
        draggableWrapper: "rjQy5",
        draggable: "P3jaK",
        headerActions: "Xtr7I",
        headerActionBtnProofitIcon: "b5yo3",
        headerActionBtnGoalsIcon: "pl7ek",
        logoscore_fadein: "tUJui",
        fadein: "AQJV1",
        logoscore_fadeout: "chyj0",
        fadeout: "ooxFJ",
        logo_score: "RLHcp",
        spin: "g0xkj"
      };
    },
    26284: (e) => {
      e.exports = { insight: "vaGfd", insight__inline_icon: "M5fov", insight__inline_text: "NodQp" };
    },
    22521: (e) => {
      e.exports = {
        predictions: "zAvBV",
        predictions__header: "p82xz",
        predictions__card: "ZuLGb",
        counterContainer: "KwKbD",
        predictions__zero_text: "IVxiZ",
        predictions__off_brand: "HrjP2"
      };
    },
    40643: (e) => {
      e.exports = { relatedSuggestionsTitle: "AP_Yd" };
    },
    31480: (e) => {
      e.exports = {
        viewOverlay: "CpaDC",
        content: "BWu_L",
        footer: "Nfocm",
        viewOverlayGoBack: "EBOfD",
        defaultViewOverlayPanel: "TFghg",
        gradientViewOverlayPanel: "a2q6L",
        proofitViewOverlayPanel: "vCO8v",
        defaultViewOverlayHeader: "U8zS8",
        defaultViewOverlayContent: "Z9WSl",
        gradientViewOverlayContent: "sxmDB",
        proofitViewOverlayContent: "_nDhb",
        logo: "OtV3S",
        proofitViewOverlayHeader: "HuIOP",
        proofitViewOverlayHeaderBetaBadge: "PUb7a"
      };
    },
    2005: (e) => {
      e.exports = {
        viewOverlay: "snX4b",
        content: "fSzZu",
        footer: "Y8cpA",
        viewOverlayGoBack: "yEi_t",
        defaultViewOverlayPanel: "aPyGs",
        gradientViewOverlayPanel: "gbwcW",
        settingsViewOverlayPanel: "Rudrm",
        defaultViewOverlayHeader: "_tUap",
        defaultViewOverlayContent: "Cs_VJ",
        gradientViewOverlayContent: "c4WjP",
        settingsViewOverlayContent: "ZtK1f",
        logo: "_kPSX",
        settingsViewDoneButton: "xVshA"
      };
    },
    15346: (e) => {
      e.exports = {
        viewOverlay: "Gsb9P",
        content: "_HIip",
        footer: "EZP9j",
        viewOverlayGoBack: "oEefg",
        defaultViewOverlayPanel: "jAeU3",
        gradientViewOverlayPanel: "rIqVr",
        defaultViewOverlayHeader: "h1FQ0",
        defaultViewOverlayContent: "YsrUq",
        gradientViewOverlayContent: "Nc28X",
        logo: "cMPwC"
      };
    },
    30280: (e) => {
      e.exports = { compactSuccessLens: "lP637", compactSuccessLensContainer: "FK4Ma" };
    },
    66853: (e) => {
      e.exports = { headerOrFooterWrapper: "Y2H0f" };
    },
    764: (e) => {
      e.exports = { cardList: "gV0cS" };
    },
    10339: (e) => {
      e.exports = { premiumLens: "TFbap" };
    },
    11102: (e) => {
      e.exports = { successLens: "_NLHO" };
    },
    34162: (e) => {
      e.exports = { footer: "nFy3z", plagiarismButton: "o_JYq", counterWrapper: "mOddw", counter: "csO1n", counterCheckmarkIcon: "cBKjm" };
    },
    86642: (e) => {
      e.exports = {
        defaultHeader: "DTiYT",
        defaultHeaderWithLenses: "YBSd6",
        priorityLensHeader: "sHAVn",
        head: "TGEx5",
        headerGroup: "oSvN_",
        logoIcon: "_4cQZf",
        logoText: "u1K9J",
        headerButton: "PpuRF",
        setGoalsButton: "UuSZX",
        divider: "NPZsq",
        lensNavigation: "dBaZB",
        disabledLensNavigation: "hr85r",
        prioritySwitchWrapper: "iqdfL",
        prioritySwitchFlatWrapper: "LUmRC"
      };
    },
    31584: (e) => {
      e.exports = { wrapper: "QzCRj" };
    },
    3320: (e) => {
      e.exports = {
        container: "qfD5D",
        baseGrid: "iPCw8",
        bottomLeft: "PuuHv",
        bottomRight: "r_Ycp",
        top: "qu1VK",
        notificationWrapper: "cSTPv"
      };
    },
    2479: (e) => {
      e.exports = { sidebarContainer: "OUOwE", sidebarContent: "etRrJ" };
    },
    25079: (e) => {
      e.exports = {
        learnMore: "Z_tYK",
        learnMoreTitle: "wCofj",
        learnMoreExample: "YSZy0",
        learnMoreExampleIconAndTitle: "W3Msk",
        learnMoreExampleIcon: "q0k69",
        learnMoreExampleCorrectIcon: "TsvDV",
        learnMoreExampleIncorrectIcon: "DBJgs",
        learnMoreExampleTitle: "_5iVIT",
        learnMoreExampleTextItalic: "o84Ep",
        learnMoreExampleTextMarginLeft: "cTK8V",
        spin: "DHpIM"
      };
    },
    35583: (e) => {
      e.exports = { container: "qAay9" };
    },
    81237: (e) => {
      e.exports = {
        singleCardAssistant: "bJPRn",
        singleCardAssistantHeader: "Zoc_S",
        singleCardAssistantHeaderDraggable: "ZX00_",
        singleCardAssistantContent: "p9dQN",
        singleCardAssistantContentWithPadding: "UAH4K",
        singleCardAssistantFooter: "VnTOq",
        singleCardAssistantFooterText: "BgeT4",
        singleCardAssistantFooterButtonIcon: "kBU3t",
        spin: "HCSMj"
      };
    },
    24812: (e) => {
      e.exports = {
        emogenieReport: "IPEgR",
        emogenieReportHeader: "ugGrL",
        emogenieReportHeaderTitle: "x3FcP",
        emogenieReportItems: "SwRPf",
        emogenieReportToneSuggestionInfo: "vLVNY",
        emogenieReportToneSuggestionInfoEmojiAndTitle: "VinN1",
        emogenieReportToneSuggestionInfoEmoji: "gmfaf"
      };
    },
    3618: (e) => {
      e.exports = {
        emogenieBrandToneInfoIcon: "pcprF",
        emogenieReportItem: "LXjD_",
        emogenieBrandToneInfoIconOn: "KIvz3",
        emogenieBrandToneInfoIconOff: "NDatF",
        emogenieReportItemEmotion: "AjVJZ",
        emogenieReportItemEmotionEmojiAndName: "cIE8j",
        emogenieReportItemEmotionEmoji: "oZZpB",
        emogenieReportItemEmotionName: "QWYxt",
        emogenieReportItemEmotionBadgeOrIntensity: "jw4RJ",
        emogenieReportItemEmotionIntensity: "Ixu7L",
        emogenieReportItemEmotionIntensityDot: "aFcXw",
        emogenieReportItemEmotionIntensityDotActive: "xUxza",
        emogenieReportItemEmotionActionsMenuButton: "q4wIy",
        emogenieReportItemEmotionActionsMenuIcon: "V5KFq",
        emogenieReportItemEmootionActionsMenuThumsUpIcon: "UAfpn",
        emogenieReportItemEmootionActionsMenuThumsDownIcon: "CoUgw",
        spin: "tmqUv"
      };
    },
    71212: (e) => {
      e.exports = { settingsButtonMediumIcon: "jerdC", settingsButtonSmallIcon: "PlOGe", spin: "MH8w4" };
    },
    66206: (e) => {
      e.exports = {
        checkboxContainer: "Te37e",
        checkbox: "mFHkX",
        checkboxDS: "DdH2q",
        checkboxChecked: "JhHnz",
        checkboxCheckmark: "zShXt",
        spin: "tww6q"
      };
    },
    40578: (e) => {
      e.exports = { popoverNotificationMessage: "p0k9e" };
    },
    25985: (e) => {
      e.exports = { radioGroup: "KAzfW", radioGroupOption: "WkjDU", radioGroupOptionSelected: "onilo" };
    },
    32502: (e) => {
      e.exports = { premiumButton: "QpA64" };
    },
    78258: (e) => {
      e.exports = { proofitRequestFormBtnLoadingSpinner: "IrY6A", spin: "m9t2y" };
    },
    92647: (e) => {
      e.exports = {
        proofitHowItWorksSteps: "Unehy",
        proofitHowItWorksStep: "zMEEz",
        proofitHowItWorksStepNumberContainer: "EfoqG",
        proofitHowItWorksStepNumber: "XIDZQ",
        proofitHowItWorksStepOne: "K5qs8",
        proofitHowItWorksStepOneNumberContainer: "e4ae6",
        proofitHowItWorksStepTwo: "P3h_J",
        proofitHowItWorksStepTwoNumberContainer: "YejA_",
        proofitHowItWorksStepThree: "FYGwC",
        proofitHowItWorksStepThreeNumberContainer: "YFsfV"
      };
    },
    96528: (e) => {
      e.exports = {
        proofitRequestForm: "QVI6h",
        proofitRequestFormImg: "wKuXo",
        proofitRequestFormTitle: "yNxb3",
        proofitRequestFormDescription: "vLSn1",
        proofitRequestFormCostAndTime: "b2RwJ",
        proofitRequestFormTime: "Bo3xu",
        proofitRequestFormCostAndTimeTitle: "Cu_3T",
        proofitRequestFormCostAndTimeSubtitle: "NFy21",
        proofitRequestFormRequestBtn: "beQX2",
        proofitRequestFormUnavailableMsg: "JDvub",
        proofitRequestFormFootnote: "S33xD",
        proofitRequestFormFootnoteFreeTrial: "SflIX",
        proofitRequestFormFootnoteHowItWorksDontShowAgainCheckbox: "HUrVJ",
        proofitRequestFormPrivacyInfoTitle: "ymDqL",
        proofitRequestFormPrivacyInfoDescription: "ZqcFq",
        proofitRequestFormPrivacyInfoDescriptionItem: "iv8f1",
        proofitRequestFormPrivacyInfoDescriptionItemBulletPoint: "Duc32"
      };
    },
    21023: (e) => {
      e.exports = {
        proofitReviewForm: "SNt2d",
        proofitReviewFormTitle: "iMzY2",
        proofitReviewFormDescription: "jvfyf",
        proofitFeedbackForm: "eY729",
        proofitDoneButton: "CTbuu"
      };
    },
    76875: (e) => {
      e.exports = { scoreRing: "xlRHm", loading: "A_cJy", rotation: "srLo5", scoreText: "KIWW8" };
    },
    13311: (e) => {
      e.exports = {
        feedbackFormContainer: "kjElf",
        feedbackFormContainerAlignCenter: "hkEx2",
        feedbackFormFields: "Ua5wJ",
        feedbackFormTitle: "GnQ_a",
        feedbackFormTextBoxTitle: "kWEW0",
        feedbackFormLogo: "phQGV",
        compact: "b7yYp",
        feedbackFormScore: "ZOSRK",
        feedbackFormTextBox: "l8New",
        feedbackFormShareDomainTitle: "Qbnj_",
        feedbackFormShareDomainCheckbox: "VBCx1",
        feedbackFormSubmitButton: "tYYGU",
        feedbackFormSubmitButtonFixOverflowBottomPadding: "Opd8X",
        feedbackFormSubmitButtonFixOverflowBottomPaddingChild: "QKLT7",
        feedbackFormSuccessMessageTextContainer: "ARBzt",
        feedbackFormSuccessMessageIcon: "kJIzg",
        feedbackFormSuccessMessageTitle: "iXQnf",
        feedbackFormSuccessMessageSubtitle: "Ydufo",
        spin: "Vv6WG"
      };
    },
    73610: (e) => {
      e.exports = {
        feedbackFormOption: "sp8vS",
        feedbackFormOptionIcon: "eH6DL",
        feedbackFormOptionIconDisheartening: "DhaWh",
        feedbackFormOptionIconNeutral: "BS_8d",
        feedbackFormOptionIconSmiling: "dUZNd",
        spin: "uouSO"
      };
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
