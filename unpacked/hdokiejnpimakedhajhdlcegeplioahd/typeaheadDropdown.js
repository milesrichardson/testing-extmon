((TypeaheadDropdown = function (t, e, o) {
  var n;
  (this.hintElement = null),
    (this.hint = null),
    (this.autoCompleteBlurs = LPTools.getOption(o, "autoCompleteBlurs", !0)),
    (this.hasMatches = !1),
    (this.config = o),
    DropdownInput.call(this, t, e, o),
    ((n = this).optionFocusHandler = function (t) {
      var t = n.options[n.getDropdownValue(t)],
        e = n.inputObject.getValue();
      n.queryMatches(t, e) ? n.setHint(e, t) : n.clearHint();
    });
}).prototype = Object.create(DropdownInput.prototype)),
  (TypeaheadDropdown.prototype.constructor = TypeaheadDropdown),
  (function () {
    (TypeaheadDropdown.prototype.adjustView = function () {
      DropdownInput.prototype.adjustView.apply(this, arguments);
      var t = this.inputObject.getElement(),
        e = $(this.hintElement.parentElement);
      e.css({
        "line-height": t.css("height"),
        "padding-left": t.css("padding-left"),
        "padding-right": t.css("padding-right"),
        "font-weight": t.css("font-weight")
      }),
        "border-box" === t.css("box-sizing") && e.css({ left: t.css("border-left-width"), right: t.css("border-right-width") });
    }),
      (TypeaheadDropdown.prototype.buildInputElement = function () {
        var t = DropdownInput.prototype.buildInputElement.apply(this, arguments),
          e = this,
          o = e.getElement(),
          n =
            (o.bind("keydown", function (t) {
              if (e.dropdownEnabled)
                switch (t.keyCode || t.which) {
                  case 9:
                    e.autocomplete(t);
                    break;
                  case 27:
                    e.shown && (e.hide(), t.stopPropagation(), t.preventDefault());
                }
            }),
            $(LPTools.createElement("div", "dropdownHint"))),
          p = ((this.hintElement = LPTools.createElement("span")), n.append(this.hintElement), $(LPTools.createElement("div", "relative")));
        return (
          o.before(p),
          p.append(n),
          p.append(o),
          o.prop("readonly", !1),
          o.attr("data-field-name", this.config ? this.config.fieldName : ""),
          t
        );
      }),
      (TypeaheadDropdown.prototype.autocomplete = function (t) {
        this.hint && (this.setValue(this.hint.value), this.autoCompleteBlurs || (t.preventDefault(), t.stopPropagation()));
      }),
      (TypeaheadDropdown.prototype.getDropdownClass = function () {
        return "typeaheadDropdown";
      }),
      (TypeaheadDropdown.prototype.clear = function () {
        DropdownInput.prototype.clear.apply(this, arguments), this.dynamic && this.setOptions([]);
      }),
      (TypeaheadDropdown.prototype.default = function () {
        DropdownInput.prototype.default.apply(this, arguments), this.updateDropdown("");
      }),
      (TypeaheadDropdown.prototype.hide = function () {
        DropdownInput.prototype.hide.apply(this), this.clearHint();
      }),
      (TypeaheadDropdown.prototype.show = function () {
        this.hasMatches && DropdownInput.prototype.show.apply(this);
      }),
      (TypeaheadDropdown.prototype.setHint = function (t, e) {
        0 < t.length
          ? ((this.hintElement.textContent = t + e.label.substring(Math.min(t.length, e.label.length))), (this.hint = e))
          : this.clearHint();
      }),
      (TypeaheadDropdown.prototype.clearHint = function () {
        this.hintElement && (this.hintElement.textContent = ""), (this.hint = null);
      });
    var e = function (t, e) {
      var o = (t = t.get(0)).value,
        n = t.selectionStart || 0,
        t = t.selectionEnd || 0,
        p = o.substring(0, n),
        i = o.substring(t, o.length);
      return (
        n === t && (0 < n && 8 === e ? (p = p.substring(0, p.length - 1)) : t < o.length && 46 === e && (i = i.substring(1))),
        "number" != typeof e && (p += e),
        p + i
      );
    };
    (TypeaheadDropdown.prototype.handleKeypress = function (t) {
      this.updateDropdown(e(this.inputObject.getElement(), t));
    }),
      (TypeaheadDropdown.prototype.handleDelete = function (t) {
        this.updateDropdown(e(this.inputObject.getElement(), t));
      }),
      (TypeaheadDropdown.prototype.handleDownArrow = function () {
        this.show(), LPTools.setNavIndex(0);
      }),
      (DropdownInput.prototype.getKeyboardNavigationFocusHandler = function () {
        return this.optionFocusHandler;
      }),
      (TypeaheadDropdown.prototype.updateDropdown = function (t) {
        var e = !1,
          o = ((this.hasMatches = !1), this.dropdownElement.children().first()),
          n;
        for (n in (o.empty(), this.options)) {
          var p = this.options[n];
          this.queryMatches(p, t, !0) &&
            (o.append(p.element), (this.hasMatches = !0), !e) &&
            this.queryMatches(p, t) &&
            (this.setHint(t, p), (e = !0));
        }
        e || this.clearHint(), this.hasMatches ? (this.shown ? this.addKeyBoardNavigation() : t && this.show()) : this.hide();
      });
  })();
