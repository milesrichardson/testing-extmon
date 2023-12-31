!(function (e, t) {
  if ("function" == typeof define && define.amd) define([], t);
  else if ("undefined" != typeof exports) t();
  else {
    t(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  !(function (e, t) {
    if ("function" == typeof define && define.amd) define([], t);
    else if ("undefined" != typeof exports) t();
    else {
      t(), (e.unknown = {});
    }
  })("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0, function () {
    var e,
      t = () =>
        ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) =>
          (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
        ),
      n = (e, n) =>
        new Promise((i, o) => {
          const r = t(),
            d = (e) => {
              e.source === window &&
                e.data &&
                e.data.id === r &&
                "TH_DOCS_PARSER_RESPONSE" === e.data.action &&
                ("success" === e.data.responseType ? i(e.data.responseValue) : o(e.data.responseValue),
                window.removeEventListener("message", d));
            };
          window.addEventListener("message", d),
            window.postMessage({ action: "TH_DOCS_PARSER_ACTION", type: e, id: r, options: n }, "https://docs.google.com");
        });
    !(function (e) {
      (e.GetTextAtCursor = "GET_TEXT_AT_CURSOR"),
        (e.InsertText = "INSERT_TEXT"),
        (e.GetSelection = "GET_SELECTION"),
        (e.GetSelectionRange = "GET_SELECTION_RANGE"),
        (e.GetCursor = "GET_CURSOR"),
        (e.GetRenderedRanges = "GET_RENDERED_RANGES"),
        (e.GetRangeText = "GET_RANGE_TEXT"),
        (e.GetAllText = "GET_ALL_TEXT"),
        (e.SetHighlights = "SET_HIGHLIGHTS"),
        (e.ClearHighlights = "CLEAR_HIGHLIGHTS"),
        (e.SetSelection = "SET_SELECTION"),
        (e.KeyboardEvent = "TRIGGER_KEY_EVENT"),
        (e.GetParagraphStarts = "GET_PARAGRAPH_STARTS"),
        (e.RemoveHighlightsById = "REMOVE_HIGHLIGHTS_BY_ID"),
        (e.SetSpellCheckVisibility = "SET_SPELL_CHECK_VISIBILITY"),
        (e.GetSpellCheckErrors = "GET_SPELL_CHECK_ERRORS"),
        (e.GetStyle = "GET_STYLE"),
        (e.GetRectsByRange = "GET_RECTS_BY_RANGE");
    })(e || (e = {}));
    var i = e;
    function o(e, t, n, i, o, r, d) {
      try {
        var l = e[r](d),
          a = l.value;
      } catch (e) {
        return void n(e);
      }
      l.done ? t(a) : Promise.resolve(a).then(i, o);
    }
    function r(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, r) {
          var d = e.apply(t, n);
          function l(e) {
            o(d, i, r, l, a, "next", e);
          }
          function a(e) {
            o(d, i, r, l, a, "throw", e);
          }
          l(void 0);
        });
      };
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function l(e, t) {
      var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return d(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? d(e, t)
                  : void 0
              );
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var r,
        l = !0,
        a = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (l = e.done), e;
        },
        e: function (e) {
          (a = !0), (r = e);
        },
        f: function () {
          try {
            l || null == n.return || n.return();
          } finally {
            if (a) throw r;
          }
        }
      };
    }
    const a = new Map(),
      s = (function () {
        var e = r(function* (e) {
          a.set(e.id || t(), e), yield n("SET_HIGHLIGHTS", { highlights: Array.from(a.values()) });
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      u = (function () {
        var e = r(function* () {
          let e = [];
          a.forEach((t, n) => {
            e.push(n);
          }),
            a.clear(),
            yield n(i.RemoveHighlightsById, { ids: e });
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      f = (function () {
        var e = r(function* (e) {
          const t = Array.isArray(e) ? e : [e];
          var o,
            r = l(t);
          try {
            for (r.s(); !(o = r.n()).done; ) {
              const e = o.value;
              a.delete(e);
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
          yield n(i.RemoveHighlightsById, { ids: t });
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      g = ({ side: e = "left", length: t } = {}) => n(i.GetTextAtCursor, { side: e, length: t }),
      c = () => n(i.GetSelectionRange),
      h = () => n(i.GetCursor),
      p = () => n(i.GetRenderedRanges),
      w = (e) => n(i.GetRangeText, e),
      T = () => n(i.GetAllText),
      E = (e, t) => n(i.InsertText, { text: e, mimeType: t }),
      S = (e) => n(i.SetSelection, { cursor: e }),
      y = (e) => n(i.KeyboardEvent, e),
      R = () => n(i.GetParagraphStarts),
      G = (e) => n(i.SetSpellCheckVisibility, { visible: e });
    (window.texthelp = window.texthelp || {}),
      (window.texthelp.gdi = window.texthelp.gdi || {}),
      !0 !== window.texthelp.gdi.added &&
        ((window.texthelp.gdi.added = !0),
        (window.texthelp.gdi.keyboardEvent = y),
        (window.texthelp.gdi.getSelectionRange = c),
        (window.texthelp.gdi.getTextAtCursor = g),
        (window.texthelp.gdi.getParagraphStarts = R),
        (window.texthelp.gdi.setSelection = S),
        (window.texthelp.gdi.getRangeText = w),
        (window.texthelp.gdi.addHighlight = s),
        (window.texthelp.gdi.clearHighlights = u),
        (window.texthelp.gdi.insertText = E),
        (window.texthelp.gdi.setSpellCheckVisibility = G),
        (window.texthelp.gdi.getRenderedRanges = p),
        (window.texthelp.gdi.removeHighlight = f),
        (window.texthelp.gdi.getDocumentText = T),
        (window.texthelp.gdi.getCursor = h),
        (window.texthelp.gdi.added = !0));
  });
});
