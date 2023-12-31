!(function (n) {
  if (void 0 === window.hotkeys) throw "jsTree hotkeys: jQuery hotkeys plugin not included.";
  n.extend(n.tree.plugins, {
    hotkeys: {
      bound: [],
      disabled: !1,
      defaults: {
        hover_mode: !1,
        functions: {
          up: function () {
            return n.tree.plugins.hotkeys.get_prev.apply(this), !1;
          },
          down: function () {
            return n.tree.plugins.hotkeys.get_next.apply(this), !1;
          },
          left: function () {
            return n.tree.plugins.hotkeys.get_left.apply(this), !1;
          },
          right: function () {
            return n.tree.plugins.hotkeys.get_right.apply(this), !1;
          },
          del: function () {
            return this.selected && this.remove(), !1;
          },
          "ctrl+c": function () {
            return this.selected && this.copy(), !1;
          },
          "ctrl+x": function () {
            return this.selected && this.cut(), !1;
          },
          "ctrl+v": function () {
            return this.selected && this.paste(), !1;
          }
        }
      },
      exec: function (e) {
        var t, s;
        return (
          !n.tree.plugins.hotkeys.disabled &&
          (void 0 !== (t = n.tree.focused()).settings.plugins.hotkeys &&
          "function" == typeof (s = n.extend(!0, {}, n.tree.plugins.hotkeys.defaults, t.settings.plugins.hotkeys)).functions[e]
            ? s.functions[e].apply(t)
            : void 0)
        );
      },
      get_next: function () {
        var e = n.extend(!0, {}, n.tree.plugins.hotkeys.defaults, this.settings.plugins.hotkeys),
          t = this.hovered || this.selected;
        return e.hover_mode ? this.hover_branch(this.next(t)) : this.select_branch(this.next(t));
      },
      get_prev: function () {
        var e = n.extend(!0, {}, n.tree.plugins.hotkeys.defaults, this.settings.plugins.hotkeys),
          t = this.hovered || this.selected;
        return e.hover_mode ? this.hover_branch(this.prev(t)) : this.select_branch(this.prev(t));
      },
      get_left: function () {
        var e = n.extend(!0, {}, n.tree.plugins.hotkeys.defaults, this.settings.plugins.hotkeys),
          t = this.hovered || this.selected;
        if (t) {
          if (!t.hasClass("open")) return e.hover_mode ? this.hover_branch(this.parent(t)) : this.select_branch(this.parent(t));
          this.close_branch(t);
        }
      },
      get_right: function () {
        var e = n.extend(!0, {}, n.tree.plugins.hotkeys.defaults, this.settings.plugins.hotkeys),
          t = this.hovered || this.selected;
        if (t) {
          if (!t.hasClass("closed")) return e.hover_mode ? this.hover_branch(t.find("li:eq(0)")) : this.select_branch(t.find("li:eq(0)"));
          this.open_branch(t);
        }
      },
      callbacks: {
        oninit: function (e) {
          var t = n.extend(!0, {}, n.tree.plugins.hotkeys.defaults, this.settings.plugins.hotkeys),
            s;
          for (s in t.functions)
            t.functions.hasOwnProperty(s) &&
              -1 == n.inArray(s, n.tree.plugins.hotkeys.bound) &&
              (!(function (t) {
                n(document).bind("keydown", { combi: t, disableInInput: !0 }, function (e) {
                  return n.tree.plugins.hotkeys.exec(t);
                });
              })(s),
              n.tree.plugins.hotkeys.bound.push(s));
        }
      }
    }
  });
})(jQuery);
