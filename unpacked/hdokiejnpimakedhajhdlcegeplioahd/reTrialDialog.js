var ReTrialDialog = function (e) {
  Dialog.call(this, e, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !1,
    hidePreviousDialogs: !0,
    overlayDialog: !0,
    blurOverlay: !0
  });
};
(ReTrialDialog.prototype = Object.create(Dialog.prototype)),
  ((ReTrialDialog.prototype.constructor = ReTrialDialog).prototype.initialize = function (e) {
    function t(e) {
      bg.sendLpImprove("ro_retrial_prompt_clicked", {
        Action: e,
        IsRetry: l.IsRetry,
        Source: l.source,
        TrialLength: l.trialLength,
        TrialType: l.trialType
      });
    }
    function i() {
      document.getElementById("spinner").classList.add("is-hidden"), o.close();
    }
    function r() {
      document.getElementById("spinner").classList.remove("is-hidden"), t(l.action.dismiss), bg.setDisplayRetrialOffer(!1, i, i);
    }
    function a() {
      document.getElementById("spinner").classList.remove("is-hidden"),
        t(l.action.startTrial),
        bg.setDisplayRetrialOffer(
          !0,
          function () {
            try {
              localStorage.setItem(
                bg.get("g_username_hash") + "LPNotificationSuccessMessage",
                Strings.translateString("Congrats! Your free 30-day Premium trial has started.")
              );
            } catch (e) {}
            top.location.reload();
          },
          function () {
            (l.IsRetry = !0),
              i(),
              Notifications.displayErrorMessage("We couldn’t start your Premium trial. Don’t worry, you can try again.", {
                text: "Try again",
                callback: a
              });
          }
        );
    }
    var o, l;
    Dialog.prototype.initialize.apply(this, arguments),
      (o = this),
      "/acctsiframe.php" !== location.pathname &&
        ((l = {
          action: { dismiss: "Dismiss", learnMore: "Learn More", startTrial: "Start Trial" },
          IsRetry: !1,
          source: "Vault Pop Up",
          trialLength: 30,
          trialType: "Premium"
        }),
        bg.sendLpImprove("ro_retrial_prompt_shown", { Source: l.source, TrialLength: l.trialLength, TrialType: l.trialType }),
        document.querySelector("#reTrialDialog #closeReTrialDialog").addEventListener("click", r),
        document.querySelector("#reTrialDialog #startReTrial").addEventListener("click", a),
        document.querySelector("#reTrialDialog #reTrialPremiumLink").addEventListener("click", function () {
          t(l.action.learnMore);
        }),
        (document.querySelector("#reTrialDialog .media__figure img").src = "images/vault_4.0/paywall/premium-diamond.png"));
  });
