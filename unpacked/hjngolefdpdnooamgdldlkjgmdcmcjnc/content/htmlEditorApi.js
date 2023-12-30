!(function (n) {
  var o = {};
  function i(t) {
    var e;
    return (
      o[t] ||
      ((e = o[t] =
        {
          i: t,
          l: !1,
          exports: {}
        }),
      n[t].call(e.exports, e, e.exports, i),
      (e.l = !0),
      e)
    ).exports;
  }
  (i.m = n),
    (i.c = o),
    (i.d = function (t, e, n) {
      i.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/"),
    i((i.s = 411));
})({
  19: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "c", function () {
        return i;
      }),
      n.d(e, "b", function () {
        return r;
      });
    const o = {
        Insert: "INSERT_HTML_EDITOR",
        Extract: "EXTRACT_SELECTION_HTML_EDITOR",
        SetEditor: "SET_HTML_EDITOR"
      },
      i = (t, e) => {
        window.postMessage({
          type: "EQUATIO_HTML_EDITOR_API_RESPONSE",
          action: t,
          value: e
        });
      },
      r = (t, e, n) => {
        window.postMessage({
          type: "EQUATIO_HTML_EDITOR_API",
          action: t,
          value: e,
          targetEditor: n
        });
      };
  },
  411: function (P, t, e) {
    "use strict";
    e.r(t);
    var c = e(19);
    let o;
    const n = "tinymce",
      i = () => {
        if (!window.tinyMCE || !window.tinyMCE.activeEditor) return !1;
        const t = window.tinyMCE.activeEditor;
        if (3 !== o) return t.hasFocus();
        {
          if (!t.initialized) return !1;
          const e = t.getWin(),
            n = e.frameElement;
          return document.activeElement === n;
        }
      };
    let r;
    const a = (t) => {
        r && clearTimeout(r),
          (r = setTimeout(() => {
            window.tinyMCE.activeEditor && (t || i()) ? Object(c.c)(c.a.SetEditor, n) : Object(c.c)(c.a.SetEditor, null);
          }, 100));
      },
      d = (t) => {
        const n = () => a(!0);
        if (3 === o) {
          const e = (t) => {
            const e = t.getWin();
            e.addEventListener("focusin", n), e.addEventListener("focus", n);
          };
          t.initialized ? e(t) : t.onInit.add(() => e(t));
        } else t.on("focusin", n), t.on("focus", n);
      },
      s = () => a();
    let l = !1;
    const u = () => {
        if (!l) {
          let t;
          window.tinyMCE.editors ? (t = window.tinyMCE.editors) : "function" == typeof window.tinyMCE.get && (t = window.tinyMCE.get()),
            t &&
              t.length &&
              t.forEach((t) => {
                d(t);
              }),
            3 === o
              ? (window.tinyMCE.onAddEditor.add((t, e) => d(e)), window.tinyMCE.onRemoveEditor.add(s))
              : (window.tinyMCE.on("AddEditor", (t) => d(t.editor)), window.tinyMCE.on("RemoveEditor", s)),
            (l = !0);
        }
      },
      E = (e, t) => {
        if (window.tinyMCE.activeEditor)
          try {
            window.tinyMCE.activeEditor.execCommand("mceInsertContent", !1, t), Object(c.c)(e, !0);
          } catch (t) {
            console.error(t), Object(c.c)(e, null);
          }
      },
      w = (e) => {
        if (window.tinyMCE && window.tinyMCE.activeEditor)
          try {
            const t = window.tinyMCE.activeEditor.selection.getContent();
            Object(c.c)(e, t);
          } catch (t) {
            console.error(t), Object(c.c)(e, null);
          }
      },
      f = () => {
        window.addEventListener("message", (t) => {
          if (t.source === window && t.data && "EQUATIO_HTML_EDITOR_API" === t.data.type && t.data.targetEditor === n)
            switch (t.data.action) {
              case c.a.Insert:
                E(t.data.action, t.data.value);
                break;

              case c.a.Extract:
                w(t.data.action);
                break;

              case c.a.SetEditor:
                a();
            }
        });
      },
      m = () => {
        const t = window.tinyMCE.majorVersion;
        if (!t) return !1;
        const e = Number(t);
        return !(Number.isNaN(e) || e < 3 || ((o = e), 0));
      };
    let y = !1;
    var g = () => {
      !y && window.tinyMCE && m() && (u(), f(), (y = !0));
    };
    let O;
    const b = "contentEditable";
    let T;
    function v(e) {
      if (!O) throw new Error("NO_ACTIVE_INSERT_RANGE");
      const n = window.getSelection(),
        o = (n.removeAllRanges(), n.addRange(O), n.getRangeAt(0));
      if ((o.deleteContents(), T && T.insertHtml)) T.insertHtml(e);
      else {
        const i = document.createElement("div"),
          r = ((i.innerHTML = e), document.createDocumentFragment());
        let t;
        for (; (t = i.firstChild); ) r.appendChild(t);
        o.insertNode(r), o.collapse(!1), n.removeAllRanges(), n.addRange(o), (O = o);
      }
    }
    const p = (e, t) => {
        try {
          v(t), Object(c.c)(e, !0);
        } catch (t) {
          console.error(t), Object(c.c)(e, null);
        }
      },
      M = (e) => {
        try {
          const t = window.getSelection(),
            n = (t.removeAllRanges(), t.addRange(O), t.getRangeAt(0)),
            o = t.anchorOffset,
            i = n.commonAncestorContainer;
          if (i && 1 === i.nodeType) {
            let t = i;
            const r = i.childNodes;
            "IMG" !== (t = r && r.length - 1 >= o ? r[o] : t).nodeName ? Object(c.c)(e, " ") : Object(c.c)(e, t.outerHTML);
          } else Object(c.c)(e, " ");
        } catch (t) {
          console.error(t), Object(c.c)(e, null);
        }
      },
      C = () => {
        const t = window.getSelection(),
          e = t.getRangeAt(0);
        O = e;
      },
      I = (t) => (t ? (1 === t.nodeType ? t : t.parentElement ? I(t.parentElement) : null) : null);
    let R;
    const _ = () => {
      const t = window.getSelection(),
        e = t.anchorNode,
        n = I(e);
      if (
        (!n || !n.closest(".equatio-toolbar-wrapper")) &&
        (n || !document.activeElement || !document.activeElement.closest(".equatio-toolbar-wrapper"))
      ) {
        const o = n && n.isContentEditable;
        o ? (C(), (R = !0), Object(c.c)(c.a.SetEditor, b)) : R && ((R = !1), Object(c.c)(c.a.SetEditor, null));
      }
    };
    let j;
    const S = () => {
        const t = () => {
          j && clearTimeout(j), (j = setTimeout(_, 200));
        };
        document.addEventListener("selectionchange", t), document.addEventListener("selectstart", t);
      },
      h = (t) => {
        if (t.source === window && t.data && "EQUATIO_HTML_EDITOR_API" === t.data.type && t.data.targetEditor === b)
          switch (t.data.action) {
            case c.a.Insert:
              p(t.data.action, t.data.value);
              break;

            case c.a.Extract:
              M(t.data.action);
              break;

            case c.a.SetEditor:
              _();
          }
      },
      A = () => {
        const t = window.getSelection(),
          e = t.anchorNode,
          n = I(e);
        return !(!n || !n.closest(".equatio-toolbar-wrapper"));
      },
      L = () => {
        try {
          if (window.LRNCKEDITOR || window.CKEDITOR) {
            const t = window.LRNCKEDITOR || window.CKEDITOR;
            t.on &&
              t.on("currentInstance", () => {
                A() || (T = t.currentInstance);
              });
          }
        } catch (t) {}
      };
    let N = !1;
    var D = () => {
      N || (window.addEventListener("message", h), S(), L(), (N = !0));
    };
    const H = () => {
      g(), D();
    };
    window.addEventListener("focus", () => {
      H();
    }),
      H();
  }
});
