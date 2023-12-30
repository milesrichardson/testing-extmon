((BloodhoundDropdown = function (o, e, t, n) {
  var i, n;
  TypeaheadDropdown.call(this, o, null, n),
    (e.datumTokenizer = e.datumTokenizer || Bloodhound.tokenizers.whitespace),
    (e.queryTokenizer = e.queryTokenizer || Bloodhound.tokenizers.whitespace),
    (e.remote = e.remote || {}),
    (e.remote.transport = function (o, n, i) {
      bg.LPServer.ajax(
        $.extend(o, {
          success: function (o, e, t) {
            n(o);
          },
          error: function (o, e, t) {
            i(t);
          }
        })
      );
    }),
    (this.bloodhound = new Bloodhound(e)),
    (this.optionLabel = LPTools.getOption(t, "optionLabel", null)),
    (this.elementTemplate = LPTools.getOption(t, "elementTemplate", null)),
    (this.getValueFromDatum = LPTools.getOption(this.elementTemplate, "value", null)),
    (this.ignoreDatum = LPTools.getOption(t, "ignore", null)),
    (this.focused = !1),
    (i = this),
    (n = $(o)).unbind("focus"),
    n.bind("focus", function () {
      i.focused = !0;
    }),
    n.bind("blur", function () {
      i.focused = !1;
    });
}).prototype = Object.create(TypeaheadDropdown.prototype)),
  ((BloodhoundDropdown.constructor = BloodhoundDropdown).prototype.fireOnChange = function (o) {
    null !== this.onChangeCallback && this.options && this.options[o] && this.onChangeCallback(this.options[o].datum, o);
  }),
  (BloodhoundDropdown.prototype.getInputValue = function (o) {
    if (this.getValueFromDatum) return this.getValueFromDatum(o.datum);
    TypeaheadDropdown.prototype.getInputValue.apply(this, arguments);
  }),
  (BloodhoundDropdown.prototype.processBloodhoundResponse = function (o, e) {
    if (this.focused && 0 < o.length) {
      for (var t = [], n = 0, i = o.length; n < i; ++n) {
        var s = o[n],
          l = this.bloodhound.identify(s),
          l;
        (null !== this.ignoreDatum && this.ignoreDatum(l, s)) ||
          ((l = { value: l, label: this.optionLabel(s), datum: s }),
          this.elementTemplate && (l.element = this.elementTemplate.template(s)),
          t.push(l),
          0 === n && this.queryMatches(l, e) && this.setHint(e, l));
      }
      this.setOptions(t), e && this.show(!0);
    } else this.hide(), this.clearHint();
  }),
  (BloodhoundDropdown.prototype.updateDropdown = function (e) {
    var t, o;
    (o = function (o) {
      (t.hasMatches = 0 < o.length), t.processBloodhoundResponse(o, e);
    }),
      (t = this).bloodhound.search(e, o, o);
  });
