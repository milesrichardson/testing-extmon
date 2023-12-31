var AddItemDialog = function (e) {
  Dialog.call(this, e, {
    title: Strings.translateString("Add Item"),
    dynamicHeight: !1,
    closeButtonEnabled: !0,
    overlayDialog: !0,
    hideButtons: !0,
    additionalHeaderClasses: ["icon"],
    isExpanded: !1
  });
};
(AddItemDialog.prototype = Object.create(Dialog.prototype)),
  ((AddItemDialog.prototype.constructor = AddItemDialog).prototype.addCard = function (e) {
    var t = LPTools.createElement("div", "col-3"),
      o = LPTools.createElement("button", e.classes ? [].concat("addItemCard", e.classes) : "addItemCard"),
      a;
    return (
      t.appendChild(o),
      e.icon && o.appendChild(e.icon),
      o.appendChild(LPTools.createElement("span", "addItemCardName", e.name)),
      (e.isPrimaryItem ? $("#addItemOptions") : $("#addItemSecondaryOptions")).append(t),
      o
    );
  }),
  (AddItemDialog.prototype.toggleExpanded = function () {
    var e = $("#addItemSecondaryOptionsContainer"),
      t = $("#addItemSecondaryOptionsLabel");
    e.slideToggle(),
      t.toggleClass("open"),
      Dialog.prototype.getCurrentDialog().element.classList.toggle("isMaximized"),
      (this.isExpanded = !this.isExpanded);
  }),
  (AddItemDialog.prototype.setup = function (e, t) {
    Dialog.prototype.setup.apply(this, arguments), t.isExpanded && !this.isExpanded && this.toggleExpanded();
  }),
  (AddItemDialog.prototype.initialize = function () {
    Dialog.prototype.initialize.apply(this, arguments);
    var a = this,
      n = ($("#addItemSecondaryOptionsContainer").slideUp(), $("#addItemSecondaryOptions")),
      e = $("#addItemSecondaryOptionsLabel"),
      i = {
        postSetup: function () {
          a.close();
        }
      },
      d =
        (e.bind("click", function () {
          a.toggleExpanded();
        }),
        bg.get("RecordTypeConfig")),
      s = bg.get("g_prefoverrides").noformfill,
      o =
        (d.types.forEach(function (e) {
          var t = !1,
            o;
          bg &&
            bg.get("g_prefoverrides") &&
            bg.get("g_prefoverrides").noformfill &&
            (t = (s && s.includes("0")) || s.includes(e.enterprisePolicyId)),
            e.composite ||
              e.noAddItemCard ||
              ("Password" !== e.id && t) ||
              a
                .addCard({ name: Strings.translateString(e.name), classes: e.id, isPrimaryItem: e.isPrimaryItem })
                .addEventListener("click", function () {
                  e.isPrimaryItem ||
                    bg.sendLpImprove("vault_add_item_dialog_more_items_click", {
                      selected_item: e.recordType,
                      os_type: getOsType(),
                      browser_type: getBrowserType()
                    }),
                    bg.lpevent("m_add"),
                    e.recordType === d.TYPE.Password
                      ? dialogs.site.open(i)
                      : dialogs.note.open(
                          $.extend(i, {
                            defaultData: {
                              notetype: e.recordType,
                              language: Note.prototype.isValidLanguage(navigator.language) ? navigator.language : "en-US"
                            }
                          })
                        );
                });
        }),
        function (t) {
          var o = a.addCard({ parent: n, name: t.title, classes: "Custom" }),
            e = LPTools.createElement("button", "customTemplateDeleteButton");
          return (
            e.appendChild(LPTools.createElement("i", "fa fa-trash")),
            o.appendChild(e),
            o.addEventListener("click", function () {
              dialogs.note.open($.extend(i, { defaultData: { notetype: "Custom_" + t.id } })),
                bg.sendLpImprove("vault_add_item_dialog_more_items_click", {
                  selected_item: "Custom",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                });
            }),
            e.addEventListener("click", function (e) {
              e.stopPropagation(),
                dialogs.confirmation.open({
                  title: Strings.translateString("Confirm Deletion"),
                  text: [
                    Strings.translateString("Are you sure you want to delete %s?", t.title),
                    Strings.translateString("Any notes you created using this template will not be deleted.")
                  ],
                  nextButtonText: Strings.translateString("Continue"),
                  backButtonText: Strings.Vault.CANCEL,
                  handler: function () {
                    LPRequest.makeRequest(LPProxy.deleteCustomNoteTemplate, {
                      params: { id: t.id },
                      success: function () {
                        var e = o.parentElement;
                        e.parentElement.removeChild(e);
                      },
                      requestSuccessOptions: { closeDialog: !1 }
                    });
                  }
                });
            }),
            o
          );
        }),
      e;
    LPProxy.getCustomNoteTemplates().forEach(o),
      Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).subscribe(function (e) {
        var t = o(e);
        setTimeout(function () {
          t.focus();
        }, 0);
      }),
      (s && (-1 !== s.indexOf("0") || -1 !== s.indexOf("18"))) ||
        ((e = this.addCard({
          parent: n.parent(),
          name: Strings.translateString("New custom item type"),
          icon: LPTools.createElement("i", "fa fa-plus")
        })),
        $(e)
          .addClass("customTemplateAddButton")
          .bind("click", function () {
            dialogs.customNoteTemplate.open();
          }));
  }),
  (AddItemDialog.prototype.focus = function () {
    document.querySelector(".addItemCard").focus();
  });
