"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [1479],
  {
    11479: function (e, l, t) {
      t.r(l);
      var a = t(91640),
        o = t(48693),
        n = t(23381),
        s = t(57989),
        r = t(98223),
        i = t(27645),
        u = t(26807),
        d = t(57739),
        p = t(44629),
        m = t(27403);
      var c = (0, a.Z)("p", { target: "elcmypq2" })({
          name: "10nqmpa",
          styles: "font-size:12px;line-height:24px;color:#1d3049;margin-bottom:24px"
        }),
        x = (0, a.Z)(c, { target: "elcmypq1" })({ name: "18uqayh", styles: "margin-bottom:16px" }),
        y = (0, a.Z)(i.K, { target: "elcmypq0" })({ name: "1auzifb", styles: "width:100%;border-radius:4px" });
      l.default = function (e) {
        var l = e.skill,
          t = e.expanded,
          a = e.fromAllSkillsDialog,
          i = (0, s.J)();
        return (0, m.jsx)(r.j, {
          "data-component": "TourTheVault",
          skill: l,
          icon: (l.completed && (0, m.jsx)(d.r, null)) || (0, m.jsx)(p.r, null),
          title: (0, m.jsx)(o.Trans, { id: "Tour your LastPass vault" }),
          description: (0, m.jsx)(o.Trans, { id: "Explore your safe place" }),
          expanded: t,
          fromAllSkillsDialog: a,
          bodyTitle: (0, m.jsx)(o.Trans, { id: "Vault = Safety" }),
          automationId: "so-tour-the-vault",
          bodyContent: (0, m.jsx)(
            n.Fragment,
            null,
            (0, m.jsx)(
              c,
              null,
              (0, m.jsx)(o.Trans, {
                id: "The vault is your place to store passwords, notes, profiles for online shopping, documents, and more."
              })
            ),
            (0, m.jsx)(
              x,
              null,
              (0, m.jsx)(o.Trans, { id: "Everything you need to keep your online life rolling along smoothly and securely." })
            ),
            (0, m.jsx)(
              y,
              {
                red: !0,
                theme: u.Q,
                onClick: function () {
                  i.openVaultTour(),
                    i.complete(l.type),
                    i.hideExpandedSkillInDrawer(),
                    a && (i.hideSkillDetailsDialog(), i.toggleShowAllSkills());
                },
                className: "action-cta",
                "data-automation-id": "so-start-vault-tour-btn"
              },
              (0, m.jsx)(o.Trans, { id: "Start the vault tour" })
            )
          )
        });
      };
    }
  }
]);
