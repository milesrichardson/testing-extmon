(() => {
  function e(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var o = (n[r] = { exports: {} });
    return t[r].call(o.exports, o, o.exports, e), o.exports;
  }
  var t = {
      1340: (e, t, n) => {
        "use strict";
        function r(e, t) {
          return null === e || (void 0 === e && t) ? "" : void 0 === e ? void 0 : `${e}`;
        }
        n.r(t), n.d(t, { $: () => s });
        const i = (e, t) => {
            for (let n = 0, r = e.length; n < r; n++) if (e[n] == t) return !0;
            return !1;
          },
          o = (e) => e && void 0 !== e.nodeType,
          a = (e) => e && void 0 !== e.tagName,
          s = (...e) => {
            const t = e.length > 1 ? e : e[0];
            if (null == t ? void 0 : t.queryHelper) return t;
            if ("function" == typeof t)
              return "loading" != window.document.readyState ? t(null) : window.addEventListener("DOMContentLoaded", t), s([]);
            if ("string" == typeof t) {
              let e = [];
              if ("<" == t.trim()[0]) {
                let n = t;
                try {
                  if (-1 != n.indexOf("<script")) {
                    const t = /<script[^>]*>[^<]*<\/script>/g,
                      r = /([^\r\n\t\f\v= '"]+)(?:=(["'])?((?:.(?!\2?\s+(?:\S+)=|\2))+.)\2?)?/g,
                      i = n.match(t);
                    i &&
                      i.length &&
                      ((n = n.replace(t, "")),
                      i.forEach((t) => {
                        const n = t.match(r);
                        if (!n || !n.length) return;
                        const i = {};
                        if (
                          (n.slice(1, -1).forEach((e) => {
                            const t = e.split("="),
                              n = t.shift() || e;
                            i[n] = (t.join("=") || "").replace(/^"|"$/g, "");
                          }),
                          !i.src)
                        )
                          return void console.error(`ssjq: unable to parse "${t}"`, i);
                        const o = document.createElement("script");
                        ["src", "async"].forEach((e) => {
                          void 0 !== i[e] && o.setAttribute(e, i[e]);
                        }),
                          e.push(o);
                      }));
                  }
                  const t = /^<([^>]+)>$/.exec(n);
                  t && 2 == t.length && (n = `${n}</${t[1].split(" ")[0]}>`);
                  const r = new DOMParser().parseFromString(n, "text/html"),
                    i = [].slice.call(r.body.children);
                  e = i.concat(e);
                } catch (t) {
                  console.error(`ssjq: ${t}`), (e = []);
                }
              } else {
                const n = document.querySelectorAll(t);
                e = [].slice.call(n);
              }
              return s(e);
            }
            if (Array.isArray(t)) {
              const e = [].concat(...t.map((e) => (Array.isArray(e) ? e : "string" == typeof e ? s(e) : [e])).filter((e) => e)),
                n = {},
                l = Object.assign(e, {
                  queryHelper: !0,
                  append: (...t) => (
                    t.forEach((t) => {
                      const n = e[0];
                      o(n) && s(t).forEach((e) => n.appendChild(s(e)[0]));
                    }),
                    s(e)
                  ),
                  appendTo: (t) => {
                    const n = s(t);
                    return e.filter(o).forEach((e) => n.append(e)), s(e);
                  },
                  insertBefore: (t) => {
                    const n = [...e];
                    if (e.length) {
                      const r = s(t)[0],
                        i = null == r ? void 0 : r.parentNode;
                      i &&
                        e.forEach((e) => {
                          const t = s(e)[0];
                          t && (i.insertBefore(t, r), n.push(t));
                        });
                    }
                    return s(n);
                  },
                  remove: () => (
                    e.filter(o).forEach((e) => {
                      var t;
                      return null === (t = e.parentNode) || void 0 === t ? void 0 : t.removeChild(e);
                    }),
                    s([])
                  ),
                  replaceWith: (t) => {
                    const n = e[0];
                    if (n) {
                      const e = ((e) => e && e.queryHelper)(n) ? n[0] : n,
                        r = s(t),
                        i = r.shift();
                      return (
                        void 0 !== i &&
                          a(e) &&
                          (e.replaceWith(i),
                          r.forEach((e) => {
                            var t;
                            null === (t = i.parentNode) || void 0 === t || t.insertBefore(e, i.nextSibling);
                          })),
                        s(e)
                      );
                    }
                    return s(e);
                  },
                  prevAll: (t) => {
                    var n;
                    const r = e[0];
                    if (!r) return s([]);
                    const i = null === (n = s(r).parent()) || void 0 === n ? void 0 : n.children(t);
                    if (!i || !i.length) return s([]);
                    const o = [];
                    for (let e = 0; e < i.length; e++) {
                      const t = i[e];
                      if (t == r) break;
                      o.push(t);
                    }
                    return s(o.reverse());
                  },
                  nextAll: (t) => {
                    var n;
                    const r = e[0];
                    if (!r) return s([]);
                    const i = null === (n = s(r).parent()) || void 0 === n ? void 0 : n.children(t);
                    if (!i || !i.length) return s([]);
                    const o = [];
                    let a = !1;
                    for (let e = 0; e < i.length; e++) {
                      const t = i[e];
                      a && o.push(t), t == r && (a = !0);
                    }
                    return s(o);
                  },
                  addClass: (t) => {
                    const n = t.trim().split(" ");
                    return e.filter(a).forEach((e) => n.forEach((t) => e.classList.add(t))), s(e);
                  },
                  removeClass: (t) => {
                    const n = t.trim().split(" ");
                    return e.filter(a).forEach((e) => n.forEach((t) => e.classList.remove(t))), s(e);
                  },
                  toggleClass: (t, n) => (
                    t
                      .trim()
                      .split(" ")
                      .forEach((t) => {
                        !0 === n ? l.addClass(t) : !1 === n ? l.removeClass(t) : e.filter(a).forEach((e) => e.classList.toggle(t));
                      }),
                    s(e)
                  ),
                  hasClass: (t) => !!e.filter((e) => a(e) && e.classList.contains(t)).length,
                  is: (t) => {
                    const n = e[0];
                    if (n && a(n))
                      return ":visible" == t ? "none" !== window.getComputedStyle(n).display : ":checked" == t ? 1 == n.checked : void 0;
                  },
                  attr: (t, n) => {
                    if (e.length) {
                      const r = (t, n) => {
                        null === n
                          ? e.filter(a).forEach((e) => e.removeAttribute(t))
                          : e.filter(a).forEach((e) => e.setAttribute(t, n.toString()));
                      };
                      if ("string" == typeof t) {
                        if (void 0 === n) {
                          const n = e[0];
                          return (a(n) && n.getAttribute(t)) || void 0;
                        }
                        r(t, n);
                      } else for (const e of Object.keys(t)) r(e, t[e]);
                    }
                    return s(e);
                  },
                  prop: (t, n) => {
                    if (e.length) {
                      const r = (t, n) => {
                        null === n
                          ? e.filter(a).forEach((e) => {
                              delete e[t], e.removeAttribute(t);
                            })
                          : e.forEach((e) => (e[t] = n));
                      };
                      if ("string" == typeof t) {
                        if (void 0 === n) return e[0][t];
                        r(t, n);
                      } else for (const e of Object.keys(t)) r(e, t[e]);
                    }
                    return s(e);
                  },
                  text: (t) =>
                    void 0 === t
                      ? e.length
                        ? e
                            .filter(a)
                            .map((e) => e.innerText)
                            .join("")
                        : void 0
                      : (e.length && null != t && e.filter(a).forEach((e) => (e.innerText = r(t))), s(e)),
                  html: (t) => {
                    if (e.length) {
                      if (void 0 === t)
                        return e
                          .filter(a)
                          .map((e) => e.innerHTML)
                          .join("");
                      e.filter(a).forEach((e) => (e.innerHTML = r(t)));
                    }
                    return s(e);
                  },
                  closest: (t) => {
                    if (e.length) {
                      const n = e[0],
                        r =
                          a(n) &&
                          ((e, t) => {
                            const n = document.querySelectorAll(t);
                            let r = e.parentNode;
                            for (; r && !i(n, r); ) r = r.parentNode;
                            return r;
                          })(n, t);
                      if (r) return s(r);
                    }
                    return s([]);
                  },
                  parent: () => {
                    const t = e[0];
                    return a(t) ? s(t.parentNode) : s([]);
                  },
                  children: (t) => {
                    const n = e[0];
                    if (a(n))
                      if (t) {
                        if (n.querySelectorAll) {
                          const e = n.querySelectorAll(t);
                          return s([].slice.call(e));
                        }
                      } else if (n.children) return s([].slice.call(n.children));
                    return s([]);
                  },
                  find: (t) => {
                    let n = [];
                    return (
                      e.forEach((e) => {
                        s(e)
                          .children(t)
                          .forEach((e) => {
                            const r = s(e).find(t).toArray();
                            n = [...n, e, ...r];
                          });
                      }),
                      s(n)
                    );
                  },
                  each: (t) => (e.forEach((e, n) => t(n, e)), s(e)),
                  not: (t) => {
                    const n = s(t);
                    return s(e.filter((e) => -1 === n.indexOf(s(e)[0])));
                  },
                  first: () => s(e.slice(0, 1)),
                  toArray: () => [...e],
                  bind: (t, r) => (
                    t.split(" ").forEach((t) => {
                      (n[t] || (n[t] = [])).push(r), e.forEach((e) => e.addEventListener(t, r));
                    }),
                    s(e)
                  ),
                  unbind: (t) => (
                    t.split(" ").forEach((t) => {
                      n[t] &&
                        (n[t].forEach((n) => {
                          e.forEach((e) => {
                            e.removeEventListener(t, n);
                          });
                        }),
                        (n[t] = []));
                    }),
                    s(e)
                  ),
                  value: (t) => {
                    if (void 0 === t) {
                      let t;
                      return (
                        e.reverse().some((e) => {
                          if (!e.disabled) return "checkbox" != e.type || 1 == e.checked ? ((t = e.value), !0) : void 0;
                        }),
                        t
                      );
                    }
                    {
                      const n = e.length ? e[e.length - 1] : void 0;
                      return (
                        n &&
                          ("checkbox" == n.type
                            ? n.value == t && (n.checked = !0)
                            : "select-one" == n.type
                            ? (n.value = r(t))
                            : (((e) => e && void 0 !== e.type)(n) && "text" == n.type && (n.value = r(t)), n.setAttribute("value", r(t)))),
                        s(e)
                      );
                    }
                  },
                  data: (t, n) => {
                    const i = e[0];
                    return a(i) && i.dataset
                      ? void 0 === n
                        ? i.dataset[t]
                        : (null === n ? delete i.dataset[t] : (i.dataset[t] = r(n)), s(e))
                      : void 0 === n
                      ? s(e)
                      : void 0;
                  },
                  offset: () => {
                    const t = e[0];
                    return (
                      (a(t) && (null == t ? void 0 : t.getBoundingClientRect())) || {
                        left: -1,
                        top: -1,
                        right: -1,
                        bottom: -1,
                        x: -1,
                        y: -1,
                        height: -1,
                        width: -1
                      }
                    );
                  },
                  height: () => {
                    const t = e[0];
                    return (t && (((e) => e && void 0 !== e.document)(t) ? window.innerHeight : t.offsetHeight)) || 0;
                  },
                  scrollTop: () => {
                    const t = e[0];
                    return (t && (t.scrollTop || t.pageYOffset)) || 0;
                  },
                  get: (t) => e[t],
                  on: (t, n) => (t.split(" ").forEach((t) => e.forEach((e) => (null == e ? void 0 : e.addEventListener(t, n)))), s(e)),
                  off: (t, n) => (t.split(" ").forEach((t) => e.forEach((e) => (null == e ? void 0 : e.removeEventListener(t, n)))), s(e)),
                  trigger: (t, n) => {
                    const r = new Event(t, { bubbles: !0, cancelable: !0 });
                    return (
                      n && Object.assign(r, n),
                      e.forEach((e) => {
                        if (["focus", "blur"].includes(t)) {
                          const n = e[t];
                          "function" == typeof n && n.apply(e, []);
                        }
                        e.dispatchEvent(r);
                      }),
                      s(e)
                    );
                  },
                  toggle: (t) => (
                    e.forEach((e) => {
                      const n = s(e);
                      (void 0 === t ? n.is(":visible") : !t) ? n.hide() : n.show();
                    }),
                    s(e)
                  ),
                  hide: () => (
                    e.filter(a).forEach((e) => {
                      var t;
                      const n = null === (t = null == e ? void 0 : e.style) || void 0 === t ? void 0 : t.display;
                      n && -1 == n.indexOf("none") && (e.backuped_display = n), s(e).attr("style", "display: none !important");
                    }),
                    s(e)
                  ),
                  fadeOut: async (t) =>
                    new Promise((n) => {
                      e.filter(a).forEach((e) => {
                        (e.style.opacity = "1"),
                          (e.style.transition = `opacity ${t || 150}ms`),
                          setTimeout(() => {
                            e.style.opacity = "0";
                          }, 1);
                      }),
                        setTimeout(
                          () => {
                            e.filter(a).forEach((e) => {
                              (e.style.transition = ""), (e.style.opacity = "");
                            }),
                              l.hide(),
                              n(s(e));
                          },
                          (t || 150) + 1
                        );
                    }),
                  show: () => (
                    e.filter(a).forEach((e) => {
                      e.style.display = e.backuped_display || "";
                    }),
                    s(e)
                  ),
                  fadeIn: async (t) =>
                    new Promise((n) => {
                      e.filter(a).forEach((e) => {
                        (e.style.opacity = "0"),
                          (e.style.transition = `opacity ${t || 150}ms`),
                          setTimeout(() => {
                            e.style.opacity = "1";
                          }, 1);
                      }),
                        l.show(),
                        setTimeout(
                          () => {
                            e.filter(a).forEach((e) => {
                              (e.style.transition = ""), (e.style.opacity = "");
                            }),
                              n(s(e));
                          },
                          (t || 150) + 1
                        );
                    }),
                  animate: (t, n) =>
                    new Promise((r) => {
                      const i = e[0];
                      i.current_action && window.clearInterval(i.current_action),
                        (i.current_action = window.setInterval(
                          () => {
                            if (void 0 !== t.scrollTop) {
                              const n = i === window ? document.documentElement : i,
                                o = n.scrollTop;
                              n.scrollTop < t.scrollTop ? (n.scrollTop = n.scrollTop + 3) : (n.scrollTop = n.scrollTop - 3),
                                (n.scrollTop === o || Math.abs(n.scrollTop - t.scrollTop) <= 3) &&
                                  ((n.scrollTop = t.scrollTop), window.clearInterval(i.current_action), delete i.current_action, r(s(e))),
                                window.getComputedStyle(n);
                            } else
                              e.forEach((e) => {
                                if (void 0 !== t.height) {
                                  const n = s(e).get(0);
                                  n && n.style && (n.style.height = `${t.height}px`);
                                }
                              }),
                                r(s(e));
                          },
                          void 0 === n ? 100 : n
                        ));
                    }),
                  serialize: () => {
                    if (1 == e.length && (t = e[0]) && "FORM" == t.tagName)
                      return s(e[0])
                        .find("input, textarea, select, button")
                        .map((e) => {
                          const t = e.name,
                            n = s(e).value();
                          if ("string" == typeof t && "string" == typeof n) return `${t}=${encodeURIComponent(n)}`;
                        })
                        .filter((e) => "string" == typeof e)
                        .join("&");
                    var t;
                  }
                });
              return l;
            }
            return s(void 0 === t || null == t ? [] : [t]);
          };
      },
      3495: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = "CodeMirror-bookmarks",
            n = [void 0, t, "CodeMirror-linenumbers"],
            r = e.Pos,
            i = e.Range,
            o = function (e, t, o) {
              var a;
              -1 != n.indexOf(o) &&
                ((a = e.listSelections().filter(function (e) {
                  return !e.empty();
                })) &&
                  0 === a.length &&
                  (a = [new i(new r(t, 0), new r(t, e.getLine(t).length))]),
                c(e, a));
            },
            a = function (e, n, i) {
              for (var o, a, s, l = 0; l < n.length; l++)
                for (var c = n[l].from(), u = n[l].to(), f = c.line; f <= u.line; ++f)
                  f <= u.line &&
                    ((o = r(f, 0)),
                    i !== ((s = e.lineInfo(o)) && (a = s.gutterMarkers) && a[t]) &&
                      e.setGutterMarker(
                        o.line,
                        t,
                        i
                          ? ((d = void 0),
                            (d = document.createElement("div")).setAttribute("class", "CodeMirror-bookmarks-marked"),
                            (d.innerHTML = "&nbsp;"),
                            d)
                          : null
                      ));
              var d;
            },
            s = function (e, t) {
              var n = e.clipPos(t);
              return n.line == t.line && n.ch == t.ch ? t : null;
            };
          e.defineOption("bookmarkGutter", !1, function (e, t) {
            t ? e.on("gutterClick", o) : e.off("gutterClick", o);
          });
          var l = function (e, t, n) {
            return (
              a(e, [t], !0),
              {
                clear: function () {
                  a(e, [t], !1), n && n.clear && n.clear();
                },
                find: function () {
                  var n = t.from(),
                    r = t.to();
                  return s(e, n) && s(e, r) ? { from: n, to: r } : null;
                },
                extra: n
              }
            );
          };
          (e.commands.nextBookmark = function (e) {
            var t = e.state.bookmarks;
            if (t)
              for (; t.length; ) {
                var n = t.shift(),
                  r = n.find();
                if (r) return t.push(n), e.setSelection(r.from, r.to);
              }
          }),
            (e.commands.prevBookmark = function (e) {
              var t = e.state.bookmarks;
              if (t)
                for (; t.length; ) {
                  t.unshift(t.pop());
                  var n = t[t.length - 1].find();
                  if (n) return e.setSelection(n.from, n.to);
                  t.pop();
                }
            });
          var c = (e.commands.toggleBookmark = function (e, t, n) {
            var i = e.state.bookmarks || (e.state.bookmarks = []);
            (t = t || e.listSelections()),
              void 0 === n &&
                t.every(function (t) {
                  return (n = !(function (e, t) {
                    for (var n, i, o = t.from(), a = t.to(), s = o.line; s <= a.line; ++s)
                      if (s <= a.line && ((n = new r(s, 0)), (i = e.lineInfo(n)) && i.gutterMarkers)) return !0;
                  })(e, t));
                });
            for (var o = 0; o < t.length; o++) {
              for (
                var a = t[o].from(), s = t[o].to(), c = e.findMarks(r(a.line, 0), r(s.line, e.getLine(s.line).length + 1)), u = 0;
                u < c.length;
                u++
              )
                if (c[u].bookmark) {
                  for (var f = 0; f < i.length; f++) i[f].extra == c[u] && (i[f].clear(), i.splice(f--, 1));
                  break;
                }
              n && u == c.length && i.push(l(e, t[o], e.markText(a, s, { bookmark: !0, clearWhenEmpty: !1 })));
            }
          });
          (e.commands.clearBookmarks = function (e) {
            var t = e.state.bookmarks;
            if (t) for (var n = 0; n < t.length; n++) t[n].clear();
            t.length = 0;
          }),
            (e.commands.selectBookmarks = function (e) {
              var t = e.state.bookmarks,
                n = [];
              if (t)
                for (var r = 0; r < t.length; r++) {
                  var i = t[r].find();
                  i ? n.push({ anchor: i.from, head: i.to }) : t.splice(r--, 0);
                }
              n.length && e.setSelections(n, 0);
            });
        })(n(4538));
      },
      6531: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            var t = e.search(i);
            return -1 == t ? 0 : t;
          }
          function n(e, t) {
            var n = e.getMode();
            return !1 !== n.useInnerComments && n.innerMode ? e.getModeAt(t) : n;
          }
          var r = {},
            i = /[^\s\u00a0]/,
            o = e.Pos,
            a = e.cmpPos;
          (e.commands.toggleComment = function (e) {
            e.toggleComment();
          }),
            e.defineExtension("toggleComment", function (e) {
              e || (e = r);
              for (var t = this, n = 1 / 0, i = this.listSelections(), a = null, s = i.length - 1; s >= 0; s--) {
                var l = i[s].from(),
                  c = i[s].to();
                l.line >= n ||
                  (c.line >= n && (c = o(n, 0)),
                  (n = l.line),
                  null == a
                    ? t.uncomment(l, c, e)
                      ? (a = "un")
                      : (t.lineComment(l, c, e), (a = "line"))
                    : "un" == a
                    ? t.uncomment(l, c, e)
                    : t.lineComment(l, c, e));
              }
            }),
            e.defineExtension("lineComment", function (e, a, s) {
              s || (s = r);
              var l,
                c,
                u = this,
                f = n(u, e),
                d = u.getLine(e.line);
              if (null != d && ((l = e), (c = d), !/\bstring\b/.test(u.getTokenTypeAt(o(l.line, 0))) || /^[\'\"\`]/.test(c))) {
                var h = s.lineComment || f.lineComment;
                if (h && !s.blockComment) {
                  var p = Math.min(0 != a.ch || a.line == e.line ? a.line + 1 : a.line, u.lastLine() + 1),
                    m = null == s.padding ? " " : s.padding,
                    g = s.commentBlankLines || e.line == a.line;
                  u.operation(function () {
                    if (s.indent) {
                      for (var n = null, r = e.line; r < p; ++r) {
                        var a = (l = u.getLine(r)).slice(0, t(l));
                        (null == n || n.length > a.length) && (n = a);
                      }
                      for (r = e.line; r < p; ++r) {
                        var l = u.getLine(r),
                          c = n.length;
                        (g || i.test(l)) && (l.slice(0, c) != n && (c = t(l)), u.replaceRange(n + h + m, o(r, 0), o(r, c)));
                      }
                    } else for (r = e.line; r < p; ++r) (g || i.test(u.getLine(r))) && u.replaceRange(h + m, o(r, 0));
                  });
                } else (s.blockCommentStart || f.blockCommentStart) && ((s.fullLines = !0), u.blockComment(e, a, s));
              }
            }),
            e.defineExtension("blockComment", function (e, t, s) {
              s || (s = r);
              var l = this,
                c = n(l, e),
                u = s.blockCommentStart || c.blockCommentStart,
                f = s.blockCommentEnd || c.blockCommentEnd;
              if (u && f) {
                if (!/\bcomment\b/.test(l.getTokenTypeAt(o(e.line, 0)))) {
                  var d = Math.min(t.line, l.lastLine());
                  d != e.line && 0 == t.ch && i.test(l.getLine(d)) && --d;
                  var h = null == s.padding ? " " : s.padding;
                  e.line > d ||
                    l.operation(function () {
                      if (0 != s.fullLines) {
                        var n = i.test(l.getLine(d));
                        l.replaceRange(h + f, o(d)), l.replaceRange(u + h, o(e.line, 0));
                        var r = s.blockCommentLead || c.blockCommentLead;
                        if (null != r) for (var p = e.line + 1; p <= d; ++p) (p != d || n) && l.replaceRange(r + h, o(p, 0));
                      } else {
                        var m = 0 == a(l.getCursor("to"), t),
                          g = !l.somethingSelected();
                        l.replaceRange(f, t), m && l.setSelection(g ? t : l.getCursor("from"), t), l.replaceRange(u, e);
                      }
                    });
                }
              } else (s.lineComment || c.lineComment) && 0 != s.fullLines && l.lineComment(e, t, s);
            }),
            e.defineExtension("uncomment", function (e, t, a) {
              a || (a = r);
              var s,
                l = this,
                c = n(l, e),
                u = Math.min(0 != t.ch || t.line == e.line ? t.line : t.line - 1, l.lastLine()),
                f = Math.min(e.line, u),
                d = a.lineComment || c.lineComment,
                h = [],
                p = null == a.padding ? " " : a.padding;
              e: if (d) {
                for (var m = f; m <= u; ++m) {
                  var g = l.getLine(m),
                    v = g.indexOf(d);
                  if ((v > -1 && !/comment/.test(l.getTokenTypeAt(o(m, v + 1))) && (v = -1), -1 == v && i.test(g))) break e;
                  if (v > -1 && i.test(g.slice(0, v))) break e;
                  h.push(g);
                }
                if (
                  (l.operation(function () {
                    for (var e = f; e <= u; ++e) {
                      var t = h[e - f],
                        n = t.indexOf(d),
                        r = n + d.length;
                      n < 0 || (t.slice(r, r + p.length) == p && (r += p.length), (s = !0), l.replaceRange("", o(e, n), o(e, r)));
                    }
                  }),
                  s)
                )
                  return !0;
              }
              var y = a.blockCommentStart || c.blockCommentStart,
                b = a.blockCommentEnd || c.blockCommentEnd;
              if (!y || !b) return !1;
              var k = a.blockCommentLead || c.blockCommentLead,
                w = l.getLine(f),
                C = w.indexOf(y);
              if (-1 == C) return !1;
              var x = u == f ? w : l.getLine(u),
                S = x.indexOf(b, u == f ? C + y.length : 0),
                M = o(f, C + 1),
                L = o(u, S + 1);
              if (
                -1 == S ||
                !/comment/.test(l.getTokenTypeAt(M)) ||
                !/comment/.test(l.getTokenTypeAt(L)) ||
                l.getRange(M, L, "\n").indexOf(b) > -1
              )
                return !1;
              var T = w.lastIndexOf(y, e.ch),
                A = -1 == T ? -1 : w.slice(0, e.ch).indexOf(b, T + y.length);
              if (-1 != T && -1 != A && A + b.length != e.ch) return !1;
              A = x.indexOf(b, t.ch);
              var O = x.slice(t.ch).lastIndexOf(y, A - t.ch);
              return (
                (T = -1 == A || -1 == O ? -1 : t.ch + O),
                (-1 == A || -1 == T || T == t.ch) &&
                  (l.operation(function () {
                    l.replaceRange("", o(u, S - (p && x.slice(S - p.length, S) == p ? p.length : 0)), o(u, S + b.length));
                    var e = C + y.length;
                    if ((p && w.slice(e, e + p.length) == p && (e += p.length), l.replaceRange("", o(f, C), o(f, e)), k))
                      for (var t = f + 1; t <= u; ++t) {
                        var n = l.getLine(t),
                          r = n.indexOf(k);
                        if (-1 != r && !i.test(n.slice(0, r))) {
                          var a = r + k.length;
                          p && n.slice(a, a + p.length) == p && (a += p.length), l.replaceRange("", o(t, r), o(t, a));
                        }
                      }
                  }),
                  !0)
              );
            });
        })(n(4538));
      },
      2073: (e, t, n) => {
        !(function (e) {
          function t(t) {
            if (t.getOption("disableInput")) return e.Pass;
            for (var i, a = t.listSelections(), s = [], l = 0; l < a.length; l++) {
              var c = a[l].head;
              if (!/\bcomment\b/.test(t.getTokenTypeAt(c))) return e.Pass;
              var u = t.getModeAt(c);
              if (i) {
                if (i != u) return e.Pass;
              } else i = u;
              var f,
                d,
                h = null,
                p = i.blockCommentStart,
                m = i.lineComment;
              if (p && i.blockCommentContinue) {
                var g = (f = t.getLine(c.line)).lastIndexOf(i.blockCommentEnd, c.ch - i.blockCommentEnd.length);
                if (
                  (-1 != g && g == c.ch - i.blockCommentEnd.length) ||
                  (m && (d = f.lastIndexOf(m, c.ch - 1)) > -1 && /\bcomment\b/.test(t.getTokenTypeAt({ line: c.line, ch: d + 1 })))
                );
                else if (c.ch >= p.length && (d = f.lastIndexOf(p, c.ch - p.length)) > -1 && d > g)
                  if (n(0, f) >= d) h = f.slice(0, d);
                  else {
                    var v,
                      y = t.options.tabSize;
                    (d = e.countColumn(f, d, y)),
                      (h = t.options.indentWithTabs ? o.call("\t", (v = Math.floor(d / y))) + o.call(" ", d - y * v) : o.call(" ", d));
                  }
                else (d = f.indexOf(i.blockCommentContinue)) > -1 && d <= c.ch && d <= n(0, f) && (h = f.slice(0, d));
                null != h && (h += i.blockCommentContinue);
              }
              if (null == h && m && r(t))
                if ((null == f && (f = t.getLine(c.line)), (d = f.indexOf(m)), c.ch || d)) {
                  if (d > -1 && n(0, f) >= d) {
                    if (!(h = n(c.ch, f) > -1)) {
                      var b = t.getLine(c.line + 1) || "",
                        k = b.indexOf(m);
                      h = (k > -1 && n(0, b) >= k) || null;
                    }
                    h && (h = f.slice(0, d) + m + f.slice(d + m.length).match(/^\s*/)[0]);
                  }
                } else h = "";
              if (null == h) return e.Pass;
              s[l] = "\n" + h;
            }
            t.operation(function () {
              for (var e = a.length - 1; e >= 0; e--) t.replaceRange(s[e], a[e].from(), a[e].to(), "+insert");
            });
          }
          function n(e, t) {
            i.lastIndex = e;
            var n = i.exec(t);
            return n ? n.index : -1;
          }
          function r(e) {
            var t = e.getOption("continueComments");
            return !t || "object" != typeof t || !1 !== t.continueLineComment;
          }
          var i = /\S/g,
            o =
              "".repeat ||
              function (e) {
                return Array(e + 1).join(this);
              };
          e.defineOption("continueComments", null, function (n, r, i) {
            if ((i && i != e.Init && n.removeKeyMap("continueComment"), r)) {
              var o = "Enter";
              "string" == typeof r ? (o = r) : "object" == typeof r && r.key && (o = r.key);
              var a = { name: "continueComment" };
              (a[o] = t), n.addKeyMap(a);
            }
          });
        })(n(4538));
      },
      3489: (e, t, n) => {
        !(function (e) {
          function t(t, n, r) {
            var i,
              o = t.getWrapperElement();
            return (
              ((i = o.appendChild(document.createElement("div"))).className = r
                ? "CodeMirror-dialog CodeMirror-dialog-bottom"
                : "CodeMirror-dialog CodeMirror-dialog-top"),
              "string" == typeof n ? (i.innerHTML = n) : i.appendChild(n),
              e.addClass(o, "dialog-opened"),
              i
            );
          }
          function n(e, t) {
            e.state.currentNotificationClose && e.state.currentNotificationClose(), (e.state.currentNotificationClose = t);
          }
          e.defineExtension("openDialog", function (r, i, o) {
            function a(t) {
              if ("string" == typeof t) f.value = t;
              else {
                if (c) return;
                (c = !0), e.rmClass(l.parentNode, "dialog-opened"), l.parentNode.removeChild(l), u.focus(), o.onClose && o.onClose(l);
              }
            }
            o || (o = {}), n(this, null);
            var s,
              l = t(this, r, o.bottom),
              c = !1,
              u = this,
              f = l.getElementsByTagName("input")[0];
            return (
              f
                ? (f.focus(),
                  o.value && ((f.value = o.value), !1 !== o.selectValueOnOpen && f.select()),
                  o.onInput &&
                    e.on(f, "input", function (e) {
                      o.onInput(e, f.value, a);
                    }),
                  o.onKeyUp &&
                    e.on(f, "keyup", function (e) {
                      o.onKeyUp(e, f.value, a);
                    }),
                  e.on(f, "keydown", function (t) {
                    (o && o.onKeyDown && o.onKeyDown(t, f.value, a)) ||
                      ((27 == t.keyCode || (!1 !== o.closeOnEnter && 13 == t.keyCode)) && (f.blur(), e.e_stop(t), a()),
                      13 == t.keyCode && i(f.value, t));
                  }),
                  !1 !== o.closeOnBlur &&
                    e.on(l, "focusout", function (e) {
                      null !== e.relatedTarget && a();
                    }))
                : (s = l.getElementsByTagName("button")[0]) &&
                  (e.on(s, "click", function () {
                    a(), u.focus();
                  }),
                  !1 !== o.closeOnBlur && e.on(s, "blur", a),
                  s.focus()),
              a
            );
          }),
            e.defineExtension("openConfirm", function (r, i, o) {
              function a() {
                c ||
                  ((c = !0), e.rmClass(s.parentNode, "dialog-opened"), s.parentNode.removeChild(s), u.focus(), o.onClose && o.onClose(s));
              }
              o || (o = {}), n(this, null);
              var s = t(this, r, o.bottom),
                l = s.getElementsByTagName("button"),
                c = !1,
                u = this,
                f = 1;
              l[0].focus();
              for (var d = 0; d < l.length; ++d) {
                var h = l[d];
                !(function (t) {
                  e.on(h, "click", function (n) {
                    e.e_preventDefault(n), a(), t && t(u);
                  });
                })(i[d]),
                  !1 !== o.closeOnBlur &&
                    (e.on(h, "blur", function () {
                      --f,
                        setTimeout(function () {
                          f <= 0 && a();
                        }, 200);
                    }),
                    e.on(h, "focus", function () {
                      ++f;
                    }));
              }
              return (
                e.on(s, "keydown", function (e) {
                  !o.onKeyDown || o.onKeyDown(e, a);
                }),
                a
              );
            }),
            e.defineExtension("openNotification", function (r, i) {
              function o() {
                l || ((l = !0), clearTimeout(a), e.rmClass(s.parentNode, "dialog-opened"), s.parentNode.removeChild(s));
              }
              n(this, o);
              var a,
                s = t(this, r, i && i.bottom),
                l = !1,
                c = i && void 0 !== i.duration ? i.duration : 5e3;
              return (
                e.on(s, "click", function (t) {
                  e.e_preventDefault(t), o();
                }),
                c && (a = setTimeout(o, c)),
                o
              );
            });
        })(n(4538));
      },
      2172: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t;
          e.defineOption("autoTrimTrailingSpace", !1, function (e, r) {
            (t = r), r ? e.on("change", n) : !r && e.state.clearEmptyLines && e.off("change", n);
          }),
            (e.commands.trimTrailingSpacesIfEnabled = function (e) {
              t && r(e, !0, !0);
            });
          var n = function (t, n) {
              if ("undo" !== n.origin) {
                var r = e.changeEnd(n);
                t.getDoc().markText(n.from, r, { className: "user_change", history: !0 });
              }
            },
            r = function (t) {
              var n, r, i, o, a, s, l;
              t.getDoc()
                .getAllMarks()
                .forEach(function (c) {
                  if ("user_change" == c.className && (n = c.find()))
                    for (var u = n.from.line; u <= n.to.line; u++)
                      (r = t.getLine(u)) &&
                        (i = r.match(/\s+$/)) &&
                        (o = i[0].length) &&
                        ((a = r.length), (s = new e.Pos(u, a - o)), (l = new e.Pos(u, a)), t.replaceRange("", s, l, void 0));
                });
            };
        })(n(4538));
      },
      2446: (e, t, n) => {
        !(function (e) {
          function t(e) {
            return (e && e.bracketRegex) || /[(){}[\]]/;
          }
          function n(e, n, i) {
            var o = e.getLineHandle(n.line),
              a = n.ch - 1,
              c = i && i.afterCursor;
            null == c && (c = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));
            var u = t(i),
              f =
                (!c && a >= 0 && u.test(o.text.charAt(a)) && l[o.text.charAt(a)]) ||
                (u.test(o.text.charAt(a + 1)) && l[o.text.charAt(++a)]);
            if (!f) return null;
            var d = ">" == f.charAt(1) ? 1 : -1;
            if (i && i.strict && d > 0 != (a == n.ch)) return null;
            var h = e.getTokenTypeAt(s(n.line, a + 1)),
              p = r(e, s(n.line, a + (d > 0 ? 1 : 0)), d, h || null, i);
            return null == p ? null : { from: s(n.line, a), to: p && p.pos, match: p && p.ch == f.charAt(0), forward: d > 0 };
          }
          function r(e, n, r, i, o) {
            for (
              var a = (o && o.maxScanLineLength) || 1e4,
                c = (o && o.maxScanLines) || 1e3,
                u = [],
                f = t(o),
                d = r > 0 ? Math.min(n.line + c, e.lastLine() + 1) : Math.max(e.firstLine() - 1, n.line - c),
                h = n.line;
              h != d;
              h += r
            ) {
              var p = e.getLine(h);
              if (p) {
                var m = r > 0 ? 0 : p.length - 1,
                  g = r > 0 ? p.length : -1;
                if (!(p.length > a))
                  for (h == n.line && (m = n.ch - (r < 0 ? 1 : 0)); m != g; m += r) {
                    var v = p.charAt(m);
                    if (f.test(v) && (void 0 === i || e.getTokenTypeAt(s(h, m + 1)) == i)) {
                      var y = l[v];
                      if (y && (">" == y.charAt(1)) == r > 0) u.push(v);
                      else {
                        if (!u.length) return { pos: s(h, m), ch: v };
                        u.pop();
                      }
                    }
                  }
              }
            }
            return h - r != (r > 0 ? e.lastLine() : e.firstLine()) && null;
          }
          function i(e, t, r) {
            for (var i = e.state.matchBrackets.maxHighlightLineLength || 1e3, o = [], l = e.listSelections(), c = 0; c < l.length; c++) {
              var u = l[c].empty() && n(e, l[c].head, r);
              if (u && e.getLine(u.from.line).length <= i) {
                var f = u.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                o.push(e.markText(u.from, s(u.from.line, u.from.ch + 1), { className: f })),
                  u.to && e.getLine(u.to.line).length <= i && o.push(e.markText(u.to, s(u.to.line, u.to.ch + 1), { className: f }));
              }
            }
            if (o.length) {
              a && e.state.focused && e.focus();
              var d = function () {
                e.operation(function () {
                  for (var e = 0; e < o.length; e++) o[e].clear();
                });
              };
              if (!t) return d;
              setTimeout(d, 800);
            }
          }
          function o(e) {
            e.operation(function () {
              e.state.matchBrackets.currentlyHighlighted &&
                (e.state.matchBrackets.currentlyHighlighted(), (e.state.matchBrackets.currentlyHighlighted = null)),
                (e.state.matchBrackets.currentlyHighlighted = i(e, !1, e.state.matchBrackets));
            });
          }
          var a = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8),
            s = e.Pos,
            l = { "(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<" };
          e.defineOption("matchBrackets", !1, function (t, n, r) {
            function i(e) {
              e.state.matchBrackets &&
                e.state.matchBrackets.currentlyHighlighted &&
                (e.state.matchBrackets.currentlyHighlighted(), (e.state.matchBrackets.currentlyHighlighted = null));
            }
            r && r != e.Init && (t.off("cursorActivity", o), t.off("focus", o), t.off("blur", i), i(t)),
              n && ((t.state.matchBrackets = "object" == typeof n ? n : {}), t.on("cursorActivity", o), t.on("focus", o), t.on("blur", i));
          }),
            e.defineExtension("matchBrackets", function () {
              i(this, !0);
            }),
            e.defineExtension("findMatchingBracket", function (e, t, r) {
              return (r || "boolean" == typeof t) && (r ? ((r.strict = t), (t = r)) : (t = t ? { strict: !0 } : null)), n(this, e, t);
            }),
            e.defineExtension("scanForBracket", function (e, t, n, i) {
              return r(this, e, t, n, i);
            });
        })(n(4538));
      },
      8095: (e, t, n) => {
        var r;
        (r = n(4538)).defineOption("showTrailingSpace", !1, function (e, t, n) {
          n == r.Init && (n = !1),
            n && !t
              ? e.removeOverlay("trailingspace")
              : !n &&
                t &&
                e.addOverlay({
                  token: function (e) {
                    for (var t = e.string.length, n = t; n && /\s/.test(e.string.charAt(n - 1)); --n);
                    return n > e.pos ? ((e.pos = n), null) : ((e.pos = t), "trailingspace");
                  },
                  name: "trailingspace"
                });
        });
      },
      7440: (e, t, n) => {
        !(function (e) {
          "use strict";
          e.registerHelper("fold", "brace", function (t, n) {
            function r(r) {
              for (var s = n.ch, l = 0; ; ) {
                var c = s <= 0 ? -1 : a.lastIndexOf(r, s - 1);
                if (-1 != c) {
                  if (1 == l && c < n.ch) break;
                  if (((i = t.getTokenTypeAt(e.Pos(o, c + 1))), !/^(comment|string)/.test(i))) return c + 1;
                  s = c - 1;
                } else {
                  if (1 == l) break;
                  (l = 1), (s = a.length);
                }
              }
            }
            var i,
              o = n.line,
              a = t.getLine(o),
              s = "{",
              l = "}",
              c = r("{");
            if ((null == c && ((s = "["), (l = "]"), (c = r("["))), null != c)) {
              var u,
                f,
                d = 1,
                h = t.lastLine();
              e: for (var p = o; p <= h; ++p)
                for (var m = t.getLine(p), g = p == o ? c : 0; ; ) {
                  var v = m.indexOf(s, g),
                    y = m.indexOf(l, g);
                  if ((v < 0 && (v = m.length), y < 0 && (y = m.length), (g = Math.min(v, y)) == m.length)) break;
                  if (t.getTokenTypeAt(e.Pos(p, g + 1)) == i)
                    if (g == v) ++d;
                    else if (!--d) {
                      (u = p), (f = g);
                      break e;
                    }
                  ++g;
                }
              if (null != u && o != u) return { from: e.Pos(o, c), to: e.Pos(u, f) };
            }
          }),
            e.registerHelper("fold", "import", function (t, n) {
              function r(n) {
                if (n < t.firstLine() || n > t.lastLine()) return null;
                var r = t.getTokenAt(e.Pos(n, 1));
                if ((/\S/.test(r.string) || (r = t.getTokenAt(e.Pos(n, r.end + 1))), "keyword" != r.type || "import" != r.string))
                  return null;
                for (var i = n, o = Math.min(t.lastLine(), n + 10); i <= o; ++i) {
                  var a = t.getLine(i).indexOf(";");
                  if (-1 != a) return { startCh: r.end, end: e.Pos(i, a) };
                }
              }
              var i,
                o = n.line,
                a = r(o);
              if (!a || r(o - 1) || ((i = r(o - 2)) && i.end.line == o - 1)) return null;
              for (var s = a.end; ; ) {
                var l = r(s.line + 1);
                if (null == l) break;
                s = l.end;
              }
              return { from: t.clipPos(e.Pos(o, a.startCh + 1)), to: s };
            }),
            e.registerHelper("fold", "include", function (t, n) {
              function r(n) {
                if (n < t.firstLine() || n > t.lastLine()) return null;
                var r = t.getTokenAt(e.Pos(n, 1));
                return (
                  /\S/.test(r.string) || (r = t.getTokenAt(e.Pos(n, r.end + 1))),
                  "meta" == r.type && "#include" == r.string.slice(0, 8) ? r.start + 8 : void 0
                );
              }
              var i = n.line,
                o = r(i);
              if (null == o || null != r(i - 1)) return null;
              for (var a = i; null != r(a + 1); ) ++a;
              return { from: e.Pos(i, o + 1), to: t.clipPos(e.Pos(a)) };
            });
        })(n(4538));
      },
      7544: (e, t, n) => {
        !(function (e) {
          "use strict";
          e.registerGlobalHelper(
            "fold",
            "comment",
            function (e) {
              return e.blockCommentStart && e.blockCommentEnd;
            },
            function (t, n) {
              var r = t.getModeAt(n),
                i = r.blockCommentStart,
                o = r.blockCommentEnd;
              if (i && o) {
                for (var a, s = n.line, l = t.getLine(s), c = n.ch, u = 0; ; ) {
                  var f = c <= 0 ? -1 : l.lastIndexOf(i, c - 1);
                  if (-1 != f) {
                    if (1 == u && f < n.ch) return;
                    if (
                      /comment/.test(t.getTokenTypeAt(e.Pos(s, f + 1))) &&
                      (0 == f || l.slice(f - o.length, f) == o || !/comment/.test(t.getTokenTypeAt(e.Pos(s, f))))
                    ) {
                      a = f + i.length;
                      break;
                    }
                    c = f - 1;
                  } else {
                    if (1 == u) return;
                    (u = 1), (c = l.length);
                  }
                }
                var d,
                  h,
                  p = 1,
                  m = t.lastLine();
                e: for (var g = s; g <= m; ++g)
                  for (var v = t.getLine(g), y = g == s ? a : 0; ; ) {
                    var b = v.indexOf(i, y),
                      k = v.indexOf(o, y);
                    if ((b < 0 && (b = v.length), k < 0 && (k = v.length), (y = Math.min(b, k)) == v.length)) break;
                    if (y == b) ++p;
                    else if (!--p) {
                      (d = g), (h = y);
                      break e;
                    }
                    ++y;
                  }
                if (null != d && (s != d || h != a)) return { from: e.Pos(s, a), to: e.Pos(d, h) };
              }
            }
          );
        })(n(4538));
      },
      7297: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(t, r, i, o) {
            function a(e) {
              var n = s(t, r);
              if (!n || n.to.line - n.from.line < l) return null;
              for (var i = t.findMarksAt(n.from), a = 0; a < i.length; ++a)
                if (i[a].__isFold && "fold" !== o) {
                  if (!e) return null;
                  (n.cleared = !0), i[a].clear();
                }
              return n;
            }
            if (i && i.call) {
              var s = i;
              i = null;
            } else s = n(t, i, "rangeFinder");
            "number" == typeof r && (r = e.Pos(r, 0));
            var l = n(t, i, "minFoldSize"),
              c = a(!0);
            if (n(t, i, "scanUp")) for (; !c && r.line > t.firstLine(); ) (r = e.Pos(r.line - 1, 0)), (c = a(!1));
            if (c && !c.cleared && "unfold" !== o) {
              var u = (function (e, t, r) {
                var i = n(e, t, "widget");
                if (("function" == typeof i && (i = i(r.from, r.to)), "string" == typeof i)) {
                  var o = document.createTextNode(i);
                  (i = document.createElement("span")).appendChild(o), (i.className = "CodeMirror-foldmarker");
                } else i && (i = i.cloneNode(!0));
                return i;
              })(t, i, c);
              e.on(u, "mousedown", function (t) {
                f.clear(), e.e_preventDefault(t);
              });
              var f = t.markText(c.from, c.to, { replacedWith: u, clearOnEnter: n(t, i, "clearOnEnter"), __isFold: !0 });
              f.on("clear", function (n, r) {
                e.signal(t, "unfold", t, n, r);
              }),
                e.signal(t, "fold", t, c.from, c.to);
            }
          }
          function n(e, t, n) {
            if (t && void 0 !== t[n]) return t[n];
            var i = e.options.foldOptions;
            return i && void 0 !== i[n] ? i[n] : r[n];
          }
          (e.newFoldFunction = function (e, n) {
            return function (r, i) {
              t(r, i, { rangeFinder: e, widget: n });
            };
          }),
            e.defineExtension("foldCode", function (e, n, r) {
              t(this, e, n, r);
            }),
            e.defineExtension("isFolded", function (e) {
              for (var t = this.findMarksAt(e), n = 0; n < t.length; ++n) if (t[n].__isFold) return !0;
            }),
            (e.commands.toggleFold = function (e) {
              e.foldCode(e.getCursor());
            }),
            (e.commands.fold = function (e) {
              e.foldCode(e.getCursor(), null, "fold");
            }),
            (e.commands.unfold = function (e) {
              e.foldCode(e.getCursor(), null, "unfold");
            }),
            (e.commands.foldAll = function (t) {
              t.operation(function () {
                for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) t.foldCode(e.Pos(n, 0), null, "fold");
              });
            }),
            (e.commands.unfoldAll = function (t) {
              t.operation(function () {
                for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) t.foldCode(e.Pos(n, 0), null, "unfold");
              });
            }),
            e.registerHelper("fold", "combine", function () {
              var e = [].slice.call(arguments, 0);
              return function (t, n) {
                for (var r = 0; r < e.length; ++r) {
                  var i = e[r](t, n);
                  if (i) return i;
                }
              };
            }),
            e.registerHelper("fold", "auto", function (e, t) {
              for (var n = e.getHelpers(t, "fold"), r = 0; r < n.length; r++) {
                var i = n[r](e, t);
                if (i) return i;
              }
            });
          var r = { rangeFinder: e.fold.auto, widget: "↔", minFoldSize: 0, scanUp: !1, clearOnEnter: !0 };
          e.defineOption("foldOptions", null),
            e.defineExtension("foldOption", function (e, t) {
              return n(this, e, t);
            });
        })(n(4538));
      },
      3170: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            (this.options = e), (this.from = this.to = 0);
          }
          function n(e, t) {
            for (var n = e.findMarks(f(t, 0), f(t + 1, 0)), r = 0; r < n.length; ++r)
              if (n[r].__isFold) {
                var i = n[r].find(-1);
                if (i && i.line === t) return n[r];
              }
          }
          function r(e) {
            if ("string" == typeof e) {
              var t = document.createElement("div");
              return (t.className = e + " CodeMirror-guttermarker-subtle"), t;
            }
            return e.cloneNode(!0);
          }
          function i(e, t, i) {
            var a = e.state.foldGutter.options,
              s = t - 1,
              l = e.foldOption(a, "minFoldSize"),
              c = e.foldOption(a, "rangeFinder"),
              u = "string" == typeof a.indicatorFolded && o(a.indicatorFolded),
              d = "string" == typeof a.indicatorOpen && o(a.indicatorOpen);
            e.eachLine(t, i, function (t) {
              ++s;
              var i = null,
                o = t.gutterMarkers;
              if ((o && (o = o[a.gutter]), n(e, s))) {
                if (u && o && u.test(o.className)) return;
                i = r(a.indicatorFolded);
              } else {
                var h = f(s, 0),
                  p = c && c(e, h);
                if (p && p.to.line - p.from.line >= l) {
                  if (d && o && d.test(o.className)) return;
                  i = r(a.indicatorOpen);
                }
              }
              (i || o) && e.setGutterMarker(t, a.gutter, i);
            });
          }
          function o(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
          }
          function a(e) {
            var t = e.getViewport(),
              n = e.state.foldGutter;
            n &&
              (e.operation(function () {
                i(e, t.from, t.to);
              }),
              (n.from = t.from),
              (n.to = t.to));
          }
          function s(e, t, r) {
            var i = e.state.foldGutter;
            if (i) {
              var o = i.options;
              if (r == o.gutter) {
                var a = n(e, t);
                a ? a.clear() : e.foldCode(f(t, 0), o);
              }
            }
          }
          function l(e) {
            var t = e.state.foldGutter;
            if (t) {
              var n = t.options;
              (t.from = t.to = 0),
                clearTimeout(t.changeUpdate),
                (t.changeUpdate = setTimeout(function () {
                  a(e);
                }, n.foldOnChangeTimeSpan || 600));
            }
          }
          function c(e) {
            var t = e.state.foldGutter;
            if (t) {
              var n = t.options;
              clearTimeout(t.changeUpdate),
                (t.changeUpdate = setTimeout(function () {
                  var n = e.getViewport();
                  t.from == t.to || n.from - t.to > 20 || t.from - n.to > 20
                    ? a(e)
                    : e.operation(function () {
                        n.from < t.from && (i(e, n.from, t.from), (t.from = n.from)), n.to > t.to && (i(e, t.to, n.to), (t.to = n.to));
                      });
                }, n.updateViewportTimeSpan || 400));
            }
          }
          function u(e, t) {
            var n = e.state.foldGutter;
            if (n) {
              var r = t.line;
              r >= n.from && r < n.to && i(e, r, r + 1);
            }
          }
          e.defineOption("foldGutter", !1, function (n, r, i) {
            var o;
            i &&
              i != e.Init &&
              (n.clearGutter(n.state.foldGutter.options.gutter),
              (n.state.foldGutter = null),
              n.off("gutterClick", s),
              n.off("changes", l),
              n.off("viewportChange", c),
              n.off("fold", u),
              n.off("unfold", u),
              n.off("swapDoc", l)),
              r &&
                ((n.state.foldGutter = new t(
                  (!0 === (o = r) && (o = {}),
                  null == o.gutter && (o.gutter = "CodeMirror-foldgutter"),
                  null == o.indicatorOpen && (o.indicatorOpen = "CodeMirror-foldgutter-open"),
                  null == o.indicatorFolded && (o.indicatorFolded = "CodeMirror-foldgutter-folded"),
                  o)
                )),
                a(n),
                n.on("gutterClick", s),
                n.on("changes", l),
                n.on("viewportChange", c),
                n.on("fold", u),
                n.on("unfold", u),
                n.on("swapDoc", l));
          });
          var f = e.Pos;
        })(n(4538), n(7297));
      },
      2048: (e, t, n) => {
        !(function (e) {
          function t(e, t) {
            for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
          }
          function n(t, n, r, a) {
            var s = t.getCursor(),
              l = r(t, s);
            if (!/\b(?:string|comment)\b/.test(l.type)) {
              var c = e.innerMode(t.getMode(), l.state);
              if ("json" !== c.mode.helperType) {
                (l.state = c.state),
                  /^[\w$_]*$/.test(l.string)
                    ? l.end > s.ch && ((l.end = s.ch), (l.string = l.string.slice(0, s.ch - l.start)))
                    : (l = { start: s.ch, end: s.ch, string: "", state: l.state, type: "." == l.string ? "property" : null });
                for (var u = l; "property" == u.type; ) {
                  if ("." != (u = r(t, o(s.line, u.start))).string) return;
                  if (((u = r(t, o(s.line, u.start))), !f)) var f = [];
                  f.push(u);
                }
                return { list: i(l, f, n, a), from: o(s.line, l.start), to: o(s.line, l.end) };
              }
            }
          }
          function r(e, t) {
            var n = e.getTokenAt(t);
            return (
              t.ch == n.start + 1 && "." == n.string.charAt(0)
                ? ((n.end = n.start), (n.string = "."), (n.type = "property"))
                : /^\.[\w$_]*$/.test(n.string) && ((n.type = "property"), n.start++, (n.string = n.string.replace(/\./, ""))),
              n
            );
          }
          function i(e, n, r, i) {
            function o(e) {
              0 != e.lastIndexOf(f, 0) ||
                (function (e, t) {
                  if (![].indexOf) {
                    for (var n = e.length; n--; ) if (e[n] === t) return !0;
                    return !1;
                  }
                  return -1 != e.indexOf(t);
                })(u, e) ||
                u.push(e);
            }
            function c(e) {
              "string" == typeof e ? t(a, o) : e instanceof Array ? t(s, o) : e instanceof Function && t(l, o),
                (function (e, t) {
                  if (Object.getOwnPropertyNames && Object.getPrototypeOf)
                    for (var n = e; n; n = Object.getPrototypeOf(n)) Object.getOwnPropertyNames(n).forEach(t);
                  else for (var r in e) t(r);
                })(e, o);
            }
            var u = [],
              f = e.string,
              d = (i && i.globalScope) || window;
            if (n && n.length) {
              var h,
                p = n.pop();
              for (
                p.type && 0 === p.type.indexOf("variable")
                  ? (i && i.additionalContext && (h = i.additionalContext[p.string]),
                    (i && !1 === i.useGlobalScope) || (h = h || d[p.string]))
                  : "string" == p.type
                  ? (h = "")
                  : "atom" == p.type
                  ? (h = 1)
                  : "function" == p.type &&
                    (null == d.jQuery || ("$" != p.string && "jQuery" != p.string) || "function" != typeof d.jQuery
                      ? null != d._ && "_" == p.string && "function" == typeof d._ && (h = d._())
                      : (h = d.jQuery()));
                null != h && n.length;

              )
                h = h[n.pop().string];
              null != h && c(h);
            } else {
              for (var m = e.state.localVars; m; m = m.next) o(m.name);
              for (var g = e.state.context; g; g = g.prev) for (m = g.vars; m; m = m.next) o(m.name);
              for (m = e.state.globalVars; m; m = m.next) o(m.name);
              if (i && null != i.additionalContext) for (var v in i.additionalContext) o(v);
              (i && !1 === i.useGlobalScope) || c(d), t(r, o);
            }
            return u;
          }
          var o = e.Pos;
          e.registerHelper("hint", "javascript", function (e, t) {
            var r = c;
            return (
              t.keywords && (r = r.concat(t.keywords)),
              n(
                e,
                r,
                function (e, t) {
                  return e.getTokenAt(t);
                },
                t
              )
            );
          }),
            e.registerHelper("hint", "coffeescript", function (e, t) {
              return n(e, u, r, t);
            });
          var a =
              "charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(
                " "
              ),
            s =
              "length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(
                " "
              ),
            l = "prototype apply call bind".split(" "),
            c =
              "break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(
                " "
              ),
            u =
              "and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(
                " "
              );
        })(n(4538));
      },
      3660: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e, t) {
            (this.cm = e),
              (this.options = t),
              (this.widget = null),
              (this.debounce = 0),
              (this.tick = 0),
              (this.startPos = this.cm.getCursor("start")),
              (this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length);
            var n = this;
            e.on(
              "cursorActivity",
              (this.activityFunc = function () {
                n.cursorActivity();
              })
            );
          }
          function n(e) {
            return "string" == typeof e ? e : e.text;
          }
          function r(e, t) {
            for (; t && t != e; ) {
              if ("LI" === t.nodeName.toUpperCase() && t.parentNode == e) return t;
              t = t.parentNode;
            }
          }
          function i(t, i) {
            (this.completion = t), (this.data = i), (this.picked = !1);
            var o = this,
              l = t.cm,
              c = l.getInputField().ownerDocument,
              u = c.defaultView || c.parentWindow,
              f = (this.hints = c.createElement("ul")),
              d = t.cm.options.theme;
            (f.className = "CodeMirror-hints " + d), (this.selectedHint = i.selectedHint || 0);
            for (var h = i.list, p = 0; p < h.length; ++p) {
              var m = f.appendChild(c.createElement("li")),
                g = h[p],
                v = a + (p != this.selectedHint ? "" : " " + s);
              null != g.className && (v = g.className + " " + v),
                (m.className = v),
                g.render ? g.render(m, i, g) : m.appendChild(c.createTextNode(g.displayText || n(g))),
                (m.hintId = p);
            }
            var y = t.options.container || c.body,
              b = l.cursorCoords(t.options.alignWithWord ? i.from : null),
              k = b.left,
              w = b.bottom,
              C = !0,
              x = 0,
              S = 0;
            if (y !== c.body) {
              var M = -1 !== ["absolute", "relative", "fixed"].indexOf(u.getComputedStyle(y).position) ? y : y.offsetParent,
                L = M.getBoundingClientRect(),
                T = c.body.getBoundingClientRect();
              (x = L.left - T.left - M.scrollLeft), (S = L.top - T.top - M.scrollTop);
            }
            (f.style.left = k - x + "px"), (f.style.top = w - S + "px");
            var A = u.innerWidth || Math.max(c.body.offsetWidth, c.documentElement.offsetWidth),
              O = u.innerHeight || Math.max(c.body.offsetHeight, c.documentElement.offsetHeight);
            y.appendChild(f);
            var N = f.getBoundingClientRect(),
              E = N.bottom - O,
              P = f.scrollHeight > f.clientHeight + 1,
              I = l.getScrollInfo();
            if (E > 0) {
              var R = N.bottom - N.top;
              if (b.top - (b.bottom - N.top) - R > 0) (f.style.top = (w = b.top - R - S) + "px"), (C = !1);
              else if (R > O) {
                (f.style.height = O - 5 + "px"), (f.style.top = (w = b.bottom - N.top - S) + "px");
                var B = l.getCursor();
                i.from.ch != B.ch && ((b = l.cursorCoords(B)), (f.style.left = (k = b.left - x) + "px"), (N = f.getBoundingClientRect()));
              }
            }
            var H,
              D = N.right - A;
            if (
              (D > 0 &&
                (N.right - N.left > A && ((f.style.width = A - 5 + "px"), (D -= N.right - N.left - A)),
                (f.style.left = (k = b.left - D - x) + "px")),
              P)
            )
              for (var F = f.firstChild; F; F = F.nextSibling) F.style.paddingRight = l.display.nativeBarWidth + "px";
            return (
              l.addKeyMap(
                (this.keyMap = (function (e, t) {
                  function n(e, n) {
                    var i;
                    (i =
                      "string" != typeof n
                        ? function (e) {
                            return n(e, t);
                          }
                        : r.hasOwnProperty(n)
                        ? r[n]
                        : n),
                      (o[e] = i);
                  }
                  var r = {
                    Up: function () {
                      t.moveFocus(-1);
                    },
                    Down: function () {
                      t.moveFocus(1);
                    },
                    PageUp: function () {
                      t.moveFocus(1 - t.menuSize(), !0);
                    },
                    PageDown: function () {
                      t.moveFocus(t.menuSize() - 1, !0);
                    },
                    Home: function () {
                      t.setFocus(0);
                    },
                    End: function () {
                      t.setFocus(t.length - 1);
                    },
                    Enter: t.pick,
                    Tab: t.pick,
                    Esc: t.close
                  };
                  /Mac/.test(navigator.platform) &&
                    ((r["Ctrl-P"] = function () {
                      t.moveFocus(-1);
                    }),
                    (r["Ctrl-N"] = function () {
                      t.moveFocus(1);
                    }));
                  var i = e.options.customKeys,
                    o = i ? {} : r;
                  if (i) for (var a in i) i.hasOwnProperty(a) && n(a, i[a]);
                  var s = e.options.extraKeys;
                  if (s) for (var a in s) s.hasOwnProperty(a) && n(a, s[a]);
                  return o;
                })(t, {
                  moveFocus: function (e, t) {
                    o.changeActive(o.selectedHint + e, t);
                  },
                  setFocus: function (e) {
                    o.changeActive(e);
                  },
                  menuSize: function () {
                    return o.screenAmount();
                  },
                  length: h.length,
                  close: function () {
                    t.close();
                  },
                  pick: function () {
                    o.pick();
                  },
                  data: i
                }))
              ),
              t.options.closeOnUnfocus &&
                (l.on(
                  "blur",
                  (this.onBlur = function () {
                    H = setTimeout(function () {
                      t.close();
                    }, 100);
                  })
                ),
                l.on(
                  "focus",
                  (this.onFocus = function () {
                    clearTimeout(H);
                  })
                )),
              l.on(
                "scroll",
                (this.onScroll = function () {
                  var e = l.getScrollInfo(),
                    n = l.getWrapperElement().getBoundingClientRect(),
                    r = w + I.top - e.top,
                    i = r - (u.pageYOffset || (c.documentElement || c.body).scrollTop);
                  if ((C || (i += f.offsetHeight), i <= n.top || i >= n.bottom)) return t.close();
                  (f.style.top = r + "px"), (f.style.left = k + I.left - e.left + "px");
                })
              ),
              e.on(f, "dblclick", function (e) {
                var t = r(f, e.target || e.srcElement);
                t && null != t.hintId && (o.changeActive(t.hintId), o.pick());
              }),
              e.on(f, "click", function (e) {
                var n = r(f, e.target || e.srcElement);
                n && null != n.hintId && (o.changeActive(n.hintId), t.options.completeOnSingleClick && o.pick());
              }),
              e.on(f, "mousedown", function () {
                setTimeout(function () {
                  l.focus();
                }, 20);
              }),
              this.scrollToActive(),
              e.signal(i, "select", h[this.selectedHint], f.childNodes[this.selectedHint]),
              !0
            );
          }
          function o(e, t, n, r) {
            if (e.async) e(t, r, n);
            else {
              var i = e(t, n);
              i && i.then ? i.then(r) : r(i);
            }
          }
          var a = "CodeMirror-hint",
            s = "CodeMirror-hint-active";
          (e.showHint = function (e, t, n) {
            if (!t) return e.showHint(n);
            n && n.async && (t.async = !0);
            var r = { hint: t };
            if (n) for (var i in n) r[i] = n[i];
            return e.showHint(r);
          }),
            e.defineExtension("showHint", function (n) {
              n = (function (e, t, n) {
                var r = e.options.hintOptions,
                  i = {};
                for (var o in u) i[o] = u[o];
                if (r) for (var o in r) void 0 !== r[o] && (i[o] = r[o]);
                if (n) for (var o in n) void 0 !== n[o] && (i[o] = n[o]);
                return i.hint.resolve && (i.hint = i.hint.resolve(e, t)), i;
              })(this, this.getCursor("start"), n);
              var r = this.listSelections();
              if (!(r.length > 1)) {
                if (this.somethingSelected()) {
                  if (!n.hint.supportsSelection) return;
                  for (var i = 0; i < r.length; i++) if (r[i].head.line != r[i].anchor.line) return;
                }
                this.state.completionActive && this.state.completionActive.close();
                var o = (this.state.completionActive = new t(this, n));
                o.options.hint && (e.signal(this, "startCompletion", this), o.update(!0));
              }
            }),
            e.defineExtension("closeHint", function () {
              this.state.completionActive && this.state.completionActive.close();
            });
          var l =
              window.requestAnimationFrame ||
              function (e) {
                return setTimeout(e, 1e3 / 60);
              },
            c = window.cancelAnimationFrame || clearTimeout;
          (t.prototype = {
            close: function () {
              this.active() &&
                ((this.cm.state.completionActive = null),
                (this.tick = null),
                this.cm.off("cursorActivity", this.activityFunc),
                this.widget && this.data && e.signal(this.data, "close"),
                this.widget && this.widget.close(),
                e.signal(this.cm, "endCompletion", this.cm));
            },
            active: function () {
              return this.cm.state.completionActive == this;
            },
            pick: function (t, r) {
              var i = t.list[r],
                o = this;
              this.cm.operation(function () {
                i.hint ? i.hint(o.cm, t, i) : o.cm.replaceRange(n(i), i.from || t.from, i.to || t.to, "complete"),
                  e.signal(t, "pick", i),
                  o.cm.scrollIntoView();
              }),
                this.close();
            },
            cursorActivity: function () {
              this.debounce && (c(this.debounce), (this.debounce = 0));
              var e = this.startPos;
              this.data && (e = this.data.from);
              var t = this.cm.getCursor(),
                n = this.cm.getLine(t.line);
              if (
                t.line != this.startPos.line ||
                n.length - t.ch != this.startLen - this.startPos.ch ||
                t.ch < e.ch ||
                this.cm.somethingSelected() ||
                !t.ch ||
                this.options.closeCharacters.test(n.charAt(t.ch - 1))
              )
                this.close();
              else {
                var r = this;
                (this.debounce = l(function () {
                  r.update();
                })),
                  this.widget && this.widget.disable();
              }
            },
            update: function (e) {
              if (null != this.tick) {
                var t = this,
                  n = ++this.tick;
                o(this.options.hint, this.cm, this.options, function (r) {
                  t.tick == n && t.finishUpdate(r, e);
                });
              }
            },
            finishUpdate: function (t, n) {
              this.data && e.signal(this.data, "update");
              var r = (this.widget && this.widget.picked) || (n && this.options.completeSingle);
              this.widget && this.widget.close(),
                (this.data = t),
                t && t.list.length && (r && 1 == t.list.length ? this.pick(t, 0) : ((this.widget = new i(this, t)), e.signal(t, "shown")));
            }
          }),
            (i.prototype = {
              close: function () {
                if (this.completion.widget == this) {
                  (this.completion.widget = null),
                    this.hints.parentNode.removeChild(this.hints),
                    this.completion.cm.removeKeyMap(this.keyMap);
                  var e = this.completion.cm;
                  this.completion.options.closeOnUnfocus && (e.off("blur", this.onBlur), e.off("focus", this.onFocus)),
                    e.off("scroll", this.onScroll);
                }
              },
              disable: function () {
                this.completion.cm.removeKeyMap(this.keyMap);
                var e = this;
                (this.keyMap = {
                  Enter: function () {
                    e.picked = !0;
                  }
                }),
                  this.completion.cm.addKeyMap(this.keyMap);
              },
              pick: function () {
                this.completion.pick(this.data, this.selectedHint);
              },
              changeActive: function (t, n) {
                if (
                  (t >= this.data.list.length ? (t = n ? this.data.list.length - 1 : 0) : t < 0 && (t = n ? 0 : this.data.list.length - 1),
                  this.selectedHint != t)
                ) {
                  var r = this.hints.childNodes[this.selectedHint];
                  r && (r.className = r.className.replace(" " + s, "")),
                    ((r = this.hints.childNodes[(this.selectedHint = t)]).className += " " + s),
                    this.scrollToActive(),
                    e.signal(this.data, "select", this.data.list[this.selectedHint], r);
                }
              },
              scrollToActive: function () {
                var e = this.completion.options.scrollMargin || 0,
                  t = this.hints.childNodes[Math.max(0, this.selectedHint - e)],
                  n = this.hints.childNodes[Math.min(this.data.list.length - 1, this.selectedHint + e)],
                  r = this.hints.firstChild;
                t.offsetTop < this.hints.scrollTop
                  ? (this.hints.scrollTop = t.offsetTop - r.offsetTop)
                  : n.offsetTop + n.offsetHeight > this.hints.scrollTop + this.hints.clientHeight &&
                    (this.hints.scrollTop = n.offsetTop + n.offsetHeight - this.hints.clientHeight + r.offsetTop);
              },
              screenAmount: function () {
                return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
              }
            }),
            e.registerHelper("hint", "auto", {
              resolve: function (t, n) {
                var r,
                  i = t.getHelpers(n, "hint");
                if (i.length) {
                  var a = function (e, t, n) {
                    var r = (function (e, t) {
                      if (!e.somethingSelected()) return t;
                      for (var n = [], r = 0; r < t.length; r++) t[r].supportsSelection && n.push(t[r]);
                      return n;
                    })(e, i);
                    !(function i(a) {
                      if (a == r.length) return t(null);
                      o(r[a], e, n, function (e) {
                        e && e.list.length > 0 ? t(e) : i(a + 1);
                      });
                    })(0);
                  };
                  return (a.async = !0), (a.supportsSelection = !0), a;
                }
                return (r = t.getHelper(t.getCursor(), "hintWords"))
                  ? function (t) {
                      return e.hint.fromList(t, { words: r });
                    }
                  : e.hint.anyword
                  ? function (t, n) {
                      return e.hint.anyword(t, n);
                    }
                  : function () {};
              }
            }),
            e.registerHelper("hint", "fromList", function (t, n) {
              var r,
                i = t.getCursor(),
                o = t.getTokenAt(i),
                a = e.Pos(i.line, o.start),
                s = i;
              o.start < i.ch && /\w/.test(o.string.charAt(i.ch - o.start - 1))
                ? (r = o.string.substr(0, i.ch - o.start))
                : ((r = ""), (a = i));
              for (var l = [], c = 0; c < n.words.length; c++) {
                var u = n.words[c];
                u.slice(0, r.length) == r && l.push(u);
              }
              if (l.length)
                return {
                  list: l,
                  from: a,
                  to: s
                };
            }),
            (e.commands.autocomplete = e.showHint);
          var u = {
            hint: e.hint.auto,
            completeSingle: !0,
            alignWithWord: !0,
            closeCharacters: /[\s()\[\]{};:>,]/,
            closeOnUnfocus: !0,
            completeOnSingleClick: !0,
            container: null,
            customKeys: null,
            extraKeys: null
          };
          e.defineOption("hintOptions", null);
        })(n(4538));
      },
      4698: (e, t, n) => {
        var r;
        (r = n(4538)).defineOption("specifyMoreJsTokens", !1, function (e, t, n) {
          n == r.Init && (n = !1),
            n && !t
              ? e.removeOverlay("jstoken")
              : !n &&
                t &&
                e.addOverlay({
                  token: function (e) {
                    var t,
                      n = {
                        "js-function-def":
                          /(["']{1,1}[^\r\n\t'"]*["']{1,1}[\s\t\r\n]*:|[$a-zA-Z_0-9]+[\s\t\r\n]*:|[a-zA-Z_0-9]+[\s\t\r\n]*=)?[\s\t\r\n]*function[\s\t\r\n]*([$a-zA-Z_0-9]*)[\s\t\r\n]*\([\s\t\r\n]*([a-zA-Z_0-9,$\s\r\n\t]*)[\s\t\r\n]*\)/g,
                        "js-var": /var /g,
                        "js-well-known": /window|document|Math|Number|String|Object|Array/g,
                        "global-property": /eval|alert|prompt|confirm/g
                      },
                      r = e.string.length,
                      i = Object.keys(n),
                      o = { index: r };
                    for (
                      t = 0;
                      t < i.length &&
                      ((n[i[t]].lastIndex = e.pos),
                      (p = n[i[t]].exec(e.string)),
                      !(p && p.index < o.index && ((o = { index: p.index, i: t, len: p[0].length }), p.index == e.pos)));
                      t++
                    );
                    if (o.index == r) e.skipToEnd();
                    else {
                      if (o.index == e.pos) return (e.pos += o.len || 1), i[o.i];
                      e.pos = o.index;
                    }
                  },
                  name: "jstoken"
                });
        }),
          (function (e) {
            e.defineOption("specifyMoreJsTokens", !1, function (t, n, r) {
              r == e.Init && (r = !1),
                r && !n
                  ? t.removeOverlay("jstoken")
                  : !r &&
                    n &&
                    t.addOverlay({
                      token: function (e) {
                        var t,
                          n,
                          r = {
                            "js-function-def":
                              /(["']{1,1}[^\r\n\t'"]*["']{1,1}[\s\t\r\n]*:|[$a-zA-Z_0-9]+[\s\t\r\n]*:|[a-zA-Z_0-9]+[\s\t\r\n]*=)?[\s\t\r\n]*function[\s\t\r\n]*([$a-zA-Z_0-9]*)[\s\t\r\n]*\([\s\t\r\n]*([a-zA-Z_0-9,$\s\r\n\t]*)[\s\t\r\n]*\)/g,
                            "js-var": /var /g,
                            "js-well-known": /window|document|Math|Number|String|Object|Array/g,
                            "global-property": /eval|alert|prompt|confirm/g
                          },
                          i = e.string.length,
                          o = Object.keys(r),
                          a = { index: i };
                        for (
                          n = 0;
                          n < o.length &&
                          ((r[o[n]].lastIndex = e.pos),
                          !(
                            (t = r[o[n]].exec(e.string)) &&
                            t.index < a.index &&
                            ((a = { index: t.index, i: n, len: t[0].length }), t.index == e.pos)
                          ));
                          n++
                        );
                        if (a.index == i) e.skipToEnd();
                        else {
                          if (a.index == e.pos) return (e.pos += a.len || 1), o[a.i];
                          e.pos = a.index;
                        }
                      },
                      name: "jstoken"
                    });
            });
          })(n(4538));
      },
      2714: (e, t, n) => {
        !(function (e) {
          "use strict";
          e.registerHelper("lint", "javascript", function (t, n) {
            return new Promise((r, i) => {
              if (!window.Hinter) return window.console && window.console.error("Error: CodeMirror JavaScript linting cannot run."), i([]);
              n.indent || (n.indent = 1),
                window.Hinter.hint(t, { config: n.hintConfig, options: n.hintOptions, userscript: n.userscript }).then(
                  function (t) {
                    var n = [];
                    t &&
                      (function (t, n) {
                        for (var r = 0; r < t.length; r++) {
                          var i = t[r];
                          if (i) {
                            if (i.line <= 0) {
                              window.console && window.console.warn("Cannot display JSHint error (invalid line " + i.line + ")", i);
                              continue;
                            }
                            var o = i.column - 1,
                              a = o + 1;
                            if (i.evidence) {
                              var s = i.evidence.substring(o).search(/.\b/);
                              s > -1 && (a += s);
                            }
                            var l = {
                              message: "eslint: " + i.ruleId + " - " + i.message,
                              severity: (i.severity && i.severity < 2 ? "warning" : "error") || "error",
                              from: e.Pos(i.line - 1, o),
                              to: e.Pos(i.line - 1, a)
                            };
                            n.push(l);
                          }
                        }
                      })(t, n),
                      r(n);
                  },
                  function (e) {
                    i(e);
                  }
                );
            });
          });
        })(n(4538));
      },
      1598: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            e.parentNode && e.parentNode.removeChild(e);
          }
          function n(n, r, i, o) {
            function a() {
              var n;
              e.off(o, "mouseout", a),
                s &&
                  ((n = s).parentNode &&
                    (null == n.style.opacity && t(n),
                    (n.style.opacity = 0),
                    setTimeout(function () {
                      t(n);
                    }, 600)),
                  (s = null));
            }
            var s = (function (t, n, r) {
                function i(t) {
                  if (!o.parentNode) return e.off(document, "mousemove", i);
                  (o.style.top = Math.max(0, t.clientY - o.offsetHeight - 5) + "px"), (o.style.left = t.clientX + 5 + "px");
                }
                var o = document.createElement("div");
                return (
                  (o.className = "CodeMirror-lint-tooltip cm-s-" + t.options.theme),
                  o.appendChild(r.cloneNode(!0)),
                  t.state.lint.options.selfContain ? t.getWrapperElement().appendChild(o) : document.body.appendChild(o),
                  e.on(document, "mousemove", i),
                  i(n),
                  null != o.style.opacity && (o.style.opacity = 1),
                  o
                );
              })(n, r, i),
              l = setInterval(function () {
                if (s)
                  for (var e = o; ; e = e.parentNode) {
                    if ((e && 11 == e.nodeType && (e = e.host), e == document.body)) return;
                    if (!e) {
                      a();
                      break;
                    }
                  }
                if (!s) return clearInterval(l);
              }, 400);
            e.on(o, "mouseout", a);
          }
          function r(e, t, r) {
            (this.marked = []),
              (this.options = t),
              (this.timeout = null),
              (this.hasGutter = r),
              (this.onMouseOver = function (t) {
                !(function (e, t) {
                  var r = t.target || t.srcElement;
                  if (/\bCodeMirror-lint-mark-/.test(r.className)) {
                    for (
                      var i = r.getBoundingClientRect(),
                        o = (i.left + i.right) / 2,
                        s = (i.top + i.bottom) / 2,
                        l = e.findMarksAt(e.coordsChar({ left: o, top: s }, "client")),
                        c = [],
                        u = 0;
                      u < l.length;
                      ++u
                    ) {
                      var f = l[u].__annotation;
                      f && c.push(f);
                    }
                    c.length &&
                      (function (e, t, r) {
                        for (var i = r.target || r.srcElement, o = document.createDocumentFragment(), s = 0; s < t.length; s++) {
                          var l = t[s];
                          o.appendChild(a(l));
                        }
                        n(e, r, o, i);
                      })(e, c, t);
                  }
                })(e, t);
              }),
              (this.waitingFor = 0);
          }
          function i(e) {
            var t = e.state.lint;
            t.hasGutter && e.clearGutter(u);
            for (var n = 0; n < t.marked.length; ++n) t.marked[n].clear();
            t.marked.length = 0;
          }
          function o(t, r, i, o, a) {
            var s = document.createElement("div"),
              l = s;
            return (
              (s.className = "CodeMirror-lint-marker CodeMirror-lint-marker-" + i),
              o &&
                ((l = s.appendChild(document.createElement("div"))).className = "CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),
              0 != a &&
                e.on(l, "mouseover", function (e) {
                  n(t, e, r, l);
                }),
              s
            );
          }
          function a(e) {
            var t = e.severity;
            t || (t = "error");
            var n = document.createElement("div");
            return (
              (n.className = "CodeMirror-lint-message CodeMirror-lint-message-" + t),
              void 0 !== e.messageHTML ? (n.innerHTML = e.messageHTML) : n.appendChild(document.createTextNode(e.message)),
              n
            );
          }
          function s(t, n) {
            var r = t.state.lint,
              o = r.options,
              a = o.options || o,
              s = o.getAnnotations || t.getHelper(e.Pos(0, 0), "lint");
            if (s)
              if (!n && r.options.autoLintMaxLen && t.getValue().length > r.options.autoLintMaxLen)
                r.autolinted && r.marked && r.marked.length && (i(t), (r.autolinted = !1));
              else {
                if (((r.autolinted = !n), o.async || s.async))
                  return (function (t, n, r) {
                    function i() {
                      (a = -1), t.off("change", i);
                    }
                    var o = t.state.lint,
                      a = ++o.waitingFor;
                    return (
                      t.on("change", i),
                      n(
                        t.getValue(),
                        function (n, r) {
                          t.off("change", i),
                            o.waitingFor == a &&
                              (r && n instanceof e && (n = r),
                              t.operation(function () {
                                l(t, n);
                              }));
                        },
                        r,
                        t
                      )
                    );
                  })(t, s, a);
                var c = s(t.getValue(), a, t);
                if (c)
                  return c.then
                    ? c.then(function (e) {
                        t.operation(function () {
                          l(t, e);
                        });
                      })
                    : (t.operation(function () {
                        l(t, c);
                      }),
                      c);
              }
          }
          function l(e, t) {
            i(e);
            for (
              var n = e.state.lint,
                r = n.options,
                s = (function (e) {
                  for (var t = [], n = 0; n < e.length; ++n) {
                    var r = e[n],
                      i = r.from.line;
                    (t[i] || (t[i] = [])).push(r);
                  }
                  return t;
                })(t),
                l = 0;
              l < s.length;
              ++l
            ) {
              var c = s[l];
              if (c) {
                for (var f = null, d = n.hasGutter && document.createDocumentFragment(), h = 0; h < c.length; ++h) {
                  var p = c[h],
                    m = p.severity;
                  m || (m = "error"),
                    (f = "error" == (g = f) ? g : m),
                    r.formatAnnotation && (p = r.formatAnnotation(p)),
                    n.hasGutter && d.appendChild(a(p)),
                    p.to &&
                      n.marked.push(
                        e.markText(p.from, p.to, { className: "CodeMirror-lint-mark CodeMirror-lint-mark-" + m, __annotation: p })
                      );
                }
                n.hasGutter && e.setGutterMarker(l, u, o(e, d, f, c.length > 1, n.options.tooltips));
              }
            }
            var g;
            r.onUpdateLinting && r.onUpdateLinting(t, s, e);
          }
          function c(e) {
            var t = e.state.lint;
            t &&
              (clearTimeout(t.timeout),
              (t.timeout = setTimeout(function () {
                s(e);
              }, t.options.delay || 500)));
          }
          var u = "CodeMirror-lint-markers";
          e.defineOption("lint", !1, function (t, n, o) {
            if (
              (o &&
                o != e.Init &&
                (i(t),
                !1 !== t.state.lint.options.lintOnChange && t.off("change", c),
                e.off(t.getWrapperElement(), "mouseover", t.state.lint.onMouseOver),
                clearTimeout(t.state.lint.timeout),
                delete t.state.lint),
              n)
            ) {
              for (var a = t.getOption("gutters"), l = !1, f = 0; f < a.length; ++f) a[f] == u && (l = !0);
              var d = (t.state.lint = new r(
                t,
                (h = n) instanceof Function
                  ? {
                      getAnnotations: h
                    }
                  : ((h && !0 !== h) || (h = {}), h),
                l
              ));
              !1 !== d.options.lintOnChange && t.on("change", c),
                0 != d.options.tooltips && "gutter" != d.options.tooltips && e.on(t.getWrapperElement(), "mouseover", d.onMouseOver),
                !1 !== n.lintOnChange && s(t);
            }
            var h;
          }),
            e.defineExtension("performLint", function (e) {
              if (this.state.lint) return s(this, e);
            });
        })(n(4538));
      },
      8190: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e, t) {
            function n(e) {
              clearTimeout(r.doRedraw),
                (r.doRedraw = setTimeout(function () {
                  r.redraw();
                }, e));
            }
            (this.cm = e),
              (this.options = t),
              (this.buttonHeight = t.scrollButtonHeight || e.getOption("scrollButtonHeight")),
              (this.annotations = []),
              (this.doRedraw = this.doUpdate = null),
              (this.div = e.getWrapperElement().appendChild(document.createElement("div"))),
              (this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none"),
              this.computeScale();
            var r = this;
            e.on(
              "refresh",
              (this.resizeHandler = function () {
                clearTimeout(r.doUpdate),
                  (r.doUpdate = setTimeout(function () {
                    r.computeScale() && n(20);
                  }, 100));
              })
            ),
              e.on("markerAdded", this.resizeHandler),
              e.on("markerCleared", this.resizeHandler),
              !1 !== t.listenForChanges &&
                e.on(
                  "changes",
                  (this.changeHandler = function () {
                    n(250);
                  })
                );
          }
          e.defineExtension("annotateScrollbar", function (e) {
            return "string" == typeof e && (e = { className: e }), new t(this, e);
          }),
            e.defineOption("scrollButtonHeight", 0),
            (t.prototype.computeScale = function () {
              var e = this.cm,
                t =
                  (e.getWrapperElement().clientHeight - e.display.barHeight - 2 * this.buttonHeight) / e.getScrollerElement().scrollHeight;
              if (t != this.hScale) return (this.hScale = t), !0;
            }),
            (t.prototype.update = function (e) {
              (this.annotations = e), this.redraw();
            }),
            (t.prototype.redraw = function (e) {
              function t(e, t) {
                if (l != e.line) {
                  (l = e.line), (c = n.getLineHandle(e.line));
                  var r = n.getLineHandleVisualStart(c);
                  r != c && ((l = n.getLineNumber(r)), (c = r));
                }
                return (c.widgets && c.widgets.length) || (a && c.height > s)
                  ? n.charCoords(e, "local")[t ? "top" : "bottom"]
                  : n.heightAtLine(c, "local") + (t ? 0 : c.height);
              }
              !1 !== e && this.computeScale();
              var n = this.cm,
                r = this.hScale,
                i = document.createDocumentFragment(),
                o = this.annotations,
                a = n.getOption("lineWrapping"),
                s = a && 1.5 * n.defaultTextHeight(),
                l = null,
                c = null,
                u = n.lastLine();
              if (n.display.barWidth)
                for (var f, d = 0; d < o.length; d++) {
                  var h = o[d];
                  if (!(h.to.line > u)) {
                    for (
                      var p = f || t(h.from, !0) * r, m = t(h.to, !1) * r;
                      d < o.length - 1 && !(o[d + 1].to.line > u) && !((f = t(o[d + 1].from, !0) * r) > m + 0.9);

                    )
                      m = t((h = o[++d]).to, !1) * r;
                    if (m != p) {
                      var g = Math.max(m - p, 3),
                        v = i.appendChild(document.createElement("div"));
                      (v.style.cssText =
                        "position: absolute; right: 0px; width: " +
                        Math.max(n.display.barWidth - 1, 2) +
                        "px; top: " +
                        (p + this.buttonHeight) +
                        "px; height: " +
                        g +
                        "px"),
                        (v.className = this.options.className),
                        h.id && v.setAttribute("annotation-id", h.id);
                    }
                  }
                }
              (this.div.textContent = ""), this.div.appendChild(i);
            }),
            (t.prototype.clear = function () {
              this.cm.off("refresh", this.resizeHandler),
                this.cm.off("markerAdded", this.resizeHandler),
                this.cm.off("markerCleared", this.resizeHandler),
                this.changeHandler && this.cm.off("changes", this.changeHandler),
                this.div.parentNode.removeChild(this.div);
            });
        })(n(4538));
      },
      3773: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            for (var t in ((this.options = {}), l)) this.options[t] = (e && e.hasOwnProperty(t) ? e : l)[t];
            (this.overlay = this.timeout = null), (this.matchesonscroll = null), (this.active = !1);
          }
          function n(e) {
            var t = e.state.matchHighlighter;
            (t.active || e.hasFocus()) && i(e, t);
          }
          function r(e) {
            var t = e.state.matchHighlighter;
            t.active || ((t.active = !0), i(e, t));
          }
          function i(e, t) {
            clearTimeout(t.timeout),
              (t.timeout = setTimeout(function () {
                s(e);
              }, t.options.delay));
          }
          function o(e, t, n, r) {
            var i = e.state.matchHighlighter;
            if (
              (e.addOverlay(
                (i.overlay = (function (e, t, n) {
                  return {
                    token: function (r) {
                      if (
                        r.match(e) &&
                        (!t ||
                          (function (e, t) {
                            return !(
                              (e.start && t.test(e.string.charAt(e.start - 1))) ||
                              (e.pos != e.string.length && t.test(e.string.charAt(e.pos)))
                            );
                          })(r, t))
                      )
                        return n;
                      r.next(), r.skipTo(e.charAt(0)) || r.skipToEnd();
                    }
                  };
                })(t, n, r))
              ),
              i.options.annotateScrollbar && e.showMatchesOnScrollbar)
            ) {
              var o = n
                ? new RegExp(
                    (/\w/.test(t.charAt(0)) ? "\\b" : "") +
                      t.replace(/[\\\[.+*?(){|^$]/g, "\\$&") +
                      (/\w/.test(t.charAt(t.length - 1)) ? "\\b" : "")
                  )
                : t;
              i.matchesonscroll = e.showMatchesOnScrollbar(o, !1, { className: "CodeMirror-selection-highlight-scrollbar" });
            }
          }
          function a(e) {
            var t = e.state.matchHighlighter;
            t.overlay &&
              (e.removeOverlay(t.overlay),
              (t.overlay = null),
              t.matchesonscroll && (t.matchesonscroll.clear(), (t.matchesonscroll = null)));
          }
          function s(e) {
            e.operation(function () {
              var t = e.state.matchHighlighter;
              if ((a(e), e.somethingSelected() || !t.options.showToken)) {
                if (!t.options.cursorOnly) {
                  var n = e.getCursor("from"),
                    r = e.getCursor("to");
                  if (
                    n.line == r.line &&
                    (!t.options.wordsOnly ||
                      (function (e, t, n) {
                        if (null !== e.getRange(t, n).match(/^\w+$/)) {
                          if (t.ch > 0) {
                            var r = { line: t.line, ch: t.ch - 1 };
                            if (null === e.getRange(r, t).match(/\W/)) return !1;
                          }
                          return !(
                            n.ch < e.getLine(t.line).length && ((r = { line: n.line, ch: n.ch + 1 }), null === e.getRange(n, r).match(/\W/))
                          );
                        }
                        return !1;
                      })(e, n, r))
                  ) {
                    var i = e.getRange(n, r);
                    t.options.trim && (i = i.replace(/^\s+|\s+$/g, "")), i.length >= t.options.minChars && o(e, i, !1, t.options.style);
                  }
                }
              } else {
                for (
                  var s = !0 === t.options.showToken ? /[\w$]/ : t.options.showToken,
                    l = e.getCursor(),
                    c = e.getLine(l.line),
                    u = l.ch,
                    f = u;
                  u && s.test(c.charAt(u - 1));

                )
                  --u;
                for (; f < c.length && s.test(c.charAt(f)); ) ++f;
                u < f && o(e, c.slice(u, f), s, t.options.style);
              }
            });
          }
          var l = {
            style: "matchhighlight",
            minChars: 2,
            delay: 100,
            wordsOnly: !1,
            cursorOnly: !1,
            annotateScrollbar: !1,
            showToken: !1,
            trim: !0
          };
          e.defineOption("highlightSelectionMatches", !1, function (i, o, l) {
            if (
              (l &&
                l != e.Init &&
                (a(i),
                clearTimeout(i.state.matchHighlighter.timeout),
                (i.state.matchHighlighter = null),
                i.off("cursorActivity", n),
                i.off("focus", r)),
              o)
            ) {
              var c = (i.state.matchHighlighter = new t(o));
              i.hasFocus() ? ((c.active = !0), s(i)) : i.on("focus", r), i.on("cursorActivity", n);
            }
          });
        })(n(4538), n(7270));
      },
      7270: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e, t, n, r) {
            (this.cm = e), (this.options = r);
            var i = { listenForChanges: !1 };
            for (var o in r) i[o] = r[o];
            i.className || (i.className = "CodeMirror-search-match"),
              (this.annotation = e.annotateScrollbar(i)),
              (this.query = t),
              (this.caseFold = n),
              (this.gap = { from: e.firstLine(), to: e.lastLine() + 1 }),
              (this.matches = []),
              (this.update = null),
              this.findMatches(),
              this.annotation.update(this.matches);
            var a = this;
            e.on(
              "change",
              (this.changeHandler = function (e, t) {
                a.onChange(t);
              })
            );
          }
          function n(e, t, n) {
            return e <= t ? e : Math.max(t, e + n);
          }
          e.defineExtension("showMatchesOnScrollbar", function (e, n, r) {
            return "string" == typeof r && (r = { className: r }), r || (r = {}), new t(this, e, n, r);
          }),
            (t.prototype.findMatches = function () {
              if (this.gap) {
                for (var t = 0; t < this.matches.length && !((i = this.matches[t]).from.line >= this.gap.to); t++)
                  i.to.line >= this.gap.from && this.matches.splice(t--, 1);
                for (
                  var n = this.cm.getSearchCursor(this.query, e.Pos(this.gap.from, 0), {
                      caseFold: this.caseFold,
                      multiline: this.options.multiline
                    }),
                    r = (this.options && this.options.maxMatches) || 1e3;
                  n.findNext();

                ) {
                  var i;
                  if ((i = { from: n.from(), to: n.to() }).from.line >= this.gap.to) break;
                  if ((this.matches.splice(t++, 0, i), this.matches.length > r)) break;
                }
                this.gap = null;
              }
            }),
            (t.prototype.onChange = function (t) {
              var r = t.from.line,
                i = e.changeEnd(t).line,
                o = i - t.to.line;
              if (
                (this.gap
                  ? ((this.gap.from = Math.min(n(this.gap.from, r, o), t.from.line)),
                    (this.gap.to = Math.max(n(this.gap.to, r, o), t.from.line)))
                  : (this.gap = { from: t.from.line, to: i + 1 }),
                o)
              )
                for (var a = 0; a < this.matches.length; a++) {
                  var s = this.matches[a],
                    l = n(s.from.line, r, o);
                  l != s.from.line && (s.from = e.Pos(l, s.from.ch));
                  var c = n(s.to.line, r, o);
                  c != s.to.line && (s.to = e.Pos(c, s.to.ch));
                }
              clearTimeout(this.update);
              var u = this;
              this.update = setTimeout(function () {
                u.updateAfterChange();
              }, 250);
            }),
            (t.prototype.updateAfterChange = function () {
              this.findMatches(), this.annotation.update(this.matches);
            }),
            (t.prototype.clear = function () {
              this.cm.off("change", this.changeHandler), this.annotation.clear();
            });
        })(n(4538), n(8334), n(8190));
      },
      5043: (e, t, n) => {
        const { $: r } = n(1340);
        !(function (e) {
          "use strict";
          function t() {
            (this.posFrom = this.posTo = this.lastPattern = this.pattern = null), (this.overlay = null);
          }
          function n(e) {
            return e.state.search || (e.state.search = new t());
          }
          function i(e, t, n) {
            var r,
              i = "";
            return t && ((r = t.caseInsensitive), (i = t.query)), e.getSearchCursor(i, n, { caseFold: r, multiline: !0 });
          }
          function o(t, n, r, i, o) {
            if (t.openDialog)
              return t.openDialog(
                n,
                function (t, n) {
                  return e.e_stop(n), o.apply(this, arguments);
                },
                { value: i, selectValueOnOpen: !0, closeOnBlur: !1, bottom: !0, closeOnEnter: !1 }
              );
            o(prompt(r, i));
          }
          function a(e, t) {
            var n,
              i = r(e.display.wrapper),
              o = void 0 !== t ? t : i.find(".CodeMirror-search-field").value(),
              a = i.find(".CodeMirror-search-re-field").is(":checked"),
              s = !i.find(".CodeMirror-search-case-field").is(":checked");
            if (a)
              try {
                n = { query: new RegExp(o, s ? "i" : ""), text: o, caseInsensitive: s, regex: a };
              } catch (e) {}
            else n = { query: o, text: o, caseInsensitive: s, regex: a };
            return (n && n.query && !("string" == typeof n.query ? "" == n.query : n.query.test(""))) || (n = { query: /x^/, text: "" }), n;
          }
          function s() {
            v && window.clearTimeout(v), (v = null);
          }
          function l(e, t, n) {
            s(),
              (t.pattern = n),
              e.removeOverlay(t.overlay, n.caseInsensitive),
              (t.overlay = (function (e) {
                var t = e.query;
                return (
                  "string" == typeof t
                    ? (t = new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), e.caseInsensitive ? "gi" : "g"))
                    : t.global || (t = new RegExp(e.text, e.caseInsensitive ? "gi" : "g")),
                  {
                    token: function (e) {
                      t.lastIndex = e.pos;
                      var n = t.exec(e.string);
                      if (n && n.index == e.pos) return (e.pos += n[0].length || 1), "searching";
                      n ? (e.pos = n.index) : e.skipToEnd();
                    }
                  }
                );
              })(n)),
              e.addOverlay(t.overlay),
              e.showMatchesOnScrollbar &&
                (t.annotate && (t.annotate.clear(), (t.annotate = null)),
                (t.annotate = e.showMatchesOnScrollbar(n.query, n.caseInsensitive)),
                r(e.display.wrapper)
                  .find(".CodeMirror-search-field")
                  .toggleClass("no-result", t.annotate.matches.length <= 0));
          }
          function c(e, t) {
            return "" + e.query == "" + t.query && e.regex == t.regex && e.caseInsensitive == t.caseInsensitive;
          }
          function u(e) {
            return e.query instanceof RegExp && "x^" == e.query.source;
          }
          function f(t, i, f, p) {
            var m,
              k,
              w = n(t);
            if (w.pattern && (k = a(t))) {
              if (c(w.pattern, k)) return d(t, i);
            } else k = k || t.getSelection() || w.lastPattern || a(t) || "";
            if (("string" == typeof k && (k = a(t, k)), u(k) && (k = null), f && t.openDialog)) {
              var C = null,
                x = function (n, r) {
                  var i = a(t);
                  e.e_stop(r),
                    (w.pattern && c(w.pattern, i)) || (l(t, w, i), (w.posFrom = w.posTo = t.getCursor())),
                    C && (C.style.opacity = 1),
                    d(t, r.shiftKey, function (e, n) {
                      var r;
                      n.line < 3 &&
                        document.querySelector &&
                        (r = t.display.wrapper.querySelector(".CodeMirror-dialog")) &&
                        r.getBoundingClientRect().bottom - 4 > t.cursorCoords(n, "window").top &&
                        ((C = r).style.opacity = 0.4);
                    });
                };
              w.pattern ||
                (y(t),
                (m = (function (e, t, n, r, i) {
                  return e.openDialog(t, r, {
                    value: n,
                    selectValueOnOpen: !0,
                    closeOnEnter: !1,
                    onClose: function () {
                      h(e);
                    },
                    onKeyDown: i,
                    closeOnBlur: !1,
                    bottom: !0
                  });
                })(t, g(k), k ? k.text : "", x, function (r) {
                  var i = e.keyName(r),
                    o = t.getOption("extraKeys"),
                    f = (o && o[i]) || e.keyMap[t.getOption("keyMap")][i],
                    d = a(t);
                  u(d) ||
                    ("findNext" == f || "findPrev" == f || "findPersistentNext" == f || "findPersistentPrev" == f
                      ? (e.e_stop(r), l(t, n(t), d), t.execCommand(f))
                      : "find" == f || "findPersistent" == f
                      ? (e.e_stop(r), x(0, r))
                      : void 0 === f &&
                        (function (e) {
                          s(),
                            (v = window.setTimeout(function () {
                              v = null;
                              var t = n(e);
                              if (t.dialog) {
                                var r = a(e);
                                u(r) ||
                                  (t.pattern && c(t.pattern, r)) ||
                                  ((t.posFrom = t.posTo = e.getCursor()), l(e, t, r), e.execCommand("findNext"));
                              }
                            }, 200));
                        })(t));
                }))),
                p && k && (l(t, w, k), d(t, i));
            } else
              y(t),
                (m = o(t, g(), e.I18N.getMessage("Search_for") + ":", k, function (e) {
                  e &&
                    !w.pattern &&
                    t.operation(function () {
                      l(t, w, a(t)), (w.posFrom = w.posTo = t.getCursor()), d(t, i);
                    });
                }));
            if (
              (m &&
                b(t, {
                  close: function () {
                    m(), (w.dialog = null);
                  }
                }),
              w.dialog && !w.dialog.initialized)
            ) {
              w.dialog.initialized = !0;
              var S = r(t.display.wrapper);
              S.find(".CodeMirror-search-find-button").on("click", function () {
                e.commands.findNext(t);
              }),
                S.find(".CodeMirror-search-find-prev-button").on("click", function () {
                  e.commands.findPrev(t);
                }),
                S.find(".CodeMirror-search-close-button").on("click", function () {
                  w.dialog && w.dialog.close && w.dialog.close();
                });
            }
          }
          function d(t, r, o) {
            t.operation(function () {
              var a = n(t),
                s = i(t, a.pattern, r ? a.posFrom : a.posTo);
              (s.find(r) || (s = i(t, a.pattern, r ? e.Pos(t.lastLine()) : e.Pos(t.firstLine(), 0))).find(r)) &&
                (t.setSelection(s.from(), s.to()),
                t.scrollIntoView({ from: s.from(), to: s.to() }, 20),
                (a.posFrom = s.from()),
                (a.posTo = s.to()),
                o && o(s.from(), s.to()));
            });
          }
          function h(e, t) {
            return e.operation(function () {
              var r,
                i = n(e);
              if (!i.closing)
                return (
                  i.dialog && !t && ((i.closing = !0), i.dialog.close(), (i.closing = !1), (r = !0)),
                  (i.lastPattern = i.pattern),
                  i.pattern
                    ? ((i.pattern = null), e.removeOverlay(i.overlay), i.annotate && (i.annotate.clear(), (i.annotate = null)), !0)
                    : r
                );
            });
          }
          function p(e, t, n) {
            e.operation(function () {
              for (var r = i(e, t); r.findNext(); )
                if ("string" != typeof query) {
                  var o = e.getRange(r.from(), r.to()).match(t.query);
                  r.replace(
                    n.replace(/\$(\d)/g, function (e, t) {
                      return o[t];
                    })
                  );
                } else r.replace(n);
            });
          }
          function m(t, r) {
            if (!t.getOption("readOnly")) {
              var s = t.getSelection() || n(t).lastPattern || "";
              "string" == typeof s && (s = a(t, s));
              var l = n(t),
                c = (r ? e.I18N.getMessage("Replace_all_with") : e.I18N.getMessage("Replace")) + ":";
              y(t);
              var u = o(t, c + k, c, s.text, function (n) {
                if (n) {
                  var s = a(t);
                  y(t);
                  var c = o(t, w(), e.I18N.getMessage("Replace_with") + ":", "", function (o) {
                    if (r) p(t, s, o);
                    else {
                      h(t);
                      var a = i(t, s, t.getCursor("from")),
                        c = function () {
                          var n,
                            r = a.from();
                          (!(n = a.findNext()) &&
                            ((a = i(t, s)), !(n = a.findNext()) || (r && a.from().line == r.line && a.from().ch == r.ch))) ||
                            (t.setSelection(a.from(), a.to()),
                            t.showInCenter ? t.showInCenter() : t.scrollIntoView({ from: a.from(), to: a.to() }),
                            window.setTimeout(function () {
                              y(t);
                              var r = (function (e, t, n, r, i, o) {
                                if (e.openConfirm)
                                  return e.openConfirm(t, r, {
                                    onKeyDown: o,
                                    onClose: function () {
                                      l.dialog = null;
                                    },
                                    closeOnBlur: !1
                                  });
                                confirm(n) && r[0]();
                              })(
                                t,
                                C(),
                                e.I18N.getMessage("Replace_"),
                                [
                                  function () {
                                    u(n);
                                  },
                                  c,
                                  function () {
                                    p(t, s, o);
                                  }
                                ],
                                0,
                                function (n) {
                                  if ("Esc" == e.keyName(n)) return e.e_stop(n), h(t);
                                }
                              );
                              r &&
                                b(t, {
                                  close: function () {
                                    r(), (l.dialog = null);
                                  }
                                });
                            }, 1));
                        },
                        u = function (e) {
                          a.replace(
                            "string" == typeof n
                              ? o
                              : o.replace(/\$(\d)/g, function (t, n) {
                                  return e[n];
                                })
                          ),
                            c();
                        };
                      c();
                    }
                  });
                  c &&
                    b(t, {
                      close: function () {
                        c(), (l.dialog = null);
                      }
                    });
                }
              });
              u &&
                b(t, {
                  close: function () {
                    u(), (l.dialog = null);
                  }
                });
            }
          }
          var g = function (t) {
              return (
                '<span class="CodeMirror-search-label">' +
                e.I18N.getMessage("Search_for") +
                ':</span> <input type="text" style="width: 40em" class="CodeMirror-search-field" spellcheck="false"/> <input type="checkbox" style="width: auto" class="CodeMirror-search-re-field" ' +
                (t && t.regex ? "checked" : "") +
                ' /> <span style="color: #888" class="CodeMirror-search-hint">.*</span> <input type="checkbox" style="width: auto" class="CodeMirror-search-case-field" ' +
                (!t || t.caseInsensitive ? "" : "checked") +
                ' /> <span style="color: #888" class="CodeMirror-search-hint">Aa</span><button class="CodeMirror-search-find-button">' +
                e.I18N.getMessage("Find_Next") +
                '</button><button class="CodeMirror-search-find-prev-button">' +
                e.I18N.getMessage("Find_Previous") +
                '</button><button class="CodeMirror-search-close-button">' +
                e.I18N.getMessage("Close") +
                "</button>"
              );
            },
            v = null,
            y = function (e) {
              var t = n(e);
              t.dialog && ((t.closing = !0), t.dialog.close(), (t.closing = !1));
            },
            b = function (e, t) {
              n(e).dialog = t;
            },
            k =
              ' <input type="text" style="width: 40em" class="CodeMirror-search-field" spellcheck="false"/> <input type="checkbox" style="width: auto" class="CodeMirror-search-re-field"/> <span style="color: #888" class="CodeMirror-search-hint">.*</span> <input type="checkbox" style="width: auto" class="CodeMirror-search-case-field"/> <span style="color: #888" class="CodeMirror-search-hint">Aa</span>',
            w = function () {
              return (
                '<span class="CodeMirror-search-label">' +
                e.I18N.getMessage("Replace_with") +
                ':</span> <input type="text" style="width: 40em" class="CodeMirror-search-field" spellcheck="false"/>'
              );
            },
            C = function () {
              return (
                '<span class="CodeMirror-search-label">' +
                e.I18N.getMessage("Replace_") +
                "</span><button>" +
                e.I18N.getMessage("Yes") +
                "</button><button>" +
                e.I18N.getMessage("No") +
                "</button><button>" +
                e.I18N.getMessage("Replace_All") +
                "</button><button>" +
                e.I18N.getMessage("Stop") +
                "</button>"
              );
            };
          (e.commands.find = e.commands.findPersistent =
            function (e) {
              h(e, !0), f(e, !1, !0);
            }),
            (e.commands.findNext = e.commands.findPersistentNext =
              function (e) {
                f(e, !1, !0, !0);
              }),
            (e.commands.findPrev = e.commands.findPersistentPrev =
              function (e) {
                f(e, !0, !0, !0);
              }),
            (e.commands.clearSearch = h),
            (e.commands.replace = m),
            (e.commands.replaceAll = function (e) {
              m(e, !0);
            });
        })(n(4538));
      },
      8334: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e, t) {
            for (
              var n = (function (e) {
                  var t = e.flags;
                  return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "");
                })(e),
                r = n,
                i = 0;
              i < t.length;
              i++
            )
              -1 == r.indexOf(t.charAt(i)) && (r += t.charAt(i));
            return n == r ? e : new RegExp(e.source, r);
          }
          function n(e) {
            return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
          }
          function r(e, n, r) {
            n = t(n, "g");
            for (var i = r.line, o = r.ch, a = e.lastLine(); i <= a; i++, o = 0) {
              n.lastIndex = o;
              var s = e.getLine(i),
                l = n.exec(s);
              if (l) return { from: p(i, l.index), to: p(i, l.index + l[0].length), match: l };
            }
          }
          function i(e, i, o) {
            if (!n(i)) return r(e, i, o);
            i = t(i, "gm");
            for (var a, s = 1, l = o.line, c = e.lastLine(); l <= c; ) {
              for (var u = 0; u < s && !(l > c); u++) {
                var f = e.getLine(l++);
                a = null == a ? f : a + "\n" + f;
              }
              (s *= 2), (i.lastIndex = o.ch);
              var d = i.exec(a);
              if (d) {
                var h = a.slice(0, d.index).split("\n"),
                  m = d[0].split("\n"),
                  g = o.line + h.length - 1,
                  v = h[h.length - 1].length;
                return { from: p(g, v), to: p(g + m.length - 1, 1 == m.length ? v + m[0].length : m[m.length - 1].length), match: d };
              }
            }
          }
          function o(e, t, n) {
            for (var r, i = 0; i <= e.length; ) {
              t.lastIndex = i;
              var o = t.exec(e);
              if (!o) break;
              var a = o.index + o[0].length;
              if (a > e.length - n) break;
              (!r || a > r.index + r[0].length) && (r = o), (i = o.index + 1);
            }
            return r;
          }
          function a(e, n, r) {
            n = t(n, "g");
            for (var i = r.line, a = r.ch, s = e.firstLine(); i >= s; i--, a = -1) {
              var l = e.getLine(i),
                c = o(l, n, a < 0 ? 0 : l.length - a);
              if (c) return { from: p(i, c.index), to: p(i, c.index + c[0].length), match: c };
            }
          }
          function s(e, r, i) {
            if (!n(r)) return a(e, r, i);
            r = t(r, "gm");
            for (var s, l = 1, c = e.getLine(i.line).length - i.ch, u = i.line, f = e.firstLine(); u >= f; ) {
              for (var d = 0; d < l && u >= f; d++) {
                var h = e.getLine(u--);
                s = null == s ? h : h + "\n" + s;
              }
              l *= 2;
              var m = o(s, r, c);
              if (m) {
                var g = s.slice(0, m.index).split("\n"),
                  v = m[0].split("\n"),
                  y = u + g.length,
                  b = g[g.length - 1].length;
                return { from: p(y, b), to: p(y + v.length - 1, 1 == v.length ? b + v[0].length : v[v.length - 1].length), match: m };
              }
            }
          }
          function l(e, t, n, r) {
            if (e.length == t.length) return n;
            for (var i = 0, o = n + Math.max(0, e.length - t.length); ; ) {
              if (i == o) return i;
              var a = (i + o) >> 1,
                s = r(e.slice(0, a)).length;
              if (s == n) return a;
              s > n ? (o = a) : (i = a + 1);
            }
          }
          function c(e, t, n, r) {
            if (!t.length) return null;
            var i = r ? d : h,
              o = i(t).split(/\r|\n\r?/);
            e: for (var a = n.line, s = n.ch, c = e.lastLine() + 1 - o.length; a <= c; a++, s = 0) {
              var u = e.getLine(a).slice(s),
                f = i(u);
              if (1 == o.length) {
                var m = f.indexOf(o[0]);
                if (-1 == m) continue e;
                return (n = l(u, f, m, i) + s), { from: p(a, l(u, f, m, i) + s), to: p(a, l(u, f, m + o[0].length, i) + s) };
              }
              var g = f.length - o[0].length;
              if (f.slice(g) == o[0]) {
                for (var v = 1; v < o.length - 1; v++) if (i(e.getLine(a + v)) != o[v]) continue e;
                var y = e.getLine(a + o.length - 1),
                  b = i(y),
                  k = o[o.length - 1];
                if (b.slice(0, k.length) == k) return { from: p(a, l(u, f, g, i) + s), to: p(a + o.length - 1, l(y, b, k.length, i)) };
              }
            }
          }
          function u(e, t, n, r) {
            if (!t.length) return null;
            var i = r ? d : h,
              o = i(t).split(/\r|\n\r?/);
            e: for (var a = n.line, s = n.ch, c = e.firstLine() - 1 + o.length; a >= c; a--, s = -1) {
              var u = e.getLine(a);
              s > -1 && (u = u.slice(0, s));
              var f = i(u);
              if (1 == o.length) {
                var m = f.lastIndexOf(o[0]);
                if (-1 == m) continue e;
                return { from: p(a, l(u, f, m, i)), to: p(a, l(u, f, m + o[0].length, i)) };
              }
              var g = o[o.length - 1];
              if (f.slice(0, g.length) == g) {
                var v = 1;
                for (n = a - o.length + 1; v < o.length - 1; v++) if (i(e.getLine(n + v)) != o[v]) continue e;
                var y = e.getLine(a + 1 - o.length),
                  b = i(y);
                if (b.slice(b.length - o[0].length) == o[0])
                  return {
                    from: p(a + 1 - o.length, l(y, b, y.length - o[0].length, i)),
                    to: p(a, l(u, f, g.length, i))
                  };
              }
            }
          }
          function f(e, n, o, l) {
            var f;
            (this.atOccurrence = !1),
              (this.doc = e),
              (o = o ? e.clipPos(o) : p(0, 0)),
              (this.pos = { from: o, to: o }),
              "object" == typeof l ? (f = l.caseFold) : ((f = l), (l = null)),
              "string" == typeof n
                ? (null == f && (f = !1),
                  (this.matches = function (t, r) {
                    return (t ? u : c)(e, n, r, f);
                  }))
                : ((n = t(n, "gm")),
                  l && !1 === l.multiline
                    ? (this.matches = function (t, i) {
                        return (t ? a : r)(e, n, i);
                      })
                    : (this.matches = function (t, r) {
                        return (t ? s : i)(e, n, r);
                      }));
          }
          var d,
            h,
            p = e.Pos;
          "".normalize
            ? ((d = function (e) {
                return e.normalize("NFD").toLowerCase();
              }),
              (h = function (e) {
                return e.normalize("NFD");
              }))
            : ((d = function (e) {
                return e.toLowerCase();
              }),
              (h = function (e) {
                return e;
              })),
            (f.prototype = {
              findNext: function () {
                return this.find(!1);
              },
              findPrevious: function () {
                return this.find(!0);
              },
              find: function (t) {
                for (var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to)); n && 0 == e.cmpPos(n.from, n.to); )
                  t
                    ? n.from.ch
                      ? (n.from = p(n.from.line, n.from.ch - 1))
                      : (n = n.from.line == this.doc.firstLine() ? null : this.matches(t, this.doc.clipPos(p(n.from.line - 1))))
                    : n.to.ch < this.doc.getLine(n.to.line).length
                    ? (n.to = p(n.to.line, n.to.ch + 1))
                    : (n = n.to.line == this.doc.lastLine() ? null : this.matches(t, p(n.to.line + 1, 0)));
                if (n) return (this.pos = n), (this.atOccurrence = !0), this.pos.match || !0;
                var r = p(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                return (this.pos = { from: r, to: r }), (this.atOccurrence = !1);
              },
              from: function () {
                if (this.atOccurrence) return this.pos.from;
              },
              to: function () {
                if (this.atOccurrence) return this.pos.to;
              },
              replace: function (t, n) {
                if (this.atOccurrence) {
                  var r = e.splitLines(t);
                  this.doc.replaceRange(r, this.pos.from, this.pos.to, n),
                    (this.pos.to = p(this.pos.from.line + r.length - 1, r[r.length - 1].length + (1 == r.length ? this.pos.from.ch : 0)));
                }
              }
            }),
            e.defineExtension("getSearchCursor", function (e, t, n) {
              return new f(this.doc, e, t, n);
            }),
            e.defineDocExtension("getSearchCursor", function (e, t, n) {
              return new f(this, e, t, n);
            }),
            e.defineExtension("selectMatches", function (t, n) {
              for (
                var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n);
                i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);

              )
                r.push({ anchor: i.from(), head: i.to() });
              r.length && this.setSelections(r, 0);
            });
        })(n(4538));
      },
      2498: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            for (var t = 0; t < e.state.activeLines.length; t++)
              e.removeLineClass(e.state.activeLines[t], "wrap", i),
                e.removeLineClass(e.state.activeLines[t], "background", o),
                e.removeLineClass(e.state.activeLines[t], "gutter", a);
          }
          function n(e, n) {
            for (var r = [], s = 0; s < n.length; s++) {
              var l = n[s],
                c = e.getOption("styleActiveLine");
              if ("object" == typeof c && c.nonEmpty ? l.anchor.line == l.head.line : l.empty()) {
                var u = e.getLineHandleVisualStart(l.head.line);
                r[r.length - 1] != u && r.push(u);
              }
            }
            (function (e, t) {
              if (e.length != t.length) return !1;
              for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
              return !0;
            })(e.state.activeLines, r) ||
              e.operation(function () {
                t(e);
                for (var n = 0; n < r.length; n++)
                  e.addLineClass(r[n], "wrap", i), e.addLineClass(r[n], "background", o), e.addLineClass(r[n], "gutter", a);
                e.state.activeLines = r;
              });
          }
          function r(e, t) {
            n(e, t.ranges);
          }
          var i = "CodeMirror-activeline",
            o = "CodeMirror-activeline-background",
            a = "CodeMirror-activeline-gutter";
          e.defineOption("styleActiveLine", !1, function (i, o, a) {
            var s = a != e.Init && a;
            o != s &&
              (s && (i.off("beforeSelectionChange", r), t(i), delete i.state.activeLines),
              o && ((i.state.activeLines = []), n(i, i.listSelections()), i.on("beforeSelectionChange", r)));
          });
        })(n(4538));
      },
      4333: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            e.state.markedSelection &&
              e.operation(function () {
                !(function (e) {
                  if (!e.somethingSelected()) return i(e);
                  if (e.listSelections().length > 1) return o(e);
                  var t = e.getCursor("start"),
                    n = e.getCursor("end"),
                    s = e.state.markedSelection;
                  if (!s.length) return r(e, t, n);
                  var c = s[0].find(),
                    u = s[s.length - 1].find();
                  if (!c || !u || n.line - t.line <= a || l(t, u.to) >= 0 || l(n, c.from) <= 0) return o(e);
                  for (; l(t, c.from) > 0; ) s.shift().clear(), (c = s[0].find());
                  for (
                    l(t, c.from) < 0 && (c.to.line - t.line < a ? (s.shift().clear(), r(e, t, c.to, 0)) : r(e, t, c.from, 0));
                    l(n, u.to) < 0;

                  )
                    s.pop().clear(), (u = s[s.length - 1].find());
                  l(n, u.to) > 0 && (n.line - u.from.line < a ? (s.pop().clear(), r(e, u.from, n)) : r(e, u.to, n));
                })(e);
              });
          }
          function n(e) {
            e.state.markedSelection &&
              e.state.markedSelection.length &&
              e.operation(function () {
                i(e);
              });
          }
          function r(e, t, n, r) {
            if (0 != l(t, n))
              for (var i = e.state.markedSelection, o = e.state.markedSelectionStyle, c = t.line; ; ) {
                var u = c == t.line ? t : s(c, 0),
                  f = c + a,
                  d = f >= n.line,
                  h = d ? n : s(f, 0),
                  p = e.markText(u, h, { className: o });
                if ((null == r ? i.push(p) : i.splice(r++, 0, p), d)) break;
                c = f;
              }
          }
          function i(e) {
            for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) t[n].clear();
            t.length = 0;
          }
          function o(e) {
            i(e);
            for (var t = e.listSelections(), n = 0; n < t.length; n++) r(e, t[n].from(), t[n].to());
          }
          e.defineOption("styleSelectedText", !1, function (r, a, s) {
            var l = s && s != e.Init;
            a && !l
              ? ((r.state.markedSelection = []),
                (r.state.markedSelectionStyle = "string" == typeof a ? a : "CodeMirror-selectedtext"),
                o(r),
                r.on("cursorActivity", t),
                r.on("change", n))
              : !a &&
                l &&
                (r.off("cursorActivity", t), r.off("change", n), i(r), (r.state.markedSelection = r.state.markedSelectionStyle = null));
          });
          var a = 8,
            s = e.Pos,
            l = e.cmpPos;
        })(n(4538));
      },
      672: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e, t) {
            return e.line == t.line && e.ch == t.ch;
          }
          function n(e) {
            A.push(e), A.length > 50 && A.shift();
          }
          function r(e) {
            return A[A.length - (e ? Math.min(e, 1) : 1)] || "";
          }
          function i(e, r, i, o, a) {
            null == a && (a = e.getRange(r, i)),
              "grow" == o && O && O.cm == e && t(r, O.pos) && e.isClean(O.gen)
                ? (function (e) {
                    if (!A.length) return n(e);
                    A[A.length - 1] += e;
                  })(a)
                : !1 !== o && n(a),
              e.replaceRange("", r, i, "+delete"),
              (O = "grow" == o ? { cm: e, pos: r, gen: e.changeGeneration() } : null);
          }
          function o(e, t, n) {
            return e.findPosH(t, n, "char", !0);
          }
          function a(e, t, n) {
            return e.findPosH(t, n, "word", !0);
          }
          function s(e, t, n) {
            return e.findPosV(t, n, "line", e.doc.sel.goalColumn);
          }
          function l(e, t, n) {
            return e.findPosV(t, n, "page", e.doc.sel.goalColumn);
          }
          function c(e, t, n) {
            for (
              var r = t.line,
                i = e.getLine(r),
                o = /\S/.test(n < 0 ? i.slice(0, t.ch) : i.slice(t.ch)),
                a = e.firstLine(),
                s = e.lastLine();
              ;

            ) {
              if ((r += n) < a || r > s) return e.clipPos(T(r - n, n < 0 ? 0 : null));
              if (((i = e.getLine(r)), /\S/.test(i))) o = !0;
              else if (o) return T(r, 0);
            }
          }
          function u(e, t, n) {
            for (var r = t.line, i = t.ch, o = e.getLine(t.line), a = !1; ; ) {
              var s = o.charAt(i + (n < 0 ? -1 : 0));
              if (s) {
                if (a && /[!?.]/.test(s)) return T(r, i + (n > 0 ? 1 : 0));
                a || (a = /\w/.test(s)), (i += n);
              } else {
                if (r == (n < 0 ? e.firstLine() : e.lastLine())) return T(r, i);
                if (((o = e.getLine(r + n)), !/\S/.test(o))) return T(r, i);
                (r += n), (i = n < 0 ? o.length : 0);
              }
            }
          }
          function f(e, n, r) {
            var i;
            if (e.findMatchingBracket && (i = e.findMatchingBracket(n, { strict: !0 })) && i.match && (i.forward ? 1 : -1) == r)
              return r > 0 ? T(i.to.line, i.to.ch + 1) : i.to;
            for (var o = !0; ; o = !1) {
              var a = e.getTokenAt(n),
                s = T(n.line, r < 0 ? a.start : a.end);
              if (!(o && r > 0 && a.end == n.ch) && /\w/.test(a.string)) return s;
              var l = e.findPosH(s, r, "char");
              if (t(s, l)) return n;
              n = l;
            }
          }
          function d(e, t) {
            var n = e.state.emacsPrefix;
            return n ? (k(e), "-" == n ? -1 : Number(n)) : t ? null : 1;
          }
          function h(e) {
            var t =
              "string" == typeof e
                ? function (t) {
                    t.execCommand(e);
                  }
                : e;
            return function (e) {
              var n = d(e);
              t(e);
              for (var r = 1; r < n; ++r) t(e);
            };
          }
          function p(e, n, r, i) {
            var o = d(e);
            o < 0 && ((i = -i), (o = -o));
            for (var a = 0; a < o; ++a) {
              var s = r(e, n, i);
              if (t(s, n)) break;
              n = s;
            }
            return n;
          }
          function m(e, t) {
            var n = function (n) {
              n.extendSelection(p(n, n.getCursor(), e, t));
            };
            return (n.motion = !0), n;
          }
          function g(e, t, n, r) {
            for (var o, a = e.listSelections(), s = a.length; s--; ) i(e, (o = a[s].head), p(e, o, t, n), r);
          }
          function v(e, t) {
            if (e.somethingSelected()) {
              for (var n, r = e.listSelections(), o = r.length; o--; ) i(e, (n = r[o]).anchor, n.head, t);
              return !0;
            }
          }
          function y(e, t) {
            e.state.emacsPrefix
              ? "-" != t && (e.state.emacsPrefix += t)
              : ((e.state.emacsPrefix = t), e.on("keyHandled", b), e.on("inputRead", w));
          }
          function b(e, t) {
            e.state.emacsPrefixMap || N.hasOwnProperty(t) || k(e);
          }
          function k(e) {
            (e.state.emacsPrefix = null), e.off("keyHandled", b), e.off("inputRead", w);
          }
          function w(e, t) {
            var n = d(e);
            if (n > 1 && "+input" == t.origin) {
              for (var r = t.text.join("\n"), i = "", o = 1; o < n; ++o) i += r;
              e.replaceSelection(i);
            }
          }
          function C(e, t) {
            ("string" != typeof t || (!/^\d$/.test(t) && "Ctrl-U" != t)) &&
              (e.removeKeyMap(P), (e.state.emacsPrefixMap = !1), e.off("keyHandled", C), e.off("inputRead", C));
          }
          function x(e) {
            e.setCursor(e.getCursor()),
              e.setExtending(!e.getExtending()),
              e.on("change", function () {
                e.setExtending(!1);
              });
          }
          function S(e) {
            e.setExtending(!1), e.setCursor(e.getCursor());
          }
          function M(e, t) {
            var n = e.getCursor(),
              r = e.findPosH(n, 1, "word");
            e.replaceRange(t(e.getRange(n, r)), n, r), e.setCursor(r);
          }
          function L(e) {
            (P[e] = function (t) {
              y(t, e);
            }),
              (E["Ctrl-" + e] = function (t) {
                y(t, e);
              }),
              (N["Ctrl-" + e] = !0);
          }
          var T = e.Pos,
            A = [],
            O = null,
            N = { "Alt-G": !0, "Ctrl-X": !0, "Ctrl-Q": !0, "Ctrl-U": !0 };
          e.emacs = { kill: i, killRegion: v, repeated: h };
          for (
            var E = (e.keyMap.emacs = e.normalizeKeyMap({
                "Ctrl-W": function (e) {
                  i(e, e.getCursor("start"), e.getCursor("end"), !0);
                },
                "Ctrl-K": h(function (e) {
                  var t = e.getCursor(),
                    n = e.clipPos(T(t.line)),
                    r = e.getRange(t, n);
                  /\S/.test(r) || ((r += "\n"), (n = T(t.line + 1, 0))), i(e, t, n, "grow", r);
                }),
                "Alt-W": function (e) {
                  n(e.getSelection()), S(e);
                },
                "Ctrl-Y": function (e) {
                  var t = e.getCursor();
                  e.replaceRange(r(d(e)), t, t, "paste"), e.setSelection(t, e.getCursor());
                },
                "Alt-Y": function (e) {
                  e.replaceSelection((A.length > 1 && A.pop(), r()), "around", "paste");
                },
                "Ctrl-Space": x,
                "Ctrl-Shift-2": x,
                "Ctrl-F": m(o, 1),
                "Ctrl-B": m(o, -1),
                Right: m(o, 1),
                Left: m(o, -1),
                "Ctrl-D": function (e) {
                  g(e, o, 1, !1);
                },
                Delete: function (e) {
                  v(e, !1) || g(e, o, 1, !1);
                },
                "Ctrl-H": function (e) {
                  g(e, o, -1, !1);
                },
                Backspace: function (e) {
                  v(e, !1) || g(e, o, -1, !1);
                },
                "Alt-F": m(a, 1),
                "Alt-B": m(a, -1),
                "Alt-Right": m(a, 1),
                "Alt-Left": m(a, -1),
                "Alt-D": function (e) {
                  g(e, a, 1, "grow");
                },
                "Alt-Backspace": function (e) {
                  g(e, a, -1, "grow");
                },
                "Ctrl-N": m(s, 1),
                "Ctrl-P": m(s, -1),
                Down: m(s, 1),
                Up: m(s, -1),
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                End: "goLineEnd",
                Home: "goLineStart",
                "Alt-V": m(l, -1),
                "Ctrl-V": m(l, 1),
                PageUp: m(l, -1),
                PageDown: m(l, 1),
                "Ctrl-Up": m(c, -1),
                "Ctrl-Down": m(c, 1),
                "Alt-A": m(u, -1),
                "Alt-E": m(u, 1),
                "Alt-K": function (e) {
                  g(e, u, 1, "grow");
                },
                "Ctrl-Alt-K": function (e) {
                  g(e, f, 1, "grow");
                },
                "Ctrl-Alt-Backspace": function (e) {
                  g(e, f, -1, "grow");
                },
                "Ctrl-Alt-F": m(f, 1),
                "Ctrl-Alt-B": m(f, -1),
                "Shift-Ctrl-Alt-2": function (e) {
                  var t = e.getCursor();
                  e.setSelection(p(e, t, f, 1), t);
                },
                "Ctrl-Alt-T": function (e) {
                  var t = f(e, e.getCursor(), -1),
                    n = f(e, t, 1),
                    r = f(e, n, 1),
                    i = f(e, r, -1);
                  e.replaceRange(e.getRange(i, r) + e.getRange(n, i) + e.getRange(t, n), t, r);
                },
                "Ctrl-Alt-U": h(function (e) {
                  for (var t = e.getCursor(), n = t.line, r = t.ch, i = []; n >= e.firstLine(); ) {
                    for (var o = e.getLine(n), a = null == r ? o.length : r; a > 0; )
                      if (")" == (r = o.charAt(--a))) i.push("(");
                      else if ("]" == r) i.push("[");
                      else if ("}" == r) i.push("{");
                      else if (/[\(\{\[]/.test(r) && (!i.length || i.pop() != r)) return e.extendSelection(T(n, a));
                    --n, (r = null);
                  }
                }),
                "Alt-Space": function (e) {
                  for (var t = e.getCursor(), n = t.ch, r = t.ch, i = e.getLine(t.line); n && /\s/.test(i.charAt(n - 1)); ) --n;
                  for (; r < i.length && /\s/.test(i.charAt(r)); ) ++r;
                  e.replaceRange(" ", T(t.line, n), T(t.line, r));
                },
                "Ctrl-O": h(function (e) {
                  e.replaceSelection("\n", "start");
                }),
                "Ctrl-T": h(function (e) {
                  e.execCommand("transposeChars");
                }),
                "Alt-C": h(function (e) {
                  M(e, function (e) {
                    var t = e.search(/\w/);
                    return -1 == t ? e : e.slice(0, t) + e.charAt(t).toUpperCase() + e.slice(t + 1).toLowerCase();
                  });
                }),
                "Alt-U": h(function (e) {
                  M(e, function (e) {
                    return e.toUpperCase();
                  });
                }),
                "Alt-L": h(function (e) {
                  M(e, function (e) {
                    return e.toLowerCase();
                  });
                }),
                "Alt-;": "toggleComment",
                "Ctrl-/": h("undo"),
                "Shift-Ctrl--": h("undo"),
                "Ctrl-Z": h("undo"),
                "Cmd-Z": h("undo"),
                "Shift-Ctrl-Z": "redo",
                "Shift-Alt-,": "goDocStart",
                "Shift-Alt-.": "goDocEnd",
                "Ctrl-S": "findPersistentNext",
                "Ctrl-R": "findPersistentPrev",
                "Ctrl-G": function (e) {
                  e.execCommand("clearSearch"), S(e);
                },
                "Shift-Alt-5": "replace",
                "Alt-/": "autocomplete",
                Enter: "newlineAndIndent",
                "Ctrl-J": h(function (e) {
                  e.replaceSelection("\n", "end");
                }),
                Tab: "indentAuto",
                "Alt-G G": function (e) {
                  var t = d(e, !0);
                  if (null != t && t > 0) return e.setCursor(t - 1);
                  !(function (e, t, n) {
                    e.openDialog ? e.openDialog(t + ': <input type="text" style="width: 10em"/>', n, { bottom: !0 }) : n(prompt(t, ""));
                  })(e, "Goto line", function (t) {
                    var n;
                    t && !isNaN((n = Number(t))) && n == (0 | n) && n > 0 && e.setCursor(n - 1);
                  });
                },
                "Ctrl-X Tab": function (e) {
                  e.indentSelection(d(e, !0) || e.getOption("indentUnit"));
                },
                "Ctrl-X Ctrl-X": function (e) {
                  e.setSelection(e.getCursor("head"), e.getCursor("anchor"));
                },
                "Ctrl-X Ctrl-S": "save",
                "Ctrl-X Ctrl-W": "save",
                "Ctrl-X S": "saveAll",
                "Ctrl-X F": "open",
                "Ctrl-X U": h("undo"),
                "Ctrl-X K": "close",
                "Ctrl-X Delete": function (e) {
                  i(e, e.getCursor(), u(e, e.getCursor(), 1), "grow");
                },
                "Ctrl-X H": "selectAll",
                "Ctrl-Q Tab": h("insertTab"),
                "Ctrl-U": function (e) {
                  (e.state.emacsPrefixMap = !0), e.addKeyMap(P), e.on("keyHandled", C), e.on("inputRead", C);
                },
                fallthrough: "default"
              })),
              P = { "Ctrl-G": k },
              I = 0;
            I < 10;
            ++I
          )
            L(String(I));
          L("-");
        })(n(4538));
      },
      9573: (e, t, n) => {
        !(function (e) {
          "use strict";
          (e.keyMap.pcDefault["Alt-Up"] = "swapLineUp"),
            (e.keyMap.pcDefault["Alt-Down"] = "swapLineDown"),
            (e.keyMap.pcDefault["Ctrl-Space"] = "autocomplete"),
            (e.keyMap.macDefault["Alt-Space"] = "autocomplete"),
            (e.commands.backOrClose = function (e) {
              var t = e.execCommand("clearSearch");
              return !0 === t ? t : e.getSelection() ? (e.setCursor(e.getCursor()), !0) : void e.execCommand("close");
            }),
            (e.keyMap.default.Esc = "backOrClose"),
            (e.keyMap.default["Alt-Pause"] = "nextTheme"),
            e.defineExtension("showInCenter", function () {
              return e.commands.showInCenter(this);
            }),
            (e.commands.intelligentTab = function (t) {
              if (t.getOption("indentByTab")) {
                var n = t.getCursor("head"),
                  r = t.getCursor("anchor");
                t.operation(function () {
                  for (var e = Math.min(n.line, r.line), i = Math.max(n.line, r.line), o = e; o <= i; o++) t.indentLine(o, "smart");
                });
              } else {
                if (t.getOption("indentWithTabs")) return e.Pass;
                var i = new Array(t.getOption("indentUnit") + 1).join(" ");
                t.replaceSelection(i);
              }
            }),
            (e.keyMap.default.Tab = "intelligentTab");
        })(n(4538));
      },
      4174: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = e.keyMap.pcDefault,
            n = e.keyMap.macDefault,
            r = e.Pos;
          (e.commands.splitSelection = function (e) {
            for (var t = [], n = e.getCursor("from"), i = e.getCursor("to"), o = n.line; o <= i.line; ++o)
              t.push({ anchor: o == n.line ? n : r(o, 0), head: o == i.line ? i : r(o) });
            e.setSelections(t, 0);
          }),
            (e.commands.addNextOccurrenceToSelection = function (e) {
              var t = e.getCursor("to"),
                n = e.getSearchCursor(e.getRange(e.getCursor("from"), t), t);
              n.findNext() && e.addSelection(n.from(), n.to());
            }),
            (e.commands.selectMatchingPartsOfCurrentSelection = function (e) {
              e.somethingSelected() &&
                (function (e, t, n, r) {
                  e.openDialog
                    ? e.openDialog(
                        'Match: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp)</span>',
                        r
                      )
                    : r(prompt("Match:", ""));
                })(e, 0, 0, function (t) {
                  var n = t.match(/^\/(.*)\/([a-z]*)$/);
                  n && (t = new RegExp(n[1], -1 == n[2].indexOf("i") ? "" : "i")), e.selectMatches(t);
                });
            }),
            (t["Shift-Ctrl-L"] = n["Shift-Cmd-L"] = "splitSelection"),
            (t["Ctrl-D"] = n["Cmd-D"] = "addNextOccurrenceToSelection"),
            (t["Alt-F"] = n["Alt-F"] = "selectMatchingPartsOfCurrentSelection");
        })(n(4538)),
          (function (e) {
            "use strict";
            var t = e.keyMap.pcDefault,
              n = e.keyMap.macDefault,
              r = e.Pos;
            (e.commands.splitSelection = function (e) {
              for (var t = [], n = e.getCursor("from"), i = e.getCursor("to"), o = n.line; o <= i.line; ++o)
                t.push({ anchor: o == n.line ? n : r(o, 0), head: o == i.line ? i : r(o) });
              e.setSelections(t, 0);
            }),
              (e.commands.addNextOccurrenceToSelection = function (e) {
                var t = e.getCursor("to"),
                  n = e.getSearchCursor(e.getRange(e.getCursor("from"), t), t);
                n.findNext() && e.addSelection(n.from(), n.to());
              }),
              (e.commands.selectMatchingPartsOfCurrentSelection = function (e) {
                e.somethingSelected() &&
                  (function (e, t, n, r) {
                    e.openDialog
                      ? e.openDialog(
                          'Match: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp)</span>',
                          r
                        )
                      : r(prompt("Match:", ""));
                  })(e, 0, 0, function (t) {
                    var n = t.match(/^\/(.*)\/([a-z]*)$/);
                    n && (t = new RegExp(n[1], -1 == n[2].indexOf("i") ? "" : "i")), e.selectMatches(t);
                  });
              }),
              (t["Shift-Ctrl-L"] = n["Shift-Cmd-L"] = "splitSelection"),
              (t["Ctrl-D"] = n["Cmd-D"] = "addNextOccurrenceToSelection"),
              (t["Alt-F"] = n["Alt-F"] = "selectMatchingPartsOfCurrentSelection");
          })(n(4538));
      },
      1626: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(t, n) {
            t.extendSelectionsBy(function (r) {
              return t.display.shift || t.doc.extend || r.empty()
                ? (function (t, n, r) {
                    if (r < 0 && 0 == n.ch) return t.clipPos(d(n.line - 1));
                    var i = t.getLine(n.line);
                    if (r > 0 && n.ch >= i.length) return t.clipPos(d(n.line + 1, 0));
                    for (var o, a = "start", s = n.ch, l = s, c = r < 0 ? 0 : i.length, u = 0; l != c; l += r, u++) {
                      var f = i.charAt(r < 0 ? l - 1 : l),
                        h = "_" != f && e.isWordChar(f) ? "w" : "o";
                      if (("w" == h && f.toUpperCase() == f && (h = "W"), "start" == a)) "o" != h ? ((a = "in"), (o = h)) : (s = l + r);
                      else if ("in" == a && o != h) {
                        if (("w" == o && "W" == h && r < 0 && l--, "W" == o && "w" == h && r > 0)) {
                          if (l == s + 1) {
                            o = "w";
                            continue;
                          }
                          l--;
                        }
                        break;
                      }
                    }
                    return d(n.line, l);
                  })(t.doc, r.head, n)
                : n < 0
                ? r.from()
                : r.to();
            });
          }
          function n(t, n) {
            if (t.isReadOnly()) return e.Pass;
            t.operation(function () {
              for (var e = t.listSelections().length, r = [], i = -1, o = 0; o < e; o++) {
                var a = t.listSelections()[o].head;
                if (!(a.line <= i)) {
                  var s = d(a.line + (n ? 0 : 1), 0);
                  t.replaceRange("\n", s, null, "+insertLine"),
                    t.indentLine(s.line, null, !0),
                    r.push({ head: s, anchor: s }),
                    (i = a.line + 1);
                }
              }
              t.setSelections(r);
            }),
              t.execCommand("indentAuto");
          }
          function r(t, n) {
            for (var r = n.ch, i = r, o = t.getLine(n.line); r && e.isWordChar(o.charAt(r - 1)); ) --r;
            for (; i < o.length && e.isWordChar(o.charAt(i)); ) ++i;
            return { from: d(n.line, r), to: d(n.line, i), word: o.slice(r, i) };
          }
          function i(e, t) {
            for (var n = e.listSelections(), r = [], i = 0; i < n.length; i++) {
              var o = n[i],
                a = e.findPosV(o.anchor, t, "line", o.anchor.goalColumn),
                s = e.findPosV(o.head, t, "line", o.head.goalColumn);
              (a.goalColumn = null != o.anchor.goalColumn ? o.anchor.goalColumn : e.cursorCoords(o.anchor, "div").left),
                (s.goalColumn = null != o.head.goalColumn ? o.head.goalColumn : e.cursorCoords(o.head, "div").left);
              var l = { anchor: a, head: s };
              r.push(o), r.push(l);
            }
            e.setSelections(r);
          }
          function o(t) {
            for (var n = t.listSelections(), r = [], i = 0; i < n.length; i++) {
              var o = n[i],
                a = o.head,
                s = t.scanForBracket(a, -1);
              if (!s) return !1;
              for (;;) {
                var l = t.scanForBracket(a, 1);
                if (!l) return !1;
                if (l.ch == h.charAt(h.indexOf(s.ch) + 1)) {
                  var c = d(s.pos.line, s.pos.ch + 1);
                  if (0 != e.cmpPos(c, o.from()) || 0 != e.cmpPos(l.pos, o.to())) {
                    r.push({ anchor: c, head: l.pos });
                    break;
                  }
                  if (!(s = t.scanForBracket(s.pos, -1))) return !1;
                }
                a = d(l.pos.line, l.pos.ch + 1);
              }
            }
            return t.setSelections(r), !0;
          }
          function a(e) {
            return e ? (/\bpunctuation\b/.test(e) ? e : void 0) : null;
          }
          function s(t, n) {
            if (t.isReadOnly()) return e.Pass;
            for (var r, i = t.listSelections(), o = [], a = 0; a < i.length; a++) {
              var s = i[a];
              if (!s.empty()) {
                for (var l = s.from().line, c = s.to().line; a < i.length - 1 && i[a + 1].from().line == c; ) c = i[++a].to().line;
                i[a].to().ch || c--, o.push(l, c);
              }
            }
            o.length ? (r = !0) : o.push(t.firstLine(), t.lastLine()),
              t.operation(function () {
                for (var e = [], i = 0; i < o.length; i += 2) {
                  var a = o[i],
                    s = o[i + 1],
                    l = d(a, 0),
                    c = d(s),
                    u = t.getRange(l, c, !1);
                  n
                    ? u.sort()
                    : u.sort(function (e, t) {
                        var n = e.toUpperCase(),
                          r = t.toUpperCase();
                        return n != r && ((e = n), (t = r)), e < t ? -1 : e == t ? 0 : 1;
                      }),
                    t.replaceRange(u, l, c),
                    r && e.push({ anchor: l, head: d(s + 1, 0) });
                }
                r && t.setSelections(e, 0);
              });
          }
          function l(t, n) {
            t.operation(function () {
              for (var i = t.listSelections(), o = [], a = [], s = 0; s < i.length; s++)
                (c = i[s]).empty() ? (o.push(s), a.push("")) : a.push(n(t.getRange(c.from(), c.to())));
              var l;
              for (t.replaceSelections(a, "around", "case"), s = o.length - 1; s >= 0; s--) {
                var c = i[o[s]];
                if (!(l && e.cmpPos(c.head, l) > 0)) {
                  var u = r(t, c.head);
                  (l = u.from), t.replaceRange(n(u.word), u.from, u.to);
                }
              }
            });
          }
          function c(t) {
            var n = t.getCursor("from"),
              i = t.getCursor("to");
            if (0 == e.cmpPos(n, i)) {
              var o = r(t, n);
              if (!o.word) return;
              (n = o.from), (i = o.to);
            }
            return { from: n, to: i, query: t.getRange(n, i), word: o };
          }
          function u(e, t) {
            var n = c(e);
            if (n) {
              var r = n.query,
                i = e.getSearchCursor(r, t ? n.to : n.from);
              (t ? i.findNext() : i.findPrevious())
                ? e.setSelection(i.from(), i.to())
                : ((i = e.getSearchCursor(r, t ? d(e.firstLine(), 0) : e.clipPos(d(e.lastLine())))),
                  (t ? i.findNext() : i.findPrevious()) ? e.setSelection(i.from(), i.to()) : n.word && e.setSelection(n.from, n.to));
            }
          }
          var f = e.commands,
            d = e.Pos;
          (f.goSubwordLeft = function (e) {
            t(e, -1);
          }),
            (f.goSubwordRight = function (e) {
              t(e, 1);
            }),
            (f.scrollLineUp = function (e) {
              var t = e.getScrollInfo();
              if (!e.somethingSelected()) {
                var n = e.lineAtHeight(t.top + t.clientHeight, "local");
                e.getCursor().line >= n && e.execCommand("goLineUp");
              }
              e.scrollTo(null, t.top - e.defaultTextHeight());
            }),
            (f.scrollLineDown = function (e) {
              var t = e.getScrollInfo();
              if (!e.somethingSelected()) {
                var n = e.lineAtHeight(t.top, "local") + 1;
                e.getCursor().line <= n && e.execCommand("goLineDown");
              }
              e.scrollTo(null, t.top + e.defaultTextHeight());
            }),
            (f.splitSelectionByLine = function (e) {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                for (var i = t[r].from(), o = t[r].to(), a = i.line; a <= o.line; ++a)
                  (o.line > i.line && a == o.line && 0 == o.ch) ||
                    n.push({ anchor: a == i.line ? i : d(a, 0), head: a == o.line ? o : d(a) });
              e.setSelections(n, 0);
            }),
            (f.singleSelectionTop = function (t) {
              var n;
              if (!((n = t.listSelections()) && n.length > 1)) return e.Pass;
              var r = n[0];
              t.setSelection(r.anchor, r.head, { scroll: !1 });
            }),
            (f.selectLine = function (e) {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
                var i = t[r];
                n.push({ anchor: d(i.from().line, 0), head: d(i.to().line + 1, 0) });
              }
              e.setSelections(n);
            }),
            (f.insertLineAfter = function (e) {
              return n(e, !1);
            }),
            (f.insertLineBefore = function (e) {
              return n(e, !0);
            }),
            (f.selectNextOccurrence = function (t) {
              var n = t.getCursor("from"),
                i = t.getCursor("to"),
                o = t.state.sublimeFindFullWord == t.doc.sel;
              if (0 == e.cmpPos(n, i)) {
                var a = r(t, n);
                if (!a.word) return;
                t.setSelection(a.from, a.to), (o = !0);
              } else {
                var s = t.getRange(n, i),
                  l = o ? new RegExp("\\b" + s + "\\b") : s,
                  c = t.getSearchCursor(l, i),
                  u = c.findNext();
                if (
                  (u || (u = (c = t.getSearchCursor(l, d(t.firstLine(), 0))).findNext()),
                  !u ||
                    (function (t, n, r) {
                      for (var i = 0; i < t.length; i++) if (0 == e.cmpPos(t[i].from(), n) && 0 == e.cmpPos(t[i].to(), r)) return !0;
                      return !1;
                    })(t.listSelections(), c.from(), c.to()))
                )
                  return;
                t.addSelection(c.from(), c.to());
              }
              o && (t.state.sublimeFindFullWord = t.doc.sel);
            }),
            (f.skipAndSelectNextOccurrence = function (t) {
              var n = t.getCursor("anchor"),
                r = t.getCursor("head");
              f.selectNextOccurrence(t),
                0 != e.cmpPos(n, r) &&
                  t.doc.setSelections(
                    t.doc.listSelections().filter(function (e) {
                      return e.anchor != n || e.head != r;
                    })
                  );
            }),
            (f.addCursorToPrevLine = function (e) {
              i(e, -1);
            }),
            (f.addCursorToNextLine = function (e) {
              i(e, 1);
            });
          var h = "(){}[]";
          (f.selectScope = function (e) {
            o(e) || e.execCommand("selectAll");
          }),
            (f.selectBetweenBrackets = function (t) {
              if (!o(t)) return e.Pass;
            }),
            (f.goToBracket = function (t) {
              t.extendSelectionsBy(function (n) {
                var r = t.scanForBracket(n.head, 1, a(t.getTokenTypeAt(n.head)));
                if (r && 0 != e.cmpPos(r.pos, n.head)) return r.pos;
                var i = t.scanForBracket(n.head, -1, a(t.getTokenTypeAt(d(n.head.line, n.head.ch + 1))));
                return (i && d(i.pos.line, i.pos.ch + 1)) || n.head;
              });
            }),
            (f.swapLineUp = function (t) {
              if (t.isReadOnly()) return e.Pass;
              for (var n = t.listSelections(), r = [], i = t.firstLine() - 1, o = [], a = 0; a < n.length; a++) {
                var s = n[a],
                  l = s.from().line - 1,
                  c = s.to().line;
                o.push({ anchor: d(s.anchor.line - 1, s.anchor.ch), head: d(s.head.line - 1, s.head.ch) }),
                  0 != s.to().ch || s.empty() || --c,
                  l > i ? r.push(l, c) : r.length && (r[r.length - 1] = c),
                  (i = c);
              }
              t.operation(function () {
                for (var e = 0; e < r.length; e += 2) {
                  var n = r[e],
                    i = r[e + 1],
                    a = t.getLine(n);
                  t.replaceRange("", d(n, 0), d(n + 1, 0), "+swapLine"),
                    i > t.lastLine()
                      ? t.replaceRange("\n" + a, d(t.lastLine()), null, "+swapLine")
                      : t.replaceRange(a + "\n", d(i, 0), null, "+swapLine");
                }
                t.setSelections(o), t.scrollIntoView();
              });
            }),
            (f.swapLineDown = function (t) {
              if (t.isReadOnly()) return e.Pass;
              for (var n = t.listSelections(), r = [], i = t.lastLine() + 1, o = n.length - 1; o >= 0; o--) {
                var a = n[o],
                  s = a.to().line + 1,
                  l = a.from().line;
                0 != a.to().ch || a.empty() || s--, s < i ? r.push(s, l) : r.length && (r[r.length - 1] = l), (i = l);
              }
              t.operation(function () {
                for (var e = r.length - 2; e >= 0; e -= 2) {
                  var n = r[e],
                    i = r[e + 1],
                    o = t.getLine(n);
                  n == t.lastLine()
                    ? t.replaceRange("", d(n - 1), d(n), "+swapLine")
                    : t.replaceRange("", d(n, 0), d(n + 1, 0), "+swapLine"),
                    t.replaceRange(o + "\n", d(i, 0), null, "+swapLine");
                }
                t.scrollIntoView();
              });
            }),
            (f.toggleCommentIndented = function (e) {
              e.toggleComment({ indent: !0 });
            }),
            (f.joinLines = function (e) {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
                for (var i = t[r], o = i.from(), a = o.line, s = i.to().line; r < t.length - 1 && t[r + 1].from().line == s; )
                  s = t[++r].to().line;
                n.push({ start: a, end: s, anchor: !i.empty() && o });
              }
              e.operation(function () {
                for (var t = 0, r = [], i = 0; i < n.length; i++) {
                  for (var o, a = n[i], s = a.anchor && d(a.anchor.line - t, a.anchor.ch), l = a.start; l <= a.end; l++) {
                    var c = l - t;
                    l == a.end && (o = d(c, e.getLine(c).length + 1)),
                      c < e.lastLine() && (e.replaceRange(" ", d(c), d(c + 1, /^\s*/.exec(e.getLine(c + 1))[0].length)), ++t);
                  }
                  r.push({
                    anchor: s || o,
                    head: o
                  });
                }
                e.setSelections(r, 0);
              });
            }),
            (f.duplicateLine = function (e) {
              e.operation(function () {
                for (var t = e.listSelections().length, n = 0; n < t; n++) {
                  var r = e.listSelections()[n];
                  r.empty()
                    ? e.replaceRange(e.getLine(r.head.line) + "\n", d(r.head.line, 0))
                    : e.replaceRange(e.getRange(r.from(), r.to()), r.from());
                }
                e.scrollIntoView();
              });
            }),
            (f.sortLines = function (e) {
              s(e, !0);
            }),
            (f.sortLinesInsensitive = function (e) {
              s(e, !1);
            }),
            (f.nextBookmark = function (e) {
              var t = e.state.sublimeBookmarks;
              if (t)
                for (; t.length; ) {
                  var n = t.shift(),
                    r = n.find();
                  if (r) return t.push(n), e.setSelection(r.from, r.to);
                }
            }),
            (f.prevBookmark = function (e) {
              var t = e.state.sublimeBookmarks;
              if (t)
                for (; t.length; ) {
                  t.unshift(t.pop());
                  var n = t[t.length - 1].find();
                  if (n) return e.setSelection(n.from, n.to);
                  t.pop();
                }
            }),
            (f.toggleBookmark = function (e) {
              for (var t = e.listSelections(), n = e.state.sublimeBookmarks || (e.state.sublimeBookmarks = []), r = 0; r < t.length; r++) {
                for (var i = t[r].from(), o = t[r].to(), a = t[r].empty() ? e.findMarksAt(i) : e.findMarks(i, o), s = 0; s < a.length; s++)
                  if (a[s].sublimeBookmark) {
                    a[s].clear();
                    for (var l = 0; l < n.length; l++) n[l] == a[s] && n.splice(l--, 1);
                    break;
                  }
                s == a.length && n.push(e.markText(i, o, { sublimeBookmark: !0, clearWhenEmpty: !1 }));
              }
            }),
            (f.clearBookmarks = function (e) {
              var t = e.state.sublimeBookmarks;
              if (t) for (var n = 0; n < t.length; n++) t[n].clear();
              t.length = 0;
            }),
            (f.selectBookmarks = function (e) {
              var t = e.state.sublimeBookmarks,
                n = [];
              if (t)
                for (var r = 0; r < t.length; r++) {
                  var i = t[r].find();
                  i ? n.push({ anchor: i.from, head: i.to }) : t.splice(r--, 0);
                }
              n.length && e.setSelections(n, 0);
            }),
            (f.smartBackspace = function (t) {
              if (t.somethingSelected()) return e.Pass;
              t.operation(function () {
                for (var n = t.listSelections(), r = t.getOption("indentUnit"), i = n.length - 1; i >= 0; i--) {
                  var o = n[i].head,
                    a = t.getRange({ line: o.line, ch: 0 }, o),
                    s = e.countColumn(a, null, t.getOption("tabSize")),
                    l = t.findPosH(o, -1, "char", !1);
                  if (a && !/\S/.test(a) && s % r == 0) {
                    var c = new d(o.line, e.findColumn(a, s - r, r));
                    c.ch != o.ch && (l = c);
                  }
                  t.replaceRange("", l, o, "+delete");
                }
              });
            }),
            (f.delLineRight = function (e) {
              e.operation(function () {
                for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                  e.replaceRange("", t[n].anchor, d(t[n].to().line), "+delete");
                e.scrollIntoView();
              });
            }),
            (f.upcaseAtCursor = function (e) {
              l(e, function (e) {
                return e.toUpperCase();
              });
            }),
            (f.downcaseAtCursor = function (e) {
              l(e, function (e) {
                return e.toLowerCase();
              });
            }),
            (f.setSublimeMark = function (e) {
              e.state.sublimeMark && e.state.sublimeMark.clear(), (e.state.sublimeMark = e.setBookmark(e.getCursor()));
            }),
            (f.selectToSublimeMark = function (e) {
              var t = e.state.sublimeMark && e.state.sublimeMark.find();
              t && e.setSelection(e.getCursor(), t);
            }),
            (f.deleteToSublimeMark = function (t) {
              var n = t.state.sublimeMark && t.state.sublimeMark.find();
              if (n) {
                var r = t.getCursor(),
                  i = n;
                if (e.cmpPos(r, i) > 0) {
                  var o = i;
                  (i = r), (r = o);
                }
                (t.state.sublimeKilled = t.getRange(r, i)), t.replaceRange("", r, i);
              }
            }),
            (f.swapWithSublimeMark = function (e) {
              var t = e.state.sublimeMark && e.state.sublimeMark.find();
              t && (e.state.sublimeMark.clear(), (e.state.sublimeMark = e.setBookmark(e.getCursor())), e.setCursor(t));
            }),
            (f.sublimeYank = function (e) {
              null != e.state.sublimeKilled && e.replaceSelection(e.state.sublimeKilled, null, "paste");
            }),
            (f.showInCenter = function (e) {
              var t = e.cursorCoords(null, "local");
              e.scrollTo(null, (t.top + t.bottom) / 2 - e.getScrollInfo().clientHeight / 2);
            }),
            (f.findUnder = function (e) {
              u(e, !0);
            }),
            (f.findUnderPrevious = function (e) {
              u(e, !1);
            }),
            (f.findAllUnder = function (e) {
              var t = c(e);
              if (t) {
                for (var n = e.getSearchCursor(t.query), r = [], i = -1; n.findNext(); )
                  r.push({
                    anchor: n.from(),
                    head: n.to()
                  }),
                    n.from().line <= t.from.line && n.from().ch <= t.from.ch && i++;
                e.setSelections(r, i);
              }
            });
          var p = e.keyMap;
          (p["Ctrl+Shift-/"] = p["Ctrl+Shift-7"] =
            function (e) {
              e.toggleComment({ indent: !0, blockComment: !0 });
            }),
            (p.macSublime = {
              "Shift-Cmd-P": "reindentall",
              "Shift-Cmd-N": "lint_script",
              "Cmd-Left": "goLineStartSmart",
              "Shift-Tab": "indentLess",
              "Shift-Ctrl-K": "deleteLine",
              "Alt-Q": "wrapLines",
              "Ctrl-Left": "goSubwordLeft",
              "Ctrl-Right": "goSubwordRight",
              "Ctrl-Alt-Up": "scrollLineUp",
              "Ctrl-Alt-Down": "scrollLineDown",
              "Cmd-L": "selectLine",
              "Shift-Cmd-L": "splitSelectionByLine",
              Esc: "singleSelectionTop",
              "Cmd-Enter": "insertLineAfter",
              "Shift-Cmd-Enter": "insertLineBefore",
              "Cmd-D": "selectNextOccurrence",
              "Shift-Cmd-Space": "selectScope",
              "Shift-Cmd-M": "selectBetweenBrackets",
              "Cmd-M": "goToBracket",
              "Cmd-Ctrl-Up": "swapLineUp",
              "Cmd-Ctrl-Down": "swapLineDown",
              "Cmd-/": "toggleCommentIndented",
              "Cmd-J": "joinLines",
              "Shift-Cmd-D": "duplicateLine",
              F5: "sortLines",
              "Cmd-F5": "sortLinesInsensitive",
              F2: "nextBookmark",
              "Shift-F2": "prevBookmark",
              "Cmd-F2": "toggleBookmark",
              "Shift-Cmd-F2": "clearBookmarks",
              "Alt-F2": "selectBookmarks",
              Backspace: "smartBackspace",
              "Cmd-K Cmd-D": "skipAndSelectNextOccurrence",
              "Cmd-K Cmd-K": "delLineRight",
              "Cmd-K Cmd-U": "upcaseAtCursor",
              "Cmd-K Cmd-L": "downcaseAtCursor",
              "Cmd-K Cmd-Space": "setSublimeMark",
              "Cmd-K Cmd-A": "selectToSublimeMark",
              "Cmd-K Cmd-W": "deleteToSublimeMark",
              "Cmd-K Cmd-X": "swapWithSublimeMark",
              "Cmd-K Cmd-Y": "sublimeYank",
              "Cmd-K Cmd-C": "showInCenter",
              "Cmd-K Cmd-G": "clearBookmarks",
              "Cmd-K Cmd-Backspace": "delLineLeft",
              "Cmd-K Cmd-1": "foldAll",
              "Cmd-K Cmd-0": "unfoldAll",
              "Cmd-K Cmd-J": "unfoldAll",
              "Ctrl-Shift-Up": "addCursorToPrevLine",
              "Ctrl-Shift-Down": "addCursorToNextLine",
              "Cmd-F3": "findUnder",
              "Shift-Cmd-F3": "findUnderPrevious",
              "Alt-F3": "findAllUnder",
              "Shift-Cmd-[": "fold",
              "Shift-Cmd-]": "unfold",
              "Cmd-I": "findIncremental",
              "Shift-Cmd-I": "findIncrementalReverse",
              "Cmd-H": "replace",
              F3: "findNext",
              "Shift-F3": "findPrev",
              fallthrough: "macDefault"
            }),
            e.normalizeKeyMap(p.macSublime),
            (p.pcSublime = {
              "Shift-Ctrl-P": "reindentall",
              "Shift-Ctrl-N": "lint_script",
              "Shift-Tab": "indentLess",
              "Shift-Ctrl-K": "deleteLine",
              "Alt-Q": "wrapLines",
              "Ctrl-T": "transposeChars",
              "Alt-Left": "goSubwordLeft",
              "Alt-Right": "goSubwordRight",
              "Ctrl-Up": "scrollLineUp",
              "Ctrl-Down": "scrollLineDown",
              "Ctrl-L": "selectLine",
              "Shift-Ctrl-L": "splitSelectionByLine",
              Esc: "singleSelectionTop",
              "Ctrl-Enter": "insertLineAfter",
              "Shift-Ctrl-Enter": "insertLineBefore",
              "Ctrl-D": "selectNextOccurrence",
              "Shift-Ctrl-Space": "selectScope",
              "Shift-Ctrl-M": "selectBetweenBrackets",
              "Ctrl-M": "goToBracket",
              "Shift-Ctrl-Up": "swapLineUp",
              "Shift-Ctrl-Down": "swapLineDown",
              "Ctrl-/": "toggleCommentIndented",
              "Ctrl-J": "joinLines",
              "Shift-Ctrl-D": "duplicateLine",
              F9: "sortLines",
              "Ctrl-F9": "sortLinesInsensitive",
              F2: "nextBookmark",
              "Shift-F2": "prevBookmark",
              "Ctrl-F2": "toggleBookmark",
              "Shift-Ctrl-F2": "clearBookmarks",
              "Alt-F2": "selectBookmarks",
              Backspace: "smartBackspace",
              "Ctrl-K Ctrl-D": "skipAndSelectNextOccurrence",
              "Ctrl-K Ctrl-K": "delLineRight",
              "Ctrl-K Ctrl-U": "upcaseAtCursor",
              "Ctrl-K Ctrl-L": "downcaseAtCursor",
              "Ctrl-K Ctrl-Space": "setSublimeMark",
              "Ctrl-K Ctrl-A": "selectToSublimeMark",
              "Ctrl-K Ctrl-W": "deleteToSublimeMark",
              "Ctrl-K Ctrl-X": "swapWithSublimeMark",
              "Ctrl-K Ctrl-Y": "sublimeYank",
              "Ctrl-K Ctrl-C": "showInCenter",
              "Ctrl-K Ctrl-G": "clearBookmarks",
              "Ctrl-K Ctrl-Backspace": "delLineLeft",
              "Ctrl-K Ctrl-1": "foldAll",
              "Ctrl-K Ctrl-0": "unfoldAll",
              "Ctrl-K Ctrl-J": "unfoldAll",
              "Ctrl-Alt-Up": "addCursorToPrevLine",
              "Ctrl-Alt-Down": "addCursorToNextLine",
              "Ctrl-F3": "findUnder",
              "Shift-Ctrl-F3": "findUnderPrevious",
              "Alt-F3": "findAllUnder",
              "Shift-Ctrl-[": "fold",
              "Shift-Ctrl-]": "unfold",
              "Ctrl-I": "findIncremental",
              "Shift-Ctrl-I": "findIncrementalReverse",
              "Ctrl-H": "replace",
              F3: "findNext",
              "Shift-F3": "findPrev",
              fallthrough: "pcDefault"
            }),
            e.normalizeKeyMap(p.pcSublime);
          var m = p.default == p.macDefault;
          p.sublime = m ? p.macSublime : p.pcSublime;
        })(n(4538));
      },
      4514: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = [
              { keys: "<Left>", type: "keyToKey", toKeys: "h" },
              { keys: "<Right>", type: "keyToKey", toKeys: "l" },
              { keys: "<Up>", type: "keyToKey", toKeys: "k" },
              { keys: "<Down>", type: "keyToKey", toKeys: "j" },
              { keys: "<Space>", type: "keyToKey", toKeys: "l" },
              { keys: "<BS>", type: "keyToKey", toKeys: "h", context: "normal" },
              { keys: "<Del>", type: "keyToKey", toKeys: "x", context: "normal" },
              { keys: "<C-Space>", type: "keyToKey", toKeys: "W" },
              { keys: "<C-BS>", type: "keyToKey", toKeys: "B", context: "normal" },
              { keys: "<S-Space>", type: "keyToKey", toKeys: "w" },
              { keys: "<S-BS>", type: "keyToKey", toKeys: "b", context: "normal" },
              { keys: "<C-n>", type: "keyToKey", toKeys: "j" },
              { keys: "<C-p>", type: "keyToKey", toKeys: "k" },
              { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>" },
              { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>" },
              { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>", context: "insert" },
              { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>", context: "insert" },
              { keys: "s", type: "keyToKey", toKeys: "cl", context: "normal" },
              { keys: "s", type: "keyToKey", toKeys: "c", context: "visual" },
              { keys: "S", type: "keyToKey", toKeys: "cc", context: "normal" },
              {
                keys: "S",
                type: "keyToKey",
                toKeys: "VdO",
                context: "visual"
              },
              { keys: "<Home>", type: "keyToKey", toKeys: "0" },
              { keys: "<End>", type: "keyToKey", toKeys: "$" },
              { keys: "<PageUp>", type: "keyToKey", toKeys: "<C-b>" },
              { keys: "<PageDown>", type: "keyToKey", toKeys: "<C-f>" },
              { keys: "<CR>", type: "keyToKey", toKeys: "j^", context: "normal" },
              { keys: "<Ins>", type: "action", action: "toggleOverwrite", context: "insert" },
              { keys: "H", type: "motion", motion: "moveToTopLine", motionArgs: { linewise: !0, toJumplist: !0 } },
              { keys: "M", type: "motion", motion: "moveToMiddleLine", motionArgs: { linewise: !0, toJumplist: !0 } },
              { keys: "L", type: "motion", motion: "moveToBottomLine", motionArgs: { linewise: !0, toJumplist: !0 } },
              { keys: "h", type: "motion", motion: "moveByCharacters", motionArgs: { forward: !1 } },
              { keys: "l", type: "motion", motion: "moveByCharacters", motionArgs: { forward: !0 } },
              { keys: "j", type: "motion", motion: "moveByLines", motionArgs: { forward: !0, linewise: !0 } },
              { keys: "k", type: "motion", motion: "moveByLines", motionArgs: { forward: !1, linewise: !0 } },
              { keys: "gj", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: !0 } },
              { keys: "gk", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: !1 } },
              { keys: "w", type: "motion", motion: "moveByWords", motionArgs: { forward: !0, wordEnd: !1 } },
              { keys: "W", type: "motion", motion: "moveByWords", motionArgs: { forward: !0, wordEnd: !1, bigWord: !0 } },
              { keys: "e", type: "motion", motion: "moveByWords", motionArgs: { forward: !0, wordEnd: !0, inclusive: !0 } },
              { keys: "E", type: "motion", motion: "moveByWords", motionArgs: { forward: !0, wordEnd: !0, bigWord: !0, inclusive: !0 } },
              { keys: "b", type: "motion", motion: "moveByWords", motionArgs: { forward: !1, wordEnd: !1 } },
              { keys: "B", type: "motion", motion: "moveByWords", motionArgs: { forward: !1, wordEnd: !1, bigWord: !0 } },
              { keys: "ge", type: "motion", motion: "moveByWords", motionArgs: { forward: !1, wordEnd: !0, inclusive: !0 } },
              { keys: "gE", type: "motion", motion: "moveByWords", motionArgs: { forward: !1, wordEnd: !0, bigWord: !0, inclusive: !0 } },
              { keys: "{", type: "motion", motion: "moveByParagraph", motionArgs: { forward: !1, toJumplist: !0 } },
              { keys: "}", type: "motion", motion: "moveByParagraph", motionArgs: { forward: !0, toJumplist: !0 } },
              { keys: "(", type: "motion", motion: "moveBySentence", motionArgs: { forward: !1 } },
              { keys: ")", type: "motion", motion: "moveBySentence", motionArgs: { forward: !0 } },
              { keys: "<C-f>", type: "motion", motion: "moveByPage", motionArgs: { forward: !0 } },
              { keys: "<C-b>", type: "motion", motion: "moveByPage", motionArgs: { forward: !1 } },
              { keys: "<C-d>", type: "motion", motion: "moveByScroll", motionArgs: { forward: !0, explicitRepeat: !0 } },
              { keys: "<C-u>", type: "motion", motion: "moveByScroll", motionArgs: { forward: !1, explicitRepeat: !0 } },
              {
                keys: "gg",
                type: "motion",
                motion: "moveToLineOrEdgeOfDocument",
                motionArgs: { forward: !1, explicitRepeat: !0, linewise: !0, toJumplist: !0 }
              },
              {
                keys: "G",
                type: "motion",
                motion: "moveToLineOrEdgeOfDocument",
                motionArgs: { forward: !0, explicitRepeat: !0, linewise: !0, toJumplist: !0 }
              },
              { keys: "0", type: "motion", motion: "moveToStartOfLine" },
              { keys: "^", type: "motion", motion: "moveToFirstNonWhiteSpaceCharacter" },
              { keys: "+", type: "motion", motion: "moveByLines", motionArgs: { forward: !0, toFirstChar: !0 } },
              { keys: "-", type: "motion", motion: "moveByLines", motionArgs: { forward: !1, toFirstChar: !0 } },
              { keys: "_", type: "motion", motion: "moveByLines", motionArgs: { forward: !0, toFirstChar: !0, repeatOffset: -1 } },
              { keys: "$", type: "motion", motion: "moveToEol", motionArgs: { inclusive: !0 } },
              { keys: "%", type: "motion", motion: "moveToMatchedSymbol", motionArgs: { inclusive: !0, toJumplist: !0 } },
              { keys: "f<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: !0, inclusive: !0 } },
              { keys: "F<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: !1 } },
              { keys: "t<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: !0, inclusive: !0 } },
              { keys: "T<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: !1 } },
              { keys: ";", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: !0 } },
              { keys: ",", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: !1 } },
              { keys: "'<character>", type: "motion", motion: "goToMark", motionArgs: { toJumplist: !0, linewise: !0 } },
              {
                keys: "`<character>",
                type: "motion",
                motion: "goToMark",
                motionArgs: { toJumplist: !0 }
              },
              { keys: "]`", type: "motion", motion: "jumpToMark", motionArgs: { forward: !0 } },
              { keys: "[`", type: "motion", motion: "jumpToMark", motionArgs: { forward: !1 } },
              { keys: "]'", type: "motion", motion: "jumpToMark", motionArgs: { forward: !0, linewise: !0 } },
              { keys: "['", type: "motion", motion: "jumpToMark", motionArgs: { forward: !1, linewise: !0 } },
              { keys: "]p", type: "action", action: "paste", isEdit: !0, actionArgs: { after: !0, isEdit: !0, matchIndent: !0 } },
              { keys: "[p", type: "action", action: "paste", isEdit: !0, actionArgs: { after: !1, isEdit: !0, matchIndent: !0 } },
              { keys: "]<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: !0, toJumplist: !0 } },
              { keys: "[<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: !1, toJumplist: !0 } },
              { keys: "|", type: "motion", motion: "moveToColumn" },
              { keys: "o", type: "motion", motion: "moveToOtherHighlightedEnd", context: "visual" },
              { keys: "O", type: "motion", motion: "moveToOtherHighlightedEnd", motionArgs: { sameLine: !0 }, context: "visual" },
              { keys: "d", type: "operator", operator: "delete" },
              { keys: "y", type: "operator", operator: "yank" },
              { keys: "c", type: "operator", operator: "change" },
              { keys: "=", type: "operator", operator: "indentAuto" },
              { keys: ">", type: "operator", operator: "indent", operatorArgs: { indentRight: !0 } },
              { keys: "<", type: "operator", operator: "indent", operatorArgs: { indentRight: !1 } },
              { keys: "g~", type: "operator", operator: "changeCase" },
              { keys: "gu", type: "operator", operator: "changeCase", operatorArgs: { toLower: !0 }, isEdit: !0 },
              { keys: "gU", type: "operator", operator: "changeCase", operatorArgs: { toLower: !1 }, isEdit: !0 },
              { keys: "n", type: "motion", motion: "findNext", motionArgs: { forward: !0, toJumplist: !0 } },
              { keys: "N", type: "motion", motion: "findNext", motionArgs: { forward: !1, toJumplist: !0 } },
              { keys: "gn", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: !0 } },
              { keys: "gN", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: !1 } },
              {
                keys: "x",
                type: "operatorMotion",
                operator: "delete",
                motion: "moveByCharacters",
                motionArgs: {
                  forward: !0
                },
                operatorMotionArgs: { visualLine: !1 }
              },
              {
                keys: "X",
                type: "operatorMotion",
                operator: "delete",
                motion: "moveByCharacters",
                motionArgs: { forward: !1 },
                operatorMotionArgs: { visualLine: !0 }
              },
              {
                keys: "D",
                type: "operatorMotion",
                operator: "delete",
                motion: "moveToEol",
                motionArgs: { inclusive: !0 },
                context: "normal"
              },
              { keys: "D", type: "operator", operator: "delete", operatorArgs: { linewise: !0 }, context: "visual" },
              {
                keys: "Y",
                type: "operatorMotion",
                operator: "yank",
                motion: "expandToLine",
                motionArgs: { linewise: !0 },
                context: "normal"
              },
              {
                keys: "Y",
                type: "operator",
                operator: "yank",
                operatorArgs: { linewise: !0 },
                context: "visual"
              },
              {
                keys: "C",
                type: "operatorMotion",
                operator: "change",
                motion: "moveToEol",
                motionArgs: { inclusive: !0 },
                context: "normal"
              },
              { keys: "C", type: "operator", operator: "change", operatorArgs: { linewise: !0 }, context: "visual" },
              {
                keys: "~",
                type: "operatorMotion",
                operator: "changeCase",
                motion: "moveByCharacters",
                motionArgs: { forward: !0 },
                operatorArgs: { shouldMoveCursor: !0 },
                context: "normal"
              },
              { keys: "~", type: "operator", operator: "changeCase", context: "visual" },
              {
                keys: "<C-w>",
                type: "operatorMotion",
                operator: "delete",
                motion: "moveByWords",
                motionArgs: { forward: !1, wordEnd: !1 },
                context: "insert"
              },
              { keys: "<C-w>", type: "idle", context: "normal" },
              { keys: "<C-i>", type: "action", action: "jumpListWalk", actionArgs: { forward: !0 } },
              { keys: "<C-o>", type: "action", action: "jumpListWalk", actionArgs: { forward: !1 } },
              { keys: "<C-e>", type: "action", action: "scroll", actionArgs: { forward: !0, linewise: !0 } },
              { keys: "<C-y>", type: "action", action: "scroll", actionArgs: { forward: !1, linewise: !0 } },
              {
                keys: "a",
                type: "action",
                action: "enterInsertMode",
                isEdit: !0,
                actionArgs: { insertAt: "charAfter" },
                context: "normal"
              },
              { keys: "A", type: "action", action: "enterInsertMode", isEdit: !0, actionArgs: { insertAt: "eol" }, context: "normal" },
              {
                keys: "A",
                type: "action",
                action: "enterInsertMode",
                isEdit: !0,
                actionArgs: { insertAt: "endOfSelectedArea" },
                context: "visual"
              },
              { keys: "i", type: "action", action: "enterInsertMode", isEdit: !0, actionArgs: { insertAt: "inplace" }, context: "normal" },
              {
                keys: "gi",
                type: "action",
                action: "enterInsertMode",
                isEdit: !0,
                actionArgs: { insertAt: "lastEdit" },
                context: "normal"
              },
              {
                keys: "I",
                type: "action",
                action: "enterInsertMode",
                isEdit: !0,
                actionArgs: { insertAt: "firstNonBlank" },
                context: "normal"
              },
              { keys: "gI", type: "action", action: "enterInsertMode", isEdit: !0, actionArgs: { insertAt: "bol" }, context: "normal" },
              {
                keys: "I",
                type: "action",
                action: "enterInsertMode",
                isEdit: !0,
                actionArgs: { insertAt: "startOfSelectedArea" },
                context: "visual"
              },
              {
                keys: "o",
                type: "action",
                action: "newLineAndEnterInsertMode",
                isEdit: !0,
                interlaceInsertRepeat: !0,
                actionArgs: { after: !0 },
                context: "normal"
              },
              {
                keys: "O",
                type: "action",
                action: "newLineAndEnterInsertMode",
                isEdit: !0,
                interlaceInsertRepeat: !0,
                actionArgs: { after: !1 },
                context: "normal"
              },
              { keys: "v", type: "action", action: "toggleVisualMode" },
              { keys: "V", type: "action", action: "toggleVisualMode", actionArgs: { linewise: !0 } },
              { keys: "<C-v>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: !0 } },
              { keys: "<C-q>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: !0 } },
              { keys: "gv", type: "action", action: "reselectLastSelection" },
              { keys: "J", type: "action", action: "joinLines", isEdit: !0 },
              { keys: "gJ", type: "action", action: "joinLines", actionArgs: { keepSpaces: !0 }, isEdit: !0 },
              { keys: "p", type: "action", action: "paste", isEdit: !0, actionArgs: { after: !0, isEdit: !0 } },
              { keys: "P", type: "action", action: "paste", isEdit: !0, actionArgs: { after: !1, isEdit: !0 } },
              { keys: "r<character>", type: "action", action: "replace", isEdit: !0 },
              { keys: "@<character>", type: "action", action: "replayMacro" },
              { keys: "q<character>", type: "action", action: "enterMacroRecordMode" },
              { keys: "R", type: "action", action: "enterInsertMode", isEdit: !0, actionArgs: { replace: !0 }, context: "normal" },
              {
                keys: "R",
                type: "operator",
                operator: "change",
                operatorArgs: { linewise: !0, fullLine: !0 },
                context: "visual",
                exitVisualBlock: !0
              },
              { keys: "u", type: "action", action: "undo", context: "normal" },
              { keys: "u", type: "operator", operator: "changeCase", operatorArgs: { toLower: !0 }, context: "visual", isEdit: !0 },
              { keys: "U", type: "operator", operator: "changeCase", operatorArgs: { toLower: !1 }, context: "visual", isEdit: !0 },
              { keys: "<C-r>", type: "action", action: "redo" },
              { keys: "m<character>", type: "action", action: "setMark" },
              { keys: '"<character>', type: "action", action: "setRegister" },
              { keys: "zz", type: "action", action: "scrollToCursor", actionArgs: { position: "center" } },
              {
                keys: "z.",
                type: "action",
                action: "scrollToCursor",
                actionArgs: { position: "center" },
                motion: "moveToFirstNonWhiteSpaceCharacter"
              },
              { keys: "zt", type: "action", action: "scrollToCursor", actionArgs: { position: "top" } },
              {
                keys: "z<CR>",
                type: "action",
                action: "scrollToCursor",
                actionArgs: { position: "top" },
                motion: "moveToFirstNonWhiteSpaceCharacter"
              },
              { keys: "z-", type: "action", action: "scrollToCursor", actionArgs: { position: "bottom" } },
              {
                keys: "zb",
                type: "action",
                action: "scrollToCursor",
                actionArgs: { position: "bottom" },
                motion: "moveToFirstNonWhiteSpaceCharacter"
              },
              { keys: ".", type: "action", action: "repeatLastEdit" },
              { keys: "<C-a>", type: "action", action: "incrementNumberToken", isEdit: !0, actionArgs: { increase: !0, backtrack: !1 } },
              { keys: "<C-x>", type: "action", action: "incrementNumberToken", isEdit: !0, actionArgs: { increase: !1, backtrack: !1 } },
              { keys: "<C-t>", type: "action", action: "indent", actionArgs: { indentRight: !0 }, context: "insert" },
              { keys: "<C-d>", type: "action", action: "indent", actionArgs: { indentRight: !1 }, context: "insert" },
              { keys: "a<character>", type: "motion", motion: "textObjectManipulation" },
              { keys: "i<character>", type: "motion", motion: "textObjectManipulation", motionArgs: { textObjectInner: !0 } },
              { keys: "/", type: "search", searchArgs: { forward: !0, querySrc: "prompt", toJumplist: !0 } },
              { keys: "?", type: "search", searchArgs: { forward: !1, querySrc: "prompt", toJumplist: !0 } },
              { keys: "*", type: "search", searchArgs: { forward: !0, querySrc: "wordUnderCursor", wholeWordOnly: !0, toJumplist: !0 } },
              { keys: "#", type: "search", searchArgs: { forward: !1, querySrc: "wordUnderCursor", wholeWordOnly: !0, toJumplist: !0 } },
              { keys: "g*", type: "search", searchArgs: { forward: !0, querySrc: "wordUnderCursor", toJumplist: !0 } },
              { keys: "g#", type: "search", searchArgs: { forward: !1, querySrc: "wordUnderCursor", toJumplist: !0 } },
              {
                keys: ":",
                type: "ex"
              }
            ],
            n = t.length,
            r = [
              { name: "colorscheme", shortName: "colo" },
              { name: "map" },
              { name: "imap", shortName: "im" },
              { name: "nmap", shortName: "nm" },
              { name: "vmap", shortName: "vm" },
              { name: "unmap" },
              { name: "write", shortName: "w" },
              { name: "undo", shortName: "u" },
              { name: "redo", shortName: "red" },
              { name: "set", shortName: "se" },
              { name: "setlocal", shortName: "setl" },
              { name: "setglobal", shortName: "setg" },
              { name: "sort", shortName: "sor" },
              { name: "substitute", shortName: "s", possiblyAsync: !0 },
              { name: "nohlsearch", shortName: "noh" },
              {
                name: "yank",
                shortName: "y"
              },
              { name: "delmarks", shortName: "delm" },
              { name: "registers", shortName: "reg", excludeFromCommandHistory: !0 },
              { name: "global", shortName: "g" }
            ],
            i = e.Pos;
          e.Vim = (function () {
            function o(t, n) {
              this == e.keyMap.vim &&
                (e.rmClass(t.getWrapperElement(), "cm-fat-cursor"),
                "contenteditable" == t.getOption("inputStyle") &&
                  null != document.body.style.caretColor &&
                  ((function (e) {
                    l(e), e.off("cursorActivity", s), (e.state.fatCursorMarks = null);
                  })(t),
                  (t.getInputField().style.caretColor = ""))),
                (n && n.attach == a) ||
                  (function (t) {
                    t.setOption("disableInput", !1),
                      t.off("cursorActivity", xe),
                      e.off(t.getInputField(), "paste", u(t)),
                      (t.state.vim = null);
                  })(t);
            }
            function a(t, n) {
              this == e.keyMap.vim &&
                (e.addClass(t.getWrapperElement(), "cm-fat-cursor"),
                "contenteditable" == t.getOption("inputStyle") &&
                  null != document.body.style.caretColor &&
                  ((function (e) {
                    (e.state.fatCursorMarks = []), s(e), e.on("cursorActivity", s);
                  })(t),
                  (t.getInputField().style.caretColor = "transparent"))),
                (n && n.attach == a) ||
                  (function (t) {
                    t.setOption("disableInput", !0),
                      t.setOption("showCursorWhenSelecting", !1),
                      e.signal(t, "vim-mode-change", { mode: "normal" }),
                      t.on("cursorActivity", xe),
                      C(t),
                      e.on(t.getInputField(), "paste", u(t));
                  })(t);
            }
            function s(e) {
              if (e.state.fatCursorMarks) {
                l(e);
                for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
                  var o = t[r];
                  if (o.empty()) {
                    var a = e.getLine(o.anchor.line).length;
                    o.anchor.ch < a
                      ? n.push(e.markText(o.anchor, i(o.anchor.line, o.anchor.ch + 1), { className: "cm-fat-cursor-mark" }))
                      : n.push(
                          e.markText(i(o.anchor.line, a - 1), i(o.anchor.line, a), {
                            className: "cm-fat-cursor-mark"
                          })
                        );
                  }
                }
                e.state.fatCursorMarks = n;
              }
            }
            function l(e) {
              var t = e.state.fatCursorMarks;
              if (t) for (var n = 0; n < t.length; n++) t[n].clear();
            }
            function c(t, n) {
              if (n) {
                if (this[t]) return this[t];
                var r = (function (e) {
                  if ("'" == e.charAt(0)) return e.charAt(1);
                  var t = e.split(/-(?!$)/),
                    n = t[t.length - 1];
                  if (1 == t.length && 1 == t[0].length) return !1;
                  if (2 == t.length && "Shift" == t[0] && 1 == n.length) return !1;
                  for (var r = !1, i = 0; i < t.length; i++) {
                    var o = t[i];
                    o in Ne ? (t[i] = Ne[o]) : (r = !0), o in Ee && (t[i] = Ee[o]);
                  }
                  return !!r && (p(n) && (t[t.length - 1] = n.toLowerCase()), "<" + t.join("-") + ">");
                })(t);
                if (!r) return !1;
                var i = e.Vim.findKey(n, r);
                return "function" == typeof i && e.signal(n, "vim-keypress", r), i;
              }
            }
            function u(e) {
              var t = e.state.vim;
              return (
                t.onPasteFn ||
                  (t.onPasteFn = function () {
                    t.insertMode || (e.setCursor(P(e.getCursor(), 0, 1)), Xe.enterInsertMode(e, {}, t));
                  }),
                t.onPasteFn
              );
            }
            function f(e, t) {
              for (var n = [], r = e; r < e + t; r++) n.push(String.fromCharCode(r));
              return n;
            }
            function d(e, t) {
              return t >= e.firstLine() && t <= e.lastLine();
            }
            function h(e) {
              return /^[a-z]$/.test(e);
            }
            function p(e) {
              return /^[A-Z]$/.test(e);
            }
            function m(e) {
              return /^\s*$/.test(e);
            }
            function g(e) {
              return -1 != ".?!".indexOf(e);
            }
            function v(e, t) {
              for (var n = 0; n < t.length; n++) if (t[n] == e) return !0;
              return !1;
            }
            function y(e, t, n, r, i) {
              if (void 0 === t && !i) throw Error("defaultValue is required unless callback is provided");
              if ((n || (n = "string"), (ze[e] = { type: n, defaultValue: t, callback: i }), r))
                for (var o = 0; o < r.length; o++) ze[r[o]] = ze[e];
              t && b(e, t);
            }
            function b(e, t, n, r) {
              var i = ze[e],
                o = (r = r || {}).scope;
              if (!i) return new Error("Unknown option: " + e);
              if ("boolean" == i.type) {
                if (t && !0 !== t) return new Error("Invalid argument: " + e + "=" + t);
                !1 !== t && (t = !0);
              }
              i.callback
                ? ("local" !== o && i.callback(t, void 0), "global" !== o && n && i.callback(t, n))
                : ("local" !== o && (i.value = "boolean" == i.type ? !!t : t),
                  "global" !== o && n && (n.state.vim.options[e] = { value: t }));
            }
            function k(e, t, n) {
              var r = ze[e],
                i = (n = n || {}).scope;
              if (!r) return new Error("Unknown option: " + e);
              if (r.callback) {
                var o = t && r.callback(void 0, t);
                return "global" !== i && void 0 !== o ? o : "local" !== i ? r.callback() : void 0;
              }
              return ((o = "global" !== i && t && t.state.vim.options[e]) || ("local" !== i && r) || {}).value;
            }
            function w() {
              (this.latestRegister = void 0),
                (this.isPlaying = !1),
                (this.isRecording = !1),
                (this.replaySearchQueries = []),
                (this.onRecordingDone = void 0),
                (this.lastInsertModeChanges = Ue());
            }
            function C(e) {
              return (
                e.state.vim ||
                  (e.state.vim = {
                    inputState: new S(),
                    lastEditInputState: void 0,
                    lastEditActionCommand: void 0,
                    lastHPos: -1,
                    lastHSPos: -1,
                    lastMotion: null,
                    marks: {},
                    fakeCursor: null,
                    insertMode: !1,
                    insertModeRepeat: void 0,
                    visualMode: !1,
                    visualLine: !1,
                    visualBlock: !1,
                    lastSelection: null,
                    lastPastedText: null,
                    sel: {},
                    options: {}
                  }),
                e.state.vim
              );
            }
            function x() {
              for (var e in ((Ke = {
                searchQuery: null,
                searchIsReversed: !1,
                lastSubstituteReplacePart: void 0,
                jumpList: _e(),
                macroModeState: new w(),
                lastCharacterSearch: { increment: 0, forward: !0, selectedCharacter: "" },
                registerController: new T({}),
                searchHistoryController: new A(),
                exCommandHistoryController: new A()
              }),
              ze)) {
                var t = ze[e];
                t.value = t.defaultValue;
              }
            }
            function S() {
              (this.prefixRepeat = []),
                (this.motionRepeat = []),
                (this.operator = null),
                (this.operatorArgs = null),
                (this.motion = null),
                (this.motionArgs = null),
                (this.keyBuffer = []),
                (this.registerName = null);
            }
            function M(t, n) {
              (t.state.vim.inputState = new S()), e.signal(t, "vim-command-done", n);
            }
            function L(e, t, n) {
              this.clear(),
                (this.keyBuffer = [e || ""]),
                (this.insertModeChanges = []),
                (this.searchQueries = []),
                (this.linewise = !!t),
                (this.blockwise = !!n);
            }
            function T(e) {
              (this.registers = e), (this.unnamedRegister = e['"'] = new L()), (e["."] = new L()), (e[":"] = new L()), (e["/"] = new L());
            }
            function A() {
              (this.historyBuffer = []), (this.iterator = 0), (this.initialPrefix = null);
            }
            function O(e, t) {
              for (var n = [], r = 0; r < t; r++) n.push(e);
              return n;
            }
            function N(e, t) {
              var n = e.state.vim,
                r = n.insertMode || n.visualMode,
                o = Math.min(Math.max(e.firstLine(), t.line), e.lastLine()),
                a = K(e, o) - 1 + !!r,
                s = Math.min(Math.max(0, t.ch), a);
              return i(o, s);
            }
            function E(e) {
              var t = {};
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              return t;
            }
            function P(e, t, n) {
              return "object" == typeof t && ((n = t.ch), (t = t.line)), i(e.line + t, e.ch + n);
            }
            function I(e, t) {
              if ("<character>" == t.slice(-11)) {
                var n = t.length - 11,
                  r = e.slice(0, n),
                  i = t.slice(0, n);
                return r == i && e.length > n ? "full" : 0 == i.indexOf(r) && "partial";
              }
              return e == t ? "full" : 0 == t.indexOf(e) && "partial";
            }
            function R(e, t, n) {
              return function () {
                for (var r = 0; r < n; r++) t(e);
              };
            }
            function B(e) {
              return i(e.line, e.ch);
            }
            function H(e, t) {
              return e.ch == t.ch && e.line == t.line;
            }
            function D(e, t) {
              return e.line < t.line || (e.line == t.line && e.ch < t.ch);
            }
            function F(e, t) {
              return arguments.length > 2 && (t = F.apply(void 0, [].slice.call(arguments, 1))), D(e, t) ? e : t;
            }
            function W(e, t) {
              return arguments.length > 2 && (t = W.apply(void 0, [].slice.call(arguments, 1))), D(e, t) ? t : e;
            }
            function z(e, t, n) {
              var r = D(e, t),
                i = D(t, n);
              return r && i;
            }
            function K(e, t) {
              return e.getLine(t).length;
            }
            function j(e) {
              return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
            }
            function _(e, t, n) {
              var r = K(e, t),
                o = new Array(n - r + 1).join(" ");
              e.setCursor(i(t, r)), e.replaceRange(o, e.getCursor());
            }
            function U(e, t) {
              var n = [],
                r = e.listSelections(),
                o = B(e.clipPos(t)),
                a = !H(t, o),
                s = (function (e, t) {
                  for (var n = 0; n < e.length; n++) {
                    var r = H(e[n].anchor, t),
                      i = H(e[n].head, t);
                    if (r || i) return n;
                  }
                  return -1;
                })(r, e.getCursor("head")),
                l = H(r[s].head, r[s].anchor),
                c = r.length - 1,
                u = c - s > s ? c : 0,
                f = r[u].anchor,
                d = Math.min(f.line, o.line),
                h = Math.max(f.line, o.line),
                p = f.ch,
                m = o.ch,
                g = r[u].head.ch - p,
                v = m - p;
              g > 0 && v <= 0 ? (p++, a || m--) : g < 0 && v >= 0 ? (p--, l || m++) : g < 0 && -1 == v && (p--, m++);
              for (var y = d; y <= h; y++) {
                var b = { anchor: new i(y, p), head: new i(y, m) };
                n.push(b);
              }
              return e.setSelections(n), (t.ch = m), (f.ch = p), f;
            }
            function V(e, t, n) {
              for (var r = [], i = 0; i < n; i++) {
                var o = P(t, i, 0);
                r.push({
                  anchor: o,
                  head: o
                });
              }
              e.setSelections(r, 0);
            }
            function $(e, t) {
              var n = t.sel.anchor,
                r = t.sel.head;
              t.lastPastedText && ((r = e.posFromIndex(e.indexFromPos(n) + t.lastPastedText.length)), (t.lastPastedText = null)),
                (t.lastSelection = {
                  anchorMark: e.setBookmark(n),
                  headMark: e.setBookmark(r),
                  anchor: B(n),
                  head: B(r),
                  visualMode: t.visualMode,
                  visualLine: t.visualLine,
                  visualBlock: t.visualBlock
                });
            }
            function q(e, t, n) {
              var r = e.state.vim,
                i = G(e, (t = t || r.sel), (n = n || r.visualLine ? "line" : r.visualBlock ? "block" : "char"));
              e.setSelections(i.ranges, i.primary), Se(e);
            }
            function G(e, t, n, r) {
              var o = B(t.head),
                a = B(t.anchor);
              if ("char" == n) {
                var s = r || D(t.head, t.anchor) ? 0 : 1,
                  l = D(t.head, t.anchor) ? 1 : 0;
                return (o = P(t.head, 0, s)), { ranges: [{ anchor: (a = P(t.anchor, 0, l)), head: o }], primary: 0 };
              }
              if ("line" == n) {
                if (D(t.head, t.anchor)) (o.ch = 0), (a.ch = K(e, a.line));
                else {
                  a.ch = 0;
                  var c = e.lastLine();
                  o.line > c && (o.line = c), (o.ch = K(e, o.line));
                }
                return { ranges: [{ anchor: a, head: o }], primary: 0 };
              }
              if ("block" == n) {
                for (
                  var u = Math.min(a.line, o.line),
                    f = Math.min(a.ch, o.ch),
                    d = Math.max(a.line, o.line),
                    h = Math.max(a.ch, o.ch) + 1,
                    p = d - u + 1,
                    m = o.line == u ? 0 : p - 1,
                    g = [],
                    v = 0;
                  v < p;
                  v++
                )
                  g.push({ anchor: i(u + v, f), head: i(u + v, h) });
                return { ranges: g, primary: m };
              }
            }
            function X(t, n) {
              var r = t.state.vim;
              !1 !== n && t.setCursor(N(t, r.sel.head)),
                $(t, r),
                (r.visualMode = !1),
                (r.visualLine = !1),
                (r.visualBlock = !1),
                r.insertMode || e.signal(t, "vim-mode-change", { mode: "normal" }),
                Me(r);
            }
            function Y(e) {
              if (!e) return 0;
              var t = e.search(/\S/);
              return -1 == t ? e.length : t;
            }
            function J(e, t, n, r, o) {
              for (
                var a = (function (e) {
                    var t = e.getCursor("head");
                    return 1 == e.getSelection().length && (t = F(t, e.getCursor("anchor"))), t;
                  })(e),
                  s = e.getLine(a.line),
                  l = a.ch,
                  c = o ? Ie[0] : Re[0];
                !c(s.charAt(l));

              )
                if (++l >= s.length) return null;
              r ? (c = Re[0]) : (c = Ie[0])(s.charAt(l)) || (c = Ie[1]);
              for (var u = l, f = l; c(s.charAt(u)) && u < s.length; ) u++;
              for (; c(s.charAt(f)) && f >= 0; ) f--;
              if ((f++, t)) {
                for (var d = u; /\s/.test(s.charAt(u)) && u < s.length; ) u++;
                if (d == u) {
                  for (var h = f; /\s/.test(s.charAt(f - 1)) && f > 0; ) f--;
                  f || (f = h);
                }
              }
              return {
                start: i(a.line, f),
                end: i(a.line, u)
              };
            }
            function Q(e, t, n) {
              H(t, n) || Ke.jumpList.add(e, t, n);
            }
            function Z(e, t) {
              (Ke.lastCharacterSearch.increment = e),
                (Ke.lastCharacterSearch.forward = t.forward),
                (Ke.lastCharacterSearch.selectedCharacter = t.selectedCharacter);
            }
            function ee(e, t, n, r, i) {
              var o = t.line,
                a = t.ch,
                s = e.getLine(o),
                l = n ? 1 : -1,
                c = r ? Re : Ie;
              if (i && "" == s) {
                if (((o += l), (s = e.getLine(o)), !d(e, o))) return null;
                a = n ? 0 : s.length;
              }
              for (;;) {
                if (i && "" == s) return { from: 0, to: 0, line: o };
                for (var u = l > 0 ? s.length : -1, f = u, h = u; a != u; ) {
                  for (var p = !1, m = 0; m < c.length && !p; ++m)
                    if (c[m](s.charAt(a))) {
                      for (f = a; a != u && c[m](s.charAt(a)); ) a += l;
                      if (((p = f != (h = a)), f == t.ch && o == t.line && h == f + l)) continue;
                      return { from: Math.min(f, h + 1), to: Math.max(f, h), line: o };
                    }
                  p || (a += l);
                }
                if (!d(e, (o += l))) return null;
                (s = e.getLine(o)), (a = l > 0 ? 0 : s.length);
              }
            }
            function te(e, t, n, r, o) {
              var a = i(t.line + n.repeat - 1, 1 / 0),
                s = e.clipPos(a);
              return s.ch--, o || ((r.lastHPos = 1 / 0), (r.lastHSPos = e.charCoords(s, "div").left)), a;
            }
            function ne(e, t, n, r) {
              for (var o, a = e.getCursor(), s = a.ch, l = 0; l < t; l++) {
                if (-1 == (o = ie(s, e.getLine(a.line), r, n, !0))) return null;
                s = o;
              }
              return i(e.getCursor().line, o);
            }
            function re(e, t, n, r) {
              v(n, Fe) && (t.marks[n] && t.marks[n].clear(), (t.marks[n] = e.setBookmark(r)));
            }
            function ie(e, t, n, r, i) {
              var o;
              return r ? -1 == (o = t.indexOf(n, e + 1)) || i || (o -= 1) : -1 == (o = t.lastIndexOf(n, e - 1)) || i || (o += 1), o;
            }
            function oe(e, t, n, r, o) {
              function a(t) {
                return !e.getLine(t);
              }
              function s(e, t, n) {
                return n ? a(e) != a(e + t) : !a(e) && a(e + t);
              }
              var l,
                c = t.line,
                u = e.firstLine(),
                f = e.lastLine(),
                d = c;
              if (r) {
                for (; u <= d && d <= f && n > 0; ) s(d, r) && n--, (d += r);
                return new i(d, 0);
              }
              var h = e.state.vim;
              if (h.visualLine && s(c, 1, !0)) {
                var p = h.sel.anchor;
                s(p.line, -1, !0) && ((o && p.line == c) || (c += 1));
              }
              var m = a(c);
              for (d = c; d <= f && n; d++) s(d, 1, !0) && ((o && a(d) == m) || n--);
              for (l = new i(d, 0), d > f && !m ? (m = !0) : (o = !1), d = c; d > u && ((o && a(d) != m && d != c) || !s(d, -1, !0)); d--);
              return { start: new i(d, 0), end: l };
            }
            function ae() {}
            function se(e) {
              var t = e.state.vim;
              return t.searchState_ || (t.searchState_ = new ae());
            }
            function le(e, t) {
              var n = ce(e, t) || [];
              if (!n.length) return [];
              var r = [];
              if (0 === n[0]) {
                for (var i = 0; i < n.length; i++) "number" == typeof n[i] && r.push(e.substring(n[i] + 1, n[i + 1]));
                return r;
              }
            }
            function ce(e, t) {
              t || (t = "/");
              for (var n = !1, r = [], i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                n || o != t || r.push(i), (n = !n && "\\" == o);
              }
              return r;
            }
            function ue(e, t) {
              e.openNotification
                ? e.openNotification('<span style="color: red">' + t + "</span>", { bottom: !0, duration: 5e3 })
                : alert(t);
            }
            function fe(e, t) {
              var n,
                r,
                i,
                o = (t.prefix || "") + " " + (t.desc || "");
              !(function (e, t, n, r, i) {
                e.openDialog
                  ? e.openDialog(t, r, { bottom: !0, value: i.value, onKeyDown: i.onKeyDown, onKeyUp: i.onKeyUp, selectValueOnOpen: !1 })
                  : r(prompt(n, ""));
              })(
                e,
                ((n = t.prefix),
                (r = t.desc),
                (i =
                  '<span style="font-family: monospace; white-space: pre">' +
                  (n || "") +
                  '<input type="text" autocorrect="off" autocapitalize="off" spellcheck="false"></span>'),
                r && (i += ' <span style="color: #888">' + r + "</span>"),
                i),
                o,
                t.onClose,
                t
              );
            }
            function de(e, t, n, r) {
              if (t) {
                var i = se(e),
                  o = (function (e, t, n) {
                    if ((Ke.registerController.getRegister("/").setText(e), e instanceof RegExp)) return e;
                    var r,
                      i,
                      o = ce(e, "/");
                    return (
                      o.length ? ((r = e.substring(0, o[0])), (i = -1 != e.substring(o[0]).indexOf("i"))) : (r = e),
                      r
                        ? (k("pcre") ||
                            (r = (function (e) {
                              for (var t = !1, n = [], r = -1; r < e.length; r++) {
                                var i = e.charAt(r) || "",
                                  o = e.charAt(r + 1) || "",
                                  a = o && -1 != "|(){".indexOf(o);
                                t
                                  ? (("\\" === i && a) || n.push(i), (t = !1))
                                  : "\\" === i
                                  ? ((t = !0), o && -1 != "}".indexOf(o) && (a = !0), (a && "\\" !== o) || n.push(i))
                                  : (n.push(i), a && "\\" !== o && n.push("\\"));
                              }
                              return n.join("");
                            })(r)),
                          n && (t = /^[^A-Z]*$/.test(r)),
                          new RegExp(r, t || i ? "i" : void 0))
                        : null
                    );
                  })(t, !!n, !!r);
                if (o)
                  return (
                    he(e, o),
                    (function (e, t) {
                      if (e instanceof RegExp && t instanceof RegExp) {
                        for (var n = ["global", "multiline", "ignoreCase", "source"], r = 0; r < n.length; r++) {
                          var i = n[r];
                          if (e[i] !== t[i]) return !1;
                        }
                        return !0;
                      }
                      return !1;
                    })(o, i.getQuery()) || i.setQuery(o),
                    o
                  );
              }
            }
            function he(e, t) {
              clearTimeout(tt),
                (tt = setTimeout(function () {
                  var n = se(e),
                    r = n.getOverlay();
                  (r && t == r.query) ||
                    (r && e.removeOverlay(r),
                    (r = (function (e) {
                      if ("^" == e.source.charAt(0)) var t = !0;
                      return {
                        token: function (n) {
                          if (!t || n.sol()) {
                            var r = n.match(e, !1);
                            if (r)
                              return 0 == r[0].length
                                ? (n.next(), "searching")
                                : n.sol() || (n.backUp(1), e.exec(n.next() + r[0]))
                                ? (n.match(e), "searching")
                                : (n.next(), null);
                            for (; !n.eol() && (n.next(), !n.match(e, !1)); );
                          } else n.skipToEnd();
                        },
                        query: e
                      };
                    })(t)),
                    e.addOverlay(r),
                    e.showMatchesOnScrollbar &&
                      (n.getScrollbarAnnotate() && n.getScrollbarAnnotate().clear(), n.setScrollbarAnnotate(e.showMatchesOnScrollbar(t))),
                    n.setOverlay(r));
                }, 50));
            }
            function pe(e, t, n, r) {
              return (
                void 0 === r && (r = 1),
                e.operation(function () {
                  for (var o = e.getCursor(), a = e.getSearchCursor(n, o), s = 0; s < r; s++) {
                    var l = a.find(t);
                    if (
                      (0 == s && l && H(a.from(), o) && (l = a.find(t)),
                      !l && !(a = e.getSearchCursor(n, t ? i(e.lastLine()) : i(e.firstLine(), 0))).find(t))
                    )
                      return;
                  }
                  return a.from();
                })
              );
            }
            function me(e) {
              var t = se(e);
              e.removeOverlay(se(e).getOverlay()),
                t.setOverlay(null),
                t.getScrollbarAnnotate() && (t.getScrollbarAnnotate().clear(), t.setScrollbarAnnotate(null));
            }
            function ge(e) {
              var t = e.getScrollInfo(),
                n = e.coordsChar({ left: 0, top: 6 + t.top }, "local"),
                r = t.clientHeight - 10 + t.top,
                i = e.coordsChar({ left: 0, top: r }, "local");
              return { top: n.line, bottom: i.line };
            }
            function ve(e, t, n) {
              if ("'" == n || "`" == n) return Ke.jumpList.find(e, -1) || i(0, 0);
              if ("." == n) return ye(e);
              var r = t.marks[n];
              return r && r.find();
            }
            function ye(e) {
              for (var t = e.doc.history.done, n = t.length; n--; ) if (t[n].changes) return B(t[n].changes[0].to);
            }
            function be(t) {
              var n = t.state.vim,
                r = Ke.macroModeState,
                i = Ke.registerController.getRegister("."),
                o = r.isPlaying,
                a = r.lastInsertModeChanges;
              o || (t.off("change", Ce), e.off(t.getInputField(), "keydown", Te)),
                !o &&
                  n.insertModeRepeat > 1 &&
                  (Ae(t, n, n.insertModeRepeat - 1, !0), (n.lastEditInputState.repeatOverride = n.insertModeRepeat)),
                delete n.insertModeRepeat,
                (n.insertMode = !1),
                t.setCursor(t.getCursor().line, t.getCursor().ch - 1),
                t.setOption("keyMap", "vim"),
                t.setOption("disableInput", !0),
                t.toggleOverwrite(!1),
                i.setText(a.changes.join("")),
                e.signal(t, "vim-mode-change", { mode: "normal" }),
                r.isRecording &&
                  (function (e) {
                    if (!e.isPlaying) {
                      var t = e.latestRegister,
                        n = Ke.registerController.getRegister(t);
                      n && n.pushInsertModeChanges && n.pushInsertModeChanges(e.lastInsertModeChanges);
                    }
                  })(r);
            }
            function ke(e) {
              t.unshift(e);
            }
            function we(t, n, r, i) {
              var o = Ke.registerController.getRegister(i);
              if (":" == i) return o.keyBuffer[0] && it.processCommand(t, o.keyBuffer[0]), void (r.isPlaying = !1);
              var a = o.keyBuffer,
                s = 0;
              (r.isPlaying = !0), (r.replaySearchQueries = o.searchQueries.slice(0));
              for (var l = 0; l < a.length; l++)
                for (var c, u, f = a[l]; f; )
                  if (
                    ((u = (c = /<\w+-.+?>|<\w+>|./.exec(f))[0]),
                    (f = f.substring(c.index + u.length)),
                    e.Vim.handleKey(t, u, "macro"),
                    n.insertMode)
                  ) {
                    var d = o.insertModeChanges[s++].changes;
                    (Ke.macroModeState.lastInsertModeChanges.changes = d), Oe(t, d, 1), be(t);
                  }
              r.isPlaying = !1;
            }
            function Ce(e, t) {
              var n = Ke.macroModeState,
                r = n.lastInsertModeChanges;
              if (!n.isPlaying)
                for (; t; ) {
                  if (((r.expectCursorActivityForChange = !0), r.ignoreCount > 1)) r.ignoreCount--;
                  else if ("+input" == t.origin || "paste" == t.origin || void 0 === t.origin) {
                    var i = e.listSelections().length;
                    i > 1 && (r.ignoreCount = i);
                    var o = t.text.join("\n");
                    r.maybeReset && ((r.changes = []), (r.maybeReset = !1)),
                      o && (e.state.overwrite && !/\n/.test(o) ? r.changes.push([o]) : r.changes.push(o));
                  }
                  t = t.next;
                }
            }
            function xe(t) {
              var n = t.state.vim;
              if (n.insertMode) {
                var r = Ke.macroModeState;
                if (r.isPlaying) return;
                var i = r.lastInsertModeChanges;
                i.expectCursorActivityForChange ? (i.expectCursorActivityForChange = !1) : (i.maybeReset = !0);
              } else
                t.curOp.isVimOp ||
                  (function (t, n) {
                    var r = t.getCursor("anchor"),
                      i = t.getCursor("head");
                    if (
                      (n.visualMode && !t.somethingSelected()
                        ? X(t, !1)
                        : n.visualMode ||
                          n.insertMode ||
                          !t.somethingSelected() ||
                          ((n.visualMode = !0), (n.visualLine = !1), e.signal(t, "vim-mode-change", { mode: "visual" })),
                      n.visualMode)
                    ) {
                      var o = D(i, r) ? 0 : -1,
                        a = D(i, r) ? -1 : 0;
                      (i = P(i, 0, o)), (r = P(r, 0, a)), (n.sel = { anchor: r, head: i }), re(t, n, "<", F(i, r)), re(t, n, ">", W(i, r));
                    } else n.insertMode || (n.lastHPos = t.getCursor().ch);
                  })(t, n);
              n.visualMode && Se(t);
            }
            function Se(e) {
              var t = "cm-animate-fat-cursor",
                n = e.state.vim,
                r = N(e, B(n.sel.head)),
                i = P(r, 0, 1);
              if ((Me(n), r.ch == e.getLine(r.line).length)) {
                var o = document.createElement("span");
                (o.textContent = " "), (o.className = t), (n.fakeCursorBookmark = e.setBookmark(r, { widget: o }));
              } else n.fakeCursor = e.markText(r, i, { className: t });
            }
            function Me(e) {
              e.fakeCursor && (e.fakeCursor.clear(), (e.fakeCursor = null)),
                e.fakeCursorBookmark && (e.fakeCursorBookmark.clear(), (e.fakeCursorBookmark = null));
            }
            function Le(e) {
              this.keyName = e;
            }
            function Te(t) {
              var n = Ke.macroModeState.lastInsertModeChanges,
                r = e.keyName(t);
              r &&
                ((-1 == r.indexOf("Delete") && -1 == r.indexOf("Backspace")) ||
                  e.lookupKey(r, "vim-insert", function () {
                    return n.maybeReset && ((n.changes = []), (n.maybeReset = !1)), n.changes.push(new Le(r)), !0;
                  }));
            }
            function Ae(e, t, n, r) {
              function i() {
                s ? $e.processAction(e, t, t.lastEditActionCommand) : $e.evalInput(e, t);
              }
              function o(n) {
                if (a.lastInsertModeChanges.changes.length > 0) {
                  n = t.lastEditActionCommand ? n : 1;
                  var r = a.lastInsertModeChanges;
                  Oe(e, r.changes, n);
                }
              }
              var a = Ke.macroModeState;
              a.isPlaying = !0;
              var s = !!t.lastEditActionCommand,
                l = t.inputState;
              if (((t.inputState = t.lastEditInputState), s && t.lastEditActionCommand.interlaceInsertRepeat))
                for (var c = 0; c < n; c++) i(), o(1);
              else r || i(), o(n);
              (t.inputState = l), t.insertMode && !r && be(e), (a.isPlaying = !1);
            }
            function Oe(t, n, r) {
              function i(n) {
                return "string" == typeof n ? e.commands[n](t) : n(t), !0;
              }
              var o = t.getCursor("head"),
                a = Ke.macroModeState.lastInsertModeChanges.visualBlock;
              a && (V(t, o, a + 1), (r = t.listSelections().length), t.setCursor(o));
              for (var s = 0; s < r; s++) {
                a && t.setCursor(P(o, s, 0));
                for (var l = 0; l < n.length; l++) {
                  var c = n[l];
                  if (c instanceof Le) e.lookupKey(c.keyName, "vim-insert", i);
                  else if ("string" == typeof c) {
                    var u = t.getCursor();
                    t.replaceRange(c, u, u);
                  } else {
                    var f = t.getCursor(),
                      d = P(f, 0, c[0].length);
                    t.replaceRange(c[0], f, d);
                  }
                }
              }
              a && t.setCursor(P(o, 0, 1));
            }
            e.defineOption("vimMode", !1, function (t, n, r) {
              n && "vim" != t.getOption("keyMap")
                ? t.setOption("keyMap", "vim")
                : !n && r != e.Init && /^vim/.test(t.getOption("keyMap")) && t.setOption("keyMap", "default");
            });
            var Ne = { Shift: "S", Ctrl: "C", Alt: "A", Cmd: "D", Mod: "A" },
              Ee = { Enter: "CR", Backspace: "BS", Delete: "Del", Insert: "Ins" },
              Pe = /[\d]/,
              Ie = [
                e.isWordChar,
                function (t) {
                  return t && !e.isWordChar(t) && !/\s/.test(t);
                }
              ],
              Re = [
                function (e) {
                  return /\S/.test(e);
                }
              ],
              Be = f(65, 26),
              He = f(97, 26),
              De = f(48, 10),
              Fe = [].concat(Be, He, De, ["<", ">"]),
              We = [].concat(Be, He, De, ["-", '"', ".", ":", "_", "/"]),
              ze = {};
            y("filetype", void 0, "string", ["ft"], function (e, t) {
              if (void 0 !== t) {
                if (void 0 === e) return "null" == (n = t.getOption("mode")) ? "" : n;
                var n = "" == e ? "null" : e;
                t.setOption("mode", n);
              }
            });
            var Ke,
              je,
              _e = function () {
                function e(e, a) {
                  (n += a) > r ? (n = r) : n < i && (n = i);
                  var s = o[(t + n) % t];
                  if (s && !s.find()) {
                    var l,
                      c = a > 0 ? 1 : -1,
                      u = e.getCursor();
                    do {
                      if ((s = o[(t + (n += c)) % t]) && (l = s.find()) && !H(u, l)) break;
                    } while (n < r && n > i);
                  }
                  return s;
                }
                var t = 100,
                  n = -1,
                  r = 0,
                  i = 0,
                  o = new Array(t);
                return {
                  cachedCursor: void 0,
                  add: function (e, a, s) {
                    function l(r) {
                      var i = ++n % t,
                        a = o[i];
                      a && a.clear(), (o[i] = e.setBookmark(r));
                    }
                    var c = o[n % t];
                    if (c) {
                      var u = c.find();
                      u && !H(u, a) && l(a);
                    } else l(a);
                    l(s), (r = n), (i = n - t + 1) < 0 && (i = 0);
                  },
                  find: function (t, r) {
                    var i = n,
                      o = e(t, r);
                    return (n = i), o && o.find();
                  },
                  move: e
                };
              },
              Ue = function (e) {
                return e
                  ? { changes: e.changes, expectCursorActivityForChange: e.expectCursorActivityForChange }
                  : { changes: [], expectCursorActivityForChange: !1 };
              };
            w.prototype = {
              exitMacroRecordMode: function () {
                var e = Ke.macroModeState;
                e.onRecordingDone && e.onRecordingDone(), (e.onRecordingDone = void 0), (e.isRecording = !1);
              },
              enterMacroRecordMode: function (e, t) {
                var n = Ke.registerController.getRegister(t);
                n &&
                  (n.clear(),
                  (this.latestRegister = t),
                  e.openDialog && (this.onRecordingDone = e.openDialog("(recording)[" + t + "]", null, { bottom: !0 })),
                  (this.isRecording = !0));
              }
            };
            var Ve = {
              buildKeyMap: function () {},
              getRegisterController: function () {
                return Ke.registerController;
              },
              resetVimGlobalState_: x,
              getVimGlobalState_: function () {
                return Ke;
              },
              maybeInitVimState_: C,
              suppressErrorLogging: !1,
              InsertModeKey: Le,
              map: function (e, t, n) {
                it.map(e, t, n);
              },
              unmap: function (e, t) {
                it.unmap(e, t);
              },
              noremap: function (e, r, i) {
                function o(e) {
                  return e ? [e] : ["normal", "insert", "visual"];
                }
                for (var a = o(i), s = t.length, l = s - n; l < s && a.length; l++) {
                  var c = t[l];
                  if (
                    !(c.keys != r || (i && c.context && c.context !== i) || "ex" === c.type.substr(0, 2) || "key" === c.type.substr(0, 3))
                  ) {
                    var u = {};
                    for (var f in c) u[f] = c[f];
                    (u.keys = e), i && !u.context && (u.context = i), this._mapCommand(u);
                    var d = o(c.context);
                    a = a.filter(function (e) {
                      return -1 === d.indexOf(e);
                    });
                  }
                }
              },
              mapclear: function (e) {
                var r = t.length,
                  i = n,
                  o = t.slice(0, r - i);
                if (((t = t.slice(r - i)), e))
                  for (var a = o.length - 1; a >= 0; a--) {
                    var s = o[a];
                    if (e !== s.context)
                      if (s.context) this._mapCommand(s);
                      else {
                        var l = ["normal", "insert", "visual"];
                        for (var c in l)
                          if (l[c] !== e) {
                            var u = {};
                            for (var f in s) u[f] = s[f];
                            (u.context = l[c]), this._mapCommand(u);
                          }
                      }
                  }
              },
              setOption: b,
              getOption: k,
              defineOption: y,
              defineEx: function (e, t, n) {
                if (t) {
                  if (0 !== e.indexOf(t))
                    throw new Error('(Vim.defineEx) "' + t + '" is not a prefix of "' + e + '", command not registered');
                } else t = e;
                (rt[e] = n), (it.commandMap_[t] = { name: e, shortName: t, type: "api" });
              },
              handleKey: function (e, t, n) {
                var r = this.findKey(e, t, n);
                if ("function" == typeof r) return r();
              },
              findKey: function (n, r, i) {
                function o() {
                  if ("<Esc>" == r) return M(n), s.visualMode ? X(n) : s.insertMode && be(n), !0;
                }
                var a,
                  s = C(n);
                return !1 ===
                  (a = s.insertMode
                    ? (function () {
                        if (o()) return !0;
                        for (
                          var e = (s.inputState.keyBuffer = s.inputState.keyBuffer + r),
                            i = 1 == r.length,
                            a = $e.matchCommand(e, t, s.inputState, "insert");
                          e.length > 1 && "full" != a.type;

                        ) {
                          e = s.inputState.keyBuffer = e.slice(1);
                          var l = $e.matchCommand(e, t, s.inputState, "insert");
                          "none" != l.type && (a = l);
                        }
                        if ("none" == a.type) return M(n), !1;
                        if ("partial" == a.type)
                          return (
                            je && window.clearTimeout(je),
                            (je = window.setTimeout(function () {
                              s.insertMode && s.inputState.keyBuffer && M(n);
                            }, k("insertModeEscKeysTimeout"))),
                            !i
                          );
                        if ((je && window.clearTimeout(je), i)) {
                          for (var c = n.listSelections(), u = 0; u < c.length; u++) {
                            var f = c[u].head;
                            n.replaceRange("", P(f, 0, -(e.length - 1)), f, "+input");
                          }
                          Ke.macroModeState.lastInsertModeChanges.changes.pop();
                        }
                        return M(n), a.command;
                      })()
                    : (function () {
                        if (
                          (function () {
                            var e = Ke.macroModeState;
                            if (e.isRecording) {
                              if ("q" == r) return e.exitMacroRecordMode(), M(n), !0;
                              "mapping" != i &&
                                (function (e, t) {
                                  if (!e.isPlaying) {
                                    var n = e.latestRegister,
                                      r = Ke.registerController.getRegister(n);
                                    r && r.pushText(t);
                                  }
                                })(e, r);
                            }
                          })() ||
                          o()
                        )
                          return !0;
                        var e = (s.inputState.keyBuffer = s.inputState.keyBuffer + r);
                        if (/^[1-9]\d*$/.test(e)) return !0;
                        if (!(a = /^(\d*)(.*)$/.exec(e))) return M(n), !1;
                        var a,
                          l = s.visualMode ? "visual" : "normal",
                          c = $e.matchCommand(a[2] || a[1], t, s.inputState, l);
                        return "none" == c.type
                          ? (M(n), !1)
                          : "partial" == c.type ||
                              ((s.inputState.keyBuffer = ""),
                              (a = /^(\d*)(.*)$/.exec(e))[1] && "0" != a[1] && s.inputState.pushRepeatDigit(a[1]),
                              c.command);
                      })())
                  ? s.insertMode || 1 !== r.length
                    ? void 0
                    : function () {
                        return !0;
                      }
                  : !0 === a
                  ? function () {
                      return !0;
                    }
                  : function () {
                      return n.operation(function () {
                        n.curOp.isVimOp = !0;
                        try {
                          "keyToKey" == a.type
                            ? (function (t) {
                                for (var i; t; )
                                  (i = /<\w+-.+?>|<\w+>|./.exec(t)),
                                    (r = i[0]),
                                    (t = t.substring(i.index + r.length)),
                                    e.Vim.handleKey(n, r, "mapping");
                              })(a.toKeys)
                            : $e.processCommand(n, s, a);
                        } catch (t) {
                          throw ((n.state.vim = void 0), C(n), e.Vim.suppressErrorLogging || console.log(t), t);
                        }
                        return !0;
                      });
                    };
              },
              handleEx: function (e, t) {
                it.processCommand(e, t);
              },
              defineMotion: function (e, t) {
                qe[e] = t;
              },
              defineAction: function (e, t) {
                Xe[e] = t;
              },
              defineOperator: function (e, t) {
                Ge[e] = t;
              },
              mapCommand: function (e, t, n, r, i) {
                var o = { keys: e, type: t };
                for (var a in ((o[t] = n), (o[t + "Args"] = r), i)) o[a] = i[a];
                ke(o);
              },
              _mapCommand: ke,
              defineRegister: function (e, t) {
                var n = Ke.registerController.registers;
                if (!e || 1 != e.length) throw Error("Register name must be 1 character");
                if (n[e]) throw Error("Register already defined " + e);
                (n[e] = t), We.push(e);
              },
              exitVisualMode: X,
              exitInsertMode: be
            };
            (S.prototype.pushRepeatDigit = function (e) {
              this.operator ? (this.motionRepeat = this.motionRepeat.concat(e)) : (this.prefixRepeat = this.prefixRepeat.concat(e));
            }),
              (S.prototype.getRepeat = function () {
                var e = 0;
                return (
                  (this.prefixRepeat.length > 0 || this.motionRepeat.length > 0) &&
                    ((e = 1),
                    this.prefixRepeat.length > 0 && (e *= parseInt(this.prefixRepeat.join(""), 10)),
                    this.motionRepeat.length > 0 && (e *= parseInt(this.motionRepeat.join(""), 10))),
                  e
                );
              }),
              (L.prototype = {
                setText: function (e, t, n) {
                  (this.keyBuffer = [e || ""]), (this.linewise = !!t), (this.blockwise = !!n);
                },
                pushText: function (e, t) {
                  t && (this.linewise || this.keyBuffer.push("\n"), (this.linewise = !0)), this.keyBuffer.push(e);
                },
                pushInsertModeChanges: function (e) {
                  this.insertModeChanges.push(Ue(e));
                },
                pushSearchQuery: function (e) {
                  this.searchQueries.push(e);
                },
                clear: function () {
                  (this.keyBuffer = []), (this.insertModeChanges = []), (this.searchQueries = []), (this.linewise = !1);
                },
                toString: function () {
                  return this.keyBuffer.join("");
                }
              }),
              (T.prototype = {
                pushText: function (e, t, n, r, i) {
                  if ("_" !== e) {
                    r && "\n" !== n.charAt(n.length - 1) && (n += "\n");
                    var o = this.isValidRegister(e) ? this.getRegister(e) : null;
                    if (o) p(e) ? o.pushText(n, r) : o.setText(n, r, i), this.unnamedRegister.setText(o.toString(), r);
                    else {
                      switch (t) {
                        case "yank":
                          this.registers[0] = new L(n, r, i);
                          break;
                        case "delete":
                        case "change":
                          -1 == n.indexOf("\n")
                            ? (this.registers["-"] = new L(n, r))
                            : (this.shiftNumericRegisters_(), (this.registers[1] = new L(n, r)));
                      }
                      this.unnamedRegister.setText(n, r, i);
                    }
                  }
                },
                getRegister: function (e) {
                  return this.isValidRegister(e)
                    ? ((e = e.toLowerCase()), this.registers[e] || (this.registers[e] = new L()), this.registers[e])
                    : this.unnamedRegister;
                },
                isValidRegister: function (e) {
                  return e && v(e, We);
                },
                shiftNumericRegisters_: function () {
                  for (var e = 9; e >= 2; e--) this.registers[e] = this.getRegister("" + (e - 1));
                }
              }),
              (A.prototype = {
                nextMatch: function (e, t) {
                  var n = this.historyBuffer,
                    r = t ? -1 : 1;
                  null === this.initialPrefix && (this.initialPrefix = e);
                  for (var i = this.iterator + r; t ? i >= 0 : i < n.length; i += r)
                    for (var o = n[i], a = 0; a <= o.length; a++)
                      if (this.initialPrefix == o.substring(0, a)) return (this.iterator = i), o;
                  return i >= n.length ? ((this.iterator = n.length), this.initialPrefix) : i < 0 ? e : void 0;
                },
                pushInput: function (e) {
                  var t = this.historyBuffer.indexOf(e);
                  t > -1 && this.historyBuffer.splice(t, 1), e.length && this.historyBuffer.push(e);
                },
                reset: function () {
                  (this.initialPrefix = null), (this.iterator = this.historyBuffer.length);
                }
              });
            var $e = {
                matchCommand: function (e, t, n, r) {
                  var i,
                    o = (function (e, t, n, r) {
                      for (var i, o = [], a = [], s = 0; s < t.length; s++) {
                        var l = t[s];
                        ("insert" == n && "insert" != l.context) ||
                          (l.context && l.context != n) ||
                          (r.operator && "action" == l.type) ||
                          !(i = I(e, l.keys)) ||
                          ("partial" == i && o.push(l), "full" == i && a.push(l));
                      }
                      return { partial: o.length && o, full: a.length && a };
                    })(e, t, r, n);
                  if (!o.full && !o.partial) return { type: "none" };
                  if (!o.full && o.partial) return { type: "partial" };
                  for (var a = 0; a < o.full.length; a++) {
                    var s = o.full[a];
                    i || (i = s);
                  }
                  if ("<character>" == i.keys.slice(-11)) {
                    var l = (function (e) {
                      var t = /^.*(<[^>]+>)$/.exec(e),
                        n = t ? t[1] : e.slice(-1);
                      if (n.length > 1)
                        switch (n) {
                          case "<CR>":
                            n = "\n";
                            break;
                          case "<Space>":
                            n = " ";
                            break;
                          default:
                            n = "";
                        }
                      return n;
                    })(e);
                    if (!l) return { type: "none" };
                    n.selectedCharacter = l;
                  }
                  return { type: "full", command: i };
                },
                processCommand: function (e, t, n) {
                  switch (((t.inputState.repeatOverride = n.repeatOverride), n.type)) {
                    case "motion":
                      this.processMotion(e, t, n);
                      break;
                    case "operator":
                      this.processOperator(e, t, n);
                      break;
                    case "operatorMotion":
                      this.processOperatorMotion(e, t, n);
                      break;
                    case "action":
                      this.processAction(e, t, n);
                      break;
                    case "search":
                      this.processSearch(e, t, n);
                      break;
                    case "ex":
                    case "keyToEx":
                      this.processEx(e, t, n);
                  }
                },
                processMotion: function (e, t, n) {
                  (t.inputState.motion = n.motion), (t.inputState.motionArgs = E(n.motionArgs)), this.evalInput(e, t);
                },
                processOperator: function (e, t, n) {
                  var r = t.inputState;
                  if (r.operator) {
                    if (r.operator == n.operator)
                      return (r.motion = "expandToLine"), (r.motionArgs = { linewise: !0 }), void this.evalInput(e, t);
                    M(e);
                  }
                  (r.operator = n.operator),
                    (r.operatorArgs = E(n.operatorArgs)),
                    n.exitVisualBlock && ((t.visualBlock = !1), q(e)),
                    t.visualMode && this.evalInput(e, t);
                },
                processOperatorMotion: function (e, t, n) {
                  var r = t.visualMode,
                    i = E(n.operatorMotionArgs);
                  i && r && i.visualLine && (t.visualLine = !0), this.processOperator(e, t, n), r || this.processMotion(e, t, n);
                },
                processAction: function (e, t, n) {
                  var r = t.inputState,
                    i = r.getRepeat(),
                    o = !!i,
                    a = E(n.actionArgs) || {};
                  r.selectedCharacter && (a.selectedCharacter = r.selectedCharacter),
                    n.operator && this.processOperator(e, t, n),
                    n.motion && this.processMotion(e, t, n),
                    (n.motion || n.operator) && this.evalInput(e, t),
                    (a.repeat = i || 1),
                    (a.repeatIsExplicit = o),
                    (a.registerName = r.registerName),
                    M(e),
                    (t.lastMotion = null),
                    n.isEdit && this.recordLastEdit(t, r, n),
                    Xe[n.action](e, a, t);
                },
                processSearch: function (t, n, r) {
                  function i(e, i, o) {
                    Ke.searchHistoryController.pushInput(e), Ke.searchHistoryController.reset();
                    try {
                      de(t, e, i, o);
                    } catch (n) {
                      return ue(t, "Invalid regex: " + e), void M(t);
                    }
                    $e.processMotion(t, n, {
                      type: "motion",
                      motion: "findNext",
                      motionArgs: { forward: !0, toJumplist: r.searchArgs.toJumplist }
                    });
                  }
                  if (t.getSearchCursor) {
                    var o = r.searchArgs.forward,
                      a = r.searchArgs.wholeWordOnly;
                    se(t).setReversed(!o);
                    var s = o ? "/" : "?",
                      l = se(t).getQuery(),
                      c = t.getScrollInfo();
                    switch (r.searchArgs.querySrc) {
                      case "prompt":
                        var u = Ke.macroModeState;
                        u.isPlaying
                          ? i((h = u.replaySearchQueries.shift()), !0, !1)
                          : fe(t, {
                              onClose: function (e) {
                                t.scrollTo(c.left, c.top), i(e, !0, !0);
                                var n = Ke.macroModeState;
                                n.isRecording &&
                                  (function (e, t) {
                                    if (!e.isPlaying) {
                                      var n = e.latestRegister,
                                        r = Ke.registerController.getRegister(n);
                                      r && r.pushSearchQuery && r.pushSearchQuery(t);
                                    }
                                  })(n, e);
                              },
                              prefix: s,
                              desc: et,
                              onKeyUp: function (n, r, i) {
                                var a,
                                  s,
                                  l,
                                  u = e.keyName(n);
                                "Up" == u || "Down" == u
                                  ? ((a = "Up" == u),
                                    (s = n.target ? n.target.selectionEnd : 0),
                                    i((r = Ke.searchHistoryController.nextMatch(r, a) || "")),
                                    s && n.target && (n.target.selectionEnd = n.target.selectionStart = Math.min(s, n.target.value.length)))
                                  : "Left" != u &&
                                    "Right" != u &&
                                    "Ctrl" != u &&
                                    "Alt" != u &&
                                    "Shift" != u &&
                                    Ke.searchHistoryController.reset();
                                try {
                                  l = de(t, r, !0, !0);
                                } catch (n) {}
                                l ? t.scrollIntoView(pe(t, !o, l), 30) : (me(t), t.scrollTo(c.left, c.top));
                              },
                              onKeyDown: function (n, r, i) {
                                var o = e.keyName(n);
                                "Esc" == o || "Ctrl-C" == o || "Ctrl-[" == o || ("Backspace" == o && "" == r)
                                  ? (Ke.searchHistoryController.pushInput(r),
                                    Ke.searchHistoryController.reset(),
                                    de(t, l),
                                    me(t),
                                    t.scrollTo(c.left, c.top),
                                    e.e_stop(n),
                                    M(t),
                                    i(),
                                    t.focus())
                                  : "Up" == o || "Down" == o
                                  ? e.e_stop(n)
                                  : "Ctrl-U" == o && (e.e_stop(n), i(""));
                              }
                            });
                        break;
                      case "wordUnderCursor":
                        var f = J(t, !1, 0, !1, !0),
                          d = !0;
                        if ((f || ((f = J(t, !1, 0, !1, !1)), (d = !1)), !f)) return;
                        var h = t.getLine(f.start.line).substring(f.start.ch, f.end.ch);
                        (h = d && a ? "\\b" + h + "\\b" : h.replace(/([.?*+$\[\]\/\\(){}|\-])/g, "\\$1")),
                          (Ke.jumpList.cachedCursor = t.getCursor()),
                          t.setCursor(f.start),
                          i(h, !0, !1);
                    }
                  }
                },
                processEx: function (t, n, r) {
                  function i(e) {
                    Ke.exCommandHistoryController.pushInput(e), Ke.exCommandHistoryController.reset(), it.processCommand(t, e);
                  }
                  function o(n, r, i) {
                    var o,
                      a,
                      s = e.keyName(n);
                    ("Esc" == s || "Ctrl-C" == s || "Ctrl-[" == s || ("Backspace" == s && "" == r)) &&
                      (Ke.exCommandHistoryController.pushInput(r),
                      Ke.exCommandHistoryController.reset(),
                      e.e_stop(n),
                      M(t),
                      i(),
                      t.focus()),
                      "Up" == s || "Down" == s
                        ? (e.e_stop(n),
                          (o = "Up" == s),
                          (a = n.target ? n.target.selectionEnd : 0),
                          i((r = Ke.exCommandHistoryController.nextMatch(r, o) || "")),
                          a && n.target && (n.target.selectionEnd = n.target.selectionStart = Math.min(a, n.target.value.length)))
                        : "Ctrl-U" == s
                        ? (e.e_stop(n), i(""))
                        : "Left" != s && "Right" != s && "Ctrl" != s && "Alt" != s && "Shift" != s && Ke.exCommandHistoryController.reset();
                  }
                  "keyToEx" == r.type
                    ? it.processCommand(t, r.exArgs.input)
                    : n.visualMode
                    ? fe(t, { onClose: i, prefix: ":", value: "'<,'>", onKeyDown: o, selectValueOnOpen: !1 })
                    : fe(t, { onClose: i, prefix: ":", onKeyDown: o });
                },
                evalInput: function (e, t) {
                  var n,
                    r,
                    o,
                    a = t.inputState,
                    s = a.motion,
                    l = a.motionArgs || {},
                    c = a.operator,
                    u = a.operatorArgs || {},
                    f = a.registerName,
                    d = t.sel,
                    h = B(t.visualMode ? N(e, d.head) : e.getCursor("head")),
                    p = B(t.visualMode ? N(e, d.anchor) : e.getCursor("anchor")),
                    g = B(h),
                    v = B(p);
                  if (
                    (c && this.recordLastEdit(t, a),
                    (o = void 0 !== a.repeatOverride ? a.repeatOverride : a.getRepeat()) > 0 && l.explicitRepeat
                      ? (l.repeatIsExplicit = !0)
                      : (l.noRepeat || (!l.explicitRepeat && 0 === o)) && ((o = 1), (l.repeatIsExplicit = !1)),
                    a.selectedCharacter && (l.selectedCharacter = u.selectedCharacter = a.selectedCharacter),
                    (l.repeat = o),
                    M(e),
                    s)
                  ) {
                    var y = qe[s](e, h, l, t, a);
                    if (((t.lastMotion = qe[s]), !y)) return;
                    if (l.toJumplist) {
                      var b = Ke.jumpList,
                        k = b.cachedCursor;
                      k ? (Q(e, k, y), delete b.cachedCursor) : Q(e, h, y);
                    }
                    y instanceof Array ? ((r = y[0]), (n = y[1])) : (n = y),
                      n || (n = B(h)),
                      t.visualMode
                        ? ((t.visualBlock && n.ch === 1 / 0) || (n = N(e, n)),
                          r && (r = N(e, r)),
                          (r = r || v),
                          (d.anchor = r),
                          (d.head = n),
                          q(e),
                          re(e, t, "<", D(r, n) ? r : n),
                          re(e, t, ">", D(r, n) ? n : r))
                        : c || ((n = N(e, n)), e.setCursor(n.line, n.ch));
                  }
                  if (c) {
                    if (u.lastSel) {
                      r = v;
                      var w = u.lastSel,
                        C = Math.abs(w.head.line - w.anchor.line),
                        x = Math.abs(w.head.ch - w.anchor.ch);
                      (n = w.visualLine
                        ? i(v.line + C, v.ch)
                        : w.visualBlock
                        ? i(v.line + C, v.ch + x)
                        : w.head.line == w.anchor.line
                        ? i(v.line, v.ch + x)
                        : i(v.line + C, v.ch)),
                        (t.visualMode = !0),
                        (t.visualLine = w.visualLine),
                        (t.visualBlock = w.visualBlock),
                        (d = t.sel = { anchor: r, head: n }),
                        q(e);
                    } else
                      t.visualMode &&
                        (u.lastSel = { anchor: B(d.anchor), head: B(d.head), visualBlock: t.visualBlock, visualLine: t.visualLine });
                    var S, L, T, A, O;
                    if (t.visualMode) {
                      if (
                        ((S = F(d.head, d.anchor)),
                        (L = W(d.head, d.anchor)),
                        (T = t.visualLine || u.linewise),
                        (O = G(e, { anchor: S, head: L }, (A = t.visualBlock ? "block" : T ? "line" : "char"))),
                        T)
                      ) {
                        var E = O.ranges;
                        if ("block" == A) for (var P = 0; P < E.length; P++) E[P].head.ch = K(e, E[P].head.line);
                        else "line" == A && (E[0].head = i(E[0].head.line + 1, 0));
                      }
                    } else {
                      if (((S = B(r || v)), D((L = B(n || g)), S))) {
                        var I = S;
                        (S = L), (L = I);
                      }
                      (T = l.linewise || u.linewise)
                        ? (function (e, t, n) {
                            (t.ch = 0), (n.ch = 0), n.line++;
                          })(0, S, L)
                        : l.forward &&
                          (function (e, t, n) {
                            var r = e.getRange(t, n);
                            if (/\n\s*$/.test(r)) {
                              var i = r.split("\n");
                              i.pop();
                              for (var o = i.pop(); i.length > 0 && o && m(o); o = i.pop()) n.line--, (n.ch = 0);
                              o ? (n.line--, (n.ch = K(e, n.line))) : (n.ch = 0);
                            }
                          })(e, S, L),
                        (O = G(e, { anchor: S, head: L }, (A = "char"), !l.inclusive || T));
                    }
                    e.setSelections(O.ranges, O.primary), (t.lastMotion = null), (u.repeat = o), (u.registerName = f), (u.linewise = T);
                    var R = Ge[c](e, u, O.ranges, v, n);
                    t.visualMode && X(e, null != R), R && e.setCursor(R);
                  }
                },
                recordLastEdit: function (e, t, n) {
                  var r = Ke.macroModeState;
                  r.isPlaying ||
                    ((e.lastEditInputState = t),
                    (e.lastEditActionCommand = n),
                    (r.lastInsertModeChanges.changes = []),
                    (r.lastInsertModeChanges.expectCursorActivityForChange = !1),
                    (r.lastInsertModeChanges.visualBlock = e.visualBlock ? e.sel.head.line - e.sel.anchor.line : 0));
                }
              },
              qe = {
                moveToTopLine: function (e, t, n) {
                  var r = ge(e).top + n.repeat - 1;
                  return i(r, Y(e.getLine(r)));
                },
                moveToMiddleLine: function (e) {
                  var t = ge(e),
                    n = Math.floor(0.5 * (t.top + t.bottom));
                  return i(n, Y(e.getLine(n)));
                },
                moveToBottomLine: function (e, t, n) {
                  var r = ge(e).bottom - n.repeat + 1;
                  return i(r, Y(e.getLine(r)));
                },
                expandToLine: function (e, t, n) {
                  return i(t.line + n.repeat - 1, 1 / 0);
                },
                findNext: function (e, t, n) {
                  var r = se(e),
                    i = r.getQuery();
                  if (i) {
                    var o = !n.forward;
                    return (o = r.isReversed() ? !o : o), he(e, i), pe(e, o, i, n.repeat);
                  }
                },
                findAndSelectNextInclusive: function (t, n, r, o, a) {
                  var s = se(t),
                    l = s.getQuery();
                  if (l) {
                    var c = !r.forward,
                      u = (function (e, t, n, r, o) {
                        return (
                          void 0 === r && (r = 1),
                          e.operation(function () {
                            var a = e.getCursor(),
                              s = e.getSearchCursor(n, a),
                              l = s.find(!t);
                            !o.visualMode && l && H(s.from(), a) && s.find(!t);
                            for (var c = 0; c < r; c++)
                              if (!(l = s.find(t)) && !(s = e.getSearchCursor(n, t ? i(e.lastLine()) : i(e.firstLine(), 0))).find(t))
                                return;
                            return [s.from(), s.to()];
                          })
                        );
                      })(t, (c = s.isReversed() ? !c : c), l, r.repeat, o);
                    if (u) {
                      if (a.operator) return u;
                      var f = u[0],
                        d = i(u[1].line, u[1].ch - 1);
                      if (o.visualMode) {
                        (o.visualLine || o.visualBlock) &&
                          ((o.visualLine = !1), (o.visualBlock = !1), e.signal(t, "vim-mode-change", { mode: "visual", subMode: "" }));
                        var h = o.sel.anchor;
                        if (h) return s.isReversed() ? (r.forward ? [h, f] : [h, d]) : r.forward ? [h, d] : [h, f];
                      } else
                        (o.visualMode = !0),
                          (o.visualLine = !1),
                          (o.visualBlock = !1),
                          e.signal(t, "vim-mode-change", { mode: "visual", subMode: "" });
                      return c ? [d, f] : [f, d];
                    }
                  }
                },
                goToMark: function (e, t, n, r) {
                  var i = ve(e, r, n.selectedCharacter);
                  return i ? (n.linewise ? { line: i.line, ch: Y(e.getLine(i.line)) } : i) : null;
                },
                moveToOtherHighlightedEnd: function (e, t, n, r) {
                  if (r.visualBlock && n.sameLine) {
                    var o = r.sel;
                    return [N(e, i(o.anchor.line, o.head.ch)), N(e, i(o.head.line, o.anchor.ch))];
                  }
                  return [r.sel.head, r.sel.anchor];
                },
                jumpToMark: function (e, t, n, r) {
                  for (var o = t, a = 0; a < n.repeat; a++) {
                    var s = o;
                    for (var l in r.marks)
                      if (h(l)) {
                        var c = r.marks[l].find();
                        if (!((n.forward ? D(c, s) : D(s, c)) || (n.linewise && c.line == s.line))) {
                          var u = H(s, o),
                            f = n.forward ? z(s, c, o) : z(o, c, s);
                          (u || f) && (o = c);
                        }
                      }
                  }
                  return n.linewise && (o = i(o.line, Y(e.getLine(o.line)))), o;
                },
                moveByCharacters: function (e, t, n) {
                  var r = t,
                    o = n.repeat,
                    a = n.forward ? r.ch + o : r.ch - o;
                  return i(r.line, a);
                },
                moveByLines: function (e, t, n, r) {
                  var o = t,
                    a = o.ch;
                  switch (r.lastMotion) {
                    case this.moveByLines:
                    case this.moveByDisplayLines:
                    case this.moveByScroll:
                    case this.moveToColumn:
                    case this.moveToEol:
                      a = r.lastHPos;
                      break;
                    default:
                      r.lastHPos = a;
                  }
                  var s = n.repeat + (n.repeatOffset || 0),
                    l = n.forward ? o.line + s : o.line - s,
                    c = e.firstLine(),
                    u = e.lastLine(),
                    f = e.findPosV(o, n.forward ? s : -s, "line", r.lastHSPos);
                  return (
                    (n.forward ? f.line > l : f.line < l) && ((l = f.line), (a = f.ch)),
                    l < c && o.line == c
                      ? this.moveToStartOfLine(e, t, n, r)
                      : l > u && o.line == u
                      ? te(e, t, n, r, !0)
                      : (n.toFirstChar && ((a = Y(e.getLine(l))), (r.lastHPos = a)),
                        (r.lastHSPos = e.charCoords(i(l, a), "div").left),
                        i(l, a))
                  );
                },
                moveByDisplayLines: function (e, t, n, r) {
                  var o = t;
                  switch (r.lastMotion) {
                    case this.moveByDisplayLines:
                    case this.moveByScroll:
                    case this.moveByLines:
                    case this.moveToColumn:
                    case this.moveToEol:
                      break;
                    default:
                      r.lastHSPos = e.charCoords(o, "div").left;
                  }
                  var a = n.repeat;
                  if ((l = e.findPosV(o, n.forward ? a : -a, "line", r.lastHSPos)).hitSide)
                    if (n.forward)
                      var s = { top: e.charCoords(l, "div").top + 8, left: r.lastHSPos },
                        l = e.coordsChar(s, "div");
                    else {
                      var c = e.charCoords(i(e.firstLine(), 0), "div");
                      (c.left = r.lastHSPos), (l = e.coordsChar(c, "div"));
                    }
                  return (r.lastHPos = l.ch), l;
                },
                moveByPage: function (e, t, n) {
                  var r = t,
                    i = n.repeat;
                  return e.findPosV(r, n.forward ? i : -i, "page");
                },
                moveByParagraph: function (e, t, n) {
                  var r = n.forward ? 1 : -1;
                  return oe(e, t, n.repeat, r);
                },
                moveBySentence: function (e, t, n) {
                  var r = n.forward ? 1 : -1;
                  return (function (e, t, n, r) {
                    function o(e, t) {
                      if (t.pos + t.dir < 0 || t.pos + t.dir >= t.line.length) {
                        if (((t.ln += t.dir), !d(e, t.ln))) return (t.line = null), (t.ln = null), void (t.pos = null);
                        (t.line = e.getLine(t.ln)), (t.pos = t.dir > 0 ? 0 : t.line.length - 1);
                      } else t.pos += t.dir;
                    }
                    function a(e, t, n, r) {
                      var i = "" === (c = e.getLine(t)),
                        a = { line: c, ln: t, pos: n, dir: r },
                        s = { ln: a.ln, pos: a.pos },
                        l = "" === a.line;
                      for (o(e, a); null !== a.line; ) {
                        if (((s.ln = a.ln), (s.pos = a.pos), "" === a.line && !l)) return { ln: a.ln, pos: a.pos };
                        if (i && "" !== a.line && !m(a.line[a.pos])) return { ln: a.ln, pos: a.pos };
                        !g(a.line[a.pos]) || i || (a.pos !== a.line.length - 1 && !m(a.line[a.pos + 1])) || (i = !0), o(e, a);
                      }
                      var c = e.getLine(s.ln);
                      s.pos = 0;
                      for (var u = c.length - 1; u >= 0; --u)
                        if (!m(c[u])) {
                          s.pos = u;
                          break;
                        }
                      return s;
                    }
                    function s(e, t, n, r) {
                      var i = { line: e.getLine(t), ln: t, pos: n, dir: r },
                        a = {
                          ln: i.ln,
                          pos: null
                        },
                        s = "" === i.line;
                      for (o(e, i); null !== i.line; ) {
                        if ("" === i.line && !s) return null !== a.pos ? a : { ln: i.ln, pos: i.pos };
                        if (g(i.line[i.pos]) && null !== a.pos && (i.ln !== a.ln || i.pos + 1 !== a.pos)) return a;
                        "" === i.line || m(i.line[i.pos]) || ((s = !1), (a = { ln: i.ln, pos: i.pos })), o(e, i);
                      }
                      var l = e.getLine(a.ln);
                      a.pos = 0;
                      for (var c = 0; c < l.length; ++c)
                        if (!m(l[c])) {
                          a.pos = c;
                          break;
                        }
                      return a;
                    }
                    for (var l = { ln: t.line, pos: t.ch }; n > 0; ) (l = r < 0 ? s(e, l.ln, l.pos, r) : a(e, l.ln, l.pos, r)), n--;
                    return i(l.ln, l.pos);
                  })(e, t, n.repeat, r);
                },
                moveByScroll: function (e, t, n, r) {
                  var i,
                    o = e.getScrollInfo(),
                    a = n.repeat;
                  a || (a = o.clientHeight / (2 * e.defaultTextHeight()));
                  var s = e.charCoords(t, "local");
                  if (((n.repeat = a), !(i = qe.moveByDisplayLines(e, t, n, r)))) return null;
                  var l = e.charCoords(i, "local");
                  return e.scrollTo(null, o.top + l.top - s.top), i;
                },
                moveByWords: function (e, t, n) {
                  return (function (e, t, n, r, o, a) {
                    var s = B(t),
                      l = [];
                    ((r && !o) || (!r && o)) && n++;
                    for (var c = !(r && o), u = 0; u < n; u++) {
                      var f = ee(e, t, r, a, c);
                      if (!f) {
                        var d = K(e, e.lastLine());
                        l.push(
                          r
                            ? { line: e.lastLine(), from: d, to: d }
                            : {
                                line: 0,
                                from: 0,
                                to: 0
                              }
                        );
                        break;
                      }
                      l.push(f), (t = i(f.line, r ? f.to - 1 : f.from));
                    }
                    var h = l.length != n,
                      p = l[0],
                      m = l.pop();
                    return r && !o
                      ? (h || (p.from == s.ch && p.line == s.line) || (m = l.pop()), i(m.line, m.from))
                      : r && o
                      ? i(m.line, m.to - 1)
                      : !r && o
                      ? (h || (p.to == s.ch && p.line == s.line) || (m = l.pop()), i(m.line, m.to))
                      : i(m.line, m.from);
                  })(e, t, n.repeat, !!n.forward, !!n.wordEnd, !!n.bigWord);
                },
                moveTillCharacter: function (e, t, n) {
                  var r = ne(e, n.repeat, n.forward, n.selectedCharacter),
                    i = n.forward ? -1 : 1;
                  return Z(i, n), r ? ((r.ch += i), r) : null;
                },
                moveToCharacter: function (e, t, n) {
                  var r = n.repeat;
                  return Z(0, n), ne(e, r, n.forward, n.selectedCharacter) || t;
                },
                moveToSymbol: function (e, t, n) {
                  return (
                    (function (e, t, n, r) {
                      var o = B(e.getCursor()),
                        a = n ? 1 : -1,
                        s = n ? e.lineCount() : -1,
                        l = o.ch,
                        c = o.line,
                        u = e.getLine(c),
                        f = {
                          lineText: u,
                          nextCh: u.charAt(l),
                          lastCh: null,
                          index: l,
                          symb: r,
                          reverseSymb: (n ? { ")": "(", "}": "{" } : { "(": ")", "{": "}" })[r],
                          forward: n,
                          depth: 0,
                          curMoveThrough: !1
                        },
                        d = Ye[r];
                      if (!d) return o;
                      var h = Je[d].init,
                        p = Je[d].isComplete;
                      for (h && h(f); c !== s && t; ) {
                        if (((f.index += a), (f.nextCh = f.lineText.charAt(f.index)), !f.nextCh)) {
                          if (((c += a), (f.lineText = e.getLine(c) || ""), a > 0)) f.index = 0;
                          else {
                            var m = f.lineText.length;
                            f.index = m > 0 ? m - 1 : 0;
                          }
                          f.nextCh = f.lineText.charAt(f.index);
                        }
                        p(f) && ((o.line = c), (o.ch = f.index), t--);
                      }
                      return f.nextCh || f.curMoveThrough ? i(c, f.index) : o;
                    })(e, n.repeat, n.forward, n.selectedCharacter) || t
                  );
                },
                moveToColumn: function (e, t, n, r) {
                  var o = n.repeat;
                  return (
                    (r.lastHPos = o - 1),
                    (r.lastHSPos = e.charCoords(t, "div").left),
                    (function (e, t) {
                      var n = e.getCursor().line;
                      return N(e, i(n, t - 1));
                    })(e, o)
                  );
                },
                moveToEol: function (e, t, n, r) {
                  return te(e, t, n, r, !1);
                },
                moveToFirstNonWhiteSpaceCharacter: function (e, t) {
                  var n = t;
                  return i(n.line, Y(e.getLine(n.line)));
                },
                moveToMatchedSymbol: function (e, t) {
                  for (var n, r = t, o = r.line, a = r.ch, s = e.getLine(o); a < s.length; a++)
                    if ((n = s.charAt(a)) && -1 != "()[]{}".indexOf(n)) {
                      var l = e.getTokenTypeAt(i(o, a + 1));
                      if ("string" !== l && "comment" !== l) break;
                    }
                  if (a < s.length) {
                    var c = "<" === a || ">" === a ? /[(){}[\]<>]/ : /[(){}[\]]/;
                    return e.findMatchingBracket(i(o, a), { bracketRegex: c }).to;
                  }
                  return r;
                },
                moveToStartOfLine: function (e, t) {
                  return i(t.line, 0);
                },
                moveToLineOrEdgeOfDocument: function (e, t, n) {
                  var r = n.forward ? e.lastLine() : e.firstLine();
                  return n.repeatIsExplicit && (r = n.repeat - e.getOption("firstLineNumber")), i(r, Y(e.getLine(r)));
                },
                textObjectManipulation: function (t, n, r, o) {
                  var a = r.selectedCharacter;
                  "b" == a ? (a = "(") : "B" == a && (a = "{");
                  var s,
                    l = !r.textObjectInner;
                  if ({ "(": ")", ")": "(", "{": "}", "}": "{", "[": "]", "]": "[", "<": ">", ">": "<" }[a])
                    s = (function (e, t, n, r) {
                      var o,
                        a,
                        s = t,
                        l = { "(": /[()]/, ")": /[()]/, "[": /[[\]]/, "]": /[[\]]/, "{": /[{}]/, "}": /[{}]/, "<": /[<>]/, ">": /[<>]/ }[n],
                        c = { "(": "(", ")": "(", "[": "[", "]": "[", "{": "{", "}": "{", "<": "<", ">": "<" }[n],
                        u = e.getLine(s.line).charAt(s.ch) === c ? 1 : 0;
                      if (
                        ((o = e.scanForBracket(i(s.line, s.ch + u), -1, void 0, { bracketRegex: l })),
                        (a = e.scanForBracket(i(s.line, s.ch + u), 1, void 0, { bracketRegex: l })),
                        !o || !a)
                      )
                        return { start: s, end: s };
                      if (((o = o.pos), (a = a.pos), (o.line == a.line && o.ch > a.ch) || o.line > a.line)) {
                        var f = o;
                        (o = a), (a = f);
                      }
                      return r ? (a.ch += 1) : (o.ch += 1), { start: o, end: a };
                    })(t, n, a, l);
                  else if ({ "'": !0, '"': !0, "`": !0 }[a])
                    s = (function (e, t, n, r) {
                      var o,
                        a,
                        s,
                        l,
                        c = B(t),
                        u = e.getLine(c.line).split(""),
                        f = u.indexOf(n);
                      if ((c.ch < f ? (c.ch = f) : f < c.ch && u[c.ch] == n && ((a = c.ch), --c.ch), u[c.ch] != n || a))
                        for (s = c.ch; s > -1 && !o; s--) u[s] == n && (o = s + 1);
                      else o = c.ch + 1;
                      if (o && !a) for (s = o, l = u.length; s < l && !a; s++) u[s] == n && (a = s);
                      return o && a ? (r && (--o, ++a), { start: i(c.line, o), end: i(c.line, a) }) : { start: c, end: c };
                    })(t, n, a, l);
                  else if ("W" === a) s = J(t, l, 0, !0);
                  else if ("w" === a) s = J(t, l, 0, !1);
                  else if ("p" === a)
                    if (((s = oe(t, n, r.repeat, 0, l)), (r.linewise = !0), o.visualMode)) o.visualLine || (o.visualLine = !0);
                    else {
                      var c = o.inputState.operatorArgs;
                      c && (c.linewise = !0), s.end.line--;
                    }
                  else {
                    if ("t" !== a) return null;
                    s = (function (t, n, r) {
                      var i = n;
                      if (!e.findMatchingTag || !e.findEnclosingTag) return { start: i, end: i };
                      var o = e.findMatchingTag(t, n) || e.findEnclosingTag(t, n);
                      return o && o.open && o.close
                        ? r
                          ? { start: o.open.from, end: o.close.to }
                          : { start: o.open.to, end: o.close.from }
                        : { start: i, end: i };
                    })(t, n, l);
                  }
                  return t.state.vim.visualMode
                    ? (function (e, t, n) {
                        var r,
                          o = e.state.vim.sel,
                          a = o.head,
                          s = o.anchor;
                        return (
                          D(n, t) && ((r = n), (n = t), (t = r)),
                          D(a, s)
                            ? ((a = F(t, a)), (s = W(s, n)))
                            : ((s = F(t, s)),
                              -1 == (a = P((a = W(a, n)), 0, -1)).ch && a.line != e.firstLine() && (a = i(a.line - 1, K(e, a.line - 1)))),
                          [s, a]
                        );
                      })(t, s.start, s.end)
                    : [s.start, s.end];
                },
                repeatLastCharacterSearch: function (e, t, n) {
                  var r = Ke.lastCharacterSearch,
                    i = n.repeat,
                    o = n.forward === r.forward,
                    a = (r.increment ? 1 : 0) * (o ? -1 : 1);
                  e.moveH(-a, "char"), (n.inclusive = !!o);
                  var s = ne(e, i, o, r.selectedCharacter);
                  return s ? ((s.ch += a), s) : (e.moveH(a, "char"), t);
                }
              },
              Ge = {
                change: function (t, n, r) {
                  var o,
                    a,
                    s = t.state.vim,
                    l = r[0].anchor,
                    c = r[0].head;
                  if (s.visualMode)
                    if (n.fullLine)
                      (c.ch = Number.MAX_VALUE), c.line--, t.setSelection(l, c), (a = t.getSelection()), t.replaceSelection(""), (o = l);
                    else {
                      a = t.getSelection();
                      var u = O("", r.length);
                      t.replaceSelections(u), (o = F(r[0].head, r[0].anchor));
                    }
                  else {
                    a = t.getRange(l, c);
                    var f = s.lastEditInputState || {};
                    if ("moveByWords" == f.motion && !m(a)) {
                      var d = /\s+$/.exec(a);
                      d && f.motionArgs && f.motionArgs.forward && ((c = P(c, 0, -d[0].length)), (a = a.slice(0, -d[0].length)));
                    }
                    var h = new i(l.line - 1, Number.MAX_VALUE),
                      p = t.firstLine() == t.lastLine();
                    c.line > t.lastLine() && n.linewise && !p ? t.replaceRange("", h, c) : t.replaceRange("", l, c),
                      n.linewise && (p || (t.setCursor(h), e.commands.newlineAndIndent(t)), (l.ch = Number.MAX_VALUE)),
                      (o = l);
                  }
                  Ke.registerController.pushText(n.registerName, "change", a, n.linewise, r.length > 1),
                    Xe.enterInsertMode(t, { head: o }, t.state.vim);
                },
                delete: function (e, t, n) {
                  var r,
                    o,
                    a = e.state.vim;
                  if (a.visualBlock) {
                    o = e.getSelection();
                    var s = O("", n.length);
                    e.replaceSelections(s), (r = n[0].anchor);
                  } else {
                    var l = n[0].anchor,
                      c = n[0].head;
                    t.linewise &&
                      c.line != e.firstLine() &&
                      l.line == e.lastLine() &&
                      l.line == c.line - 1 &&
                      (l.line == e.firstLine() ? (l.ch = 0) : (l = i(l.line - 1, K(e, l.line - 1)))),
                      (o = e.getRange(l, c)),
                      e.replaceRange("", l, c),
                      (r = l),
                      t.linewise && (r = qe.moveToFirstNonWhiteSpaceCharacter(e, l));
                  }
                  return Ke.registerController.pushText(t.registerName, "delete", o, t.linewise, a.visualBlock), N(e, r);
                },
                indent: function (e, t, n) {
                  var r = e.state.vim,
                    i = n[0].anchor.line,
                    o = r.visualBlock ? n[n.length - 1].anchor.line : n[0].head.line,
                    a = r.visualMode ? t.repeat : 1;
                  t.linewise && o--;
                  for (var s = i; s <= o; s++) for (var l = 0; l < a; l++) e.indentLine(s, t.indentRight);
                  return qe.moveToFirstNonWhiteSpaceCharacter(e, n[0].anchor);
                },
                indentAuto: function (e, t, n) {
                  return e.execCommand("indentAuto"), qe.moveToFirstNonWhiteSpaceCharacter(e, n[0].anchor);
                },
                changeCase: function (e, t, n, r, i) {
                  for (var o = e.getSelections(), a = [], s = t.toLower, l = 0; l < o.length; l++) {
                    var c = o[l],
                      u = "";
                    if (!0 === s) u = c.toLowerCase();
                    else if (!1 === s) u = c.toUpperCase();
                    else
                      for (var f = 0; f < c.length; f++) {
                        var d = c.charAt(f);
                        u += p(d) ? d.toLowerCase() : d.toUpperCase();
                      }
                    a.push(u);
                  }
                  return (
                    e.replaceSelections(a),
                    t.shouldMoveCursor
                      ? i
                      : !e.state.vim.visualMode && t.linewise && n[0].anchor.line + 1 == n[0].head.line
                      ? qe.moveToFirstNonWhiteSpaceCharacter(e, r)
                      : t.linewise
                      ? r
                      : F(n[0].anchor, n[0].head)
                  );
                },
                yank: function (e, t, n, r) {
                  var i = e.state.vim,
                    o = e.getSelection(),
                    a = i.visualMode ? F(i.sel.anchor, i.sel.head, n[0].head, n[0].anchor) : r;
                  return Ke.registerController.pushText(t.registerName, "yank", o, t.linewise, i.visualBlock), a;
                }
              },
              Xe = {
                jumpListWalk: function (e, t, n) {
                  if (!n.visualMode) {
                    var r = t.repeat,
                      i = t.forward,
                      o = Ke.jumpList.move(e, i ? r : -r),
                      a = o ? o.find() : void 0;
                    (a = a || e.getCursor()), e.setCursor(a);
                  }
                },
                scroll: function (e, t, n) {
                  if (!n.visualMode) {
                    var r = t.repeat || 1,
                      i = e.defaultTextHeight(),
                      o = e.getScrollInfo().top,
                      a = i * r,
                      s = t.forward ? o + a : o - a,
                      l = B(e.getCursor()),
                      c = e.charCoords(l, "local");
                    if (t.forward)
                      s > c.top
                        ? ((l.line += (s - c.top) / i),
                          (l.line = Math.ceil(l.line)),
                          e.setCursor(l),
                          (c = e.charCoords(l, "local")),
                          e.scrollTo(null, c.top))
                        : e.scrollTo(null, s);
                    else {
                      var u = s + e.getScrollInfo().clientHeight;
                      u < c.bottom
                        ? ((l.line -= (c.bottom - u) / i),
                          (l.line = Math.floor(l.line)),
                          e.setCursor(l),
                          (c = e.charCoords(l, "local")),
                          e.scrollTo(null, c.bottom - e.getScrollInfo().clientHeight))
                        : e.scrollTo(null, s);
                    }
                  }
                },
                scrollToCursor: function (e, t) {
                  var n = e.getCursor().line,
                    r = e.charCoords(i(n, 0), "local"),
                    o = e.getScrollInfo().clientHeight,
                    a = r.top,
                    s = r.bottom - a;
                  switch (t.position) {
                    case "center":
                      a = a - o / 2 + s;
                      break;
                    case "bottom":
                      a = a - o + s;
                  }
                  e.scrollTo(null, a);
                },
                replayMacro: function (e, t, n) {
                  var r = t.selectedCharacter,
                    i = t.repeat,
                    o = Ke.macroModeState;
                  for ("@" == r ? (r = o.latestRegister) : (o.latestRegister = r); i--; ) we(e, n, o, r);
                },
                enterMacroRecordMode: function (e, t) {
                  var n = Ke.macroModeState,
                    r = t.selectedCharacter;
                  Ke.registerController.isValidRegister(r) && n.enterMacroRecordMode(e, r);
                },
                toggleOverwrite: function (t) {
                  t.state.overwrite
                    ? (t.toggleOverwrite(!1), t.setOption("keyMap", "vim-insert"), e.signal(t, "vim-mode-change", { mode: "insert" }))
                    : (t.toggleOverwrite(!0), t.setOption("keyMap", "vim-replace"), e.signal(t, "vim-mode-change", { mode: "replace" }));
                },
                enterInsertMode: function (t, n, r) {
                  if (!t.getOption("readOnly")) {
                    (r.insertMode = !0), (r.insertModeRepeat = (n && n.repeat) || 1);
                    var o = n ? n.insertAt : null,
                      a = r.sel,
                      s = n.head || t.getCursor("head"),
                      l = t.listSelections().length;
                    if ("eol" == o) s = i(s.line, K(t, s.line));
                    else if ("bol" == o) s = i(s.line, 0);
                    else if ("charAfter" == o) s = P(s, 0, 1);
                    else if ("firstNonBlank" == o) s = qe.moveToFirstNonWhiteSpaceCharacter(t, s);
                    else if ("startOfSelectedArea" == o) {
                      if (!r.visualMode) return;
                      r.visualBlock
                        ? ((s = i(Math.min(a.head.line, a.anchor.line), Math.min(a.head.ch, a.anchor.ch))),
                          (l = Math.abs(a.head.line - a.anchor.line) + 1))
                        : (s = a.head.line < a.anchor.line ? a.head : i(a.anchor.line, 0));
                    } else if ("endOfSelectedArea" == o) {
                      if (!r.visualMode) return;
                      r.visualBlock
                        ? ((s = i(Math.min(a.head.line, a.anchor.line), Math.max(a.head.ch + 1, a.anchor.ch))),
                          (l = Math.abs(a.head.line - a.anchor.line) + 1))
                        : (s = a.head.line >= a.anchor.line ? P(a.head, 0, 1) : i(a.anchor.line, 0));
                    } else if ("inplace" == o) {
                      if (r.visualMode) return;
                    } else "lastEdit" == o && (s = ye(t) || s);
                    t.setOption("disableInput", !1),
                      n && n.replace
                        ? (t.toggleOverwrite(!0), t.setOption("keyMap", "vim-replace"), e.signal(t, "vim-mode-change", { mode: "replace" }))
                        : (t.toggleOverwrite(!1), t.setOption("keyMap", "vim-insert"), e.signal(t, "vim-mode-change", { mode: "insert" })),
                      Ke.macroModeState.isPlaying || (t.on("change", Ce), e.on(t.getInputField(), "keydown", Te)),
                      r.visualMode && X(t),
                      V(t, s, l);
                  }
                },
                toggleVisualMode: function (t, n, r) {
                  var o,
                    a = n.repeat,
                    s = t.getCursor();
                  r.visualMode
                    ? r.visualLine ^ n.linewise || r.visualBlock ^ n.blockwise
                      ? ((r.visualLine = !!n.linewise),
                        (r.visualBlock = !!n.blockwise),
                        e.signal(t, "vim-mode-change", {
                          mode: "visual",
                          subMode: r.visualLine ? "linewise" : r.visualBlock ? "blockwise" : ""
                        }),
                        q(t))
                      : X(t)
                    : ((r.visualMode = !0),
                      (r.visualLine = !!n.linewise),
                      (r.visualBlock = !!n.blockwise),
                      (o = N(t, i(s.line, s.ch + a - 1))),
                      (r.sel = { anchor: s, head: o }),
                      e.signal(t, "vim-mode-change", {
                        mode: "visual",
                        subMode: r.visualLine ? "linewise" : r.visualBlock ? "blockwise" : ""
                      }),
                      q(t),
                      re(t, r, "<", F(s, o)),
                      re(t, r, ">", W(s, o)));
                },
                reselectLastSelection: function (t, n, r) {
                  var i = r.lastSelection;
                  if ((r.visualMode && $(t, r), i)) {
                    var o = i.anchorMark.find(),
                      a = i.headMark.find();
                    if (!o || !a) return;
                    (r.sel = { anchor: o, head: a }),
                      (r.visualMode = !0),
                      (r.visualLine = i.visualLine),
                      (r.visualBlock = i.visualBlock),
                      q(t),
                      re(t, r, "<", F(o, a)),
                      re(t, r, ">", W(o, a)),
                      e.signal(t, "vim-mode-change", {
                        mode: "visual",
                        subMode: r.visualLine ? "linewise" : r.visualBlock ? "blockwise" : ""
                      });
                  }
                },
                joinLines: function (e, t, n) {
                  var r, o;
                  if (n.visualMode) {
                    if (((r = e.getCursor("anchor")), D((o = e.getCursor("head")), r))) {
                      var a = o;
                      (o = r), (r = a);
                    }
                    o.ch = K(e, o.line) - 1;
                  } else {
                    var s = Math.max(t.repeat, 2);
                    (r = e.getCursor()), (o = N(e, i(r.line + s - 1, 1 / 0)));
                  }
                  for (var l = 0, c = r.line; c < o.line; c++) {
                    (l = K(e, r.line)), (a = i(r.line + 1, K(e, r.line + 1)));
                    var u = e.getRange(r, a);
                    (u = t.keepSpaces ? u.replace(/\n\r?/g, "") : u.replace(/\n\s*/g, " ")), e.replaceRange(u, r, a);
                  }
                  var f = i(r.line, l);
                  n.visualMode && X(e, !1), e.setCursor(f);
                },
                newLineAndEnterInsertMode: function (t, n, r) {
                  r.insertMode = !0;
                  var o = B(t.getCursor());
                  o.line !== t.firstLine() || n.after
                    ? ((o.line = n.after ? o.line : o.line - 1),
                      (o.ch = K(t, o.line)),
                      t.setCursor(o),
                      (e.commands.newlineAndIndentContinueComment || e.commands.newlineAndIndent)(t))
                    : (t.replaceRange("\n", i(t.firstLine(), 0)), t.setCursor(t.firstLine(), 0)),
                    this.enterInsertMode(
                      t,
                      {
                        repeat: n.repeat
                      },
                      r
                    );
                },
                paste: function (e, t, n) {
                  var r = B(e.getCursor()),
                    o = Ke.registerController.getRegister(t.registerName);
                  if ((h = o.toString())) {
                    if (t.matchIndent) {
                      var a = e.getOption("tabSize"),
                        s = function (e) {
                          var t = e.split("\t").length - 1,
                            n = e.split(" ").length - 1;
                          return t * a + 1 * n;
                        },
                        l = e.getLine(e.getCursor().line),
                        c = s(l.match(/^\s*/)[0]),
                        u = h.replace(/\n$/, ""),
                        f = h !== u,
                        d = s(h.match(/^\s*/)[0]),
                        h = u.replace(/^\s*/gm, function (t) {
                          var n = c + (s(t) - d);
                          if (n < 0) return "";
                          if (e.getOption("indentWithTabs")) {
                            var r = Math.floor(n / a);
                            return Array(r + 1).join("\t");
                          }
                          return Array(n + 1).join(" ");
                        });
                      h += f ? "\n" : "";
                    }
                    t.repeat > 1 && (h = Array(t.repeat + 1).join(h));
                    var p,
                      m,
                      g = o.linewise,
                      v = o.blockwise;
                    if (v) {
                      (h = h.split("\n")), g && h.pop();
                      for (var y = 0; y < h.length; y++) h[y] = "" == h[y] ? " " : h[y];
                      (r.ch += t.after ? 1 : 0), (r.ch = Math.min(K(e, r.line), r.ch));
                    } else
                      g
                        ? n.visualMode
                          ? (h = n.visualLine ? h.slice(0, -1) : "\n" + h.slice(0, h.length - 1) + "\n")
                          : t.after
                          ? ((h = "\n" + h.slice(0, h.length - 1)), (r.ch = K(e, r.line)))
                          : (r.ch = 0)
                        : (r.ch += t.after ? 1 : 0);
                    if (n.visualMode) {
                      var b;
                      n.lastPastedText = h;
                      var k = (function (e, t) {
                          var n,
                            r,
                            o,
                            a = t.lastSelection;
                          return t.visualMode
                            ? ((r = (n = e.listSelections())[0]),
                              (o = n[n.length - 1]),
                              [D(r.anchor, r.head) ? r.anchor : r.head, D(o.anchor, o.head) ? o.head : o.anchor])
                            : (function () {
                                var t = e.getCursor(),
                                  n = e.getCursor(),
                                  r = a.visualBlock;
                                if (r) {
                                  var o = r.width,
                                    s = r.height;
                                  n = i(t.line + s, t.ch + o);
                                  for (var l = [], c = t.line; c < n.line; c++) {
                                    var u = { anchor: i(c, t.ch), head: i(c, n.ch) };
                                    l.push(u);
                                  }
                                  e.setSelections(l);
                                } else {
                                  var f = a.anchorMark.find(),
                                    d = a.headMark.find(),
                                    h = d.line - f.line,
                                    p = d.ch - f.ch;
                                  (n = {
                                    line: n.line + h,
                                    ch: h ? n.ch : p + n.ch
                                  }),
                                    a.visualLine && ((t = i(t.line, 0)), (n = i(n.line, K(e, n.line)))),
                                    e.setSelection(t, n);
                                }
                                return [t, n];
                              })();
                        })(e, n),
                        w = k[0],
                        C = k[1],
                        x = e.getSelection(),
                        S = e.listSelections(),
                        M = new Array(S.length).join("1").split("1");
                      n.lastSelection && (b = n.lastSelection.headMark.find()),
                        Ke.registerController.unnamedRegister.setText(x),
                        v
                          ? (e.replaceSelections(M),
                            (C = i(w.line + h.length - 1, w.ch)),
                            e.setCursor(w),
                            U(e, C),
                            e.replaceSelections(h),
                            (p = w))
                          : n.visualBlock
                          ? (e.replaceSelections(M), e.setCursor(w), e.replaceRange(h, w, w), (p = w))
                          : (e.replaceRange(h, w, C), (p = e.posFromIndex(e.indexFromPos(w) + h.length - 1))),
                        b && (n.lastSelection.headMark = e.setBookmark(b)),
                        g && (p.ch = 0);
                    } else if (v) {
                      for (e.setCursor(r), y = 0; y < h.length; y++) {
                        var L = r.line + y;
                        L > e.lastLine() && e.replaceRange("\n", i(L, 0)), K(e, L) < r.ch && _(e, L, r.ch);
                      }
                      e.setCursor(r), U(e, i(r.line + h.length - 1, r.ch)), e.replaceSelections(h), (p = r);
                    } else
                      e.replaceRange(h, r),
                        g && t.after
                          ? (p = i(r.line + 1, Y(e.getLine(r.line + 1))))
                          : g && !t.after
                          ? (p = i(r.line, Y(e.getLine(r.line))))
                          : !g && t.after
                          ? ((m = e.indexFromPos(r)), (p = e.posFromIndex(m + h.length - 1)))
                          : ((m = e.indexFromPos(r)), (p = e.posFromIndex(m + h.length)));
                    n.visualMode && X(e, !1), e.setCursor(p);
                  }
                },
                undo: function (t, n) {
                  t.operation(function () {
                    R(t, e.commands.undo, n.repeat)(), t.setCursor(t.getCursor("anchor"));
                  });
                },
                redo: function (t, n) {
                  R(t, e.commands.redo, n.repeat)();
                },
                setRegister: function (e, t, n) {
                  n.inputState.registerName = t.selectedCharacter;
                },
                setMark: function (e, t, n) {
                  re(e, n, t.selectedCharacter, e.getCursor());
                },
                replace: function (t, n, r) {
                  var o,
                    a,
                    s = n.selectedCharacter,
                    l = t.getCursor(),
                    c = t.listSelections();
                  if (r.visualMode) (l = t.getCursor("start")), (a = t.getCursor("end"));
                  else {
                    var u = t.getLine(l.line);
                    (o = l.ch + n.repeat) > u.length && (o = u.length), (a = i(l.line, o));
                  }
                  if ("\n" == s)
                    r.visualMode || t.replaceRange("", l, a),
                      (e.commands.newlineAndIndentContinueComment || e.commands.newlineAndIndent)(t);
                  else {
                    var f = t.getRange(l, a);
                    if (((f = f.replace(/[^\n]/g, s)), r.visualBlock)) {
                      var d = new Array(t.getOption("tabSize") + 1).join(" ");
                      (f = (f = t.getSelection()).replace(/\t/g, d).replace(/[^\n]/g, s).split("\n")), t.replaceSelections(f);
                    } else t.replaceRange(f, l, a);
                    r.visualMode
                      ? ((l = D(c[0].anchor, c[0].head) ? c[0].anchor : c[0].head), t.setCursor(l), X(t, !1))
                      : t.setCursor(P(a, 0, -1));
                  }
                },
                incrementNumberToken: function (e, t) {
                  for (
                    var n, r, o, a, s = e.getCursor(), l = e.getLine(s.line), c = /(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi;
                    null !== (n = c.exec(l)) && ((o = (r = n.index) + n[0].length), !(s.ch < o));

                  );
                  if ((t.backtrack || !(o <= s.ch)) && n) {
                    var u = n[2] || n[4],
                      f = n[3] || n[5],
                      d = t.increase ? 1 : -1,
                      h = { "0b": 2, 0: 8, "": 10, "0x": 16 }[u.toLowerCase()];
                    a = (parseInt(n[1] + f, h) + d * t.repeat).toString(h);
                    var p = u ? new Array(f.length - a.length + 1 + n[1].length).join("0") : "";
                    a = "-" === a.charAt(0) ? "-" + u + p + a.substr(1) : u + p + a;
                    var m = i(s.line, r),
                      g = i(s.line, o);
                    e.replaceRange(a, m, g), e.setCursor(i(s.line, r + a.length - 1));
                  }
                },
                repeatLastEdit: function (e, t, n) {
                  if (n.lastEditInputState) {
                    var r = t.repeat;
                    r && t.repeatIsExplicit ? (n.lastEditInputState.repeatOverride = r) : (r = n.lastEditInputState.repeatOverride || r),
                      Ae(e, n, r, !1);
                  }
                },
                indent: function (e, t) {
                  e.indentLine(e.getCursor().line, t.indentRight);
                },
                exitInsertMode: be
              },
              Ye = {
                "(": "bracket",
                ")": "bracket",
                "{": "bracket",
                "}": "bracket",
                "[": "section",
                "]": "section",
                "*": "comment",
                "/": "comment",
                m: "method",
                M: "method",
                "#": "preprocess"
              },
              Je = {
                bracket: {
                  isComplete: function (e) {
                    if (e.nextCh === e.symb) {
                      if ((e.depth++, e.depth >= 1)) return !0;
                    } else e.nextCh === e.reverseSymb && e.depth--;
                    return !1;
                  }
                },
                section: {
                  init: function (e) {
                    (e.curMoveThrough = !0), (e.symb = (e.forward ? "]" : "[") === e.symb ? "{" : "}");
                  },
                  isComplete: function (e) {
                    return 0 === e.index && e.nextCh === e.symb;
                  }
                },
                comment: {
                  isComplete: function (e) {
                    var t = "*" === e.lastCh && "/" === e.nextCh;
                    return (e.lastCh = e.nextCh), t;
                  }
                },
                method: {
                  init: function (e) {
                    (e.symb = "m" === e.symb ? "{" : "}"), (e.reverseSymb = "{" === e.symb ? "}" : "{");
                  },
                  isComplete: function (e) {
                    return e.nextCh === e.symb;
                  }
                },
                preprocess: {
                  init: function (e) {
                    e.index = 0;
                  },
                  isComplete: function (e) {
                    if ("#" === e.nextCh) {
                      var t = e.lineText.match(/#(\w+)/)[1];
                      if ("endif" === t) {
                        if (e.forward && 0 === e.depth) return !0;
                        e.depth++;
                      } else if ("if" === t) {
                        if (!e.forward && 0 === e.depth) return !0;
                        e.depth--;
                      }
                      if ("else" === t && 0 === e.depth) return !0;
                    }
                    return !1;
                  }
                }
              };
            y("pcre", !0, "boolean"),
              (ae.prototype = {
                getQuery: function () {
                  return Ke.query;
                },
                setQuery: function (e) {
                  Ke.query = e;
                },
                getOverlay: function () {
                  return this.searchOverlay;
                },
                setOverlay: function (e) {
                  this.searchOverlay = e;
                },
                isReversed: function () {
                  return Ke.isReversed;
                },
                setReversed: function (e) {
                  Ke.isReversed = e;
                },
                getScrollbarAnnotate: function () {
                  return this.annotate;
                },
                setScrollbarAnnotate: function (e) {
                  this.annotate = e;
                }
              });
            var Qe = { "\\n": "\n", "\\r": "\r", "\\t": "\t" },
              Ze = { "\\/": "/", "\\\\": "\\", "\\n": "\n", "\\r": "\r", "\\t": "\t", "\\&": "&" },
              et = "(Javascript regexp)",
              tt = 0,
              nt = function () {
                this.buildCommandMap_();
              };
            nt.prototype = {
              processCommand: function (e, t, n) {
                var r = this;
                e.operation(function () {
                  (e.curOp.isVimOp = !0), r._processCommand(e, t, n);
                });
              },
              _processCommand: function (t, n, r) {
                var i = t.state.vim,
                  o = Ke.registerController.getRegister(":"),
                  a = o.toString();
                i.visualMode && X(t);
                var s = new e.StringStream(n);
                o.setText(n);
                var l,
                  c,
                  u = r || {};
                u.input = n;
                try {
                  this.parseInput_(t, s, u);
                } catch (e) {
                  throw (ue(t, e), e);
                }
                if (u.commandName) {
                  if ((l = this.matchCommand_(u.commandName))) {
                    if (((c = l.name), l.excludeFromCommandHistory && o.setText(a), this.parseCommandArgs_(s, u, l), "exToKey" == l.type)) {
                      for (var f = 0; f < l.toKeys.length; f++) e.Vim.handleKey(t, l.toKeys[f], "mapping");
                      return;
                    }
                    if ("exToEx" == l.type) return void this.processCommand(t, l.toInput);
                  }
                } else void 0 !== u.line && (c = "move");
                if (c)
                  try {
                    rt[c](t, u), (l && l.possiblyAsync) || !u.callback || u.callback();
                  } catch (e) {
                    throw (ue(t, e), e);
                  }
                else ue(t, 'Not an editor command ":' + n + '"');
              },
              parseInput_: function (e, t, n) {
                t.eatWhile(":"),
                  t.eat("%")
                    ? ((n.line = e.firstLine()), (n.lineEnd = e.lastLine()))
                    : ((n.line = this.parseLineSpec_(e, t)), void 0 !== n.line && t.eat(",") && (n.lineEnd = this.parseLineSpec_(e, t)));
                var r = t.match(/^(\w+|!!|@@|[!#&*<=>@~])/);
                return (n.commandName = r ? r[1] : t.match(/.*/)[0]), n;
              },
              parseLineSpec_: function (e, t) {
                var n = t.match(/^(\d+)/);
                if (n) return parseInt(n[1], 10) - 1;
                switch (t.next()) {
                  case ".":
                    return this.parseLineSpecOffset_(t, e.getCursor().line);
                  case "$":
                    return this.parseLineSpecOffset_(t, e.lastLine());
                  case "'":
                    var r = t.next(),
                      i = ve(e, e.state.vim, r);
                    if (!i) throw new Error("Mark not set");
                    return this.parseLineSpecOffset_(t, i.line);
                  case "-":
                  case "+":
                    return t.backUp(1), this.parseLineSpecOffset_(t, e.getCursor().line);
                  default:
                    return void t.backUp(1);
                }
              },
              parseLineSpecOffset_: function (e, t) {
                var n = e.match(/^([+-])?(\d+)/);
                if (n) {
                  var r = parseInt(n[2], 10);
                  "-" == n[1] ? (t -= r) : (t += r);
                }
                return t;
              },
              parseCommandArgs_: function (e, t, n) {
                if (!e.eol()) {
                  t.argString = e.match(/.*/)[0];
                  var r = n.argDelimiter || /\s+/,
                    i = j(t.argString).split(r);
                  i.length && i[0] && (t.args = i);
                }
              },
              matchCommand_: function (e) {
                for (var t = e.length; t > 0; t--) {
                  var n = e.substring(0, t);
                  if (this.commandMap_[n]) {
                    var r = this.commandMap_[n];
                    if (0 === r.name.indexOf(e)) return r;
                  }
                }
                return null;
              },
              buildCommandMap_: function () {
                this.commandMap_ = {};
                for (var e = 0; e < r.length; e++) {
                  var t = r[e],
                    n = t.shortName || t.name;
                  this.commandMap_[n] = t;
                }
              },
              map: function (e, n, r) {
                if (":" != e && ":" == e.charAt(0)) {
                  if (r) throw Error("Mode not supported for ex mappings");
                  var i = e.substring(1);
                  ":" != n && ":" == n.charAt(0)
                    ? (this.commandMap_[i] = { name: i, type: "exToEx", toInput: n.substring(1), user: !0 })
                    : (this.commandMap_[i] = { name: i, type: "exToKey", toKeys: n, user: !0 });
                } else if (":" != n && ":" == n.charAt(0)) {
                  var o = {
                    keys: e,
                    type: "keyToEx",
                    exArgs: {
                      input: n.substring(1)
                    }
                  };
                  r && (o.context = r), t.unshift(o);
                } else (o = { keys: e, type: "keyToKey", toKeys: n }), r && (o.context = r), t.unshift(o);
              },
              unmap: function (e, n) {
                if (":" != e && ":" == e.charAt(0)) {
                  if (n) throw Error("Mode not supported for ex mappings");
                  var r = e.substring(1);
                  if (this.commandMap_[r] && this.commandMap_[r].user) return void delete this.commandMap_[r];
                } else for (var i = e, o = 0; o < t.length; o++) if (i == t[o].keys && t[o].context === n) return void t.splice(o, 1);
                throw Error("No such mapping.");
              }
            };
            var rt = {
                colorscheme: function (e, t) {
                  !t.args || t.args.length < 1 ? ue(e, e.getOption("theme")) : e.setOption("theme", t.args[0]);
                },
                map: function (e, t, n) {
                  var r = t.args;
                  !r || r.length < 2 ? e && ue(e, "Invalid mapping: " + t.input) : it.map(r[0], r[1], n);
                },
                imap: function (e, t) {
                  this.map(e, t, "insert");
                },
                nmap: function (e, t) {
                  this.map(e, t, "normal");
                },
                vmap: function (e, t) {
                  this.map(e, t, "visual");
                },
                unmap: function (e, t, n) {
                  var r = t.args;
                  !r || r.length < 1 ? e && ue(e, "No such mapping: " + t.input) : it.unmap(r[0], n);
                },
                move: function (e, t) {
                  $e.processCommand(e, e.state.vim, {
                    type: "motion",
                    motion: "moveToLineOrEdgeOfDocument",
                    motionArgs: { forward: !1, explicitRepeat: !0, linewise: !0 },
                    repeatOverride: t.line + 1
                  });
                },
                set: function (e, t) {
                  var n = t.args,
                    r = t.setCfg || {};
                  if (!n || n.length < 1) e && ue(e, "Invalid mapping: " + t.input);
                  else {
                    var i = n[0].split("="),
                      o = i[0],
                      a = i[1],
                      s = !1;
                    if ("?" == o.charAt(o.length - 1)) {
                      if (a) throw Error("Trailing characters: " + t.argString);
                      (o = o.substring(0, o.length - 1)), (s = !0);
                    }
                    void 0 === a && "no" == o.substring(0, 2) && ((o = o.substring(2)), (a = !1));
                    var l = ze[o] && "boolean" == ze[o].type;
                    if ((l && null == a && (a = !0), (!l && void 0 === a) || s)) {
                      var c = k(o, e, r);
                      c instanceof Error ? ue(e, c.message) : ue(e, !0 === c || !1 === c ? " " + (c ? "" : "no") + o : "  " + o + "=" + c);
                    } else {
                      var u = b(o, a, e, r);
                      u instanceof Error && ue(e, u.message);
                    }
                  }
                },
                setlocal: function (e, t) {
                  (t.setCfg = { scope: "local" }), this.set(e, t);
                },
                setglobal: function (e, t) {
                  (t.setCfg = { scope: "global" }), this.set(e, t);
                },
                registers: function (e, t) {
                  var n = t.args,
                    r = Ke.registerController.registers,
                    i = "----------Registers----------<br><br>";
                  if (n) {
                    n = n.join("");
                    for (var o = 0; o < n.length; o++)
                      (a = n.charAt(o)),
                        Ke.registerController.isValidRegister(a) && (i += '"' + a + "    " + (r[a] || new L()).toString() + "<br>");
                  } else
                    for (var a in r) {
                      var s = r[a].toString();
                      s.length && (i += '"' + a + "    " + s + "<br>");
                    }
                  ue(e, i);
                },
                sort: function (t, n) {
                  function r(e, t) {
                    var n;
                    o && ((n = e), (e = t), (t = n)), a && ((e = e.toLowerCase()), (t = t.toLowerCase()));
                    var r = l && g.exec(e),
                      i = l && g.exec(t);
                    return r
                      ? (r = parseInt((r[1] + r[2]).toLowerCase(), v)) - (i = parseInt((i[1] + i[2]).toLowerCase(), v))
                      : e < t
                      ? -1
                      : 1;
                  }
                  var o,
                    a,
                    s,
                    l,
                    c,
                    u = (function () {
                      if (n.argString) {
                        var t = new e.StringStream(n.argString);
                        if ((t.eat("!") && (o = !0), t.eol())) return;
                        if (!t.eatSpace()) return "Invalid arguments";
                        var r = t.match(/([dinuox]+)?\s*(\/.+\/)?\s*/);
                        if (!r && !t.eol()) return "Invalid arguments";
                        if (r[1]) {
                          (a = -1 != r[1].indexOf("i")), (s = -1 != r[1].indexOf("u"));
                          var i = -1 != r[1].indexOf("d") || (-1 != r[1].indexOf("n") && 1),
                            u = -1 != r[1].indexOf("x") && 1,
                            f = -1 != r[1].indexOf("o") && 1;
                          if (i + u + f > 1) return "Invalid arguments";
                          l = (i ? "decimal" : u && "hex") || (f && "octal");
                        }
                        r[2] && (c = new RegExp(r[2].substr(1, r[2].length - 2), a ? "i" : ""));
                      }
                    })();
                  if (u) ue(t, u + ": " + n.argString);
                  else {
                    var f = n.line || t.firstLine(),
                      d = n.lineEnd || n.line || t.lastLine();
                    if (f != d) {
                      var h = i(f, 0),
                        p = i(d, K(t, d)),
                        m = t.getRange(h, p).split("\n"),
                        g =
                          c || ("decimal" == l ? /(-?)([\d]+)/ : "hex" == l ? /(-?)(?:0x)?([0-9a-f]+)/i : "octal" == l ? /([0-7]+)/ : null),
                        v = "decimal" == l ? 10 : "hex" == l ? 16 : "octal" == l ? 8 : null,
                        y = [],
                        b = [];
                      if (l || c)
                        for (var k = 0; k < m.length; k++) {
                          var w = c ? m[k].match(c) : null;
                          w && "" != w[0] ? y.push(w) : !c && g.exec(m[k]) ? y.push(m[k]) : b.push(m[k]);
                        }
                      else b = m;
                      if (
                        (y.sort(
                          c
                            ? function (e, t) {
                                var n;
                                return (
                                  o && ((n = e), (e = t), (t = n)),
                                  a && ((e[0] = e[0].toLowerCase()), (t[0] = t[0].toLowerCase())),
                                  e[0] < t[0] ? -1 : 1
                                );
                              }
                            : r
                        ),
                        c)
                      )
                        for (k = 0; k < y.length; k++) y[k] = y[k].input;
                      else l || b.sort(r);
                      if (((m = o ? y.concat(b) : b.concat(y)), s)) {
                        var C,
                          x = m;
                        for (m = [], k = 0; k < x.length; k++) x[k] != C && m.push(x[k]), (C = x[k]);
                      }
                      t.replaceRange(m.join("\n"), h, p);
                    }
                  }
                },
                global: function (e, t) {
                  var n = t.argString;
                  if (n) {
                    var r,
                      i = void 0 !== t.line ? t.line : e.firstLine(),
                      o = t.lineEnd || t.line || e.lastLine(),
                      a = (function (e) {
                        return le(e, "/");
                      })(n),
                      s = n;
                    if ((a.length && ((s = a[0]), (r = a.slice(1, a.length).join("/"))), s))
                      try {
                        de(e, s, !0, !0);
                      } catch (t) {
                        return void ue(e, "Invalid regex: " + s);
                      }
                    for (var l = se(e).getQuery(), c = [], u = "", f = i; f <= o; f++)
                      l.test(e.getLine(f)) && (c.push(f + 1), (u += e.getLine(f) + "<br>"));
                    if (r) {
                      var d = 0,
                        h = function () {
                          if (d < c.length) {
                            var t = c[d] + r;
                            it.processCommand(e, t, { callback: h });
                          }
                          d++;
                        };
                      h();
                    } else ue(e, u);
                  } else ue(e, "Regular Expression missing from global");
                },
                substitute: function (t, n) {
                  if (!t.getSearchCursor)
                    throw new Error("Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.");
                  var r,
                    o,
                    a,
                    s,
                    l = n.argString,
                    c = l ? le(l, l[0]) : [],
                    u = "",
                    f = !1,
                    d = !1;
                  if (c.length)
                    (r = c[0]),
                      k("pcre") && "" !== r && (r = new RegExp(r).source),
                      (u = c[1]),
                      r && "$" === r[r.length - 1] && ((r = r.slice(0, r.length - 1) + "\\n"), (u = u ? u + "\n" : "\n")),
                      void 0 !== u &&
                        ((u = k("pcre")
                          ? (function (t) {
                              for (var n = new e.StringStream(t), r = []; !n.eol(); ) {
                                for (; n.peek() && "\\" != n.peek(); ) r.push(n.next());
                                var i = !1;
                                for (var o in Ze)
                                  if (n.match(o, !0)) {
                                    (i = !0), r.push(Ze[o]);
                                    break;
                                  }
                                i || r.push(n.next());
                              }
                              return r.join("");
                            })(u.replace(/([^\\])&/g, "$1$$&"))
                          : (function (e) {
                              for (var t = !1, n = [], r = -1; r < e.length; r++) {
                                var i = e.charAt(r) || "",
                                  o = e.charAt(r + 1) || "";
                                Qe[i + o]
                                  ? (n.push(Qe[i + o]), r++)
                                  : t
                                  ? (n.push(i), (t = !1))
                                  : "\\" === i
                                  ? ((t = !0), (a = o), Pe.test(a) || "$" === o ? n.push("$") : "/" !== o && "\\" !== o && n.push("\\"))
                                  : ("$" === i && n.push("$"), n.push(i), "/" === o && n.push("\\"));
                              }
                              var a;
                              return n.join("");
                            })(u)),
                        (Ke.lastSubstituteReplacePart = u)),
                      (o = c[2] ? c[2].split(" ") : []);
                  else if (l && l.length) return void ue(t, "Substitutions should be of the form :s/pattern/replace/");
                  if (
                    (o &&
                      ((a = o[0]),
                      (s = parseInt(o[1])),
                      a &&
                        (-1 != a.indexOf("c") && ((f = !0), a.replace("c", "")),
                        -1 != a.indexOf("g") && ((d = !0), a.replace("g", "")),
                        (r = k("pcre") ? r + "/" + a : r.replace(/\//g, "\\/") + "/" + a))),
                    r)
                  )
                    try {
                      de(t, r, !0, !0);
                    } catch (e) {
                      return void ue(t, "Invalid regex: " + r);
                    }
                  if (void 0 !== (u = u || Ke.lastSubstituteReplacePart)) {
                    var h = se(t).getQuery(),
                      p = void 0 !== n.line ? n.line : t.getCursor().line,
                      m = n.lineEnd || p;
                    p == t.firstLine() && m == t.lastLine() && (m = 1 / 0), s && (m = (p = m) + s - 1);
                    var g = N(t, i(p, 0)),
                      y = t.getSearchCursor(h, g);
                    !(function (t, n, r, i, o, a, s, l, c) {
                      function u() {
                        t.operation(function () {
                          for (; !p; ) f(), d();
                          h();
                        });
                      }
                      function f() {
                        var e = t.getRange(a.from(), a.to()).replace(s, l);
                        a.replace(e);
                      }
                      function d() {
                        for (
                          ;
                          a.findNext() &&
                          ((e = a.from()),
                          (n = i),
                          (s = o),
                          "number" != typeof e && (e = e.line),
                          n instanceof Array ? v(e, n) : s ? e >= n && e <= s : e == n);

                        )
                          if (r || !m || a.from().line != m.line)
                            return t.scrollIntoView(a.from(), 30), t.setSelection(a.from(), a.to()), (m = a.from()), void (p = !1);
                        var e, n, s;
                        p = !0;
                      }
                      function h(e) {
                        if ((e && e(), t.focus(), m)) {
                          t.setCursor(m);
                          var n = t.state.vim;
                          (n.exMode = !1), (n.lastHPos = n.lastHSPos = m.ch);
                        }
                        c && c();
                      }
                      t.state.vim.exMode = !0;
                      var p = !1,
                        m = a.from();
                      if ((d(), !p))
                        return n
                          ? void fe(t, {
                              prefix: "replace with <strong>" + l + "</strong> (y/n/a/q/l)",
                              onKeyDown: function (n, r, i) {
                                switch ((e.e_stop(n), e.keyName(n))) {
                                  case "Y":
                                    f(), d();
                                    break;
                                  case "N":
                                    d();
                                    break;
                                  case "A":
                                    var o = c;
                                    (c = void 0), t.operation(u), (c = o);
                                    break;
                                  case "L":
                                    f();
                                  case "Q":
                                  case "Esc":
                                  case "Ctrl-C":
                                  case "Ctrl-[":
                                    h(i);
                                }
                                return p && h(i), !0;
                              }
                            })
                          : (u(), void (c && c()));
                      ue(t, "No matches for " + s.source);
                    })(t, f, d, p, m, y, h, u, n.callback);
                  } else ue(t, "No previous substitute regular expression");
                },
                redo: e.commands.redo,
                undo: e.commands.undo,
                write: function (t) {
                  e.commands.save ? e.commands.save(t) : t.save && t.save();
                },
                nohlsearch: function (e) {
                  me(e);
                },
                yank: function (e) {
                  var t = B(e.getCursor()).line,
                    n = e.getLine(t);
                  Ke.registerController.pushText("0", "yank", n, !0, !0);
                },
                delmarks: function (t, n) {
                  if (n.argString && j(n.argString))
                    for (var r = t.state.vim, i = new e.StringStream(j(n.argString)); !i.eol(); ) {
                      i.eatSpace();
                      var o = i.pos;
                      if (!i.match(/[a-zA-Z]/, !1)) return void ue(t, "Invalid argument: " + n.argString.substring(o));
                      var a = i.next();
                      if (i.match("-", !0)) {
                        if (!i.match(/[a-zA-Z]/, !1)) return void ue(t, "Invalid argument: " + n.argString.substring(o));
                        var s = a,
                          l = i.next();
                        if (!((h(s) && h(l)) || (p(s) && p(l)))) return void ue(t, "Invalid argument: " + s + "-");
                        var c = s.charCodeAt(0),
                          u = l.charCodeAt(0);
                        if (c >= u) return void ue(t, "Invalid argument: " + n.argString.substring(o));
                        for (var f = 0; f <= u - c; f++) {
                          var d = String.fromCharCode(c + f);
                          delete r.marks[d];
                        }
                      } else delete r.marks[a];
                    }
                  else ue(t, "Argument required");
                }
              },
              it = new nt();
            return (
              (e.keyMap.vim = { attach: a, detach: o, call: c }),
              y("insertModeEscKeysTimeout", 200, "number"),
              (e.keyMap["vim-insert"] = { fallthrough: ["default"], attach: a, detach: o, call: c }),
              (e.keyMap["vim-replace"] = { Backspace: "goCharLeft", fallthrough: ["vim-insert"], attach: a, detach: o, call: c }),
              x(),
              Ve
            );
          })();
        })(n(4538), n(8334), n(3489), n(2446));
      },
      8813: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = (e.keyMap.windows = { fallthrough: "default" }),
            n = e.commands;
          (t["Shift-Alt-F"] = "reindentall"),
            (t["Ctrl-Q"] = "close"),
            (t.F3 = "findNext"),
            (t["Shift-F3"] = "findPrev"),
            (t.F4 = "findPrev"),
            (t["Ctrl-R"] = "replace"),
            (t["Ctrl-J"] = "jump"),
            (t["Ctrl-D"] = "deleteLine"),
            (t["Ctrl-K"] = "toggleCommentIndented"),
            (n[(t["Shift-Ctrl-K"] = "toggleBlockComment")] = function (e) {
              e.toggleComment({ blockComment: !0 });
            }),
            (n[(t["Shift-Ctrl-D"] = "duplicateLine")] = function (e) {
              var t = e.getCursor().line;
              e.replaceRange(e.getLine(t) + "\n", { line: t, ch: 0 });
            }),
            (t["Ctrl-Alt-F2"] = "toggleBookmark"),
            (t["Ctrl-F2"] = "selectBookmarks"),
            (t["Shift-Ctrl-F2"] = "clearBookmarks"),
            (t.F2 = "nextBookmark"),
            (t["Shift-F2"] = "prevBookmark");
        })(n(4538));
      },
      4538: function (e) {
        e.exports = (function () {
          "use strict";
          function e(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
          }
          function t(e) {
            for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
            return e;
          }
          function n(e, n) {
            return t(e).appendChild(n);
          }
          function r(e, t, n, r) {
            var i = document.createElement(e);
            if ((n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t)) i.appendChild(document.createTextNode(t));
            else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
            return i;
          }
          function i(e, t, n, i) {
            var o = r(e, t, n, i);
            return o.setAttribute("role", "presentation"), o;
          }
          function o(e, t) {
            if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
            do {
              if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
            } while ((t = t.parentNode));
          }
          function a() {
            var e;
            try {
              e = document.activeElement;
            } catch (t) {
              e = document.body || null;
            }
            for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
            return e;
          }
          function s(t, n) {
            var r = t.className;
            e(n).test(r) || (t.className += (r ? " " : "") + n);
          }
          function l(t, n) {
            for (var r = t.split(" "), i = 0; i < r.length; i++) r[i] && !e(r[i]).test(n) && (n += " " + r[i]);
            return n;
          }
          function c(e) {
            var t = [].slice.call(arguments, 1);
            return function () {
              return e.apply(null, t);
            };
          }
          function u(e, t, n) {
            for (var r in (t || (t = {}), e)) !e.hasOwnProperty(r) || (!1 === n && t.hasOwnProperty(r)) || (t[r] = e[r]);
            return t;
          }
          function f(e, t, n, r, i) {
            null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
            for (var o = r || 0, a = i || 0; ; ) {
              var s = e.indexOf("\t", o);
              if (s < 0 || s >= t) return a + (t - o);
              (a += s - o), (a += n - (a % n)), (o = s + 1);
            }
          }
          function d(e, t) {
            for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
            return -1;
          }
          function h(e, t, n) {
            for (var r = 0, i = 0; ; ) {
              var o = e.indexOf("\t", r);
              -1 == o && (o = e.length);
              var a = o - r;
              if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
              if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
            }
          }
          function p(e) {
            for (; Ho.length <= e; ) Ho.push(m(Ho) + " ");
            return Ho[e];
          }
          function m(e) {
            return e[e.length - 1];
          }
          function g(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
            return n;
          }
          function v() {}
          function y(e, t) {
            var n;
            return Object.create ? (n = Object.create(e)) : ((v.prototype = e), (n = new v())), t && u(t, n), n;
          }
          function b(e) {
            return /\w/.test(e) || (e > "" && (e.toUpperCase() != e.toLowerCase() || Do.test(e)));
          }
          function k(e, t) {
            return t ? !!(t.source.indexOf("\\w") > -1 && b(e)) || t.test(e) : b(e);
          }
          function w(e) {
            for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0;
          }
          function C(e) {
            return e.charCodeAt(0) >= 768 && Fo.test(e);
          }
          function x(e, t, n) {
            for (; (n < 0 ? t > 0 : t < e.length) && C(e.charAt(t)); ) t += n;
            return t;
          }
          function S(e, t, n) {
            for (var r = t > n ? -1 : 1; ; ) {
              if (t == n) return t;
              var i = (t + n) / 2,
                o = r < 0 ? Math.ceil(i) : Math.floor(i);
              if (o == t) return e(o) ? t : n;
              e(o) ? (n = o) : (t = o + r);
            }
          }
          function M(e, t, n) {
            var r;
            Wo = null;
            for (var i = 0; i < e.length; ++i) {
              var o = e[i];
              if (o.from < t && o.to > t) return i;
              o.to == t && (o.from != o.to && "before" == n ? (r = i) : (Wo = i)),
                o.from == t && (o.from != o.to && "before" != n ? (r = i) : (Wo = i));
            }
            return null != r ? r : Wo;
          }
          function L(e, t) {
            var n = e.order;
            return null == n && (n = e.order = zo(e.text, t)), n;
          }
          function T(e, t) {
            return (e._handlers && e._handlers[t]) || Ko;
          }
          function A(e, t, n) {
            if (e.removeEventListener) e.removeEventListener(t, n, !1);
            else if (e.detachEvent) e.detachEvent("on" + t, n);
            else {
              var r = e._handlers,
                i = r && r[t];
              if (i) {
                var o = d(i, n);
                o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
              }
            }
          }
          function O(e, t) {
            var n = T(e, t);
            if (n.length) for (var r = [].slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r);
          }
          function N(e, t, n) {
            return (
              "string" == typeof t &&
                (t = {
                  type: t,
                  preventDefault: function () {
                    this.defaultPrevented = !0;
                  }
                }),
              O(e, n || t.type, e, t),
              H(t) || t.codemirrorIgnore
            );
          }
          function E(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t)
              for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
                -1 == d(n, t[r]) && n.push(t[r]);
          }
          function P(e, t) {
            return T(e, t).length > 0;
          }
          function I(e) {
            (e.prototype.on = function (e, t) {
              jo(this, e, t);
            }),
              (e.prototype.off = function (e, t) {
                A(this, e, t);
              });
          }
          function R(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
          }
          function B(e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
          }
          function H(e) {
            return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
          }
          function D(e) {
            R(e), B(e);
          }
          function F(e) {
            return e.target || e.srcElement;
          }
          function W(e) {
            var t = e.which;
            return (
              null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
              yo && e.ctrlKey && 1 == t && (t = 3),
              t
            );
          }
          function z(e) {
            if (null == Ao) {
              var t = r("span", "​");
              n(e, r("span", [t, document.createTextNode("x")])),
                0 != e.firstChild.offsetHeight && (Ao = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(oo && ao < 8));
            }
            var i = Ao ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
            return i.setAttribute("cm-text", ""), i;
          }
          function K(e) {
            if (null != Oo) return Oo;
            var r = n(e, document.createTextNode("AخA")),
              i = Co(r, 0, 1).getBoundingClientRect(),
              o = Co(r, 1, 2).getBoundingClientRect();
            return t(e), !(!i || i.left == i.right) && (Oo = o.right - i.right < 3);
          }
          function j(e, t) {
            arguments.length > 2 && (t.dependencies = [].slice.call(arguments, 2)), (Go[e] = t);
          }
          function _(e) {
            if ("string" == typeof e && Xo.hasOwnProperty(e)) e = Xo[e];
            else if (e && "string" == typeof e.name && Xo.hasOwnProperty(e.name)) {
              var t = Xo[e.name];
              "string" == typeof t && (t = { name: t }), ((e = y(t, e)).name = t.name);
            } else {
              if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return _("application/xml");
              if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return _("application/json");
            }
            return "string" == typeof e ? { name: e } : e || { name: "null" };
          }
          function U(e, t) {
            t = _(t);
            var n = Go[t.name];
            if (!n) return U(e, "text/plain");
            var r = n(e, t);
            if (Yo.hasOwnProperty(t.name)) {
              var i = Yo[t.name];
              for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), (r[o] = i[o]));
            }
            if (((r.name = t.name), t.helperType && (r.helperType = t.helperType), t.modeProps))
              for (var a in t.modeProps) r[a] = t.modeProps[a];
            return r;
          }
          function V(e, t) {
            u(t, Yo.hasOwnProperty(e) ? Yo[e] : (Yo[e] = {}));
          }
          function $(e, t) {
            if (!0 === t) return t;
            if (e.copyState) return e.copyState(t);
            var n = {};
            for (var r in t) {
              var i = t[r];
              i instanceof Array && (i = i.concat([])), (n[r] = i);
            }
            return n;
          }
          function q(e, t) {
            for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; ) (t = n.state), (e = n.mode);
            return n || { mode: e, state: t };
          }
          function G(e, t, n) {
            return !e.startState || e.startState(t, n);
          }
          function X(e, t) {
            if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
            for (var n = e; !n.lines; )
              for (var r = 0; ; ++r) {
                var i = n.children[r],
                  o = i.chunkSize();
                if (t < o) {
                  n = i;
                  break;
                }
                t -= o;
              }
            return n.lines[t];
          }
          function Y(e, t, n) {
            var r = [],
              i = t.line;
            return (
              e.iter(t.line, n.line + 1, function (e) {
                var o = e.text;
                i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
              }),
              r
            );
          }
          function J(e, t, n) {
            var r = [];
            return (
              e.iter(t, n, function (e) {
                r.push(e.text);
              }),
              r
            );
          }
          function Q(e, t) {
            var n = t - e.height;
            if (n) for (var r = e; r; r = r.parent) r.height += n;
          }
          function Z(e) {
            if (null == e.parent) return null;
            for (var t = e.parent, n = d(t.lines, e), r = t.parent; r; t = r, r = r.parent)
              for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
            return n + t.first;
          }
          function ee(e, t) {
            var n = e.first;
            e: do {
              for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r],
                  o = i.height;
                if (t < o) {
                  e = i;
                  continue e;
                }
                (t -= o), (n += i.chunkSize());
              }
              return n;
            } while (!e.lines);
            for (var a = 0; a < e.lines.length; ++a) {
              var s = e.lines[a].height;
              if (t < s) break;
              t -= s;
            }
            return n + a;
          }
          function te(e, t) {
            return t >= e.first && t < e.first + e.size;
          }
          function ne(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber));
          }
          function re(e, t, n) {
            if ((void 0 === n && (n = null), !(this instanceof re))) return new re(e, t, n);
            (this.line = e), (this.ch = t), (this.sticky = n);
          }
          function ie(e, t) {
            return e.line - t.line || e.ch - t.ch;
          }
          function oe(e, t) {
            return e.sticky == t.sticky && 0 == ie(e, t);
          }
          function ae(e) {
            return re(e.line, e.ch);
          }
          function se(e, t) {
            return ie(e, t) < 0 ? t : e;
          }
          function le(e, t) {
            return ie(e, t) < 0 ? e : t;
          }
          function ce(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1));
          }
          function ue(e, t) {
            if (t.line < e.first) return re(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n
              ? re(n, X(e, n).text.length)
              : (function (e, t) {
                  var n = e.ch;
                  return null == n || n > t ? re(e.line, t) : n < 0 ? re(e.line, 0) : e;
                })(t, X(e, t.line).text.length);
          }
          function fe(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = ue(e, t[r]);
            return n;
          }
          function de(e, t, n, r) {
            var i = [e.state.modeGen],
              o = {};
            ke(
              e,
              t.text,
              e.doc.mode,
              n,
              function (e, t) {
                return i.push(e, t);
              },
              o,
              r
            );
            for (
              var a = n.state,
                s = function (r) {
                  n.baseTokens = i;
                  var s = e.state.overlays[r],
                    l = 1,
                    c = 0;
                  (n.state = !0),
                    ke(
                      e,
                      t.text,
                      s.mode,
                      n,
                      function (e, t) {
                        for (var n = l; c < e; ) {
                          var r = i[l];
                          r > e && i.splice(l, 1, e, i[l + 1], r), (l += 2), (c = Math.min(e, r));
                        }
                        if (t)
                          if (s.opaque) i.splice(n, l - n, e, "overlay " + t), (l = n + 2);
                          else
                            for (; n < l; n += 2) {
                              var o = i[n + 1];
                              i[n + 1] = (o ? o + " " : "") + "overlay " + t;
                            }
                      },
                      o
                    ),
                    (n.state = a),
                    (n.baseTokens = null),
                    (n.baseTokenPos = 1);
                },
                l = 0;
              l < e.state.overlays.length;
              ++l
            )
              s(l);
            return { styles: i, classes: o.bgClass || o.textClass ? o : null };
          }
          function he(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
              var r = pe(e, Z(t)),
                i = t.text.length > e.options.maxHighlightLength && $(e.doc.mode, r.state),
                o = de(e, t, r);
              i && (r.state = i),
                (t.stateAfter = r.save(!i)),
                (t.styles = o.styles),
                o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
                n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
            }
            return t.styles;
          }
          function pe(e, t, n) {
            var r = e.doc,
              i = e.display;
            if (!r.mode.startState) return new Zo(r, !0, t);
            var o = (function (e, t, n) {
                for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
                  if (s <= o.first) return o.first;
                  var l = X(o, s - 1),
                    c = l.stateAfter;
                  if (c && (!n || s + (c instanceof Qo ? c.lookAhead : 0) <= o.modeFrontier)) return s;
                  var u = f(l.text, null, e.options.tabSize);
                  (null == i || r > u) && ((i = s - 1), (r = u));
                }
                return i;
              })(e, t, n),
              a = o > r.first && X(r, o - 1).stateAfter,
              s = a ? Zo.fromSaved(r, a, o) : new Zo(r, G(r.mode), o);
            return (
              r.iter(o, t, function (n) {
                me(e, n.text, s);
                var r = s.line;
                (n.stateAfter = r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo) ? s.save() : null), s.nextLine();
              }),
              n && (r.modeFrontier = s.line),
              s
            );
          }
          function me(e, t, n, r) {
            var i = e.doc.mode,
              o = new Jo(t, e.options.tabSize, n);
            for (o.start = o.pos = r || 0, "" == t && ge(i, n.state); !o.eol(); ) ve(i, o, n.state), (o.start = o.pos);
          }
          function ge(e, t) {
            if (e.blankLine) return e.blankLine(t);
            if (e.innerMode) {
              var n = q(e, t);
              return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
            }
          }
          function ve(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
              r && (r[0] = q(e, n).mode);
              var o = e.token(t, n);
              if (t.pos > t.start) return o;
            }
            throw new Error("Mode " + e.name + " failed to advance stream.");
          }
          function ye(e, t, n, r) {
            var i,
              o,
              a = e.doc,
              s = a.mode,
              l = X(a, (t = ue(a, t)).line),
              c = pe(e, t.line, n),
              u = new Jo(l.text, e.options.tabSize, c);
            for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
              (u.start = u.pos), (i = ve(s, u, c.state)), r && o.push(new ea(u, i, $(a.mode, c.state)));
            return r ? o : new ea(u, i, c.state);
          }
          function be(e, t) {
            if (e)
              for (;;) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n) break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                null == t[r] ? (t[r] = n[2]) : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
              }
            return e;
          }
          function ke(e, t, n, r, i, o, a) {
            var s = n.flattenSpans;
            null == s && (s = e.options.flattenSpans);
            var l,
              c = 0,
              u = null,
              f = new Jo(t, e.options.tabSize, r),
              d = e.options.addModeClass && [null];
            for ("" == t && be(ge(n, r.state), o); !f.eol(); ) {
              if (
                (f.pos > e.options.maxHighlightLength
                  ? ((s = !1), a && me(e, t, r, f.pos), (f.pos = t.length), (l = null))
                  : (l = be(ve(n, f, r.state, d), o)),
                d)
              ) {
                var h = d[0].name;
                h && (l = "m-" + (l ? h + " " + l : h));
              }
              if (!s || u != l) {
                for (; c < f.start; ) i((c = Math.min(f.start, c + 5e3)), u);
                u = l;
              }
              f.start = f.pos;
            }
            for (; c < f.pos; ) {
              var p = Math.min(f.pos, c + 5e3);
              i(p, u), (c = p);
            }
          }
          function we(e, t, n) {
            (this.marker = e), (this.from = t), (this.to = n);
          }
          function Ce(e, t) {
            if (e)
              for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t) return r;
              }
          }
          function xe(e, t) {
            for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
            return n;
          }
          function Se(e, t) {
            if (t.full) return null;
            var n = te(e, t.from.line) && X(e, t.from.line).markedSpans,
              r = te(e, t.to.line) && X(e, t.to.line).markedSpans;
            if (!n && !r) return null;
            var i = t.from.ch,
              o = t.to.ch,
              a = 0 == ie(t.from, t.to),
              s = (function (e, t, n) {
                var r;
                if (e)
                  for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                      a = o.marker;
                    if (
                      null == o.from ||
                      (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                      (o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft))
                    ) {
                      var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                      (r || (r = [])).push(new we(a, o.from, s ? null : o.to));
                    }
                  }
                return r;
              })(n, i, a),
              l = (function (e, t, n) {
                var r;
                if (e)
                  for (var i = 0; i < e.length; ++i) {
                    var o = e[i],
                      a = o.marker;
                    if (
                      null == o.to ||
                      (a.inclusiveRight ? o.to >= t : o.to > t) ||
                      (o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft))
                    ) {
                      var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                      (r || (r = [])).push(new we(a, s ? null : o.from - t, null == o.to ? null : o.to - t));
                    }
                  }
                return r;
              })(r, o, a),
              c = 1 == t.text.length,
              u = m(t.text).length + (c ? i : 0);
            if (s)
              for (var f = 0; f < s.length; ++f) {
                var d = s[f];
                if (null == d.to) {
                  var h = Ce(l, d.marker);
                  h ? c && (d.to = null == h.to ? null : h.to + u) : (d.to = i);
                }
              }
            if (l)
              for (var p = 0; p < l.length; ++p) {
                var g = l[p];
                null != g.to && (g.to += u),
                  null == g.from
                    ? Ce(s, g.marker) || ((g.from = u), c && (s || (s = [])).push(g))
                    : ((g.from += u), c && (s || (s = [])).push(g));
              }
            s && (s = Me(s)), l && l != s && (l = Me(l));
            var v = [s];
            if (!c) {
              var y,
                b = t.text.length - 2;
              if (b > 0 && s) for (var k = 0; k < s.length; ++k) null == s[k].to && (y || (y = [])).push(new we(s[k].marker, null, null));
              for (var w = 0; w < b; ++w) v.push(y);
              v.push(l);
            }
            return v;
          }
          function Me(e) {
            for (var t = 0; t < e.length; ++t) {
              var n = e[t];
              null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
            }
            return e.length ? e : null;
          }
          function Le(e) {
            var t = e.markedSpans;
            if (t) {
              for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
              e.markedSpans = null;
            }
          }
          function Te(e, t) {
            if (t) {
              for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
              e.markedSpans = t;
            }
          }
          function Ae(e) {
            return e.inclusiveLeft ? -1 : 0;
          }
          function Oe(e) {
            return e.inclusiveRight ? 1 : 0;
          }
          function Ne(e, t) {
            var n = e.lines.length - t.lines.length;
            if (0 != n) return n;
            var r = e.find(),
              i = t.find(),
              o = ie(r.from, i.from) || Ae(e) - Ae(t);
            return o ? -o : ie(r.to, i.to) || Oe(e) - Oe(t) || t.id - e.id;
          }
          function Ee(e, t) {
            var n,
              r = na && e.markedSpans;
            if (r)
              for (var i = void 0, o = 0; o < r.length; ++o)
                (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Ne(n, i.marker) < 0) && (n = i.marker);
            return n;
          }
          function Pe(e) {
            return Ee(e, !0);
          }
          function Ie(e) {
            return Ee(e, !1);
          }
          function Re(e, t) {
            var n,
              r = na && e.markedSpans;
            if (r)
              for (var i = 0; i < r.length; ++i) {
                var o = r[i];
                o.marker.collapsed &&
                  (null == o.from || o.from < t) &&
                  (null == o.to || o.to > t) &&
                  (!n || Ne(n, o.marker) < 0) &&
                  (n = o.marker);
              }
            return n;
          }
          function Be(e, t, n, r, i) {
            var o = X(e, t),
              a = na && o.markedSpans;
            if (a)
              for (var s = 0; s < a.length; ++s) {
                var l = a[s];
                if (l.marker.collapsed) {
                  var c = l.marker.find(0),
                    u = ie(c.from, n) || Ae(l.marker) - Ae(i),
                    f = ie(c.to, r) || Oe(l.marker) - Oe(i);
                  if (
                    !((u >= 0 && f <= 0) || (u <= 0 && f >= 0)) &&
                    ((u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? ie(c.to, n) >= 0 : ie(c.to, n) > 0)) ||
                      (u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? ie(c.from, r) <= 0 : ie(c.from, r) < 0)))
                  )
                    return !0;
                }
              }
          }
          function He(e) {
            for (var t; (t = Pe(e)); ) e = t.find(-1, !0).line;
            return e;
          }
          function De(e, t) {
            var n = X(e, t),
              r = He(n);
            return n == r ? t : Z(r);
          }
          function Fe(e, t) {
            if (t > e.lastLine()) return t;
            var n,
              r = X(e, t);
            if (!We(e, r)) return t;
            for (; (n = Ie(r)); ) r = n.find(1, !0).line;
            return Z(r) + 1;
          }
          function We(e, t) {
            var n = na && t.markedSpans;
            if (n)
              for (var r = void 0, i = 0; i < n.length; ++i)
                if ((r = n[i]).marker.collapsed) {
                  if (null == r.from) return !0;
                  if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && ze(e, t, r)) return !0;
                }
          }
          function ze(e, t, n) {
            if (null == n.to) {
              var r = n.marker.find(1, !0);
              return ze(e, r.line, Ce(r.line.markedSpans, n.marker));
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
            for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
              if (
                (i = t.markedSpans[o]).marker.collapsed &&
                !i.marker.widgetNode &&
                i.from == n.to &&
                (null == i.to || i.to != n.from) &&
                (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
                ze(e, t, i)
              )
                return !0;
          }
          function Ke(e) {
            for (var t = 0, n = (e = He(e)).parent, r = 0; r < n.lines.length; ++r) {
              var i = n.lines[r];
              if (i == e) break;
              t += i.height;
            }
            for (var o = n.parent; o; o = (n = o).parent)
              for (var a = 0; a < o.children.length; ++a) {
                var s = o.children[a];
                if (s == n) break;
                t += s.height;
              }
            return t;
          }
          function je(e) {
            if (0 == e.height) return 0;
            for (var t, n = e.text.length, r = e; (t = Pe(r)); ) {
              var i = t.find(0, !0);
              (r = i.from.line), (n += i.from.ch - i.to.ch);
            }
            for (r = e; (t = Ie(r)); ) {
              var o = t.find(0, !0);
              (n -= r.text.length - o.from.ch), (n += (r = o.to.line).text.length - o.to.ch);
            }
            return n;
          }
          function _e(e) {
            var t = e.display,
              n = e.doc;
            (t.maxLine = X(n, n.first)),
              (t.maxLineLength = je(t.maxLine)),
              (t.maxLineChanged = !0),
              n.iter(function (e) {
                var n = je(e);
                n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
              });
          }
          function Ue(e) {
            (e.parent = null), Le(e);
          }
          function Ve(e, t) {
            if (!e || /^\s*$/.test(e)) return null;
            var n = t.addModeClass ? aa : oa;
            return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
          }
          function $e(e, t) {
            var n = i("span", null, null, so ? "padding-right: .1px" : null),
              r = {
                pre: i("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption("lineWrapping")
              };
            t.measure = {};
            for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
              var a = o ? t.rest[o - 1] : t.line,
                s = void 0;
              (r.pos = 0),
                (r.addToken = Ge),
                K(e.display.measure) && (s = L(a, e.doc.direction)) && (r.addToken = Xe(r.addToken, s)),
                (r.map = []),
                Je(a, r, he(e, a, t != e.display.externalMeasured && Z(a))),
                a.styleClasses &&
                  (a.styleClasses.bgClass && (r.bgClass = l(a.styleClasses.bgClass, r.bgClass || "")),
                  a.styleClasses.textClass && (r.textClass = l(a.styleClasses.textClass, r.textClass || ""))),
                0 == r.map.length && r.map.push(0, 0, r.content.appendChild(z(e.display.measure))),
                0 == o
                  ? ((t.measure.map = r.map), (t.measure.cache = {}))
                  : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
            }
            if (so) {
              var c = r.content.lastChild;
              (/\bcm-tab\b/.test(c.className) || (c.querySelector && c.querySelector(".cm-tab"))) &&
                (r.content.className = "cm-tab-wrap-hack");
            }
            return O(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = l(r.pre.className, r.textClass || "")), r;
          }
          function qe(e) {
            var t = r("span", "•", "cm-invalidchar");
            return (t.title = "\\u" + e.charCodeAt(0).toString(16)), t.setAttribute("aria-label", t.title), t;
          }
          function Ge(e, t, n, i, o, a, s) {
            if (t) {
              var l,
                c = e.splitSpaces
                  ? (function (e, t) {
                      if (e.length > 1 && !/  /.test(e)) return e;
                      for (var n = t, r = "", i = 0; i < e.length; i++) {
                        var o = e.charAt(i);
                        " " != o || !n || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = " "), (r += o), (n = " " == o);
                      }
                      return r;
                    })(t, e.trailingSpace)
                  : t,
                u = e.cm.state.specialChars,
                f = !1;
              if (u.test(t)) {
                l = document.createDocumentFragment();
                for (var d = 0; ; ) {
                  u.lastIndex = d;
                  var h = u.exec(t),
                    m = h ? h.index - d : t.length - d;
                  if (m) {
                    var g = document.createTextNode(c.slice(d, d + m));
                    oo && ao < 9 ? l.appendChild(r("span", [g])) : l.appendChild(g),
                      e.map.push(e.pos, e.pos + m, g),
                      (e.col += m),
                      (e.pos += m);
                  }
                  if (!h) break;
                  d += m + 1;
                  var v = void 0;
                  if ("\t" == h[0]) {
                    var y = e.cm.options.tabSize,
                      b = y - (e.col % y);
                    (v = l.appendChild(r("span", p(b), "cm-tab"))).setAttribute("role", "presentation"),
                      v.setAttribute("cm-text", "\t"),
                      (e.col += b);
                  } else
                    "\r" == h[0] || "\n" == h[0]
                      ? ((v = l.appendChild(r("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", h[0]),
                        (e.col += 1))
                      : ((v = e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text", h[0]),
                        oo && ao < 9 ? l.appendChild(r("span", [v])) : l.appendChild(v),
                        (e.col += 1));
                  e.map.push(e.pos, e.pos + 1, v), e.pos++;
                }
              } else
                (e.col += t.length),
                  (l = document.createTextNode(c)),
                  e.map.push(e.pos, e.pos + t.length, l),
                  oo && ao < 9 && (f = !0),
                  (e.pos += t.length);
              if (((e.trailingSpace = 32 == c.charCodeAt(t.length - 1)), n || i || o || f || a || s)) {
                var k = n || "";
                i && (k += i), o && (k += o);
                var w = r("span", [l], k, a);
                if (s) for (var C in s) s.hasOwnProperty(C) && "style" != C && "class" != C && w.setAttribute(C, s[C]);
                return e.content.appendChild(w);
              }
              e.content.appendChild(l);
            }
          }
          function Xe(e, t) {
            return function (n, r, i, o, a, s, l) {
              i = i ? i + " cm-force-border" : "cm-force-border";
              for (var c = n.pos, u = c + r.length; ; ) {
                for (var f = void 0, d = 0; d < t.length && !((f = t[d]).to > c && f.from <= c); d++);
                if (f.to >= u) return e(n, r, i, o, a, s, l);
                e(n, r.slice(0, f.to - c), i, o, null, s, l), (o = null), (r = r.slice(f.to - c)), (c = f.to);
              }
            };
          }
          function Ye(e, t, n, r) {
            var i = !r && n.widgetNode;
            i && e.map.push(e.pos, e.pos + t, i),
              !r &&
                e.cm.display.input.needsContentAttribute &&
                (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)),
              i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
              (e.pos += t),
              (e.trailingSpace = !1);
          }
          function Je(e, t, n) {
            var r = e.markedSpans,
              i = e.text,
              o = 0;
            if (r)
              for (var a, s, l, c, u, f, d, h = i.length, p = 0, m = 1, g = "", v = 0; ; ) {
                if (v == p) {
                  (l = c = u = s = ""), (d = null), (f = null), (v = 1 / 0);
                  for (var y = [], b = void 0, k = 0; k < r.length; ++k) {
                    var w = r[k],
                      C = w.marker;
                    if ("bookmark" == C.type && w.from == p && C.widgetNode) y.push(C);
                    else if (w.from <= p && (null == w.to || w.to > p || (C.collapsed && w.to == p && w.from == p))) {
                      if (
                        (null != w.to && w.to != p && v > w.to && ((v = w.to), (c = "")),
                        C.className && (l += " " + C.className),
                        C.css && (s = (s ? s + ";" : "") + C.css),
                        C.startStyle && w.from == p && (u += " " + C.startStyle),
                        C.endStyle && w.to == v && (b || (b = [])).push(C.endStyle, w.to),
                        C.title && ((d || (d = {})).title = C.title),
                        C.attributes)
                      )
                        for (var x in C.attributes) (d || (d = {}))[x] = C.attributes[x];
                      C.collapsed && (!f || Ne(f.marker, C) < 0) && (f = w);
                    } else w.from > p && v > w.from && (v = w.from);
                  }
                  if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (c += " " + b[S]);
                  if (!f || f.from == p) for (var M = 0; M < y.length; ++M) Ye(t, 0, y[M]);
                  if (f && (f.from || 0) == p) {
                    if ((Ye(t, (null == f.to ? h + 1 : f.to) - p, f.marker, null == f.from), null == f.to)) return;
                    f.to == p && (f = !1);
                  }
                }
                if (p >= h) break;
                for (var L = Math.min(h, v); ; ) {
                  if (g) {
                    var T = p + g.length;
                    if (!f) {
                      var A = T > L ? g.slice(0, L - p) : g;
                      t.addToken(t, A, a ? a + l : l, u, p + A.length == v ? c : "", s, d);
                    }
                    if (T >= L) {
                      (g = g.slice(L - p)), (p = L);
                      break;
                    }
                    (p = T), (u = "");
                  }
                  (g = i.slice(o, (o = n[m++]))), (a = Ve(n[m++], t.cm.options));
                }
              }
            else for (var O = 1; O < n.length; O += 2) t.addToken(t, i.slice(o, (o = n[O])), Ve(n[O + 1], t.cm.options));
          }
          function Qe(e, t, n) {
            (this.line = t),
              (this.rest = (function (e) {
                for (var t, n; (t = Ie(e)); ) (e = t.find(1, !0).line), (n || (n = [])).push(e);
                return n;
              })(t)),
              (this.size = this.rest ? Z(m(this.rest)) - n + 1 : 1),
              (this.node = this.text = null),
              (this.hidden = We(e, t));
          }
          function Ze(e, t, n) {
            for (var r, i = [], o = t; o < n; o = r) {
              var a = new Qe(e.doc, X(e.doc, o), o);
              (r = o + a.size), i.push(a);
            }
            return i;
          }
          function et(e, t) {
            var n = T(e, t);
            if (n.length) {
              var r,
                i = [].slice.call(arguments, 2);
              sa ? (r = sa.delayedCallbacks) : la ? (r = la) : ((r = la = []), setTimeout(tt, 0));
              for (
                var o = function (e) {
                    r.push(function () {
                      return n[e].apply(null, i);
                    });
                  },
                  a = 0;
                a < n.length;
                ++a
              )
                o(a);
            }
          }
          function tt() {
            var e = la;
            la = null;
            for (var t = 0; t < e.length; ++t) e[t]();
          }
          function nt(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
              var o = t.changes[i];
              "text" == o ? ot(e, t) : "gutter" == o ? st(e, t, n, r) : "class" == o ? at(e, t) : "widget" == o && lt(e, t, r);
            }
            t.changes = null;
          }
          function rt(e) {
            return (
              e.node == e.text &&
                ((e.node = r("div", null, null, "position: relative")),
                e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
                e.node.appendChild(e.text),
                oo && ao < 8 && (e.node.style.zIndex = 2)),
              e.node
            );
          }
          function it(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line ? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built) : $e(e, t);
          }
          function ot(e, t) {
            var n = t.text.className,
              r = it(e, t);
            t.text == t.node && (t.node = r.pre),
              t.text.parentNode.replaceChild(r.pre, t.text),
              (t.text = r.pre),
              r.bgClass != t.bgClass || r.textClass != t.textClass
                ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), at(e, t))
                : n && (t.text.className = n);
          }
          function at(e, t) {
            (function (e, t) {
              var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
              if ((n && (n += " CodeMirror-linebackground"), t.background))
                n ? (t.background.className = n) : (t.background.parentNode.removeChild(t.background), (t.background = null));
              else if (n) {
                var i = rt(t);
                (t.background = i.insertBefore(r("div", null, n), i.firstChild)), e.display.input.setUneditable(t.background);
              }
            })(e, t),
              t.line.wrapClass ? (rt(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = "");
            var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
            t.text.className = n || "";
          }
          function st(e, t, n, i) {
            if (
              (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
              t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
              t.line.gutterClass)
            ) {
              var o = rt(t);
              (t.gutterBackground = r(
                "div",
                null,
                "CodeMirror-gutter-background " + t.line.gutterClass,
                "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"
              )),
                e.display.input.setUneditable(t.gutterBackground),
                o.insertBefore(t.gutterBackground, t.text);
            }
            var a = t.line.gutterMarkers;
            if (e.options.lineNumbers || a) {
              var s = rt(t),
                l = (t.gutter = r(
                  "div",
                  null,
                  "CodeMirror-gutter-wrapper",
                  "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px"
                ));
              if (
                (e.display.input.setUneditable(l),
                s.insertBefore(l, t.text),
                t.line.gutterClass && (l.className += " " + t.line.gutterClass),
                !e.options.lineNumbers ||
                  (a && a["CodeMirror-linenumbers"]) ||
                  (t.lineNumber = l.appendChild(
                    r(
                      "div",
                      ne(e.options, n),
                      "CodeMirror-linenumber CodeMirror-gutter-elt",
                      "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
                    )
                  )),
                a)
              )
                for (var c = 0; c < e.display.gutterSpecs.length; ++c) {
                  var u = e.display.gutterSpecs[c].className,
                    f = a.hasOwnProperty(u) && a[u];
                  f &&
                    l.appendChild(
                      r("div", [f], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[u] + "px; width: " + i.gutterWidth[u] + "px")
                    );
                }
            }
          }
          function lt(t, n, r) {
            n.alignable && (n.alignable = null);
            for (var i = e("CodeMirror-linewidget"), o = n.node.firstChild, a = void 0; o; o = a)
              (a = o.nextSibling), i.test(o.className) && n.node.removeChild(o);
            ut(t, n, r);
          }
          function ct(e, t, n, r) {
            var i = it(e, t);
            return (
              (t.text = t.node = i.pre),
              i.bgClass && (t.bgClass = i.bgClass),
              i.textClass && (t.textClass = i.textClass),
              at(e, t),
              st(e, t, n, r),
              ut(e, t, r),
              t.node
            );
          }
          function ut(e, t, n) {
            if ((ft(e, t.line, t, n, !0), t.rest)) for (var r = 0; r < t.rest.length; r++) ft(e, t.rest[r], t, n, !1);
          }
          function ft(e, t, n, i, o) {
            if (t.widgets)
              for (var a = rt(n), s = 0, l = t.widgets; s < l.length; ++s) {
                var c = l[s],
                  u = r("div", [c.node], "CodeMirror-linewidget" + (c.className ? " " + c.className : ""));
                c.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
                  dt(c, u, n, i),
                  e.display.input.setUneditable(u),
                  o && c.above ? a.insertBefore(u, n.gutter || n.text) : a.appendChild(u),
                  et(c, "redraw");
              }
          }
          function dt(e, t, n, r) {
            if (e.noHScroll) {
              (n.alignable || (n.alignable = [])).push(t);
              var i = r.wrapperWidth;
              (t.style.left = r.fixedPos + "px"),
                e.coverGutter || ((i -= r.gutterTotalWidth), (t.style.paddingLeft = r.gutterTotalWidth + "px")),
                (t.style.width = i + "px");
            }
            e.coverGutter &&
              ((t.style.zIndex = 5), (t.style.position = "relative"), e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
          }
          function ht(e) {
            if (null != e.height) return e.height;
            var t = e.doc.cm;
            if (!t) return 0;
            if (!o(document.body, e.node)) {
              var i = "position: relative;";
              e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
                e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"),
                n(t.display.measure, r("div", [e.node], null, i));
            }
            return (e.height = e.node.parentNode.offsetHeight);
          }
          function pt(e, t) {
            for (var n = F(t); n != e.wrapper; n = n.parentNode)
              if (!n || (1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events")) || (n.parentNode == e.sizer && n != e.mover))
                return !0;
          }
          function mt(e) {
            return e.lineSpace.offsetTop;
          }
          function gt(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight;
          }
          function vt(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var t = n(e.measure, r("pre", "x", "CodeMirror-line-like")),
              i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
              o = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
            return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o;
          }
          function yt(e) {
            return Eo - e.display.nativeBarWidth;
          }
          function bt(e) {
            return e.display.scroller.clientWidth - yt(e) - e.display.barWidth;
          }
          function kt(e) {
            return e.display.scroller.clientHeight - yt(e) - e.display.barHeight;
          }
          function wt(e, t, n) {
            if (e.line == t)
              return {
                map: e.measure.map,
                cache: e.measure.cache
              };
            for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] };
            for (var i = 0; i < e.rest.length; i++)
              if (Z(e.rest[i]) > n) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
          }
          function Ct(e, t, n, r) {
            return Mt(e, St(e, t), n, r);
          }
          function xt(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[en(e, t)];
            var n = e.display.externalMeasured;
            return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
          }
          function St(e, t) {
            var r = Z(t),
              i = xt(e, r);
            i && !i.text ? (i = null) : i && i.changes && (nt(e, i, r, Xt(e)), (e.curOp.forceUpdate = !0)),
              i ||
                (i = (function (e, t) {
                  var r = Z((t = He(t))),
                    i = (e.display.externalMeasured = new Qe(e.doc, t, r));
                  i.lineN = r;
                  var o = (i.built = $e(e, i));
                  return (i.text = o.pre), n(e.display.lineMeasure, o.pre), i;
                })(e, t));
            var o = wt(i, t, r);
            return { line: t, view: i, rect: null, map: o.map, cache: o.cache, before: o.before, hasHeights: !1 };
          }
          function Mt(e, t, i, o, a) {
            t.before && (i = -1);
            var s,
              l = i + (o || "");
            return (
              t.cache.hasOwnProperty(l)
                ? (s = t.cache[l])
                : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                  t.hasHeights ||
                    ((function (e, t, n) {
                      var r = e.options.lineWrapping,
                        i = r && bt(e);
                      if (!t.measure.heights || (r && t.measure.width != i)) {
                        var o = (t.measure.heights = []);
                        if (r) {
                          t.measure.width = i;
                          for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                            var l = a[s],
                              c = a[s + 1];
                            Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top);
                          }
                        }
                        o.push(n.bottom - n.top);
                      }
                    })(e, t.view, t.rect),
                    (t.hasHeights = !0)),
                  (s = (function (e, t, i, o) {
                    var a,
                      s = Lt(t.map, i, o),
                      l = s.node,
                      c = s.start,
                      u = s.end,
                      f = s.collapse;
                    if (3 == l.nodeType) {
                      for (var d = 0; d < 4; d++) {
                        for (; c && C(t.line.text.charAt(s.coverStart + c)); ) --c;
                        for (; s.coverStart + u < s.coverEnd && C(t.line.text.charAt(s.coverStart + u)); ) ++u;
                        if (
                          (a =
                            oo && ao < 9 && 0 == c && u == s.coverEnd - s.coverStart
                              ? l.parentNode.getBoundingClientRect()
                              : Tt(Co(l, c, u).getClientRects(), o)).left ||
                          a.right ||
                          0 == c
                        )
                          break;
                        (u = c), (c -= 1), (f = "right");
                      }
                      oo &&
                        ao < 11 &&
                        (a = (function (e, t) {
                          if (
                            !window.screen ||
                            null == screen.logicalXDPI ||
                            screen.logicalXDPI == screen.deviceXDPI ||
                            !(function (e) {
                              if (null != qo) return qo;
                              var t = n(e, r("span", "x")),
                                i = t.getBoundingClientRect(),
                                o = Co(t, 0, 1).getBoundingClientRect();
                              return (qo = Math.abs(i.left - o.left) > 1);
                            })(e)
                          )
                            return t;
                          var i = screen.logicalXDPI / screen.deviceXDPI,
                            o = screen.logicalYDPI / screen.deviceYDPI;
                          return { left: t.left * i, right: t.right * i, top: t.top * o, bottom: t.bottom * o };
                        })(e.display.measure, a));
                    } else {
                      var h;
                      c > 0 && (f = o = "right"),
                        (a =
                          e.options.lineWrapping && (h = l.getClientRects()).length > 1
                            ? h["right" == o ? h.length - 1 : 0]
                            : l.getBoundingClientRect());
                    }
                    if (oo && ao < 9 && !c && (!a || (!a.left && !a.right))) {
                      var p = l.parentNode.getClientRects()[0];
                      a = p ? { left: p.left, right: p.left + Gt(e.display), top: p.top, bottom: p.bottom } : ca;
                    }
                    for (
                      var m = a.top - t.rect.top, g = a.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, b = 0;
                      b < y.length - 1 && !(v < y[b]);
                      b++
                    );
                    var k = b ? y[b - 1] : 0,
                      w = y[b],
                      x = {
                        left: ("right" == f ? a.right : a.left) - t.rect.left,
                        right: ("left" == f ? a.left : a.right) - t.rect.left,
                        top: k,
                        bottom: w
                      };
                    return a.left || a.right || (x.bogus = !0), e.options.singleCursorHeightPerLine || ((x.rtop = m), (x.rbottom = g)), x;
                  })(e, t, i, o)).bogus || (t.cache[l] = s)),
              { left: s.left, right: s.right, top: a ? s.rtop : s.top, bottom: a ? s.rbottom : s.bottom }
            );
          }
          function Lt(e, t, n) {
            for (var r, i, o, a, s, l, c = 0; c < e.length; c += 3)
              if (
                ((s = e[c]),
                (l = e[c + 1]),
                t < s
                  ? ((i = 0), (o = 1), (a = "left"))
                  : t < l
                  ? (o = 1 + (i = t - s))
                  : (c == e.length - 3 || (t == l && e[c + 3] > t)) && ((i = (o = l - s) - 1), t >= l && (a = "right")),
                null != i)
              ) {
                if (((r = e[c + 2]), s == l && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i))
                  for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; ) (r = e[2 + (c -= 3)]), (a = "left");
                if ("right" == n && i == l - s)
                  for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft; ) (r = e[(c += 3) + 2]), (a = "right");
                break;
              }
            return { node: r, start: i, end: o, collapse: a, coverStart: s, coverEnd: l };
          }
          function Tt(e, t) {
            var n = ca;
            if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
            else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
            return n;
          }
          function At(e) {
            if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
              for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
          }
          function Ot(e) {
            (e.display.externalMeasure = null), t(e.display.lineMeasure);
            for (var n = 0; n < e.display.view.length; n++) At(e.display.view[n]);
          }
          function Nt(e) {
            Ot(e),
              (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
              e.options.lineWrapping || (e.display.maxLineChanged = !0),
              (e.display.lineNumChars = null);
          }
          function Et() {
            return co && go
              ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft))
              : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
          }
          function Pt() {
            return co && go
              ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop))
              : window.pageYOffset || (document.documentElement || document.body).scrollTop;
          }
          function It(e) {
            var t = 0;
            if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += ht(e.widgets[n]));
            return t;
          }
          function Rt(e, t, n, r, i) {
            if (!i) {
              var o = It(t);
              (n.top += o), (n.bottom += o);
            }
            if ("line" == r) return n;
            r || (r = "local");
            var a = Ke(t);
            if (("local" == r ? (a += mt(e.display)) : (a -= e.display.viewOffset), "page" == r || "window" == r)) {
              var s = e.display.lineSpace.getBoundingClientRect();
              a += s.top + ("window" == r ? 0 : Pt());
              var l = s.left + ("window" == r ? 0 : Et());
              (n.left += l), (n.right += l);
            }
            return (n.top += a), (n.bottom += a), n;
          }
          function Bt(e, t, n) {
            if ("div" == n) return t;
            var r = t.left,
              i = t.top;
            if ("page" == n) (r -= Et()), (i -= Pt());
            else if ("local" == n || !n) {
              var o = e.display.sizer.getBoundingClientRect();
              (r += o.left), (i += o.top);
            }
            var a = e.display.lineSpace.getBoundingClientRect();
            return { left: r - a.left, top: i - a.top };
          }
          function Ht(e, t, n, r, i) {
            return r || (r = X(e.doc, t.line)), Rt(e, r, Ct(e, r, t.ch, i), n);
          }
          function Dt(e, t, n, r, i, o) {
            function a(t, a) {
              var s = Mt(e, i, t, a ? "right" : "left", o);
              return a ? (s.left = s.right) : (s.right = s.left), Rt(e, r, s, n);
            }
            function s(e, t, n) {
              return a(n ? e - 1 : e, (1 == l[t].level) != n);
            }
            (r = r || X(e.doc, t.line)), i || (i = St(e, r));
            var l = L(r, e.doc.direction),
              c = t.ch,
              u = t.sticky;
            if ((c >= r.text.length ? ((c = r.text.length), (u = "before")) : c <= 0 && ((c = 0), (u = "after")), !l))
              return a("before" == u ? c - 1 : c, "before" == u);
            var f = M(l, c, u),
              d = Wo,
              h = s(c, f, "before" == u);
            return null != d && (h.other = s(c, d, "before" != u)), h;
          }
          function Ft(e, t) {
            var n = 0;
            (t = ue(e.doc, t)), e.options.lineWrapping || (n = Gt(e.display) * t.ch);
            var r = X(e.doc, t.line),
              i = Ke(r) + mt(e.display);
            return { left: n, right: n, top: i, bottom: i + r.height };
          }
          function Wt(e, t, n, r, i) {
            var o = re(e, t, n);
            return (o.xRel = i), r && (o.outside = r), o;
          }
          function zt(e, t, n) {
            var r = e.doc;
            if ((n += e.display.viewOffset) < 0) return Wt(r.first, 0, null, -1, -1);
            var i = ee(r, n),
              o = r.first + r.size - 1;
            if (i > o) return Wt(r.first + r.size - 1, X(r, o).text.length, null, 1, 1);
            t < 0 && (t = 0);
            for (var a = X(r, i); ; ) {
              var s = Ut(e, a, i, t, n),
                l = Re(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
              if (!l) return s;
              var c = l.find(1);
              if (c.line == i) return c;
              a = X(r, (i = c.line));
            }
          }
          function Kt(e, t, n, r) {
            r -= It(t);
            var i = t.text.length,
              o = S(
                function (t) {
                  return Mt(e, n, t - 1).bottom <= r;
                },
                i,
                0
              );
            return {
              begin: o,
              end: (i = S(
                function (t) {
                  return Mt(e, n, t).top > r;
                },
                o,
                i
              ))
            };
          }
          function jt(e, t, n, r) {
            return n || (n = St(e, t)), Kt(e, t, n, Rt(e, t, Mt(e, n, r), "line").top);
          }
          function _t(e, t, n, r) {
            return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
          }
          function Ut(e, t, n, r, i) {
            i -= Ke(t);
            var o = St(e, t),
              a = It(t),
              s = 0,
              l = t.text.length,
              c = !0,
              u = L(t, e.doc.direction);
            if (u) {
              var f = (e.options.lineWrapping ? $t : Vt)(e, t, n, o, u, r, i);
              (s = (c = 1 != f.level) ? f.from : f.to - 1), (l = c ? f.to : f.from - 1);
            }
            var d,
              h,
              p = null,
              m = null,
              g = S(
                function (t) {
                  var n = Mt(e, o, t);
                  return (n.top += a), (n.bottom += a), !!_t(n, r, i, !1) && (n.top <= i && n.left <= r && ((p = t), (m = n)), !0);
                },
                s,
                l
              ),
              v = !1;
            if (m) {
              var y = r - m.left < m.right - r,
                b = y == c;
              (g = p + (b ? 0 : 1)), (h = b ? "after" : "before"), (d = y ? m.left : m.right);
            } else {
              c || (g != l && g != s) || g++,
                (h =
                  0 == g ? "after" : g == t.text.length ? "before" : Mt(e, o, g - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before");
              var k = Dt(e, re(n, g, h), "line", t, o);
              (d = k.left), (v = i < k.top ? -1 : i >= k.bottom ? 1 : 0);
            }
            return Wt(n, (g = x(t.text, g, 1)), h, v, r - d);
          }
          function Vt(e, t, n, r, i, o, a) {
            var s = S(
                function (s) {
                  var l = i[s],
                    c = 1 != l.level;
                  return _t(Dt(e, re(n, c ? l.to : l.from, c ? "before" : "after"), "line", t, r), o, a, !0);
                },
                0,
                i.length - 1
              ),
              l = i[s];
            if (s > 0) {
              var c = 1 != l.level,
                u = Dt(e, re(n, c ? l.from : l.to, c ? "after" : "before"), "line", t, r);
              _t(u, o, a, !0) && u.top > a && (l = i[s - 1]);
            }
            return l;
          }
          function $t(e, t, n, r, i, o, a) {
            var s = Kt(e, t, r, a),
              l = s.begin,
              c = s.end;
            /\s/.test(t.text.charAt(c - 1)) && c--;
            for (var u = null, f = null, d = 0; d < i.length; d++) {
              var h = i[d];
              if (!(h.from >= c || h.to <= l)) {
                var p = Mt(e, r, 1 != h.level ? Math.min(c, h.to) - 1 : Math.max(l, h.from)).right,
                  m = p < o ? o - p + 1e9 : p - o;
                (!u || f > m) && ((u = h), (f = m));
              }
            }
            return (
              u || (u = i[i.length - 1]),
              u.from < l && (u = { from: l, to: u.to, level: u.level }),
              u.to > c &&
                (u = {
                  from: u.from,
                  to: c,
                  level: u.level
                }),
              u
            );
          }
          function qt(e) {
            if (null != e.cachedTextHeight) return e.cachedTextHeight;
            if (null == ia) {
              ia = r("pre", null, "CodeMirror-line-like");
              for (var i = 0; i < 49; ++i) ia.appendChild(document.createTextNode("x")), ia.appendChild(r("br"));
              ia.appendChild(document.createTextNode("x"));
            }
            n(e.measure, ia);
            var o = ia.offsetHeight / 50;
            return o > 3 && (e.cachedTextHeight = o), t(e.measure), o || 1;
          }
          function Gt(e) {
            if (null != e.cachedCharWidth) return e.cachedCharWidth;
            var t = r("span", "xxxxxxxxxx"),
              i = r("pre", [t], "CodeMirror-line-like");
            n(e.measure, i);
            var o = t.getBoundingClientRect(),
              a = (o.right - o.left) / 10;
            return a > 2 && (e.cachedCharWidth = a), a || 10;
          }
          function Xt(e) {
            for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
              var s = e.display.gutterSpecs[a].className;
              (n[s] = o.offsetLeft + o.clientLeft + i), (r[s] = o.clientWidth);
            }
            return {
              fixedPos: Yt(t),
              gutterTotalWidth: t.gutters.offsetWidth,
              gutterLeft: n,
              gutterWidth: r,
              wrapperWidth: t.wrapper.clientWidth
            };
          }
          function Yt(e) {
            return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
          }
          function Jt(e) {
            var t = qt(e.display),
              n = e.options.lineWrapping,
              r = n && Math.max(5, e.display.scroller.clientWidth / Gt(e.display) - 3);
            return function (i) {
              if (We(e.doc, i)) return 0;
              var o = 0;
              if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
              return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
            };
          }
          function Qt(e) {
            var t = e.doc,
              n = Jt(e);
            t.iter(function (e) {
              var t = n(e);
              t != e.height && Q(e, t);
            });
          }
          function Zt(e, t, n, r) {
            var i = e.display;
            if (!n && "true" == F(t).getAttribute("cm-not-content")) return null;
            var o,
              a,
              s = i.lineSpace.getBoundingClientRect();
            try {
              (o = t.clientX - s.left), (a = t.clientY - s.top);
            } catch (e) {
              return null;
            }
            var l,
              c = zt(e, o, a);
            if (r && c.xRel > 0 && (l = X(e.doc, c.line).text).length == c.ch) {
              var u = f(l, l.length, e.options.tabSize) - l.length;
              c = re(c.line, Math.max(0, Math.round((o - vt(e.display).left) / Gt(e.display)) - u));
            }
            return c;
          }
          function en(e, t) {
            if (t >= e.display.viewTo) return null;
            if ((t -= e.display.viewFrom) < 0) return null;
            for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r;
          }
          function tn(e, t, n, r) {
            null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
            var i = e.display;
            if (
              (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
              (e.curOp.viewChanged = !0),
              t >= i.viewTo)
            )
              na && De(e.doc, t) < i.viewTo && rn(e);
            else if (n <= i.viewFrom) na && Fe(e.doc, n + r) > i.viewFrom ? rn(e) : ((i.viewFrom += r), (i.viewTo += r));
            else if (t <= i.viewFrom && n >= i.viewTo) rn(e);
            else if (t <= i.viewFrom) {
              var o = on(e, n, n + r, 1);
              o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += r)) : rn(e);
            } else if (n >= i.viewTo) {
              var a = on(e, t, t, -1);
              a ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN)) : rn(e);
            } else {
              var s = on(e, t, t, -1),
                l = on(e, n, n + r, 1);
              s && l
                ? ((i.view = i.view
                    .slice(0, s.index)
                    .concat(Ze(e, s.lineN, l.lineN))
                    .concat(i.view.slice(l.index))),
                  (i.viewTo += r))
                : rn(e);
            }
            var c = i.externalMeasured;
            c && (n < c.lineN ? (c.lineN += r) : t < c.lineN + c.size && (i.externalMeasured = null));
          }
          function nn(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display,
              i = e.display.externalMeasured;
            if ((i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo))) {
              var o = r.view[en(e, t)];
              if (null != o.node) {
                var a = o.changes || (o.changes = []);
                -1 == d(a, n) && a.push(n);
              }
            }
          }
          function rn(e) {
            (e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0);
          }
          function on(e, t, n, r) {
            var i,
              o = en(e, t),
              a = e.display.view;
            if (!na || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
            for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
            if (s != t) {
              if (r > 0) {
                if (o == a.length - 1) return null;
                (i = s + a[o].size - t), o++;
              } else i = s - t;
              (t += i), (n += i);
            }
            for (; De(e.doc, n) != n; ) {
              if (o == (r < 0 ? 0 : a.length - 1)) return null;
              (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
            }
            return { index: o, lineN: n };
          }
          function an(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
              var i = t[r];
              i.hidden || (i.node && !i.changes) || ++n;
            }
            return n;
          }
          function sn(e) {
            e.display.input.showSelection(e.display.input.prepareSelection());
          }
          function ln(e, t) {
            void 0 === t && (t = !0);
            for (
              var n = e.doc,
                r = {},
                i = (r.cursors = document.createDocumentFragment()),
                o = (r.selection = document.createDocumentFragment()),
                a = 0;
              a < n.sel.ranges.length;
              a++
            )
              if (t || a != n.sel.primIndex) {
                var s = n.sel.ranges[a];
                if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                  var l = s.empty();
                  (l || e.options.showCursorWhenSelecting) && cn(e, s.head, i), l || fn(e, s, o);
                }
              }
            return r;
          }
          function cn(e, t, n) {
            var i = Dt(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
              o = n.appendChild(r("div", " ", "CodeMirror-cursor"));
            if (
              ((o.style.left = i.left + "px"),
              (o.style.top = i.top + "px"),
              (o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px"),
              i.other)
            ) {
              var a = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
              (a.style.display = ""),
                (a.style.left = i.other.left + "px"),
                (a.style.top = i.other.top + "px"),
                (a.style.height = 0.85 * (i.other.bottom - i.other.top) + "px");
            }
          }
          function un(e, t) {
            return e.top - t.top || e.left - t.left;
          }
          function fn(e, t, n) {
            function i(e, t, n, i) {
              t < 0 && (t = 0),
                (t = Math.round(t)),
                (i = Math.round(i)),
                l.appendChild(
                  r(
                    "div",
                    null,
                    "CodeMirror-selected",
                    "position: absolute; left: " +
                      e +
                      "px;\n                             top: " +
                      t +
                      "px; width: " +
                      (null == n ? f - e : n) +
                      "px;\n                             height: " +
                      (i - t) +
                      "px"
                  )
                );
            }
            function o(t, n, r) {
              function o(n, r) {
                return Ht(e, re(t, n), "div", h, r);
              }
              function a(t, n, r) {
                var i = jt(e, h, null, t),
                  a = ("ltr" == n) == ("after" == r) ? "left" : "right";
                return o("after" == r ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1), a)[a];
              }
              var l,
                c,
                h = X(s, t),
                p = h.text.length,
                m = L(h, s.direction);
              return (
                (function (e, t, n, r) {
                  if (!e) return r(t, n, "ltr", 0);
                  for (var i = !1, o = 0; o < e.length; ++o) {
                    var a = e[o];
                    ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                      (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), (i = !0));
                  }
                  i || r(t, n, "ltr");
                })(m, n || 0, null == r ? p : r, function (e, t, s, h) {
                  var g = "ltr" == s,
                    v = o(e, g ? "left" : "right"),
                    y = o(t - 1, g ? "right" : "left"),
                    b = null == n && 0 == e,
                    k = null == r && t == p,
                    w = 0 == h,
                    C = !m || h == m.length - 1;
                  if (y.top - v.top <= 3) {
                    var x = (d ? k : b) && C,
                      S = (d ? b : k) && w ? u : (g ? v : y).left,
                      M = x ? f : (g ? y : v).right;
                    i(S, v.top, M - S, v.bottom);
                  } else {
                    var L, T, A, O;
                    g
                      ? ((L = d && b && w ? u : v.left),
                        (T = d ? f : a(e, s, "before")),
                        (A = d ? u : a(t, s, "after")),
                        (O = d && k && C ? f : y.right))
                      : ((L = d ? a(e, s, "before") : u),
                        (T = !d && b && w ? f : v.right),
                        (A = !d && k && C ? u : y.left),
                        (O = d ? a(t, s, "after") : f)),
                      i(L, v.top, T - L, v.bottom),
                      v.bottom < y.top && i(u, v.bottom, null, y.top),
                      i(A, y.top, O - A, y.bottom);
                  }
                  (!l || un(v, l) < 0) && (l = v), un(y, l) < 0 && (l = y), (!c || un(v, c) < 0) && (c = v), un(y, c) < 0 && (c = y);
                }),
                { start: l, end: c }
              );
            }
            var a = e.display,
              s = e.doc,
              l = document.createDocumentFragment(),
              c = vt(e.display),
              u = c.left,
              f = Math.max(a.sizerWidth, bt(e) - a.sizer.offsetLeft) - c.right,
              d = "ltr" == s.direction,
              h = t.from(),
              p = t.to();
            if (h.line == p.line) o(h.line, h.ch, p.ch);
            else {
              var m = X(s, h.line),
                g = X(s, p.line),
                v = He(m) == He(g),
                y = o(h.line, h.ch, v ? m.text.length + 1 : null).end,
                b = o(p.line, v ? 0 : null, p.ch).start;
              v &&
                (y.top < b.top - 2
                  ? (i(y.right, y.top, null, y.bottom), i(u, b.top, b.left, b.bottom))
                  : i(y.right, y.top, b.left - y.right, y.bottom)),
                y.bottom < b.top && i(u, y.bottom, null, b.top);
            }
            n.appendChild(l);
          }
          function dn(e) {
            if (e.state.focused) {
              var t = e.display;
              clearInterval(t.blinker);
              var n = !0;
              (t.cursorDiv.style.visibility = ""),
                e.options.cursorBlinkRate > 0
                  ? (t.blinker = setInterval(function () {
                      e.hasFocus() || gn(e), (t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden");
                    }, e.options.cursorBlinkRate))
                  : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
            }
          }
          function hn(e) {
            e.state.focused || (e.display.input.focus(), mn(e));
          }
          function pn(e) {
            (e.state.delayingBlurEvent = !0),
              setTimeout(function () {
                e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), gn(e));
              }, 100);
          }
          function mn(e, t) {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
              "nocursor" != e.options.readOnly &&
                (e.state.focused ||
                  (O(e, "focus", e, t),
                  (e.state.focused = !0),
                  s(e.display.wrapper, "CodeMirror-focused"),
                  e.curOp ||
                    e.display.selForContextMenu == e.doc.sel ||
                    (e.display.input.reset(),
                    so &&
                      setTimeout(function () {
                        return e.display.input.reset(!0);
                      }, 20)),
                  e.display.input.receivedFocus()),
                dn(e));
          }
          function gn(e, t) {
            e.state.delayingBlurEvent ||
              (e.state.focused && (O(e, "blur", e, t), (e.state.focused = !1), Mo(e.display.wrapper, "CodeMirror-focused")),
              clearInterval(e.display.blinker),
              setTimeout(function () {
                e.state.focused || (e.display.shift = !1);
              }, 150));
          }
          function vn(e) {
            for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
              var i = t.view[r],
                o = e.options.lineWrapping,
                a = void 0,
                s = 0;
              if (!i.hidden) {
                if (oo && ao < 8) {
                  var l = i.node.offsetTop + i.node.offsetHeight;
                  (a = l - n), (n = l);
                } else {
                  var c = i.node.getBoundingClientRect();
                  (a = c.bottom - c.top), !o && i.text.firstChild && (s = i.text.firstChild.getBoundingClientRect().right - c.left - 1);
                }
                var u = i.line.height - a;
                if ((u > 0.005 || u < -0.005) && (Q(i.line, a), yn(i.line), i.rest)) for (var f = 0; f < i.rest.length; f++) yn(i.rest[f]);
                if (s > e.display.sizerWidth) {
                  var d = Math.ceil(s / Gt(e.display));
                  d > e.display.maxLineLength &&
                    ((e.display.maxLineLength = d), (e.display.maxLine = i.line), (e.display.maxLineChanged = !0));
                }
              }
            }
          }
          function yn(e) {
            if (e.widgets)
              for (var t = 0; t < e.widgets.length; ++t) {
                var n = e.widgets[t],
                  r = n.node.parentNode;
                r && (n.height = r.offsetHeight);
              }
          }
          function bn(e, t, n) {
            var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - mt(e));
            var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
              o = ee(t, r),
              a = ee(t, i);
            if (n && n.ensure) {
              var s = n.ensure.from.line,
                l = n.ensure.to.line;
              s < o
                ? ((o = s), (a = ee(t, Ke(X(t, s)) + e.wrapper.clientHeight)))
                : Math.min(l, t.lastLine()) >= a && ((o = ee(t, Ke(X(t, l)) - e.wrapper.clientHeight)), (a = l));
            }
            return { from: o, to: Math.max(a, o + 1) };
          }
          function kn(e, t) {
            var n = e.display,
              r = qt(e.display);
            t.top < 0 && (t.top = 0);
            var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
              o = kt(e),
              a = {};
            t.bottom - t.top > o && (t.bottom = t.top + o);
            var s = e.doc.height + gt(n),
              l = t.top < r,
              c = t.bottom > s - r;
            if (t.top < i) a.scrollTop = l ? 0 : t.top;
            else if (t.bottom > i + o) {
              var u = Math.min(t.top, (c ? s : t.bottom) - o);
              u != i && (a.scrollTop = u);
            }
            var f = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
              d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - f,
              h = bt(e) - n.gutters.offsetWidth,
              p = t.right - t.left > h;
            return (
              p && (t.right = t.left + h),
              t.left < 10
                ? (a.scrollLeft = 0)
                : t.left < d
                ? (a.scrollLeft = Math.max(0, t.left + f - (p ? 0 : 10)))
                : t.right > h + d - 3 && (a.scrollLeft = t.right + (p ? 0 : 10) - h),
              a
            );
          }
          function wn(e, t) {
            null != t && (Sn(e), (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
          }
          function Cn(e) {
            Sn(e);
            var t = e.getCursor();
            e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
          }
          function xn(e, t, n) {
            (null == t && null == n) || Sn(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
          }
          function Sn(e) {
            var t = e.curOp.scrollToPos;
            t && ((e.curOp.scrollToPos = null), Mn(e, Ft(e, t.from), Ft(e, t.to), t.margin));
          }
          function Mn(e, t, n, r) {
            var i = kn(e, {
              left: Math.min(t.left, n.left),
              top: Math.min(t.top, n.top) - r,
              right: Math.max(t.right, n.right),
              bottom: Math.max(t.bottom, n.bottom) + r
            });
            xn(e, i.scrollLeft, i.scrollTop);
          }
          function Ln(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 || (to || Gn(e, { top: t }), Tn(e, t, !0), to && Gn(e), Un(e, 100));
          }
          function Tn(e, t, n) {
            (t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))),
              (e.display.scroller.scrollTop != t || n) &&
                ((e.doc.scrollTop = t),
                e.display.scrollbars.setScrollTop(t),
                e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
          }
          function An(e, t, n, r) {
            (t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))),
              ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) ||
                ((e.doc.scrollLeft = t),
                Jn(e),
                e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
                e.display.scrollbars.setScrollLeft(t));
          }
          function On(e) {
            var t = e.display,
              n = t.gutters.offsetWidth,
              r = Math.round(e.doc.height + gt(e.display));
            return {
              clientHeight: t.scroller.clientHeight,
              viewHeight: t.wrapper.clientHeight,
              scrollWidth: t.scroller.scrollWidth,
              clientWidth: t.scroller.clientWidth,
              viewWidth: t.wrapper.clientWidth,
              barLeft: e.options.fixedGutter ? n : 0,
              docHeight: r,
              scrollHeight: r + yt(e) + t.barHeight,
              nativeBarWidth: t.nativeBarWidth,
              gutterWidth: n
            };
          }
          function Nn(e, t) {
            t || (t = On(e));
            var n = e.display.barWidth,
              r = e.display.barHeight;
            En(e, t);
            for (var i = 0; (i < 4 && n != e.display.barWidth) || r != e.display.barHeight; i++)
              n != e.display.barWidth && e.options.lineWrapping && vn(e), En(e, On(e)), (n = e.display.barWidth), (r = e.display.barHeight);
          }
          function En(e, t) {
            var n = e.display,
              r = n.scrollbars.update(t);
            (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
              (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
              (n.heightForcer.style.borderBottom = r.bottom + "px solid transparent"),
              r.right && r.bottom
                ? ((n.scrollbarFiller.style.display = "block"),
                  (n.scrollbarFiller.style.height = r.bottom + "px"),
                  (n.scrollbarFiller.style.width = r.right + "px"))
                : (n.scrollbarFiller.style.display = ""),
              r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
                ? ((n.gutterFiller.style.display = "block"),
                  (n.gutterFiller.style.height = r.bottom + "px"),
                  (n.gutterFiller.style.width = t.gutterWidth + "px"))
                : (n.gutterFiller.style.display = "");
          }
          function Pn(e) {
            e.display.scrollbars &&
              (e.display.scrollbars.clear(), e.display.scrollbars.addClass && Mo(e.display.wrapper, e.display.scrollbars.addClass)),
              (e.display.scrollbars = new da[e.options.scrollbarStyle](
                function (t) {
                  e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                    jo(t, "mousedown", function () {
                      e.state.focused &&
                        setTimeout(function () {
                          return e.display.input.focus();
                        }, 0);
                    }),
                    t.setAttribute("cm-not-content", "true");
                },
                function (t, n) {
                  "horizontal" == n ? An(e, t) : Ln(e, t);
                },
                e
              )),
              e.display.scrollbars.addClass && s(e.display.wrapper, e.display.scrollbars.addClass);
          }
          function In(e) {
            var t;
            (e.curOp = {
              cm: e,
              viewChanged: !1,
              startHeight: e.doc.height,
              forceUpdate: !1,
              updateInput: 0,
              typing: !1,
              changeObjs: null,
              cursorActivityHandlers: null,
              cursorActivityCalled: 0,
              selectionChanged: !1,
              updateMaxLine: !1,
              scrollLeft: null,
              scrollTop: null,
              scrollToPos: null,
              focus: !1,
              id: ++ha
            }),
              (t = e.curOp),
              sa ? sa.ops.push(t) : (t.ownsGroup = sa = { ops: [t], delayedCallbacks: [] });
          }
          function Rn(e) {
            var t = e.curOp;
            t &&
              (function (e) {
                var t = e.ownsGroup;
                if (t)
                  try {
                    !(function (e) {
                      var t = e.delayedCallbacks,
                        n = 0;
                      do {
                        for (; n < t.length; n++) t[n].call(null);
                        for (var r = 0; r < e.ops.length; r++) {
                          var i = e.ops[r];
                          if (i.cursorActivityHandlers)
                            for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                              i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                        }
                      } while (n < t.length);
                    })(t);
                  } finally {
                    (sa = null),
                      (function (e) {
                        for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                        !(function (e) {
                          for (var t = e.ops, n = 0; n < t.length; n++) Bn(t[n]);
                          for (var r = 0; r < t.length; r++) Hn(t[r]);
                          for (var i = 0; i < t.length; i++) Dn(t[i]);
                          for (var o = 0; o < t.length; o++) Fn(t[o]);
                          for (var a = 0; a < t.length; a++) Wn(t[a]);
                        })(e);
                      })(t);
                  }
              })(t);
          }
          function Bn(e) {
            var t = e.cm,
              n = t.display;
            (function (e) {
              var t = e.display;
              !t.scrollbarsClipped &&
                t.scroller.offsetWidth &&
                ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
                (t.heightForcer.style.height = yt(e) + "px"),
                (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
                (t.sizer.style.borderRightWidth = yt(e) + "px"),
                (t.scrollbarsClipped = !0));
            })(t),
              e.updateMaxLine && _e(t),
              (e.mustUpdate =
                e.viewChanged ||
                e.forceUpdate ||
                null != e.scrollTop ||
                (e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo)) ||
                (n.maxLineChanged && t.options.lineWrapping)),
              (e.update = e.mustUpdate && new pa(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate));
          }
          function Hn(e) {
            e.updatedDisplay = e.mustUpdate && $n(e.cm, e.update);
          }
          function Dn(e) {
            var t = e.cm,
              n = t.display;
            e.updatedDisplay && vn(t),
              (e.barMeasure = On(t)),
              n.maxLineChanged &&
                !t.options.lineWrapping &&
                ((e.adjustWidthTo = Ct(t, n.maxLine, n.maxLine.text.length).left + 3),
                (t.display.sizerWidth = e.adjustWidthTo),
                (e.barMeasure.scrollWidth = Math.max(
                  n.scroller.clientWidth,
                  n.sizer.offsetLeft + e.adjustWidthTo + yt(t) + t.display.barWidth
                )),
                (e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - bt(t)))),
              (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
          }
          function Fn(e) {
            var t = e.cm;
            null != e.adjustWidthTo &&
              ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
              e.maxScrollLeft < t.doc.scrollLeft && An(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
              (t.display.maxLineChanged = !1));
            var n = e.focus && e.focus == a();
            e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
              (e.updatedDisplay || e.startHeight != t.doc.height) && Nn(t, e.barMeasure),
              e.updatedDisplay && Yn(t, e.barMeasure),
              e.selectionChanged && dn(t),
              t.state.focused && e.updateInput && t.display.input.reset(e.typing),
              n && hn(e.cm);
          }
          function Wn(e) {
            var t = e.cm,
              n = t.display,
              i = t.doc;
            e.updatedDisplay && qn(t, e.update),
              null == n.wheelStartX ||
                (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
                (n.wheelStartX = n.wheelStartY = null),
              null != e.scrollTop && Tn(t, e.scrollTop, e.forceScroll),
              null != e.scrollLeft && An(t, e.scrollLeft, !0, !0),
              e.scrollToPos &&
                (function (e, t) {
                  if (!N(e, "scrollCursorIntoView")) {
                    var n = e.display,
                      i = n.sizer.getBoundingClientRect(),
                      o = null;
                    if (
                      (t.top + i.top < 0
                        ? (o = !0)
                        : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1),
                      null != o && !po)
                    ) {
                      var a = r(
                        "div",
                        "​",
                        null,
                        "position: absolute;\n                         top: " +
                          (t.top - n.viewOffset - mt(e.display)) +
                          "px;\n                         height: " +
                          (t.bottom - t.top + yt(e) + n.barHeight) +
                          "px;\n                         left: " +
                          t.left +
                          "px; width: " +
                          Math.max(2, t.right - t.left) +
                          "px;"
                      );
                      e.display.lineSpace.appendChild(a), a.scrollIntoView(o), e.display.lineSpace.removeChild(a);
                    }
                  }
                })(
                  t,
                  (function (e, t, n, r) {
                    var i;
                    null == r && (r = 0),
                      e.options.lineWrapping ||
                        t != n ||
                        (n =
                          "before" == (t = t.ch ? re(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky
                            ? re(t.line, t.ch + 1, "before")
                            : t);
                    for (var o = 0; o < 5; o++) {
                      var a = !1,
                        s = Dt(e, t),
                        l = n && n != t ? Dt(e, n) : s,
                        c = kn(
                          e,
                          (i = {
                            left: Math.min(s.left, l.left),
                            top: Math.min(s.top, l.top) - r,
                            right: Math.max(s.left, l.left),
                            bottom: Math.max(s.bottom, l.bottom) + r
                          })
                        ),
                        u = e.doc.scrollTop,
                        f = e.doc.scrollLeft;
                      if (
                        (null != c.scrollTop && (Ln(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                        null != c.scrollLeft && (An(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - f) > 1 && (a = !0)),
                        !a)
                      )
                        break;
                    }
                    return i;
                  })(t, ue(i, e.scrollToPos.from), ue(i, e.scrollToPos.to), e.scrollToPos.margin)
                );
            var o = e.maybeHiddenMarkers,
              a = e.maybeUnhiddenMarkers;
            if (o) for (var s = 0; s < o.length; ++s) o[s].lines.length || O(o[s], "hide");
            if (a) for (var l = 0; l < a.length; ++l) a[l].lines.length && O(a[l], "unhide");
            n.wrapper.offsetHeight && (i.scrollTop = t.display.scroller.scrollTop),
              e.changeObjs && O(t, "changes", t, e.changeObjs),
              e.update && e.update.finish();
          }
          function zn(e, t) {
            if (e.curOp) return t();
            In(e);
            try {
              return t();
            } finally {
              Rn(e);
            }
          }
          function Kn(e, t) {
            return function () {
              if (e.curOp) return t.apply(e, arguments);
              In(e);
              try {
                return t.apply(e, arguments);
              } finally {
                Rn(e);
              }
            };
          }
          function jn(e) {
            return function () {
              if (this.curOp) return e.apply(this, arguments);
              In(this);
              try {
                return e.apply(this, arguments);
              } finally {
                Rn(this);
              }
            };
          }
          function _n(e) {
            return function () {
              var t = this.cm;
              if (!t || t.curOp) return e.apply(this, arguments);
              In(t);
              try {
                return e.apply(this, arguments);
              } finally {
                Rn(t);
              }
            };
          }
          function Un(e, t) {
            e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, c(Vn, e));
          }
          function Vn(e) {
            var t = e.doc;
            if (!(t.highlightFrontier >= e.display.viewTo)) {
              var n = +new Date() + e.options.workTime,
                r = pe(e, t.highlightFrontier),
                i = [];
              t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                if (r.line >= e.display.viewFrom) {
                  var a = o.styles,
                    s = o.text.length > e.options.maxHighlightLength ? $(t.mode, r.state) : null,
                    l = de(e, o, r, !0);
                  s && (r.state = s), (o.styles = l.styles);
                  var c = o.styleClasses,
                    u = l.classes;
                  u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                  for (
                    var f =
                        !a || a.length != o.styles.length || (c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass)),
                      d = 0;
                    !f && d < a.length;
                    ++d
                  )
                    f = a[d] != o.styles[d];
                  f && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
                } else
                  o.text.length <= e.options.maxHighlightLength && me(e, o.text, r),
                    (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                    r.nextLine();
                if (+new Date() > n) return Un(e, e.options.workDelay), !0;
              }),
                (t.highlightFrontier = r.line),
                (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
                i.length &&
                  zn(e, function () {
                    for (var t = 0; t < i.length; t++) nn(e, i[t], "text");
                  });
            }
          }
          function $n(e, n) {
            var r = e.display,
              i = e.doc;
            if (n.editorIsHidden) return rn(e), !1;
            if (
              !n.force &&
              n.visible.from >= r.viewFrom &&
              n.visible.to <= r.viewTo &&
              (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
              r.renderedView == r.view &&
              0 == an(e)
            )
              return !1;
            Qn(e) && (rn(e), (n.dims = Xt(e)));
            var s = i.first + i.size,
              l = Math.max(n.visible.from - e.options.viewportMargin, i.first),
              c = Math.min(s, n.visible.to + e.options.viewportMargin);
            r.viewFrom < l && l - r.viewFrom < 20 && (l = Math.max(i.first, r.viewFrom)),
              r.viewTo > c && r.viewTo - c < 20 && (c = Math.min(s, r.viewTo)),
              na && ((l = De(e.doc, l)), (c = Fe(e.doc, c)));
            var u = l != r.viewFrom || c != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
            (function (e, t, n) {
              var r = e.display;
              0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
                ? ((r.view = Ze(e, t, n)), (r.viewFrom = t))
                : (r.viewFrom > t ? (r.view = Ze(e, t, r.viewFrom).concat(r.view)) : r.viewFrom < t && (r.view = r.view.slice(en(e, t))),
                  (r.viewFrom = t),
                  r.viewTo < n ? (r.view = r.view.concat(Ze(e, r.viewTo, n))) : r.viewTo > n && (r.view = r.view.slice(0, en(e, n)))),
                (r.viewTo = n);
            })(e, l, c),
              (r.viewOffset = Ke(X(e.doc, r.viewFrom))),
              (e.display.mover.style.top = r.viewOffset + "px");
            var f = an(e);
            if (!u && 0 == f && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo))
              return !1;
            var h = (function (e) {
              if (e.hasFocus()) return null;
              var t = a();
              if (!t || !o(e.display.lineDiv, t)) return null;
              var n = { activeElt: t };
              if (window.getSelection) {
                var r = window.getSelection();
                r.anchorNode &&
                  r.extend &&
                  o(e.display.lineDiv, r.anchorNode) &&
                  ((n.anchorNode = r.anchorNode),
                  (n.anchorOffset = r.anchorOffset),
                  (n.focusNode = r.focusNode),
                  (n.focusOffset = r.focusOffset));
              }
              return n;
            })(e);
            return (
              f > 4 && (r.lineDiv.style.display = "none"),
              (function (e, n, r) {
                function i(t) {
                  var n = t.nextSibling;
                  return so && yo && e.display.currentWheelTarget == t ? (t.style.display = "none") : t.parentNode.removeChild(t), n;
                }
                for (
                  var o = e.display, a = e.options.lineNumbers, s = o.lineDiv, l = s.firstChild, c = o.view, u = o.viewFrom, f = 0;
                  f < c.length;
                  f++
                ) {
                  var h = c[f];
                  if (h.hidden);
                  else if (h.node && h.node.parentNode == s) {
                    for (; l != h.node; ) l = i(l);
                    var p = a && null != n && n <= u && h.lineNumber;
                    h.changes && (d(h.changes, "gutter") > -1 && (p = !1), nt(e, h, u, r)),
                      p && (t(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(ne(e.options, u)))),
                      (l = h.node.nextSibling);
                  } else {
                    var m = ct(e, h, u, r);
                    s.insertBefore(m, l);
                  }
                  u += h.size;
                }
                for (; l; ) l = i(l);
              })(e, r.updateLineNumbers, n.dims),
              f > 4 && (r.lineDiv.style.display = ""),
              (r.renderedView = r.view),
              (function (e) {
                if (
                  e &&
                  e.activeElt &&
                  e.activeElt != a() &&
                  (e.activeElt.focus(),
                  !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                    e.anchorNode &&
                    o(document.body, e.anchorNode) &&
                    o(document.body, e.focusNode))
                ) {
                  var t = window.getSelection(),
                    n = document.createRange();
                  n.setEnd(e.anchorNode, e.anchorOffset),
                    n.collapse(!1),
                    t.removeAllRanges(),
                    t.addRange(n),
                    t.extend(e.focusNode, e.focusOffset);
                }
              })(h),
              t(r.cursorDiv),
              t(r.selectionDiv),
              (r.gutters.style.height = r.sizer.style.minHeight = 0),
              u && ((r.lastWrapHeight = n.wrapperHeight), (r.lastWrapWidth = n.wrapperWidth), Un(e, 400)),
              (r.updateLineNumbers = null),
              !0
            );
          }
          function qn(e, t) {
            for (var n = t.viewport, r = !0; ; r = !1) {
              if (r && e.options.lineWrapping && t.oldDisplayWidth != bt(e)) r && (t.visible = bn(e.display, e.doc, n));
              else if (
                (n && null != n.top && (n = { top: Math.min(e.doc.height + gt(e.display) - kt(e), n.top) }),
                (t.visible = bn(e.display, e.doc, n)),
                t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
              )
                break;
              if (!$n(e, t)) break;
              vn(e);
              var i = On(e);
              sn(e), Nn(e, i), Yn(e, i), (t.force = !1);
            }
            t.signal(e, "update", e),
              (e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo) ||
                (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
                (e.display.reportedViewFrom = e.display.viewFrom),
                (e.display.reportedViewTo = e.display.viewTo));
          }
          function Gn(e, t) {
            var n = new pa(e, t);
            if ($n(e, n)) {
              vn(e), qn(e, n);
              var r = On(e);
              sn(e), Nn(e, r), Yn(e, r), n.finish();
            }
          }
          function Xn(e) {
            var t = e.gutters.offsetWidth;
            e.sizer.style.marginLeft = t + "px";
          }
          function Yn(e, t) {
            (e.display.sizer.style.minHeight = t.docHeight + "px"),
              (e.display.heightForcer.style.top = t.docHeight + "px"),
              (e.display.gutters.style.height = t.docHeight + e.display.barHeight + yt(e) + "px");
          }
          function Jn(e) {
            var t = e.display,
              n = t.view;
            if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
              for (
                var r = Yt(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0;
                a < n.length;
                a++
              )
                if (!n[a].hidden) {
                  e.options.fixedGutter &&
                    (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                  var s = n[a].alignable;
                  if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o;
                }
              e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
            }
          }
          function Qn(e) {
            if (!e.options.lineNumbers) return !1;
            var t = e.doc,
              n = ne(e.options, t.first + t.size - 1),
              i = e.display;
            if (n.length != i.lineNumChars) {
              var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                a = o.firstChild.offsetWidth,
                s = o.offsetWidth - a;
              return (
                (i.lineGutter.style.width = ""),
                (i.lineNumInnerWidth = Math.max(a, i.lineGutter.offsetWidth - s) + 1),
                (i.lineNumWidth = i.lineNumInnerWidth + s),
                (i.lineNumChars = i.lineNumInnerWidth ? n.length : -1),
                (i.lineGutter.style.width = i.lineNumWidth + "px"),
                Xn(e.display),
                !0
              );
            }
            return !1;
          }
          function Zn(e, t) {
            for (var n = [], r = !1, i = 0; i < e.length; i++) {
              var o = e[i],
                a = null;
              if (("string" != typeof o && ((a = o.style), (o = o.className)), "CodeMirror-linenumbers" == o)) {
                if (!t) continue;
                r = !0;
              }
              n.push({ className: o, style: a });
            }
            return t && !r && n.push({ className: "CodeMirror-linenumbers", style: null }), n;
          }
          function er(e) {
            var n = e.gutters,
              i = e.gutterSpecs;
            t(n), (e.lineGutter = null);
            for (var o = 0; o < i.length; ++o) {
              var a = i[o],
                s = a.className,
                l = a.style,
                c = n.appendChild(r("div", null, "CodeMirror-gutter " + s));
              l && (c.style.cssText = l),
                "CodeMirror-linenumbers" == s && ((e.lineGutter = c), (c.style.width = (e.lineNumWidth || 1) + "px"));
            }
            (n.style.display = i.length ? "" : "none"), Xn(e);
          }
          function tr(e) {
            er(e.display), tn(e), Jn(e);
          }
          function nr(e, t, n, o) {
            var a = this;
            (this.input = n),
              (a.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler")),
              a.scrollbarFiller.setAttribute("cm-not-content", "true"),
              (a.gutterFiller = r("div", null, "CodeMirror-gutter-filler")),
              a.gutterFiller.setAttribute("cm-not-content", "true"),
              (a.lineDiv = i("div", null, "CodeMirror-code")),
              (a.selectionDiv = r("div", null, null, "position: relative; z-index: 1")),
              (a.cursorDiv = r("div", null, "CodeMirror-cursors")),
              (a.measure = r("div", null, "CodeMirror-measure")),
              (a.lineMeasure = r("div", null, "CodeMirror-measure")),
              (a.lineSpace = i(
                "div",
                [a.measure, a.lineMeasure, a.selectionDiv, a.cursorDiv, a.lineDiv],
                null,
                "position: relative; outline: none"
              ));
            var s = i("div", [a.lineSpace], "CodeMirror-lines");
            (a.mover = r("div", [s], null, "position: relative")),
              (a.sizer = r("div", [a.mover], "CodeMirror-sizer")),
              (a.sizerWidth = null),
              (a.heightForcer = r("div", null, null, "position: absolute; height: " + Eo + "px; width: 1px;")),
              (a.gutters = r("div", null, "CodeMirror-gutters")),
              (a.lineGutter = null),
              (a.scroller = r("div", [a.sizer, a.heightForcer, a.gutters], "CodeMirror-scroll")),
              a.scroller.setAttribute("tabIndex", "-1"),
              (a.wrapper = r("div", [a.scrollbarFiller, a.gutterFiller, a.scroller], "CodeMirror")),
              oo && ao < 8 && ((a.gutters.style.zIndex = -1), (a.scroller.style.paddingRight = 0)),
              so || (to && vo) || (a.scroller.draggable = !0),
              e && (e.appendChild ? e.appendChild(a.wrapper) : e(a.wrapper)),
              (a.viewFrom = a.viewTo = t.first),
              (a.reportedViewFrom = a.reportedViewTo = t.first),
              (a.view = []),
              (a.renderedView = null),
              (a.externalMeasured = null),
              (a.viewOffset = 0),
              (a.lastWrapHeight = a.lastWrapWidth = 0),
              (a.updateLineNumbers = null),
              (a.nativeBarWidth = a.barHeight = a.barWidth = 0),
              (a.scrollbarsClipped = !1),
              (a.lineNumWidth = a.lineNumInnerWidth = a.lineNumChars = null),
              (a.alignWidgets = !1),
              (a.cachedCharWidth = a.cachedTextHeight = a.cachedPaddingH = null),
              (a.maxLine = null),
              (a.maxLineLength = 0),
              (a.maxLineChanged = !1),
              (a.wheelDX = a.wheelDY = a.wheelStartX = a.wheelStartY = null),
              (a.shift = !1),
              (a.selForContextMenu = null),
              (a.activeTouch = null),
              (a.gutterSpecs = Zn(o.gutters, o.lineNumbers)),
              er(a),
              n.init(a);
          }
          function rr(e) {
            var t = e.wheelDeltaX,
              n = e.wheelDeltaY;
            return (
              null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
              null == n && e.detail && e.axis == e.VERTICAL_AXIS ? (n = e.detail) : null == n && (n = e.wheelDelta),
              { x: t, y: n }
            );
          }
          function ir(e) {
            var t = rr(e);
            return (t.x *= ga), (t.y *= ga), t;
          }
          function or(e, t) {
            var n = rr(t),
              r = n.x,
              i = n.y,
              o = e.display,
              a = o.scroller,
              s = a.scrollWidth > a.clientWidth,
              l = a.scrollHeight > a.clientHeight;
            if ((r && s) || (i && l)) {
              if (i && yo && so)
                e: for (var c = t.target, u = o.view; c != a; c = c.parentNode)
                  for (var f = 0; f < u.length; f++)
                    if (u[f].node == c) {
                      e.display.currentWheelTarget = c;
                      break e;
                    }
              if (r && !to && !uo && null != ga)
                return (
                  i && l && Ln(e, Math.max(0, a.scrollTop + i * ga)),
                  An(e, Math.max(0, a.scrollLeft + r * ga)),
                  (!i || (i && l)) && R(t),
                  void (o.wheelStartX = null)
                );
              if (i && null != ga) {
                var d = i * ga,
                  h = e.doc.scrollTop,
                  p = h + o.wrapper.clientHeight;
                d < 0 ? (h = Math.max(0, h + d - 50)) : (p = Math.min(e.doc.height, p + d + 50)), Gn(e, { top: h, bottom: p });
              }
              ma < 20 &&
                (null == o.wheelStartX
                  ? ((o.wheelStartX = a.scrollLeft),
                    (o.wheelStartY = a.scrollTop),
                    (o.wheelDX = r),
                    (o.wheelDY = i),
                    setTimeout(function () {
                      if (null != o.wheelStartX) {
                        var e = a.scrollLeft - o.wheelStartX,
                          t = a.scrollTop - o.wheelStartY,
                          n = (t && o.wheelDY && t / o.wheelDY) || (e && o.wheelDX && e / o.wheelDX);
                        (o.wheelStartX = o.wheelStartY = null), n && ((ga = (ga * ma + n) / (ma + 1)), ++ma);
                      }
                    }, 200))
                  : ((o.wheelDX += r), (o.wheelDY += i)));
            }
          }
          function ar(e, t, n) {
            var r = e && e.options.selectionsMayTouch,
              i = t[n];
            t.sort(function (e, t) {
              return ie(e.from(), t.from());
            }),
              (n = d(t, i));
            for (var o = 1; o < t.length; o++) {
              var a = t[o],
                s = t[o - 1],
                l = ie(s.to(), a.from());
              if (r && !a.empty() ? l > 0 : l >= 0) {
                var c = le(s.from(), a.from()),
                  u = se(s.to(), a.to()),
                  f = s.empty() ? a.from() == a.head : s.from() == s.head;
                o <= n && --n, t.splice(--o, 2, new ya(f ? u : c, f ? c : u));
              }
            }
            return new va(t, n);
          }
          function sr(e, t) {
            return new va([new ya(e, t || e)], 0);
          }
          function lr(e) {
            return e.text ? re(e.from.line + e.text.length - 1, m(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
          }
          function cr(e, t) {
            if (ie(e, t.from) < 0) return e;
            if (ie(e, t.to) <= 0) return lr(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
              r = e.ch;
            return e.line == t.to.line && (r += lr(t).ch - t.to.ch), re(n, r);
          }
          function ur(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
              var i = e.sel.ranges[r];
              n.push(new ya(cr(i.anchor, t), cr(i.head, t)));
            }
            return ar(e.cm, n, e.sel.primIndex);
          }
          function fr(e, t, n) {
            return e.line == t.line ? re(n.line, e.ch - t.ch + n.ch) : re(n.line + (e.line - t.line), e.ch);
          }
          function dr(e) {
            (e.doc.mode = U(e.options, e.doc.modeOption)), hr(e);
          }
          function hr(e) {
            e.doc.iter(function (e) {
              e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
            }),
              (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
              Un(e, 100),
              e.state.modeGen++,
              e.curOp && tn(e);
          }
          function pr(e, t) {
            return 0 == t.from.ch && 0 == t.to.ch && "" == m(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
          }
          function mr(e, t, n, r) {
            function i(e) {
              return n ? n[e] : null;
            }
            function o(e, n, i) {
              (function (e, t, n, r) {
                (e.text = t),
                  e.stateAfter && (e.stateAfter = null),
                  e.styles && (e.styles = null),
                  null != e.order && (e.order = null),
                  Le(e),
                  Te(e, n);
                var i = r ? r(e) : 1;
                i != e.height && Q(e, i);
              })(e, n, i, r),
                et(e, "change", e, t);
            }
            function a(e, t) {
              for (var n = [], o = e; o < t; ++o) n.push(new ra(c[o], i(o), r));
              return n;
            }
            var s = t.from,
              l = t.to,
              c = t.text,
              u = X(e, s.line),
              f = X(e, l.line),
              d = m(c),
              h = i(c.length - 1),
              p = l.line - s.line;
            if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
            else if (pr(e, t)) {
              var g = a(0, c.length - 1);
              o(f, f.text, h), p && e.remove(s.line, p), g.length && e.insert(s.line, g);
            } else if (u == f)
              if (1 == c.length) o(u, u.text.slice(0, s.ch) + d + u.text.slice(l.ch), h);
              else {
                var v = a(1, c.length - 1);
                v.push(new ra(d + u.text.slice(l.ch), h, r)), o(u, u.text.slice(0, s.ch) + c[0], i(0)), e.insert(s.line + 1, v);
              }
            else if (1 == c.length) o(u, u.text.slice(0, s.ch) + c[0] + f.text.slice(l.ch), i(0)), e.remove(s.line + 1, p);
            else {
              o(u, u.text.slice(0, s.ch) + c[0], i(0)), o(f, d + f.text.slice(l.ch), h);
              var y = a(1, c.length - 1);
              p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, y);
            }
            et(e, "change", e, t);
          }
          function gr(e, t, n) {
            !(function e(r, i, o) {
              if (r.linked)
                for (var a = 0; a < r.linked.length; ++a) {
                  var s = r.linked[a];
                  if (s.doc != i) {
                    var l = o && s.sharedHist;
                    (n && !l) || (t(s.doc, l), e(s.doc, r, l));
                  }
                }
            })(e, null, !0);
          }
          function vr(e, t) {
            if (t.cm) throw new Error("This document is already in use.");
            (e.doc = t), (t.cm = e), Qt(e), dr(e), yr(e), e.options.lineWrapping || _e(e), (e.options.mode = t.modeOption), tn(e);
          }
          function yr(e) {
            ("rtl" == e.doc.direction ? s : Mo)(e.display.lineDiv, "CodeMirror-rtl");
          }
          function br(e) {
            (this.done = []),
              (this.undone = []),
              (this.undoDepth = 1 / 0),
              (this.lastModTime = this.lastSelTime = 0),
              (this.lastOp = this.lastSelOp = null),
              (this.lastOrigin = this.lastSelOrigin = null),
              (this.generation = this.maxGeneration = e || 1);
          }
          function kr(e, t) {
            var n = {
              from: ae(t.from),
              to: lr(t),
              text: Y(e, t.from, t.to)
            };
            return (
              Sr(e, n, t.from.line, t.to.line + 1),
              gr(
                e,
                function (e) {
                  return Sr(e, n, t.from.line, t.to.line + 1);
                },
                !0
              ),
              n
            );
          }
          function wr(e) {
            for (; e.length && m(e).ranges; ) e.pop();
          }
          function Cr(e, t, n, r) {
            var i = e.history;
            i.undone.length = 0;
            var o,
              a,
              s = +new Date();
            if (
              (i.lastOp == r ||
                (i.lastOrigin == t.origin &&
                  t.origin &&
                  (("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                    "*" == t.origin.charAt(0)))) &&
              (o = (function (e, t) {
                return t
                  ? (wr(e.done), m(e.done))
                  : e.done.length && !m(e.done).ranges
                  ? m(e.done)
                  : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                  ? (e.done.pop(), m(e.done))
                  : void 0;
              })(i, i.lastOp == r))
            )
              (a = m(o.changes)), 0 == ie(t.from, t.to) && 0 == ie(t.from, a.to) ? (a.to = lr(t)) : o.changes.push(kr(e, t));
            else {
              var l = m(i.done);
              for (
                (l && l.ranges) || xr(e.sel, i.done), o = { changes: [kr(e, t)], generation: i.generation }, i.done.push(o);
                i.done.length > i.undoDepth;

              )
                i.done.shift(), i.done[0].ranges || i.done.shift();
            }
            i.done.push(n),
              (i.generation = ++i.maxGeneration),
              (i.lastModTime = i.lastSelTime = s),
              (i.lastOp = i.lastSelOp = r),
              (i.lastOrigin = i.lastSelOrigin = t.origin),
              a || O(e, "historyAdded");
          }
          function xr(e, t) {
            var n = m(t);
            (n && n.ranges && n.equals(e)) || t.push(e);
          }
          function Sr(e, t, n, r) {
            var i = t["spans_" + e.id],
              o = 0;
            e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
              n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
            });
          }
          function Mr(e) {
            if (!e) return null;
            for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
            return t ? (t.length ? t : null) : e;
          }
          function Lr(e, t) {
            var n = (function (e, t) {
                var n = t["spans_" + e.id];
                if (!n) return null;
                for (var r = [], i = 0; i < t.text.length; ++i) r.push(Mr(n[i]));
                return r;
              })(e, t),
              r = Se(e, t);
            if (!n) return r;
            if (!r) return n;
            for (var i = 0; i < n.length; ++i) {
              var o = n[i],
                a = r[i];
              if (o && a)
                e: for (var s = 0; s < a.length; ++s) {
                  for (var l = a[s], c = 0; c < o.length; ++c) if (o[c].marker == l.marker) continue e;
                  o.push(l);
                }
              else a && (n[i] = a);
            }
            return n;
          }
          function Tr(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
              var o = e[i];
              if (o.ranges) r.push(n ? va.prototype.deepCopy.call(o) : o);
              else {
                var a = o.changes,
                  s = [];
                r.push({ changes: s });
                for (var l = 0; l < a.length; ++l) {
                  var c = a[l],
                    u = void 0;
                  if ((s.push({ from: c.from, to: c.to, text: c.text }), t))
                    for (var f in c) (u = f.match(/^spans_(\d+)$/)) && d(t, Number(u[1])) > -1 && ((m(s)[f] = c[f]), delete c[f]);
                }
              }
            }
            return r;
          }
          function Ar(e, t, n, r) {
            if (r) {
              var i = e.anchor;
              if (n) {
                var o = ie(t, i) < 0;
                o != ie(n, i) < 0 ? ((i = t), (t = n)) : o != ie(t, n) < 0 && (t = n);
              }
              return new ya(i, t);
            }
            return new ya(n || t, t);
          }
          function Or(e, t, n, r, i) {
            null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Rr(e, new va([Ar(e.sel.primary(), t, n, i)], 0), r);
          }
          function Nr(e, t, n) {
            for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
              r[o] = Ar(e.sel.ranges[o], t[o], null, i);
            Rr(e, ar(e.cm, r, e.sel.primIndex), n);
          }
          function Er(e, t, n, r) {
            var i = e.sel.ranges.slice(0);
            (i[t] = n), Rr(e, ar(e.cm, i, e.sel.primIndex), r);
          }
          function Pr(e, t, n, r) {
            Rr(e, sr(t, n), r);
          }
          function Ir(e, t, n) {
            var r = e.history.done,
              i = m(r);
            i && i.ranges ? ((r[r.length - 1] = t), Br(e, t, n)) : Rr(e, t, n);
          }
          function Rr(e, t, n) {
            Br(e, t, n),
              (function (e, t, n, r) {
                var i = e.history,
                  o = r && r.origin;
                n == i.lastSelOp ||
                (o &&
                  i.lastSelOrigin == o &&
                  ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
                    (function (e, t, n, r) {
                      var i = t.charAt(0);
                      return (
                        "*" == i ||
                        ("+" == i &&
                          n.ranges.length == r.ranges.length &&
                          n.somethingSelected() == r.somethingSelected() &&
                          new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
                      );
                    })(e, o, m(i.done), t)))
                  ? (i.done[i.done.length - 1] = t)
                  : xr(t, i.done),
                  (i.lastSelTime = +new Date()),
                  (i.lastSelOrigin = o),
                  (i.lastSelOp = n),
                  r && !1 !== r.clearRedo && wr(i.undone);
              })(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
          }
          function Br(e, t, n) {
            (P(e, "beforeSelectionChange") || (e.cm && P(e.cm, "beforeSelectionChange"))) &&
              (t = (function (e, t, n) {
                var r = {
                  ranges: t.ranges,
                  update: function (t) {
                    this.ranges = [];
                    for (var n = 0; n < t.length; n++) this.ranges[n] = new ya(ue(e, t[n].anchor), ue(e, t[n].head));
                  },
                  origin: n && n.origin
                };
                return (
                  O(e, "beforeSelectionChange", e, r),
                  e.cm && O(e.cm, "beforeSelectionChange", e.cm, r),
                  r.ranges != t.ranges ? ar(e.cm, r.ranges, r.ranges.length - 1) : t
                );
              })(e, t, n));
            var r = (n && n.bias) || (ie(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
            Hr(e, Fr(e, t, r, !0)), (n && !1 === n.scroll) || !e.cm || Cn(e.cm);
          }
          function Hr(e, t) {
            t.equals(e.sel) ||
              ((e.sel = t),
              e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), E(e.cm)),
              et(e, "cursorActivity", e));
          }
          function Dr(e) {
            Hr(e, Fr(e, e.sel, null, !1));
          }
          function Fr(e, t, n, r) {
            for (var i, o = 0; o < t.ranges.length; o++) {
              var a = t.ranges[o],
                s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                l = zr(e, a.anchor, s && s.anchor, n, r),
                c = zr(e, a.head, s && s.head, n, r);
              (i || l != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new ya(l, c)));
            }
            return i ? ar(e.cm, i, t.primIndex) : t;
          }
          function Wr(e, t, n, r, i) {
            var o = X(e, t.line);
            if (o.markedSpans)
              for (var a = 0; a < o.markedSpans.length; ++a) {
                var s = o.markedSpans[a],
                  l = s.marker,
                  c = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
                  u = "selectRight" in l ? !l.selectRight : l.inclusiveRight;
                if ((null == s.from || (c ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (u ? s.to >= t.ch : s.to > t.ch))) {
                  if (i && (O(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                    if (o.markedSpans) {
                      --a;
                      continue;
                    }
                    break;
                  }
                  if (!l.atomic) continue;
                  if (n) {
                    var f = l.find(r < 0 ? 1 : -1),
                      d = void 0;
                    if (
                      ((r < 0 ? u : c) && (f = Kr(e, f, -r, f && f.line == t.line ? o : null)),
                      f && f.line == t.line && (d = ie(f, n)) && (r < 0 ? d < 0 : d > 0))
                    )
                      return Wr(e, f, t, r, i);
                  }
                  var h = l.find(r < 0 ? -1 : 1);
                  return (r < 0 ? c : u) && (h = Kr(e, h, r, h.line == t.line ? o : null)), h ? Wr(e, h, t, r, i) : null;
                }
              }
            return t;
          }
          function zr(e, t, n, r, i) {
            var o = r || 1;
            return (
              Wr(e, t, n, o, i) ||
              (!i && Wr(e, t, n, o, !0)) ||
              Wr(e, t, n, -o, i) ||
              (!i && Wr(e, t, n, -o, !0)) ||
              ((e.cantEdit = !0), re(e.first, 0))
            );
          }
          function Kr(e, t, n, r) {
            return n < 0 && 0 == t.ch
              ? t.line > e.first
                ? ue(e, re(t.line - 1))
                : null
              : n > 0 && t.ch == (r || X(e, t.line)).text.length
              ? t.line < e.first + e.size - 1
                ? re(t.line + 1, 0)
                : null
              : new re(t.line, t.ch + n);
          }
          function jr(e) {
            e.setSelection(re(e.firstLine(), 0), re(e.lastLine()), Io);
          }
          function _r(e, t, n) {
            var r = {
              canceled: !1,
              from: t.from,
              to: t.to,
              text: t.text,
              origin: t.origin,
              cancel: function () {
                return (r.canceled = !0);
              }
            };
            return (
              n &&
                (r.update = function (t, n, i, o) {
                  t && (r.from = ue(e, t)), n && (r.to = ue(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
                }),
              O(e, "beforeChange", e, r),
              e.cm && O(e.cm, "beforeChange", e.cm, r),
              r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin }
            );
          }
          function Ur(e, t, n) {
            if (e.cm) {
              if (!e.cm.curOp) return Kn(e.cm, Ur)(e, t, n);
              if (e.cm.state.suppressEdits) return;
            }
            if (!(P(e, "beforeChange") || (e.cm && P(e.cm, "beforeChange"))) || (t = _r(e, t, !0))) {
              var r =
                ta &&
                !n &&
                (function (e, t, n) {
                  var r = null;
                  if (
                    (e.iter(t.line, n.line + 1, function (e) {
                      if (e.markedSpans)
                        for (var t = 0; t < e.markedSpans.length; ++t) {
                          var n = e.markedSpans[t].marker;
                          !n.readOnly || (r && -1 != d(r, n)) || (r || (r = [])).push(n);
                        }
                    }),
                    !r)
                  )
                    return null;
                  for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                    for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                      var c = i[l];
                      if (!(ie(c.to, s.from) < 0 || ie(c.from, s.to) > 0)) {
                        var u = [l, 1],
                          f = ie(c.from, s.from),
                          h = ie(c.to, s.to);
                        (f < 0 || (!a.inclusiveLeft && !f)) && u.push({ from: c.from, to: s.from }),
                          (h > 0 || (!a.inclusiveRight && !h)) && u.push({ from: s.to, to: c.to }),
                          i.splice.apply(i, u),
                          (l += u.length - 3);
                      }
                    }
                  return i;
                })(e, t.from, t.to);
              if (r)
                for (var i = r.length - 1; i >= 0; --i) Vr(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text, origin: t.origin });
              else Vr(e, t);
            }
          }
          function Vr(e, t) {
            if (1 != t.text.length || "" != t.text[0] || 0 != ie(t.from, t.to)) {
              var n = ur(e, t);
              Cr(e, t, n, e.cm ? e.cm.curOp.id : NaN), Gr(e, t, n, Se(e, t));
              var r = [];
              gr(e, function (e, n) {
                n || -1 != d(r, e.history) || (Qr(e.history, t), r.push(e.history)), Gr(e, t, null, Se(e, t));
              });
            }
          }
          function $r(e, t, n) {
            var r = e.cm && e.cm.state.suppressEdits;
            if (!r || n) {
              for (
                var i, o = e.history, a = e.sel, s = "undo" == t ? o.done : o.undone, l = "undo" == t ? o.undone : o.done, c = 0;
                c < s.length && ((i = s[c]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
                c++
              );
              if (c != s.length) {
                for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                  if (!(i = s.pop()).ranges) {
                    if (r) return void s.push(i);
                    break;
                  }
                  if ((xr(i, l), n && !i.equals(e.sel))) return void Rr(e, i, { clearRedo: !1 });
                  a = i;
                }
                var u = [];
                xr(a, l), l.push({ changes: u, generation: o.generation }), (o.generation = i.generation || ++o.maxGeneration);
                for (
                  var f = P(e, "beforeChange") || (e.cm && P(e.cm, "beforeChange")),
                    h = function (n) {
                      var r = i.changes[n];
                      if (((r.origin = t), f && !_r(e, r, !1))) return (s.length = 0), {};
                      u.push(kr(e, r));
                      var o = n ? ur(e, r) : m(s);
                      Gr(e, r, o, Lr(e, r)), !n && e.cm && e.cm.scrollIntoView({ from: r.from, to: lr(r) });
                      var a = [];
                      gr(e, function (e, t) {
                        t || -1 != d(a, e.history) || (Qr(e.history, r), a.push(e.history)), Gr(e, r, null, Lr(e, r));
                      });
                    },
                    p = i.changes.length - 1;
                  p >= 0;
                  --p
                ) {
                  var g = h(p);
                  if (g) return g.v;
                }
              }
            }
          }
          function qr(e, t) {
            if (
              0 != t &&
              ((e.first += t),
              (e.sel = new va(
                g(e.sel.ranges, function (e) {
                  return new ya(re(e.anchor.line + t, e.anchor.ch), re(e.head.line + t, e.head.ch));
                }),
                e.sel.primIndex
              )),
              e.cm)
            ) {
              tn(e.cm, e.first, e.first - t, t);
              for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) nn(e.cm, r, "gutter");
            }
          }
          function Gr(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return Kn(e.cm, Gr)(e, t, n, r);
            if (t.to.line < e.first) qr(e, t.text.length - 1 - (t.to.line - t.from.line));
            else if (!(t.from.line > e.lastLine())) {
              if (t.from.line < e.first) {
                var i = t.text.length - 1 - (e.first - t.from.line);
                qr(e, i),
                  (t = {
                    from: re(e.first, 0),
                    to: re(t.to.line + i, t.to.ch),
                    text: [m(t.text)],
                    origin: t.origin
                  });
              }
              var o = e.lastLine();
              t.to.line > o && (t = { from: t.from, to: re(o, X(e, o).text.length), text: [t.text[0]], origin: t.origin }),
                (t.removed = Y(e, t.from, t.to)),
                n || (n = ur(e, t)),
                e.cm
                  ? (function (e, t, n) {
                      var r = e.doc,
                        i = e.display,
                        o = t.from,
                        a = t.to,
                        s = !1,
                        l = o.line;
                      e.options.lineWrapping ||
                        ((l = Z(He(X(r, o.line)))),
                        r.iter(l, a.line + 1, function (e) {
                          if (e == i.maxLine) return (s = !0), !0;
                        })),
                        r.sel.contains(t.from, t.to) > -1 && E(e),
                        mr(r, t, n, Jt(e)),
                        e.options.lineWrapping ||
                          (r.iter(l, o.line + t.text.length, function (e) {
                            var t = je(e);
                            t > i.maxLineLength && ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (s = !1));
                          }),
                          s && (e.curOp.updateMaxLine = !0)),
                        (function (e, t) {
                          if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                            for (var n = e.first, r = t - 1; r > n; r--) {
                              var i = X(e, r).stateAfter;
                              if (i && (!(i instanceof Qo) || r + i.lookAhead < t)) {
                                n = r + 1;
                                break;
                              }
                            }
                            e.highlightFrontier = Math.min(e.highlightFrontier, n);
                          }
                        })(r, o.line),
                        Un(e, 400);
                      var c = t.text.length - (a.line - o.line) - 1;
                      t.full
                        ? tn(e)
                        : o.line != a.line || 1 != t.text.length || pr(e.doc, t)
                        ? tn(e, o.line, a.line + 1, c)
                        : nn(e, o.line, "text");
                      var u = P(e, "changes"),
                        f = P(e, "change");
                      if (f || u) {
                        var d = { from: o, to: a, text: t.text, removed: t.removed, origin: t.origin };
                        f && et(e, "change", e, d), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d);
                      }
                      e.display.selForContextMenu = null;
                    })(e.cm, t, r)
                  : mr(e, t, r),
                Br(e, n, Io),
                e.cantEdit && zr(e, re(e.firstLine(), 0)) && (e.cantEdit = !1);
            }
          }
          function Xr(e, t, n, r, i) {
            var o;
            r || (r = n),
              ie(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
              "string" == typeof t && (t = e.splitLines(t)),
              Ur(e, { from: n, to: r, text: t, origin: i });
          }
          function Yr(e, t, n, r) {
            n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
          }
          function Jr(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                a = !0;
              if (o.ranges) {
                o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                for (var s = 0; s < o.ranges.length; s++) Yr(o.ranges[s].anchor, t, n, r), Yr(o.ranges[s].head, t, n, r);
              } else {
                for (var l = 0; l < o.changes.length; ++l) {
                  var c = o.changes[l];
                  if (n < c.from.line) (c.from = re(c.from.line + r, c.from.ch)), (c.to = re(c.to.line + r, c.to.ch));
                  else if (t <= c.to.line) {
                    a = !1;
                    break;
                  }
                }
                a || (e.splice(0, i + 1), (i = 0));
              }
            }
          }
          function Qr(e, t) {
            var n = t.from.line,
              r = t.to.line,
              i = t.text.length - (r - n) - 1;
            Jr(e.done, n, r, i), Jr(e.undone, n, r, i);
          }
          function Zr(e, t, n, r) {
            var i = t,
              o = t;
            return "number" == typeof t ? (o = X(e, ce(e, t))) : (i = Z(t)), null == i ? null : (r(o, i) && e.cm && nn(e.cm, i, n), o);
          }
          function ei(e) {
            (this.lines = e), (this.parent = null);
            for (var t = 0, n = 0; n < e.length; ++n) (e[n].parent = this), (t += e[n].height);
            this.height = t;
          }
          function ti(e) {
            this.children = e;
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
              var i = e[r];
              (t += i.chunkSize()), (n += i.height), (i.parent = this);
            }
            (this.size = t), (this.height = n), (this.parent = null);
          }
          function ni(e, t, n) {
            Ke(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && wn(e, n);
          }
          function ri(e, t, n, r, o) {
            if (r && r.shared)
              return (function (e, t, n, r, i) {
                (r = u(r)).shared = !1;
                var o = [ri(e, t, n, r, i)],
                  a = o[0],
                  s = r.widgetNode;
                return (
                  gr(e, function (e) {
                    s && (r.widgetNode = s.cloneNode(!0)), o.push(ri(e, ue(e, t), ue(e, n), r, i));
                    for (var l = 0; l < e.linked.length; ++l) if (e.linked[l].isParent) return;
                    a = m(o);
                  }),
                  new Ca(o, a)
                );
              })(e, t, n, r, o);
            if (e.cm && !e.cm.curOp) return Kn(e.cm, ri)(e, t, n, r, o);
            var a = new wa(e, o),
              s = ie(t, n);
            if ((r && u(r, a, !1), s > 0 || (0 == s && !1 !== a.clearWhenEmpty))) return a;
            if (
              (a.replacedWith &&
                ((a.collapsed = !0),
                (a.widgetNode = i("span", [a.replacedWith], "CodeMirror-widget")),
                r.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"),
                r.insertLeft && (a.widgetNode.insertLeft = !0)),
              a.collapsed)
            ) {
              if (Be(e, t.line, t, n, a) || (t.line != n.line && Be(e, n.line, t, n, a)))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
              na = !0;
            }
            a.addToHistory && Cr(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
            var l,
              c = t.line,
              f = e.cm;
            if (
              (e.iter(c, n.line + 1, function (e) {
                f && a.collapsed && !f.options.lineWrapping && He(e) == f.display.maxLine && (l = !0),
                  a.collapsed && c != t.line && Q(e, 0),
                  (function (e, t) {
                    (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), t.marker.attachLine(e);
                  })(e, new we(a, c == t.line ? t.ch : null, c == n.line ? n.ch : null)),
                  ++c;
              }),
              a.collapsed &&
                e.iter(t.line, n.line + 1, function (t) {
                  We(e, t) && Q(t, 0);
                }),
              a.clearOnEnter &&
                jo(a, "beforeCursorEnter", function () {
                  return a.clear();
                }),
              a.readOnly && ((ta = !0), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
              a.collapsed && ((a.id = ++ka), (a.atomic = !0)),
              f)
            ) {
              if ((l && (f.curOp.updateMaxLine = !0), a.collapsed)) tn(f, t.line, n.line + 1);
              else if (a.className || a.startStyle || a.endStyle || a.css || a.attributes || a.title)
                for (var d = t.line; d <= n.line; d++) nn(f, d, "text");
              a.atomic && Dr(f.doc), et(f, "markerAdded", f, a);
            }
            return a;
          }
          function ii(e) {
            return e.findMarks(re(e.first, 0), e.clipPos(re(e.lastLine())), function (e) {
              return e.parent;
            });
          }
          function oi(e) {
            for (
              var t = function (t) {
                  var n = e[t],
                    r = [n.primary.doc];
                  gr(n.primary.doc, function (e) {
                    return r.push(e);
                  });
                  for (var i = 0; i < n.markers.length; i++) {
                    var o = n.markers[i];
                    -1 == d(r, o.doc) && ((o.parent = null), n.markers.splice(i--, 1));
                  }
                },
                n = 0;
              n < e.length;
              n++
            )
              t(n);
          }
          function ai(e) {
            var t = this;
            if ((si(t), !N(t, e) && !pt(t.display, e))) {
              R(e), oo && (Ma = +new Date());
              var n = Zt(t, e, !0),
                r = e.dataTransfer.files;
              if (n && !t.isReadOnly())
                if (r && r.length && window.FileReader && window.File)
                  for (
                    var i = r.length,
                      o = Array(i),
                      a = 0,
                      s = function () {
                        ++a == i &&
                          Kn(t, function () {
                            var e = {
                              from: (n = ue(t.doc, n)),
                              to: n,
                              text: t.doc.splitLines(
                                o
                                  .filter(function (e) {
                                    return null != e;
                                  })
                                  .join(t.doc.lineSeparator())
                              ),
                              origin: "paste"
                            };
                            Ur(t.doc, e), Ir(t.doc, sr(ue(t.doc, n), ue(t.doc, lr(e))));
                          })();
                      },
                      l = function (e, n) {
                        if (t.options.allowDropFileTypes && -1 == d(t.options.allowDropFileTypes, e.type)) s();
                        else {
                          var r = new FileReader();
                          (r.onerror = function () {
                            return s();
                          }),
                            (r.onload = function () {
                              var e = r.result;
                              /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e), s();
                            }),
                            r.readAsText(e);
                        }
                      },
                      c = 0;
                    c < r.length;
                    c++
                  )
                    l(r[c], c);
                else {
                  if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                    return (
                      t.state.draggingText(e),
                      void setTimeout(function () {
                        return t.display.input.focus();
                      }, 20)
                    );
                  try {
                    var u = e.dataTransfer.getData("Text");
                    if (u) {
                      var f;
                      if ((t.state.draggingText && !t.state.draggingText.copy && (f = t.listSelections()), Br(t.doc, sr(n, n)), f))
                        for (var h = 0; h < f.length; ++h) Xr(t.doc, "", f[h].anchor, f[h].head, "drag");
                      t.replaceSelection(u, "around", "paste"), t.display.input.focus();
                    }
                  } catch (e) {}
                }
            }
          }
          function si(e) {
            e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
          }
          function li(e) {
            if (document.getElementsByClassName) {
              for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
                var i = t[r].CodeMirror;
                i && n.push(i);
              }
              n.length &&
                n[0].operation(function () {
                  for (var t = 0; t < n.length; t++) e(n[t]);
                });
            }
          }
          function ci(e) {
            var t = e.display;
            (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize();
          }
          function ui(e) {
            var t,
              n,
              r,
              i,
              o = e.split(/-(?!$)/);
            e = o[o.length - 1];
            for (var a = 0; a < o.length - 1; a++) {
              var s = o[a];
              if (/^(cmd|meta|m)$/i.test(s)) i = !0;
              else if (/^a(lt)?$/i.test(s)) t = !0;
              else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
              else {
                if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                r = !0;
              }
            }
            return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
          }
          function fi(e) {
            var t = {};
            for (var n in e)
              if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                if ("..." == r) {
                  delete e[n];
                  continue;
                }
                for (var i = g(n.split(" "), ui), o = 0; o < i.length; o++) {
                  var a = void 0,
                    s = void 0;
                  o == i.length - 1 ? ((s = i.join(" ")), (a = r)) : ((s = i.slice(0, o + 1).join(" ")), (a = "..."));
                  var l = t[s];
                  if (l) {
                    if (l != a) throw new Error("Inconsistent bindings for " + s);
                  } else t[s] = a;
                }
                delete e[n];
              }
            for (var c in t) e[c] = t[c];
            return e;
          }
          function di(e, t, n, r) {
            var i = (t = gi(t)).call ? t.call(e, r) : t[e];
            if (!1 === i) return "nothing";
            if ("..." === i) return "multi";
            if (null != i && n(i)) return "handled";
            if (t.fallthrough) {
              if ("[object Array]" != {}.toString.call(t.fallthrough)) return di(e, t.fallthrough, n, r);
              for (var o = 0; o < t.fallthrough.length; o++) {
                var a = di(e, t.fallthrough[o], n, r);
                if (a) return a;
              }
            }
          }
          function hi(e) {
            var t = "string" == typeof e ? e : Ta[e.keyCode];
            return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
          }
          function pi(e, t, n) {
            var r = e;
            return (
              t.altKey && "Alt" != r && (e = "Alt-" + e),
              (xo ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
              (xo ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e),
              !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e),
              e
            );
          }
          function mi(e, t) {
            if (uo && 34 == e.keyCode && e.char) return !1;
            var n = Ta[e.keyCode];
            return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), pi(n, e, t));
          }
          function gi(e) {
            return "string" == typeof e ? Ea[e] : e;
          }
          function vi(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
              for (var o = t(n[i]); r.length && ie(o.from, m(r).to) <= 0; ) {
                var a = r.pop();
                if (ie(a.from, o.from) < 0) {
                  o.from = a.from;
                  break;
                }
              }
              r.push(o);
            }
            zn(e, function () {
              for (var t = r.length - 1; t >= 0; t--) Xr(e.doc, "", r[t].from, r[t].to, "+delete");
              Cn(e);
            });
          }
          function yi(e, t, n) {
            var r = x(e.text, t + n, n);
            return r < 0 || r > e.text.length ? null : r;
          }
          function bi(e, t, n) {
            var r = yi(e, t.ch, n);
            return null == r ? null : new re(t.line, r, n < 0 ? "after" : "before");
          }
          function ki(e, t, n, r, i) {
            if (e) {
              "rtl" == t.doc.direction && (i = -i);
              var o = L(n, t.doc.direction);
              if (o) {
                var a,
                  s = i < 0 ? m(o) : o[0],
                  l = i < 0 == (1 == s.level) ? "after" : "before";
                if (s.level > 0 || "rtl" == t.doc.direction) {
                  var c = St(t, n);
                  a = i < 0 ? n.text.length - 1 : 0;
                  var u = Mt(t, c, a).top;
                  (a = S(
                    function (e) {
                      return Mt(t, c, e).top == u;
                    },
                    i < 0 == (1 == s.level) ? s.from : s.to - 1,
                    a
                  )),
                    "before" == l && (a = yi(n, a, 1));
                } else a = i < 0 ? s.to : s.from;
                return new re(r, a, l);
              }
            }
            return new re(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
          }
          function wi(e, t) {
            var n = X(e.doc, t),
              r = He(n);
            return r != n && (t = Z(r)), ki(!0, e, r, t, 1);
          }
          function Ci(e, t) {
            var n = wi(e, t.line),
              r = X(e.doc, n.line),
              i = L(r, e.doc.direction);
            if (!i || 0 == i[0].level) {
              var o = Math.max(n.ch, r.text.search(/\S/)),
                a = t.line == n.line && t.ch <= o && t.ch;
              return re(n.line, a ? 0 : o, n.sticky);
            }
            return n;
          }
          function xi(e, t, n) {
            if ("string" == typeof t && !(t = Ra[t])) return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift,
              i = !1;
            try {
              e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), (i = t(e) != Po);
            } finally {
              (e.display.shift = r), (e.state.suppressEdits = !1);
            }
            return i;
          }
          function Si(e, t, n, r) {
            var i = e.state.keySeq;
            if (i) {
              if (hi(t)) return "handled";
              if (
                (/\'$/.test(t)
                  ? (e.state.keySeq = null)
                  : Ba.set(50, function () {
                      e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                    }),
                Mi(e, i + " " + t, n, r))
              )
                return !0;
            }
            return Mi(e, t, n, r);
          }
          function Mi(e, t, n, r) {
            var i = (function (e, t, n) {
              for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = di(t, e.state.keyMaps[r], n, e);
                if (i) return i;
              }
              return (e.options.extraKeys && di(t, e.options.extraKeys, n, e)) || di(t, e.options.keyMap, n, e);
            })(e, t, r);
            return (
              "multi" == i && (e.state.keySeq = t),
              "handled" == i && et(e, "keyHandled", e, t, n),
              ("handled" != i && "multi" != i) || (R(n), dn(e)),
              !!i
            );
          }
          function Li(e, t) {
            var n = mi(t, !0);
            return (
              !!n &&
              (t.shiftKey && !e.state.keySeq
                ? Si(e, "Shift-" + n, t, function (t) {
                    return xi(e, t, !0);
                  }) ||
                  Si(e, n, t, function (t) {
                    if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return xi(e, t);
                  })
                : Si(e, n, t, function (t) {
                    return xi(e, t);
                  }))
            );
          }
          function Ti(e) {
            var t = this;
            if (!((e.target && e.target != t.display.input.getField()) || ((t.curOp.focus = a()), N(t, e)))) {
              oo && ao < 11 && 27 == e.keyCode && (e.returnValue = !1);
              var n = e.keyCode;
              t.display.shift = 16 == n || e.shiftKey;
              var r = Li(t, e);
              uo && ((Ha = r ? n : null), r || 88 != n || $o || !(yo ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")),
                to && !yo && !r && 46 == n && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"),
                18 != n ||
                  /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                  (function (e) {
                    function t(e) {
                      (18 != e.keyCode && e.altKey) ||
                        (Mo(n, "CodeMirror-crosshair"), A(document, "keyup", t), A(document, "mouseover", t));
                    }
                    var n = e.display.lineDiv;
                    s(n, "CodeMirror-crosshair"), jo(document, "keyup", t), jo(document, "mouseover", t);
                  })(t);
            }
          }
          function Ai(e) {
            16 == e.keyCode && (this.doc.sel.shift = !1), N(this, e);
          }
          function Oi(e) {
            var t = this;
            if (
              !(
                (e.target && e.target != t.display.input.getField()) ||
                pt(t.display, e) ||
                N(t, e) ||
                (e.ctrlKey && !e.altKey) ||
                (yo && e.metaKey)
              )
            ) {
              var n = e.keyCode,
                r = e.charCode;
              if (uo && n == Ha) return (Ha = null), void R(e);
              if (!uo || (e.which && !(e.which < 10)) || !Li(t, e)) {
                var i = String.fromCharCode(null == r ? n : r);
                "\b" != i &&
                  ((function (e, t, n) {
                    return Si(e, "'" + n + "'", t, function (t) {
                      return xi(e, t, !0);
                    });
                  })(t, e, i) ||
                    t.display.input.onKeyPress(e));
              }
            }
          }
          function Ni(e) {
            var t = this,
              n = t.display;
            if (!(N(t, e) || (n.activeTouch && n.input.supportsTouch())))
              if ((n.input.ensurePolled(), (n.shift = e.shiftKey), pt(n, e)))
                so ||
                  ((n.scroller.draggable = !1),
                  setTimeout(function () {
                    return (n.scroller.draggable = !0);
                  }, 100));
              else if (!Ii(t, e)) {
                var r = Zt(t, e),
                  i = W(e),
                  o = r
                    ? (function (e, t) {
                        var n = +new Date();
                        return Ia && Ia.compare(n, e, t)
                          ? ((Pa = Ia = null), "triple")
                          : Pa && Pa.compare(n, e, t)
                          ? ((Ia = new Da(n, e, t)), (Pa = null), "double")
                          : ((Pa = new Da(n, e, t)), (Ia = null), "single");
                      })(r, i)
                    : "single";
                window.focus(),
                  1 == i && t.state.selectingText && t.state.selectingText(e),
                  (r &&
                    (function (e, t, n, r, i) {
                      var o = "Click";
                      return (
                        "double" == r ? (o = "Double" + o) : "triple" == r && (o = "Triple" + o),
                        Si(e, pi((o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o), i), i, function (t) {
                          if (("string" == typeof t && (t = Ra[t]), !t)) return !1;
                          var r = !1;
                          try {
                            e.isReadOnly() && (e.state.suppressEdits = !0), (r = t(e, n) != Po);
                          } finally {
                            e.state.suppressEdits = !1;
                          }
                          return r;
                        })
                      );
                    })(t, i, r, o, e)) ||
                    (1 == i
                      ? r
                        ? (function (e, t, n, r) {
                            oo ? setTimeout(c(hn, e), 0) : (e.curOp.focus = a());
                            var i,
                              o = (function (e, t, n) {
                                var r = e.getOption("configureMouse"),
                                  i = r ? r(e, t, n) : {};
                                if (null == i.unit) {
                                  var o = bo ? n.shiftKey && n.metaKey : n.altKey;
                                  i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
                                }
                                return (
                                  (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey),
                                  null == i.addNew && (i.addNew = yo ? n.metaKey : n.ctrlKey),
                                  null == i.moveOnDrag && (i.moveOnDrag = !(yo ? n.altKey : n.ctrlKey)),
                                  i
                                );
                              })(e, n, r),
                              s = e.doc.sel;
                            e.options.dragDrop &&
                            _o &&
                            !e.isReadOnly() &&
                            "single" == n &&
                            (i = s.contains(t)) > -1 &&
                            (ie((i = s.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                            (ie(i.to(), t) > 0 || t.xRel < 0)
                              ? (function (e, t, n, r) {
                                  var i = e.display,
                                    o = !1,
                                    a = Kn(e, function (t) {
                                      so && (i.scroller.draggable = !1),
                                        (e.state.draggingText = !1),
                                        A(i.wrapper.ownerDocument, "mouseup", a),
                                        A(i.wrapper.ownerDocument, "mousemove", s),
                                        A(i.scroller, "dragstart", l),
                                        A(i.scroller, "drop", a),
                                        o ||
                                          (R(t),
                                          r.addNew || Or(e.doc, n, null, null, r.extend),
                                          (so && !fo) || (oo && 9 == ao)
                                            ? setTimeout(function () {
                                                i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus();
                                              }, 20)
                                            : i.input.focus());
                                    }),
                                    s = function (e) {
                                      o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                                    },
                                    l = function () {
                                      return (o = !0);
                                    };
                                  so && (i.scroller.draggable = !0),
                                    (e.state.draggingText = a),
                                    (a.copy = !r.moveOnDrag),
                                    i.scroller.dragDrop && i.scroller.dragDrop(),
                                    jo(i.wrapper.ownerDocument, "mouseup", a),
                                    jo(i.wrapper.ownerDocument, "mousemove", s),
                                    jo(i.scroller, "dragstart", l),
                                    jo(i.scroller, "drop", a),
                                    pn(e),
                                    setTimeout(function () {
                                      return i.input.focus();
                                    }, 20);
                                })(e, r, t, o)
                              : (function (e, t, n, r) {
                                  function i(t) {
                                    var o = ++y,
                                      p = Zt(e, t, !0, "rectangle" == r.unit);
                                    if (p)
                                      if (0 != ie(p, g)) {
                                        (e.curOp.focus = a()),
                                          (function (t) {
                                            if (0 != ie(g, t))
                                              if (((g = t), "rectangle" == r.unit)) {
                                                for (
                                                  var i = [],
                                                    o = e.options.tabSize,
                                                    a = f(X(l, n.line).text, n.ch, o),
                                                    s = f(X(l, t.line).text, t.ch, o),
                                                    p = Math.min(a, s),
                                                    m = Math.max(a, s),
                                                    v = Math.min(n.line, t.line),
                                                    y = Math.min(e.lastLine(), Math.max(n.line, t.line));
                                                  v <= y;
                                                  v++
                                                ) {
                                                  var b = X(l, v).text,
                                                    k = h(b, p, o);
                                                  p == m
                                                    ? i.push(new ya(re(v, k), re(v, k)))
                                                    : b.length > k && i.push(new ya(re(v, k), re(v, h(b, m, o))));
                                                }
                                                i.length || i.push(new ya(n, n)),
                                                  Rr(l, ar(e, d.ranges.slice(0, u).concat(i), u), { origin: "*mouse", scroll: !1 }),
                                                  e.scrollIntoView(t);
                                              } else {
                                                var w,
                                                  C = c,
                                                  x = Ei(e, t, r.unit),
                                                  S = C.anchor;
                                                ie(x.anchor, S) > 0
                                                  ? ((w = x.head), (S = le(C.from(), x.anchor)))
                                                  : ((w = x.anchor), (S = se(C.to(), x.head)));
                                                var T = d.ranges.slice(0);
                                                (T[u] = (function (e, t) {
                                                  var n = t.anchor,
                                                    r = t.head,
                                                    i = X(e.doc, n.line);
                                                  if (0 == ie(n, r) && n.sticky == r.sticky) return t;
                                                  var o = L(i);
                                                  if (!o) return t;
                                                  var a = M(o, n.ch, n.sticky),
                                                    s = o[a];
                                                  if (s.from != n.ch && s.to != n.ch) return t;
                                                  var l,
                                                    c = a + ((s.from == n.ch) == (1 != s.level) ? 0 : 1);
                                                  if (0 == c || c == o.length) return t;
                                                  if (r.line != n.line) l = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
                                                  else {
                                                    var u = M(o, r.ch, r.sticky),
                                                      f = u - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                                                    l = u == c - 1 || u == c ? f < 0 : f > 0;
                                                  }
                                                  var d = o[c + (l ? -1 : 0)],
                                                    h = l == (1 == d.level),
                                                    p = h ? d.from : d.to,
                                                    m = h ? "after" : "before";
                                                  return n.ch == p && n.sticky == m ? t : new ya(new re(n.line, p, m), r);
                                                })(e, new ya(ue(l, S), w))),
                                                  Rr(l, ar(e, T, u), Ro);
                                              }
                                          })(p);
                                        var m = bn(s, l);
                                        (p.line >= m.to || p.line < m.from) &&
                                          setTimeout(
                                            Kn(e, function () {
                                              y == o && i(t);
                                            }),
                                            150
                                          );
                                      } else {
                                        var b = t.clientY < v.top ? -20 : t.clientY > v.bottom ? 20 : 0;
                                        b &&
                                          setTimeout(
                                            Kn(e, function () {
                                              y == o && ((s.scroller.scrollTop += b), i(t));
                                            }),
                                            50
                                          );
                                      }
                                  }
                                  function o(t) {
                                    (e.state.selectingText = !1),
                                      (y = 1 / 0),
                                      t && (R(t), s.input.focus()),
                                      A(s.wrapper.ownerDocument, "mousemove", b),
                                      A(s.wrapper.ownerDocument, "mouseup", k),
                                      (l.history.lastSelOrigin = null);
                                  }
                                  var s = e.display,
                                    l = e.doc;
                                  R(t);
                                  var c,
                                    u,
                                    d = l.sel,
                                    p = d.ranges;
                                  if (
                                    (r.addNew && !r.extend
                                      ? ((u = l.sel.contains(n)), (c = u > -1 ? p[u] : new ya(n, n)))
                                      : ((c = l.sel.primary()), (u = l.sel.primIndex)),
                                    "rectangle" == r.unit)
                                  )
                                    r.addNew || (c = new ya(n, n)), (n = Zt(e, t, !0, !0)), (u = -1);
                                  else {
                                    var m = Ei(e, n, r.unit);
                                    c = r.extend ? Ar(c, m.anchor, m.head, r.extend) : m;
                                  }
                                  r.addNew
                                    ? -1 == u
                                      ? ((u = p.length), Rr(l, ar(e, p.concat([c]), u), { scroll: !1, origin: "*mouse" }))
                                      : p.length > 1 && p[u].empty() && "char" == r.unit && !r.extend
                                      ? (Rr(l, ar(e, p.slice(0, u).concat(p.slice(u + 1)), 0), { scroll: !1, origin: "*mouse" }),
                                        (d = l.sel))
                                      : Er(l, u, c, Ro)
                                    : ((u = 0), Rr(l, new va([c], 0), Ro), (d = l.sel));
                                  var g = n,
                                    v = s.wrapper.getBoundingClientRect(),
                                    y = 0,
                                    b = Kn(e, function (e) {
                                      0 !== e.buttons && W(e) ? i(e) : o(e);
                                    }),
                                    k = Kn(e, o);
                                  (e.state.selectingText = k),
                                    jo(s.wrapper.ownerDocument, "mousemove", b),
                                    jo(s.wrapper.ownerDocument, "mouseup", k);
                                })(e, r, t, o);
                          })(t, r, o, e)
                        : F(e) == n.scroller && R(e)
                      : 2 == i
                      ? (r && Or(t.doc, r),
                        setTimeout(function () {
                          return n.input.focus();
                        }, 20))
                      : 3 == i && (So ? t.display.input.onContextMenu(e) : pn(t)));
              }
          }
          function Ei(e, t, n) {
            if ("char" == n) return new ya(t, t);
            if ("word" == n) return e.findWordAt(t);
            if ("line" == n) return new ya(re(t.line, 0), ue(e.doc, re(t.line + 1, 0)));
            var r = n(e, t);
            return new ya(r.from, r.to);
          }
          function Pi(e, t, n, r) {
            var i, o;
            if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
            else
              try {
                (i = t.clientX), (o = t.clientY);
              } catch (e) {
                return !1;
              }
            if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
            r && R(t);
            var a = e.display,
              s = a.lineDiv.getBoundingClientRect();
            if (o > s.bottom || !P(e, n)) return H(t);
            o -= s.top - a.viewOffset;
            for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
              var c = a.gutters.childNodes[l];
              if (c && c.getBoundingClientRect().right >= i) return O(e, n, e, ee(e.doc, o), e.display.gutterSpecs[l].className, t), H(t);
            }
          }
          function Ii(e, t) {
            return Pi(e, t, "gutterClick", !0);
          }
          function Ri(e, t) {
            pt(e.display, t) ||
              (function (e, t) {
                return !!P(e, "gutterContextMenu") && Pi(e, t, "gutterContextMenu", !1);
              })(e, t) ||
              N(e, t, "contextmenu") ||
              So ||
              e.display.input.onContextMenu(t);
          }
          function Bi(e) {
            (e.display.wrapper.className =
              e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
              Nt(e);
          }
          function Hi(e, t, n) {
            if (!t != !(n && n != Fa)) {
              var r = e.display.dragFunctions,
                i = t ? jo : A;
              i(e.display.scroller, "dragstart", r.start),
                i(e.display.scroller, "dragenter", r.enter),
                i(e.display.scroller, "dragover", r.over),
                i(e.display.scroller, "dragleave", r.leave),
                i(e.display.scroller, "drop", r.drop);
            }
          }
          function Di(e) {
            e.options.lineWrapping
              ? (s(e.display.wrapper, "CodeMirror-wrap"), (e.display.sizer.style.minWidth = ""), (e.display.sizerWidth = null))
              : (Mo(e.display.wrapper, "CodeMirror-wrap"), _e(e)),
              Qt(e),
              tn(e),
              Nt(e),
              setTimeout(function () {
                return Nn(e);
              }, 100);
          }
          function Fi(e, t) {
            var i = this;
            if (!(this instanceof Fi)) return new Fi(e, t);
            (this.options = t = t ? u(t) : {}), (this.usercommands = {}), u(Wa, t, !1);
            var o = t.value;
            "string" == typeof o ? (o = new Sa(o, t.mode, null, t.lineSeparator, t.direction)) : t.mode && (o.modeOption = t.mode),
              (this.doc = o);
            var a = new Fi.inputStyles[t.inputStyle](this),
              s = (this.display = new nr(e, o, a, t));
            for (var l in ((s.wrapper.CodeMirror = this),
            Bi(this),
            t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
            Pn(this),
            (this.state = {
              keyMaps: [],
              overlays: [],
              modeGen: 0,
              overwrite: !1,
              delayingBlurEvent: !1,
              focused: !1,
              suppressEdits: !1,
              pasteIncoming: -1,
              cutIncoming: -1,
              selectingText: !1,
              draggingText: !1,
              highlight: new To(),
              keySeq: null,
              specialChars: null
            }),
            t.autofocus && !vo && s.input.focus(),
            oo &&
              ao < 11 &&
              setTimeout(function () {
                return i.display.input.reset(!0);
              }, 20),
            (function (e) {
              function t() {
                o.activeTouch &&
                  ((a = setTimeout(function () {
                    return (o.activeTouch = null);
                  }, 1e3)),
                  ((s = o.activeTouch).end = +new Date()));
              }
              function i(e, t) {
                if (null == t.left) return !0;
                var n = t.left - e.left,
                  r = t.top - e.top;
                return n * n + r * r > 400;
              }
              var o = e.display;
              jo(o.scroller, "mousedown", Kn(e, Ni)),
                jo(
                  o.scroller,
                  "dblclick",
                  oo && ao < 11
                    ? Kn(e, function (t) {
                        if (!N(e, t)) {
                          var n = Zt(e, t);
                          if (n && !Ii(e, t) && !pt(e.display, t)) {
                            R(t);
                            var r = e.findWordAt(n);
                            Or(e.doc, r.anchor, r.head);
                          }
                        }
                      })
                    : function (t) {
                        return N(e, t) || R(t);
                      }
                ),
                jo(o.scroller, "contextmenu", function (t) {
                  return Ri(e, t);
                }),
                jo(o.input.getField(), "contextmenu", function (t) {
                  o.scroller.contains(t.target) || Ri(e, t);
                });
              var a,
                s = { end: 0 };
              jo(o.scroller, "touchstart", function (t) {
                if (
                  !N(e, t) &&
                  !(function (e) {
                    if (1 != e.touches.length) return !1;
                    var t = e.touches[0];
                    return t.radiusX <= 1 && t.radiusY <= 1;
                  })(t) &&
                  !Ii(e, t)
                ) {
                  o.input.ensurePolled(), clearTimeout(a);
                  var n = +new Date();
                  (o.activeTouch = { start: n, moved: !1, prev: n - s.end <= 300 ? s : null }),
                    1 == t.touches.length && ((o.activeTouch.left = t.touches[0].pageX), (o.activeTouch.top = t.touches[0].pageY));
                }
              }),
                jo(o.scroller, "touchmove", function () {
                  o.activeTouch && (o.activeTouch.moved = !0);
                }),
                jo(o.scroller, "touchend", function (n) {
                  var r = o.activeTouch;
                  if (r && !pt(o, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
                    var a,
                      s = e.coordsChar(o.activeTouch, "page");
                    (a =
                      !r.prev || i(r, r.prev)
                        ? new ya(s, s)
                        : !r.prev.prev || i(r, r.prev.prev)
                        ? e.findWordAt(s)
                        : new ya(re(s.line, 0), ue(e.doc, re(s.line + 1, 0)))),
                      e.setSelection(a.anchor, a.head),
                      e.focus(),
                      R(n);
                  }
                  t();
                }),
                jo(o.scroller, "touchcancel", t),
                jo(o.scroller, "scroll", function () {
                  o.scroller.clientHeight && (Ln(e, o.scroller.scrollTop), An(e, o.scroller.scrollLeft, !0), O(e, "scroll", e));
                }),
                jo(o.scroller, "mousewheel", function (t) {
                  return or(e, t);
                }),
                jo(o.scroller, "DOMMouseScroll", function (t) {
                  return or(e, t);
                }),
                jo(o.wrapper, "scroll", function () {
                  return (o.wrapper.scrollTop = o.wrapper.scrollLeft = 0);
                }),
                (o.dragFunctions = {
                  enter: function (t) {
                    N(e, t) || D(t);
                  },
                  over: function (t) {
                    N(e, t) ||
                      ((function (e, t) {
                        var i = Zt(e, t);
                        if (i) {
                          var o = document.createDocumentFragment();
                          cn(e, i, o),
                            e.display.dragCursor ||
                              ((e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors")),
                              e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                            n(e.display.dragCursor, o);
                        }
                      })(e, t),
                      D(t));
                  },
                  start: function (t) {
                    return (function (e, t) {
                      if (oo && (!e.state.draggingText || +new Date() - Ma < 100)) D(t);
                      else if (
                        !N(e, t) &&
                        !pt(e.display, t) &&
                        (t.dataTransfer.setData("Text", e.getSelection()),
                        (t.dataTransfer.effectAllowed = "copyMove"),
                        t.dataTransfer.setDragImage && !fo)
                      ) {
                        var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
                        (n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                          uo && ((n.width = n.height = 1), e.display.wrapper.appendChild(n), (n._top = n.offsetTop)),
                          t.dataTransfer.setDragImage(n, 0, 0),
                          uo && n.parentNode.removeChild(n);
                      }
                    })(e, t);
                  },
                  drop: Kn(e, ai),
                  leave: function (t) {
                    N(e, t) || si(e);
                  }
                });
              var l = o.input.getField();
              jo(l, "keyup", function (t) {
                return Ai.call(e, t);
              }),
                jo(l, "keydown", Kn(e, Ti)),
                jo(l, "keypress", Kn(e, Oi)),
                jo(l, "focus", function (t) {
                  return mn(e, t);
                }),
                jo(l, "blur", function (t) {
                  return gn(e, t);
                });
            })(this),
            (function () {
              var e;
              La ||
                (jo(window, "resize", function () {
                  null == e &&
                    (e = setTimeout(function () {
                      (e = null), li(ci);
                    }, 100));
                }),
                jo(window, "blur", function () {
                  return li(gn);
                }),
                (La = !0));
            })(),
            In(this),
            (this.curOp.forceUpdate = !0),
            vr(this, o),
            (t.autofocus && !vo) || this.hasFocus()
              ? setTimeout(function () {
                  i.hasFocus() && !i.state.focused && mn(i);
                }, 20)
              : gn(this),
            za))
              za.hasOwnProperty(l) && za[l](this, t[l], Fa);
            Qn(this), t.finishInit && t.finishInit(this);
            for (var c = 0; c < Ka.length; ++c) Ka[c](this);
            Rn(this),
              so &&
                t.lineWrapping &&
                "optimizelegibility" == getComputedStyle(s.lineDiv).textRendering &&
                (s.lineDiv.style.textRendering = "auto");
          }
          function Wi(e, t, n, r) {
            var i,
              o = e.doc;
            null == n && (n = "add"), "smart" == n && (o.mode.indent ? (i = pe(e, t).state) : (n = "prev"));
            var a = e.options.tabSize,
              s = X(o, t),
              l = f(s.text, null, a);
            s.stateAfter && (s.stateAfter = null);
            var c,
              u = s.text.match(/^\s*/)[0];
            if (r || /\S/.test(s.text)) {
              if ("smart" == n && ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == Po || c > 150)) {
                if (!r) return;
                n = "prev";
              }
            } else (c = 0), (n = "not");
            "prev" == n
              ? (c = t > o.first ? f(X(o, t - 1).text, null, a) : 0)
              : "add" == n
              ? (c = l + e.options.indentUnit)
              : "subtract" == n
              ? (c = l - e.options.indentUnit)
              : "number" == typeof n && (c = l + n),
              (c = Math.max(0, c));
            var d = "",
              h = 0;
            if (e.options.indentWithTabs) for (var m = Math.floor(c / a); m; --m) (h += a), (d += "\t");
            if ((h < c && (d += p(c - h)), d != u)) return Xr(o, d, re(t, 0), re(t, u.length), "+input"), (s.stateAfter = null), !0;
            for (var g = 0; g < o.sel.ranges.length; g++) {
              var v = o.sel.ranges[g];
              if (v.head.line == t && v.head.ch < u.length) {
                var y = re(t, u.length);
                Er(o, g, new ya(y, y));
                break;
              }
            }
          }
          function zi(e) {
            ja = e;
          }
          function Ki(e, t, n, r, i) {
            var o = e.doc;
            (e.display.shift = !1), r || (r = o.sel);
            var a = +new Date() - 200,
              s = "paste" == i || e.state.pasteIncoming > a,
              l = Uo(t),
              c = null;
            if (s && r.ranges.length > 1)
              if (ja && ja.text.join("\n") == t) {
                if (r.ranges.length % ja.text.length == 0) {
                  c = [];
                  for (var u = 0; u < ja.text.length; u++) c.push(o.splitLines(ja.text[u]));
                }
              } else
                l.length == r.ranges.length &&
                  e.options.pasteLinesPerSelection &&
                  (c = g(l, function (e) {
                    return [e];
                  }));
            for (var f = e.curOp.updateInput, d = r.ranges.length - 1; d >= 0; d--) {
              var h = r.ranges[d],
                p = h.from(),
                v = h.to();
              h.empty() &&
                (n && n > 0
                  ? (p = re(p.line, p.ch - n))
                  : e.state.overwrite && !s
                  ? (v = re(v.line, Math.min(X(o, v.line).text.length, v.ch + m(l).length)))
                  : s && ja && ja.lineWise && ja.text.join("\n") == l.join("\n") && (p = v = re(p.line, 0)));
              var y = {
                from: p,
                to: v,
                text: c ? c[d % c.length] : l,
                origin: i || (s ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
              };
              Ur(e.doc, y), et(e, "inputRead", e, y);
            }
            t && !s && _i(e, t),
              Cn(e),
              e.curOp.updateInput < 2 && (e.curOp.updateInput = f),
              (e.curOp.typing = !0),
              (e.state.pasteIncoming = e.state.cutIncoming = -1);
          }
          function ji(e, t) {
            var n = e.clipboardData && e.clipboardData.getData("Text");
            if (n)
              return (
                e.preventDefault(),
                t.isReadOnly() ||
                  t.options.disableInput ||
                  zn(t, function () {
                    return Ki(t, n, 0, null, "paste");
                  }),
                !0
              );
          }
          function _i(e, t) {
            if (e.options.electricChars && e.options.smartIndent)
              for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                var i = n.ranges[r];
                if (!(i.head.ch > 100 || (r && n.ranges[r - 1].head.line == i.head.line))) {
                  var o = e.getModeAt(i.head),
                    a = !1;
                  if (o.electricChars) {
                    for (var s = 0; s < o.electricChars.length; s++)
                      if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                        a = Wi(e, i.head.line, "smart");
                        break;
                      }
                  } else
                    o.electricInput &&
                      o.electricInput.test(X(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                      (a = Wi(e, i.head.line, "smart"));
                  a && et(e, "electricInput", e, i.head.line);
                }
              }
          }
          function Ui(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
              var i = e.doc.sel.ranges[r].head.line,
                o = { anchor: re(i, 0), head: re(i + 1, 0) };
              n.push(o), t.push(e.getRange(o.anchor, o.head));
            }
            return { text: t, ranges: n };
          }
          function Vi(e, t, n, r) {
            e.setAttribute("autocorrect", n ? "" : "off"),
              e.setAttribute("autocapitalize", r ? "" : "off"),
              e.setAttribute("spellcheck", !!t);
          }
          function $i() {
            var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
              t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
            return so ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"), mo && (e.style.border = "1px solid black"), Vi(e), t;
          }
          function qi(e, t, n, r, i) {
            function o(o) {
              var a, s;
              if ("codepoint" == r) {
                var u = l.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
                a = isNaN(u)
                  ? null
                  : new re(t.line, Math.max(0, Math.min(l.text.length, t.ch + n * (u >= 55296 && u < 56320 ? 2 : 1))), -n);
              } else
                a = i
                  ? (function (e, t, n, r) {
                      var i = L(t, e.doc.direction);
                      if (!i) return bi(t, n, r);
                      n.ch >= t.text.length
                        ? ((n.ch = t.text.length), (n.sticky = "before"))
                        : n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
                      var o = M(i, n.ch, n.sticky),
                        a = i[o];
                      if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return bi(t, n, r);
                      var s,
                        l = function (e, n) {
                          return yi(t, e instanceof re ? e.ch : e, n);
                        },
                        c = function (n) {
                          return e.options.lineWrapping ? ((s = s || St(e, t)), jt(e, t, s, n)) : { begin: 0, end: t.text.length };
                        },
                        u = c("before" == n.sticky ? l(n, -1) : n.ch);
                      if ("rtl" == e.doc.direction || 1 == a.level) {
                        var f = (1 == a.level) == r < 0,
                          d = l(n, f ? 1 : -1);
                        if (null != d && (f ? d <= a.to && d <= u.end : d >= a.from && d >= u.begin)) {
                          var h = f ? "before" : "after";
                          return new re(n.line, d, h);
                        }
                      }
                      var p = function (e, t, r) {
                          for (
                            var o = function (e, t) {
                              return t ? new re(n.line, l(e, 1), "before") : new re(n.line, e, "after");
                            };
                            e >= 0 && e < i.length;
                            e += t
                          ) {
                            var a = i[e],
                              s = t > 0 == (1 != a.level),
                              c = s ? r.begin : l(r.end, -1);
                            if (a.from <= c && c < a.to) return o(c, s);
                            if (((c = s ? a.from : l(a.to, -1)), r.begin <= c && c < r.end)) return o(c, s);
                          }
                        },
                        m = p(o + r, r, u);
                      if (m) return m;
                      var g = r > 0 ? u.end : l(u.begin, -1);
                      return null == g || (r > 0 && g == t.text.length) || !(m = p(r > 0 ? 0 : i.length - 1, r, c(g))) ? null : m;
                    })(e.cm, l, t, n)
                  : bi(l, t, n);
              if (null == a) {
                if (o || (s = t.line + c) < e.first || s >= e.first + e.size || ((t = new re(s, t.ch, t.sticky)), !(l = X(e, s))))
                  return !1;
                t = ki(i, e.cm, l, t.line, c);
              } else t = a;
              return !0;
            }
            var a = t,
              s = n,
              l = X(e, t.line),
              c = i && "rtl" == e.direction ? -n : n;
            if ("char" == r || "codepoint" == r) o();
            else if ("column" == r) o(!0);
            else if ("word" == r || "group" == r)
              for (var u = null, f = "group" == r, d = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; !(n < 0) || o(!h); h = !1) {
                var p = l.text.charAt(t.ch) || "\n",
                  m = k(p, d) ? "w" : f && "\n" == p ? "n" : !f || /\s/.test(p) ? null : "p";
                if ((!f || h || m || (m = "s"), u && u != m)) {
                  n < 0 && ((n = 1), o(), (t.sticky = "after"));
                  break;
                }
                if ((m && (u = m), n > 0 && !o(!h))) break;
              }
            var g = zr(e, t, a, s, !0);
            return oe(a, g) && (g.hitSide = !0), g;
          }
          function Gi(e, t, n, r) {
            var i,
              o,
              a = e.doc,
              s = t.left;
            if ("page" == r) {
              var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                c = Math.max(l - 0.5 * qt(e.display), 3);
              i = (n > 0 ? t.bottom : t.top) + n * c;
            } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
            for (; (o = zt(e, s, i)).outside; ) {
              if (n < 0 ? i <= 0 : i >= a.height) {
                o.hitSide = !0;
                break;
              }
              i += 5 * n;
            }
            return o;
          }
          function Xi(e, t) {
            var n = xt(e, t.line);
            if (!n || n.hidden) return null;
            var r = X(e.doc, t.line),
              i = wt(n, r, t.line),
              o = L(r, e.doc.direction),
              a = "left";
            o && (a = M(o, t.ch) % 2 ? "right" : "left");
            var s = Lt(i.map, t.ch, a);
            return (s.offset = "right" == s.collapse ? s.end : s.start), s;
          }
          function Yi(e, t) {
            return t && (e.bad = !0), e;
          }
          function Ji(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
              if (!(r = e.display.lineDiv.childNodes[n])) return Yi(e.clipPos(re(e.display.viewTo - 1)), !0);
              (t = null), (n = 0);
            } else
              for (r = t; ; r = r.parentNode) {
                if (!r || r == e.display.lineDiv) return null;
                if (r.parentNode && r.parentNode == e.display.lineDiv) break;
              }
            for (var i = 0; i < e.display.view.length; i++) {
              var o = e.display.view[i];
              if (o.node == r) return Qi(o, t, n);
            }
          }
          function Qi(e, t, n) {
            function r(t, n, r) {
              for (var i = -1; i < (f ? f.length : 0); i++)
                for (var o = i < 0 ? u.map : f[i], a = 0; a < o.length; a += 3) {
                  var s = o[a + 2];
                  if (s == t || s == n) {
                    var l = Z(i < 0 ? e.line : e.rest[i]),
                      c = o[a] + r;
                    return (r < 0 || s != t) && (c = o[a + (r ? 1 : 0)]), re(l, c);
                  }
                }
            }
            var i = e.text.firstChild,
              a = !1;
            if (!t || !o(i, t)) return Yi(re(Z(e.line), 0), !0);
            if (t == i && ((a = !0), (t = i.childNodes[n]), (n = 0), !t)) {
              var s = e.rest ? m(e.rest) : e.line;
              return Yi(re(Z(s), s.text.length), a);
            }
            var l = 3 == t.nodeType ? t : null,
              c = t;
            for (
              l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || ((l = t.firstChild), n && (n = l.nodeValue.length));
              c.parentNode != i;

            )
              c = c.parentNode;
            var u = e.measure,
              f = u.maps,
              d = r(l, c, n);
            if (d) return Yi(d, a);
            for (var h = c.nextSibling, p = l ? l.nodeValue.length - n : 0; h; h = h.nextSibling) {
              if ((d = r(h, h.firstChild, 0))) return Yi(re(d.line, d.ch - p), a);
              p += h.textContent.length;
            }
            for (var g = c.previousSibling, v = n; g; g = g.previousSibling) {
              if ((d = r(g, g.firstChild, -1))) return Yi(re(d.line, d.ch + v), a);
              v += g.textContent.length;
            }
          }
          var Zi = navigator.userAgent,
            eo = navigator.platform,
            to = /gecko\/\d/i.test(Zi),
            no = /MSIE \d/.test(Zi),
            ro = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Zi),
            io = /Edge\/(\d+)/.exec(Zi),
            oo = no || ro || io,
            ao = oo && (no ? document.documentMode || 6 : +(io || ro)[1]),
            so = !io && /WebKit\//.test(Zi),
            lo = so && /Qt\/\d+\.\d+/.test(Zi),
            co = !io && /Chrome\//.test(Zi),
            uo = /Opera\//.test(Zi),
            fo = /Apple Computer/.test(navigator.vendor),
            ho = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Zi),
            po = /PhantomJS/.test(Zi),
            mo = !io && /AppleWebKit/.test(Zi) && /Mobile\/\w+/.test(Zi),
            go = /Android/.test(Zi),
            vo = mo || go || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Zi),
            yo = mo || /Mac/.test(eo),
            bo = /\bCrOS\b/.test(Zi),
            ko = /win/i.test(eo),
            wo = uo && Zi.match(/Version\/(\d*\.\d*)/);
          wo && (wo = Number(wo[1])), wo && wo >= 15 && ((uo = !1), (so = !0));
          var Co,
            xo = yo && (lo || (uo && (null == wo || wo < 12.11))),
            So = to || (oo && ao >= 9),
            Mo = function (t, n) {
              var r = t.className,
                i = e(n).exec(r);
              if (i) {
                var o = r.slice(i.index + i[0].length);
                t.className = r.slice(0, i.index) + (o ? i[1] + o : "");
              }
            };
          Co = document.createRange
            ? function (e, t, n, r) {
                var i = document.createRange();
                return i.setEnd(r || e, n), i.setStart(e, t), i;
              }
            : function (e, t, n) {
                var r = document.body.createTextRange();
                try {
                  r.moveToElementText(e.parentNode);
                } catch (e) {
                  return r;
                }
                return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
              };
          var Lo = function (e) {
            e.select();
          };
          mo
            ? (Lo = function (e) {
                (e.selectionStart = 0), (e.selectionEnd = e.value.length);
              })
            : oo &&
              (Lo = function (e) {
                try {
                  e.select();
                } catch (e) {}
              });
          var To = function () {
            (this.id = null), (this.f = null), (this.time = 0), (this.handler = c(this.onTimeout, this));
          };
          (To.prototype.onTimeout = function (e) {
            (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
          }),
            (To.prototype.set = function (e, t) {
              this.f = t;
              var n = +new Date() + e;
              (!this.id || n < this.time) && (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = n));
            });
          var Ao,
            Oo,
            No,
            Eo = 50,
            Po = {
              toString: function () {
                return "CodeMirror.Pass";
              }
            },
            Io = { scroll: !1 },
            Ro = { origin: "*mouse" },
            Bo = { origin: "+move" },
            Ho = [""],
            Do = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
            Fo =
              /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
            Wo = null,
            zo = (function () {
              function e(e, t, n) {
                (this.level = e), (this.from = t), (this.to = n);
              }
              var t = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                n = /[stwN]/,
                r = /[LRr]/,
                i = /[Lb1n]/,
                o = /[1n]/;
              return function (a, s) {
                var l,
                  c = "ltr" == s ? "L" : "R";
                if (0 == a.length || ("ltr" == s && !t.test(a))) return !1;
                for (var u = a.length, f = [], d = 0; d < u; ++d)
                  f.push(
                    (l = a.charCodeAt(d)) <= 247
                      ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(
                          l
                        )
                      : 1424 <= l && l <= 1524
                      ? "R"
                      : 1536 <= l && l <= 1785
                      ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(
                          l - 1536
                        )
                      : 1774 <= l && l <= 2220
                      ? "r"
                      : 8192 <= l && l <= 8203
                      ? "w"
                      : 8204 == l
                      ? "b"
                      : "L"
                  );
                for (var h = 0, p = c; h < u; ++h) {
                  var g = f[h];
                  "m" == g ? (f[h] = p) : (p = g);
                }
                for (var v = 0, y = c; v < u; ++v) {
                  var b = f[v];
                  "1" == b && "r" == y ? (f[v] = "n") : r.test(b) && ((y = b), "r" == b && (f[v] = "R"));
                }
                for (var k = 1, w = f[0]; k < u - 1; ++k) {
                  var C = f[k];
                  "+" == C && "1" == w && "1" == f[k + 1]
                    ? (f[k] = "1")
                    : "," != C || w != f[k + 1] || ("1" != w && "n" != w) || (f[k] = w),
                    (w = C);
                }
                for (var x = 0; x < u; ++x) {
                  var S = f[x];
                  if ("," == S) f[x] = "N";
                  else if ("%" == S) {
                    var M = void 0;
                    for (M = x + 1; M < u && "%" == f[M]; ++M);
                    for (var L = (x && "!" == f[x - 1]) || (M < u && "1" == f[M]) ? "1" : "N", T = x; T < M; ++T) f[T] = L;
                    x = M - 1;
                  }
                }
                for (var A = 0, O = c; A < u; ++A) {
                  var N = f[A];
                  "L" == O && "1" == N ? (f[A] = "L") : r.test(N) && (O = N);
                }
                for (var E = 0; E < u; ++E)
                  if (n.test(f[E])) {
                    var P = void 0;
                    for (P = E + 1; P < u && n.test(f[P]); ++P);
                    for (var I = "L" == (E ? f[E - 1] : c), R = I == ("L" == (P < u ? f[P] : c)) ? (I ? "L" : "R") : c, B = E; B < P; ++B)
                      f[B] = R;
                    E = P - 1;
                  }
                for (var H, D = [], F = 0; F < u; )
                  if (i.test(f[F])) {
                    var W = F;
                    for (++F; F < u && i.test(f[F]); ++F);
                    D.push(new e(0, W, F));
                  } else {
                    var z = F,
                      K = D.length,
                      j = "rtl" == s ? 1 : 0;
                    for (++F; F < u && "L" != f[F]; ++F);
                    for (var _ = z; _ < F; )
                      if (o.test(f[_])) {
                        z < _ && (D.splice(K, 0, new e(1, z, _)), (K += j));
                        var U = _;
                        for (++_; _ < F && o.test(f[_]); ++_);
                        D.splice(K, 0, new e(2, U, _)), (K += j), (z = _);
                      } else ++_;
                    z < F && D.splice(K, 0, new e(1, z, F));
                  }
                return (
                  "ltr" == s &&
                    (1 == D[0].level && (H = a.match(/^\s+/)) && ((D[0].from = H[0].length), D.unshift(new e(0, 0, H[0].length))),
                    1 == m(D).level && (H = a.match(/\s+$/)) && ((m(D).to -= H[0].length), D.push(new e(0, u - H[0].length, u)))),
                  "rtl" == s ? D.reverse() : D
                );
              };
            })(),
            Ko = [],
            jo = function (e, t, n) {
              if (e.addEventListener) e.addEventListener(t, n, !1);
              else if (e.attachEvent) e.attachEvent("on" + t, n);
              else {
                var r = e._handlers || (e._handlers = {});
                r[t] = (r[t] || Ko).concat(n);
              }
            },
            _o = (function () {
              if (oo && ao < 9) return !1;
              var e = r("div");
              return "draggable" in e || "dragDrop" in e;
            })(),
            Uo =
              3 != "\n\nb".split(/\n/).length
                ? function (e) {
                    for (var t = 0, n = [], r = e.length; t <= r; ) {
                      var i = e.indexOf("\n", t);
                      -1 == i && (i = e.length);
                      var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                        a = o.indexOf("\r");
                      -1 != a ? (n.push(o.slice(0, a)), (t += a + 1)) : (n.push(o), (t = i + 1));
                    }
                    return n;
                  }
                : function (e) {
                    return e.split(/\r\n?|\n/);
                  },
            Vo = window.getSelection
              ? function (e) {
                  try {
                    return e.selectionStart != e.selectionEnd;
                  } catch (e) {
                    return !1;
                  }
                }
              : function (e) {
                  var t;
                  try {
                    t = e.ownerDocument.selection.createRange();
                  } catch (e) {}
                  return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
                },
            $o = "oncopy" in (No = r("div")) || (No.setAttribute("oncopy", "return;"), "function" == typeof No.oncopy),
            qo = null,
            Go = {},
            Xo = {},
            Yo = {},
            Jo = function (e, t, n) {
              (this.pos = this.start = 0),
                (this.string = e),
                (this.tabSize = t || 8),
                (this.lastColumnPos = this.lastColumnValue = 0),
                (this.lineStart = 0),
                (this.lineOracle = n);
            };
          (Jo.prototype.eol = function () {
            return this.pos >= this.string.length;
          }),
            (Jo.prototype.sol = function () {
              return this.pos == this.lineStart;
            }),
            (Jo.prototype.peek = function () {
              return this.string.charAt(this.pos) || void 0;
            }),
            (Jo.prototype.next = function () {
              if (this.pos < this.string.length) return this.string.charAt(this.pos++);
            }),
            (Jo.prototype.eat = function (e) {
              var t = this.string.charAt(this.pos);
              if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
            }),
            (Jo.prototype.eatWhile = function (e) {
              for (var t = this.pos; this.eat(e); );
              return this.pos > t;
            }),
            (Jo.prototype.eatSpace = function () {
              for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
              return this.pos > e;
            }),
            (Jo.prototype.skipToEnd = function () {
              this.pos = this.string.length;
            }),
            (Jo.prototype.skipTo = function (e) {
              var t = this.string.indexOf(e, this.pos);
              if (t > -1) return (this.pos = t), !0;
            }),
            (Jo.prototype.backUp = function (e) {
              this.pos -= e;
            }),
            (Jo.prototype.column = function () {
              return (
                this.lastColumnPos < this.start &&
                  ((this.lastColumnValue = f(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)),
                  (this.lastColumnPos = this.start)),
                this.lastColumnValue - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
              );
            }),
            (Jo.prototype.indentation = function () {
              return f(this.string, null, this.tabSize) - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0);
            }),
            (Jo.prototype.match = function (e, t, n) {
              if ("string" != typeof e) {
                var r = this.string.slice(this.pos).match(e);
                return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
              }
              var i = function (e) {
                return n ? e.toLowerCase() : e;
              };
              if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
            }),
            (Jo.prototype.current = function () {
              return this.string.slice(this.start, this.pos);
            }),
            (Jo.prototype.hideFirstChars = function (e, t) {
              this.lineStart += e;
              try {
                return t();
              } finally {
                this.lineStart -= e;
              }
            }),
            (Jo.prototype.lookAhead = function (e) {
              var t = this.lineOracle;
              return t && t.lookAhead(e);
            }),
            (Jo.prototype.baseToken = function () {
              var e = this.lineOracle;
              return e && e.baseToken(this.pos);
            });
          var Qo = function (e, t) {
              (this.state = e), (this.lookAhead = t);
            },
            Zo = function (e, t, n, r) {
              (this.state = t),
                (this.doc = e),
                (this.line = n),
                (this.maxLookAhead = r || 0),
                (this.baseTokens = null),
                (this.baseTokenPos = 1);
            };
          (Zo.prototype.lookAhead = function (e) {
            var t = this.doc.getLine(this.line + e);
            return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
          }),
            (Zo.prototype.baseToken = function (e) {
              if (!this.baseTokens) return null;
              for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
              var t = this.baseTokens[this.baseTokenPos + 1];
              return { type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e };
            }),
            (Zo.prototype.nextLine = function () {
              this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
            }),
            (Zo.fromSaved = function (e, t, n) {
              return t instanceof Qo ? new Zo(e, $(e.mode, t.state), n, t.lookAhead) : new Zo(e, $(e.mode, t), n);
            }),
            (Zo.prototype.save = function (e) {
              var t = !1 !== e ? $(this.doc.mode, this.state) : this.state;
              return this.maxLookAhead > 0 ? new Qo(t, this.maxLookAhead) : t;
            });
          var ea = function (e, t, n) {
              (this.start = e.start), (this.end = e.pos), (this.string = e.current()), (this.type = t || null), (this.state = n);
            },
            ta = !1,
            na = !1,
            ra = function (e, t, n) {
              (this.text = e), Te(this, t), (this.height = n ? n(this) : 1);
            };
          (ra.prototype.lineNo = function () {
            return Z(this);
          }),
            I(ra);
          var ia,
            oa = {},
            aa = {},
            sa = null,
            la = null,
            ca = { left: 0, right: 0, top: 0, bottom: 0 },
            ua = function (e, t, n) {
              this.cm = n;
              var i = (this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")),
                o = (this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar"));
              (i.tabIndex = o.tabIndex = -1),
                e(i),
                e(o),
                jo(i, "scroll", function () {
                  i.clientHeight && t(i.scrollTop, "vertical");
                }),
                jo(o, "scroll", function () {
                  o.clientWidth && t(o.scrollLeft, "horizontal");
                }),
                (this.checkedZeroWidth = !1),
                oo && ao < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
            };
          (ua.prototype.update = function (e) {
            var t = e.scrollWidth > e.clientWidth + 1,
              n = e.scrollHeight > e.clientHeight + 1,
              r = e.nativeBarWidth;
            if (n) {
              (this.vert.style.display = "block"), (this.vert.style.bottom = t ? r + "px" : "0");
              var i = e.viewHeight - (t ? r : 0);
              this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
            } else (this.vert.style.display = ""), (this.vert.firstChild.style.height = "0");
            if (t) {
              (this.horiz.style.display = "block"),
                (this.horiz.style.right = n ? r + "px" : "0"),
                (this.horiz.style.left = e.barLeft + "px");
              var o = e.viewWidth - e.barLeft - (n ? r : 0);
              this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
            } else (this.horiz.style.display = ""), (this.horiz.firstChild.style.width = "0");
            return (
              !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
              { right: n ? r : 0, bottom: t ? r : 0 }
            );
          }),
            (ua.prototype.setScrollLeft = function (e) {
              this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
            }),
            (ua.prototype.setScrollTop = function (e) {
              this.vert.scrollTop != e && (this.vert.scrollTop = e),
                this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
            }),
            (ua.prototype.zeroWidthHack = function () {
              var e = yo && !ho ? "12px" : "18px";
              (this.horiz.style.height = this.vert.style.width = e),
                (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"),
                (this.disableHoriz = new To()),
                (this.disableVert = new To());
            }),
            (ua.prototype.enableZeroWidthBar = function (e, t, n) {
              (e.style.pointerEvents = "auto"),
                t.set(1e3, function r() {
                  var i = e.getBoundingClientRect();
                  ("vert" == n
                    ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                    : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e
                    ? (e.style.pointerEvents = "none")
                    : t.set(1e3, r);
                });
            }),
            (ua.prototype.clear = function () {
              var e = this.horiz.parentNode;
              e.removeChild(this.horiz), e.removeChild(this.vert);
            });
          var fa = function () {};
          (fa.prototype.update = function () {
            return { bottom: 0, right: 0 };
          }),
            (fa.prototype.setScrollLeft = function () {}),
            (fa.prototype.setScrollTop = function () {}),
            (fa.prototype.clear = function () {});
          var da = { native: ua, null: fa },
            ha = 0,
            pa = function (e, t, n) {
              var r = e.display;
              (this.viewport = t),
                (this.visible = bn(r, e.doc, t)),
                (this.editorIsHidden = !r.wrapper.offsetWidth),
                (this.wrapperHeight = r.wrapper.clientHeight),
                (this.wrapperWidth = r.wrapper.clientWidth),
                (this.oldDisplayWidth = bt(e)),
                (this.force = n),
                (this.dims = Xt(e)),
                (this.events = []);
            };
          (pa.prototype.signal = function (e, t) {
            P(e, t) && this.events.push(arguments);
          }),
            (pa.prototype.finish = function () {
              for (var e = 0; e < this.events.length; e++) O.apply(null, this.events[e]);
            });
          var ma = 0,
            ga = null;
          oo ? (ga = -0.53) : to ? (ga = 15) : co ? (ga = -0.7) : fo && (ga = -1 / 3);
          var va = function (e, t) {
            (this.ranges = e), (this.primIndex = t);
          };
          (va.prototype.primary = function () {
            return this.ranges[this.primIndex];
          }),
            (va.prototype.equals = function (e) {
              if (e == this) return !0;
              if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
              for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t],
                  r = e.ranges[t];
                if (!oe(n.anchor, r.anchor) || !oe(n.head, r.head)) return !1;
              }
              return !0;
            }),
            (va.prototype.deepCopy = function () {
              for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new ya(ae(this.ranges[t].anchor), ae(this.ranges[t].head));
              return new va(e, this.primIndex);
            }),
            (va.prototype.somethingSelected = function () {
              for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
              return !1;
            }),
            (va.prototype.contains = function (e, t) {
              t || (t = e);
              for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (ie(t, r.from()) >= 0 && ie(e, r.to()) <= 0) return n;
              }
              return -1;
            });
          var ya = (Fi.Range = function (e, t) {
            (this.anchor = e), (this.head = t);
          });
          (ya.prototype.from = function () {
            return le(this.anchor, this.head);
          }),
            (ya.prototype.to = function () {
              return se(this.anchor, this.head);
            }),
            (ya.prototype.empty = function () {
              return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
            }),
            (ei.prototype = {
              chunkSize: function () {
                return this.lines.length;
              },
              removeInner: function (e, t) {
                for (var n = e, r = e + t; n < r; ++n) {
                  var i = this.lines[n];
                  (this.height -= i.height), Ue(i), et(i, "delete");
                }
                this.lines.splice(e, t);
              },
              collapse: function (e) {
                e.push.apply(e, this.lines);
              },
              insertInner: function (e, t, n) {
                (this.height += n), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)));
                for (var r = 0; r < t.length; ++r) t[r].parent = this;
              },
              iterN: function (e, t, n) {
                for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
              }
            }),
            (ti.prototype = {
              chunkSize: function () {
                return this.size;
              },
              removeInner: function (e, t) {
                this.size -= t;
                for (var n = 0; n < this.children.length; ++n) {
                  var r = this.children[n],
                    i = r.chunkSize();
                  if (e < i) {
                    var o = Math.min(t, i - e),
                      a = r.height;
                    if (
                      (r.removeInner(e, o),
                      (this.height -= a - r.height),
                      i == o && (this.children.splice(n--, 1), (r.parent = null)),
                      0 == (t -= o))
                    )
                      break;
                    e = 0;
                  } else e -= i;
                }
                if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof ei))) {
                  var s = [];
                  this.collapse(s), (this.children = [new ei(s)]), (this.children[0].parent = this);
                }
              },
              collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
              },
              insertInner: function (e, t, n) {
                (this.size += t.length), (this.height += n);
                for (var r = 0; r < this.children.length; ++r) {
                  var i = this.children[r],
                    o = i.chunkSize();
                  if (e <= o) {
                    if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                      for (var a = (i.lines.length % 25) + 25, s = a; s < i.lines.length; ) {
                        var l = new ei(i.lines.slice(s, (s += 25)));
                        (i.height -= l.height), this.children.splice(++r, 0, l), (l.parent = this);
                      }
                      (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                    }
                    break;
                  }
                  e -= o;
                }
              },
              maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                  var e = this;
                  do {
                    var t = new ti(e.children.splice(e.children.length - 5, 5));
                    if (e.parent) {
                      (e.size -= t.size), (e.height -= t.height);
                      var n = d(e.parent.children, e);
                      e.parent.children.splice(n + 1, 0, t);
                    } else {
                      var r = new ti(e.children);
                      (r.parent = e), (e.children = [r, t]), (e = r);
                    }
                    t.parent = e.parent;
                  } while (e.children.length > 10);
                  e.parent.maybeSpill();
                }
              },
              iterN: function (e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                  var i = this.children[r],
                    o = i.chunkSize();
                  if (e < o) {
                    var a = Math.min(t, o - e);
                    if (i.iterN(e, a, n)) return !0;
                    if (0 == (t -= a)) break;
                    e = 0;
                  } else e -= o;
                }
              }
            });
          var ba = function (e, t, n) {
            if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            (this.doc = e), (this.node = t);
          };
          (ba.prototype.clear = function () {
            var e = this.doc.cm,
              t = this.line.widgets,
              n = this.line,
              r = Z(n);
            if (null != r && t) {
              for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
              t.length || (n.widgets = null);
              var o = ht(this);
              Q(n, Math.max(0, n.height - o)),
                e &&
                  (zn(e, function () {
                    ni(e, n, -o), nn(e, r, "widget");
                  }),
                  et(e, "lineWidgetCleared", e, this, r));
            }
          }),
            (ba.prototype.changed = function () {
              var e = this,
                t = this.height,
                n = this.doc.cm,
                r = this.line;
              this.height = null;
              var i = ht(this) - t;
              i &&
                (We(this.doc, r) || Q(r, r.height + i),
                n &&
                  zn(n, function () {
                    (n.curOp.forceUpdate = !0), ni(n, r, i), et(n, "lineWidgetChanged", n, e, Z(r));
                  }));
            }),
            I(ba);
          var ka = 0,
            wa = function (e, t) {
              (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++ka);
            };
          (wa.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              var e = this.doc.cm,
                t = e && !e.curOp;
              if ((t && In(e), P(this, "clear"))) {
                var n = this.find();
                n && et(this, "clear", n.from, n.to);
              }
              for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                var a = this.lines[o],
                  s = Ce(a.markedSpans, this);
                e && !this.collapsed ? nn(e, Z(a), "text") : e && (null != s.to && (i = Z(a)), null != s.from && (r = Z(a))),
                  (a.markedSpans = xe(a.markedSpans, s)),
                  null == s.from && this.collapsed && !We(this.doc, a) && e && Q(a, qt(e.display));
              }
              if (e && this.collapsed && !e.options.lineWrapping)
                for (var l = 0; l < this.lines.length; ++l) {
                  var c = He(this.lines[l]),
                    u = je(c);
                  u > e.display.maxLineLength && ((e.display.maxLine = c), (e.display.maxLineLength = u), (e.display.maxLineChanged = !0));
                }
              null != r && e && this.collapsed && tn(e, r, i + 1),
                (this.lines.length = 0),
                (this.explicitlyCleared = !0),
                this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && Dr(e.doc)),
                e && et(e, "markerCleared", e, this, r, i),
                t && Rn(e),
                this.parent && this.parent.clear();
            }
          }),
            (wa.prototype.find = function (e, t) {
              var n, r;
              null == e && "bookmark" == this.type && (e = 1);
              for (var i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i],
                  a = Ce(o.markedSpans, this);
                if (null != a.from && ((n = re(t ? o : Z(o), a.from)), -1 == e)) return n;
                if (null != a.to && ((r = re(t ? o : Z(o), a.to)), 1 == e)) return r;
              }
              return n && { from: n, to: r };
            }),
            (wa.prototype.changed = function () {
              var e = this,
                t = this.find(-1, !0),
                n = this,
                r = this.doc.cm;
              t &&
                r &&
                zn(r, function () {
                  var i = t.line,
                    o = Z(t.line),
                    a = xt(r, o);
                  if (
                    (a && (At(a), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                    (r.curOp.updateMaxLine = !0),
                    !We(n.doc, i) && null != n.height)
                  ) {
                    var s = n.height;
                    n.height = null;
                    var l = ht(n) - s;
                    l && Q(i, i.height + l);
                  }
                  et(r, "markerChanged", r, e);
                });
            }),
            (wa.prototype.attachLine = function (e) {
              if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers && -1 != d(t.maybeHiddenMarkers, this)) ||
                  (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
              }
              this.lines.push(e);
            }),
            (wa.prototype.detachLine = function (e) {
              if ((this.lines.splice(d(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
              }
            }),
            I(wa);
          var Ca = function (e, t) {
            (this.markers = e), (this.primary = t);
            for (var n = 0; n < e.length; ++n) e[n].parent = this;
          };
          (Ca.prototype.clear = function () {
            if (!this.explicitlyCleared) {
              this.explicitlyCleared = !0;
              for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
              et(this, "clear");
            }
          }),
            (Ca.prototype.find = function (e, t) {
              return this.primary.find(e, t);
            }),
            I(Ca);
          var xa = 0,
            Sa = function (e, t, n, r, i) {
              if (!(this instanceof Sa)) return new Sa(e, t, n, r, i);
              null == n && (n = 0),
                ti.call(this, [new ei([new ra("", null)])]),
                (this.first = n),
                (this.scrollTop = this.scrollLeft = 0),
                (this.cantEdit = !1),
                (this.cleanGeneration = 1),
                (this.modeFrontier = this.highlightFrontier = n);
              var o = re(n, 0);
              (this.sel = sr(o)),
                (this.history = new br(null)),
                (this.id = ++xa),
                (this.modeOption = t),
                (this.lineSep = r),
                (this.direction = "rtl" == i ? "rtl" : "ltr"),
                (this.extend = !1),
                "string" == typeof e && (e = this.splitLines(e)),
                mr(this, { from: o, to: o, text: e }),
                Rr(this, sr(o), Io);
            };
          (Sa.prototype = y(ti.prototype, {
            constructor: Sa,
            iter: function (e, t, n) {
              n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
            },
            insert: function (e, t) {
              for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
              this.insertInner(e - this.first, t, n);
            },
            remove: function (e, t) {
              this.removeInner(e - this.first, t);
            },
            getValue: function (e) {
              var t = J(this, this.first, this.first + this.size);
              return !1 === e ? t : t.join(e || this.lineSeparator());
            },
            setValue: _n(function (e) {
              var t = re(this.first, 0),
                n = this.first + this.size - 1;
              Ur(this, { from: t, to: re(n, X(this, n).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0),
                this.cm && xn(this.cm, 0, 0),
                Rr(this, sr(t), Io);
            }),
            replaceRange: function (e, t, n, r) {
              Xr(this, e, (t = ue(this, t)), (n = n ? ue(this, n) : t), r);
            },
            getRange: function (e, t, n) {
              var r = Y(this, ue(this, e), ue(this, t));
              return !1 === n ? r : r.join(n || this.lineSeparator());
            },
            getLine: function (e) {
              var t = this.getLineHandle(e);
              return t && t.text;
            },
            getLineHandle: function (e) {
              if (te(this, e)) return X(this, e);
            },
            getLineNumber: function (e) {
              return Z(e);
            },
            getLineHandleVisualStart: function (e) {
              return "number" == typeof e && (e = X(this, e)), He(e);
            },
            lineCount: function () {
              return this.size;
            },
            firstLine: function () {
              return this.first;
            },
            lastLine: function () {
              return this.first + this.size - 1;
            },
            clipPos: function (e) {
              return ue(this, e);
            },
            getCursor: function (e) {
              var t = this.sel.primary();
              return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
            },
            listSelections: function () {
              return this.sel.ranges;
            },
            somethingSelected: function () {
              return this.sel.somethingSelected();
            },
            setCursor: _n(function (e, t, n) {
              Pr(this, ue(this, "number" == typeof e ? re(e, t || 0) : e), null, n);
            }),
            setSelection: _n(function (e, t, n) {
              Pr(this, ue(this, e), ue(this, t || e), n);
            }),
            extendSelection: _n(function (e, t, n) {
              Or(this, ue(this, e), t && ue(this, t), n);
            }),
            extendSelections: _n(function (e, t) {
              Nr(this, fe(this, e), t);
            }),
            extendSelectionsBy: _n(function (e, t) {
              Nr(this, fe(this, g(this.sel.ranges, e)), t);
            }),
            setSelections: _n(function (e, t, n) {
              if (e.length) {
                for (var r = [], i = 0; i < e.length; i++) r[i] = new ya(ue(this, e[i].anchor), ue(this, e[i].head));
                null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Rr(this, ar(this.cm, r, t), n);
              }
            }),
            addSelection: _n(function (e, t, n) {
              var r = this.sel.ranges.slice(0);
              r.push(new ya(ue(this, e), ue(this, t || e))), Rr(this, ar(this.cm, r, r.length - 1), n);
            }),
            getSelection: function (e) {
              for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = Y(this, n[r].from(), n[r].to());
                t = t ? t.concat(i) : i;
              }
              return !1 === e ? t : t.join(e || this.lineSeparator());
            },
            getSelections: function (e) {
              for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                var i = Y(this, n[r].from(), n[r].to());
                !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
              }
              return t;
            },
            replaceSelection: function (e, t, n) {
              for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
              this.replaceSelections(r, t, n || "+input");
            },
            replaceSelections: _n(function (e, t, n) {
              for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                var a = i.ranges[o];
                r[o] = { from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n };
              }
              for (
                var s =
                    t &&
                    "end" != t &&
                    (function (e, t, n) {
                      for (var r = [], i = re(e.first, 0), o = i, a = 0; a < t.length; a++) {
                        var s = t[a],
                          l = fr(s.from, i, o),
                          c = fr(lr(s), i, o);
                        if (((i = s.to), (o = c), "around" == n)) {
                          var u = e.sel.ranges[a],
                            f = ie(u.head, u.anchor) < 0;
                          r[a] = new ya(f ? c : l, f ? l : c);
                        } else r[a] = new ya(l, l);
                      }
                      return new va(r, e.sel.primIndex);
                    })(this, r, t),
                  l = r.length - 1;
                l >= 0;
                l--
              )
                Ur(this, r[l]);
              s ? Ir(this, s) : this.cm && Cn(this.cm);
            }),
            undo: _n(function () {
              $r(this, "undo");
            }),
            redo: _n(function () {
              $r(this, "redo");
            }),
            undoSelection: _n(function () {
              $r(this, "undo", !0);
            }),
            redoSelection: _n(function () {
              $r(this, "redo", !0);
            }),
            setExtending: function (e) {
              this.extend = e;
            },
            getExtending: function () {
              return this.extend;
            },
            historySize: function () {
              for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
              for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
              return { undo: t, redo: n };
            },
            clearHistory: function () {
              var e = this;
              (this.history = new br(this.history.maxGeneration)),
                gr(
                  this,
                  function (t) {
                    return (t.history = e.history);
                  },
                  !0
                );
            },
            markClean: function () {
              this.cleanGeneration = this.changeGeneration(!0);
            },
            changeGeneration: function (e) {
              return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
            },
            isClean: function (e) {
              return this.history.generation == (e || this.cleanGeneration);
            },
            getHistory: function () {
              return { done: Tr(this.history.done), undone: Tr(this.history.undone) };
            },
            setHistory: function (e) {
              var t = (this.history = new br(this.history.maxGeneration));
              (t.done = Tr(e.done.slice(0), null, !0)), (t.undone = Tr(e.undone.slice(0), null, !0));
            },
            setGutterMarker: _n(function (e, t, n) {
              return Zr(this, e, "gutter", function (e) {
                var r = e.gutterMarkers || (e.gutterMarkers = {});
                return (r[t] = n), !n && w(r) && (e.gutterMarkers = null), !0;
              });
            }),
            clearGutter: _n(function (e) {
              var t = this;
              this.iter(function (n) {
                n.gutterMarkers &&
                  n.gutterMarkers[e] &&
                  Zr(t, n, "gutter", function () {
                    return (n.gutterMarkers[e] = null), w(n.gutterMarkers) && (n.gutterMarkers = null), !0;
                  });
              });
            }),
            lineInfo: function (e) {
              var t;
              if ("number" == typeof e) {
                if (!te(this, e)) return null;
                if (((t = e), !(e = X(this, e)))) return null;
              } else if (null == (t = Z(e))) return null;
              return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets
              };
            },
            addLineClass: _n(function (t, n, r) {
              return Zr(this, t, "gutter" == n ? "gutter" : "class", function (t) {
                var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
                if (t[i]) {
                  if (e(r).test(t[i])) return !1;
                  t[i] += " " + r;
                } else t[i] = r;
                return !0;
              });
            }),
            removeLineClass: _n(function (t, n, r) {
              return Zr(this, t, "gutter" == n ? "gutter" : "class", function (t) {
                var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
                  o = t[i];
                if (!o) return !1;
                if (null == r) t[i] = null;
                else {
                  var a = o.match(e(r));
                  if (!a) return !1;
                  var s = a.index + a[0].length;
                  t[i] = o.slice(0, a.index) + (a.index && s != o.length ? " " : "") + o.slice(s) || null;
                }
                return !0;
              });
            }),
            addLineWidget: _n(function (e, t, n) {
              return (function (e, t, n, r) {
                var i = new ba(e, n, r),
                  o = e.cm;
                return (
                  o && i.noHScroll && (o.display.alignWidgets = !0),
                  Zr(e, t, "widget", function (t) {
                    var n = t.widgets || (t.widgets = []);
                    if (
                      (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i),
                      (i.line = t),
                      o && !We(e, t))
                    ) {
                      var r = Ke(t) < e.scrollTop;
                      Q(t, t.height + ht(i)), r && wn(o, i.height), (o.curOp.forceUpdate = !0);
                    }
                    return !0;
                  }),
                  o && et(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : Z(t)),
                  i
                );
              })(this, e, t, n);
            }),
            removeLineWidget: function (e) {
              e.clear();
            },
            markText: function (e, t, n) {
              return ri(this, ue(this, e), ue(this, t), n, (n && n.type) || "range");
            },
            setBookmark: function (e, t) {
              var n = {
                replacedWith: t && (null == t.nodeType ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared,
                handleMouseEvents: t && t.handleMouseEvents
              };
              return ri(this, (e = ue(this, e)), e, n, "bookmark");
            },
            findMarksAt: function (e) {
              var t = [],
                n = X(this, (e = ue(this, e)).line).markedSpans;
              if (n)
                for (var r = 0; r < n.length; ++r) {
                  var i = n[r];
                  (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
                }
              return t;
            },
            findMarks: function (e, t, n) {
              (e = ue(this, e)), (t = ue(this, t));
              var r = [],
                i = e.line;
              return (
                this.iter(e.line, t.line + 1, function (o) {
                  var a = o.markedSpans;
                  if (a)
                    for (var s = 0; s < a.length; s++) {
                      var l = a[s];
                      (null != l.to && i == e.line && e.ch >= l.to) ||
                        (null == l.from && i != e.line) ||
                        (null != l.from && i == t.line && l.from >= t.ch) ||
                        (n && !n(l.marker)) ||
                        r.push(l.marker.parent || l.marker);
                    }
                  ++i;
                }),
                r
              );
            },
            getAllMarks: function () {
              var e = [];
              return (
                this.iter(function (t) {
                  var n = t.markedSpans;
                  if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker);
                }),
                e
              );
            },
            posFromIndex: function (e) {
              var t,
                n = this.first,
                r = this.lineSeparator().length;
              return (
                this.iter(function (i) {
                  var o = i.text.length + r;
                  if (o > e) return (t = e), !0;
                  (e -= o), ++n;
                }),
                ue(this, re(n, t))
              );
            },
            indexFromPos: function (e) {
              var t = (e = ue(this, e)).ch;
              if (e.line < this.first || e.ch < 0) return 0;
              var n = this.lineSeparator().length;
              return (
                this.iter(this.first, e.line, function (e) {
                  t += e.text.length + n;
                }),
                t
              );
            },
            copy: function (e) {
              var t = new Sa(J(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
              return (
                (t.scrollTop = this.scrollTop),
                (t.scrollLeft = this.scrollLeft),
                (t.sel = this.sel),
                (t.extend = !1),
                e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
                t
              );
            },
            linkedDoc: function (e) {
              e || (e = {});
              var t = this.first,
                n = this.first + this.size;
              null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
              var r = new Sa(J(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
              return (
                e.sharedHist && (r.history = this.history),
                (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }),
                (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                      i = r.find(),
                      o = e.clipPos(i.from),
                      a = e.clipPos(i.to);
                    if (ie(o, a)) {
                      var s = ri(e, o, a, r.primary, r.primary.type);
                      r.markers.push(s), (s.parent = r);
                    }
                  }
                })(r, ii(this)),
                r
              );
            },
            unlinkDoc: function (e) {
              if ((e instanceof Fi && (e = e.doc), this.linked))
                for (var t = 0; t < this.linked.length; ++t)
                  if (this.linked[t].doc == e) {
                    this.linked.splice(t, 1), e.unlinkDoc(this), oi(ii(this));
                    break;
                  }
              if (e.history == this.history) {
                var n = [e.id];
                gr(
                  e,
                  function (e) {
                    return n.push(e.id);
                  },
                  !0
                ),
                  (e.history = new br(null)),
                  (e.history.done = Tr(this.history.done, n)),
                  (e.history.undone = Tr(this.history.undone, n));
              }
            },
            iterLinkedDocs: function (e) {
              gr(this, e);
            },
            getMode: function () {
              return this.mode;
            },
            getEditor: function () {
              return this.cm;
            },
            splitLines: function (e) {
              return this.lineSep ? e.split(this.lineSep) : Uo(e);
            },
            lineSeparator: function () {
              return this.lineSep || "\n";
            },
            setDirection: _n(function (e) {
              var t;
              "rtl" != e && (e = "ltr"),
                e != this.direction &&
                  ((this.direction = e),
                  this.iter(function (e) {
                    return (e.order = null);
                  }),
                  this.cm &&
                    zn((t = this.cm), function () {
                      yr(t), tn(t);
                    }));
            })
          })),
            (Sa.prototype.eachLine = Sa.prototype.iter);
          for (
            var Ma = 0,
              La = !1,
              Ta = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
              },
              Aa = 0;
            Aa < 10;
            Aa++
          )
            Ta[Aa + 48] = Ta[Aa + 96] = String(Aa);
          for (var Oa = 65; Oa <= 90; Oa++) Ta[Oa] = String.fromCharCode(Oa);
          for (var Na = 1; Na <= 12; Na++) Ta[Na + 111] = Ta[Na + 63235] = "F" + Na;
          var Ea = {
            basic: {
              Left: "goCharLeft",
              Right: "goCharRight",
              Up: "goLineUp",
              Down: "goLineDown",
              End: "goLineEnd",
              Home: "goLineStartSmart",
              PageUp: "goPageUp",
              PageDown: "goPageDown",
              Delete: "delCharAfter",
              Backspace: "delCharBefore",
              "Shift-Backspace": "delCharBefore",
              Tab: "defaultTab",
              "Shift-Tab": "indentAuto",
              Enter: "newlineAndIndent",
              Insert: "toggleOverwrite",
              Esc: "singleSelection"
            },
            pcDefault: {
              "Ctrl-A": "selectAll",
              "Ctrl-D": "deleteLine",
              "Ctrl-Z": "undo",
              "Shift-Ctrl-Z": "redo",
              "Ctrl-Y": "redo",
              "Ctrl-Home": "goDocStart",
              "Ctrl-End": "goDocEnd",
              "Ctrl-Up": "goLineUp",
              "Ctrl-Down": "goLineDown",
              "Ctrl-Left": "goGroupLeft",
              "Ctrl-Right": "goGroupRight",
              "Alt-Left": "goLineStart",
              "Alt-Right": "goLineEnd",
              "Ctrl-Backspace": "delGroupBefore",
              "Ctrl-Delete": "delGroupAfter",
              "Ctrl-S": "save",
              "Ctrl-F": "find",
              "Ctrl-G": "findNext",
              "Shift-Ctrl-G": "findPrev",
              "Shift-Ctrl-F": "replace",
              "Shift-Ctrl-R": "replaceAll",
              "Ctrl-[": "indentLess",
              "Ctrl-]": "indentMore",
              "Ctrl-U": "undoSelection",
              "Shift-Ctrl-U": "redoSelection",
              "Alt-U": "redoSelection",
              fallthrough: "basic"
            },
            emacsy: {
              "Ctrl-F": "goCharRight",
              "Ctrl-B": "goCharLeft",
              "Ctrl-P": "goLineUp",
              "Ctrl-N": "goLineDown",
              "Alt-F": "goWordRight",
              "Alt-B": "goWordLeft",
              "Ctrl-A": "goLineStart",
              "Ctrl-E": "goLineEnd",
              "Ctrl-V": "goPageDown",
              "Shift-Ctrl-V": "goPageUp",
              "Ctrl-D": "delCharAfter",
              "Ctrl-H": "delCharBefore",
              "Alt-D": "delWordAfter",
              "Alt-Backspace": "delWordBefore",
              "Ctrl-K": "killLine",
              "Ctrl-T": "transposeChars",
              "Ctrl-O": "openLine"
            },
            macDefault: {
              "Cmd-A": "selectAll",
              "Cmd-D": "deleteLine",
              "Cmd-Z": "undo",
              "Shift-Cmd-Z": "redo",
              "Cmd-Y": "redo",
              "Cmd-Home": "goDocStart",
              "Cmd-Up": "goDocStart",
              "Cmd-End": "goDocEnd",
              "Cmd-Down": "goDocEnd",
              "Alt-Left": "goGroupLeft",
              "Alt-Right": "goGroupRight",
              "Cmd-Left": "goLineLeft",
              "Cmd-Right": "goLineRight",
              "Alt-Backspace": "delGroupBefore",
              "Ctrl-Alt-Backspace": "delGroupAfter",
              "Alt-Delete": "delGroupAfter",
              "Cmd-S": "save",
              "Cmd-F": "find",
              "Cmd-G": "findNext",
              "Shift-Cmd-G": "findPrev",
              "Cmd-Alt-F": "replace",
              "Shift-Cmd-Alt-F": "replaceAll",
              "Cmd-[": "indentLess",
              "Cmd-]": "indentMore",
              "Cmd-Backspace": "delWrappedLineLeft",
              "Cmd-Delete": "delWrappedLineRight",
              "Cmd-U": "undoSelection",
              "Shift-Cmd-U": "redoSelection",
              "Ctrl-Up": "goDocStart",
              "Ctrl-Down": "goDocEnd",
              fallthrough: ["basic", "emacsy"]
            }
          };
          Ea.default = yo ? Ea.macDefault : Ea.pcDefault;
          var Pa,
            Ia,
            Ra = {
              selectAll: jr,
              singleSelection: function (e) {
                return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Io);
              },
              killLine: function (e) {
                return vi(e, function (t) {
                  if (t.empty()) {
                    var n = X(e.doc, t.head.line).text.length;
                    return t.head.ch == n && t.head.line < e.lastLine()
                      ? { from: t.head, to: re(t.head.line + 1, 0) }
                      : { from: t.head, to: re(t.head.line, n) };
                  }
                  return { from: t.from(), to: t.to() };
                });
              },
              deleteLine: function (e) {
                return vi(e, function (t) {
                  return { from: re(t.from().line, 0), to: ue(e.doc, re(t.to().line + 1, 0)) };
                });
              },
              delLineLeft: function (e) {
                return vi(e, function (e) {
                  return {
                    from: re(e.from().line, 0),
                    to: e.from()
                  };
                });
              },
              delWrappedLineLeft: function (e) {
                return vi(e, function (t) {
                  var n = e.charCoords(t.head, "div").top + 5;
                  return { from: e.coordsChar({ left: 0, top: n }, "div"), to: t.from() };
                });
              },
              delWrappedLineRight: function (e) {
                return vi(e, function (t) {
                  var n = e.charCoords(t.head, "div").top + 5,
                    r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
                  return { from: t.from(), to: r };
                });
              },
              undo: function (e) {
                return e.undo();
              },
              redo: function (e) {
                return e.redo();
              },
              undoSelection: function (e) {
                return e.undoSelection();
              },
              redoSelection: function (e) {
                return e.redoSelection();
              },
              goDocStart: function (e) {
                return e.extendSelection(re(e.firstLine(), 0));
              },
              goDocEnd: function (e) {
                return e.extendSelection(re(e.lastLine()));
              },
              goLineStart: function (e) {
                return e.extendSelectionsBy(
                  function (t) {
                    return wi(e, t.head.line);
                  },
                  { origin: "+move", bias: 1 }
                );
              },
              goLineStartSmart: function (e) {
                return e.extendSelectionsBy(
                  function (t) {
                    return Ci(e, t.head);
                  },
                  { origin: "+move", bias: 1 }
                );
              },
              goLineEnd: function (e) {
                return e.extendSelectionsBy(
                  function (t) {
                    return (function (e, t) {
                      var n = X(e.doc, t),
                        r = (function (e) {
                          for (var t; (t = Ie(e)); ) e = t.find(1, !0).line;
                          return e;
                        })(n);
                      return r != n && (t = Z(r)), ki(!0, e, n, t, -1);
                    })(e, t.head.line);
                  },
                  { origin: "+move", bias: -1 }
                );
              },
              goLineRight: function (e) {
                return e.extendSelectionsBy(function (t) {
                  var n = e.cursorCoords(t.head, "div").top + 5;
                  return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
                }, Bo);
              },
              goLineLeft: function (e) {
                return e.extendSelectionsBy(function (t) {
                  var n = e.cursorCoords(t.head, "div").top + 5;
                  return e.coordsChar({ left: 0, top: n }, "div");
                }, Bo);
              },
              goLineLeftSmart: function (e) {
                return e.extendSelectionsBy(function (t) {
                  var n = e.cursorCoords(t.head, "div").top + 5,
                    r = e.coordsChar({ left: 0, top: n }, "div");
                  return r.ch < e.getLine(r.line).search(/\S/) ? Ci(e, t.head) : r;
                }, Bo);
              },
              goLineUp: function (e) {
                return e.moveV(-1, "line");
              },
              goLineDown: function (e) {
                return e.moveV(1, "line");
              },
              goPageUp: function (e) {
                return e.moveV(-1, "page");
              },
              goPageDown: function (e) {
                return e.moveV(1, "page");
              },
              goCharLeft: function (e) {
                return e.moveH(-1, "char");
              },
              goCharRight: function (e) {
                return e.moveH(1, "char");
              },
              goColumnLeft: function (e) {
                return e.moveH(-1, "column");
              },
              goColumnRight: function (e) {
                return e.moveH(1, "column");
              },
              goWordLeft: function (e) {
                return e.moveH(-1, "word");
              },
              goGroupRight: function (e) {
                return e.moveH(1, "group");
              },
              goGroupLeft: function (e) {
                return e.moveH(-1, "group");
              },
              goWordRight: function (e) {
                return e.moveH(1, "word");
              },
              delCharBefore: function (e) {
                return e.deleteH(-1, "codepoint");
              },
              delCharAfter: function (e) {
                return e.deleteH(1, "char");
              },
              delWordBefore: function (e) {
                return e.deleteH(-1, "word");
              },
              delWordAfter: function (e) {
                return e.deleteH(1, "word");
              },
              delGroupBefore: function (e) {
                return e.deleteH(-1, "group");
              },
              delGroupAfter: function (e) {
                return e.deleteH(1, "group");
              },
              indentAuto: function (e) {
                return e.indentSelection("smart");
              },
              indentMore: function (e) {
                return e.indentSelection("add");
              },
              indentLess: function (e) {
                return e.indentSelection("subtract");
              },
              insertTab: function (e) {
                return e.replaceSelection("\t");
              },
              insertSoftTab: function (e) {
                for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                  var o = n[i].from(),
                    a = f(e.getLine(o.line), o.ch, r);
                  t.push(p(r - (a % r)));
                }
                e.replaceSelections(t);
              },
              defaultTab: function (e) {
                e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
              },
              transposeChars: function (e) {
                return zn(e, function () {
                  for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                    if (t[r].empty()) {
                      var i = t[r].head,
                        o = X(e.doc, i.line).text;
                      if (o)
                        if ((i.ch == o.length && (i = new re(i.line, i.ch - 1)), i.ch > 0))
                          (i = new re(i.line, i.ch + 1)),
                            e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), re(i.line, i.ch - 2), i, "+transpose");
                        else if (i.line > e.doc.first) {
                          var a = X(e.doc, i.line - 1).text;
                          a &&
                            ((i = new re(i.line, 1)),
                            e.replaceRange(
                              o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1),
                              re(i.line - 1, a.length - 1),
                              i,
                              "+transpose"
                            ));
                        }
                      n.push(new ya(i, i));
                    }
                  e.setSelections(n);
                });
              },
              newlineAndIndent: function (e) {
                return zn(e, function () {
                  for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                    e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                  t = e.listSelections();
                  for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                  Cn(e);
                });
              },
              openLine: function (e) {
                return e.replaceSelection("\n", "start");
              },
              toggleOverwrite: function (e) {
                return e.toggleOverwrite();
              }
            },
            Ba = new To(),
            Ha = null,
            Da = function (e, t, n) {
              (this.time = e), (this.pos = t), (this.button = n);
            };
          Da.prototype.compare = function (e, t, n) {
            return this.time + 400 > e && 0 == ie(t, this.pos) && n == this.button;
          };
          var Fa = {
              toString: function () {
                return "CodeMirror.Init";
              }
            },
            Wa = {},
            za = {};
          (Fi.defaults = Wa), (Fi.optionHandlers = za);
          var Ka = [];
          Fi.defineInitHook = function (e) {
            return Ka.push(e);
          };
          var ja = null,
            _a = function (e) {
              (this.cm = e),
                (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
                (this.polling = new To()),
                (this.composing = null),
                (this.gracePeriod = !1),
                (this.readDOMTimeout = null);
            };
          (_a.prototype.init = function (e) {
            function t(e) {
              for (var t = e.target; t; t = t.parentNode) {
                if (t == a) return !0;
                if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
              }
              return !1;
            }
            function n(e) {
              if (t(e) && !N(o, e)) {
                if (o.somethingSelected())
                  zi({ lineWise: !1, text: o.getSelections() }), "cut" == e.type && o.replaceSelection("", null, "cut");
                else {
                  if (!o.options.lineWiseCopyCut) return;
                  var n = Ui(o);
                  zi({ lineWise: !0, text: n.text }),
                    "cut" == e.type &&
                      o.operation(function () {
                        o.setSelections(n.ranges, 0, Io), o.replaceSelection("", null, "cut");
                      });
                }
                if (e.clipboardData) {
                  e.clipboardData.clearData();
                  var r = ja.text.join("\n");
                  if ((e.clipboardData.setData("Text", r), e.clipboardData.getData("Text") == r)) return void e.preventDefault();
                }
                var s = $i(),
                  l = s.firstChild;
                o.display.lineSpace.insertBefore(s, o.display.lineSpace.firstChild), (l.value = ja.text.join("\n"));
                var c = document.activeElement;
                Lo(l),
                  setTimeout(function () {
                    o.display.lineSpace.removeChild(s), c.focus(), c == a && i.showPrimarySelection();
                  }, 50);
              }
            }
            var r = this,
              i = this,
              o = i.cm,
              a = (i.div = e.lineDiv);
            Vi(a, o.options.spellcheck, o.options.autocorrect, o.options.autocapitalize),
              jo(a, "paste", function (e) {
                !t(e) ||
                  N(o, e) ||
                  ji(e, o) ||
                  (ao <= 11 &&
                    setTimeout(
                      Kn(o, function () {
                        return r.updateFromDOM();
                      }),
                      20
                    ));
              }),
              jo(a, "compositionstart", function (e) {
                r.composing = { data: e.data, done: !1 };
              }),
              jo(a, "compositionupdate", function (e) {
                r.composing || (r.composing = { data: e.data, done: !1 });
              }),
              jo(a, "compositionend", function (e) {
                r.composing && (e.data != r.composing.data && r.readFromDOMSoon(), (r.composing.done = !0));
              }),
              jo(a, "touchstart", function () {
                return i.forceCompositionEnd();
              }),
              jo(a, "input", function () {
                r.composing || r.readFromDOMSoon();
              }),
              jo(a, "copy", n),
              jo(a, "cut", n);
          }),
            (_a.prototype.screenReaderLabelChanged = function (e) {
              e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
            }),
            (_a.prototype.prepareSelection = function () {
              var e = ln(this.cm, !1);
              return (e.focus = document.activeElement == this.div), e;
            }),
            (_a.prototype.showSelection = function (e, t) {
              e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
            }),
            (_a.prototype.getSelection = function () {
              return this.cm.display.wrapper.ownerDocument.getSelection();
            }),
            (_a.prototype.showPrimarySelection = function () {
              var e = this.getSelection(),
                t = this.cm,
                n = t.doc.sel.primary(),
                r = n.from(),
                i = n.to();
              if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) e.removeAllRanges();
              else {
                var o = Ji(t, e.anchorNode, e.anchorOffset),
                  a = Ji(t, e.focusNode, e.focusOffset);
                if (!o || o.bad || !a || a.bad || 0 != ie(le(o, a), r) || 0 != ie(se(o, a), i)) {
                  var s = t.display.view,
                    l = (r.line >= t.display.viewFrom && Xi(t, r)) || { node: s[0].measure.map[2], offset: 0 },
                    c = i.line < t.display.viewTo && Xi(t, i);
                  if (!c) {
                    var u = s[s.length - 1].measure,
                      f = u.maps ? u.maps[u.maps.length - 1] : u.map;
                    c = { node: f[f.length - 1], offset: f[f.length - 2] - f[f.length - 3] };
                  }
                  if (l && c) {
                    var d,
                      h = e.rangeCount && e.getRangeAt(0);
                    try {
                      d = Co(l.node, l.offset, c.offset, c.node);
                    } catch (e) {}
                    d &&
                      (!to && t.state.focused
                        ? (e.collapse(l.node, l.offset), d.collapsed || (e.removeAllRanges(), e.addRange(d)))
                        : (e.removeAllRanges(), e.addRange(d)),
                      h && null == e.anchorNode ? e.addRange(h) : to && this.startGracePeriod()),
                      this.rememberSelection();
                  } else e.removeAllRanges();
                }
              }
            }),
            (_a.prototype.startGracePeriod = function () {
              var e = this;
              clearTimeout(this.gracePeriod),
                (this.gracePeriod = setTimeout(function () {
                  (e.gracePeriod = !1),
                    e.selectionChanged() &&
                      e.cm.operation(function () {
                        return (e.cm.curOp.selectionChanged = !0);
                      });
                }, 20));
            }),
            (_a.prototype.showMultipleSelections = function (e) {
              n(this.cm.display.cursorDiv, e.cursors), n(this.cm.display.selectionDiv, e.selection);
            }),
            (_a.prototype.rememberSelection = function () {
              var e = this.getSelection();
              (this.lastAnchorNode = e.anchorNode),
                (this.lastAnchorOffset = e.anchorOffset),
                (this.lastFocusNode = e.focusNode),
                (this.lastFocusOffset = e.focusOffset);
            }),
            (_a.prototype.selectionInEditor = function () {
              var e = this.getSelection();
              if (!e.rangeCount) return !1;
              var t = e.getRangeAt(0).commonAncestorContainer;
              return o(this.div, t);
            }),
            (_a.prototype.focus = function () {
              "nocursor" != this.cm.options.readOnly &&
                ((this.selectionInEditor() && document.activeElement == this.div) || this.showSelection(this.prepareSelection(), !0),
                this.div.focus());
            }),
            (_a.prototype.blur = function () {
              this.div.blur();
            }),
            (_a.prototype.getField = function () {
              return this.div;
            }),
            (_a.prototype.supportsTouch = function () {
              return !0;
            }),
            (_a.prototype.receivedFocus = function () {
              var e = this;
              this.selectionInEditor()
                ? this.pollSelection()
                : zn(this.cm, function () {
                    return (e.cm.curOp.selectionChanged = !0);
                  }),
                this.polling.set(this.cm.options.pollInterval, function t() {
                  e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
                });
            }),
            (_a.prototype.selectionChanged = function () {
              var e = this.getSelection();
              return (
                e.anchorNode != this.lastAnchorNode ||
                e.anchorOffset != this.lastAnchorOffset ||
                e.focusNode != this.lastFocusNode ||
                e.focusOffset != this.lastFocusOffset
              );
            }),
            (_a.prototype.pollSelection = function () {
              if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                var e = this.getSelection(),
                  t = this.cm;
                if (
                  go &&
                  co &&
                  this.cm.display.gutterSpecs.length &&
                  (function (e) {
                    for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                    return !1;
                  })(e.anchorNode)
                )
                  return (
                    this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus()
                  );
                if (!this.composing) {
                  this.rememberSelection();
                  var n = Ji(t, e.anchorNode, e.anchorOffset),
                    r = Ji(t, e.focusNode, e.focusOffset);
                  n &&
                    r &&
                    zn(t, function () {
                      Rr(t.doc, sr(n, r), Io), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                    });
                }
              }
            }),
            (_a.prototype.pollContent = function () {
              null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
              var e,
                t,
                n,
                r = this.cm,
                i = r.display,
                o = r.doc.sel.primary(),
                a = o.from(),
                s = o.to();
              if (
                (0 == a.ch && a.line > r.firstLine() && (a = re(a.line - 1, X(r.doc, a.line - 1).length)),
                s.ch == X(r.doc, s.line).text.length && s.line < r.lastLine() && (s = re(s.line + 1, 0)),
                a.line < i.viewFrom || s.line > i.viewTo - 1)
              )
                return !1;
              a.line == i.viewFrom || 0 == (e = en(r, a.line))
                ? ((t = Z(i.view[0].line)), (n = i.view[0].node))
                : ((t = Z(i.view[e].line)), (n = i.view[e - 1].node.nextSibling));
              var l,
                c,
                u = en(r, s.line);
              if (
                (u == i.view.length - 1
                  ? ((l = i.viewTo - 1), (c = i.lineDiv.lastChild))
                  : ((l = Z(i.view[u + 1].line) - 1), (c = i.view[u + 1].node.previousSibling)),
                !n)
              )
                return !1;
              for (
                var f = r.doc.splitLines(
                    (function (e, t, n, r, i) {
                      function o() {
                        c && ((l += u), f && (l += u), (c = f = !1));
                      }
                      function a(e) {
                        e && (o(), (l += e));
                      }
                      function s(t) {
                        if (1 == t.nodeType) {
                          var n = t.getAttribute("cm-text");
                          if (n) return void a(n);
                          var l,
                            d = t.getAttribute("cm-marker");
                          if (d) {
                            var h = e.findMarks(
                              re(r, 0),
                              re(i + 1, 0),
                              ((g = +d),
                              function (e) {
                                return e.id == g;
                              })
                            );
                            return void (h.length && (l = h[0].find(0)) && a(Y(e.doc, l.from, l.to).join(u)));
                          }
                          if ("false" == t.getAttribute("contenteditable")) return;
                          var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                          if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                          p && o();
                          for (var m = 0; m < t.childNodes.length; m++) s(t.childNodes[m]);
                          /^(pre|p)$/i.test(t.nodeName) && (f = !0), p && (c = !0);
                        } else 3 == t.nodeType && a(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                        var g;
                      }
                      for (var l = "", c = !1, u = e.doc.lineSeparator(), f = !1; s(t), t != n; ) (t = t.nextSibling), (f = !1);
                      return l;
                    })(r, n, c, t, l)
                  ),
                  d = Y(r.doc, re(t, 0), re(l, X(r.doc, l).text.length));
                f.length > 1 && d.length > 1;

              )
                if (m(f) == m(d)) f.pop(), d.pop(), l--;
                else {
                  if (f[0] != d[0]) break;
                  f.shift(), d.shift(), t++;
                }
              for (var h = 0, p = 0, g = f[0], v = d[0], y = Math.min(g.length, v.length); h < y && g.charCodeAt(h) == v.charCodeAt(h); )
                ++h;
              for (
                var b = m(f), k = m(d), w = Math.min(b.length - (1 == f.length ? h : 0), k.length - (1 == d.length ? h : 0));
                p < w && b.charCodeAt(b.length - p - 1) == k.charCodeAt(k.length - p - 1);

              )
                ++p;
              if (1 == f.length && 1 == d.length && t == a.line)
                for (; h && h > a.ch && b.charCodeAt(b.length - p - 1) == k.charCodeAt(k.length - p - 1); ) h--, p++;
              (f[f.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, "")), (f[0] = f[0].slice(h).replace(/\u200b+$/, ""));
              var C = re(t, h),
                x = re(l, d.length ? m(d).length - p : 0);
              return f.length > 1 || f[0] || ie(C, x) ? (Xr(r.doc, f, C, x, "+input"), !0) : void 0;
            }),
            (_a.prototype.ensurePolled = function () {
              this.forceCompositionEnd();
            }),
            (_a.prototype.reset = function () {
              this.forceCompositionEnd();
            }),
            (_a.prototype.forceCompositionEnd = function () {
              this.composing &&
                (clearTimeout(this.readDOMTimeout), (this.composing = null), this.updateFromDOM(), this.div.blur(), this.div.focus());
            }),
            (_a.prototype.readFromDOMSoon = function () {
              var e = this;
              null == this.readDOMTimeout &&
                (this.readDOMTimeout = setTimeout(function () {
                  if (((e.readDOMTimeout = null), e.composing)) {
                    if (!e.composing.done) return;
                    e.composing = null;
                  }
                  e.updateFromDOM();
                }, 80));
            }),
            (_a.prototype.updateFromDOM = function () {
              var e = this;
              (!this.cm.isReadOnly() && this.pollContent()) ||
                zn(this.cm, function () {
                  return tn(e.cm);
                });
            }),
            (_a.prototype.setUneditable = function (e) {
              e.contentEditable = "false";
            }),
            (_a.prototype.onKeyPress = function (e) {
              0 == e.charCode ||
                this.composing ||
                (e.preventDefault(),
                this.cm.isReadOnly() || Kn(this.cm, Ki)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
            }),
            (_a.prototype.readOnlyChanged = function (e) {
              this.div.contentEditable = String("nocursor" != e);
            }),
            (_a.prototype.onContextMenu = function () {}),
            (_a.prototype.resetPosition = function () {}),
            (_a.prototype.needsContentAttribute = !0);
          var Ua = function (e) {
            (this.cm = e),
              (this.prevInput = ""),
              (this.pollingFast = !1),
              (this.polling = new To()),
              (this.hasSelection = !1),
              (this.composing = null);
          };
          (Ua.prototype.init = function (e) {
            function t(e) {
              if (!N(i, e)) {
                if (i.somethingSelected()) zi({ lineWise: !1, text: i.getSelections() });
                else {
                  if (!i.options.lineWiseCopyCut) return;
                  var t = Ui(i);
                  zi({ lineWise: !0, text: t.text }),
                    "cut" == e.type ? i.setSelections(t.ranges, null, Io) : ((r.prevInput = ""), (o.value = t.text.join("\n")), Lo(o));
                }
                "cut" == e.type && (i.state.cutIncoming = +new Date());
              }
            }
            var n = this,
              r = this,
              i = this.cm;
            this.createField(e);
            var o = this.textarea;
            e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
              mo && (o.style.width = "0px"),
              jo(o, "input", function () {
                oo && ao >= 9 && n.hasSelection && (n.hasSelection = null), r.poll();
              }),
              jo(o, "paste", function (e) {
                N(i, e) || ji(e, i) || ((i.state.pasteIncoming = +new Date()), r.fastPoll());
              }),
              jo(o, "cut", t),
              jo(o, "copy", t),
              jo(e.scroller, "paste", function (t) {
                if (!pt(e, t) && !N(i, t)) {
                  if (!o.dispatchEvent) return (i.state.pasteIncoming = +new Date()), void r.focus();
                  var n = new Event("paste");
                  (n.clipboardData = t.clipboardData), o.dispatchEvent(n);
                }
              }),
              jo(e.lineSpace, "selectstart", function (t) {
                pt(e, t) || R(t);
              }),
              jo(o, "compositionstart", function () {
                var e = i.getCursor("from");
                r.composing && r.composing.range.clear(),
                  (r.composing = { start: e, range: i.markText(e, i.getCursor("to"), { className: "CodeMirror-composing" }) });
              }),
              jo(o, "compositionend", function () {
                r.composing && (r.poll(), r.composing.range.clear(), (r.composing = null));
              });
          }),
            (Ua.prototype.createField = function () {
              (this.wrapper = $i()), (this.textarea = this.wrapper.firstChild);
            }),
            (Ua.prototype.screenReaderLabelChanged = function (e) {
              e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
            }),
            (Ua.prototype.prepareSelection = function () {
              var e = this.cm,
                t = e.display,
                n = e.doc,
                r = ln(e);
              if (e.options.moveInputWithCursor) {
                var i = Dt(e, n.sel.primary().head, "div"),
                  o = t.wrapper.getBoundingClientRect(),
                  a = t.lineDiv.getBoundingClientRect();
                (r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top))),
                  (r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)));
              }
              return r;
            }),
            (Ua.prototype.showSelection = function (e) {
              var t = this.cm.display;
              n(t.cursorDiv, e.cursors),
                n(t.selectionDiv, e.selection),
                null != e.teTop && ((this.wrapper.style.top = e.teTop + "px"), (this.wrapper.style.left = e.teLeft + "px"));
            }),
            (Ua.prototype.reset = function (e) {
              if (!this.contextMenuPending && !this.composing) {
                var t = this.cm;
                if (t.somethingSelected()) {
                  this.prevInput = "";
                  var n = t.getSelection();
                  (this.textarea.value = n), t.state.focused && Lo(this.textarea), oo && ao >= 9 && (this.hasSelection = n);
                } else e || ((this.prevInput = this.textarea.value = ""), oo && ao >= 9 && (this.hasSelection = null));
              }
            }),
            (Ua.prototype.getField = function () {
              return this.textarea;
            }),
            (Ua.prototype.supportsTouch = function () {
              return !1;
            }),
            (Ua.prototype.focus = function () {
              if ("nocursor" != this.cm.options.readOnly && (!vo || a() != this.textarea))
                try {
                  this.textarea.focus();
                } catch (e) {}
            }),
            (Ua.prototype.blur = function () {
              this.textarea.blur();
            }),
            (Ua.prototype.resetPosition = function () {
              this.wrapper.style.top = this.wrapper.style.left = 0;
            }),
            (Ua.prototype.receivedFocus = function () {
              this.slowPoll();
            }),
            (Ua.prototype.slowPoll = function () {
              var e = this;
              this.pollingFast ||
                this.polling.set(this.cm.options.pollInterval, function () {
                  e.poll(), e.cm.state.focused && e.slowPoll();
                });
            }),
            (Ua.prototype.fastPoll = function () {
              var e = !1,
                t = this;
              (t.pollingFast = !0),
                t.polling.set(20, function n() {
                  t.poll() || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, n));
                });
            }),
            (Ua.prototype.poll = function () {
              var e = this,
                t = this.cm,
                n = this.textarea,
                r = this.prevInput;
              if (
                this.contextMenuPending ||
                !t.state.focused ||
                (Vo(n) && !r && !this.composing) ||
                t.isReadOnly() ||
                t.options.disableInput ||
                t.state.keySeq
              )
                return !1;
              var i = n.value;
              if (i == r && !t.somethingSelected()) return !1;
              if ((oo && ao >= 9 && this.hasSelection === i) || (yo && /[\uf700-\uf7ff]/.test(i))) return t.display.input.reset(), !1;
              if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if ((8203 != o || r || (r = "​"), 8666 == o)) return this.reset(), this.cm.execCommand("undo");
              }
              for (var a = 0, s = Math.min(r.length, i.length); a < s && r.charCodeAt(a) == i.charCodeAt(a); ) ++a;
              return (
                zn(t, function () {
                  Ki(t, i.slice(a), r.length - a, null, e.composing ? "*compose" : null),
                    i.length > 1e3 || i.indexOf("\n") > -1 ? (n.value = e.prevInput = "") : (e.prevInput = i),
                    e.composing &&
                      (e.composing.range.clear(),
                      (e.composing.range = t.markText(e.composing.start, t.getCursor("to"), { className: "CodeMirror-composing" })));
                }),
                !0
              );
            }),
            (Ua.prototype.ensurePolled = function () {
              this.pollingFast && this.poll() && (this.pollingFast = !1);
            }),
            (Ua.prototype.onKeyPress = function () {
              oo && ao >= 9 && (this.hasSelection = null), this.fastPoll();
            }),
            (Ua.prototype.onContextMenu = function (e) {
              function t() {
                if (null != a.selectionStart) {
                  var e = i.somethingSelected(),
                    t = "​" + (e ? a.value : "");
                  (a.value = "⇚"),
                    (a.value = t),
                    (r.prevInput = e ? "" : "​"),
                    (a.selectionStart = 1),
                    (a.selectionEnd = t.length),
                    (o.selForContextMenu = i.doc.sel);
                }
              }
              function n() {
                if (
                  r.contextMenuPending == n &&
                  ((r.contextMenuPending = !1),
                  (r.wrapper.style.cssText = f),
                  (a.style.cssText = u),
                  oo && ao < 9 && o.scrollbars.setScrollTop((o.scroller.scrollTop = l)),
                  null != a.selectionStart)
                ) {
                  (!oo || (oo && ao < 9)) && t();
                  var e = 0,
                    s = function () {
                      o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput
                        ? Kn(i, jr)(i)
                        : e++ < 10
                        ? (o.detectingSelectAll = setTimeout(s, 500))
                        : ((o.selForContextMenu = null), o.input.reset());
                    };
                  o.detectingSelectAll = setTimeout(s, 200);
                }
              }
              var r = this,
                i = r.cm,
                o = i.display,
                a = r.textarea;
              r.contextMenuPending && r.contextMenuPending();
              var s = Zt(i, e),
                l = o.scroller.scrollTop;
              if (s && !uo) {
                i.options.resetSelectionOnContextMenu && -1 == i.doc.sel.contains(s) && Kn(i, Rr)(i.doc, sr(s), Io);
                var c,
                  u = a.style.cssText,
                  f = r.wrapper.style.cssText,
                  d = r.wrapper.offsetParent.getBoundingClientRect();
                if (
                  ((r.wrapper.style.cssText = "position: static"),
                  (a.style.cssText =
                    "position: absolute; width: 30px; height: 30px;\n      top: " +
                    (e.clientY - d.top - 5) +
                    "px; left: " +
                    (e.clientX - d.left - 5) +
                    "px;\n      z-index: 1000; background: " +
                    (oo ? "rgba(255, 255, 255, .05)" : "transparent") +
                    ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                  so && (c = window.scrollY),
                  o.input.focus(),
                  so && window.scrollTo(null, c),
                  o.input.reset(),
                  i.somethingSelected() || (a.value = r.prevInput = " "),
                  (r.contextMenuPending = n),
                  (o.selForContextMenu = i.doc.sel),
                  clearTimeout(o.detectingSelectAll),
                  oo && ao >= 9 && t(),
                  So)
                ) {
                  D(e);
                  var h = function () {
                    A(window, "mouseup", h), setTimeout(n, 20);
                  };
                  jo(window, "mouseup", h);
                } else setTimeout(n, 50);
              }
            }),
            (Ua.prototype.readOnlyChanged = function (e) {
              e || this.reset(), (this.textarea.disabled = "nocursor" == e), (this.textarea.readOnly = !!e);
            }),
            (Ua.prototype.setUneditable = function () {}),
            (Ua.prototype.needsContentAttribute = !1),
            (function (e) {
              function t(t, r, i, o) {
                (e.defaults[t] = r),
                  i &&
                    (n[t] = o
                      ? function (e, t, n) {
                          n != Fa && i(e, t, n);
                        }
                      : i);
              }
              var n = e.optionHandlers;
              (e.defineOption = t),
                (e.Init = Fa),
                t(
                  "value",
                  "",
                  function (e, t) {
                    return e.setValue(t);
                  },
                  !0
                ),
                t(
                  "mode",
                  null,
                  function (e, t) {
                    (e.doc.modeOption = t), dr(e);
                  },
                  !0
                ),
                t("indentUnit", 2, dr, !0),
                t("indentWithTabs", !1),
                t("smartIndent", !0),
                t(
                  "tabSize",
                  4,
                  function (e) {
                    hr(e), Nt(e), tn(e);
                  },
                  !0
                ),
                t("lineSeparator", null, function (e, t) {
                  if (((e.doc.lineSep = t), t)) {
                    var n = [],
                      r = e.doc.first;
                    e.doc.iter(function (e) {
                      for (var i = 0; ; ) {
                        var o = e.text.indexOf(t, i);
                        if (-1 == o) break;
                        (i = o + t.length), n.push(re(r, o));
                      }
                      r++;
                    });
                    for (var i = n.length - 1; i >= 0; i--) Xr(e.doc, t, n[i], re(n[i].line, n[i].ch + t.length));
                  }
                }),
                t(
                  "specialChars",
                  /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
                  function (e, t, n) {
                    (e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g")), n != Fa && e.refresh();
                  }
                ),
                t(
                  "specialCharPlaceholder",
                  qe,
                  function (e) {
                    return e.refresh();
                  },
                  !0
                ),
                t("electricChars", !0),
                t(
                  "inputStyle",
                  vo ? "contenteditable" : "textarea",
                  function () {
                    throw new Error("inputStyle can not (yet) be changed in a running editor");
                  },
                  !0
                ),
                t(
                  "spellcheck",
                  !1,
                  function (e, t) {
                    return (e.getInputField().spellcheck = t);
                  },
                  !0
                ),
                t(
                  "autocorrect",
                  !1,
                  function (e, t) {
                    return (e.getInputField().autocorrect = t);
                  },
                  !0
                ),
                t(
                  "autocapitalize",
                  !1,
                  function (e, t) {
                    return (e.getInputField().autocapitalize = t);
                  },
                  !0
                ),
                t("rtlMoveVisually", !ko),
                t("wholeLineUpdateBefore", !0),
                t(
                  "theme",
                  "default",
                  function (e) {
                    Bi(e), tr(e);
                  },
                  !0
                ),
                t("keyMap", "default", function (e, t, n) {
                  var r = gi(t),
                    i = n != Fa && gi(n);
                  i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
                }),
                t("extraKeys", null),
                t("configureMouse", null),
                t("lineWrapping", !1, Di, !0),
                t(
                  "gutters",
                  [],
                  function (e, t) {
                    (e.display.gutterSpecs = Zn(t, e.options.lineNumbers)), tr(e);
                  },
                  !0
                ),
                t(
                  "fixedGutter",
                  !0,
                  function (e, t) {
                    (e.display.gutters.style.left = t ? Yt(e.display) + "px" : "0"), e.refresh();
                  },
                  !0
                ),
                t(
                  "coverGutterNextToScrollbar",
                  !1,
                  function (e) {
                    return Nn(e);
                  },
                  !0
                ),
                t(
                  "scrollbarStyle",
                  "native",
                  function (e) {
                    Pn(e), Nn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                  },
                  !0
                ),
                t(
                  "lineNumbers",
                  !1,
                  function (e, t) {
                    (e.display.gutterSpecs = Zn(e.options.gutters, t)), tr(e);
                  },
                  !0
                ),
                t("firstLineNumber", 1, tr, !0),
                t(
                  "lineNumberFormatter",
                  function (e) {
                    return e;
                  },
                  tr,
                  !0
                ),
                t("showCursorWhenSelecting", !1, sn, !0),
                t("resetSelectionOnContextMenu", !0),
                t("lineWiseCopyCut", !0),
                t("pasteLinesPerSelection", !0),
                t("selectionsMayTouch", !1),
                t("readOnly", !1, function (e, t) {
                  "nocursor" == t && (gn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
                }),
                t("screenReaderLabel", null, function (e, t) {
                  (t = "" === t ? null : t), e.display.input.screenReaderLabelChanged(t);
                }),
                t(
                  "disableInput",
                  !1,
                  function (e, t) {
                    t || e.display.input.reset();
                  },
                  !0
                ),
                t("dragDrop", !0, Hi),
                t("allowDropFileTypes", null),
                t("cursorBlinkRate", 530),
                t("cursorScrollMargin", 0),
                t("cursorHeight", 1, sn, !0),
                t("singleCursorHeightPerLine", !0, sn, !0),
                t("workTime", 100),
                t("workDelay", 100),
                t("flattenSpans", !0, hr, !0),
                t("addModeClass", !1, hr, !0),
                t("pollInterval", 100),
                t("undoDepth", 200, function (e, t) {
                  return (e.doc.history.undoDepth = t);
                }),
                t("historyEventDelay", 1250),
                t(
                  "viewportMargin",
                  10,
                  function (e) {
                    return e.refresh();
                  },
                  !0
                ),
                t("maxHighlightLength", 1e4, hr, !0),
                t("moveInputWithCursor", !0, function (e, t) {
                  t || e.display.input.resetPosition();
                }),
                t("tabindex", null, function (e, t) {
                  return (e.display.input.getField().tabIndex = t || "");
                }),
                t("autofocus", null),
                t(
                  "direction",
                  "ltr",
                  function (e, t) {
                    return e.doc.setDirection(t);
                  },
                  !0
                ),
                t("phrases", null);
            })(Fi),
            (function (e) {
              var t = e.optionHandlers,
                n = (e.helpers = {});
              (e.prototype = {
                constructor: e,
                focus: function () {
                  window.focus(), this.display.input.focus();
                },
                setOption: function (e, n) {
                  var r = this.options,
                    i = r[e];
                  (r[e] == n && "mode" != e) ||
                    ((r[e] = n), t.hasOwnProperty(e) && Kn(this, t[e])(this, n, i), O(this, "optionChange", this, e));
                },
                getOption: function (e) {
                  return this.options[e];
                },
                getDoc: function () {
                  return this.doc;
                },
                addKeyMap: function (e, t) {
                  this.state.keyMaps[t ? "push" : "unshift"](gi(e));
                },
                removeKeyMap: function (e) {
                  for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
                },
                addOverlay: jn(function (t, n) {
                  var r = t.token ? t : e.getMode(this.options, t);
                  if (r.startState) throw new Error("Overlays may not be stateful.");
                  (function (e, t, n) {
                    for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
                    e.splice(r, 0, t);
                  })(this.state.overlays, { mode: r, modeSpec: t, opaque: n && n.opaque, priority: (n && n.priority) || 0 }, function (e) {
                    return e.priority;
                  }),
                    this.state.modeGen++,
                    tn(this);
                }),
                removeOverlay: jn(function (e) {
                  for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                    var r = t[n].modeSpec;
                    if (r == e || ("string" == typeof e && r.name == e)) return t.splice(n, 1), this.state.modeGen++, void tn(this);
                  }
                }),
                indentLine: jn(function (e, t, n) {
                  "string" != typeof t &&
                    "number" != typeof t &&
                    (t = null == t ? (this.options.smartIndent ? "smart" : "prev") : t ? "add" : "subtract"),
                    te(this.doc, e) && Wi(this, e, t, n);
                }),
                indentSelection: jn(function (e) {
                  for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.empty())
                      i.head.line > n && (Wi(this, i.head.line, e, !0), (n = i.head.line), r == this.doc.sel.primIndex && Cn(this));
                    else {
                      var o = i.from(),
                        a = i.to(),
                        s = Math.max(n, o.line);
                      n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                      for (var l = s; l < n; ++l) Wi(this, l, e);
                      var c = this.doc.sel.ranges;
                      0 == o.ch && t.length == c.length && c[r].from().ch > 0 && Er(this.doc, r, new ya(o, c[r].to()), Io);
                    }
                  }
                }),
                getTokenAt: function (e, t) {
                  return ye(this, e, t);
                },
                getLineTokens: function (e, t) {
                  return ye(this, re(e), t, !0);
                },
                getTokenTypeAt: function (e) {
                  e = ue(this.doc, e);
                  var t,
                    n = he(this, X(this.doc, e.line)),
                    r = 0,
                    i = (n.length - 1) / 2,
                    o = e.ch;
                  if (0 == o) t = n[2];
                  else
                    for (;;) {
                      var a = (r + i) >> 1;
                      if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                      else {
                        if (!(n[2 * a + 1] < o)) {
                          t = n[2 * a + 2];
                          break;
                        }
                        r = a + 1;
                      }
                    }
                  var s = t ? t.indexOf("overlay ") : -1;
                  return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
                },
                getModeAt: function (t) {
                  var n = this.doc.mode;
                  return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
                },
                getHelper: function (e, t) {
                  return this.getHelpers(e, t)[0];
                },
                getHelpers: function (e, t) {
                  var r = [];
                  if (!n.hasOwnProperty(t)) return r;
                  var i = n[t],
                    o = this.getModeAt(e);
                  if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
                  else if (o[t])
                    for (var a = 0; a < o[t].length; a++) {
                      var s = i[o[t][a]];
                      s && r.push(s);
                    }
                  else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                  for (var l = 0; l < i._global.length; l++) {
                    var c = i._global[l];
                    c.pred(o, this) && -1 == d(r, c.val) && r.push(c.val);
                  }
                  return r;
                },
                getStateAfter: function (e, t) {
                  var n = this.doc;
                  return pe(this, (e = ce(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
                },
                cursorCoords: function (e, t) {
                  var n = this.doc.sel.primary();
                  return Dt(this, null == e ? n.head : "object" == typeof e ? ue(this.doc, e) : e ? n.from() : n.to(), t || "page");
                },
                charCoords: function (e, t) {
                  return Ht(this, ue(this.doc, e), t || "page");
                },
                coordsChar: function (e, t) {
                  return zt(this, (e = Bt(this, e, t || "page")).left, e.top);
                },
                lineAtHeight: function (e, t) {
                  return (e = Bt(this, { top: e, left: 0 }, t || "page").top), ee(this.doc, e + this.display.viewOffset);
                },
                heightAtLine: function (e, t, n) {
                  var r,
                    i = !1;
                  if ("number" == typeof e) {
                    var o = this.doc.first + this.doc.size - 1;
                    e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)), (r = X(this.doc, e));
                  } else r = e;
                  return Rt(this, r, { top: 0, left: 0 }, t || "page", n || i).top + (i ? this.doc.height - Ke(r) : 0);
                },
                defaultTextHeight: function () {
                  return qt(this.display);
                },
                defaultCharWidth: function () {
                  return Gt(this.display);
                },
                getViewport: function () {
                  return { from: this.display.viewFrom, to: this.display.viewTo };
                },
                addWidget: function (e, t, n, r, i) {
                  var o,
                    a,
                    s = this.display,
                    l = (e = Dt(this, ue(this.doc, e))).bottom,
                    c = e.left;
                  if (
                    ((t.style.position = "absolute"),
                    t.setAttribute("cm-ignore-events", "true"),
                    this.display.input.setUneditable(t),
                    s.sizer.appendChild(t),
                    "over" == r)
                  )
                    l = e.top;
                  else if ("above" == r || "near" == r) {
                    var u = Math.max(s.wrapper.clientHeight, this.doc.height),
                      f = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                    ("above" == r || e.bottom + t.offsetHeight > u) && e.top > t.offsetHeight
                      ? (l = e.top - t.offsetHeight)
                      : e.bottom + t.offsetHeight <= u && (l = e.bottom),
                      c + t.offsetWidth > f && (c = f - t.offsetWidth);
                  }
                  (t.style.top = l + "px"),
                    (t.style.left = t.style.right = ""),
                    "right" == i
                      ? ((c = s.sizer.clientWidth - t.offsetWidth), (t.style.right = "0px"))
                      : ("left" == i ? (c = 0) : "middle" == i && (c = (s.sizer.clientWidth - t.offsetWidth) / 2),
                        (t.style.left = c + "px")),
                    n &&
                      (null != (a = kn((o = this), { left: c, top: l, right: c + t.offsetWidth, bottom: l + t.offsetHeight })).scrollTop &&
                        Ln(o, a.scrollTop),
                      null != a.scrollLeft && An(o, a.scrollLeft));
                },
                triggerOnKeyDown: jn(Ti),
                triggerOnKeyPress: jn(Oi),
                triggerOnKeyUp: Ai,
                triggerOnMouseDown: jn(Ni),
                setCommand: function (e, t) {
                  (this.usercommands[e] = t),
                    Ra[e] ||
                      (Ra[e] = function (t) {
                        var n = t.usercommands[e];
                        n ? n.apply(t, arguments) : console.log("cm: unable to find user command!");
                      });
                },
                execCommand: function (e) {
                  if (Ra.hasOwnProperty(e)) return Ra[e].call(null, this);
                },
                triggerElectric: jn(function (e) {
                  _i(this, e);
                }),
                findPosH: function (e, t, n, r) {
                  var i = 1;
                  t < 0 && ((i = -1), (t = -t));
                  for (var o = ue(this.doc, e), a = 0; a < t && !(o = qi(this.doc, o, i, n, r)).hitSide; ++a);
                  return o;
                },
                moveH: jn(function (e, t) {
                  var n = this;
                  this.extendSelectionsBy(function (r) {
                    return n.display.shift || n.doc.extend || r.empty()
                      ? qi(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                      : e < 0
                      ? r.from()
                      : r.to();
                  }, Bo);
                }),
                deleteH: jn(function (e, t) {
                  var n = this.doc.sel,
                    r = this.doc;
                  n.somethingSelected()
                    ? r.replaceSelection("", null, "+delete")
                    : vi(this, function (n) {
                        var i = qi(r, n.head, e, t, !1);
                        return e < 0 ? { from: i, to: n.head } : { from: n.head, to: i };
                      });
                }),
                findPosV: function (e, t, n, r) {
                  var i = 1,
                    o = r;
                  t < 0 && ((i = -1), (t = -t));
                  for (var a = ue(this.doc, e), s = 0; s < t; ++s) {
                    var l = Dt(this, a, "div");
                    if ((null == o ? (o = l.left) : (l.left = o), (a = Gi(this, l, i, n)).hitSide)) break;
                  }
                  return a;
                },
                moveV: jn(function (e, t) {
                  var n = this,
                    r = this.doc,
                    i = [],
                    o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                  if (
                    (r.extendSelectionsBy(function (a) {
                      if (o) return e < 0 ? a.from() : a.to();
                      var s = Dt(n, a.head, "div");
                      null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
                      var l = Gi(n, s, e, t);
                      return "page" == t && a == r.sel.primary() && wn(n, Ht(n, l, "div").top - s.top), l;
                    }, Bo),
                    i.length)
                  )
                    for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a];
                }),
                findWordAt: function (e) {
                  var t = X(this.doc, e.line).text,
                    n = e.ch,
                    r = e.ch;
                  if (t) {
                    var i = this.getHelper(e, "wordChars");
                    ("before" != e.sticky && r != t.length) || !n ? ++r : --n;
                    for (
                      var o = t.charAt(n),
                        a = k(o, i)
                          ? function (e) {
                              return k(e, i);
                            }
                          : /\s/.test(o)
                          ? function (e) {
                              return /\s/.test(e);
                            }
                          : function (e) {
                              return !/\s/.test(e) && !k(e);
                            };
                      n > 0 && a(t.charAt(n - 1));

                    )
                      --n;
                    for (; r < t.length && a(t.charAt(r)); ) ++r;
                  }
                  return new ya(re(e.line, n), re(e.line, r));
                },
                toggleOverwrite: function (e) {
                  (null != e && e == this.state.overwrite) ||
                    ((this.state.overwrite = !this.state.overwrite)
                      ? s(this.display.cursorDiv, "CodeMirror-overwrite")
                      : Mo(this.display.cursorDiv, "CodeMirror-overwrite"),
                    O(this, "overwriteToggle", this, this.state.overwrite));
                },
                hasFocus: function () {
                  return this.display.input.getField() == a();
                },
                isReadOnly: function () {
                  return !(!this.options.readOnly && !this.doc.cantEdit);
                },
                scrollTo: jn(function (e, t) {
                  xn(this, e, t);
                }),
                getScrollInfo: function () {
                  var e = this.display.scroller;
                  return {
                    left: e.scrollLeft,
                    top: e.scrollTop,
                    height: e.scrollHeight - yt(this) - this.display.barHeight,
                    width: e.scrollWidth - yt(this) - this.display.barWidth,
                    clientHeight: kt(this),
                    clientWidth: bt(this)
                  };
                },
                scrollIntoView: jn(function (e, t) {
                  null == e
                    ? ((e = { from: this.doc.sel.primary().head, to: null }), null == t && (t = this.options.cursorScrollMargin))
                    : "number" == typeof e
                    ? (e = { from: re(e, 0), to: null })
                    : null == e.from && (e = { from: e, to: null }),
                    e.to || (e.to = e.from),
                    (e.margin = t || 0),
                    null != e.from.line
                      ? (function (e, t) {
                          Sn(e), (e.curOp.scrollToPos = t);
                        })(this, e)
                      : Mn(this, e.from, e.to, e.margin);
                }),
                setSize: jn(function (e, t) {
                  var n = this,
                    r = function (e) {
                      return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
                    };
                  null != e && (this.display.wrapper.style.width = r(e)),
                    null != t && (this.display.wrapper.style.height = r(t)),
                    this.options.lineWrapping && Ot(this);
                  var i = this.display.viewFrom;
                  this.doc.iter(i, this.display.viewTo, function (e) {
                    if (e.widgets)
                      for (var t = 0; t < e.widgets.length; t++)
                        if (e.widgets[t].noHScroll) {
                          nn(n, i, "widget");
                          break;
                        }
                    ++i;
                  }),
                    (this.curOp.forceUpdate = !0),
                    O(this, "refresh", this);
                }),
                operation: function (e) {
                  return zn(this, e);
                },
                startOperation: function () {
                  return In(this);
                },
                endOperation: function () {
                  return Rn(this);
                },
                refresh: jn(function () {
                  var e = this.display.cachedTextHeight;
                  tn(this),
                    (this.curOp.forceUpdate = !0),
                    Nt(this),
                    xn(this, this.doc.scrollLeft, this.doc.scrollTop),
                    Xn(this.display),
                    (null == e || Math.abs(e - qt(this.display)) > 0.5 || this.options.lineWrapping) && Qt(this),
                    O(this, "refresh", this);
                }),
                swapDoc: jn(function (e) {
                  var t = this.doc;
                  return (
                    (t.cm = null),
                    this.state.selectingText && this.state.selectingText(),
                    vr(this, e),
                    Nt(this),
                    this.display.input.reset(),
                    xn(this, e.scrollLeft, e.scrollTop),
                    (this.curOp.forceScroll = !0),
                    et(this, "swapDoc", this, t),
                    t
                  );
                }),
                phrase: function (e) {
                  var t = this.options.phrases;
                  return t && {}.hasOwnProperty.call(t, e) ? t[e] : e;
                },
                getInputField: function () {
                  return this.display.input.getField();
                },
                getWrapperElement: function () {
                  return this.display.wrapper;
                },
                getScrollerElement: function () {
                  return this.display.scroller;
                },
                getGutterElement: function () {
                  return this.display.gutters;
                }
              }),
                I(e),
                (e.registerHelper = function (t, r, i) {
                  n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }), (n[t][r] = i);
                }),
                (e.registerGlobalHelper = function (t, r, i, o) {
                  e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o });
                });
            })(Fi);
          var Va = "iter insert remove copy getEditor constructor".split(" ");
          for (var $a in Sa.prototype)
            Sa.prototype.hasOwnProperty($a) &&
              d(Va, $a) < 0 &&
              (Fi.prototype[$a] = (function (e) {
                return function () {
                  return e.apply(this.doc, arguments);
                };
              })(Sa.prototype[$a]));
          return (
            I(Sa),
            (Fi.inputStyles = { textarea: Ua, contenteditable: _a }),
            (Fi.defineMode = function (e) {
              Fi.defaults.mode || "null" == e || (Fi.defaults.mode = e), j.apply(this, arguments);
            }),
            (Fi.defineMIME = function (e, t) {
              Xo[e] = t;
            }),
            Fi.defineMode("null", function () {
              return {
                token: function (e) {
                  return e.skipToEnd();
                }
              };
            }),
            Fi.defineMIME("text/plain", "null"),
            (Fi.defineExtension = function (e, t) {
              Fi.prototype[e] = t;
            }),
            (Fi.defineDocExtension = function (e, t) {
              Sa.prototype[e] = t;
            }),
            (Fi.fromTextArea = function (e, t) {
              function n() {
                e.value = l.getValue();
              }
              if (
                (((t = t ? u(t) : {}).value = e.value),
                !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
                !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
                null == t.autofocus)
              ) {
                var r = a();
                t.autofocus = r == e || (null != e.getAttribute("autofocus") && r == document.body);
              }
              var i;
              if (e.form && (jo(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                var o = e.form;
                i = o.submit;
                try {
                  var s = (o.submit = function () {
                    n(), (o.submit = i), o.submit(), (o.submit = s);
                  });
                } catch (e) {}
              }
              (t.finishInit = function (r) {
                (r.save = n),
                  (r.getTextArea = function () {
                    return e;
                  }),
                  (r.toTextArea = function () {
                    (r.toTextArea = isNaN),
                      n(),
                      e.parentNode.removeChild(r.getWrapperElement()),
                      (e.style.display = ""),
                      e.form &&
                        (A(e.form, "submit", n), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i));
                  });
              }),
                (e.style.display = "none");
              var l = Fi(function (t) {
                return e.parentNode.insertBefore(t, e.nextSibling);
              }, t);
              return l;
            }),
            (function (e) {
              (e.off = A),
                (e.on = jo),
                (e.wheelEventPixels = ir),
                (e.Doc = Sa),
                (e.splitLines = Uo),
                (e.countColumn = f),
                (e.findColumn = h),
                (e.isWordChar = b),
                (e.Pass = Po),
                (e.signal = O),
                (e.Line = ra),
                (e.changeEnd = lr),
                (e.scrollbarModel = da),
                (e.Pos = re),
                (e.cmpPos = ie),
                (e.modes = Go),
                (e.mimeModes = Xo),
                (e.resolveMode = _),
                (e.getMode = U),
                (e.modeExtensions = Yo),
                (e.extendMode = V),
                (e.copyState = $),
                (e.startState = G),
                (e.innerMode = q),
                (e.commands = Ra),
                (e.keyMap = Ea),
                (e.keyName = mi),
                (e.isModifierKey = hi),
                (e.lookupKey = di),
                (e.normalizeKeyMap = fi),
                (e.StringStream = Jo),
                (e.SharedTextMarker = Ca),
                (e.TextMarker = wa),
                (e.LineWidget = ba),
                (e.e_preventDefault = R),
                (e.e_stopPropagation = B),
                (e.e_stop = D),
                (e.addClass = s),
                (e.contains = o),
                (e.rmClass = Mo),
                (e.keyNames = Ta);
            })(Fi),
            (Fi.version = "5.58.1"),
            Fi
          );
        })();
      },
      4633: (e, t, n) => {
        const r = n(4538);
        var i = {
          jump: function (e) {
            var t = prompt(r.I18N.getMessage("Jump_to_line"), "");
            t && !isNaN(Number(t - 1)) && e.setCursor(Number(t - 1)), e.focus();
          },
          macro: function (e) {
            var t = prompt(r.I18N.getMessage("Insert_constructor") + ":", "");
            t && e.replaceSelection("function " + t + "() {\n  \n}\n\n" + t + ".prototype = {\n  \n};\n");
          },
          reindentall: function (e) {
            for (var t, n = 0; n <= e.lineCount(); n++)
              ((t = e.getLineTokens(n)) && t[0] && "quasi" == t[0].state.lastType) || e.indentLine(n, "smart");
          }
        };
        for (var o in i) i.hasOwnProperty(o) && (r.commands[o] = i[o]);
        e.exports = function (e, t, n, i, o) {
          r.I18N = r.I18N || { getMessage: n };
          var a = document.createElement("div");
          a.setAttribute("class", "CodeMirror-editor"),
            a.setAttribute("style", "font-size:" + ((t.fontSize || 100) / 100).toFixed(2) + "em;"),
            e.appendChild(a);
          var s = {
            nextTheme: function () {
              if (t.themeOptions) {
                var e = t.themeOptions.all,
                  n = e.indexOf(t.theme || "default") || 0;
                ++n >= e.length && (n = 0);
                var r = (t.theme = e[n]);
                c(r), t.themeOptions.onChange && t.themeOptions.onChange(r);
              }
            }
          };
          t.theme = t.theme || "default";
          var l = new r(a, t);
          (this.mirror = l),
            Object.keys(s).forEach(function (e) {
              l.setCommand(e, s[e]);
            }),
            i &&
              Object.keys(i).forEach(function (e) {
                l.setCommand(e, i[e]);
              }),
            o &&
              Object.keys(o).forEach(function (e) {
                l.on(e, o[e]);
              }),
            (this.refresh = function () {
              l.refresh.call(l);
            });
          var c = function (e) {
            "default" == e && -1 != (document.documentElement.getAttribute("class") || "").split(" ").indexOf("dark") && (e = "monokai"),
              l.setOption("theme", e);
          };
          c(t.theme);
        };
      },
      4825: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0;
            return t;
          }
          function n(e, t) {
            for (var n, r = !1; null != (n = e.next()); ) {
              if (r && "/" == n) {
                t.tokenize = null;
                break;
              }
              r = "*" == n;
            }
            return ["comment", "comment"];
          }
          e.defineMode("css", function (t, n) {
            function r(e, t) {
              return (p = t), e;
            }
            function i(e, t) {
              var n = e.next();
              if (v[n]) {
                var i = v[n](e, t);
                if (!1 !== i) return i;
              }
              return "@" == n
                ? (e.eatWhile(/[\w\\\-]/), r("def", e.current()))
                : "=" == n || (("~" == n || "|" == n) && e.eat("="))
                ? r(null, "compare")
                : '"' == n || "'" == n
                ? ((t.tokenize = o(n)), t.tokenize(e, t))
                : "#" == n
                ? (e.eatWhile(/[\w\\\-]/), r("atom", "hash"))
                : "!" == n
                ? (e.match(/^\s*\w*/), r("keyword", "important"))
                : /\d/.test(n) || ("." == n && e.eat(/\d/))
                ? (e.eatWhile(/[\w.%]/), r("number", "unit"))
                : "-" !== n
                ? /[,+>*\/]/.test(n)
                  ? r(null, "select-op")
                  : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i)
                  ? r("qualifier", "qualifier")
                  : /[:;{}\[\]\(\)]/.test(n)
                  ? r(null, n)
                  : e.match(/[\w-.]+(?=\()/)
                  ? (/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase()) && (t.tokenize = a),
                    r("variable callee", "variable"))
                  : /[\w\\\-]/.test(n)
                  ? (e.eatWhile(/[\w\\\-]/), r("property", "word"))
                  : r(null, null)
                : /[\d.]/.test(e.peek())
                ? (e.eatWhile(/[\w.%]/), r("number", "unit"))
                : e.match(/^-[\w\\\-]*/)
                ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? r("variable-2", "variable-definition") : r("variable-2", "variable"))
                : e.match(/^\w+-/)
                ? r("meta", "meta")
                : void 0;
            }
            function o(e) {
              return function (t, n) {
                for (var i, o = !1; null != (i = t.next()); ) {
                  if (i == e && !o) {
                    ")" == e && t.backUp(1);
                    break;
                  }
                  o = !o && "\\" == i;
                }
                return (i == e || (!o && ")" != e)) && (n.tokenize = null), r("string", "string");
              };
            }
            function a(e, t) {
              return e.next(), e.match(/\s*[\"\')]/, !1) ? (t.tokenize = null) : (t.tokenize = o(")")), r(null, "(");
            }
            function s(e, t, n) {
              (this.type = e), (this.indent = t), (this.prev = n);
            }
            function l(e, t, n, r) {
              return (e.context = new s(n, t.indentation() + (!1 === r ? 0 : g), e.context)), n;
            }
            function c(e) {
              return e.context.prev && (e.context = e.context.prev), e.context.type;
            }
            function u(e, t, n) {
              return P[n.context.type](e, t, n);
            }
            function f(e, t, n, r) {
              for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
              return u(e, t, n);
            }
            function d(e) {
              var t = e.current().toLowerCase();
              m = T.hasOwnProperty(t) ? "atom" : L.hasOwnProperty(t) ? "keyword" : "variable";
            }
            var h = n.inline;
            n.propertyKeywords || (n = e.resolveMode("text/css"));
            var p,
              m,
              g = t.indentUnit,
              v = n.tokenHooks,
              y = n.documentTypes || {},
              b = n.mediaTypes || {},
              k = n.mediaFeatures || {},
              w = n.mediaValueKeywords || {},
              C = n.propertyKeywords || {},
              x = n.nonStandardPropertyKeywords || {},
              S = n.fontProperties || {},
              M = n.counterDescriptors || {},
              L = n.colorKeywords || {},
              T = n.valueKeywords || {},
              A = n.allowNested,
              O = n.lineComment,
              N = !0 === n.supportsAtComponent,
              E = !1 !== t.highlightNonStandardPropertyKeywords,
              P = {
                top: function (e, t, n) {
                  if ("{" == e) return l(n, t, "block");
                  if ("}" == e && n.context.prev) return c(n);
                  if (N && /@component/i.test(e)) return l(n, t, "atComponentBlock");
                  if (/^@(-moz-)?document$/i.test(e)) return l(n, t, "documentTypes");
                  if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) return l(n, t, "atBlock");
                  if (/^@(font-face|counter-style)/i.test(e)) return (n.stateArg = e), "restricted_atBlock_before";
                  if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) return "keyframes";
                  if (e && "@" == e.charAt(0)) return l(n, t, "at");
                  if ("hash" == e) m = "builtin";
                  else if ("word" == e) m = "tag";
                  else {
                    if ("variable-definition" == e) return "maybeprop";
                    if ("interpolation" == e) return l(n, t, "interpolation");
                    if (":" == e) return "pseudo";
                    if (A && "(" == e) return l(n, t, "parens");
                  }
                  return n.context.type;
                },
                block: function (e, t, n) {
                  if ("word" == e) {
                    var r = t.current().toLowerCase();
                    return C.hasOwnProperty(r)
                      ? ((m = "property"), "maybeprop")
                      : x.hasOwnProperty(r)
                      ? ((m = E ? "string-2" : "property"), "maybeprop")
                      : A
                      ? ((m = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag"), "block")
                      : ((m += " error"), "maybeprop");
                  }
                  return "meta" == e ? "block" : A || ("hash" != e && "qualifier" != e) ? P.top(e, t, n) : ((m = "error"), "block");
                },
                maybeprop: function (e, t, n) {
                  return ":" == e ? l(n, t, "prop") : u(e, t, n);
                },
                prop: function (e, t, n) {
                  if (";" == e) return c(n);
                  if ("{" == e && A) return l(n, t, "propBlock");
                  if ("}" == e || "{" == e) return f(e, t, n);
                  if ("(" == e) return l(n, t, "parens");
                  if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                    if ("word" == e) d(t);
                    else if ("interpolation" == e) return l(n, t, "interpolation");
                  } else m += " error";
                  return "prop";
                },
                propBlock: function (e, t, n) {
                  return "}" == e ? c(n) : "word" == e ? ((m = "property"), "maybeprop") : n.context.type;
                },
                parens: function (e, t, n) {
                  return "{" == e || "}" == e
                    ? f(e, t, n)
                    : ")" == e
                    ? c(n)
                    : "(" == e
                    ? l(n, t, "parens")
                    : "interpolation" == e
                    ? l(n, t, "interpolation")
                    : ("word" == e && d(t), "parens");
                },
                pseudo: function (e, t, n) {
                  return "meta" == e ? "pseudo" : "word" == e ? ((m = "variable-3"), n.context.type) : u(e, t, n);
                },
                documentTypes: function (e, t, n) {
                  return "word" == e && y.hasOwnProperty(t.current()) ? ((m = "tag"), n.context.type) : P.atBlock(e, t, n);
                },
                atBlock: function (e, t, n) {
                  if ("(" == e) return l(n, t, "atBlock_parens");
                  if ("}" == e || ";" == e) return f(e, t, n);
                  if ("{" == e) return c(n) && l(n, t, A ? "block" : "top");
                  if ("interpolation" == e) return l(n, t, "interpolation");
                  if ("word" == e) {
                    var r = t.current().toLowerCase();
                    m =
                      "only" == r || "not" == r || "and" == r || "or" == r
                        ? "keyword"
                        : b.hasOwnProperty(r)
                        ? "attribute"
                        : k.hasOwnProperty(r)
                        ? "property"
                        : w.hasOwnProperty(r)
                        ? "keyword"
                        : C.hasOwnProperty(r)
                        ? "property"
                        : x.hasOwnProperty(r)
                        ? E
                          ? "string-2"
                          : "property"
                        : T.hasOwnProperty(r)
                        ? "atom"
                        : L.hasOwnProperty(r)
                        ? "keyword"
                        : "error";
                  }
                  return n.context.type;
                },
                atComponentBlock: function (e, t, n) {
                  return "}" == e
                    ? f(e, t, n)
                    : "{" == e
                    ? c(n) && l(n, t, A ? "block" : "top", !1)
                    : ("word" == e && (m = "error"), n.context.type);
                },
                atBlock_parens: function (e, t, n) {
                  return ")" == e ? c(n) : "{" == e || "}" == e ? f(e, t, n, 2) : P.atBlock(e, t, n);
                },
                restricted_atBlock_before: function (e, t, n) {
                  return "{" == e
                    ? l(n, t, "restricted_atBlock")
                    : "word" == e && "@counter-style" == n.stateArg
                    ? ((m = "variable"), "restricted_atBlock_before")
                    : u(e, t, n);
                },
                restricted_atBlock: function (e, t, n) {
                  return "}" == e
                    ? ((n.stateArg = null), c(n))
                    : "word" == e
                    ? ((m =
                        ("@font-face" == n.stateArg && !S.hasOwnProperty(t.current().toLowerCase())) ||
                        ("@counter-style" == n.stateArg && !M.hasOwnProperty(t.current().toLowerCase()))
                          ? "error"
                          : "property"),
                      "maybeprop")
                    : "restricted_atBlock";
                },
                keyframes: function (e, t, n) {
                  return "word" == e ? ((m = "variable"), "keyframes") : "{" == e ? l(n, t, "top") : u(e, t, n);
                },
                at: function (e, t, n) {
                  return ";" == e
                    ? c(n)
                    : "{" == e || "}" == e
                    ? f(e, t, n)
                    : ("word" == e ? (m = "tag") : "hash" == e && (m = "builtin"), "at");
                },
                interpolation: function (e, t, n) {
                  return "}" == e
                    ? c(n)
                    : "{" == e || ";" == e
                    ? f(e, t, n)
                    : ("word" == e ? (m = "variable") : "variable" != e && "(" != e && ")" != e && (m = "error"), "interpolation");
                }
              };
            return {
              startState: function (e) {
                return { tokenize: null, state: h ? "block" : "top", stateArg: null, context: new s(h ? "block" : "top", e || 0, null) };
              },
              token: function (e, t) {
                if (!t.tokenize && e.eatSpace()) return null;
                var n = (t.tokenize || i)(e, t);
                return n && "object" == typeof n && ((p = n[1]), (n = n[0])), (m = n), "comment" != p && (t.state = P[t.state](p, e, t)), m;
              },
              indent: function (e, t) {
                var n = e.context,
                  r = t && t.charAt(0),
                  i = n.indent;
                return (
                  "prop" != n.type || ("}" != r && ")" != r) || (n = n.prev),
                  n.prev &&
                    ("}" != r || ("block" != n.type && "top" != n.type && "interpolation" != n.type && "restricted_atBlock" != n.type)
                      ? ((")" != r || ("parens" != n.type && "atBlock_parens" != n.type)) &&
                          ("{" != r || ("at" != n.type && "atBlock" != n.type))) ||
                        (i = Math.max(0, n.indent - g))
                      : (i = (n = n.prev).indent)),
                  i
                );
              },
              electricChars: "}",
              blockCommentStart: "/*",
              blockCommentEnd: "*/",
              blockCommentContinue: " * ",
              lineComment: O,
              fold: "brace"
            };
          });
          var r = ["domain", "regexp", "url", "url-prefix"],
            i = t(r),
            o = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
            a = t(o),
            s = [
              "width",
              "min-width",
              "max-width",
              "height",
              "min-height",
              "max-height",
              "device-width",
              "min-device-width",
              "max-device-width",
              "device-height",
              "min-device-height",
              "max-device-height",
              "aspect-ratio",
              "min-aspect-ratio",
              "max-aspect-ratio",
              "device-aspect-ratio",
              "min-device-aspect-ratio",
              "max-device-aspect-ratio",
              "color",
              "min-color",
              "max-color",
              "color-index",
              "min-color-index",
              "max-color-index",
              "monochrome",
              "min-monochrome",
              "max-monochrome",
              "resolution",
              "min-resolution",
              "max-resolution",
              "scan",
              "grid",
              "orientation",
              "device-pixel-ratio",
              "min-device-pixel-ratio",
              "max-device-pixel-ratio",
              "pointer",
              "any-pointer",
              "hover",
              "any-hover",
              "prefers-color-scheme"
            ],
            l = t(s),
            c = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive", "dark", "light"],
            u = t(c),
            f = [
              "align-content",
              "align-items",
              "align-self",
              "alignment-adjust",
              "alignment-baseline",
              "all",
              "anchor-point",
              "animation",
              "animation-delay",
              "animation-direction",
              "animation-duration",
              "animation-fill-mode",
              "animation-iteration-count",
              "animation-name",
              "animation-play-state",
              "animation-timing-function",
              "appearance",
              "azimuth",
              "backdrop-filter",
              "backface-visibility",
              "background",
              "background-attachment",
              "background-blend-mode",
              "background-clip",
              "background-color",
              "background-image",
              "background-origin",
              "background-position",
              "background-position-x",
              "background-position-y",
              "background-repeat",
              "background-size",
              "baseline-shift",
              "binding",
              "bleed",
              "block-size",
              "bookmark-label",
              "bookmark-level",
              "bookmark-state",
              "bookmark-target",
              "border",
              "border-bottom",
              "border-bottom-color",
              "border-bottom-left-radius",
              "border-bottom-right-radius",
              "border-bottom-style",
              "border-bottom-width",
              "border-collapse",
              "border-color",
              "border-image",
              "border-image-outset",
              "border-image-repeat",
              "border-image-slice",
              "border-image-source",
              "border-image-width",
              "border-left",
              "border-left-color",
              "border-left-style",
              "border-left-width",
              "border-radius",
              "border-right",
              "border-right-color",
              "border-right-style",
              "border-right-width",
              "border-spacing",
              "border-style",
              "border-top",
              "border-top-color",
              "border-top-left-radius",
              "border-top-right-radius",
              "border-top-style",
              "border-top-width",
              "border-width",
              "bottom",
              "box-decoration-break",
              "box-shadow",
              "box-sizing",
              "break-after",
              "break-before",
              "break-inside",
              "caption-side",
              "caret-color",
              "clear",
              "clip",
              "color",
              "color-profile",
              "column-count",
              "column-fill",
              "column-gap",
              "column-rule",
              "column-rule-color",
              "column-rule-style",
              "column-rule-width",
              "column-span",
              "column-width",
              "columns",
              "contain",
              "content",
              "counter-increment",
              "counter-reset",
              "crop",
              "cue",
              "cue-after",
              "cue-before",
              "cursor",
              "direction",
              "display",
              "dominant-baseline",
              "drop-initial-after-adjust",
              "drop-initial-after-align",
              "drop-initial-before-adjust",
              "drop-initial-before-align",
              "drop-initial-size",
              "drop-initial-value",
              "elevation",
              "empty-cells",
              "fit",
              "fit-position",
              "flex",
              "flex-basis",
              "flex-direction",
              "flex-flow",
              "flex-grow",
              "flex-shrink",
              "flex-wrap",
              "float",
              "float-offset",
              "flow-from",
              "flow-into",
              "font",
              "font-family",
              "font-feature-settings",
              "font-kerning",
              "font-language-override",
              "font-optical-sizing",
              "font-size",
              "font-size-adjust",
              "font-stretch",
              "font-style",
              "font-synthesis",
              "font-variant",
              "font-variant-alternates",
              "font-variant-caps",
              "font-variant-east-asian",
              "font-variant-ligatures",
              "font-variant-numeric",
              "font-variant-position",
              "font-variation-settings",
              "font-weight",
              "gap",
              "grid",
              "grid-area",
              "grid-auto-columns",
              "grid-auto-flow",
              "grid-auto-rows",
              "grid-column",
              "grid-column-end",
              "grid-column-gap",
              "grid-column-start",
              "grid-gap",
              "grid-row",
              "grid-row-end",
              "grid-row-gap",
              "grid-row-start",
              "grid-template",
              "grid-template-areas",
              "grid-template-columns",
              "grid-template-rows",
              "hanging-punctuation",
              "height",
              "hyphens",
              "icon",
              "image-orientation",
              "image-rendering",
              "image-resolution",
              "inline-box-align",
              "inset",
              "inset-block",
              "inset-block-end",
              "inset-block-start",
              "inset-inline",
              "inset-inline-end",
              "inset-inline-start",
              "isolation",
              "justify-content",
              "justify-items",
              "justify-self",
              "left",
              "letter-spacing",
              "line-break",
              "line-height",
              "line-height-step",
              "line-stacking",
              "line-stacking-ruby",
              "line-stacking-shift",
              "line-stacking-strategy",
              "list-style",
              "list-style-image",
              "list-style-position",
              "list-style-type",
              "margin",
              "margin-bottom",
              "margin-left",
              "margin-right",
              "margin-top",
              "marks",
              "marquee-direction",
              "marquee-loop",
              "marquee-play-count",
              "marquee-speed",
              "marquee-style",
              "mask-clip",
              "mask-composite",
              "mask-image",
              "mask-mode",
              "mask-origin",
              "mask-position",
              "mask-repeat",
              "mask-size",
              "mask-type",
              "max-block-size",
              "max-height",
              "max-inline-size",
              "max-width",
              "min-block-size",
              "min-height",
              "min-inline-size",
              "min-width",
              "mix-blend-mode",
              "move-to",
              "nav-down",
              "nav-index",
              "nav-left",
              "nav-right",
              "nav-up",
              "object-fit",
              "object-position",
              "offset",
              "offset-anchor",
              "offset-distance",
              "offset-path",
              "offset-position",
              "offset-rotate",
              "opacity",
              "order",
              "orphans",
              "outline",
              "outline-color",
              "outline-offset",
              "outline-style",
              "outline-width",
              "overflow",
              "overflow-style",
              "overflow-wrap",
              "overflow-x",
              "overflow-y",
              "padding",
              "padding-bottom",
              "padding-left",
              "padding-right",
              "padding-top",
              "page",
              "page-break-after",
              "page-break-before",
              "page-break-inside",
              "page-policy",
              "pause",
              "pause-after",
              "pause-before",
              "perspective",
              "perspective-origin",
              "pitch",
              "pitch-range",
              "place-content",
              "place-items",
              "place-self",
              "play-during",
              "position",
              "presentation-level",
              "punctuation-trim",
              "quotes",
              "region-break-after",
              "region-break-before",
              "region-break-inside",
              "region-fragment",
              "rendering-intent",
              "resize",
              "rest",
              "rest-after",
              "rest-before",
              "richness",
              "right",
              "rotate",
              "rotation",
              "rotation-point",
              "row-gap",
              "ruby-align",
              "ruby-overhang",
              "ruby-position",
              "ruby-span",
              "scale",
              "scroll-behavior",
              "scroll-margin",
              "scroll-margin-block",
              "scroll-margin-block-end",
              "scroll-margin-block-start",
              "scroll-margin-bottom",
              "scroll-margin-inline",
              "scroll-margin-inline-end",
              "scroll-margin-inline-start",
              "scroll-margin-left",
              "scroll-margin-right",
              "scroll-margin-top",
              "scroll-padding",
              "scroll-padding-block",
              "scroll-padding-block-end",
              "scroll-padding-block-start",
              "scroll-padding-bottom",
              "scroll-padding-inline",
              "scroll-padding-inline-end",
              "scroll-padding-inline-start",
              "scroll-padding-left",
              "scroll-padding-right",
              "scroll-padding-top",
              "scroll-snap-align",
              "scroll-snap-type",
              "shape-image-threshold",
              "shape-inside",
              "shape-margin",
              "shape-outside",
              "size",
              "speak",
              "speak-as",
              "speak-header",
              "speak-numeral",
              "speak-punctuation",
              "speech-rate",
              "stress",
              "string-set",
              "tab-size",
              "table-layout",
              "target",
              "target-name",
              "target-new",
              "target-position",
              "text-align",
              "text-align-last",
              "text-combine-upright",
              "text-decoration",
              "text-decoration-color",
              "text-decoration-line",
              "text-decoration-skip",
              "text-decoration-skip-ink",
              "text-decoration-style",
              "text-emphasis",
              "text-emphasis-color",
              "text-emphasis-position",
              "text-emphasis-style",
              "text-height",
              "text-indent",
              "text-justify",
              "text-orientation",
              "text-outline",
              "text-overflow",
              "text-rendering",
              "text-shadow",
              "text-size-adjust",
              "text-space-collapse",
              "text-transform",
              "text-underline-position",
              "text-wrap",
              "top",
              "touch-action",
              "transform",
              "transform-origin",
              "transform-style",
              "transition",
              "transition-delay",
              "transition-duration",
              "transition-property",
              "transition-timing-function",
              "translate",
              "unicode-bidi",
              "user-select",
              "vertical-align",
              "visibility",
              "voice-balance",
              "voice-duration",
              "voice-family",
              "voice-pitch",
              "voice-range",
              "voice-rate",
              "voice-stress",
              "voice-volume",
              "volume",
              "white-space",
              "widows",
              "width",
              "will-change",
              "word-break",
              "word-spacing",
              "word-wrap",
              "writing-mode",
              "z-index",
              "clip-path",
              "clip-rule",
              "mask",
              "enable-background",
              "filter",
              "flood-color",
              "flood-opacity",
              "lighting-color",
              "stop-color",
              "stop-opacity",
              "pointer-events",
              "color-interpolation",
              "color-interpolation-filters",
              "color-rendering",
              "fill",
              "fill-opacity",
              "fill-rule",
              "image-rendering",
              "marker",
              "marker-end",
              "marker-mid",
              "marker-start",
              "paint-order",
              "shape-rendering",
              "stroke",
              "stroke-dasharray",
              "stroke-dashoffset",
              "stroke-linecap",
              "stroke-linejoin",
              "stroke-miterlimit",
              "stroke-opacity",
              "stroke-width",
              "text-rendering",
              "baseline-shift",
              "dominant-baseline",
              "glyph-orientation-horizontal",
              "glyph-orientation-vertical",
              "text-anchor",
              "writing-mode"
            ],
            d = t(f),
            h = [
              "border-block",
              "border-block-color",
              "border-block-end",
              "border-block-end-color",
              "border-block-end-style",
              "border-block-end-width",
              "border-block-start",
              "border-block-start-color",
              "border-block-start-style",
              "border-block-start-width",
              "border-block-style",
              "border-block-width",
              "border-inline",
              "border-inline-color",
              "border-inline-end",
              "border-inline-end-color",
              "border-inline-end-style",
              "border-inline-end-width",
              "border-inline-start",
              "border-inline-start-color",
              "border-inline-start-style",
              "border-inline-start-width",
              "border-inline-style",
              "border-inline-width",
              "margin-block",
              "margin-block-end",
              "margin-block-start",
              "margin-inline",
              "margin-inline-end",
              "margin-inline-start",
              "padding-block",
              "padding-block-end",
              "padding-block-start",
              "padding-inline",
              "padding-inline-end",
              "padding-inline-start",
              "scroll-snap-stop",
              "scrollbar-3d-light-color",
              "scrollbar-arrow-color",
              "scrollbar-base-color",
              "scrollbar-dark-shadow-color",
              "scrollbar-face-color",
              "scrollbar-highlight-color",
              "scrollbar-shadow-color",
              "scrollbar-track-color",
              "searchfield-cancel-button",
              "searchfield-decoration",
              "searchfield-results-button",
              "searchfield-results-decoration",
              "shape-inside",
              "zoom"
            ],
            p = t(h),
            m = t([
              "font-display",
              "font-family",
              "src",
              "unicode-range",
              "font-variant",
              "font-feature-settings",
              "font-stretch",
              "font-weight",
              "font-style"
            ]),
            g = t(["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"]),
            v = [
              "aliceblue",
              "antiquewhite",
              "aqua",
              "aquamarine",
              "azure",
              "beige",
              "bisque",
              "black",
              "blanchedalmond",
              "blue",
              "blueviolet",
              "brown",
              "burlywood",
              "cadetblue",
              "chartreuse",
              "chocolate",
              "coral",
              "cornflowerblue",
              "cornsilk",
              "crimson",
              "cyan",
              "darkblue",
              "darkcyan",
              "darkgoldenrod",
              "darkgray",
              "darkgreen",
              "darkkhaki",
              "darkmagenta",
              "darkolivegreen",
              "darkorange",
              "darkorchid",
              "darkred",
              "darksalmon",
              "darkseagreen",
              "darkslateblue",
              "darkslategray",
              "darkturquoise",
              "darkviolet",
              "deeppink",
              "deepskyblue",
              "dimgray",
              "dodgerblue",
              "firebrick",
              "floralwhite",
              "forestgreen",
              "fuchsia",
              "gainsboro",
              "ghostwhite",
              "gold",
              "goldenrod",
              "gray",
              "grey",
              "green",
              "greenyellow",
              "honeydew",
              "hotpink",
              "indianred",
              "indigo",
              "ivory",
              "khaki",
              "lavender",
              "lavenderblush",
              "lawngreen",
              "lemonchiffon",
              "lightblue",
              "lightcoral",
              "lightcyan",
              "lightgoldenrodyellow",
              "lightgray",
              "lightgreen",
              "lightpink",
              "lightsalmon",
              "lightseagreen",
              "lightskyblue",
              "lightslategray",
              "lightsteelblue",
              "lightyellow",
              "lime",
              "limegreen",
              "linen",
              "magenta",
              "maroon",
              "mediumaquamarine",
              "mediumblue",
              "mediumorchid",
              "mediumpurple",
              "mediumseagreen",
              "mediumslateblue",
              "mediumspringgreen",
              "mediumturquoise",
              "mediumvioletred",
              "midnightblue",
              "mintcream",
              "mistyrose",
              "moccasin",
              "navajowhite",
              "navy",
              "oldlace",
              "olive",
              "olivedrab",
              "orange",
              "orangered",
              "orchid",
              "palegoldenrod",
              "palegreen",
              "paleturquoise",
              "palevioletred",
              "papayawhip",
              "peachpuff",
              "peru",
              "pink",
              "plum",
              "powderblue",
              "purple",
              "rebeccapurple",
              "red",
              "rosybrown",
              "royalblue",
              "saddlebrown",
              "salmon",
              "sandybrown",
              "seagreen",
              "seashell",
              "sienna",
              "silver",
              "skyblue",
              "slateblue",
              "slategray",
              "snow",
              "springgreen",
              "steelblue",
              "tan",
              "teal",
              "thistle",
              "tomato",
              "turquoise",
              "violet",
              "wheat",
              "white",
              "whitesmoke",
              "yellow",
              "yellowgreen"
            ],
            y = t(v),
            b = [
              "above",
              "absolute",
              "activeborder",
              "additive",
              "activecaption",
              "afar",
              "after-white-space",
              "ahead",
              "alias",
              "all",
              "all-scroll",
              "alphabetic",
              "alternate",
              "always",
              "amharic",
              "amharic-abegede",
              "antialiased",
              "appworkspace",
              "arabic-indic",
              "armenian",
              "asterisks",
              "attr",
              "auto",
              "auto-flow",
              "avoid",
              "avoid-column",
              "avoid-page",
              "avoid-region",
              "axis-pan",
              "background",
              "backwards",
              "baseline",
              "below",
              "bidi-override",
              "binary",
              "bengali",
              "blink",
              "block",
              "block-axis",
              "bold",
              "bolder",
              "border",
              "border-box",
              "both",
              "bottom",
              "break",
              "break-all",
              "break-word",
              "bullets",
              "button",
              "button-bevel",
              "buttonface",
              "buttonhighlight",
              "buttonshadow",
              "buttontext",
              "calc",
              "cambodian",
              "capitalize",
              "caps-lock-indicator",
              "caption",
              "captiontext",
              "caret",
              "cell",
              "center",
              "checkbox",
              "circle",
              "cjk-decimal",
              "cjk-earthly-branch",
              "cjk-heavenly-stem",
              "cjk-ideographic",
              "clear",
              "clip",
              "close-quote",
              "col-resize",
              "collapse",
              "color",
              "color-burn",
              "color-dodge",
              "column",
              "column-reverse",
              "compact",
              "condensed",
              "contain",
              "content",
              "contents",
              "content-box",
              "context-menu",
              "continuous",
              "copy",
              "counter",
              "counters",
              "cover",
              "crop",
              "cross",
              "crosshair",
              "currentcolor",
              "cursive",
              "cyclic",
              "darken",
              "dashed",
              "decimal",
              "decimal-leading-zero",
              "default",
              "default-button",
              "dense",
              "destination-atop",
              "destination-in",
              "destination-out",
              "destination-over",
              "devanagari",
              "difference",
              "disc",
              "discard",
              "disclosure-closed",
              "disclosure-open",
              "document",
              "dot-dash",
              "dot-dot-dash",
              "dotted",
              "double",
              "down",
              "e-resize",
              "ease",
              "ease-in",
              "ease-in-out",
              "ease-out",
              "element",
              "ellipse",
              "ellipsis",
              "embed",
              "end",
              "ethiopic",
              "ethiopic-abegede",
              "ethiopic-abegede-am-et",
              "ethiopic-abegede-gez",
              "ethiopic-abegede-ti-er",
              "ethiopic-abegede-ti-et",
              "ethiopic-halehame-aa-er",
              "ethiopic-halehame-aa-et",
              "ethiopic-halehame-am-et",
              "ethiopic-halehame-gez",
              "ethiopic-halehame-om-et",
              "ethiopic-halehame-sid-et",
              "ethiopic-halehame-so-et",
              "ethiopic-halehame-ti-er",
              "ethiopic-halehame-ti-et",
              "ethiopic-halehame-tig",
              "ethiopic-numeric",
              "ew-resize",
              "exclusion",
              "expanded",
              "extends",
              "extra-condensed",
              "extra-expanded",
              "fantasy",
              "fast",
              "fill",
              "fill-box",
              "fixed",
              "flat",
              "flex",
              "flex-end",
              "flex-start",
              "footnotes",
              "forwards",
              "from",
              "geometricPrecision",
              "georgian",
              "graytext",
              "grid",
              "groove",
              "gujarati",
              "gurmukhi",
              "hand",
              "hangul",
              "hangul-consonant",
              "hard-light",
              "hebrew",
              "help",
              "hidden",
              "hide",
              "higher",
              "highlight",
              "highlighttext",
              "hiragana",
              "hiragana-iroha",
              "horizontal",
              "hsl",
              "hsla",
              "hue",
              "icon",
              "ignore",
              "inactiveborder",
              "inactivecaption",
              "inactivecaptiontext",
              "infinite",
              "infobackground",
              "infotext",
              "inherit",
              "initial",
              "inline",
              "inline-axis",
              "inline-block",
              "inline-flex",
              "inline-grid",
              "inline-table",
              "inset",
              "inside",
              "intrinsic",
              "invert",
              "italic",
              "japanese-formal",
              "japanese-informal",
              "justify",
              "kannada",
              "katakana",
              "katakana-iroha",
              "keep-all",
              "khmer",
              "korean-hangul-formal",
              "korean-hanja-formal",
              "korean-hanja-informal",
              "landscape",
              "lao",
              "large",
              "larger",
              "left",
              "level",
              "lighter",
              "lighten",
              "line-through",
              "linear",
              "linear-gradient",
              "lines",
              "list-item",
              "listbox",
              "listitem",
              "local",
              "logical",
              "loud",
              "lower",
              "lower-alpha",
              "lower-armenian",
              "lower-greek",
              "lower-hexadecimal",
              "lower-latin",
              "lower-norwegian",
              "lower-roman",
              "lowercase",
              "ltr",
              "luminosity",
              "malayalam",
              "manipulation",
              "match",
              "matrix",
              "matrix3d",
              "media-controls-background",
              "media-current-time-display",
              "media-fullscreen-button",
              "media-mute-button",
              "media-play-button",
              "media-return-to-realtime-button",
              "media-rewind-button",
              "media-seek-back-button",
              "media-seek-forward-button",
              "media-slider",
              "media-sliderthumb",
              "media-time-remaining-display",
              "media-volume-slider",
              "media-volume-slider-container",
              "media-volume-sliderthumb",
              "medium",
              "menu",
              "menulist",
              "menulist-button",
              "menulist-text",
              "menulist-textfield",
              "menutext",
              "message-box",
              "middle",
              "min-intrinsic",
              "mix",
              "mongolian",
              "monospace",
              "move",
              "multiple",
              "multiple_mask_images",
              "multiply",
              "myanmar",
              "n-resize",
              "narrower",
              "ne-resize",
              "nesw-resize",
              "no-close-quote",
              "no-drop",
              "no-open-quote",
              "no-repeat",
              "none",
              "normal",
              "not-allowed",
              "nowrap",
              "ns-resize",
              "numbers",
              "numeric",
              "nw-resize",
              "nwse-resize",
              "oblique",
              "octal",
              "opacity",
              "open-quote",
              "optimizeLegibility",
              "optimizeSpeed",
              "oriya",
              "oromo",
              "outset",
              "outside",
              "outside-shape",
              "overlay",
              "overline",
              "padding",
              "padding-box",
              "painted",
              "page",
              "paused",
              "persian",
              "perspective",
              "pinch-zoom",
              "plus-darker",
              "plus-lighter",
              "pointer",
              "polygon",
              "portrait",
              "pre",
              "pre-line",
              "pre-wrap",
              "preserve-3d",
              "progress",
              "push-button",
              "radial-gradient",
              "radio",
              "read-only",
              "read-write",
              "read-write-plaintext-only",
              "rectangle",
              "region",
              "relative",
              "repeat",
              "repeating-linear-gradient",
              "repeating-radial-gradient",
              "repeat-x",
              "repeat-y",
              "reset",
              "reverse",
              "rgb",
              "rgba",
              "ridge",
              "right",
              "rotate",
              "rotate3d",
              "rotateX",
              "rotateY",
              "rotateZ",
              "round",
              "row",
              "row-resize",
              "row-reverse",
              "rtl",
              "run-in",
              "running",
              "s-resize",
              "sans-serif",
              "saturation",
              "scale",
              "scale3d",
              "scaleX",
              "scaleY",
              "scaleZ",
              "screen",
              "scroll",
              "scrollbar",
              "scroll-position",
              "se-resize",
              "searchfield",
              "searchfield-cancel-button",
              "searchfield-decoration",
              "searchfield-results-button",
              "searchfield-results-decoration",
              "self-start",
              "self-end",
              "semi-condensed",
              "semi-expanded",
              "separate",
              "serif",
              "show",
              "sidama",
              "simp-chinese-formal",
              "simp-chinese-informal",
              "single",
              "skew",
              "skewX",
              "skewY",
              "skip-white-space",
              "slide",
              "slider-horizontal",
              "slider-vertical",
              "sliderthumb-horizontal",
              "sliderthumb-vertical",
              "slow",
              "small",
              "small-caps",
              "small-caption",
              "smaller",
              "soft-light",
              "solid",
              "somali",
              "source-atop",
              "source-in",
              "source-out",
              "source-over",
              "space",
              "space-around",
              "space-between",
              "space-evenly",
              "spell-out",
              "square",
              "square-button",
              "start",
              "static",
              "status-bar",
              "stretch",
              "stroke",
              "stroke-box",
              "sub",
              "subpixel-antialiased",
              "svg_masks",
              "super",
              "sw-resize",
              "symbolic",
              "symbols",
              "system-ui",
              "table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row",
              "table-row-group",
              "tamil",
              "telugu",
              "text",
              "text-bottom",
              "text-top",
              "textarea",
              "textfield",
              "thai",
              "thick",
              "thin",
              "threeddarkshadow",
              "threedface",
              "threedhighlight",
              "threedlightshadow",
              "threedshadow",
              "tibetan",
              "tigre",
              "tigrinya-er",
              "tigrinya-er-abegede",
              "tigrinya-et",
              "tigrinya-et-abegede",
              "to",
              "top",
              "trad-chinese-formal",
              "trad-chinese-informal",
              "transform",
              "translate",
              "translate3d",
              "translateX",
              "translateY",
              "translateZ",
              "transparent",
              "ultra-condensed",
              "ultra-expanded",
              "underline",
              "unidirectional-pan",
              "unset",
              "up",
              "upper-alpha",
              "upper-armenian",
              "upper-greek",
              "upper-hexadecimal",
              "upper-latin",
              "upper-norwegian",
              "upper-roman",
              "uppercase",
              "urdu",
              "url",
              "var",
              "vertical",
              "vertical-text",
              "view-box",
              "visible",
              "visibleFill",
              "visiblePainted",
              "visibleStroke",
              "visual",
              "w-resize",
              "wait",
              "wave",
              "wider",
              "window",
              "windowframe",
              "windowtext",
              "words",
              "wrap",
              "wrap-reverse",
              "x-large",
              "x-small",
              "xor",
              "xx-large",
              "xx-small"
            ],
            k = t(b),
            w = r.concat(o).concat(s).concat(c).concat(f).concat(h).concat(v).concat(b);
          e.registerHelper("hintWords", "css", w),
            e.defineMIME("text/css", {
              documentTypes: i,
              mediaTypes: a,
              mediaFeatures: l,
              mediaValueKeywords: u,
              propertyKeywords: d,
              nonStandardPropertyKeywords: p,
              fontProperties: m,
              counterDescriptors: g,
              colorKeywords: y,
              valueKeywords: k,
              tokenHooks: {
                "/": function (e, t) {
                  return !!e.eat("*") && ((t.tokenize = n), n(e, t));
                }
              },
              name: "css"
            }),
            e.defineMIME("text/x-scss", {
              mediaTypes: a,
              mediaFeatures: l,
              mediaValueKeywords: u,
              propertyKeywords: d,
              nonStandardPropertyKeywords: p,
              colorKeywords: y,
              valueKeywords: k,
              fontProperties: m,
              allowNested: !0,
              lineComment: "//",
              tokenHooks: {
                "/": function (e, t) {
                  return e.eat("/")
                    ? (e.skipToEnd(), ["comment", "comment"])
                    : e.eat("*")
                    ? ((t.tokenize = n), n(e, t))
                    : ["operator", "operator"];
                },
                ":": function (e) {
                  return !!e.match(/\s*\{/, !1) && [null, null];
                },
                $: function (e) {
                  return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"];
                },
                "#": function (e) {
                  return !!e.eat("{") && [null, "interpolation"];
                }
              },
              name: "css",
              helperType: "scss"
            }),
            e.defineMIME("text/x-less", {
              mediaTypes: a,
              mediaFeatures: l,
              mediaValueKeywords: u,
              propertyKeywords: d,
              nonStandardPropertyKeywords: p,
              colorKeywords: y,
              valueKeywords: k,
              fontProperties: m,
              allowNested: !0,
              lineComment: "//",
              tokenHooks: {
                "/": function (e, t) {
                  return e.eat("/")
                    ? (e.skipToEnd(), ["comment", "comment"])
                    : e.eat("*")
                    ? ((t.tokenize = n), n(e, t))
                    : ["operator", "operator"];
                },
                "@": function (e) {
                  return e.eat("{")
                    ? [null, "interpolation"]
                    : !e.match(
                        /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                        !1
                      ) &&
                        (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]);
                },
                "&": function () {
                  return ["atom", "atom"];
                }
              },
              name: "css",
              helperType: "less"
            }),
            e.defineMIME("text/x-gss", {
              documentTypes: i,
              mediaTypes: a,
              mediaFeatures: l,
              propertyKeywords: d,
              nonStandardPropertyKeywords: p,
              fontProperties: m,
              counterDescriptors: g,
              colorKeywords: y,
              valueKeywords: k,
              supportsAtComponent: !0,
              tokenHooks: {
                "/": function (e, t) {
                  return !!e.eat("*") && ((t.tokenize = n), n(e, t));
                }
              },
              name: "css",
              helperType: "gss"
            });
        })(n(4538));
      },
      5299: (e, t, n) => {
        !(function (e) {
          "use strict";
          e.defineMode("diff", function () {
            var e = { "+": "positive", "-": "negative", "@": "meta" };
            return {
              token: function (t) {
                var n = t.string.search(/[\t ]+?$/);
                if (!t.sol() || 0 === n) return t.skipToEnd(), ("error " + (e[t.string.charAt(0)] || "")).replace(/ $/, "");
                var r = e[t.peek()] || t.skipToEnd();
                return -1 === n ? t.skipToEnd() : (t.pos = n), r;
              }
            };
          }),
            e.defineMIME("text/x-diff", "diff");
        })(n(4538));
      },
      8650: (e, t, n) => {
        !(function (e) {
          "use strict";
          function t(e, t) {
            return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i");
          }
          function n(e, t) {
            for (var n in e) for (var r = t[n] || (t[n] = []), i = e[n], o = i.length - 1; o >= 0; o--) r.unshift(i[o]);
          }
          var r = {
              script: [
                ["lang", /(javascript|babel)/i, "javascript"],
                ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
                ["type", /./, "text/plain"],
                [null, null, "javascript"]
              ],
              style: [
                ["lang", /^css$/i, "css"],
                ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
                ["type", /./, "text/plain"],
                [null, null, "css"]
              ]
            },
            i = {};
          e.defineMode(
            "htmlmixed",
            function (o, a) {
              function s(n, r) {
                var a,
                  u = l.token(n, r.htmlState),
                  f = /\btag\b/.test(u);
                if (
                  f &&
                  !/[<>\s\/]/.test(n.current()) &&
                  (a = r.htmlState.tagName && r.htmlState.tagName.toLowerCase()) &&
                  c.hasOwnProperty(a)
                )
                  r.inTag = a + " ";
                else if (r.inTag && f && />$/.test(n.current())) {
                  var d = /^([\S]+) (.*)/.exec(r.inTag);
                  r.inTag = null;
                  var h =
                      ">" == n.current() &&
                      (function (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var r = e[n];
                          if (
                            !r[0] ||
                            r[1].test(
                              ((o = t),
                              (a = r[0]),
                              (s = void 0),
                              (s = o.match(
                                (function (e) {
                                  return i[e] || (i[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"));
                                })(a)
                              )),
                              s ? /^\s*(.*?)\s*$/.exec(s[2])[1] : "")
                            )
                          )
                            return r[2];
                        }
                        var o, a, s;
                      })(c[d[1]], d[2]),
                    p = e.getMode(o, h),
                    m = t(d[1], !0),
                    g = t(d[1], !1);
                  (r.token = function (e, t) {
                    return e.match(m, !1)
                      ? ((t.token = s), (t.localState = t.localMode = null), null)
                      : (function (e, t, n) {
                          var r = e.current(),
                            i = r.search(t);
                          return (
                            i > -1 ? e.backUp(r.length - i) : r.match(/<\/?$/) && (e.backUp(r.length), e.match(t, !1) || e.match(r)), n
                          );
                        })(e, g, t.localMode.token(e, t.localState));
                  }),
                    (r.localMode = p),
                    (r.localState = e.startState(p, l.indent(r.htmlState, "", "")));
                } else r.inTag && ((r.inTag += n.current()), n.eol() && (r.inTag += " "));
                return u;
              }
              var l = e.getMode(o, {
                  name: "xml",
                  htmlMode: !0,
                  multilineTagIndentFactor: a.multilineTagIndentFactor,
                  multilineTagIndentPastTag: a.multilineTagIndentPastTag
                }),
                c = {},
                u = a && a.tags,
                f = a && a.scriptTypes;
              if ((n(r, c), u && n(u, c), f)) for (var d = f.length - 1; d >= 0; d--) c.script.unshift(["type", f[d].matches, f[d].mode]);
              return {
                startState: function () {
                  return { token: s, inTag: null, localMode: null, localState: null, htmlState: e.startState(l) };
                },
                copyState: function (t) {
                  var n;
                  return (
                    t.localState && (n = e.copyState(t.localMode, t.localState)),
                    { token: t.token, inTag: t.inTag, localMode: t.localMode, localState: n, htmlState: e.copyState(l, t.htmlState) }
                  );
                },
                token: function (e, t) {
                  return t.token(e, t);
                },
                indent: function (t, n, r) {
                  return !t.localMode || /^\s*<\//.test(n)
                    ? l.indent(t.htmlState, n, r)
                    : t.localMode.indent
                    ? t.localMode.indent(t.localState, n, r)
                    : e.Pass;
                },
                innerMode: function (e) {
                  return { state: e.localState || e.htmlState, mode: e.localMode || l };
                }
              };
            },
            "xml",
            "javascript",
            "css"
          ),
            e.defineMIME("text/html", "htmlmixed");
        })(n(4538), n(7055), n(9521), n(4825));
      },
      9521: (e, t, n) => {
        !(function (e) {
          "use strict";
          e.defineMode("javascript", function (t, n) {
            function r(e, t, n) {
              return (Be = e), (He = n), t;
            }
            function i(e, t) {
              var n,
                s = e.next();
              if ('"' == s || "'" == s)
                return (
                  (t.tokenize =
                    ((n = s),
                    function (e, t) {
                      var o,
                        a = !1;
                      if (We && "@" == e.peek() && e.match(Ve)) return (t.tokenize = i), r("jsonld-keyword", "meta");
                      for (; null != (o = e.next()) && (o != n || a); ) a = !a && "\\" == o;
                      return a || (t.tokenize = i), r("string", "string");
                    })),
                  t.tokenize(e, t)
                );
              if ("." == s && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return r("number", "number");
              if ("." == s && e.match("..")) return r("spread", "meta");
              if (/[\[\]{}\(\),;\:\.]/.test(s)) return r(s);
              if ("=" == s && e.eat(">")) return r("=>", "operator");
              if ("0" == s && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return r("number", "number");
              if (/\d/.test(s)) return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), r("number", "number");
              if ("/" == s)
                return e.eat("*")
                  ? ((t.tokenize = o), o(e, t))
                  : e.eat("/")
                  ? (e.skipToEnd(), r("comment", "comment"))
                  : Re(e, t, 1)
                  ? ((function (e) {
                      for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                        if (!n) {
                          if ("/" == t && !r) return;
                          "[" == t ? (r = !0) : r && "]" == t && (r = !1);
                        }
                        n = !n && "\\" == t;
                      }
                    })(e),
                    e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                    r("regexp", "string-2"))
                  : (e.eat("="), r("operator", "operator", e.current()));
              if ("`" == s) return (t.tokenize = a), a(e, t);
              if ("#" == s && "!" == e.peek()) return e.skipToEnd(), r("meta", "meta");
              if ("#" == s && e.eatWhile(je)) return r("variable", "property");
              if (("<" == s && e.match("!--")) || ("-" == s && e.match("->") && !/\S/.test(e.string.slice(0, e.start))))
                return e.skipToEnd(), r("comment", "comment");
              if (Ue.test(s))
                return (
                  (">" == s && t.lexical && ">" == t.lexical.type) ||
                    (e.eat("=") ? ("!" != s && "=" != s) || e.eat("=") : /[<>*+\-|&?]/.test(s) && (e.eat(s), ">" == s && e.eat(s))),
                  "?" == s && e.eat(".") ? r(".") : r("operator", "operator", e.current())
                );
              if (je.test(s)) {
                e.eatWhile(je);
                var l = e.current();
                if ("." != t.lastType) {
                  if (_e.propertyIsEnumerable(l)) {
                    var c = _e[l];
                    return r(c.type, c.style, l);
                  }
                  if ("async" == l && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)) return r("async", "keyword", l);
                }
                return r("variable", "variable", l);
              }
            }
            function o(e, t) {
              for (var n, o = !1; (n = e.next()); ) {
                if ("/" == n && o) {
                  t.tokenize = i;
                  break;
                }
                o = "*" == n;
              }
              return r("comment", "comment");
            }
            function a(e, t) {
              for (var n, o = !1; null != (n = e.next()); ) {
                if (!o && ("`" == n || ("$" == n && e.eat("{")))) {
                  t.tokenize = i;
                  break;
                }
                o = !o && "\\" == n;
              }
              return r("quasi", "string-2", e.current());
            }
            function s(e, t) {
              t.fatArrowAt && (t.fatArrowAt = null);
              var n = e.string.indexOf("=>", e.start);
              if (!(n < 0)) {
                if (Ke) {
                  var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                  r && (n = r.index);
                }
                for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                  var s = e.string.charAt(a),
                    l = $e.indexOf(s);
                  if (l >= 0 && l < 3) {
                    if (!i) {
                      ++a;
                      break;
                    }
                    if (0 == --i) {
                      "(" == s && (o = !0);
                      break;
                    }
                  } else if (l >= 3 && l < 6) ++i;
                  else if (je.test(s)) o = !0;
                  else if (/["'\/`]/.test(s))
                    for (; ; --a) {
                      if (0 == a) return;
                      if (e.string.charAt(a - 1) == s && "\\" != e.string.charAt(a - 2)) {
                        a--;
                        break;
                      }
                    }
                  else if (o && !i) {
                    ++a;
                    break;
                  }
                }
                o && !i && (t.fatArrowAt = a);
              }
            }
            function l(e, t, n, r, i, o) {
              (this.indented = e), (this.column = t), (this.type = n), (this.prev = i), (this.info = o), null != r && (this.align = r);
            }
            function c(e, t) {
              for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
              for (var r = e.context; r; r = r.prev) for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
            }
            function u() {
              for (var e = arguments.length - 1; e >= 0; e--) Ge.cc.push(arguments[e]);
            }
            function f() {
              return u.apply(null, arguments), !0;
            }
            function d(e, t) {
              for (var n = t; n; n = n.next) if (n.name == e) return !0;
              return !1;
            }
            function h(e, t) {
              var r = Ge.state;
              if (((Ge.marked = "function" == t ? "deffunc" : "argument" == t ? "defarg" : "def"), r.context))
                if ("var" == r.lexical.info && r.context && r.context.block) {
                  var i = p(e, r.context);
                  if (null != i) return void (r.context = i);
                } else if (!d(e, r.localVars)) return void (r.localVars = new v(e, r.localVars));
              n.globalVars && !d(e, r.globalVars) && (r.globalVars = new v(e, r.globalVars));
            }
            function p(e, t) {
              if (t) {
                if (t.block) {
                  var n = p(e, t.prev);
                  return n ? (n == t.prev ? t : new g(n, t.vars, !0)) : null;
                }
                return d(e, t.vars) ? t : new g(t.prev, new v(e, t.vars), !1);
              }
              return null;
            }
            function m(e) {
              return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e;
            }
            function g(e, t, n) {
              (this.prev = e), (this.vars = t), (this.block = n);
            }
            function v(e, t) {
              (this.name = e), (this.next = t);
            }
            function y() {
              (Ge.state.context = new g(Ge.state.context, Ge.state.localVars, !1)), (Ge.state.localVars = Xe);
            }
            function b() {
              (Ge.state.context = new g(Ge.state.context, Ge.state.localVars, !0)), (Ge.state.localVars = null);
            }
            function k() {
              (Ge.state.localVars = Ge.state.context.vars), (Ge.state.context = Ge.state.context.prev);
            }
            function w(e, t) {
              var n = function () {
                var n = Ge.state,
                  r = n.indented;
                if ("stat" == n.lexical.type) r = n.lexical.indented;
                else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                n.lexical = new l(r, Ge.stream.column(), e, null, n.lexical, t);
              };
              return (n.lex = !0), n;
            }
            function C() {
              var e = Ge.state;
              e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), (e.lexical = e.lexical.prev));
            }
            function x(e) {
              return function t(n) {
                return n == e ? f() : ";" == e || "}" == n || ")" == n || "]" == n ? u() : f(t);
              };
            }
            function S(e, t) {
              return "var" == e
                ? f(w("vardef", t), oe, x(";"), C)
                : "keyword a" == e
                ? f(w("form"), A, S, C)
                : "keyword b" == e
                ? f(w("form"), S, C)
                : "keyword d" == e
                ? Ge.stream.match(/^\s*$/, !1)
                  ? f()
                  : f(w("stat"), N, x(";"), C)
                : "debugger" == e
                ? f(x(";"))
                : "{" == e
                ? f(w("}"), b, $, C, k)
                : ";" == e
                ? f()
                : "if" == e
                ? ("else" == Ge.state.lexical.info && Ge.state.cc[Ge.state.cc.length - 1] == C && Ge.state.cc.pop()(),
                  f(w("form"), A, S, C, fe))
                : "function" == e
                ? f(me)
                : "for" == e
                ? f(w("form"), de, S, C)
                : "class" == e || (Ke && "interface" == t)
                ? ((Ge.marked = "keyword"), f(w("form", "class" == e ? e : t), ke, C))
                : "variable" == e
                ? Ke && "declare" == t
                  ? ((Ge.marked = "keyword"), f(S))
                  : Ke && ("module" == t || "enum" == t || "type" == t) && Ge.stream.match(/^\s*\w/, !1)
                  ? ((Ge.marked = "keyword"),
                    "enum" == t ? f(Pe) : "type" == t ? f(ve, x("operator"), J, x(";")) : f(w("form"), ae, x("{"), w("}"), $, C, C))
                  : Ke && "namespace" == t
                  ? ((Ge.marked = "keyword"), f(w("form"), L, S, C))
                  : Ke && "abstract" == t
                  ? ((Ge.marked = "keyword"), f(S))
                  : f(w("stat"), W)
                : "switch" == e
                ? f(w("form"), A, x("{"), w("}", "switch"), b, $, C, C, k)
                : "case" == e
                ? f(L, x(":"))
                : "default" == e
                ? f(x(":"))
                : "catch" == e
                ? f(w("form"), y, M, S, C, k)
                : "export" == e
                ? f(w("stat"), Se, C)
                : "import" == e
                ? f(w("stat"), Le, C)
                : "async" == e
                ? f(S)
                : "@" == t
                ? f(L, S)
                : u(w("stat"), L, x(";"), C);
            }
            function M(e) {
              if ("(" == e) return f(ye, x(")"));
            }
            function L(e, t) {
              return O(e, t, !1);
            }
            function T(e, t) {
              return O(e, t, !0);
            }
            function A(e) {
              return "(" != e ? u() : f(w(")"), N, x(")"), C);
            }
            function O(e, t, n) {
              if (Ge.state.fatArrowAt == Ge.stream.start) {
                var r = n ? H : B;
                if ("(" == e) return f(y, w(")"), U(ye, ")"), C, x("=>"), r, k);
                if ("variable" == e) return u(y, ae, x("=>"), r, k);
              }
              var i = n ? P : E;
              return qe.hasOwnProperty(e)
                ? f(i)
                : "function" == e
                ? f(me, i)
                : "class" == e || (Ke && "interface" == t)
                ? ((Ge.marked = "keyword"), f(w("form"), be, C))
                : "keyword c" == e || "async" == e
                ? f(n ? T : L)
                : "(" == e
                ? f(w(")"), N, x(")"), C, i)
                : "operator" == e || "spread" == e
                ? f(n ? T : L)
                : "[" == e
                ? f(w("]"), Ee, C, i)
                : "{" == e
                ? V(K, "}", null, i)
                : "quasi" == e
                ? u(I, i)
                : "new" == e
                ? f(
                    (function (e) {
                      return function (t) {
                        return "." == t ? f(e ? F : D) : "variable" == t && Ke ? f(ne, e ? P : E) : u(e ? T : L);
                      };
                    })(n)
                  )
                : "import" == e
                ? f(L)
                : f();
            }
            function N(e) {
              return e.match(/[;\}\)\],]/) ? u() : u(L);
            }
            function E(e, t) {
              return "," == e ? f(N) : P(e, t, !1);
            }
            function P(e, t, n) {
              var r = 0 == n ? E : P,
                i = 0 == n ? L : T;
              return "=>" == e
                ? f(y, n ? H : B, k)
                : "operator" == e
                ? /\+\+|--/.test(t) || (Ke && "!" == t)
                  ? f(r)
                  : Ke && "<" == t && Ge.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                  ? f(w(">"), U(J, ">"), C, r)
                  : "?" == t
                  ? f(L, x(":"), i)
                  : f(i)
                : "quasi" == e
                ? u(I, r)
                : ";" != e
                ? "(" == e
                  ? V(T, ")", "call", r)
                  : "." == e
                  ? f(z, r)
                  : "[" == e
                  ? f(w("]"), N, x("]"), C, r)
                  : Ke && "as" == t
                  ? ((Ge.marked = "keyword"), f(J, r))
                  : "regexp" == e
                  ? ((Ge.state.lastType = Ge.marked = "operator"), Ge.stream.backUp(Ge.stream.pos - Ge.stream.start - 1), f(i))
                  : void 0
                : void 0;
            }
            function I(e, t) {
              return "quasi" != e ? u() : "${" != t.slice(t.length - 2) ? f(I) : f(L, R);
            }
            function R(e) {
              if ("}" == e) return (Ge.marked = "string-2"), (Ge.state.tokenize = a), f(I);
            }
            function B(e) {
              return s(Ge.stream, Ge.state), u("{" == e ? S : L);
            }
            function H(e) {
              return s(Ge.stream, Ge.state), u("{" == e ? S : T);
            }
            function D(e, t) {
              if ("target" == t) return (Ge.marked = "keyword"), f(E);
            }
            function F(e, t) {
              if ("target" == t) return (Ge.marked = "keyword"), f(P);
            }
            function W(e) {
              return ":" == e ? f(C, S) : u(E, x(";"), C);
            }
            function z(e) {
              if ("variable" == e) return (Ge.marked = "property"), f();
            }
            function K(e, t) {
              return "async" == e
                ? ((Ge.marked = "property"), f(K))
                : "variable" == e || "keyword" == Ge.style
                ? ((Ge.marked = "property"),
                  "get" == t || "set" == t
                    ? f(j)
                    : (Ke &&
                        Ge.state.fatArrowAt == Ge.stream.start &&
                        (n = Ge.stream.match(/^\s*:\s*/, !1)) &&
                        (Ge.state.fatArrowAt = Ge.stream.pos + n[0].length),
                      f(_)))
                : "number" == e || "string" == e
                ? ((Ge.marked = We ? "property" : Ge.style + " property"), f(_))
                : "jsonld-keyword" == e
                ? f(_)
                : Ke && m(t)
                ? ((Ge.marked = "keyword"), f(K))
                : "[" == e
                ? f(L, q, x("]"), _)
                : "spread" == e
                ? f(T, _)
                : "*" == t
                ? ((Ge.marked = "keyword"), f(K))
                : ":" == e
                ? u(_)
                : void 0;
              var n;
            }
            function j(e) {
              return "variable" != e ? u(_) : ((Ge.marked = "property"), f(me));
            }
            function _(e) {
              return ":" == e ? f(T) : "(" == e ? u(me) : void 0;
            }
            function U(e, t, n) {
              function r(i, o) {
                if (n ? n.indexOf(i) > -1 : "," == i) {
                  var a = Ge.state.lexical;
                  return (
                    "call" == a.info && (a.pos = (a.pos || 0) + 1),
                    f(function (n, r) {
                      return n == t || r == t ? u() : u(e);
                    }, r)
                  );
                }
                return i == t || o == t ? f() : n && n.indexOf(";") > -1 ? u(e) : f(x(t));
              }
              return function (n, i) {
                return n == t || i == t ? f() : u(e, r);
              };
            }
            function V(e, t, n) {
              for (var r = 3; r < arguments.length; r++) Ge.cc.push(arguments[r]);
              return f(w(t, n), U(e, t), C);
            }
            function $(e) {
              return "}" == e ? f() : u(S, $);
            }
            function q(e, t) {
              if (Ke) {
                if (":" == e) return f(J);
                if ("?" == t) return f(q);
              }
            }
            function G(e, t) {
              if (Ke && (":" == e || "in" == t)) return f(J);
            }
            function X(e) {
              if (Ke && ":" == e) return Ge.stream.match(/^\s*\w+\s+is\b/, !1) ? f(L, Y, J) : f(J);
            }
            function Y(e, t) {
              if ("is" == t) return (Ge.marked = "keyword"), f();
            }
            function J(e, t) {
              return "keyof" == t || "typeof" == t || "infer" == t
                ? ((Ge.marked = "keyword"), f("typeof" == t ? T : J))
                : "variable" == e || "void" == t
                ? ((Ge.marked = "type"), f(te))
                : "|" == t || "&" == t
                ? f(J)
                : "string" == e || "number" == e || "atom" == e
                ? f(te)
                : "[" == e
                ? f(w("]"), U(J, "]", ","), C, te)
                : "{" == e
                ? f(w("}"), U(Z, "}", ",;"), C, te)
                : "(" == e
                ? f(U(ee, ")"), Q, te)
                : "<" == e
                ? f(U(J, ">"), J)
                : void 0;
            }
            function Q(e) {
              if ("=>" == e) return f(J);
            }
            function Z(e, t) {
              return "variable" == e || "keyword" == Ge.style
                ? ((Ge.marked = "property"), f(Z))
                : "?" == t || "number" == e || "string" == e
                ? f(Z)
                : ":" == e
                ? f(J)
                : "[" == e
                ? f(x("variable"), G, x("]"), Z)
                : "(" == e
                ? u(ge, Z)
                : void 0;
            }
            function ee(e, t) {
              return ("variable" == e && Ge.stream.match(/^\s*[?:]/, !1)) || "?" == t
                ? f(ee)
                : ":" == e
                ? f(J)
                : "spread" == e
                ? f(ee)
                : u(J);
            }
            function te(e, t) {
              return "<" == t
                ? f(w(">"), U(J, ">"), C, te)
                : "|" == t || "." == e || "&" == t
                ? f(J)
                : "[" == e
                ? f(J, x("]"), te)
                : "extends" == t || "implements" == t
                ? ((Ge.marked = "keyword"), f(J))
                : "?" == t
                ? f(J, x(":"), J)
                : void 0;
            }
            function ne(e, t) {
              if ("<" == t) return f(w(">"), U(J, ">"), C, te);
            }
            function re() {
              return u(J, ie);
            }
            function ie(e, t) {
              if ("=" == t) return f(J);
            }
            function oe(e, t) {
              return "enum" == t ? ((Ge.marked = "keyword"), f(Pe)) : u(ae, q, ce, ue);
            }
            function ae(e, t) {
              return Ke && m(t)
                ? ((Ge.marked = "keyword"), f(ae))
                : "function" == e
                ? (h(t, e), f())
                : "variable" == e
                ? (h(
                    t,
                    ")" != Ge.state.lexical.type || (Ge.state.lexical.prev && "form" == Ge.state.lexical.prev.type) ? null : "argument"
                  ),
                  f())
                : "spread" == e
                ? f(ae)
                : "[" == e
                ? V(le, "]")
                : "{" == e
                ? V(se, "}")
                : void 0;
            }
            function se(e, t) {
              return "variable" != e || Ge.stream.match(/^\s*:/, !1)
                ? ("variable" == e && (Ge.marked = "property"),
                  "spread" == e ? f(ae) : "}" == e ? u() : "[" == e ? f(L, x("]"), x(":"), se) : f(x(":"), ae, ce))
                : (h(t), f(ce));
            }
            function le() {
              return u(ae, ce);
            }
            function ce(e, t) {
              if ("=" == t) return f(T);
            }
            function ue(e) {
              if ("," == e) return f(oe);
            }
            function fe(e, t) {
              if ("keyword b" == e && "else" == t) return f(w("form", "else"), S, C);
            }
            function de(e, t) {
              return "await" == t ? f(de) : "(" == e ? f(w(")"), he, C) : void 0;
            }
            function he(e) {
              return "var" == e ? f(oe, pe) : "variable" == e ? f(pe) : u(pe);
            }
            function pe(e, t) {
              return ")" == e ? f() : ";" == e ? f(pe) : "in" == t || "of" == t ? ((Ge.marked = "keyword"), f(L, pe)) : u(L, pe);
            }
            function me(e, t) {
              return "*" == t
                ? ((Ge.marked = "keyword"), f(me))
                : "variable" == e
                ? (h(t, "function"), f(me))
                : "(" == e
                ? f(y, w(")"), U(ye, ")"), C, X, S, k)
                : Ke && "<" == t
                ? f(w(">"), U(re, ">"), C, me)
                : void 0;
            }
            function ge(e, t) {
              return "*" == t
                ? ((Ge.marked = "keyword"), f(ge))
                : "variable" == e
                ? (h(t), f(ge))
                : "(" == e
                ? f(y, w(")"), U(ye, ")"), C, X, k)
                : Ke && "<" == t
                ? f(w(">"), U(re, ">"), C, ge)
                : void 0;
            }
            function ve(e, t) {
              return "keyword" == e || "variable" == e ? ((Ge.marked = "type"), f(ve)) : "<" == t ? f(w(">"), U(re, ">"), C) : void 0;
            }
            function ye(e, t) {
              return (
                "@" == t && f(L, ye),
                "spread" == e ? f(ye) : Ke && m(t) ? ((Ge.marked = "keyword"), f(ye)) : Ke && "this" == e ? f(q, ce) : u(ae, q, ce)
              );
            }
            function be(e, t) {
              return "variable" == e ? ke(e, t) : we(e, t);
            }
            function ke(e, t) {
              if ("variable" == e) return h(t), f(we);
            }
            function we(e, t) {
              return "<" == t
                ? f(w(">"), U(re, ">"), C, we)
                : "extends" == t || "implements" == t || (Ke && "," == e)
                ? ("implements" == t && (Ge.marked = "keyword"), f(Ke ? J : L, we))
                : "{" == e
                ? f(w("}"), Ce, C)
                : void 0;
            }
            function Ce(e, t) {
              return "async" == e ||
                ("variable" == e &&
                  ("static" == t || "get" == t || "set" == t || (Ke && m(t))) &&
                  Ge.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
                ? ((Ge.marked = "keyword"), f(Ce))
                : "variable" == e || "keyword" == Ge.style
                ? ((Ge.marked = "property"), f(xe, Ce))
                : "number" == e || "string" == e
                ? f(xe, Ce)
                : "[" == e
                ? f(L, q, x("]"), xe, Ce)
                : "*" == t
                ? ((Ge.marked = "keyword"), f(Ce))
                : Ke && "(" == e
                ? u(ge, Ce)
                : ";" == e || "," == e
                ? f(Ce)
                : "}" == e
                ? f()
                : "@" == t
                ? f(L, Ce)
                : void 0;
            }
            function xe(e, t) {
              if ("?" == t) return f(xe);
              if (":" == e) return f(J, ce);
              if ("=" == t) return f(T);
              var n = Ge.state.lexical.prev;
              return u(n && "interface" == n.info ? ge : me);
            }
            function Se(e, t) {
              return "*" == t
                ? ((Ge.marked = "keyword"), f(Ne, x(";")))
                : "default" == t
                ? ((Ge.marked = "keyword"), f(L, x(";")))
                : "{" == e
                ? f(U(Me, "}"), Ne, x(";"))
                : u(S);
            }
            function Me(e, t) {
              return "as" == t ? ((Ge.marked = "keyword"), f(x("variable"))) : "variable" == e ? u(T, Me) : void 0;
            }
            function Le(e) {
              return "string" == e ? f() : "(" == e ? u(L) : u(Te, Ae, Ne);
            }
            function Te(e, t) {
              return "{" == e ? V(Te, "}") : ("variable" == e && h(t), "*" == t && (Ge.marked = "keyword"), f(Oe));
            }
            function Ae(e) {
              if ("," == e) return f(Te, Ae);
            }
            function Oe(e, t) {
              if ("as" == t) return (Ge.marked = "keyword"), f(Te);
            }
            function Ne(e, t) {
              if ("from" == t) return (Ge.marked = "keyword"), f(L);
            }
            function Ee(e) {
              return "]" == e ? f() : u(U(T, "]"));
            }
            function Pe() {
              return u(w("form"), ae, x("{"), w("}"), U(Ie, "}"), C, C);
            }
            function Ie() {
              return u(ae, ce);
            }
            function Re(e, t, n) {
              return (
                (t.tokenize == i && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)) ||
                ("quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
              );
            }
            var Be,
              He,
              De = t.indentUnit,
              Fe = n.statementIndent,
              We = n.jsonld,
              ze = n.json || We,
              Ke = n.typescript,
              je = n.wordCharacters || /[\w$\xa1-\uffff]/,
              _e = (function () {
                function e(e) {
                  return {
                    type: e,
                    style: "keyword"
                  };
                }
                var t = e("keyword a"),
                  n = e("keyword b"),
                  r = e("keyword c"),
                  i = e("keyword d"),
                  o = e("operator"),
                  a = { type: "atom", style: "atom" };
                return {
                  if: e("if"),
                  while: t,
                  with: t,
                  else: n,
                  do: n,
                  try: n,
                  finally: n,
                  return: i,
                  break: i,
                  continue: i,
                  new: e("new"),
                  delete: r,
                  void: r,
                  throw: r,
                  debugger: e("debugger"),
                  var: e("var"),
                  const: e("var"),
                  let: e("var"),
                  function: e("function"),
                  catch: e("catch"),
                  for: e("for"),
                  switch: e("switch"),
                  case: e("case"),
                  default: e("default"),
                  in: o,
                  typeof: o,
                  instanceof: o,
                  true: a,
                  false: a,
                  null: a,
                  undefined: a,
                  NaN: a,
                  Infinity: a,
                  this: e("this"),
                  class: e("class"),
                  super: e("atom"),
                  yield: r,
                  export: e("export"),
                  import: e("import"),
                  extends: r,
                  await: r
                };
              })(),
              Ue = /[+\-*&%=<>!?|~^@]/,
              Ve = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
              $e = "([{}])",
              qe = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, "jsonld-keyword": !0 },
              Ge = { state: null, column: null, marked: null, cc: null },
              Xe = new v("this", new v("arguments", null));
            return (
              (k.lex = !0),
              (C.lex = !0),
              {
                startState: function (e) {
                  var t = {
                    tokenize: i,
                    lastType: "sof",
                    cc: [],
                    lexical: new l((e || 0) - De, 0, "block", !1),
                    localVars: n.localVars,
                    context: n.localVars && new g(null, null, !1),
                    indented: e || 0
                  };
                  return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), t;
                },
                token: function (e, t) {
                  if (
                    (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), (t.indented = e.indentation()), s(e, t)),
                    t.tokenize != o && e.eatSpace())
                  )
                    return null;
                  var n = t.tokenize(e, t);
                  return "comment" == Be
                    ? n
                    : ((t.lastType = "operator" != Be || ("++" != He && "--" != He) ? Be : "incdec"),
                      (function (e, t, n, r, i) {
                        var o = e.cc;
                        for (
                          Ge.state = e,
                            Ge.stream = i,
                            Ge.marked = null,
                            Ge.cc = o,
                            Ge.style = t,
                            e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
                          ;

                        )
                          if ((o.length ? o.pop() : ze ? L : S)(n, r)) {
                            for (; o.length && o[o.length - 1].lex; ) o.pop()();
                            return Ge.marked ? Ge.marked : "variable" == n && c(e, r) ? "variable-2" : t;
                          }
                      })(t, n, Be, He, e));
                },
                indent: function (t, r) {
                  if (t.tokenize == o || t.tokenize == a) return e.Pass;
                  if (t.tokenize != i) return 0;
                  var s,
                    l = r && r.charAt(0),
                    c = t.lexical;
                  if (!/^\s*else\b/.test(r))
                    for (var u = t.cc.length - 1; u >= 0; --u) {
                      var f = t.cc[u];
                      if (f == C) c = c.prev;
                      else if (f != fe) break;
                    }
                  for (
                    ;
                    ("stat" == c.type || "form" == c.type) &&
                    ("}" == l || ((s = t.cc[t.cc.length - 1]) && (s == E || s == P) && !/^[,\.=+\-*:?[\(]/.test(r)));

                  )
                    c = c.prev;
                  Fe && ")" == c.type && "stat" == c.prev.type && (c = c.prev);
                  var d = c.type,
                    h = l == d;
                  return "vardef" == d
                    ? c.indented + ("operator" == t.lastType || "," == t.lastType ? c.info.length + 1 : 0)
                    : "form" == d && "{" == l
                    ? c.indented
                    : "form" == d
                    ? c.indented + De
                    : "stat" == d
                    ? c.indented +
                      ((function (e, t) {
                        return "operator" == e.lastType || "," == e.lastType || Ue.test(t.charAt(0)) || /[,.]/.test(t.charAt(0));
                      })(t, r)
                        ? Fe || De
                        : 0)
                    : "switch" != c.info || h || 0 == n.doubleIndentSwitch
                    ? c.align
                      ? c.column + (h ? 0 : 1)
                      : c.indented + (h ? 0 : De)
                    : c.indented + (/^(?:case|default)\b/.test(r) ? De : 2 * De);
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: ze ? null : "/*",
                blockCommentEnd: ze ? null : "*/",
                blockCommentContinue: ze ? null : " * ",
                lineComment: ze ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: ze ? "json" : "javascript",
                jsonldMode: We,
                jsonMode: ze,
                expressionAllowed: Re,
                skipExpression: function (e) {
                  var t = e.cc[e.cc.length - 1];
                  (t != L && t != T) || e.cc.pop();
                }
              }
            );
          }),
            e.registerHelper("wordChars", "javascript", /[\w$]/),
            e.defineMIME("text/javascript", "javascript"),
            e.defineMIME("text/ecmascript", "javascript"),
            e.defineMIME("application/javascript", "javascript"),
            e.defineMIME("application/x-javascript", "javascript"),
            e.defineMIME("application/ecmascript", "javascript"),
            e.defineMIME("application/json", { name: "javascript", json: !0 }),
            e.defineMIME("application/x-json", { name: "javascript", json: !0 }),
            e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
            e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
            e.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
        })(n(4538));
      },
      7055: (e, t, n) => {
        !(function (e) {
          "use strict";
          var t = {
              autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
                menuitem: !0
              },
              implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0
              },
              contextGrabbers: {
                dd: { dd: !0, dt: !0 },
                dt: { dd: !0, dt: !0 },
                li: { li: !0 },
                option: { option: !0, optgroup: !0 },
                optgroup: { optgroup: !0 },
                p: {
                  address: !0,
                  article: !0,
                  aside: !0,
                  blockquote: !0,
                  dir: !0,
                  div: !0,
                  dl: !0,
                  fieldset: !0,
                  footer: !0,
                  form: !0,
                  h1: !0,
                  h2: !0,
                  h3: !0,
                  h4: !0,
                  h5: !0,
                  h6: !0,
                  header: !0,
                  hgroup: !0,
                  hr: !0,
                  menu: !0,
                  nav: !0,
                  ol: !0,
                  p: !0,
                  pre: !0,
                  section: !0,
                  table: !0,
                  ul: !0
                },
                rp: { rp: !0, rt: !0 },
                rt: { rp: !0, rt: !0 },
                tbody: { tbody: !0, tfoot: !0 },
                td: { td: !0, th: !0 },
                tfoot: { tbody: !0 },
                th: { td: !0, th: !0 },
                thead: { tbody: !0, tfoot: !0 },
                tr: { tr: !0 }
              },
              doNotIndent: { pre: !0 },
              allowUnquoted: !0,
              allowMissing: !0,
              caseFold: !0
            },
            n = {
              autoSelfClosers: {},
              implicitlyClosed: {},
              contextGrabbers: {},
              doNotIndent: {},
              allowUnquoted: !1,
              allowMissing: !1,
              allowMissingTagName: !1,
              caseFold: !1
            };
          e.defineMode("xml", function (r, i) {
            function o(e, t) {
              function n(n) {
                return (t.tokenize = n), n(e, t);
              }
              var r = e.next();
              return "<" == r
                ? e.eat("!")
                  ? e.eat("[")
                    ? e.match("CDATA[")
                      ? n(s("atom", "]]>"))
                      : null
                    : e.match("--")
                    ? n(s("comment", "--\x3e"))
                    : e.match("DOCTYPE", !0, !0)
                    ? (e.eatWhile(/[\w\._\-]/), n(l(1)))
                    : null
                  : e.eat("?")
                  ? (e.eatWhile(/[\w\._\-]/), (t.tokenize = s("meta", "?>")), "meta")
                  : ((w = e.eat("/") ? "closeTag" : "openTag"), (t.tokenize = a), "tag bracket")
                : "&" == r
                ? (
                    e.eat("#")
                      ? e.eat("x")
                        ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
                        : e.eatWhile(/[\d]/) && e.eat(";")
                      : e.eatWhile(/[\w\.\-:]/) && e.eat(";")
                  )
                  ? "atom"
                  : "error"
                : (e.eatWhile(/[^&<]/), null);
            }
            function a(e, t) {
              var n,
                r,
                i = e.next();
              if (">" == i || ("/" == i && e.eat(">"))) return (t.tokenize = o), (w = ">" == i ? "endTag" : "selfcloseTag"), "tag bracket";
              if ("=" == i) return (w = "equals"), null;
              if ("<" == i) {
                (t.tokenize = o), (t.state = d), (t.tagName = t.tagStart = null);
                var s = t.tokenize(e, t);
                return s ? s + " tag error" : "tag error";
              }
              return /[\'\"]/.test(i)
                ? ((t.tokenize =
                    ((n = i),
                    (r = function (e, t) {
                      for (; !e.eol(); )
                        if (e.next() == n) {
                          t.tokenize = a;
                          break;
                        }
                      return "string";
                    }),
                    (r.isInAttribute = !0),
                    r)),
                  (t.stringStartCol = e.column()),
                  t.tokenize(e, t))
                : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
            }
            function s(e, t) {
              return function (n, r) {
                for (; !n.eol(); ) {
                  if (n.match(t)) {
                    r.tokenize = o;
                    break;
                  }
                  n.next();
                }
                return e;
              };
            }
            function l(e) {
              return function (t, n) {
                for (var r; null != (r = t.next()); ) {
                  if ("<" == r) return (n.tokenize = l(e + 1)), n.tokenize(t, n);
                  if (">" == r) {
                    if (1 == e) {
                      n.tokenize = o;
                      break;
                    }
                    return (n.tokenize = l(e - 1)), n.tokenize(t, n);
                  }
                }
                return "meta";
              };
            }
            function c(e, t, n) {
              (this.prev = e.context),
                (this.tagName = t),
                (this.indent = e.indented),
                (this.startOfLine = n),
                (S.doNotIndent.hasOwnProperty(t) || (e.context && e.context.noIndent)) && (this.noIndent = !0);
            }
            function u(e) {
              e.context && (e.context = e.context.prev);
            }
            function f(e, t) {
              for (var n; ; ) {
                if (!e.context) return;
                if (((n = e.context.tagName), !S.contextGrabbers.hasOwnProperty(n) || !S.contextGrabbers[n].hasOwnProperty(t))) return;
                u(e);
              }
            }
            function d(e, t, n) {
              return "openTag" == e ? ((n.tagStart = t.column()), h) : "closeTag" == e ? p : d;
            }
            function h(e, t, n) {
              return "word" == e
                ? ((n.tagName = t.current()), (C = "tag"), v)
                : S.allowMissingTagName && "endTag" == e
                ? ((C = "tag bracket"), v(e, 0, n))
                : ((C = "error"), h);
            }
            function p(e, t, n) {
              if ("word" == e) {
                var r = t.current();
                return (
                  n.context && n.context.tagName != r && S.implicitlyClosed.hasOwnProperty(n.context.tagName) && u(n),
                  (n.context && n.context.tagName == r) || !1 === S.matchClosing ? ((C = "tag"), m) : ((C = "tag error"), g)
                );
              }
              return S.allowMissingTagName && "endTag" == e ? ((C = "tag bracket"), m(e, 0, n)) : ((C = "error"), g);
            }
            function m(e, t, n) {
              return "endTag" != e ? ((C = "error"), m) : (u(n), d);
            }
            function g(e, t, n) {
              return (C = "error"), m(e, 0, n);
            }
            function v(e, t, n) {
              if ("word" == e) return (C = "attribute"), y;
              if ("endTag" == e || "selfcloseTag" == e) {
                var r = n.tagName,
                  i = n.tagStart;
                return (
                  (n.tagName = n.tagStart = null),
                  "selfcloseTag" == e || S.autoSelfClosers.hasOwnProperty(r)
                    ? f(n, r)
                    : (f(n, r), (n.context = new c(n, r, i == n.indented))),
                  d
                );
              }
              return (C = "error"), v;
            }
            function y(e, t, n) {
              return "equals" == e ? b : (S.allowMissing || (C = "error"), v(e, 0, n));
            }
            function b(e, t, n) {
              return "string" == e ? k : "word" == e && S.allowUnquoted ? ((C = "string"), v) : ((C = "error"), v(e, 0, n));
            }
            function k(e, t, n) {
              return "string" == e ? k : v(e, 0, n);
            }
            var w,
              C,
              x = r.indentUnit,
              S = {},
              M = i.htmlMode ? t : n;
            for (var L in M) S[L] = M[L];
            for (var L in i) S[L] = i[L];
            return (
              (o.isInText = !0),
              {
                startState: function (e) {
                  var t = { tokenize: o, state: d, indented: e || 0, tagName: null, tagStart: null, context: null };
                  return null != e && (t.baseIndent = e), t;
                },
                token: function (e, t) {
                  if ((!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace())) return null;
                  w = null;
                  var n = t.tokenize(e, t);
                  return (
                    (n || w) &&
                      "comment" != n &&
                      ((C = null), (t.state = t.state(w || n, e, t)), C && (n = "error" == C ? n + " error" : C)),
                    n
                  );
                },
                indent: function (t, n, r) {
                  var i = t.context;
                  if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + x;
                  if (i && i.noIndent) return e.Pass;
                  if (t.tokenize != a && t.tokenize != o) return r ? r.match(/^(\s*)/)[0].length : 0;
                  if (t.tagName)
                    return !1 !== S.multilineTagIndentPastTag
                      ? t.tagStart + t.tagName.length + 2
                      : t.tagStart + x * (S.multilineTagIndentFactor || 1);
                  if (S.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                  var s = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                  if (s && s[1])
                    for (; i; ) {
                      if (i.tagName == s[2]) {
                        i = i.prev;
                        break;
                      }
                      if (!S.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                      i = i.prev;
                    }
                  else if (s)
                    for (; i; ) {
                      var l = S.contextGrabbers[i.tagName];
                      if (!l || !l.hasOwnProperty(s[2])) break;
                      i = i.prev;
                    }
                  for (; i && i.prev && !i.startOfLine; ) i = i.prev;
                  return i ? i.indent + x : t.baseIndent || 0;
                },
                electricInput: /<\/[\s\w:]+>$/,
                blockCommentStart: "\x3c!--",
                blockCommentEnd: "--\x3e",
                configuration: S.htmlMode ? "html" : "xml",
                helperType: S.htmlMode ? "html" : "xml",
                skipAttribute: function (e) {
                  e.state == b && (e.state = v);
                },
                xmlCurrentTag: function (e) {
                  return e.tagName ? { name: e.tagName, close: "closeTag" == e.type } : null;
                },
                xmlCurrentContext: function (e) {
                  for (var t = [], n = e.context; n; n = n.prev) n.tagName && t.push(n.tagName);
                  return t.reverse();
                }
              }
            );
          }),
            e.defineMIME("text/xml", "xml"),
            e.defineMIME("application/xml", "xml"),
            e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
        })(n(4538));
      }
    },
    n = {};
  (e.d = (t, n) => {
    for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
  }),
    (e.o = (e, t) => ({}).hasOwnProperty.call(e, t)),
    (e.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      const t = e(4538),
        n = e(4633);
      e(9521),
        e(4825),
        e(8650),
        e(5299),
        e(3489),
        e(8190),
        e(7270),
        e(8334),
        e(5043),
        e(3773),
        e(8095),
        e(2172),
        e(2446),
        e(4698),
        e(6531),
        e(2073),
        e(3660),
        e(2048),
        e(1598),
        e(2714),
        e(7297),
        e(3170),
        e(7440),
        e(7544),
        e(4333),
        e(2498),
        e(3495),
        e(672),
        e(4514),
        e(8813),
        e(1626),
        e(9573),
        e(4174),
        (window.MirrorFrame = n),
        (window.CodeMirror = t);
    })();
})();
