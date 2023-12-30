(self.webpackChunk = self.webpackChunk || []).push([
  [4449],
  {
    58656: (e, t, n) => {
      n.r(t), n.d(t, { PerceptionMetricsSurveyView: () => d });
      var a = n(27378),
        l = n(62369),
        r = n(75105),
        i = n(54001),
        o = n(10526);
      const c = ({
        maxRating: e = 5,
        ratingLabels: t = ["Not at all useful", "Slightly useful", "Somewhat useful", "Very useful", "Extremely useful"],
        onChange: n,
        value: l,
        ariaLabel: r = "Rating",
        className: c,
        ratingStarsClassName: s,
        ratingLegendClassName: u,
        ratingLabelsClassName: m
      }) => {
        const [g, d] = a.useState(l),
          [p, S] = a.useState(void 0);
        a.useEffect(() => {
          d(l);
        }, [l]),
          a.useEffect(() => {
            void 0 !== g && n(g);
          }, [g]);
        const v = [...Array(e).keys()].map((e) => e + 1),
          b = void 0 !== p ? p : g;
        return a.createElement(
          "div",
          { "data-grammarly-part": "ui-kit-rating", role: "radiogroup", "aria-label": r, ...(0, i.Sh)(o.rating, c) },
          a.createElement(
            "div",
            { ...(0, i.Sh)(o.ratingStars, s), onMouseLeave: () => S(void 0) },
            v.map((e) => {
              const t = void 0 !== b && b >= e;
              return a.createElement("input", {
                key: `rating-${e}`,
                id: `rating-${e}`,
                type: "radio",
                name: "rating",
                checked: g === e,
                onChange: (e) => d(parseInt(e.target.value, 10)),
                value: e,
                onMouseEnter: (e) => {
                  const t = e.target;
                  S(parseInt(t.value, 10));
                },
                ...(0, i.Sh)(o.ratingStar, t ? o.ratingStarFilled : null)
              });
            })
          ),
          a.createElement(
            "div",
            { ...(0, i.Sh)(o.ratingLabels, m) },
            v.map((e) =>
              a.createElement(
                "label",
                {
                  key: `rating-label-${e}`,
                  htmlFor: `rating-${e}`,
                  ...(0, i.Sh)(b === e ? o.ratingLabelVisible : o.ratingLabelNotVisible)
                },
                t[e - 1]
              )
            )
          ),
          void 0 !== b
            ? null
            : a.createElement(
                "div",
                { ...(0, i.Sh)(o.ratingLegend, u) },
                a.createElement("div", null, t[0]),
                a.createElement("div", null, t[v.length - 1])
              )
        );
      };
      var s = n(18517);
      const u = {
          headerText: "Your feedback helps us improve!",
          acknowledgment: "Your feedback helps us improve.",
          acknowledgmentTitle: "Thank you!",
          title: "How useful is Grammarly when writing this document?"
        },
        m = ({ texts: e, maxRating: t, ratingLabels: n, onSelectRating: o, onClose: m }) => {
          const {
              headerText: g = u.headerText,
              acknowledgment: d = u.acknowledgment,
              acknowledgmentTitle: p = u.acknowledgmentTitle,
              title: S = u.title
            } = e,
            [v, b] = a.useState(!1),
            y = v ? null : a.createElement("div", { className: s.documentRatingHeader }, g),
            h = a.createElement(
              "div",
              { ...(0, i.Sh)(s.documentRatingContent, v ? s.documentRatingContentSubmitted : null) },
              a.createElement("div", { className: s.documentRatingContentTitle }, v ? p : S),
              v
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("div", { className: s.documentRatingContentSubtitle }, d),
                    a.createElement(l.z, { className: s.documentRatingContentDoneButton, onClick: m }, "Done")
                  )
                : a.createElement(c, {
                    maxRating: t,
                    ratingLabels: n,
                    className: s.documentRatingContentRadioGroup,
                    onChange: (e) => {
                      o(e), b(!0);
                    },
                    ariaLabel: S
                  })
            );
          return a.createElement(r.X, {
            headerIcon: "logo",
            headerContent: y,
            mainContent: h,
            dataGrammarlyPart: "surveys-document-rating",
            onClose: m
          });
        };
      var g = n(80800);
      const d = ({ survey: e, onSurveyResult: t, onClose: n }) => {
        const [l, r] = a.useState(null);
        return e.type === g.v0.Survey.Data.ScoreSurvey.type
          ? a.createElement(m, {
              texts: {
                acknowledgment: e.acknowledgment,
                acknowledgmentTitle: e.acknowledgment_title,
                headerText: e.box_text,
                title: e.title
              },
              maxRating: e.max_score,
              ratingLabels: e.score_labels,
              onSelectRating: (n) => {
                r({ placement: e.placement, type: e.type, score: n }), t({ placement: e.placement, type: e.type, score: n });
              },
              onClose: () => {
                null === l &&
                  (r({ placement: e.placement, type: e.type, score: g.v0.Survey.Data.ScoreSurvey.Score.declined }),
                  t({ placement: e.placement, type: e.type, score: g.v0.Survey.Data.ScoreSurvey.Score.declined })),
                  n();
              }
            })
          : null;
      };
    },
    10526: (e) => {
      e.exports = {
        rating: "OgcOL",
        ratingStars: "bnJtV",
        ratingStar: "AFzJ8",
        ratingStarFilled: "OomgT",
        ratingLabels: "k3A3G",
        ratingLabelVisible: "s3Oeu",
        ratingLabelNotVisible: "eYSEV",
        ratingLegend: "XTsZ_",
        spin: "boZXL"
      };
    },
    18517: (e) => {
      e.exports = {
        documentRatingHeader: "VcwpX",
        documentRatingContent: "Gir0T",
        documentRatingContentSubmitted: "p9Aqz",
        documentRatingContentTitle: "ox_hc",
        documentRatingContentSubtitle: "T8eaa",
        documentRatingContentRadioGroup: "BbMuf",
        documentRatingContentDoneButton: "H7SSn"
      };
    }
  }
]);
