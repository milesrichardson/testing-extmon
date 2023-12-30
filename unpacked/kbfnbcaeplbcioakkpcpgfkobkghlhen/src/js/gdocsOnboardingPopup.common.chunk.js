(self.webpackChunk = self.webpackChunk || []).push([
  [9740],
  {
    24305: (e, t, r) => {
      r.d(t, { _: () => l });
      var a = r(27378),
        i = r(72926),
        n = r(96309),
        o = r(62369),
        c = r(39957),
        s = r.n(c);
      const l = (e) => {
        const { image: t, header: r, siteSpecificOnboardingService: c, actionItems: l } = e,
          [m] = a.useState(c.getBodyCopy());
        return a.createElement(
          "div",
          { className: s().wrapper, "data-grammarly-part": "siteSpecificOnboardingWrapper" },
          a.createElement("div", { className: s().imageContainer }, t),
          a.createElement(
            "div",
            { className: s().closeButton },
            a.createElement(n.P, {
              onClick: () => {
                c.trackDismissClick(), c.closePopup();
              },
              dataGrammarlyPart: "btnCloseSiteSpecificOnboarding"
            })
          ),
          a.createElement(
            "div",
            { className: s().content },
            a.createElement("h2", { className: s().header }, r),
            m,
            a.createElement(
              "div",
              { className: s().actionRow },
              a.createElement(
                o.z,
                {
                  className: s().cta,
                  onClick: () => {
                    c.trackOkClick(), c.closePopup();
                  },
                  dataGrammarlyPart: "btnFinishSiteSpecificOnboarding"
                },
                i.vZ
              ),
              l
            )
          )
        );
      };
    },
    16469: (e, t, r) => {
      r.r(t), r.d(t, { GdocsOnboardingPopup: () => d });
      var a = r(6294),
        i = r(27378),
        n = r(24305),
        o = r(72926);
      const c = () =>
        i.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", width: "116", height: "112", fill: "none" },
          i.createElement("path", {
            fill: "#8CA6F6",
            d: "M103.069 8H28.515C26.644 42.688-8.23 77.376 1.813 112.001h74.554C66.385 77.376 101.198 42.688 103.07 8Z"
          }),
          i.createElement("path", {
            fill: "#FEFAE9",
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "M112.069 1H37.515C35.644 35.688.77 70.376 10.813 105.001h74.554C75.385 70.376 110.198 35.688 112.07 1Z"
          }),
          i.createElement("path", {
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "M81.436 52.72h-51.22M68.959 71.436H22.105"
          }),
          i.createElement("path", {
            fill: "#FEFAE9",
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "m112.693 37.497-59.02 51.595-12.29 1.997 3.681-11.916 59.019-51.596c2.745-2.37 6.925-2.12 9.296.624 2.371 2.745 2.059 6.925-.686 9.296Z"
          }),
          i.createElement("path", {
            fill: "#1F243C",
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "m42.88 86.347-1.497 4.804 4.929-.811-3.431-3.993Z"
          }),
          i.createElement("path", {
            fill: "#F8E485",
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "m45.065 79.172 8.671 9.92 59.02-51.595c2.745-2.37 2.994-6.55.623-9.296-2.37-2.745-6.55-2.994-9.295-.623l-59.02 51.594Z"
          }),
          i.createElement("path", {
            fill: "#79A8F2",
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "m94.85 35.688 8.672 9.92 9.234-8.049c2.745-2.37 2.994-6.55.623-9.296-2.37-2.745-6.55-2.994-9.295-.623l-9.234 8.048Z"
          }),
          i.createElement("path", {
            fill: "#F8C6DA",
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "m103.085 28.45 8.672 9.92.936-.81c2.745-2.372 2.995-6.552.624-9.297-2.371-2.745-6.551-2.994-9.296-.623l-.936.81Z"
          }),
          i.createElement("path", {
            stroke: "#1F243C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            d: "M41.383 91.15H18.487M93.852 19.093H43.255M88.362 35.75H37.765"
          })
        );
      var s = r(39957),
        l = r.n(s);
      const m = a.Rd().appConfig.url.tourGdocs,
        d = (e) => {
          const { siteSpecificOnboardingService: t } = e,
            r = o.Ko.header;
          return i.createElement(n._, {
            header: r,
            siteSpecificOnboardingService: t,
            image: i.createElement(c, null),
            actionItems: i.createElement(
              "span",
              { className: l().grayText },
              o.Ko.notWorking,
              " ",
              i.createElement(
                "a",
                {
                  className: l().gDocsTourLink,
                  href: m,
                  onClick: () => {
                    t.trackTryClick();
                  },
                  "data-grammarly-part": "btnTryTourSiteSpecificOnboarding",
                  target: "_blank",
                  rel: "noreferrer"
                },
                o.Ko.tryThis
              )
            )
          });
        };
    },
    39957: (e) => {
      e.exports = {
        wrapper: "loySz",
        imageContainer: "fAwJZ",
        header: "KfHT7",
        content: "muhqV",
        actionRow: "hl7Ji",
        grayText: "r7VOX",
        closeButton: "OwfoC",
        cta: "Xa5i4",
        gDocsTourLink: "eBOrg"
      };
    }
  }
]);
