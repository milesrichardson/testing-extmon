((DialogWithGroupInput = function (t, o) {
  ((o = o || {}).additionalHeaderClasses = void 0 === o.additionalHeaderClasses ? [] : o.additionalHeaderClasses),
    o.additionalHeaderClasses.push("icon"),
    (o.buttonAlign = o.buttonAlign || this.RIGHT_ALIGN),
    VaultItemDialog.call(this, t, o),
    (this.updateFavButtonText = null);
}).prototype = Object.create(VaultItemDialog.prototype)),
  (DialogWithGroupInput.prototype.constructor = DialogWithGroupInput),
  (function () {
    var a = Strings.translateString("Add Site to Favorites"),
      n = Strings.translateString("Remove Site from Favorites");
    (DialogWithGroupInput.prototype.setup = function (t, o) {
      for (var e = LPProxy.getGroups(), i = (e.sort(VaultItemBase.prototype.sortByNameAsc), []), a = 0, n = e.length; a < n; ++a) {
        var r = e[a],
          r;
        r instanceof DefaultGroup || ((r = r.getName()) !== Strings.Consts.NONE_GROUP && i.push(r));
      }
      this.setGroupDropdownValues(i),
        this.updateFavButtonText && this.updateFavButtonText(),
        VaultItemDialog.prototype.setup.apply(this, arguments);
    }),
      (DialogWithGroupInput.prototype.setGroupDropdownValues = function (t) {
        void 0 !== this.inputFields.group && this.inputFields.group.setValues(t);
      }),
      (DialogWithGroupInput.prototype.save = function (t, o) {
        t.saveFromDialog(o, this.getGroup(o), this.data.saveOptions);
      }),
      (DialogWithGroupInput.prototype.add = function (t) {
        if (!this.options.type) throw "Dialog must provide a type for new item or override this function.";
        var o = new this.options.type();
        if (this.data.saveOptions)
          if (t.group) {
            var e = bg.get("siteCats"),
              i;
            for (i in e) {
              if (e[i] === t.group) {
                this.data.saveOptions.folder = t.group;
                break;
              }
              this.data.saveOptions.folder = "user";
            }
          } else this.data.saveOptions.folder = "none";
        o.addFromDialog(t, this.getGroup(t), this.data.saveOptions);
      }),
      (DialogWithGroupInput.prototype.allowNoneGroup = function () {
        return !0;
      }),
      (DialogWithGroupInput.prototype.addFavButton = function () {
        var t = LPTools.createElement("div", "itemButtons dialogItemButtons"),
          o = (this.buttonContainer.prepend(t), LPTools.createElement("input", { type: "checkbox", class: "favButton", tabindex: "-1" })),
          e =
            (t.appendChild(o),
            (this.inputFields.fav = new DialogInput.Input(o)),
            LPTools.createElement("button", { class: "favButtonLabel itemButton", title: a })),
          i =
            (t.appendChild(e),
            (this.updateFavButtonText = function () {
              o.checked ? e.setAttribute("title", n) : e.setAttribute("title", a);
            }));
        return (
          $(e).bind("click", function () {
            (o.checked = !o.checked), i();
          }),
          (this.actionButtonContainer = LPTools.createElement("div", "actionButtonContainer")),
          t.appendChild(this.actionButtonContainer),
          (this.actionButtonContainer = $(this.actionButtonContainer)),
          t
        );
      }),
      (DialogWithGroupInput.prototype.getGroupField = function (t) {
        return "group";
      }),
      (DialogWithGroupInput.prototype.validate = function (t) {
        var o = VaultItemDialog.prototype.validate.apply(this, arguments),
          e = this.getGroupField(t),
          i;
        return (
          t[e] &&
            (null === (i = LPProxy.getExistingGroupParent(t[e])) &&
              -1 < t[e].indexOf(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX) &&
              (this.addError(
                e,
                Strings.translateString(
                  "Sorry - group names starting with 'Shared-' are created by LastPass to indicate groups shared with other people. Please use a different name."
                )
              ),
              (o = !1)),
            this.originalData[e] !== t[e]) &&
            i &&
            i.isReadOnly() &&
            (this.addError(e, Strings.translateString("You do not have permission to add items to this folder.")), (o = !1)),
          o
        );
      }),
      (DialogWithGroupInput.prototype.getGroup = function (t, o) {
        var t = t[this.getGroupField(t)],
          e = (!t && this.allowNoneGroup() && (t = Strings.Consts.NONE_GROUP), LPProxy.getGroupByName(t)),
          i,
          e;
        return !e && t && ((i = LPProxy.getExistingGroupParent(t)), (e = new DummyGroup(t, i ? i.getSharedGroup() : null))), e;
      });
  })();
