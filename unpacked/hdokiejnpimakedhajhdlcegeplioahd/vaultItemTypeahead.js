((VaultItemTypeahead = function (t, e) {
  TypeaheadDropdown.call(this, t, null, e),
    (this.filter = LPTools.getOption(e, "filter", null)),
    (this.sourceFunction = LPTools.getOption(e, "sourceFunction", null)),
    this.refresh();
}).prototype = Object.create(TypeaheadDropdown.prototype)),
  ((VaultItemTypeahead.constructor = VaultItemTypeahead).prototype.refresh = function () {
    this.dataContainer = new Container(this.sourceFunction ? this.sourceFunction() : []);
  }),
  (VaultItemTypeahead.prototype.buildOptions = function (t) {
    t = t || "";
    var e = [];
    if (this.dataContainer) {
      this.dataContainer._destructed && this.refresh();
      for (var i = this.dataContainer.getSearchResultItems(t), a = 0, o = i.length; a < o; ++a) {
        var n = i[a],
          s,
          n;
        (this.filter && !this.filter(n)) ||
          ((s = n._model.getName()),
          n instanceof AccountDisplay ? (s += " (" + n._model.getUsername() + ")") : (s += " (" + Strings.Vault.SECURE_NOTE + ")"),
          (n = { value: n._model.getID(), label: s }),
          0 === e.length && this.queryMatches(n, t) && this.setHint(t, n),
          e.push(n));
      }
    }
    return this.setOptions(e), 0 < e.length;
  }),
  (VaultItemTypeahead.prototype.updateDropdown = function (t) {
    this.buildOptions(t)
      ? ((this.hasMatches = !0), this.shown ? this.addKeyBoardNavigation() : t && this.show())
      : (this.hide(), this.clearHint());
  });
