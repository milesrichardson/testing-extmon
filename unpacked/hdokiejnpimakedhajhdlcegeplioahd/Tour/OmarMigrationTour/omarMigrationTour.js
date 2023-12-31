var omarMigrationTour = (function (e, t, n, o, a, i) {
  "use strict";
  var r = {
      name: "omarMigrationTour",
      showDate: new Date(),
      isLater: !1,
      isTaken: !1,
      isNever: !1,
      isAvailable: function () {
        var t = "undefined" === e.get("g_sites") ? 0 : Object.keys(e.get("g_sites")).length,
          n = "undefined" === e.get("g_securenotes") ? 0 : Object.keys(e.get("g_securenotes")).length,
          t = 0 < e.MigrationBackground.getBlobVersion() && (s || this.isLater) && (1 < t || 0 < n),
          n;
        return (
          t &&
            localStorage &&
            (null === (n = JSON.parse(localStorage.getItem("omarMigrationTour")))
              ? localStorage.setItem("omarMigrationTour", JSON.stringify({ shown: 1 }))
              : 1 === n.shown && (t = !1)),
          t
        );
      },
      canStartAutomatically: function () {
        return !0;
      },
      tour: {
        welcomeStep: {
          class: "omar-migration-override migration-first-step",
          title: o.translateString("We've reorganized some things in your Vault!"),
          contentText1: o.translateString(
            "Credit cards, addresses, and other info can now be filled on any site - just like your passwords. None of your info is gone, it's just moved."
          ),
          contentImage: { src: "images/vault_4.0/extension-locations.svg", style: "omar-migration-header-image", placement: "after" },
          contentLink: {
            text: o.translateString("Read more."),
            href: "https://blog.lastpass.com/2019/03/new-improved-look-lastpass.html/",
            style: "read-more"
          },
          buttons: [
            {
              style: "btn-link",
              autoId: "migrationCloseBtn",
              sizeStyle: "col-1 btn-container-sm",
              text: o.translateString("Close"),
              action: "close"
            },
            {
              style: "btn-primary",
              autoId: "migrationChangedBtn",
              sizeStyle: "col-2 btn-container-lg",
              text: o.translateString("See What's Changed"),
              action: "start"
            }
          ],
          position: { targetId: "#header", align: "left", orientation: "top", offset: { left: 200, top: 150 } },
          openAction: function () {
            n.maximizeLeftMenu();
          },
          shadeOn: !0,
          exitAction: "exit"
        },
        steps: [
          {
            printTags: !0,
            hideXCloseBtn: !0,
            class: "omar-migration-override",
            title: o.translateString("Addresses, everything about you"),
            contentText1: o.translateString(
              "These can be auto-filled into any form. They contain your contact information: address, phone, email, and more"
            ),
            buttons: [
              { style: "btn-link", text: o.translateString("Close"), action: "close" },
              { style: "btn-primary", text: o.translateString("Next"), action: "next" }
            ],
            position: { targetId: "#addresses", align: "top", orientation: "left", offset: { left: 20, top: -25 }, arrowPosition: 50 },
            openAction: function () {
              a("#addresses").click();
            },
            closeAction: function () {
              a("#all").click();
            }
          },
          {
            printTags: !0,
            hideXCloseBtn: !0,
            class: "omar-migration-override",
            title: o.translateString("Payment cards, your digital wallet."),
            contentText1: o.translateString(
              "Payment cards include credit cards, debit cards, and anything else you use to shop. They can be auto-filled into any form."
            ),
            buttons: [
              { style: "btn-link", text: o.translateString("Close"), action: "close" },
              { style: "btn-primary", text: o.translateString("Next"), action: "next" }
            ],
            position: { targetId: "#payment-cards", align: "top", orientation: "left", offset: { left: 20, top: -25 }, arrowPosition: 50 },
            openAction: function () {
              a("#payment-cards").click();
            },
            closeAction: function () {
              a("#all").click();
            }
          },
          {
            printTags: !0,
            hideXCloseBtn: !0,
            class: "omar-migration-override migration-last-step",
            title: o.translateString("Bank accounts, secure in your Vault."),
            contentText1: o.translateString(
              "Bank accounts include your bank, routing, and account information for savings and checking accounts. They can be auto-filled into any form."
            ),
            buttons: [{ style: "btn-primary", text: o.translateString("Finish"), action: "close" }],
            position: { targetId: "#bank-accounts", align: "top", orientation: "left", offset: { left: 20, top: -25 }, arrowPosition: 50 },
            openAction: function () {
              a("#bank-accounts").click();
            },
            closeAction: function () {
              a("#all").click();
            }
          }
        ]
      }
    },
    s = !1,
    l = function (t) {
      t && (s = t);
    },
    c = function () {
      i.migrationBackground.wasMigration(l), i.migrationBackground.subscribeToStateOnce(c);
    };
  return (
    i.migrationBackground.subscribeToStateOnce(c),
    i.migrationBackground.wasMigration(l),
    i.migrationBackground.setMigrationState(!1),
    {
      getTourData: function () {
        return r;
      }
    }
  );
})(bg, LPFeatures, LPVault, Strings, $, Migrator);
