ExtensionOmarMigration = (function (e) {
  var a = $(e.body),
    i = 0,
    t,
    n = function () {
      var e, a, t, n, o;
      switch (i) {
        case 1:
          (e = "The new LastPass is waiting"),
            (a = "Bold, fast, and easy to navigate"),
            (t = "Organized the way you live and work"),
            (n = "Built for sharing passwords and more"),
            (o = "omarVaultMigrationPhase1");
          break;
        case 2:
          (e = "Why wait 12 days? Get the new LastPass now!"),
            (a = "Bold, fast, and easy to navigate"),
            (t = "Organized the way you live and work"),
            (n = "Built for sharing passwords and more"),
            (o = "omarVaultMigrationPhase2");
          break;
        case 3:
          (e = "The time has come, the time is now"),
            (a = "Update LastPass. We’ll show you how."),
            (n = t = ""),
            (o = "omarVaultMigrationPhase3");
          break;
        default:
          r();
      }
      3 === i
        ? (document.getElementById("omarVaultMigrationHeaderPhase3").innerHTML = e)
        : (document.getElementById("omarVaultMigrationHeader").innerHTML = e),
        (document.getElementById("omarVaultMigrationText1").innerHTML = a),
        (document.getElementById("omarVaultMigrationText2").innerHTML = t),
        (document.getElementById("omarVaultMigrationText3").innerHTML = n),
        (document.getElementById("omarVaultMigrationImg").src = "images/omarVaultMigration/" + o + ".svg"),
        $("#omarVaultMigrationButton").click(function () {
          bg.sendLpImprove("vault_migration_notification_clicked", { version: i }),
            bg.openURL("https://lastpass.com/?ac=1"),
            bg.sendLpImprove("logout_clicked", { source: "icon" }),
            bg.lpevent("m_lo"),
            bg.loggedOut(!1, "menu"),
            LPPlatform.closePopup(!0);
        });
    };
  function r() {
    a.removeClass("panelIsActive"),
      $("#omaVaultMigrationPanel").remove(),
      (document.getElementById("innerWrapper").style.opacity = "100%"),
      ExtensionDropdown.setSize();
  }
  return {
    initialize: function (e) {
      var e;
      3 === (i = e)
        ? ((e = document.getElementById("panelContainer")),
          $("#panelContainer").remove(),
          $("#container").append(e),
          document.getElementById("panelContainer").setAttribute("id", "panelContainerOmarPhase3"),
          a.addClass("omarMigrationphase3 extensionOmarMigration panelIsActive"),
          (document.getElementById("innerWrapper").style.opacity = "0.1"))
        : a.addClass("extensionOmarMigration panelIsActive"),
        n(),
        bg.sendLpImprove("vault_migration_notification_seen", { version: i });
    }
  };
})(document);
