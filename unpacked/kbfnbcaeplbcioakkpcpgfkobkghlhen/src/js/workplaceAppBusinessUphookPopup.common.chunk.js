(self.webpackChunk = self.webpackChunk || []).push([
  [47],
  {
    29114: (e, t, a) => {
      a.r(t), a.d(t, { WorkplaceAppBusinessPopup: () => c });
      var s = a(27378),
        o = a(3997),
        r = a(62369),
        n = a(42356),
        p = a(56379);
      const l = [
          "Confidently write and send error-free messages",
          "Consistently communicate your brand’s voice",
          "Measure and drive better team communication"
        ],
        c = (e) => {
          const { siteCategory: t } = e,
            a = (0, n.cs)(p.gButtonPopup, p.businessUphookPopup);
          return s.createElement(
            "div",
            { className: a, "data-grammarly-part": "workplaceAppBusinessUphookPopup" },
            s.createElement("div", { className: p.graphics }),
            s.createElement("div", { className: p.gbIcon }),
            s.createElement("h1", { className: p.title }, "Designed to help teams write better at work"),
            s.createElement(
              "ul",
              { className: p.listContainer },
              l.map((e) => s.createElement("li", { key: e, className: p.listItem }, s.createElement("div", { className: p.checkmark }), e))
            ),
            s.createElement(
              "div",
              { className: p.buttonContainer },
              s.createElement(
                r.z,
                {
                  dataGrammarlyPart: "workplaceAppUphookFollowCtaButton",
                  kind: "primary",
                  className: p.ctaButton,
                  onClick: () => {
                    e.onBusinessUphookPopupFollowCta({ placement: o.AZ.workplaceApp, siteCategory: t });
                  }
                },
                "Learn More"
              ),
              s.createElement(
                r.z,
                {
                  dataGrammarlyPart: "workplaceAppUphookDismissButton",
                  kind: "transparent-hoverable",
                  className: p.dismissButton,
                  onClick: () => {
                    e.closeBusinessPopup({ placement: o.AZ.workplaceApp, siteCategory: t }), e.remove();
                  }
                },
                "Dismiss"
              )
            )
          );
        };
    },
    56379: (e) => {
      e.exports = {
        gButtonPopup: "e9tKV",
        businessUphookPopup: "KPVPk",
        showWrapper: "CrLpG",
        flipped: "GHw_9",
        graphics: "g0XOl",
        gbIcon: "vANIa",
        title: "Rp_pV",
        listContainer: "qroSM",
        listItem: "SCHgC",
        checkmark: "WUOfR",
        buttonContainer: "knZT8",
        ctaButton: "y07bE",
        dismissButton: "tneoq"
      };
    }
  }
]);
