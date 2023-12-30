(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8405],
  {
    504085: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => _ });
      var a = n(696832),
        o = n(876307),
        i = n(526849),
        s = n(383849),
        r = n.n(s),
        l = n(957459);
      var c = n(855541);
      function d(e, t) {
        const n = e.find((e) => String(e.value) === String(t));
        return null != n ? n : null;
      }
      class _ extends a.Component {
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
    773157: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => w });
      var a = n(696832),
        o = n(876307),
        i = n(962899),
        s = n(593039),
        r = n(488203),
        l = (n(416702), n(842403), n(798849), n(978895), n(445595), n(325676), n(221119)),
        c = n(740300),
        d = n(45272),
        _ = n(86498),
        p = n(589923),
        u = n(923206),
        f = n(317086);
      const h = 15 * Math.pow(1024, 2),
        m = { PROGRESS_CIPHERING: "webapp_secure_file_upload_progress_ciphering_markup" };
      function E(e) {
        const [t, n] = (0, a.useState)(!1),
          o = (0, _.V)(),
          { translateWithMarkup: r } = (0, p.Y)();
        return {
          isUploading: t,
          upload: (t, a) => {
            if (t)
              if (t.size > h) a?.({ success: !1, error: { code: l.tA.MAX_CONTENT_LENGTH_EXCEEDED } });
              else {
                const _ = (0, u.K)(t.name);
                o.showAlert((0, f.b)(r({ key: m.PROGRESS_CIPHERING, params: { fileName: _ } })), i.BLW.SUBTLE, !1), n(!0);
                const p = new FileReader(),
                  E = (e) => {
                    a?.(e), n(!1);
                  };
                (p.onloadend = async () =>
                  (async function (e, t, n, a) {
                    if (2 === e.readyState) {
                      const o = e.result,
                        i = new Uint8Array(o),
                        r = JSON.stringify(Array.from(i));
                      if (t.size > h) a?.({ success: !1, error: { code: l.tA.MAX_CONTENT_LENGTH_EXCEEDED } });
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
                  })(p, t, e, E)),
                  p.readAsArrayBuffer(t);
              }
          }
        };
      }
      var b = n(671785),
        g = n(553966);
      const w = ({
        onFileUploadStarted: e,
        onFileUploadDone: t,
        isQuotaReached: n,
        isShared: l,
        itemId: _,
        dataType: p,
        disabled: u = !1
      }) => {
        var f;
        const h = (0, b.ml)("KWIDCard" === p) && !l,
          m =
            null != (f = g.dataModelTypeToItemType[p])
              ? f
              : (function (e) {
                  throw new Error(e);
                })(`Unsupported Type ${p}`),
          { translate: w } = (0, r.Z)(),
          { upload: y, isUploading: S } = E(m),
          [C, v] = (0, a.useState)(""),
          { showErrorAlert: N } = (0, b.Pw)(C),
          T = (0, b.yK)(),
          O = (e) => {
            t?.(e), e.success || N(e.error?.code);
          },
          I = async (t) => {
            const n = await (async (e) => await c.C.validateSecureFile({ fileName: e.name, fileType: e.type, contentLength: e.size }))(t);
            n.success ? (e(), v(t.name), y(t, O)) : N(n?.error?.code);
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
                  e?.target?.files?.length && I(e.target.files[0]), (e.target.value = "");
                },
                accept: T?.join(",")
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
                    _ && (0, d.Kz)(new s.UserUpdateVaultItemAttachmentEvent({ attachmentAction: s.Action.Add, itemId: _, itemType: m })),
                      document.getElementById("secureFileInput")?.click(),
                      e.preventDefault();
                  },
                  disabled: n || S || u
                },
                w("webapp_secure_notes_add_attachment_action_name")
              )
            )
          : null;
      };
    },
    317086: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => i });
      var a = n(773817),
        o = n(962899);
      const i = (e) =>
        (0, a.tZ)(o.Ejs, { justifyContent: "center" }, (0, a.tZ)(o.HoD, { sx: { mr: "8px" }, color: o.colors.dashGreen00, size: 18 }), e);
    },
    899193: (e, t, n) => {
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
    923206: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => a });
      const a = (e) => (e.length <= 32 ? e : e.substring(0, 32));
    },
    671785: (e, t, n) => {
      "use strict";
      n.d(t, { ml: () => b, aV: () => m, yK: () => O, vN: () => r, gF: () => u, Ce: () => c, Pw: () => T });
      var a = n(221119),
        o = n(740300),
        i = n(45272),
        s = n(593039);
      function r(e, t, n, r) {
        return {
          deleteFile: () => {
            o.C.deleteSecureFile({ id: e }).then((o) => {
              var l;
              o.success || (!o.success && o.error?.code === a.tA.FILE_NOT_FOUND)
                ? (r?.(e),
                  (0, i.Kz)(new s.UserUpdateVaultItemAttachmentEvent({ attachmentAction: s.Action.Delete, itemId: e, itemType: n })))
                : t(null != (l = o.error?.code) ? l : a.tA.INTERNAL_ERROR);
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
      n(416702), n(842403), n(798849), n(978895), n(445595), n(325676);
      var d = n(696832),
        _ = n(354760);
      const p = (e, t) => {
        try {
          const t = JSON.parse(e);
          return new Uint8Array(t).buffer;
        } catch (e) {
          return t(a.tA.INTERNAL_ERROR), null;
        }
      };
      function u({ id: e, filename: t, downloadKey: n, cryptoKey: r, type: l }, u, f) {
        const h = c(n),
          m = (0, d.useRef)("");
        return (
          (0, d.useEffect)(() => {
            h?.status === a.wL.ChunkReady && ((m.current = m.current.concat(h.chunk)), o.C.chunkTransferDone(n));
          }, [h, n]),
          (0, d.useEffect)(() => {
            if (h?.status === a.wL.TransferComplete) {
              const a = p(m.current, u);
              a &&
                ((0, _.S)(a, t, l),
                (m.current = ""),
                o.C.clearSecureFileState(n),
                (0, i.Kz)(new s.UserDownloadVaultItemAttachmentEvent({ itemId: e, itemType: f })));
            }
          }, [h, u, t, l, n, e, f]),
          {
            download: () => {
              o.C.downloadSecureFile({ downloadKey: n, cryptoKey: r });
            }
          }
        );
      }
      n(341571);
      var f = n(65255),
        h = n(377377);
      function m() {
        return (0, h.w)(f.w.SaexSecureNoteAttachmentsForrelease);
      }
      var E = n(615394);
      function b(e) {
        const t = (0, h.w)(f.w.TechweekWebAttachmentsForIdsV1),
          n = m(),
          a = (0, E.rp)(["secureFiles"]),
          o = n && a;
        return e ? o && t : o;
      }
      var g = n(962899),
        w = n(86498),
        y = n(589923),
        S = n(317086),
        C = n(923206);
      const v = {
          PROGRESS_UPLOADING: "webapp_secure_file_upload_progress_loading_markup",
          PROGRESS_CIPHERING: "webapp_secure_file_upload_progress_ciphering_markup",
          UPLOAD_SUCCESS: "webapp_secure_file_upload_success_markup",
          UNKNOWN_ERROR: "webapp_secure_file_error_unknown",
          MAX_CONTENT_LENGTH_EXCEEDED: "webapp_secure_file_error_upload_max_length_excedeed",
          QUOTA_EXCEDEED: "webapp_secure_file_error_upload_quota_excedeed",
          INVALID_FILE_TYPE: "webapp_secure_file_error_file_type_not_allowed"
        },
        N = (e) => {
          var t;
          return e && null != (t = v[e]) ? t : v.UNKNOWN_ERROR;
        },
        T = (e) => {
          const t = (0, w.V)(),
            { translateWithMarkup: n } = (0, y.Y)(),
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
              const r = (e) => t.showAlert((0, S.b)(n(e)), g.BLW.SUBTLE, !1);
              switch (i?.status) {
                case a.XX.Uploading:
                  r({
                    key: v.PROGRESS_UPLOADING,
                    params: {
                      fileName: s,
                      progress: Math.round(null != (e = (null != (o = 100 * i?.bytesSent) ? o : 0) / i?.contentLength) ? e : 1)
                    }
                  });
                  break;
                case a.XX.Ciphering:
                  r({ key: v.PROGRESS_CIPHERING, params: { fileName: s } });
                  break;
                case a.XX.Done:
                  t.showAlert(n({ key: v.UPLOAD_SUCCESS, params: { fileName: s } }), g.BLW.SUCCESS);
              }
            }, [t, e, i, n]),
            {
              showErrorAlert: (e) => {
                t.showAlert(n({ key: N(null != e ? e : "") }), g.BLW.ERROR);
              }
            }
          );
        };
      function O() {
        const e = (0, l.qr)({ queryConfig: { query: o.C.getSecureDocumentsExtensionsList } }, []);
        return e.status === l.rq.Success ? e.data : void 0;
      }
    },
    341571: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => i });
      var a = n(148038),
        o = n(740300);
      function i() {
        const e = (0, a.qr)({ queryConfig: { query: o.C.getSecureFilesQuota }, liveConfig: { live: o.C.liveSecureFilesQuota } }, []);
        return e.status === a.rq.Success ? e.data : { max: 0, remaining: 0 };
      }
    },
    420684: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => o });
      var a = n(740300);
      const o = async (e) => await a.C.clearSecureFileState(null != e ? e : "");
    },
    86541: (e, t, n) => {
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
    326239: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => R });
      var a = n(876307),
        o = n(962899),
        i = n(696832),
        s = n(383849),
        r = n.n(s),
        l = n(365580);
      var c,
        d,
        _ = n(15567),
        p = n.n(_),
        u = n(102730),
        f = n.n(u);
      const h = 312,
        m = "info";
      class E extends i.Component {
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
      var b = n(86541),
        g = n(351575),
        w = n(488203),
        y = n(671785),
        S = n(376452),
        C = n(573630);
      const v = ({ title: e, disabled: t = !1, onChange: n }) => {
        const { translate: o } = (0, w.Z)(),
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
      var N;
      const { CONTENT: T, DOCUMENT_STORAGE: O, MORE_OPTIONS: I, SHARED_ACCESS: x } = b.SecureNoteTabs,
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
          const { translate: _ } = (0, w.Z)(),
            p = (0, y.aV)(),
            u = [{ active: e === T, label: _("webapp_secure_notes_edition_field_tab_title_details"), onClick: () => t(T) }];
          if (
            (r &&
              u.push({
                active: e === x,
                label: `${_("webapp_secure_notes_edition_field_tab_title_shared_access")} (${l})`,
                onClick: () => t(x)
              }),
            s)
          ) {
            const n = p
              ? void 0
              : (0, a.tZ)(E, null, (0, a.tZ)("p", null, _("webapp_secure_notes_edition_field_tab_title_attachments_tooltips")));
            u.push({
              active: e === O,
              label: _("webapp_secure_notes_edition_field_tab_title_attachments"),
              onClick: () => t(O),
              tabIconElement: n
            });
          }
          return (
            u.push({ active: e === I, label: _("webapp_secure_notes_edition_field_tab_title_options"), onClick: () => t(I) }),
            (0, a.tZ)(S.V9, {
              icon: (0, a.tZ)("div", { className: "iconWrapper--d4t5P9vl4W" }, N || (N = (0, a.tZ)(o.uHY, { size: 40, color: "white" }))),
              iconBackgroundColor: (0, g.Z)(n),
              title: (0, a.tZ)(v, { title: c, disabled: i, onChange: (e) => d(e.target.value) }),
              tabs: u
            })
          );
        };
    },
    728644: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => Oe, T: () => Ie });
      var a = n(696832),
        o = n(526849),
        i = n(773817),
        s = n(962899),
        r = n(65255),
        l = n(377377),
        c = n(488203),
        d = n(66485),
        _ = n(555449),
        p = n(86541),
        u = n(876307),
        f = n(605961),
        h = n.n(f),
        m = n(361607),
        E = n(133354);
      const b = "textarea--Ix1kh7fRYF",
        g = "markdown--ARo1hBXSLa";
      let w = (function (e) {
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
      const y = (e) => (t, n) => {
          var a;
          const { formatPrefix: o, cursorOffsetStart: i, cursorOffsetEnd: s } = e,
            r = null != (a = e.formatSuffix) ? a : "",
            { start: l, end: c } = n,
            d = t.slice(l, c),
            _ = ((e, t, n) => {
              const a = !n || e.endsWith(n);
              return e.startsWith(t) && a;
            })(d, o, r),
            p = ((e, t, n, a) =>
              e.start === e.end ? ((e.start = e.start + n), (e.end = e.end + n), e) : ((e.end = t ? e.end - n - a : e.end + n + a), e))(
              n,
              _,
              i,
              s
            );
          return _
            ? { updatedContent: [t.slice(0, l), t.slice(l + o.length, c - r.length), t.slice(c)].join(""), updatedSelectionRange: p }
            : { updatedContent: [t.slice(0, l), o, d, r, t.slice(c)].join(""), updatedSelectionRange: p };
        },
        S = {
          [w.TITLE]: {
            icon: (0, u.tZ)(u.JO, { name: "FormattingHeading1Outlined" }),
            label: "Heading",
            format: y({ formatPrefix: "# ", cursorOffsetStart: 2, cursorOffsetEnd: 0 })
          },
          [w.SUBTITLE]: {
            icon: (0, u.tZ)(u.JO, { name: "FormattingHeading2Outlined" }),
            label: "Subheading",
            format: y({ formatPrefix: "## ", cursorOffsetStart: 3, cursorOffsetEnd: 0 })
          },
          [w.SUBSUBTITLE]: {
            icon: (0, u.tZ)(u.JO, { name: "FormattingHeading3Outlined" }),
            label: "Subsubheading",
            format: y({ formatPrefix: "### ", cursorOffsetStart: 4, cursorOffsetEnd: 0 })
          },
          [w.BOLD]: {
            icon: (0, u.tZ)(u.JO, { name: "FormattingBoldOutlined" }),
            label: "Bold",
            format: y({ formatPrefix: "**", formatSuffix: "**", cursorOffsetStart: 2, cursorOffsetEnd: 2 })
          },
          [w.ITALIC]: {
            icon: (0, u.tZ)(u.JO, { name: "FormattingItalicOutlined" }),
            label: "Italic",
            format: y({ formatPrefix: "_", formatSuffix: "_", cursorOffsetStart: 1, cursorOffsetEnd: 1 })
          },
          [w.CODE]: {
            icon: (0, u.tZ)(u.JO, { name: "FormattingCodeOutlined" }),
            label: "Code",
            format: y({ formatPrefix: "`", formatSuffix: "`", cursorOffsetStart: 1, cursorOffsetEnd: 1 })
          },
          [w.LINK]: {
            icon: (0, u.tZ)(u.JO, { name: "LinkOutlined" }),
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
        C = ({ fieldRef: e, content: t, isPreviewing: n, setContent: o, setIsPreviewing: i }) => {
          const r = (n) => () => {
            var a, i;
            const s = S[n].format,
              { updatedContent: r, updatedSelectionRange: l } = s(t, {
                start: null != (a = e.current?.selectionStart) ? a : 0,
                end: null != (i = e.current?.selectionEnd) ? i : 0
              });
            o(r),
              setTimeout(() => {
                e.current && (e.current.focus(), (e.current.selectionStart = l.start), (e.current.selectionEnd = l.end));
              }, 200);
          };
          return (0, u.tZ)(
            a.Fragment,
            null,
            (0, u.tZ)(
              s.Ejs,
              { gap: "6px" },
              Object.keys(S).map((e) =>
                (0, u.tZ)(u.zx, {
                  key: e,
                  mood: "neutral",
                  intensity: "supershy",
                  layout: "iconOnly",
                  icon: S[e].icon,
                  onClick: r(e),
                  disabled: n,
                  "aria-label": S[e].label,
                  title: S[e].label,
                  name: S[e].label
                })
              ),
              t
                ? (0, u.tZ)(
                    s.k$b,
                    { sx: { marginLeft: "auto" } },
                    (0, u.tZ)(
                      u.zx,
                      {
                        "aria-label": "Preview",
                        onClick: () => i(!n),
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
            (0, u.tZ)("hr", { sx: { width: "100%" } })
          );
        };
      var v = n(167748);
      const N = r.w.SupportMarkdownInSecureNotes,
        T = ({
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
          const [_, p] = (0, a.useState)(!1),
            f = (0, m._)(),
            w = () => f.status === E.rq.Success && !!f.data[N];
          return (0, u.tZ)(
            "div",
            {
              className: "content--AFh9bUjHyR",
              onClick: w()
                ? () => {
                    c(!0);
                  }
                : void 0
            },
            w()
              ? !r && t
                ? (0, u.tZ)("div", { className: g }, (0, u.tZ)(h(), { source: (0, v.z)(t), softBreak: "br" }))
                : (0, u.tZ)(
                    "div",
                    {
                      sx: { display: "flex", flexDirection: "column", flexGrow: 1 },
                      onClick: () => {
                        _ && p(!1);
                      }
                    },
                    (0, u.tZ)(C, { content: t, setContent: l, fieldRef: e, isPreviewing: _, setIsPreviewing: (e) => p(e) }),
                    _
                      ? (0, u.tZ)("div", { className: g }, (0, u.tZ)(h(), { source: (0, v.z)(t), softBreak: "br" }))
                      : (0, u.tZ)("textarea", {
                          ref: e,
                          name: n,
                          className: b,
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
              : (0, u.tZ)("textarea", {
                  ref: e,
                  name: n,
                  className: b,
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
      var O = n(71846);
      const I = ({ content: e, setContent: t, isEditing: n, setIsEditing: o, limitedPermissions: i, readonly: r }) => {
        const { translate: l } = (0, c.Z)(),
          [d, _] = (0, a.useState)(!1),
          p = (0, a.useRef)(null);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(T, {
            fieldRef: p,
            placeholder: l(r ? "webapp_secure_notes_edition_disabled_label" : "webapp_secure_notes_addition_field_placeholder_no_content"),
            value: e,
            disabled: i,
            readonly: r,
            onChange: ({ target: { value: n } }) => {
              const a = n.length > e.length,
                o = e.length >= Oe;
              if (a && o) return;
              const i = a && n.length > Oe,
                s = i ? e : n;
              _(i), t(s);
            },
            isEditing: n,
            setIsEditing: o,
            setContent: t
          }),
          d &&
            a.createElement(
              "div",
              { className: "alertContainer--aKDAFWKb1l" },
              a.createElement(O.n, {
                id: Math.floor(1e6 * Math.random()),
                message: l("webapp_secure_notes_addition_field_copy_past_error"),
                onHide: () => {
                  _(!1);
                },
                severity: s.BLW.WARNING
              })
            )
        );
      };
      var x = n(210994),
        R = n(221119),
        A = n(86498),
        Z = n(589923),
        L = n(671785),
        D = n(317086);
      var k = n(593039),
        U = n(45272),
        F = n(923206),
        P = n(837527);
      const B = "webapp_secure_file_error_unknown",
        G = "webapp_secure_file_delete_button_title",
        W = "webapp_secure_file_download_button_title",
        z = {
          cursor: "pointer",
          margin: "0px 10px",
          padding: "5px",
          border: "1px solid transparent",
          "&:hover": { border: `1px solid ${s.colors.grey05}` },
          borderRadius: "4px"
        },
        K = { opacity: 0.6 },
        M = ({ attachment: e, disableActions: t, handleFileInfoDetached: n, onModalDisplayStateChange: o, parentId: r, parentType: l }) => {
          const { translate: d } = (0, c.Z)(),
            { translateWithMarkup: _ } = (0, Z.Y)(),
            p = (0, A.V)(),
            [u, f] = (0, a.useState)(!1),
            h = (0, a.useCallback)(() => p.showAlert(_(B), s.BLW.ERROR), [p, _]),
            { deleteFile: m } = (0, L.vN)(e.id, h, l, n),
            E = () => {
              f(!1), o?.(!1);
            };
          return (0, i.tZ)(
            a.Fragment,
            null,
            (0, i.tZ)(
              s.ua7,
              {
                placement: "left",
                trigger: "hover",
                content: _(
                  t ? "webapp_secure_file_delete_button_tooltip_content_disable" : "webapp_secure_file_delete_button_tooltip_content_enable"
                )
              },
              (0, i.tZ)(
                "div",
                {
                  sx: t ? (0, s.jMf)([z, K]) : z,
                  onClick: () => {
                    f(!0), o?.(!0);
                  }
                },
                (0, i.tZ)(s.XHJ, { color: s.colors.dashGreen00, "aria-hidden": "true", title: d(G), "aria-label": d(G) })
              )
            ),
            (0, i.tZ)(
              s.VqE,
              { isOpen: u && !t, onClose: E, closeIconName: "CloseIcon", modalContentClassName: P.jK },
              (0, i.tZ)(
                s.a7O,
                null,
                (0, i.tZ)(
                  s.X6q,
                  { size: "small", sx: { margin: "16px 0px", fontWeight: "bolder" } },
                  _("webapp_secure_file_delete_confirm_dialog_heading")
                ),
                (0, i.tZ)(
                  s.nvN,
                  { sx: { margin: "8px 0px" }, color: s.colors.grey00 },
                  _("webapp_secure_file_delete_confirm_dialog_paragraph")
                )
              ),
              (0, i.tZ)(s.cNS, {
                primaryButtonTitle: _("webapp_secure_file_delete_confirm_dialog_action_primary_button_title"),
                primaryButtonOnClick: () => {
                  r && (0, U.Kz)(new k.UserUpdateVaultItemAttachmentEvent({ attachmentAction: k.Action.Delete, itemId: r, itemType: l })),
                    m(),
                    p.showAlert(d("webapp_secure_file_delete_success", { fileName: (0, F.K)(e.filename) }), s.BLW.SUCCESS),
                    f(!1);
                },
                secondaryButtonTitle: _("webapp_secure_file_delete_confirm_dialog_action_secondary_button_title"),
                secondaryButtonOnClick: E,
                intent: "danger"
              })
            )
          );
        },
        H = ({ attachment: e, disableActions: t, setDisableActions: n, progress: o, parentId: r, parentType: l }) => {
          const { translate: d } = (0, c.Z)(),
            { translateWithMarkup: _ } = (0, Z.Y)(),
            p = (0, A.V)(),
            u = (0, a.useCallback)(() => p.showAlert(_(B), s.BLW.ERROR), [p, _]),
            { download: f } = (0, L.gF)(e, u, l);
          return (
            (0, a.useEffect)(() => {
              switch (o?.status) {
                case R.wL.Downloading:
                  n(!0);
                  break;
                case R.wL.TransferComplete:
                case R.wL.Error:
                  n(!1);
              }
            }, [o, n, _]),
            (0, i.tZ)(
              s.ua7,
              {
                placement: "left",
                trigger: "hover",
                content: _(
                  t
                    ? "webapp_secure_file_download_button_tooltip_content_disable"
                    : "webapp_secure_file_download_button_tooltip_content_enable"
                )
              },
              (0, i.tZ)(
                "div",
                {
                  sx: t ? (0, s.jMf)([z, K]) : z,
                  onClick: t
                    ? void 0
                    : () => {
                        r && (0, U.Kz)(new k.UserDownloadVaultItemAttachmentEvent({ itemId: r, itemType: l })), f();
                      }
                },
                (0, i.tZ)(s._8t, {
                  sx: t ? K : void 0,
                  color: s.colors.dashGreen00,
                  "aria-hidden": "true",
                  "aria-label": d(W),
                  title: d(W)
                })
              )
            )
          );
        },
        j = (e) => {
          const t = (0, L.Ce)(e.attachment.downloadKey);
          return a.createElement(
            s.Ejs,
            { alignItems: "center", justifyContent: "flex-end" },
            a.createElement(H, { progress: t, ...e }),
            a.createElement(M, { ...e })
          );
        },
        Y = n(816583),
        V = {
          color: `${s.colors.grey00}`,
          minHeight: "60px",
          borderBottom: `solid 1px ${s.colors.grey05}`,
          position: "relative",
          "&:hover": { "& > *:last-child": { opacity: 1 } }
        },
        q = {
          width: 36,
          minWidth: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          background: s.colors.dashGreen06
        },
        X = { padding: "0px 8px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontWeight: "bold" },
        $ = ({ attachment: e }) =>
          (0, i.tZ)(
            s.Ejs,
            { alignItems: "center", flexWrap: "nowrap" },
            (0, i.tZ)(
              s.Ejs,
              { sx: q, alignItems: "center", justifyContent: "center" },
              (0, i.tZ)(s.Ujz, { size: 25, color: s.colors.midGreen00 })
            ),
            (0, i.tZ)(s.nvN, { sx: X }, e.filename)
          ),
        J = (e) => {
          const { attachment: t } = e,
            { translate: n } = (0, c.Z)();
          return (
            ((e) => {
              const { showAlert: t } = (0, A.V)(),
                { translateWithMarkup: n } = (0, Z.Y)(),
                o = (0, L.Ce)(e.downloadKey);
              (0, a.useEffect)(() => {
                var a, i;
                const r = (e) => t((0, D.b)(n(e)), s.BLW.SUBTLE, !1);
                if (o?.status)
                  switch (o.status) {
                    case R.wL.Downloading:
                      r({
                        key: "webapp_secure_file_download_progress_downloading_markup",
                        params: {
                          fileName: e.filename,
                          progress: Math.round(null != (a = (null != (i = 100 * o?.bytesReceived) ? i : 0) / o?.contentLength) ? a : 1)
                        }
                      });
                      break;
                    case R.wL.Deciphering:
                      r({ key: "webapp_secure_file_download_progress_deciphering_markup", params: { fileName: e.filename } });
                      break;
                    case R.wL.TransferComplete:
                      t(n({ key: "webapp_secure_file_download_progress_success_markup", params: { fileName: e.filename } }), s.BLW.SUCCESS);
                      break;
                    case R.wL.Error:
                      t(n({ key: "webapp_secure_file_error_unknown" }), s.BLW.ERROR);
                  }
              }, [alert, e, o, n]);
            })(t),
            (0, i.tZ)(
              s.Ejs,
              { fullWidth: !0, alignItems: "center", sx: V },
              (0, i.tZ)(s.k$b, { sx: { width: "45%" } }, (0, i.tZ)($, { ...e })),
              (0, i.tZ)(s.k$b, { sx: { width: "25%" } }, n.shortDate((0, x.Z)(t.creationDatetime))),
              (0, i.tZ)(s.k$b, { sx: { width: "10%" } }, ((o = t.localSize), Y(o, { decimalPlaces: 0, unitSeparator: " " }))),
              e.isAttachmentEnabled ? (0, i.tZ)(j, { parentType: k.ItemType.SecureNote, parentId: e.noteId, ...e }) : null
            )
          );
          var o;
        };
      var Q = n(341571);
      const ee = n(816583),
        te = {
          padding: "16px 16px 16px 0px",
          borderBottom: `1px solid ${s.colors.grey06}`,
          color: "ds.text.neutral.quiet",
          alignSelf: "center",
          fontSize: "12px",
          textTransform: "uppercase"
        },
        ne = ({ currentValues: e, additionalProps: t }) => {
          const { translate: n } = (0, c.Z)(),
            o = (0, L.aV)(),
            [r, l] = (0, a.useState)(!1),
            d = (0, Q.I)(),
            _ = d.max > 0 && d.remaining < 78643200 && o,
            p = e.attachments;
          return (
            (0, a.useEffect)(() => {
              l(t.isUploading);
            }, [t.isUploading]),
            (0, i.tZ)(
              s.Ejs,
              { flexDirection: "column", sx: { padding: "12px 0px", flex: 1, overflow: "hidden" } },
              (0, i.tZ)(
                s.Ejs,
                { flexDirection: "column", alignItems: "center", fullWidth: !0, sx: { flex: 1, overflowY: "auto", flexWrap: "nowrap" } },
                p.length > 0
                  ? (0, i.tZ)(
                      s.Ejs,
                      { fullWidth: !0, alignItems: "center" },
                      (0, i.tZ)(
                        s.nvN,
                        { sx: { ...te, width: "45%" } },
                        n("webapp_secure_notes_addition_field_tab_attachments_table_title_name")
                      ),
                      (0, i.tZ)(
                        s.nvN,
                        { sx: { ...te, width: "25%" } },
                        n("webapp_secure_notes_addition_field_tab_attachments_table_title_creation_date")
                      ),
                      (0, i.tZ)(
                        s.nvN,
                        { sx: { ...te, width: "30%" } },
                        n("webapp_secure_notes_addition_field_tab_attachments_table_title_file_size")
                      )
                    )
                  : (0, i.tZ)(
                      s.Ejs,
                      { justifyContent: "center", flexDirection: "column", alignItems: "center", sx: { flex: 1 } },
                      (0, i.tZ)(s.Ujz, { size: 70, color: s.colors.dashGreen04, sx: { marginBottom: "24px" } }),
                      (0, i.tZ)(
                        s.nvN,
                        { sx: { textAlign: "center", color: "ds.text.neutral.catchy" } },
                        n.markup("webapp_secure_file_empty_attachments_markup")
                      )
                    ),
                p
                  ? p.map((e) =>
                      (0, i.tZ)(J, {
                        key: e.id,
                        attachment: e,
                        handleFileInfoDetached: t?.handleFileInfoDetached,
                        isAttachmentEnabled: o,
                        disableActions: r,
                        setDisableActions: l,
                        onModalDisplayStateChange: t.onModalDisplayStateChange,
                        noteId: t?.noteId
                      })
                    )
                  : null
              ),
              _
                ? (0, i.tZ)(s.vDh, {
                    severity: "warning",
                    title: n(
                      "webapp_secure_file_storage_quota_info",
                      ((u = d.remaining),
                      (f = d.max),
                      {
                        usedQuota: ee(u, { decimalPlaces: 0, unitSeparator: " " }),
                        maxQuota: ee(f, { decimalPlaces: 0, unitSeparator: " " })
                      })
                    ),
                    sx: { flex: 0, marginTop: "16px" }
                  })
                : null
            )
          );
          var u, f;
        };
      var ae = n(383849),
        oe = n.n(ae);
      const ie = ({ maxAuthorizedSize: e, currentSize: t }) => {
        const { translate: n } = (0, c.Z)(),
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
              { className: oe()("greyWarningCharLeft--kX7GKkrKTa", t >= i ? "redWarningCharLeft--XWRHnpjz2e" : {}) },
              r
            )
          : null;
      };
      function se(e, t) {
        return { label: t, value: ("credential" === e ? "" : "noCategory") || "" };
      }
      function re(e, t, n, a) {
        const o = t.find((e) => e.label === n);
        return null != o ? o : se(e, a);
      }
      const le = ["BLUE", "GRAY", "PURPLE", "PINK", "RED", "BROWN", "GREEN", "ORANGE", "YELLOW"];
      function ce(e, t, n) {
        return t.filter((t) => e[t]).map((t) => ({ icon: n, label: `${e[t]}`, value: t }));
      }
      function de(e, t) {
        const n = ce(e, [t], null);
        return n.length ? n[0] : {};
      }
      var _e = n(351575);
      var pe = n(167406),
        ue = n(504085),
        fe = n(868819),
        he = n(830894),
        me = n(433988),
        Ee = n(154350);
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
        we = { title: "webapp_secure_notes_edition_unlocker_title_on", subtitle: "webapp_secure_notes_edition_unlocker_description_on" },
        ye = { title: "webapp_secure_notes_edition_unlocker_title_off", subtitle: "webapp_secure_notes_edition_unlocker_description_off" },
        Se = ({ noteCategories: e, disabled: t, data: n, isNewItem: o, saveSecureNoteOptions: i }) => {
          var r, l, d, _;
          const { translate: p } = (0, c.Z)(),
            f = (0, A.V)(),
            { areProtectedItemsUnlocked: h, openProtectedItemsUnlocker: m } = (0, he.tY)(),
            b = (0, me.F)(),
            { status: g, isMPLessUser: w } = (0, Ee.Z)(),
            y = b || g === E.rq.Success ? !w : null,
            S = o ? be : ge,
            C = p(S.NO_CATEGORY),
            [v, N] = (0, a.useState)(null != (r = n?.category) ? r : C),
            [T, O] = (0, a.useState)(null != (l = n?.type) ? l : "BLUE"),
            [I, x] = (0, a.useState)(null != (d = n?.spaceId) ? d : ""),
            [R, Z] = (0, a.useState)(null != (_ = n?.secured) && _),
            L = ((e) => e.map((e) => ({ name: e.categoryName, id: e.id })))(e),
            D = (function (e, t, n) {
              const a = t.map((e) => ({ label: e.name, value: e.id }));
              return [se("note", n)].concat(a);
            })(0, L, C),
            k = e.find((e) => e.id === v),
            U = k ? k.categoryName : C,
            F = le.reduce((e, t) => ((e[t] = p(S.COLORS[t])), e), {}),
            P = ce(F, le, ((B = T), a.createElement("span", { className: "icon--eBGJiUqyZ5", style: { backgroundColor: (0, _e.Z)(B) } })));
          var B;
          const G = (e) => {
            Z(e),
              i({ category: v, type: T, spaceId: I, secured: e }),
              f.showAlert(p(e ? ge.CHANGE_SECURED_SETTING_ON : ge.CHANGE_SECURED_SETTING_OFF), s.BLW.SUCCESS);
          };
          return (0, u.tZ)(
            s.Ejs,
            { flexDirection: "column" },
            e && e.length > 1
              ? (0, u.tZ)(ue.Z, {
                  key: U,
                  disabled: t,
                  label: p(S.CATEGORY_LABEL),
                  placeholder: "",
                  dataName: "category",
                  options: D,
                  defaultOption: re("note", D, U, C),
                  onChange: (e) => {
                    N(e.currentTarget.value), i({ category: e.currentTarget.value, type: T, spaceId: I, secured: R });
                  }
                })
              : null,
            (0, u.tZ)(pe.M, {
              labelSx: pe.e,
              spaceId: null != I ? I : "",
              onChange: (e) => {
                x(e), i({ category: v, type: T, secured: R, spaceId: e });
              },
              disabled: t
            }),
            (0, u.tZ)(ue.Z, {
              key: T,
              disabled: t,
              label: p(S.COLOR_LABEL),
              placeholder: "",
              dataName: "type",
              options: P,
              defaultOption: de(F, T),
              onChange: (e) => {
                O(e.currentTarget.value), i({ category: v, type: e.currentTarget.value, spaceId: I, secured: R });
              }
            }),
            y
              ? (0, u.tZ)(
                  s.Ejs,
                  { sx: { mt: "12px" }, flexDirection: "row", flexWrap: "nowrap" },
                  (0, u.tZ)(
                    s.k$b,
                    {
                      sx: {
                        fontWeight: "600",
                        width: "173px",
                        textAlign: "right",
                        fontSize: "16px",
                        justifyContent: "flex-end",
                        pr: "24px"
                      },
                      as: u.nv,
                      innerAs: "label",
                      htmlFor: "securityToggle",
                      size: "medium"
                    },
                    p(S.SECURITY_LABEL)
                  ),
                  (0, u.tZ)(
                    s.Ejs,
                    { flexDirection: "row", gap: "8px", flexWrap: "nowrap" },
                    (0, u.tZ)(
                      s.Ejs,
                      { as: s.dDn, flexDirection: "column" },
                      (0, u.tZ)(u.nv, null, p(S.SECURITY_TITLE)),
                      (0, u.tZ)(u.nv, { color: "ds.text.neutral.quiet" }, p(S.SECURITY_DESCRIPTION))
                    ),
                    (0, u.tZ)(u.ZD, {
                      id: "securityToggle",
                      disabled: t,
                      checked: R,
                      onChange: () => {
                        const e = !R;
                        h || o
                          ? G(e)
                          : ((0, he.jF)(),
                            m({
                              itemType: fe.R.SecureNoteSetting,
                              options: { fieldsKeys: e ? we : ye, translated: !1 },
                              successCallback: () => G(e)
                            }));
                      }
                    })
                  )
                )
              : null
          );
        },
        { CONTENT: Ce, DOCUMENT_STORAGE: ve, MORE_OPTIONS: Ne, SHARED_ACCESS: Te } = p.SecureNoteTabs,
        Oe = 1e4,
        Ie = ({
          activeTab: e,
          data: t,
          content: n,
          setContent: p,
          handleFileInfoDetached: u,
          hasAttachment: f,
          isAdmin: h,
          isSecureNoteAttachmentEnabled: m,
          isShared: E,
          isUploading: b,
          isEditing: g,
          setIsEditing: w,
          lee: y,
          noteCategories: S,
          onModifyData: C,
          onModalDisplayStateChange: v,
          saveSecureNoteOptions: N
        }) => {
          var T;
          const { translate: O } = (0, c.Z)(),
            { shouldShowTrialDiscontinuedDialog: x } = (0, d.yp)(),
            R = (0, l.w)(r.w.DisableSecureNotes);
          return (0, i.tZ)(
            a.Fragment,
            null,
            e === Ce &&
              (0, i.tZ)(
                a.Fragment,
                null,
                (0, i.tZ)(
                  "div",
                  { className: "formContent--TCNgoQopo1" },
                  (0, i.tZ)(I, {
                    content: n,
                    setContent: (e) => {
                      C(), p(e);
                    },
                    isEditing: g,
                    setIsEditing: w,
                    limitedPermissions: E && !h,
                    readonly: x || R
                  })
                ),
                (0, i.tZ)(ie, { maxAuthorizedSize: Oe, currentSize: n.length }),
                m &&
                  (E || f) &&
                  (0, i.tZ)(s.vDh, {
                    severity: "subtle",
                    size: "small",
                    title: O(E ? "webapp_secure_notes_infobox_shared" : "webapp_secure_notes_infobox_has_attachments"),
                    sx: { margin: "0px 32px 0px 8px" }
                  })
              ),
            e === Te && (0, i.tZ)(_.u, { isAdmin: h, id: t.id }),
            e === ve &&
              (0, i.tZ)(ne, {
                currentValues: (0, o.pick)(["attachments"], t),
                lee: y,
                signalEditedValues: C,
                additionalProps: {
                  handleFileInfoDetached: (e) => {
                    u(e);
                  },
                  onModalDisplayStateChange: v,
                  noteId: t.id,
                  isUploading: b
                }
              }),
            e === Ne &&
              (0, i.tZ)(Se, {
                data: { category: t.category, spaceId: null != (T = t.spaceId) ? T : "", type: t.type, secured: t.secured },
                noteCategories: S,
                isNewItem: !1,
                saveSecureNoteOptions: (e) => {
                  N(e);
                },
                disabled: !!x
              })
          );
        };
    },
    855541: (e, t, n) => {
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
    },
    221119: (e, t, n) => {
      "use strict";
      var a, o, i;
      n.d(t, { XX: () => i, tA: () => a, wL: () => o }),
        (function (e) {
          (e.MAX_CONTENT_LENGTH_EXCEEDED = "MAX_CONTENT_LENGTH_EXCEEDED"),
            (e.QUOTA_EXCEEDED = "QUOTA_EXCEEDED"),
            (e.INVALID_FILE_TYPE = "INVALID_FILE_TYPE"),
            (e.INTERNAL_ERROR = "INTERNAL_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.FILE_NOT_FOUND = "FILE_NOT_FOUND");
        })(a || (a = {})),
        (function (e) {
          (e.Initial = "Initial"),
            (e.Downloading = "Downloading"),
            (e.Deciphering = "Deciphering"),
            (e.Error = "Error"),
            (e.ChunkReady = "ChunkReady"),
            (e.ChunkDownloaded = "ChunkDownloaded"),
            (e.TransferComplete = "TransferComplete");
        })(o || (o = {})),
        (function (e) {
          (e.None = "None"),
            (e.Initial = "Initial"),
            (e.Uploading = "Uploading"),
            (e.Ciphering = "Ciphering"),
            (e.Done = "Done"),
            (e.Error = "Error");
        })(i || (i = {}));
    }
  }
]);
