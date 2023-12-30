var NoteDialog = function (e) {
  DialogWithGroupInput.call(this, e, { closeButtonEnabled: !0, maximizeButtonEnabled: !0 });
  var n = this;
  (this.removedAttachments = null),
    (this.addedAttachments = null),
    (this.showAttachmentContainer = function (e) {
      e ? $("#noteDialogExistingAttachments").hide() : $("#noteDialogExistingAttachments").show();
    }),
    (this.setFields = function (e) {
      n.setNoteFields(e);
      var t = n.noteForms[e];
      (n.hiddenFields.template = t ? t.customTemplate : ""),
        LPFeatures.allowOmarIA() &&
          (e === Note.prototype.NOTE_TYPES.GENERIC
            ? $("#noteDialogLanguageDropdown").LP_hide()
            : $("#noteDialogLanguageDropdown").LP_show()),
        n.inputFields.notetype && t && t.customTemplate && !n.inputFields.notetype.disabled
          ? $("#deleteCustomNoteTemplate").show()
          : $("#deleteCustomNoteTemplate").hide(),
        t &&
          ((this.dialogType = n.data.vaultItem ? "edit" : "add"),
          (this.itemType = n.data.vaultItem ? n.data.vaultItem._noteType : n.data.defaultData.notetype),
          (n.trackedFields = []),
          Object.keys(t.inputsArray).forEach(function (e) {
            n.trackedFields.push({ trackingName: t.inputsArray[e].field, isDirty: !1 });
          }));
    }),
    (this.noteForms = {}),
    (this.noteFormElement = null),
    (this.noteTypeIconContainer = null),
    (this.noteTypeOptions = []),
    (this.temporaryNoteTypeOptionValue = null);
};
(NoteDialog.prototype = Object.create(DialogWithGroupInput.prototype)),
  (NoteDialog.prototype.constructor = NoteDialog),
  (function (o) {
    var i = function () {
        LPProxy.copyToClipboard(this.getValue());
      },
      p = { isAttachmentAdded: !1, isFavorite: !1, isFolderFieldDirty: !1 },
      u = [],
      t =
        ((NoteDialog.prototype.setNoteTypeImage = function (e) {
          this.inputFields.notetype &&
            (this.noteTypeIconContainer.children(".itemIcon").detach(),
            this.noteTypeIconContainer.prepend(this.inputFields.notetype.options[e].icon));
        }),
        function (e) {
          var t = LPTools.createElement("li", "noteDropdown", e.label);
          return t.insertBefore(n(e.value), t.firstChild), t;
        }),
      n = function (e) {
        var e = new NoteDisplay(new Note({ notetype: e })),
          t = e.buildItemIconElement();
        return e.destruct(), t;
      },
      a,
      l,
      s =
        ((NoteDialog.prototype.addCustomNote = function (e) {
          var t = "Custom_" + e.id;
          if (!this.noteForms.hasOwnProperty(t)) {
            this.inputFields.notetype && this.addNoteType({ label: e.title, value: t });
            for (var n = [], a = 0; a < e.fields.length; ++a) {
              var l = e.fields[a].text;
              switch (e.fields[a].type) {
                case "text":
                  n.push(new DialogInput.LabelledInput(l, new DialogInput.TextInput()));
                  break;
                case "password":
                  n.push(new DialogInput.LabelledInput(l, new DialogInput.PasswordInput()));
                  break;
                case "textarea":
                  n.push(new DialogInput.LabelledInput(l, new DialogInput.TextArea()));
                  break;
                case "monthDayYear":
                  n.push(new DialogInput.LabelledInput(l, new DialogInput.AlphaDateInput()));
                  break;
                case "monthYear":
                  n.push(new DialogInput.LabelledInput(l, new DialogInput.AlphaDateInput({ includeDay: !1 })));
                  break;
                case "textWithCopy":
                  n.push(
                    new DialogInput.LabelledInput(
                      l,
                      new DialogInput.TextInput({ inputButton: Strings.translateString("Copy"), inputButtonHandler: i })
                    )
                  );
              }
            }
            var o = new I(n);
            (o.customTemplate = JSON.stringify(e)), (this.noteForms[t] = o);
          }
        }),
        (NoteDialog.prototype.preSetup = function (e) {
          var t = null,
            n,
            a,
            l,
            o,
            a,
            o,
            t;
          e &&
            LPFeatures.allowOmarIA() &&
            ((a = n = null),
            e.defaultData && e.defaultData.notetype
              ? ((a = e.defaultData.notetype), (n = LPProxy.getConfigTypeObjectByNoteType(a)))
              : e.vaultItem &&
                "function" == typeof e.vaultItem.getNoteType &&
                (n = LPProxy.getConfigTypeObjectByNoteType(e.vaultItem.getNoteType())),
            n) &&
            ((l = n.name),
            (t =
              "Custom" === n.id
                ? ((o = null),
                  (o =
                    e.vaultItem && e.vaultItem._data && e.vaultItem._data.template
                      ? JSON.parse(e.vaultItem._data.template)
                      : ((a = LPProxy.getCustomTemplateIdFromNoteType(a)), LPProxy.getCustomNoteTemplate(a))) && (l = o.title),
                  e.vaultItem ? Strings.translateString("Edit %s", l) : Strings.translateString("Add %s", l))
                : e.vaultItem
                ? Strings.translateString("Edit " + n.id)
                : Strings.translateString("Add " + n.id))),
            (t = t || (e && e.vaultItem ? Strings.translateString("Edit Note") : Strings.translateString("Add Note"))),
            e && (e.title = t);
        }),
        (NoteDialog.prototype.open = function (e) {
          DialogWithGroupInput.prototype.open.call(this, $.extend(e, { sourceFunction: LPProxy.getNoteModel }));
        }),
        (NoteDialog.prototype.defaultFields = function (e) {
          var t = e.vaultItem ? e.vaultItem.getLanguage() : "";
          !t && Note.prototype.isValidLanguage(navigator.language) && (t = navigator.language),
            (e.defaultData = $.extend(
              { notetype: e.vaultItem ? e.vaultItem.getNoteType() : Note.prototype.NOTE_TYPES.GENERIC, language: t || "en-US" },
              e.defaultData
            )),
            DialogWithGroupInput.prototype.defaultFields.apply(this, arguments);
        }),
        (NoteDialog.prototype.clearFields = function (e) {
          for (var t in (DialogWithGroupInput.prototype.clearFields.apply(this, arguments), this.noteForms))
            this.noteForms[t].inputs.clear();
        }),
        (NoteDialog.prototype.clearErrors = function () {
          for (var e in (DialogWithGroupInput.prototype.clearErrors.apply(this, arguments), this.noteForms))
            this.noteForms[e].inputs.clearErrors();
        }),
        (NoteDialog.prototype.validate = function (e) {
          var t = DialogWithGroupInput.prototype.validate.apply(this, arguments),
            n;
          return (
            "" === e.name && (this.addError("name", Strings.translateString("Name is required.")), (t = !1)),
            45e3 < JSON.stringify(e.extra).length &&
              ((n = this),
              dialogs.confirmation.open({
                title: Strings.translateString("An error occurred. Please try again later."),
                text: Strings.translateString(
                  "The notes field contains too much data. You may store a maximum of 45,000 characters per note. Would you like us to truncate the note for you? You will lose some of your data."
                ),
                handler: function () {
                  n.inputFields.extra.Notes.setValue(e.extra.Notes.substring(0, 45e3));
                }
              }),
              (t = !1)),
            t
          );
        }),
        (NoteDialog.prototype.initializeAttachmentContainer = function (e) {
          (this.containers.attachments = new Container(e, { stateChangeCallback: this.showAttachmentContainer })),
            this.containers.attachments.initialize(document.getElementById("attachmentContainer")),
            this.showAttachmentContainer(this.containers.attachments.isEmpty());
        }),
        (NoteDialog.prototype.setup = function (e, t) {
          LPFeatures.allowOmarIA()
            ? ($("#noteDialogTypeDropdown").LP_hide(), $("#deleteCustomNoteTemplate").LP_hide(), $("#noteDialogLanguageDropdown").LP_show())
            : ($("#noteDialogTypeDropdown").LP_show(),
              $("#deleteCustomNoteTemplate").LP_show(),
              $("#noteDialogLanguageDropdown").LP_hide());
          var n = t.vaultItem;
          if (
            (this.inputFields.notetype &&
              (n ? (this.inputFields.notetype.disable(), $("#deleteCustomNoteTemplate").hide()) : this.inputFields.notetype.enable()),
            t.defaultData && t.defaultData.notetype
              ? (t.defaultData.template && this.addCustomNote(JSON.parse(t.defaultData.template)), this.setFields(t.defaultData.notetype))
              : t.vaultItem && LPFeatures.allowOmarIA() && this.setFields(t.vaultItem.getNoteType()),
            n &&
              !this.inputFields.notetype.options.hasOwnProperty(n.getNoteType()) &&
              n.getTemplate() &&
              ((this.temporaryNoteTypeOptionValue = n.getNoteType()), this.addCustomNote(JSON.parse(n.getTemplate()))),
            n && n.hasAttachments())
          ) {
            for (var a = n.getAttachments(), l = [], o = 0, i = a.length; o < i; ++o) l.push(a[o].newDisplayObject());
            this.initializeAttachmentContainer(l);
          } else this.showAttachmentContainer(!0);
          (this.removedAttachments = []),
            (this.addedAttachments = []),
            t.vaultItem ? e.find(".history").show() : e.find(".history").hide(),
            !t.vaultItem && LPFeatures.allowOmarIA() ? e.find(".dialogAllSitesButton").show() : e.find(".dialogAllSitesButton").hide(),
            (u = this.trackedFields),
            document.getElementById("noteDialog").addEventListener("click", function (t) {
              ((t.target.attributes["data-field-name"] && "" !== t.target.attributes["data-field-name"].value) ||
                "favButton" === t.target.className ||
                t.target.classList.contains("favButtonLabel")) &&
                ("favButton" === t.target.className || t.target.classList.contains("favButtonLabel")
                  ? (p.isFavorite = !0)
                  : "Folder" === t.target.attributes["data-field-name"].value
                  ? (p.isFolderFieldDirty = !0)
                  : Object.keys(u).forEach(function (e) {
                      t.target.attributes["data-field-name"].value === u[e].trackingName && (u[e].isDirty = !0);
                    }));
            }),
            DialogWithGroupInput.prototype.setup.apply(this, arguments);
        }),
        (NoteDialog.prototype.addNoteType =
          ((a = function (e, t) {
            return e.label < t.label ? -1 : e.label > t.label ? 1 : 0;
          }),
          (l = LPTools.createElement("div", { id: "addCustomTemplate" }, Strings.translateString("Add Custom Template"))),
          $(l).bind("click", function () {
            dialogs.customNoteTemplate.open();
          }),
          function (e) {
            (e.element = t(e)),
              (e.icon = n(e.value)),
              this.noteTypeOptions.push(e),
              (this.noteTypeOptions = this.noteTypeOptions.sort(a)),
              this.inputFields.notetype.setOptions(this.noteTypeOptions),
              this.inputFields.notetype.dropdownElement.append(l);
          })),
        (NoteDialog.prototype.initialize = function (e) {
          if (
            (DialogWithGroupInput.prototype.initialize.apply(this, arguments),
            (this.noteFormElement = o.getElementById("noteForm")),
            (this.noteTypeIconContainer = $("#noteDialogTypeContainer")),
            this.inputFields.notetype)
          )
            for (var t in ((this.inputFields.notetype = new DropdownInput(this.inputFields.notetype.getElement()[0])),
            Note.prototype.NOTE_TYPES)) {
              var t = Note.prototype.NOTE_TYPES[t];
              this.addNoteType({ label: t, value: t });
            }
          var a, n, l;
          (a = this),
            (n = function () {
              for (var e = LPProxy.getCustomNoteTemplates(), t = 0, n = e.length; t < n; ++t) a.addCustomNote(e[t]);
            })(),
            Topics.get(Topics.REFRESH_DATA).subscribe(n),
            a.inputFields.notetype &&
              (a.noteTypeIconContainer.bind("mousedown", function (e) {
                a.inputFields.notetype.toggle(e), e.preventDefault(), a.inputFields.notetype.focus();
              }),
              a.inputFields.notetype.getElement().bind("focus", function () {
                a.noteTypeIconContainer.addClass("focus");
              }),
              a.inputFields.notetype.getElement().bind("blur", function () {
                a.noteTypeIconContainer.removeClass("focus");
              }),
              a.inputFields.notetype.onChange(a.setFields)),
            (n = a.addFavButton()),
            (l = LPTools.createElement("button", { class: "itemButton history", title: Strings.translateString("Note History") })),
            $(l).bind("click", function () {
              LPRequest.makeRequest(LPProxy.getNoteHistory, {
                params: { aid: a.vaultItem.getID(), shareId: a.vaultItem.getShareID() },
                success: function (e) {
                  dialogs.fieldHistory.open({ history: e, vaultItem: a.vaultItem, historyType: Constants.HISTORY_TYPES.NOTE });
                },
                requestSuccessOptions: { closeDialog: !1 }
              });
            }),
            n.appendChild(l),
            Topics.get(Topics.ATTACHMENT_REMOVED).subscribe(function (e) {
              for (var t = 0, n = a.addedAttachments.length; t < n; ++t)
                if (a.addedAttachments[t] === e) return void a.addedAttachments.splice(t, 1);
              a.removedAttachments.push(e);
            }),
            (n = bg
              .getAllowedFileExtensions()
              .map(function (e) {
                return "." + e;
              })
              .join(",")),
            $("#addAttachmentFileField").attr("accept", n),
            LPPlatform.setupAddAttachmentButton($("#addAttachmentButton"), function (e, t, n) {
              var e;
              e
                ? dialogs.alert.open({ title: Strings.translateString("File not attached"), text: e })
                : t &&
                  n &&
                  ((e = new Attachment({
                    filename: t,
                    id: Math.floor(99999 * Math.random()).toString(),
                    mimetype: bg.get_mimetype_from_filename(t),
                    bytes: n
                  })),
                  a.addAttachment(e),
                  (p.isAttachmentAdded = !0),
                  bg.sendLpImprove("attachment_added", {
                    source: LPPlatform.lpIsExtension() ? "extension" : "webvault",
                    usingbinary: "0"
                  }));
            }),
            $("#deleteCustomNoteTemplate").bind("click", function () {
              dialogs.confirmation.open({
                title: Strings.translateString("Confirm Deletion"),
                text: Strings.translateString(
                  "Are you sure you want do delete? Any notes you created using this template will not be deleted."
                ),
                nextButtonText: Strings.translateString("Continue"),
                backButtonText: Strings.Vault.CANCEL,
                handler: function () {
                  var e = a.inputFields.notetype.getValue(),
                    t = JSON.parse(a.noteForms[e].customTemplate);
                  LPRequest.makeRequest(LPProxy.deleteCustomNoteTemplate, {
                    params: { id: t.id },
                    success: function () {
                      a.inputFields.notetype.removeValue(e, Note.prototype.NOTE_TYPES.GENERIC), delete a.noteForms[e];
                    },
                    requestSuccessOptions: { closeDialog: !1 }
                  });
                }
              });
            }),
            Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).subscribe(function (e) {
              var e = a.addCustomNote(e);
              a.inputFields.notetype.setValue(e);
            }),
            (this.noteForms[Note.prototype.NOTE_TYPES.BANK] = new I([
              new DialogInput.LabelledInput("Bank Name", new DialogInput.TextInput({ fieldName: "Bank Name" })),
              new DialogInput.LabelledInput("Account Type", new DialogInput.TextInput({ fieldName: "Account Type" })),
              new DialogInput.LabelledInput("Routing Number", new DialogInput.TextInput({ fieldName: "Routing Number" })),
              new DialogInput.LabelledInput("Account Number", new DialogInput.TextInput({ fieldName: "Account Number" })),
              new DialogInput.LabelledInput("SWIFT Code", new DialogInput.TextInput({ fieldName: "SWIFT Code" })),
              new DialogInput.LabelledInput("IBAN Number", new DialogInput.TextInput({ fieldName: "IBAN Number" })),
              new DialogInput.LabelledInput("Pin", new DialogInput.TextInput({ fieldName: "PIN" })),
              new DialogInput.LabelledInput("Branch Address", new DialogInput.TextInput({ fieldName: "Branch Address" })),
              new DialogInput.LabelledInput("Branch Phone", new DialogInput.TextInput({ fieldName: "Branch Phone" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.DATABASE] = new I([
              new DialogInput.LabelledInput("Type", new DialogInput.TextInput({ fieldName: "Type" })),
              new DialogInput.LabelledInput("Hostname", new DialogInput.TextInput({ fieldName: "Hostname" })),
              new DialogInput.LabelledInput("Port", new DialogInput.TextInput({ fieldName: "Port" })),
              new DialogInput.LabelledInput("Database", new DialogInput.TextInput({ fieldName: "Database" })),
              new DialogInput.LabelledInput("Username", new DialogInput.TextInput({ fieldName: "Username" })),
              new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput({ fieldName: "Password" })),
              new DialogInput.LabelledInput("SID", new DialogInput.TextInput({ fieldName: "SID" })),
              new DialogInput.LabelledInput("Alias", new DialogInput.TextInput({ fieldName: "Alias" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.DRIVERS_LICENSE] = new I([
              new DialogInput.LabelledInput("Number", new DialogInput.TextInput({ fieldName: "Number" })),
              new DialogInput.LabelledInput("Expiration Date", new DialogInput.AlphaDateInput({ fieldName: "Expiration Date" })),
              new DialogInput.LabelledInput("License Class", new DialogInput.TextInput({ fieldName: "License Class" })),
              new DialogInput.LabelledInput("Name", new DialogInput.TextInput({ fieldName: "Name" })),
              new DialogInput.LabelledInput("Address", new DialogInput.TextInput({ fieldName: "Address" })),
              new DialogInput.LabelledInput("City / Town", new DialogInput.TextInput({ fieldName: "City / Town" })),
              new DialogInput.LabelledInput("State", new DialogInput.TextInput({ fieldName: "State" })),
              new DialogInput.LabelledInput("ZIP / Postal Code", new DialogInput.TextInput({ fieldName: "ZIP / Postal Code" })),
              new DialogInput.LabelledInput("Country", new DialogInput.TextInput({ fieldName: "Country" })),
              new DialogInput.LabelledInput("Date of Birth", new DialogInput.AlphaDateInput({ fieldName: "Date of Birth" })),
              new DialogInput.LabelledInput("Sex", new DialogInput.TextInput({ fieldName: "Sex" })),
              new DialogInput.LabelledInput("Height", new DialogInput.TextInput({ fieldName: "Height" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.EMAIL] = new I([
              new DialogInput.LabelledInput("Username", new DialogInput.TextInput({ fieldName: "Username" })),
              new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput({ fieldName: "Password" })),
              new DialogInput.LabelledInput("Server", new DialogInput.TextInput({ fieldName: "Server" })),
              new DialogInput.LabelledInput("Port", new DialogInput.TextInput({ fieldName: "Port" })),
              new DialogInput.LabelledInput("Type", new DialogInput.TextInput({ fieldName: "Type" })),
              new DialogInput.LabelledInput("SMTP Server", new DialogInput.TextInput({ fieldName: "SMTP Server" })),
              new DialogInput.LabelledInput("SMTP Port", new DialogInput.TextInput({ fieldName: "SMTP Port" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.HEALTH_INSURANCE] = new I([
              new DialogInput.LabelledInput("Company", new DialogInput.TextInput({ fieldName: "Company" })),
              new DialogInput.LabelledInput("Company Phone", new DialogInput.TextInput({ fieldName: "Company Phone" })),
              new DialogInput.LabelledInput("Policy Type", new DialogInput.TextInput({ fieldName: "Policy Type" })),
              new DialogInput.LabelledInput("Policy Number", new DialogInput.TextInput({ fieldName: "Policy Number" })),
              new DialogInput.LabelledInput("Group ID", new DialogInput.TextInput({ fieldName: "Group ID" })),
              new DialogInput.LabelledInput("Member Name", new DialogInput.TextInput({ fieldName: "Member Name" })),
              new DialogInput.LabelledInput("Member ID", new DialogInput.TextInput({ fieldName: "Member ID" })),
              new DialogInput.LabelledInput("Physician Name", new DialogInput.TextInput({ fieldName: "Physician Name" })),
              new DialogInput.LabelledInput("Physician Phone", new DialogInput.TextInput({ fieldName: "Physician Phone" })),
              new DialogInput.LabelledInput("Physician Address", new DialogInput.TextInput({ fieldName: "Physician Address" })),
              new DialogInput.LabelledInput("Co-pay", new DialogInput.TextInput({ fieldName: "Co-pay" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.IM] = new I([
              new DialogInput.LabelledInput("Type", new DialogInput.TextInput({ fieldName: "Type" })),
              new DialogInput.LabelledInput("Username", new DialogInput.TextInput({ fieldName: "Username" })),
              new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput({ fieldName: "Password" })),
              new DialogInput.LabelledInput("Server", new DialogInput.TextInput({ fieldName: "Server" })),
              new DialogInput.LabelledInput("Port", new DialogInput.TextInput({ fieldName: "Port" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.INSURANCE] = new I([
              new DialogInput.LabelledInput("Company", new DialogInput.TextInput({ fieldName: "Company" })),
              new DialogInput.LabelledInput("Policy Type", new DialogInput.TextInput({ fieldName: "Policy Type" })),
              new DialogInput.LabelledInput("Policy Number", new DialogInput.TextInput({ fieldName: "Policy Number" })),
              new DialogInput.LabelledInput("Expiration", new DialogInput.AlphaDateInput({ fieldName: "Expiration" })),
              new DialogInput.LabelledInput("Agent Name", new DialogInput.TextInput({ fieldName: "Agent Name" })),
              new DialogInput.LabelledInput("Agent Phone", new DialogInput.TextInput({ fieldName: "Agent Phone" })),
              new DialogInput.LabelledInput("URL", new DialogInput.TextInput({ fieldName: "URL" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.MEMBERSHIP] = new I([
              new DialogInput.LabelledInput("Organization", new DialogInput.TextInput({ fieldName: "Organization" })),
              new DialogInput.LabelledInput("Membership Number", new DialogInput.TextInput({ fieldName: "Membership Number" })),
              new DialogInput.LabelledInput("Member Name", new DialogInput.TextInput({ fieldName: "Member Name" })),
              new DialogInput.LabelledInput("Start Date", new DialogInput.AlphaDateInput({ fieldName: "Start Date" })),
              new DialogInput.LabelledInput("Expiration Date", new DialogInput.AlphaDateInput({ fieldName: "Expiration Date" })),
              new DialogInput.LabelledInput("Website", new DialogInput.TextInput({ fieldName: "Website" })),
              new DialogInput.LabelledInput("Telephone", new DialogInput.TextInput({ fieldName: "Telephone" })),
              new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput({ fieldName: "Password" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.CREDIT] = new I([
              new DialogInput.LabelledInput("Name on Card", new DialogInput.TextInput({ fieldName: "Name on Card" })),
              new DialogInput.LabelledInput("Type", new DialogInput.TextInput({ fieldName: "Type" })),
              new DialogInput.LabelledInput("Number", new DialogInput.TextInput({ fieldName: "Number" })),
              new DialogInput.LabelledInput("Security Code", new DialogInput.TextInput({ fieldName: "Security Code" })),
              new DialogInput.LabelledInput("Start Date", new DialogInput.AlphaDateInput({ fieldName: "Start Date", includeDay: !1 })),
              new DialogInput.LabelledInput(
                "Expiration Date",
                new DialogInput.AlphaDateInput({ fieldName: "Expiration Date", includeDay: !1 })
              ),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.SSN] = new I([
              new DialogInput.LabelledInput("Name", new DialogInput.TextInput({ fieldName: "Name" })),
              new DialogInput.LabelledInput("Number", new DialogInput.TextInput({ fieldName: "Number" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.SOFTWARE_LICENSE] = new I([
              new DialogInput.LabelledInput("License Key", new DialogInput.TextInput({ fieldName: "License Key" })),
              new DialogInput.LabelledInput("Licensee", new DialogInput.TextInput({ fieldName: "Licensee" })),
              new DialogInput.LabelledInput("Version", new DialogInput.TextInput({ fieldName: "Version" })),
              new DialogInput.LabelledInput("Publisher", new DialogInput.TextInput({ fieldName: "Publisher" })),
              new DialogInput.LabelledInput("Support Email", new DialogInput.TextInput({ fieldName: "Support Email" })),
              new DialogInput.LabelledInput("Website", new DialogInput.TextInput({ fieldName: "Website" })),
              new DialogInput.LabelledInput("Price", new DialogInput.TextInput({ fieldName: "Price" })),
              new DialogInput.LabelledInput("Purchase Date", new DialogInput.AlphaDateInput({ fieldName: "Purchase Date" })),
              new DialogInput.LabelledInput("Order Number", new DialogInput.TextInput({ fieldName: "Order Number" })),
              new DialogInput.LabelledInput("Number of Licenses", new DialogInput.TextInput({ fieldName: "Number of Licenses" })),
              new DialogInput.LabelledInput("Order Total", new DialogInput.TextInput({ fieldName: "Order Total" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.SSH_KEY] = new I([
              new DialogInput.LabelledInput("Bit Strength", new DialogInput.TextInput({ fieldName: "Bit Strength" })),
              new DialogInput.LabelledInput("Format", new DialogInput.TextInput({ fieldName: "Format" })),
              new DialogInput.LabelledInput("Passphrase", new DialogInput.TextInput({ fieldName: "Passphrase" })),
              new DialogInput.LabelledInput(
                "Private Key",
                new DialogInput.TextArea("noResize", {
                  fieldName: "Private Key",
                  inputButton: Strings.translateString("Copy"),
                  inputButtonHandler: function () {
                    this.dialog.vaultItem.copyPrivateKey(this.dialog.inputFields);
                  }
                })
              ),
              new DialogInput.LabelledInput("Public Key", new DialogInput.TextInput({ fieldName: "Public Key" })),
              new DialogInput.LabelledInput("Hostname", new DialogInput.TextInput({ fieldName: "Hostname" })),
              new DialogInput.LabelledInput("Date", new DialogInput.AlphaDateInput({ fieldName: "Date" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.WIFI] = new I([
              new DialogInput.LabelledInput("SSID", new DialogInput.TextInput({ fieldName: "SSID" })),
              new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput({ fieldName: "Password" })),
              new DialogInput.LabelledInput("Connection Type", new DialogInput.TextInput({ fieldName: "Connection Type" })),
              new DialogInput.LabelledInput("Connection Mode", new DialogInput.TextInput({ fieldName: "Connection Mode" })),
              new DialogInput.LabelledInput("Authentication", new DialogInput.TextInput({ fieldName: "Authentication" })),
              new DialogInput.LabelledInput("Encryption", new DialogInput.TextInput({ fieldName: "Encryption" })),
              new DialogInput.LabelledInput("Use 802.1X", new DialogInput.TextInput({ fieldName: "Use 802.1X" })),
              new DialogInput.LabelledInput("FIPS Mode", new DialogInput.TextInput({ fieldName: "FIPS Mode" })),
              new DialogInput.LabelledInput("Key Type", new DialogInput.TextInput({ fieldName: "Key Type" })),
              new DialogInput.LabelledInput("Protected", new DialogInput.TextInput({ fieldName: "Protected" })),
              new DialogInput.LabelledInput("Key Index", new DialogInput.TextInput({ fieldName: "Key Index" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.SERVER] = new I([
              new DialogInput.LabelledInput("Hostname", new DialogInput.TextInput({ fieldName: "Hostname" })),
              new DialogInput.LabelledInput("Username", new DialogInput.TextInput({ fieldName: "Username" })),
              new DialogInput.LabelledInput("Password", new DialogInput.PasswordInput({ fieldName: "Password" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.PASSPORT] = new I([
              new DialogInput.LabelledInput("Type", new DialogInput.TextInput({ fieldName: "Type" })),
              new DialogInput.LabelledInput("Name", new DialogInput.TextInput({ fieldName: "Name" })),
              new DialogInput.LabelledInput("Country", new DialogInput.TextInput({ fieldName: "Country" })),
              new DialogInput.LabelledInput("Number", new DialogInput.TextInput({ fieldName: "Number" })),
              new DialogInput.LabelledInput("Sex", new DialogInput.TextInput({ fieldName: "Sex" })),
              new DialogInput.LabelledInput("Nationality", new DialogInput.TextInput({ fieldName: "Nationality" })),
              new DialogInput.LabelledInput("Issuing Authority", new DialogInput.TextInput({ fieldName: "Issuing Authority" })),
              new DialogInput.LabelledInput("Date of Birth", new DialogInput.AlphaDateInput({ fieldName: "Date of Birth" })),
              new DialogInput.LabelledInput("Issued Date", new DialogInput.AlphaDateInput({ fieldName: "Issued Date" })),
              new DialogInput.LabelledInput("Expiration Date", new DialogInput.AlphaDateInput({ fieldName: "Expiration Date" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ])),
            (this.noteForms[Note.prototype.NOTE_TYPES.GENERIC] = new I(
              [new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { label: null })],
              ["noteContent"]
            )),
            (this.noteForms[Note.prototype.NOTE_TYPES.ADDRESS] = new I([
              new DialogInput.LabelledInput(
                "Title",
                new DialogInput.SelectInput(
                  [
                    { value: "mr", label: "Mr" },
                    { value: "mrs", label: "Mrs" },
                    { value: "ms", label: "Ms" },
                    { value: "dr", label: "Dr" }
                  ],
                  { fieldName: "Title" }
                )
              ),
              new DialogInput.LabelledInput("First Name", new DialogInput.TextInput({ fieldName: "First Name" })),
              new DialogInput.LabelledInput("Middle Name", new DialogInput.TextInput({ fieldName: "Middle Name" })),
              new DialogInput.LabelledInput("Last Name", new DialogInput.TextInput({ fieldName: "Last Name" })),
              new DialogInput.LabelledInput("Username", new DialogInput.TextInput({ fieldName: "Username" })),
              new DialogInput.LabelledInput(
                "Gender",
                new DialogInput.SelectInput(
                  [
                    { value: "m", label: "Male" },
                    { value: "f", label: "Female" },
                    { value: "o", label: "Other" }
                  ],
                  { fieldName: "Gender" }
                )
              ),
              new DialogInput.LabelledInput("Birthday", new DialogInput.AlphaDateInput({ fieldName: "Birthday" })),
              new DialogInput.LabelledInput("Company", new DialogInput.TextInput({ fieldName: "Company" })),
              new DialogInput.LabelledInput("Address 1", new DialogInput.TextInput({ fieldName: "Address 1" })),
              new DialogInput.LabelledInput("Address 2", new DialogInput.TextInput({ fieldName: "Address 2" })),
              new DialogInput.LabelledInput("Address 3", new DialogInput.TextInput({ fieldName: "Address 3" })),
              new DialogInput.LabelledInput("City / Town", new DialogInput.TextInput({ fieldName: "City / Town" })),
              new DialogInput.LabelledInput("County", new DialogInput.TextInput({ fieldName: "County" })),
              new DialogInput.LabelledInput("State", new StateDropdown({ fieldName: "State" })),
              new DialogInput.LabelledInput("Zip / Postal Code", new DialogInput.TextInput({ fieldName: "Zip / Postal Code" })),
              new DialogInput.LabelledInput("Country", new DialogInput.CountryInput({ fieldName: "Country" })),
              new DialogInput.LabelledInput("Timezone", new DialogInput.TimezoneInput({ fieldName: "Timezone" })),
              new DialogInput.LabelledInput("Email Address", new DialogInput.TextInput({ fieldName: "Email Address" })),
              new DialogInput.LabelledInput("Phone", new PhoneInput({ fieldName: "Phone" })),
              new DialogInput.LabelledInput("Evening Phone", new PhoneInput({ fieldName: "Evening Phone" })),
              new DialogInput.LabelledInput("Mobile Phone", new PhoneInput({ fieldName: "Mobile Phone" })),
              new DialogInput.LabelledInput("Fax", new PhoneInput({ fieldName: "Fax" })),
              new DialogInput.LabelledInput("Notes", new DialogInput.TextArea("", { fieldName: "Notes" }), { topAlign: !0 })
            ]));
        }),
        (NoteDialog.prototype.addAttachment = function (e) {
          var e;
          e &&
            (this.addedAttachments.push(e),
            (e = e.newDisplayObject()),
            this.containers.attachments ? this.containers.attachments.addChild(e) : this.initializeAttachmentContainer([e]));
        }),
        (NoteDialog.prototype.setNoteFields = function (e) {
          (e = e || Note.prototype.NOTE_TYPES.GENERIC), LPTools.removeDOMChildren(this.noteFormElement);
          var t = this.noteForms[e],
            n;
          t &&
            ((n = !1),
            null === t.element && (t.initialize(this), (n = !0)),
            this.noteFormElement.appendChild(t.element),
            (this.noteFormElement.scrollTop = 0),
            (this.inputFields.extra = t.inputs),
            n && this.adjustedView && t.inputs.adjustView(),
            this.setNoteTypeImage(e));
        }),
        (NoteDialog.prototype.add = function (e) {
          var t;
          new Note().addFromDialog(e, this.getGroup(e), this.data.saveOptions);
        }),
        function (e, t) {
          if (e) {
            for (var n = [], a = 0, l = e.length; a < l; ++a) n.push(e[a]._data);
            0 < n.length && (t.add = n);
          }
        }),
      d = function (e, t) {
        if (e) {
          for (var n = [], a = 0, l = e.length; a < l; ++a) n.push(e[a].getID());
          0 < n.length && (t.remove = n);
        }
      },
      I =
        ((NoteDialog.prototype.getData = function () {
          var e = DialogWithGroupInput.prototype.getData.apply(this, arguments);
          return (
            ((this.removedAttachments && 0 < this.removedAttachments.length) ||
              (this.addedAttachments && 0 < this.addedAttachments.length)) &&
              ((e.attacharraychanges = {}),
              s(this.addedAttachments, e.attacharraychanges),
              d(this.removedAttachments, e.attacharraychanges)),
            e
          );
        }),
        (NoteDialog.prototype.close = function (e) {
          var t;
          Dialog.prototype.close.apply(this, arguments) &&
            this.inputFields.notetype &&
            this.temporaryNoteTypeOptionValue &&
            ((t = this.temporaryNoteTypeOptionValue),
            this.inputFields.notetype.removeValue(this.temporaryNoteTypeOptionValue, Note.prototype.NOTE_TYPES.GENERIC),
            (this.noteTypeOptions = this.noteTypeOptions.filter(function (e) {
              return e.value !== t;
            })),
            delete this.noteForms[t],
            (this.temporaryNoteTypeOptionValue = null));
        }),
        (NoteDialog.prototype.handleSubmit = function (e) {
          VaultItemDialog.prototype.handleSubmit.call(this, e);
          var t = [],
            e = this.dialogType,
            n = this.itemType;
          ("undefined" !== u || 0 < u.length) &&
            (Object.keys(u).forEach(function (e) {
              u[e].isDirty && t.push(u[e].trackingName);
            }),
            "add" === e
              ? bg.sendLpImprove("vault_add_item_dialog_clicked", {
                  dirty_fields: JSON.stringify(t),
                  attachment: p.isAttachmentAdded ? "Yes" : "No",
                  favorite: p.isFavorite ? "Yes" : "No",
                  folder: p.isFolderFieldDirty ? "Yes" : "No",
                  item_type: n,
                  source: "Vault",
                  action: "Save",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                })
              : "edit" === e &&
                bg.sendLpImprove("vault_edit_item_dialog_clicked", {
                  dirty_fields: JSON.stringify(t),
                  attachment: p.isAttachmentAdded ? "Yes" : "No",
                  favorite: p.isFavorite ? "Yes" : "No",
                  folder: p.isFolderFieldDirty ? "Yes" : "No",
                  item_type: n,
                  source: "Vault",
                  action: "Save",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                }));
        }),
        function (e, t) {
          if (((this.inputs = new DialogInput.NestedFields()), (this.inputsArray = []), e instanceof Array))
            for (var n = 0, a = (this.inputsArray = e).length; n < a; ++n) {
              var l = e[n];
              this.inputs[l.field] = l;
            }
          (this.element = null), (this.$_element = null), (this.additionalClasses = t);
        });
    I.prototype.initialize = function (e) {
      for (
        var t = ["settings"],
          n =
            (this.additionalClasses && (t = t.concat(this.additionalClasses)),
            (this.element = LPTools.createElement("table", t)),
            (this.$_element = $(this.element)),
            LPTools.createElement("tbody")),
          a = 0,
          l = this.inputsArray.length;
        a < l;
        ++a
      ) {
        var o = this.inputsArray[a],
          i = o.build();
        i.setAttribute("class", "settingsRow"), n.appendChild(i), (o.dialog = e);
      }
      LPTools.addZebraStriping(n), this.element.appendChild(n), Strings.translate(this.element);
    };
  })(document);
