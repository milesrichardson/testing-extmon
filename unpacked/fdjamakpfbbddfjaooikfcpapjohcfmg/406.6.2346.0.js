(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [406],
  {
    59896: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => u });
      var a = n(696832),
        o = n(142897),
        i = n(526849),
        s = n(383849),
        r = n.n(s),
        l = n(769183);
      var c = n(255990);
      function d(e, t) {
        const n = e.find((e) => String(e.value) === String(t));
        return null != n ? n : null;
      }
      class u extends a.Component {
        constructor(e) {
          super(e),
            (this.select = a.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const n = t.value,
                a = d(this.props.options, n);
              this.setState({ optionSelected: a }), this.props.onChange && this.props.onChange(e);
            }),
            (this.handleKeyDown = (e) => {
              "Enter" === e.key && e.preventDefault(), this.props.onFieldKeyDown?.(e);
            }),
            (this.handleFocus = () => {
              this.setState({ isSelectFocused: !0 });
            }),
            (this.handleBlur = () => {
              this.setState({ isSelectFocused: !1 });
            });
          let t = null;
          this.props.options.length &&
            (t = d(
              this.props.options,
              null === this.props.defaultOption ? (0, i.head)(this.props.options).value : this.props.defaultOption.value
            )),
            (this.state = { fieldHtmlId: (0, l.Z)(), optionSelected: t, isSelectFocused: !1 });
        }
        getValue() {
          if (!this.select.current) throw new Error("select ref not initialized");
          return this.select.current.value;
        }
        render() {
          var e;
          const t = this.props.marginSide || "none",
            n = r()("selectContainer--mo5uz0qo56", c.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            a = r()("selector--fgNHKzkAC3", this.props.classNames);
          let s;
          this.state.optionSelected
            ? (s = this.state.optionSelected.value)
            : this.props.options.length &&
              (s = null === this.props.defaultOption ? (0, i.head)(this.props.options).value : this.props.defaultOption.value);
          const l = this.state.optionSelected
            ? this.state.optionSelected.selectedLabel
              ? this.state.optionSelected.selectedLabel
              : this.state.optionSelected.label
            : this.props.placeholder;
          return (0, o.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, o.tZ)(
                "label",
                { className: c.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, o.tZ)(
              "div",
              { className: n },
              (0, o.tZ)(
                "div",
                { className: a },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, o.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, o.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, l)
              ),
              (0, o.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: c.Z.select,
                  ref: this.select,
                  id: this.state.fieldHtmlId,
                  value: s,
                  name: this.props.name,
                  disabled: this.props.disabled,
                  "data-name": this.props.dataName,
                  onKeyDown: this.handleKeyDown,
                  onChange: this.handleChange,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  "aria-label": null != (e = this.props.ariaLabel) ? e : this.props.label
                },
                this.props.options.map((e) => (0, o.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    507525: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => S });
      var a = n(696832),
        o = n(142897),
        i = n(441217),
        s = n(660765),
        r = n(201389),
        l = (n(416702), n(842403), n(798849), n(453576)),
        c = n(66941),
        d = n(62429),
        u = n(787268),
        p = n(979442),
        _ = n(233248),
        f = n(924969);
      const h = 15 * Math.pow(1024, 2),
        m = { PROGRESS_CIPHERING: "webapp_secure_file_upload_progress_ciphering_markup" };
      function b(e) {
        const [t, n] = (0, a.useState)(!1),
          o = (0, u.V)(),
          { translateWithMarkup: r } = (0, p.Y)();
        return {
          isUploading: t,
          upload: (t, a) => {
            if (t)
              if (t.size > h) a?.({ success: !1, error: { code: l.SecureFileResultErrorCode.MAX_CONTENT_LENGTH_EXCEEDED } });
              else {
                const u = (0, _.K)(t.name);
                o.showAlert((0, f.b)(r({ key: m.PROGRESS_CIPHERING, params: { fileName: u } })), i.BLW.SUBTLE, !1), n(!0);
                const p = new FileReader(),
                  b = (e) => {
                    a?.(e), n(!1);
                  };
                (p.onloadend = async () =>
                  (async function (e, t, n, a) {
                    if (2 === e.readyState) {
                      const o = e.result,
                        i = new Uint8Array(o),
                        r = JSON.stringify(Array.from(i));
                      if (t.size > h) a?.({ success: !1, error: { code: l.SecureFileResultErrorCode.MAX_CONTENT_LENGTH_EXCEEDED } });
                      else {
                        const e = await c.C.addSecureFile({ fileName: t.name, fileType: t.type, serializedContent: r });
                        e.success &&
                          (0, d.Kz)(
                            new s.UserUpdateVaultItemAttachmentEvent({
                              attachmentAction: s.Action.Add,
                              itemId: e.secureFileInfo.Id,
                              itemType: n
                            })
                          ),
                          a?.(e);
                      }
                    }
                    return null;
                  })(p, t, e, b)),
                  p.readAsArrayBuffer(t);
              }
          }
        };
      }
      var g = n(919663),
        E = n(553966);
      const S = ({
        onFileUploadStarted: e,
        onFileUploadDone: t,
        isQuotaReached: n,
        isShared: l,
        itemId: u,
        dataType: p,
        disabled: _ = !1
      }) => {
        var f;
        const h = (0, g.ml)("KWIDCard" === p) && !l,
          m =
            null != (f = E.dataModelTypeToItemType[p])
              ? f
              : (function (e) {
                  throw new Error(e);
                })(`Unsupported Type ${p}`),
          { translate: S } = (0, r.Z)(),
          { upload: w, isUploading: y } = b(m),
          [C, v] = (0, a.useState)(""),
          { showErrorAlert: x } = (0, g.Pw)(C),
          N = (0, g.yK)(),
          T = (e) => {
            t?.(e), e.success || x(e.error?.code);
          },
          O = async (t) => {
            const n = await (async (e) => await c.C.validateSecureFile({ fileName: e.name, fileType: e.type, contentLength: e.size }))(t);
            n.success ? (e(), v(t.name), w(t, T)) : x(n?.error?.code);
          };
        return h
          ? (0, o.tZ)(
              i.Ejs,
              null,
              (0, o.tZ)("input", {
                type: "file",
                id: "secureFileInput",
                sx: { display: "none" },
                onChange: (e) => {
                  e?.target?.files?.length && O(e.target.files[0]), (e.target.value = "");
                },
                accept: N?.join(",")
              }),
              (0, o.tZ)(
                o.zx,
                {
                  key: "attach",
                  mood: "neutral",
                  intensity: "quiet",
                  icon: "AttachmentOutlined",
                  layout: "iconLeading",
                  onClick: (e) => {
                    u && (0, d.Kz)(new s.UserUpdateVaultItemAttachmentEvent({ attachmentAction: s.Action.Add, itemId: u, itemType: m })),
                      document.getElementById("secureFileInput")?.click(),
                      e.preventDefault();
                  },
                  disabled: n || y || _
                },
                S("webapp_secure_notes_add_attachment_action_name")
              )
            )
          : null;
      };
    },
    924969: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => i });
      var a = n(695495),
        o = n(441217);
      const i = (e) =>
        (0, a.tZ)(o.Ejs, { justifyContent: "center" }, (0, a.tZ)(o.HoD, { sx: { mr: "8px" }, color: o.colors.dashGreen00, size: 18 }), e);
    },
    97242: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => a });
      const a = (e) => ({
        id: e.Id,
        type: e.Type,
        version: 1,
        filename: e.Filename,
        downloadKey: e.DownloadKey,
        cryptoKey: e.CryptoKey,
        localSize: e.LocalSize,
        remoteSize: e.RemoteSize,
        creationDatetime: e.CreationDatetime,
        userModificationDatetime: e.UserModificationDatetime,
        owner: e.Owner
      });
    },
    233248: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => a });
      const a = (e) => (e.length <= 32 ? e : e.substring(0, 32));
    },
    919663: (e, t, n) => {
      "use strict";
      n.d(t, { ml: () => g, aV: () => m, yK: () => T, vN: () => r, gF: () => _, Ce: () => c, Pw: () => N });
      var a = n(453576),
        o = n(66941),
        i = n(62429),
        s = n(660765);
      function r(e, t, n, r) {
        return {
          deleteFile: () => {
            o.C.deleteSecureFile({ id: e }).then((o) => {
              var l;
              o.success || (!o.success && o.error?.code === a.SecureFileResultErrorCode.FILE_NOT_FOUND)
                ? (r?.(e),
                  (0, i.Kz)(new s.UserUpdateVaultItemAttachmentEvent({ attachmentAction: s.Action.Delete, itemId: e, itemType: n })))
                : t(null != (l = o.error?.code) ? l : a.SecureFileResultErrorCode.INTERNAL_ERROR);
            });
          }
        };
      }
      var l = n(148038);
      function c(e) {
        const t = (0, l.qr)(
          {
            queryConfig: { query: o.C.getFileDownloadProgress, queryParam: e },
            liveConfig: { live: o.C.liveFileDownloadProgress, liveParam: e }
          },
          [e]
        );
        return t.status === l.rq.Success ? t.data : null;
      }
      n(416702), n(842403), n(798849);
      var d = n(696832);
      const u = (e, t) => {
          try {
            const t = JSON.parse(e);
            return new Uint8Array(t).buffer;
          } catch (e) {
            return t(a.SecureFileResultErrorCode.INTERNAL_ERROR), null;
          }
        },
        p = (e, t, n) => {
          if (e) {
            const a = new Blob([e], { type: n }),
              o = document.createElement("a");
            (o.href = window.URL.createObjectURL(a)), (o.download = t), o.click();
          }
        };
      function _({ id: e, filename: t, downloadKey: n, cryptoKey: r, type: l }, _, f) {
        const h = c(n),
          m = (0, d.useRef)("");
        return (
          (0, d.useEffect)(() => {
            h?.status === a.FileDownloadStatus.ChunkReady && ((m.current = m.current.concat(h.chunk)), o.C.chunkTransferDone(n));
          }, [h, n]),
          (0, d.useEffect)(() => {
            h?.status === a.FileDownloadStatus.TransferComplete &&
              (p(u(m.current, _), t, l),
              (m.current = ""),
              o.C.clearSecureFileState(n),
              (0, i.Kz)(new s.UserDownloadVaultItemAttachmentEvent({ itemId: e, itemType: f })));
          }, [h, _, t, l, n, e, f]),
          {
            download: () => {
              o.C.downloadSecureFile({ downloadKey: n, cryptoKey: r });
            }
          }
        );
      }
      n(509144);
      var f = n(65255),
        h = n(915970);
      function m() {
        return (0, h.w)(f.w.SaexSecureNoteAttachmentsForrelease);
      }
      var b = n(377160);
      function g(e) {
        const t = (0, h.w)(f.w.TechweekWebAttachmentsForIdsV1),
          n = m(),
          a = (0, b.rp)(["secureFiles"]),
          o = n && a;
        return e ? o && t : o;
      }
      var E = n(441217),
        S = n(787268),
        w = n(979442),
        y = n(924969),
        C = n(233248);
      const v = {
          PROGRESS_UPLOADING: "webapp_secure_file_upload_progress_loading_markup",
          PROGRESS_CIPHERING: "webapp_secure_file_upload_progress_ciphering_markup",
          UPLOAD_SUCCESS: "webapp_secure_file_upload_success_markup",
          UNKNOWN_ERROR: "webapp_secure_file_error_unknown",
          MAX_CONTENT_LENGTH_EXCEEDED: "webapp_secure_file_error_upload_max_length_excedeed",
          QUOTA_EXCEDEED: "webapp_secure_file_error_upload_quota_excedeed",
          INVALID_FILE_TYPE: "webapp_secure_file_error_file_type_not_allowed"
        },
        x = (e) => {
          var t;
          return e && null != (t = v[e]) ? t : v.UNKNOWN_ERROR;
        },
        N = (e) => {
          const t = (0, S.V)(),
            { translateWithMarkup: n } = (0, w.Y)(),
            i = (function () {
              const e = (0, l.qr)(
                { queryConfig: { query: o.C.getFileUploadProgress }, liveConfig: { live: o.C.liveFileUploadProgress } },
                []
              );
              return e.status === l.rq.Success ? e.data : null;
            })(),
            s = (0, C.K)(e);
          return (
            (0, d.useEffect)(() => {
              var e, o;
              const r = (e) => t.showAlert((0, y.b)(n(e)), E.BLW.SUBTLE, !1);
              switch (i?.status) {
                case a.FileUploadStatus.Uploading:
                  r({
                    key: v.PROGRESS_UPLOADING,
                    params: {
                      fileName: s,
                      progress: Math.round(null != (e = (null != (o = 100 * i?.bytesSent) ? o : 0) / i?.contentLength) ? e : 1)
                    }
                  });
                  break;
                case a.FileUploadStatus.Ciphering:
                  r({ key: v.PROGRESS_CIPHERING, params: { fileName: s } });
                  break;
                case a.FileUploadStatus.Done:
                  t.showAlert(n({ key: v.UPLOAD_SUCCESS, params: { fileName: s } }), E.BLW.SUCCESS);
              }
            }, [t, e, i, n]),
            {
              showErrorAlert: (e) => {
                t.showAlert(n({ key: x(null != e ? e : "") }), E.BLW.ERROR);
              }
            }
          );
        };
      function T() {
        const e = (0, l.qr)({ queryConfig: { query: o.C.getSecureDocumentsExtensionsList } }, []);
        return e.status === l.rq.Success ? e.data : void 0;
      }
    },
    509144: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => i });
      var a = n(148038),
        o = n(66941);
      function i() {
        const e = (0, a.qr)({ queryConfig: { query: o.C.getSecureFilesQuota }, liveConfig: { live: o.C.liveSecureFilesQuota } }, []);
        return e.status === a.rq.Success ? e.data : { max: 0, remaining: 0 };
      }
    },
    396119: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => o });
      var a = n(66941);
      const o = async (e) => await a.C.clearSecureFileState(null != e ? e : "");
    },
    234931: (e, t, n) => {
      "use strict";
      n.d(t, { SecureNoteTabs: () => a });
      let a = (function (e) {
        return (
          (e[(e.CONTENT = 0)] = "CONTENT"),
          (e[(e.DOCUMENT_STORAGE = 1)] = "DOCUMENT_STORAGE"),
          (e[(e.MORE_OPTIONS = 2)] = "MORE_OPTIONS"),
          (e[(e.SHARED_ACCESS = 3)] = "SHARED_ACCESS"),
          e
        );
      })({});
    },
    925394: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => R });
      var a = n(142897),
        o = n(441217),
        i = n(696832),
        s = n(383849),
        r = n.n(s),
        l = n(151796);
      var c,
        d,
        u = n(15567),
        p = n.n(u),
        _ = n(102730),
        f = n.n(_);
      const h = 312,
        m = "info";
      class b extends i.Component {
        constructor(e) {
          super(e),
            (this.showTooltip = () => {
              this.setState({ isTooltipVisible: !0 });
            }),
            (this.hideTooltip = () => {
              this.setState({ isTooltipVisible: !1 });
            }),
            (this.renderIcon = () => {
              const { type: e = m } = this.props;
              switch (e) {
                case "info":
                  return c || (c = i.createElement(f(), null));
                case "question":
                  return d || (d = i.createElement(p(), null));
                default:
                  (0, l.U)(e);
              }
              return null;
            }),
            (this.state = { isTooltipVisible: !1 });
        }
        render() {
          const { iconClassNames: e = [], maxWidth: t = h, children: n } = this.props,
            a = this.renderIcon();
          return i.createElement(
            "div",
            { className: "container--nIJjYvifKn", onMouseEnter: this.showTooltip, onMouseLeave: this.hideTooltip },
            i.createElement("div", { className: r()("iconContainer--Qd32ya5v0T", ...e) }, a),
            i.createElement(
              "div",
              {
                className: r()("tooltipContainer--Yos9HnS8si", { "tooltipDisplayed--ibyWhutbpT": this.state.isTooltipVisible }),
                style: { maxWidth: `${t}px` }
              },
              n,
              i.createElement("div", { className: "triangle--n9NwQgxSAc" })
            )
          );
        }
      }
      var g = n(234931),
        E = n(53915),
        S = n(201389),
        w = n(919663),
        y = n(796446),
        C = n(654);
      const v = ({ title: e, disabled: t = !1, onChange: n }) => {
        const { translate: o } = (0, S.Z)(),
          i = o("webapp_secure_notes_addition_field_placeholder_no_title");
        return (0, a.tZ)(
          C.Z,
          { sx: { display: "block", width: "100%" }, tooltipText: e || i },
          (0, a.tZ)("input", {
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
            placeholder: i,
            value: e || "",
            disabled: t,
            onChange: n
          })
        );
      };
      var x;
      const { CONTENT: N, DOCUMENT_STORAGE: T, MORE_OPTIONS: O, SHARED_ACCESS: I } = g.SecureNoteTabs,
        R = ({
          activeTab: e,
          setActiveTab: t,
          backgroundColor: n,
          disabled: i,
          displayDocumentStorage: s,
          displaySharedAccess: r,
          recipientsCount: l,
          title: c,
          setTitle: d
        }) => {
          const { translate: u } = (0, S.Z)(),
            p = (0, w.aV)(),
            _ = [{ active: e === N, label: u("webapp_secure_notes_edition_field_tab_title_details"), onClick: () => t(N) }];
          if (
            (r &&
              _.push({
                active: e === I,
                label: `${u("webapp_secure_notes_edition_field_tab_title_shared_access")} (${l})`,
                onClick: () => t(I)
              }),
            s)
          ) {
            const n = p
              ? void 0
              : (0, a.tZ)(b, null, (0, a.tZ)("p", null, u("webapp_secure_notes_edition_field_tab_title_attachments_tooltips")));
            _.push({
              active: e === T,
              label: u("webapp_secure_notes_edition_field_tab_title_attachments"),
              onClick: () => t(T),
              tabIconElement: n
            });
          }
          return (
            _.push({ active: e === O, label: u("webapp_secure_notes_edition_field_tab_title_options"), onClick: () => t(O) }),
            (0, a.tZ)(y.V9, {
              icon: (0, a.tZ)("div", { className: "iconWrapper--d4t5P9vl4W" }, x || (x = (0, a.tZ)(o.uHY, { size: 40, color: "white" }))),
              iconBackgroundColor: (0, E.Z)(n),
              title: (0, a.tZ)(v, { title: c, disabled: i, onChange: (e) => d(e.target.value) }),
              tabs: _
            })
          );
        };
    },
    885131: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => Ne, T: () => Te });
      var a = n(696832),
        o = n(695495),
        i = n(441217),
        s = n(65255),
        r = n(915970),
        l = n(201389),
        c = n(210994),
        d = n(453576),
        u = n(787268),
        p = n(979442),
        _ = n(919663),
        f = n(924969);
      var h = n(660765),
        m = n(62429),
        b = n(233248),
        g = n(177704);
      const E = "webapp_secure_file_error_unknown",
        S = "webapp_secure_file_delete_button_title",
        w = "webapp_secure_file_download_button_title",
        y = {
          cursor: "pointer",
          margin: "0px 10px",
          padding: "5px",
          border: "1px solid transparent",
          "&:hover": { border: `1px solid ${i.colors.grey05}` },
          borderRadius: "4px"
        },
        C = { opacity: 0.6 },
        v = ({ attachment: e, disableActions: t, handleFileInfoDetached: n, onModalDisplayStateChange: s, parentId: r, parentType: c }) => {
          const { translate: d } = (0, l.Z)(),
            { translateWithMarkup: f } = (0, p.Y)(),
            w = (0, u.V)(),
            [v, x] = (0, a.useState)(!1),
            N = (0, a.useCallback)(() => w.showAlert(f(E), i.BLW.ERROR), [w, f]),
            { deleteFile: T } = (0, _.vN)(e.id, N, c, n),
            O = () => {
              x(!1), s?.(!1);
            };
          return (0, o.tZ)(
            a.Fragment,
            null,
            (0, o.tZ)(
              i.ua7,
              {
                placement: "left",
                trigger: "hover",
                content: f(
                  t ? "webapp_secure_file_delete_button_tooltip_content_disable" : "webapp_secure_file_delete_button_tooltip_content_enable"
                )
              },
              (0, o.tZ)(
                "div",
                {
                  sx: t ? (0, i.jMf)([y, C]) : y,
                  onClick: () => {
                    x(!0), s?.(!0);
                  }
                },
                (0, o.tZ)(i.XHJ, { color: i.colors.dashGreen00, "aria-hidden": "true", title: d(S), "aria-label": d(S) })
              )
            ),
            (0, o.tZ)(
              i.VqE,
              { isOpen: v && !t, onClose: O, closeIconName: "CloseIcon", modalContentClassName: g.jK },
              (0, o.tZ)(
                i.a7O,
                null,
                (0, o.tZ)(
                  i.X6q,
                  { size: "small", sx: { margin: "16px 0px", fontWeight: "bolder" } },
                  f("webapp_secure_file_delete_confirm_dialog_heading")
                ),
                (0, o.tZ)(
                  i.nvN,
                  { sx: { margin: "8px 0px" }, color: i.colors.grey00 },
                  f("webapp_secure_file_delete_confirm_dialog_paragraph")
                )
              ),
              (0, o.tZ)(i.cNS, {
                primaryButtonTitle: f("webapp_secure_file_delete_confirm_dialog_action_primary_button_title"),
                primaryButtonOnClick: () => {
                  r && (0, m.Kz)(new h.UserUpdateVaultItemAttachmentEvent({ attachmentAction: h.Action.Delete, itemId: r, itemType: c })),
                    T(),
                    w.showAlert(d("webapp_secure_file_delete_success", { fileName: (0, b.K)(e.filename) }), i.BLW.SUCCESS),
                    x(!1);
                },
                secondaryButtonTitle: f("webapp_secure_file_delete_confirm_dialog_action_secondary_button_title"),
                secondaryButtonOnClick: O,
                intent: "danger"
              })
            )
          );
        },
        x = ({ attachment: e, disableActions: t, setDisableActions: n, progress: s, parentId: r, parentType: c }) => {
          const { translate: f } = (0, l.Z)(),
            { translateWithMarkup: b } = (0, p.Y)(),
            g = (0, u.V)(),
            S = (0, a.useCallback)(() => g.showAlert(b(E), i.BLW.ERROR), [g, b]),
            { download: v } = (0, _.gF)(e, S, c);
          return (
            (0, a.useEffect)(() => {
              switch (s?.status) {
                case d.FileDownloadStatus.Downloading:
                  n(!0);
                  break;
                case d.FileDownloadStatus.TransferComplete:
                case d.FileDownloadStatus.Error:
                  n(!1);
              }
            }, [s, n, b]),
            (0, o.tZ)(
              i.ua7,
              {
                placement: "left",
                trigger: "hover",
                content: b(
                  t
                    ? "webapp_secure_file_download_button_tooltip_content_disable"
                    : "webapp_secure_file_download_button_tooltip_content_enable"
                )
              },
              (0, o.tZ)(
                "div",
                {
                  sx: t ? (0, i.jMf)([y, C]) : y,
                  onClick: t
                    ? void 0
                    : () => {
                        r && (0, m.Kz)(new h.UserDownloadVaultItemAttachmentEvent({ itemId: r, itemType: c })), v();
                      }
                },
                (0, o.tZ)(i._8t, {
                  sx: t ? C : void 0,
                  color: i.colors.dashGreen00,
                  "aria-hidden": "true",
                  "aria-label": f(w),
                  title: f(w)
                })
              )
            )
          );
        },
        N = (e) => {
          const t = (0, _.Ce)(e.attachment.downloadKey);
          return a.createElement(
            i.Ejs,
            { alignItems: "center", justifyContent: "flex-end" },
            a.createElement(x, { progress: t, ...e }),
            a.createElement(v, { ...e })
          );
        },
        T = n(816583),
        O = {
          color: `${i.colors.grey00}`,
          minHeight: "60px",
          borderBottom: `solid 1px ${i.colors.grey05}`,
          position: "relative",
          "&:hover": { "& > *:last-child": { opacity: 1 } }
        },
        I = {
          width: 36,
          minWidth: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          background: i.colors.dashGreen06
        },
        R = { padding: "0px 8px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontWeight: "bold" },
        Z = ({ attachment: e }) =>
          (0, o.tZ)(
            i.Ejs,
            { alignItems: "center", flexWrap: "nowrap" },
            (0, o.tZ)(
              i.Ejs,
              { sx: I, alignItems: "center", justifyContent: "center" },
              (0, o.tZ)(i.Ujz, { size: 25, color: i.colors.midGreen00 })
            ),
            (0, o.tZ)(i.nvN, { sx: R }, e.filename)
          ),
        A = (e) => {
          const { attachment: t } = e,
            { translate: n } = (0, l.Z)();
          return (
            ((e) => {
              const { showAlert: t } = (0, u.V)(),
                { translateWithMarkup: n } = (0, p.Y)(),
                o = (0, _.Ce)(e.downloadKey);
              (0, a.useEffect)(() => {
                var a, s;
                const r = (e) => t((0, f.b)(n(e)), i.BLW.SUBTLE, !1);
                if (o?.status)
                  switch (o.status) {
                    case d.FileDownloadStatus.Downloading:
                      r({
                        key: "webapp_secure_file_download_progress_downloading_markup",
                        params: {
                          fileName: e.filename,
                          progress: Math.round(null != (a = (null != (s = 100 * o?.bytesReceived) ? s : 0) / o?.contentLength) ? a : 1)
                        }
                      });
                      break;
                    case d.FileDownloadStatus.Deciphering:
                      r({ key: "webapp_secure_file_download_progress_deciphering_markup", params: { fileName: e.filename } });
                      break;
                    case d.FileDownloadStatus.TransferComplete:
                      t(n({ key: "webapp_secure_file_download_progress_success_markup", params: { fileName: e.filename } }), i.BLW.SUCCESS);
                      break;
                    case d.FileDownloadStatus.Error:
                      t(n({ key: "webapp_secure_file_error_unknown" }), i.BLW.ERROR);
                  }
              }, [alert, e, o, n]);
            })(t),
            (0, o.tZ)(
              i.Ejs,
              { fullWidth: !0, alignItems: "center", sx: O },
              (0, o.tZ)(i.k$b, { sx: { width: "45%" } }, (0, o.tZ)(Z, { ...e })),
              (0, o.tZ)(i.k$b, { sx: { width: "25%" } }, n.shortDate((0, c.Z)(t.creationDatetime))),
              (0, o.tZ)(i.k$b, { sx: { width: "10%" } }, ((s = t.localSize), T(s, { decimalPlaces: 0, unitSeparator: " " }))),
              e.isAttachmentEnabled ? (0, o.tZ)(N, { parentType: h.ItemType.SecureNote, parentId: e.noteId, ...e }) : null
            )
          );
          var s;
        };
      var k = n(509144);
      const D = n(816583),
        L = {
          padding: "16px 16px 16px 0px",
          borderBottom: `1px solid ${i.colors.grey06}`,
          color: "ds.text.neutral.quiet",
          alignSelf: "center",
          fontSize: "12px",
          textTransform: "uppercase"
        },
        F = ({ currentValues: e, additionalProps: t }) => {
          const { translate: n } = (0, l.Z)(),
            s = (0, _.aV)(),
            [r, c] = (0, a.useState)(!1),
            d = (0, k.I)(),
            u = d.max > 0 && d.remaining < 78643200 && s,
            p = e.attachments;
          return (
            (0, a.useEffect)(() => {
              c(t.isUploading);
            }, [t.isUploading]),
            (0, o.tZ)(
              i.Ejs,
              { flexDirection: "column", sx: { padding: "12px 0px", flex: 1, overflow: "hidden" } },
              (0, o.tZ)(
                i.Ejs,
                { flexDirection: "column", alignItems: "center", fullWidth: !0, sx: { flex: 1, overflowY: "auto", flexWrap: "nowrap" } },
                p.length > 0
                  ? (0, o.tZ)(
                      i.Ejs,
                      { fullWidth: !0, alignItems: "center" },
                      (0, o.tZ)(
                        i.nvN,
                        { sx: { ...L, width: "45%" } },
                        n("webapp_secure_notes_addition_field_tab_attachments_table_title_name")
                      ),
                      (0, o.tZ)(
                        i.nvN,
                        { sx: { ...L, width: "25%" } },
                        n("webapp_secure_notes_addition_field_tab_attachments_table_title_creation_date")
                      ),
                      (0, o.tZ)(
                        i.nvN,
                        { sx: { ...L, width: "30%" } },
                        n("webapp_secure_notes_addition_field_tab_attachments_table_title_file_size")
                      )
                    )
                  : (0, o.tZ)(
                      i.Ejs,
                      { justifyContent: "center", flexDirection: "column", alignItems: "center", sx: { flex: 1 } },
                      (0, o.tZ)(i.Ujz, { size: 70, color: i.colors.dashGreen04, sx: { marginBottom: "24px" } }),
                      (0, o.tZ)(
                        i.nvN,
                        { sx: { textAlign: "center", color: "ds.text.neutral.catchy" } },
                        n.markup("webapp_secure_file_empty_attachments_markup")
                      )
                    ),
                p
                  ? p.map((e) =>
                      (0, o.tZ)(A, {
                        key: e.id,
                        attachment: e,
                        handleFileInfoDetached: t?.handleFileInfoDetached,
                        isAttachmentEnabled: s,
                        disableActions: r,
                        setDisableActions: c,
                        onModalDisplayStateChange: t.onModalDisplayStateChange,
                        noteId: t?.noteId
                      })
                    )
                  : null
              ),
              u
                ? (0, o.tZ)(i.vDh, {
                    severity: "warning",
                    title: n(
                      "webapp_secure_file_storage_quota_info",
                      ((f = d.remaining),
                      (h = d.max),
                      {
                        usedQuota: D(f, { decimalPlaces: 0, unitSeparator: " " }),
                        maxQuota: D(h, { decimalPlaces: 0, unitSeparator: " " })
                      })
                    ),
                    sx: { flex: 0, marginTop: "16px" }
                  })
                : null
            )
          );
          var f, h;
        };
      var U = n(234931),
        P = n(642844),
        B = n(526849),
        G = n(142897),
        W = n(605961),
        z = n.n(W),
        K = n(361607),
        M = n(133354);
      const j = "textarea--Ix1kh7fRYF",
        H = "markdown--ARo1hBXSLa";
      let Y = (function (e) {
        return (
          (e.BOLD = "bold"),
          (e.CODE = "code"),
          (e.ITALIC = "italic"),
          (e.LINK = "link"),
          (e.SUBSUBTITLE = "subsubtitle"),
          (e.SUBTITLE = "subtitle"),
          (e.TITLE = "title"),
          e
        );
      })({});
      const q = (e) => (t, n) => {
          var a;
          const { formatPrefix: o, cursorOffsetStart: i, cursorOffsetEnd: s } = e,
            r = null != (a = e.formatSuffix) ? a : "",
            { start: l, end: c } = n,
            d = t.slice(l, c),
            u = ((e, t, n) => {
              const a = !n || e.endsWith(n);
              return e.startsWith(t) && a;
            })(d, o, r),
            p = ((e, t, n, a) =>
              e.start === e.end ? ((e.start = e.start + n), (e.end = e.end + n), e) : ((e.end = t ? e.end - n - a : e.end + n + a), e))(
              n,
              u,
              i,
              s
            );
          return u
            ? { updatedContent: [t.slice(0, l), t.slice(l + o.length, c - r.length), t.slice(c)].join(""), updatedSelectionRange: p }
            : { updatedContent: [t.slice(0, l), o, d, r, t.slice(c)].join(""), updatedSelectionRange: p };
        },
        V = {
          [Y.TITLE]: {
            icon: (0, G.tZ)(G.JO, { name: "FormattingHeading1Outlined" }),
            label: "Heading",
            format: q({ formatPrefix: "# ", cursorOffsetStart: 2, cursorOffsetEnd: 0 })
          },
          [Y.SUBTITLE]: {
            icon: (0, G.tZ)(G.JO, { name: "FormattingHeading2Outlined" }),
            label: "Subheading",
            format: q({ formatPrefix: "## ", cursorOffsetStart: 3, cursorOffsetEnd: 0 })
          },
          [Y.SUBSUBTITLE]: {
            icon: (0, G.tZ)(G.JO, { name: "FormattingHeading3Outlined" }),
            label: "Subsubheading",
            format: q({ formatPrefix: "### ", cursorOffsetStart: 4, cursorOffsetEnd: 0 })
          },
          [Y.BOLD]: {
            icon: (0, G.tZ)(G.JO, { name: "FormattingBoldOutlined" }),
            label: "Bold",
            format: q({ formatPrefix: "**", formatSuffix: "**", cursorOffsetStart: 2, cursorOffsetEnd: 2 })
          },
          [Y.ITALIC]: {
            icon: (0, G.tZ)(G.JO, { name: "FormattingItalicOutlined" }),
            label: "Italic",
            format: q({ formatPrefix: "_", formatSuffix: "_", cursorOffsetStart: 1, cursorOffsetEnd: 1 })
          },
          [Y.CODE]: {
            icon: (0, G.tZ)(G.JO, { name: "FormattingCodeOutlined" }),
            label: "Code",
            format: q({ formatPrefix: "`", formatSuffix: "`", cursorOffsetStart: 1, cursorOffsetEnd: 1 })
          },
          [Y.LINK]: {
            icon: (0, G.tZ)(G.JO, { name: "LinkOutlined" }),
            label: "Link",
            format: (e, t) => {
              const { start: n, end: a } = t,
                o = e.slice(n, a),
                i = ((e, t, n) => (
                  e.start === e.end ? ((e.start = e.start + 1), (e.end = e.end + 1)) : ((e.start = e.end + 3), (e.end = e.end + 6)), e
                ))(t);
              return { updatedContent: [e.slice(0, n), "[", o, "](url)", e.slice(a)].join(""), updatedSelectionRange: i };
            }
          }
        },
        X = ({ fieldRef: e, content: t, isPreviewing: n, setContent: o, setIsPreviewing: s }) => {
          const r = (n) => () => {
            var a, i;
            const s = V[n].format,
              { updatedContent: r, updatedSelectionRange: l } = s(t, {
                start: null != (a = e.current?.selectionStart) ? a : 0,
                end: null != (i = e.current?.selectionEnd) ? i : 0
              });
            o(r),
              setTimeout(() => {
                e.current && (e.current.focus(), (e.current.selectionStart = l.start), (e.current.selectionEnd = l.end));
              }, 200);
          };
          return (0, G.tZ)(
            a.Fragment,
            null,
            (0, G.tZ)(
              i.Ejs,
              { gap: "6px" },
              Object.keys(V).map((e) =>
                (0, G.tZ)(G.zx, {
                  key: e,
                  mood: "neutral",
                  intensity: "supershy",
                  layout: "iconOnly",
                  icon: V[e].icon,
                  onClick: r(e),
                  disabled: n,
                  "aria-label": V[e].label,
                  title: V[e].label,
                  name: V[e].label
                })
              ),
              t
                ? (0, G.tZ)(
                    i.k$b,
                    { sx: { marginLeft: "auto" } },
                    (0, G.tZ)(
                      G.zx,
                      {
                        "aria-label": "Preview",
                        onClick: () => s(!n),
                        layout: "iconTrailing",
                        intensity: "quiet",
                        mood: "neutral",
                        icon: n ? "ActionHideFilled" : "ActionRevealFilled"
                      },
                      "Preview"
                    )
                  )
                : null
            ),
            (0, G.tZ)("hr", { sx: { width: "100%" } })
          );
        };
      var $ = n(128050);
      const J = s.w.SupportMarkdownInSecureNotes,
        Q = ({
          fieldRef: e,
          value: t,
          name: n,
          placeholder: o,
          disabled: i,
          readonly: s,
          isEditing: r,
          setContent: l,
          setIsEditing: c,
          onChange: d
        }) => {
          const [u, p] = (0, a.useState)(!1),
            _ = (0, K._)(),
            f = () => _.status === M.rq.Success && !!_.data[J];
          return (0, G.tZ)(
            "div",
            {
              className: "content--AFh9bUjHyR",
              onClick: f()
                ? () => {
                    c(!0);
                  }
                : void 0
            },
            f()
              ? !r && t
                ? (0, G.tZ)("div", { className: H }, (0, G.tZ)(z(), { source: (0, $.z)(t), softBreak: "br" }))
                : (0, G.tZ)(
                    "div",
                    {
                      sx: { display: "flex", flexDirection: "column", flexGrow: 1 },
                      onClick: () => {
                        u && p(!1);
                      }
                    },
                    (0, G.tZ)(X, { content: t, setContent: l, fieldRef: e, isPreviewing: u, setIsPreviewing: (e) => p(e) }),
                    u
                      ? (0, G.tZ)("div", { className: H }, (0, G.tZ)(z(), { source: (0, $.z)(t), softBreak: "br" }))
                      : (0, G.tZ)("textarea", {
                          ref: e,
                          name: n,
                          className: j,
                          sx: { color: "ds.text.neutral.catchy" },
                          placeholder: o,
                          value: t || "",
                          disabled: i,
                          readOnly: s,
                          onChange: (e) => {
                            d && d(e);
                          }
                        })
                  )
              : (0, G.tZ)("textarea", {
                  ref: e,
                  name: n,
                  className: j,
                  sx: { color: "ds.text.neutral.catchy" },
                  placeholder: o,
                  value: t || "",
                  disabled: i,
                  readOnly: s,
                  onChange: (e) => {
                    d && d(e);
                  }
                })
          );
        };
      var ee = n(443455);
      const te = ({ content: e, setContent: t, isEditing: n, setIsEditing: o, limitedPermissions: s, readonly: r }) => {
        const { translate: c } = (0, l.Z)(),
          [d, u] = (0, a.useState)(!1),
          p = (0, a.useRef)(null);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(Q, {
            fieldRef: p,
            placeholder: c(r ? "webapp_secure_notes_edition_disabled_label" : "webapp_secure_notes_addition_field_placeholder_no_content"),
            value: e,
            disabled: s,
            readonly: r,
            onChange: ({ target: { value: n } }) => {
              const a = n.length > e.length,
                o = e.length >= Ne;
              if (a && o) return;
              const i = a && n.length > Ne,
                s = i ? e : n;
              u(i), t(s);
            },
            isEditing: n,
            setIsEditing: o,
            setContent: t
          }),
          d &&
            a.createElement(
              "div",
              { className: "alertContainer--aKDAFWKb1l" },
              a.createElement(ee.n, {
                id: Math.floor(1e6 * Math.random()),
                message: c("webapp_secure_notes_addition_field_copy_past_error"),
                onHide: () => {
                  u(!1);
                },
                severity: i.BLW.WARNING
              })
            )
        );
      };
      var ne = n(383849),
        ae = n.n(ne);
      const oe = ({ maxAuthorizedSize: e, currentSize: t }) => {
        const { translate: n } = (0, l.Z)(),
          o = 0.95 * e,
          i = 0.995 * e,
          s = e - t,
          r =
            t > e
              ? n("webapp_secure_notes_edition_field_text_over_limit", { overLimit: -s })
              : n("webapp_secure_notes_edition_field_text_max_size_reached", { charLeft: s });
        return t >= o
          ? a.createElement(
              "div",
              { className: ae()("greyWarningCharLeft--kX7GKkrKTa", t >= i ? "redWarningCharLeft--XWRHnpjz2e" : {}) },
              r
            )
          : null;
      };
      function ie(e, t) {
        return { label: t, value: ("credential" === e ? "" : "noCategory") || "" };
      }
      function se(e, t, n, a) {
        const o = t.find((e) => e.label === n);
        return null != o ? o : ie(e, a);
      }
      const re = ["BLUE", "GRAY", "PURPLE", "PINK", "RED", "BROWN", "GREEN", "ORANGE", "YELLOW"];
      function le(e, t, n) {
        return t.filter((t) => e[t]).map((t) => ({ icon: n, label: `${e[t]}`, value: t }));
      }
      function ce(e, t) {
        const n = le(e, [t], null);
        return n.length ? n[0] : {};
      }
      var de = n(53915);
      var ue = n(839434),
        pe = n(59896),
        _e = n(826771),
        fe = n(889483),
        he = n(749446),
        me = n(364776);
      const be = {
          NO_CATEGORY: "webapp_secure_notes_addition_no_category",
          CATEGORY_LABEL: "webapp_secure_notes_addition_field_tab_option_category_label",
          COLOR_LABEL: "webapp_secure_notes_addition_field_tab_option_color_label",
          SECURITY_LABEL: "webapp_secure_notes_addition_field_tab_option_security_label",
          SECURITY_TITLE: "webapp_secure_notes_addition_field_tab_option_security_title",
          SECURITY_DESCRIPTION: "webapp_secure_notes_addition_field_tab_option_security_description",
          COLORS: {
            BLUE: "webapp_secure_notes_addition_field_type_option_blue",
            BROWN: "webapp_secure_notes_addition_field_type_option_brown",
            GRAY: "webapp_secure_notes_addition_field_type_option_gray",
            GREEN: "webapp_secure_notes_addition_field_type_option_green",
            ORANGE: "webapp_secure_notes_addition_field_type_option_orange",
            PINK: "webapp_secure_notes_addition_field_type_option_pink",
            PURPLE: "webapp_secure_notes_addition_field_type_option_purple",
            RED: "webapp_secure_notes_addition_field_type_option_red",
            YELLOW: "webapp_secure_notes_addition_field_type_option_yellow"
          }
        },
        ge = {
          NO_CATEGORY: "webapp_secure_notes_edition_no_category",
          CATEGORY_LABEL: "webapp_secure_notes_edition_field_tab_option_category_label",
          COLOR_LABEL: "webapp_secure_notes_edition_field_tab_option_color_label",
          SECURITY_LABEL: "webapp_secure_notes_edition_field_tab_option_security_label",
          SECURITY_TITLE: "webapp_secure_notes_edition_field_tab_option_security_title",
          SECURITY_DESCRIPTION: "webapp_secure_notes_edition_field_tab_option_security_description",
          COLORS: {
            BLUE: "webapp_secure_notes_edition_field_type_option_blue",
            BROWN: "webapp_secure_notes_edition_field_type_option_brown",
            GRAY: "webapp_secure_notes_edition_field_type_option_gray",
            GREEN: "webapp_secure_notes_edition_field_type_option_green",
            ORANGE: "webapp_secure_notes_edition_field_type_option_orange",
            PINK: "webapp_secure_notes_edition_field_type_option_pink",
            PURPLE: "webapp_secure_notes_edition_field_type_option_purple",
            RED: "webapp_secure_notes_edition_field_type_option_red",
            YELLOW: "webapp_secure_notes_edition_field_type_option_yellow"
          },
          CHANGE_SECURED_SETTING_ON: "webapp_secure_notes_edition_unlocker_on_success",
          CHANGE_SECURED_SETTING_OFF: "webapp_secure_notes_edition_unlocker_off_success"
        },
        Ee = { title: "webapp_secure_notes_edition_unlocker_title_on", subtitle: "webapp_secure_notes_edition_unlocker_description_on" },
        Se = { title: "webapp_secure_notes_edition_unlocker_title_off", subtitle: "webapp_secure_notes_edition_unlocker_description_off" },
        we = ({ noteCategories: e, disabled: t, data: n, isNewItem: o, saveSecureNoteOptions: s }) => {
          var r, c, d, p;
          const { translate: _ } = (0, l.Z)(),
            f = (0, u.V)(),
            { areProtectedItemsUnlocked: h, openProtectedItemsUnlocker: m } = (0, fe.tY)(),
            b = (0, he.F)(),
            { status: g, isMPLessUser: E } = (0, me.Z)(),
            S = b || g === M.rq.Success ? !E : null,
            w = o ? be : ge,
            y = _(w.NO_CATEGORY),
            [C, v] = (0, a.useState)(null != (r = n?.category) ? r : y),
            [x, N] = (0, a.useState)(null != (c = n?.type) ? c : "BLUE"),
            [T, O] = (0, a.useState)(null != (d = n?.spaceId) ? d : ""),
            [I, R] = (0, a.useState)(null != (p = n?.secured) && p),
            Z = ((e) => e.map((e) => ({ name: e.categoryName, id: e.id })))(e),
            A = (function (e, t, n) {
              const a = t.map((e) => ({ label: e.name, value: e.id }));
              return [ie("note", n)].concat(a);
            })(0, Z, y),
            k = e.find((e) => e.id === C),
            D = k ? k.categoryName : y,
            L = re.reduce((e, t) => ((e[t] = _(w.COLORS[t])), e), {}),
            F = le(L, re, ((U = x), a.createElement("span", { className: "icon--eBGJiUqyZ5", style: { backgroundColor: (0, de.Z)(U) } })));
          var U;
          const P = (e) => {
            R(e),
              s({ category: C, type: x, spaceId: T, secured: e }),
              f.showAlert(_(e ? ge.CHANGE_SECURED_SETTING_ON : ge.CHANGE_SECURED_SETTING_OFF), i.BLW.SUCCESS);
          };
          return (0, G.tZ)(
            i.Ejs,
            { flexDirection: "column" },
            e && e.length > 1
              ? (0, G.tZ)(pe.Z, {
                  key: D,
                  disabled: t,
                  label: _(w.CATEGORY_LABEL),
                  placeholder: "",
                  dataName: "category",
                  options: A,
                  defaultOption: se("note", A, D, y),
                  onChange: (e) => {
                    v(e.currentTarget.value), s({ category: e.currentTarget.value, type: x, spaceId: T, secured: I });
                  }
                })
              : null,
            (0, G.tZ)(ue.M, {
              labelSx: ue.e,
              spaceId: null != T ? T : "",
              onChange: (e) => {
                O(e), s({ category: C, type: x, secured: I, spaceId: e });
              }
            }),
            (0, G.tZ)(pe.Z, {
              key: x,
              disabled: t,
              label: _(w.COLOR_LABEL),
              placeholder: "",
              dataName: "type",
              options: F,
              defaultOption: ce(L, x),
              onChange: (e) => {
                N(e.currentTarget.value), s({ category: C, type: e.currentTarget.value, spaceId: T, secured: I });
              }
            }),
            S
              ? (0, G.tZ)(
                  i.Ejs,
                  { sx: { mt: "12px" }, flexDirection: "row", flexWrap: "nowrap" },
                  (0, G.tZ)(
                    i.k$b,
                    {
                      sx: {
                        fontWeight: "600",
                        width: "173px",
                        textAlign: "right",
                        fontSize: "16px",
                        justifyContent: "flex-end",
                        pr: "24px"
                      },
                      as: G.nv,
                      innerAs: "label",
                      htmlFor: "securityToggle",
                      size: "medium"
                    },
                    _(w.SECURITY_LABEL)
                  ),
                  (0, G.tZ)(
                    i.Ejs,
                    { flexDirection: "row", gap: "8px", flexWrap: "nowrap" },
                    (0, G.tZ)(
                      i.Ejs,
                      { as: i.dDn, flexDirection: "column" },
                      (0, G.tZ)(G.nv, null, _(w.SECURITY_TITLE)),
                      (0, G.tZ)(G.nv, { color: "ds.text.neutral.quiet" }, _(w.SECURITY_DESCRIPTION))
                    ),
                    (0, G.tZ)(G.ZD, {
                      id: "securityToggle",
                      disabled: t,
                      checked: I,
                      onChange: () => {
                        const e = !I;
                        h || o
                          ? P(e)
                          : ((0, fe.jF)(),
                            m({
                              itemType: _e.R.SecureNoteSetting,
                              options: { fieldsKeys: e ? Ee : Se, translated: !1 },
                              successCallback: () => P(e)
                            }));
                      }
                    })
                  )
                )
              : null
          );
        },
        { CONTENT: ye, DOCUMENT_STORAGE: Ce, MORE_OPTIONS: ve, SHARED_ACCESS: xe } = U.SecureNoteTabs,
        Ne = 1e4,
        Te = ({
          activeTab: e,
          data: t,
          content: n,
          setContent: c,
          handleFileInfoDetached: d,
          hasAttachment: u,
          isAdmin: p,
          isSecureNoteAttachmentEnabled: _,
          isShared: f,
          isUploading: h,
          isEditing: m,
          setIsEditing: b,
          lee: g,
          noteCategories: E,
          onModifyData: S,
          onModalDisplayStateChange: w,
          saveSecureNoteOptions: y
        }) => {
          var C;
          const { translate: v } = (0, l.Z)(),
            x = (0, r.w)(s.w.DisableSecureNotes);
          return (0, o.tZ)(
            a.Fragment,
            null,
            e === ye &&
              (0, o.tZ)(
                a.Fragment,
                null,
                (0, o.tZ)(
                  "div",
                  { className: "formContent--TCNgoQopo1" },
                  (0, o.tZ)(te, {
                    content: n,
                    setContent: (e) => {
                      S(), c(e);
                    },
                    isEditing: m,
                    setIsEditing: b,
                    limitedPermissions: f && !p,
                    readonly: x
                  })
                ),
                (0, o.tZ)(oe, { maxAuthorizedSize: Ne, currentSize: n.length }),
                _ &&
                  (f || u) &&
                  (0, o.tZ)(i.vDh, {
                    severity: "subtle",
                    size: "small",
                    title: v(f ? "webapp_secure_notes_infobox_shared" : "webapp_secure_notes_infobox_has_attachments"),
                    sx: { margin: "0px 32px 0px 8px" }
                  })
              ),
            e === xe && (0, o.tZ)(P.u, { isAdmin: p, id: t.id }),
            e === Ce &&
              (0, o.tZ)(F, {
                currentValues: (0, B.pick)(["attachments"], t),
                lee: g,
                signalEditedValues: S,
                additionalProps: {
                  handleFileInfoDetached: (e) => {
                    d(e);
                  },
                  onModalDisplayStateChange: w,
                  noteId: t.id,
                  isUploading: h
                }
              }),
            e === ve &&
              (0, o.tZ)(we, {
                data: { category: t.category, spaceId: null != (C = t.spaceId) ? C : "", type: t.type, secured: t.secured },
                noteCategories: E,
                isNewItem: !1,
                saveSecureNoteOptions: (e) => {
                  y(e);
                }
              })
          );
        };
    },
    255990: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      const a = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    },
    102730: (e, t, n) => {
      var a = n(696832);
      function o(e) {
        return a.createElement(
          "svg",
          e,
          a.createElement("g", { fill: "none", fillRule: "evenodd" }, [
            a.createElement("path", { className: "tooltip-modern-icon-stroke", d: "M.5 8.5a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm8-1v5", key: 0 }),
            a.createElement("path", { className: "tooltip-modern-icon-fill", d: "M9.5 4.5a1 1 0 1 0-2 0 1 1 0 1 0 2 0", key: 1 })
          ])
        );
      }
      (o.defaultProps = { width: "17", height: "17" }), (e.exports = o), (o.default = o);
    },
    15567: (e, t, n) => {
      var a = n(696832);
      function o(e) {
        return a.createElement(
          "svg",
          e,
          a.createElement("path", {
            d: "M6.547 7.25c0-1 1-2 2.5-2s2.5.75 2.5 2c0 1-.5 1.5-1.5 2.25s-1 1.25-1 1.75m-8.5-1.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Zm9 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
            className: "tooltip-modern-icon-stroke"
          })
        );
      }
      (o.defaultProps = { width: "17", height: "17", viewBox: "0 0 19 19", fill: "none" }), (e.exports = o), (o.default = o);
    }
  }
]);
