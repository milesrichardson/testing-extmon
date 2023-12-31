var SiteFeedbackDialog = function (e) {
  Dialog.call(this, e, { overlayDialog: !1, hidePreviousDialog: !0 });
};
(SiteFeedbackDialog.prototype = Object.create(Dialog.prototype)),
  ((SiteFeedbackDialog.prototype.constructor = SiteFeedbackDialog).prototype.initialize = function (e) {
    var a, t, l, i, n, o;
    Dialog.prototype.initialize.apply(this, arguments),
      (a = this),
      $("#sendFeedbackButton").unbind("click"),
      $("#submitConfirmation").hide(),
      (t = $("#currentSiteHeader").text()),
      bg.get_selected_tab_data(null, function (e) {
        (i = bg.lp_gettld_url(e.url)), $("#currentSiteHeader").text(t + " " + i);
      }),
      (o = $("div #whatActuallyHappened").find("select")).change(function () {
        var e = o.filter(":visible")[0],
          e = { Issue: (n = e.options[e.selectedIndex].value) };
        bg.LPModule.callService("Segment", "sendTypedEvent", ["FeedbackIssueClicked", e], function (e) {
          e && console.error(e);
        });
      }),
      $("#goalSelect").change(function () {
        var e = { Goal: (l = $("#goalSelect option:selected").val()) };
        bg.LPModule.callService("Segment", "sendTypedEvent", ["FeedbackGoalClicked", e], function (e) {
          e && console.error(e);
        }),
          $("#fill").attr("disabled", !1),
          $.each($("#whatActuallyHappened > select"), function (e, a) {
            $(a).attr("hidden", $("#goalSelect").val() != a.id),
              $(a.id + "Label").attr("hidden", $("#goalSelect").val() != a.id),
              $("#goalSelect").val() != a.id ? $(a).val("none") : $.noop();
          }),
          $("#whatActuallyHappened").attr("hidden", "other" == $("#goalSelect").val()),
          "other" == $("#goalSelect").val() ? $("#optionalLabel").addClass("hide") : $("#optionalLabel").removeClass("hide");
      }),
      $("select").change(function () {
        $("#feedbackText").attr("disabled", !("other" == $("#goalSelect").val() || a.isIssueSelected())), a.clearValidation();
      }),
      $("#feedbackText").focus(function () {
        a.clearValidation();
      }),
      $("#sendFeedbackButton").click(function () {
        a.isValid() && a.sendEvent(i, l, n);
      }),
      $("#resetPageButton").click(function () {
        a.resetPage();
      });
  }),
  (SiteFeedbackDialog.prototype.isIssueSelected = function () {
    return "none" != $("#fill").val() || "none" != $("#save").val() || "none" != $("#update").val();
  }),
  (SiteFeedbackDialog.prototype.resetPage = function () {
    $("#submitConfirmation").hide(),
      $("#mainView").show(),
      $("select").val("none"),
      $("#whatActuallyHappened").attr("hidden", !1),
      $("#whatActuallyHappened > select").attr("hidden", !0),
      $("#fill").attr("hidden", !1),
      $("#fill").attr("disabled", !0),
      $("#feedbackText").attr("disabled", !0),
      $("#optionalLabel").removeClass("hide"),
      $("#feedbackText").val(""),
      this.clearValidation();
  }),
  (SiteFeedbackDialog.prototype.clearValidation = function () {
    $(".warningBorder").removeClass("warningBorder"),
      $("#feedbackTextCaption").removeClass("warningText"),
      $(".warningText").attr("hidden", !0);
  }),
  (SiteFeedbackDialog.prototype.sendEvent = function (e, a, t) {
    var l = $("#feedbackText").val(),
      i;
    bg.LPModule.callService("Segment", "sendTypedEvent", ["FeedbackSent", { Domain: e, Goal: a, Issue: t, Description: l }], function (e) {
      e && console.error(e);
    }),
      $("#mainView").hide(),
      $("#submitConfirmation").show();
  }),
  (SiteFeedbackDialog.prototype.isValid = function () {
    var e;
    return "other" == $("#goalSelect").val() && "" == $("#feedbackText").val()
      ? ($("#feedbackText").addClass("warningBorder"), $("#feedbackTextCaption").addClass("warningText"), !1)
      : "none" == $("#goalSelect").val()
      ? ($("#goalSelect").addClass("warningBorder"), $("#goalSelectWarning").attr("hidden", !1), !1)
      : "none" != (e = $("#" + $("#goalSelect").val())).val() ||
        (e.addClass("warningBorder"), $("#issueSelectWarning").attr("hidden", !1), !1);
  });
