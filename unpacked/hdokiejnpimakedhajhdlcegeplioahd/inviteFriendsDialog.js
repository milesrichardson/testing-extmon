var InviteFriendsDialog = function (t) {
  Dialog.call(this, t, {
    additionalHeaderClasses: ["icon"],
    nextButtonText: Strings.translateString("Invite"),
    title: Strings.translateString("Invite Friends To Try LastPass"),
    buttonAlign: this.RIGHT_ALIGN
  });
};
(InviteFriendsDialog.prototype = Object.create(Dialog.prototype)),
  ((InviteFriendsDialog.prototype.constructor = InviteFriendsDialog).prototype.setup = function (t, e) {
    if ((Dialog.prototype.setup.apply(this, arguments), e.emails)) {
      for (var i = [], n = 0, a = e.emails.length; n < a; ++n) i.push(new ShareRecipient({ email: e.emails[n] }));
      (this.containers.invitees = new Container(i, { allowDrag: !1 })),
        this.containers.invitees.initialize(document.getElementById("inviteFriendsDialogContainer"));
    }
  }),
  (InviteFriendsDialog.prototype.getData = function () {
    var t = Dialog.prototype.getData.apply(this, arguments);
    if (((t.emails = []), this.containers.invitees))
      for (var e = this.containers.invitees.getItemChildren(), i = 0, n = e.length; i < n; ++i) t.emails.push(e[i].getEmail());
    return t;
  }),
  (InviteFriendsDialog.prototype.handleSubmit = function (t) {
    LPRequest.makeRequest(LPProxy.inviteFriends, { params: t });
  });
