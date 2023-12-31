((DropdownInput = function (t, o, e) {
  var o, e, n;
  DialogInput.ErrorDisplayInput.call(this),
    (this.options = o || {}),
    (this.config = e || {}),
    (this.inputObject = new DialogInput.Input(
      t || LPTools.createElement("input", { type: "text", class: "dialogInput" }),
      this.config.dialog
    )),
    (this.shown = !1),
    (this.onChangeCallback = null),
    (this.onFocusOutCallback = null),
    (this.disabled = !1),
    (this.dropdownEnabled = !0),
    (this.searchValue = ""),
    (this.clearSearchValueTimeout = null),
    (this.dynamic = LPTools.getOption(e, "dynamic", !0)),
    (this.selectedOption = null),
    t && ((o = t.parentElement), (e = t.nextElementSibling), o.insertBefore(this.buildInputElement(), e)),
    ((n = this).clearSearchValue = function () {
      n.searchValue = "";
    });
}).prototype = Object.create(DialogInput.ErrorDisplayInput.prototype)),
  ((DropdownInput.prototype.constructor = DropdownInput).prototype.ATTR_DROPDOWN_VALUE = "dropdownValue"),
  (function (t) {
    var s;
    (DropdownInput.prototype.adjustView = function () {
      DialogInput.ErrorDisplayInput.prototype.adjustView.apply(this, arguments);
      var t = this.inputObject.getElement();
      try {
        t.css("margin", ""),
          this.dropdownElement
            .parent()
            .css({
              "margin-top": t.css("margin-top"),
              "margin-right": t.css("margin-right"),
              "margin-bottom": t.css("margin-bottom"),
              "margin-left": t.css("margin-left")
            }),
          t.css("margin", 0);
        var o = t.css("border-bottom-right-radius");
        this.dropdownElement.css({ "margin-top": "-" + o, "border-bottom-left-radius": o, "border-bottom-right-radius": o });
      } catch (t) {}
    }),
      (DropdownInput.prototype.buildInputElement = function () {
        var t = this.inputObject.getElement();
        if ("SELECT" === t.prop("nodeName")) {
          (this.dynamic = !1), (this.options = []);
          for (var o = t.children(), e = 0, n = o.length; e < n; ++e) {
            var i = o[e];
            this.options.push({ value: i.getAttribute("value"), label: i.textContent.trim(), class: i.getAttribute("class") });
          }
          (t = $(LPTools.createElement("input", { class: "dialogInput", type: "text", readonly: !0 }))), this.inputObject.setElement(t);
        }
        (this.dropdownElement = $(LPTools.createElement("div", "dropdownMenu selectDropdownList"))),
          this.dropdownElement.append(LPTools.createElement("ul"));
        var s = $(LPTools.createElement("div", "dropdownContainer")),
          p,
          r;
        return (
          s.append(t),
          s.append(this.dropdownElement),
          this.setOptions(this.options),
          this.config.additionalDropdownClasses && this.dropdownElement.addClass(this.config.additionalDropdownClasses),
          (p = this),
          (r = !1),
          t.unbind("blur").bind("blur", function () {
            r ? (t.focus(), (r = !1)) : p.hide();
          }),
          t.unbind("keypress").bind("keypress", function (t) {
            p.dropdownEnabled && 0 < t.charCode && !t.metaKey && p.handleKeypress(String.fromCharCode(t.charCode));
          }),
          t.unbind("keydown").bind("keydown", function (t) {
            var o = t.keyCode || t.which;
            switch (o) {
              case 8:
              case 46:
                p.dropdownEnabled && p.handleDelete(o);
                break;
              case 40:
                !1 === p.shown && (p.handleDownArrow(), t.preventDefault(), t.stopPropagation());
            }
          }),
          (p.toggleHandler = function (t) {
            p.toggle(t);
          }),
          p.enableClickToggle(),
          p.dropdownElement
            .children()
            .first()
            .unbind("mousedown")
            .bind("mousedown", function (t) {
              p.setValue(p.getDropdownValue(t.target)), t.stopPropagation(), t.preventDefault();
            }),
          p.dropdownElement.unbind("mousedown").bind("mousedown", function (t) {
            t.stopPropagation(), t.preventDefault(), LPPlatform.canPreventBlur() || (r = !0);
          }),
          t.addClass(this.getDropdownClass()),
          s.get(0)
        );
      }),
      (DropdownInput.prototype.enableClickToggle = function () {
        this.inputObject.getElement().bind("mousedown", this.toggleHandler).addClass("clickToggles");
      }),
      (DropdownInput.prototype.disableClickToggle = function () {
        this.inputObject.getElement().unbind("mousedown", this.toggleHandler).removeClass("clickToggles");
      }),
      (DropdownInput.prototype.enableDropdown = function () {
        this.dropdownEnabled || (this.getElement().removeClass("dropdownDisabled"), (this.dropdownEnabled = !0));
      }),
      (DropdownInput.prototype.disableDropdown = function () {
        this.dropdownEnabled && (this.getElement().addClass("dropdownDisabled"), (this.dropdownEnabled = !1));
      }),
      (DropdownInput.prototype.getElement = function () {
        return this.inputObject.getElement();
      }),
      (DropdownInput.prototype.getDialog = function () {
        return this.inputObject.getDialog();
      }),
      (DropdownInput.prototype.buildError = function () {
        return this.buildErrorElement({ alignTop: !0, element: this.dropdownElement.parent() });
      }),
      (DropdownInput.prototype.validate = function () {
        return !0;
      }),
      (DropdownInput.prototype.getDropdownClass = function () {
        return "selectDropdown";
      }),
      (DropdownInput.prototype.setValues = function (t) {
        var o = [];
        if (t)
          for (var e = 0, n = t.length; e < n; ++e) {
            var i = t[e];
            o.push({ value: i, label: i });
          }
        this.setOptions(o);
      }),
      (DropdownInput.prototype.default = function () {
        this.inputObject.default();
      }),
      (DropdownInput.prototype.addOption = function (t) {
        this.options[t.value] = t;
      }),
      (DropdownInput.prototype.removeValue = function (t, o) {
        o && this.setValue(o),
          delete this.options[t],
          this.dropdownElement.find("li[" + DropdownInput.prototype.ATTR_DROPDOWN_VALUE + '="' + t + '"]').remove(),
          LPTools.hasProperties(this.options) || (this.inputObject.getElement().removeClass("toggled"), this.dropdownElement.hide());
      }),
      (DropdownInput.prototype.setOptions = function (t, o) {
        if (t && ((this.options = {}), (this.orderedOptions = []), this.dropdownElement)) {
          var e = this.dropdownElement.children().first();
          e.empty();
          for (var n = 0, i = t.length; n < i; ++n) {
            var s = t[n];
            (s.index = n),
              void 0 === s.element
                ? (s.element = LPTools.createElement("li", { dropdownValue: s.value, class: s.class }, s.label))
                : s.element.setAttribute(this.ATTR_DROPDOWN_VALUE, s.value),
              o && (s.element.className = o),
              void 0 !== s.click && LPPlatform.addEventListener(s.element, "mousedown", s.click),
              e.append(s.element),
              (this.options[s.value] = s),
              this.orderedOptions.push(s);
          }
        }
      }),
      (DropdownInput.prototype.focus = function () {
        this.getElement().focus();
      }),
      (DropdownInput.prototype.onChange = function (t) {
        this.onChangeCallback = t;
      }),
      (DropdownInput.prototype.fireOnChange = function (t) {
        null !== this.onChangeCallback && this.onChangeCallback(t);
      }),
      (DropdownInput.prototype.onFocusOut = function (t) {
        this.onFocusOutCallback = t;
      }),
      (DropdownInput.prototype.fireOnFocusOut = function (t) {
        null !== this.onFocusOutCallback && this.onFocusOutCallback(t);
      }),
      (DropdownInput.prototype.getDropdownValue = function (t) {
        return $(t)
          .closest("[" + DropdownInput.prototype.ATTR_DROPDOWN_VALUE + "]")
          .attr(DropdownInput.prototype.ATTR_DROPDOWN_VALUE);
      }),
      (DropdownInput.prototype.addKeyBoardNavigation = function () {
        LPTools.addKeyBoardNavigation(this.dropdownElement.children().first().children(), {
          mouseEvent: "mousedown",
          useRightArrow: !1,
          focusHandler: this.getKeyboardNavigationFocusHandler()
        });
      }),
      (DropdownInput.prototype.getKeyboardNavigationFocusHandler = function () {
        return null;
      }),
      (DropdownInput.prototype.show = function () {
        !this.disabled &&
          this.dropdownEnabled &&
          !this.shown &&
          LPTools.hasProperties(this.options) &&
          ((this.shown = !0),
          this.inputObject.getElement().addClass("toggled"),
          this.addKeyBoardNavigation(),
          this.dropdownElement.show(),
          this.dropdownElement.scrollTop(0),
          Topics.get(Topics.DROPDOWN_SHOWN).publish(this));
      }),
      (DropdownInput.prototype.positionAbsoluteBody =
        ((s = function (t, o) {
          o.hide();
          var e = t.get(0).scrollHeight > t.height(),
            n = (o.show(), o.get(0)),
            i = (e || t.css("overflow", "hidden"), n.getBoundingClientRect());
          e || t.css("overflow", "auto"),
            document.body.appendChild(n),
            o.css({ width: i.width, left: i.left, top: i.top - parseInt(o.css("margin-top")) });
        }),
        function () {
          var t = this,
            o = this.inputObject.getElement(),
            e = o.LP_scrollParent(),
            n,
            i;
          0 < e.length &&
            (s(e, this.dropdownElement),
            (n = function () {
              t.hide(), e.unbind("scroll.selectDropdown", n);
            }),
            e.unbind("scroll.selectDropdown").bind("scroll.selectDropdown", n),
            (i = function () {
              t.dropdownElement.insertAfter(o),
                t.dropdownElement.css({ width: "", left: "", top: "" }),
                Topics.get(Topics.DROPDOWN_HIDE).unsubscribe(i);
            }),
            Topics.get(Topics.DROPDOWN_HIDE).subscribe(i));
        })),
      (DropdownInput.prototype.hide = function () {
        this.shown &&
          LPTools.hasProperties(this.options) &&
          ((this.shown = !1),
          LPTools.removeKeyBoardNavigation(),
          this.dropdownElement.hide(),
          this.inputObject.getElement().removeClass("toggled"),
          Topics.get(Topics.DROPDOWN_HIDE).publish(this));
      }),
      (DropdownInput.prototype.toggle = function (t) {
        this.shown ? this.hide() : this.show(!0), void 0 !== t && t.stopPropagation();
      }),
      (DropdownInput.prototype.disable = function () {
        this.disabled ||
          (this.getElement().parent().append(LPTools.createElement("div", "dialogInputOverlay")),
          this.inputObject.disable(),
          (this.disabled = !0));
      }),
      (DropdownInput.prototype.enable = function () {
        this.disabled && (this.getElement().parent().children().last().remove(), this.inputObject.enable(), (this.disabled = !1));
      }),
      (DropdownInput.prototype.setReadOnly = function () {
        this.getElement().prop("readonly", !0);
      }),
      (DropdownInput.prototype.removeReadOnly = function () {
        this.getElement().prop("readonly", !0);
      }),
      (DropdownInput.prototype.getValue = function () {
        var t = this.inputObject.getValue();
        if (this.selectedOption && this.selectedOption.label === t) return this.selectedOption.value;
        if (this.dropdownEnabled && this.options)
          for (var o in this.options)
            if (t === this.options[o].label) {
              t = o;
              break;
            }
        return t;
      }),
      (DropdownInput.prototype.getInputValue = function (t) {
        return t.label;
      }),
      (DropdownInput.prototype.clear = function () {
        DialogInput.ErrorDisplayInput.prototype.clear.apply(this, arguments), this.setValue("");
      }),
      (DropdownInput.prototype.setValue = function (t) {
        var o;
        this.dropdownEnabled && this.options && this.options[t]
          ? ((o = this.options[t]),
            this.inputObject.setValue(this.getInputValue(o)),
            (this.optionIndex = o.index),
            (this.selectedOption = o))
          : (this.inputObject.setValue(t), (this.selectedOption = null)),
          this.hide(),
          this.fireOnChange(t);
      }),
      (DropdownInput.prototype.handleKeypress = function (t) {
        (this.searchValue += t),
          this.updateValue(this.searchValue),
          this.clearSearchValueTimeout && clearTimeout(this.clearSearchValueTimeout);
        var o = this.clearSearchValue;
        this.clearSearchValueTimeout = setTimeout(function () {
          o();
        }, 500);
      }),
      (DropdownInput.prototype.handleDelete = function (t) {
        (this.searchValue = ""), this.updateValue(this.searchValue);
      }),
      (DropdownInput.prototype.handleDownArrow = function () {
        this.show(), LPTools.setNavIndex(this.optionIndex);
      }),
      (DropdownInput.prototype.queryMatches = function (t, o, e) {
        var t = t.label.toLowerCase(),
          o = o.toLowerCase(),
          t = t.indexOf(o);
        return e ? -1 < t : 0 === t;
      }),
      (DropdownInput.prototype.updateValue = function (t) {
        for (var o = 0, e = this.orderedOptions.length; o < e; ++o) {
          var n = this.orderedOptions[o];
          if (this.queryMatches(n, t)) {
            this.setValue(n.value);
            break;
          }
        }
      });
  })(document);
