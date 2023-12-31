(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [2622],
  {
    51643: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var i = n(8081),
        r = n.n(i),
        o = n(23645),
        a = n.n(o)()(r());
      a.push([
        e.id,
        ".notes-editor-link[data-v-707ff527]{display:inline;margin:-0.125rem !important;padding:.125rem;border-radius:.2rem;color:var(--color-stop-5);text-decoration:underline;cursor:pointer;user-select:text}.notes-editor-link[data-v-707ff527]:hover,.notes-editor-link.selected[data-v-707ff527]{background-color:var(--color-stop-1)}.notes-editor-link[data-v-707ff527]:hover:active,.notes-editor-link.selected[data-v-707ff527]:active{background-color:var(--color-stop-2)}.notes-editor-link.disabled[data-v-707ff527]{text-decoration:none;cursor:text}.notes-editor-link.disabled[data-v-707ff527]:hover{background-color:unset}",
        ""
      ]);
      const s = a;
    },
    55806: (e, t, n) => {
      "use strict";
      n.d(t, {
        $g: () => s,
        EQ: () => r,
        LQ: () => v,
        Nd: () => o,
        OZ: () => l,
        Ou: () => c,
        Tv: () => m,
        UO: () => y,
        XE: () => h,
        YH: () => u,
        Zh: () => p,
        aH: () => d,
        an: () => a,
        k1: () => f,
        t7: () => i,
        um: () => g
      });
      const i = { PlainText: null, RichText: "2.0.0" },
        r = i.RichText,
        o = 500,
        a = 300,
        s = [
          "Type something cool!",
          "Think of the possibilities…",
          "Record some wisdom…",
          "Use your words…",
          "Type a tidbit…",
          "This is your canvas…"
        ],
        d = 30,
        l = "notes:sidebarOpen",
        u = "https://get.momentumdash.help/hc/en-us/articles/360012372293-Notes",
        c = "https://get.momentumdash.help/hc/en-us/articles/16371050532119",
        p = "title";
      var v, h, m, g, y;
      !(function (e) {
        (e.ErrorAiRequest = "Oops, there was a problem generating an AI response."),
          (e.ErrorAiRequestHistory = "Oops! Something went wrong, Please check your connection and try again."),
          (e.ErrorFetchLanguages = "Oops, we're unable to get available languages");
      })(v || (v = {})),
        (function (e) {
          (e.Feature = "notes ai"),
            (e.Action = "request action"),
            (e.ActionError = "request action error"),
            (e.OpenActions = "open actions"),
            (e.OpenHistory = "open history");
        })(h || (h = {})),
        (function (e) {
          (e.BodyHTML = "<p></p>"), (e.BodyText = ""), (e.TitleText = "");
        })(m || (m = {})),
        (function (e) {
          (e.Empty = "Empty Note"), (e.None = "No Title"), (e.New = "New Note"), (e.Unknown = "Unknown Note");
        })(g || (g = {})),
        (function (e) {
          (e.Summary = "Summarize"),
            (e.ImproveWriting = "Improve my writing"),
            (e.Translation = "Translation"),
            (e.ActionItems = "List action items"),
            (e.FixSpellingGrammar = "Fix spelling and grammar"),
            (e.Simplification = "Simplify and condense"),
            (e.Expansion = "Expand upon"),
            (e.JournalPrompts = "Generate journal prompts"),
            (e.Outline = "Generate outline");
        })(y || (y = {}));
      const f = {
        [y.Summary]: { path: "request_summary", dataRequired: ["selectedText"] },
        [y.ImproveWriting]: { path: "request_improved_writing", dataRequired: ["selectedText"] },
        [y.Translation]: { path: "request_translation", dataRequired: ["selectedText", "languageId"] },
        [y.ActionItems]: { path: "request_action_items", dataRequired: ["selectedText"] },
        [y.FixSpellingGrammar]: { path: "fix_spelling_and_grammar", dataRequired: ["selectedText"] },
        [y.Simplification]: { path: "request_simplification", dataRequired: ["selectedText"] },
        [y.Expansion]: { path: "request_expansion", dataRequired: ["selectedText"] },
        [y.JournalPrompts]: { path: "request_journal_prompts", dataRequired: ["selectedText"] },
        [y.Outline]: { path: "request_outline", dataRequired: ["selectedText"] }
      };
    },
    48693: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => p, Z: () => h });
      var i = n(45757),
        r = n(73845),
        o = function () {
          var e = this;
          return (0, e._self._c)(
            "node-view-wrapper",
            {
              staticClass: "notes-editor-link",
              class: { selected: e.selected, disabled: e.disabled },
              attrs: { as: "span", contenteditable: "false", "data-test": "note-link" },
              nativeOn: {
                click: function (t) {
                  return e.setNoteActive.apply(null, arguments);
                }
              }
            },
            [e._v(e._s(e.notePreview))]
          );
        };
      o._withStripped = !0;
      var a = n(51545),
        s = n(84722),
        d = n(55806);
      const l = {
        name: "NotesEditorLink",
        components: { NodeViewWrapper: i.T5 },
        props: { ...i.Un },
        setup: () => ({ notesStore: (0, a.useNotesStore)(), notesViewStateStore: (0, s.V)() }),
        computed: {
          noteLinkKey() {
            return this.node.attrs.key;
          },
          note() {
            return this.notesStore.getLinkedKeyItems[this.noteLinkKey];
          },
          notePreview() {
            var e;
            return (null === (e = this.note) || void 0 === e ? void 0 : e.preview) ?? d.um.Unknown;
          },
          disabled() {
            return !this.note || this.notesStore.activeItemId === this.note.id;
          }
        },
        methods: {
          setNoteActive() {
            this.note &&
              (this.note.deleted ? this.notesViewStateStore.setActiveView("deleted") : this.notesViewStateStore.setActiveView("list"),
              (this.notesStore.activeItemId = this.note.id));
          }
        }
      };
      n(8434);
      const u = (0, n(51900).Z)(l, o, [], !1, null, "707ff527", null).exports;
      var c = n(2376);
      const p = new c.H$("customMention"),
        v = ({ editor: e }) => {
          const t = new c.Sy({
            key: p,
            state: {
              init: () => ({ active: !1, query: null, range: null, prevKeyPressed: null }),
              apply(t, n) {
                var i;
                let r = t.getMeta(p);
                r || (r = { ...n });
                const { isEditable: o } = e,
                  { selection: a } = t,
                  { empty: s } = a,
                  d = t.isGeneric,
                  l = !!t.getMeta("pointer");
                if (!d && !l) return r;
                if (o && (s || e.view.composing) && r.active) {
                  const e = ((e, t) => {
                    var n, i, r;
                    const o = e.$from,
                      a =
                        (null === (n = e.$from.nodeBefore) || void 0 === n ? void 0 : n.isText) &&
                        (null === (i = e.$from.nodeBefore) || void 0 === i ? void 0 : i.text);
                    if (!a) return null;
                    const s = [...a.matchAll(/\[\[/g)],
                      d = t ? t.from - o.start() : e.from - o.start(),
                      l = s.findIndex((e, t) => {
                        var n, i;
                        const r = s[t + 1],
                          o = null !== (n = null == r ? void 0 : r.index) && void 0 !== n ? n : -1;
                        return !(d >= (null !== (i = e.index) && void 0 !== i ? i : -1) && r) || d < o;
                      }),
                      u = s[l];
                    if (!u) return null;
                    const c = void 0 !== u.index ? a.slice(u.index + "[[".length) : "",
                      p = o.pos - a.length + (null !== (r = u.index) && void 0 !== r ? r : 0);
                    return { range: { from: p, to: p + c.length + "[[".length }, query: c };
                  })(a, r.range);
                  e ? ((r.range = e.range), (r.query = e.query)) : (r.active = !1),
                    n.range && (null === (i = r.range) || void 0 === i ? void 0 : i.from) !== n.range.from && (r.active = !1);
                }
                return r.active || ((r.range = null), (r.query = null)), r;
              }
            },
            props: {
              handleKeyDown(e, n) {
                const i = t.getState(e.state);
                if (!i) return !1;
                const r = { ...i };
                i.active || "[" !== n.key || "[" !== i.prevKeyPressed || (r.active = !0), "Escape" === n.key && (r.active = !1);
                const { from: o, to: a } = e.state.selection;
                return (
                  e.state.doc.nodesBetween(o, a, (e) => {
                    e.type.name === d.Zh && (r.active = !1);
                  }),
                  (r.prevKeyPressed = n.key),
                  e.dispatch(e.state.tr.setMeta(p, r)),
                  !!r.active && ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(n.key)
                );
              }
            }
          });
          return t;
        },
        h = r.NB.create({
          name: "customNoteLink",
          group: "inline",
          inline: !0,
          selectable: !0,
          atom: !0,
          addOptions: () => ({ renderHTMLWithDOMContent: !1 }),
          addAttributes: () => ({
            key: {
              default: null,
              parseHTML: (e) => e.getAttribute("data-link-key"),
              renderHTML: (e) => (e.key && "string" == typeof e.key ? { "data-link-key": e.key } : {})
            }
          }),
          parseHTML() {
            return [{ tag: `span[data-type="${this.name}"]` }];
          },
          renderHTML({ HTMLAttributes: e, node: t }) {
            var n, i, o;
            const a = ["span", (0, r.P1)({ "data-type": this.name }, e)];
            if (!this.options.renderHTMLWithDOMContent) return a;
            let s = -1;
            null === (n = this.editor) ||
              void 0 === n ||
              n.state.doc.descendants((e, n) => {
                t === e && (s = n);
              });
            const d = null === (i = this.editor) || void 0 === i ? void 0 : i.view.nodeDOM(s);
            return [...a, null !== (o = null == d ? void 0 : d.textContent) && void 0 !== o ? o : ""];
          },
          renderText({ pos: e }) {
            var t, n;
            const i = null === (t = this.editor) || void 0 === t ? void 0 : t.view.nodeDOM(e);
            return null !== (n = null == i ? void 0 : i.textContent) && void 0 !== n ? n : d.um.Unknown;
          },
          addNodeView: () => (0, i.uf)(u),
          addCommands: () => ({
            openLinkSuggestionAtSelection:
              () =>
              ({ commands: e, tr: t, state: n, editor: i }) => {
                var r;
                const o = n.selection.from;
                let a = n.selection.to;
                const s = null !== (r = i.state.doc.textBetween(o, a, " ")) && void 0 !== r ? r : "";
                return (
                  (a += "[[".length),
                  e.insertContentAt(o, { type: "text", text: "[[" }),
                  t.setMeta(p, { active: !0, query: s, range: { from: o, to: a } }),
                  e.setTextSelection(a),
                  e.focus()
                );
              }
          }),
          addProseMirrorPlugins() {
            return [v({ editor: this.editor })];
          }
        });
    },
    18303: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      class i {
        constructor(e) {
          this.dataService = e;
        }
        get(e) {
          this.dataService.get(e);
        }
        create(e) {
          return this.dataService.create(e.id, e);
        }
        update(e, t) {
          return this.dataService.update(e, t);
        }
      }
      var r = n(34145),
        o = n(24960),
        a = n(35174),
        s = n(55806);
      const d = o.Z;
      class l {
        async getLanguages() {
          const { data: e } = await a.Z.get("/ai/translation_languages");
          return e;
        }
        async getNoteServerId(e) {
          return await d.sendMessage({ handler: "getSid", args: [e] });
        }
        async request(e, t, n) {
          const i = await this.getNoteServerId(e),
            { data: r } = await a.Z.post(`/notes/${i}/${s.k1[t].path}`, n);
          return r.result;
        }
      }
      const u = () => ({ noteService: new i(new r.U("notes")), noteAiService: new l() });
    },
    51545: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { makeNotesStore: () => p, useNotesStore: () => v });
      var i = n(28692),
        r = n(55806),
        o = n(48693);
      class a {
        constructor(e) {
          (this.id = e.id),
            (this.title = e.title),
            (this.body = e.body),
            (this.updatedDate = e.updatedDate),
            (this.deleted = e.deleted),
            (this.version = e.version),
            (this.linkKey = e.linkKey),
            (this.linkedKeys = e.linkedKeys),
            e.draft && (this.draft = e.draft);
        }
        get bodyElementWithInsertedLinkedContent() {
          const e = document.createElement("div");
          e.innerHTML = this.body;
          const t = v().getLinkedKeyItems;
          return (
            e.querySelectorAll(`span[data-type=${o.Z.name}]`).forEach((e) => {
              var n, i;
              const r = e.getAttribute("data-link-key");
              r && (e.innerHTML = null !== (i = null === (n = t[r]) || void 0 === n ? void 0 : n.preview) && void 0 !== i ? i : "");
            }),
            e
          );
        }
        get preview() {
          var e, t;
          if (this.draft) return r.um.New;
          if (this.version === r.t7.PlainText)
            return (null === (e = this.body.split("\n")[0]) || void 0 === e ? void 0 : e.trim()) || r.um.Empty;
          if (this.version === r.t7.RichText) {
            const e = null === (t = this.title) || void 0 === t ? void 0 : t.trim();
            if (e) return e;
            const n = [...this.bodyElementWithInsertedLinkedContent.children].find((e) => {
              var t;
              return null === (t = e.innerText) || void 0 === t ? void 0 : t.trim();
            });
            return (null == n ? void 0 : n.innerText) || r.um.Empty;
          }
          return r.um.Empty;
        }
        get bodyTextContent() {
          return this.bodyElementWithInsertedLinkedContent.innerText;
        }
      }
      var s = n(18303),
        d = n(20144),
        l = n(84315),
        u = n(94119);
      function c(e, t) {
        const n = {};
        return (
          Object.values(e)
            .filter((e) => e.deleted === t)
            .sort((e, t) => t.updatedDate - e.updatedDate)
            .forEach((e) => (n[e.id] = new a(e))),
          n
        );
      }
      const p = (e = (0, s.A)().noteService) =>
          (0, i.Q_)("notes", {
            state: () => ({ data: {}, loading: !1, loaded: !1, error: !1, activeItemId: "" }),
            getters: {
              getItems: (e) => c(e.data, !1),
              getDeletedItems: (e) => c(e.data, !0),
              getItemById: (e) => (t) => {
                const n = e.data[t];
                return n ? new a(n) : null;
              },
              getLinkedKeyItems() {
                const e = {};
                return (
                  Object.values({ ...this.getItems, ...this.getDeletedItems }).forEach((t) => {
                    t.linkKey && (e[t.linkKey] = t);
                  }),
                  e
                );
              },
              getBackLinks() {
                const e = {};
                return (
                  Object.values({ ...this.getItems, ...this.getDeletedItems }).forEach((t) => {
                    t.linkedKeys.forEach((n) => {
                      var i, r;
                      (null !== (i = e[n]) && void 0 !== i) || (e[n] = []), null === (r = e[n]) || void 0 === r || r.push(t);
                    });
                  }),
                  e
                );
              }
            },
            actions: {
              clearActiveItem() {
                this.activeItemId = "";
              },
              refresh(t = !1) {
                (this.loading = !0),
                  (this.error = !1),
                  e.get({
                    success: (e) => {
                      (this.data = e.reduce((e, t) => ((e[t.id] = t), e), {})), (this.loaded = !0), (this.loading = !1), (this.error = !1);
                    },
                    failure: () => {
                      (this.loading = !1), (this.error = !0);
                    },
                    queryParams: { loadDeleted: t }
                  });
              },
              create() {
                var e;
                const t =
                    null ===
                      (e = Object.values(this.data).find((e) => {
                        const t = !((e.body && e.body !== r.Tv.BodyHTML) || e.title);
                        return e.draft && t;
                      })) || void 0 === e
                      ? void 0
                      : e.id,
                  n = {
                    id: t || (0, l.uuidv4)(),
                    title: r.Tv.TitleText,
                    body: r.Tv.BodyHTML,
                    draft: !0,
                    updatedDate: Date.now(),
                    deleted: !1,
                    version: r.EQ,
                    linkKey: (0, l.uuidv4)(),
                    linkedKeys: []
                  };
                return d.ZP.set(this.data, n.id, n), n;
              },
              async update(t, n, { updateDate: i } = { updateDate: !0 }) {
                let o = this.data[t];
                if (!o) return;
                const a = o.version !== r.EQ,
                  s = { ...n, ...(i ? { updatedDate: Date.now() } : {}), ...(a ? { version: r.EQ } : {}) };
                o = { ...o, ...s };
                const { draft: l } = o;
                return delete o.draft, d.ZP.set(this.data, t, o), l ? await e.create(o) : await e.update(t, s), o;
              },
              delete(t) {
                const n = { deleted: !0, updatedDate: Date.now() },
                  i = Object.assign({}, this.data[t], n);
                return i.draft ? (d.ZP.delete(this.data, t), Promise.resolve()) : (d.ZP.set(this.data, t, i), e.update(t, n));
              },
              async restore(t) {
                if (!this.data[t]) throw new Error("No note found to restore with id: " + t);
                const n = { deleted: !1, updatedDate: Date.now() },
                  i = { ...this.data[t], ...n };
                return d.ZP.set(this.data, t, i), await e.update(t, n), i;
              },
              getUpdatedProperties(e, t) {
                const n = this.data[e];
                if (!n) return {};
                const i = (0, u.compare)(n, { id: e, ...t });
                if (n.version === r.t7.PlainText) {
                  const e = n.body.split("\n"),
                    r = `<p>${e
                      .map((t, n) => ("" === t ? "</p><p>" : ("" !== e[n + 1] && void 0 !== e[n + 1] && (t += " "), t)))
                      .join("")}</p>`.replace(/(<p><\/p>)/g, "");
                  i.title || (delete i.body, t.body && r !== t.body && (i.body = r), delete i.title);
                }
                return i;
              }
            }
          }),
        v = p();
    },
    8434: (e, t, n) => {
      var i = n(51643);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[e.id, i, ""]]),
        i.locals && (e.exports = i.locals),
        (0, n(45346).Z)("4044ef25", i, !1, {});
    }
  }
]);
