"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [3912],
  {
    19024: function (e, t, r) {
      r.d(t, {
        r: function () {
          return s;
        }
      });
      var n,
        i = r(23381),
        l = ["title", "titleId"];
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      function o(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function c(e, t) {
        var r = e.title,
          c = e.titleId,
          s = o(e, l);
        return i.createElement(
          "svg",
          a(
            {
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": c
            },
            s
          ),
          r ? i.createElement("title", { id: c }, r) : null,
          n ||
            (n = i.createElement("path", {
              d: "M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34871 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0V0ZM10.2083 4.16667C10.4556 4.16667 10.6972 4.23998 10.9028 4.37733C11.1084 4.51468 11.2686 4.7099 11.3632 4.93831C11.4578 5.16672 11.4826 5.41805 11.4343 5.66053C11.3861 5.90301 11.267 6.12573 11.0922 6.30055C10.9174 6.47537 10.6947 6.59442 10.4522 6.64265C10.2097 6.69088 9.95839 6.66613 9.72998 6.57152C9.50158 6.47691 9.30635 6.31669 9.169 6.11113C9.03165 5.90557 8.95834 5.66389 8.95834 5.41667C8.95834 5.08515 9.09003 4.7672 9.32445 4.53278C9.55888 4.29836 9.87682 4.16667 10.2083 4.16667ZM12.0833 15.4167H8.75C8.52899 15.4167 8.31703 15.3289 8.16075 15.1726C8.00447 15.0163 7.91667 14.8043 7.91667 14.5833C7.91667 14.3623 8.00447 14.1504 8.16075 13.9941C8.31703 13.8378 8.52899 13.75 8.75 13.75H9.375C9.43026 13.75 9.48325 13.728 9.52232 13.689C9.56139 13.6499 9.58334 13.5969 9.58334 13.5417V9.79167C9.58334 9.73641 9.56139 9.68342 9.52232 9.64435C9.48325 9.60528 9.43026 9.58333 9.375 9.58333H8.75C8.52899 9.58333 8.31703 9.49553 8.16075 9.33925C8.00447 9.18297 7.91667 8.97101 7.91667 8.75C7.91667 8.52899 8.00447 8.31702 8.16075 8.16074C8.31703 8.00446 8.52899 7.91667 8.75 7.91667H9.58334C10.0254 7.91667 10.4493 8.09226 10.7618 8.40482C11.0744 8.71738 11.25 9.1413 11.25 9.58333V13.5417C11.25 13.5969 11.272 13.6499 11.311 13.689C11.3501 13.728 11.4031 13.75 11.4583 13.75H12.0833C12.3044 13.75 12.5163 13.8378 12.6726 13.9941C12.8289 14.1504 12.9167 14.3623 12.9167 14.5833C12.9167 14.8043 12.8289 15.0163 12.6726 15.1726C12.5163 15.3289 12.3044 15.4167 12.0833 15.4167Z",
              fill: "#007AFF"
            }))
        );
      }
      var s = i.forwardRef(c);
      r.p;
    },
    96233: function (e, t, r) {
      r.r(t),
        r.d(t, {
          AcceptShared: function () {
            return Co;
          }
        });
      var n = r(91640),
        i = r(23381),
        l = r(60368),
        a = (0, r(6821).a)(l.B),
        o = r(52384),
        c = function (e) {
          return (0, o.v9)(function (t) {
            return e(t.acceptShared);
          });
        },
        s = (0, i.createContext)(null),
        d = r(47169),
        u = r(53030),
        C = r(75642),
        f = r(74585),
        h = r(44856),
        p = r(2747),
        m = (function (e) {
          return (
            (e[(e.IDLE = 0)] = "IDLE"),
            (e[(e.ACCEPTING = 1)] = "ACCEPTING"),
            (e[(e.ACCEPTING_SUCCESS = 2)] = "ACCEPTING_SUCCESS"),
            (e[(e.HIGHLIGTING = 3)] = "HIGHLIGTING"),
            (e[(e.VERIFYING = 4)] = "VERIFYING"),
            (e[(e.VERIFYING_SUCCESS = 5)] = "VERIFYING_SUCCESS"),
            (e[(e.REJECT = 6)] = "REJECT"),
            (e[(e.SHARED_FOLDER_LOOK = 7)] = "SHARED_FOLDER_LOOK"),
            (e[(e.DELETE_SHARED_FOLDER = 8)] = "DELETE_SHARED_FOLDER"),
            e
          );
        })({}),
        g = (function (e) {
          return (
            (e[(e.CLOSED = 0)] = "CLOSED"),
            (e[(e.SELECT = 1)] = "SELECT"),
            (e[(e.COPY = 2)] = "COPY"),
            (e[(e.CONFIRM = 3)] = "CONFIRM"),
            (e[(e.NOT_EMPTY = 4)] = "NOT_EMPTY"),
            e
          );
        })({}),
        x = r(21930),
        v = r(50767);
      function b(e, t) {
        var r = e.find(function (e) {
          return e.name === t[0];
        });
        if (r)
          return 1 === t.length
            ? e.find(function (e) {
                return e.name === t[0];
              })
            : b(r.children, t.slice(1));
      }
      function y(e) {
        var t = e.folders,
          r = e.passwords,
          n = e.dataRecords,
          i = e.sharedFolders,
          l = (0, x.Z)(t);
        t.forEach(function (e) {
          e.includes("\\") &&
            e
              .split("\\")
              .reduce(function (e, t) {
                return 0 === e.length ? [].concat((0, x.Z)(e), [t]) : [].concat((0, x.Z)(e), ["".concat(e[e.length - 1], "\\").concat(t)]);
              }, [])
              .forEach(function (e) {
                l.some(function (t) {
                  return t === e;
                }) || l.push(e);
              });
        });
        var a = Object.assign.apply(
          Object,
          [{}].concat(
            (0, x.Z)(
              l.map(function (e) {
                return (0, d.Z)({}, e, { itemCount: 0 });
              })
            )
          )
        );
        return (
          [].concat((0, x.Z)(Object.values(r)), (0, x.Z)(Object.values(n))).forEach(function (e) {
            var t = "";
            (t =
              e.record.sharedFolderId && e.folder
                ? "".concat(i[e.record.sharedFolderId].name, "\\").concat(e.folder)
                : e.record.sharedFolderId
                ? i[e.record.sharedFolderId].name
                : "" === e.folder
                ? v.ag._({ id: "(none)" })
                : e.folder),
              a[t] && (a[t].itemCount += 1);
          }),
          l.sort().reduce(function (e, t) {
            var r = a[t];
            if (!r || "" === t) return e;
            if (t.includes("\\")) {
              var n = t.split("\\"),
                i = n.pop();
              return b(e, n).children.push({ name: i, path: t, itemCount: r.itemCount, children: [] }), e;
            }
            return [].concat((0, x.Z)(e), [{ name: t, path: t, itemCount: r.itemCount, children: [] }]);
          }, [])
        );
      }
      var w = (0, p.P1)(
          function (e) {
            return e.status;
          },
          function (e) {
            return {
              isAcceptItemModalOpen: e === m.ACCEPTING,
              isVerifyYourEmailModalOpen: e === m.VERIFYING,
              isEmailSentModalOpen: e === m.VERIFYING_SUCCESS,
              isLookModalOpen: e === m.ACCEPTING_SUCCESS,
              isHighlightItemActive: e === m.HIGHLIGTING,
              isSharedFolderLookModalOpen: e === m.SHARED_FOLDER_LOOK,
              isDeleteSharedFolderModalOpen: e === m.DELETE_SHARED_FOLDER
            };
          }
        ),
        E = (0, p.P1)(
          function (e) {
            return e.status;
          },
          function (e) {
            return e !== m.IDLE;
          }
        ),
        j = (0, p.P1)(u.O, C.d, f.y, h.C, function (e, t, r, n) {
          return y({ folders: e, passwords: t, dataRecords: r, sharedFolders: n });
        }),
        O = r(92577),
        S = r(48693),
        Z = r(38539),
        k = function (e) {
          return (0, o.v9)(function (t) {
            return e(t.vaultData);
          });
        },
        I = r(37605),
        A = r(2372),
        P = r(90890),
        M = r(27403);
      var F = (0, n.Z)("div", { target: "e1513ou01" })({
          name: "91nt9g",
          styles: "position:fixed;inset:0;background:rgba(40, 57, 82, 0.7);display:flex;align-items:center;justify-content:center"
        }),
        B = (0, n.Z)("div", { target: "e1513ou00" })({ name: "1fttcpj", styles: "display:flex;flex-direction:column" }),
        _ = function (e) {
          var t = e.onEsc,
            r = e.onOutsideClick,
            n = e.children,
            l = (0, i.useContext)(s),
            a = (0, P.T)(l, "acceptSharedOverlay");
          (0, i.useEffect)(
            function () {
              if (a)
                return (
                  a.classList.add("absolute"),
                  (a.style.zIndex = "10"),
                  function () {
                    a && (a.classList.remove("absolute"), (a.style.zIndex = "0"));
                  }
                );
            },
            [a]
          ),
            (0, I.i)("Escape", function () {
              t && t();
            });
          return (
            a &&
            (0, M.jsx)(
              A.Q,
              { container: a },
              (0, M.jsx)(
                F,
                {
                  "data-automation-id": "Modal",
                  onMouseDown: function (e) {
                    return (function (e) {
                      !e.target.closest('[data-automation-id="ModalContent"]') && r && setTimeout(r, 200);
                    })(e);
                  }
                },
                (0, M.jsx)(B, { "data-automation-id": "ModalContent" }, n)
              )
            )
          );
        };
      var H = (0, n.Z)("div", { target: "e1qumvjy0" })({
        name: "1cwhzjq",
        styles:
          "display:flex;justify-content:space-between;padding:24px;background:#ffffff;border-top-left-radius:16px;border-top-right-radius:16px"
      });
      var L = (0, n.Z)("div", { target: "e1mih3ej0" })({
        name: "g3dbjh",
        styles: "display:flex;flex-direction:column;padding:0px 24px;background:#ffffff;gap:24px"
      });
      var T = (0, n.Z)("div", { target: "enu3bke0" })({ name: "1pkpzee", styles: "width:590px" });
      var V = (0, n.Z)("div", { target: "ernst7z0" })({
        name: "12f4ixv",
        styles:
          "display:flex;justify-content:flex-end;gap:8px;background:#ffffff;padding:24px;border-bottom-left-radius:16px;border-bottom-right-radius:16px"
      });
      var D = (0, n.Z)("div", { target: "e6b4p3p0" })({
        name: "1t2gapw",
        styles:
          "display:flex;align-items:center;justify-content:center;width:48px;height:48px;top:24px;left:24px;border-radius:50%;background:#faf4de"
      });
      var z = (0, n.Z)("div", { target: "eno7nsi0" })({ name: "1muarzf", styles: "font-size:16px;line-height:24px" });
      var R,
        N = (0, n.Z)("div", { target: "etnyanj0" })({ name: "10319dx", styles: "font-size:20px;line-height:32px;font-weight:600" }),
        q = r(20011),
        Y = r(37755),
        G = { small: 5, medium: 8, large: 11 },
        W = { small: 8, medium: 12, large: 16 },
        K = {
          small: { height: 20, width: 3, borderRadius: 2 },
          medium: { height: 32, width: 4, borderRadius: 2 },
          large: { height: 44, width: 5, borderRadius: 2 }
        },
        U = (0, n.Z)("div", { target: "ew6a8mn2" })(
          "display:inline-flex;gap:",
          function (e) {
            var t = e.size;
            return G[t];
          },
          "px;align-items:center;"
        ),
        J = (0, n.Z)("div", { target: "ew6a8mn1" })(
          "background:",
          function (e) {
            return e.color;
          },
          ";border-radius:50%;width:",
          function (e) {
            var t = e.size;
            return W[t];
          },
          "px;aspect-ratio:1/1;"
        ),
        X = (0, n.Z)("div", { target: "ew6a8mn0" })(
          "background:",
          function (e) {
            return e.color;
          },
          ";border-radius:",
          function (e) {
            var t = e.size;
            return K[t].borderRadius;
          },
          "px;height:",
          function (e) {
            var t = e.size;
            return K[t].height;
          },
          "px;width:",
          function (e) {
            var t = e.size;
            return K[t].width;
          },
          "px;"
        ),
        Q = function (e, t, r) {
          return !!(e && e.current && e.current.animate) && (e.current.animate(t, r), !0);
        },
        $ = function (e) {
          var t = e.size,
            r = void 0 === t ? "medium" : t,
            n = e.color,
            l = void 0 === n ? "#CB2929" : n,
            a = (0, i.useRef)(null),
            o = (0, i.useRef)(null),
            c = (0, i.useRef)(null),
            s = [
              { transform: "translate3D(0, 0, 0)" },
              { transform: "translate3D(0, -".concat((G[r] + W[r]) / 2, "px, 0)") },
              { transform: "translate3D(0, ".concat((G[r] + W[r]) / 2, "px, 0)") },
              { transform: "translate3D(0, -".concat((G[r] + W[r]) / 4, "px, 0)") },
              { transform: "translate3D(0, ".concat((G[r] + W[r]) / 4, "px, 0)") },
              { transform: "translate3D(0, 0, 0)" }
            ],
            d = { duration: 2500, iterations: 1 / 0 };
          return (
            (0, i.useEffect)(
              function () {
                Q(a, s, d);
                var e = setTimeout(function () {
                    Q(o, s, d);
                  }, 300),
                  t = setTimeout(function () {
                    Q(c, s, d);
                  }, 600);
                return function () {
                  clearTimeout(e), clearTimeout(t);
                };
              },
              [d, s]
            ),
            (0, M.jsx)(
              U,
              { "data-automation-id": "AnimatedLogo", size: r },
              (0, M.jsx)(J, { color: l, size: r, ref: a }),
              (0, M.jsx)(J, { color: l, size: r, ref: o }),
              (0, M.jsx)(J, { color: l, size: r, ref: c }),
              (0, M.jsx)(X, { color: l, size: r })
            )
          );
        },
        ee = {
          "contained-error": "background-color: #D32D27; color: white;",
          "contained-success": "background-color: #2cd472; color: white;",
          "contained-info": "background-color: #3B70D4; color: white;",
          "contained-warning": "background-color: #daac49; color: white;",
          "contained-primary": "background-color: #40526D; color: white;",
          "outlined-error": "border:1px solid#D32D27; color: #D32D27;",
          "outlined-success": "border:1px solid #2cd472; color: #2cd472;",
          "outlined-info": "border:1px solid #3B70D4; color: #3B70D4;",
          "outlined-warning": "border:1px solid #daac49; color: #daac49;",
          "outlined-primary": "border:1px solid #BAC0CA; color: #1B283C;",
          "text-error": "color: #D32D27;",
          "text-success": "color: #2cd472;",
          "text-info": "color: #3B70D4;",
          "text-warning": "color: #daac49;",
          "text-primary": "color: #007AFF;",
          "text-link": "color: #3B70D4;",
          "text-secondary": "color: rgba(64, 82, 109, 0.7);"
        },
        te = {
          "contained-error": "background-color: #af0809;",
          "contained-success": "background-color: #1b8b4a;",
          "contained-info": "background-color: #3B70D4;",
          "contained-warning": "background-color: #b48e3a;",
          "contained-primary": "background-color: rgba(186, 192, 202, 0.1); color: #1B283C;",
          "outlined-error": "border-color:#af0809; color: #af0809;",
          "outlined-success": "border-color:#1b8b4a; color: #1b8b4a;",
          "outlined-info": "border-color:#3B70D4; color: #3B70D4;",
          "outlined-warning": "border-color:#b48e3a; color: #b48e3a;",
          "outlined-primary": "border-color:#BAC0CA; color: #1B283C; background: rgba(27, 40, 60, 0.1);",
          "text-error": "color: #af0809;",
          "text-success": "color: #1b8b4a;",
          "text-info": "color: #3B70D4;",
          "text-warning": "color: #b48e3a;",
          "text-primary": "color: #007AFF;background: rgba(0, 122, 255, 0.1);",
          "text-link": "color: #3B70D4; text-decoration: underline;",
          "text-secondary": "color: rgba(64, 82, 109, 0.7); background: rgba(27, 40, 60, 0.1);"
        },
        re = {
          "contained-error": "background-color: #871D19; box-shadow: none;",
          "outlined-primary": "border:1px solid #BAC0CA; color: #1B283C; background: rgba(27, 40, 60, 0.3);box-shadow: none;",
          "text-primary": "color: #007AFF; background: rgba(0, 122, 255, 0.3); box-shadow:none;",
          "text-secondary": "color: rgba(64, 82, 109, 0.7); background: rgba(27, 40, 60, 0.3); box-shadow: none;"
        },
        ne = {
          "contained-error": "background-color: #D32D27;box-shadow: 0 0 0 2px white, 0 0 0 3px #871D19; color: white;",
          "outlined-primary": "border-color: #40526D; color: #1B283C; box-shadow: 0 0 0 2px white, 0 0 0 3px #1B283C;",
          "text-primary": "color: #007AFF; box-shadow: 0 0 0 2px white, 0 0 0 3px #1B283C;",
          "text-link": "outline: 1px solid #1B283C;",
          "text-secondary": "border-color: rgba(64, 82, 109, 0.3); box-shadow: 0 0 0 2px white, 0 0 0 3px #1B283C;"
        },
        ie = {
          contained: "background-color: #BAC0CA; color: white;",
          outlined: "border:1px solid #BAC0CA; color: white; background: #BAC0CA;",
          text: "color: #BAC0CA; text-decoration: none;"
        },
        le = {
          xs: "padding: 2px 12px 2px 8px; font-size: 12px; line-height: 20px; border-radius: 4px;",
          sm: "padding: 6px 12px; font-size: 12px; line-height: 17px; border-radius: 4px;",
          md: "padding: 8px 16px; font-size: 14px; line-height: 20px; border-radius: 4px;",
          lg: "padding: 8px 20px; font-size: 16px; line-height: 25px; border-radius: 4px;"
        },
        ae = (0, n.Z)("button", { target: "ef7a8rd0" })(
          "border:",
          function (e) {
            return "link" === e.color ? "3px solid white" : "none";
          },
          ";outline:none;background-color:transparent;",
          function (e) {
            var t = e.variant,
              r = e.color;
            return ee["".concat(t, "-").concat(r)];
          },
          " ",
          function (e) {
            var t = e.size;
            return le["".concat(t)];
          },
          " cursor:pointer;user-select:none;font-style:normal;font-weight:600;text-align:center;min-width:",
          function (e) {
            var t = e.minWidth;
            return "".concat(t, "px");
          },
          ";&:hover{",
          function (e) {
            var t = e.variant,
              r = e.color;
            return te["".concat(t, "-").concat(r)];
          },
          ";}&:focus{",
          function (e) {
            var t = e.variant,
              r = e.color;
            return ne["".concat(t, "-").concat(r)];
          },
          ";}&:active{",
          function (e) {
            var t = e.variant,
              r = e.color;
            return re["".concat(t, "-").concat(r)];
          },
          ";}&:disabled{",
          function (e) {
            var t = e.variant;
            return ie["".concat(t)];
          },
          " cursor:not-allowed;}"
        ),
        oe = function (e) {
          var t = (0, i.useState)(0),
            r = (0, O.Z)(t, 2),
            n = r[0],
            l = r[1],
            a = (0, i.useRef)(null),
            o = e.variant,
            c = void 0 === o ? "contained" : o,
            s = e.color,
            d = void 0 === s ? "error" : s,
            u = e.size,
            C = void 0 === u ? "md" : u,
            f = e.type,
            h = void 0 === f ? "button" : f,
            p = e.isLoading,
            m = void 0 !== p && p,
            g = e.children,
            x = (0, Y.Z)((0, Y.Z)({}, e), {}, { variant: c, color: d, size: C, type: h });
          return (
            (0, i.useEffect)(function () {
              var e = setTimeout(function () {
                a.current && l(a.current.offsetWidth);
              });
              return function () {
                clearTimeout(e);
              };
            }, []),
            (0, M.jsx)(ae, (0, q.Z)({}, x, { ref: a, minWidth: n }), m ? (0, M.jsx)($, { size: "small" }) : g)
          );
        },
        ce = ["title", "titleId"];
      function se() {
        return (
          (se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          se.apply(this, arguments)
        );
      }
      function de(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function ue(e, t) {
        var r = e.title,
          n = e.titleId,
          l = de(e, ce);
        return i.createElement(
          "svg",
          se(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          R ||
            (R = i.createElement("path", {
              d: "M19 14C18.3301 14.0005 17.6671 14.1363 17.0509 14.3992C16.4347 14.6621 15.8779 15.0467 15.414 15.53L9.921 12.783C9.96808 12.5245 9.99449 12.2627 10 12C9.99455 11.7373 9.96813 11.4755 9.921 11.217L15.414 8.46999C16.2216 9.29997 17.2928 9.82327 18.4439 9.95022C19.5949 10.0772 20.7544 9.79988 21.7235 9.16586C22.6926 8.53183 23.411 7.58053 23.7557 6.47495C24.1005 5.36937 24.05 4.17833 23.613 3.10587C23.176 2.03342 22.3796 1.14631 21.3603 0.596548C20.3411 0.0467807 19.1623 -0.131429 18.0261 0.0924516C16.8899 0.316332 15.8669 0.928367 15.1324 1.8237C14.3978 2.71903 13.9975 3.84192 14 4.99999C14.0054 5.26301 14.0319 5.52518 14.079 5.78399L8.586 8.52899C7.89421 7.81151 7.00378 7.31715 6.02901 7.10936C5.05424 6.90158 4.03961 6.98985 3.11537 7.36285C2.19113 7.73585 1.39945 8.37656 0.841957 9.20272C0.284466 10.0289 -0.0133972 11.0028 -0.0133972 11.9995C-0.0133972 12.9962 0.284466 13.9701 0.841957 14.7963C1.39945 15.6224 2.19113 16.2631 3.11537 16.6361C4.03961 17.0091 5.05424 17.0974 6.02901 16.8896C7.00378 16.6818 7.89421 16.1875 8.586 15.47L14.079 18.216C14.0318 18.4748 14.0054 18.737 14 19C14 19.9889 14.2932 20.9556 14.8426 21.7778C15.3921 22.6001 16.1729 23.241 17.0866 23.6194C18.0002 23.9978 19.0055 24.0968 19.9754 23.9039C20.9454 23.711 21.8363 23.2348 22.5355 22.5355C23.2348 21.8363 23.711 20.9454 23.9039 19.9754C24.0968 19.0055 23.9978 18.0002 23.6194 17.0866C23.241 16.1729 22.6001 15.3921 21.7778 14.8426C20.9556 14.2932 19.9889 14 19 14Z",
              fill: "#9B7C09"
            }))
        );
      }
      var Ce,
        fe = i.forwardRef(ue),
        he = (r.p, ["title", "titleId"]);
      function pe() {
        return (
          (pe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          pe.apply(this, arguments)
        );
      }
      function me(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function ge(e, t) {
        var r = e.title,
          n = e.titleId,
          l = me(e, he);
        return i.createElement(
          "svg",
          pe(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Ce ||
            (Ce = i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.99999 9.41425L3.75735 13.6569C3.56982 13.8444 3.31546 13.9498 3.05025 13.9498C2.78503 13.9498 2.53068 13.8444 2.34314 13.6569C2.1556 13.4694 2.05025 13.215 2.05025 12.9498C2.05025 12.6846 2.1556 12.4302 2.34314 12.2427L6.58578 8.00004L2.34314 3.7574C2.1556 3.56986 2.05025 3.31551 2.05025 3.05029C2.05025 2.78508 2.1556 2.53072 2.34314 2.34319C2.53068 2.15565 2.78503 2.05029 3.05025 2.05029C3.31546 2.05029 3.56982 2.15565 3.75735 2.34319L7.99999 6.58583L12.2426 2.34319C12.4302 2.15565 12.6845 2.05029 12.9497 2.05029C13.215 2.05029 13.4693 2.15565 13.6568 2.34319C13.8444 2.53072 13.9497 2.78508 13.9497 3.05029C13.9497 3.31551 13.8444 3.56986 13.6568 3.7574L9.41421 8.00004L13.6568 12.2427C13.8444 12.4302 13.9497 12.6846 13.9497 12.9498C13.9497 13.215 13.8444 13.4694 13.6568 13.6569C13.4693 13.8444 13.215 13.9498 12.9497 13.9498C12.6845 13.9498 12.4302 13.8444 12.2426 13.6569L7.99999 9.41425Z",
              fill: "#40526D"
            }))
        );
      }
      var xe = i.forwardRef(ge);
      r.p;
      var ve,
        be = (0, n.Z)(xe, { target: "ero7dcr0" })({ name: "e0dnmk", styles: "cursor:pointer" }),
        ye = ["title", "titleId"];
      function we() {
        return (
          (we = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          we.apply(this, arguments)
        );
      }
      function Ee(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function je(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Ee(e, ye);
        return i.createElement(
          "svg",
          we(
            {
              width: 24,
              height: 16,
              viewBox: "0 0 24 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          ve ||
            (ve = i.createElement("path", {
              d: "M12 15.5C11.6729 15.5004 11.3495 15.431 11.0514 15.2965C10.7532 15.162 10.4872 14.9655 10.271 14.72L0.460017 3.568C0.149927 3.19846 -0.00327309 2.72225 0.0331766 2.24122C0.0696263 1.76018 0.292832 1.3125 0.655067 0.993895C1.0173 0.675291 1.48981 0.511053 1.97156 0.536302C2.45332 0.56155 2.90607 0.774281 3.23302 1.129L11.812 10.881C11.8355 10.9078 11.8644 10.9292 11.8968 10.9439C11.9292 10.9586 11.9644 10.9662 12 10.9662C12.0356 10.9662 12.0708 10.9586 12.1032 10.9439C12.1356 10.9292 12.1646 10.9078 12.188 10.881L20.767 1.129C20.9253 0.94043 21.1196 0.785388 21.3386 0.672993C21.5576 0.560599 21.7969 0.493118 22.0423 0.474518C22.2878 0.455918 22.5345 0.486575 22.768 0.564685C23.0014 0.642796 23.2169 0.766784 23.4017 0.929363C23.5866 1.09194 23.737 1.28983 23.8443 1.5114C23.9516 1.73297 24.0135 1.97374 24.0264 2.21957C24.0392 2.4654 24.0029 2.71133 23.9193 2.94289C23.8358 3.17446 23.7069 3.38699 23.54 3.568L13.732 14.716C13.5155 14.9621 13.249 15.1593 12.9504 15.2944C12.6518 15.4296 12.3278 15.4997 12 15.5Z",
              fill: "#40526D"
            }))
        );
      }
      var Oe,
        Se = i.forwardRef(je),
        Ze = (r.p, ["title", "titleId"]);
      function ke() {
        return (
          (ke = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ke.apply(this, arguments)
        );
      }
      function Ie(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Ae(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Ie(e, Ze);
        return i.createElement(
          "svg",
          ke(
            {
              width: 24,
              height: 16,
              viewBox: "0 0 24 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Oe ||
            (Oe = i.createElement("path", {
              d: "M12 0.499995C12.3271 0.499591 12.6505 0.568955 12.9486 0.70346C13.2468 0.837964 13.5128 1.03452 13.729 1.28L23.54 12.432C23.8501 12.8015 24.0033 13.2777 23.9668 13.7588C23.9304 14.2398 23.7072 14.6875 23.3449 15.0061C22.9827 15.3247 22.5102 15.4889 22.0284 15.4637C21.5467 15.4384 21.0939 15.2257 20.767 14.871L12.188 5.119C12.1645 5.09223 12.1356 5.07078 12.1032 5.05608C12.0708 5.04139 12.0356 5.03379 12 5.03379C11.9644 5.03379 11.9292 5.04139 11.8968 5.05608C11.8644 5.07078 11.8354 5.09223 11.812 5.119L3.23298 14.871C3.07475 15.0596 2.88041 15.2146 2.6614 15.327C2.44239 15.4394 2.20312 15.5069 1.95766 15.5255C1.71219 15.5441 1.46549 15.5134 1.23204 15.4353C0.998594 15.3572 0.783115 15.2332 0.598272 15.0706C0.413429 14.9081 0.262953 14.7102 0.155684 14.4886C0.0484142 14.267 -0.0134811 14.0263 -0.0263653 13.7804C-0.0392494 13.5346 -0.00286102 13.2887 0.0806599 13.0571C0.164181 12.8255 0.293146 12.613 0.459982 12.432L10.268 1.284C10.4845 1.03791 10.751 0.840727 11.0496 0.705552C11.3482 0.570377 11.6722 0.500306 12 0.499995Z",
              fill: "#40526D"
            }))
        );
      }
      var Pe = i.forwardRef(Ae);
      r.p;
      var Me = (0, n.Z)("div", { target: "em5m3l45" })({ name: "urwrh8", styles: "position:relative;&:focus{outline:none;}" }),
        Fe = (0, n.Z)("div", { target: "em5m3l44" })({ name: "s5xdrg", styles: "display:flex;align-items:center" }),
        Be = (0, n.Z)("input", { target: "em5m3l43" })({
          name: "1jvnzm2",
          styles:
            "border-bottom-left-radius:4px;border-top-left-radius:4px;border:1px solid #bac0ca;border-right:0;padding:12px;line-height:24px;font-size:16px;width:100%;box-sizing:border-box"
        }),
        _e = (0, n.Z)("div", { target: "em5m3l42" })({
          name: "1vjq8gi",
          styles:
            "display:flex;align-items:center;border:1px solid #bac0ca;border-left:0;border-bottom-right-radius:4px;border-top-right-radius:4px;padding:16px 12px;cursor:pointer"
        }),
        He = (0, n.Z)("ul", { target: "em5m3l41" })({
          name: "k39sun",
          styles:
            "position:absolute;top:54px;width:100%;padding:4px;border-radius:4px;background-color:white;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.35);max-height:140px;overflow:auto;overscroll-behavior:contain;user-select:none;box-sizing:border-box"
        }),
        Le = (0, n.Z)("li", { target: "em5m3l40" })(
          "padding:16px 12px;font-size:16px;line-height:24px;border-radius:4px;cursor:pointer;background:",
          function (e) {
            return e.isHighlighted ? "#ebeeef" : "white";
          },
          ";"
        ),
        Te = function (e) {
          var t = e.options,
            r = e.onChange,
            n = e.value,
            l = e.defaultValue,
            a = void 0 === l ? "(Accepted Share Offers)" : l,
            o = e.exclude,
            c = void 0 === o ? "Shared-" : o,
            d = (0, i.useRef)(null),
            u = (0, i.useRef)(null),
            C = (0, i.useRef)([]),
            f = (0, i.useState)(!1),
            h = (0, O.Z)(f, 2),
            p = h[0],
            m = h[1],
            g = (0, i.useState)(0),
            x = (0, O.Z)(g, 2),
            v = x[0],
            b = x[1],
            y = (0, i.useContext)(s),
            w = t
              .filter(function (e) {
                return "" !== e && !e.startsWith(c);
              })
              .filter(function (e) {
                return e.includes(n) || n === a;
              }),
            E = w.length > 0 && p,
            j = (0, i.useCallback)(function () {
              m(!1), b(0);
            }, []),
            S = (0, i.useCallback)(
              function (e) {
                r(e), j();
              },
              [r, j]
            ),
            Z = (0, i.useCallback)(function (e) {
              u.current && C.current[e] && (u.current.scrollTop = C.current[e].offsetTop - u.current.offsetTop);
            }, []);
          return (
            (0, i.useEffect)(
              function () {
                return (
                  y && y.addEventListener("scroll", j),
                  function () {
                    y && y.removeEventListener("scroll", j);
                  }
                );
              },
              [j, y]
            ),
            (0, i.useEffect)(
              function () {
                var e = function (e) {
                  if (d && d.current) {
                    var t = d.current.getBoundingClientRect();
                    (e.clientX < t.x || e.clientX > t.x + t.width || e.clientY < t.y || e.clientY > t.y + t.height) && j();
                  }
                };
                return (
                  y && y.document.addEventListener("click", e),
                  function () {
                    y && y.document.removeEventListener("click", e);
                  }
                );
              },
              [y, j]
            ),
            (0, M.jsx)(
              Me,
              {
                "data-automation-id": "Select",
                ref: d,
                onKeyDown: function (e) {
                  if (E) {
                    if ((e.stopPropagation(), "Escape" === e.key && j(), "Enter" === e.key && S(w[v]), "ArrowUp" === e.key)) {
                      var t = 0 === v ? w.length - 1 : v - 1;
                      Z(t), b(t);
                    }
                    if ("ArrowDown" === e.key) {
                      var r = v === w.length - 1 ? 0 : v + 1;
                      Z(r), b(r);
                    }
                  }
                },
                tabIndex: 0
              },
              (0, M.jsx)(
                Fe,
                null,
                (0, M.jsx)(Be, {
                  "data-automation-id": "SelectInput",
                  value: n,
                  onChange: function (e) {
                    r(e.target.value);
                  },
                  onFocus: function () {
                    return m(!0);
                  }
                }),
                (0, M.jsx)(
                  _e,
                  {
                    onClick: function () {
                      return m(!p);
                    }
                  },
                  E ? (0, M.jsx)(Pe, null) : (0, M.jsx)(Se, null)
                )
              ),
              E &&
                (0, M.jsx)(
                  He,
                  { ref: u, role: "listbox", "aria-activedescendant": n },
                  w.map(function (e, t) {
                    return (0, M.jsx)(
                      Le,
                      {
                        role: "option",
                        "aria-selected": n === e,
                        isHighlighted: v === t,
                        onMouseEnter: function () {
                          return b(t);
                        },
                        key: e,
                        onClick: function () {
                          return S(e);
                        },
                        ref: function (e) {
                          e && (C.current[t] = e);
                        }
                      },
                      e
                    );
                  })
                )
            )
          );
        },
        Ve = r(51212),
        De = ["sharedFolders", "sentShares", "receivedShares", "sharedFoldersEmpty", "sentSharesEmpty", "receivedSharesEmpty"],
        ze = function (e) {
          var t = (0, i.useState)([]),
            r = (0, O.Z)(t, 2),
            n = r[0],
            l = r[1];
          return (
            (0, i.useEffect)(
              function () {
                var t = e.document.querySelector("body"),
                  r = new MutationObserver(function (e) {
                    var r,
                      n = (0, Ve.Z)(e);
                    try {
                      for (n.s(); !(r = n.n()).done; ) {
                        "attributes" === r.value.type && l(Array.from(t.classList));
                      }
                    } catch (i) {
                      n.e(i);
                    } finally {
                      n.f();
                    }
                  });
                return (
                  r.observe(t, { attributes: !0, childList: !1, subtree: !1 }),
                  function () {
                    r.disconnect();
                  }
                );
              },
              [e]
            ),
            (0, i.useMemo)(
              function () {
                return (
                  0 !==
                  n.filter(function (e) {
                    return De.includes(e);
                  }).length
                );
              },
              [n]
            )
          );
        };
      var Re,
        Ne = (0, n.Z)("div", { target: "eayxe134" })({ name: "xx5zag", styles: "display:flex;gap:20px;flex-direction:column" }),
        qe = (0, n.Z)("div", { target: "eayxe133" })(""),
        Ye = (0, n.Z)("input", { target: "eayxe132" })({
          name: "1kit2kj",
          styles: "border-radius:4px;border:1px solid #bac0ca;padding:12px;line-height:24px;font-size:16px;width:100%;box-sizing:border-box"
        }),
        Ge = (0, n.Z)("div", { target: "eayxe131" })(""),
        We = (0, n.Z)("div", { target: "eayxe130" })({
          name: "19k90us",
          styles: "font-weight:600;line-height:20px;font-size:12px;margin-bottom:4px"
        }),
        Ke = ["title", "titleId"];
      function Ue() {
        return (
          (Ue = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ue.apply(this, arguments)
        );
      }
      function Je(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Xe(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Je(e, Ke);
        return i.createElement(
          "svg",
          Ue(
            {
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Re ||
            (Re = i.createElement("path", {
              d: "M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433292 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.997 7.34876 18.9424 4.80698 17.0677 2.93227C15.193 1.05756 12.6512 0.0030248 10 0V0ZM8.92857 5C8.92857 4.71584 9.04146 4.44332 9.24239 4.24238C9.44332 4.04145 9.71584 3.92857 10 3.92857C10.2842 3.92857 10.5567 4.04145 10.7576 4.24238C10.9585 4.44332 11.0714 4.71584 11.0714 5V9.28571C11.0714 9.56987 10.9585 9.84239 10.7576 10.0433C10.5567 10.2443 10.2842 10.3571 10 10.3571C9.71584 10.3571 9.44332 10.2443 9.24239 10.0433C9.04146 9.84239 8.92857 9.56987 8.92857 9.28571V5ZM10 15.7143C9.71746 15.7143 9.44126 15.6305 9.20633 15.4735C8.9714 15.3166 8.7883 15.0934 8.68017 14.8324C8.57205 14.5714 8.54376 14.2841 8.59888 14.007C8.654 13.7299 8.79006 13.4753 8.98985 13.2756C9.18964 13.0758 9.44419 12.9397 9.7213 12.8846C9.99842 12.8295 10.2857 12.8578 10.5467 12.9659C10.8077 13.074 11.0308 13.2571 11.1878 13.492C11.3448 13.727 11.4286 14.0032 11.4286 14.2857C11.4286 14.6646 11.2781 15.028 11.0102 15.2959C10.7422 15.5638 10.3789 15.7143 10 15.7143Z",
              fill: "#9B7C09"
            }))
        );
      }
      var Qe = i.forwardRef(Xe),
        $e = (r.p, r(98950));
      var et = (0, n.Z)("div", { target: "ejr7oty0" })({ name: "27ryvv", styles: "display:flex;gap:6px" });
      var tt,
        rt,
        nt = (0, n.Z)("div", { target: "e1lusd8z1" })({ name: "1xc5zxn", styles: "display:flex;flex-direction:column;gap:6px" }),
        it = (0, n.Z)(oe, { target: "e1lusd8z0" })({ name: "1qkltea", styles: "margin-left:5px" }),
        lt = ["title", "titleId"];
      function at() {
        return (
          (at = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          at.apply(this, arguments)
        );
      }
      function ot(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function ct(e, t) {
        var r = e.title,
          n = e.titleId,
          l = ot(e, lt);
        return i.createElement(
          "svg",
          at(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          tt ||
            (tt = i.createElement(
              "g",
              { clipPath: "url(#clip0_224_7318)" },
              i.createElement("path", {
                d: "M12 0C9.62662 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913445 7.4078C0.00519371 9.60051 -0.232446 12.0133 0.230576 14.3411C0.693599 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33114 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9963 8.81854 22.7308 5.76845 20.4812 3.51881C18.2316 1.26918 15.1815 0.00370522 12 0V0ZM18.927 8.2L12.082 17.489C12.0012 17.5962 11.8998 17.6863 11.7838 17.7539C11.6678 17.8215 11.5395 17.8654 11.4064 17.8829C11.2733 17.9004 11.138 17.8912 11.0085 17.8558C10.879 17.8205 10.7578 17.7597 10.652 17.677L5.764 13.769C5.66144 13.6869 5.57605 13.5855 5.5127 13.4704C5.44935 13.3553 5.40929 13.2289 5.39481 13.0983C5.36555 12.8346 5.44224 12.5701 5.608 12.363C5.77376 12.1559 6.01501 12.0231 6.27869 11.9938C6.54237 11.9646 6.80687 12.0412 7.014 12.207L11.09 15.468L17.317 7.017C17.392 6.90451 17.489 6.80838 17.6021 6.73443C17.7153 6.66048 17.8423 6.61025 17.9754 6.58676C18.1085 6.56327 18.245 6.56702 18.3767 6.59777C18.5083 6.62853 18.6323 6.68565 18.7413 6.7657C18.8502 6.84574 18.9418 6.94705 19.0105 7.06348C19.0792 7.17992 19.1235 7.30907 19.1409 7.44313C19.1582 7.57719 19.1482 7.71339 19.1115 7.84347C19.0747 7.97356 19.012 8.09485 18.927 8.2Z",
                fill: "#008A63"
              })
            )),
          rt ||
            (rt = i.createElement(
              "defs",
              null,
              i.createElement("clipPath", { id: "clip0_224_7318" }, i.createElement("rect", { width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var st = i.forwardRef(ct),
        dt = (r.p, r(6577));
      var ut,
        Ct,
        ft,
        ht = (0, n.Z)("div", { target: "etq5th62" })({ name: "27ryvv", styles: "display:flex;gap:6px" }),
        pt = (0, n.Z)(D, { target: "etq5th61" })({ name: "rwl30f", styles: "background:#e7f7f2" }),
        mt = (0, n.Z)(z, { target: "etq5th60" })({ name: "16ceglb", styles: "font-weight:600" }),
        gt = ["title", "titleId"];
      function xt() {
        return (
          (xt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          xt.apply(this, arguments)
        );
      }
      function vt(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function bt(e, t) {
        var r = e.title,
          n = e.titleId,
          l = vt(e, gt);
        return i.createElement(
          "svg",
          xt(
            {
              width: 48,
              height: 48,
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          ut || (ut = i.createElement("circle", { cx: 24, cy: 24, r: 24, fill: "#FAF4DE" })),
          Ct ||
            (Ct = i.createElement(
              "g",
              { clipPath: "url(#clip0_76_87980)" },
              i.createElement("path", {
                d: "M31.4539 19.5H16.5489C16.4793 19.4997 16.4104 19.514 16.3466 19.5419C16.2828 19.5698 16.2255 19.6107 16.1784 19.662C16.1314 19.7133 16.0955 19.7739 16.0732 19.8398C16.0509 19.9058 16.0426 19.9757 16.0489 20.045L17.3359 34.181C17.3811 34.6781 17.6105 35.1403 17.9791 35.4769C18.3477 35.8135 18.8288 36.0001 19.3279 36H28.6749C29.174 36.0001 29.6552 35.8135 30.0237 35.4769C30.3923 35.1403 30.6217 34.6781 30.6669 34.181L31.9519 20.045C31.9581 19.9759 31.9498 19.9062 31.9276 19.8404C31.9054 19.7747 31.8697 19.7142 31.8229 19.663C31.7761 19.6117 31.7191 19.5707 31.6556 19.5426C31.592 19.5146 31.5234 19.5001 31.4539 19.5ZM22.2539 32.5C22.2539 32.6989 22.1749 32.8897 22.0342 33.0303C21.8936 33.171 21.7028 33.25 21.5039 33.25C21.305 33.25 21.1142 33.171 20.9736 33.0303C20.8329 32.8897 20.7539 32.6989 20.7539 32.5V23.5C20.7539 23.3011 20.8329 23.1103 20.9736 22.9697C21.1142 22.829 21.305 22.75 21.5039 22.75C21.7028 22.75 21.8936 22.829 22.0342 22.9697C22.1749 23.1103 22.2539 23.3011 22.2539 23.5V32.5ZM27.2539 32.5C27.2539 32.6989 27.1749 32.8897 27.0342 33.0303C26.8936 33.171 26.7028 33.25 26.5039 33.25C26.305 33.25 26.1142 33.171 25.9736 33.0303C25.8329 32.8897 25.7539 32.6989 25.7539 32.5V23.5C25.7539 23.3011 25.8329 23.1103 25.9736 22.9697C26.1142 22.829 26.305 22.75 26.5039 22.75C26.7028 22.75 26.8936 22.829 27.0342 22.9697C27.1749 23.1103 27.2539 23.3011 27.2539 23.5V32.5Z",
                fill: "#9B7C09"
              }),
              i.createElement("path", {
                d: "M34 16H29.25C29.1837 16 29.1201 15.9737 29.0732 15.9268C29.0263 15.8799 29 15.8163 29 15.75V14.5C29 13.837 28.7366 13.2011 28.2678 12.7322C27.7989 12.2634 27.163 12 26.5 12H21.5C20.837 12 20.2011 12.2634 19.7322 12.7322C19.2634 13.2011 19 13.837 19 14.5V15.75C19 15.8163 18.9737 15.8799 18.9268 15.9268C18.8799 15.9737 18.8163 16 18.75 16H14C13.7348 16 13.4804 16.1054 13.2929 16.2929C13.1054 16.4804 13 16.7348 13 17C13 17.2652 13.1054 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18H34C34.2652 18 34.5196 17.8946 34.7071 17.7071C34.8946 17.5196 35 17.2652 35 17C35 16.7348 34.8946 16.4804 34.7071 16.2929C34.5196 16.1054 34.2652 16 34 16V16ZM21 15.75V14.5C21 14.3674 21.0527 14.2402 21.1464 14.1464C21.2402 14.0527 21.3674 14 21.5 14H26.5C26.6326 14 26.7598 14.0527 26.8536 14.1464C26.9473 14.2402 27 14.3674 27 14.5V15.75C27 15.8163 26.9737 15.8799 26.9268 15.9268C26.8799 15.9737 26.8163 16 26.75 16H21.25C21.1837 16 21.1201 15.9737 21.0732 15.9268C21.0263 15.8799 21 15.8163 21 15.75Z",
                fill: "#9B7C09"
              })
            )),
          ft ||
            (ft = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_76_87980" },
                i.createElement("rect", { width: 24, height: 24, fill: "white", transform: "translate(12 12)" })
              )
            ))
        );
      }
      var yt = i.forwardRef(bt);
      r.p;
      var wt = (0, n.Z)("div", { target: "eqwtx5b1" })({ name: "27ryvv", styles: "display:flex;gap:6px" }),
        Et = (0, n.Z)(z, { target: "eqwtx5b0" })({ name: "1gjnich", styles: "font-weight:600;color:#9b7c09;font-size:16px" });
      var jt,
        Ot = (function (e) {
          return (e.HAVE_A_LOOK = "Have a look"), (e.OK_GOT_IT = "Ok, got it"), (e.CANCEL = "Cancel"), e;
        })(Ot || {}),
        St = (0, n.Z)("div", { target: "e1yzxp442" })({ name: "27ryvv", styles: "display:flex;gap:6px" }),
        Zt = (0, n.Z)(D, { target: "e1yzxp441" })({ name: "rwl30f", styles: "background:#e7f7f2" }),
        kt = (0, n.Z)(z, { target: "e1yzxp440" })({ name: "16ceglb", styles: "font-weight:600" }),
        It =
          ((jt = {}),
          (0, d.Z)(
            jt,
            m.ACCEPTING,
            (0, M.jsx)(function () {
              var e = a(),
                t = e.closeModal,
                r = Z.a._({ id: "(Accepted Share Offers)" }),
                n = c(function (e) {
                  return e.activePendingItem;
                }),
                l = k(function (e) {
                  return e.pendingReceivedShares;
                }),
                s = n ? l[n] : void 0,
                d = c(function (e) {
                  return e.isLoading;
                }),
                C = (0, i.useState)(s ? s.shareName : ""),
                f = (0, O.Z)(C, 2),
                h = f[0],
                p = f[1],
                m = (0, i.useState)(r),
                g = (0, O.Z)(m, 2),
                x = g[0],
                v = g[1],
                b = (0, o.v9)(u.O),
                y = ze(window),
                w = (0, i.useMemo)(
                  function () {
                    return y ? "Sharing Center" : "Accept Shared Items Banner";
                  },
                  [y]
                ),
                E = (0, i.useMemo)(
                  function () {
                    return null !== s && void 0 !== s && s.record.password ? "Password" : "Secure Note";
                  },
                  [s]
                );
              return (
                (0, i.useEffect)(
                  function () {
                    s && e.sendSegmentEvent("Accept Shared Item Modal Shown", { type: E, source: w });
                  },
                  [s, e, w, E]
                ),
                s
                  ? (0, M.jsx)(
                      T,
                      { "data-automation-id": "AcceptItemModal" },
                      (0, M.jsx)(
                        H,
                        null,
                        (0, M.jsx)(D, null, (0, M.jsx)(fe, null)),
                        (0, M.jsx)(be, {
                          onClick: function () {
                            t(), e.sendSegmentEvent("Accept Shared Item Modal Clicked", { action: "Cancel", type: E });
                          }
                        })
                      ),
                      (0, M.jsx)(
                        L,
                        null,
                        (0, M.jsx)(N, null, (0, M.jsx)(S.Trans, { id: "{0} shared an item with you", values: { 0: s.sharerUsername } })),
                        (0, M.jsx)(
                          z,
                          null,
                          (0, M.jsx)(S.Trans, { id: "{0} shared secure information with you.", values: { 0: s.sharerUsername } })
                        ),
                        (0, M.jsx)(
                          Ne,
                          null,
                          (0, M.jsx)(
                            qe,
                            null,
                            (0, M.jsx)(We, null, (0, M.jsx)(S.Trans, { id: "Name" })),
                            (0, M.jsx)(Ye, {
                              "data-automation-id": "AcceptItemModalName",
                              value: h,
                              onChange: function (e) {
                                return p(e.target.value);
                              }
                            })
                          ),
                          (0, M.jsx)(
                            Ge,
                            null,
                            (0, M.jsx)(We, null, (0, M.jsx)(S.Trans, { id: "Folder" })),
                            (0, M.jsx)(Te, { options: b, onChange: v, value: x, defaultValue: r, exclude: "Shared-" })
                          )
                        )
                      ),
                      (0, M.jsx)(
                        V,
                        null,
                        (0, M.jsx)(
                          oe,
                          {
                            variant: "outlined",
                            color: "primary",
                            size: "lg",
                            onClick: function () {
                              t(), e.sendSegmentEvent("Accept Shared Item Modal Clicked", { action: "Cancel", type: E });
                            }
                          },
                          (0, M.jsx)(S.Trans, { id: "Cancel" })
                        ),
                        (0, M.jsx)(
                          oe,
                          {
                            "data-automation-id": "AcceptItemModalAcceptItems",
                            size: "lg",
                            disabled: d,
                            isLoading: d,
                            onClick: function () {
                              e.initiateAcceptShared(s.id, x || "(none)", h, w),
                                e.sendSegmentEvent("Accept Shared Item Modal Clicked", { action: "Accept Item", type: E });
                            }
                          },
                          (0, M.jsx)(S.Trans, { id: "Accept Item" })
                        )
                      )
                    )
                  : null
              );
            }, null)
          ),
          (0, d.Z)(
            jt,
            m.ACCEPTING_SUCCESS,
            (0, M.jsx)(function () {
              var e = a(),
                t = c(function (e) {
                  return e;
                }).acceptedItem,
                r = e.closeModal,
                n = ze(window),
                i = k(function (e) {
                  return e;
                }).passwords,
                l = n ? "Sharing Center" : "Accept Shared Items Banner";
              return (0, M.jsx)(
                T,
                { "data-automation-id": "LookModal" },
                (0, M.jsx)(
                  H,
                  null,
                  (0, M.jsx)(pt, null, (0, M.jsx)(st, null)),
                  (0, M.jsx)(be, {
                    onClick: function () {
                      r(),
                        e.sendSegmentEvent("Accept Share Confirmation Clicked", {
                          action: "Close",
                          source: l,
                          type: i[t.id] ? "Password" : "Secure Note"
                        });
                    }
                  })
                ),
                (0, M.jsx)(
                  L,
                  null,
                  (0, M.jsx)(N, null, (0, M.jsx)(S.Trans, { id: "Nice! You accepted a shared item" })),
                  (0, M.jsx)(
                    ht,
                    null,
                    (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "Find it here:" })),
                    (0, M.jsx)(mt, null, (0, M.jsx)(S.Trans, { id: "All Items>{0}", values: { 0: t.folder } }))
                  )
                ),
                (0, M.jsx)(
                  V,
                  null,
                  (0, M.jsx)(
                    oe,
                    {
                      "data-automation-id": "CancelSharedItemLookButton",
                      variant: "outlined",
                      color: "primary",
                      size: "lg",
                      onClick: function () {
                        r(),
                          (0, dt.V)(),
                          e.sendSegmentEvent("Accept Share Confirmation Clicked", {
                            action: "Cancel",
                            source: l,
                            type: i[t.id] ? "Password" : "Secure Note"
                          });
                      }
                    },
                    (0, M.jsx)(S.Trans, { id: "Cancel" })
                  ),
                  (0, M.jsx)(
                    oe,
                    {
                      "data-automation-id": "LookModalHaveALook",
                      size: "lg",
                      onClick: function () {
                        e.activateHighlightItem((0, Y.Z)({ type: "item" }, t)),
                          e.sendSegmentEvent("Accept Share Confirmation Clicked", {
                            action: "Have a look",
                            source: l,
                            type: i[t.id] ? "Password" : "Secure Note"
                          });
                      }
                    },
                    (0, M.jsx)(S.Trans, { id: "Have a look" })
                  )
                )
              );
            }, null)
          ),
          (0, d.Z)(
            jt,
            m.VERIFYING,
            (0, M.jsx)(function () {
              var e = a(),
                t = e.closeModal,
                r = (0, $e.e)(function (e) {
                  return e;
                }).username,
                n = c(function (e) {
                  return e.isLoading;
                });
              return (0, M.jsx)(
                T,
                { "data-automation-id": "VerifyYourEmailModal" },
                (0, M.jsx)(
                  H,
                  null,
                  (0, M.jsx)(D, null, (0, M.jsx)(Qe, null)),
                  (0, M.jsx)(be, {
                    onClick: function () {
                      return t();
                    }
                  })
                ),
                (0, M.jsx)(
                  L,
                  null,
                  (0, M.jsx)(N, null, (0, M.jsx)(S.Trans, { id: "Verify your email address" })),
                  (0, M.jsx)(
                    et,
                    null,
                    (0, M.jsx)(
                      z,
                      null,
                      (0, M.jsx)(S.Trans, {
                        id: "Sorry to slow you down, but before you can accept the item you need to verify your email address: {username}.",
                        values: { username: r }
                      })
                    )
                  )
                ),
                (0, M.jsx)(
                  V,
                  null,
                  (0, M.jsx)(
                    oe,
                    {
                      variant: "outlined",
                      color: "primary",
                      size: "lg",
                      onClick: function () {
                        return t();
                      }
                    },
                    (0, M.jsx)(S.Trans, { id: "Cancel" })
                  ),
                  (0, M.jsx)(
                    oe,
                    {
                      "data-automation-id": "VerifyYourEmailButton",
                      size: "lg",
                      disabled: n,
                      isLoading: n,
                      onClick: function () {
                        e.sendVerifyEmail();
                      }
                    },
                    (0, M.jsx)(S.Trans, { id: "Send verification email" })
                  )
                )
              );
            }, null)
          ),
          (0, d.Z)(
            jt,
            m.VERIFYING_SUCCESS,
            (0, M.jsx)(function () {
              var e = a(),
                t = e.closeModal,
                r = (0, $e.e)(function (e) {
                  return e;
                }).username,
                n = c(function (e) {
                  return e;
                }),
                i = n.actualItem,
                l = n.resendButtonPressed,
                o = n.isLoading,
                s = ze(window) ? "Sharing Center" : "Accept Shared Items Banner";
              return (0, M.jsx)(
                T,
                { "data-automation-id": "EmailSentModal" },
                (0, M.jsx)(
                  H,
                  null,
                  (0, M.jsx)(D, null, (0, M.jsx)(Qe, null)),
                  (0, M.jsx)(be, {
                    "data-automation-id": "EmailModalCloseButton",
                    onClick: function () {
                      return t();
                    }
                  })
                ),
                (0, M.jsx)(
                  L,
                  null,
                  (0, M.jsx)(N, null, (0, M.jsx)(S.Trans, { id: "Verification email sent \u2013 Please go verify!" })),
                  (0, M.jsx)(
                    nt,
                    null,
                    (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "Here\u2019s what to do:" })),
                    (0, M.jsx)(
                      z,
                      null,
                      (0, M.jsx)(S.Trans, { id: "1. Go to {username} to verify your address.", values: { username: r } })
                    ),
                    (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "2. Come back here and click Continue." })),
                    (0, M.jsx)(
                      z,
                      null,
                      (0, M.jsx)(S.Trans, { id: "Didn\u2019t get the email?" }),
                      (0, M.jsx)(
                        it,
                        {
                          "data-automation-id": "VerifyYourEmailResendButton",
                          disabled: l,
                          variant: "text",
                          color: "primary",
                          onClick: function () {
                            e.resendVerifyEmail();
                          }
                        },
                        (0, M.jsx)(S.Trans, { id: "Resend" })
                      )
                    )
                  )
                ),
                (0, M.jsx)(
                  V,
                  null,
                  (0, M.jsx)(
                    oe,
                    {
                      "data-automation-id": "EmailModalCancelButton",
                      variant: "outlined",
                      color: "primary",
                      size: "lg",
                      onClick: function () {
                        return t();
                      }
                    },
                    (0, M.jsx)(S.Trans, { id: "Cancel" })
                  ),
                  (0, M.jsx)(
                    oe,
                    {
                      "data-automation-id": "EmailSentContinueButton",
                      size: "lg",
                      disabled: o,
                      isLoading: o,
                      onClick: function () {
                        e.initiateAcceptShared(i.id, i.selectValue, i.sharerName, s);
                      }
                    },
                    (0, M.jsx)(S.Trans, { id: "Continue" })
                  )
                )
              );
            }, null)
          ),
          (0, d.Z)(
            jt,
            m.SHARED_FOLDER_LOOK,
            (0, M.jsx)(function () {
              var e = a(),
                t = c(function (e) {
                  return e;
                }),
                r = t.sharedFolderId,
                n = t.moveIntoSharedFolder,
                l = t.copyIntoSharedFolder,
                o = t.moveOutSharedFolder,
                s = k(function (e) {
                  return e;
                }).sharedFolders,
                d = e.closeModal,
                u = [].concat((0, x.Z)(n), (0, x.Z)(l)),
                C = s[r],
                f = function (t) {
                  e.sendSegmentEvent("Shared Folder Items Managed", {
                    Step: t === Ot.HAVE_A_LOOK || t === Ot.CANCEL ? "Items moved" : "Items removed",
                    Action: t
                  });
                };
              return (0, M.jsx)(
                i.Fragment,
                null,
                C &&
                  (0, M.jsx)(
                    T,
                    { "data-automation-id": "SharedFolderLookModal" },
                    (0, M.jsx)(
                      H,
                      null,
                      (0, M.jsx)(Zt, null, (0, M.jsx)(st, null)),
                      (0, M.jsx)(be, {
                        onClick: function () {
                          e.sendSegmentEvent("Shared Folder Items Managed", {
                            Step: u.length > 0 ? "Items moved" : "Items removed",
                            Action: "Close"
                          }),
                            d();
                        },
                        "data-automation-id": "SharedFolderLookModalExitIcon"
                      })
                    ),
                    u.length > 0 &&
                      (0, M.jsx)(
                        i.Fragment,
                        null,
                        (0, M.jsx)(
                          L,
                          null,
                          (0, M.jsx)(N, null, (0, M.jsx)(S.Trans, { id: "Nice! Items moved" })),
                          (0, M.jsx)(
                            St,
                            null,
                            (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "You moved items to the selected folder:" })),
                            (0, M.jsx)(kt, null, (0, M.jsx)(S.Trans, { id: "{0}", values: { 0: C.name } }))
                          ),
                          (0, M.jsx)(
                            St,
                            null,
                            (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "Recipients will find the items in their vault." }))
                          )
                        ),
                        (0, M.jsx)(
                          V,
                          null,
                          (0, M.jsx)(
                            oe,
                            {
                              variant: "outlined",
                              color: "primary",
                              size: "lg",
                              onClick: function () {
                                f(Ot.CANCEL), d();
                              }
                            },
                            (0, M.jsx)(S.Trans, { id: "Close" })
                          ),
                          (0, M.jsx)(
                            oe,
                            {
                              "data-automation-id": "LookModalHaveALook",
                              size: "lg",
                              onClick: function () {
                                e.activateHighlightItem({ type: "folder", id: r, folder: C.name }), f(Ot.HAVE_A_LOOK);
                              }
                            },
                            (0, M.jsx)(S.Trans, { id: "Have a look" })
                          )
                        )
                      ),
                    o.length > 0 &&
                      0 === u.length &&
                      (0, M.jsx)(
                        i.Fragment,
                        null,
                        (0, M.jsx)(
                          L,
                          null,
                          (0, M.jsx)(N, null, (0, M.jsx)(S.Trans, { id: "Nice! Items removed" })),
                          (0, M.jsx)(
                            St,
                            null,
                            (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "You removed the items from the selected folder:" })),
                            (0, M.jsx)(kt, null, (0, M.jsx)(S.Trans, { id: "{0}", values: { 0: C.name } }))
                          ),
                          (0, M.jsx)(
                            St,
                            null,
                            (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "Recipients won\u2019t find the items in their vault anymore." }))
                          )
                        ),
                        (0, M.jsx)(
                          V,
                          null,
                          (0, M.jsx)(
                            oe,
                            {
                              "data-automation-id": "LookModalCloseButton",
                              size: "lg",
                              onClick: function () {
                                f(Ot.OK_GOT_IT), d();
                              }
                            },
                            (0, M.jsx)(S.Trans, { id: "Ok, got it" })
                          )
                        )
                      )
                  )
              );
            }, null)
          ),
          (0, d.Z)(
            jt,
            m.DELETE_SHARED_FOLDER,
            (0, M.jsx)(function () {
              var e = a(),
                t = c(function (e) {
                  return e;
                }).deleteFolderId,
                r = k(function (e) {
                  return e;
                }).sharedFolders,
                n = e.closeModal,
                l = r[t];
              return (0, M.jsx)(
                i.Fragment,
                null,
                (0, M.jsx)(
                  T,
                  { "data-automation-id": "DeleteSharedFolderModal" },
                  (0, M.jsx)(
                    H,
                    null,
                    (0, M.jsx)(yt, null),
                    (0, M.jsx)(be, {
                      onClick: function () {
                        n();
                      },
                      "data-automation-id": "DeleteSharedFolderModalExitIcon"
                    })
                  ),
                  (0, M.jsx)(
                    i.Fragment,
                    null,
                    (0, M.jsx)(
                      L,
                      null,
                      (0, M.jsx)(N, null, (0, M.jsx)(S.Trans, { id: "Delete shared folder?" })),
                      (0, M.jsx)(
                        wt,
                        null,
                        (0, M.jsx)(z, null, (0, M.jsx)(S.Trans, { id: "It will be permanently removed from your vault." }))
                      ),
                      (0, M.jsx)(
                        wt,
                        null,
                        (0, M.jsx)(
                          z,
                          null,
                          (0, M.jsx)(
                            Et,
                            null,
                            (0, M.jsx)(S.Trans, {
                              id: "Shared folder name: {0}",
                              values: { 0: null === l || void 0 === l ? void 0 : l.name }
                            })
                          )
                        )
                      )
                    ),
                    (0, M.jsx)(
                      V,
                      null,
                      (0, M.jsx)(
                        oe,
                        {
                          "data-automation-id": "DeleteSharedFolderModalCancelButton",
                          variant: "outlined",
                          color: "primary",
                          size: "lg",
                          onClick: function () {
                            n();
                          }
                        },
                        (0, M.jsx)(S.Trans, { id: "Cancel" })
                      ),
                      (0, M.jsx)(
                        oe,
                        {
                          "data-automation-id": "DeleteSharedFolderModalDeleteButton",
                          size: "lg",
                          onClick: function () {
                            n(), e.deleteSharedFolder(t);
                          }
                        },
                        (0, M.jsx)(S.Trans, { id: "Delete" })
                      )
                    )
                  )
                )
              );
            }, null)
          ),
          jt),
        At = function () {
          var e = a().closeModal,
            t = c(function (e) {
              return e.status;
            });
          return (0, M.jsx)(_, { onOutsideClick: e, onEsc: e }, It[t] || null);
        },
        Pt = r(19024);
      var Mt = (0, n.Z)("div", { target: "ex15nzr2" })({
          name: "1g7ey10",
          styles: "display:flex;gap:8px;width:100%;justify-content:center"
        }),
        Ft = (0, n.Z)("div", { target: "ex15nzr1" })({ name: "1a87ekl", styles: "size:14px;line-height:20px" }),
        Bt = (0, n.Z)("div", { target: "ex15nzr0" })({
          name: "5m0m4",
          styles: "text-decoration:underline;size:14px;line-height:20px;cursor:pointer"
        }),
        _t = function () {
          var e = k(function (e) {
              return e;
            }).pendingReceivedShares,
            t = c(function (e) {
              return e;
            }).banners,
            r = a(),
            n = (0, i.useState)(""),
            l = (0, O.Z)(n, 2),
            o = l[0],
            s = l[1],
            d = (0, i.useMemo)(
              function () {
                return Object.values(e);
              },
              [e]
            );
          (0, i.useEffect)(
            function () {
              0 !== d.length && s(d[0].sharerUsername);
            },
            [d]
          );
          return (0, M.jsx)(
            Mt,
            { "data-automation-id": "AcceptSharedItemBannerWithLink" },
            (0, M.jsx)(Pt.r, null),
            (0, M.jsx)(
              Ft,
              null,
              (0, M.jsx)(S.Trans, {
                id: "{0, plural, one {{name} shared an item with you.} other {{name} shared # items with you.}}",
                values: {
                  0: d.filter(function (e) {
                    return e.sharerUsername === o;
                  }).length,
                  name: o
                }
              })
            ),
            (0, M.jsx)(
              Bt,
              {
                "data-automation-id": "AcceptSharedItemBannerWithLinkRespondNow",
                onClick: function () {
                  if (
                    (r.sendSegmentEvent("Accept Shared Item Banner Clicked", { Action: "Respond Now", ItemCount: Object.keys(e).length }),
                    d.length > 1)
                  )
                    r.navigateToSharingCenter();
                  else {
                    var n = d[0];
                    r.openAcceptItemModal(n.id), r.removeBanner(t[t.length - 1].id);
                  }
                }
              },
              (0, M.jsx)(S.Trans, { id: "Respond now" })
            )
          );
        };
      var Ht = (function (e) {
          return (e[(e.Outside = 0)] = "Outside"), (e[(e.Inside = 1)] = "Inside"), e;
        })(Ht || {}),
        Lt = { success: "#008a63", error: "#D32D27", warning: "#9B7C09", info: "#007AFF" },
        Tt = { success: "#E7F7F2", error: "#F7D8D7", warning: "#FBEFC3", info: "#E8F3FF" },
        Vt = { success: v.ag._({ id: "Success!" }), error: v.ag._({ id: "Error:" }), warning: v.ag._({ id: "Warning:" }) },
        Dt = (0, n.Z)("div", { target: "e1c547914" })(
          "padding:16px;display:flex;justify-content:space-between;align-items:center;background:",
          function (e) {
            var t = e.color;
            return Tt[t];
          },
          ";width:fill-available;position:absolute;transition:transform 300ms;transform:translate3d(\n    0,\n    ",
          function (e) {
            return e.bannerState === Ht.Outside ? "-300%" : "0";
          },
          ",\n    0\n  );"
        ),
        zt = (0, n.Z)("div", { target: "e1c547913" })({
          name: "1sngtf8",
          styles: "display:flex;justify-content:center;align-items:center;width:100%;gap:8px"
        }),
        Rt = (0, n.Z)("div", { target: "e1c547912" })({ name: "1edkb2e", styles: "font-size:14px;line-height:20px;color:#1b283c" }),
        Nt = (0, n.Z)("div", { target: "e1c547911" })({ name: "16ceglb", styles: "font-weight:600" }),
        qt = (0, n.Z)(xe, { target: "e1c547910" })(
          "cursor:pointer;path{fill:",
          function (e) {
            var t = e.color;
            return Lt[t];
          },
          ";}"
        ),
        Yt = function (e) {
          var t = e.id,
            r = e.color,
            n = e.message,
            l = e.componentType,
            o = e.duration,
            c = e.isPermanent,
            s = e.isClosable,
            d = e.isBannerTypeTextDisplayed,
            u = k(function (e) {
              return e;
            }).pendingReceivedShares,
            C = (0, i.useState)(Ht.Outside),
            f = (0, O.Z)(C, 2),
            h = f[0],
            p = f[1],
            m = a(),
            g = (0, i.useCallback)(
              function (e) {
                m.sendSegmentEvent("Accept Shared Item Banner Clicked", { Action: "Close", ItemCount: Object.keys(u).length }),
                  p(Ht.Outside),
                  setTimeout(function () {
                    "AcceptSharedItemBannerWithLink" === l && m.rejectBanner(), m.removeBanner(e);
                  }, 1e3);
              },
              [m, l, u]
            );
          return (
            (0, i.useEffect)(function () {
              var e = setTimeout(function () {
                p(Ht.Inside);
              }, 100);
              return function () {
                clearTimeout(e);
              };
            }, []),
            (0, i.useEffect)(
              function () {
                if (!c) {
                  var e = setTimeout(function () {
                    g(t);
                  }, o);
                  return function () {
                    clearTimeout(e);
                  };
                }
              },
              [c, t, o, g]
            ),
            (0, M.jsx)(
              Dt,
              { "data-automation-id": "Banner", color: r, bannerState: h },
              n &&
                !l &&
                (0, M.jsx)(
                  zt,
                  null,
                  "success" === r && (0, M.jsx)(st, null),
                  "info" === r && (0, M.jsx)(Pt.r, null),
                  d && (0, M.jsx)(Rt, null, (0, M.jsx)(Nt, null, Vt[r])),
                  (0, M.jsx)(Rt, null, n)
                ),
              !n && "AcceptSharedItemBannerWithLink" === l && (0, M.jsx)(_t, null),
              s &&
                (0, M.jsx)(qt, {
                  "data-automation-id": "BannerX",
                  color: r,
                  onClick: function () {
                    return g(t);
                  }
                })
            )
          );
        },
        Gt = (0, n.Z)("div", { target: "e1ir3an80" })(
          "position:fixed;top:60px;width:calc(\n    100% - ",
          function (e) {
            return e.isLeftColumnOpen ? "288px" : "60px";
          },
          "\n  );right:0;z-index:5;transition:width 300ms cubic-bezier(0.55, 0, 0.1, 1);"
        ),
        Wt = function () {
          var e = c(function (e) {
              return e.banners;
            }),
            t = (0, i.useContext)(s),
            r = (0, P.T)(t, "acceptSharedBanner"),
            n = (0, i.useState)(function () {
              var e = localStorage.getItem("userprefs") || "{}";
              return 1 === JSON.parse(e).leftMenuMaximize;
            }),
            l = (0, O.Z)(n, 2),
            a = l[0],
            o = l[1];
          return (
            (0, i.useEffect)(
              function () {
                if (t) {
                  var e = t.document.querySelector("#leftMenuMinimizeButton"),
                    r = new MutationObserver(function (t) {
                      var r,
                        n = (0, Ve.Z)(t);
                      try {
                        for (n.s(); !(r = n.n()).done; ) {
                          "attributes" === r.value.type && e && o(e.classList.contains("opened"));
                        }
                      } catch (i) {
                        n.e(i);
                      } finally {
                        n.f();
                      }
                    });
                  return (
                    r.observe(e, { attributes: !0, childList: !1, subtree: !1 }),
                    function () {
                      r.disconnect();
                    }
                  );
                }
              },
              [t]
            ),
            r &&
              (0, M.jsx)(
                A.Q,
                { container: r },
                (0, M.jsx)(
                  Gt,
                  { "data-automation-id": "BannerContainer", isLeftColumnOpen: a },
                  e.map(function (e) {
                    var t = e.id,
                      r = e.color,
                      n = e.message,
                      i = e.componentType,
                      l = e.duration,
                      a = e.isPermanent,
                      o = e.isClosable,
                      c = e.isBannerTypeTextDisplayed;
                    return (0, M.jsx)(Yt, {
                      key: t,
                      id: t,
                      color: r,
                      message: n,
                      componentType: i,
                      duration: l,
                      isPermanent: a,
                      isClosable: o,
                      isBannerTypeTextDisplayed: c
                    });
                  })
                )
              )
          );
        },
        Kt = r(46999),
        Ut = r(18950),
        Jt = r(19685);
      function Xt(e, t) {
        return Qt.apply(this, arguments);
      }
      function Qt() {
        return (
          (Qt = (0, Ut.Z)(
            (0, Kt.Z)().mark(function e(t, r) {
              var n,
                i = arguments;
              return (0, Kt.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = i.length > 2 && void 0 !== i[2] ? i[2] : 2e3),
                        e.abrupt(
                          "return",
                          new Promise(function (e, i) {
                            var l = r.document.querySelector(t);
                            if (l) return e(l);
                            var a = new MutationObserver(function () {
                              var n = r.document.querySelector(t);
                              n && (e(n), a.disconnect(), o && clearTimeout(o));
                            });
                            a.observe(r.document.body, { childList: !0, subtree: !0 });
                            var o = setTimeout(function () {
                              i("Element not found"), a.disconnect();
                            }, n);
                          })
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          Qt.apply(this, arguments)
        );
      }
      function $t(e) {
        var t = (0, Jt.T)("LPProxy");
        t &&
          e
            .split("\\")
            .reduce(function (e, t) {
              var r = 0 === e.length ? t : e[e.length - 1] + "\\" + t;
              return [].concat((0, x.Z)(e), [r]);
            }, [])
            .forEach(function (e) {
              var r = t.getGroupByName(e)._views[0];
              r && r.expand();
            });
      }
      function er(e) {
        e && (e.document.querySelector("#addMenu").style.display = "none");
      }
      function tr(e) {
        var t = e.closest("#mainScroll");
        t && t.scrollTo({ top: e.offsetTop - 300 });
      }
      function rr() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      function nr(e) {
        var t = (0, Jt.T)("LPProxy");
        if (t) return t.getGroupByName(e)._views[0]._element;
      }
      function ir() {
        return (ir = (0, Ut.Z)(
          (0, Kt.Z)().mark(function e(t, r) {
            var n, i, l, a, o, c, s, d;
            return (0, Kt.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      Xt('[aria-label="'.concat(v.ag._({ id: "Shared folder" }), ": ").concat(t.replace(/\\/g, "\\\\"), '"]'), r)
                    );
                  case 2:
                    return $t(t), (e.next = 5), rr();
                  case 5:
                    return (
                      tr((n = nr(t))),
                      er(r),
                      (i = n.getBoundingClientRect()),
                      (l = i.top),
                      (a = i.bottom),
                      (o = i.left),
                      (c = i.right),
                      (s = i.width),
                      (d = i.height),
                      e.abrupt("return", { width: s, height: d, left: o, right: c, top: l, bottom: a })
                    );
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function lr() {
        return (lr = (0, Ut.Z)(
          (0, Kt.Z)().mark(function e(t, r) {
            var n, i, l, a, o, c, s, d, u;
            return (0, Kt.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Xt('[data-alert-id="'.concat(t.id, '"]'), r);
                  case 2:
                    if (!(n = e.sent)) {
                      e.next = 11;
                      break;
                    }
                    if (((i = n.closest(".tile") || n.closest(".list")), $t(t.folder), !i)) {
                      e.next = 11;
                      break;
                    }
                    return (
                      tr(i),
                      er(r),
                      (l = i.getBoundingClientRect()),
                      (a = l.top),
                      (o = l.bottom),
                      (c = l.left),
                      (s = l.right),
                      (d = l.width),
                      (u = l.height),
                      e.abrupt("return", { width: d, height: u, left: c, right: s, top: a, bottom: o })
                    );
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ar(e, t) {
        return "folder" === e.type
          ? (function (e, t) {
              return ir.apply(this, arguments);
            })(e.folder, t)
          : (function (e, t) {
              return lr.apply(this, arguments);
            })(e, t);
      }
      var or = (0, n.Z)("div", { target: "ebba7qv6" })(""),
        cr = (0, n.Z)("div", { target: "ebba7qv5" })({
          name: "1vazhsu",
          styles:
            "position:fixed;z-index:10;animation-name:fadeIn;animation-duration:500ms;@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}"
        }),
        sr = (0, n.Z)(cr, { target: "ebba7qv4" })(
          "width:100%;top:0;left:0;height:",
          function (e) {
            return e.top + "px";
          },
          ";background:rgba(40, 57, 82, 0.7);"
        ),
        dr = (0, n.Z)(cr, { target: "ebba7qv3" })(
          "width:100%;bottom:0;left:0;height:calc(100% - ",
          function (e) {
            return e.bottom + "px";
          },
          ");background:rgba(40, 57, 82, 0.7);"
        ),
        ur = (0, n.Z)(cr, { target: "ebba7qv2" })(
          "height:",
          function (e) {
            return e.height + "px";
          },
          ";width:calc(",
          function (e) {
            return e.left + "px";
          },
          ");left:-8px;top:",
          function (e) {
            return e.top + "px";
          },
          ";background:rgba(40, 57, 82, 0.7);"
        ),
        Cr = (0, n.Z)(cr, { target: "ebba7qv1" })(
          "height:",
          function (e) {
            return e.height + "px";
          },
          ";width:calc(100% + 2px - ",
          function (e) {
            return e.right + "px";
          },
          ");right:0;top:",
          function (e) {
            return e.top + "px";
          },
          ";background:rgba(40, 57, 82, 0.7);"
        ),
        fr = (0, n.Z)(cr, { target: "ebba7qv0" })(
          "height:calc(",
          function (e) {
            return e.height + "px";
          },
          " - 4px);width:calc(",
          function (e) {
            return e.width + "px";
          },
          " + 5px);top:",
          function (e) {
            return e.top + "px";
          },
          ";left:calc(",
          function (e) {
            return e.left + "px";
          },
          " - 10px);background:transparent;box-shadow:0px 1px 3px 1px rgba(0, 24, 48, 0.15),0px 1px 63px 1px rgba(255, 255, 255, 0.6);border:2px solid white;border-radius:2px;"
        ),
        hr = function () {
          var e = (0, i.useContext)(s),
            t = (0, P.T)(e, "acceptSharedHighlight"),
            r = a(),
            n = c(function (e) {
              return e.highlightItem;
            }),
            l = (0, i.useState)(),
            o = (0, O.Z)(l, 2),
            d = o[0],
            u = o[1];
          return (
            (0, i.useEffect)(
              function () {
                return (
                  e &&
                    n &&
                    setTimeout(function () {
                      ar(n, e).then(u).catch(u);
                    }, 200),
                  function () {
                    e &&
                      (function (e) {
                        e && (e.document.querySelector("#addMenu").style.display = "initial");
                      })(e);
                  }
                );
              },
              [e, n]
            ),
            t &&
              (0, M.jsx)(
                A.Q,
                { container: t },
                (0, M.jsx)(
                  or,
                  {
                    "data-automation-id": "HighlightItem",
                    onClick: function () {
                      r.deactivateHighlightItem();
                    }
                  },
                  d &&
                    (0, M.jsx)(
                      i.Fragment,
                      null,
                      (0, M.jsx)(sr, d),
                      (0, M.jsx)(dr, d),
                      (0, M.jsx)(ur, d),
                      (0, M.jsx)(Cr, d),
                      (0, M.jsx)(fr, (0, q.Z)({ "data-automation-id": "CenterRectangle" }, d))
                    )
                )
              )
          );
        };
      var pr = (0, n.Z)("div", { target: "e1u4o4gi0" })({
        name: "xpzokq",
        styles:
          "padding:32px 24px 0;font-style:normal;font-weight:600;font-size:20px;line-height:24px;display:flex;justify-content:space-between;align-items:center"
      });
      var mr = (0, n.Z)("div", { target: "eahm30a0" })({
        name: "gieyo6",
        styles:
          "padding:0px 24px 0 24px;display:flex;flex-direction:column;flex:1;margin-top:30px;overflow:auto;font-style:normal;font-weight:400;font-size:16px;line-height:24px"
      });
      var gr = (0, n.Z)("div", { target: "e1kiijv80" })({
          name: "godkw1",
          styles: "padding:24px;display:flex;gap:8px;justify-content:end;border-top:1px solid #bac0ca"
        }),
        xr = (function (e) {
          return (e.asc = "asc"), (e.desc = "desc"), e;
        })({}),
        vr = function (e, t) {
          return t === xr.asc
            ? e.sort(function (e, t) {
                return e.name.localeCompare(t.name);
              })
            : e.sort(function (e, t) {
                return -1 * e.name.localeCompare(t.name);
              });
        };
      var br,
        yr,
        wr = (0, n.Z)("div", { target: "e3xsb5q2" })({
          name: "1mu7rkp",
          styles:
            "width:100%;box-sizing:border-box;display:flex;gap:14px;align-items:center;margin:16px 0;padding:8px 12px;background-color:#faf4de;border:1px solid #af7d08;border-radius:4px"
        }),
        Er = (0, n.Z)(Qe, { target: "e3xsb5q1" })({ name: "d47oax", styles: "min-width:20px" }),
        jr = (0, n.Z)("div", { target: "e3xsb5q0" })({ name: "1edkb2e", styles: "font-size:14px;line-height:20px;color:#1b283c" }),
        Or = function (e) {
          var t = e.children;
          return (0, M.jsx)(wr, { "data-automation-id": "DrawerAlert" }, (0, M.jsx)(Er, null), (0, M.jsx)(jr, null, t));
        },
        Sr = ["title", "titleId"];
      function Zr() {
        return (
          (Zr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Zr.apply(this, arguments)
        );
      }
      function kr(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Ir(e, t) {
        var r = e.title,
          n = e.titleId,
          l = kr(e, Sr);
        return i.createElement(
          "svg",
          Zr(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          br ||
            (br = i.createElement(
              "g",
              { clipPath: "url(#clip0_224_7365)" },
              i.createElement("path", {
                d: "M23.414 20.591L18.769 15.946C20.1833 13.8289 20.7596 11.2614 20.3857 8.74287C20.0118 6.22438 18.7145 3.935 16.7461 2.32004C14.7777 0.705087 12.279 -0.119968 9.73603 0.00536207C7.19302 0.130692 4.78754 1.19745 2.9875 2.99812C1.18746 4.7988 0.121559 7.20465 -0.00287252 9.7477C-0.127304 12.2908 0.698635 14.7892 2.31428 16.757C3.92993 18.7248 6.21978 20.0213 8.7384 20.3943C11.257 20.7673 13.8243 20.1901 15.941 18.775L20.586 23.419C20.9642 23.788 21.4716 23.9945 22 23.9945C22.5283 23.9945 23.0358 23.788 23.414 23.419C23.7889 23.044 23.9996 22.5354 23.9996 22.005C23.9996 21.4747 23.7889 20.9661 23.414 20.591ZM10.25 3.00502C11.6839 3.00502 13.0856 3.43023 14.2779 4.22687C15.4701 5.02351 16.3994 6.1558 16.9481 7.48057C17.4968 8.80533 17.6404 10.2631 17.3607 11.6694C17.0809 13.0758 16.3904 14.3676 15.3765 15.3815C14.3626 16.3955 13.0707 17.086 11.6644 17.3657C10.258 17.6455 8.80029 17.5019 7.47553 16.9531C6.15076 16.4044 5.01847 15.4752 4.22183 14.2829C3.42519 13.0907 2.99998 11.6889 2.99998 10.255C3.0021 8.33285 3.76662 6.49002 5.1258 5.13084C6.48498 3.77166 8.32781 3.00714 10.25 3.00502Z",
                fill: "#40526D"
              })
            )),
          yr ||
            (yr = i.createElement(
              "defs",
              null,
              i.createElement("clipPath", { id: "clip0_224_7365" }, i.createElement("rect", { width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var Ar,
        Pr,
        Mr = i.forwardRef(Ir),
        Fr = (r.p, ["title", "titleId"]);
      function Br() {
        return (
          (Br = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Br.apply(this, arguments)
        );
      }
      function _r(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Hr(e, t) {
        var r = e.title,
          n = e.titleId,
          l = _r(e, Fr);
        return i.createElement(
          "svg",
          Br(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Ar ||
            (Ar = i.createElement(
              "g",
              { clipPath: "url(#clip0_224_7346)" },
              i.createElement("path", {
                d: "M13.75 7.75C13.7502 8.71872 13.5231 9.67397 13.087 10.539C13.0404 10.6337 13.025 10.7407 13.043 10.8447C13.061 10.9487 13.1114 11.0444 13.187 11.118C14.065 11.9989 15.2563 12.4958 16.5 12.5C17.7598 12.5 18.968 11.9996 19.8588 11.1088C20.7496 10.218 21.25 9.00978 21.25 7.75C21.25 6.49022 20.7496 5.28204 19.8588 4.39124C18.968 3.50045 17.7598 3 16.5 3C15.2546 3.00286 14.0612 3.49992 13.182 4.382C13.1064 4.4556 13.056 4.55126 13.038 4.65526C13.02 4.75927 13.0354 4.86629 13.082 4.961C13.5198 5.82561 13.7486 6.78088 13.75 7.75Z",
                fill: "#9BA4B0"
              }),
              i.createElement("path", {
                d: "M16.5 13C15.6915 13.0003 14.8885 13.133 14.123 13.393C14.0427 13.4198 13.9705 13.4665 13.9133 13.5288C13.856 13.5911 13.8154 13.667 13.7955 13.7492C13.7755 13.8314 13.7767 13.9174 13.799 13.9991C13.8213 14.0807 13.864 14.1553 13.923 14.216C15.5736 15.8911 16.4993 18.1483 16.5 20.5C16.5 20.6326 16.5527 20.7598 16.6464 20.8536C16.7402 20.9473 16.8674 21 17 21H23.5C23.6326 21 23.7598 20.9473 23.8535 20.8536C23.9473 20.7598 24 20.6326 24 20.5C23.9979 18.5115 23.207 16.6051 21.801 15.199C20.3949 13.793 18.4885 13.0021 16.5 13Z",
                fill: "#9BA4B0"
              }),
              i.createElement("path", {
                d: "M7.5 12.5C10.1234 12.5 12.25 10.3734 12.25 7.75C12.25 5.12665 10.1234 3 7.5 3C4.87665 3 2.75 5.12665 2.75 7.75C2.75 10.3734 4.87665 12.5 7.5 12.5Z",
                fill: "#9BA4B0"
              }),
              i.createElement("path", {
                d: "M15 20.5C15 18.5109 14.2098 16.6032 12.8033 15.1967C11.3968 13.7902 9.48912 13 7.5 13C5.51088 13 3.60322 13.7902 2.1967 15.1967C0.790176 16.6032 0 18.5109 0 20.5C0 20.6326 0.0526784 20.7598 0.146447 20.8536C0.240215 20.9473 0.367392 21 0.5 21H14.5C14.6326 21 14.7598 20.9473 14.8536 20.8536C14.9473 20.7598 15 20.6326 15 20.5Z",
                fill: "#9BA4B0"
              })
            )),
          Pr ||
            (Pr = i.createElement(
              "defs",
              null,
              i.createElement("clipPath", { id: "clip0_224_7346" }, i.createElement("rect", { width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var Lr,
        Tr,
        Vr = i.forwardRef(Hr),
        Dr = (r.p, ["title", "titleId"]);
      function zr() {
        return (
          (zr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          zr.apply(this, arguments)
        );
      }
      function Rr(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Nr(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Rr(e, Dr);
        return i.createElement(
          "svg",
          zr(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Lr ||
            (Lr = i.createElement(
              "g",
              { clipPath: "url(#clip0_2740_3355)" },
              i.createElement("path", {
                d: "M23.9041 8.66153C23.7941 8.36845 23.5965 8.11562 23.3377 7.9368C23.0789 7.75798 22.7713 7.66167 22.4558 7.66075H16.1857C16.0791 7.66082 15.975 7.62805 15.8879 7.56695C15.8008 7.50585 15.735 7.41944 15.6995 7.31966L13.4488 0.995335C13.3386 0.703027 13.1409 0.451074 12.8823 0.273196C12.6236 0.0953175 12.3164 0 12.0016 0C11.6868 0 11.3795 0.0953175 11.1209 0.273196C10.8622 0.451074 10.6646 0.703027 10.5543 0.995335L10.5492 1.01167L8.30359 7.31966C8.26822 7.41928 8.20258 7.50557 8.11569 7.56665C8.0288 7.62774 7.92494 7.66061 7.81842 7.66075H1.54628C1.22883 7.66051 0.919006 7.75722 0.658953 7.93772C0.3989 8.11821 0.201238 8.37374 0.0928505 8.66955C-0.0155371 8.96535 -0.0293896 9.28708 0.0531771 9.59097C0.135744 9.89485 0.310722 10.1662 0.554314 10.368L5.89424 14.7591C5.97411 14.8249 6.0321 14.913 6.06059 15.0119C6.08908 15.1109 6.08675 15.216 6.0539 15.3137L3.81039 21.9832C3.70671 22.2915 3.70466 22.6246 3.80454 22.9342C3.90443 23.2438 4.10106 23.5139 4.36601 23.7054C4.63096 23.8969 4.95048 23.9998 5.27835 23.9994C5.60623 23.9989 5.92546 23.8951 6.18987 23.7029L11.6967 19.6997C11.785 19.6356 11.8916 19.601 12.0011 19.601C12.1105 19.601 12.2171 19.6356 12.3054 19.6997L17.8102 23.7018C18.0745 23.8947 18.3939 23.9991 18.722 24C19.0502 24.0009 19.3701 23.8981 19.6354 23.7066C19.9008 23.5152 20.0977 23.2449 20.1977 22.935C20.2977 22.6252 20.2956 22.2918 20.1917 21.9832L17.9482 15.3096C17.9154 15.212 17.913 15.1068 17.9415 15.0078C17.97 14.9089 18.028 14.8208 18.1079 14.7551L23.4581 10.3578C23.6986 10.1542 23.8703 9.88246 23.95 9.57914C24.0298 9.27582 24.0138 8.95554 23.9041 8.66153Z",
                fill: "#EDBF0E"
              })
            )),
          Tr ||
            (Tr = i.createElement(
              "defs",
              null,
              i.createElement("clipPath", { id: "clip0_2740_3355" }, i.createElement("rect", { width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var qr,
        Yr,
        Gr,
        Wr = i.forwardRef(Nr),
        Kr = (r.p, r(48582)),
        Ur = function (e) {
          var t = e.children,
            r = e.message,
            n = e.placement,
            l = e.isVisible;
          return void 0 === l || l
            ? (0, M.jsx)(
                Kr.J2,
                { placement: n, closeOnBlur: !1, trigger: "hover" },
                (0, M.jsx)(Kr.xo, null, t),
                (0, M.jsx)(
                  Kr.yk,
                  { color: "white", bg: "black", "data-automation-id": "Tooltip", maxW: { base: "100%", lg: "max-content" } },
                  (0, M.jsx)(Kr.QH, { bg: "black" }),
                  (0, M.jsx)(Kr.b, { "data-automation-id": "TooltipMessage" }, r)
                )
              )
            : (0, M.jsx)(i.Fragment, null, t);
        },
        Jr = ["title", "titleId"];
      function Xr() {
        return (
          (Xr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Xr.apply(this, arguments)
        );
      }
      function Qr(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function $r(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Qr(e, Jr);
        return i.createElement(
          "svg",
          Xr(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          qr ||
            (qr = i.createElement("path", {
              d: "M5.14991 0.547619H50.8501C53.3919 0.547619 55.4524 2.60813 55.4524 5.14991V50.8501C55.4524 53.3919 53.3919 55.4524 50.8501 55.4524H5.14991C2.60813 55.4524 0.547619 53.3919 0.547619 50.8501V5.14991C0.547619 2.60813 2.60813 0.547619 5.14991 0.547619Z",
              fill: "#E7F7F2",
              stroke: "#D0EFE6",
              strokeWidth: 1.09524
            })),
          Yr ||
            (Yr = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282369)" },
              i.createElement("path", {
                d: "M39.41 16.8562C39.2522 16.824 39.1102 16.7383 39.0082 16.6135C38.9062 16.4888 38.8503 16.3327 38.85 16.1716V14.0002C38.85 13.2576 38.555 12.5454 38.0299 12.0203C37.5048 11.4952 36.7926 11.2002 36.05 11.2002H18.55C17.4361 11.2002 16.3678 11.6427 15.5802 12.4303C14.7925 13.218 14.35 14.2863 14.35 15.4002V40.6002C14.35 41.7141 14.7925 42.7824 15.5802 43.57C16.3678 44.3577 17.4361 44.8002 18.55 44.8002H38.85C39.5926 44.8002 40.3048 44.5052 40.8299 43.9801C41.355 43.455 41.65 42.7428 41.65 42.0002V19.6002C41.6502 18.9547 41.4273 18.329 41.0191 17.829C40.6109 17.3289 40.0425 16.9853 39.41 16.8562ZM17.15 15.4002C17.15 15.0289 17.2975 14.6728 17.5601 14.4102C17.8226 14.1477 18.1787 14.0002 18.55 14.0002H35.7C35.7929 14.0002 35.8819 14.0371 35.9475 14.1027C36.0132 14.1683 36.05 14.2574 36.05 14.3502V16.4502C36.05 16.543 36.0132 16.632 35.9475 16.6977C35.8819 16.7633 35.7929 16.8002 35.7 16.8002H18.55C18.1787 16.8002 17.8226 16.6527 17.5601 16.3901C17.2975 16.1276 17.15 15.7715 17.15 15.4002ZM36.1536 39.1778C36.088 39.2566 36.0058 39.3201 35.9129 39.3636C35.82 39.4072 35.7186 39.4298 35.616 39.4298H20.384C20.2816 39.43 20.1803 39.4076 20.0875 39.3644C19.9946 39.3212 19.9123 39.258 19.8465 39.1795C19.7807 39.101 19.7329 39.009 19.7065 38.91C19.6801 38.811 19.6758 38.7075 19.6938 38.6066C19.8195 37.8778 20.0487 37.1706 20.3742 36.5066C21 35.2522 22.575 34.4822 25.4534 33.4154C25.5744 33.0756 25.5705 32.7039 25.4422 32.3668C24.3156 30.9517 23.7588 29.1665 23.8812 27.3618C23.8521 26.8028 23.937 26.2438 24.1308 25.7187C24.3246 25.1936 24.6233 24.7135 25.0086 24.3075C25.394 23.9016 25.8579 23.5783 26.3722 23.3574C26.8865 23.1365 27.4403 23.0225 28 23.0225C28.5598 23.0225 29.1136 23.1365 29.6279 23.3574C30.1422 23.5783 30.6061 23.9016 30.9914 24.3075C31.3768 24.7135 31.6754 25.1936 31.8693 25.7187C32.0631 26.2438 32.148 26.8028 32.1188 27.3618C32.2403 29.181 31.6748 30.9795 30.534 32.4018C30.42 32.7387 30.4329 33.1056 30.5704 33.4336C33.425 34.485 35 35.2536 35.6258 36.5136C35.9514 37.1776 36.1805 37.8848 36.3062 38.6136C36.323 38.7131 36.318 38.815 36.2916 38.9124C36.2653 39.0098 36.2182 39.1003 36.1536 39.1778Z",
                fill: "#008A63"
              })
            )),
          Gr ||
            (Gr = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282369" },
                i.createElement("rect", { width: 33.6, height: 33.6, fill: "white", transform: "translate(11.2 11.2002)" })
              )
            ))
        );
      }
      var en,
        tn,
        rn,
        nn = i.forwardRef($r),
        ln = (r.p, ["title", "titleId"]);
      function an() {
        return (
          (an = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          an.apply(this, arguments)
        );
      }
      function on(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function cn(e, t) {
        var r = e.title,
          n = e.titleId,
          l = on(e, ln);
        return i.createElement(
          "svg",
          an(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          en ||
            (en = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282372)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
              i.createElement("path", {
                d: "M15.5556 24.8892V35.778H20.2222V24.8892H15.5556ZM24.8889 24.8892V35.778H29.5556V24.8892H24.8889ZM12.4445 43.5558H42V38.8892H12.4445V43.5558ZM34.2222 24.8892V35.778H38.8889V24.8892H34.2222ZM27.2222 10.8892L12.4445 18.6669V21.778H42V18.6669L27.2222 10.8892Z",
                fill: "#5A6A81"
              })
            )),
          tn || (tn = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          rn ||
            (rn = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282372" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              )
            ))
        );
      }
      var sn,
        dn,
        un,
        Cn = i.forwardRef(cn),
        fn = (r.p, ["title", "titleId"]);
      function hn() {
        return (
          (hn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          hn.apply(this, arguments)
        );
      }
      function pn(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function mn(e, t) {
        var r = e.title,
          n = e.titleId,
          l = pn(e, fn);
        return i.createElement(
          "svg",
          hn(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          sn ||
            (sn = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282368)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EDF2FB" }),
              i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33331 9.3335)", fill: "#EDF2FB" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282368)" },
                i.createElement("path", {
                  d: "M39.6666 24.1113H38.4999V19.8335C38.4999 17.0487 37.3937 14.378 35.4246 12.4089C33.4554 10.4397 30.7847 9.3335 27.9999 9.3335C25.2152 9.3335 22.5445 10.4397 20.5753 12.4089C18.6062 14.378 17.4999 17.0487 17.4999 19.8335V24.1113H16.3333C15.5082 24.1113 14.7168 24.4391 14.1334 25.0225C13.5499 25.6059 13.2222 26.3973 13.2222 27.2224V43.5557C13.2222 44.3808 13.5499 45.1722 14.1334 45.7556C14.7168 46.3391 15.5082 46.6668 16.3333 46.6668H39.6666C40.4917 46.6668 41.2831 46.3391 41.8665 45.7556C42.4499 45.1722 42.7777 44.3808 42.7777 43.5557V27.2224C42.7777 26.3973 42.4499 25.6059 41.8665 25.0225C41.2831 24.4391 40.4917 24.1113 39.6666 24.1113ZM27.9999 38.1113C27.3846 38.1113 26.7831 37.9288 26.2715 37.587C25.7599 37.2451 25.3611 36.7592 25.1257 36.1907C24.8902 35.6223 24.8286 34.9967 24.9486 34.3932C25.0687 33.7897 25.365 33.2354 25.8001 32.8003C26.2352 32.3652 26.7895 32.0689 27.393 31.9488C27.9965 31.8288 28.622 31.8904 29.1905 32.1259C29.759 32.3613 30.2449 32.7601 30.5867 33.2717C30.9286 33.7833 31.1111 34.3848 31.1111 35.0002C31.1111 35.8253 30.7833 36.6166 30.1998 37.2001C29.6164 37.7835 28.8251 38.1113 27.9999 38.1113ZM34.6111 23.3335C34.6111 23.5398 34.5291 23.7376 34.3833 23.8835C34.2374 24.0293 34.0396 24.1113 33.8333 24.1113H22.1666C21.9603 24.1113 21.7625 24.0293 21.6166 23.8835C21.4708 23.7376 21.3888 23.5398 21.3888 23.3335V19.8335C21.3888 18.0801 22.0854 16.3986 23.3252 15.1587C24.565 13.9189 26.2466 13.2224 27.9999 13.2224C29.7533 13.2224 31.4349 13.9189 32.6747 15.1587C33.9145 16.3986 34.6111 18.0801 34.6111 19.8335V23.3335Z",
                  fill: "#264887"
                })
              )
            )),
          dn || (dn = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D4E9FF" })),
          un ||
            (un = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282368" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282368" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33331 9.3335)" })
              )
            ))
        );
      }
      var gn,
        xn,
        vn,
        bn = i.forwardRef(mn),
        yn = (r.p, ["title", "titleId"]);
      function wn() {
        return (
          (wn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          wn.apply(this, arguments)
        );
      }
      function En(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function jn(e, t) {
        var r = e.title,
          n = e.titleId,
          l = En(e, yn);
        return i.createElement(
          "svg",
          wn(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          gn ||
            (gn = i.createElement("path", {
              d: "M5.14991 0.547619H50.8501C53.3919 0.547619 55.4524 2.60813 55.4524 5.14991V50.8501C55.4524 53.3919 53.3919 55.4524 50.8501 55.4524H5.14991C2.60813 55.4524 0.547619 53.3919 0.547619 50.8501V5.14991C0.547619 2.60813 2.60813 0.547619 5.14991 0.547619Z",
              fill: "#FAF4DE",
              stroke: "#FBEFC3",
              strokeWidth: 1.09524
            })),
          xn ||
            (xn = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282370)" },
              i.createElement("path", {
                d: "M11.9 36.4004C11.9 37.143 12.195 37.8552 12.7201 38.3803C13.2452 38.9054 13.9574 39.2004 14.7 39.2004H41.3C42.0426 39.2004 42.7548 38.9054 43.2799 38.3803C43.805 37.8552 44.1 37.143 44.1 36.4004V24.5004C44.1 24.4076 44.0632 24.3185 43.9975 24.2529C43.9319 24.1873 43.8429 24.1504 43.75 24.1504H12.25C12.1572 24.1504 12.0682 24.1873 12.0025 24.2529C11.9369 24.3185 11.9 24.4076 11.9 24.5004V36.4004ZM35 33.2504H39.2C39.4785 33.2504 39.7456 33.361 39.9425 33.5579C40.1394 33.7548 40.25 34.0219 40.25 34.3004C40.25 34.5789 40.1394 34.8459 39.9425 35.0429C39.7456 35.2398 39.4785 35.3504 39.2 35.3504H35C34.7215 35.3504 34.4545 35.2398 34.2576 35.0429C34.0607 34.8459 33.95 34.5789 33.95 34.3004C33.95 34.0219 34.0607 33.7548 34.2576 33.5579C34.4545 33.361 34.7215 33.2504 35 33.2504ZM17.5 27.6504H28.7C28.9785 27.6504 29.2456 27.761 29.4425 27.9579C29.6394 28.1548 29.75 28.4219 29.75 28.7004C29.75 28.9789 29.6394 29.2459 29.4425 29.4429C29.2456 29.6398 28.9785 29.7504 28.7 29.7504H17.5C17.2215 29.7504 16.9545 29.6398 16.7576 29.4429C16.5606 29.2459 16.45 28.9789 16.45 28.7004C16.45 28.4219 16.5606 28.1548 16.7576 27.9579C16.9545 27.761 17.2215 27.6504 17.5 27.6504ZM17.5 33.2504H21.7C21.9785 33.2504 22.2456 33.361 22.4425 33.5579C22.6394 33.7548 22.75 34.0219 22.75 34.3004C22.75 34.5789 22.6394 34.8459 22.4425 35.0429C22.2456 35.2398 21.9785 35.3504 21.7 35.3504H17.5C17.2215 35.3504 16.9545 35.2398 16.7576 35.0429C16.5606 34.8459 16.45 34.5789 16.45 34.3004C16.45 34.0219 16.5606 33.7548 16.7576 33.5579C16.9545 33.361 17.2215 33.2504 17.5 33.2504Z",
                fill: "#C79F0C"
              }),
              i.createElement("path", {
                d: "M44.1 19.6003C44.1 18.8577 43.805 18.1455 43.2799 17.6204C42.7548 17.0953 42.0426 16.8003 41.3 16.8003H14.7C13.9574 16.8003 13.2452 17.0953 12.7201 17.6204C12.195 18.1455 11.9 18.8577 11.9 19.6003V21.7003C11.9 21.7931 11.9369 21.8821 12.0025 21.9478C12.0682 22.0134 12.1572 22.0503 12.25 22.0503H43.75C43.8429 22.0503 43.9319 22.0134 43.9975 21.9478C44.0632 21.8821 44.1 21.7931 44.1 21.7003V19.6003Z",
                fill: "#C79F0C"
              })
            )),
          vn ||
            (vn = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282370" },
                i.createElement("rect", { width: 33.6, height: 33.6, fill: "white", transform: "translate(11.2 11.2002)" })
              )
            ))
        );
      }
      var On,
        Sn,
        Zn,
        kn = i.forwardRef(jn),
        In = (r.p, ["title", "titleId"]);
      function An() {
        return (
          (An = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          An.apply(this, arguments)
        );
      }
      function Pn(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Mn(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Pn(e, In);
        return i.createElement(
          "svg",
          An(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          On ||
            (On = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282371)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33331 9.3335)", fill: "#EBEEEF" }),
              i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M42.7961 13.2042C43.2823 13.6904 43.5555 14.3498 43.5555 15.0374V31.1115C40.6853 31.1115 35.8292 31.1115 33.1094 31.1115C32.0049 31.1115 31.1111 32.0053 31.1111 33.1099C31.1111 35.8296 31.1111 40.6857 31.1111 43.5559H15.037C14.3494 43.5559 13.69 43.2828 13.2037 42.7966C12.7175 42.3104 12.4444 41.6509 12.4444 40.9633V15.0374C12.4444 14.3498 12.7175 13.6904 13.2037 13.2042C13.69 12.718 14.3494 12.4448 15.037 12.4448H40.9629C41.6505 12.4448 42.3099 12.718 42.7961 13.2042ZM43.5555 32.667C42.4198 32.667 36.1318 32.667 33.6625 32.667C33.1102 32.667 32.6666 33.1148 32.6666 33.667V43.5559H33.1851C33.3557 43.5569 33.5248 43.5242 33.6828 43.4597C33.8407 43.3952 33.9844 43.3001 34.1055 43.18L43.1796 34.1059C43.2997 33.9848 43.3948 33.8411 43.4593 33.6832C43.5238 33.5253 43.5565 33.3562 43.5555 33.1856V32.667ZM37.4858 21.5207H19.5457C19.2483 21.5207 18.9631 21.6436 18.7528 21.8624C18.5426 22.0812 18.4244 22.3779 18.4244 22.6873C18.4244 22.9968 18.5426 23.2935 18.7528 23.5123C18.9631 23.7311 19.2483 23.854 19.5457 23.854H37.4858C37.7832 23.854 38.0684 23.7311 38.2787 23.5123C38.4889 23.2935 38.6071 22.9968 38.6071 22.6873C38.6071 22.3779 38.4889 22.0812 38.2787 21.8624C38.0684 21.6436 37.7832 21.5207 37.4858 21.5207ZM19.5457 27.7429H28.5158C28.8131 27.7429 29.0983 27.8658 29.3086 28.0846C29.5189 28.3034 29.637 28.6001 29.637 28.9096C29.637 29.219 29.5189 29.5157 29.3086 29.7345C29.0983 29.9533 28.8131 30.0762 28.5158 30.0762H19.5457C19.2483 30.0762 18.9631 29.9533 18.7528 29.7345C18.5426 29.5157 18.4244 29.219 18.4244 28.9096C18.4244 28.6001 18.5426 28.3034 18.7528 28.0846C18.9631 27.8658 19.2483 27.7429 19.5457 27.7429Z",
                fill: "#5A6A81"
              })
            )),
          Sn || (Sn = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          Zn ||
            (Zn = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282371" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              )
            ))
        );
      }
      var Fn,
        Bn,
        _n,
        Hn = i.forwardRef(Mn),
        Ln = (r.p, ["title", "titleId"]);
      function Tn() {
        return (
          (Tn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Tn.apply(this, arguments)
        );
      }
      function Vn(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Dn(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Vn(e, Ln);
        return i.createElement(
          "svg",
          Tn(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Fn ||
            (Fn = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282373)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
              i.createElement("path", {
                d: "M43.5556 25.4647C43.9681 25.4647 44.3638 25.3009 44.6555 25.0091C44.9472 24.7174 45.1111 24.3217 45.1111 23.9092V22.3536C45.1111 21.9411 44.9472 21.5454 44.6555 21.2537C44.3638 20.962 43.9681 20.7981 43.5556 20.7981H40.2889C40.2067 20.7991 40.1263 20.7741 40.0592 20.7266C39.9921 20.6791 39.9418 20.6115 39.9156 20.5336L38.2044 15.4003C38.0431 14.9439 37.7438 14.549 37.348 14.2703C36.9523 13.9916 36.4796 13.8429 35.9955 13.8447H20.0044C19.5204 13.8429 19.0477 13.9916 18.652 14.2703C18.2562 14.549 17.9569 14.9439 17.7956 15.4003L16.0844 20.5336C16.0581 20.6115 16.0078 20.6791 15.9408 20.7266C15.8737 20.7741 15.7933 20.7991 15.7111 20.7981H12.4444C12.0319 20.7981 11.6362 20.962 11.3445 21.2537C11.0528 21.5454 10.8889 21.9411 10.8889 22.3536V23.9092C10.8889 24.3217 11.0528 24.7174 11.3445 25.0091C11.6362 25.3009 12.0319 25.4647 12.4444 25.4647H13.5178C13.5949 25.4677 13.6697 25.4928 13.7331 25.5369C13.7965 25.581 13.8459 25.6423 13.8756 25.7136C13.9158 25.7763 13.9371 25.8492 13.9371 25.9236C13.9371 25.9981 13.9158 26.071 13.8756 26.1336L11.34 28.5759C11.0557 28.874 10.8946 29.2684 10.8889 29.6803V34.7981C10.8938 35.0964 10.9844 35.3869 11.1499 35.6352C11.3154 35.8834 11.5488 36.0788 11.8222 36.1981C11.8918 36.2284 11.9509 36.2785 11.9924 36.3421C12.0339 36.4056 12.0558 36.48 12.0556 36.5559V40.2581C12.0596 40.7725 12.2658 41.2647 12.6296 41.6285C12.9933 41.9923 13.4856 42.1985 14 42.2025H17.1111C17.6255 42.1985 18.1178 41.9923 18.4815 41.6285C18.8453 41.2647 19.0515 40.7725 19.0556 40.2581V36.7425C19.0556 36.6394 19.0965 36.5405 19.1695 36.4675C19.2424 36.3946 19.3413 36.3536 19.4444 36.3536H36.5556C36.6587 36.3536 36.7576 36.3946 36.8305 36.4675C36.9035 36.5405 36.9444 36.6394 36.9444 36.7425V40.2581C36.9485 40.7725 37.1547 41.2647 37.5184 41.6285C37.8822 41.9923 38.3744 42.1985 38.8889 42.2025H42C42.5144 42.1985 43.0067 41.9923 43.3704 41.6285C43.7342 41.2647 43.9404 40.7725 43.9444 40.2581V36.5559C43.9442 36.48 43.9661 36.4056 44.0076 36.3421C44.0491 36.2785 44.1082 36.2284 44.1778 36.1981C44.4512 36.0788 44.6846 35.8834 44.8501 35.6352C45.0155 35.3869 45.1062 35.0964 45.1111 34.7981V29.6803C45.1054 29.2684 44.9442 28.874 44.66 28.5759L42.2022 26.1336C42.1497 26.0789 42.1143 26.0099 42.1005 25.9353C42.0867 25.8606 42.095 25.7836 42.1244 25.7136C42.1541 25.6423 42.2035 25.581 42.2669 25.5369C42.3303 25.4928 42.405 25.4677 42.4822 25.4647H43.5556ZM35.1556 16.9092C35.2391 16.9116 35.3198 16.9398 35.3867 16.9899C35.4535 17.0401 35.5032 17.1097 35.5289 17.1892L37.3333 22.6336C37.3634 22.6857 37.3792 22.7447 37.3792 22.8047C37.3792 22.8648 37.3634 22.9238 37.3333 22.9759C37.299 23.0261 37.2524 23.0668 37.1979 23.094C37.1435 23.1212 37.083 23.1341 37.0222 23.1314H19.0244C18.9636 23.1341 18.9031 23.1212 18.8487 23.094C18.7943 23.0668 18.7477 23.0261 18.7133 22.9759C18.6833 22.9238 18.6675 22.8648 18.6675 22.8047C18.6675 22.7447 18.6833 22.6857 18.7133 22.6336L20.5178 17.1892C20.5435 17.1097 20.5931 17.0401 20.66 16.9899C20.7268 16.9398 20.8076 16.9116 20.8911 16.9092H35.1556ZM18.6667 32.4647H14C13.7937 32.4647 13.5959 32.3828 13.45 32.2369C13.3042 32.0911 13.2222 31.8932 13.2222 31.687V30.1314C13.2222 29.9251 13.3042 29.7273 13.45 29.5814C13.5959 29.4356 13.7937 29.3536 14 29.3536H18.6667C18.8729 29.3536 19.0708 29.4356 19.2166 29.5814C19.3625 29.7273 19.4444 29.9251 19.4444 30.1314V31.687C19.4444 31.8932 19.3625 32.0911 19.2166 32.2369C19.0708 32.3828 18.8729 32.4647 18.6667 32.4647ZM36.5556 30.1314C36.5556 29.9251 36.6375 29.7273 36.7834 29.5814C36.9292 29.4356 37.127 29.3536 37.3333 29.3536H42C42.2063 29.3536 42.4041 29.4356 42.55 29.5814C42.6958 29.7273 42.7778 29.9251 42.7778 30.1314V31.687C42.7778 31.8932 42.6958 32.0911 42.55 32.2369C42.4041 32.3828 42.2063 32.4647 42 32.4647H37.3333C37.127 32.4647 36.9292 32.3828 36.7834 32.2369C36.6375 32.0911 36.5556 31.8932 36.5556 31.687V30.1314Z",
                fill: "#5A6A81"
              })
            )),
          Bn || (Bn = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          _n ||
            (_n = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282373" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              )
            ))
        );
      }
      var zn,
        Rn,
        Nn,
        qn = i.forwardRef(Dn),
        Yn = (r.p, ["title", "titleId"]);
      function Gn() {
        return (
          (Gn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Gn.apply(this, arguments)
        );
      }
      function Wn(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Kn(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Wn(e, Yn);
        return i.createElement(
          "svg",
          Gn(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          zn ||
            (zn = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282383)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282383)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33333 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M46.4956 18.4023C46.4495 18.3716 46.3954 18.3551 46.34 18.3551C46.2846 18.3551 46.2305 18.3716 46.1844 18.4023L31.0178 33.569C30.6222 33.9659 30.1518 34.2803 29.6337 34.494C29.1157 34.7076 28.5604 34.8162 28 34.8134C26.8651 34.8112 25.7762 34.3645 24.9667 33.569L9.81555 18.4646C9.76951 18.4338 9.71537 18.4174 9.65999 18.4174C9.60462 18.4174 9.55048 18.4338 9.50444 18.4646C9.46144 18.4815 9.42331 18.5089 9.39346 18.5441C9.3636 18.5794 9.34294 18.6216 9.33333 18.6668V37.3334C9.33333 38.1586 9.66111 38.9499 10.2446 39.5333C10.828 40.1168 11.6193 40.4446 12.4444 40.4446H43.5556C44.3807 40.4446 45.172 40.1168 45.7554 39.5333C46.3389 38.9499 46.6667 38.1586 46.6667 37.3334V18.6668C46.668 18.6106 46.6523 18.5554 46.6218 18.5082C46.5913 18.4611 46.5473 18.4242 46.4956 18.4023Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M26.6156 31.9823C26.9843 32.3406 27.4781 32.541 27.9922 32.541C28.5063 32.541 29.0002 32.3406 29.3689 31.9823L44.4422 16.909C44.5437 16.807 44.6148 16.6788 44.6478 16.5387C44.6807 16.3987 44.6742 16.2522 44.6289 16.1157C44.4578 15.5557 43.9756 15.5557 43.5556 15.5557H12.4444C12.0089 15.5557 11.5422 15.5557 11.3711 16.1157C11.3258 16.2522 11.3193 16.3987 11.3522 16.5387C11.3852 16.6788 11.4563 16.807 11.5578 16.909L26.6156 31.9823Z",
                  fill: "#5A6A81"
                })
              )
            )),
          Rn || (Rn = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          Nn ||
            (Nn = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282383" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282383" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33333 9.3335)" })
              )
            ))
        );
      }
      var Un,
        Jn,
        Xn,
        Qn = i.forwardRef(Kn),
        $n = (r.p, ["title", "titleId"]);
      function ei() {
        return (
          (ei = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ei.apply(this, arguments)
        );
      }
      function ti(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function ri(e, t) {
        var r = e.title,
          n = e.titleId,
          l = ti(e, $n);
        return i.createElement(
          "svg",
          ei(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Un ||
            (Un = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282384)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282384)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33333 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M42.8867 28.2025H34.8911C34.7397 28.2039 34.5919 28.2486 34.4652 28.3313C34.3384 28.414 34.2379 28.5312 34.1756 28.6692L32.3867 32.6669C32.1997 33.0731 31.9021 33.4184 31.5279 33.6633C31.1538 33.9082 30.7182 34.0427 30.2711 34.0514V34.0514C29.8266 34.0491 29.3918 33.9207 29.0173 33.6812C28.6428 33.4416 28.344 33.1007 28.1556 32.698L24.8889 25.7758C24.86 25.7128 24.8142 25.659 24.7565 25.6205C24.6988 25.5821 24.6315 25.5604 24.5622 25.558C24.4946 25.5492 24.4259 25.5608 24.365 25.5913C24.304 25.6218 24.2535 25.6698 24.22 25.7292L23.2556 27.1603C23.0426 27.4809 22.7536 27.7439 22.4143 27.9257C22.075 28.1075 21.696 28.2026 21.3111 28.2025H13.1133C13.0357 28.2035 12.9601 28.2277 12.8963 28.2721C12.8325 28.3165 12.7835 28.3789 12.7556 28.4514C12.7259 28.5225 12.7189 28.601 12.7356 28.6762C12.7523 28.7514 12.7919 28.8196 12.8489 28.8714L26.8489 43.2758C26.9949 43.4413 27.1744 43.5739 27.3755 43.6647C27.5767 43.7555 27.7949 43.8025 28.0156 43.8025C28.2363 43.8025 28.4544 43.7555 28.6556 43.6647C28.8567 43.5739 29.0362 43.4413 29.1822 43.2758L43.1822 28.8714C43.2317 28.8144 43.2642 28.7448 43.2762 28.6703C43.2882 28.5959 43.2791 28.5195 43.25 28.45C43.2209 28.3804 43.1729 28.3204 43.1114 28.2766C43.05 28.2329 42.9775 28.2072 42.9022 28.2025H42.8867Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M45.6711 17.3757C44.9925 16.0533 44.0123 14.9092 42.8097 14.0358C41.6071 13.1624 40.2159 12.5842 38.7485 12.348C37.2811 12.1117 35.7787 12.2241 34.3628 12.6759C32.9469 13.1278 31.6571 13.9064 30.5978 14.949L28.5289 16.8468C28.3819 16.9738 28.1942 17.0436 28 17.0436C27.8058 17.0436 27.6181 16.9738 27.4711 16.8468L25.4022 14.949C24.3429 13.9064 23.0531 13.1278 21.6372 12.6759C20.2213 12.2241 18.7189 12.1117 17.2515 12.348C15.7841 12.5842 14.3929 13.1624 13.1903 14.0358C11.9877 14.9092 11.0075 16.0533 10.3289 17.3757C9.76404 18.4809 9.43126 19.6899 9.35101 20.9285C9.27076 22.1671 9.44473 23.409 9.86222 24.5779C9.91657 24.7282 10.0159 24.8581 10.1467 24.95C10.2775 25.0418 10.4335 25.0912 10.5933 25.0912H20.4556C20.5843 25.0927 20.7113 25.0622 20.8254 25.0025C20.9394 24.9427 21.0368 24.8557 21.1089 24.749L22.7578 22.2757C22.9875 21.9303 23.3051 21.6523 23.678 21.4705C24.0508 21.2887 24.4654 21.2096 24.879 21.2413C25.2926 21.273 25.6902 21.4143 26.031 21.6508C26.3718 21.8873 26.6434 22.2104 26.8178 22.5868L29.9289 29.1201C29.9588 29.1903 30.0086 29.2501 30.0722 29.2921C30.1358 29.3342 30.2104 29.3566 30.2867 29.3566C30.3629 29.3566 30.4375 29.3342 30.5011 29.2921C30.5647 29.2501 30.6146 29.1903 30.6444 29.1201L31.8111 26.4757C31.9945 26.0636 32.2934 25.7136 32.6717 25.4679C33.0499 25.2222 33.4912 25.0913 33.9422 25.0912H45.4689C45.6287 25.0912 45.7847 25.0418 45.9155 24.95C46.0463 24.8581 46.1457 24.7282 46.2 24.5779C46.608 23.4048 46.7715 22.1607 46.6806 20.9221C46.5896 19.6834 46.2461 18.4765 45.6711 17.3757Z",
                  fill: "#5A6A81"
                })
              )
            )),
          Jn || (Jn = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          Xn ||
            (Xn = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282384" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282384" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33333 9.3335)" })
              )
            ))
        );
      }
      var ni,
        ii,
        li,
        ai = i.forwardRef(ri),
        oi = (r.p, ["title", "titleId"]);
      function ci() {
        return (
          (ci = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ci.apply(this, arguments)
        );
      }
      function si(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function di(e, t) {
        var r = e.title,
          n = e.titleId,
          l = si(e, oi);
        return i.createElement(
          "svg",
          ci(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          ni ||
            (ni = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282379)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
              i.createElement("path", {
                d: "M43.5556 11.667H12.4444C11.8256 11.667 11.2321 11.9128 10.7945 12.3504C10.3569 12.788 10.1111 13.3815 10.1111 14.0003V35.0781C10.1131 35.3803 10.1753 35.6792 10.2943 35.957C10.4132 36.2349 10.5864 36.4862 10.8037 36.6963C11.021 36.9064 11.2781 37.071 11.5598 37.1804C11.8416 37.2898 12.1423 37.3419 12.4444 37.3337H17.1111V43.5559C17.1086 43.6981 17.1469 43.8381 17.2213 43.9594C17.2957 44.0806 17.4032 44.1781 17.5311 44.2403C17.6493 44.3167 17.7871 44.3573 17.9278 44.3573C18.0685 44.3573 18.2062 44.3167 18.3244 44.2403L28.2489 37.3337H43.5556C44.1744 37.3337 44.7679 37.0878 45.2055 36.6502C45.6431 36.2127 45.8889 35.6192 45.8889 35.0003V14.0003C45.8889 13.3815 45.6431 12.788 45.2055 12.3504C44.7679 11.9128 44.1744 11.667 43.5556 11.667ZM17.5 28.0003C17.504 27.6922 17.6282 27.3977 17.8462 27.1798C18.0641 26.9619 18.3585 26.8377 18.6667 26.8337H37.3333C37.6428 26.8337 37.9395 26.9566 38.1583 27.1754C38.3771 27.3942 38.5 27.6909 38.5 28.0003C38.5 28.3097 38.3771 28.6065 38.1583 28.8253C37.9395 29.0441 37.6428 29.167 37.3333 29.167H18.6667C18.3585 29.163 18.0641 29.0388 17.8462 28.8208C17.6282 28.6029 17.504 28.3085 17.5 28.0003ZM37.3333 22.167H18.6667C18.3573 22.167 18.0605 22.0441 17.8417 21.8253C17.6229 21.6065 17.5 21.3097 17.5 21.0003C17.5 20.6909 17.6229 20.3942 17.8417 20.1754C18.0605 19.9566 18.3573 19.8337 18.6667 19.8337H37.3333C37.6428 19.8337 37.9395 19.9566 38.1583 20.1754C38.3771 20.3942 38.5 20.6909 38.5 21.0003C38.5 21.3097 38.3771 21.6065 38.1583 21.8253C37.9395 22.0441 37.6428 22.167 37.3333 22.167Z",
                fill: "#5A6A81"
              })
            )),
          ii || (ii = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          li ||
            (li = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282379" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              )
            ))
        );
      }
      var ui,
        Ci,
        fi,
        hi = i.forwardRef(di),
        pi = (r.p, ["title", "titleId"]);
      function mi() {
        return (
          (mi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          mi.apply(this, arguments)
        );
      }
      function gi(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function xi(e, t) {
        var r = e.title,
          n = e.titleId,
          l = gi(e, pi);
        return i.createElement(
          "svg",
          mi(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          ui ||
            (ui = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282385)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282385)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33333 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M26.9422 35.6224C26.889 35.5963 26.8304 35.5827 26.7711 35.5827C26.7118 35.5827 26.6533 35.5963 26.6 35.6224C26.5526 35.6594 26.514 35.7065 26.4871 35.7604C26.4602 35.8142 26.4456 35.8733 26.4444 35.9335V42.3268C26.4444 43.4614 26.8951 44.5494 27.6974 45.3517C28.4996 46.1539 29.5877 46.6046 30.7222 46.6046C31.8568 46.6046 32.9448 46.1539 33.7471 45.3517C34.5493 44.5494 35 43.4614 35 42.3268C35 41.9143 34.8361 41.5186 34.5444 41.2269C34.2527 40.9352 33.857 40.7713 33.4444 40.7713C33.0319 40.7713 32.6362 40.9352 32.3445 41.2269C32.0528 41.5186 31.8889 41.9143 31.8889 42.3268C31.8889 42.6362 31.766 42.933 31.5472 43.1518C31.3284 43.3706 31.0316 43.4935 30.7222 43.4935C30.4128 43.4935 30.1161 43.3706 29.8973 43.1518C29.6785 42.933 29.5556 42.6362 29.5556 42.3268V35.9957C29.5544 35.9356 29.5398 35.8764 29.5129 35.8226C29.486 35.7688 29.4474 35.7216 29.4 35.6846C29.3467 35.6585 29.2882 35.6449 29.2289 35.6449C29.1696 35.6449 29.111 35.6585 29.0578 35.6846C28.3679 35.8922 27.6321 35.8922 26.9422 35.6846V35.6224Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M28 9.3335C27.5874 9.3335 27.1918 9.49738 26.9001 9.78911C26.6083 10.0808 26.4444 10.4765 26.4444 10.8891V11.3868C26.4451 11.4824 26.4106 11.5748 26.3475 11.6465C26.2844 11.7183 26.1971 11.7643 26.1022 11.7757C21.3929 12.3117 17.0564 14.5961 13.951 18.1768C10.8456 21.7575 9.19769 26.3735 9.33333 31.1113V31.8891C9.33333 32.3016 9.49722 32.6973 9.78894 32.989C10.0807 33.2807 10.4763 33.4446 10.8889 33.4446C11.3014 33.4446 11.6971 33.2807 11.9888 32.989C12.2806 32.6973 12.4444 32.3016 12.4444 31.8891C12.4444 31.0646 13.5333 30.3335 14.7778 30.3335C16.0222 30.3335 17.1111 31.1113 17.1111 31.8891C17.1111 32.3016 17.275 32.6973 17.5667 32.989C17.8584 33.2807 18.2541 33.4446 18.6667 33.4446C19.0792 33.4446 19.4749 33.2807 19.7666 32.989C20.0583 32.6973 20.2222 32.3016 20.2222 31.8891C20.2222 31.2513 21.4356 30.3335 23.3333 30.3335C25.2311 30.3335 26.4444 31.2513 26.4444 31.8891C26.4444 32.3016 26.6083 32.6973 26.9001 32.989C27.1918 33.2807 27.5874 33.4446 28 33.4446C28.4126 33.4446 28.8082 33.2807 29.0999 32.989C29.3917 32.6973 29.5556 32.3016 29.5556 31.8891C29.5556 31.2513 30.7689 30.3335 32.6667 30.3335C34.5644 30.3335 35.7778 31.2513 35.7778 31.8891C35.7778 32.3016 35.9417 32.6973 36.2334 32.989C36.5251 33.2807 36.9208 33.4446 37.3333 33.4446C37.7459 33.4446 38.1416 33.2807 38.4333 32.989C38.725 32.6973 38.8889 32.3016 38.8889 31.8891C38.8889 31.0646 39.9778 30.3335 41.2222 30.3335C42.4667 30.3335 43.5556 31.0646 43.5556 31.8891C43.5556 32.3016 43.7194 32.6973 44.0112 32.989C44.3029 33.2807 44.6986 33.4446 45.1111 33.4446C45.5237 33.4446 45.9193 33.2807 46.2111 32.989C46.5028 32.6973 46.6667 32.3016 46.6667 31.8891V31.1113C46.8023 26.3735 45.1543 21.7575 42.049 18.1768C38.9436 14.5961 34.6071 12.3117 29.8978 11.7757C29.8029 11.7643 29.7156 11.7183 29.6525 11.6465C29.5894 11.5748 29.5549 11.4824 29.5556 11.3868V10.8891C29.5556 10.4765 29.3917 10.0808 29.0999 9.78911C28.8082 9.49738 28.4126 9.3335 28 9.3335Z",
                  fill: "#5A6A81"
                })
              )
            )),
          Ci || (Ci = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          fi ||
            (fi = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282385" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282385" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33333 9.3335)" })
              )
            ))
        );
      }
      var vi,
        bi,
        yi,
        wi = i.forwardRef(xi),
        Ei = (r.p, ["title", "titleId"]);
      function ji() {
        return (
          (ji = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ji.apply(this, arguments)
        );
      }
      function Oi(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Si(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Oi(e, Ei);
        return i.createElement(
          "svg",
          ji(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          vi ||
            (vi = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282378)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282378)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33333 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M46.6667 16.3333C46.6667 15.5082 46.3389 14.7168 45.7554 14.1334C45.172 13.5499 44.3807 13.2222 43.5556 13.2222H12.4444C11.6193 13.2222 10.828 13.5499 10.2446 14.1334C9.66111 14.7168 9.33333 15.5082 9.33333 16.3333V39.6666C9.33333 40.4917 9.66111 41.2831 10.2446 41.8665C10.828 42.4499 11.6193 42.7777 12.4444 42.7777H17.1111C17.5237 42.7777 17.9193 42.6138 18.2111 42.3221C18.5028 42.0304 18.6667 41.6347 18.6667 41.2222V40.0555C18.6667 39.7461 18.7896 39.4493 19.0084 39.2305C19.2272 39.0118 19.5239 38.8888 19.8333 38.8888C20.1427 38.8888 20.4395 39.0118 20.6583 39.2305C20.8771 39.4493 21 39.7461 21 40.0555V41.2222C21 41.6347 21.1639 42.0304 21.4556 42.3221C21.7473 42.6138 22.143 42.7777 22.5556 42.7777H33.4444C33.857 42.7777 34.2527 42.6138 34.5444 42.3221C34.8361 42.0304 35 41.6347 35 41.2222V40.0555C35 39.7461 35.1229 39.4493 35.3417 39.2305C35.5605 39.0118 35.8572 38.8888 36.1667 38.8888C36.4761 38.8888 36.7728 39.0118 36.9916 39.2305C37.2104 39.4493 37.3333 39.7461 37.3333 40.0555V41.2222C37.3333 41.6347 37.4972 42.0304 37.7889 42.3221C38.0807 42.6138 38.4763 42.7777 38.8889 42.7777H43.5556C44.3807 42.7777 45.172 42.4499 45.7554 41.8665C46.3389 41.2831 46.6667 40.4917 46.6667 39.6666V16.3333ZM43.5556 38.8888C43.5556 39.0951 43.4736 39.2929 43.3277 39.4388C43.1819 39.5847 42.9841 39.6666 42.7778 39.6666H41.0822C40.9091 39.6675 40.7409 39.6095 40.6052 39.502C40.4695 39.3946 40.3744 39.2442 40.3356 39.0755C40.1186 38.1323 39.5882 37.2905 38.831 36.6878C38.0737 36.085 37.1345 35.7568 36.1667 35.7568C35.1988 35.7568 34.2596 36.085 33.5024 36.6878C32.7452 37.2905 32.2148 38.1323 31.9978 39.0755C31.9589 39.2442 31.8638 39.3946 31.7281 39.502C31.5924 39.6095 31.4242 39.6675 31.2511 39.6666H24.7489C24.5758 39.6675 24.4076 39.6095 24.2719 39.502C24.1362 39.3946 24.0411 39.2442 24.0022 39.0755C23.7852 38.1323 23.2548 37.2905 22.4976 36.6878C21.7404 36.085 20.8012 35.7568 19.8333 35.7568C18.8655 35.7568 17.9262 36.085 17.169 36.6878C16.4118 37.2905 15.8814 38.1323 15.6644 39.0755C15.6256 39.2442 15.5305 39.3946 15.3948 39.502C15.2591 39.6095 15.0909 39.6675 14.9178 39.6666H13.2222C13.0159 39.6666 12.8181 39.5847 12.6722 39.4388C12.5264 39.2929 12.4444 39.0951 12.4444 38.8888V17.1111C12.4432 17.0091 12.4633 16.9079 12.5035 16.8141C12.5437 16.7204 12.603 16.6361 12.6778 16.5666C12.7472 16.4919 12.8315 16.4325 12.9253 16.3923C13.0191 16.3522 13.1202 16.332 13.2222 16.3333H42.7778C42.9841 16.3333 43.1819 16.4152 43.3277 16.5611C43.4736 16.7069 43.5556 16.9048 43.5556 17.1111V38.8888Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M31.5 27.2223C31.504 27.5305 31.6282 27.8249 31.8462 28.0428C32.0641 28.2608 32.3585 28.385 32.6667 28.389H40.1022C40.4116 28.389 40.7084 28.2661 40.9272 28.0473C41.146 27.8285 41.2689 27.5318 41.2689 27.2223C41.2689 26.9129 41.146 26.6162 40.9272 26.3974C40.7084 26.1786 40.4116 26.0557 40.1022 26.0557H32.6667C32.3585 26.0597 32.0641 26.1839 31.8462 26.4018C31.6282 26.6198 31.504 26.9142 31.5 27.2223V27.2223Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M31.5 31.8888C31.504 32.197 31.6282 32.4914 31.8462 32.7093C32.0641 32.9273 32.3585 33.0515 32.6667 33.0555H36.7267C37.0361 33.0555 37.3328 32.9326 37.5516 32.7138C37.7704 32.495 37.8933 32.1983 37.8933 31.8888C37.8933 31.5794 37.7704 31.2827 37.5516 31.0639C37.3328 30.8451 37.0361 30.7222 36.7267 30.7222H32.6667C32.3585 30.7262 32.0641 30.8504 31.8462 31.0683C31.6282 31.2863 31.504 31.5807 31.5 31.8888V31.8888Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M32.6667 23.7225H40.4444C40.7539 23.7225 41.0506 23.5996 41.2694 23.3808C41.4882 23.162 41.6111 22.8652 41.6111 22.5558C41.6111 22.2464 41.4882 21.9497 41.2694 21.7309C41.0506 21.5121 40.7539 21.3892 40.4444 21.3892H32.6667C32.3572 21.3892 32.0605 21.5121 31.8417 21.7309C31.6229 21.9497 31.5 22.2464 31.5 22.5558C31.5 22.8652 31.6229 23.162 31.8417 23.3808C32.0605 23.5996 32.3572 23.7225 32.6667 23.7225Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M21.5135 26.4444C23.2317 26.4444 24.6246 25.0515 24.6246 23.3333C24.6246 21.6151 23.2317 20.2222 21.5135 20.2222C19.7952 20.2222 18.4023 21.6151 18.4023 23.3333C18.4023 25.0515 19.7952 26.4444 21.5135 26.4444Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M17.1117 32.6667H25.885C26.0118 32.6676 26.1368 32.6375 26.2493 32.579C26.3618 32.5205 26.4583 32.4354 26.5303 32.3311C26.6024 32.2269 26.6479 32.1065 26.6629 31.9807C26.6778 31.8548 26.6618 31.7272 26.6161 31.6089C26.2261 30.5648 25.5308 29.6622 24.6209 29.0186C23.7109 28.375 22.6283 28.0201 21.5139 28C20.3968 28.0169 19.3108 28.3704 18.3978 29.0143C17.4848 29.6581 16.7872 30.5624 16.3961 31.6089C16.351 31.7259 16.3348 31.8522 16.3489 31.9768C16.3631 32.1015 16.4072 32.2208 16.4775 32.3248C16.5478 32.4287 16.6422 32.514 16.7526 32.5736C16.8631 32.6331 16.9862 32.665 17.1117 32.6667Z",
                  fill: "#5A6A81"
                })
              )
            )),
          bi || (bi = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          yi ||
            (yi = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282378" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282378" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33333 9.3335)" })
              )
            ))
        );
      }
      var Zi,
        ki,
        Ii,
        Ai = i.forwardRef(Si),
        Pi = (r.p, ["title", "titleId"]);
      function Mi() {
        return (
          (Mi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Mi.apply(this, arguments)
        );
      }
      function Fi(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Bi(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Fi(e, Pi);
        return i.createElement(
          "svg",
          Mi(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Zi ||
            (Zi = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282375)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282375)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M22.2439 30.3334C22.3467 30.3355 22.4487 30.3169 22.5441 30.2785C22.6394 30.2402 22.726 30.183 22.7986 30.1103C22.8713 30.0377 22.9285 29.9511 22.9668 29.8558C23.0052 29.7604 23.0238 29.6583 23.0217 29.5556C23.1094 28.1835 23.3071 26.8206 23.6128 25.4801C23.6479 25.3373 23.6401 25.1873 23.5903 25.0489C23.5405 24.9105 23.4509 24.79 23.3328 24.7023C23.2011 24.6085 23.0434 24.5581 22.8817 24.5581C22.72 24.5581 22.5623 24.6085 22.4306 24.7023C20.9022 25.8674 19.8072 27.51 19.3195 29.369C19.2878 29.4861 19.284 29.6089 19.3083 29.7278C19.3326 29.8466 19.3844 29.9581 19.4595 30.0534C19.5311 30.1459 19.6231 30.2207 19.7283 30.272C19.8335 30.3232 19.9491 30.3496 20.0662 30.349L22.2439 30.3334Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M32.1994 29.5558C32.2113 29.7539 32.2985 29.94 32.4431 30.0759C32.5877 30.2118 32.7788 30.2873 32.9772 30.2869H35.1394C35.2565 30.2876 35.372 30.2612 35.4773 30.21C35.5825 30.1587 35.6744 30.0839 35.7461 29.9914C35.8212 29.8961 35.873 29.7846 35.8973 29.6658C35.9216 29.5469 35.9177 29.424 35.8861 29.3069C35.3984 27.448 34.3034 25.8054 32.775 24.6403C32.6433 24.5465 32.4856 24.4961 32.3239 24.4961C32.1622 24.4961 32.0045 24.5465 31.8728 24.6403C31.7373 24.7247 31.6326 24.8504 31.5738 24.9988C31.515 25.1471 31.5053 25.3104 31.5461 25.4647C31.8736 26.8086 32.0921 28.1768 32.1994 29.5558Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M27.0505 23.0377C25.9996 25.0549 25.4148 27.2823 25.3394 29.5555C25.3284 29.6628 25.3408 29.7712 25.3757 29.8732C25.4106 29.9753 25.4672 30.0685 25.5416 30.1466C25.6156 30.225 25.7048 30.2876 25.8038 30.3304C25.9027 30.3731 26.0094 30.3953 26.1172 30.3955H29.1038C29.2116 30.3953 29.3183 30.3731 29.4172 30.3304C29.5162 30.2876 29.6054 30.225 29.6794 30.1466C29.7538 30.0685 29.8104 29.9753 29.8453 29.8732C29.8802 29.7712 29.8926 29.6628 29.8816 29.5555C29.797 27.3034 29.2125 25.0983 28.1705 23.1C28.1606 23.0614 28.1387 23.0271 28.1079 23.0019C28.0771 22.9767 28.0391 22.962 27.9994 22.96H27.0972C27.0755 22.9817 27.0594 23.0084 27.0505 23.0377V23.0377Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M23.0384 33.3981C23.0265 33.2 22.9393 33.014 22.7948 32.8781C22.6502 32.7422 22.4591 32.6666 22.2606 32.667H20.0829C19.9658 32.6664 19.8502 32.6927 19.745 32.744C19.6398 32.7952 19.5478 32.87 19.4762 32.9626C19.4011 33.0578 19.3493 33.1693 19.325 33.2882C19.3007 33.407 19.3045 33.5299 19.3362 33.647C19.8194 35.5079 20.9154 37.1519 22.4473 38.3137C22.579 38.4075 22.7367 38.4579 22.8984 38.4579C23.0601 38.4579 23.2178 38.4075 23.3495 38.3137C23.4828 38.2233 23.5854 38.0946 23.6437 37.9446C23.7021 37.7945 23.7134 37.6303 23.6762 37.4737C23.3404 36.1373 23.1269 34.7732 23.0384 33.3981Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M28.1554 39.9937C29.171 37.9741 29.7538 35.7647 29.8665 33.507C29.8808 33.3995 29.8701 33.2902 29.835 33.1876C29.7999 33.0851 29.7414 32.992 29.6642 32.9159C29.5938 32.8371 29.5075 32.7743 29.411 32.7313C29.3144 32.6884 29.2099 32.6665 29.1042 32.667H26.1176C26.0119 32.6665 25.9074 32.6884 25.8109 32.7313C25.7143 32.7743 25.628 32.8371 25.5576 32.9159C25.4804 32.992 25.422 33.0851 25.3869 33.1876C25.3518 33.2902 25.341 33.3995 25.3554 33.507C25.4681 35.7647 26.0509 37.9741 27.0665 39.9937V39.9937H27.5487H28.0309H28.1554Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M41.6889 17.3757C41.5498 17.3195 41.4308 17.2226 41.3476 17.0977C41.2644 16.9728 41.2207 16.8258 41.2222 16.6757V12.4446C41.2222 11.6195 40.8945 10.8282 40.311 10.2447C39.7276 9.66127 38.9362 9.3335 38.1111 9.3335H17.8889C16.4449 9.3335 15.0601 9.90711 14.0391 10.9281C13.0181 11.9492 12.4445 13.334 12.4445 14.7779V42.0002C12.4445 43.2378 12.9361 44.4248 13.8113 45.3C14.6865 46.1752 15.8734 46.6668 17.1111 46.6668H40.4445C41.2696 46.6668 42.0609 46.3391 42.6443 45.7556C43.2278 45.1722 43.5556 44.3808 43.5556 43.5557V20.2224C43.5547 19.6178 43.3776 19.0267 43.0461 18.5211C42.7146 18.0156 42.243 17.6175 41.6889 17.3757V17.3757ZM15.5556 14.7779C15.5556 14.1591 15.8014 13.5656 16.239 13.128C16.6766 12.6904 17.2701 12.4446 17.8889 12.4446H37.3333C37.5396 12.4446 37.7375 12.5266 37.8833 12.6724C38.0292 12.8183 38.1111 13.0161 38.1111 13.2224V16.3335C38.1111 16.5398 38.0292 16.7376 37.8833 16.8835C37.7375 17.0293 37.5396 17.1113 37.3333 17.1113H17.8889C17.2701 17.1113 16.6766 16.8654 16.239 16.4279C15.8014 15.9903 15.5556 15.3968 15.5556 14.7779ZM27.6111 42.3891C25.4575 42.3891 23.3523 41.7504 21.5616 40.5539C19.7709 39.3575 18.3753 37.6568 17.5511 35.6672C16.7269 33.6775 16.5113 31.4881 16.9315 29.3758C17.3516 27.2636 18.3887 25.3234 19.9115 23.8006C21.4344 22.2777 23.3746 21.2407 25.4868 20.8205C27.599 20.4004 29.7884 20.616 31.7781 21.4401C33.7678 22.2643 35.4684 23.66 36.6649 25.4506C37.8614 27.2413 38.5 29.3465 38.5 31.5002C38.5 34.3881 37.3528 37.1577 35.3107 39.1998C33.2687 41.2418 30.499 42.3891 27.6111 42.3891V42.3891Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M32.9625 32.667C32.7641 32.6666 32.573 32.7421 32.4284 32.8781C32.2838 33.014 32.1966 33.2 32.1847 33.3981C32.1023 34.7779 31.894 36.1473 31.5625 37.4892C31.5253 37.6458 31.5366 37.8101 31.595 37.9601C31.6533 38.1101 31.7559 38.2389 31.8892 38.3292C32.0209 38.423 32.1786 38.4734 32.3403 38.4734C32.502 38.4734 32.6597 38.423 32.7914 38.3292C34.3233 37.1674 35.4193 35.5235 35.9025 33.6625C35.9342 33.5454 35.938 33.4226 35.9137 33.3037C35.8894 33.1849 35.8376 33.0734 35.7625 32.9781C35.6909 32.8856 35.5989 32.8108 35.4937 32.7595C35.3885 32.7083 35.2729 32.6819 35.1558 32.6825L32.9625 32.667Z",
                  fill: "#5A6A81"
                })
              )
            )),
          ki || (ki = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          Ii ||
            (Ii = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282375" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282375" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33334 9.3335)" })
              )
            ))
        );
      }
      var _i,
        Hi,
        Li,
        Ti = i.forwardRef(Bi),
        Vi = (r.p, ["title", "titleId"]);
      function Di() {
        return (
          (Di = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Di.apply(this, arguments)
        );
      }
      function zi(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Ri(e, t) {
        var r = e.title,
          n = e.titleId,
          l = zi(e, Vi);
        return i.createElement(
          "svg",
          Di(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          _i ||
            (_i = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282377)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282377)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M30.3333 23.3335C30.3352 21.062 29.5051 18.8685 28 17.1673V13.2224C28 12.191 27.5903 11.2018 26.861 10.4725C26.1317 9.74322 25.1425 9.3335 24.1111 9.3335C23.0797 9.3335 22.0906 9.74322 21.3613 10.4725C20.6319 11.2018 20.2222 12.191 20.2222 13.2224V14.0328C18.0983 14.2145 16.1005 15.1178 14.5612 16.5924C13.0218 18.0671 12.0336 20.0242 11.761 22.1384C11.4883 24.2526 11.9476 26.3964 13.0625 28.2134C14.1773 30.0303 15.8805 31.4109 17.8889 32.1255V33.1226L16.5604 34.4495C16.4883 34.5219 16.4311 34.6077 16.3921 34.7022C16.3531 34.7967 16.3332 34.898 16.3333 35.0002C16.3338 35.2064 16.4154 35.4042 16.5604 35.5508L17.8889 36.8793V37.7908L16.5604 39.1193C16.4146 39.2651 16.3327 39.4629 16.3327 39.6692C16.3327 39.8754 16.4146 40.0732 16.5604 40.2191L17.8889 41.5459V43.5557C17.8887 43.6579 17.9087 43.7592 17.9476 43.8537C17.9866 43.9481 18.0438 44.034 18.116 44.1064L20.4493 46.4397C20.5216 46.5122 20.6074 46.5696 20.7019 46.6088C20.7964 46.648 20.8977 46.6682 21 46.6682C21.1023 46.6682 21.2036 46.648 21.2981 46.6088C21.3926 46.5696 21.4784 46.5122 21.5507 46.4397L23.884 44.1064C23.9562 44.034 24.0134 43.9481 24.0524 43.8537C24.0913 43.7592 24.1113 43.6579 24.1111 43.5557V32.1255C25.9272 31.4789 27.4994 30.2874 28.6131 28.7138C29.7267 27.1402 30.3275 25.2613 30.3333 23.3335V23.3335ZM21 18.6668C21.3077 18.6668 21.6084 18.7581 21.8642 18.929C22.12 19.0999 22.3194 19.3429 22.4371 19.6271C22.5549 19.9113 22.5857 20.2241 22.5257 20.5259C22.4656 20.8276 22.3175 21.1048 22.0999 21.3223C21.8824 21.5399 21.6052 21.688 21.3035 21.7481C21.0017 21.8081 20.689 21.7773 20.4047 21.6595C20.1205 21.5418 19.8775 21.3424 19.7066 21.0866C19.5357 20.8308 19.4444 20.53 19.4444 20.2224C19.4444 19.8098 19.6083 19.4142 19.9001 19.1224C20.1918 18.8307 20.5874 18.6668 21 18.6668V18.6668ZM24.1111 10.8891C24.73 10.8891 25.3234 11.1349 25.761 11.5725C26.1986 12.0101 26.4444 12.6035 26.4444 13.2224V15.7579C25.5071 15.0817 24.4521 14.5859 23.3333 14.2957V17.1113H21.7778V13.2224C21.7778 12.6035 22.0236 12.0101 22.4612 11.5725C22.8988 11.1349 23.4923 10.8891 24.1111 10.8891Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M44.1062 37.3742L36.0173 29.2853C37.0041 27.2531 37.2129 24.9301 36.6046 22.7545C35.9962 20.5788 34.6126 18.7011 32.7149 17.4755C32.5736 17.3829 32.4059 17.3387 32.2373 17.3498C32.0687 17.3609 31.9083 17.4266 31.7804 17.537C31.6524 17.6474 31.5639 17.7964 31.5282 17.9616C31.4925 18.1267 31.5115 18.299 31.5824 18.4524C32.7679 21.0093 32.9839 23.9099 32.19 26.6141C31.3962 29.3183 29.6468 31.642 27.2673 33.1524C27.1258 33.2431 27.0175 33.3771 26.9586 33.5345C26.8996 33.6918 26.8932 33.864 26.9403 34.0254C26.9875 34.1867 27.0855 34.3284 27.2199 34.4293C27.3543 34.5302 27.5177 34.5848 27.6858 34.5851H27.6951C29.0638 34.5721 30.413 34.2593 31.6478 33.6688L32.6589 34.5664V36.556C32.6589 36.7622 32.7408 36.9601 32.8867 37.1059C33.0326 37.2518 33.2304 37.3337 33.4367 37.3337H35.4371L35.77 37.6822V39.6671C35.77 39.8734 35.8519 40.0712 35.9978 40.217C36.1437 40.3629 36.3415 40.4448 36.5478 40.4448H38.2884L39.7149 41.7888C39.8593 41.9248 40.0501 42.0005 40.2484 42.0004H43.5556C43.7618 42.0004 43.9597 41.9185 44.1055 41.7726C44.2514 41.6267 44.3333 41.4289 44.3333 41.2226V37.9233C44.3333 37.7174 44.2516 37.5199 44.1062 37.3742Z",
                  fill: "#5A6A81"
                })
              )
            )),
          Hi || (Hi = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          Li ||
            (Li = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282377" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282377" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33334 9.3335)" })
              )
            ))
        );
      }
      var Ni,
        qi,
        Yi,
        Gi = i.forwardRef(Ri),
        Wi = (r.p, ["title", "titleId"]);
      function Ki() {
        return (
          (Ki = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ki.apply(this, arguments)
        );
      }
      function Ui(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Ji(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Ui(e, Wi);
        return i.createElement(
          "svg",
          Ki(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Ni ||
            (Ni = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282380)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282380)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M44.3333 16.3335H11.6667C11.0478 16.3335 10.4543 16.5793 10.0168 17.0169C9.57918 17.4545 9.33334 18.048 9.33334 18.6668V22.5557C9.33334 23.1746 9.57918 23.768 10.0168 24.2056C10.4543 24.6432 11.0478 24.8891 11.6667 24.8891H44.3333C44.9522 24.8891 45.5457 24.6432 45.9833 24.2056C46.4208 23.768 46.6667 23.1746 46.6667 22.5557V18.6668C46.6667 18.048 46.4208 17.4545 45.9833 17.0169C45.5457 16.5793 44.9522 16.3335 44.3333 16.3335ZM14.3889 20.6113C14.3889 20.2267 14.5029 19.8508 14.7166 19.531C14.9303 19.2112 15.2339 18.962 15.5892 18.8148C15.9445 18.6677 16.3355 18.6292 16.7127 18.7042C17.0899 18.7792 17.4363 18.9644 17.7083 19.2363C17.9802 19.5083 18.1654 19.8547 18.2404 20.2319C18.3155 20.6091 18.2769 21.0001 18.1298 21.3554C17.9826 21.7107 17.7334 22.0144 17.4136 22.228C17.0939 22.4417 16.7179 22.5557 16.3333 22.5557C15.8176 22.5557 15.3231 22.3509 14.9584 21.9862C14.5938 21.6215 14.3889 21.127 14.3889 20.6113V20.6113ZM22.5556 22.5557C22.171 22.5557 21.7951 22.4417 21.4753 22.228C21.1555 22.0144 20.9063 21.7107 20.7591 21.3554C20.612 21.0001 20.5735 20.6091 20.6485 20.2319C20.7235 19.8547 20.9087 19.5083 21.1806 19.2363C21.4526 18.9644 21.799 18.7792 22.1762 18.7042C22.5534 18.6292 22.9444 18.6677 23.2997 18.8148C23.655 18.962 23.9587 19.2112 24.1723 19.531C24.386 19.8508 24.5 20.2267 24.5 20.6113C24.5 21.127 24.2952 21.6215 23.9305 21.9862C23.5658 22.3509 23.0713 22.5557 22.5556 22.5557Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M44.6756 12.5224L38.6244 9.50461C38.4077 9.39357 38.168 9.33496 37.9244 9.3335H18.0756C17.832 9.33496 17.5923 9.39357 17.3756 9.50461L11.3244 12.5224C11.1658 12.5992 11.0379 12.7277 10.9618 12.8868C10.8857 13.0459 10.866 13.2261 10.9057 13.3979C10.9455 13.5696 11.0425 13.7228 11.1807 13.8322C11.319 13.9417 11.4903 14.0009 11.6667 14.0002H44.3333C44.5396 14.0455 44.7555 14.0071 44.9334 13.8934C45.1114 13.7796 45.2368 13.5998 45.2822 13.3935C45.3276 13.1872 45.2892 12.9714 45.1754 12.7934C45.0616 12.6155 44.8818 12.49 44.6756 12.4446V12.5224Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M44.3333 27.2222H11.6667C11.0478 27.2222 10.4543 27.468 10.0168 27.9056C9.57918 28.3432 9.33334 28.9367 9.33334 29.5555V33.4444C9.33334 34.0632 9.57918 34.6567 10.0168 35.0943C10.4543 35.5319 11.0478 35.7777 11.6667 35.7777H44.3333C44.9522 35.7777 45.5457 35.5319 45.9833 35.0943C46.4208 34.6567 46.6667 34.0632 46.6667 33.4444V29.5555C46.6667 28.9367 46.4208 28.3432 45.9833 27.9056C45.5457 27.468 44.9522 27.2222 44.3333 27.2222ZM14.3889 31.4999C14.3889 31.1154 14.5029 30.7394 14.7166 30.4197C14.9303 30.0999 15.2339 29.8507 15.5892 29.7035C15.9445 29.5563 16.3355 29.5178 16.7127 29.5929C17.0899 29.6679 17.4363 29.8531 17.7083 30.125C17.9802 30.397 18.1654 30.7434 18.2404 31.1206C18.3155 31.4978 18.2769 31.8888 18.1298 32.2441C17.9826 32.5994 17.7334 32.903 17.4136 33.1167C17.0939 33.3304 16.7179 33.4444 16.3333 33.4444C15.8176 33.4444 15.3231 33.2395 14.9584 32.8749C14.5938 32.5102 14.3889 32.0156 14.3889 31.4999ZM22.5556 33.4444C22.171 33.4444 21.7951 33.3304 21.4753 33.1167C21.1555 32.903 20.9063 32.5994 20.7591 32.2441C20.612 31.8888 20.5735 31.4978 20.6485 31.1206C20.7235 30.7434 20.9087 30.397 21.1806 30.125C21.4526 29.8531 21.799 29.6679 22.1762 29.5929C22.5534 29.5178 22.9444 29.5563 23.2997 29.7035C23.655 29.8507 23.9587 30.0999 24.1723 30.4197C24.386 30.7394 24.5 31.1154 24.5 31.4999C24.5 32.0156 24.2952 32.5102 23.9305 32.8749C23.5658 33.2395 23.0713 33.4444 22.5556 33.4444Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M44.3333 38.1113H11.6667C11.0478 38.1113 10.4543 38.3572 10.0168 38.7947C9.57918 39.2323 9.33334 39.8258 9.33334 40.4447V44.3335C9.33334 44.9524 9.57918 45.5459 10.0168 45.9835C10.4543 46.421 11.0478 46.6669 11.6667 46.6669H44.3333C44.9522 46.6669 45.5457 46.421 45.9833 45.9835C46.4208 45.5459 46.6667 44.9524 46.6667 44.3335V40.4447C46.6667 39.8258 46.4208 39.2323 45.9833 38.7947C45.5457 38.3572 44.9522 38.1113 44.3333 38.1113ZM14.3889 42.3891C14.3889 42.0045 14.5029 41.6286 14.7166 41.3088C14.9303 40.9891 15.2339 40.7398 15.5892 40.5927C15.9445 40.4455 16.3355 40.407 16.7127 40.482C17.0899 40.5571 17.4363 40.7422 17.7083 41.0142C17.9802 41.2861 18.1654 41.6326 18.2404 42.0098C18.3155 42.3869 18.2769 42.7779 18.1298 43.1332C17.9826 43.4885 17.7334 43.7922 17.4136 44.0059C17.0939 44.2195 16.7179 44.3335 16.3333 44.3335C15.8176 44.3335 15.3231 44.1287 14.9584 43.764C14.5938 43.3994 14.3889 42.9048 14.3889 42.3891ZM22.5556 44.3335C22.171 44.3335 21.7951 44.2195 21.4753 44.0059C21.1555 43.7922 20.9063 43.4885 20.7591 43.1332C20.612 42.7779 20.5735 42.3869 20.6485 42.0098C20.7235 41.6326 20.9087 41.2861 21.1806 41.0142C21.4526 40.7422 21.799 40.5571 22.1762 40.482C22.5534 40.407 22.9444 40.4455 23.2997 40.5927C23.655 40.7398 23.9587 40.9891 24.1723 41.3088C24.386 41.6286 24.5 42.0045 24.5 42.3891C24.5 42.9048 24.2952 43.3994 23.9305 43.764C23.5658 44.1287 23.0713 44.3335 22.5556 44.3335Z",
                  fill: "#5A6A81"
                })
              )
            )),
          qi || (qi = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          Yi ||
            (Yi = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282380" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282380" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33334 9.3335)" })
              )
            ))
        );
      }
      var Xi,
        Qi,
        $i,
        el = i.forwardRef(Ji),
        tl = (r.p, ["title", "titleId"]);
      function rl() {
        return (
          (rl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          rl.apply(this, arguments)
        );
      }
      function nl(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function il(e, t) {
        var r = e.title,
          n = e.titleId,
          l = nl(e, tl);
        return i.createElement(
          "svg",
          rl(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Xi ||
            (Xi = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282376)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282376)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33333 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M24.5 28.0003H22.9444C22.8413 28.0003 22.7424 27.9593 22.6695 27.8864C22.5965 27.8134 22.5555 27.7145 22.5555 27.6114V26.0558C22.5515 25.7477 22.4273 25.4532 22.2094 25.2353C21.9915 25.0174 21.697 24.8932 21.3889 24.8892H19.0555C18.7474 24.8932 18.453 25.0174 18.235 25.2353C18.0171 25.4532 17.8929 25.7477 17.8889 26.0558V27.6114C17.8889 27.7145 17.8479 27.8134 17.775 27.8864C17.702 27.9593 17.6031 28.0003 17.5 28.0003H15.9444C15.6363 28.0043 15.3419 28.1285 15.1239 28.3464C14.906 28.5644 14.7818 28.8588 14.7778 29.1669V31.5003C14.7818 31.8084 14.906 32.1028 15.1239 32.3208C15.3419 32.5387 15.6363 32.6629 15.9444 32.6669H17.5C17.6031 32.6669 17.702 32.7079 17.775 32.7808C17.8479 32.8538 17.8889 32.9527 17.8889 33.0558V34.6114C17.8929 34.9195 18.0171 35.214 18.235 35.4319C18.453 35.6498 18.7474 35.774 19.0555 35.7781H21.3889C21.697 35.774 21.9915 35.6498 22.2094 35.4319C22.4273 35.214 22.5515 34.9195 22.5555 34.6114V33.0558C22.5555 32.9527 22.5965 32.8538 22.6695 32.7808C22.7424 32.7079 22.8413 32.6669 22.9444 32.6669H24.5C24.8082 32.6629 25.1026 32.5387 25.3205 32.3208C25.5384 32.1028 25.6626 31.8084 25.6667 31.5003V29.1669C25.6626 28.8588 25.5384 28.5644 25.3205 28.3464C25.1026 28.1285 24.8082 28.0043 24.5 28.0003V28.0003Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M46.6667 16.3333C46.6667 15.5082 46.3389 14.7168 45.7554 14.1334C45.172 13.5499 44.3807 13.2222 43.5556 13.2222H12.4444C11.6193 13.2222 10.828 13.5499 10.2446 14.1334C9.66111 14.7168 9.33333 15.5082 9.33333 16.3333V39.6666C9.33333 40.4917 9.66111 41.2831 10.2446 41.8665C10.828 42.4499 11.6193 42.7777 12.4444 42.7777H43.5556C44.3807 42.7777 45.172 42.4499 45.7554 41.8665C46.3389 41.2831 46.6667 40.4917 46.6667 39.6666V16.3333ZM13.2222 39.6666C13.0159 39.6666 12.8181 39.5847 12.6722 39.4388C12.5264 39.2929 12.4444 39.0951 12.4444 38.8888V22.5555C12.4444 22.3492 12.5264 22.1514 12.6722 22.0055C12.8181 21.8597 13.0159 21.7777 13.2222 21.7777H42.7778C42.9841 21.7777 43.1819 21.8597 43.3277 22.0055C43.4736 22.1514 43.5556 22.3492 43.5556 22.5555V38.8888C43.5556 39.0951 43.4736 39.2929 43.3277 39.4388C43.1819 39.5847 42.9841 39.6666 42.7778 39.6666H13.2222Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M39.2778 27.6113H31.8889C31.5795 27.6113 31.2827 27.7342 31.0639 27.953C30.8451 28.1718 30.7222 28.4686 30.7222 28.778C30.7222 29.0874 30.8451 29.3842 31.0639 29.603C31.2827 29.8217 31.5795 29.9447 31.8889 29.9447H39.2778C39.5872 29.9447 39.8839 29.8217 40.1027 29.603C40.3215 29.3842 40.4444 29.0874 40.4444 28.778C40.4444 28.4686 40.3215 28.1718 40.1027 27.953C39.8839 27.7342 39.5872 27.6113 39.2778 27.6113V27.6113Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M37.3333 32.2778H31.8889C31.5795 32.2778 31.2827 32.4007 31.0639 32.6195C30.8451 32.8383 30.7222 33.1351 30.7222 33.4445C30.7222 33.7539 30.8451 34.0507 31.0639 34.2695C31.2827 34.4882 31.5795 34.6112 31.8889 34.6112H37.3333C37.6427 34.6112 37.9395 34.4882 38.1583 34.2695C38.3771 34.0507 38.5 33.7539 38.5 33.4445C38.5 33.1351 38.3771 32.8383 38.1583 32.6195C37.9395 32.4007 37.6427 32.2778 37.3333 32.2778V32.2778Z",
                  fill: "#5A6A81"
                })
              )
            )),
          Qi || (Qi = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          $i ||
            ($i = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282376" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282376" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33333 9.3335)" })
              )
            ))
        );
      }
      var ll,
        al,
        ol,
        cl = i.forwardRef(il),
        sl = (r.p, ["title", "titleId"]);
      function dl() {
        return (
          (dl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          dl.apply(this, arguments)
        );
      }
      function ul(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Cl(e, t) {
        var r = e.title,
          n = e.titleId,
          l = ul(e, sl);
        return i.createElement(
          "svg",
          dl(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          ll ||
            (ll = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282382)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282382)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33331 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M14.7778 32.2469C15.1903 32.2469 15.586 32.083 15.8777 31.7913C16.1695 31.4995 16.3333 31.1039 16.3333 30.6913V17.7647C16.3333 17.4882 16.4431 17.2232 16.6386 17.0277C16.8341 16.8322 17.0991 16.7224 17.3756 16.7224H38.6245C38.7613 16.7224 38.8968 16.7494 39.0233 16.8018C39.1497 16.8542 39.2646 16.9309 39.3614 17.0277C39.4582 17.1245 39.535 17.2394 39.5873 17.3658C39.6397 17.4923 39.6667 17.6278 39.6667 17.7647V30.6913C39.6667 31.1039 39.8306 31.4995 40.1223 31.7913C40.414 32.083 40.8097 32.2469 41.2222 32.2469C41.6348 32.2469 42.0305 32.083 42.3222 31.7913C42.6139 31.4995 42.7778 31.1039 42.7778 30.6913V17.7647C42.7737 16.6644 42.3348 15.6104 41.5568 14.8323C40.7788 14.0543 39.7247 13.6154 38.6245 13.6113H17.3756C16.2753 13.6154 15.2213 14.0543 14.4432 14.8323C13.6652 15.6104 13.2263 16.6644 13.2222 17.7647V30.6913C13.2222 31.1039 13.3861 31.4995 13.6778 31.7913C13.9696 32.083 14.3652 32.2469 14.7778 32.2469Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M46.4955 34.9069C46.4239 34.8144 46.3319 34.7396 46.2267 34.6883C46.1215 34.6371 46.0059 34.6107 45.8889 34.6113H33.4444C33.2382 34.6113 33.0403 34.6933 32.8945 34.8391C32.7486 34.985 32.6667 35.1828 32.6667 35.3891C32.6667 36.4936 30.7533 37.7225 28 37.7225C25.2467 37.7225 23.3333 36.4936 23.3333 35.3891C23.3333 35.1828 23.2514 34.985 23.1055 34.8391C22.9597 34.6933 22.7618 34.6113 22.5555 34.6113H10.1111C9.99408 34.6107 9.87849 34.6371 9.77328 34.6883C9.66807 34.7396 9.57608 34.8144 9.50444 34.9069C9.42955 34.9992 9.37777 35.108 9.35342 35.2244C9.32907 35.3407 9.33285 35.4612 9.36444 35.5758C9.84479 37.5223 10.9641 39.2516 12.5434 40.4868C14.1227 41.722 16.0706 42.3918 18.0755 42.3891H37.9244C39.9347 42.3988 41.8898 41.7322 43.4755 40.4964C45.0611 39.2606 46.1851 37.5275 46.6667 35.5758C46.6941 35.4588 46.6929 35.3368 46.6631 35.2204C46.6333 35.1039 46.5758 34.9964 46.4955 34.9069V34.9069Z",
                  fill: "#5A6A81"
                })
              )
            )),
          al || (al = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          ol ||
            (ol = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282382" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282382" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33331 9.3335)" })
              )
            ))
        );
      }
      var fl,
        hl,
        pl,
        ml = i.forwardRef(Cl),
        gl = (r.p, ["title", "titleId"]);
      function xl() {
        return (
          (xl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          xl.apply(this, arguments)
        );
      }
      function vl(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function bl(e, t) {
        var r = e.title,
          n = e.titleId,
          l = vl(e, gl);
        return i.createElement(
          "svg",
          xl(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          fl ||
            (fl = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282381)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement(
                "g",
                { clipPath: "url(#clip1_4244_282381)" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
                i.createElement("path", {
                  d: "M20.8133 45.7026C20.8093 45.598 20.7649 45.4991 20.6895 45.4266C20.6141 45.3541 20.5135 45.3136 20.4089 45.3137H17.8889C17.6878 45.3102 17.4925 45.246 17.3287 45.1293C17.1649 45.0127 17.0402 44.8492 16.9711 44.6604L14.1556 36.8826C14.1279 36.7955 14.0734 36.7193 14 36.6648C13.9486 36.6421 13.8929 36.6304 13.8367 36.6304C13.7804 36.6304 13.7248 36.6421 13.6733 36.6648C12.9809 37.041 12.3202 37.4728 11.6978 37.9559C11.2102 38.3139 10.8149 38.7827 10.5444 39.3237C10.2739 39.8646 10.136 40.4622 10.1422 41.067V45.8893C10.1421 46.0903 10.2197 46.2835 10.3589 46.4285C10.4981 46.5735 10.6881 46.659 10.8889 46.667H20.4089C20.5135 46.6671 20.6141 46.6266 20.6895 46.5541C20.7649 46.4816 20.8093 46.3827 20.8133 46.2782V45.7026Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M18.48 43.1046C18.5054 43.18 18.5534 43.2458 18.6173 43.293C18.6813 43.3403 18.7583 43.3669 18.8378 43.3691H21.7778C22.0336 43.3691 22.2789 43.4707 22.4598 43.6515C22.6406 43.8324 22.7422 44.0777 22.7422 44.3335V45.6713C22.7473 45.7482 22.7743 45.8221 22.8199 45.8843C22.8656 45.9464 22.9281 45.9942 23 46.022C23.072 46.0498 23.1504 46.0564 23.226 46.0411C23.3015 46.0259 23.3712 45.9893 23.4267 45.9357L26.5378 42.6224C26.5746 42.5889 26.604 42.548 26.6241 42.5025C26.6442 42.457 26.6546 42.4077 26.6546 42.3579C26.6546 42.3082 26.6442 42.2589 26.6241 42.2134C26.604 42.1679 26.5746 42.127 26.5378 42.0935L19.4911 34.6268C19.4448 34.5716 19.3829 34.5317 19.3135 34.5123C19.2441 34.4928 19.1705 34.4948 19.1022 34.5179C18.0878 34.7838 17.0904 35.1111 16.1156 35.4979C16.0677 35.5151 16.0238 35.5418 15.9866 35.5765C15.9494 35.6113 15.9196 35.6532 15.8993 35.6998C15.8789 35.7465 15.8682 35.7967 15.868 35.8476C15.8677 35.8985 15.8779 35.9489 15.8978 35.9957L18.48 43.1046Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M39.0289 44.6603C38.9598 44.8492 38.8351 45.0127 38.6713 45.1293C38.5075 45.2459 38.3122 45.3102 38.1111 45.3136H35.5911C35.4865 45.3136 35.3859 45.354 35.3105 45.4265C35.2351 45.4991 35.1907 45.598 35.1867 45.7025V46.2781C35.1907 46.3826 35.2351 46.4815 35.3105 46.5541C35.3859 46.6266 35.4865 46.667 35.5911 46.667H45.1111C45.3174 46.667 45.5152 46.585 45.6611 46.4392C45.807 46.2933 45.8889 46.0955 45.8889 45.8892V41.0514C45.8951 40.4466 45.7572 39.849 45.4867 39.308C45.2163 38.7671 44.8209 38.2982 44.3333 37.9403C43.7109 37.4571 43.0502 37.0253 42.3578 36.6492C42.3063 36.6265 42.2507 36.6147 42.1945 36.6147C42.1382 36.6147 42.0826 36.6265 42.0311 36.6492C41.9257 36.6934 41.842 36.7772 41.7978 36.8825L39.0289 44.6603Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M26.2111 45.8116C26.1617 45.8685 26.1291 45.9381 26.1171 46.0126C26.1052 46.0871 26.1142 46.1634 26.1434 46.233C26.1725 46.3025 26.2205 46.3626 26.2819 46.4063C26.3434 46.45 26.4158 46.4757 26.4911 46.4804H32.8533C32.958 46.4805 33.0585 46.4401 33.134 46.3675C33.2094 46.295 33.2538 46.1961 33.2578 46.0916V44.3338C33.2578 44.078 33.3594 43.8327 33.5403 43.6518C33.7211 43.4709 33.9664 43.3693 34.2222 43.3693H37.1622C37.2418 43.3671 37.3187 43.3406 37.3827 43.2933C37.4466 43.246 37.4946 43.1803 37.52 43.1049L40.1022 35.996C40.1222 35.9492 40.1323 35.8988 40.1321 35.8479C40.1318 35.797 40.1212 35.7467 40.1008 35.7001C40.0804 35.6535 40.0507 35.6115 40.0135 35.5768C39.9763 35.5421 39.9324 35.5154 39.8845 35.4982C38.9792 35.1412 38.0548 34.8348 37.1156 34.5804C37.0473 34.5573 36.9737 34.5553 36.9043 34.5748C36.8349 34.5942 36.773 34.6341 36.7267 34.6893L26.2111 45.8116Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M26.0711 38.9825C26.0417 39.0524 26.0334 39.1295 26.0472 39.2041C26.061 39.2787 26.0964 39.3477 26.1489 39.4025L27.58 40.958C27.6543 41.0333 27.7543 41.0777 27.86 41.0825C27.9711 41.0817 28.0774 41.0369 28.1556 40.958L29.7111 39.2469C29.7554 39.1858 29.7792 39.1123 29.7792 39.0369C29.7792 38.9615 29.7554 38.888 29.7111 38.8269L28.5911 36.2758C28.519 36.1497 28.4148 36.0449 28.2891 35.9721C28.1635 35.8992 28.0208 35.8608 27.8756 35.8608C27.7303 35.8608 27.5876 35.8992 27.462 35.9721C27.3363 36.0449 27.2322 36.1497 27.16 36.2758L26.0711 38.9825Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M16.8156 24.4383C16.7151 24.4014 16.6049 24.4014 16.5044 24.4383C16.4255 24.5165 16.3808 24.6228 16.38 24.7339V26.445C16.3515 27.0876 16.5116 27.7245 16.8405 28.2772C17.1694 28.83 17.6528 29.2746 18.2311 29.5561C18.2901 29.5862 18.3408 29.6303 18.3788 29.6845C18.4168 29.7387 18.4408 29.8015 18.4489 29.8672C18.4656 30.0758 18.5295 30.2779 18.6356 30.4583C19.2112 31.4263 19.9356 32.2978 20.7822 33.0405C22.7289 34.8149 25.2579 35.8152 27.8917 35.8525C30.5254 35.8897 33.0817 34.9614 35.0778 33.2428C36.0138 32.4614 36.8084 31.5248 37.4267 30.4739C37.5325 30.299 37.5964 30.102 37.6133 29.8983C37.6214 29.8326 37.6455 29.7699 37.6834 29.7156C37.7214 29.6614 37.7721 29.6173 37.8311 29.5872C38.3933 29.3159 38.8679 28.892 39.2007 28.3639C39.5336 27.8358 39.7112 27.2248 39.7133 26.6005V24.8894C39.7068 24.7765 39.6566 24.6705 39.5733 24.5939C39.5256 24.568 39.4721 24.5545 39.4178 24.5545C39.3635 24.5545 39.31 24.568 39.2622 24.5939C35.5514 25.17 31.8019 25.4612 28.0467 25.465C24.2822 25.4104 20.5275 25.0672 16.8156 24.4383V24.4383ZM33.5378 29.5561C33.6023 29.5734 33.6612 29.6069 33.709 29.6536C33.7567 29.7003 33.7917 29.7584 33.8104 29.8225C33.8292 29.8866 33.8311 29.9544 33.8161 30.0194C33.801 30.0845 33.7695 30.1446 33.7245 30.1939C33.2566 30.6729 32.7346 31.0957 32.1689 31.4539C30.9248 32.2507 29.4774 32.6719 28 32.6672C26.496 32.6601 25.0263 32.217 23.7689 31.3916C23.2377 31.0491 22.7471 30.6473 22.3067 30.1939C22.2625 30.1436 22.231 30.0835 22.2147 30.0185C22.1985 29.9536 22.198 29.8857 22.2133 29.8205C22.2396 29.7544 22.2817 29.6957 22.336 29.6496C22.3902 29.6035 22.4549 29.5714 22.5244 29.5561C24.4245 28.8357 26.211 27.8456 27.8289 26.6161C27.8889 26.5694 27.9628 26.5441 28.0389 26.5441C28.115 26.5441 28.1888 26.5694 28.2489 26.6161C29.8671 27.8364 31.6471 28.8259 33.5378 29.5561V29.5561Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M28 16.7226C30.8648 16.7159 33.7231 16.4504 36.54 15.9293C36.6476 15.9006 36.7414 15.8344 36.8045 15.7426C36.8303 15.6948 36.8439 15.6414 36.8439 15.587C36.8439 15.5327 36.8303 15.4792 36.8045 15.4315L35.4978 10.8893C35.2994 10.3037 34.8767 9.8208 34.3225 9.54664C33.7684 9.27248 33.1281 9.22946 32.5422 9.42703C31.0864 9.98656 29.5557 10.3273 28 10.4381C26.4722 10.33 24.9682 9.99983 23.5356 9.45814C23.2488 9.36244 22.9459 9.32418 22.6443 9.34553C22.3427 9.36688 22.0483 9.44743 21.7778 9.58259C21.2212 9.84709 20.7871 10.3147 20.5645 10.8893V10.8893L19.1956 15.4315C19.1732 15.4803 19.1616 15.5333 19.1616 15.587C19.1616 15.6407 19.1732 15.6938 19.1956 15.7426C19.2586 15.8344 19.3524 15.9006 19.46 15.9293C22.2771 16.4492 25.1353 16.7147 28 16.7226V16.7226Z",
                  fill: "#5A6A81"
                }),
                i.createElement("path", {
                  d: "M13.7044 21.8561C13.7703 22.0263 13.8796 22.1762 14.0216 22.2908C14.1636 22.4055 14.3331 22.4809 14.5133 22.5094C18.973 23.3682 23.5051 23.7954 28.0467 23.785C32.5831 23.7946 37.1099 23.3675 41.5645 22.5094C41.7374 22.4842 41.901 22.4152 42.0399 22.3091C42.1787 22.2029 42.2881 22.063 42.3578 21.9028C42.4288 21.7077 42.4517 21.4984 42.4247 21.2926C42.3976 21.0868 42.3213 20.8906 42.2022 20.7205C42 20.3472 42.1089 19.9428 39.0911 17.8739C39.0352 17.8475 38.9741 17.8339 38.9122 17.8339C38.8504 17.8339 38.7893 17.8475 38.7333 17.8739C35.2149 18.6911 31.612 19.088 28 19.0561C24.3372 19.0467 20.6862 18.6399 17.1111 17.8428C17.0149 17.8128 16.9118 17.8128 16.8156 17.8428C15.6363 18.5747 14.6325 19.5572 13.8756 20.7205C13.7603 20.8833 13.6847 21.0708 13.655 21.268C13.6253 21.4652 13.6422 21.6666 13.7044 21.8561V21.8561Z",
                  fill: "#5A6A81"
                })
              )
            )),
          hl || (hl = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          pl ||
            (pl = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282381" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              ),
              i.createElement(
                "clipPath",
                { id: "clip1_4244_282381" },
                i.createElement("rect", { width: 37.3333, height: 37.3333, fill: "white", transform: "translate(9.33334 9.3335)" })
              )
            ))
        );
      }
      var yl,
        wl,
        El,
        jl = i.forwardRef(bl),
        Ol = (r.p, ["title", "titleId"]);
      function Sl() {
        return (
          (Sl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Sl.apply(this, arguments)
        );
      }
      function Zl(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function kl(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Zl(e, Ol);
        return i.createElement(
          "svg",
          Sl(
            {
              width: 56,
              height: 56,
              viewBox: "0 0 56 56",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          yl ||
            (yl = i.createElement(
              "g",
              { clipPath: "url(#clip0_4244_282374)" },
              i.createElement("rect", { width: 56, height: 56, rx: 3, fill: "#EBEEEF" }),
              i.createElement("rect", { width: 37.3333, height: 37.3333, transform: "translate(9.33334 9.3335)", fill: "#EBEEEF" }),
              i.createElement("path", {
                d: "M15.6328 24.7644C15.4521 24.9437 15.3088 25.1569 15.211 25.3919C15.1132 25.6268 15.0628 25.8788 15.0628 26.1333C15.0628 26.3877 15.1132 26.6397 15.211 26.8747C15.3088 27.1096 15.4521 27.3229 15.6328 27.5022C15.811 27.6846 16.0239 27.8297 16.259 27.9287C16.4941 28.0277 16.7466 28.0787 17.0016 28.0787C17.2567 28.0787 17.5092 28.0277 17.7443 27.9287C17.9794 27.8297 18.1923 27.6846 18.3705 27.5022C20.9275 24.9545 24.3899 23.524 27.9994 23.524C31.6089 23.524 35.0713 24.9545 37.6283 27.5022C37.8089 27.6832 38.0235 27.8269 38.2597 27.9249C38.496 28.0229 38.7492 28.0734 39.005 28.0734C39.2607 28.0734 39.514 28.0229 39.7502 27.9249C39.9865 27.8269 40.201 27.6832 40.3816 27.5022C40.7353 27.1342 40.9328 26.6436 40.9328 26.1333C40.9328 25.6229 40.7353 25.1323 40.3816 24.7644C37.0977 21.4862 32.6473 19.6451 28.0072 19.6451C23.3671 19.6451 18.9167 21.4862 15.6328 24.7644Z",
                fill: "#5A6A81"
              }),
              i.createElement("path", {
                d: "M44.7683 18.8066C40.32 14.361 34.2884 11.8638 27.9994 11.8638C21.7105 11.8638 15.6789 14.361 11.2305 18.8066C10.8654 19.1738 10.6611 19.671 10.6626 20.1888C10.664 20.7066 10.8711 21.2026 11.2383 21.5677C11.6055 21.9328 12.1027 22.1371 12.6205 22.1357C13.1383 22.1342 13.6343 21.9271 13.9994 21.5599C17.7229 17.8666 22.7549 15.7943 27.9994 15.7943C33.2439 15.7943 38.276 17.8666 41.9994 21.5599C42.3708 21.8901 42.8545 22.0655 43.3511 22.0502C43.8478 22.0349 44.3198 21.8301 44.6701 21.4777C45.0205 21.1254 45.2226 20.6522 45.2351 20.1555C45.2476 19.6588 45.0694 19.1761 44.7372 18.8066H44.7683Z",
                fill: "#5A6A81"
              }),
              i.createElement("path", {
                d: "M31.7016 27.9999C29.7007 27.3047 27.5447 27.1854 25.4793 27.6557C23.4139 28.126 21.5221 29.1669 20.0194 30.6599C19.6612 31.0286 19.4608 31.5225 19.4608 32.0366C19.4608 32.5507 19.6612 33.0445 20.0194 33.4133C20.2006 33.596 20.4163 33.741 20.6539 33.8398C20.8916 33.9386 21.1465 33.9893 21.4039 33.9888C21.6591 33.9907 21.9121 33.9407 22.1475 33.8417C22.3828 33.7428 22.5955 33.597 22.7728 33.4133C24.1149 32.0827 25.9158 31.317 27.8052 31.2736C29.6946 31.2302 31.5287 31.9124 32.9305 33.1799C33.1399 33.4191 33.395 33.6138 33.6809 33.7528C33.9668 33.8917 34.2776 33.972 34.595 33.9888C34.979 33.9852 35.3536 33.8689 35.6721 33.6543C35.9906 33.4396 36.239 33.1362 36.3865 32.7815C36.534 32.4269 36.574 32.0368 36.5016 31.6596C36.4293 31.2824 36.2477 30.9348 35.9794 30.6599C34.7747 29.4591 33.3115 28.5493 31.7016 27.9999Z",
                fill: "#5A6A81"
              }),
              i.createElement("path", {
                d: "M27.9994 44.131C30.1472 44.131 31.8883 42.3899 31.8883 40.2421C31.8883 38.0944 30.1472 36.3533 27.9994 36.3533C25.8516 36.3533 24.1105 38.0944 24.1105 40.2421C24.1105 42.3899 25.8516 44.131 27.9994 44.131Z",
                fill: "#5A6A81"
              })
            )),
          wl || (wl = i.createElement("rect", { x: 0.5, y: 0.5, width: 55, height: 55, rx: 3.5, stroke: "#D7DBE0" })),
          El ||
            (El = i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: "clip0_4244_282374" },
                i.createElement("rect", { width: 56, height: 56, rx: 4, fill: "white" })
              )
            ))
        );
      }
      var Il = i.forwardRef(kl);
      r.p;
      var Al = (function (e) {
          return (
            (e.Address = "Address"),
            (e.BankAccount = "Bank Account"),
            (e.Database = "Database"),
            (e.DriversLicense = "Driver's License"),
            (e.EmailAccount = "Email Account"),
            (e.HealthInsurance = "Health Insurance"),
            (e.InstantMessenger = "Instant Messenger"),
            (e.Insurance = "Insurance"),
            (e.Membership = "Membership"),
            (e.Passport = "Passport"),
            (e.CreditCard = "Credit Card"),
            (e.Generic = "Generic"),
            (e.SocialSecurity = "Social Security"),
            (e.SoftwareLicense = "Software License"),
            (e.SSHKey = "SSH Key"),
            (e.Account = "Password"),
            (e.WiFiAccount = "Wi-Fi Password"),
            (e.Custom = "Custom"),
            (e.Server = "Server"),
            e
          );
        })(Al || {}),
        Pl = (0, n.Z)("div", { target: "e3dzlyl1" })({
          name: "1ivxpxn",
          styles: "border:1px solid #d7dbe0;min-width:56px;height:56px;border-radius:4px"
        }),
        Ml = function (e) {
          var t = (function (e) {
            switch (e) {
              case Al.Address:
                return nn;
              case Al.BankAccount:
                return Cn;
              case Al.Account:
                return bn;
              case Al.CreditCard:
                return kn;
              case Al.Generic:
                return Hn;
              case Al.DriversLicense:
                return qn;
              case Al.EmailAccount:
                return Qn;
              case Al.HealthInsurance:
                return ai;
              case Al.InstantMessenger:
                return hi;
              case Al.Insurance:
                return wi;
              case Al.Membership:
                return Ai;
              case Al.Passport:
                return Ti;
              case Al.Custom:
                return Gi;
              case Al.Server:
              case Al.Database:
                return el;
              case Al.SocialSecurity:
                return cl;
              case Al.SoftwareLicense:
                return ml;
              case Al.SSHKey:
                return jl;
              case Al.WiFiAccount:
                return Il;
              default:
                return null;
            }
          })(e.type);
          if (!t) return (0, M.jsx)(Pl, null);
          var r = (0, n.Z)(t, { target: "e3dzlyl0" })({
            name: "1vy527r",
            styles: "width:56px;height:56px;min-width:56px;border-radius:4px"
          });
          return (0, M.jsx)(r, null);
        };
      var Fl,
        Bl,
        _l = (0, n.Z)("li", { target: "e7os00q9" })(
          "display:flex;gap:16px;padding:16px 16px 16px 0;border-bottom:1px solid #d7dbe0;&:last-child{border-bottom:0;}width:100%;cursor:",
          function (e) {
            return e.isSharingDisabled ? "default" : "pointer";
          },
          ";"
        ),
        Hl = (0, n.Z)("input", { target: "e7os00q8" })(
          "cursor:",
          function (e) {
            return e.disabled ? "default" : "pointer";
          },
          ";"
        ),
        Ll = (0, n.Z)("div", { target: "e7os00q7" })({ name: "s5xdrg", styles: "display:flex;align-items:center" }),
        Tl = (0, n.Z)("div", { target: "e7os00q6" })({ name: "qh9r2y", styles: "display:flex;width:100%;gap:60px;align-items:center" }),
        Vl = (0, n.Z)("div", { target: "e7os00q5" })({
          name: "1q2xyh5",
          styles: "display:flex;flex-direction:column;gap:8px;min-width:212px"
        }),
        Dl = (0, n.Z)("div", { target: "e7os00q4" })({
          name: "1f6izux",
          styles: "display:flex;gap:4px;align-items:center;text-overflow:ellipsis;overflow:hidden;max-width:220px"
        }),
        zl = (0, n.Z)("div", { target: "e7os00q3" })({
          name: "woux1c",
          styles: "font-weight:600;text-overflow:ellipsis;overflow:hidden;display:block;max-width:220px"
        }),
        Rl = (0, n.Z)("div", { target: "e7os00q2" })({
          name: "uylrnq",
          styles:
            "overflow:hidden;text-overflow:ellipsis;max-width:142px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block"
        }),
        Nl = (0, n.Z)(Vr, { target: "e7os00q1" })({ name: "15qa4g8", styles: "width:16px;height:16px;min-width:16px" }),
        ql = (0, n.Z)(Wr, { target: "e7os00q0" })({ name: "15qa4g8", styles: "width:16px;height:16px;min-width:16px" }),
        Yl = function (e) {
          var t,
            r = e.item,
            n = void 0 === r ? { username: "", record: {}, populatedFields: [], readOnly: !1, recordType: "Password" } : r,
            l = e.checkBoxVisible,
            a = void 0 !== l && l,
            o = e.checked,
            c = void 0 !== o && o,
            s = e.onChange,
            d = (0, i.useState)(!1),
            u = (0, O.Z)(d, 2),
            C = u[0],
            f = u[1],
            h =
              ("Password" === n.recordType &&
                (null === n || void 0 === n || null === (t = n.populatedFields) || void 0 === t
                  ? void 0
                  : t.some(function (e) {
                      return "individualShareSource" === e;
                    }))) ||
              n.readOnly,
            p = n.sharedFolder || n.folder || v.ag._({ id: "(none)" }),
            m = (0, i.useCallback)(
              function (e) {
                null !== e && 142 === e.getBoundingClientRect().width && f(!0);
              },
              [C]
            );
          return (0, M.jsx)(
            _l,
            { isSharingDisabled: h, "data-automation-id": "DrawerItem", onClick: a && !h ? s : function () {} },
            a &&
              h &&
              (0, M.jsx)(
                Ur,
                {
                  placement: "right",
                  message: (0, M.jsx)(S.Trans, { id: "You don\u2019t have permission to add this item to another shared folder." })
                },
                (0, M.jsx)(Ll, null, (0, M.jsx)(Hl, { type: "checkbox", checked: c, onChange: s, disabled: !0 }))
              ),
            a && !h && (0, M.jsx)(Hl, { "data-automation-id": "ItemCheckBox", type: "checkbox", checked: c, onChange: s }),
            (0, M.jsx)(Ml, { type: n.recordType }),
            (0, M.jsx)(
              Tl,
              null,
              (0, M.jsx)(
                Vl,
                null,
                (0, M.jsx)(
                  Dl,
                  { "data-automation-id": "NameField" },
                  n.name,
                  n.record.individualShare ? (0, M.jsx)(Nl, null) : "",
                  n.record.favorite ? (0, M.jsx)(ql, null) : ""
                ),
                (0, M.jsx)(zl, { "data-automation-id": "EmailField" }, n.username)
              ),
              (0, M.jsx)(Ur, { message: p, placement: "bottom-start", isVisible: C }, (0, M.jsx)(Rl, { ref: m }, p))
            )
          );
        },
        Gl = ["title", "titleId"];
      function Wl() {
        return (
          (Wl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Wl.apply(this, arguments)
        );
      }
      function Kl(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function Ul(e, t) {
        var r = e.title,
          n = e.titleId,
          l = Kl(e, Gl);
        return i.createElement(
          "svg",
          Wl(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            l
          ),
          r ? i.createElement("title", { id: n }, r) : null,
          Fl ||
            (Fl = i.createElement(
              "g",
              { clipPath: "url(#clip0_224_7369)" },
              i.createElement("path", {
                d: "M23.894 0.552C23.8109 0.386106 23.6832 0.246613 23.5253 0.149127C23.3675 0.0516407 23.1856 6.22667e-06 23 0L1 0C0.814289 0 0.632245 0.0517146 0.474269 0.149349C0.316293 0.246984 0.188626 0.386681 0.105573 0.552786C0.0225204 0.718892 -0.0126368 0.904844 0.00404116 1.08981C0.0207191 1.27477 0.0885733 1.45143 0.2 1.6L9 13.423V22C9.00393 22.5292 9.2159 23.0356 9.59012 23.4099C9.96435 23.7841 10.4708 23.9961 11 24C11.4328 24.0005 11.854 23.8601 12.2 23.6L14.2 22.1C14.448 21.9133 14.6493 21.6717 14.7881 21.3941C14.9269 21.1164 14.9995 20.8104 15 20.5V13.423L23.8 1.6C23.9115 1.45131 23.9794 1.27448 23.996 1.08936C24.0126 0.904245 23.9773 0.718163 23.894 0.552ZM5.417 2.2L9.356 7.45C9.42091 7.53655 9.456 7.64181 9.456 7.75V9C9.456 9.10494 9.42298 9.20722 9.36162 9.29235C9.30026 9.37749 9.21367 9.44116 9.11411 9.47434C9.01456 9.50753 8.90708 9.50855 8.80692 9.47726C8.70675 9.44597 8.61896 9.38395 8.556 9.3L3.62 2.8C3.56429 2.72571 3.53036 2.63738 3.52202 2.5449C3.51368 2.45242 3.53126 2.35945 3.57279 2.27639C3.61431 2.19334 3.67815 2.12349 3.75713 2.07467C3.83612 2.02586 3.92714 2 4.02 2H5.02C5.09712 2.00046 5.17308 2.01876 5.24195 2.05345C5.31082 2.08815 5.37073 2.13831 5.417 2.2Z",
                fill: "#40526D"
              })
            )),
          Bl ||
            (Bl = i.createElement(
              "defs",
              null,
              i.createElement("clipPath", { id: "clip0_224_7369" }, i.createElement("rect", { width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var Jl = i.forwardRef(Ul),
        Xl = (r.p, r(32573)),
        Ql = function e(t, r, n, i) {
          var l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          return (
            !!(
              r &&
              t &&
              (t.find(function (t) {
                return t[n] == r ? ((l.found = t), t) : e(t[i], r, n, i, l);
              }),
              l.found)
            ) && l.found
          );
        };
      var $l = (0, n.Z)("div", { target: "e1r63q2l7" })({
          name: "v8io8c",
          styles:
            "border:1px solid #d7dbe0;border-radius:4px;min-width:263px;width:fit-content;max-width:400px;padding:0 4px;background-color:white;box-shadow:0px 4px 12px rgba(215, 219, 224, 0.8);font-weight:400;line-height:24px;font-size:16px;--item-gap:8px;--marker-dimension:7px;--item-height:24px"
        }),
        ea = (0, n.Z)("ul", { target: "e1r63q2l6" })({
          name: "1nl6r05",
          styles:
            "--item-count:10;padding:0 16px;max-height:calc((var(--item-height) + var(--item-gap)) * var(--item-count));overflow:auto;margin-bottom:6px"
        }),
        ta = (0, n.Z)("li", { target: "e1r63q2l5" })({ name: "1n03jpm", styles: "margin-top:var(--item-gap)" }),
        ra = (0, n.Z)("div", { target: "e1r63q2l4" })({
          name: "uqvoku",
          styles:
            "display:flex;gap:var(--item-gap);align-items:center;font-size:16px;line-height:24px;height:var(--item-height);cursor:initial;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"
        }),
        na = (0, n.Z)("div", { target: "e1r63q2l3" })({
          name: "14r2mzz",
          styles: "display:flex;justify-content:center;width:100%;padding-bottom:12px;padding-top:6px;border-top:1px solid #d7dbe0"
        }),
        ia = (0, n.Z)("ul", { target: "e1r63q2l2" })(
          "position:relative;margin-left:",
          function (e) {
            return 0 === e.level ? "var(--marker-dimension)" : "calc(var(--item-gap) * 2 + var(--marker-dimension))";
          },
          ";"
        ),
        la = (0, n.Z)("div", { target: "e1r63q2l1" })({
          name: "fr148g",
          styles:
            "height:var(--marker-dimension);width:var(--marker-dimension);position:relative;&:after{position:absolute;content:' ';width:var(--marker-dimension);height:var(--marker-dimension);border:1px solid #bac0ca;border-top:0;border-right:0;border-bottom-left-radius:2px;bottom:2px;}"
        }),
        aa = (0, n.Z)("div", { target: "e1r63q2l0" })(
          "background-color:#bac0ca;position:absolute;border:1px solid #bac0ca;border-top:0;border-right:0;top:var(--item-gap);height:",
          function (e) {
            var t = e.height;
            return "calc(".concat(t, "px - var(--item-height) - var(--item-gap))");
          },
          ";"
        );
      function oa(e) {
        var t = e.folder,
          r = e.level,
          n = e.selectedFolders,
          l = e.onClick,
          a = (0, i.useRef)(null),
          o = (0, i.useRef)(null),
          c = (0, i.useState)(0),
          s = (0, O.Z)(c, 2),
          d = s[0],
          u = s[1];
        return (
          (0, i.useLayoutEffect)(function () {
            if (a.current && o.current) {
              var e = a.current.getBoundingClientRect().top,
                t = o.current.lastChild;
              if (t) {
                var r = t.getBoundingClientRect().top;
                u(r - e);
              }
            }
          }, []),
          (0, M.jsx)(
            ta,
            null,
            (0, M.jsx)(
              ra,
              { ref: a },
              r > 0 ? (0, M.jsx)(la, null) : null,
              (0, M.jsx)(
                Xl.X,
                {
                  onChange: function () {
                    return l(t.path);
                  },
                  checked: n.includes(t.path)
                },
                t.name,
                " ",
                0 !== t.itemCount ? "(".concat(t.itemCount, ")") : null
              )
            ),
            t.children && t.children.length > 0
              ? (0, M.jsx)(
                  ia,
                  { ref: o, level: r },
                  t.children && t.children.length > 1 ? (0, M.jsx)(aa, { height: d }) : null,
                  t.children.map(function (e) {
                    return (0, M.jsx)(oa, { key: e.path, folder: e, level: r + 1, selectedFolders: n, onClick: l });
                  })
                )
              : null
          )
        );
      }
      var ca = function (e) {
        var t = e.onOutsideClick,
          r = e.selectedFolders,
          n = e.onChange,
          l = (0, i.useRef)(null),
          a = (0, o.v9)(j),
          c = function (e) {
            var t = r.includes(e)
              ? (function (e) {
                  var t = [e],
                    n = Ql(a, e, "path", "children");
                  if (n) {
                    for (var i = !0, l = (0, x.Z)(n.children); l.length > 0 && i; )
                      (i = r.includes(l[0].path)), t.push(l[0].path), l.push.apply(l, (0, x.Z)(l[0].children)), l.shift();
                    i || (t = [e]);
                  }
                  return r.filter(function (e) {
                    return !t.includes(e);
                  });
                })(e)
              : (function (e) {
                  var t = [e],
                    n = Ql(a, e, "path", "children");
                  if (n)
                    for (var i = (0, x.Z)(n.children); i.length > 0; )
                      t.push(i[0].path), i.push.apply(i, (0, x.Z)(i[0].children)), i.shift();
                  return Array.from(new Set([].concat((0, x.Z)(r), t)));
                })(e);
            n(t);
          };
        return (
          (function (e, t) {
            var r = (0, i.useContext)(s);
            (0, i.useEffect)(
              function () {
                var n = function (r) {
                  if (e && e.current) {
                    var n = e.current.getBoundingClientRect();
                    (r.clientX < n.x || r.clientX > n.x + n.width || r.clientY < n.y || r.clientY > n.y + n.height) && t();
                  }
                };
                return (
                  r && r.addEventListener("click", n),
                  function () {
                    r && r.removeEventListener("click", n);
                  }
                );
              },
              [r, t, e]
            );
          })(l, t),
          (0, M.jsx)(
            $l,
            { ref: l, "data-automation-id": "FolderDropdown" },
            (0, M.jsx)(
              ea,
              null,
              a.map(function (e) {
                return (0, M.jsx)(oa, { key: e.path, folder: e, level: 0, onClick: c, selectedFolders: r });
              })
            ),
            (0, M.jsx)(
              na,
              null,
              (0, M.jsx)(
                oe,
                {
                  variant: "text",
                  color: "primary",
                  onClick: function () {
                    return n([]);
                  },
                  disabled: 0 === r.length
                },
                (0, M.jsx)(S.Trans, { id: "Clear {0} selected", values: { 0: r.length > 0 ? r.length : "" } })
              )
            )
          )
        );
      };
      var sa = (0, n.Z)(Se, { target: "e1s57xmt8" })({ name: "q7wake", styles: "width:12px;height:7.5px" }),
        da = (0, n.Z)(Pe, { target: "e1s57xmt7" })({ name: "q7wake", styles: "width:12px;height:7.5px" }),
        ua = (0, n.Z)(Jl, { target: "e1s57xmt6" })({ name: "1suksrg", styles: "width:12px;height:12px" }),
        Ca = (0, n.Z)("input", { target: "e1s57xmt5" })(""),
        fa = (0, n.Z)("li", { target: "e1s57xmt4" })({
          name: "1681z0c",
          styles: "display:flex;gap:16px;padding:16px 16px 16px 0;border-bottom:1px solid #d7dbe0"
        }),
        ha = (0, n.Z)("div", { target: "e1s57xmt3" })({
          name: "1g69ox7",
          styles: "display:flex;gap:276px;font-weight:600;font-size:16px;line-height:24px"
        }),
        pa = (0, n.Z)("div", { target: "e1s57xmt2" })({
          name: "10gskdd",
          styles: "display:flex;gap:8px;align-items:center;cursor:pointer;position:relative"
        }),
        ma = (0, n.Z)("div", { target: "e1s57xmt1" })({ name: "17l4jil", styles: "position:absolute;top:30px;right:0;z-index:10" }),
        ga = (0, n.Z)("div", { target: "e1s57xmt0" })({
          name: "1f9a4ej",
          styles: "height:4px;width:4px;background-color:#d32d27;border-radius:50%;position:absolute;bottom:5px;right:-2px"
        }),
        xa = function (e) {
          var t = e.checked,
            r = void 0 !== t && t,
            n = e.disabled,
            l = void 0 !== n && n,
            a = e.onChange,
            o = e.sortOrder,
            c = e.onChangeSortOrder,
            s = e.selectedFolders,
            d = e.onChangeSelectedFolders,
            u = (0, i.useState)(!1),
            C = (0, O.Z)(u, 2),
            f = C[0],
            h = C[1];
          return (0, M.jsx)(
            fa,
            null,
            (0, M.jsx)(Ca, { "data-automation-id": "HeaderCheckBox", type: "checkbox", checked: r, onChange: a, disabled: l }),
            (0, M.jsx)(
              ha,
              null,
              (0, M.jsx)(
                pa,
                { onClick: c },
                (0, M.jsx)(S.Trans, { id: "Name" }),
                o === xr.asc && (0, M.jsx)(sa, null),
                o === xr.desc && (0, M.jsx)(da, null)
              ),
              (0, M.jsx)(
                pa,
                {
                  onClick: function (e) {
                    e.stopPropagation(), e.target === e.currentTarget && h(!f);
                  }
                },
                (0, M.jsx)(S.Trans, { id: "Folder" }),
                (0, M.jsx)(ua, null),
                s.length > 0 && (0, M.jsx)(ga, null),
                f &&
                  (0, M.jsx)(
                    ma,
                    null,
                    (0, M.jsx)(ca, {
                      selectedFolders: s,
                      onChange: d,
                      onOutsideClick: function () {
                        f && h(!1);
                      }
                    })
                  )
              )
            )
          );
        },
        va = function (e, t) {
          return e.record.sharedFolderId
            ? (0, Y.Z)(
                (0, Y.Z)({}, e),
                {},
                {
                  sharedFolder:
                    e.record.sharedFolderId && e.folder
                      ? "".concat(t[e.record.sharedFolderId].name, "\\").concat(e.folder)
                      : t[e.record.sharedFolderId].name,
                  readOnly: t[e.record.sharedFolderId].record.readOnly
                }
              )
            : e;
        };
      var ba = (0, n.Z)(be, { target: "e1gaz61j12" })({ name: "1k1rh22", styles: "width:25px;height:25px" }),
        ya = (0, n.Z)(Mr, { target: "e1gaz61j11" })({ name: "157xhr7", styles: "width:16px;height:16px" }),
        wa = (0, n.Z)(be, { target: "e1gaz61j10" })({ name: "157xhr7", styles: "width:16px;height:16px" }),
        Ea = (0, n.Z)("div", { target: "e1gaz61j9" })({
          name: "qp8cmq",
          styles: "flex:1;flex-direction:column;display:flex;overflow:auto"
        }),
        ja = (0, n.Z)("strong", { target: "e1gaz61j8" })({ name: "16ceglb", styles: "font-weight:600" }),
        Oa = (0, n.Z)("div", { target: "e1gaz61j7" })({ name: "14gl6v0", styles: "flex-wrap:nowrap" }),
        Sa = (0, n.Z)("div", { target: "e1gaz61j6" })({
          name: "jbujtc",
          styles: "font-weight:600;font-size:16px;line-height:24px;margin-bottom:16px;color:#1b283c"
        }),
        Za = (0, n.Z)("div", { target: "e1gaz61j5" })(
          "display:flex;gap:4px;align-items:center;background:#eff4fa;border-radius:8px;box-sizing:border-box;border:none;width:100%;height:40px;box-shadow:",
          function (e) {
            return e.isHighlighted ? "0 0 0 1px #3B70D4, 0 0 0 4px #B5D9F1" : "none";
          },
          ";"
        ),
        ka = (0, n.Z)("label", { target: "e1gaz61j4" })({
          name: "1ns7gp1",
          styles: "display:block;padding:12px;background:#eff4fa;line-height:12px;cursor:pointer;border-radius:inherit"
        }),
        Ia = (0, n.Z)("ul", { target: "e1gaz61j3" })({ name: "1pkpr2w", styles: "overflow-x:hidden;overflow-y:auto;flex:1" }),
        Aa = (0, n.Z)("input", { target: "e1gaz61j2" })({
          name: "1py3342",
          styles:
            "background:#eff4fa;border-top-right-radius:8px;border-bottom-right-radius:8px;box-sizing:border-box;width:100%;height:40px;border:none;font-size:16px;font-weight:400;&:focus{outline:none;}"
        }),
        Pa = (0, n.Z)("div", { target: "e1gaz61j1" })({
          name: "18qa4y8",
          styles: "text-align:center;margin-top:20px;display:flex;flex-direction:column;font-weight:400;font-size:14px"
        }),
        Ma = (0, n.Z)("div", { target: "e1gaz61j0" })("");
      var Fa = (function (e) {
          return (e.SKIP_THESE_ITEMS = "Skip these items"), (e.MAKE_A_COPY = "Make a copy"), (e.BACK = "Back"), e;
        })(Fa || {}),
        Ba = (0, n.Z)("div", { target: "e18mefed5" })({
          name: "1x7nnnc",
          styles: "display:flex;flex-direction:column;justify-content:space-between;height:100%"
        }),
        _a = (0, n.Z)(be, { target: "e18mefed4" })({ name: "1k1rh22", styles: "width:25px;height:25px" }),
        Ha = (0, n.Z)("div", { target: "e18mefed3" })({
          name: "941pal",
          styles: "display:flex;padding:16px 0;font-weight:600;gap:300px;border-bottom:1px solid #d7dbe0"
        }),
        La = (0, n.Z)("ul", { target: "e18mefed2" })({ name: "1pkpr2w", styles: "overflow-x:hidden;overflow-y:auto;flex:1" }),
        Ta = (0, n.Z)("div", { target: "e18mefed1" })(""),
        Va = (0, n.Z)("div", { target: "e18mefed0" })("");
      var Da = (0, n.Z)("div", { target: "e15spjzf9" })({
          name: "1x7nnnc",
          styles: "display:flex;flex-direction:column;justify-content:space-between;height:100%"
        }),
        za = (0, n.Z)(be, { target: "e15spjzf8" })({ name: "1k1rh22", styles: "width:25px;height:25px" }),
        Ra = (0, n.Z)("strong", { target: "e15spjzf7" })({ name: "16ceglb", styles: "font-weight:600" }),
        Na = (0, n.Z)("div", { target: "e15spjzf6" })({
          name: "941pal",
          styles: "display:flex;padding:16px 0;font-weight:600;gap:300px;border-bottom:1px solid #d7dbe0"
        }),
        qa = (0, n.Z)("div", { target: "e15spjzf5" })(""),
        Ya = (0, n.Z)("div", { target: "e15spjzf4" })(""),
        Ga = (0, n.Z)("ul", { target: "e15spjzf3" })({ name: "1pkpr2w", styles: "overflow-x:hidden;overflow-y:auto;flex:1" }),
        Wa = (0, n.Z)("div", { target: "e15spjzf2" })({
          name: "maggk",
          styles: "flex-wrap:nowrap;flex-direction:column;gap:16px;display:flex"
        }),
        Ka = (0, n.Z)("div", { target: "e15spjzf1" })(""),
        Ua = (0, n.Z)("div", { target: "e15spjzf0" })({ name: "cw8zmx", styles: "flex-wrap:nowrap;padding-bottom:8px" });
      var Ja,
        Xa = (0, n.Z)("div", { target: "eo56ual7" })({
          name: "1x7nnnc",
          styles: "display:flex;flex-direction:column;justify-content:space-between;height:100%"
        }),
        Qa = (0, n.Z)("div", { target: "eo56ual6" })({ name: "14gl6v0", styles: "flex-wrap:nowrap" }),
        $a = (0, n.Z)("strong", { target: "eo56ual5" })({ name: "16ceglb", styles: "font-weight:600" }),
        eo = (0, n.Z)(be, { target: "eo56ual4" })({ name: "1k1rh22", styles: "width:25px;height:25px" }),
        to = (0, n.Z)("div", { target: "eo56ual3" })({
          name: "941pal",
          styles: "display:flex;padding:16px 0;font-weight:600;gap:300px;border-bottom:1px solid #d7dbe0"
        }),
        ro = (0, n.Z)("ul", { target: "eo56ual2" })({ name: "1pkpr2w", styles: "overflow-x:hidden;overflow-y:auto;flex:1" }),
        no = (0, n.Z)("div", { target: "eo56ual1" })(""),
        io = (0, n.Z)("div", { target: "eo56ual0" })(""),
        lo = (function (e) {
          return (e[(e.Exit = 0)] = "Exit"), (e[(e.Save = 1)] = "Save"), e;
        })({}),
        ao = (0, n.Z)("div", { target: "ewrithv1" })(
          "inset:0;position:fixed;z-index:7;transition:0.4s;background:rgba(0, 0, 0, ",
          function (e) {
            return e.open ? "0.4" : "0";
          },
          ");"
        ),
        oo = (0, n.Z)("div", { target: "ewrithv0" })(
          "background:white;position:fixed;top:60px;right:0;width:588px;height:calc(100% - 60px);display:flex;flex-direction:column;justify-content:space-between;transition:transform 0.4s;transform:",
          function (e) {
            var t = e.open;
            return "translate3d(".concat(t ? "0" : "588px", ", 0, 0)");
          },
          ";"
        ),
        co =
          ((Ja = {}),
          (0, d.Z)(Ja, g.NOT_EMPTY, function (e) {
            var t = e.initiateClose,
              r = k(function (e) {
                return e;
              }),
              n = r.passwords,
              l = r.dataRecords,
              o = r.sharedFolders,
              s = c(function (e) {
                return e;
              }).sharedFolderId,
              d = a(),
              u = [].concat((0, x.Z)(Object.values(l)), (0, x.Z)(Object.values(n))).filter(function (e) {
                return e.record.sharedFolderId === s;
              }),
              C = (0, i.useState)(vr(u, xr.asc)),
              f = (0, O.Z)(C, 1)[0],
              h = o[s];
            return (0, M.jsx)(
              Xa,
              { "data-automation-id": "NotEmptySharedFolderStep" },
              (0, M.jsx)(
                pr,
                null,
                (0, M.jsx)(S.Trans, { id: "Move items to shared folder" }),
                (0, M.jsx)(eo, {
                  onClick: function () {
                    return t(lo.Exit);
                  }
                })
              ),
              (0, M.jsx)(
                mr,
                null,
                (0, M.jsx)(
                  Qa,
                  null,
                  (0, M.jsx)(S.Trans, {
                    id: "Move items you want to share with others to this folder: <0>{0}</0>. When a recipient visits their vault, these shared items will be waiting for them.",
                    values: { 0: h.name },
                    components: [(0, M.jsx)($a, null)]
                  })
                ),
                (0, M.jsx)(
                  Or,
                  null,
                  (0, M.jsx)(S.Trans, {
                    id: "Others may gain or lose access when you move or delete an item. Make sure you\u2019re sharing with the right people."
                  })
                ),
                (0, M.jsx)(S.Trans, { id: "You have the following items in the selected shared folder:" }),
                (0, M.jsx)(
                  to,
                  null,
                  (0, M.jsx)(no, null, (0, M.jsx)(S.Trans, { id: "Name" })),
                  (0, M.jsx)(io, null, (0, M.jsx)(S.Trans, { id: "Folder" }))
                ),
                (0, M.jsx)(
                  ro,
                  null,
                  f.map(function (e) {
                    return (0, M.jsx)(Yl, { key: e.id, item: va(e, o) });
                  })
                )
              ),
              (0, M.jsx)(
                gr,
                null,
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "NotEmptyStepCancelButton",
                    variant: "text",
                    color: "secondary",
                    onClick: function () {
                      return t(lo.Exit);
                    }
                  },
                  (0, M.jsx)(S.Trans, { id: "Cancel" })
                ),
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "NotEmptyStepChangeItemButton",
                    onClick: function () {
                      return d.goToDrawerStatus(g.SELECT);
                    }
                  },
                  (0, M.jsx)(S.Trans, { id: "Change items" })
                )
              )
            );
          }),
          (0, d.Z)(Ja, g.SELECT, function (e) {
            var t = e.initiateClose,
              r = c(function (e) {
                return e;
              }),
              n = r.sharedFolderId,
              l = r.isSharedFolderEmpty,
              o = r.moveIntoSharedFolder,
              s = r.copyIntoSharedFolder,
              d = r.moveOutSharedFolder,
              u = r.matchedIds,
              C = k(function (e) {
                return e;
              }),
              f = C.dataRecords,
              h = C.passwords,
              p = C.sharedFolders,
              m = [].concat((0, x.Z)(Object.values(f)), (0, x.Z)(Object.values(h))),
              b = [].concat((0, x.Z)(o), (0, x.Z)(s), (0, x.Z)(d)),
              y = m
                .filter(function (e) {
                  return e.record.sharedFolderId === n;
                })
                .map(function (e) {
                  return e.id;
                }),
              w = (0, i.useState)(
                0 === b.length
                  ? y
                  : b.filter(function (e) {
                      return !d.some(function (t) {
                        return t === e;
                      });
                    })
              ),
              E = (0, O.Z)(w, 2),
              j = E[0],
              Z = E[1],
              I = (0, i.useState)(xr.asc),
              A = (0, O.Z)(I, 2),
              P = A[0],
              F = A[1],
              B = (0, i.useState)(!1),
              _ = (0, O.Z)(B, 2),
              H = _[0],
              L = _[1],
              T = (0, i.useState)(!1),
              V = (0, O.Z)(T, 2),
              D = V[0],
              z = V[1],
              R = (0, i.useState)([]),
              N = (0, O.Z)(R, 2),
              q = N[0],
              Y = N[1],
              G = (0, i.useCallback)(
                function () {
                  var e = u
                    ? m.filter(function (e) {
                        return u.some(function (t) {
                          return e.id === t;
                        });
                      })
                    : m;
                  return (
                    q.length &&
                      (e = e.filter(function (e) {
                        var t = "";
                        return (
                          (t =
                            e.record.sharedFolderId && e.folder
                              ? "".concat(p[e.record.sharedFolderId].name, "\\").concat(e.folder)
                              : e.record.sharedFolderId
                              ? p[e.record.sharedFolderId].name
                              : "" === e.folder
                              ? v.ag._({ id: "(none)" })
                              : e.folder),
                          q.includes(t)
                        );
                      })),
                    vr(e, P)
                  );
                },
                [m, q, P, p, u]
              ),
              W = (0, i.useMemo)(G, [G]),
              K = W.filter(function (e) {
                var t;
                return (
                  ("Password" !== (null === e || void 0 === e ? void 0 : e.recordType) ||
                    null === e ||
                    void 0 === e ||
                    null === (t = e.populatedFields) ||
                    void 0 === t ||
                    !t.some(function (e) {
                      return "individualShareSource" === e;
                    })) &&
                  (!e.record.sharedFolderId || !p[e.record.sharedFolderId].record.readOnly)
                );
              }),
              U = a(),
              J = (0, i.useRef)(null),
              X = (0, i.useRef)(null),
              Q = p[n],
              $ = y.sort(),
              ee = j.sort(),
              te = JSON.stringify($) === JSON.stringify(ee),
              re = 0 === W.length;
            return (0, M.jsx)(
              Ea,
              { "data-automation-id": "SelectStep" },
              (0, M.jsx)(
                pr,
                null,
                (0, M.jsx)(S.Trans, { id: "Move items to shared folder" }),
                (0, M.jsx)(ba, {
                  onClick: function () {
                    return t(lo.Exit);
                  },
                  "data-automation-id": "SharingDrawerSelectStepCloseButton"
                })
              ),
              (0, M.jsx)(
                mr,
                null,
                (0, M.jsx)(
                  Oa,
                  null,
                  (0, M.jsx)(S.Trans, {
                    id: "Move items you want to share with others to this folder: <0>{0}</0>. When a recipient visits their vault, these shared items will be waiting for them.",
                    values: { 0: Q.name },
                    components: [(0, M.jsx)(ja, null)]
                  })
                ),
                (0, M.jsx)(
                  Or,
                  null,
                  (0, M.jsx)(S.Trans, {
                    id: "Others may gain or lose access when you move or delete an item. Make sure you\u2019re sharing with the right people."
                  })
                ),
                (0, M.jsx)(Sa, null, (0, M.jsx)(S.Trans, { id: "Choose what to share:" })),
                (0, M.jsx)(
                  Za,
                  {
                    onClick: function () {
                      return L(!0);
                    },
                    isHighlighted: H
                  },
                  (0, M.jsx)(ka, { htmlFor: "sharingDrawerSelectStepSearchInput" }, (0, M.jsx)(ya, null)),
                  (0, M.jsx)(S.I18n, null, function (e) {
                    var t = e.i18n;
                    return (0, M.jsx)(Aa, {
                      id: "sharingDrawerSelectStepSearchInput",
                      ref: J,
                      placeholder: t._({ id: "Search" }),
                      onChange: function (e) {
                        var t = e.target.value;
                        X.current && clearTimeout(X.current),
                          (X.current = setTimeout(function () {
                            return (e = t), Y([]), void (e.trim().length > 0 ? (U.searchItems(e), z(!0)) : (U.changeFilter(void 0), z(!1)));
                            var e;
                          }, 500));
                      },
                      onBlur: function () {
                        return L(!1);
                      }
                    });
                  }),
                  D &&
                    (0, M.jsx)(
                      ka,
                      {
                        onClick: function (e) {
                          e.stopPropagation(), Y([]), U.changeFilter(void 0), z(!1), L(!1), J.current && (J.current.value = "");
                        },
                        "data-automation-id": "CancelSearchButton"
                      },
                      (0, M.jsx)(wa, null)
                    )
                ),
                (0, M.jsx)(xa, {
                  checked:
                    !K.some(function (e) {
                      return !j.some(function (t) {
                        return t === e.id;
                      });
                    }) &&
                    j.length > 0 &&
                    K.length > 0,
                  disabled: 0 === K.length,
                  onChange: function (e) {
                    var t = e.target.checked;
                    Z(
                      t
                        ? K.map(function (e) {
                            return e.id;
                          })
                        : j.filter(function (e) {
                            return !K.some(function (t) {
                              return t.id === e;
                            });
                          })
                    );
                  },
                  sortOrder: P,
                  onChangeSortOrder: function () {
                    var e = P === xr.asc ? xr.desc : xr.asc;
                    F(e);
                  },
                  onChangeSelectedFolders: function (e) {
                    Y(e);
                  },
                  selectedFolders: q
                }),
                re &&
                  (0, M.jsx)(
                    Pa,
                    null,
                    (0, M.jsx)(Ma, null, (0, M.jsx)(S.Trans, { id: "Sorry, no results match your search." })),
                    (0, M.jsx)(
                      Ma,
                      null,
                      (0, M.jsx)(S.Trans, { id: "Try searching for different keywords and check your spelling for any typos." })
                    )
                  ),
                !re &&
                  (0, M.jsx)(
                    Ia,
                    { "data-automation-id": "DrawerItemList" },
                    W.map(function (e) {
                      return (0, M.jsx)(Yl, {
                        key: e.id,
                        item: va(e, p),
                        checkBoxVisible: !0,
                        checked: j.includes(e.id),
                        onChange: function () {
                          return (
                            (t = e.id),
                            void (j.includes(t)
                              ? Z(
                                  j.filter(function (e) {
                                    return e !== t;
                                  })
                                )
                              : Z([].concat((0, x.Z)(j), [t])))
                          );
                          var t;
                        }
                      });
                    })
                  )
              ),
              (0, M.jsx)(
                gr,
                null,
                l &&
                  (0, M.jsx)(
                    oe,
                    {
                      "data-automation-id": "SelectStepCancelButton",
                      onClick: function () {
                        return t(lo.Exit);
                      },
                      color: "secondary",
                      variant: "text"
                    },
                    (0, M.jsx)(S.Trans, { id: "Cancel" })
                  ),
                !l &&
                  (0, M.jsx)(
                    oe,
                    {
                      "data-automation-id": "SelectStepBackButton",
                      onClick: function () {
                        var e = W.filter(function (e) {
                          return (
                            j.some(function (t) {
                              return t === e.id;
                            }) && e.record.sharedFolderId !== n
                          );
                        });
                        U.sendSegmentEvent("Shared Folder Items Managed", {
                          Step: "Move items to shared folder",
                          Action: "Back",
                          ItemCount: e.length,
                          ItemRemoved: d.length
                        }),
                          U.goToDrawerStatus(g.NOT_EMPTY);
                      },
                      color: "secondary",
                      variant: "text"
                    },
                    (0, M.jsx)(S.Trans, { id: "Back" })
                  ),
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "SelectStepSaveButton",
                    onClick: function () {
                      var e = [],
                        t = [];
                      j.forEach(function (r) {
                        var n = h[r] || f[r];
                        n.record.individualShareSource || n.record.individualShare ? t.push(r) : e.push(r);
                      });
                      var r = m
                          .filter(function (t) {
                            return (
                              t.record.sharedFolderId === n &&
                              !e.some(function (e) {
                                return e === t.id;
                              })
                            );
                          })
                          .map(function (e) {
                            return e.id;
                          }),
                        i = W.filter(function (t) {
                          return (
                            e.some(function (e) {
                              return e === t.id;
                            }) &&
                            t.record.sharedFolderId !== n &&
                            !t.record.individualShare
                          );
                        });
                      U.collectMoveItems(e, t, r),
                        U.sendSegmentEvent("Shared Folder Items Managed", {
                          Step: "Move items to shared folder",
                          Action: "Save changes",
                          ItemCount: i.length + t.length,
                          ItemRemoved: r.length
                        });
                    },
                    disabled: te
                  },
                  (0, M.jsx)(S.Trans, { id: "Save changes" })
                )
              )
            );
          }),
          (0, d.Z)(Ja, g.COPY, function (e) {
            var t = e.initiateClose,
              r = c(function (e) {
                return e;
              }),
              n = r.copyIntoSharedFolder,
              i = r.moveIntoSharedFolder,
              l = r.sharedFolderId,
              o = k(function (e) {
                return e;
              }),
              s = o.passwords,
              d = o.dataRecords,
              u = o.sharedFolders,
              C = vr(
                n.map(function (e) {
                  return s[e] || d[e];
                }),
                xr.asc
              ),
              f = a(),
              h = function (e) {
                var t = [].concat((0, x.Z)(Object.values(d)), (0, x.Z)(Object.values(s))).filter(function (e) {
                  return (
                    i.some(function (t) {
                      return t === e.id;
                    }) &&
                    e.record.sharedFolderId !== l &&
                    !e.record.individualShare
                  );
                });
                f.sendSegmentEvent("Shared Folder Items Managed", {
                  Step: "Copy Items",
                  Action: e,
                  ItemCount: t.length + n.length,
                  ItemToCopyCount: n.length
                });
              };
            return (0, M.jsx)(
              Ba,
              { "data-automation-id": "CopyStep" },
              (0, M.jsx)(
                pr,
                null,
                (0, M.jsx)(S.Trans, { id: "Copy items" }),
                (0, M.jsx)(_a, {
                  onClick: function () {
                    return t(lo.Exit);
                  }
                })
              ),
              (0, M.jsx)(
                mr,
                null,
                (0, M.jsx)(S.Trans, {
                  id: "These items have been shared individually before, so you can\u2019t move them to a shared folder. Copy the item first and try again."
                }),
                (0, M.jsx)(
                  Or,
                  null,
                  (0, M.jsx)(S.Trans, {
                    id: "Changes aren\u2019t synced between copies. Any changes to a copied item must be updated manually for each copy where the changes apply."
                  })
                ),
                (0, M.jsx)(S.Trans, { id: "Copy these items?" }),
                (0, M.jsx)(
                  Ha,
                  null,
                  (0, M.jsx)(Ta, null, (0, M.jsx)(S.Trans, { id: "Name" })),
                  (0, M.jsx)(Va, null, (0, M.jsx)(S.Trans, { id: "Folder" }))
                ),
                (0, M.jsx)(
                  La,
                  null,
                  C.map(function (e) {
                    return (0, M.jsx)(Yl, { key: e.id, item: va(e, u) });
                  })
                )
              ),
              (0, M.jsx)(
                gr,
                null,
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "CopyStepBackButton",
                    variant: "text",
                    color: "secondary",
                    onClick: function () {
                      h(Fa.BACK), f.goToDrawerStatus(g.SELECT);
                    }
                  },
                  (0, M.jsx)(S.Trans, { id: "Back" })
                ),
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "CopyStepSkipButton",
                    variant: "outlined",
                    color: "primary",
                    onClick: function () {
                      h(Fa.SKIP_THESE_ITEMS), f.skipItems();
                    }
                  },
                  (0, M.jsx)(S.Trans, { id: "Skip these items" })
                ),
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "CopyStepCopyButton",
                    onClick: function () {
                      h(Fa.MAKE_A_COPY), f.copyItems();
                    }
                  },
                  (0, M.jsx)(S.Trans, { id: "Make copy" })
                )
              )
            );
          }),
          (0, d.Z)(Ja, g.CONFIRM, function (e) {
            var t = e.initiateClose,
              r = c(function (e) {
                return e;
              }),
              n = r.copyIntoSharedFolder,
              l = r.moveIntoSharedFolder,
              o = r.moveOutSharedFolder,
              s = r.sharedFolderId,
              d = r.copyIsEnabled,
              u = k(function (e) {
                return e;
              }),
              C = u.passwords,
              f = u.dataRecords,
              h = u.sharedFolders,
              p = [].concat((0, x.Z)(Object.values(f)), (0, x.Z)(Object.values(C))).filter(function (e) {
                return e.record.sharedFolderId === s;
              }),
              m = d ? [].concat((0, x.Z)(l), (0, x.Z)(n)) : l,
              b = vr(
                m
                  .filter(function (e) {
                    return !p.some(function (t) {
                      return t.id === e;
                    });
                  })
                  .map(function (e) {
                    return C[e] || f[e];
                  })
                  .filter(function (e) {
                    return void 0 !== e;
                  }),
                xr.asc
              ),
              y = vr(
                o
                  .map(function (e) {
                    return C[e] || f[e];
                  })
                  .filter(function (e) {
                    return void 0 !== e;
                  }),
                xr.asc
              ),
              w = a(),
              E = h[s];
            return (0, M.jsx)(
              Da,
              { "data-automation-id": "ConfirmStep" },
              (0, M.jsx)(
                pr,
                null,
                (0, M.jsx)(S.Trans, { id: "Confirmation required" }),
                (0, M.jsx)(za, {
                  onClick: function () {
                    return t(lo.Exit);
                  }
                })
              ),
              (0, M.jsx)(
                mr,
                null,
                b.length > 0 &&
                  (0, M.jsx)(
                    i.Fragment,
                    null,
                    (0, M.jsx)(
                      Wa,
                      null,
                      y.length > 0 && (0, M.jsx)(Ka, null, (0, M.jsx)(S.Trans, { id: "Confirm these changes." })),
                      (0, M.jsx)(
                        Ka,
                        null,
                        (0, M.jsx)(S.Trans, {
                          id: "Move the following items to this folder and share information and/or access with others? <0>{0}</0>",
                          values: { 0: E.name },
                          components: [(0, M.jsx)(Ra, null)]
                        })
                      )
                    ),
                    (0, M.jsx)(
                      Na,
                      null,
                      (0, M.jsx)(qa, null, (0, M.jsx)(S.Trans, { id: "Name" })),
                      (0, M.jsx)(Ya, null, (0, M.jsx)(S.Trans, { id: "New folder" }))
                    ),
                    (0, M.jsx)(
                      Ga,
                      null,
                      b.map(function (e) {
                        return (0, M.jsx)(Yl, { key: e.id, item: (0, Y.Z)((0, Y.Z)({}, e), {}, { folder: E.name }) });
                      })
                    )
                  ),
                (0, M.jsx)(
                  Ua,
                  null,
                  y.length > 0 &&
                    (0, M.jsx)(S.Trans, {
                      id: "Remove these items from this shared folder? <0>{0}</0>",
                      values: { 0: E.name },
                      components: [(0, M.jsx)(Ra, null)]
                    })
                ),
                y.length > 0 &&
                  (0, M.jsx)(
                    i.Fragment,
                    null,
                    (0, M.jsx)(
                      Na,
                      null,
                      (0, M.jsx)(qa, null, (0, M.jsx)(S.Trans, { id: "Name" })),
                      (0, M.jsx)(Ya, null, (0, M.jsx)(S.Trans, { id: "New folder" }))
                    ),
                    (0, M.jsx)(
                      Ga,
                      null,
                      y.map(function (e) {
                        return (0, M.jsx)(Yl, { key: e.id, item: (0, Y.Z)((0, Y.Z)({}, e), {}, { folder: v.ag._({ id: "(none)" }) }) });
                      })
                    )
                  )
              ),
              (0, M.jsx)(
                gr,
                null,
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "ConfirmStepBackButton",
                    variant: "text",
                    color: "secondary",
                    onClick: function () {
                      var e = b.filter(function (e) {
                        return e.record.sharedFolderId !== s && !e.record.individualShare;
                      });
                      w.sendSegmentEvent("Shared Folder Items Managed", {
                        Step: "Confirmation required",
                        Action: "Back",
                        ItemCount: e.length + n.length,
                        ItemToCopyCount: n.length,
                        ItemRemoved: o.length
                      }),
                        w.goToDrawerStatus(n.length > 0 ? g.COPY : g.SELECT);
                    }
                  },
                  (0, M.jsx)(S.Trans, { id: "Back" })
                ),
                (0, M.jsx)(
                  oe,
                  {
                    "data-automation-id": "ConfirmStepConfirmButton",
                    onClick: function () {
                      n.length > 0 ? w.cloneItems(n, s) : w.cloneItemsSuccess();
                      var e = b
                        .filter(function (e) {
                          return e.record.sharedFolderId !== s && !e.record.individualShare;
                        })
                        .map(function (e) {
                          return e.id;
                        });
                      w.moveItems(e, o, s), t(lo.Save);
                    }
                  },
                  (0, M.jsx)(S.Trans, { id: "Confirm" })
                )
              )
            );
          }),
          Ja),
        so = function () {
          var e = (0, i.useState)(!1),
            t = (0, O.Z)(e, 2),
            r = t[0],
            n = t[1],
            l = c(function (e) {
              return e;
            }),
            o = l.drawerStatus,
            d = l.moveIntoSharedFolder,
            u = l.moveOutSharedFolder,
            C = l.copyIntoSharedFolder,
            f = l.copyIsEnabled,
            h = l.sharedFolderId,
            p = k(function (e) {
              return e;
            }),
            m = p.passwords,
            v = p.dataRecords,
            b = a(),
            y = (0, i.useContext)(s),
            w = (0, P.T)(y, "sharingDrawer"),
            E = !!co[o],
            j = co[o];
          return (
            (0, i.useEffect)(function () {
              setTimeout(function () {
                return n(!0);
              }, 100);
            }, []),
            w &&
              (0, M.jsx)(
                A.Q,
                { container: w },
                (0, M.jsx)(
                  ao,
                  { open: r },
                  (0, M.jsx)(
                    oo,
                    { "data-automation-id": "SharingDrawer", open: r },
                    E &&
                      (0, M.jsx)(j, {
                        initiateClose: function (e) {
                          var t = [].concat((0, x.Z)(Object.values(v)), (0, x.Z)(Object.values(m))).filter(function (e) {
                            return (
                              d.some(function (t) {
                                return e.id === t;
                              }) &&
                              e.record.sharedFolderId !== h &&
                              !e.record.individualShare
                            );
                          });
                          b.sendSegmentEvent("Shared Folder Items Managed", {
                            Step:
                              o === g.NOT_EMPTY
                                ? "Existing items"
                                : o === g.SELECT
                                ? "Move items to shared folder"
                                : o === g.COPY
                                ? "Copy items"
                                : o === g.CONFIRM
                                ? "Confirmation required"
                                : "Closed drawer",
                            Action: e === lo.Save ? "Confirm" : "Close",
                            ItemCount: d.length,
                            ItemToCopyCount: o !== g.CONFIRM || f ? t.length + C.length : t.length,
                            ItemRemoved: u.length
                          }),
                            n(!1),
                            setTimeout(function () {
                              b.closeSharingDrawer(e);
                            }, 450);
                        }
                      })
                  )
                )
              )
          );
        },
        uo = (0, n.Z)("div", { target: "eqmi4k00" })(""),
        Co = function (e) {
          var t = e.vault,
            r = c(w),
            n = r.isAcceptItemModalOpen,
            l = r.isVerifyYourEmailModalOpen,
            o = r.isEmailSentModalOpen,
            d = r.isLookModalOpen,
            u = r.isSharedFolderLookModalOpen,
            C = r.isDeleteSharedFolderModalOpen,
            f = c(w).isHighlightItemActive,
            h =
              c(function (e) {
                return e;
              }).drawerStatus !== g.CLOSED,
            p = a(),
            x = t.document.querySelector("#reactMainContent"),
            v = n || l || o || d || u || C,
            b = ze(t);
          return (
            (0, i.useEffect)(
              function () {
                if (x)
                  return (
                    (x.style.display = "block"),
                    function () {
                      (x.style.display = "auto"), p.clearBanners();
                    }
                  );
              },
              [p, x]
            ),
            (0, i.useEffect)(
              function () {
                b && (p.rejectBanner(), p.clearBanners());
              },
              [b, p]
            ),
            (function () {
              var e = k(function (e) {
                  return e;
                }).pendingReceivedShares,
                t = c(function (e) {
                  return e;
                }),
                r = t.banners,
                n = t.status,
                l = c(E),
                o = a();
              (0, i.useEffect)(
                function () {
                  var t = 0 !== Object.keys(e).length,
                    n = r.find(function (e) {
                      return "AcceptSharedItemBannerWithLink" === e.componentType;
                    });
                  !t && n && o.removeBanner(n.id);
                },
                [o, r, e]
              ),
                (0, i.useEffect)(
                  function () {
                    var t = 0 !== Object.keys(e).length;
                    !r.some(function (e) {
                      return "AcceptSharedItemBannerWithLink" === e.componentType;
                    }) &&
                      t &&
                      !l &&
                      n !== m.REJECT &&
                      (o.addBanner({ color: "info", isPermanent: !0, componentType: "AcceptSharedItemBannerWithLink" }),
                      o.sendSegmentEvent("Accept Shared Item Banner Shown", { ItemCount: Object.keys(e).length }));
                  },
                  [o, e, l, r, n]
                );
            })(),
            (0, M.jsx)(
              uo,
              { "data-automation-id": "AcceptShared" },
              (0, M.jsx)(
                s.Provider,
                { value: t },
                (0, M.jsx)(Wt, null),
                b && h && (0, M.jsx)(so, null),
                v && (0, M.jsx)(At, null),
                f && (0, M.jsx)(hr, null)
              )
            )
          );
        };
    }
  }
]);
