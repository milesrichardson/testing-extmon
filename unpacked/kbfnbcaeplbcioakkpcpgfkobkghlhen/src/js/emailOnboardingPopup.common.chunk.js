(self.webpackChunk = self.webpackChunk || []).push([
  [2473],
  {
    24305: (e, t, r) => {
      r.d(t, { _: () => s });
      var i = r(27378),
        n = r(72926),
        o = r(96309),
        a = r(62369),
        l = r(39957),
        c = r.n(l);
      const s = (e) => {
        const { image: t, header: r, siteSpecificOnboardingService: l, actionItems: s } = e,
          [m] = i.useState(l.getBodyCopy());
        return i.createElement(
          "div",
          { className: c().wrapper, "data-grammarly-part": "siteSpecificOnboardingWrapper" },
          i.createElement("div", { className: c().imageContainer }, t),
          i.createElement(
            "div",
            { className: c().closeButton },
            i.createElement(o.P, {
              onClick: () => {
                l.trackDismissClick(), l.closePopup();
              },
              dataGrammarlyPart: "btnCloseSiteSpecificOnboarding"
            })
          ),
          i.createElement(
            "div",
            { className: c().content },
            i.createElement("h2", { className: c().header }, r),
            m,
            i.createElement(
              "div",
              { className: c().actionRow },
              i.createElement(
                a.z,
                {
                  className: c().cta,
                  onClick: () => {
                    l.trackOkClick(), l.closePopup();
                  },
                  dataGrammarlyPart: "btnFinishSiteSpecificOnboarding"
                },
                n.vZ
              ),
              s
            )
          )
        );
      };
    },
    50552: (e, t, r) => {
      r.r(t), r.d(t, { EmailOnboardingPopup: () => l });
      var i = r(27378),
        n = r(24305),
        o = r(72926);
      const a = () =>
          i.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", width: "102", height: "113", fill: "none" },
            i.createElement("path", { fill: "#8CA6F6", d: "m2.19 60.65 37.446-24.19L77.13 60.65v51.669H2.19v-51.67Z" }),
            i.createElement("path", {
              fill: "#F8C6DA",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "m9.612 53.229 37.445-24.19 37.494 24.19v51.669H9.611v-51.67Z"
            }),
            i.createElement("path", {
              fill: "#F28C8C",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M27.609 39.537c12.723 16.255 13.884 29.898 13.933 30.479l-3.87.29c0-.145-1.21-13.11-13.111-28.399l3.048-2.37ZM1 49.116s1.935-6.918 7.74-5.564c5.806 1.355 4.403 11.224 6.387 17.127 1.983 5.902 9.289 3.773 13.062-3.29l3 2.322c-3.822 7.063-11.08 9.192-13.063 3.29-1.983-5.902-.58-15.772-6.386-17.127C5.935 44.52 4 51.438 4 51.438l-3-2.322Z"
            }),
            i.createElement("path", {
              fill: "#F8E485",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M70.23 56.179c5.855 2.419 9.918-5.515 8.757-13.74-1.16-8.273 1.016-10.643 4.548-9.385 4.209 1.5 8.66 5.418 13.546 4.74L101 34.99c-4.886.677-9.337-3.241-13.546-4.741-3.58-1.258-5.709 1.112-4.548 9.385 1.161 8.176-2.903 16.159-8.757 13.74l-3.918 2.806Z"
            }),
            i.createElement("path", {
              fill: "#638EEB",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M5.693 34.505a1.742 1.742 0 1 0 0-3.483 1.742 1.742 0 0 0 0 3.483ZM90.792 29.183a1.742 1.742 0 1 0 0-3.483 1.742 1.742 0 0 0 0 3.483Z"
            }),
            i.createElement("path", {
              fill: "#FEFAE9",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "m15.272 25.458 2.854 2.564a13.713 13.713 0 0 0 13.014 2.903 13.56 13.56 0 0 0-1.403 13.256l1.5 3.532-2.854-2.565a13.713 13.713 0 0 0-13.014-2.902A13.56 13.56 0 0 0 16.77 28.99l-1.5-3.532Z"
            }),
            i.createElement("path", {
              fill: "#638EEB",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M56.152 83.078c.92-29.173 12.192-54.475 12.337-54.766l-3.532-1.596c-.483 1.064-11.707 26.221-12.675 56.217l3.87.145Z"
            }),
            i.createElement("path", {
              fill: "#15C39A",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M49.04 20.33H45.22v66.812h3.822V20.33Z"
            }),
            i.createElement("path", {
              fill: "#F8E485",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "m47.106 2.769 3.386 10.304 10.837.049-8.708 6.386 3.29 10.305-8.805-6.338-8.757 6.338 3.29-10.305-8.709-6.386 10.789-.049L47.106 2.77Z"
            }),
            i.createElement("path", {
              fill: "#FEFAE9",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M70.908 19.12a17.79 17.79 0 0 0 3.338 9.386 17.79 17.79 0 0 0-9.385 3.338 17.79 17.79 0 0 0-3.338-9.386c3.386-.193 6.676-1.354 9.385-3.338Z"
            }),
            i.createElement("path", {
              fill: "#638EEB",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M65.683 5.235c-4.5-.435-5.805 3.29-5.805 3.29L56.926 3.3s4.451-3.144 7.596-2.08l1.161 4.015ZM21.9 21.25c4.112 1.886 6.58-1.162 6.58-1.162l1.064 5.903s-5.274 1.5-7.886-.58l.242-4.162ZM69.844 42.923c3.628-2.71 2.08-6.338 2.08-6.338l4.403 1.016s-1.21 5.322-4.258 6.677l-2.225-1.355ZM88.663 55.019c1.113-4.403-2.37-6.241-2.37-6.241l4.064-2.032s2.419 4.886.919 7.837l-2.613.436Z"
            }),
            i.createElement("path", {
              fill: "#F9FAFF",
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              d: "M9.612 53.227 47.057 82.11l37.494-28.883v51.669H9.611V53.227Z"
            }),
            i.createElement("path", {
              stroke: "#1F243C",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              strokeWidth: "1.002",
              d: "m47.057 82.11-27.77 22.786M47.347 82.11l27.77 22.786"
            })
          ),
        l = (e) => {
          const t = o.CQ.header;
          return i.createElement(n._, {
            image: i.createElement(a, null),
            header: t,
            siteSpecificOnboardingService: e.siteSpecificOnboardingService
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
