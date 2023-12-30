(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([
  [27],
  {
    415: function (R, I, t) {
      "use strict";
      t.r(I);
      var H,
        e = t(715),
        B = t.n(e).a || {},
        M = "mathquill-command-id",
        g = "mathquill-block-id",
        z = Math.min,
        P = Math.max;
      if (!B) throw "MathQuill requires jQuery 1.5.2+ to be loaded first";
      function x() {}
      var F = [].slice;
      function $(n) {
        var i = n.length - 1;
        return function () {
          var t = F.call(arguments, 0, i),
            e = F.call(arguments, i);
          return n.apply(this, t.concat([e]));
        };
      }
      var W = $(function (n, i) {
        return $(function (t, e) {
          if (n in t) return t[n].apply(t, i.concat(e));
        });
      });
      function U(i) {
        return $(function (e, n) {
          "function" != typeof e && (e = W(e));
          var t = function (t) {
            return e.apply(t, [t].concat(n));
          };
          return i.call(this, t);
        });
      }
      function r(t) {
        var e = F.call(arguments, 1);
        return function () {
          return t.apply(this, e);
        };
      }
      function c(t, e) {
        if (!e) throw new Error("prayer failed: " + t);
      }
      (V = "prototype"), (X = {}.hasOwnProperty);
      var V,
        X,
        G,
        i = function e(n, t) {
          function i() {
            var t = new r();
            return Y(t.init) && t.init.apply(t, arguments), t;
          }
          function r() {}
          t === G && ((t = n), (n = Object)), (i.Bare = r);
          var s,
            o = (Z[V] = n[V]),
            a = (r[V] = i[V] = i.p = new Z());
          return (
            ((a.constructor = i).extend = function (t) {
              return e(i, t);
            }),
            (i.open = function (t) {
              if (((s = {}), Y(t) ? (s = t.call(i, a, o, i, n)) : K(t) && (s = t), K(s))) for (var e in s) X.call(s, e) && (a[e] = s[e]);
              return Y(a.init) || (a.init = n), i;
            })(t)
          );
        };
      function K(t) {
        return "object" == typeof t;
      }
      function Y(t) {
        return "function" == typeof t;
      }
      function Z() {}
      var m = -1,
        v = 1;
      function a(t) {
        c("a direction was passed", t === m || t === v);
      }
      var y = i(B, function (t) {
          (t.insDirOf = function (t, e) {
            return t === m ? this.insertBefore(e.first()) : this.insertAfter(e.last());
          }),
            (t.insAtDirEnd = function (t, e) {
              return t === m ? this.prependTo(e) : this.appendTo(e);
            });
        }),
        u = i(function (t) {
          (t.parent = 0),
            (t[m] = 0),
            (t[v] = 0),
            (t.init = function (t, e, n) {
              (this.parent = t), (this[m] = e), (this[v] = n);
            }),
            (this.copy = function (t) {
              return u(t.parent, t[m], t[v]);
            });
        }),
        h = i(function (t) {
          (t[m] = 0), (t[v] = 0);
          var e = (t.parent = 0);
          function n() {
            return (e += 1);
          }
          (this.byId = {}),
            (t.init = function () {
              (this.id = n()), ((h.byId[this.id] = this).ends = {}), (this.ends[m] = 0), (this.ends[v] = 0);
            }),
            (t.dispose = function () {
              delete h.byId[this.id];
            }),
            (t.toString = function () {
              return "{{ MathQuill Node #" + this.id + " }}";
            }),
            (t.jQ = y()),
            (t.jQadd = function (t) {
              return (this.jQ = this.jQ.add(t));
            }),
            (t.jQize = function (t) {
              t = y(t || this.html());
              function i(t) {
                var e, n;
                for (
                  t.getAttribute &&
                    ((e = t.getAttribute("mathquill-command-id")),
                    (n = t.getAttribute("mathquill-block-id")),
                    e && h.byId[e].jQadd(t),
                    n) &&
                    h.byId[n].jQadd(t),
                    t = t.firstChild;
                  t;
                  t = t.nextSibling
                )
                  i(t);
              }
              for (var e = 0; e < t.length; e += 1) i(t[e]);
              return t;
            }),
            (t.createDir = function (t, e) {
              a(t);
              var n = this;
              return n.jQize(), n.jQ.insDirOf(t, e.jQ), (e[t] = n.adopt(e.parent, e[m], e[v])), n;
            }),
            (t.createLeftOf = function (t) {
              return this.createDir(m, t);
            }),
            (t.selectChildren = function (t, e) {
              return et(t, e);
            }),
            (t.bubble = U(function (t) {
              for (var e = this; e; e = e.parent) if (!1 === t(e)) break;
              return this;
            })),
            (t.postOrder = U(function (n) {
              return (
                (function t(e) {
                  e.eachChild(t), n(e);
                })(this),
                this
              );
            })),
            (t.isEmpty = function () {
              return 0 === this.ends[m] && 0 === this.ends[v];
            }),
            (t.isStyleBlock = function () {
              return !1;
            }),
            (t.children = function () {
              return b(this.ends[m], this.ends[v]);
            }),
            (t.eachChild = function () {
              var t = this.children();
              return t.each.apply(t, arguments), this;
            }),
            (t.foldChildren = function (t, e) {
              return this.children().fold(t, e);
            }),
            (t.withDirAdopt = function (t, e, n, i) {
              return b(this, this).withDirAdopt(t, e, n, i), this;
            }),
            (t.adopt = function (t, e, n) {
              return b(this, this).adopt(t, e, n), this;
            }),
            (t.disown = function () {
              return b(this, this).disown(), this;
            }),
            (t.remove = function () {
              return this.jQ.remove(), this.postOrder("dispose"), this.disown();
            });
        });
      function J(t, e, n) {
        c("a parent is always present", t),
          c("leftward is properly set up", e ? e[v] === n && e.parent === t : t.ends[m] === n),
          c("rightward is properly set up", n ? n[m] === e && n.parent === t : t.ends[v] === e);
      }
      var b = i(function (t) {
          (t.init = function (t, e, n) {
            a((n = n === H ? m : n)),
              c("no half-empty fragments", !t == !e),
              (this.ends = {}),
              t &&
                (c("withDir is passed to Fragment", t instanceof h),
                c("oppDir is passed to Fragment", e instanceof h),
                c("withDir and oppDir have the same parent", t.parent === e.parent),
                (this.ends[n] = t),
                (this.ends[-n] = e),
                (t = this.fold([], function (t, e) {
                  return t.push.apply(t, e.jQ.get()), t;
                })),
                (this.jQ = this.jQ.add(t)));
          }),
            (t.jQ = y()),
            (t.withDirAdopt = function (t, e, n, i) {
              return t === m ? this.adopt(e, n, i) : this.adopt(e, i, n);
            }),
            (t.adopt = function (e, n, t) {
              J(e, n, t);
              var i,
                r = this,
                s = ((r.disowned = !1), r.ends[m]);
              return s
                ? ((i = r.ends[v]),
                  n || (e.ends[m] = s),
                  t ? (t[m] = i) : (e.ends[v] = i),
                  (r.ends[v][v] = t),
                  r.each(function (t) {
                    (t[m] = n), (t.parent = e), n && (n[v] = t), (n = t);
                  }),
                  r)
                : this;
            }),
            (t.disown = function () {
              var t,
                e,
                n = this,
                i = n.ends[m];
              return (
                i &&
                  !n.disowned &&
                  ((n.disowned = !0),
                  (t = n.ends[v]),
                  J((e = i.parent), i[m], i),
                  J(e, t, t[v]),
                  i[m] ? (i[m][v] = t[v]) : (e.ends[m] = t[v]),
                  t[v] ? (t[v][m] = i[m]) : (e.ends[v] = i[m])),
                n
              );
            }),
            (t.remove = function () {
              return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown();
            }),
            (t.each = U(function (t) {
              var e = this,
                n = e.ends[m];
              if (n) for (; n !== e.ends[v][v]; n = n[v]) if (!1 === t(n)) break;
              return e;
            })),
            (t.fold = function (e, n) {
              return (
                this.each(function (t) {
                  e = n.call(this, e, t);
                }),
                e
              );
            });
        }),
        l = {},
        s = {},
        tt = i(u, function (t) {
          (t.init = function (t, e) {
            (this.parent = t), (this.options = e);
            var n = (this.jQ = this._jQ = y('<span class="mq-cursor">&#8203;</span>'));
            (this.blink = function () {
              n.toggleClass("mq-blink");
            }),
              (this.upDownCache = {});
          }),
            (t.show = function () {
              return (
                (this.jQ = this._jQ.removeClass("mq-blink")),
                "intervalId" in this
                  ? clearInterval(this.intervalId)
                  : (this[v]
                      ? this.selection && this.selection.ends[m][m] === this[m]
                        ? this.jQ.insertBefore(this.selection.jQ)
                        : this.jQ.insertBefore(this[v].jQ.first())
                      : this.jQ.appendTo(this.parent.jQ),
                    this.parent.focus()),
                (this.intervalId = setInterval(this.blink, 500)),
                this
              );
            }),
            (t.hide = function () {
              return (
                "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, this.jQ.detach(), (this.jQ = y()), this
              );
            }),
            (t.withDirInsertAt = function (t, e, n, i) {
              var r = this.parent;
              (this.parent = e), (this[t] = n), (this[-t] = i), r !== e && r.blur && r.blur(this);
            }),
            (t.insDirOf = function (t, e) {
              return (
                a(t), this.jQ.insDirOf(t, e.jQ), this.withDirInsertAt(t, e.parent, e[t], e), this.parent.jQ.addClass("mq-hasCursor"), this
              );
            }),
            (t.insLeftOf = function (t) {
              return this.insDirOf(m, t);
            }),
            (t.insRightOf = function (t) {
              return this.insDirOf(v, t);
            }),
            (t.insAtDirEnd = function (t, e) {
              return a(t), this.jQ.insAtDirEnd(t, e.jQ), this.withDirInsertAt(t, e, 0, e.ends[t]), e.focus(), this;
            }),
            (t.insAtLeftEnd = function (t) {
              return this.insAtDirEnd(m, t);
            }),
            (t.insAtRightEnd = function (t) {
              return this.insAtDirEnd(v, t);
            }),
            (t.jumpUpDown = function (t, e) {
              var n = this,
                t = ((n.upDownCache[t.id] = u.copy(n)), n.upDownCache[e.id]);
              t ? (t[v] ? n.insLeftOf(t[v]) : n.insAtRightEnd(t.parent)) : ((t = n.offset().left), e.seek(t, n));
            }),
            (t.offset = function () {
              var t = this,
                e = t.jQ.removeClass("mq-cursor").offset();
              return t.jQ.addClass("mq-cursor"), e;
            }),
            (t.unwrapGramp = function () {
              var e = this.parent.parent,
                n = e.parent,
                i = e[v],
                t = this,
                r = e[m];
              if (
                (e.disown().eachChild(function (t) {
                  t.isEmpty() ||
                    (t
                      .children()
                      .adopt(n, r, i)
                      .each(function (t) {
                        t.jQ.insertBefore(e.jQ.first());
                      }),
                    (r = t.ends[v]));
                }),
                !this[v])
              )
                if (this[m]) this[v] = this[m][v];
                else
                  for (; !this[v]; ) {
                    if (((this.parent = this.parent[v]), !this.parent)) {
                      (this[v] = e[v]), (this.parent = n);
                      break;
                    }
                    this[v] = this.parent.ends[m];
                  }
              this[v] ? this.insLeftOf(this[v]) : this.insAtRightEnd(n),
                e.jQ.remove(),
                e[m].siblingDeleted && e[m].siblingDeleted(t.options, v),
                e[v].siblingDeleted && e[v].siblingDeleted(t.options, m);
            }),
            (t.startSelection = function () {
              for (var t = (this.anticursor = u.copy(this)), e = (t.ancestors = {}), n = t; n.parent; n = n.parent) e[n.parent.id] = n;
            }),
            (t.endSelection = function () {
              delete this.anticursor;
            }),
            (t.select = function () {
              var t = this.anticursor;
              if (this[m] === t[m] && this.parent === t.parent) return !1;
              for (var e = this; e.parent; e = e.parent)
                if (e.parent.id in t.ancestors) {
                  var n = e.parent;
                  break;
                }
              c("cursor and anticursor in the same tree", n);
              var i,
                r,
                s = t.ancestors[n.id],
                o = v;
              if (e[m] !== s)
                for (var a = e; a; a = a[v])
                  if (a[v] === s[v]) {
                    (o = m), (i = e), (r = s);
                    break;
                  }
              return (
                o === v && ((i = s), (r = e)),
                i instanceof u && (i = i[v]),
                r instanceof u && (r = r[m]),
                (this.hide().selection = n.selectChildren(i, r)),
                this.insDirOf(o, this.selection.ends[o]),
                this.selectionChanged(),
                !0
              );
            }),
            (t.clearSelection = function () {
              return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), this;
            }),
            (t.deleteSelection = function () {
              this.selection &&
                ((this[m] = this.selection.ends[m][m]),
                (this[v] = this.selection.ends[v][v]),
                this.selection.remove(),
                this.selectionChanged(),
                delete this.selection);
            }),
            (t.replaceSelection = function () {
              var t = this.selection;
              return t && ((this[m] = t.ends[m][m]), (this[v] = t.ends[v][v]), delete this.selection), t;
            });
        }),
        et = i(b, function (t, e) {
          (t.init = function () {
            e.init.apply(this, arguments),
              this.ends[m].bubble(function (t) {
                if (t.controller) return t.controller.handle("selection-start"), !0;
              }),
              (this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent());
          }),
            (t.adopt = function () {
              return this.jQ.replaceWith((this.jQ = this.jQ.children())), e.adopt.apply(this, arguments);
            }),
            (t.clear = function () {
              return (
                this.ends[m].bubble(function (t) {
                  if (t.controller) return t.controller.handle("selection-end"), !0;
                }),
                this.jQ.replaceWith(this.jQ[0].childNodes),
                this
              );
            }),
            (t.join = function (n) {
              return this.fold("", function (t, e) {
                return t + e[n]();
              });
            });
        }),
        f = i(function (t) {
          (t.init = function (t, e, n) {
            (this.id = t.id),
              (this.data = {}),
              (this.root = t),
              (this.container = e),
              (this.options = n),
              ((t.controller = this).cursor = t.cursor = tt(t, n));
          }),
            (t.handle = function (t, e) {
              var n,
                i = this.options.handlers;
              i && i.fns[t] && ((n = i.APIClasses[this.KIND_OF_MQ](this)), e === m || e === v ? i.fns[t](e, n) : i.fns[t](n));
            });
          var e = [];
          (this.onNotify = function (t) {
            e.push(t);
          }),
            (t.notify = function () {
              for (var t = 0; t < e.length; t += 1) e[t].apply(this.cursor, arguments);
              return this;
            });
        }),
        nt = {},
        it = i(),
        rt = {},
        st = i(),
        ot = {};
      function at() {
        window.console;
      }
      function n(t) {
        return at(), Jt(t);
      }
      (n.prototype = st.p),
        (n.VERSION = "v2.1.0"),
        (n.interfaceVersion = function (t) {
          if (1 !== t) throw "Only interface version 1 supported. You specified: " + t;
          return (
            (at = function () {
              window.console;
            })(),
            n
          );
        });
      var lt = ((n.getInterface = ut).MIN = 1),
        ct = (ut.MAX = 2);
      function ut(s) {
        if (!(lt <= s && s <= ct)) throw "Only interface versions between " + lt + " and " + ct + " supported. You specified: " + s;
        function o(t) {
          return t && t.nodeType && (t = (t = y(t).children(".mq-root-block").attr(g)) && h.byId[t].controller) ? a[t.KIND_OF_MQ](t) : null;
        }
        var a = {};
        function e(t, e) {
          for (var n in (e &&
            e.handlers &&
            (e.handlers = {
              fns: e.handlers,
              APIClasses: a
            }),
          e)) {
            var i, r;
            e.hasOwnProperty(n) && ((i = e[n]), (r = rt[n]), (t[n] = r ? r(i) : i));
          }
        }
        (o.L = m),
          (o.R = v),
          (o.saneKeyboardEvents = dt),
          (o.config = function (t) {
            return e(it.p, t), this;
          }),
          (o.registerEmbed = function (t, e) {
            if (!/^[a-z][a-z0-9]*$/i.test(t)) throw "Embed name must start with letter and be only letters and digits";
            ot[t] = e;
          });
        var t,
          n = (a.AbstractMathQuill = i(st, function (t) {
            (t.init = function (t) {
              (this.__controller = t), (this.__options = t.options), (this.id = t.id), (this.data = t.data);
            }),
              (t.__mathquillify = function (t) {
                var e = this.__controller,
                  n = e.root,
                  i = e.container,
                  r = (e.createTextarea(), i.addClass(t).contents().detach());
                (n.jQ = y('<span class="mq-root-block"/>').attr(g, n.id).appendTo(i)),
                  this.latex(r.text()),
                  (this.revert = function () {
                    return i.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(r);
                  });
              }),
              (t.config = function (t) {
                return e(this.__options, t), this;
              }),
              (t.el = function () {
                return this.__controller.container[0];
              }),
              (t.text = function () {
                return this.__controller.exportText();
              }),
              (t.latex = function (t) {
                return 0 < arguments.length
                  ? (this.__controller.renderLatexMath(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this)
                  : this.__controller.exportLatex();
              }),
              (t.html = function () {
                return this.__controller.root.jQ
                  .html()
                  .replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "")
                  .replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "")
                  .replace(/ mq-hasCursor|mq-hasCursor ?/, "")
                  .replace(/ class=(""|(?= |>))/g, "");
              }),
              (t.reflow = function () {
                return this.__controller.root.postOrder("reflow"), this;
              });
          }));
        for (t in ((o.prototype = n.prototype),
        (a.EditableField = i(n, function (t, e) {
          (t.__mathquillify = function () {
            return (
              e.__mathquillify.apply(this, arguments),
              (this.__controller.editable = !0),
              this.__controller.delegateMouseEvents(),
              this.__controller.editablesTextareaEvents(),
              this
            );
          }),
            (t.focus = function () {
              return this.__controller.textarea.focus(), this;
            }),
            (t.blur = function () {
              return this.__controller.textarea.blur(), this;
            }),
            (t.write = function (t) {
              return (
                this.__controller.writeLatex(t),
                this.__controller.scrollHoriz(),
                this.__controller.blurred && this.__controller.cursor.hide().parent.blur(),
                this
              );
            }),
            (t.empty = function () {
              var t = this.__controller.root,
                e = this.__controller.cursor;
              return (
                t.eachChild("postOrder", "dispose"), (t.ends[m] = t.ends[v] = 0), t.jQ.empty(), delete e.selection, e.insAtRightEnd(t), this
              );
            }),
            (t.cmd = function (t) {
              var e = this.__controller.notify(),
                n = e.cursor,
                i = /^\\(textcolor|class){(.*?)}/i;
              if (n && n.parent && n.parent.jQ.is(".mq-text-mode") && "\\text" === t) n.clearSelection().show();
              else {
                if (i.test(t)) {
                  var i = i.exec(t),
                    r = i[1],
                    t = l[r](r);
                  if ("textcolor" === r) {
                    var s = n.selection && n.selection.ends[m],
                      o = n.selection && n.selection.ends[v];
                    if (s && o && s === o && "textcolor" === s.ctrlSeq)
                      return s.setColor(i[2]), s.jQ.css("color", i[2]), e.handle("edit"), this;
                    t.setColor(i[2]);
                  } else "class" === r && t.setClass(i[2]);
                  n.selection && t.replaces(n.replaceSelection()), t.createLeftOf(n.show()), this.__controller.scrollHoriz();
                } else
                  /^\\[a-z]+/i.test(t)
                    ? ((t = t.slice(1)),
                      (r = l[t] || D[t]) &&
                        ((t = r(t)),
                        n.selection && t.replaces(n.replaceSelection()),
                        t.createLeftOf(n.show()),
                        this.__controller.scrollHoriz()))
                    : n.parent.write(n, t),
                    e.blurred && n.hide().parent.blur();
                e.handle("edit");
              }
              return this;
            }),
            (t.select = function () {
              var t = this.__controller;
              for (t.notify("move").cursor.insAtRightEnd(t.root); t.cursor[m]; ) t.selectLeft();
              return this;
            }),
            (t.clearSelection = function () {
              return this.__controller.cursor.clearSelection(), this;
            }),
            (t.moveToDirEnd = function (t) {
              return this.__controller.notify("move").cursor.insAtDirEnd(t, this.__controller.root), this;
            }),
            (t.moveToLeftEnd = function () {
              return this.moveToDirEnd(m);
            }),
            (t.moveToRightEnd = function () {
              return this.moveToDirEnd(v);
            }),
            (t.keystroke = function (t) {
              for (var t = t.replace(/^\s+|\s+$/g, "").split(/\s+/), e = 0; e < t.length; e += 1)
                this.__controller.keystroke(t[e], {
                  preventDefault: x
                });
              return this;
            }),
            (t.typedText = function (t) {
              for (var e = 0; e < t.length; e += 1) this.__controller.typedText(t.charAt(e));
              return this;
            }),
            (t.dropEmbedded = function (t, e, n) {
              var i = t - y(window).scrollLeft(),
                r = e - y(window).scrollTop(),
                i = document.elementFromPoint(i, r);
              this.__controller.seek(y(i), t, e), Mt().setOptions(n).createLeftOf(this.__controller.cursor);
            }),
            (t.clickAt = function (t, e, n) {
              n = n || document.elementFromPoint(t, e);
              var i = this.__controller,
                r = i.root;
              return (
                B.contains(r.jQ[0], n) || (n = r.jQ[0]), i.seek(y(n), t + pageXOffset, e + pageYOffset), i.blurred && this.focus(), this
              );
            }),
            (t.ignoreNextMousedown = function (t) {
              return (this.__controller.cursor.options.ignoreNextMousedown = t), this;
            });
        })),
        (o.EditableField = function () {
          throw "wtf don't call me, I'm 'abstract'";
        }),
        (o.EditableField.prototype = a.EditableField.prototype),
        nt))
          !(function (i, t) {
            var r = (a[i] = t(a));
            (o[i] = function (t, e) {
              var n = o(t);
              return n instanceof r || !t || !t.nodeType
                ? n
                : (((n = f(r.RootBlock(), y(t), it())).KIND_OF_MQ = i), r(n).__mathquillify(e, s));
            }),
              (o[i].prototype = r.prototype);
          })(t, nt[t]);
        return o;
      }
      n.noConflict = function () {
        return (window.MathQuill = ft), n;
      };
      var ft = window.MathQuill;
      function ht(t) {
        for (var e = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" "), n = 0; n < e.length; n += 1)
          !(function (e) {
            t[e] = function (t) {
              this.controller.handle(e, t);
            };
          })(e[n]);
        t.reflow = function () {
          this.controller.handle("reflow"), this.controller.handle("edited"), this.controller.handle("edit");
        };
      }
      (window.MathQuill = n),
        (pt = {
          8: "Backspace",
          9: "Tab",
          10: "Enter",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          20: "CapsLock",
          27: "Esc",
          32: "Spacebar",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          45: "Insert",
          46: "Del",
          144: "NumLock"
        });
      var pt,
        dt = function (t, e) {
          var n,
            i = null,
            r = null,
            s = B(t),
            t = B(e.container || s),
            o = x;
          function a(t) {
            (o = t), clearTimeout(n), (n = setTimeout(t));
          }
          function l(e) {
            a(function (t) {
              (o = x), clearTimeout(n), e(t);
            });
          }
          function c(t) {
            o(), (o = x), clearTimeout(n), s.val(t), t && s[0].select && s[0].select(), (u = !!t);
          }
          t.bind("keydown keypress input keyup focusout paste", function (t) {
            o(t);
          });
          var u = !1;
          function f() {
            var t = s[0];
            return "selectionStart" in t && t.selectionStart !== t.selectionEnd;
          }
          function h() {
            e.keystroke(mt(i), i);
          }
          function p(t) {
            (i = t),
              (r = null),
              u &&
                l(function (t) {
                  (t && "focusout" === t.type) || !s[0].select || s[0].select();
                }),
              h();
          }
          function d(t) {
            i && r && h(), (r = t), a(g);
          }
          function m(t) {
            i && !r && a(g);
          }
          function g() {
            var t;
            f() || (1 === (t = s.val()).length ? (s.val(""), e.typedText(t)) : t && s[0].select && s[0].select());
          }
          function v() {
            i = r = null;
          }
          function y(t) {
            s.focus(), a(b);
          }
          function b() {
            var t = s.val();
            s.val(""), t && e.paste(t);
          }
          return (
            t.bind({
              keydown: p,
              keypress: d,
              keyup: m,
              focusout: v,
              cut: function () {
                l(function () {
                  e.cut();
                });
              },
              copy: function () {
                l(function () {
                  e.copy();
                });
              },
              paste: y
            }),
            {
              select: c
            }
          );
        };
      function mt(t) {
        var e = t.which || t.keyCode,
          n = pt[e],
          i = [];
        return (
          t.ctrlKey && i.push("Ctrl"),
          t.originalEvent && t.originalEvent.metaKey && i.push("Meta"),
          t.altKey && i.push("Alt"),
          t.shiftKey && i.push("Shift"),
          (t = n || String.fromCharCode(e)),
          i.length || n ? (i.push(t), i.join("-")) : t
        );
      }
      var gt,
        vt,
        yt,
        w = i(function (t, e, a) {
          function n(t, e) {
            throw "Parse Error: " + e + " at " + (t = t ? "'" + t + "'" : "EOF");
          }
          (t.init = function (t) {
            this._ = t;
          }),
            (t.parse = function (t) {
              return this.skip(r)._("" + t, e, n);
              function e(t, e) {
                return e;
              }
            }),
            (t.or = function (r) {
              c("or is passed a parser", r instanceof a);
              var s = this;
              return a(function (e, n, i) {
                return s._(e, n, t);
                function t(t) {
                  return r._(e, n, i);
                }
              });
            }),
            (t.then = function (r) {
              var s = this;
              return a(function (t, n, i) {
                return s._(t, e, i);
                function e(t, e) {
                  e = r instanceof a ? r : r(e);
                  return c("a parser is returned", e instanceof a), e._(t, n, i);
                }
              });
            }),
            (t.many = function () {
              var o = this;
              return a(function (n, t, e) {
                for (var i = []; o._(n, r, s); );
                return t(n, i);
                function r(t, e) {
                  return (n = t), i.push(e), !0;
                }
                function s() {
                  return !1;
                }
              });
            }),
            (t.times = function (u, f) {
              arguments.length < 2 && (f = u);
              var h = this;
              return a(function (n, t, e) {
                for (var i, r = [], s = !0, o = 0; o < u; o += 1) if (!(s = h._(n, a, l))) return e(n, i);
                for (; o < f && s; o += 1) s = h._(n, a, c);
                return t(n, r);
                function a(t, e) {
                  return r.push(e), (n = t), !0;
                }
                function l(t, e) {
                  return (i = e), (n = t), !1;
                }
                function c(t, e) {
                  return !1;
                }
              });
            }),
            (t.result = function (t) {
              return this.then(i(t));
            }),
            (t.atMost = function (t) {
              return this.times(0, t);
            }),
            (t.atLeast = function (t) {
              var n = this;
              return n.times(t).then(function (e) {
                return n.many().map(function (t) {
                  return e.concat(t);
                });
              });
            }),
            (t.map = function (e) {
              return this.then(function (t) {
                return i(e(t));
              });
            }),
            (t.skip = function (e) {
              return this.then(function (t) {
                return e.result(t);
              });
            });
          this.string = function (r) {
            var s = r.length,
              o = "expected '" + r + "'";
            return a(function (t, e, n) {
              var i = t.slice(0, s);
              return i === r ? e(t.slice(s), i) : n(t, o);
            });
          };
          var t = (this.regex = function (r) {
              c("regexp parser is anchored", "^" === r.toString().charAt(1));
              var s = "expected " + r;
              return a(function (t, e, n) {
                var i = r.exec(t);
                return i ? ((i = i[0]), e(t.slice(i.length), i)) : n(t, s);
              });
            }),
            i = (a.succeed = function (n) {
              return a(function (t, e) {
                return e(t, n);
              });
            }),
            r =
              ((a.fail = function (i) {
                return a(function (t, e, n) {
                  return n(t, i);
                });
              }),
              (a.letter = t(/^[a-z]/i)),
              (a.letters = t(/^[a-z]*/i)),
              (a.digit = t(/^[0-9]/)),
              (a.digits = t(/^[0-9]*/)),
              (a.whitespace = t(/^\s+/)),
              (a.optWhitespace = t(/^\s*/)),
              (a.any = a(function (t, e, n) {
                return t ? e(t.slice(1), t.charAt(0)) : n(t, "expected any character");
              })),
              (a.all = a(function (t, e, n) {
                return e("", t);
              })),
              (a.eof = a(function (t, e, n) {
                return t ? n(t, "expected EOF") : e(t, t);
              })));
        }),
        q =
          (f.open(function (t) {
            t.focusBlurEvents = function () {
              var t,
                e = this,
                n = e.root,
                i = e.cursor;
              function r() {
                clearTimeout(t), i.selection && i.selection.jQ.addClass("mq-blur"), s();
              }
              function s() {
                i.hide().parent.blur(), e.container.removeClass("mq-focused"), y(window).unbind("blur", r);
              }
              e.textarea
                .focus(function () {
                  (e.blurred = !1),
                    clearTimeout(t),
                    e.container.addClass("mq-focused"),
                    i.parent || i.insAtRightEnd(n),
                    i.selection ? (i.selection.jQ.removeClass("mq-blur"), e.selectionChanged()) : i.show();
                })
                .blur(function () {
                  (e.blurred = !0),
                    (t = setTimeout(function () {
                      n.postOrder("intentionalBlur"), s();
                    })),
                    y(window).bind("blur", r);
                }),
                (e.blurred = !0),
                i.hide().parent.blur();
            };
          }),
          f.open(function (t, e) {
            t.exportText = function () {
              return this.root.foldChildren("", function (t, e) {
                return t + e.text();
              });
            };
          }),
          f.open(function (t) {
            (it.p.ignoreNextMousedown = x),
              (t.delegateMouseEvents = function () {
                var f = this.root.jQ;
                this.container.bind("mousedown.mathquill", function (t) {
                  var e,
                    n = y(t.target).closest(".mq-root-block"),
                    i = h.byId[n.attr(g) || f.attr(g)].controller,
                    r = i.cursor,
                    s = r.blink,
                    o = i.textareaSpan,
                    a = i.textarea;
                  function l(t) {
                    e = y(t.target);
                  }
                  function c(t) {
                    r.anticursor || r.startSelection(), i.seek(e, t.pageX, t.pageY).cursor.select(), (e = H);
                  }
                  function u(t) {
                    (r.blink = s),
                      r.selection || (i.editable ? r.show() : o.detach()),
                      n.unbind("mousemove", l),
                      y(t.target.ownerDocument).unbind("mousemove", c).unbind("mouseup", u);
                  }
                  t.preventDefault(),
                    (t.target.unselectable = !0),
                    r.options.ignoreNextMousedown(t) ||
                      ((r.options.ignoreNextMousedown = x),
                      i.blurred && (i.editable || n.prepend(o), a.focus()),
                      (r.blink = x),
                      i.seek(y(t.target), t.pageX, t.pageY).cursor.startSelection(),
                      n.mousemove(l),
                      y(t.target.ownerDocument).mousemove(c).mouseup(u));
                });
              });
          }),
          f.open(function (t) {
            t.seek = function (t, e, n) {
              var i,
                r = this.notify("select").cursor,
                t = (i = !t ? i : (i = t.attr(g) || t.attr(M)) || (t = t.parent()).attr(g) || t.attr(M)) ? h.byId[i] : this.root;
              return c("nodeId is the id of some Node that exists", t), r.clearSelection().show(), t.seek(e, r), this.scrollHoriz(), this;
            };
          }),
          f.open(function (t) {
            t.keystroke = function (t, e) {
              this.cursor.parent.keystroke(t, e, this);
            };
          }),
          h.open(function (t) {
            (t.keystroke = function (t, e, n) {
              var i = n.cursor;
              switch (t) {
                case "Ctrl-Shift-Backspace":
                case "Ctrl-Backspace":
                  n.ctrlDeleteDir(m);
                  break;

                case "Shift-Backspace":
                case "Backspace":
                  n.backspace();
                  break;

                case "Esc":
                  return void n.escapeDir(v, t, e);

                case "Shift-Esc":
                  return void n.escapeDir(m, t, e);

                case "End":
                  n.notify("move").cursor.insAtRightEnd(i.parent);
                  break;

                case "Ctrl-End":
                  n.notify("move").cursor.insAtRightEnd(n.root);
                  break;

                case "Shift-End":
                  for (; i[v]; ) n.selectRight();
                  break;

                case "Ctrl-Shift-End":
                  for (; i[v] || i.parent !== n.root; ) n.selectRight();
                  break;

                case "Home":
                  n.notify("move").cursor.insAtLeftEnd(i.parent);
                  break;

                case "Ctrl-Home":
                  n.notify("move").cursor.insAtLeftEnd(n.root);
                  break;

                case "Shift-Home":
                  for (; i[m]; ) n.selectLeft();
                  break;

                case "Ctrl-Shift-Home":
                  for (; i[m] || i.parent !== n.root; ) n.selectLeft();
                  break;

                case "Left":
                  n.moveLeft();
                  break;

                case "Shift-Left":
                  n.selectLeft();
                  break;

                case "Ctrl-Left":
                  break;

                case "Right":
                  n.moveRight();
                  break;

                case "Shift-Right":
                  n.selectRight();
                  break;

                case "Ctrl-Right":
                  break;

                case "Up":
                  n.moveUp();
                  break;

                case "Down":
                  n.moveDown();
                  break;

                case "Shift-Up":
                  if (i[m]) for (; i[m]; ) n.selectLeft();
                  else n.selectLeft();

                case "Shift-Down":
                  if (i[v]) for (; i[v]; ) n.selectRight();
                  else n.selectRight();

                case "Ctrl-Up":
                case "Ctrl-Down":
                  break;

                case "Ctrl-Shift-Del":
                case "Ctrl-Del":
                  n.ctrlDeleteDir(v);
                  break;

                case "Shift-Del":
                case "Del":
                  n.deleteForward();
                  break;

                case "Meta-A":
                case "Ctrl-A":
                  for (n.notify("move").cursor.insAtRightEnd(n.root); i[m]; ) n.selectLeft();
                  break;

                default:
                  return;
              }
              e.preventDefault(), n.scrollHoriz();
            }),
              (t.moveOutOf =
                t.moveTowards =
                t.deleteOutOf =
                t.deleteTowards =
                t.unselectInto =
                t.selectOutOf =
                t.selectTowards =
                  function () {
                    c("overridden or never called on this node");
                  });
          }),
          f.open(function (t) {
            function e(t, e) {
              var n = t.notify("upDown").cursor,
                i = e + "Into",
                r = e + "OutOf";
              return (
                n[v][i]
                  ? n.insAtLeftEnd(n[v][i])
                  : n[m][i]
                  ? n.insAtRightEnd(n[m][i])
                  : n.parent.bubble(function (t) {
                      var e = t[r];
                      if (e && ((e = "function" == typeof e ? t[r](n) : e) instanceof h && n.jumpUpDown(t, e), !0 !== e)) return !1;
                    }),
                t
              );
            }
            this.onNotify(function (t) {
              ("move" !== t && "upDown" !== t) || this.show().clearSelection();
            }),
              (t.escapeDir = function (t, e, n) {
                a(t);
                var i = this.cursor;
                if ((i.parent !== this.root && n.preventDefault(), i.parent !== this.root))
                  return i.parent.moveOutOf(t, i), this.notify("move");
              }),
              (rt.leftRightIntoCmdGoes = function (t) {
                if (t && "up" !== t && "down" !== t) throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + t + '"';
                return t;
              }),
              (t.moveDir = function (t) {
                a(t);
                var e = this.cursor,
                  n = e.options.leftRightIntoCmdGoes;
                return (
                  e.selection ? e.insDirOf(t, e.selection.ends[t]) : e[t] ? e[t].moveTowards(t, e, n) : e.parent.moveOutOf(t, e, n),
                  this.notify("move")
                );
              }),
              (t.moveLeft = function () {
                return this.moveDir(m);
              }),
              (t.moveRight = function () {
                return this.moveDir(v);
              }),
              (t.moveUp = function () {
                return e(this, "up");
              }),
              (t.moveDown = function () {
                return e(this, "down");
              }),
              this.onNotify(function (t) {
                "upDown" !== t && (this.upDownCache = {});
              }),
              this.onNotify(function (t) {
                "edit" === t && this.show().deleteSelection();
              }),
              (t.deleteDir = function (t) {
                a(t);
                var e = this.cursor,
                  n = e.selection;
                return (
                  this.notify("edit"),
                  n || (e[t] ? e[t].deleteTowards(t, e) : e.parent.deleteOutOf(t, e)),
                  e[m].siblingDeleted && e[m].siblingDeleted(e.options, v),
                  e[v].siblingDeleted && e[v].siblingDeleted(e.options, m),
                  e.parent.bubble("reflow"),
                  this
                );
              }),
              (t.ctrlDeleteDir = function (t) {
                a(t);
                var e = this.cursor;
                return !e[t] || e.selection
                  ? this.deleteDir(t)
                  : (this.notify("edit"),
                    (t === m ? b(e.parent.ends[m], e[m]) : b(e[v], e.parent.ends[v])).remove(),
                    e.insAtDirEnd(t, e.parent),
                    e[m].siblingDeleted && e[m].siblingDeleted(e.options, v),
                    e[v].siblingDeleted && e[v].siblingDeleted(e.options, m),
                    e.parent.bubble("reflow"),
                    this);
              }),
              (t.backspace = function () {
                return this.deleteDir(m);
              }),
              (t.deleteForward = function () {
                return this.deleteDir(v);
              }),
              this.onNotify(function (t) {
                "select" !== t && this.endSelection();
              }),
              (t.selectDir = function (t) {
                var e = this.notify("select").cursor,
                  n = e.selection,
                  i = (a(t), e.anticursor || e.startSelection(), e[t]);
                i
                  ? n && n.ends[t] === i && e.anticursor[-t] !== i
                    ? i.unselectInto(t, e)
                    : i.selectTowards(t, e)
                  : e.parent.selectOutOf(t, e),
                  e.clearSelection(),
                  e.select() || e.show();
              }),
              (t.selectLeft = function () {
                return this.selectDir(m);
              }),
              (t.selectRight = function () {
                return this.selectDir(v);
              });
          }),
          f.open(function (t) {
            (it.p.substituteTextarea = function () {
              return y("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0];
            }),
              (t.createTextarea = function () {
                var t = (this.textareaSpan = y('<span class="mq-textarea"></span>'));
                if (!(e = this.options.substituteTextarea()).nodeType) throw "substituteTextarea() must return a DOM element, got " + e;
                var e = (this.textarea = y(e).appendTo(t)),
                  n = this;
                n.cursor.selectionChanged = function () {
                  n.selectionChanged();
                };
              }),
              (t.selectionChanged = function () {
                var t = this;
                Et(t.container[0]),
                  t.textareaSelectionTimeout === H &&
                    (t.textareaSelectionTimeout = setTimeout(function () {
                      t.setTextareaSelection();
                    }));
              }),
              (t.setTextareaSelection = function () {
                this.textareaSelectionTimeout = H;
                var t = "";
                this.cursor.selection &&
                  ((t = this.cursor.selection.join("latex")), this.options.statelessClipboard) &&
                  (t = "$" + t + "$"),
                  this.selectFn(t);
              }),
              (t.staticMathTextareaEvents = function () {
                var t = this,
                  e = (t.root, t.cursor),
                  n = t.textarea,
                  i = t.textareaSpan;
                function r() {
                  i.detach(), (t.blurred = !0);
                }
                this.container.prepend(B('<span class="mq-selectable">').text("$" + t.exportLatex() + "$")),
                  (t.blurred = !0),
                  n
                    .bind("cut paste", !1)
                    .bind("copy", function () {
                      t.setTextareaSelection();
                    })
                    .focus(function () {
                      t.blurred = !1;
                    })
                    .blur(function () {
                      e.selection && e.selection.clear(), setTimeout(r);
                    }),
                  (t.selectFn = function (t) {
                    n.val(t), t && n.select();
                  });
              }),
              (it.p.substituteKeyboardEvents = dt),
              (t.editablesTextareaEvents = function () {
                var t = this,
                  e = t.textarea,
                  t = t.textareaSpan,
                  n = this.options.substituteKeyboardEvents(e, this);
                (this.selectFn = function (t) {
                  n.select(t);
                }),
                  this.container.prepend(t),
                  this.focusBlurEvents();
              }),
              (t.typedText = function (t) {
                if ("\n" === t) return this.handle("enter");
                var e = this.notify().cursor;
                e.parent.write(e, t), this.scrollHoriz();
              }),
              (t.cut = function () {
                var t = this,
                  e = t.cursor;
                e.selection &&
                  setTimeout(function () {
                    t.notify("edit"), e.parent.bubble("reflow");
                  });
              }),
              (t.copy = function () {
                this.setTextareaSelection();
              }),
              (t.paste = function (t) {
                this.options.statelessClipboard &&
                  (t = "$" === t.slice(0, 1) && "$" === t.slice(-1) ? t.slice(1, -1) : "\\text{" + t + "}"),
                  this.cursor && this.cursor.parent && this.cursor.parent.jQ.is(".mq-text-mode")
                    ? this.typedText(t)
                    : this.writeLatex(t).cursor.show();
              });
          }),
          (t = w.string),
          (e = w.regex),
          (j = w.letter),
          (S = w.any),
          (k = w.optWhitespace),
          (gt = w.succeed),
          (vt = w.fail),
          (j = j.map(function (t) {
            return Q(t);
          })),
          (O = e(/^[^${}\\_^]/).map(function (t) {
            return d(t);
          })),
          (e = e(/^[^\\a-eg-zA-Z]/)
            .or(
              t("\\").then(
                e(/^[a-z]+/i)
                  .or(e(/^\s+/).result(" "))
                  .or(S)
              )
            )
            .then(function (t) {
              var e = l[t];
              return e ? e(t).parser() : vt("unknown command: \\" + t);
            })
            .or(j)
            .or(O)),
          (S = t("{")
            .then(function () {
              return yt;
            })
            .skip(t("}"))),
          (j = k.then(S.or(e.map(bt)))),
          (yt = j.many().map(xt).skip(k)),
          (O = t("[")
            .then(
              j
                .then(function (t) {
                  return "]" !== t.join("latex") ? gt(t) : vt();
                })
                .many()
                .map(xt)
                .skip(k)
            )
            .skip(t("]"))),
          ((S = yt).block = j),
          (S.optBlock = O),
          S);
      function bt(t) {
        var e = C();
        return t.adopt(e, 0, 0), e;
      }
      function xt(t) {
        for (var e = t[0] || C(), n = 1; n < t.length; n += 1) t[n].children().adopt(e, e.ends[v], 0);
        return e;
      }
      f.open(function (t, e) {
        (t.exportLatex = function () {
          return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1");
        }),
          (t.writeLatex = function (t) {
            var e = this.notify("edit").cursor,
              n = w.all,
              i = w.eof,
              i = q.skip(i).or(n.result(!1)).parse(t);
            return (
              i &&
                !i.isEmpty() &&
                (i.children().adopt(e.parent, e[m], e[v]),
                i.jQize().insertBefore(e.jQ),
                (e[m] = i.ends[v]),
                i.finalizeInsert(e.options, e),
                i.ends[v][v].siblingCreated && i.ends[v][v].siblingCreated(e.options, m),
                i.ends[m][m].siblingCreated && i.ends[m][m].siblingCreated(e.options, v),
                e.parent.bubble("reflow")),
              this
            );
          }),
          (t.renderLatexMath = function (t) {
            var e = this.root,
              n = this.cursor,
              i = w.all,
              r = w.eof,
              r = q.skip(r).or(i.result(!1)).parse(t),
              i = (e.eachChild("postOrder", "dispose"), (e.ends[m] = e.ends[v] = 0), r && r.children().adopt(e, 0, 0), e.jQ);
            r ? ((t = r.join("html")), i.html(t), e.jQize(i.children()), e.finalizeInsert(n.options)) : i.empty(),
              delete n.selection,
              n.insAtRightEnd(e);
          }),
          (t.renderLatexText = function (t) {
            var e = this.root,
              i = this.cursor,
              n =
                (e.jQ.children().slice(1).remove(),
                e.eachChild("postOrder", "dispose"),
                (e.ends[m] = e.ends[v] = 0),
                delete i.selection,
                i.show().insAtRightEnd(e),
                w.regex),
              r = w.string,
              s = w.eof,
              o = w.all,
              a = r("$")
                .then(q)
                .skip(r("$").or(s))
                .map(function (t) {
                  var e = Ot(i),
                    n = (e.createBlocks(), e.ends[m]);
                  return t.children().adopt(n, 0, 0), e;
                }),
              r = r("\\$").result("$").or(n(/^[^$]/)).map(d),
              l = a.or(r).many().skip(s).or(o.result(!1)).parse(t);
            if (l) {
              for (var c = 0; c < l.length; c += 1) l[c].adopt(e, e.ends[v], 0);
              e.jQize().appendTo(e.jQ), e.finalizeInsert(i.options);
            }
          });
      }),
        f.open(function (t) {
          t.scrollHoriz = function () {
            var t = this.cursor,
              e = t.selection,
              n = this.root.jQ[0].getBoundingClientRect();
            if (e) {
              var i = e.jQ[0].getBoundingClientRect(),
                r = i.left - (n.left + 20),
                s = i.right - (n.right - 20);
              if (e.ends[m] === t[v])
                if (r < 0) var o = r;
                else {
                  if (!(0 < s)) return;
                  o = i.left - s < n.left + 20 ? r : s;
                }
              else if (0 < s) o = s;
              else {
                if (!(r < 0)) return;
                o = i.right - r > n.right - 20 ? s : r;
              }
            } else {
              e = t.jQ[0].getBoundingClientRect().left;
              if (e > n.right - 20) var o = e - (n.right - 20);
              else {
                if (!(e < n.left + 20)) return;
                var o = e - (n.left + 20);
              }
            }
            this.root.jQ.stop().animate(
              {
                scrollLeft: "+=" + o
              },
              100
            );
          };
        });
      var e = i(h, function (t, e) {
          t.finalizeInsert = function (t, e) {
            var n = this;
            n.postOrder("finalizeTree", t),
              n.postOrder("contactWeld", e),
              n.postOrder("blur"),
              n.postOrder("reflow"),
              n[v].siblingCreated && n[v].siblingCreated(t, m),
              n[m].siblingCreated && n[m].siblingCreated(t, v),
              n.bubble("reflow");
          };
        }),
        o = i(e, function (t, r) {
          (t.init = function (t, e, n) {
            var i = this;
            r.init.call(i), i.ctrlSeq || (i.ctrlSeq = t), e && (i.htmlTemplate = e), n && (i.textTemplate = n);
          }),
            (t.replaces = function (t) {
              t.disown(), (this.replacedFragment = t);
            }),
            (t.isEmpty = function () {
              return this.foldChildren(!0, function (t, e) {
                return t && e.isEmpty();
              });
            }),
            (t.parser = function () {
              var t = q.block,
                n = this;
              return t.times(n.numBlocks()).map(function (t) {
                n.blocks = t;
                for (var e = 0; e < t.length; e += 1) t[e].adopt(n, n.ends[v], 0);
                return n;
              });
            }),
            (t.createLeftOf = function (t) {
              var e = this,
                n = e.replacedFragment;
              e.createBlocks(),
                r.createLeftOf.call(e, t),
                n && (n.adopt(e.ends[m], 0, 0), n.jQ.appendTo(e.ends[m].jQ)),
                e.finalizeInsert(t.options),
                e.placeCursor(t);
            }),
            (t.createBlocks = function () {
              for (var t = this, e = t.numBlocks(), n = (t.blocks = Array(e)), i = 0; i < e; i += 1) (n[i] = C()).adopt(t, t.ends[v], 0);
            }),
            (t.placeCursor = function (t) {
              t.insAtRightEnd(
                this.foldChildren(this.ends[m], function (t, e) {
                  return t.isEmpty() ? t : e;
                })
              );
            }),
            (t.moveTowards = function (t, e, n) {
              n = n && this[n + "Into"];
              e.insAtDirEnd(-t, n || this.ends[-t]);
            }),
            (t.deleteTowards = function (t, e) {
              this.isEmpty() ? (e[t] = this.remove()[t]) : this.moveTowards(t, e, null);
            }),
            (t.selectTowards = function (t, e) {
              (e[-t] = this), (e[t] = this[t]);
            }),
            (t.selectChildren = function () {
              return et(this, this);
            }),
            (t.unselectInto = function (t, e) {
              e.insAtDirEnd(-t, e.anticursor.ancestors[this.id]);
            }),
            (t.seek = function (n, i) {
              function r(t) {
                var e = {};
                return (e[m] = t.jQ.offset().left), (e[v] = e[m] + t.jQ.outerWidth()), e;
              }
              var s,
                o = this,
                a = r(o);
              return n < a[m]
                ? i.insLeftOf(o)
                : n > a[v]
                ? i.insRightOf(o)
                : ((s = a[m]),
                  void o.eachChild(function (t) {
                    var e = r(t);
                    return n < e[m]
                      ? (n - s < e[m] - n ? (t[m] ? i.insAtRightEnd(t[m]) : i.insLeftOf(o)) : i.insAtLeftEnd(t), !1)
                      : n > e[v]
                      ? void (t[v] ? (s = e[v]) : a[v] - n < n - e[v] ? i.insRightOf(o) : i.insAtRightEnd(t))
                      : (t.seek(n, i), !1);
                  }));
            }),
            (t.numBlocks = function () {
              var t = this.htmlTemplate.match(/&\d+/g);
              return t ? t.length : 0;
            }),
            (t.html = function () {
              var t = this,
                n = t.blocks,
                e = " mathquill-command-id=" + t.id,
                i = t.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
              c("no unmatched angle brackets", i.join("") === this.htmlTemplate);
              for (var r = 0, s = i[0]; s; s = i[(r += 1)])
                if ("/>" === s.slice(-2)) i[r] = s.slice(0, -2) + e + "/>";
                else if ("<" === s.charAt(0)) {
                  c("not an unmatched top-level close tag", "/" !== s.charAt(1)), (i[r] = s.slice(0, -1) + e + ">");
                  for (
                    var o = 1;
                    c("no missing close tags", (s = i[(r += 1)])),
                      "</" === s.slice(0, 2) ? --o : "<" === s.charAt(0) && "/>" !== s.slice(-2) && (o += 1),
                      0 < o;

                  );
                }
              return i.join("").replace(/>&(\d+)/g, function (t, e) {
                return " mathquill-block-id=" + n[e].id + ">" + n[e].join("html");
              });
            }),
            (t.latex = function () {
              return this.foldChildren(this.ctrlSeq, function (t, e) {
                return t + "{" + (e.latex() || " ") + "}";
              });
            }),
            (t.textTemplate = [""]),
            (t.text = function () {
              var i = this,
                r = 0;
              return i.foldChildren(i.textTemplate[r], function (t, e) {
                r += 1;
                var n = e.text();
                return t && "(" === i.textTemplate[r] && "(" === n[0] && ")" === n.slice(-1)
                  ? t + n.slice(1, -1) + i.textTemplate[r]
                  : t + e.text() + (i.textTemplate[r] || "");
              });
            });
        }),
        p = i(o, function (t, i) {
          (t.init = function (t, e, n) {
            (n = n || (t && 1 < t.length ? t.slice(1) : t)), i.init.call(this, t, e, [n]);
          }),
            (t.parser = function () {
              return w.succeed(this);
            }),
            (t.numBlocks = function () {
              return 0;
            }),
            (t.replaces = function (t) {
              t.remove();
            }),
            (t.createBlocks = x),
            (t.moveTowards = function (t, e) {
              e.jQ.insDirOf(t, this.jQ), (e[-t] = this), (e[t] = this[t]);
            }),
            (t.deleteTowards = function (t, e) {
              e[t] = this.remove()[t];
            }),
            (t.seek = function (t, e) {
              t - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? e.insLeftOf(this) : e.insRightOf(this);
            }),
            (t.latex = function () {
              return this.ctrlSeq;
            }),
            (t.text = function () {
              return this.textTemplate;
            }),
            (t.placeCursor = x),
            (t.isEmpty = function () {
              return !0;
            });
        }),
        d = i(p, function (t, n) {
          t.init = function (t, e) {
            n.init.call(this, t, "<span>" + (e || t) + "</span>");
          };
        }),
        T = i(p, function (t, i) {
          t.init = function (t, e, n) {
            i.init.call(this, t, '<span class="mq-binary-operator">' + e + "</span>", n);
          };
        }),
        C = i(e, function (t, i) {
          (t.join = function (n) {
            return this.foldChildren("", function (t, e) {
              return t + e[n]();
            });
          }),
            (t.html = function () {
              return this.join("html");
            }),
            (t.latex = function () {
              return this.join("latex");
            }),
            (t.text = function () {
              return this.ends[m] === this.ends[v] && 0 !== this.ends[m] ? this.ends[m].text() : this.join("text");
            }),
            (t.keystroke = function (t, e, n) {
              if (!n.options.spaceBehavesLikeTab || ("Spacebar" !== t && "Shift-Spacebar" !== t)) return i.keystroke.apply(this, arguments);
              e.preventDefault(), n.escapeDir("Shift-Spacebar" === t ? m : v, t, e);
            }),
            (t.moveOutOf = function (t, e, n) {
              !(n && this.parent[n + "Into"]) && this[t] ? e.insAtDirEnd(-t, this[t]) : e.insDirOf(t, this.parent);
            }),
            (t.selectOutOf = function (t, e) {
              e.insDirOf(t, this.parent);
            }),
            (t.deleteOutOf = function (t, e) {
              e.unwrapGramp();
            }),
            (t.seek = function (t, e) {
              var n = this.ends[v];
              if (!n || n.jQ.offset().left + n.jQ.outerWidth() < t) return e.insAtRightEnd(this);
              if (t < this.ends[m].jQ.offset().left) return e.insAtLeftEnd(this);
              for (; t < n.jQ.offset().left; ) n = n[m];
              return n.seek(t, e);
            }),
            (t.chToCmd = function (t, e) {
              return t.match(/^[a-eg-zA-Z]$/)
                ? Q(t)
                : /^\d$/.test(t)
                ? zt(t)
                : e && e.typingSlashWritesDivisionSymbol && "/" === t
                ? l["\xf7"](t)
                : e && e.typingAsteriskWritesTimesSymbol && "*" === t
                ? l["\xd7"](t)
                : (s[t] || l[t] || d)(t);
            }),
            (t.write = function (t, e) {
              e = this.chToCmd(e, t.options);
              t.selection && e.replaces(t.replaceSelection()), e.createLeftOf(t.show());
            }),
            (t.focus = function () {
              return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this;
            }),
            (t.blur = function () {
              return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), this;
            });
        }),
        wt =
          ((nt.StaticMath = function (e) {
            return i(e.AbstractMathQuill, function (t, n) {
              (this.RootBlock = C),
                (t.__mathquillify = function (t, e) {
                  return (
                    this.config(t),
                    n.__mathquillify.call(this, "mq-math-mode"),
                    this.__controller.delegateMouseEvents(),
                    this.__controller.staticMathTextareaEvents(),
                    this
                  );
                }),
                (t.init = function () {
                  n.init.apply(this, arguments),
                    this.__controller.root.postOrder("registerInnerField", (this.innerFields = []), e.MathField);
                }),
                (t.latex = function () {
                  var t = n.latex.apply(this, arguments);
                  return (
                    0 < arguments.length && this.__controller.root.postOrder("registerInnerField", (this.innerFields = []), e.MathField), t
                  );
                });
            });
          }),
          i(C, ht)),
        qt =
          ((nt.MathField = function (t) {
            return i(t.EditableField, function (t, n) {
              (this.RootBlock = wt),
                (t.__mathquillify = function (t, e) {
                  return (
                    this.config(t),
                    1 < e && (this.__controller.root.reflow = x),
                    n.__mathquillify.call(this, "mq-editable-field mq-math-mode"),
                    delete this.__controller.root.reflow,
                    this
                  );
                });
            });
          }),
          i(h, function (t, i) {
            function l(t) {
              t.jQ[0].normalize();
              var e,
                n = t.jQ[0].firstChild;
              if (n && (n = B(n).is(".mq-selection") ? n.firstChild : n))
                return (
                  c("only node in TextBlock span is Text node", 3 === n.nodeType),
                  (e = Tt(n.data)).jQadd(n),
                  t.children().disown(),
                  e.adopt(t, 0, 0)
                );
            }
            (t.ctrlSeq = "\\text"),
              (t.replaces = function (t) {
                t instanceof b ? (this.replacedText = t.remove().jQ.text()) : "string" == typeof t && (this.replacedText = t);
              }),
              (t.jQadd = function (t) {
                i.jQadd.call(this, t), this.ends[m] && this.ends[m].jQadd(this.jQ[0].firstChild);
              }),
              (t.createLeftOf = function (t) {
                var e = this;
                if (
                  (i.createLeftOf.call(this, t),
                  e[v].siblingCreated && e[v].siblingCreated(t.options, m),
                  e[m].siblingCreated && e[m].siblingCreated(t.options, v),
                  e.bubble("reflow"),
                  t.insAtRightEnd(e),
                  e.replacedText)
                )
                  for (var n = 0; n < e.replacedText.length; n += 1) e.write(t, e.replacedText.charAt(n));
              }),
              (t.parser = function () {
                var e = this,
                  t = w.string,
                  n = w.regex;
                return w.optWhitespace
                  .then(t("{"))
                  .then(n(/^[^}]*/))
                  .skip(t("}"))
                  .map(function (t) {
                    return 0 === t.length ? b() : (Tt(t).adopt(e, 0, 0), e);
                  });
              }),
              (t.textContents = function () {
                return this.foldChildren("", function (t, e) {
                  return t + e.text;
                });
              }),
              (t.text = function () {
                return '"' + this.textContents() + '"';
              }),
              (t.latex = function () {
                var t = this.textContents();
                return 0 === t.length ? "" : "\\text{" + t.replace(/\\/g, "\\backslash ").replace(/[{}]/g, "\\$&") + "}";
              }),
              (t.html = function () {
                var t = B('<span class="mq-text-mode" mathquill-command-id=' + this.id + "></span>");
                return t.text(this.textContents()), t[0].outerHTML;
              }),
              (t.moveTowards = function (t, e) {
                e.insAtDirEnd(-t, this);
              }),
              (t.moveOutOf = function (t, e) {
                e.insDirOf(t, this);
              }),
              (t.unselectInto = t.moveTowards),
              (t.selectTowards = o.prototype.selectTowards),
              (t.deleteTowards = o.prototype.deleteTowards),
              (t.selectOutOf = function (t, e) {
                e.insDirOf(t, this);
              }),
              (t.deleteOutOf = function (t, e) {
                this.isEmpty() && e.insRightOf(this);
              }),
              (t.write = function (t, e) {
                var n;
                t.show().deleteSelection(),
                  "$" !== e
                    ? t[m]
                      ? t[m].appendText(e)
                      : Tt(e).createLeftOf(t)
                    : this.isEmpty()
                    ? (t.insRightOf(this), d("\\$", "$").createLeftOf(t))
                    : t[v]
                    ? t[m]
                      ? ((e = qt()),
                        (n = this.ends[m]).disown().jQ.detach(),
                        n.adopt(e, 0, 0),
                        t.insLeftOf(this),
                        i.createLeftOf.call(e, t))
                      : t.insLeftOf(this)
                    : t.insRightOf(this);
              }),
              (t.seek = function (t, e) {
                e.hide();
                for (
                  var n,
                    i = l(this),
                    r = this.jQ.width() / this.text.length,
                    r = Math.round((t - this.jQ.offset().left) / r),
                    s =
                      (r <= 0 ? e.insAtLeftEnd(this) : r >= i.text.length ? e.insAtRightEnd(this) : e.insLeftOf(i.splitRight(r)),
                      t - e.show().offset().left),
                    o = s && s < 0 ? m : v,
                    a = o;
                  e[o] && 0 < s * a;

                )
                  e[o].moveTowards(o, e), (a = s), (s = t - e.offset().left);
                o * s < -o * a && e[-o].moveTowards(-o, e),
                  e.anticursor
                    ? e.anticursor.parent === this &&
                      ((i = e[m] && e[m].text.length),
                      this.anticursorPosition === i
                        ? (e.anticursor = u.copy(e))
                        : (this.anticursorPosition < i
                            ? ((n = e[m].splitRight(this.anticursorPosition)), (e[m] = n))
                            : (n = e[v].splitRight(this.anticursorPosition - i)),
                          (e.anticursor = u(this, n[m], n))))
                    : (this.anticursorPosition = e[m] && e[m].text.length);
              }),
              (t.blur = function (t) {
                C.prototype.blur.call(this),
                  t &&
                    ("" === this.textContents()
                      ? (this.remove(), t[m] === this ? (t[m] = this[m]) : t[v] === this && (t[v] = this[v]))
                      : l(this));
              }),
              (t.focus = C.prototype.focus);
          })),
        Tt = i(h, function (t, e) {
          function o(t, e) {
            return e.charAt(t === m ? 0 : -1 + e.length);
          }
          (t.init = function (t) {
            e.init.call(this), (this.text = t);
          }),
            (t.jQadd = function (t) {
              (this.dom = t), (this.jQ = y(t));
            }),
            (t.jQize = function () {
              return this.jQadd(document.createTextNode(this.text));
            }),
            (t.appendText = function (t) {
              (this.text += t), this.dom.appendData(t);
            }),
            (t.prependText = function (t) {
              (this.text = t + this.text), this.dom.insertData(0, t);
            }),
            (t.insTextAtDirEnd = function (t, e) {
              a(e), e === v ? this.appendText(t) : this.prependText(t);
            }),
            (t.splitRight = function (t) {
              var e = Tt(this.text.slice(t)).adopt(this.parent, this, this[v]);
              return e.jQadd(this.dom.splitText(t)), (this.text = this.text.slice(0, t)), e;
            }),
            (t.moveTowards = function (t, e) {
              a(t);
              var n = o(-t, this.text),
                i = this[-t];
              return i ? i.insTextAtDirEnd(n, t) : Tt(n).createDir(-t, e), this.deleteTowards(t, e);
            }),
            (t.latex = function () {
              return this.text;
            }),
            (t.deleteTowards = function (t, e) {
              1 < this.text.length
                ? t === v
                  ? (this.dom.deleteData(0, 1), (this.text = this.text.slice(1)))
                  : (this.dom.deleteData(-1 + this.text.length, 1), (this.text = this.text.slice(0, -1)))
                : (this.remove(), this.jQ.remove(), (e[t] = this[t]));
            }),
            (t.selectTowards = function (t, e) {
              a(t);
              var n,
                i,
                r = e.anticursor,
                s = o(-t, this.text);
              return (
                r[t] === this
                  ? ((i = Tt(s).createDir(t, e)), (r[t] = i), e.insDirOf(t, i))
                  : ((n = this[-t]) ? n.insTextAtDirEnd(s, t) : (i = Tt(s).createDir(-t, e)).jQ.insDirOf(-t, e.selection.jQ),
                    1 === this.text.length && r[-t] === this && (r[-t] = this[-t])),
                this.deleteTowards(t, e)
              );
            });
        });
      function Ct(t, e, n) {
        return i(qt, {
          ctrlSeq: t,
          htmlTemplate: "<" + e + " " + n + ">&0</" + e + ">"
        });
      }
      (l.text = l.textnormal = l.textrm = l.textup = l.textmd = qt),
        (l.em = l.italic = l.italics = l.emph = l.textit = l.textsl = Ct("\\textit", "i", 'class="mq-text-mode"')),
        (l.strong = l.bold = l.textbf = Ct("\\textbf", "b", 'class="mq-text-mode"')),
        (l.sf = l.textsf = Ct("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"')),
        (l.tt = l.texttt = Ct("\\texttt", "span", 'class="mq-monospace mq-text-mode"')),
        (l.textsc = Ct("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"')),
        (l.uppercase = Ct("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"')),
        (l.lowercase = Ct("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"'));
      var kt,
        jt,
        Ot = i(o, function (t, e) {
          (t.init = function (t) {
            e.init.call(this, "$"), (this.cursor = t);
          }),
            (t.htmlTemplate = '<span class="mq-math-mode">&0</span>'),
            (t.createBlocks = function () {
              e.createBlocks.call(this),
                (this.ends[m].cursor = this.cursor),
                (this.ends[m].write = function (t, e) {
                  "$" !== e
                    ? C.prototype.write.call(this, t, e)
                    : this.isEmpty()
                    ? (t.insRightOf(this.parent), this.parent.deleteTowards(dir, t), d("\\$", "$").createLeftOf(t.show()))
                    : t[v]
                    ? t[m]
                      ? C.prototype.write.call(this, t, e)
                      : t.insLeftOf(this.parent)
                    : t.insRightOf(this.parent);
                });
            }),
            (t.latex = function () {
              return "$" + this.ends[m].latex() + "$";
            });
        }),
        St = i(wt, function (t, e) {
          (t.keystroke = function (t) {
            if ("Spacebar" !== t && "Shift-Spacebar" !== t) return e.keystroke.apply(this, arguments);
          }),
            (t.write = function (t, e) {
              var n;
              t.show().deleteSelection(),
                ("$" === e ? Ot(t) : ("<" === e ? (n = "&lt;") : ">" === e && (n = "&gt;"), d(e, n))).createLeftOf(t);
            });
        }),
        Et =
          ((nt.TextField = function (t) {
            return i(t.EditableField, function (t, e) {
              (this.RootBlock = St),
                (t.__mathquillify = function () {
                  return e.__mathquillify.call(this, "mq-editable-field mq-text-mode");
                }),
                (t.latex = function (t) {
                  return 0 < arguments.length
                    ? (this.__controller.renderLatexText(t),
                      this.__controller.blurred && this.__controller.cursor.hide().parent.blur(),
                      this)
                    : this.__controller.exportLatex();
                });
            });
          }),
          (s["\\"] = i(o, function (t, i) {
            (t.ctrlSeq = "\\"),
              (t.replaces = function (t) {
                (this._replacedFragment = t.disown()),
                  (this.isEmpty = function () {
                    return !1;
                  });
              }),
              (t.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>'),
              (t.textTemplate = ["\\"]),
              (t.createBlocks = function () {
                i.createBlocks.call(this),
                  (this.ends[m].focus = function () {
                    return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), this;
                  }),
                  (this.ends[m].blur = function () {
                    return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), this;
                  }),
                  (this.ends[m].write = function (t, e) {
                    t.show().deleteSelection(),
                      e.match(/[a-z]/i)
                        ? d(e).createLeftOf(t)
                        : (this.parent.renderCommand(t), ("\\" === e && this.isEmpty()) || t.parent.write(t, e));
                  }),
                  (this.ends[m].keystroke = function (t, e, n) {
                    if ("Enter" !== t && "Spacebar" !== t) return i.keystroke.apply(this, arguments);
                    this.parent.renderCommand(n.cursor), e.preventDefault();
                  });
              }),
              (t.createLeftOf = function (t) {
                var e;
                i.createLeftOf.call(this, t),
                  this._replacedFragment &&
                    ((e = this.jQ[0]),
                    (this.jQ = this._replacedFragment.jQ
                      .addClass("mq-blur")
                      .bind("mousedown mousemove", function (t) {
                        return y((t.target = e)).trigger(t), !1;
                      })
                      .insertBefore(this.jQ)
                      .add(this.jQ)));
              }),
              (t.latex = function () {
                return "\\" + this.ends[m].latex() + " ";
              }),
              (t.renderCommand = function (t) {
                (this.jQ = this.jQ.last()), this.remove(), this[v] ? t.insLeftOf(this[v]) : t.insAtRightEnd(this.parent);
                var e = this.ends[m].latex(),
                  n = l[(e = e || " ")] || D[e];
                n
                  ? ((n = n(e)), this._replacedFragment && n.replaces(this._replacedFragment), n.createLeftOf(t))
                  : ((n = qt()).replaces(e), n.createLeftOf(t), t.insRightOf(n), this._replacedFragment && this._replacedFragment.remove());
              });
          })),
          x),
        Dt = document.createElement("div").style;
      for (jt in {
        transform: 1,
        WebkitTransform: 1,
        MozTransform: 1,
        OTransform: 1,
        msTransform: 1
      })
        if (jt in Dt) {
          kt = jt;
          break;
        }
      var At = kt
          ? function (t, e, n) {
              t.css(kt, "scale(" + e + "," + n + ")");
            }
          : "filter" in Dt
          ? ((Et = function (t) {
              t.className = t.className;
            }),
            function (t, e, n) {
              (e /= 1 + (n - 1) / 2),
                t.css("fontSize", n + "em"),
                t.hasClass("mq-matrixed-container") || t.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');
              var i = t.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + e + ",SizingMethod='auto expand')");
              function r() {
                t.css("marginRight", ((i.width() - 1) * (e - 1)) / e + "px");
              }
              r();
              var s = setInterval(r);
              y(window).load(function () {
                clearTimeout(s), r();
              });
            })
          : function (t, e, n) {
              t.css("fontSize", n + "em");
            },
        k = i(o, function (t, i) {
          t.init = function (t, e, n) {
            i.init.call(this, t, "<" + e + " " + n + ">&0</" + e + ">");
          };
        }),
        Lt =
          ((l.mathrm = r(k, "\\mathrm", "span", 'class="mq-roman mq-font"')),
          (l.mathit = r(k, "\\mathit", "i", 'class="mq-font"')),
          (l.mathbf = r(k, "\\mathbf", "b", 'class="mq-font"')),
          (l.mathsf = r(k, "\\mathsf", "span", 'class="mq-sans-serif mq-font"')),
          (l.mathtt = r(k, "\\mathtt", "span", 'class="mq-monospace mq-font"')),
          (l.underline = r(k, "\\underline", "span", 'class="mq-non-leaf mq-underline"')),
          (l.overline = l.bar = r(k, "\\overline", "span", 'class="mq-non-leaf mq-overline"')),
          (l.overrightarrow = r(k, "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"')),
          (l.overleftarrow = r(k, "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"')),
          (l.overleftrightarrow = r(k, "\\overleftrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-both"')),
          (l.overarc = r(k, "\\overarc", "span", 'class="mq-non-leaf mq-overarc"')),
          (l.cancel = r(k, "\\cancel", "span", 'class="mq-non-leaf mq-cancel"')),
          (l.longdiv = r(k, "\\longdiv", "span", 'class="mq-non-leaf mq-longdiv"')),
          (l.dot = i(o, function (t, e) {
            t.init = function () {
              e.init.call(
                this,
                "\\dot",
                '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>'
              );
            };
          })),
          (l.stackrel = i(o, function (t, e) {
            (t.ctrlSeq = "\\stackrel"),
              (t.htmlTemplate =
                '<span class="mq-stackrel mq-non-leaf"><span class="mq-stackrel-top">&0</span><span class="mq-stackrel-bottom">&1</span></span>'),
              (t.textTemplate = ["(", ")/(", ")"]),
              (t.finalizeTree = function () {
                (this.upInto = this.ends[v].upOutOf = this.ends[m]), (this.downInto = this.ends[m].downOutOf = this.ends[v]);
              });
          })),
          (l.textcolor = i(o, function (t, r) {
            (t.setColor = function (t) {
              (this.color = t), (this.htmlTemplate = '<span class="mq-textcolor" style="color:' + t + '">&0</span>');
            }),
              (t.latex = function () {
                return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}";
              }),
              (t.parser = function () {
                var e = this,
                  t = w.optWhitespace,
                  n = w.string,
                  i = w.regex;
                return t
                  .then(n("{"))
                  .then(i(/^[#\w\s.,()%-]*/))
                  .skip(n("}"))
                  .then(function (t) {
                    return e.setColor(t), r.parser.call(e);
                  });
              }),
              (t.isStyleBlock = function () {
                return !0;
              });
          })),
          (l.class = i(o, function (t, i) {
            (t.setClass = function (t) {
              (this.cls = t || ""), (this.htmlTemplate = '<span class="mq-class ' + t + '">&0</span>');
            }),
              (t.parser = function () {
                var e = this,
                  t = w.string,
                  n = w.regex;
                return w.optWhitespace
                  .then(t("{"))
                  .then(n(/^[-\w\s\\\xA0-\xFF]*/))
                  .skip(t("}"))
                  .then(function (t) {
                    return e.setClass(t), i.parser.call(e);
                  });
              }),
              (t.latex = function () {
                return "\\class{" + this.cls + "}{" + this.blocks[0].latex() + "}";
              }),
              (t.isStyleBlock = function () {
                return !0;
              });
          })),
          i(o, function (t, i) {
            (t.ctrlSeq = "_{...}^{...}"),
              (t.createLeftOf = function (t) {
                if (this.replacedFragment || t[m] || !t.options.supSubsRequireOperand) return i.createLeftOf.apply(this, arguments);
              }),
              (t.contactWeld = function (t) {
                for (var i = m; i; i = i === m && v)
                  if (this[i] instanceof Lt) {
                    for (var e = "sub"; e; e = "sub" === e && "sup") {
                      var n,
                        r,
                        s = this[e],
                        o = this[i][e];
                      s &&
                        (o
                          ? s.isEmpty()
                            ? (r = u(o, 0, o.ends[m]))
                            : (s.jQ.children().insAtDirEnd(-i, o.jQ),
                              (n = s.children().disown()),
                              (r = u(o, n.ends[v], o.ends[m])),
                              i === m ? n.adopt(o, o.ends[v], 0) : n.adopt(o, 0, o.ends[m]))
                          : this[i].addBlock(s.disown()),
                        (this.placeCursor = (function (e, n) {
                          return function (t) {
                            t.insAtDirEnd(-i, e || n);
                          };
                        })(o, s)));
                    }
                    this.remove(),
                      t && t[m] === this && (i === v && r ? (r[m] ? t.insRightOf(r[m]) : t.insAtLeftEnd(r.parent)) : t.insRightOf(this[i]));
                    break;
                  }
              }),
              (it.p.charsThatBreakOutOfSupSub = ""),
              (t.finalizeTree = function () {
                this.ends[m].write = function (t, e) {
                  var n;
                  if (t.options.autoSubscriptNumerals && this === this.parent.sub)
                    return "_" === e
                      ? void 0
                      : ((n = this.chToCmd(e, t.options)) instanceof p ? t.deleteSelection() : t.clearSelection().insRightOf(this.parent),
                        n.createLeftOf(t.show()));
                  t[m] && !t[v] && !t.selection && -1 < t.options.charsThatBreakOutOfSupSub.indexOf(e) && t.insRightOf(this.parent),
                    C.p.write.apply(this, arguments);
                };
              }),
              (t.moveTowards = function (t, e, n) {
                e.options.autoSubscriptNumerals && !this.sup ? e.insDirOf(t, this) : i.moveTowards.apply(this, arguments);
              }),
              (t.deleteTowards = function (t, e) {
                var n;
                e.options.autoSubscriptNumerals && this.sub
                  ? ((n = this.sub.ends[-t]) instanceof p ? n.remove() : n && n.deleteTowards(t, e.insAtDirEnd(-t, this.sub)),
                    this.sub.isEmpty() && (this.sub.deleteOutOf(m, e.insAtLeftEnd(this.sub)), this.sup) && e.insDirOf(-t, this))
                  : i.deleteTowards.apply(this, arguments);
              }),
              (t.latex = function () {
                function t(t, e) {
                  var n = e && e.latex();
                  return e ? t + (1 === n.length ? n : "{" + (n || " ") + "}") : "";
                }
                return t("_", this.sub) + t("^", this.sup);
              }),
              (t.addBlock = function (t) {
                "sub" === this.supsub
                  ? (((this.sup = this.upInto = this.sub.upOutOf = t).adopt(this, this.sub, 0).downOutOf = this.sub),
                    (t.jQ = y('<span class="mq-sup"/>').append(t.jQ.children()).attr(g, t.id).prependTo(this.jQ)))
                  : (((this.sub = this.downInto = this.sup.downOutOf = t).adopt(this, 0, this.sup).upOutOf = this.sup),
                    (t.jQ = y('<span class="mq-sub"></span>')
                      .append(t.jQ.children())
                      .attr(g, t.id)
                      .appendTo(this.jQ.removeClass("mq-sup-only"))),
                    this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>'));
                for (var e = 0; e < 2; e += 1)
                  !(function (i, r, s, o) {
                    i[r].deleteOutOf = function (t, e) {
                      var n;
                      e.insDirOf(this[t] ? -t : t, this.parent),
                        this.isEmpty() ||
                          ((n = this.ends[t]),
                          this.children().disown().withDirAdopt(t, e.parent, e[t], e[-t]).jQ.insDirOf(-t, e.jQ),
                          (e[-t] = n)),
                        (i.supsub = s),
                        delete i[r],
                        delete i[o + "Into"],
                        (i[s][o + "OutOf"] = Qt),
                        delete i[s].deleteOutOf,
                        "sub" === r && y(i.jQ.addClass("mq-sup-only")[0].lastChild).remove(),
                        this.remove();
                    };
                  })(this, "sub sup".split(" ")[e], "sup sub".split(" ")[e], "down up".split(" ")[e]);
              }),
              (t.reflow = function () {
                var t,
                  e = this.jQ,
                  n = e.prev();
                n.length &&
                  (e = e.children(".mq-sup")).length &&
                  ((t = parseInt(e.css("font-size"))),
                  (n = e.offset().top + e.height() - n.offset().top - 0.7 * t),
                  (t = parseInt(e.css("margin-bottom"))),
                  e.css("margin-bottom", t + n));
              });
          }));
      function Qt(t) {
        var e = this.parent,
          n = t;
        do {
          if (n[v]) return t.insLeftOf(e);
        } while ((n = n.parent.parent) !== e);
        t.insRightOf(e);
      }
      (l.subscript = l._ =
        i(Lt, function (t, e) {
          (t.supsub = "sub"),
            (t.htmlTemplate =
              '<span class="mq-supsub mq-non-leaf"><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203;</span></span>'),
            (t.textTemplate = ["_"]),
            (t.finalizeTree = function () {
              (this.downInto = this.sub = this.ends[m]), (this.sub.upOutOf = Qt), e.finalizeTree.call(this);
            });
        })),
        (l.superscript =
          l.supscript =
          l["^"] =
            i(Lt, function (t, e) {
              (t.supsub = "sup"),
                (t.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">&0</span></span>'),
                (t.textTemplate = ["^"]),
                (t.finalizeTree = function () {
                  (this.upInto = this.sup = this.ends[v]), (this.sup.downOutOf = Qt), e.finalizeTree.call(this);
                });
            }));
      var _t = i(o, function (t, e) {
          (t.init = function (t, e) {
            e =
              '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' +
              e +
              '</big><span class="mq-from"><span>&0</span></span></span>';
            p.prototype.init.call(this, t, e);
          }),
            (t.createLeftOf = function (t) {
              e.createLeftOf.apply(this, arguments), t.options.sumStartsWithNEquals && (Q("n").createLeftOf(t), Zt().createLeftOf(t));
            }),
            (t.latex = function () {
              function t(t) {
                return 1 === t.length ? t : "{" + (t || " ") + "}";
              }
              return this.ctrlSeq + "_" + t(this.ends[m].latex()) + "^" + t(this.ends[v].latex());
            }),
            (t.parser = function () {
              for (
                var t = w.string, e = w.optWhitespace, n = w.succeed, i = q.block, r = this, s = (r.blocks = [C(), C()]), o = 0;
                o < s.length;
                o += 1
              )
                s[o].adopt(r, r.ends[v], 0);
              return e
                .then(t("_").or(t("^")))
                .then(function (t) {
                  var e = s["_" === t ? 0 : 1];
                  return i.then(function (t) {
                    return t.children().adopt(e, e.ends[v], 0), n(r);
                  });
                })
                .many()
                .result(r);
            }),
            (t.finalizeTree = function () {
              (this.downInto = this.ends[m]),
                (this.upInto = this.ends[v]),
                (this.ends[m].upOutOf = this.ends[v]),
                (this.ends[v].downOutOf = this.ends[m]);
            });
        }),
        t =
          ((l["\u2211"] = l.sum = l.summation = r(_t, "\\sum ", "&sum;")),
          (l["\u220f"] = l.prod = l.product = r(_t, "\\prod ", "&prod;")),
          (l.coprod = l.coproduct = r(_t, "\\coprod ", "&#8720;")),
          (l["\u222b"] =
            l.int =
            l.integral =
              i(_t, function (t, e) {
                (t.init = function () {
                  var t =
                    '<span class="mq-int mq-non-leaf"><big>&int;</big><span class="mq-supsub mq-non-leaf"><span class="mq-sup"><span class="mq-sup-inner">&1</span></span><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>';
                  p.prototype.init.call(this, "\\int ", t);
                }),
                  (t.createLeftOf = o.p.createLeftOf);
              })),
          i(o, function (t, e) {
            (t.init = function (t, e) {
              e =
                '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' +
                e +
                '</big><span class="mq-from"><span>&0</span></span></span>';
              p.prototype.init.call(this, t, e);
            }),
              (t.createLeftOf = function (t) {
                e.createLeftOf.apply(this, arguments), t.options.sumStartsWithNEquals && (Q("n").createLeftOf(t), Zt().createLeftOf(t));
              }),
              (t.latex = function () {
                function t(t) {
                  return 1 === t.length ? t : "{" + (t || " ") + "}";
                }
                return this.ctrlSeq + "_" + t(this.ends[m].latex());
              }),
              (t.parser = function () {
                for (
                  var t = w.string, e = w.optWhitespace, n = w.succeed, i = q.block, r = this, s = (r.blocks = [C()]), o = 0;
                  o < s.length;
                  o += 1
                )
                  s[o].adopt(r, r.ends[v], 0);
                return e
                  .then(t("_").or(t("^")))
                  .then(function (t) {
                    var e = s["_" === t ? 0 : 1];
                    return i.then(function (t) {
                      return t.children().adopt(e, e.ends[v], 0), n(r);
                    });
                  })
                  .many()
                  .result(r);
              }),
              (t.finalizeTree = function () {
                (this.downInto = this.ends[m]),
                  (this.upInto = this.ends[v]),
                  (this.ends[m].upOutOf = this.ends[v]),
                  (this.ends[v].downOutOf = this.ends[m]);
              });
          })),
        j =
          ((l.lim = i(t, function (t, e) {
            t.init = function () {
              var t =
                '<span class="mq-stackrel mq-non-leaf"><span class="mq-supsub mq-non-leaf"><span class="mq-sup" style="text-align: center"><span class="mq-sup-inner">lim</span></span><span class="mq-sub" style="text-align: center">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>';
              p.prototype.init.call(this, "\\lim ", t);
            };
          })),
          (l.frac =
            l.dfrac =
            l.cfrac =
            l.fraction =
              i(o, function (t, e) {
                (t.ctrlSeq = "\\frac"),
                  (t.htmlTemplate =
                    '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator">&0</span><span class="mq-denominator">&1</span><span style="display:inline-block;width:0">&#8203;</span></span>'),
                  (t.textTemplate = ["(", ")/(", ")"]),
                  (t.finalizeTree = function () {
                    (this.upInto = this.ends[v].upOutOf = this.ends[m]), (this.downInto = this.ends[m].downOutOf = this.ends[v]);
                  });
              }))),
        Nt =
          (l.over =
          s["/"] =
            i(j, function (t, n) {
              t.createLeftOf = function (t) {
                if (!this.replacedFragment) {
                  for (
                    var e = t[m];
                    e &&
                    !(e instanceof T || e instanceof (l.text || x) || e instanceof _t || "\\ " === e.ctrlSeq || /^[,;:]$/.test(e.ctrlSeq));

                  )
                    e = e[m];
                  (e = e instanceof _t && e[v] instanceof Lt && (e = e[v])[v] instanceof Lt && e[v].ctrlSeq != e.ctrlSeq ? e[v] : e) !==
                    t[m] && (this.replaces(b(e[v] || t.parent.ends[m], t[m])), (t[m] = e));
                }
                n.createLeftOf.call(this, t);
              };
            })),
        O =
          (l.sqrt =
          l["\u221a"] =
            i(o, function (t, e) {
              (t.ctrlSeq = "\\sqrt"),
                (t.htmlTemplate =
                  '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem">&0</span></span>'),
                (t.textTemplate = ["sqrt(", ")"]),
                (t.parser = function () {
                  return q.optBlock
                    .then(function (n) {
                      return q.block.map(function (t) {
                        var e = Rt();
                        return (e.blocks = [n, t]), n.adopt(e, 0, 0), t.adopt(e, n, 0), e;
                      });
                    })
                    .or(e.parser.call(this));
                }),
                (t.reflow = function () {
                  var t = this.ends[v].jQ;
                  At(t.prev(), 1, t.innerHeight() / +t.css("fontSize").slice(0, -2) - 0.1);
                });
            })),
        Rt =
          ((l.hat = i(o, function (t, e) {
            (t.ctrlSeq = "\\hat"),
              (t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-hat-prefix">^</span><span class="mq-hat-stem">&0</span></span>'),
              (t.textTemplate = ["hat(", ")"]);
          })),
          (l.nthroot = i(O, function (t, e) {
            (t.htmlTemplate =
              '<sup class="mq-nthroot mq-non-leaf">&0</sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf">&1</span></span>'),
              (t.textTemplate = ["sqrt[", "](", ")"]),
              (t.latex = function () {
                return "\\sqrt[" + this.ends[m].latex() + "]{" + this.ends[v].latex() + "}";
              });
          }))),
        S = i(o, function (t, i) {
          t.init = function (t, e, n) {
            e =
              '<span class="mq-non-leaf"><span class="mq-diacritic-above">' + e + '</span><span class="mq-diacritic-stem">&0</span></span>';
            i.init.call(this, t, e, n);
          };
        });
      function It(t, e) {
        (t.jQadd = function () {
          e.jQadd.apply(this, arguments),
            (this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last"))),
            (this.contentjQ = this.jQ.children(":eq(1)"));
        }),
          (t.reflow = function () {
            var t = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
            At(this.delimjQs, z(1 + 0.2 * (t - 1), 1.2), 1.2 * t);
          });
      }
      (l.vec = r(S, "\\vec", "&rarr;", ["vec(", ")"])), (l.tilde = r(S, "\\tilde", "~", ["tilde(", ")"]));
      var E = i(i(o, It), function (t, s) {
          (t.init = function (t, e, n, i, r) {
            s.init.call(this, "\\left" + i, H, [e, n]),
              (this.side = t),
              (this.sides = {}),
              (this.sides[m] = {
                ch: e,
                ctrlSeq: i
              }),
              (this.sides[v] = {
                ch: n,
                ctrlSeq: r
              });
          }),
            (t.numBlocks = function () {
              return 1;
            }),
            (t.html = function () {
              return (
                (this.htmlTemplate =
                  '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' +
                  (this.side === v ? " mq-ghost" : "") +
                  '">' +
                  this.sides[m].ch +
                  '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' +
                  (this.side === m ? " mq-ghost" : "") +
                  '">' +
                  this.sides[v].ch +
                  "</span></span>"),
                s.html.call(this)
              );
            }),
            (t.latex = function () {
              return "\\left" + this.sides[m].ctrlSeq + this.ends[m].latex() + "\\right" + this.sides[v].ctrlSeq;
            }),
            (t.matchBrack = function (t, e, n) {
              return (
                n instanceof E &&
                n.side &&
                n.side !== -e &&
                (!t.restrictMismatchedBrackets ||
                  Ht[this.sides[this.side].ch] === n.sides[n.side].ch ||
                  {
                    "(": "]",
                    "[": ")"
                  }[this.sides[m].ch] === n.sides[v].ch) &&
                n
              );
            }),
            (t.closeOpposing = function (t) {
              (t.side = 0),
                (t.sides[this.side] = this.sides[this.side]),
                t.delimjQs
                  .eq(this.side === m ? 0 : 1)
                  .removeClass("mq-ghost")
                  .html(this.sides[this.side].ch);
            }),
            (t.createLeftOf = function (t) {
              var e, n;
              this.replacedFragment ||
                ((e = t.options),
                (e =
                  "|" === this.sides[m].ch
                    ? this.matchBrack(e, v, t[v]) || this.matchBrack(e, m, t[m]) || this.matchBrack(e, 0, t.parent.parent)
                    : this.matchBrack(e, -this.side, t[-this.side]) || this.matchBrack(e, -this.side, t.parent.parent))),
                e
                  ? ((n = this.side = -e.side),
                    this.closeOpposing(e),
                    e === t.parent.parent &&
                      t[n] &&
                      b(t[n], t.parent.ends[n], -n).disown().withDirAdopt(-n, e.parent, e, e[n]).jQ.insDirOf(n, e.jQ),
                    e.bubble("reflow"))
                  : ((n = (e = this).side),
                    e.replacedFragment ? (e.side = 0) : t[-n] && (e.replaces(b(t[-n], t.parent.ends[-n], n)), (t[-n] = 0)),
                    s.createLeftOf.call(e, t)),
                n === m ? t.insAtLeftEnd(e.ends[m]) : t.insRightOf(e);
            }),
            (t.placeCursor = x),
            (t.unwrap = function () {
              this.ends[m].children().disown().adopt(this.parent, this, this[v]).jQ.insertAfter(this.jQ), this.remove();
            }),
            (t.deleteSide = function (t, e, n) {
              var i = this.parent,
                r = this[t],
                s = i.ends[t];
              if (t === this.side) this.unwrap(), r ? n.insDirOf(-t, r) : n.insAtDirEnd(t, i);
              else {
                var o = n.options,
                  a = !this.side;
                if (((this.side = -t), this.matchBrack(o, t, this.ends[m].ends[this.side]))) {
                  this.closeOpposing(this.ends[m].ends[this.side]);
                  var l = this.ends[m].ends[t];
                  this.unwrap(), l.siblingCreated && l.siblingCreated(n.options, t), r ? n.insDirOf(-t, r) : n.insAtDirEnd(t, i);
                } else {
                  if (this.matchBrack(o, t, this.parent.parent)) this.parent.parent.closeOpposing(this), this.parent.parent.unwrap();
                  else {
                    if (e && a) return this.unwrap(), void (r ? n.insDirOf(-t, r) : n.insAtDirEnd(t, i));
                    (this.sides[t] = {
                      ch: Ht[this.sides[this.side].ch],
                      ctrlSeq: Ht[this.sides[this.side].ctrlSeq]
                    }),
                      this.delimjQs
                        .removeClass("mq-ghost")
                        .eq(t === m ? 0 : 1)
                        .addClass("mq-ghost")
                        .html(this.sides[t].ch);
                  }
                  r
                    ? ((l = this.ends[m].ends[t]),
                      b(r, s, -t).disown().withDirAdopt(-t, this.ends[m], l, 0).jQ.insAtDirEnd(t, this.ends[m].jQ.removeClass("mq-empty")),
                      l.siblingCreated && l.siblingCreated(n.options, t),
                      n.insDirOf(-t, r))
                    : e
                    ? n.insDirOf(t, this)
                    : n.insAtDirEnd(t, this.ends[m]);
                }
              }
            }),
            (t.deleteTowards = function (t, e) {
              this.deleteSide(-t, !1, e);
            }),
            (t.finalizeTree = function () {
              (this.ends[m].deleteOutOf = function (t, e) {
                this.parent.deleteSide(t, !0, e);
              }),
                (this.finalizeTree = this.intentionalBlur =
                  function () {
                    this.delimjQs.eq(this.side === m ? 1 : 0).removeClass("mq-ghost"), (this.side = 0);
                  });
            }),
            (t.siblingCreated = function (t, e) {
              e === -this.side && this.finalizeTree();
            });
        }),
        Ht = {
          "(": ")",
          ")": "(",
          "[": "]",
          "]": "[",
          "{": "}",
          "}": "{",
          "\\{": "\\}",
          "\\}": "\\{",
          "&lang;": "&rang;",
          "&rang;": "&lang;",
          "\\langle ": "\\rangle ",
          "\\rangle ": "\\langle ",
          "|": "|",
          "\\lVert ": "\\rVert ",
          "\\rVert ": "\\lVert "
        };
      function Bt(t, e) {
        var e = e || t,
          n = Ht[t],
          i = Ht[e];
        (s[t] = r(E, m, t, n, e, i)), (s[n] = r(E, v, t, n, e, i));
      }
      Bt("("),
        Bt("["),
        Bt("{", "\\{"),
        (l.langle = r(E, m, "&lang;", "&rang;", "\\langle ", "\\rangle ")),
        (l.rangle = r(E, v, "&lang;", "&rang;", "\\langle ", "\\rangle ")),
        (s["|"] = r(E, m, "|", "|", "|", "|")),
        (l.lVert = r(E, m, "&#8741;", "&#8741;", "\\lVert ", "\\rVert ")),
        (l.rVert = r(E, v, "&#8741;", "&#8741;", "\\lVert ", "\\rVert ")),
        (l.left = i(o, function (t) {
          t.parser = function () {
            var t = w.regex,
              e = w.string,
              s = (w.succeed, w.optWhitespace);
            return s.then(t(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/)).then(function (i) {
              var r = "\\" === i.charAt(0) ? i.slice(1) : i;
              return (
                "\\langle" == i && ((r = "&lang;"), (i += " ")),
                "\\lVert" == i && ((r = "&#8741;"), (i += " ")),
                q.then(function (n) {
                  return e("\\right")
                    .skip(s)
                    .then(t(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/))
                    .map(function (t) {
                      var e = "\\" === t.charAt(0) ? t.slice(1) : t,
                        e =
                          ("\\rangle" == t && ((e = "&rang;"), (t += " ")),
                          "\\rVert" == t && ((e = "&#8741;"), (t += " ")),
                          E(0, r, e, i, t));
                      return (e.blocks = [n]), n.adopt(e, 0, 0), e;
                    });
                })
              );
            });
          };
        })),
        (l.right = i(o, function (t) {
          t.parser = function () {
            return w.fail("unmatched \\right");
          };
        }));
      for (
        var e =
            (l.binom =
            l.binomial =
              i(i(o, It), function (t, e) {
                (t.ctrlSeq = "\\binom"),
                  (t.htmlTemplate =
                    '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>'),
                  (t.textTemplate = ["choose(", ",", ")"]);
              })),
          Mt =
            ((l.choose = i(e, function (t) {
              t.createLeftOf = Nt.prototype.createLeftOf;
            })),
            (l.editable = l.MathQuillMathField =
              i(o, function (t, r) {
                (t.ctrlSeq = "\\MathQuillMathField"),
                  (t.htmlTemplate = '<span class="mq-editable-field"><span class="mq-root-block">&0</span></span>'),
                  (t.parser = function () {
                    var e = this,
                      t = w.string,
                      n = w.regex,
                      i = w.succeed;
                    return t("[")
                      .then(n(/^[a-z][a-z0-9]*/i))
                      .skip(t("]"))
                      .map(function (t) {
                        e.name = t;
                      })
                      .or(i())
                      .then(r.parser.call(e));
                  }),
                  (t.finalizeTree = function (t) {
                    t = f(this.ends[m], this.jQ, t);
                    (t.KIND_OF_MQ = "MathField"),
                      (t.editable = !0),
                      t.createTextarea(),
                      t.editablesTextareaEvents(),
                      t.cursor.insAtRightEnd(t.root),
                      ht(t.root);
                  }),
                  (t.registerInnerField = function (t, e) {
                    t.push((t[this.name] = e(this.ends[m].controller)));
                  }),
                  (t.latex = function () {
                    return this.ends[m].latex();
                  }),
                  (t.text = function () {
                    return this.ends[m].text();
                  });
              })),
            (l.embed = i(p, function (t, e) {
              (t.setOptions = function (t) {
                function e() {
                  return "";
                }
                return (this.text = t.text || e), (this.htmlTemplate = t.htmlString || ""), (this.latex = t.latex || e), this;
              }),
                (t.parser = function () {
                  var n = this,
                    t = w.string,
                    i = w.regex,
                    r = w.succeed;
                  return t("{")
                    .then(i(/^[a-z][a-z0-9]*/i))
                    .skip(t("}"))
                    .then(function (e) {
                      return t("[")
                        .then(i(/^[-\w\s]*/))
                        .skip(t("]"))
                        .or(r())
                        .map(function (t) {
                          return n.setOptions(ot[e](t));
                        });
                    });
                });
            }))),
          D = {},
          k =
            ((l.begin = i(o, function (t, e) {
              t.parser = function () {
                var e = w.string,
                  t = w.regex;
                return e("{")
                  .then(t(/^[a-z]+\*?/i))
                  .skip(e("}"))
                  .then(function (t) {
                    return (D[t] ? D[t]().parser() : w.fail("unknown environment type: " + t)).skip(e("\\end{" + t + "}"));
                  });
              };
            })),
            i(o, function (t, e) {
              (t.template = [
                ["\\begin{", "}"],
                ["\\end{", "}"]
              ]),
                (t.wrappers = function () {
                  return [t.template[0].join(this.environment), t.template[1].join(this.environment)];
                });
            })),
          t = i(k, function (t, e) {
            (t.delimiters = {
              column: "&",
              row: "\\\\"
            }),
              (t.addColumn = function (e) {
                var n,
                  t,
                  i = [],
                  r = [];
                this.eachChild(function (t) {
                  (i[t.row] = i[t.row] || []), i[t.row].push(t), t === e && (n = i[t.row].length);
                });
                for (var s = 0; s < i.length; s += 1)
                  ((t = A(s)).parent = this),
                    r.push(t),
                    i[s].splice(n, 0, t),
                    (t.jQ = y('<td class="mq-empty">').attr(g, t.id)),
                    this.getCellAlignmentClass && t.jQ.addClass(this.getCellAlignmentClass(i[s].length));
                return (
                  this.jQ
                    .find("tbody")
                    .first()
                    .children()
                    .filter("tr")
                    .each(function (t) {
                      y(this)
                        .children()
                        .filter("td")
                        .eq(n - 1)
                        .after(i[t][n].jQ);
                    }),
                  (this.blocks = [].concat.apply([], i)),
                  r[e.row]
                );
              }),
              (t.latex = function () {
                var e,
                  n = this.delimiters,
                  i = "";
                return (
                  this.eachChild(function (t) {
                    void 0 !== e && (i += e !== t.row ? n.row + "\r\n" : n.column), (e = t.row), (i += t.latex());
                  }),
                  this.wrappers().join(i)
                );
              }),
              (t.tableHtml = function () {
                var e,
                  n = [],
                  i = "",
                  r = 0;
                return (
                  this.eachChild(function (t) {
                    e !== t.row && ((e = t.row), (i += "<tr>$tds</tr>"), (n[e] = [])), n[e].push("<td>&" + r++ + "</td>");
                  }),
                  '<table class="mq-non-leaf">' +
                    i.replace(/\$tds/g, function () {
                      return n.shift().join("");
                    }) +
                    "</table>"
                );
              }),
              (t.parser = function () {
                var s = this,
                  o = this.delimiters,
                  t = w.optWhitespace,
                  e = w.string;
                return t
                  .then(e(o.column).or(e(o.row)).or(q.block))
                  .many()
                  .skip(t)
                  .then(function (t) {
                    var e = [],
                      n = 0;
                    function i() {
                      s.blocks.push(A(n, s, e)), (e = []);
                    }
                    s.blocks = [];
                    for (var r = 0; r < t.length; r += 1) t[r] instanceof C ? e.push(t[r]) : (i(), t[r] === o.row && (n += 1));
                    return i(), s.autocorrect(), w.succeed(s);
                  });
              }),
              (t.finalizeTree = function () {
                var t = this.jQ.find("table");
                t.toggleClass("mq-rows-1", 1 === t.find("tr").length), this.relink();
              }),
              (t.getEntryPoint = function (t, e, n) {
                return "up" === n
                  ? t === m
                    ? this.blocks[this.rowSize - 1]
                    : this.blocks[0]
                  : t === m
                  ? this.blocks[this.blocks.length - 1]
                  : this.blocks[this.blocks.length - this.rowSize];
              }),
              (t.atExitPoint = function (t, e) {
                e = this.blocks.indexOf(e.parent);
                return t === m ? e % this.rowSize == 0 : (e + 1) % this.rowSize == 0;
              }),
              (t.moveTowards = function (t, e, n) {
                n = n && this.getEntryPoint(t, e, n);
                e.insAtDirEnd(-t, n || this.ends[-t]);
              }),
              (t.relink = function () {
                var t,
                  e,
                  n,
                  i = this.blocks,
                  r = [];
                this.rowSize = i.length;
                for (var s = 0; s < i.length; s += 1)
                  t !== (n = i[s]).row && (1 === n.row && (this.rowSize = e), (r[(t = n.row)] = []), (e = 0)),
                    ((r[t][e] = n)[v] = i[s + 1]),
                    (n[m] = i[s - 1]),
                    r[t - 1] && r[t - 1][e] && ((n.upOutOf = r[t - 1][e]), (r[t - 1][e].downOutOf = n)),
                    (e += 1);
                (this.ends[m] = i[0]), (this.ends[v] = i[i.length - 1]);
              }),
              (t.autocorrect = function () {
                for (var t, e, n, i, r = [], s = [], o = this.blocks, a = 0; a < o.length; a += 1)
                  (s[(i = o[a].row)] = s[i] || []), s[i].push(o[a]), (r[i] = s[i].length);
                if ((t = Math.max.apply(null, r)) !== Math.min.apply(null, r)) {
                  for (a = 0; a < s.length; a += 1)
                    for (e = t - s[a].length; e; ) (n = t * a + s[a].length), o.splice(n, 0, A(a, this)), --e;
                  this.relink();
                }
              }),
              (t.deleteCell = function (e, t) {
                var n,
                  i,
                  r = [],
                  s = [],
                  o = [],
                  a = [],
                  l = this.blocks;
                function c(t) {
                  for (var e = [], n = 0; n < t.length; n += 1) t[n].isEmpty() && e.push(t[n]);
                  return e.length === t.length;
                }
                function u(t) {
                  for (var e = 0; e < t.length; e += 1) -1 < l.indexOf(t[e]) && (t[e].remove(), l.splice(l.indexOf(t[e]), 1));
                }
                this.eachChild(function (t) {
                  n !== t.row && ((n = t.row), (r[n] = []), (i = 0)),
                    (s[i] = s[i] || []),
                    s[i].push(t),
                    r[n].push(t),
                    t === e && ((o = r[n]), (a = s[i])),
                    (i += 1);
                }),
                  c(o) &&
                    1 < a.length &&
                    ((n = r.indexOf(o)),
                    this.eachChild(function (t) {
                      t.row > n && --t.row;
                    }),
                    u(o),
                    this.jQ.find("tbody").first().children().filter("tr").eq(n).remove()),
                  (t || (this.removeEmptyColumns && c(a) && 1 < o.length)) && u(a),
                  this.finalizeTree();
              }),
              (t.duplicateRow = function (t) {
                return this.addRow(t, !0);
              }),
              (t.addRow = function (e, t) {
                for (
                  var n,
                    i = [],
                    r = [],
                    s = [],
                    o = y("<tr></tr>"),
                    a = e.row,
                    l = 0,
                    c =
                      (this.eachChild(function (t) {
                        t.row <= a && i.push(t), t.row === a && (t === e && (n = l), (l += 1)), t.row > a && ((t.row += 1), s.push(t));
                      }),
                      i.filter(function (t) {
                        return t.row === a;
                      })),
                    u = 0;
                  u < l;
                  u += 1
                ) {
                  var f,
                    h,
                    p,
                    d = !1,
                    m = ((f = A(a + 1)).jQ = y("<td>"));
                  (f.parent = this),
                    r.push(f),
                    this.htmlColumnSeparator && !d ? o.append(y(this.htmlColumnSeparator)) : m.addClass("mq-empty"),
                    ("array" !== this.environment && "tabular" !== this.environment) || m.addClass(this.getCellAlignmentClass(u)),
                    m.attr(g, f.id).appendTo(o),
                    this.jQ.find("tbody").first().children().filter("tr").eq(a).after(o),
                    !0 === t &&
                      ((d = this.parent.cursor),
                      (h = w.all),
                      (p = w.eof),
                      (p = q.skip(p).or(h.result(!1)).parse(c[u].latex())).isEmpty() || m.removeClass("mq-empty"),
                      p.children().adopt(f, 0, 0),
                      f.jQ.html(p.join("html")),
                      f.jQize(f.jQ.children()),
                      p.finalizeInsert(d.options),
                      this.finalizeTree(),
                      this.bubble("reflow"));
                }
                return (this.blocks = i.concat(r, s)), r[n];
              }),
              (t.insert = function (t, e, n) {
                this[t] && ((t = this[t](e)), this.finalizeTree(), this.bubble("reflow"), n.insAtRightEnd(t));
              }),
              (t.backspace = function (t, e, n, i) {
                var r = t[e];
                if (t.isEmpty()) {
                  for (this.deleteCell(t); r && r[e] && -1 === this.blocks.indexOf(r); ) r = r[e];
                  r && n.insAtDirEnd(-e, r),
                    1 === this.blocks.length && this.blocks[0].isEmpty() && (i(), this.finalizeTree()),
                    this.bubble("edited");
                }
              });
          }),
          j = (D.matrix = i(t, function (t, e) {
            (t.environment = "matrix"),
              (t.removeEmptyColumns = !0),
              (t.parentheses = {
                left: "",
                right: ""
              }),
              (t.reflow = function () {
                var t,
                  e = this.jQ.children("table");
                e.length &&
                  ((e = e.outerHeight() / +e.css("fontSize").slice(0, -2)), (t = this.jQ.children(".mq-paren")).length) &&
                  At(t, z(1 + 0.2 * (e - 1), 1.2), 1.05 * e);
              }),
              (t.html = function () {
                function t(t) {
                  return t ? '<span class="mq-scaled mq-paren">' + t + "</span>" : "";
                }
                return (
                  (this.htmlTemplate =
                    '<span class="mq-tabular mq-non-leaf">' +
                    t(this.parentheses.left) +
                    this.tableHtml() +
                    t(this.parentheses.right) +
                    "</span>"),
                  e.html.call(this)
                );
              }),
              (t.createBlocks = function () {
                this.blocks = [A(0, this), A(0, this), A(1, this), A(1, this)];
              });
          })),
          A =
            ((D.pmatrix = i(j, function (t, e) {
              (t.environment = "pmatrix"),
                (t.parentheses = {
                  left: "(",
                  right: ")"
                });
            })),
            (D.bmatrix = i(j, function (t, e) {
              (t.environment = "bmatrix"),
                (t.parentheses = {
                  left: "[",
                  right: "]"
                });
            })),
            (D.Bmatrix = i(j, function (t, e) {
              (t.environment = "Bmatrix"),
                (t.parentheses = {
                  left: "{",
                  right: "}"
                });
            })),
            (D.vmatrix = i(j, function (t, e) {
              (t.environment = "vmatrix"),
                (t.parentheses = {
                  left: "|",
                  right: "|"
                });
            })),
            (D.Vmatrix = i(j, function (t, e) {
              (t.environment = "Vmatrix"),
                (t.parentheses = {
                  left: "&#8214;",
                  right: "&#8214;"
                });
            })),
            (D.cases = i(j, function (t, e) {
              (t.environment = "cases"),
                (t.parentheses = {
                  left: "{",
                  right: null
                });
            })),
            (D["align*"] = i(t, function (t, e) {
              (t.environment = "align*"),
                (t.removeEmptyColumns = !0),
                (t.createBlocks = function () {
                  this.blocks = [A(0, this), A(0, this)];
                }),
                (t.html = function () {
                  return (
                    (this.htmlTemplate = '<span class="mq-tabular mq-align mq-non-leaf">' + this.tableHtml() + "</span>"), e.html.call(this)
                  );
                });
            })),
            (D.aligned = i(D["align*"], function (t, e) {
              t.environment = "aligned";
            })),
            (D.array = i(t, function (t, e) {
              (t.environment = "array"),
                (t.removeEmptyColumns = !0),
                (t.createBlocks = function () {
                  this.blocks = [A(0, this)];
                }),
                (t.html = function () {
                  return (
                    (this.htmlTemplate = '<span class="mq-tabular mq-array-table mq-non-leaf">' + this.tableHtml() + "</span>"),
                    e.html.call(this)
                  );
                }),
                (t.latex = function () {
                  var e,
                    n = this.delimiters,
                    i = "{" + this.cellAlignmentString + "}";
                  return (
                    this.eachChild(function (t) {
                      void 0 !== e && (i += e !== t.row ? n.row + "\r\n" : n.column), (e = t.row), (i += t.latex());
                    }),
                    this.wrappers().join(i)
                  );
                }),
                (t.getAlignment = function (t) {
                  return t < 0 || t > this.cellAlignment.length - 1
                    ? this.cellAlignment[this.cellAlignment.length - 1] || {
                        align: "l"
                      }
                    : this.cellAlignment[t] || {
                        align: "l"
                      };
                }),
                (t.getCellAlignmentClass = function (t) {
                  var t = this.getAlignment(t),
                    e = "mq-array-align-" + t.align;
                  return t.leftBorder && (e += " mq-array-border-l"), t.rightBorder && (e += " mq-array-border-r"), e;
                }),
                (t.tableHtml = function () {
                  var e,
                    n = [],
                    i = "",
                    r = 0,
                    s = this;
                  return (
                    this.eachChild(function (t) {
                      e !== t.row && ((e = t.row), (i += "<tr>$tds</tr>"), (n[e] = [])),
                        n[e].push('<td class="' + s.getCellAlignmentClass(n[e].length) + '">&' + r++ + "</td>");
                    }),
                    '<table class="mq-non-leaf">' +
                      i.replace(/\$tds/g, function () {
                        return n.shift().join("");
                      }) +
                      "</table>"
                  );
                }),
                (t.parseAlignment = function (t) {
                  for (var e = (t || "").toString().trim(), n = [], i = {}, r = 0; r < e.length; r++) {
                    var s = e.charAt(r);
                    if ("|" === s) {
                      if (r === e.length - 1) return (i.rightBorder = !0), n.push(i), n;
                      i.leftBorder || (i.leftBorder = !0);
                    } else (i.align = s), (r < e.length - 2 || "|" !== e.charAt(r + 1)) && (n.push(i), (i = {}));
                  }
                  return n;
                }),
                (t.parser = function () {
                  var s = this,
                    o = this.delimiters,
                    e = w.optWhitespace,
                    n = w.string,
                    t = w.regex;
                  return e
                    .then(n("{"))
                    .then(t(/^[ |lcr]*/))
                    .skip(n("}"))
                    .then(function (t) {
                      return (
                        (s.cellAlignmentString = t),
                        (s.cellAlignment = s.parseAlignment(t)),
                        e.then(n(s.delimiters.column).or(n(s.delimiters.row)).or(q.block)).many()
                      );
                    })
                    .skip(e)
                    .then(function (t) {
                      var e = [],
                        n = 0;
                      function i() {
                        s.blocks.push(A(n, s, e)), (e = []);
                      }
                      s.blocks = [];
                      for (var r = 0; r < t.length; r += 1) t[r] instanceof C ? e.push(t[r]) : (i(), t[r] === o.row && (n += 1));
                      return i(), s.autocorrect(), w.succeed(s);
                    });
                });
            })),
            i(C, function (t, r) {
              (t.init = function (t, e, n) {
                if ((r.init.call(this), (this.row = t), e && this.adopt(e, e.ends[v], 0), n))
                  for (var i = 0; i < n.length; i++) n[i].children().adopt(this, this.ends[v], 0);
              }),
                (t.keystroke = function (t, e, n) {
                  switch (t) {
                    case "Shift-Spacebar":
                      return e.preventDefault(), this.parent.insert("addColumn", this, n.cursor);

                    case "Shift-Enter":
                      return this.parent.insert("addRow", this, n.cursor);

                    case "Shift-Backspace":
                      return this.parent.deleteCell(n.cursor.parent, !0);

                    case "Ctrl-Shift-Enter":
                      return this.parent.insert("duplicateRow", this, n.cursor);
                  }
                  return r.keystroke.apply(this, arguments);
                }),
                (t.deleteOutOf = function (t, e) {
                  var n = this,
                    i = arguments;
                  this.parent.backspace(this, t, e, function () {
                    return r.deleteOutOf.apply(n, i);
                  });
                }),
                (t.moveOutOf = function (t, e, n) {
                  !(n && this.parent.atExitPoint(t, e)) && this[t] ? e.insAtDirEnd(-t, this[t]) : e.insDirOf(t, this.parent);
                });
            })),
          zt =
            ((l.notin =
              l.cong =
              l.equiv =
              l.oplus =
              l.otimes =
                i(T, function (t, e) {
                  t.init = function (t) {
                    e.init.call(this, "\\" + t + " ", "&" + t + ";");
                  };
                })),
            (l["\u2260"] = l.ne = l.neq = r(T, "\\ne ", "&ne;")),
            (l["\u2217"] = l.ast = l.star = l.loast = l.lowast = r(T, "\\ast ", "&lowast;")),
            (l.therefor = l.therefore = r(T, "\\therefore ", "&there4;")),
            (l.cuz = l.because = r(T, "\\because ", "&#8757;")),
            (l.prop = l.propto = r(T, "\\propto ", "&prop;")),
            (l["\u2248"] = l.approx = r(T, "\\approx ", "&asymp;")),
            (l.asymp = r(T, "\\asymp", "&#x224D;")),
            (l.isin = l.in = r(T, "\\in ", "&isin;")),
            (l.ni = l.contains = r(T, "\\ni ", "&ni;")),
            (l.notni = l.niton = l.notcontains = l.doesnotcontain = r(T, "\\not\\ni ", "&#8716;")),
            (l.sub = l.subset = r(T, "\\subset ", "&sub;")),
            (l.sup = l.supset = l.superset = r(T, "\\supset ", "&sup;")),
            (l.nsub = l.notsub = l.nsubset = l.notsubset = r(T, "\\not\\subset ", "&#8836;")),
            (l.nsup = l.notsup = l.nsupset = l.notsupset = l.nsuperset = l.notsuperset = r(T, "\\not\\supset ", "&#8837;")),
            (l.sube = l.subeq = l.subsete = l.subseteq = r(T, "\\subseteq ", "&sube;")),
            (l.supe = l.supeq = l.supsete = l.supseteq = l.supersete = l.superseteq = r(T, "\\supseteq ", "&supe;")),
            (l.nsube =
              l.nsubeq =
              l.notsube =
              l.notsubeq =
              l.nsubsete =
              l.nsubseteq =
              l.notsubsete =
              l.notsubseteq =
                r(T, "\\not\\subseteq ", "&#8840;")),
            (l.nsupe =
              l.nsupeq =
              l.notsupe =
              l.notsupeq =
              l.nsupsete =
              l.nsupseteq =
              l.notsupsete =
              l.notsupseteq =
              l.nsupersete =
              l.nsuperseteq =
              l.notsupersete =
              l.notsuperseteq =
                r(T, "\\not\\supseteq ", "&#8841;")),
            (l.mathbb = i(o, function (t) {
              (t.createLeftOf = x),
                (t.numBlocks = function () {
                  return 1;
                }),
                (t.parser = function () {
                  var t = w.string,
                    e = w.regex,
                    n = w.optWhitespace;
                  return n
                    .then(t("{"))
                    .then(n)
                    .then(e(/^[NPZQRCH]/))
                    .skip(n)
                    .skip(t("}"))
                    .map(function (t) {
                      return l[t]();
                    });
                });
            })),
            (l.N = l.naturals = l.Naturals = r(d, "\\mathbb{N}", "&#8469;")),
            (l.P = l.primes = l.Primes = l.projective = l.Projective = l.probability = l.Probability = r(d, "\\mathbb{P}", "&#8473;")),
            (l.Z = l.integers = l.Integers = r(d, "\\mathbb{Z}", "&#8484;")),
            (l.Q = l.rationals = l.Rationals = r(d, "\\mathbb{Q}", "&#8474;")),
            (l.R = l.reals = l.Reals = r(d, "\\mathbb{R}", "&#8477;")),
            (l.C =
              l.complex =
              l.Complex =
              l.complexes =
              l.Complexes =
              l.complexplane =
              l.Complexplane =
              l.ComplexPlane =
                r(d, "\\mathbb{C}", "&#8450;")),
            (l.H = l.Hamiltonian = l.quaternions = l.Quaternions = r(d, "\\mathbb{H}", "&#8461;")),
            (l.quad = l.emsp = r(d, "\\quad ", "    ")),
            (l.qquad = r(d, "\\qquad ", "        ")),
            (l.diamond = r(d, "\\diamond ", "&#9671;")),
            (l.bigtriangleup = r(d, "\\bigtriangleup ", "&#9651;")),
            (l.ominus = r(d, "\\ominus ", "&#8854;")),
            (l.uplus = r(d, "\\uplus ", "&#8846;")),
            (l.bigtriangledown = r(d, "\\bigtriangledown ", "&#9661;")),
            (l.sqcap = r(d, "\\sqcap ", "&#8851;")),
            (l.triangleleft = r(d, "\\triangleleft ", "&#8882;")),
            (l.sqcup = r(d, "\\sqcup ", "&#8852;")),
            (l.triangleright = r(d, "\\triangleright ", "&#8883;")),
            (l.odot = l.circledot = r(d, "\\odot ", "&#8857;")),
            (l.bigcirc = r(d, "\\bigcirc ", "&#9711;")),
            (l.dagger = r(d, "\\dagger ", "&#0134;")),
            (l.ddagger = r(d, "\\ddagger ", "&#135;")),
            (l.wr = r(d, "\\wr ", "&#8768;")),
            (l.amalg = r(d, "\\amalg ", "&#8720;")),
            (l.models = r(d, "\\models ", "&#8872;")),
            (l.prec = r(d, "\\prec ", "&#8826;")),
            (l.succ = r(d, "\\succ ", "&#8827;")),
            (l.preceq = r(d, "\\preceq ", "&#8828;")),
            (l.succeq = r(d, "\\succeq ", "&#8829;")),
            (l.simeq = r(d, "\\simeq ", "&#8771;")),
            (l.mid = r(d, "\\mid ", "&#8739;")),
            (l.ll = r(d, "\\ll ", "&#8810;")),
            (l.gg = r(d, "\\gg ", "&#8811;")),
            (l.parallel = r(d, "\\parallel ", "&#8741;")),
            (l.nparallel = r(d, "\\nparallel ", "&#8742;")),
            (l.bowtie = r(d, "\\bowtie ", "&#8904;")),
            (l.sqsubset = r(d, "\\sqsubset ", "&#8847;")),
            (l.sqsupset = r(d, "\\sqsupset ", "&#8848;")),
            (l.smile = r(d, "\\smile ", "&#8995;")),
            (l.sqsubseteq = r(d, "\\sqsubseteq ", "&#8849;")),
            (l.sqsupseteq = r(d, "\\sqsupseteq ", "&#8850;")),
            (l.doteq = r(d, "\\doteq ", "&#8784;")),
            (l.frown = r(d, "\\frown ", "&#8994;")),
            (l.vdash = r(d, "\\vdash ", "&#8870;")),
            (l.dashv = r(d, "\\dashv ", "&#8867;")),
            (l.nless = r(d, "\\nless ", "&#8814;")),
            (l.ngtr = r(d, "\\ngtr ", "&#8815;")),
            (l.longleftarrow = r(d, "\\longleftarrow ", "&#8592;")),
            (l.longrightarrow = r(d, "\\longrightarrow ", "&#8594;")),
            (l.Longleftarrow = r(d, "\\Longleftarrow ", "&#8656;")),
            (l.Longrightarrow = r(d, "\\Longrightarrow ", "&#8658;")),
            (l.longleftrightarrow = r(d, "\\longleftrightarrow ", "&#8596;")),
            (l.updownarrow = r(d, "\\updownarrow ", "&#8597;")),
            (l.Longleftrightarrow = r(d, "\\Longleftrightarrow ", "&#8660;")),
            (l.Updownarrow = r(d, "\\Updownarrow ", "&#8661;")),
            (l.mapsto = r(d, "\\mapsto ", "&#8614;")),
            (l.nearrow = r(d, "\\nearrow ", "&#8599;")),
            (l.hookleftarrow = r(d, "\\hookleftarrow ", "&#8617;")),
            (l.hookrightarrow = r(d, "\\hookrightarrow ", "&#8618;")),
            (l.searrow = r(d, "\\searrow ", "&#8600;")),
            (l.leftharpoonup = r(d, "\\leftharpoonup ", "&#8636;")),
            (l.rightharpoonup = r(d, "\\rightharpoonup ", "&#8640;")),
            (l.rightleftharpoons = r(d, "\\rightleftharpoons ", "&#8651;")),
            (l.leftrightharpoons = r(d, "\\leftrightharpoons ", "&#8652;")),
            (l.swarrow = r(d, "\\swarrow ", "&#8601;")),
            (l.leftharpoondown = r(d, "\\leftharpoondown ", "&#8637;")),
            (l.rightharpoondown = r(d, "\\rightharpoondown ", "&#8641;")),
            (l.nwarrow = r(d, "\\nwarrow ", "&#8598;")),
            (l.ldots = r(d, "\\ldots ", "&#8230;")),
            (l.cdots = r(d, "\\cdots ", "&#8943;")),
            (l.vdots = r(d, "\\vdots ", "&#8942;")),
            (l.ddots = r(d, "\\ddots ", "&#8945;")),
            (l.surd = r(d, "\\surd ", "&#8730;")),
            (l.triangle = r(d, "\\triangle ", "&#9651;")),
            (l.ell = r(d, "\\ell ", "&#8467;")),
            (l.top = r(d, "\\top ", "&#8868;")),
            (l.flat = r(d, "\\flat ", "&#9837;")),
            (l.natural = r(d, "\\natural ", "&#9838;")),
            (l.sharp = r(d, "\\sharp ", "&#9839;")),
            (l.wp = r(d, "\\wp ", "&#8472;")),
            (l.bot = r(d, "\\bot ", "&#8869;")),
            (l.clubsuit = r(d, "\\clubsuit ", "&#9827;")),
            (l.diamondsuit = r(d, "\\diamondsuit ", "&#9826;")),
            (l.heartsuit = r(d, "\\heartsuit ", "&#9825;")),
            (l.spadesuit = r(d, "\\spadesuit ", "&#9824;")),
            (l.parallelogram = r(d, "\\parallelogram ", "&#9649;")),
            (l.square = r(d, "\\square ", "&#11036;")),
            (l.oint = r(d, "\\oint ", "&#8750;")),
            (l.bigcap = r(d, "\\bigcap ", "&#8745;")),
            (l.bigcup = r(d, "\\bigcup ", "&#8746;")),
            (l.bigsqcup = r(d, "\\bigsqcup ", "&#8852;")),
            (l.bigvee = r(d, "\\bigvee ", "&#8744;")),
            (l.bigwedge = r(d, "\\bigwedge ", "&#8743;")),
            (l.bigodot = r(d, "\\bigodot ", "&#8857;")),
            (l.bigotimes = r(d, "\\bigotimes ", "&#8855;")),
            (l.bigoplus = r(d, "\\bigoplus ", "&#8853;")),
            (l.biguplus = r(d, "\\biguplus ", "&#8846;")),
            (l.lfloor = r(d, "\\lfloor ", "&#8970;")),
            (l.rfloor = r(d, "\\rfloor ", "&#8971;")),
            (l.lceil = r(d, "\\lceil ", "&#8968;")),
            (l.rceil = r(d, "\\rceil ", "&#8969;")),
            (l.opencurlybrace = l.lbrace = r(d, "\\lbrace ", "{")),
            (l.closecurlybrace = l.rbrace = r(d, "\\rbrace ", "}")),
            (l.lbrack = r(d, "[")),
            (l.rbrack = r(d, "]")),
            (l.slash = r(d, "/")),
            (l.vert = r(d, "|")),
            (l.perp = l.perpendicular = r(d, "\\perp ", "&perp;")),
            (l.nabla = l.del = r(d, "\\nabla ", "&nabla;")),
            (l.hbar = r(d, "\\hbar ", "&#8463;")),
            (l.AA = l.Angstrom = l.angstrom = r(d, "\\text\\AA ", "&#8491;")),
            (l.ring = l.circ = l.circle = r(d, "\\circ ", "&#8728;")),
            (l.bull = l.bullet = r(d, "\\bullet ", "&bull;")),
            (l.setminus = l.smallsetminus = r(d, "\\setminus ", "&#8726;")),
            (l.not = l["\xac"] = l.neg = r(d, "\\neg ", "&not;")),
            (l["\u2026"] = l.dots = l.ellip = l.hellip = l.ellipsis = l.hellipsis = r(d, "\\dots ", "&hellip;")),
            (l.converges = l.darr = l.dnarr = l.dnarrow = l.downarrow = r(d, "\\downarrow ", "&darr;")),
            (l.dArr = l.dnArr = l.dnArrow = l.Downarrow = r(d, "\\Downarrow ", "&dArr;")),
            (l.diverges = l.uarr = l.uparrow = r(d, "\\uparrow ", "&uarr;")),
            (l.uArr = l.Uparrow = r(d, "\\Uparrow ", "&uArr;")),
            (l.to = r(T, "\\to ", "&rarr;")),
            (l.rarr = l.rightarrow = r(d, "\\rightarrow ", "&rarr;")),
            (l.implies = r(T, "\\Rightarrow ", "&rArr;")),
            (l.rArr = l.Rightarrow = r(d, "\\Rightarrow ", "&rArr;")),
            (l.gets = r(T, "\\gets ", "&larr;")),
            (l.larr = l.leftarrow = r(d, "\\leftarrow ", "&larr;")),
            (l.impliedby = r(T, "\\Leftarrow ", "&lArr;")),
            (l.lArr = l.Leftarrow = r(d, "\\Leftarrow ", "&lArr;")),
            (l.harr = l.lrarr = l.leftrightarrow = r(d, "\\leftrightarrow ", "&harr;")),
            (l.iff = r(T, "\\Leftrightarrow ", "&hArr;")),
            (l.hArr = l.lrArr = l.Leftrightarrow = r(d, "\\Leftrightarrow ", "&hArr;")),
            (l.Re = l.Real = l.real = r(d, "\\Re ", "&real;")),
            (l.Im = l.imag = l.image = l.imagin = l.imaginary = l.Imaginary = r(d, "\\Im ", "&image;")),
            (l.part = l.partial = r(d, "\\partial ", "&part;")),
            (l.infty = l.infin = l.infinity = r(d, "\\infty ", "&infin;")),
            (l.alef = l.alefsym = l.aleph = l.alephsym = r(d, "\\aleph ", "&alefsym;")),
            (l.xist = l.xists = l.exist = l.exists = r(d, "\\exists ", "&exist;")),
            (l.nexists = l.nexist = r(d, "\\nexists ", "&#8708;")),
            (l.and = l.land = l.wedge = r(T, "\\wedge ", "&and;")),
            (l.or = l.lor = l.vee = r(T, "\\vee ", "&or;")),
            (l.o = l.O = l.empty = l.emptyset = l.oslash = l.Oslash = l.nothing = l.varnothing = r(T, "\\varnothing ", "&empty;")),
            (l.cup = l.union = r(T, "\\cup ", "&cup;")),
            (l.cap = l.intersect = l.intersection = r(T, "\\cap ", "&cap;")),
            (l.deg = l.degree = r(d, "\\degree ", "&deg;")),
            (l.ang = l.angle = r(d, "\\angle ", "&ang;")),
            (l.measuredangle = r(d, "\\measuredangle ", "&#8737;")),
            i(d, function (t, e) {
              t.createLeftOf = function (t) {
                t.options.autoSubscriptNumerals &&
                t.parent !== t.parent.parent.sub &&
                ((t[m] instanceof L && !1 !== t[m].isItalic) || (t[m] instanceof Lt && t[m][m] instanceof L && !1 !== t[m][m].isItalic))
                  ? (l._().createLeftOf(t), e.createLeftOf.call(this, t), t.insRightOf(t.parent.parent))
                  : e.createLeftOf.call(this, t);
              };
            })),
          L = i(p, function (t, n) {
            (t.init = function (t, e) {
              n.init.call(this, t, "<var>" + (e || t) + "</var>");
            }),
              (t.text = function () {
                var t = this.ctrlSeq;
                return (
                  this.isPartOfOperator
                    ? "\\" == t[0]
                      ? (t = t.slice(1, t.length))
                      : " " == t[t.length - 1] && (t = t.slice(0, -1))
                    : (!this[m] || this[m] instanceof L || this[m] instanceof T || "\\ " === this[m].ctrlSeq || (t = "*" + t),
                      !this[v] || this[v] instanceof T || this[v] instanceof Lt || (t += "*")),
                  t
                );
              });
          }),
          Q =
            ((it.p.autoCommands = {
              _maxLength: 0
            }),
            (rt.autoCommands = function (t) {
              if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
              for (var e = t.split(" "), n = {}, i = 0, r = 0; r < e.length; r += 1) {
                var s = e[r];
                if (s.length < 2) throw 'autocommand "' + s + '" not minimum length of 2';
                if (l[s] === Gt) throw '"' + s + '" is a built-in operator name';
                (n[s] = 1), (i = P(i, s.length));
              }
              return (n._maxLength = i), n;
            }),
            i(L, function (t, o) {
              function d(t) {
                return !t || t instanceof T || t instanceof _t;
              }
              (t.init = function (t) {
                return o.init.call(this, (this.letter = t));
              }),
                (t.createLeftOf = function (t) {
                  o.createLeftOf.apply(this, arguments);
                  var e = t.options.autoCommands,
                    n = e._maxLength;
                  if (0 < n) {
                    for (var i = "", r = this, s = 0; r instanceof Q && r.ctrlSeq === r.letter && s < n; )
                      (i = r.letter + i), (r = r[m]), (s += 1);
                    for (; i.length; ) {
                      if (e.hasOwnProperty(i)) {
                        for (s = 1, r = this; s < i.length; s += 1, r = r[m]);
                        return b(r, this).remove(), (t[m] = r[m]), l[i](i).createLeftOf(t);
                      }
                      i = i.slice(1);
                    }
                  }
                }),
                (t.italicize = function (t) {
                  return (this.isItalic = t), (this.isPartOfOperator = !t), this.jQ.toggleClass("mq-operator-name", !t), this;
                }),
                (t.finalizeTree =
                  t.siblingDeleted =
                  t.siblingCreated =
                    function (t, e) {
                      (e !== m && this[v] instanceof Q) || this.autoUnItalicize(t);
                    }),
                (t.autoUnItalicize = function (t) {
                  var e = t.autoOperatorNames;
                  if (0 !== e._maxLength) {
                    for (var n = this.letter, i = this[m]; i instanceof Q; i = i[m]) n = i.letter + n;
                    for (var r = this[v]; r instanceof Q; r = r[v]) n += r.letter;
                    b(i[v] || this.parent.ends[m], r[m] || this.parent.ends[v]).each(function (t) {
                      t.italicize(!0).jQ.removeClass("mq-first mq-last mq-followed-by-supsub"), (t.ctrlSeq = t.letter);
                    });
                    t: for (var s = 0, o = i[v] || this.parent.ends[m]; s < n.length; s += 1, o = o[v])
                      for (var a = z(e._maxLength, n.length - s); 0 < a; --a) {
                        var l = n.slice(s, s + a);
                        if (e.hasOwnProperty(l)) {
                          for (var c = 0, u = o; c < a; c += 1, u = u[v]) {
                            u.italicize(!1);
                            var f = u;
                          }
                          var h,
                            p = Pt.hasOwnProperty(l);
                          (o.ctrlSeq = (p ? "\\" : "\\operatorname{") + o.ctrlSeq),
                            (f.ctrlSeq += p ? " " : "}"),
                            Ft.hasOwnProperty(l) && f[m][m][m].jQ.addClass("mq-last"),
                            d(o[m]) || o.jQ.addClass("mq-first"),
                            d(f[v]) ||
                              (f[v] instanceof Lt
                                ? ((h = f[v]).siblingCreated = h.siblingDeleted =
                                    function () {
                                      h.jQ.toggleClass("mq-after-operator-name", !(h[v] instanceof E));
                                    })()
                                : f.jQ.toggleClass("mq-last", !(f[v] instanceof E))),
                            (s += a - 1),
                            (o = f);
                          continue t;
                        }
                      }
                  }
                });
            })),
          Pt = {},
          _ = (it.p.autoOperatorNames = {
            _maxLength: 9
          }),
          Ft = {
            limsup: 1,
            liminf: 1,
            projlim: 1,
            injlim: 1
          },
          $t = "arg deg det dim exp gcd hom inf ker lg ln log max min sup limsup liminf injlim projlim Pr".split(" "),
          N = 0;
        N < $t.length;
        N += 1
      )
        Pt[$t[N]] = _[$t[N]] = 1;
      for (var Wt = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" "), N = 0; N < Wt.length; N += 1)
        Pt[Wt[N]] = 1;
      for (var Ut = "sin cos tan sec cosec csc cotan cot ctg".split(" "), N = 0; N < Ut.length; N += 1)
        _[Ut[N]] = _["arc" + Ut[N]] = _[Ut[N] + "h"] = _["ar" + Ut[N] + "h"] = _["arc" + Ut[N] + "h"] = 1;
      for (var Vt = "gcf hcf lcm proj span".split(" "), N = 0; N < Vt.length; N += 1) _[Vt[N]] = 1;
      rt.autoOperatorNames = function (t) {
        if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
        for (var e = t.split(" "), n = {}, i = 0, r = 0; r < e.length; r += 1) {
          var s = e[r];
          if (s.length < 2) throw '"' + s + '" not minimum length of 2';
          (n[s] = 1), (i = P(i, s.length));
        }
        return (n._maxLength = i), n;
      };
      var Xt,
        Gt = i(p, function (t, e) {
          (t.init = function (t) {
            this.ctrlSeq = t;
          }),
            (t.createLeftOf = function (t) {
              for (var e = this.ctrlSeq, n = 0; n < e.length; n += 1) Q(e.charAt(n)).createLeftOf(t);
            }),
            (t.parser = function () {
              for (var t = this.ctrlSeq, e = C(), n = 0; n < t.length; n += 1) Q(t.charAt(n)).adopt(e, e.ends[v], 0);
              return w.succeed(e.children());
            });
        });
      for (Xt in _) _.hasOwnProperty(Xt) && (l[Xt] = Gt);
      (l.operatorname = i(o, function (t) {
        (t.createLeftOf = x),
          (t.numBlocks = function () {
            return 1;
          }),
          (t.parser = function () {
            return q.block.map(function (t) {
              return t.children();
            });
          });
      })),
        (l.f = i(Q, function (t, e) {
          (t.init = function () {
            p.p.init.call(this, (this.letter = "f"), '<var class="mq-f">f</var>');
          }),
            (t.italicize = function (t) {
              return this.jQ.html("f").toggleClass("mq-f", t), e.italicize.apply(this, arguments);
            });
        })),
        (l[" "] = l.space = r(d, "\\ ", "&nbsp;")),
        (l["#"] = l.space = r(d, "\\#", "#")),
        (l.prime = r(d, "\\prime", "&prime;")),
        (l["\u2033"] = l.dprime = r(d, "\u2033", "&Prime;")),
        (l.backslash = r(d, "\\backslash ", "\\")),
        s["\\"] || (s["\\"] = l.backslash),
        (l.$ = r(d, "\\$", "$"));
      var Kt,
        O = i(p, function (t, n) {
          t.init = function (t, e) {
            n.init.call(this, t, '<span class="mq-nonSymbola">' + (e || t) + "</span>");
          };
        }),
        S =
          ((l["@"] = O),
          (l["&"] = r(O, "\\&", "&amp;")),
          (l["%"] = r(O, "\\%", "%")),
          (l.alpha =
            l.beta =
            l.gamma =
            l.delta =
            l.zeta =
            l.eta =
            l.theta =
            l.iota =
            l.kappa =
            l.mu =
            l.nu =
            l.xi =
            l.rho =
            l.sigma =
            l.tau =
            l.chi =
            l.psi =
            l.omega =
              i(L, function (t, e) {
                t.init = function (t) {
                  e.init.call(this, "\\" + t + " ", "&" + t + ";");
                };
              })),
          (l.phi = r(L, "\\phi ", "&#981;")),
          (l.phiv = l.varphi = r(L, "\\varphi ", "&phi;")),
          (l.epsilon = r(L, "\\epsilon ", "&#1013;")),
          (l.epsiv = l.varepsilon = r(L, "\\varepsilon ", "&epsilon;")),
          (l.piv = l.varpi = r(L, "\\varpi ", "&piv;")),
          (l.sigmaf = l.sigmav = l.varsigma = r(L, "\\varsigma ", "&sigmaf;")),
          (l.thetav = l.vartheta = l.thetasym = r(L, "\\vartheta ", "&thetasym;")),
          (l.upsilon = l.upsi = r(L, "\\upsilon ", "&upsilon;")),
          (l.gammad = l.Gammad = l.digamma = r(L, "\\digamma ", "&#989;")),
          (l.kappav = l.varkappa = r(L, "\\varkappa ", "&#1008;")),
          (l.rhov = l.varrho = r(L, "\\varrho ", "&#1009;")),
          (l.pi = l["\u03c0"] = r(O, "\\pi ", "&pi;")),
          (l.lambda = r(O, "\\lambda ", "&lambda;")),
          (l.Upsilon = l.Upsi = l.upsih = l.Upsih = r(p, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>')),
          (l.Gamma =
            l.Delta =
            l.Theta =
            l.Lambda =
            l.Xi =
            l.Pi =
            l.Sigma =
            l.Phi =
            l.Psi =
            l.Omega =
            l.forall =
              i(d, function (t, e) {
                t.init = function (t) {
                  e.init.call(this, "\\" + t + " ", "&" + t + ";");
                };
              })),
          i(o, function (t) {
            (t.init = function (t) {
              this.latex = t;
            }),
              (t.createLeftOf = function (t) {
                var e = q.parse(this.latex);
                e.children().adopt(t.parent, t[m], t[v]),
                  (t[m] = e.ends[v]),
                  e.jQize().insertBefore(t.jQ),
                  e.finalizeInsert(t.options, t),
                  e.ends[v][v].siblingCreated && e.ends[v][v].siblingCreated(t.options, m),
                  e.ends[m][m].siblingCreated && e.ends[m][m].siblingCreated(t.options, v),
                  t.parent.bubble("reflow");
              }),
              (t.parser = function () {
                var t = q.parse(this.latex).children();
                return w.succeed(t);
              });
          })),
        e =
          ((l["'"] = r(S, "^\\prime")),
          (l["\xb9"] = r(S, "^1")),
          (l["\xb2"] = r(S, "^2")),
          (l["\xb3"] = r(S, "^3")),
          (l["\xbc"] = r(S, "\\frac14")),
          (l["\xbd"] = r(S, "\\frac12")),
          (l["\xbe"] = r(S, "\\frac34")),
          i(T, function (t) {
            (t.init = d.prototype.init),
              (t.contactWeld =
                t.siblingCreated =
                t.siblingDeleted =
                  function (t, e) {
                    function n(t) {
                      return t[m]
                        ? t[m] instanceof T || /^[,;:\(\[]$/.test(t[m].ctrlSeq)
                          ? ""
                          : "mq-binary-operator"
                        : t.parent && t.parent.parent && t.parent.parent.isStyleBlock()
                        ? n(t.parent.parent)
                        : "";
                    }
                    if (e !== v) return (this.jQ[0].className = n(this)), this;
                  });
          })),
        Yt =
          ((l["+"] = r(e, "+", "+")),
          (l["\u2013"] = l["-"] = r(e, "-", "&minus;")),
          (l["\xb1"] = l.pm = l.plusmn = l.plusminus = r(e, "\\pm ", "&plusmn;")),
          (l.mp = l.mnplus = l.minusplus = r(e, "\\mp ", "&#8723;")),
          (s["*"] = l.sdot = l.cdot = r(T, "\\cdot ", "&middot;", "*")),
          i(T, function (t, n) {
            (t.init = function (t, e) {
              this.data = t;
              e = (this.strict = e) ? "Strict" : "";
              n.init.call(this, t["ctrlSeq" + e], t["html" + e], t["text" + e]);
            }),
              (t.swap = function (t) {
                t = (this.strict = t) ? "Strict" : "";
                (this.ctrlSeq = this.data["ctrlSeq" + t]),
                  this.jQ.html(this.data["html" + t]),
                  (this.textTemplate = [this.data["text" + t]]);
              }),
              (t.deleteTowards = function (t, e) {
                t !== m || this.strict ? n.deleteTowards.apply(this, arguments) : (this.swap(!0), this.bubble("reflow"));
              });
          })),
        k = {
          ctrlSeq: "\\le ",
          html: "&le;",
          text: "\u2264",
          ctrlSeqStrict: "<",
          htmlStrict: "&lt;",
          textStrict: "<"
        },
        j = {
          ctrlSeq: "\\ge ",
          html: "&ge;",
          text: "\u2265",
          ctrlSeqStrict: ">",
          htmlStrict: "&gt;",
          textStrict: ">"
        },
        Zt =
          ((l["<"] = l.lt = r(Yt, k, !0)),
          (l[">"] = l.gt = r(Yt, j, !0)),
          (l["\u2264"] = l.le = l.leq = r(Yt, k, !1)),
          (l["\u2265"] = l.ge = l.geq = r(Yt, j, !1)),
          i(T, function (t, e) {
            (t.init = function () {
              e.init.call(this, "=", "=");
            }),
              (t.createLeftOf = function (t) {
                t[m] instanceof Yt && t[m].strict ? (t[m].swap(!1), t[m].bubble("reflow")) : e.createLeftOf.apply(this, arguments);
              });
          })),
        Jt =
          ((l["="] = Zt),
          (l["\xd7"] = l.times = r(T, "\\times ", "&times;", "[x]")),
          (l["\xf7"] = l.div = l.divide = l.divides = r(T, "\\div ", "&divide;", "[/]")),
          (s["~"] = l.sim = r(T, "\\sim ", "~", "~")),
          ut(1));
      for (Kt in Jt)
        !(function (t, e) {
          "function" == typeof e
            ? ((n[t] = function () {
                return at(), e.apply(this, arguments);
              }),
              (n[t].prototype = e.prototype))
            : (n[t] = e);
        })(Kt, Jt[Kt]);
      I.default = MathQuill;
    },
    715: function (pn, dn, t) {
      var mn;
      /*!
       * jQuery JavaScript Library v3.5.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2020-05-04T22:49Z
       */
      !(function (t, e) {
        "use strict";
        "object" == typeof pn.exports
          ? (pn.exports = t.document
              ? e(t, !0)
              : function (t) {
                  if (t.document) return e(t);
                  throw new Error("jQuery requires a window with a document");
                })
          : e(t);
      })("undefined" != typeof window ? window : this, function (w, R) {
        "use strict";
        var e = [],
          I = Object.getPrototypeOf,
          a = e.slice,
          H = e.flat
            ? function (t) {
                return e.flat.call(t);
              }
            : function (t) {
                return e.concat.apply([], t);
              },
          B = e.push,
          M = e.indexOf,
          z = {},
          P = z.toString,
          F = z.hasOwnProperty,
          $ = F.toString,
          W = $.call(Object),
          m = {},
          g = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
          },
          v = function (t) {
            return null != t && t === t.window;
          },
          q = w.document,
          U = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
          };
        function V(t, e, n) {
          var i,
            r,
            s = (n = n || q).createElement("script");
          if (((s.text = t), e)) for (i in U) (r = e[i] || (e.getAttribute && e.getAttribute(i))) && s.setAttribute(i, r);
          n.head.appendChild(s).parentNode.removeChild(s);
        }
        function d(t) {
          return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? z[P.call(t)] || "object" : typeof t;
        }
        var t = "3.5.1",
          T = function (t, e) {
            return new T.fn.init(t, e);
          };
        function X(t) {
          var e = !!t && "length" in t && t.length,
            n = d(t);
          return !g(t) && !v(t) && ("array" === n || 0 === e || ("number" == typeof e && 0 < e && e - 1 in t));
        }
        (T.fn = T.prototype =
          {
            jquery: t,
            constructor: T,
            length: 0,
            toArray: function () {
              return a.call(this);
            },
            get: function (t) {
              return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
            },
            pushStack: function (t) {
              t = T.merge(this.constructor(), t);
              return (t.prevObject = this), t;
            },
            each: function (t) {
              return T.each(this, t);
            },
            map: function (n) {
              return this.pushStack(
                T.map(this, function (t, e) {
                  return n.call(t, e, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                T.grep(this, function (t, e) {
                  return (e + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                T.grep(this, function (t, e) {
                  return e % 2;
                })
              );
            },
            eq: function (t) {
              var e = this.length,
                t = +t + (t < 0 ? e : 0);
              return this.pushStack(0 <= t && t < e ? [this[t]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: B,
            sort: e.sort,
            splice: e.splice
          }),
          (T.extend = T.fn.extend =
            function () {
              var t,
                e,
                n,
                i,
                r,
                s = arguments[0] || {},
                o = 1,
                a = arguments.length,
                l = !1;
              for (
                "boolean" == typeof s && ((l = s), (s = arguments[o] || {}), o++),
                  "object" == typeof s || g(s) || (s = {}),
                  o === a && ((s = this), o--);
                o < a;
                o++
              )
                if (null != (t = arguments[o]))
                  for (e in t)
                    (n = t[e]),
                      "__proto__" !== e &&
                        s !== n &&
                        (l && n && (T.isPlainObject(n) || (i = Array.isArray(n)))
                          ? ((r = s[e]),
                            (r = i && !Array.isArray(r) ? [] : i || T.isPlainObject(r) ? r : {}),
                            (i = !1),
                            (s[e] = T.extend(l, r, n)))
                          : void 0 !== n && (s[e] = n));
              return s;
            }),
          T.extend({
            expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
              throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
              return !(
                !t ||
                "[object Object]" !== P.call(t) ||
                ((t = I(t)) && ("function" != typeof (t = F.call(t, "constructor") && t.constructor) || $.call(t) !== W))
              );
            },
            isEmptyObject: function (t) {
              for (var e in t) return !1;
              return !0;
            },
            globalEval: function (t, e, n) {
              V(
                t,
                {
                  nonce: e && e.nonce
                },
                n
              );
            },
            each: function (t, e) {
              var n,
                i = 0;
              if (X(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
              else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
              return t;
            },
            makeArray: function (t, e) {
              e = e || [];
              return null != t && (X(Object(t)) ? T.merge(e, "string" == typeof t ? [t] : t) : B.call(e, t)), e;
            },
            inArray: function (t, e, n) {
              return null == e ? -1 : M.call(e, t, n);
            },
            merge: function (t, e) {
              for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
              return (t.length = r), t;
            },
            grep: function (t, e, n) {
              for (var i = [], r = 0, s = t.length, o = !n; r < s; r++) !e(t[r], r) !== o && i.push(t[r]);
              return i;
            },
            map: function (t, e, n) {
              var i,
                r,
                s = 0,
                o = [];
              if (X(t)) for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && o.push(r);
              else for (s in t) null != (r = e(t[s], s, n)) && o.push(r);
              return H(o);
            },
            guid: 1,
            support: m
          }),
          "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]),
          T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            z["[object " + e + "]"] = e.toLowerCase();
          });
        var t =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            (function (R) {
              var t,
                h,
                x,
                s,
                I,
                p,
                H,
                B,
                w,
                l,
                c,
                q,
                T,
                n,
                C,
                d,
                i,
                r,
                m,
                k = "sizzle" + +new Date(),
                u = R.document,
                j = 0,
                M = 0,
                z = A(),
                P = A(),
                F = A(),
                g = A(),
                $ = function (t, e) {
                  return t === e && (c = !0), 0;
                },
                W = {}.hasOwnProperty,
                e = [],
                U = e.pop,
                V = e.push,
                O = e.push,
                X = e.slice,
                y = function (t, e) {
                  for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                  return -1;
                },
                G =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                o = "[\\x20\\t\\r\\n\\f]",
                a = "(?:\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                K =
                  "\\[" +
                  o +
                  "*(" +
                  a +
                  ")(?:" +
                  o +
                  "*([*^$|!~]?=)" +
                  o +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  a +
                  "))|)" +
                  o +
                  "*\\]",
                Y = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)",
                Z = new RegExp(o + "+", "g"),
                v = new RegExp("^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$", "g"),
                J = new RegExp("^" + o + "*," + o + "*"),
                tt = new RegExp("^" + o + "*([>+~]|" + o + ")" + o + "*"),
                et = new RegExp(o + "|>"),
                nt = new RegExp(Y),
                it = new RegExp("^" + a + "$"),
                f = {
                  ID: new RegExp("^#(" + a + ")"),
                  CLASS: new RegExp("^\\.(" + a + ")"),
                  TAG: new RegExp("^(" + a + "|[*])"),
                  ATTR: new RegExp("^" + K),
                  PSEUDO: new RegExp("^" + Y),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      o +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      o +
                      "*(?:([+-]|)" +
                      o +
                      "*(\\d+)|))" +
                      o +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + G + ")$", "i"),
                  needsContext: new RegExp(
                    "^" + o + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + o + "*((?:-\\d)?\\d*)" + o + "*\\)|)(?=[^-]|$)",
                    "i"
                  )
                },
                rt = /HTML$/i,
                st = /^(?:input|select|textarea|button)$/i,
                ot = /^h\d$/i,
                b = /^[^{]+\{\s*\[native \w/,
                at = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                lt = /[+~]/,
                S = new RegExp("\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\([^\\r\\n\\f])", "g"),
                E = function (t, e) {
                  t = "0x" + t.slice(1) - 65536;
                  return e || (t < 0 ? String.fromCharCode(t + 65536) : String.fromCharCode((t >> 10) | 55296, (1023 & t) | 56320));
                },
                ct = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ut = function (t, e) {
                  return e ? ("\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                },
                ft = function () {
                  q();
                },
                ht = xt(
                  function (t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                  },
                  {
                    dir: "parentNode",
                    next: "legend"
                  }
                );
              try {
                O.apply((e = X.call(u.childNodes)), u.childNodes), e[u.childNodes.length].nodeType;
              } catch (t) {
                O = {
                  apply: e.length
                    ? function (t, e) {
                        V.apply(t, X.call(e));
                      }
                    : function (t, e) {
                        for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                        t.length = n - 1;
                      }
                };
              }
              function D(e, t, n, i) {
                var r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u = t && t.ownerDocument,
                  f = t ? t.nodeType : 9;
                if (((n = n || []), "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))) return n;
                if (!i && (q(t), (t = t || T), C)) {
                  if (11 !== f && (a = at.exec(e)))
                    if ((r = a[1])) {
                      if (9 === f) {
                        if (!(c = t.getElementById(r))) return n;
                        if (c.id === r) return n.push(c), n;
                      } else if (u && (c = u.getElementById(r)) && m(t, c) && c.id === r) return n.push(c), n;
                    } else {
                      if (a[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                      if ((r = a[3]) && h.getElementsByClassName && t.getElementsByClassName)
                        return O.apply(n, t.getElementsByClassName(r)), n;
                    }
                  if (h.qsa && !g[e + " "] && (!d || !d.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (((c = e), (u = t), 1 === f && (et.test(e) || tt.test(e)))) {
                      for (
                        ((u = (lt.test(e) && yt(t.parentNode)) || t) === t && h.scope) ||
                          ((o = t.getAttribute("id")) ? (o = o.replace(ct, ut)) : t.setAttribute("id", (o = k))),
                          s = (l = p(e)).length;
                        s--;

                      )
                        l[s] = (o ? "#" + o : ":scope") + " " + N(l[s]);
                      c = l.join(",");
                    }
                    try {
                      return O.apply(n, u.querySelectorAll(c)), n;
                    } catch (t) {
                      g(e, !0);
                    } finally {
                      o === k && t.removeAttribute("id");
                    }
                  }
                }
                return B(e.replace(v, "$1"), t, n, i);
              }
              function A() {
                var n = [];
                function i(t, e) {
                  return n.push(t + " ") > x.cacheLength && delete i[n.shift()], (i[t + " "] = e);
                }
                return i;
              }
              function L(t) {
                return (t[k] = !0), t;
              }
              function Q(t) {
                var e = T.createElement("fieldset");
                try {
                  return !!t(e);
                } catch (t) {
                  return !1;
                } finally {
                  e.parentNode && e.parentNode.removeChild(e);
                }
              }
              function pt(t, e) {
                for (var n = t.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = e;
              }
              function dt(t, e) {
                var n = e && t,
                  i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                return t ? 1 : -1;
              }
              function mt(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function gt(n) {
                return function (t) {
                  var e = t.nodeName.toLowerCase();
                  return ("input" === e || "button" === e) && t.type === n;
                };
              }
              function vt(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e || (t.isDisabled !== !e && ht(t) === e)
                      : t.disabled === e
                    : "label" in t && t.disabled === e;
                };
              }
              function _(o) {
                return L(function (s) {
                  return (
                    (s = +s),
                    L(function (t, e) {
                      for (var n, i = o([], t.length, s), r = i.length; r--; ) t[(n = i[r])] && (t[n] = !(e[n] = t[n]));
                    })
                  );
                });
              }
              function yt(t) {
                return t && void 0 !== t.getElementsByTagName && t;
              }
              for (t in ((h = D.support = {}),
              (I = D.isXML =
                function (t) {
                  var e = t.namespaceURI,
                    t = (t.ownerDocument || t).documentElement;
                  return !rt.test(e || (t && t.nodeName) || "HTML");
                }),
              (q = D.setDocument =
                function (t) {
                  var t = t ? t.ownerDocument || t : u;
                  return (
                    t != T &&
                      9 === t.nodeType &&
                      t.documentElement &&
                      ((n = (T = t).documentElement),
                      (C = !I(T)),
                      u != T &&
                        (t = T.defaultView) &&
                        t.top !== t &&
                        (t.addEventListener ? t.addEventListener("unload", ft, !1) : t.attachEvent && t.attachEvent("onunload", ft)),
                      (h.scope = Q(function (t) {
                        return (
                          n.appendChild(t).appendChild(T.createElement("div")),
                          void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (h.attributes = Q(function (t) {
                        return (t.className = "i"), !t.getAttribute("className");
                      })),
                      (h.getElementsByTagName = Q(function (t) {
                        return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length;
                      })),
                      (h.getElementsByClassName = b.test(T.getElementsByClassName)),
                      (h.getById = Q(function (t) {
                        return (n.appendChild(t).id = k), !T.getElementsByName || !T.getElementsByName(k).length;
                      })),
                      h.getById
                        ? ((x.filter.ID = function (t) {
                            var e = t.replace(S, E);
                            return function (t) {
                              return t.getAttribute("id") === e;
                            };
                          }),
                          (x.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && C) return (e = e.getElementById(t)) ? [e] : [];
                          }))
                        : ((x.filter.ID = function (t) {
                            var e = t.replace(S, E);
                            return function (t) {
                              t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                              return t && t.value === e;
                            };
                          }),
                          (x.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && C) {
                              var n,
                                i,
                                r,
                                s = e.getElementById(t);
                              if (s) {
                                if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                                for (r = e.getElementsByName(t), i = 0; (s = r[i++]); )
                                  if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                              }
                              return [];
                            }
                          })),
                      (x.find.TAG = h.getElementsByTagName
                        ? function (t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : h.qsa ? e.querySelectorAll(t) : void 0;
                          }
                        : function (t, e) {
                            var n,
                              i = [],
                              r = 0,
                              s = e.getElementsByTagName(t);
                            if ("*" !== t) return s;
                            for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
                            return i;
                          }),
                      (x.find.CLASS =
                        h.getElementsByClassName &&
                        function (t, e) {
                          if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t);
                        }),
                      (i = []),
                      (d = []),
                      (h.qsa = b.test(T.querySelectorAll)) &&
                        (Q(function (t) {
                          var e;
                          (n.appendChild(t).innerHTML =
                            "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            t.querySelectorAll("[msallowcapture^='']").length && d.push("[*^$]=" + o + "*(?:''|\"\")"),
                            t.querySelectorAll("[selected]").length || d.push("\\[" + o + "*(?:value|" + G + ")"),
                            t.querySelectorAll("[id~=" + k + "-]").length || d.push("~="),
                            (e = T.createElement("input")).setAttribute("name", ""),
                            t.appendChild(e),
                            t.querySelectorAll("[name='']").length || d.push("\\[" + o + "*name" + o + "*=" + o + "*(?:''|\"\")"),
                            t.querySelectorAll(":checked").length || d.push(":checked"),
                            t.querySelectorAll("a#" + k + "+*").length || d.push(".#.+[+~]"),
                            t.querySelectorAll("\\\f"),
                            d.push("[\\r\\n\\f]");
                        }),
                        Q(function (t) {
                          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var e = T.createElement("input");
                          e.setAttribute("type", "hidden"),
                            t.appendChild(e).setAttribute("name", "D"),
                            t.querySelectorAll("[name=d]").length && d.push("name" + o + "*[*^$|!~]?="),
                            2 !== t.querySelectorAll(":enabled").length && d.push(":enabled", ":disabled"),
                            (n.appendChild(t).disabled = !0),
                            2 !== t.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"),
                            t.querySelectorAll("*,:x"),
                            d.push(",.*:");
                        })),
                      (h.matchesSelector = b.test(
                        (r = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)
                      )) &&
                        Q(function (t) {
                          (h.disconnectedMatch = r.call(t, "*")), r.call(t, "[s!='']:x"), i.push("!=", Y);
                        }),
                      (d = d.length && new RegExp(d.join("|"))),
                      (i = i.length && new RegExp(i.join("|"))),
                      (t = b.test(n.compareDocumentPosition)),
                      (m =
                        t || b.test(n.contains)
                          ? function (t, e) {
                              var n = 9 === t.nodeType ? t.documentElement : t,
                                e = e && e.parentNode;
                              return (
                                t === e ||
                                !(
                                  !e ||
                                  1 !== e.nodeType ||
                                  !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e))
                                )
                              );
                            }
                          : function (t, e) {
                              if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                              return !1;
                            }),
                      ($ = t
                        ? function (t, e) {
                            var n;
                            return t === e
                              ? ((c = !0), 0)
                              : (n = !t.compareDocumentPosition - !e.compareDocumentPosition) ||
                                  (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) ||
                                  (!h.sortDetached && e.compareDocumentPosition(t) === n)
                                    ? t == T || (t.ownerDocument == u && m(u, t))
                                      ? -1
                                      : e == T || (e.ownerDocument == u && m(u, e))
                                      ? 1
                                      : l
                                      ? y(l, t) - y(l, e)
                                      : 0
                                    : 4 & n
                                    ? -1
                                    : 1);
                          }
                        : function (t, e) {
                            if (t === e) return (c = !0), 0;
                            var n,
                              i = 0,
                              r = t.parentNode,
                              s = e.parentNode,
                              o = [t],
                              a = [e];
                            if (!r || !s) return t == T ? -1 : e == T ? 1 : r ? -1 : s ? 1 : l ? y(l, t) - y(l, e) : 0;
                            if (r === s) return dt(t, e);
                            for (n = t; (n = n.parentNode); ) o.unshift(n);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (; o[i] === a[i]; ) i++;
                            return i ? dt(o[i], a[i]) : o[i] == u ? -1 : a[i] == u ? 1 : 0;
                          })),
                    T
                  );
                }),
              (D.matches = function (t, e) {
                return D(t, null, null, e);
              }),
              (D.matchesSelector = function (t, e) {
                if ((q(t), h.matchesSelector && C && !g[e + " "] && (!i || !i.test(e)) && (!d || !d.test(e))))
                  try {
                    var n = r.call(t, e);
                    if (n || h.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
                  } catch (t) {
                    g(e, !0);
                  }
                return 0 < D(e, T, null, [t]).length;
              }),
              (D.contains = function (t, e) {
                return (t.ownerDocument || t) != T && q(t), m(t, e);
              }),
              (D.attr = function (t, e) {
                (t.ownerDocument || t) != T && q(t);
                var n = x.attrHandle[e.toLowerCase()],
                  n = n && W.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !C) : void 0;
                return void 0 !== n
                  ? n
                  : h.attributes || !C
                  ? t.getAttribute(e)
                  : (n = t.getAttributeNode(e)) && n.specified
                  ? n.value
                  : null;
              }),
              (D.escape = function (t) {
                return (t + "").replace(ct, ut);
              }),
              (D.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
              }),
              (D.uniqueSort = function (t) {
                var e,
                  n = [],
                  i = 0,
                  r = 0;
                if (((c = !h.detectDuplicates), (l = !h.sortStable && t.slice(0)), t.sort($), c)) {
                  for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
                  for (; i--; ) t.splice(n[i], 1);
                }
                return (l = null), t;
              }),
              (s = D.getText =
                function (t) {
                  var e,
                    n = "",
                    i = 0,
                    r = t.nodeType;
                  if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                      if ("string" == typeof t.textContent) return t.textContent;
                      for (t = t.firstChild; t; t = t.nextSibling) n += s(t);
                    } else if (3 === r || 4 === r) return t.nodeValue;
                  } else for (; (e = t[i++]); ) n += s(e);
                  return n;
                }),
              ((x = D.selectors =
                {
                  cacheLength: 50,
                  createPseudo: L,
                  match: f,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": {
                      dir: "parentNode",
                      first: !0
                    },
                    " ": {
                      dir: "parentNode"
                    },
                    "+": {
                      dir: "previousSibling",
                      first: !0
                    },
                    "~": {
                      dir: "previousSibling"
                    }
                  },
                  preFilter: {
                    ATTR: function (t) {
                      return (
                        (t[1] = t[1].replace(S, E)),
                        (t[3] = (t[3] || t[4] || t[5] || "").replace(S, E)),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                      );
                    },
                    CHILD: function (t) {
                      return (
                        (t[1] = t[1].toLowerCase()),
                        "nth" === t[1].slice(0, 3)
                          ? (t[3] || D.error(t[0]),
                            (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))),
                            (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                          : t[3] && D.error(t[0]),
                        t
                      );
                    },
                    PSEUDO: function (t) {
                      var e,
                        n = !t[6] && t[2];
                      return f.CHILD.test(t[0])
                        ? null
                        : (t[3]
                            ? (t[2] = t[4] || t[5] || "")
                            : n &&
                              nt.test(n) &&
                              (e = (e = p(n, !0)) && n.indexOf(")", n.length - e) - n.length) &&
                              ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                          t.slice(0, 3));
                    }
                  },
                  filter: {
                    TAG: function (t) {
                      var e = t.replace(S, E).toLowerCase();
                      return "*" === t
                        ? function () {
                            return !0;
                          }
                        : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e;
                          };
                    },
                    CLASS: function (t) {
                      var e = z[t + " "];
                      return (
                        e ||
                        ((e = new RegExp("(^|" + o + ")" + t + "(" + o + "|$)")) &&
                          z(t, function (t) {
                            return e.test(
                              ("string" == typeof t.className && t.className) ||
                                (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, n, i) {
                      return function (t) {
                        t = D.attr(t, e);
                        return null == t
                          ? "!=" === n
                          : !n ||
                              ((t += ""),
                              "=" === n
                                ? t === i
                                : "!=" === n
                                ? t !== i
                                : "^=" === n
                                ? i && 0 === t.indexOf(i)
                                : "*=" === n
                                ? i && -1 < t.indexOf(i)
                                : "$=" === n
                                ? i && t.slice(-i.length) === i
                                : "~=" === n
                                ? -1 < (" " + t.replace(Z, " ") + " ").indexOf(i)
                                : "|=" === n && (t === i || t.slice(0, i.length + 1) === i + "-"));
                      };
                    },
                    CHILD: function (d, t, e, m, g) {
                      var v = "nth" !== d.slice(0, 3),
                        y = "last" !== d.slice(-4),
                        b = "of-type" === t;
                      return 1 === m && 0 === g
                        ? function (t) {
                            return !!t.parentNode;
                          }
                        : function (t, e, n) {
                            var i,
                              r,
                              s,
                              o,
                              a,
                              l,
                              c = v !== y ? "nextSibling" : "previousSibling",
                              u = t.parentNode,
                              f = b && t.nodeName.toLowerCase(),
                              h = !n && !b,
                              p = !1;
                            if (u) {
                              if (v) {
                                for (; c; ) {
                                  for (o = t; (o = o[c]); ) if (b ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                                  l = c = "only" === d && !l && "nextSibling";
                                }
                                return !0;
                              }
                              if (((l = [y ? u.firstChild : u.lastChild]), y && h)) {
                                for (
                                  p =
                                    (a =
                                      (i = (r = (s = (o = u)[k] || (o[k] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[d] || [])[0] === j &&
                                      i[1]) && i[2],
                                    o = a && u.childNodes[a];
                                  (o = (++a && o && o[c]) || ((p = a = 0), l.pop()));

                                )
                                  if (1 === o.nodeType && ++p && o === t) {
                                    r[d] = [j, a, p];
                                    break;
                                  }
                              } else if (
                                !1 ===
                                (p = h
                                  ? (a =
                                      (i = (r = (s = (o = t)[k] || (o[k] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[d] || [])[0] === j &&
                                      i[1])
                                  : p)
                              )
                                for (
                                  ;
                                  (o = (++a && o && o[c]) || ((p = a = 0), l.pop())) &&
                                  ((b ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) ||
                                    !++p ||
                                    (h && ((r = (s = o[k] || (o[k] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[d] = [j, p]), o !== t));

                                );
                              return (p -= g) === m || (p % m == 0 && 0 <= p / m);
                            }
                          };
                    },
                    PSEUDO: function (t, s) {
                      var e,
                        o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || D.error("unsupported pseudo: " + t);
                      return o[k]
                        ? o(s)
                        : 1 < o.length
                        ? ((e = [t, t, "", s]),
                          x.setFilters.hasOwnProperty(t.toLowerCase())
                            ? L(function (t, e) {
                                for (var n, i = o(t, s), r = i.length; r--; ) t[(n = y(t, i[r]))] = !(e[n] = i[r]);
                              })
                            : function (t) {
                                return o(t, 0, e);
                              })
                        : o;
                    }
                  },
                  pseudos: {
                    not: L(function (t) {
                      var i = [],
                        r = [],
                        a = H(t.replace(v, "$1"));
                      return a[k]
                        ? L(function (t, e, n, i) {
                            for (var r, s = a(t, null, i, []), o = t.length; o--; ) (r = s[o]) && (t[o] = !(e[o] = r));
                          })
                        : function (t, e, n) {
                            return (i[0] = t), a(i, null, n, r), (i[0] = null), !r.pop();
                          };
                    }),
                    has: L(function (e) {
                      return function (t) {
                        return 0 < D(e, t).length;
                      };
                    }),
                    contains: L(function (e) {
                      return (
                        (e = e.replace(S, E)),
                        function (t) {
                          return -1 < (t.textContent || s(t)).indexOf(e);
                        }
                      );
                    }),
                    lang: L(function (n) {
                      return (
                        it.test(n || "") || D.error("unsupported lang: " + n),
                        (n = n.replace(S, E).toLowerCase()),
                        function (t) {
                          var e;
                          do {
                            if ((e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                              return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-");
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var e = R.location && R.location.hash;
                      return e && e.slice(1) === t.id;
                    },
                    root: function (t) {
                      return t === n;
                    },
                    focus: function (t) {
                      return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: vt(!1),
                    disabled: vt(!0),
                    checked: function (t) {
                      var e = t.nodeName.toLowerCase();
                      return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                      return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function (t) {
                      for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (t) {
                      return !x.pseudos.empty(t);
                    },
                    header: function (t) {
                      return ot.test(t.nodeName);
                    },
                    input: function (t) {
                      return st.test(t.nodeName);
                    },
                    button: function (t) {
                      var e = t.nodeName.toLowerCase();
                      return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                      return (
                        "input" === t.nodeName.toLowerCase() &&
                        "text" === t.type &&
                        (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                      );
                    },
                    first: _(function () {
                      return [0];
                    }),
                    last: _(function (t, e) {
                      return [e - 1];
                    }),
                    eq: _(function (t, e, n) {
                      return [n < 0 ? n + e : n];
                    }),
                    even: _(function (t, e) {
                      for (var n = 0; n < e; n += 2) t.push(n);
                      return t;
                    }),
                    odd: _(function (t, e) {
                      for (var n = 1; n < e; n += 2) t.push(n);
                      return t;
                    }),
                    lt: _(function (t, e, n) {
                      for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i; ) t.push(i);
                      return t;
                    }),
                    gt: _(function (t, e, n) {
                      for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                      return t;
                    })
                  }
                }).pseudos.nth = x.pseudos.eq),
              {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
              }))
                x.pseudos[t] = mt(t);
              for (t in {
                submit: !0,
                reset: !0
              })
                x.pseudos[t] = gt(t);
              function bt() {}
              function N(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i;
              }
              function xt(o, t, e) {
                var a = t.dir,
                  l = t.next,
                  c = l || a,
                  u = e && "parentNode" === c,
                  f = M++;
                return t.first
                  ? function (t, e, n) {
                      for (; (t = t[a]); ) if (1 === t.nodeType || u) return o(t, e, n);
                      return !1;
                    }
                  : function (t, e, n) {
                      var i,
                        r,
                        s = [j, f];
                      if (n) {
                        for (; (t = t[a]); ) if ((1 === t.nodeType || u) && o(t, e, n)) return !0;
                      } else
                        for (; (t = t[a]); )
                          if (1 === t.nodeType || u)
                            if (((r = (r = t[k] || (t[k] = {}))[t.uniqueID] || (r[t.uniqueID] = {})), l && l === t.nodeName.toLowerCase()))
                              t = t[a] || t;
                            else {
                              if ((i = r[c]) && i[0] === j && i[1] === f) return (s[2] = i[2]);
                              if (((r[c] = s)[2] = o(t, e, n))) return !0;
                            }
                      return !1;
                    };
              }
              function wt(r) {
                return 1 < r.length
                  ? function (t, e, n) {
                      for (var i = r.length; i--; ) if (!r[i](t, e, n)) return !1;
                      return !0;
                    }
                  : r[0];
              }
              function qt(t, e, n) {
                for (var i = 0, r = e.length; i < r; i++) D(t, e[i], n);
                return n;
              }
              function Tt(t, e, n, i, r) {
                for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)
                  !(s = t[a]) || (n && !n(s, i, r)) || (o.push(s), c && e.push(a));
                return o;
              }
              function Ct(p, d, m, g, v, t) {
                return (
                  g && !g[k] && (g = Ct(g)),
                  v && !v[k] && (v = Ct(v, t)),
                  L(function (t, e, n, i) {
                    var r,
                      s,
                      o,
                      a = [],
                      l = [],
                      c = e.length,
                      u = t || qt(d || "*", n.nodeType ? [n] : n, []),
                      f = !p || (!t && d) ? u : Tt(u, a, p, n, i),
                      h = m ? (v || (t ? p : c || g) ? [] : e) : f;
                    if ((m && m(f, h, n, i), g))
                      for (r = Tt(h, l), g(r, [], n, i), s = r.length; s--; ) (o = r[s]) && (h[l[s]] = !(f[l[s]] = o));
                    if (t) {
                      if (v || p) {
                        if (v) {
                          for (r = [], s = h.length; s--; ) (o = h[s]) && r.push((f[s] = o));
                          v(null, (h = []), r, i);
                        }
                        for (s = h.length; s--; ) (o = h[s]) && -1 < (r = v ? y(t, o) : a[s]) && (t[r] = !(e[r] = o));
                      }
                    } else (h = Tt(h === e ? h.splice(c, h.length) : h)), v ? v(null, e, h, i) : O.apply(e, h);
                  })
                );
              }
              function kt(t) {
                for (
                  var i,
                    e,
                    n,
                    r = t.length,
                    s = x.relative[t[0].type],
                    o = s || x.relative[" "],
                    a = s ? 1 : 0,
                    l = xt(
                      function (t) {
                        return t === i;
                      },
                      o,
                      !0
                    ),
                    c = xt(
                      function (t) {
                        return -1 < y(i, t);
                      },
                      o,
                      !0
                    ),
                    u = [
                      function (t, e, n) {
                        t = (!s && (n || e !== w)) || ((i = e).nodeType ? l : c)(t, e, n);
                        return (i = null), t;
                      }
                    ];
                  a < r;
                  a++
                )
                  if ((e = x.relative[t[a].type])) u = [xt(wt(u), e)];
                  else {
                    if ((e = x.filter[t[a].type].apply(null, t[a].matches))[k]) {
                      for (n = ++a; n < r && !x.relative[t[n].type]; n++);
                      return Ct(
                        1 < a && wt(u),
                        1 < a &&
                          N(
                            t.slice(0, a - 1).concat({
                              value: " " === t[a - 2].type ? "*" : ""
                            })
                          ).replace(v, "$1"),
                        e,
                        a < n && kt(t.slice(a, n)),
                        n < r && kt((t = t.slice(n))),
                        n < r && N(t)
                      );
                    }
                    u.push(e);
                  }
                return wt(u);
              }
              function jt(g, v) {
                var y = 0 < v.length,
                  b = 0 < g.length,
                  t = function (t, e, n, i, r) {
                    var s,
                      o,
                      a,
                      l = 0,
                      c = "0",
                      u = t && [],
                      f = [],
                      h = w,
                      p = t || (b && x.find.TAG("*", r)),
                      d = (j += null == h ? 1 : Math.random() || 0.1),
                      m = p.length;
                    for (r && (w = e == T || e || r); c !== m && null != (s = p[c]); c++) {
                      if (b && s) {
                        for (o = 0, e || s.ownerDocument == T || (q(s), (n = !C)); (a = g[o++]); )
                          if (a(s, e || T, n)) {
                            i.push(s);
                            break;
                          }
                        r && (j = d);
                      }
                      y && ((s = !a && s) && l--, t) && u.push(s);
                    }
                    if (((l += c), y && c !== l)) {
                      for (o = 0; (a = v[o++]); ) a(u, f, e, n);
                      if (t) {
                        if (0 < l) for (; c--; ) u[c] || f[c] || (f[c] = U.call(i));
                        f = Tt(f);
                      }
                      O.apply(i, f), r && !t && 0 < f.length && 1 < l + v.length && D.uniqueSort(i);
                    }
                    return r && ((j = d), (w = h)), u;
                  };
                return y ? L(t) : t;
              }
              return (
                (bt.prototype = x.filters = x.pseudos),
                (x.setFilters = new bt()),
                (p = D.tokenize =
                  function (t, e) {
                    var n,
                      i,
                      r,
                      s,
                      o,
                      a,
                      l,
                      c = P[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (o = t, a = [], l = x.preFilter; o; ) {
                      for (s in ((n && !(i = J.exec(o))) || (i && (o = o.slice(i[0].length) || o), a.push((r = []))),
                      (n = !1),
                      (i = tt.exec(o)) &&
                        ((n = i.shift()),
                        r.push({
                          value: n,
                          type: i[0].replace(v, " ")
                        }),
                        (o = o.slice(n.length))),
                      x.filter))
                        !(i = f[s].exec(o)) ||
                          (l[s] && !(i = l[s](i))) ||
                          ((n = i.shift()),
                          r.push({
                            value: n,
                            type: s,
                            matches: i
                          }),
                          (o = o.slice(n.length)));
                      if (!n) break;
                    }
                    return e ? o.length : o ? D.error(t) : P(t, a).slice(0);
                  }),
                (H = D.compile =
                  function (t, e) {
                    var n,
                      i = [],
                      r = [],
                      s = F[t + " "];
                    if (!s) {
                      for (n = (e = e || p(t)).length; n--; ) ((s = kt(e[n]))[k] ? i : r).push(s);
                      (s = F(t, jt(r, i))).selector = t;
                    }
                    return s;
                  }),
                (B = D.select =
                  function (t, e, n, i) {
                    var r,
                      s,
                      o,
                      a,
                      l,
                      c = "function" == typeof t && t,
                      u = !i && p((t = c.selector || t));
                    if (((n = n || []), 1 === u.length)) {
                      if (
                        2 < (s = u[0] = u[0].slice(0)).length &&
                        "ID" === (o = s[0]).type &&
                        9 === e.nodeType &&
                        C &&
                        x.relative[s[1].type]
                      ) {
                        if (!(e = (x.find.ID(o.matches[0].replace(S, E), e) || [])[0])) return n;
                        c && (e = e.parentNode), (t = t.slice(s.shift().value.length));
                      }
                      for (r = f.needsContext.test(t) ? 0 : s.length; r-- && ((o = s[r]), !x.relative[(a = o.type)]); )
                        if ((l = x.find[a]) && (i = l(o.matches[0].replace(S, E), (lt.test(s[0].type) && yt(e.parentNode)) || e))) {
                          if ((s.splice(r, 1), (t = i.length && N(s)))) break;
                          return O.apply(n, i), n;
                        }
                    }
                    return (c || H(t, u))(i, e, !C, n, !e || (lt.test(t) && yt(e.parentNode)) || e), n;
                  }),
                (h.sortStable = k.split("").sort($).join("") === k),
                (h.detectDuplicates = !!c),
                q(),
                (h.sortDetached = Q(function (t) {
                  return 1 & t.compareDocumentPosition(T.createElement("fieldset"));
                })),
                Q(function (t) {
                  return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                }) ||
                  pt("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                  }),
                (h.attributes &&
                  Q(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                  })) ||
                  pt("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                  }),
                Q(function (t) {
                  return null == t.getAttribute("disabled");
                }) ||
                  pt(G, function (t, e, n) {
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                  }),
                D
              );
            })(w),
          i =
            ((T.find = t),
            (T.expr = t.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = t.uniqueSort),
            (T.text = t.getText),
            (T.isXMLDoc = t.isXML),
            (T.contains = t.contains),
            (T.escapeSelector = t.escape),
            function (t, e, n) {
              for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                  if (r && T(t).is(n)) break;
                  i.push(t);
                }
              return i;
            }),
          G = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
          },
          K = T.expr.match.needsContext;
        function l(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var Y = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function Z(t, n, i) {
          return g(n)
            ? T.grep(t, function (t, e) {
                return !!n.call(t, e, t) !== i;
              })
            : n.nodeType
            ? T.grep(t, function (t) {
                return (t === n) !== i;
              })
            : "string" != typeof n
            ? T.grep(t, function (t) {
                return -1 < M.call(n, t) !== i;
              })
            : T.filter(n, t, i);
        }
        (T.filter = function (t, e, n) {
          var i = e[0];
          return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType
              ? T.find.matchesSelector(i, t)
                ? [i]
                : []
              : T.find.matches(
                  t,
                  T.grep(e, function (t) {
                    return 1 === t.nodeType;
                  })
                )
          );
        }),
          T.fn.extend({
            find: function (t) {
              var e,
                n,
                i = this.length,
                r = this;
              if ("string" != typeof t)
                return this.pushStack(
                  T(t).filter(function () {
                    for (e = 0; e < i; e++) if (T.contains(r[e], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, r[e], n);
              return 1 < i ? T.uniqueSort(n) : n;
            },
            filter: function (t) {
              return this.pushStack(Z(this, t || [], !1));
            },
            not: function (t) {
              return this.pushStack(Z(this, t || [], !0));
            },
            is: function (t) {
              return !!Z(this, "string" == typeof t && K.test(t) ? T(t) : t || [], !1).length;
            }
          });
        var J,
          tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
          et =
            (((T.fn.init = function (t, e, n) {
              if (t) {
                if (((n = n || J), "string" != typeof t))
                  return t.nodeType
                    ? ((this[0] = t), (this.length = 1), this)
                    : g(t)
                    ? void 0 !== n.ready
                      ? n.ready(t)
                      : t(T)
                    : T.makeArray(t, this);
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : tt.exec(t)) || (!i[1] && e))
                  return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
                if (i[1]) {
                  if (
                    ((e = e instanceof T ? e[0] : e),
                    T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : q, !0)),
                    Y.test(i[1]) && T.isPlainObject(e))
                  )
                    for (var i in e) g(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                } else (n = q.getElementById(i[2])) && ((this[0] = n), (this.length = 1));
              }
              return this;
            }).prototype = T.fn),
            (J = T(q)),
            /^(?:parents|prev(?:Until|All))/),
          nt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
          };
        function it(t, e) {
          for (; (t = t[e]) && 1 !== t.nodeType; );
          return t;
        }
        T.fn.extend({
          has: function (t) {
            var e = T(t, this),
              n = e.length;
            return this.filter(function () {
              for (var t = 0; t < n; t++) if (T.contains(this, e[t])) return !0;
            });
          },
          closest: function (t, e) {
            var n,
              i = 0,
              r = this.length,
              s = [],
              o = "string" != typeof t && T(t);
            if (!K.test(t))
              for (; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                  if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                    s.push(n);
                    break;
                  }
            return this.pushStack(1 < s.length ? T.uniqueSort(s) : s);
          },
          index: function (t) {
            return t
              ? "string" == typeof t
                ? M.call(T(t), this[0])
                : M.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (t, e) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
          },
          addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
          }
        }),
          T.each(
            {
              parent: function (t) {
                t = t.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (t) {
                return i(t, "parentNode");
              },
              parentsUntil: function (t, e, n) {
                return i(t, "parentNode", n);
              },
              next: function (t) {
                return it(t, "nextSibling");
              },
              prev: function (t) {
                return it(t, "previousSibling");
              },
              nextAll: function (t) {
                return i(t, "nextSibling");
              },
              prevAll: function (t) {
                return i(t, "previousSibling");
              },
              nextUntil: function (t, e, n) {
                return i(t, "nextSibling", n);
              },
              prevUntil: function (t, e, n) {
                return i(t, "previousSibling", n);
              },
              siblings: function (t) {
                return G((t.parentNode || {}).firstChild, t);
              },
              children: function (t) {
                return G(t.firstChild);
              },
              contents: function (t) {
                return null != t.contentDocument && I(t.contentDocument)
                  ? t.contentDocument
                  : (l(t, "template") && (t = t.content || t), T.merge([], t.childNodes));
              }
            },
            function (i, r) {
              T.fn[i] = function (t, e) {
                var n = T.map(this, r, t);
                return (
                  (e = "Until" !== i.slice(-5) ? t : e) && "string" == typeof e && (n = T.filter(e, n)),
                  1 < this.length && (nt[i] || T.uniqueSort(n), et.test(i)) && n.reverse(),
                  this.pushStack(n)
                );
              };
            }
          );
        var C = /[^\x20\t\r\n\f]+/g;
        function rt(t) {
          var n = {};
          return (
            T.each(t.match(C) || [], function (t, e) {
              n[e] = !0;
            }),
            n
          );
        }
        function u(t) {
          return t;
        }
        function st(t) {
          throw t;
        }
        function ot(t, e, n, i) {
          var r;
          try {
            t && g((r = t.promise)) ? r.call(t).done(e).fail(n) : t && g((r = t.then)) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i));
          } catch (t) {
            n.apply(void 0, [t]);
          }
        }
        (T.Callbacks = function (i) {
          i = "string" == typeof i ? rt(i) : T.extend({}, i);
          var n,
            t,
            e,
            r,
            s = [],
            o = [],
            a = -1,
            l = function () {
              for (r = r || i.once, e = n = !0; o.length; a = -1)
                for (t = o.shift(); ++a < s.length; ) !1 === s[a].apply(t[0], t[1]) && i.stopOnFalse && ((a = s.length), (t = !1));
              i.memory || (t = !1), (n = !1), r && (s = t ? [] : "");
            },
            c = {
              add: function () {
                return (
                  s &&
                    (t && !n && ((a = s.length - 1), o.push(t)),
                    (function n(t) {
                      T.each(t, function (t, e) {
                        g(e) ? (i.unique && c.has(e)) || s.push(e) : e && e.length && "string" !== d(e) && n(e);
                      });
                    })(arguments),
                    t) &&
                    !n &&
                    l(),
                  this
                );
              },
              remove: function () {
                return (
                  T.each(arguments, function (t, e) {
                    for (var n; -1 < (n = T.inArray(e, s, n)); ) s.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (t) {
                return t ? -1 < T.inArray(t, s) : 0 < s.length;
              },
              empty: function () {
                return (s = s && []), this;
              },
              disable: function () {
                return (r = o = []), (s = t = ""), this;
              },
              disabled: function () {
                return !s;
              },
              lock: function () {
                return (r = o = []), t || n || (s = t = ""), this;
              },
              locked: function () {
                return !!r;
              },
              fireWith: function (t, e) {
                return r || ((e = [t, (e = e || []).slice ? e.slice() : e]), o.push(e), n) || l(), this;
              },
              fire: function () {
                return c.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!e;
              }
            };
          return c;
        }),
          T.extend({
            Deferred: function (t) {
              var s = [
                  ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                  ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                  state: function () {
                    return r;
                  },
                  always: function () {
                    return a.done(arguments).fail(arguments), this;
                  },
                  catch: function (t) {
                    return o.then(null, t);
                  },
                  pipe: function () {
                    var r = arguments;
                    return T.Deferred(function (i) {
                      T.each(s, function (t, e) {
                        var n = g(r[e[4]]) && r[e[4]];
                        a[e[1]](function () {
                          var t = n && n.apply(this, arguments);
                          t && g(t.promise)
                            ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject)
                            : i[e[0] + "With"](this, n ? [t] : arguments);
                        });
                      }),
                        (r = null);
                    }).promise();
                  },
                  then: function (e, n, i) {
                    var l = 0;
                    function c(r, s, o, a) {
                      return function () {
                        var n = this,
                          i = arguments,
                          t = function () {
                            var t, e;
                            if (!(r < l)) {
                              if ((t = o.apply(n, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
                              (e = t && ("object" == typeof t || "function" == typeof t) && t.then),
                                g(e)
                                  ? a
                                    ? e.call(t, c(l, s, u, a), c(l, s, st, a))
                                    : (l++, e.call(t, c(l, s, u, a), c(l, s, st, a), c(l, s, u, s.notifyWith)))
                                  : (o !== u && ((n = void 0), (i = [t])), (a || s.resolveWith)(n, i));
                            }
                          },
                          e = a
                            ? t
                            : function () {
                                try {
                                  t();
                                } catch (t) {
                                  T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace),
                                    l <= r + 1 && (o !== st && ((n = void 0), (i = [t])), s.rejectWith(n, i));
                                }
                              };
                        r ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), w.setTimeout(e));
                      };
                    }
                    return T.Deferred(function (t) {
                      s[0][3].add(c(0, t, g(i) ? i : u, t.notifyWith)),
                        s[1][3].add(c(0, t, g(e) ? e : u)),
                        s[2][3].add(c(0, t, g(n) ? n : st));
                    }).promise();
                  },
                  promise: function (t) {
                    return null != t ? T.extend(t, o) : o;
                  }
                },
                a = {};
              return (
                T.each(s, function (t, e) {
                  var n = e[2],
                    i = e[5];
                  (o[e[1]] = n.add),
                    i &&
                      n.add(
                        function () {
                          r = i;
                        },
                        s[3 - t][2].disable,
                        s[3 - t][3].disable,
                        s[0][2].lock,
                        s[0][3].lock
                      ),
                    n.add(e[3].fire),
                    (a[e[0]] = function () {
                      return a[e[0] + "With"](this === a ? void 0 : this, arguments), this;
                    }),
                    (a[e[0] + "With"] = n.fireWith);
                }),
                o.promise(a),
                t && t.call(a, a),
                a
              );
            },
            when: function (t) {
              var n = arguments.length,
                e = n,
                i = Array(e),
                r = a.call(arguments),
                s = T.Deferred(),
                o = function (e) {
                  return function (t) {
                    (i[e] = this), (r[e] = 1 < arguments.length ? a.call(arguments) : t), --n || s.resolveWith(i, r);
                  };
                };
              if (n <= 1 && (ot(t, s.done(o(e)).resolve, s.reject, !n), "pending" === s.state() || g(r[e] && r[e].then))) return s.then();
              for (; e--; ) ot(r[e], o(e), s.reject);
              return s.promise();
            }
          });
        var at = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
          lt =
            ((T.Deferred.exceptionHook = function (t, e) {
              w.console && w.console.warn && t && at.test(t.name) && w.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
            }),
            (T.readyException = function (t) {
              w.setTimeout(function () {
                throw t;
              });
            }),
            T.Deferred());
        function ct() {
          q.removeEventListener("DOMContentLoaded", ct), w.removeEventListener("load", ct), T.ready();
        }
        (T.fn.ready = function (t) {
          return (
            lt.then(t).catch(function (t) {
              T.readyException(t);
            }),
            this
          );
        }),
          T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
              (!0 === t ? --T.readyWait : T.isReady) || ((T.isReady = !0) !== t && 0 < --T.readyWait) || lt.resolveWith(q, [T]);
            }
          }),
          (T.ready.then = lt.then),
          "complete" === q.readyState || ("loading" !== q.readyState && !q.documentElement.doScroll)
            ? w.setTimeout(T.ready)
            : (q.addEventListener("DOMContentLoaded", ct), w.addEventListener("load", ct));
        var f = function (t, e, n, i, r, s, o) {
            var a = 0,
              l = t.length,
              c = null == n;
            if ("object" === d(n)) for (a in ((r = !0), n)) f(t, e, a, n[a], !0, s, o);
            else if (
              void 0 !== i &&
              ((r = !0),
              g(i) || (o = !0),
              (e = c
                ? o
                  ? (e.call(t, i), null)
                  : ((c = e),
                    function (t, e, n) {
                      return c.call(T(t), n);
                    })
                : e))
            )
              for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : s;
          },
          ut = /^-ms-/,
          ft = /-([a-z])/g;
        function ht(t, e) {
          return e.toUpperCase();
        }
        function h(t) {
          return t.replace(ut, "ms-").replace(ft, ht);
        }
        var y = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        function pt() {
          this.expando = T.expando + pt.uid++;
        }
        (pt.uid = 1),
          (pt.prototype = {
            cache: function (t) {
              var e = t[this.expando];
              return (
                e ||
                  ((e = {}),
                  y(t) &&
                    (t.nodeType
                      ? (t[this.expando] = e)
                      : Object.defineProperty(t, this.expando, {
                          value: e,
                          configurable: !0
                        }))),
                e
              );
            },
            set: function (t, e, n) {
              var i,
                r = this.cache(t);
              if ("string" == typeof e) r[h(e)] = n;
              else for (i in e) r[h(i)] = e[i];
              return r;
            },
            get: function (t, e) {
              return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][h(e)];
            },
            access: function (t, e, n) {
              return void 0 === e || (e && "string" == typeof e && void 0 === n)
                ? this.get(t, e)
                : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
              var n,
                i = t[this.expando];
              if (void 0 !== i) {
                if (void 0 !== e) {
                  n = (e = Array.isArray(e) ? e.map(h) : (e = h(e)) in i ? [e] : e.match(C) || []).length;
                  for (; n--; ) delete i[e[n]];
                }
                (void 0 !== e && !T.isEmptyObject(i)) || (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
              }
            },
            hasData: function (t) {
              t = t[this.expando];
              return void 0 !== t && !T.isEmptyObject(t);
            }
          });
        var b = new pt(),
          c = new pt(),
          dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          mt = /[A-Z]/g;
        function gt(t) {
          return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : dt.test(t) ? JSON.parse(t) : t));
        }
        function vt(t, e, n) {
          var i;
          if (void 0 === n && 1 === t.nodeType)
            if (((i = "data-" + e.replace(mt, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
              try {
                n = gt(n);
              } catch (t) {}
              c.set(t, e, n);
            } else n = void 0;
          return n;
        }
        T.extend({
          hasData: function (t) {
            return c.hasData(t) || b.hasData(t);
          },
          data: function (t, e, n) {
            return c.access(t, e, n);
          },
          removeData: function (t, e) {
            c.remove(t, e);
          },
          _data: function (t, e, n) {
            return b.access(t, e, n);
          },
          _removeData: function (t, e) {
            b.remove(t, e);
          }
        }),
          T.fn.extend({
            data: function (n, t) {
              var e,
                i,
                r,
                s = this[0],
                o = s && s.attributes;
              if (void 0 !== n)
                return "object" == typeof n
                  ? this.each(function () {
                      c.set(this, n);
                    })
                  : f(
                      this,
                      function (t) {
                        var e;
                        if (s && void 0 === t) return void 0 !== (e = c.get(s, n)) || void 0 !== (e = vt(s, n)) ? e : void 0;
                        this.each(function () {
                          c.set(this, n, t);
                        });
                      },
                      null,
                      t,
                      1 < arguments.length,
                      null,
                      !0
                    );
              if (this.length && ((r = c.get(s)), 1 === s.nodeType) && !b.get(s, "hasDataAttrs")) {
                for (e = o.length; e--; ) o[e] && 0 === (i = o[e].name).indexOf("data-") && ((i = h(i.slice(5))), vt(s, i, r[i]));
                b.set(s, "hasDataAttrs", !0);
              }
              return r;
            },
            removeData: function (t) {
              return this.each(function () {
                c.remove(this, t);
              });
            }
          }),
          T.extend({
            queue: function (t, e, n) {
              var i;
              if (t)
                return (
                  (i = b.get(t, (e = (e || "fx") + "queue"))),
                  n && (!i || Array.isArray(n) ? (i = b.access(t, e, T.makeArray(n))) : i.push(n)),
                  i || []
                );
            },
            dequeue: function (t, e) {
              e = e || "fx";
              var n = T.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = T._queueHooks(t, e),
                o = function () {
                  T.dequeue(t, e);
                };
              "inprogress" === r && ((r = n.shift()), i--),
                r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)),
                !i && s && s.empty.fire();
            },
            _queueHooks: function (t, e) {
              var n = e + "queueHooks";
              return (
                b.get(t, n) ||
                b.access(t, n, {
                  empty: T.Callbacks("once memory").add(function () {
                    b.remove(t, [e + "queue", n]);
                  })
                })
              );
            }
          }),
          T.fn.extend({
            queue: function (e, n) {
              var t = 2;
              return (
                "string" != typeof e && ((n = e), (e = "fx"), t--),
                arguments.length < t
                  ? T.queue(this[0], e)
                  : void 0 === n
                  ? this
                  : this.each(function () {
                      var t = T.queue(this, e, n);
                      T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e);
                    })
              );
            },
            dequeue: function (t) {
              return this.each(function () {
                T.dequeue(this, t);
              });
            },
            clearQueue: function (t) {
              return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
              var n,
                i = 1,
                r = T.Deferred(),
                s = this,
                o = this.length,
                a = function () {
                  --i || r.resolveWith(s, [s]);
                };
              for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; o--; )
                (n = b.get(s[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
              return a(), r.promise(e);
            }
          });
        var t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          yt = new RegExp("^(?:([+-])=|)(" + t + ")([a-z%]*)$", "i"),
          p = ["Top", "Right", "Bottom", "Left"],
          x = q.documentElement,
          k = function (t) {
            return T.contains(t.ownerDocument, t);
          },
          bt = {
            composed: !0
          },
          xt =
            (x.getRootNode &&
              (k = function (t) {
                return T.contains(t.ownerDocument, t) || t.getRootNode(bt) === t.ownerDocument;
              }),
            function (t, e) {
              return "none" === (t = e || t).style.display || ("" === t.style.display && k(t) && "none" === T.css(t, "display"));
            });
        function wt(t, e, n, i) {
          var r,
            s,
            o = 20,
            a = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return T.css(t, e, "");
                },
            l = a(),
            c = (n && n[3]) || (T.cssNumber[e] ? "" : "px"),
            u = t.nodeType && (T.cssNumber[e] || ("px" !== c && +l)) && yt.exec(T.css(t, e));
          if (u && u[3] !== c) {
            for (c = c || u[3], u = +(l /= 2) || 1; o--; )
              T.style(t, e, u + c), (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0), (u /= s);
            T.style(t, e, (u *= 2) + c), (n = n || []);
          }
          return n && ((u = +u || +l || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i) && ((i.unit = c), (i.start = u), (i.end = r)), r;
        }
        var qt = {};
        function Tt(t) {
          var e = t.ownerDocument,
            t = t.nodeName,
            n = qt[t];
          return (
            n ||
              ((e = e.body.appendChild(e.createElement(t))),
              (n = T.css(e, "display")),
              e.parentNode.removeChild(e),
              (qt[t] = n = "none" === n ? "block" : n)),
            n
          );
        }
        function j(t, e) {
          for (var n, i, r = [], s = 0, o = t.length; s < o; s++)
            (i = t[s]).style &&
              ((n = i.style.display),
              e
                ? ("none" === n && ((r[s] = b.get(i, "display") || null), r[s] || (i.style.display = "")),
                  "" === i.style.display && xt(i) && (r[s] = Tt(i)))
                : "none" !== n && ((r[s] = "none"), b.set(i, "display", n)));
          for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
          return t;
        }
        T.fn.extend({
          show: function () {
            return j(this, !0);
          },
          hide: function () {
            return j(this);
          },
          toggle: function (t) {
            return "boolean" == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                  xt(this) ? T(this).show() : T(this).hide();
                });
          }
        });
        var Ct = /^(?:checkbox|radio)$/i,
          kt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          jt = /^$|^module$|\/(?:java|ecma)script/i,
          O =
            ((N = q.createDocumentFragment().appendChild(q.createElement("div"))),
            (o = q.createElement("input")).setAttribute("type", "radio"),
            o.setAttribute("checked", "checked"),
            o.setAttribute("name", "t"),
            N.appendChild(o),
            (m.checkClone = N.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (N.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!N.cloneNode(!0).lastChild.defaultValue),
            (N.innerHTML = "<option></option>"),
            (m.option = !!N.lastChild),
            {
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""]
            });
        function S(t, e) {
          var n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : [];
          return void 0 === e || (e && l(t, e)) ? T.merge([t], n) : n;
        }
        function Ot(t, e) {
          for (var n = 0, i = t.length; n < i; n++) b.set(t[n], "globalEval", !e || b.get(e[n], "globalEval"));
        }
        (O.tbody = O.tfoot = O.colgroup = O.caption = O.thead),
          (O.th = O.td),
          m.option || (O.optgroup = O.option = [1, "<select multiple='multiple'>", "</select>"]);
        var St = /<|&#?\w+;/;
        function Et(t, e, n, i, r) {
          for (var s, o, a, l, c, u = e.createDocumentFragment(), f = [], h = 0, p = t.length; h < p; h++)
            if ((s = t[h]) || 0 === s)
              if ("object" === d(s)) T.merge(f, s.nodeType ? [s] : s);
              else if (St.test(s)) {
                for (
                  o = o || u.appendChild(e.createElement("div")),
                    a = (kt.exec(s) || ["", ""])[1].toLowerCase(),
                    a = O[a] || O._default,
                    o.innerHTML = a[1] + T.htmlPrefilter(s) + a[2],
                    c = a[0];
                  c--;

                )
                  o = o.lastChild;
                T.merge(f, o.childNodes), ((o = u.firstChild).textContent = "");
              } else f.push(e.createTextNode(s));
          for (u.textContent = "", h = 0; (s = f[h++]); )
            if (i && -1 < T.inArray(s, i)) r && r.push(s);
            else if (((l = k(s)), (o = S(u.appendChild(s), "script")), l && Ot(o), n))
              for (c = 0; (s = o[c++]); ) jt.test(s.type || "") && n.push(s);
          return u;
        }
        var Dt = /^key/,
          At = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Lt = /^([^.]*)(?:\.(.+)|)/;
        function n() {
          return !0;
        }
        function E() {
          return !1;
        }
        function Qt(t, e) {
          return (t === _t()) == ("focus" === e);
        }
        function _t() {
          try {
            return q.activeElement;
          } catch (t) {}
        }
        function Nt(t, e, n, i, r, s) {
          var o, a;
          if ("object" == typeof e) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) Nt(t, a, n, i, e[a], s);
            return t;
          }
          if (
            (null == i && null == r
              ? ((r = n), (i = n = void 0))
              : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))),
            !1 === r)
          )
            r = E;
          else if (!r) return t;
          return (
            1 === s &&
              ((o = r),
              ((r = function (t) {
                return T().off(t), o.apply(this, arguments);
              }).guid = o.guid || (o.guid = T.guid++))),
            t.each(function () {
              T.event.add(this, e, r, i, n);
            })
          );
        }
        function Rt(t, r, s) {
          s
            ? (b.set(t, r, !1),
              T.event.add(t, r, {
                namespace: !1,
                handler: function (t) {
                  var e,
                    n,
                    i = b.get(this, r);
                  if (1 & t.isTrigger && this[r]) {
                    if (i.length) (T.event.special[r] || {}).delegateType && t.stopPropagation();
                    else if (
                      ((i = a.call(arguments)),
                      b.set(this, r, i),
                      (e = s(this, r)),
                      this[r](),
                      i !== (n = b.get(this, r)) || e ? b.set(this, r, !1) : (n = {}),
                      i !== n)
                    )
                      return t.stopImmediatePropagation(), t.preventDefault(), n.value;
                  } else
                    i.length &&
                      (b.set(this, r, {
                        value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                      }),
                      t.stopImmediatePropagation());
                }
              }))
            : void 0 === b.get(t, r) && T.event.add(t, r, n);
        }
        (T.event = {
          global: {},
          add: function (e, t, n, i, r) {
            var s,
              o,
              a,
              l,
              c,
              u,
              f,
              h,
              p,
              d = b.get(e);
            if (y(e))
              for (
                n.handler && ((n = (s = n).handler), (r = s.selector)),
                  r && T.find.matchesSelector(x, r),
                  n.guid || (n.guid = T.guid++),
                  a = (a = d.events) || (d.events = Object.create(null)),
                  o =
                    (o = d.handle) ||
                    (d.handle = function (t) {
                      return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                    }),
                  l = (t = (t || "").match(C) || [""]).length;
                l--;

              )
                (f = p = (h = Lt.exec(t[l]) || [])[1]),
                  (h = (h[2] || "").split(".").sort()),
                  f &&
                    ((c = T.event.special[f] || {}),
                    (f = (r ? c.delegateType : c.bindType) || f),
                    (c = T.event.special[f] || {}),
                    (p = T.extend(
                      {
                        type: f,
                        origType: p,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && T.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                      },
                      s
                    )),
                    (u = a[f]) ||
                      (((u = a[f] = []).delegateCount = 0), c.setup && !1 !== c.setup.call(e, i, h, o)) ||
                      (e.addEventListener && e.addEventListener(f, o)),
                    c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)),
                    r ? u.splice(u.delegateCount++, 0, p) : u.push(p),
                    (T.event.global[f] = !0));
          },
          remove: function (t, e, n, i, r) {
            var s,
              o,
              a,
              l,
              c,
              u,
              f,
              h,
              p,
              d,
              m,
              g = b.hasData(t) && b.get(t);
            if (g && (l = g.events)) {
              for (c = (e = (e || "").match(C) || [""]).length; c--; )
                if (((p = m = (a = Lt.exec(e[c]) || [])[1]), (d = (a[2] || "").split(".").sort()), p)) {
                  for (
                    f = T.event.special[p] || {},
                      h = l[(p = (i ? f.delegateType : f.bindType) || p)] || [],
                      a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      o = s = h.length;
                    s--;

                  )
                    (u = h[s]),
                      (!r && m !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (a && !a.test(u.namespace)) ||
                        (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                        (h.splice(s, 1), u.selector && h.delegateCount--, f.remove && f.remove.call(t, u));
                  o && !h.length && ((f.teardown && !1 !== f.teardown.call(t, d, g.handle)) || T.removeEvent(t, p, g.handle), delete l[p]);
                } else for (p in l) T.event.remove(t, p + e[c], n, i, !0);
              T.isEmptyObject(l) && b.remove(t, "handle events");
            }
          },
          dispatch: function (t) {
            var e,
              n,
              i,
              r,
              s,
              o = new Array(arguments.length),
              a = T.event.fix(t),
              t = (b.get(this, "events") || Object.create(null))[a.type] || [],
              l = T.event.special[a.type] || {};
            for (o[0] = a, e = 1; e < arguments.length; e++) o[e] = arguments[e];
            if (((a.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, a))) {
              for (s = T.event.handlers.call(this, a, t), e = 0; (i = s[e++]) && !a.isPropagationStopped(); )
                for (a.currentTarget = i.elem, n = 0; (r = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                  (a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace)) ||
                    ((a.handleObj = r),
                    (a.data = r.data),
                    void 0 !== (r = ((T.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, o)) &&
                      !1 === (a.result = r) &&
                      (a.preventDefault(), a.stopPropagation()));
              return l.postDispatch && l.postDispatch.call(this, a), a.result;
            }
          },
          handlers: function (t, e) {
            var n,
              i,
              r,
              s,
              o,
              a = [],
              l = e.delegateCount,
              c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
              for (; c !== this; c = c.parentNode || this)
                if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                  for (s = [], o = {}, n = 0; n < l; n++)
                    void 0 === o[(r = (i = e[n]).selector + " ")] &&
                      (o[r] = i.needsContext ? -1 < T(r, this).index(c) : T.find(r, this, null, [c]).length),
                      o[r] && s.push(i);
                  s.length &&
                    a.push({
                      elem: c,
                      handlers: s
                    });
                }
            return (
              (c = this),
              l < e.length &&
                a.push({
                  elem: c,
                  handlers: e.slice(l)
                }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(T.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: g(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
                });
              }
            });
          },
          fix: function (t) {
            return t[T.expando] ? t : new T.Event(t);
          },
          special: {
            load: {
              noBubble: !0
            },
            click: {
              setup: function (t) {
                t = this || t;
                return Ct.test(t.type) && t.click && l(t, "input") && Rt(t, "click", n), !1;
              },
              trigger: function (t) {
                t = this || t;
                return Ct.test(t.type) && t.click && l(t, "input") && Rt(t, "click"), !0;
              },
              _default: function (t) {
                t = t.target;
                return (Ct.test(t.type) && t.click && l(t, "input") && b.get(t, "click")) || l(t, "a");
              }
            },
            beforeunload: {
              postDispatch: function (t) {
                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
              }
            }
          }
        }),
          (T.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
          }),
          (T.Event = function (t, e) {
            if (!(this instanceof T.Event)) return new T.Event(t, e);
            t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? n : E),
                (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                (this.currentTarget = t.currentTarget),
                (this.relatedTarget = t.relatedTarget))
              : (this.type = t),
              e && T.extend(this, e),
              (this.timeStamp = (t && t.timeStamp) || Date.now()),
              (this[T.expando] = !0);
          }),
          (T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: E,
            isPropagationStopped: E,
            isImmediatePropagationStopped: E,
            isSimulated: !1,
            preventDefault: function () {
              var t = this.originalEvent;
              (this.isDefaultPrevented = n), t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
              var t = this.originalEvent;
              (this.isPropagationStopped = n), t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var t = this.originalEvent;
              (this.isImmediatePropagationStopped = n), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
            }
          }),
          T.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (t) {
                var e = t.button;
                return null == t.which && Dt.test(t.type)
                  ? null != t.charCode
                    ? t.charCode
                    : t.keyCode
                  : !t.which && void 0 !== e && At.test(t.type)
                  ? 1 & e
                    ? 1
                    : 2 & e
                    ? 3
                    : 4 & e
                    ? 2
                    : 0
                  : t.which;
              }
            },
            T.event.addProp
          ),
          T.each(
            {
              focus: "focusin",
              blur: "focusout"
            },
            function (t, e) {
              T.event.special[t] = {
                setup: function () {
                  return Rt(this, t, Qt), !1;
                },
                trigger: function () {
                  return Rt(this, t), !0;
                },
                delegateType: e
              };
            }
          ),
          T.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout"
            },
            function (t, s) {
              T.event.special[t] = {
                delegateType: s,
                bindType: s,
                handle: function (t) {
                  var e,
                    n = this,
                    i = t.relatedTarget,
                    r = t.handleObj;
                  return (
                    (i && (i === n || T.contains(n, i))) || ((t.type = r.origType), (e = r.handler.apply(this, arguments)), (t.type = s)), e
                  );
                }
              };
            }
          ),
          T.fn.extend({
            on: function (t, e, n, i) {
              return Nt(this, t, e, n, i);
            },
            one: function (t, e, n, i) {
              return Nt(this, t, e, n, i, 1);
            },
            off: function (t, e, n) {
              var i, r;
              if (t && t.preventDefault && t.handleObj)
                (i = t.handleObj),
                  T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
              else {
                if ("object" != typeof t)
                  return (
                    (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                    !1 === n && (n = E),
                    this.each(function () {
                      T.event.remove(this, t, n, e);
                    })
                  );
                for (r in t) this.off(r, e, t[r]);
              }
              return this;
            }
          });
        var It = /<script|<style|<link/i,
          Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Bt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Mt(t, e) {
          return (l(t, "table") && l(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0]) || t;
        }
        function zt(t) {
          return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
        }
        function Pt(t) {
          return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
        }
        function Ft(t, e) {
          var n, i, r, s;
          if (1 === e.nodeType) {
            if (b.hasData(t) && (s = b.get(t).events))
              for (r in (b.remove(e, "handle events"), s)) for (n = 0, i = s[r].length; n < i; n++) T.event.add(e, r, s[r][n]);
            c.hasData(t) && ((t = c.access(t)), (t = T.extend({}, t)), c.set(e, t));
          }
        }
        function $t(t, e) {
          var n = e.nodeName.toLowerCase();
          "input" === n && Ct.test(t.type)
            ? (e.checked = t.checked)
            : ("input" !== n && "textarea" !== n) || (e.defaultValue = t.defaultValue);
        }
        function D(n, i, r, s) {
          i = H(i);
          var t,
            e,
            o,
            a,
            l,
            c,
            u = 0,
            f = n.length,
            h = f - 1,
            p = i[0],
            d = g(p);
          if (d || (1 < f && "string" == typeof p && !m.checkClone && Ht.test(p)))
            return n.each(function (t) {
              var e = n.eq(t);
              d && (i[0] = p.call(this, t, e.html())), D(e, i, r, s);
            });
          if (f && ((e = (t = Et(i, n[0].ownerDocument, !1, n, s)).firstChild), 1 === t.childNodes.length && (t = e), e || s)) {
            for (a = (o = T.map(S(t, "script"), zt)).length; u < f; u++)
              (l = t), u !== h && ((l = T.clone(l, !0, !0)), a) && T.merge(o, S(l, "script")), r.call(n[u], l, u);
            if (a)
              for (c = o[o.length - 1].ownerDocument, T.map(o, Pt), u = 0; u < a; u++)
                (l = o[u]),
                  jt.test(l.type || "") &&
                    !b.access(l, "globalEval") &&
                    T.contains(c, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                      ? T._evalUrl &&
                        !l.noModule &&
                        T._evalUrl(
                          l.src,
                          {
                            nonce: l.nonce || l.getAttribute("nonce")
                          },
                          c
                        )
                      : V(l.textContent.replace(Bt, ""), l, c));
          }
          return n;
        }
        function Wt(t, e, n) {
          for (var i, r = e ? T.filter(e, t) : t, s = 0; null != (i = r[s]); s++)
            n || 1 !== i.nodeType || T.cleanData(S(i)), i.parentNode && (n && k(i) && Ot(S(i, "script")), i.parentNode.removeChild(i));
          return t;
        }
        T.extend({
          htmlPrefilter: function (t) {
            return t;
          },
          clone: function (t, e, n) {
            var i,
              r,
              s,
              o,
              a = t.cloneNode(!0),
              l = k(t);
            if (!(m.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || T.isXMLDoc(t)))
              for (o = S(a), i = 0, r = (s = S(t)).length; i < r; i++) $t(s[i], o[i]);
            if (e)
              if (n) for (s = s || S(t), o = o || S(a), i = 0, r = s.length; i < r; i++) Ft(s[i], o[i]);
              else Ft(t, a);
            return 0 < (o = S(a, "script")).length && Ot(o, !l && S(t, "script")), a;
          },
          cleanData: function (t) {
            for (var e, n, i, r = T.event.special, s = 0; void 0 !== (n = t[s]); s++)
              if (y(n)) {
                if ((e = n[b.expando])) {
                  if (e.events) for (i in e.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                  n[b.expando] = void 0;
                }
                n[c.expando] && (n[c.expando] = void 0);
              }
          }
        }),
          T.fn.extend({
            detach: function (t) {
              return Wt(this, t, !0);
            },
            remove: function (t) {
              return Wt(this, t);
            },
            text: function (t) {
              return f(
                this,
                function (t) {
                  return void 0 === t
                    ? T.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                      });
                },
                null,
                t,
                arguments.length
              );
            },
            append: function () {
              return D(this, arguments, function (t) {
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Mt(this, t).appendChild(t);
              });
            },
            prepend: function () {
              return D(this, arguments, function (t) {
                var e;
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (e = Mt(this, t)).insertBefore(t, e.firstChild);
              });
            },
            before: function () {
              return D(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
              });
            },
            after: function () {
              return D(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
              });
            },
            empty: function () {
              for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(S(t, !1)), (t.textContent = ""));
              return this;
            },
            clone: function (t, e) {
              return (
                (t = null != t && t),
                (e = null == e ? t : e),
                this.map(function () {
                  return T.clone(this, t, e);
                })
              );
            },
            html: function (t) {
              return f(
                this,
                function (t) {
                  var e = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                  if ("string" == typeof t && !It.test(t) && !O[(kt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = T.htmlPrefilter(t);
                    try {
                      for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(S(e, !1)), (e.innerHTML = t));
                      e = 0;
                    } catch (t) {}
                  }
                  e && this.empty().append(t);
                },
                null,
                t,
                arguments.length
              );
            },
            replaceWith: function () {
              var n = [];
              return D(
                this,
                arguments,
                function (t) {
                  var e = this.parentNode;
                  T.inArray(this, n) < 0 && (T.cleanData(S(this)), e) && e.replaceChild(t, this);
                },
                n
              );
            }
          }),
          T.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith"
            },
            function (t, o) {
              T.fn[t] = function (t) {
                for (var e, n = [], i = T(t), r = i.length - 1, s = 0; s <= r; s++)
                  (e = s === r ? this : this.clone(!0)), T(i[s])[o](e), B.apply(n, e.get());
                return this.pushStack(n);
              };
            }
          );
        var Ut,
          Vt,
          Xt,
          Gt,
          Kt,
          Yt,
          Zt,
          r,
          Jt = new RegExp("^(" + t + ")(?!px)[a-z%]+$", "i"),
          te = function (t) {
            var e = t.ownerDocument.defaultView;
            return (e = e && e.opener ? e : w).getComputedStyle(t);
          },
          ee = function (t, e, n) {
            var i,
              r = {};
            for (i in e) (r[i] = t.style[i]), (t.style[i] = e[i]);
            for (i in ((n = n.call(t)), e)) t.style[i] = r[i];
            return n;
          },
          ne = new RegExp(p.join("|"), "i");
        function ie() {
          var t;
          r &&
            ((Zt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (r.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            x.appendChild(Zt).appendChild(r),
            (t = w.getComputedStyle(r)),
            (Ut = "1%" !== t.top),
            (Yt = 12 === re(t.marginLeft)),
            (r.style.right = "60%"),
            (Gt = 36 === re(t.right)),
            (Vt = 36 === re(t.width)),
            (r.style.position = "absolute"),
            (Xt = 12 === re(r.offsetWidth / 3)),
            x.removeChild(Zt),
            (r = null));
        }
        function re(t) {
          return Math.round(parseFloat(t));
        }
        function se(t, e, n) {
          var i,
            r,
            s = t.style;
          return (
            (n = n || te(t)) &&
              ("" !== (r = n.getPropertyValue(e) || n[e]) || k(t) || (r = T.style(t, e)), !m.pixelBoxStyles()) &&
              Jt.test(r) &&
              ne.test(e) &&
              ((t = s.width),
              (e = s.minWidth),
              (i = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = r),
              (r = n.width),
              (s.width = t),
              (s.minWidth = e),
              (s.maxWidth = i)),
            void 0 !== r ? r + "" : r
          );
        }
        function oe(t, e) {
          return {
            get: function () {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get;
            }
          };
        }
        (Zt = q.createElement("div")),
          (r = q.createElement("div")).style &&
            ((r.style.backgroundClip = "content-box"),
            (r.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === r.style.backgroundClip),
            T.extend(m, {
              boxSizingReliable: function () {
                return ie(), Vt;
              },
              pixelBoxStyles: function () {
                return ie(), Gt;
              },
              pixelPosition: function () {
                return ie(), Ut;
              },
              reliableMarginLeft: function () {
                return ie(), Yt;
              },
              scrollboxSize: function () {
                return ie(), Xt;
              },
              reliableTrDimensions: function () {
                var t, e, n;
                return (
                  null == Kt &&
                    ((t = q.createElement("table")),
                    (e = q.createElement("tr")),
                    (n = q.createElement("div")),
                    (t.style.cssText = "position:absolute;left:-11111px"),
                    (e.style.height = "1px"),
                    (n.style.height = "9px"),
                    x.appendChild(t).appendChild(e).appendChild(n),
                    (n = w.getComputedStyle(e)),
                    (Kt = 3 < parseInt(n.height)),
                    x.removeChild(t)),
                  Kt
                );
              }
            }));
        var ae = ["Webkit", "Moz", "ms"],
          le = q.createElement("div").style,
          ce = {};
        function ue(t) {
          for (var e = t[0].toUpperCase() + t.slice(1), n = ae.length; n--; ) if ((t = ae[n] + e) in le) return t;
        }
        function fe(t) {
          var e = T.cssProps[t] || ce[t];
          return e || (t in le ? t : (ce[t] = ue(t) || t));
        }
        var he = /^(none|table(?!-c[ea]).+)/,
          pe = /^--/,
          de = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
          },
          me = {
            letterSpacing: "0",
            fontWeight: "400"
          };
        function ge(t, e, n) {
          var i = yt.exec(e);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
        }
        function ve(t, e, n, i, r, s) {
          var o = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; o < 4; o += 2)
            "margin" === n && (l += T.css(t, n + p[o], !0, r)),
              i
                ? ("content" === n && (l -= T.css(t, "padding" + p[o], !0, r)),
                  "margin" !== n && (l -= T.css(t, "border" + p[o] + "Width", !0, r)))
                : ((l += T.css(t, "padding" + p[o], !0, r)),
                  "padding" !== n ? (l += T.css(t, "border" + p[o] + "Width", !0, r)) : (a += T.css(t, "border" + p[o] + "Width", !0, r)));
          return !i && 0 <= s && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5)) || 0), l;
        }
        function ye(t, e, n) {
          var i = te(t),
            r = (!m.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, i),
            s = r,
            o = se(t, e, i),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
          if (Jt.test(o)) {
            if (!n) return o;
            o = "auto";
          }
          return (
            ((!m.boxSizingReliable() && r) ||
              (!m.reliableTrDimensions() && l(t, "tr")) ||
              "auto" === o ||
              (!parseFloat(o) && "inline" === T.css(t, "display", !1, i))) &&
              t.getClientRects().length &&
              ((r = "border-box" === T.css(t, "boxSizing", !1, i)), (s = a in t)) &&
              (o = t[a]),
            (o = parseFloat(o) || 0) + ve(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
          );
        }
        function s(t, e, n, i, r) {
          return new s.prototype.init(t, e, n, i, r);
        }
        T.extend({
          cssHooks: {
            opacity: {
              get: function (t, e) {
                if (e) return "" === (e = se(t, "opacity")) ? "1" : e;
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {},
          style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var r,
                s,
                o,
                a = h(e),
                l = pe.test(e),
                c = t.style;
              if ((l || (e = fe(a)), (o = T.cssHooks[e] || T.cssHooks[a]), void 0 === n))
                return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[e];
              "string" === (s = typeof n) && (r = yt.exec(n)) && r[1] && ((n = wt(t, e, r)), (s = "number")),
                null == n ||
                  n != n ||
                  ("number" !== s || l || (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
                  m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                  o && "set" in o && void 0 === (n = o.set(t, n, i))) ||
                  (l ? c.setProperty(e, n) : (c[e] = n));
            }
          },
          css: function (t, e, n, i) {
            var r,
              s = h(e);
            return (
              pe.test(e) || (e = fe(s)),
              "normal" ===
                (r = void 0 === (r = (s = T.cssHooks[e] || T.cssHooks[s]) && "get" in s ? s.get(t, !0, n) : r) ? se(t, e, i) : r) &&
                e in me &&
                (r = me[e]),
              ("" === n || n) && ((s = parseFloat(r)), !0 === n || isFinite(s)) ? s || 0 : r
            );
          }
        }),
          T.each(["height", "width"], function (t, o) {
            T.cssHooks[o] = {
              get: function (t, e, n) {
                if (e)
                  return !he.test(T.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                    ? ye(t, o, n)
                    : ee(t, de, function () {
                        return ye(t, o, n);
                      });
              },
              set: function (t, e, n) {
                var i = te(t),
                  r = !m.scrollboxSize() && "absolute" === i.position,
                  s = (r || n) && "border-box" === T.css(t, "boxSizing", !1, i),
                  n = n ? ve(t, o, n, s, i) : 0;
                return (
                  s &&
                    r &&
                    (n -= Math.ceil(t["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(i[o]) - ve(t, o, "border", !1, i) - 0.5)),
                  n && (s = yt.exec(e)) && "px" !== (s[3] || "px") && ((t.style[o] = e), (e = T.css(t, o))),
                  ge(t, e, n)
                );
              }
            };
          }),
          (T.cssHooks.marginLeft = oe(m.reliableMarginLeft, function (t, e) {
            if (e)
              return (
                (parseFloat(se(t, "marginLeft")) ||
                  t.getBoundingClientRect().left -
                    ee(
                      t,
                      {
                        marginLeft: 0
                      },
                      function () {
                        return t.getBoundingClientRect().left;
                      }
                    )) + "px"
              );
          })),
          T.each(
            {
              margin: "",
              padding: "",
              border: "Width"
            },
            function (r, s) {
              (T.cssHooks[r + s] = {
                expand: function (t) {
                  for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                    n[r + p[e] + s] = i[e] || i[e - 2] || i[0];
                  return n;
                }
              }),
                "margin" !== r && (T.cssHooks[r + s].set = ge);
            }
          ),
          T.fn.extend({
            css: function (t, e) {
              return f(
                this,
                function (t, e, n) {
                  var i,
                    r,
                    s = {},
                    o = 0;
                  if (Array.isArray(e)) {
                    for (i = te(t), r = e.length; o < r; o++) s[e[o]] = T.css(t, e[o], !1, i);
                    return s;
                  }
                  return void 0 !== n ? T.style(t, e, n) : T.css(t, e);
                },
                t,
                e,
                1 < arguments.length
              );
            }
          }),
          ((T.Tween = s).prototype = {
            constructor: s,
            init: function (t, e, n, i, r, s) {
              (this.elem = t),
                (this.prop = n),
                (this.easing = r || T.easing._default),
                (this.options = e),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = s || (T.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var t = s.propHooks[this.prop];
              return (t && t.get ? t : s.propHooks._default).get(this);
            },
            run: function (t) {
              var e,
                n = s.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration))
                  : (this.pos = e = t),
                (this.now = (this.end - this.start) * e + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                (n && n.set ? n : s.propHooks._default).set(this),
                this
              );
            }
          }),
          (s.prototype.init.prototype = s.prototype),
          (s.propHooks = {
            _default: {
              get: function (t) {
                return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                  ? t.elem[t.prop]
                  : (t = T.css(t.elem, t.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (t) {
                T.fx.step[t.prop]
                  ? T.fx.step[t.prop](t)
                  : 1 !== t.elem.nodeType || (!T.cssHooks[t.prop] && null == t.elem.style[fe(t.prop)])
                  ? (t.elem[t.prop] = t.now)
                  : T.style(t.elem, t.prop, t.now + t.unit);
              }
            }
          }),
          (s.propHooks.scrollTop = s.propHooks.scrollLeft =
            {
              set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
              }
            }),
          (T.easing = {
            linear: function (t) {
              return t;
            },
            swing: function (t) {
              return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing"
          }),
          (T.fx = s.prototype.init),
          (T.fx.step = {});
        var A,
          be,
          o,
          xe = /^(?:toggle|show|hide)$/,
          we = /queueHooks$/;
        function qe() {
          be && (!1 === q.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(qe) : w.setTimeout(qe, T.fx.interval), T.fx.tick());
        }
        function Te() {
          return (
            w.setTimeout(function () {
              A = void 0;
            }),
            (A = Date.now())
          );
        }
        function Ce(t, e) {
          var n,
            i = 0,
            r = {
              height: t
            };
          for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = p[i])] = r["padding" + n] = t;
          return e && (r.opacity = r.width = t), r;
        }
        function ke(t, e, n) {
          for (var i, r = (L.tweeners[e] || []).concat(L.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if ((i = r[s].call(n, e, t))) return i;
        }
        function je(t, e, n) {
          var i,
            r,
            s,
            o,
            a,
            l,
            c,
            u = "width" in e || "height" in e,
            f = this,
            h = {},
            p = t.style,
            d = t.nodeType && xt(t),
            m = b.get(t, "fxshow");
          for (i in (n.queue ||
            (null == (o = T._queueHooks(t, "fx")).unqueued &&
              ((o.unqueued = 0),
              (a = o.empty.fire),
              (o.empty.fire = function () {
                o.unqueued || a();
              })),
            o.unqueued++,
            f.always(function () {
              f.always(function () {
                o.unqueued--, T.queue(t, "fx").length || o.empty.fire();
              });
            })),
          e))
            if (((r = e[i]), xe.test(r))) {
              if ((delete e[i], (s = s || "toggle" === r), r === (d ? "hide" : "show"))) {
                if ("show" !== r || !m || void 0 === m[i]) continue;
                d = !0;
              }
              h[i] = (m && m[i]) || T.style(t, i);
            }
          if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(h))
            for (i in (u &&
              1 === t.nodeType &&
              ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
              null == (c = m && m.display) && (c = b.get(t, "display")),
              "none" === (u = T.css(t, "display")) &&
                (c ? (u = c) : (j([t], !0), (c = t.style.display || c), (u = T.css(t, "display")), j([t]))),
              "inline" === u || ("inline-block" === u && null != c)) &&
              "none" === T.css(t, "float") &&
              (l ||
                (f.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block")),
            n.overflow &&
              ((p.overflow = "hidden"),
              f.always(function () {
                (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
              })),
            (l = !1),
            h))
              l ||
                (m
                  ? "hidden" in m && (d = m.hidden)
                  : (m = b.access(t, "fxshow", {
                      display: c
                    })),
                s && (m.hidden = !d),
                d && j([t], !0),
                f.done(function () {
                  for (i in (d || j([t]), b.remove(t, "fxshow"), h)) T.style(t, i, h[i]);
                })),
                (l = ke(d ? m[i] : 0, i, f)),
                i in m || ((m[i] = l.start), d && ((l.end = l.start), (l.start = 0)));
        }
        function Oe(t, e) {
          var n, i, r, s, o;
          for (n in t)
            if (
              ((r = e[(i = h(n))]),
              (s = t[n]),
              Array.isArray(s) && ((r = s[1]), (s = t[n] = s[0])),
              n !== i && ((t[i] = s), delete t[n]),
              (o = T.cssHooks[i]) && "expand" in o)
            )
              for (n in ((s = o.expand(s)), delete t[i], s)) n in t || ((t[n] = s[n]), (e[n] = r));
            else e[i] = r;
        }
        function L(r, t, e) {
          var n,
            s,
            i = 0,
            o = L.prefilters.length,
            a = T.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (!s) {
                for (
                  var t = A || Te(),
                    t = Math.max(0, c.startTime + c.duration - t),
                    e = 1 - (t / c.duration || 0),
                    n = 0,
                    i = c.tweens.length;
                  n < i;
                  n++
                )
                  c.tweens[n].run(e);
                if ((a.notifyWith(r, [c, e, t]), e < 1 && i)) return t;
                i || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]);
              }
              return !1;
            },
            c = a.promise({
              elem: r,
              props: T.extend({}, t),
              opts: T.extend(
                !0,
                {
                  specialEasing: {},
                  easing: T.easing._default
                },
                e
              ),
              originalProperties: t,
              originalOptions: e,
              startTime: A || Te(),
              duration: e.duration,
              tweens: [],
              createTween: function (t, e) {
                e = T.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(e), e;
              },
              stop: function (t) {
                var e = 0,
                  n = t ? c.tweens.length : 0;
                if (!s) {
                  for (s = !0; e < n; e++) c.tweens[e].run(1);
                  t ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) : a.rejectWith(r, [c, t]);
                }
                return this;
              }
            }),
            u = c.props;
          for (Oe(u, c.opts.specialEasing); i < o; i++)
            if ((n = L.prefilters[i].call(c, r, u, c.opts)))
              return g(n.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
          return (
            T.map(u, ke, c),
            g(c.opts.start) && c.opts.start.call(r, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            T.fx.timer(
              T.extend(l, {
                elem: r,
                anim: c,
                queue: c.opts.queue
              })
            ),
            c
          );
        }
        (T.Animation = T.extend(L, {
          tweeners: {
            "*": [
              function (t, e) {
                var n = this.createTween(t, e);
                return wt(n.elem, t, yt.exec(e), n), n;
              }
            ]
          },
          tweener: function (t, e) {
            for (var n, i = 0, r = (t = g(t) ? ((e = t), ["*"]) : t.match(C)).length; i < r; i++)
              (n = t[i]), (L.tweeners[n] = L.tweeners[n] || []), L.tweeners[n].unshift(e);
          },
          prefilters: [je],
          prefilter: function (t, e) {
            e ? L.prefilters.unshift(t) : L.prefilters.push(t);
          }
        })),
          (T.speed = function (t, e, n) {
            var i =
              t && "object" == typeof t
                ? T.extend({}, t)
                : {
                    complete: n || (!n && e) || (g(t) && t),
                    duration: t,
                    easing: (n && e) || (e && !g(e) && e)
                  };
            return (
              T.fx.off
                ? (i.duration = 0)
                : "number" != typeof i.duration &&
                  (i.duration in T.fx.speeds ? (i.duration = T.fx.speeds[i.duration]) : (i.duration = T.fx.speeds._default)),
              (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function () {
                g(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
              }),
              i
            );
          }),
          T.fn.extend({
            fadeTo: function (t, e, n, i) {
              return this.filter(xt).css("opacity", 0).show().end().animate(
                {
                  opacity: e
                },
                t,
                n,
                i
              );
            },
            animate: function (e, t, n, i) {
              var r = T.isEmptyObject(e),
                s = T.speed(t, n, i),
                t = function () {
                  var t = L(this, T.extend({}, e), s);
                  (r || b.get(this, "finish")) && t.stop(!0);
                };
              return (t.finish = t), r || !1 === s.queue ? this.each(t) : this.queue(s.queue, t);
            },
            stop: function (r, t, s) {
              var o = function (t) {
                var e = t.stop;
                delete t.stop, e(s);
              };
              return (
                "string" != typeof r && ((s = t), (t = r), (r = void 0)),
                t && this.queue(r || "fx", []),
                this.each(function () {
                  var t = !0,
                    e = null != r && r + "queueHooks",
                    n = T.timers,
                    i = b.get(this);
                  if (e) i[e] && i[e].stop && o(i[e]);
                  else for (e in i) i[e] && i[e].stop && we.test(e) && o(i[e]);
                  for (e = n.length; e--; )
                    n[e].elem !== this || (null != r && n[e].queue !== r) || (n[e].anim.stop(s), (t = !1), n.splice(e, 1));
                  (!t && s) || T.dequeue(this, r);
                })
              );
            },
            finish: function (o) {
              return (
                !1 !== o && (o = o || "fx"),
                this.each(function () {
                  var t,
                    e = b.get(this),
                    n = e[o + "queue"],
                    i = e[o + "queueHooks"],
                    r = T.timers,
                    s = n ? n.length : 0;
                  for (e.finish = !0, T.queue(this, o, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--; )
                    r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
                  for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                  delete e.finish;
                })
              );
            }
          }),
          T.each(["toggle", "show", "hide"], function (t, i) {
            var r = T.fn[i];
            T.fn[i] = function (t, e, n) {
              return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(Ce(i, !0), t, e, n);
            };
          }),
          T.each(
            {
              slideDown: Ce("show"),
              slideUp: Ce("hide"),
              slideToggle: Ce("toggle"),
              fadeIn: {
                opacity: "show"
              },
              fadeOut: {
                opacity: "hide"
              },
              fadeToggle: {
                opacity: "toggle"
              }
            },
            function (t, i) {
              T.fn[t] = function (t, e, n) {
                return this.animate(i, t, e, n);
              };
            }
          ),
          (T.timers = []),
          (T.fx.tick = function () {
            var t,
              e = 0,
              n = T.timers;
            for (A = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || T.fx.stop(), (A = void 0);
          }),
          (T.fx.timer = function (t) {
            T.timers.push(t), T.fx.start();
          }),
          (T.fx.interval = 13),
          (T.fx.start = function () {
            be || ((be = !0), qe());
          }),
          (T.fx.stop = function () {
            be = null;
          }),
          (T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
          }),
          (T.fn.delay = function (i, t) {
            return (
              (i = (T.fx && T.fx.speeds[i]) || i),
              this.queue((t = t || "fx"), function (t, e) {
                var n = w.setTimeout(t, i);
                e.stop = function () {
                  w.clearTimeout(n);
                };
              })
            );
          }),
          (o = q.createElement("input")),
          (N = q.createElement("select").appendChild(q.createElement("option"))),
          (o.type = "checkbox"),
          (m.checkOn = "" !== o.value),
          (m.optSelected = N.selected),
          ((o = q.createElement("input")).value = "t"),
          (o.type = "radio"),
          (m.radioValue = "t" === o.value);
        var Se,
          Ee = T.expr.attrHandle,
          De =
            (T.fn.extend({
              attr: function (t, e) {
                return f(this, T.attr, t, e, 1 < arguments.length);
              },
              removeAttr: function (t) {
                return this.each(function () {
                  T.removeAttr(this, t);
                });
              }
            }),
            T.extend({
              attr: function (t, e, n) {
                var i,
                  r,
                  s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return void 0 === t.getAttribute
                    ? T.prop(t, e, n)
                    : ((1 === s && T.isXMLDoc(t)) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? Se : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(t, e)
                          : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                          ? i
                          : (t.setAttribute(e, n + ""), n)
                        : !(r && "get" in r && null !== (i = r.get(t, e))) && null == (i = T.find.attr(t, e))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (t, e) {
                    var n;
                    if (!m.radioValue && "radio" === e && l(t, "input"))
                      return (n = t.value), t.setAttribute("type", e), n && (t.value = n), e;
                  }
                }
              },
              removeAttr: function (t, e) {
                var n,
                  i = 0,
                  r = e && e.match(C);
                if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n);
              }
            }),
            (Se = {
              set: function (t, e, n) {
                return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n;
              }
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
              var o = Ee[e] || T.find.attr;
              Ee[e] = function (t, e, n) {
                var i,
                  r,
                  s = e.toLowerCase();
                return n || ((r = Ee[s]), (Ee[s] = i), (i = null != o(t, e, n) ? s : null), (Ee[s] = r)), i;
              };
            }),
            /^(?:input|select|textarea|button)$/i),
          Ae = /^(?:a|area)$/i;
        function Q(t) {
          return (t.match(C) || []).join(" ");
        }
        function _(t) {
          return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function Le(t) {
          return Array.isArray(t) ? t : ("string" == typeof t && t.match(C)) || [];
        }
        T.fn.extend({
          prop: function (t, e) {
            return f(this, T.prop, t, e, 1 < arguments.length);
          },
          removeProp: function (t) {
            return this.each(function () {
              delete this[T.propFix[t] || t];
            });
          }
        }),
          T.extend({
            prop: function (t, e, n) {
              var i,
                r,
                s = t.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return (
                  (1 === s && T.isXMLDoc(t)) || ((e = T.propFix[e] || e), (r = T.propHooks[e])),
                  void 0 !== n
                    ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t[e] = n)
                    : r && "get" in r && null !== (i = r.get(t, e))
                    ? i
                    : t[e]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (t) {
                  var e = T.find.attr(t, "tabindex");
                  return e ? parseInt(e, 10) : De.test(t.nodeName) || (Ae.test(t.nodeName) && t.href) ? 0 : -1;
                }
              }
            },
            propFix: {
              for: "htmlFor",
              class: "className"
            }
          }),
          m.optSelected ||
            (T.propHooks.selected = {
              get: function (t) {
                t = t.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (t) {
                t = t.parentNode;
                t && (t.selectedIndex, t.parentNode) && t.parentNode.selectedIndex;
              }
            }),
          T.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable"
            ],
            function () {
              T.propFix[this.toLowerCase()] = this;
            }
          ),
          T.fn.extend({
            addClass: function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a = 0;
              if (g(e))
                return this.each(function (t) {
                  T(this).addClass(e.call(this, t, _(this)));
                });
              if ((t = Le(e)).length)
                for (; (n = this[a++]); )
                  if (((o = _(n)), (i = 1 === n.nodeType && " " + Q(o) + " "))) {
                    for (s = 0; (r = t[s++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    o !== (o = Q(i)) && n.setAttribute("class", o);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a = 0;
              if (g(e))
                return this.each(function (t) {
                  T(this).removeClass(e.call(this, t, _(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = Le(e)).length)
                for (; (n = this[a++]); )
                  if (((o = _(n)), (i = 1 === n.nodeType && " " + Q(o) + " "))) {
                    for (s = 0; (r = t[s++]); ) for (; -1 < i.indexOf(" " + r + " "); ) i = i.replace(" " + r + " ", " ");
                    o !== (o = Q(i)) && n.setAttribute("class", o);
                  }
              return this;
            },
            toggleClass: function (r, e) {
              var s = typeof r,
                o = "string" === s || Array.isArray(r);
              return "boolean" == typeof e && o
                ? e
                  ? this.addClass(r)
                  : this.removeClass(r)
                : g(r)
                ? this.each(function (t) {
                    T(this).toggleClass(r.call(this, t, _(this), e), e);
                  })
                : this.each(function () {
                    var t, e, n, i;
                    if (o) for (e = 0, n = T(this), i = Le(r); (t = i[e++]); ) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                    else
                      (void 0 !== r && "boolean" !== s) ||
                        ((t = _(this)) && b.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", (!t && !1 !== r && b.get(this, "__className__")) || ""));
                  });
            },
            hasClass: function (t) {
              for (var e, n = 0, i = " " + t + " "; (e = this[n++]); )
                if (1 === e.nodeType && -1 < (" " + Q(_(e)) + " ").indexOf(i)) return !0;
              return !1;
            }
          });
        var Qe = /\r/g,
          _e =
            (T.fn.extend({
              val: function (e) {
                var n,
                  t,
                  i,
                  r = this[0];
                return arguments.length
                  ? ((i = g(e)),
                    this.each(function (t) {
                      1 !== this.nodeType ||
                        (null == (t = i ? e.call(this, t, T(this).val()) : e)
                          ? (t = "")
                          : "number" == typeof t
                          ? (t += "")
                          : Array.isArray(t) &&
                            (t = T.map(t, function (t) {
                              return null == t ? "" : t + "";
                            })),
                        (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in n &&
                          void 0 !== n.set(this, t, "value")) ||
                        (this.value = t);
                    }))
                  : r
                  ? (n = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(r, "value"))
                    ? t
                    : "string" == typeof (t = r.value)
                    ? t.replace(Qe, "")
                    : null == t
                    ? ""
                    : t
                  : void 0;
              }
            }),
            T.extend({
              valHooks: {
                option: {
                  get: function (t) {
                    var e = T.find.attr(t, "value");
                    return null != e ? e : Q(T.text(t));
                  }
                },
                select: {
                  get: function (t) {
                    for (
                      var e,
                        n = t.options,
                        i = t.selectedIndex,
                        r = "select-one" === t.type,
                        s = r ? null : [],
                        o = r ? i + 1 : n.length,
                        a = i < 0 ? o : r ? i : 0;
                      a < o;
                      a++
                    )
                      if (((e = n[a]).selected || a === i) && !e.disabled && (!e.parentNode.disabled || !l(e.parentNode, "optgroup"))) {
                        if (((e = T(e).val()), r)) return e;
                        s.push(e);
                      }
                    return s;
                  },
                  set: function (t, e) {
                    for (var n, i, r = t.options, s = T.makeArray(e), o = r.length; o--; )
                      ((i = r[o]).selected = -1 < T.inArray(T.valHooks.option.get(i), s)) && (n = !0);
                    return n || (t.selectedIndex = -1), s;
                  }
                }
              }
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (t, e) {
                  if (Array.isArray(e)) return (t.checked = -1 < T.inArray(T(t).val(), e));
                }
              }),
                m.checkOn ||
                  (T.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value;
                  });
            }),
            (m.focusin = "onfocusin" in w),
            /^(?:focusinfocus|focusoutblur)$/),
          Ne = function (t) {
            t.stopPropagation();
          },
          Re =
            (T.extend(T.event, {
              trigger: function (t, e, n, i) {
                var r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  f = [n || q],
                  h = F.call(t, "type") ? t.type : t,
                  p = F.call(t, "namespace") ? t.namespace.split(".") : [],
                  d = (u = s = n = n || q);
                if (
                  3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !_e.test(h + T.event.triggered) &&
                  (-1 < h.indexOf(".") && ((h = (p = h.split(".")).shift()), p.sort()),
                  (a = h.indexOf(":") < 0 && "on" + h),
                  ((t = t[T.expando] ? t : new T.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
                  (t.namespace = p.join(".")),
                  (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (t.result = void 0),
                  t.target || (t.target = n),
                  (e = null == e ? [t] : T.makeArray(e, [t])),
                  (c = T.event.special[h] || {}),
                  i || !c.trigger || !1 !== c.trigger.apply(n, e))
                ) {
                  if (!i && !c.noBubble && !v(n)) {
                    for (o = c.delegateType || h, _e.test(o + h) || (d = d.parentNode); d; d = d.parentNode) f.push(d), (s = d);
                    s === (n.ownerDocument || q) && f.push(s.defaultView || s.parentWindow || w);
                  }
                  for (r = 0; (d = f[r++]) && !t.isPropagationStopped(); )
                    (u = d),
                      (t.type = 1 < r ? o : c.bindType || h),
                      (l = (b.get(d, "events") || Object.create(null))[t.type] && b.get(d, "handle")) && l.apply(d, e),
                      (l = a && d[a]) && l.apply && y(d) && ((t.result = l.apply(d, e)), !1 === t.result) && t.preventDefault();
                  return (
                    (t.type = h),
                    i ||
                      t.isDefaultPrevented() ||
                      (c._default && !1 !== c._default.apply(f.pop(), e)) ||
                      !y(n) ||
                      (a &&
                        g(n[h]) &&
                        !v(n) &&
                        ((s = n[a]) && (n[a] = null),
                        (T.event.triggered = h),
                        t.isPropagationStopped() && u.addEventListener(h, Ne),
                        n[h](),
                        t.isPropagationStopped() && u.removeEventListener(h, Ne),
                        (T.event.triggered = void 0),
                        s) &&
                        (n[a] = s)),
                    t.result
                  );
                }
              },
              simulate: function (t, e, n) {
                n = T.extend(new T.Event(), n, {
                  type: t,
                  isSimulated: !0
                });
                T.event.trigger(n, null, e);
              }
            }),
            T.fn.extend({
              trigger: function (t, e) {
                return this.each(function () {
                  T.event.trigger(t, e, this);
                });
              },
              triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return T.event.trigger(t, e, n, !0);
              }
            }),
            m.focusin ||
              T.each(
                {
                  focus: "focusin",
                  blur: "focusout"
                },
                function (n, i) {
                  var r = function (t) {
                    T.event.simulate(i, t.target, T.event.fix(t));
                  };
                  T.event.special[i] = {
                    setup: function () {
                      var t = this.ownerDocument || this.document || this,
                        e = b.access(t, i);
                      e || t.addEventListener(n, r, !0), b.access(t, i, (e || 0) + 1);
                    },
                    teardown: function () {
                      var t = this.ownerDocument || this.document || this,
                        e = b.access(t, i) - 1;
                      e ? b.access(t, i, e) : (t.removeEventListener(n, r, !0), b.remove(t, i));
                    }
                  };
                }
              ),
            w.location),
          Ie = {
            guid: Date.now()
          },
          He = /\?/,
          Be =
            ((T.parseXML = function (t) {
              var e;
              if (!t || "string" != typeof t) return null;
              try {
                e = new w.DOMParser().parseFromString(t, "text/xml");
              } catch (t) {
                e = void 0;
              }
              return (e && !e.getElementsByTagName("parsererror").length) || T.error("Invalid XML: " + t), e;
            }),
            /\[\]$/),
          Me = /\r?\n/g,
          ze = /^(?:submit|button|image|reset|file)$/i,
          Pe = /^(?:input|select|textarea|keygen)/i;
        function Fe(n, t, i, r) {
          if (Array.isArray(t))
            T.each(t, function (t, e) {
              i || Be.test(n) ? r(n, e) : Fe(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r);
            });
          else if (i || "object" !== d(t)) r(n, t);
          else for (var e in t) Fe(n + "[" + e + "]", t[e], i, r);
        }
        (T.param = function (t, e) {
          var n,
            i = [],
            r = function (t, e) {
              e = g(e) ? e() : e;
              i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e);
            };
          if (null == t) return "";
          if (Array.isArray(t) || (t.jquery && !T.isPlainObject(t)))
            T.each(t, function () {
              r(this.name, this.value);
            });
          else for (n in t) Fe(n, t[n], e, r);
          return i.join("&");
        }),
          T.fn.extend({
            serialize: function () {
              return T.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var t = T.prop(this, "elements");
                return t ? T.makeArray(t) : this;
              })
                .filter(function () {
                  var t = this.type;
                  return this.name && !T(this).is(":disabled") && Pe.test(this.nodeName) && !ze.test(t) && (this.checked || !Ct.test(t));
                })
                .map(function (t, e) {
                  var n = T(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? T.map(n, function (t) {
                        return {
                          name: e.name,
                          value: t.replace(Me, "\r\n")
                        };
                      })
                    : {
                        name: e.name,
                        value: n.replace(Me, "\r\n")
                      };
                })
                .get();
            }
          });
        var $e = /%20/g,
          We = /#.*$/,
          Ue = /([?&])_=[^&]*/,
          Ve = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          Xe = /^(?:GET|HEAD)$/,
          Ge = /^\/\//,
          Ke = {},
          Ye = {},
          Ze = "*/".concat("*"),
          Je = q.createElement("a");
        function tn(s) {
          return function (t, e) {
            "string" != typeof t && ((e = t), (t = "*"));
            var n,
              i = 0,
              r = t.toLowerCase().match(C) || [];
            if (g(e))
              for (; (n = r[i++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(e)) : (s[n] = s[n] || []).push(e);
          };
        }
        function en(e, i, r, s) {
          var o = {},
            a = e === Ye;
          function l(t) {
            var n;
            return (
              (o[t] = !0),
              T.each(e[t] || [], function (t, e) {
                e = e(i, r, s);
                return "string" != typeof e || a || o[e] ? (a ? !(n = e) : void 0) : (i.dataTypes.unshift(e), l(e), !1);
              }),
              n
            );
          }
          return l(i.dataTypes[0]) || (!o["*"] && l("*"));
        }
        function nn(t, e) {
          var n,
            i,
            r = T.ajaxSettings.flatOptions || {};
          for (n in e) void 0 !== e[n] && ((r[n] ? t : (i = i || {}))[n] = e[n]);
          return i && T.extend(!0, t, i), t;
        }
        function rn(t, e, n) {
          for (var i, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
          if (i)
            for (r in a)
              if (a[r] && a[r].test(i)) {
                l.unshift(r);
                break;
              }
          if (l[0] in n) s = l[0];
          else {
            for (r in n) {
              if (!l[0] || t.converters[r + " " + l[0]]) {
                s = r;
                break;
              }
              o = o || r;
            }
            s = s || o;
          }
          if (s) return s !== l[0] && l.unshift(s), n[s];
        }
        function sn(t, e, n, i) {
          var r,
            s,
            o,
            a,
            l,
            c = {},
            u = t.dataTypes.slice();
          if (u[1]) for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
          for (s = u.shift(); s; )
            if (
              (t.responseFields[s] && (n[t.responseFields[s]] = e),
              !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
              (l = s),
              (s = u.shift()))
            )
              if ("*" === s) s = l;
              else if ("*" !== l && l !== s) {
                if (!(o = c[l + " " + s] || c["* " + s]))
                  for (r in c)
                    if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                      !0 === o ? (o = c[r]) : !0 !== c[r] && ((s = a[0]), u.unshift(a[1]));
                      break;
                    }
                if (!0 !== o)
                  if (o && t.throws) e = o(e);
                  else
                    try {
                      e = o(e);
                    } catch (t) {
                      return {
                        state: "parsererror",
                        error: o ? t : "No conversion from " + l + " to " + s
                      };
                    }
              }
          return {
            state: "success",
            data: e
          };
        }
        (Je.href = Re.href),
          T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Re.href,
              type: "GET",
              isLocal: t.test(Re.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
              },
              contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
              },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
              },
              flatOptions: {
                url: !0,
                context: !0
              }
            },
            ajaxSetup: function (t, e) {
              return e ? nn(nn(t, T.ajaxSettings), e) : nn(T.ajaxSettings, t);
            },
            ajaxPrefilter: tn(Ke),
            ajaxTransport: tn(Ye),
            ajax: function (t, e) {
              "object" == typeof t && ((e = t), (t = void 0));
              var l,
                c,
                u,
                n,
                f,
                h,
                p,
                i,
                d = T.ajaxSetup({}, (e = e || {})),
                m = d.context || d,
                g = d.context && (m.nodeType || m.jquery) ? T(m) : T.event,
                v = T.Deferred(),
                y = T.Callbacks("once memory"),
                b = d.statusCode || {},
                r = {},
                s = {},
                o = "canceled",
                x = {
                  readyState: 0,
                  getResponseHeader: function (t) {
                    var e;
                    if (h) {
                      if (!n)
                        for (n = {}; (e = Ve.exec(u)); ) n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                      e = n[t.toLowerCase() + " "];
                    }
                    return null == e ? null : e.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return h ? u : null;
                  },
                  setRequestHeader: function (t, e) {
                    return null == h && ((t = s[t.toLowerCase()] = s[t.toLowerCase()] || t), (r[t] = e)), this;
                  },
                  overrideMimeType: function (t) {
                    return null == h && (d.mimeType = t), this;
                  },
                  statusCode: function (t) {
                    if (t)
                      if (h) x.always(t[x.status]);
                      else for (var e in t) b[e] = [b[e], t[e]];
                    return this;
                  },
                  abort: function (t) {
                    t = t || o;
                    return l && l.abort(t), a(0, t), this;
                  }
                };
              if (
                (v.promise(x),
                (d.url = ((t || d.url || Re.href) + "").replace(Ge, Re.protocol + "//")),
                (d.type = e.method || e.type || d.method || d.type),
                (d.dataTypes = (d.dataType || "*").toLowerCase().match(C) || [""]),
                null == d.crossDomain)
              ) {
                t = q.createElement("a");
                try {
                  (t.href = d.url), (t.href = t.href), (d.crossDomain = Je.protocol + "//" + Je.host != t.protocol + "//" + t.host);
                } catch (t) {
                  d.crossDomain = !0;
                }
              }
              if (
                (d.data && d.processData && "string" != typeof d.data && (d.data = T.param(d.data, d.traditional)), en(Ke, d, e, x), !h)
              ) {
                for (i in ((p = T.event && d.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Xe.test(d.type)),
                (c = d.url.replace(We, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                    (d.data = d.data.replace($e, "+"))
                  : ((t = d.url.slice(c.length)),
                    d.data && (d.processData || "string" == typeof d.data) && ((c += (He.test(c) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache && ((c = c.replace(Ue, "$1")), (t = (He.test(c) ? "&" : "?") + "_=" + Ie.guid++ + t)),
                    (d.url = c + t)),
                d.ifModified &&
                  (T.lastModified[c] && x.setRequestHeader("If-Modified-Since", T.lastModified[c]), T.etag[c]) &&
                  x.setRequestHeader("If-None-Match", T.etag[c]),
                ((d.data && d.hasContent && !1 !== d.contentType) || e.contentType) && x.setRequestHeader("Content-Type", d.contentType),
                x.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ze + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  x.setRequestHeader(i, d.headers[i]);
                if (d.beforeSend && (!1 === d.beforeSend.call(m, x, d) || h)) return x.abort();
                if (((o = "abort"), y.add(d.complete), x.done(d.success), x.fail(d.error), (l = en(Ye, d, e, x)))) {
                  if (((x.readyState = 1), p && g.trigger("ajaxSend", [x, d]), h)) return x;
                  d.async &&
                    0 < d.timeout &&
                    (f = w.setTimeout(function () {
                      x.abort("timeout");
                    }, d.timeout));
                  try {
                    (h = !1), l.send(r, a);
                  } catch (t) {
                    if (h) throw t;
                    a(-1, t);
                  }
                } else a(-1, "No Transport");
              }
              return x;
              function a(t, e, n, i) {
                var r,
                  s,
                  o,
                  a = e;
                h ||
                  ((h = !0),
                  f && w.clearTimeout(f),
                  (l = void 0),
                  (u = i || ""),
                  (x.readyState = 0 < t ? 4 : 0),
                  (i = (200 <= t && t < 300) || 304 === t),
                  n && (o = rn(d, x, n)),
                  !i && -1 < T.inArray("script", d.dataTypes) && (d.converters["text script"] = function () {}),
                  (o = sn(d, o, x, i)),
                  i
                    ? (d.ifModified &&
                        ((n = x.getResponseHeader("Last-Modified")) && (T.lastModified[c] = n), (n = x.getResponseHeader("etag"))) &&
                        (T.etag[c] = n),
                      204 === t || "HEAD" === d.type
                        ? (a = "nocontent")
                        : 304 === t
                        ? (a = "notmodified")
                        : ((a = o.state), (r = o.data), (i = !(s = o.error))))
                    : ((s = a), (!t && a) || ((a = "error"), t < 0 && (t = 0))),
                  (x.status = t),
                  (x.statusText = (e || a) + ""),
                  i ? v.resolveWith(m, [r, a, x]) : v.rejectWith(m, [x, a, s]),
                  x.statusCode(b),
                  (b = void 0),
                  p && g.trigger(i ? "ajaxSuccess" : "ajaxError", [x, d, i ? r : s]),
                  y.fireWith(m, [x, a]),
                  p && (g.trigger("ajaxComplete", [x, d]), --T.active || T.event.trigger("ajaxStop")));
              }
            },
            getJSON: function (t, e, n) {
              return T.get(t, e, n, "json");
            },
            getScript: function (t, e) {
              return T.get(t, void 0, e, "script");
            }
          }),
          T.each(["get", "post"], function (t, r) {
            T[r] = function (t, e, n, i) {
              return (
                g(e) && ((i = i || n), (n = e), (e = void 0)),
                T.ajax(
                  T.extend(
                    {
                      url: t,
                      type: r,
                      dataType: i,
                      data: e,
                      success: n
                    },
                    T.isPlainObject(t) && t
                  )
                )
              );
            };
          }),
          T.ajaxPrefilter(function (t) {
            for (var e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
          }),
          (T._evalUrl = function (t, e, n) {
            return T.ajax({
              url: t,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: {
                "text script": function () {}
              },
              dataFilter: function (t) {
                T.globalEval(t, e, n);
              }
            });
          }),
          T.fn.extend({
            wrapAll: function (t) {
              return (
                this[0] &&
                  (g(t) && (t = t.call(this[0])),
                  (t = T(t, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                      return t;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (n) {
              return g(n)
                ? this.each(function (t) {
                    T(this).wrapInner(n.call(this, t));
                  })
                : this.each(function () {
                    var t = T(this),
                      e = t.contents();
                    e.length ? e.wrapAll(n) : t.append(n);
                  });
            },
            wrap: function (e) {
              var n = g(e);
              return this.each(function (t) {
                T(this).wrapAll(n ? e.call(this, t) : e);
              });
            },
            unwrap: function (t) {
              return (
                this.parent(t)
                  .not("body")
                  .each(function () {
                    T(this).replaceWith(this.childNodes);
                  }),
                this
              );
            }
          }),
          (T.expr.pseudos.hidden = function (t) {
            return !T.expr.pseudos.visible(t);
          }),
          (T.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
          }),
          (T.ajaxSettings.xhr = function () {
            try {
              return new w.XMLHttpRequest();
            } catch (t) {}
          });
        var N,
          on = {
            0: 200,
            1223: 204
          },
          an = T.ajaxSettings.xhr(),
          ln =
            ((m.cors = !!an && "withCredentials" in an),
            (m.ajax = an = !!an),
            T.ajaxTransport(function (r) {
              var s, o;
              if (m.cors || (an && !r.crossDomain))
                return {
                  send: function (t, e) {
                    var n,
                      i = r.xhr();
                    if ((i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)) for (n in r.xhrFields) i[n] = r.xhrFields[n];
                    for (n in (r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                    t))
                      i.setRequestHeader(n, t[n]);
                    (s = function (t) {
                      return function () {
                        s &&
                          ((s = o = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                          "abort" === t
                            ? i.abort()
                            : "error" === t
                            ? "number" != typeof i.status
                              ? e(0, "error")
                              : e(i.status, i.statusText)
                            : e(
                                on[i.status] || i.status,
                                i.statusText,
                                "text" !== (i.responseType || "text") || "string" != typeof i.responseText
                                  ? {
                                      binary: i.response
                                    }
                                  : {
                                      text: i.responseText
                                    },
                                i.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (i.onload = s()),
                      (o = i.onerror = i.ontimeout = s("error")),
                      void 0 !== i.onabort
                        ? (i.onabort = o)
                        : (i.onreadystatechange = function () {
                            4 === i.readyState &&
                              w.setTimeout(function () {
                                s && o();
                              });
                          }),
                      (s = s("abort"));
                    try {
                      i.send((r.hasContent && r.data) || null);
                    } catch (t) {
                      if (s) throw t;
                    }
                  },
                  abort: function () {
                    s && s();
                  }
                };
            }),
            T.ajaxPrefilter(function (t) {
              t.crossDomain && (t.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
              },
              contents: {
                script: /\b(?:java|ecma)script\b/
              },
              converters: {
                "text script": function (t) {
                  return T.globalEval(t), t;
                }
              }
            }),
            T.ajaxPrefilter("script", function (t) {
              void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
            }),
            T.ajaxTransport("script", function (n) {
              var i, r;
              if (n.crossDomain || n.scriptAttrs)
                return {
                  send: function (t, e) {
                    (i = T("<script>")
                      .attr(n.scriptAttrs || {})
                      .prop({
                        charset: n.scriptCharset,
                        src: n.url
                      })
                      .on(
                        "load error",
                        (r = function (t) {
                          i.remove(), (r = null), t && e("error" === t.type ? 404 : 200, t.type);
                        })
                      )),
                      q.head.appendChild(i[0]);
                  },
                  abort: function () {
                    r && r();
                  }
                };
            }),
            []),
          cn = /(=)\?(?=&|$)|\?\?/,
          un =
            (T.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var t = ln.pop() || T.expando + "_" + Ie.guid++;
                return (this[t] = !0), t;
              }
            }),
            T.ajaxPrefilter("json jsonp", function (t, e, n) {
              var i,
                r,
                s,
                o =
                  !1 !== t.jsonp &&
                  (cn.test(t.url)
                    ? "url"
                    : "string" == typeof t.data &&
                      0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                      cn.test(t.data) &&
                      "data");
              if (o || "jsonp" === t.dataTypes[0])
                return (
                  (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                  o ? (t[o] = t[o].replace(cn, "$1" + i)) : !1 !== t.jsonp && (t.url += (He.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                  (t.converters["script json"] = function () {
                    return s || T.error(i + " was not called"), s[0];
                  }),
                  (t.dataTypes[0] = "json"),
                  (r = w[i]),
                  (w[i] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === r ? T(w).removeProp(i) : (w[i] = r),
                      t[i] && ((t.jsonpCallback = e.jsonpCallback), ln.push(i)),
                      s && g(r) && r(s[0]),
                      (s = r = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((N = q.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === N.childNodes.length)),
            (T.parseHTML = function (t, e, n) {
              var i;
              return "string" != typeof t
                ? []
                : ("boolean" == typeof e && ((n = e), (e = !1)),
                  e ||
                    (m.createHTMLDocument
                      ? (((i = (e = q.implementation.createHTMLDocument("")).createElement("base")).href = q.location.href),
                        e.head.appendChild(i))
                      : (e = q)),
                  (i = !n && []),
                  (n = Y.exec(t))
                    ? [e.createElement(n[1])]
                    : ((n = Et([t], e, i)), i && i.length && T(i).remove(), T.merge([], n.childNodes)));
            }),
            (T.fn.load = function (t, e, n) {
              var i,
                r,
                s,
                o = this,
                a = t.indexOf(" ");
              return (
                -1 < a && ((i = Q(t.slice(a))), (t = t.slice(0, a))),
                g(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                0 < o.length &&
                  T.ajax({
                    url: t,
                    type: r || "GET",
                    dataType: "html",
                    data: e
                  })
                    .done(function (t) {
                      (s = arguments), o.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t);
                    })
                    .always(
                      n &&
                        function (t, e) {
                          o.each(function () {
                            n.apply(this, s || [t.responseText, e, t]);
                          });
                        }
                    ),
                this
              );
            }),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (t, e, n) {
                var i,
                  r,
                  s,
                  o,
                  a = T.css(t, "position"),
                  l = T(t),
                  c = {};
                "static" === a && (t.style.position = "relative"),
                  (s = l.offset()),
                  (i = T.css(t, "top")),
                  (o = T.css(t, "left")),
                  (a =
                    ("absolute" === a || "fixed" === a) && -1 < (i + o).indexOf("auto")
                      ? ((r = (a = l.position()).top), a.left)
                      : ((r = parseFloat(i) || 0), parseFloat(o) || 0)),
                  null != (e = g(e) ? e.call(t, n, T.extend({}, s)) : e).top && (c.top = e.top - s.top + r),
                  null != e.left && (c.left = e.left - s.left + a),
                  "using" in e
                    ? e.using.call(t, c)
                    : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c));
              }
            }),
            T.fn.extend({
              offset: function (e) {
                var t, n;
                return arguments.length
                  ? void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      })
                  : (n = this[0])
                  ? n.getClientRects().length
                    ? ((t = n.getBoundingClientRect()),
                      (n = n.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                      })
                    : {
                        top: 0,
                        left: 0
                      }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var t,
                    e,
                    n,
                    i = this[0],
                    r = {
                      top: 0,
                      left: 0
                    };
                  if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();
                  else {
                    for (
                      e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement;
                      t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");

                    )
                      t = t.parentNode;
                    t &&
                      t !== i &&
                      1 === t.nodeType &&
                      (((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0)), (r.left += T.css(t, "borderLeftWidth", !0)));
                  }
                  return {
                    top: e.top - r.top - T.css(i, "marginTop", !0),
                    left: e.left - r.left - T.css(i, "marginLeft", !0)
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (var t = this.offsetParent; t && "static" === T.css(t, "position"); ) t = t.offsetParent;
                  return t || x;
                });
              }
            }),
            T.each(
              {
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
              },
              function (e, r) {
                var s = "pageYOffset" === r;
                T.fn[e] = function (t) {
                  return f(
                    this,
                    function (t, e, n) {
                      var i;
                      if ((v(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView), void 0 === n)) return i ? i[r] : t[e];
                      i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : (t[e] = n);
                    },
                    e,
                    t,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (t, n) {
              T.cssHooks[n] = oe(m.pixelPosition, function (t, e) {
                if (e) return (e = se(t, n)), Jt.test(e) ? T(t).position()[n] + "px" : e;
              });
            }),
            T.each(
              {
                Height: "height",
                Width: "width"
              },
              function (o, a) {
                T.each(
                  {
                    padding: "inner" + o,
                    content: a,
                    "": "outer" + o
                  },
                  function (i, s) {
                    T.fn[s] = function (t, e) {
                      var n = arguments.length && (i || "boolean" != typeof t),
                        r = i || (!0 === t || !0 === e ? "margin" : "border");
                      return f(
                        this,
                        function (t, e, n) {
                          var i;
                          return v(t)
                            ? 0 === s.indexOf("outer")
                              ? t["inner" + o]
                              : t.document.documentElement["client" + o]
                            : 9 === t.nodeType
                            ? ((i = t.documentElement),
                              Math.max(t.body["scroll" + o], i["scroll" + o], t.body["offset" + o], i["offset" + o], i["client" + o]))
                            : void 0 === n
                            ? T.css(t, e, r)
                            : T.style(t, e, n, r);
                        },
                        a,
                        n ? t : void 0,
                        n
                      );
                    };
                  }
                );
              }
            ),
            T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
              T.fn[e] = function (t) {
                return this.on(e, t);
              };
            }),
            T.fn.extend({
              bind: function (t, e, n) {
                return this.on(t, null, e, n);
              },
              unbind: function (t, e) {
                return this.off(t, null, e);
              },
              delegate: function (t, e, n, i) {
                return this.on(e, t, n, i);
              },
              undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
              },
              hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
              }
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (t, n) {
                T.fn[n] = function (t, e) {
                  return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n);
                };
              }
            ),
            /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
          fn =
            ((T.proxy = function (t, e) {
              var n, i;
              if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), g(t)))
                return (
                  (n = a.call(arguments, 2)),
                  ((i = function () {
                    return t.apply(e || this, n.concat(a.call(arguments)));
                  }).guid = t.guid =
                    t.guid || T.guid++),
                  i
                );
            }),
            (T.holdReady = function (t) {
              t ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = l),
            (T.isFunction = g),
            (T.isWindow = v),
            (T.camelCase = h),
            (T.type = d),
            (T.now = Date.now),
            (T.isNumeric = function (t) {
              var e = T.type(t);
              return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
            }),
            (T.trim = function (t) {
              return null == t ? "" : (t + "").replace(un, "");
            }),
            (mn = []),
            void 0 !==
              (mn = function () {
                return T;
              }.apply(dn, mn)) && (pn.exports = mn),
            w.jQuery),
          hn = w.$;
        return (
          (T.noConflict = function (t) {
            return w.$ === T && (w.$ = hn), t && w.jQuery === T && (w.jQuery = fn), T;
          }),
          void 0 === R && (w.jQuery = w.$ = T),
          T
        );
      });
    }
  }
]);
