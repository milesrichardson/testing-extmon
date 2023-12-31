(document.title = gs("Change Password")),
  document.getElementById("lp_docwrite_mpwalert1") &&
    set_innertext(document.getElementById("lp_docwrite_mpwalert1"), gs("Security Notice")),
  document.getElementById("lp_docwrite_mpwalert3") &&
    set_innertext(
      document.getElementById("lp_docwrite_mpwalert3"),
      gs(
        "This is a potential security risk, because anyone who learns the password for that site may gain access to all of your accounts. LastPass strongly recommends that your Master Password should not be used on any other website."
      )
    ),
  document.getElementById("lp_docwrite_mpwalert4") &&
    set_innertext(
      document.getElementById("lp_docwrite_mpwalert4"),
      gs(
        "You may change your Master Password through the LastPass website by clicking the button below, or turn off Master Password security alerts using the links at the bottom of this page."
      )
    ),
  (document.getElementById("changeyourpassword").value = gs("Change Your Password")),
  set_innertext(document.getElementById("neverdomain"), gs("Do not show this message for this domain")),
  set_innertext(document.getElementById("neverever"), gs("Never show me this message again*")),
  set_innertext(document.getElementById("lp_docwrite_mpwnote"), gs("Note")),
  set_innertext(
    document.getElementById("lp_docwrite_mpwalert5"),
    gs(
      "These preferences are stored on your computer or device, you will see this message again if you delete browser information, or use a different computer. The best way to avoid this message is to change your LastPass Master Password."
    )
  ),
  "1" == getQueryVariable("requirechangereuse") &&
    (document.getElementById("lp_docwrite_mpwalert4") &&
      set_innertext(
        document.getElementById("lp_docwrite_mpwalert4"),
        gs(
          "You have been logged off from LastPass.  You must change your Master Password through the LastPass website by clicking the button below."
        )
      ),
    (document.getElementById("hideifreuse1").style.display = "none"),
    (document.getElementById("hideifreuse2").style.display = "none"),
    (document.getElementById("hideifreuse3").style.display = "none")),
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("changeyourpassword").addEventListener("click", function (e) {
      return getBG().changemasterpassword(), e.preventDefault(), closemole(), !1;
    }),
      document.getElementById("neverdomain").addEventListener("click", function (e) {
        return getBG().addDomainToMPWNever(), e.preventDefault(), closemole(), !1;
      }),
      document.getElementById("neverever").addEventListener("click", function (e) {
        return getBG().MPWNoNag(), e.preventDefault(), closemole(), !1;
      }),
      getBG().clear_badge(),
      (g_browseraction = 1);
    var e = document.location.href.match(/domain=([^&$]*)/),
      e;
    e &&
      ((e = e[1]), document.getElementById("lp_docwrite_mpwalert2")) &&
      set_innertext(
        document.getElementById("lp_docwrite_mpwalert2"),
        Strings.translateString(
          "LastPass detected that the password on %s has the same password as your LastPass account Master Password.",
          e
        )
      );
  });
