(self.webpackChunk = self.webpackChunk || []).push([
  [3896],
  {
    35111: (e, t, n) => {
      var i = n(91980),
        a = "chrome-extension://__MSG_@@extension_id__/",
        r = "moz-extension://__MSG_@@extension_id__/",
        o = "safari-web-extension://__MSG_@@extension_id__/",
        l = self.GR_RESOURCE_ROOT || a,
        d = self.GR_RESOURCE_ROOT || r,
        s = self.GR_RESOURCE_ROOT || o;
      e.exports = {
        __css: i.toString().replace(new RegExp(a, "g"), l).replace(new RegExp(r, "g"), d).replace(new RegExp(o, "g"), s),
        ...i.locals
      };
    },
    98018: (e, t, n) => {
      n.r(t), n.d(t, { CitationBuilderIntegrationLayout: () => f, citationButtonPositionToStyle: () => y });
      var i = n(27378),
        a = n(85441),
        r = n(45854),
        o = n(41572),
        l = n(91831),
        d = n(44552),
        s = n(62447),
        c = n(89894),
        u = n(33678),
        m = n(50474),
        g = n(95574);
      class p {
        constructor() {
          (this._flags = new Set()),
            (this.actions = {
              openUrl: (e) =>
                g.vM(() => {
                  throw new Error("Not allowed");
                }),
              openPopup: (e) =>
                g.vM(() => {
                  throw new Error("Not allowed");
                })
            }),
            this._flags.add(u.a.Flag.supportsSVGDominantBaseline);
        }
        has(e) {
          return this._flags.has(e);
        }
      }
      const y = (e) => ({
        position: "fixed",
        [e.horizontalLocation]: c.ux.px(e.offsetX),
        [e.verticalLocation]: c.ux.px(e.offsetY),
        zIndex: 9999,
        direction: "ltr",
        "--rem": 16
      });
      class f {
        render(e, t, n, c) {
          const g = (0, r.I)(m.m.getConfig((0, a.nD)(n) ? "mac" : "windows")),
            f = self.document,
            h = l.V.get({ monitorAs: "citation-builder" }).inject(
              d.EM.fromDocument(self.document, "grammarly-citation-builder"),
              d.zs.appendChild(f.documentElement),
              s.G7.showWhenLoaded(
                i.createElement(
                  () =>
                    i.createElement(
                      "div",
                      { style: y(t.position) },
                      i.createElement(
                        u.a.Context.Provider,
                        { value: new p() },
                        i.createElement(
                          m.m.Context.Provider,
                          { value: g.denali },
                          i.createElement(
                            i.Suspense,
                            { fallback: i.createElement(i.Fragment, null) },
                            i.createElement(
                              o.L,
                              { chunkName: "citationBuilderIntegration" },
                              i.createElement(e, { viewModel: t, experimentClient: c })
                            )
                          )
                        )
                      )
                    ),
                  null
                )
              )
            );
          return { dispose: () => h.dispose() };
        }
      }
    },
    27822: (e, t, n) => {
      n.r(t), n.d(t, { GenerationModel: () => E });
      var i = n(73975),
        a = n(57050),
        r = n(40327),
        o = n(64015),
        l = n(66013),
        d = n(61902),
        s = n(95574),
        c = n(95195),
        u = n(67311);
      const m = (e) => new u.com.grammarly.citations.model.input.Author(e.firstName, e.lastName, e.middleName || null, e.suffix || null),
        g = (e) =>
          void 0 !== (null == e ? void 0 : e.year) ? new u.com.grammarly.citations.model.input.Date(e.year, e.month, e.day) : void 0,
        p = (e) => new u.com.grammarly.citations.model.input.TimeStamp(e.hour, e.minute, e.second),
        y = (e, t) =>
          new u.com.grammarly.citations.generation.CitationGeneratorFactory().getGenerator(
            ((e) => {
              switch (e) {
                case l.Tk.Style.apa:
                  return u.com.grammarly.citations.model.input.CitationFormat.APA;
                case l.Tk.Style.mla:
                  return u.com.grammarly.citations.model.input.CitationFormat.MLA;
                case l.Tk.Style.chicago:
                  return u.com.grammarly.citations.model.input.CitationFormat.Chicago;
              }
            })(e),
            ((e) => {
              switch (e) {
                case d._.Kind.wikipedia:
                  return u.com.grammarly.citations.model.input.SourceType.Wikipedia;
                case d._.Kind.journalArticle:
                  return u.com.grammarly.citations.model.input.SourceType.Journal;
                case d._.Kind.magazineArticle:
                  return u.com.grammarly.citations.model.input.SourceType.Magazine;
                case d._.Kind.website:
                  return u.com.grammarly.citations.model.input.SourceType.Website;
                case d._.Kind.book:
                  return u.com.grammarly.citations.model.input.SourceType.Book;
                case d._.Kind.image:
                  return u.com.grammarly.citations.model.input.SourceType.Image;
                case d._.Kind.movie:
                  return u.com.grammarly.citations.model.input.SourceType.Movie;
                case d._.Kind.onlineVideo:
                  return u.com.grammarly.citations.model.input.SourceType.OnlineVideo;
                case d._.Kind.generativeAi:
                  return u.com.grammarly.citations.model.input.SourceType.GenerativeAI;
              }
            })(t)
          ),
        f = (e) => ({
          fieldName: void 0 === e.fieldName || null === e.fieldName ? void 0 : e.fieldName,
          value: e.value,
          italicize: Boolean(e.italicize),
          isPlaceholder: e.isPlaceholder
        }),
        h = (e, t) =>
          (0, r.pipe)(
            () => e.generateFullCitation(t, []),
            s.vM,
            c.map((e) => ({ result: e.result.map(f), missingOrInvalidKeyFields: e.invalidFields }))
          );
      var S = n(55649),
        v = n(5114),
        b = n(55415),
        k = n(23239),
        _ = n(9172);
      const w = i.yv,
        x = (0, o.jj)(w),
        C = v.map(x);
      var E;
      !(function (e) {
        let t;
        (e.standardGeneratorFactory = (e, t) => (0, r.pipe)(() => y(e.style, t), s.vM)),
          (e.create = ({
            builderCSState: e,
            actions: t,
            dynamicConfig: n,
            citation: i,
            detectedSourceType: o,
            telemetry: y,
            generatorFactory: w
          }) => {
            const E = S.Y.create("CitationBuilder.GenerationModel.create"),
              K = k.h.create(o),
              I = K.view(v.getOrElse(() => d._.defaultKind)),
              F = k.h.create(l.Tk.parsedToEditingInput(i.get())),
              T = k.h.create(l.Tk.parsedToEditingInput(i.get())),
              q = k.h.combine(e, I, w),
              B = (e, t, n) => {
                const i = ((e, t) => {
                    var n, i, a, o;
                    switch (t) {
                      case d._.Kind.wikipedia:
                        return new u.com.grammarly.citations.model.input.GenerationInput(
                          null !== (i = null === (n = e[d.S.authors]) || void 0 === n ? void 0 : n.map(m)) && void 0 !== i ? i : null,
                          e[d.S.title],
                          null,
                          (0, r.pipe)(e[d.S.published], g),
                          null,
                          null,
                          null,
                          null,
                          null,
                          e[d.S.url],
                          e[d.S.websiteName],
                          (0, r.pipe)(e[d.S.retrievalDate], g),
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                        );
                      case d._.Kind.generativeAi:
                        return new u.com.grammarly.citations.model.input.GenerationInput(
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          e[d.S.company],
                          e[d.S.productName],
                          e[d.S.modelVersion],
                          e[d.S.modelType],
                          e[d.S.promptText],
                          e[d.S.promptText],
                          e[d.S.promptDescription],
                          null,
                          null
                        );
                      case d._.Kind.journalArticle:
                      default:
                        return new u.com.grammarly.citations.model.input.GenerationInput(
                          null !== (o = null === (a = e[d.S.authors]) || void 0 === a ? void 0 : a.map(m)) && void 0 !== o ? o : null,
                          e[d.S.title],
                          e[d.S.periodicalTitle],
                          (0, r.pipe)(e[d.S.published], g),
                          null,
                          e[d.S.volume],
                          e[d.S.issue],
                          e[d.S.doi],
                          void 0 !== e[d.S.firstPage]
                            ? [new u.com.grammarly.citations.model.input.PagesRange(e[d.S.firstPage], e[d.S.lastPage])]
                            : null,
                          e[d.S.url],
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                        );
                    }
                  })(t, I.get()),
                  a = (0, r.pipe)(
                    e,
                    c.chain((e) => h(e, i))
                  ),
                  o = ((e) =>
                    new u.com.grammarly.citations.model.input.GenerationInput(
                      void 0 === e.authors || 0 === e.authors.length ? void 0 : e.authors.map(m),
                      e.title,
                      e.periodicalTitle,
                      e.publishingDate && (0, r.pipe)(e.publishingDate, g),
                      e.publishingYear,
                      e.volume,
                      e.issue,
                      e.doi,
                      void 0 !== e.pagesRange && e.pagesRange.length > 0
                        ? e.pagesRange.map((e) => new u.com.grammarly.citations.model.input.PagesRange(e.startPage, e.endPage))
                        : void 0,
                      e.url,
                      e.websiteName,
                      e.accessedDate && (0, r.pipe)(e.accessedDate, g),
                      e.publisher,
                      void 0 !== e.translators && e.translators.length > 0 ? e.translators.map(m) : void 0,
                      e.publicationCity,
                      e.edition,
                      void 0 !== e.editors && e.editors.length > 0 ? e.editors.map(m) : void 0,
                      e.university,
                      e.dissertationType,
                      e.database,
                      e.publicationNumber,
                      e.lectureType,
                      e.conferenceTitle,
                      e.organization,
                      e.venue,
                      e.city,
                      e.location,
                      void 0 !== e.directors && e.directors.length > 0 ? e.directors.map(m) : void 0,
                      e.studio,
                      void 0 !== e.actors && e.actors.length > 0 ? e.actors.map(m) : void 0,
                      e.movieLength && p(e.movieLength),
                      e.username,
                      e.timestamp && p(e.timestamp),
                      e.bibleVersion,
                      e.bibleBook,
                      e.bibleChapter,
                      null,
                      [],
                      void 0 !== e.artists && e.artists.length > 0 ? e.artists.map(m) : void 0,
                      e.imageDescription,
                      e.imageSource,
                      e.imageType,
                      e.company,
                      e.productName,
                      e.modelVersion,
                      e.modelType,
                      e.promptText,
                      e.promptText,
                      e.promptDescription,
                      null,
                      null
                    ))(n),
                  l = (0, r.pipe)(
                    e,
                    c.chain((e) => h(e, o))
                  ),
                  y = (0, r.pipe)(
                    e,
                    c.chain((e) =>
                      ((e, t) =>
                        (0, r.pipe)(
                          () =>
                            e.generateInTextCitation(t, [
                              new u.com.grammarly.citations.model.generation.FieldPlaceholder("inTextPagesCited", "[Insert page number]")
                            ]),
                          s.vM,
                          c.map((e) => ({ result: e.result.map(f), missingOrInvalidKeyFields: e.invalidFields }))
                        ))(e, o)
                    )
                  );
                return {
                  fullCitation: l,
                  inTextCitation: y,
                  fieldsMissedInParsing: (0, r.pipe)(
                    a,
                    c.map((e) => e.missingOrInvalidKeyFields.filter((e) => void 0 === n[e])),
                    v.fromEither
                  ),
                  currentlyMissingFields: (0, r.pipe)(
                    a,
                    c.map((e) => e.missingOrInvalidKeyFields),
                    c.map((e) => e.filter((e) => void 0 === n[e])),
                    v.fromEither
                  ),
                  invalidFields: (0, r.pipe)(
                    l,
                    c.map((e) => e.missingOrInvalidKeyFields),
                    c.map((e) => e.filter((e) => void 0 !== n[e])),
                    v.fromEither
                  )
                };
              },
              N = k.h.combine(q, i, T, B),
              D = k.h.combine(q, i, F, B),
              M = (e) => (t) => {
                const i = `Failed to generate citation - ${e}`;
                return y.citationBuilder.error(e, i, (0, _.ex)(n), t), E.error(i, t), v.none;
              };
            return {
              sourceType: K,
              setSourceType: (e) => {
                K.set(v.some(e));
              },
              setStyle: (e) => t.setCitationBuilderStyle(e),
              style: e.view("style"),
              parsedCitation: i,
              inTextCitation: N.view((0, a.ls)(({ inTextCitation: e }) => e, c.fold(M("generationIntext"), v.some))),
              fullCitation: N.view((0, a.ls)(({ fullCitation: e }) => e, c.fold(M("generationFull"), v.some))),
              fieldsMissedInParsing: N.view((0, a.ls)(({ fieldsMissedInParsing: e }) => e, C)),
              editedFullCitation: D.view((0, a.ls)(({ fullCitation: e }) => e, c.fold(M("generationFull"), v.some))),
              isCitationEdited: () => !b.Xy(T.get(), l.Tk.parsedToEditingInput(i.get())),
              currentlyMissingFields: N.view((0, a.ls)(({ currentlyMissingFields: e }) => e, C)),
              invalidEditingFields: D.view((0, a.ls)(({ invalidFields: e }) => e, C)),
              requiredKeyFields: q.view((0, a.ls)(c.map((0, a.ls)((e) => e.getRequiredFields(), x)), v.fromEither)),
              secondaryFields: q.view((0, a.ls)(c.map((0, a.ls)((e) => e.getSecondaryFields(), x)), v.fromEither)),
              currentInput: F,
              committedInput: T,
              commitInput: () => T.set(F.get()),
              cancelInput: () => F.set(T.get()),
              regenerateInput: () => {
                F.set(l.Tk.parsedToEditingInput(i.get())), T.set(l.Tk.parsedToEditingInput(i.get()));
              }
            };
          }),
          (function (e) {
            e.generatedCitationToRtf = function (e) {
              return e.result.reduce((e, t) => e + (t.italicize ? `<i>${t.value}</i>` : t.value), "");
            };
          })((t = e.Utils || (e.Utils = {})));
      })(E || (E = {}));
    },
    9611: (e, t, n) => {
      n.r(t), n.d(t, { ParsingModel: () => xe, toCitationModel: () => Ee });
      var i = n(57050),
        a = n(45614),
        r = n(66013),
        o = n(61902),
        l = n(22232);
      function d(e, { editing: t }, n, i) {
        return (a) => {
          const { required: r, secondary: d } = (function (e) {
              switch (e) {
                case o._.Kind.wikipedia:
                  return { required: u, secondary: [] };
                case o._.Kind.journalArticle:
                case o._.Kind.magazineArticle:
                  return { required: s, secondary: c };
                case o._.Kind.book:
                  return { required: m, secondary: g };
                case o._.Kind.image:
                  return { required: p, secondary: y };
                case o._.Kind.onlineVideo:
                  return { required: f, secondary: h };
                case o._.Kind.website:
                  return { required: S, secondary: v };
                case o._.Kind.movie:
                  return { required: b, secondary: k };
                case o._.Kind.generativeAi:
                  return { required: _, secondary: w };
                default:
                  (0, l.vE)(e);
              }
            })(e),
            x = r.filter((e) => void 0 === a[e]),
            C = r.length - x.length,
            E = d.filter((e) => void 0 === a[e]),
            K = t ? C >= n : 0 === x.length;
          return (0 === x.length && 0 === E.length) || i(e, { required: x, secondary: E, validationPassed: K }), K;
        };
      }
      const s = [o.S.title, o.S.published, o.S.authors, o.S.periodicalTitle],
        c = [o.S.volume, o.S.issue, o.S.doi, o.S.url, o.S.firstPage, o.S.lastPage, o.S.retrievalDate],
        u = [o.S.title, o.S.published, o.S.retrievalDate, o.S.url, o.S.authors, o.S.websiteName],
        m = [o.S.title, o.S.published, o.S.authors, o.S.publisher],
        g = [o.S.url, o.S.doi, o.S.edition, o.S.translators, o.S.firstPage, o.S.lastPage, o.S.publicationCity, o.S.editors, o.S.volume],
        p = [o.S.title, o.S.published],
        y = [o.S.authors, o.S.websiteName, o.S.retrievalDate, o.S.imageSource, o.S.imageType, o.S.url, o.S.publisher, o.S.imageDescription],
        f = [o.S.username, o.S.published, o.S.url, o.S.title, o.S.websiteName],
        h = [o.S.authors],
        S = [o.S.title, o.S.url, o.S.websiteName],
        v = [o.S.authors, o.S.retrievalDate, o.S.published],
        b = [o.S.directors, o.S.title],
        k = [o.S.published, o.S.studio, o.S.actors, o.S.movieLength, o.S.url],
        _ = [o.S.company, o.S.productName, o.S.promptText, o.S.promptDescription],
        w = [o.S.modelVersion, o.S.modelType];
      var x = n(11064),
        C = n(53860),
        E = n(55649),
        K = n(5114),
        I = n(71249),
        F = n(83078),
        T = n(95195),
        q = n(26328);
      function B(e = { element: () => K.none, string: () => K.none, object: () => K.none }) {
        const t = { ...{ element: () => K.none, string: () => K.none, object: () => K.none }, ...e };
        return K.chain(
          (0, i.ls)(
            I.UI((e) => {
              return (n = e) instanceof HTMLElement || n instanceof Document ? t.element(e) : N(e) ? t.string(e) : t.object(e);
              var n;
            }),
            I.hX(K.isSome),
            I.vP(K.Applicative),
            K.map(I.xH),
            K.filter(I.Od)
          )
        );
      }
      function N(e) {
        return "string" == typeof e || e instanceof String;
      }
      function D(e) {
        return "object" == typeof e && !(e instanceof String);
      }
      function M(e) {
        return (0, i.zG)(
          (function (e) {
            return (
              (t = e),
              (0, i.zG)(t, K.exists(I.yW(N)))
                ? (0, i.zG)(
                    e,
                    K.map(I.UI((e) => e.trim())),
                    K.filter((e) => e.length > 0)
                  )
                : (L.debug("Failed to convert to string array", e), K.none)
            );
            var t;
          })(e),
          K.chain(I.YM)
        );
      }
      function G(e) {
        return (0, i.zG)(
          e,
          K.filter((e) => "0" !== e)
        );
      }
      function z(e) {
        return (0, i.zG)(e, M, K.chain((0, i.ls)(o._.KindC.decode, K.fromEither)));
      }
      const A = ["d MMMM yyyy", "d MMM yyyy", "d. MMMM yyyy", "yyyy/MM"];
      function P(e) {
        return (0, i.ls)(
          M,
          K.chain((t) =>
            (0, i.zG)(
              K.some(Date.parse(t)),
              K.filter((e) => Number.isInteger(e)),
              F.vx(
                (function (e, t) {
                  return (0, i.zG)(
                    A.reduce(
                      (n, a) =>
                        K.isSome(n)
                          ? n
                          : (0, i.zG)(
                              K.some(C.ou.fromFormat(e, a, { locale: t })),
                              K.filter((e) => e.isValid)
                            ),
                      K.none
                    ),
                    K.map((e) => e.toMillis())
                  );
                })(t, e)
              )
            )
          ),
          K.map((e) =>
            (function (e) {
              return { year: e.getUTCFullYear(), day: e.getUTCDate(), month: e.getUTCMonth() + 1 };
            })(new Date(e))
          )
        );
      }
      const L = E.Y.create("CitationBuilder.Parser.Utils");
      function V(e) {
        return (
          L.debug("Converting to Authors array", e),
          (t = e),
          (0, i.zG)(
            t,
            K.exists((e) => I.yW(D)(e) && e.length > 0)
          )
            ? (0, i.zG)(
                e,
                K.chain(
                  (0, i.ls)(
                    I.fw(K.option)(
                      (0, i.ls)(
                        r.Tk.AuthorT.decode,
                        T.mapLeft((e) => (L.debug("Failed to convert to author", e), e)),
                        K.fromEither,
                        K.filter((e) => e.lastName.length > 0 && e.firstName.length > 0),
                        K.map(a.UI((e) => e.trim()))
                      )
                    ),
                    K.chain(q.nI)
                  )
                )
              )
            : K.none
        );
        var t;
      }
      const O = E.Y.create("CitationBuilder.Parser.CustomFunction"),
        R = (e) => B({ element: (t) => (0, i.zG)(t instanceof Element && e ? t.getAttribute(e.attr) : null, U(H.Id.attr)) }),
        j = () => B({ element: (e) => (0, i.zG)(e.textContent, U(H.Id.textContent)) }),
        W = () =>
          B({
            element: (e) => {
              var t;
              return (0, i.zG)(null === (t = e.firstChild) || void 0 === t ? void 0 : t.textContent, U(H.Id.firstTextContent));
            }
          });
      function U(e) {
        return (t) =>
          (0, i.zG)(
            t,
            K.fromNullable,
            K.filter((e) => e.length > 0),
            F.ew(() => O.warn("Custom function returned nothing", e)),
            K.map((e) => [e])
          );
      }
      var H;
      !(function (e) {
        let t;
        !(function (e) {
          (e.attr = "attr"), (e.textContent = "textContent"), (e.firstTextContent = "firstTextContent");
        })((t = e.Id || (e.Id = {}))),
          (e.repository = { [t.attr]: R, [t.textContent]: j, [t.firstTextContent]: W });
      })(H || (H = {}));
      const $ = "(\\p{Lu}\\p{L}{0,}\\.?)\\s?(\\p{Lu}\\p{L}{0,}\\.?)?\\s{1,}(\\p{Lu}\\p{L}{0,}\\.?(?:\\s|-|\\p{Lu}\\p{L}+){0,})",
        Y = `^\\s{0,}((\\p{L}+[\\s]?\\p{L}{0,}),\\s+(\\p{L}+\\.?)\\s{0,}(\\p{L}+\\.?)?)|(${$})$`,
        Z = `(${$})`,
        Q = "(\\d+)[–\\-]?(\\d{0,})",
        J = "^(?:https?:\\/\\/)?(?:[^@\\/]+@)?(?:www\\.)?([^:\\/?]+)",
        X = [
          {
            kind: o._.Strategy.CombinatorKind.struct,
            optionalFields: ["middleName", "suffix"],
            struct: {
              lastName: [{ kind: o._.Strategy.Kind.regex, regex: Y, resultIndexes: [2, 8] }],
              firstName: [{ kind: o._.Strategy.Kind.regex, regex: Y, resultIndexes: [3, 6] }],
              middleName: [{ kind: o._.Strategy.Kind.regex, regex: Y, resultIndexes: [4, 7] }],
              suffix: [{ kind: o._.Strategy.Kind.const, value: null }]
            }
          }
        ],
        ee = [{ kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "content" } }, ...X],
        te = {
          authors: [
            { kind: o._.Strategy.Kind.queryAll, query: ".author-group  > button, .author-group > a" },
            {
              kind: o._.Strategy.CombinatorKind.struct,
              optionalFields: ["middleName", "suffix"],
              struct: {
                firstName: [
                  { kind: o._.Strategy.Kind.query, query: ".given-name" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, regex: "^([\\p{L}\\.]+)\\s?", resultIndexes: [1] }
                ],
                lastName: [
                  { kind: o._.Strategy.Kind.query, query: ".surname" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ],
                middleName: [
                  { kind: o._.Strategy.Kind.query, query: ".given-name" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, regex: "\\s(.+)", resultIndexes: [1] }
                ],
                suffix: [{ kind: o._.Strategy.Kind.const, value: null }]
              }
            }
          ],
          periodicalTitle: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.query, query: "a.publication-title-link" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: 'meta[name="citation_journal_title" i]' },
                  { kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "content" } }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: "img.article-branding" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "alt" } }
                ]
              ]
            }
          ]
        },
        ne = {
          volume: [
            { kind: o._.Strategy.Kind.query, query: "span.volume" },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
          ],
          issue: [
            { kind: o._.Strategy.Kind.query, query: "span.issue" },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
          ],
          firstPage: [
            { kind: o._.Strategy.Kind.query, query: "span.page" },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
            { kind: o._.Strategy.Kind.regex, regex: Q, resultIndexes: [1] }
          ],
          lastPage: [
            { kind: o._.Strategy.Kind.query, query: "span.page" },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
            { kind: o._.Strategy.Kind.regex, regex: Q, resultIndexes: [2] }
          ]
        },
        ie = {
          authors: [
            { kind: o._.Strategy.Kind.queryAll, query: "#full-view-heading .authors-list .full-name" },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
            ...X
          ],
          lastPage: [
            { kind: o._.Strategy.Kind.query, query: "div.fm-citation" },
            { kind: o._.Strategy.Kind.function, id: H.Id.firstTextContent },
            { kind: o._.Strategy.Kind.regex, regex: ":\\s" + Q + "\\.", resultIndexes: [2] }
          ]
        },
        ae = { periodicalTitle: [{ kind: o._.Strategy.Kind.const, value: "arXiv" }] },
        re = {
          title: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: "turnaway-pharos-heading" }],
                [{ kind: o._.Strategy.Kind.query, query: '[data-qa="item-title"]' }],
                [{ kind: o._.Strategy.Kind.query, query: '[data-qa="book-title"]' }]
              ]
            },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
          ],
          url: [
            { kind: o._.Strategy.Kind.query, query: "[data-qa=stable-url]" },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
          ],
          published: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.query, query: ".turnaway-content__summary turnaway-pharos-link" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, resultIndexes: [1], regex: "\\((.+)\\)" }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: "[data-qa=published-date]" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: "[data-qa=copyright-date]" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ],
                [
                  {
                    kind: o._.Strategy.CombinatorKind.or,
                    options: [
                      [{ kind: o._.Strategy.Kind.query, query: '[data-qa="item-src-info"]' }],
                      [{ kind: o._.Strategy.Kind.query, query: '[data-qa="book"]' }],
                      [{ kind: o._.Strategy.Kind.query, query: ".summary-journal" }]
                    ]
                  },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, regex: "\\s(\\d\\d\\d\\d)", resultIndexes: [1] }
                ]
              ]
            }
          ],
          volume: [
            { kind: o._.Strategy.Kind.query, query: '[data-qa="item-src-info"]' },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
            { kind: o._.Strategy.Kind.regex, resultIndexes: [1], regex: "Vol\\.\\s+(\\d+)" }
          ],
          issue: [
            { kind: o._.Strategy.Kind.query, query: '[data-qa="item-src-info"]' },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
            { kind: o._.Strategy.Kind.regex, resultIndexes: [1], regex: "No\\.\\s+(\\d+)" }
          ],
          firstPage: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.query, query: '[data-qa="item-src-info"]' },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, resultIndexes: [1, 2], regex: "(?:\\sp\\.\\s+(\\d+)|\\spp\\.\\s+(\\d+))" }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: ".summary-journal" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, resultIndexes: [1, 2], regex: "(?:\\sp\\.\\s+(\\d+)|\\spp\\.\\s+(\\d+))" }
                ]
              ]
            }
          ],
          lastPage: [
            { kind: o._.Strategy.Kind.query, query: '[data-qa="item-src-info"]' },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
            { kind: o._.Strategy.Kind.regex, resultIndexes: [1], regex: "pp\\.\\s+\\d+[\\-\\-](\\d+)" }
          ],
          periodicalTitle: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.query, query: "[data-qa=journal] cite" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: "div.summary-journal > div" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ]
              ]
            }
          ],
          doi: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.query, query: "[data-doi]" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "data-doi" } }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: "[data-qa=crossref-doi]" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ]
              ]
            }
          ],
          authors: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  {
                    kind: o._.Strategy.CombinatorKind.or,
                    options: [
                      [{ kind: o._.Strategy.Kind.query, query: ".content-meta-data__authors" }],
                      [{ kind: o._.Strategy.Kind.queryAll, query: "[data-qa=item-authors]" }]
                    ]
                  },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, regex: Z, flags: ["g"] },
                  {
                    kind: o._.Strategy.CombinatorKind.struct,
                    optionalFields: ["middleName", "suffix"],
                    struct: {
                      lastName: [{ kind: o._.Strategy.Kind.regex, regex: $, resultIndexes: [3] }],
                      firstName: [{ kind: o._.Strategy.Kind.regex, regex: $, resultIndexes: [1] }],
                      middleName: [{ kind: o._.Strategy.Kind.regex, regex: $, resultIndexes: [2] }],
                      suffix: [{ kind: o._.Strategy.Kind.const, value: null }]
                    }
                  }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: ".contrib-type-author" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  ...X
                ]
              ]
            }
          ],
          publisher: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.query, query: "[data-qa=publisher] a" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ]
              ]
            }
          ]
        },
        oe = {
          title: [
            { kind: o._.Strategy.Kind.query, query: "h1#firstHeading" },
            { kind: o._.Strategy.Kind.function, id: H.Id.firstTextContent }
          ],
          websiteName: [{ kind: o._.Strategy.Kind.const, value: "Wikipedia" }],
          authors: [{ kind: o._.Strategy.Kind.const, value: "no author, a dummy value to prevent using generic rules" }],
          published: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.query, query: "body script[type='application/ld+json' i]" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, regex: 'dateModified":"([^"]+)"', resultIndexes: [1] }
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: "#footer-info-lastmod" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
                  { kind: o._.Strategy.Kind.regex, regex: "(\\d{1,2}\\.?\\s\\p{L}+\\s\\d{4,4})", resultIndexes: [1] }
                ]
              ]
            }
          ],
          url: [
            { kind: o._.Strategy.Kind.query, query: '[rel="canonical" i]' },
            { kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "href" } }
          ],
          retrievalDate: [{ kind: o._.Strategy.Kind.currDate }]
        },
        le = {
          company: [{ kind: o._.Strategy.Kind.const, value: "OpenAI" }],
          productName: [{ kind: o._.Strategy.Kind.const, value: "ChatGPT" }],
          promptText: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.queryLast, query: 'main div:has(>div>div>[alt="User"])+div' },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ],
                [
                  { kind: o._.Strategy.Kind.queryLast, query: "div.group.dark\\:bg-gray-800 div.empty\\:hidden" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ]
              ]
            }
          ],
          modelVersion: [
            { kind: o._.Strategy.Kind.query, query: 'span a[href$="-chatgpt-release-notes"]' },
            { kind: o._.Strategy.Kind.function, id: H.Id.textContent },
            { kind: o._.Strategy.Kind.regex, regex: "\\w+\\s(.+)", resultIndexes: [1] }
          ],
          modelType: [{ kind: o._.Strategy.Kind.const, value: "Large language model" }]
        },
        de = {
          company: [{ kind: o._.Strategy.Kind.const, value: "Microsoft" }],
          productName: [{ kind: o._.Strategy.Kind.const, value: "Bing" }],
          modelType: [{ kind: o._.Strategy.Kind.const, value: "Large language model" }]
        };
      function se(e) {
        return (
          {
            "sciencedirect.com": te,
            "sagepub.com": ne,
            "nih.gov": ie,
            "arxiv.org": ae,
            "jstor.org": re,
            "wikipedia.org": oe,
            "openai.com": le,
            "bing.com": de
          }[e] || {}
        );
      }
      const ce = { kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "content" } },
        ue = {
          authors: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[name="citation_author" i]' }],
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[name="dc.Creator" i]' }],
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[property="og:article:author" i]' }],
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[property="og:book:author" i]' }],
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[name="twitter:creator" i]' }]
              ]
            },
            ...ee
          ],
          published: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_publication_date" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_date" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Issued" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Date" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:article:published_time" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:book:release_date" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:video:release_date" i]' }]
              ]
            },
            ce
          ],
          title: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  {
                    kind: o._.Strategy.CombinatorKind.or,
                    options: [
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_title" i]' }],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Title" i]' }],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:title" i]' }],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[name="twitter:title" i]' }]
                    ]
                  },
                  ce
                ],
                [
                  { kind: o._.Strategy.Kind.query, query: "title" },
                  { kind: o._.Strategy.Kind.function, id: H.Id.textContent }
                ]
              ]
            }
          ],
          periodicalTitle: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_journal_title" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_inbook_title" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Relation.Ispartof" i]' }]
              ]
            },
            ce
          ],
          volume: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_volume" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Citation.Volume" i]' }]
              ]
            },
            ce
          ],
          issue: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_issue" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Citation.Issue" i]' }]
              ]
            },
            ce
          ],
          firstPage: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_firstpage" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Citation.Spage" i]' }]
              ]
            },
            ce
          ],
          lastPage: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_lastpage" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Citation.Epage" i]' }]
              ]
            },
            ce
          ],
          doi: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_doi" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Identifier" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.Source" i]' }]
              ]
            },
            ce
          ],
          url: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_public_url" i]' }, ce],
                [
                  { kind: o._.Strategy.Kind.query, query: '[rel="canonical" i]' },
                  { kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "href" } }
                ],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:url" i]' }, ce],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="twitter:url" i]' }, ce],
                [{ kind: o._.Strategy.Kind.url }]
              ]
            }
          ],
          retrievalDate: [{ kind: o._.Strategy.Kind.currDate }],
          websiteName: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:site_name" i]' }, ce],
                [{ kind: o._.Strategy.Kind.url }, { kind: o._.Strategy.Kind.regex, regex: J, resultIndexes: [1] }]
              ]
            }
          ],
          publisher: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.publisher" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_publisher" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_technical_report_institution" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="citation_dissertation_institution" i]' }]
              ]
            },
            ce
          ],
          translators: [],
          publicationCity: [],
          edition: [],
          editors: [],
          imageDescription: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.description" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:description" i]' }],
                [{ kind: o._.Strategy.Kind.query, query: 'meta[name="twitter:description" i]' }]
              ]
            },
            ce
          ],
          imageSource: [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:site_name" i]' }, ce],
          imageType: [{ kind: o._.Strategy.Kind.const, value: "Photograph" }],
          username: [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:profile:username" i]' }, ce],
          timestamp: [],
          directors: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[property="og:video:director" i]' }],
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[name="dc.Creator" i]' }],
                [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[name="twitter:creator" i]' }]
              ]
            },
            ...ee
          ],
          studio: [],
          actors: [{ kind: o._.Strategy.Kind.queryAll, query: 'meta[property="og:video:actor" i]' }, ...ee],
          movieLength: [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:video:duration" i]' }, ce],
          company: [],
          productName: [],
          modelVersion: [],
          modelType: [],
          promptText: [],
          promptDescription: [{ kind: o._.Strategy.Kind.const, value: "prompt" }]
        };
      function me(e) {
        return (0, i.zG)(
          e,
          se,
          ((t = ue),
          (e) =>
            (0, i.zG)(
              t,
              a.Su((t, n) => {
                const i = e[t];
                return null == i ? n : n.length > 0 ? [{ kind: o._.Strategy.CombinatorKind.or, options: [i, n] }] : i;
              })
            ))
        );
        var t;
      }
      var ge,
        pe = n(17771);
      !(function (e) {
        (e.onQuery = function (e) {
          return (t) =>
            (0, i.zG)(
              t,
              B({
                element: (t) =>
                  (0, i.zG)(
                    K.tryCatch(() => {
                      if (e.kind === o._.Strategy.Kind.queryAll) return Array.from(t.querySelectorAll(e.query));
                      if (e.kind === o._.Strategy.Kind.query) {
                        const n = t.querySelector(e.query);
                        return n ? [n] : [];
                      }
                      if (e.kind === o._.Strategy.Kind.queryLast) {
                        const n = t.querySelectorAll(e.query);
                        return n && n.length > 0 ? [n[n.length - 1]] : [];
                      }
                      (0, l.L0)(e);
                    }),
                    K.filter(I.Od)
                  )
              })
            );
        }),
          (e.onStruct = function (e, t) {
            const n = (n) =>
              (0, i.zG)(
                Object.keys(e.struct),
                (a) => {
                  const r = {};
                  return (
                    a.forEach((a) => {
                      var o;
                      const l = e.struct[a];
                      if (null !== l) {
                        const d = (0, i.zG)(K.some([n]), ye(t)(l), K.chain(I.YM));
                        (!(0, K.isSome)(d) && (null === (o = e.optionalFields) || void 0 === o ? void 0 : o.includes(a))) || (r[a] = d);
                      }
                    }),
                    r
                  );
                },
                (0, pe.Y)(K.option),
                K.map((e) => [e])
              );
            return B({ element: n, string: n, object: n });
          }),
          (e.onOr = function (e, t) {
            return (n) => e.options.reduce((e, a) => (K.isSome(e) ? e : (0, i.zG)(n, ye(t)(a), K.filter(I.Od))), K.none);
          }),
          (e.onRegex = function (e) {
            const t = e.resultIndexes;
            return B({
              string: (0, i.ls)(
                (t) => t.match(new RegExp(e.regex, e.flags ? "u" + e.flags.join("") : "u")),
                K.fromNullable,
                K.map((e) => Array.from(e).filter((e, n) => (!t || t.includes(n)) && "string" == typeof e && e.length > 0)),
                K.map(
                  e.mapResultsTo
                    ? (t) =>
                        t.map((t, n) => {
                          var i;
                          return null !== (i = e.mapResultsTo[n]) && void 0 !== i ? i : t;
                        })
                    : i.yR
                ),
                K.chain(q.nI)
              )
            });
          }),
          (e.onConst = function (e) {
            return () =>
              (0, i.zG)(
                e.value,
                K.fromNullable,
                K.map((e) => [e])
              );
          }),
          (e.onPageUrl = function () {
            return () => K.some(q.of(document.location.href));
          }),
          (e.onCurrDate = function (e) {
            return () => K.some(q.of(e.mockDate ? e.mockDate : new Date().toString()));
          }),
          (e.onCustomFunction = function (e) {
            return (t) => {
              switch (e.id) {
                case H.Id.textContent:
                  return H.repository.textContent({})(t);
                case H.Id.firstTextContent:
                  return H.repository.firstTextContent({})(t);
                case H.Id.attr:
                  return H.repository.attr(e.args)(t);
              }
            };
          });
      })(ge || (ge = {}));
      const ye = (e) => (t) => (n) => {
        const a = ((e) => (t, n) => {
          switch (n.kind) {
            case o._.Strategy.Kind.query:
            case o._.Strategy.Kind.queryAll:
            case o._.Strategy.Kind.queryLast:
              return ge.onQuery(n)(t);
            case o._.Strategy.Kind.function:
              return ge.onCustomFunction(n)(t);
            case o._.Strategy.CombinatorKind.struct:
              return ge.onStruct(n, e)(t);
            case o._.Strategy.CombinatorKind.or:
              return ge.onOr(n, e)(t);
            case o._.Strategy.Kind.regex:
              return ge.onRegex(n)(t);
            case o._.Strategy.Kind.const:
              return ge.onConst(n)(t);
            case o._.Strategy.Kind.currDate:
              return ge.onCurrDate(e)(t);
            case o._.Strategy.Kind.url:
              return ge.onPageUrl()(t);
          }
        })(e);
        return (0, i.zG)(t, I.u4(n, a));
      };
      class fe {
        constructor(e, t, n, i, a) {
          (this._domain = e),
            (this._sourceType = t),
            (this._locale = n),
            (this._params = a),
            (this._document = K.some([i])),
            (this._run = ye(this._params)),
            this._updateParsingConfig(this._sourceType, this._domain);
        }
        updateSourceType() {}
        _updateParsingConfig(e, t) {
          this._config = (0, i.zG)(me(t), (e) =>
            (function (e, t) {
              return e;
            })(e)
          );
        }
      }
      class he extends fe {
        get data() {
          return {
            [o.S.authors]: () => (0, i.zG)(this._document, this._run(this._config.authors), V),
            [o.S.published]: () => (0, i.zG)(this._document, this._run(this._config.published), P(this._locale)),
            [o.S.title]: () => (0, i.zG)(this._document, this._run(this._config.title), M),
            [o.S.periodicalTitle]: () => (0, i.zG)(this._document, this._run(this._config.periodicalTitle), M),
            [o.S.retrievalDate]: () => (0, i.zG)(this._document, this._run(this._config.retrievalDate), P(this._locale)),
            [o.S.volume]: () => (0, i.zG)(this._document, this._run(this._config.volume), M, G),
            [o.S.issue]: () => (0, i.zG)(this._document, this._run(this._config.issue), M, G),
            [o.S.doi]: () => (0, i.zG)(this._document, this._run(this._config.doi), M),
            [o.S.url]: () => (0, i.zG)(this._document, this._run(this._config.url), M),
            [o.S.firstPage]: () => (0, i.zG)(this._document, this._run(this._config.firstPage), M),
            [o.S.lastPage]: () => (0, i.zG)(this._document, this._run(this._config.lastPage), M),
            [o.S.websiteName]: () => (0, i.zG)(this._document, this._run(this._config.websiteName), M),
            [o.S.publisher]: () => (0, i.zG)(this._document, this._run(this._config.publisher), M),
            [o.S.edition]: () => (0, i.zG)(this._document, this._run(this._config.edition), M, G),
            [o.S.translators]: () => (0, i.zG)(this._document, this._run(this._config.translators), V),
            [o.S.editors]: () => (0, i.zG)(this._document, this._run(this._config.editors), V),
            [o.S.publicationCity]: () => (0, i.zG)(this._document, this._run(this._config.publicationCity), M),
            [o.S.username]: () => (0, i.zG)(this._document, this._run(this._config.username), M),
            [o.S.timestamp]: () => K.none,
            [o.S.imageSource]: () => (0, i.zG)(this._document, this._run(this._config.imageSource), M),
            [o.S.imageDescription]: () => (0, i.zG)(this._document, this._run(this._config.imageDescription), M),
            [o.S.imageType]: () => (0, i.zG)(this._document, this._run(this._config.imageType), M),
            [o.S.company]: () => (0, i.zG)(this._document, this._run(this._config.company), M),
            [o.S.productName]: () => (0, i.zG)(this._document, this._run(this._config.productName), M),
            [o.S.modelVersion]: () => (0, i.zG)(this._document, this._run(this._config.modelVersion), M),
            [o.S.modelType]: () => (0, i.zG)(this._document, this._run(this._config.modelType), M),
            [o.S.promptText]: () => (0, i.zG)(this._document, this._run(this._config.promptText), M),
            [o.S.promptDescription]: () => (0, i.zG)(this._document, this._run(this._config.promptDescription), M)
          };
        }
      }
      class Se extends fe {
        get data() {
          return {
            title: x.of(K.none),
            authors: x.of(K.none),
            published: x.of(K.none),
            retrievalDate: x.of(K.none),
            url: x.of(K.none),
            websiteName: x.of(K.none),
            periodicalTitle: x.of(K.none),
            issue: x.of(K.none),
            volume: x.of(K.none),
            firstPage: x.of(K.none),
            lastPage: x.of(K.none),
            doi: x.of(K.none),
            editors: x.of(K.none),
            translators: x.of(K.none),
            edition: x.of(K.none),
            publisher: x.of(K.none),
            publicationCity: x.of(K.none),
            username: x.of(K.none),
            timestamp: x.of(K.none),
            imageSource: x.of(K.none),
            imageDescription: x.of(K.none),
            imageType: x.of(K.none),
            company: x.of(K.none),
            productName: x.of(K.none),
            modelVersion: x.of(K.none),
            modelType: x.of(K.none),
            promptText: x.of(K.none),
            promptDescription: x.of(K.none)
          };
        }
      }
      var ve;
      !(function (e) {
        e.create = function (e, t, n, i, a) {
          return "grammarlyaws.com" === i ? new Se(i, t, n, e, a.params) : new he(i, t, n, e, a.params);
        };
      })(ve || (ve = {}));
      const be = {
        kind: o._.Strategy.CombinatorKind.or,
        options: [
          [
            {
              kind: o._.Strategy.Kind.regex,
              regex: "(article|report|journal|magazine|paper)",
              resultIndexes: [1],
              mapResultsTo: [o._.Kind.journalArticle],
              flags: ["i"]
            }
          ],
          [
            {
              kind: o._.Strategy.Kind.regex,
              regex: "(image|picture|figure)",
              resultIndexes: [1],
              mapResultsTo: [o._.Kind.image],
              flags: ["i"]
            }
          ],
          [{ kind: o._.Strategy.Kind.regex, regex: "(book)", resultIndexes: [1], mapResultsTo: [o._.Kind.book], flags: ["i"] }],
          [{ kind: o._.Strategy.Kind.regex, regex: "(movie|film)", resultIndexes: [1], mapResultsTo: [o._.Kind.movie], flags: ["i"] }],
          [
            {
              kind: o._.Strategy.Kind.regex,
              regex: "(video|player)",
              resultIndexes: [1],
              mapResultsTo: [o._.Kind.onlineVideo],
              flags: ["i"]
            }
          ],
          [{ kind: o._.Strategy.Kind.regex, regex: "(website)", resultIndexes: [1], mapResultsTo: [o._.Kind.website], flags: ["i"] }]
        ]
      };
      function ke(e) {
        return [{ kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: e } }, be];
      }
      const _e = {
          locale: [
            { kind: o._.Strategy.Kind.query, query: "html[lang]" },
            { kind: o._.Strategy.Kind.function, id: H.Id.attr, args: { attr: "lang" } }
          ],
          sourceType: [
            {
              kind: o._.Strategy.CombinatorKind.or,
              options: [
                [
                  { kind: o._.Strategy.Kind.url },
                  { kind: o._.Strategy.Kind.regex, regex: J, resultIndexes: [1] },
                  {
                    kind: o._.Strategy.CombinatorKind.or,
                    options: [
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(wikipedia\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.wikipedia]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(springeropen\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(journals\\.plos\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(sciencedirect\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(journals\\.sagepub\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(ncbi\\.nlm\\.nih\\.gov)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(doaj\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(arxiv\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(frontiersin\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(jstor\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(onlinelibrary\\.wiley\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(journals\\.physiology\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(science\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(nature\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(pnas\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(annualreviews\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(pubs\\.asha\\.org)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(academic\\.oup\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(mdpi\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(muse\\.jhu\\.edu)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(online\\.ucpress\\.edu)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(journals\\.uchicago\\.edu)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.journalArticle]
                        }
                      ],
                      [
                        {
                          kind: o._.Strategy.Kind.regex,
                          regex: "(chat\\.openai\\.com)$",
                          resultIndexes: [1],
                          mapResultsTo: [o._.Kind.generativeAi]
                        }
                      ],
                      [{ kind: o._.Strategy.Kind.regex, regex: "(bing\\.com)$", resultIndexes: [1], mapResultsTo: [o._.Kind.generativeAi] }]
                    ]
                  }
                ],
                [
                  {
                    kind: o._.Strategy.CombinatorKind.or,
                    options: [
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[name="dc.type" i]' }, ...ke("content")],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[property="og:type" i]' }, ...ke("content")]
                    ]
                  }
                ],
                [
                  {
                    kind: o._.Strategy.CombinatorKind.or,
                    options: [
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[property^="og:book" i]' }],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[property^="og:video" i]' }],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[property^="og:article" i]' }],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[property^="og:image:" i]' }]
                    ]
                  },
                  ...ke("property")
                ],
                [
                  {
                    kind: o._.Strategy.CombinatorKind.or,
                    options: [
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[name^="twitter:player" i]' }],
                      [{ kind: o._.Strategy.Kind.query, query: 'meta[name^="twitter:image:" i]' }]
                    ]
                  },
                  ...ke("name")
                ]
              ]
            }
          ]
        },
        we = ye({});
      var xe,
        Ce = n(9172);
      function Ee(e, t, n, o, l, s, c, u) {
        return (m) => {
          const g = E.Y.create("CitationBuilder.ParsingModel");
          return (0, i.zG)(
            m,
            (0, a.UI)((e) => e()),
            (e) => (g.debug(`Parsed fields ${JSON.stringify(e)}`), e),
            a.IM.compact,
            T.fromPredicate(
              (0, i.ls)(
                d(e, o, c, (e, { required: t, secondary: n, validationPassed: i }) => {
                  u.citationBuilder.info("missingFields", "Missing fields found", {
                    ...(0, Ce.ex)(l.dynamicConfig),
                    sourceType: e,
                    missingFields: { required: t, secondary: n, validationPassed: i }
                  }),
                    g.debug("Missing fields found", { required: t, secondary: n, validationPassed: i });
                }),
                n ? i.W8 : i.yR
              ),
              () => new r.Op("Could not parse data", { domain: t, url: s })
            )
          );
        };
      }
      !(function (e) {
        e.create = function (e, t, n, a, r) {
          const l = (function (e) {
              return (0, i.zG)(K.some([e]), we(_e.sourceType), z);
            })(t),
            d = (0, i.zG)(
              l,
              K.getOrElse(() => o._.defaultKind)
            ),
            s = (0, i.zG)(
              (function (e) {
                return (0, i.zG)(K.some([e]), we(_e.locale), M);
              })(t),
              K.getOrElse(() => o._.defaultLocale)
            ),
            c = (0, i.zG)(
              (0, Ce.xq)(t.location.href),
              K.getOrElse(() => "badDomain")
            ),
            u = (0, Ce.FU)(t.location.hostname, n.dynamicConfig),
            m = u ? 1 : 2;
          return {
            parse: () =>
              (0, i.zG)(ve.create(t, d, s, c, a), (t) => {
                const o = (0, Ce.OY)(a, n.page);
                return (0, i.zG)(t.data, Ee(d, c, o, a, n, e, m, r));
              }),
            sourceType: l,
            shouldReparseOnWindowOpen: u
          };
        };
      })(xe || (xe = {}));
    },
    74584: (e, t, n) => {
      n.r(t), n.d(t, { createCitationBuilderViewModel: () => K });
      var i = n(57050),
        a = n(5802),
        r = n(41966);
      const o = {
        priority: a.P.Priority.low,
        timeout: a.P.DefaultTimeout,
        position: a.P.Position.bottomLeft,
        viewType: a.P.ViewType.standard
      };
      var l;
      !(function (e) {
        e.createFactory = function () {
          return {
            citationCopied: r.r.createBuilder().build(o),
            turnedOff: r.r.createBuilder().build(o),
            intextCopied: r.r.createBuilder().build(o),
            feedbackSubmitted: r.r.createBuilder().build(o)
          };
        };
      })(l || (l = {}));
      const d = (e) => e.result.reduce((e, t) => (t.fieldName ? e.add(t.fieldName) : e), new Set()).size;
      var s = n(79452),
        c = n(23239);
      const u = { type: s.D.ViewType.Default, elements: { backButton: !1, styleSelector: !0, feedbackIcon: !0 } };
      var m = n(40327),
        g = n(27822),
        p = n(61902);
      function y(e) {
        var t, n;
        if (self.navigator && self.navigator.clipboard && self.navigator.clipboard.write) {
          const t = new Blob([e], { type: "text/html" }),
            n = new Blob([e.replace(/<\/?\w+>/gm, "")], { type: "text/plain" }),
            i = new ClipboardItem({ "text/html": t, "text/plain": n });
          navigator.clipboard.write([i]);
        } else {
          const i = document.createElement("div");
          (i.innerHTML = e),
            (i.style.position = "fixed"),
            (i.style.pointerEvents = "none"),
            (i.style.opacity = "0"),
            document.body.appendChild(i),
            null === (t = self.getSelection()) || void 0 === t || t.removeAllRanges();
          const a = document.createRange();
          a.selectNode(i),
            null === (n = self.getSelection()) || void 0 === n || n.addRange(a),
            document.execCommand("copy"),
            document.body.removeChild(i);
        }
      }
      var f = n(5114),
        h = n(83078);
      var S = n(44501);
      const v = (e, t) => ({
        notify: (n, i, a) => {
          i.forEach(({ type: i }) => {
            switch (i) {
              case "notify":
                n === S._ && t.popActiveView();
                break;
              case "closeCard":
                e();
            }
          });
        },
        activeView: t.activeView
      });
      var b = n(55649),
        k = n(8125);
      var _ = n(81591),
        w = n(9172),
        x = n(61813),
        C = n(55415);
      const E = (e, t) =>
        t.manualInvocation
          ? ((e) => {
              const t = (0, i.zG)(
                e.fullCitation.get(),
                f.map(d),
                f.getOrElse(() => 0)
              );
              return 0 === t ? s.D.View.editViewByDefault : t <= 2 ? s.D.View.addMissingViewByDefault : s.D.View.defaultView;
            })(e)
          : s.D.View.defaultView;
      function K({ csState: e, model: t, generationModel: n, gnar: a, features: r }) {
        let o = [];
        const d = c.h.create(s.D.State.citeSource),
          S = (0, w.OY)(r, e.page),
          K = E(n, r),
          I = K !== s.D.View.defaultView,
          F = new _.A(K, K),
          T = () => d.set(s.D.State.citeSource),
          q = () => d.set(s.D.State.citeSourceDisabled),
          B = new x.y(c.h.create([]), l.createFactory(), 1, 5e3),
          N = (0, w.UI)(t.domain, e.dynamicConfig),
          D = v(T, F),
          M = ((e, t, n, i, a) => ({ domain: e, position: t, disablePermanently: n, disableForSession: i, openWindow: a }))(
            t.domain,
            N,
            () => {
              a.citePopupButtonDisable(a.domain, "permanent", a.sessionId, "citation-builder", S);
              o.push({
                dispose: () => {
                  t.disableCitationBuilder();
                },
                id: "disableOnDispose"
              }),
                q(),
                B.enqueue("turnedOff").subscribe((e) => {
                  "shown" !== e && (t.disableCitationBuilder(), (o = o.filter(({ id: e }) => "disableOnDispose" !== e)));
                });
            },
            () => {
              a.citePopupButtonDisable(a.domain, "session", a.sessionId, "citation-builder", S), q();
            },
            () => {
              if (!n.isCitationEdited() && t.shouldReparseOnWindowOpen) {
                t.reparseCitation(), n.regenerateInput();
                const e = E(n, r);
                F.activeView.get() != e && F.replaceActiveView(e);
              }
              return a.citePopupButtonClick(a.domain, a.sessionId, S), d.set(s.D.State.showWindow);
            }
          ),
          G = ((e, t, n) => {
            let a = f.none;
            return {
              citationStyle: e.style,
              sourceType: e.sourceType.view(f.getOrElse(() => p._.defaultKind)),
              showSourceTypeSelector:
                n.manualInvocation && e.sourceType.view((0, k.ff)((0, k.Kg)(h.FX(p._.Kind.wikipedia), h.FX(p._.Kind.generativeAi)))).get(),
              position: t,
              setCitationStyle: (t) => {
                e.setStyle(t);
              },
              setSourceType: (t) => e.setSourceType(t),
              setStyleTypeSelectorLabel: (e) => {
                a = e;
              },
              forceOpenStyleTypeSelector: () =>
                (0, i.zG)(
                  a,
                  f.fold(
                    () => {
                      b.Y.create("CitationBuilder.StyleType").warn("Style Type selector label empty");
                    },
                    (e) => {
                      e.focus(), e.click();
                    }
                  )
                )
            };
          })(n, N, r),
          z = (({ generationModel: e, notificationsManager: t, handlers: n, gnar: a, features: r, router: o, wasManuallyInvoked: l }) => {
            const d = [],
              c = e.sourceType.view(f.getOrElse(() => p._.defaultKind));
            return {
              fullCitation: e.fullCitation,
              inTextCitation: e.inTextCitation.view(
                (0, i.ls)(
                  f.map(g.GenerationModel.Utils.generatedCitationToRtf),
                  f.filter((e) => e.length > 0)
                )
              ),
              missingFields: e.currentlyMissingFields.view(
                (0, i.ls)(
                  f.map((e) => e.length),
                  f.getOrElse(() => 0)
                )
              ),
              showChangeSourceTypeMessage: e.sourceType.view(f.isNone),
              editingEnabled: r.editing,
              copyFullCitation: () => {
                (0, m.pipe)(
                  e.fullCitation.get(),
                  f.map(g.GenerationModel.Utils.generatedCitationToRtf),
                  h.bw((e) => {
                    y(e), d.push(t.enqueue("citationCopied").subscribe()), n.closeWindow();
                  })
                ),
                  a.citeCopyButtonClick(e.style.get(), a.domain, a.sessionId, c.get(), l);
              },
              copyInTextCitation: () => {
                (0, m.pipe)(
                  e.inTextCitation.get(),
                  f.map((e) => ({ citation: e, rtf: g.GenerationModel.Utils.generatedCitationToRtf(e) })),
                  h.bw(({ citation: e, rtf: i }) => {
                    y(i), d.push(t.enqueue("intextCopied", { params: { citation: e } }).subscribe()), n.closeWindow();
                  })
                ),
                  a.citeCopyIntextClick(e.style.get(), a.domain, a.sessionId, c.get(), l);
              },
              goToAllFieldsEditingView: () => {
                r.editing &&
                  (o.pushActiveView({ type: s.D.ViewType.EditCitation, elements: { backButton: !0, styleSelector: !0, feedbackIcon: !0 } }),
                  a.citePopupEditClick(a.domain, a.sessionId, l));
              },
              goToMissingFieldsView: () => {
                r.editing &&
                  (o.pushActiveView({
                    type: s.D.ViewType.AddMissingInformation,
                    elements: { backButton: !0, styleSelector: !0, feedbackIcon: !0 }
                  }),
                  a.citePopupAddMissingClick(a.domain, a.sessionId, l));
              },
              missingFieldsPromptShown: () => {
                a.citePopupMissingInfoShow(a.domain, a.sessionId, l);
              },
              openStyleTypeSelector: n.openStyleTypeSelector,
              dispose: () => {
                d.forEach((e) => e.unsubscribe());
              }
            };
          })({
            generationModel: n,
            notificationsManager: B,
            handlers: { closeWindow: T, openStyleTypeSelector: () => G.forceOpenStyleTypeSelector() },
            gnar: a,
            features: r,
            router: F,
            wasManuallyInvoked: S
          });
        o.push(z);
        const A = (({ generationModel: e, router: t, startedWithFormView: n, closeWindow: i, gnar: a, wasManuallyInvoked: r }) => {
            const o = c.h.create(!n);
            return {
              fullCitation: e.editedFullCitation,
              currentInput: e.currentInput,
              commitInput: () => {
                e.commitInput(), t.replaceActiveView(u), a.citePopupEditSuccess(a.domain, a.sessionId, r), o.set(!0);
              },
              onAddMissingInfoFormShow: (e) => {
                a.citePopupMissingInfoFormShow(a.domain, e, a.sessionId, r);
              },
              discardInput: () => {
                e.cancelInput(), o.get() ? t.replaceActiveView(u) : i();
              },
              fieldsMissedInParsing: e.fieldsMissedInParsing,
              currentlyMissingFields: e.currentlyMissingFields,
              invalidEditingFields: e.invalidEditingFields,
              requiredKeyFields: e.requiredKeyFields,
              secondaryFields: e.secondaryFields,
              showWarning: o.view((e) => !e),
              goToAllFieldsEditingView: () =>
                t.pushActiveView({ type: s.D.ViewType.EditCitation, elements: { backButton: !0, styleSelector: !0, feedbackIcon: !0 } })
            };
          })({ generationModel: n, router: F, startedWithFormView: I, closeWindow: T, gnar: a, wasManuallyInvoked: S }),
          P = ((e, t, n, i) => {
            const a = [];
            return {
              domain: e.domain,
              submitFeedback(r, o, l) {
                e.feedbackSentButtonClick((o || "") + (void 0 === l ? "" : ` - ${l}`), "citationBuilder", r),
                  a.push(n.enqueue("feedbackSubmitted").subscribe()),
                  i(),
                  t.popActiveView();
              },
              dispose() {
                a.forEach((e) => e);
              }
            };
          })(a, F, B, T);
        o.push(P);
        const L = (0, i.zG)(t, C.H6("onboardingSeen", "setOnboardingSeen"));
        return {
          wasManuallyInvoked: S,
          citation: t.citation,
          state: d,
          router: F,
          header: D,
          gButton: M,
          styleTypeSelector: G,
          citationView: z,
          citationEditingView: A,
          feedbackView: P,
          notificationsManager: B,
          onboarding: L,
          gnar: a,
          features: r,
          position: N,
          dispose() {
            o.forEach((e) => e.dispose());
          }
        };
      }
    },
    79452: (e, t, n) => {
      n.d(t, { D: () => i });
      var i,
        a = n(49558);
      !(function (e) {
        let t, n, i, r;
        !(function (e) {
          (e.citeSource = "citeSource"), (e.citeSourceDisabled = "citeSourceDisabled"), (e.showWindow = "showWindow");
        })((t = e.State || (e.State = {}))),
          (function (e) {
            (e.Default = "Default"),
              (e.EditCitation = "EditCitation"),
              (e.EditCitationByDefault = "EditCitationByDefault"),
              (e.AddMissingInformation = "AddMissingInformation"),
              (e.AddMissingInformationByDefault = "AddMissingInformationByDefault"),
              (e.Feedback = "Feedback");
          })((n = e.ViewType || (e.ViewType = {}))),
          (function (e) {
            e.defaultView = { type: n.Default, elements: { backButton: !1, styleSelector: !0, feedbackIcon: !0 } };
            const t = { backButton: !0, styleSelector: !0, feedbackIcon: !0 };
            (e.editView = { type: n.EditCitation, elements: t }),
              (e.editViewByDefault = { type: n.EditCitationByDefault, elements: { ...t, backButton: !1 } }),
              (e.addMissingView = { type: n.AddMissingInformation, elements: t }),
              (e.addMissingViewByDefault = { type: n.AddMissingInformationByDefault, elements: e.editViewByDefault.elements });
            e.feedbackView = { type: n.Feedback, elements: { backButton: !0, styleSelector: !1, feedbackIcon: !1 } };
          })((i = e.View || (e.View = {}))),
          (function (e) {
            (e.nullableStringFieldLens = function (e) {
              return a.Ue(
                (t) => String(t[e] || ""),
                (t, n) => ({ ...n, [e]: "" === t ? void 0 : t })
              );
            }),
              (e.nullableNumberFieldLens = function (e) {
                return a.Ue(
                  (t) => String(t[e] || ""),
                  (t, n) => {
                    if ("" === t) return { ...n, [e]: void 0 };
                    const i = Number(t);
                    return String(i) === t && i >= 0 && Math.ceil(i) === i ? { ...n, [e]: i } : n;
                  }
                );
              }),
              (e.nullableArrayLens = function () {
                return a.Ue(
                  (e) => e || [],
                  (e) => (0 === e.length ? void 0 : e)
                );
              }),
              (e.nullableCitationDateLens = function () {
                return a.Ue(
                  (e) => e || {},
                  (e) => (void 0 === e.year && null == e.month && void 0 === e.day ? void 0 : e)
                );
              });
          })((r = e.Lenses || (e.Lenses = {})));
      })(i || (i = {}));
    },
    57019: (e, t, n) => {
      n.d(t, { e: () => S, c: () => v });
      var i = n(57050),
        a = n(27378),
        r = n(10311),
        o = n(3412),
        l = n(15706),
        d = n(70836);
      const s = ({ color: e = d.Z.neutral0 }) =>
        a.createElement(
          "svg",
          { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.431 4h1.138c.16 0 .288.13.288.288 0 1.37 1.68 2.031 2.65 1.063a.294.294 0 0 1 .413-.002l.731.73c.114.115.112.3-.002.415-.968.968-.307 2.649 1.063 2.649.159 0 .288.129.288.288v1.138c0 .16-.13.288-.288.288-1.37 0-2.031 1.68-1.063 2.65.114.113.116.3.002.413l-.73.731a.294.294 0 0 1-.415-.002c-.968-.968-2.649-.307-2.649 1.063 0 .159-.129.288-.288.288H9.43a.288.288 0 0 1-.288-.288c0-1.37-1.68-2.031-2.65-1.063a.293.293 0 0 1-.413.002l-.731-.73a.294.294 0 0 1 .002-.415c.968-.968.307-2.649-1.063-2.649A.288.288 0 0 1 4 10.57V9.43c0-.16.13-.288.288-.288 1.37 0 2.031-1.68 1.063-2.65a.294.294 0 0 1-.002-.413l.73-.731a.294.294 0 0 1 .415.002c.968.968 2.649.307 2.649-1.063 0-.159.129-.288.288-.288ZM10 12.308a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616Z",
            fill: e
          })
        );
      var c = n(18813),
        u = n(89894),
        m = n(1509),
        g = n(64757),
        p = n(8125),
        y = n(8543),
        f = n(54001),
        h = n(99105);
      const S = ({ viewModel: e, disabled: t }) => {
          const [n, o] = a.useState(!1),
            d = () => o(!1),
            s = (0, r.N)({ processGbuttonBlur: d, processGbuttonHover: () => o(!0) }, 600, 1200);
          return a.createElement(
            y.F.div,
            { className: h.citationGButtonContainer, ...s.handlers, "data-grammarly-part": "citation-button" },
            !t &&
              a.createElement(
                "div",
                {
                  ...(0, f.Sh)(
                    h.citationGButtonSettingsContainer,
                    "left" === e.position.horizontalLocation
                      ? h.citationGButtonSettingsContainerLeft
                      : h.citationGButtonSettingsContainerRight
                  )
                },
                a.createElement(
                  c.L,
                  {
                    name: "disableCitationBuilder",
                    label: a.createElement(b, {
                      onClick: (0, i.ls)(d, s.reset.bind(s)),
                      visible: n,
                      gButtonHorizontalPosition: e.position.horizontalLocation
                    }),
                    align: e.position.horizontalLocation,
                    vAlign: "bottom" === e.position.verticalLocation ? "top" : "bottom",
                    appearanceBehavior: "mouseClick",
                    theme: {
                      dropdownList: u.ux.joinClasses([
                        h.dropdownContainer,
                        "bottom" === e.position.verticalLocation ? h.dropdownContainerBottom : h.dropdownContainerTop,
                        h.dropdownContainer,
                        "left" === e.position.horizontalLocation ? h.dropdownContainerLeft : h.dropdownContainerRight
                      ])
                    },
                    showDelay: 0
                  },
                  a.createElement(v, { viewModel: e })
                )
              ),
            a.createElement(
              "button",
              {
                ...(0, f.Sh)(t && h.disabledCitationGButton, h.citationGButton),
                onClick: t ? p.Q1 : (0, i.ls)(d, s.reset.bind(s), e.openWindow.bind(e))
              },
              a.createElement(l.V, { size: 28 }),
              a.createElement("span", null, "Get citation")
            )
          );
        },
        v = ({ viewModel: e }) =>
          a.createElement(
            a.Fragment,
            null,
            a.createElement(m.Z.Small, { className: h.disableMenuText }, o.l_.title(e.domain)),
            a.createElement(g.zx.Flat, { name: "thisSessionDisable", onClick: e.disableForSession.bind(e) }, o.l_.forNow),
            a.createElement(g.zx.Flat, { name: "thisSessionDisable", onClick: e.disablePermanently.bind(e) }, o.l_.always)
          ),
        b = ({ onClick: e, visible: t, gButtonHorizontalPosition: n }) =>
          a.createElement(
            "button",
            {
              ...(0, f.Sh)(
                h.citationGButtonSettings,
                t ? h.visible : h.hidden,
                "left" === n ? h.citationGButtonSettingsLeft : h.citationGButtonSettingsRight
              ),
              onClick: e
            },
            a.createElement(s, null)
          );
    },
    44501: (e, t, n) => {
      n.d(t, { _: () => A, h: () => P });
      var i = n(27378),
        a = n(79452),
        r = n(57019),
        o = n(20330),
        l = n(18813),
        d = n(80190);
      const s = ({ gButtonVM: e }) =>
        i.createElement(
          l.L,
          {
            name: "citationBuilderSettings",
            label: i.createElement(o.l, { size: "small", enableTooltip: !0, className: d.settingsButton }),
            align: "right",
            vAlign: "bottom" === e.position.verticalLocation ? "top" : "bottom",
            showDelay: 0,
            closeDelay: 0,
            theme: { dropdownList: d.dropdownContainer },
            appearanceBehavior: "mouseClick"
          },
          i.createElement(r.c, { viewModel: e })
        );
      var c = n(57050),
        u = n(66013),
        m = n(61902),
        g = n(3412),
        p = n(62369),
        y = n(89872),
        f = n(31278),
        h = n(1509),
        S = n(25335),
        v = n(5114),
        b = n(71249),
        k = n(8543),
        _ = n(73137);
      const w = ["apa", "mla", "chicago"],
        x = [m._.Kind.journalArticle, m._.Kind.website, m._.Kind.book, m._.Kind.magazineArticle, m._.Kind.onlineVideo, m._.Kind.image],
        C = (e) => ("mla" === e || "apa" === e ? e.toUpperCase() : e.charAt(0).toUpperCase() + e.slice(1)),
        E = ({ vm: e }) =>
          i.createElement(
            l.L,
            {
              name: "styleTypeSelector",
              label: i.createElement(
                p.z,
                {
                  includePadding: !1,
                  kind: "transparent-hoverable",
                  className: _.selectorButton,
                  ref: (t) => e.setStyleTypeSelectorLabel(v.fromNullable(t))
                },
                i.createElement(y.C, { title: "beta" }),
                i.createElement(
                  "span",
                  { className: _.selectorButtonLabel },
                  i.createElement(k.F.Fragment, null, e.citationStyle.view(C)),
                  " · ",
                  i.createElement(
                    k.F.Fragment,
                    null,
                    e.sourceType.view((e) => g.s5[e])
                  )
                ),
                i.createElement(f.JO.Arrow, { className: _.arrowIcon })
              ),
              align: e.position.horizontalLocation,
              vAlign: "bottom" === e.position.verticalLocation ? "top" : "bottom",
              appearanceBehavior: "mouseClick",
              showDelay: 0,
              closeDelay: 0
            },
            i.createElement(
              "div",
              { className: _.dropdownContainer },
              i.createElement(h.Z.Small, null, "Style"),
              i.createElement(
                S.zx.Group,
                { sticky: !0, className: _.styleButtonGroup },
                w.map((t) =>
                  i.createElement(
                    S.zx.White,
                    {
                      name: t,
                      key: t,
                      active: e.citationStyle.view((e) => e === t),
                      className: _.styleButton,
                      onClick: () => e.setCitationStyle(u.Tk.Style[t])
                    },
                    C(t)
                  )
                )
              ),
              e.showSourceTypeSelector &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(h.Z.Small, { className: _.selectorPadding }, "Type"),
                  (0, c.zG)(
                    x,
                    b.wM(3),
                    b.UI((t) =>
                      i.createElement(
                        S.zx.Group,
                        { sticky: !0, className: _.styleButtonGroup, key: t[0] },
                        t.map((t) =>
                          i.createElement(
                            S.zx.White,
                            {
                              name: t,
                              key: t,
                              active: e.sourceType.view((e) => e === t),
                              className: _.styleButton,
                              onClick: () => e.setSourceType(t)
                            },
                            g.s5[t]
                          )
                        )
                      )
                    )
                  )
                )
            )
          );
      var K = n(37522),
        I = n(96309),
        F = n(5397),
        T = n(6726),
        q = n(54001),
        B = n(6883),
        N = n.n(B);
      const D = ({ enableTooltip: e = !1, size: t = "medium", ...n }) =>
        i.createElement(
          T.u,
          { message: "Feedback", showDelay: F.gk, disabled: !e },
          i.createElement(
            K.h,
            { ...n },
            i.createElement("div", {
              ...(0, q.Sh)("small" === t ? N().feedbackButtonSmallIcon : null, "medium" === t ? N().feedbackButtonMediumIcon : null)
            })
          )
        );
      var M = n(79880),
        G = n(37427);
      const z = (e) => i.createElement(K.h, { ...e }, i.createElement("div", { className: G.backIcon })),
        A = "back-button",
        P = ({ notify: e, router: t, styleTypeSelectorVM: n, gButtonVM: r }) =>
          i.createElement(
            k.F.div,
            {
              ...(0, q.Sh)(
                G.citationBuilderHeader,
                "bottom" === r.position.verticalLocation ? G.citationBuilderHeaderBottom : G.citationBuilderHeaderTop
              )
            },
            t.activeView.view((o) =>
              i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "div",
                  { className: G.headerContent },
                  o.type === a.D.ViewType.Default && i.createElement("div", { className: G.logoIcon }),
                  o.elements.backButton &&
                    i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(z, { onClick: () => e(A, [{ type: "notify", userAction: M.nz.Click }], { alertRefs: [] }) }),
                      i.createElement(
                        "div",
                        { className: G.title },
                        (function (e) {
                          switch (e.type) {
                            case a.D.ViewType.AddMissingInformation:
                              return "Add missing information";
                            case a.D.ViewType.EditCitation:
                              return "Edit citation";
                            case a.D.ViewType.Feedback:
                              return "Provide Feedback";
                            default:
                              return "";
                          }
                        })(o)
                      )
                    )
                ),
                i.createElement("div", { className: G.headerSeparator }),
                o.elements.styleSelector && i.createElement(E, { vm: n }),
                o.elements.feedbackIcon && i.createElement(D, { size: "small", onClick: () => t.pushActiveView(a.D.View.feedbackView) }),
                i.createElement(s, { gButtonVM: r }),
                i.createElement(I.P, {
                  className: G.citationBuilderCloseButton,
                  onClick: () => e("close", [{ type: "closeCard" }], { alertRefs: [] }),
                  tooltipMessage: "Close Citation Builder"
                })
              )
            )
          );
    },
    4585: (e, t, n) => {
      n.r(t), n.d(t, { CitationBuilderView: () => Ae });
      var i = n(27378),
        a = n(79452),
        r = n(3412),
        o = n(50790),
        l = n(33073);
      const d = {
          citationCopied: () => i.createElement(c, null),
          turnedOff: () => i.createElement(g, null),
          intextCopied: (e) => i.createElement(m, { citation: e.args.params.citation }),
          feedbackSubmitted: () => i.createElement(u, null)
        },
        s = ({ children: e }) => i.createElement("div", { className: l.contentWrapper }, e),
        c = () => i.createElement(s, null, i.createElement(o.DI.Content, null, "Citation copied to clipboard")),
        u = () => i.createElement(s, null, i.createElement(o.DI.Content, null, r.tu.notification)),
        m = ({ citation: e }) =>
          i.createElement(
            s,
            null,
            i.createElement(
              o.DI.Content,
              null,
              "“",
              e.result.reduce(
                (e, t, n) => {
                  if (40 === e.length) return e;
                  const a = e.length + t.value.length > 40,
                    r = a ? t.value.substring(0, 40 - e.length) : t.value;
                  return {
                    length: Math.min(40, e.length + t.value.length),
                    result: [
                      ...e.result,
                      i.createElement(
                        "span",
                        { key: n },
                        t.isPlaceholder
                          ? i.createElement("b", null, r)
                          : t.italicize
                          ? i.createElement("i", null, r)
                          : i.createElement("span", null, r),
                        a && i.createElement(i.Fragment, null, "…")
                      )
                    ]
                  };
                },
                { length: 0, result: [] }
              ).result,
              "” copied"
            )
          ),
        g = () =>
          i.createElement(
            s,
            null,
            i.createElement(
              o.DI.TitledContent,
              { title: "Grammarly Citation turned off" },
              "To turn it back on go to",
              i.createElement("br", null),
              " Browser toolbar → Grammarly."
            )
          );
      var p = n(47861),
        y = n(27190);
      const f = ({ manager: e, position: t }) =>
        i.createElement(p.i, {
          manager: e,
          theme: {
            grid: {
              container: y.ux.joinClasses([l.container, "left" === t.horizontalLocation ? l.containerLeft : l.containerRight]),
              bottomLeft: l.bottomLeft,
              bottomRight: l.bottomRight,
              top: l.top
            },
            view: { wrapper: l.notificationWrapper }
          },
          views: d
        });
      var h = n(57050),
        S = n(66013),
        v = n(48015),
        b = n(5114),
        k = n(71249),
        _ = n(95195),
        w = n(8543),
        x = n(14985),
        C = n(64757),
        E = n(31278),
        K = n(1509),
        I = n(66672),
        F = n(54001);
      const T = ({ title: e, width: t, children: n }) =>
          i.createElement(
            w.F.div,
            {
              className:
                "full" === t ? x.citationFormFullWidthItem : "auto" === t ? x.citationFormAutoWidthItem : x.citationFormHalfWidthItem
            },
            i.createElement(K.Z.Small, { className: x.citationFormLabel }, e),
            n
          ),
        q = ({ value: e, onChange: t, title: n, placeholder: a, width: r, validationFailed: o }) =>
          i.createElement(
            T,
            { title: n, width: r },
            i.createElement(I.B2, {
              value: e || "",
              onChange: (e) => t(e.currentTarget.value || void 0),
              placeholder: a,
              ...(0, F.Sh)(x.citationFormInput, null == o ? void 0 : o.view((e) => e && x.validationFailed))
            })
          ),
        B = ({ value: e, title: t, placeholder: n, width: a, validationFailed: r }) =>
          i.createElement(
            T,
            { title: t, width: a },
            i.createElement(I.II, {
              value: e,
              placeholder: n,
              ...(0, F.Sh)(x.citationFormInput, null == r ? void 0 : r.view((e) => e && x.validationFailed))
            })
          ),
        N = ({ value: e, title: t, validationFailed: n }) => {
          const a = (t, n) =>
            e.modify((e) => {
              const i = [...e];
              return i.splice(t, 1, n), i;
            });
          return i.createElement(
            "div",
            { className: x.citationFormCombinedInputContainer },
            i.createElement(
              w.F.Fragment,
              null,
              e.view((r) =>
                r.length > 0
                  ? r.map((o, l) =>
                      i.createElement(
                        i.Fragment,
                        { key: `${l}-${r.length}` },
                        i.createElement(q, {
                          value: o.firstName,
                          onChange: (e) => a(l, { ...o, firstName: e || "" }),
                          title: `${t} first name`,
                          validationFailed: n
                        }),
                        i.createElement(q, {
                          value: o.lastName,
                          onChange: (e) => a(l, { ...o, lastName: e || "" }),
                          title: `${t} last name`,
                          validationFailed: n
                        }),
                        i.createElement(
                          T,
                          { title: " " },
                          i.createElement(
                            C.zx.Ghost,
                            {
                              name: "remove-contributor",
                              onClick: () => {
                                return (
                                  (t = l),
                                  e.modify((e) => {
                                    const n = [...e];
                                    return n.splice(t, 1), n;
                                  })
                                );
                                var t;
                              },
                              className: x.removeButton
                            },
                            i.createElement(E.JO.Cross, null)
                          )
                        ),
                        i.createElement("div", { className: x.flexWrapDelimiter })
                      )
                    )
                  : i.createElement(K.Z.Small, { className: x.emptyAuthorsInputLabel }, t)
              )
            ),
            i.createElement(
              "div",
              null,
              i.createElement(
                C.zx.Ghost,
                {
                  name: "add-contributor",
                  onClick: () => e.modify((e) => [...e, { firstName: "", lastName: "" }]),
                  className: x.verticallySeparatedButton
                },
                i.createElement(E.JO.New, null),
                "Add ",
                t
              )
            )
          );
        };
      var D = n(43124),
        M = n(18813),
        G = n(8125);
      const z = ({ value: e, validationFailed: t }) =>
          i.createElement(
            M.L,
            {
              name: "month",
              label: i.createElement(
                C.zx.Flat,
                {
                  ...(0, F.Sh)(x.monthDropdownLabel, null == t ? void 0 : t.view((e) => e && x.validationFailed)),
                  name: "month-dropdown",
                  onClick: G.Q1
                },
                i.createElement(
                  w.F.span,
                  { style: { flex: 1 } },
                  e.view((e) => (void 0 === e ? "Month" : D.lQ[e - 1]))
                ),
                i.createElement(E.JO.Arrow, { direction: E.n4.down })
              ),
              appearanceBehavior: "mouseClick",
              customPosition: { top: "bottom", left: "auto" },
              showDelay: 0,
              theme: { dropdownContainer: x.monthDropdownContainer, dropdownList: x.monthDropdownList }
            },
            i.createElement(
              "div",
              { className: x.monthDropdownListContent },
              i.createElement(
                C.zx.Flat,
                { name: "month-dropdown-empty", onClick: () => e.set(void 0) },
                i.createElement(K.Z.Base, null, "Month")
              ),
              D.lQ.map((t, n) =>
                i.createElement(
                  C.zx.Flat,
                  { name: `month-dropdown-${t}`, onClick: () => e.set(n + 1), key: t },
                  i.createElement(K.Z.Base, { style: { flex: 1 } }, t)
                )
              )
            )
          ),
        A = ({ value: e, title: t, validationFailed: n }) => {
          const r = e.lens(a.D.Lenses.nullableCitationDateLens());
          return i.createElement(
            "div",
            { className: x.citationFormCombinedInputContainer },
            i.createElement(
              "div",
              null,
              i.createElement(K.Z.Small, { className: x.citationFormLabel }, t),
              i.createElement(z, { value: r.lens("month"), validationFailed: n })
            ),
            i.createElement(B, {
              value: r.lens(a.D.Lenses.nullableNumberFieldLens("day")),
              title: "Day",
              width: "auto",
              placeholder: "DD",
              validationFailed: n
            }),
            i.createElement(B, {
              value: r.lens(a.D.Lenses.nullableNumberFieldLens("year")),
              title: "Year",
              width: "auto",
              placeholder: "YYYY",
              validationFailed: n
            })
          );
        };
      var P = n(2844),
        L = n(91969),
        V = n(77176),
        O = n(93508),
        R = n(23239);
      const j = (e, t, n, i, a) => {
          const r = R.h.create(n(e.get()));
          return {
            textValue: P.aj([r.pipe(L.A()), e.pipe(L.A())]).pipe(
              V.U(([e, a]) => {
                const r = t(e.value),
                  o = a.value,
                  l = i(b.toUndefined(r), o);
                return a.timestamp > e.timestamp && !l ? n(o) : e.value;
              }),
              O.O("")
            ),
            validationFailed: R.h.combine(a || R.h.create(!1), r, (e, n) => e || (0, h.zG)(n, t, b.isNone)),
            onUserInput: (n) => {
              const i = t(n || "");
              r.set(n || ""), e.set(b.toUndefined(i));
            }
          };
        },
        W = ({ viewModel: e, title: t, placeholder: n, width: a }) =>
          i.createElement(q, {
            value: e.textValue,
            placeholder: n,
            title: t,
            width: a,
            onChange: e.onUserInput,
            validationFailed: e.validationFailed
          });
      var U = n(74444);
      const H = (e, t) =>
          j(
            e,
            (e) => {
              const t = e
                .replace(" ", "")
                .split(",")
                .map((e) => {
                  const t = e.split("-");
                  return "" === t[0] ? null : { startPage: t[0], endPage: t[1] || void 0 };
                })
                .filter((e) => null !== e);
              return b.some(t.length > 0 ? t : void 0);
            },
            (e) => {
              var t;
              return (
                (null === (t = null == e ? void 0 : e.map((e) => (e.endPage ? `${e.startPage}-${e.endPage}` : e.startPage))) || void 0 === t
                  ? void 0
                  : t.join(", ")) || ""
              );
            },
            (e, t) =>
              (null == e ? void 0 : e.length) === (null == t ? void 0 : t.length) &&
              (0, h.zG)(
                k.$R(e, t),
                k.yW(([e, t]) => U.vZ(e, t))
              ),
            t
          ),
        $ = ({ value: e, title: t, width: n, validationFailed: a }) =>
          i.createElement(W, { viewModel: H(e, a), placeholder: "1-2, A1, ii-xi", title: t, width: n }),
        Y = (e) => (void 0 === e ? "00" : e < 10 ? `0${e}` : e),
        Z = (e, t) =>
          j(
            e,
            (e) => {
              if ("" === e) return b.some(void 0);
              const t = e
                .split(":")
                .map(Number)
                .map((e) => (Number.isNaN(e) || e < 0 ? void 0 : e));
              return (0, h.zG)(
                t,
                k.yW((e) => void 0 === e)
              )
                ? b.some(void 0)
                : t.length <= 3
                ? b.some({ hour: t[t.length - 3], minute: t[t.length - 2], second: t[t.length - 1] || 0 })
                : b.none;
            },
            (e) =>
              void 0 === e
                ? ""
                : e.hour
                ? `${e.hour}:${Y(e.minute)}:${Y(e.second)}`
                : e.minute
                ? `${e.minute}:${Y(e.second)}`
                : `0:${e.second}`,
            U.vZ,
            t
          ),
        Q = ({ value: e, title: t, width: n, validationFailed: a }) =>
          i.createElement(W, { viewModel: Z(e, a), placeholder: "1-2, A1, ii-xi", title: t, width: n }),
        J = ["string", "number", "pages", "timestamp"],
        X = ["title", "promptText", "promptDescription"],
        ee = ({ fields: e, editingInput: t, invalidFields: n, width: o }) => {
          const l = (e) =>
            n.view(
              (0, h.ls)(
                b.map((t) => t.includes(e)),
                b.getOrElse(() => !1)
              )
            );
          return i.createElement(
            i.Fragment,
            null,
            e.map(([e, n]) => {
              switch (n) {
                case "string":
                case "number":
                  return i.createElement(B, {
                    title: r.dw[e],
                    value: t.lens("string" === n ? a.D.Lenses.nullableStringFieldLens(e) : a.D.Lenses.nullableNumberFieldLens(e)),
                    width: o,
                    validationFailed: l(e),
                    key: e
                  });
                case "authors":
                  return i.createElement(N, {
                    title: r.dw[e],
                    value: t.lens(e).lens(a.D.Lenses.nullableArrayLens()),
                    validationFailed: l(e),
                    key: e
                  });
                case "date":
                  return i.createElement(A, { value: t.lens(e), title: r.dw[e], validationFailed: l(e), key: e });
                case "pages":
                  return i.createElement($, {
                    key: e,
                    value: t.lens(e).lens(a.D.Lenses.nullableArrayLens()),
                    title: r.dw[e],
                    validationFailed: l(e),
                    width: o
                  });
                case "timestamp":
                  return i.createElement(Q, { key: e, value: t.lens(e), title: r.dw[e], validationFailed: l(e), width: o });
                default:
                  (0, v.vE)(n);
              }
            })
          );
        },
        te = ({ fields: e, editingInput: t, invalidFields: n }) =>
          i.createElement(
            w.F.div,
            { className: x.citationFormContainer },
            e.view(
              (0, h.ls)(
                b.map(
                  (0, h.ls)(
                    k.UI((e) => [e, S.Tk.EditingInputFieldTypes[e]]),
                    k.tV((e) => (X.includes(e[0]) || !J.includes(e[1]) ? _.left(e) : _.right(e))),
                    ({ left: e, right: a }) =>
                      i.createElement(
                        w.F.Fragment,
                        null,
                        i.createElement(ee, { fields: e, editingInput: t, invalidFields: n, width: "full" }),
                        i.createElement(ee, { fields: a, editingInput: t, invalidFields: n, width: "half" })
                      )
                  )
                ),
                b.toUndefined
              )
            )
          );
      var ne = n(70836);
      const ie = ({ color: e }) =>
        i.createElement(
          "svg",
          { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",
            fill: null != e ? e : ne.Z.red50
          }),
          i.createElement("path", {
            d: "M8.94827 4H7.05196L7.22242 10.1108H8.78208L8.94827 4ZM8.00225 12.8381C8.5477 12.8381 9.02071 12.3821 9.02498 11.8153C9.02071 11.2571 8.5477 10.8011 8.00225 10.8011C7.43975 10.8011 6.97526 11.2571 6.97952 11.8153C6.97526 12.3821 7.43975 12.8381 8.00225 12.8381Z",
            fill: ne.Z.neutral0
          })
        );
      var ae = n(6868);
      const re = ({ citation: e }) =>
          i.createElement(
            "div",
            { className: ae.fullCitationPreview },
            i.createElement(
              w.F.div,
              { className: ae.fullCitationText },
              e.result.map((e, t) =>
                i.createElement(
                  K.Z,
                  { key: e.value + String(t), styleType: K.Z.Type.Base, nodeType: "span", className: ae.citationText },
                  e.italicize ? i.createElement("i", null, e.value) : e.value
                )
              )
            )
          ),
        oe = ({ viewModel: e }) => {
          const t = R.h.combine(e.missingFields, e.showChangeSourceTypeMessage, (e, t) => ({
            fields: e,
            sourceType: t,
            isSomeDataMissing: e || t
          }));
          return i.createElement(
            w.F.Fragment,
            null,
            t.view(
              (t) =>
                t.isSomeDataMissing &&
                i.createElement(
                  w.F.div,
                  { className: ae.citationFooter },
                  i.createElement(
                    "div",
                    { className: ae.missingItemsContainer },
                    t.sourceType && i.createElement(de, { viewModel: e }),
                    t.fields > 0 && i.createElement(le, { viewModel: e, missingFields: t.fields })
                  )
                )
            )
          );
        },
        le = ({ missingFields: e, viewModel: t }) => (
          i.useEffect(() => {
            t.missingFieldsPromptShown();
          }, []),
          i.createElement(
            "div",
            { className: ae.missingItem },
            i.createElement("span", { className: ae.missingIconContainer }, i.createElement(ie, { color: ne.Z.yellow60 })),
            r.bL.citationViewMissingFieldsLabel(e),
            i.createElement("span", { className: ae.reviewMissingDot }, "·"),
            i.createElement(
              C.zx.Ghost,
              { name: "reviewMissing", className: ae.reviewMissing, onClick: t.goToMissingFieldsView },
              r.bL.review
            )
          )
        ),
        de = ({ viewModel: e }) =>
          i.createElement(
            "div",
            { className: ae.missingItem },
            i.createElement("span", { className: ae.missingIconContainer }, i.createElement(ie, { color: ne.Z.yellow60 })),
            r.bL.changeSourceType.question,
            i.createElement("span", { className: ae.reviewMissingDot }, "·"),
            i.createElement(
              C.zx.Ghost,
              { name: "changeSourceType", className: ae.reviewMissing, onClick: e.openStyleTypeSelector },
              r.bL.changeSourceType.action
            )
          ),
        se = ({ viewModel: e }) =>
          i.createElement(
            w.F.div,
            { className: ae.citationContainer },
            e.fullCitation.view(
              b.fold(
                () => i.createElement("p", { className: ae.errorState }, r.bL.noAutoCitation),
                (t) =>
                  i.createElement(
                    w.F.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: ae.citationBody },
                      i.createElement(re, { citation: t }),
                      i.createElement(
                        "div",
                        { className: ae.buttonsContainer },
                        i.createElement(
                          C.zx.Group,
                          { sticky: !0, className: ae.buttonsGroup },
                          i.createElement(
                            C.zx.Primary,
                            { name: "copyCitation", className: ae.copyButton, onClick: e.copyFullCitation.bind(e) },
                            r.bL.copy
                          ),
                          i.createElement(
                            M.L,
                            {
                              name: "citationMenu",
                              label: i.createElement(
                                C.zx.White,
                                { name: "menu", className: ae.moreButton },
                                i.createElement(E.JO.EllipsisSmall, { className: ae.moreIcon })
                              ),
                              align: "right",
                              vAlign: "top",
                              showDelay: 0,
                              appearanceBehavior: "mouseClick"
                            },
                            e.inTextCitation.view(
                              (0, h.ls)(
                                b.map(() =>
                                  i.createElement(
                                    C.zx.Flat,
                                    { key: "copyInText", name: "copyInText", onClick: e.copyInTextCitation.bind(e) },
                                    r.bL.copyInText
                                  )
                                ),
                                b.toNullable
                              )
                            ),
                            e.editingEnabled &&
                              i.createElement(C.zx.Flat, { name: "editCitation", onClick: e.goToAllFieldsEditingView }, r.bL.edit)
                          )
                        )
                      )
                    ),
                    e.editingEnabled && i.createElement(oe, { viewModel: e })
                  )
              )
            )
          );
      var ce = n(48879);
      const ue = ({ viewModel: e }) => {
        const t = R.h.create(!1);
        return i.createElement(
          "div",
          null,
          i.createElement(
            w.F.div,
            { className: ce.citationPreviewContainer },
            R.h.combine(e.fullCitation, e.showWarning, (e, t) =>
              (0, h.zG)(
                e,
                b.fold(
                  () => i.createElement("p", { className: ae.errorState }, "Error generating citation."),
                  (e) =>
                    e.result.length > 0
                      ? i.createElement(re, { citation: e })
                      : t &&
                        i.createElement(
                          "p",
                          { className: ae.errorState },
                          i.createElement("span", { className: ae.missingIconContainer }, i.createElement(ie, { color: ne.Z.yellow60 })),
                          r.bL.noAutoCitation
                        )
                )
              )
            )
          ),
          i.createElement(
            w.F.div,
            { className: ce.citationFormsContainer },
            t.view((n) =>
              i.createElement(
                w.F.Fragment,
                null,
                i.createElement(te, { fields: e.requiredKeyFields, editingInput: e.currentInput, invalidFields: e.invalidEditingFields }),
                e.secondaryFields.view(
                  (e) =>
                    (0, h.zG)(e, b.map(k.Od), b.getOrElse(h.jv)) &&
                    i.createElement(
                      C.zx.Tertiary,
                      { name: "show-secondary", onClick: () => t.modify((e) => !e), className: ce.verticallySeparatedButton },
                      n
                        ? i.createElement(i.Fragment, null, "Hide additional fields ", i.createElement(E.JO.Arrow, { direction: E.n4.up }))
                        : i.createElement(
                            i.Fragment,
                            null,
                            "Show additional fields ",
                            i.createElement(E.JO.Arrow, { direction: E.n4.down })
                          )
                    )
                ),
                n &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(te, { fields: e.secondaryFields, editingInput: e.currentInput, invalidFields: e.invalidEditingFields }),
                    i.createElement("div", { ref: (e) => (null == e ? void 0 : e.scrollIntoView()) })
                  )
              )
            )
          ),
          i.createElement(
            w.F.div,
            { className: ce.actionButtonsContainer },
            i.createElement(C.zx.Primary, { name: "save", onClick: e.commitInput }, "Save"),
            i.createElement(C.zx.Ghost, { name: "cancel", onClick: e.discardInput }, "Cancel")
          )
        );
      };
      var me = n(57019),
        ge = n(90845),
        pe = n(17343),
        ye = n(24209),
        fe = n(13444);
      const he = ({ children: e, animationDurationMs: t, ...n }) => {
        const { onMount: a, rect: r } = ge.P.useRectWatcher(),
          o = r.pipe(
            V.U(
              (0, h.ls)(
                b.map((e) => e.height),
                b.getOrElse(() => 0)
              )
            )
          ),
          l = P.aj([e, r]).pipe(pe.h("hidden")),
          d = ye.T(l, l.pipe(fe.g(t), pe.h("visible")));
        return i.createElement(
          w.F.div,
          { ...n, style: { height: o, overflow: d, transitionProperty: "height", transitionDuration: `${t}ms` } },
          i.createElement(w.F.div, { mount: a }, e)
        );
      };
      var Se = n(44501),
        ve = n(69552),
        be = n(42103),
        ke = n(44586),
        _e = n(76974),
        we = n(53370);
      const xe = "citation-window",
        Ce = ({ children: e, vm: t }) =>
          i.createElement(
            ve.p,
            null,
            i.createElement(
              be.G.DefaultProvider,
              null,
              i.createElement(
                "div",
                { className: we.citationBuilderWrapper, "data-grammarly-part": xe },
                i.createElement(
                  "div",
                  { "data-grammarly-part": "citation-window-header", className: we.citationBuilderWrapperHeader },
                  i.createElement(Se.h, {
                    notify: t.header.notify,
                    router: t.router,
                    gButtonVM: t.gButton,
                    styleTypeSelectorVM: t.styleTypeSelector
                  })
                ),
                i.createElement(
                  he,
                  {
                    "data-grammarly-part": "citation-window-content",
                    className: we.citationBuilderWrapperContent,
                    animationDurationMs: 300
                  },
                  (e instanceof ke.y ? e : _e.of(e)).pipe(
                    V.U((e) => i.createElement("div", { className: we.citationBuilderWindowContent }, e))
                  )
                )
              )
            )
          );
      var Ee = n(60561);
      const Ke = ({ viewModel: e, experimentClient: t }) =>
        i.createElement(
          "div",
          { style: { paddingTop: "12px" } },
          i.createElement(Ee.q, {
            withScore: !0,
            onSubmit: (t) => {
              e.submitFeedback(t.score, t.text, t.domain);
            },
            title: i.createElement("span", null, r.tu.title),
            hideTextBoxTitle: !0,
            hideLogo: !0,
            hideDomainHelpText: !0,
            showPostSubmitScreen: !1,
            submitButtonKind: "primary",
            domain: e.domain,
            experimentClient: t
          })
        );
      var Ie = n(83078),
        Fe = n(57992);
      const Te = ({ viewModel: e, isInitialView: t }) => (
        i.useEffect(() => {
          e.onAddMissingInfoFormShow(t);
        }, []),
        i.createElement(
          "div",
          null,
          i.createElement(
            w.F.div,
            { className: ce.citationPreviewContainer },
            R.h.combine(e.fullCitation, e.showWarning, e.fieldsMissedInParsing, (e, t, n) =>
              (0, h.zG)(
                e,
                b.fold(
                  () => i.createElement("p", { className: ae.errorState }, "Error generating citation."),
                  (e) =>
                    i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(re, { citation: e }),
                      t &&
                        b.isSome(n) &&
                        i.createElement(
                          "div",
                          { className: ae.citationFooter },
                          i.createElement("span", { className: ae.missingIconContainer }, i.createElement(ie, { color: ne.Z.yellow60 })),
                          r.bL.citationViewMissingFieldsLabel(Ie.MH(n).length)
                        )
                    )
                )
              )
            )
          ),
          i.createElement(
            w.F.div,
            { className: ce.citationFormsContainer },
            i.createElement("p", { className: Fe.missingInformationHeader }, "Missing Information"),
            i.createElement(te, { fields: e.fieldsMissedInParsing, editingInput: e.currentInput, invalidFields: e.invalidEditingFields })
          ),
          i.createElement(
            w.F.div,
            { className: ce.actionButtonsContainer },
            i.createElement(C.zx.Primary, { name: "save", onClick: e.commitInput }, "Save"),
            i.createElement(C.zx.Ghost, { name: "cancel", onClick: e.discardInput }, "Cancel"),
            i.createElement("div", { className: ce.flexSeparator }),
            i.createElement(C.zx.Tertiary, { name: "show-all", onClick: e.goToAllFieldsEditingView }, "Show all fields")
          )
        )
      );
      var qe = n(96309),
        Be = n(67506),
        Ne = n(9332);
      const De = ({ children: e, viewModel: t }) => {
          const n = () => {
            t.setOnboardingSeen();
          };
          return (
            i.useEffect(() => n, []),
            i.createElement(
              w.F.Fragment,
              null,
              t.onboardingSeen.view((t) =>
                i.createElement(
                  Be.J,
                  {
                    mainContent: i.createElement(Me, { onClose: n }),
                    isOutsideReferenceElement: !1,
                    theme: "dark",
                    placement: "top-start",
                    includeMainContentPadding: !1,
                    style: { zIndex: 1, marginLeft: "2px" },
                    headerIcon: "new-magic-badge",
                    onClose: n,
                    size: "medium",
                    distanceFromReferenceElement: 16,
                    closeButton: (e) => i.createElement(qe.P, { onClick: e, id: Ne.citationOnboardingCloseButton }),
                    show: !t
                  },
                  i.createElement("div", null, e)
                )
              )
            )
          );
        },
        Me = ({ onClose: e }) =>
          i.createElement(
            "div",
            { className: Ne.onboardingContent },
            i.createElement("div", { className: Ne.onboardingTitle }, r.qv.title),
            i.createElement("div", null, r.qv.subTitle),
            i.createElement(
              "div",
              { className: Ne.onboardingGotIt },
              i.createElement(C.zx.Ghost, { name: "citationBuilderOnboardingGotIt", onClick: e }, r.qv.button)
            )
          );
      var Ge = n(22232),
        ze = n(1469);
      const Ae = (e) =>
        i.createElement(
          "div",
          { className: ze.citationBuilderMainContainer },
          i.createElement(
            w.F.Fragment,
            null,
            ((e, t) => {
              const n = (0, v.hz)(() => {
                e.gnar.citePopupButtonShow(e.gnar.domain, e.gnar.sessionId, e.wasManuallyInvoked);
              });
              return e.state.view((r) => {
                switch (r) {
                  case a.D.State.citeSource:
                    return (
                      n(), i.createElement(De, { viewModel: e.onboarding }, i.createElement(me.e, { viewModel: e.gButton, disabled: !1 }))
                    );
                  case a.D.State.citeSourceDisabled:
                    return i.createElement(me.e, { viewModel: e.gButton, disabled: !0 });
                  case a.D.State.showWindow:
                    return i.createElement(
                      Ce,
                      { vm: e },
                      e.router.activeView.view((n) => {
                        switch (n.type) {
                          case a.D.ViewType.Default:
                            return i.createElement(se, { viewModel: e.citationView });
                          case a.D.ViewType.EditCitation:
                          case a.D.ViewType.EditCitationByDefault:
                            return i.createElement(ue, { viewModel: e.citationEditingView });
                          case a.D.ViewType.AddMissingInformation:
                            return i.createElement(Te, { viewModel: e.citationEditingView, isInitialView: !1 });
                          case a.D.ViewType.AddMissingInformationByDefault:
                            return i.createElement(Te, { viewModel: e.citationEditingView, isInitialView: !0 });
                          case a.D.ViewType.Feedback:
                            return i.createElement(Ke, { viewModel: e.feedbackView, experimentClient: t });
                          default:
                            return (0, Ge.vE)(n);
                        }
                      })
                    );
                  default:
                    (0, Ge.vE)(r);
                }
              });
            })(e.viewModel, e.experimentClient)
          ),
          i.createElement(f, { manager: e.viewModel.notificationsManager, position: e.viewModel.position })
        );
    },
    45854: (e, t, n) => {
      n.d(t, { I: () => s, O: () => i });
      var i,
        a = n(27378),
        r = n(50474),
        o = n(88056),
        l = n(19429),
        d = n(35407);
      !(function (e) {
        (e.Context = a.createContext(o.Y.invariantContent("AssistantTextResources"))),
          (e.holder = l.VF(() => ({
            setGoalsTooltip: "Set goals to get tailored writing suggestions",
            proofitTooltip: "Expert writing help"
          })));
      })(i || (i = {}));
      const s = d.Pj(d.GG({ denali: r.m.holder, assistant: i.holder }))(() => ({ denali: {} }));
    },
    81591: (e, t, n) => {
      n.d(t, { A: () => a });
      var i = n(23239);
      class a {
        constructor(e, t) {
          (this._viewHistory = []),
            (this._startupPlaceHolder = e),
            (this._activeView = i.h.create(this._startupPlaceHolder)),
            (this._defaultView = t);
        }
        get activeView() {
          return this._activeView.view();
        }
        get lastView() {
          return this._viewHistory[this._viewHistory.length - 1] || this._defaultView;
        }
        pushActiveView(e) {
          const t = this._activeView.get();
          e.type !== t.type && (t.type !== this._startupPlaceHolder.type && this._viewHistory.push(t), this._activeView.set(e));
        }
        popActiveView() {
          const e = this._viewHistory.pop() || this._defaultView;
          this._activeView.set(e);
        }
        replaceActiveView(e) {
          e.type !== this._activeView.get().type && this._activeView.set(e);
        }
      }
    },
    20330: (e, t, n) => {
      n.d(t, { l: () => c });
      var i = n(27378),
        a = n(5397),
        r = n(37522),
        o = n(6726),
        l = n(54001),
        d = n(71212),
        s = n.n(d);
      const c = ({ enableTooltip: e = !1, size: t = "medium", ...n }) =>
        i.createElement(
          o.u,
          { message: "Settings", showDelay: a.gk, disabled: !e },
          i.createElement(
            r.h,
            { ...n },
            i.createElement("div", {
              ...(0, l.Sh)("small" === t ? s().settingsButtonSmallIcon : null, "medium" === t ? s().settingsButtonMediumIcon : null)
            })
          )
        );
    },
    68610: (e, t, n) => {
      n.d(t, { J: () => c });
      var i = n(57050),
        a = n(27378),
        r = n(90845),
        o = n(60797),
        l = n(2834),
        d = n(54001),
        s = n(66206);
      const c = ({
        onChange: e,
        labelId: t,
        className: n,
        checkboxClassName: c,
        labelClassName: u,
        checked: m,
        children: g,
        disabled: p,
        useDS: y,
        dataGrammarlyPart: f = "ui-kit-checkbox",
        tabIndex: h = 0,
        onMount: S = i.Q1
      }) => {
        const [v, b] = a.useState(null != m && m);
        a.useEffect(() => {
          b(Boolean(m));
        }, [m]);
        const k = (t) => {
            t.preventDefault(), t.stopPropagation(), b(!v), null == e || e(!v);
          },
          { ref: _, onMount: w } = r.P.useElWatcher();
        return (
          a.useEffect(() => {
            const e = _.pipe(o.oA, l.b(S)).subscribe();
            return () => e.unsubscribe();
          }, []),
          a.createElement(
            "div",
            { "data-grammarly-part": f, ...(0, d.Sh)(s.checkboxContainer, n) },
            a.createElement(
              "div",
              {
                ...(0, d.Sh)(s.checkbox, c, v ? s.checkboxChecked : null, y ? s.checkboxDS : null),
                role: "checkbox",
                "aria-checked": v,
                tabIndex: h,
                "aria-labelledby": t,
                onKeyDown: (e) => {
                  " " === e.key && k(e);
                },
                onClick: p ? i.Q1 : k,
                ref: w
              },
              v ? a.createElement("div", { className: s.checkboxCheckmark }) : null
            ),
            a.createElement("label", { id: t, onClick: k, className: u }, g)
          )
        );
      };
    },
    8096: (e, t, n) => {
      n.d(t, { z: () => m });
      var i = n(27378),
        a = n(31542);
      const r = ({ children: e, style: t, dataGrammarlyPart: n = "ui-kit-iframe", ...r }) => {
        const [o, l] = i.useState(null),
          d = i.useCallback((e) => {
            var t, n;
            let i = null;
            "contentDocument" in e.target &&
              (i = null !== (n = null === (t = e.target.contentDocument) || void 0 === t ? void 0 : t.body) && void 0 !== n ? n : null),
              l(i),
              i && ((i.style.margin = "0"), (i.style.height = "100vh"), (i.style.overflowY = "hidden"));
          }, []);
        return i.createElement(
          "iframe",
          { ...r, style: { border: "none", ...t }, onLoad: d, srcDoc: "<html><body></body></html>", "data-grammarly-part": n },
          o && (0, a.createPortal)(e, o)
        );
      };
      var o = n(29927),
        l = n(35111),
        d = n.n(l),
        s = n(19374),
        c = n(9205);
      const u = ({ placeholder: e, ariaLabel: t, onChange: n }) => {
          const [a, r] = i.useState("");
          return (
            i.useEffect(() => {
              n(a);
            }, [a]),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(o.b, null, d().__css),
              i.createElement("div", {
                role: "textbox",
                className: d().textBox,
                contentEditable: !0,
                onInput: (e) => {
                  r(e.target.innerText);
                },
                "data-placeholder": e,
                "aria-placeholder": e,
                "aria-label": t
              })
            )
          );
        },
        m = ({ placeholder: e, onChange: t, ariaLabel: n, iframeTitle: a, className: o }) =>
          (0, s.E)().experimentClient.isGateEnabled(c.K.CentralizeStopEventPropagation)
            ? i.createElement(
                "div",
                { className: o, style: { width: "100%", height: "128px", maxHeight: "inherit" } },
                i.createElement(u, { onChange: t, ariaLabel: n, placeholder: e })
              )
            : i.createElement(
                r,
                { dataGrammarlyPart: "ui-kit-textbox", className: o, style: { width: "100%", height: "100%" }, title: a },
                i.createElement(u, { onChange: t, ariaLabel: n, placeholder: e })
              );
    },
    60561: (e, t, n) => {
      n.d(t, { q: () => K });
      var i = n(27378),
        a = n(9205),
        r = n(54001),
        o = n(62369),
        l = n(13311);
      const d = ({ fixSubmitButtonOverflowBottomPadding: e, className: t, ...n }) =>
          i.createElement(
            i.Fragment,
            null,
            i.createElement(o.z, { ...n, className: null != t ? t : l.feedbackFormSubmitButton }, n.children),
            i.createElement(s, { isEnabled: e })
          ),
        s = (e) =>
          e.isEnabled
            ? i.createElement(
                "div",
                { className: l.feedbackFormSubmitButtonFixOverflowBottomPadding },
                i.createElement("div", { className: l.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
              )
            : null,
        c = (e) =>
          i.createElement(
            "div",
            {
              "data-grammarly-part": "surveys-feedback-form-thank-you",
              ...(0, r.Sh)(l.feedbackFormContainer, l.feedbackFormContainerAlignCenter)
            },
            i.createElement(
              "div",
              { className: l.feedbackFormSuccessMessageTextContainer },
              i.createElement("div", { className: l.feedbackFormSuccessMessageIcon }),
              i.createElement("div", { className: l.feedbackFormSuccessMessageTitle }, "Thank you!"),
              i.createElement("div", { className: l.feedbackFormSuccessMessageSubtitle }, "Your feedback helps us improve.")
            ),
            i.createElement(d, { type: "button", kind: "success", onClick: e.onClose }, "Done")
          );
      var u = n(8096),
        m = n(48015),
        g = n(25985);
      const p = ({ options: e, onChange: t = () => null, ariaLabel: n, className: a }) => {
        const o = [],
          [l, d] = i.useState(null);
        i.useEffect(() => {
          var n;
          null !== l && (null === (n = o[l]) || void 0 === n || n.focus()), t(null !== l ? e[l].value : null);
        }, [l]);
        const s = null !== l ? e[l] : null;
        return i.createElement(
          "div",
          { "data-grammarly-part": "ui-kit-radio-group", className: a },
          i.createElement(
            "div",
            {
              className: g.radioGroup,
              role: "radiogroup",
              "aria-label": n,
              onKeyDown: (t) => {
                if (" " !== t.key || s) {
                  if ("ArrowRight" === t.key || "ArrowDown" === t.key) {
                    t.preventDefault(), t.stopPropagation();
                    d(((l || 0) + 1) % e.length);
                  } else if ("ArrowLeft" === t.key || "ArrowUp" === t.key) {
                    t.preventDefault(), t.stopPropagation();
                    const n = (l || 0) - 1;
                    d(n < 0 ? e.length - 1 : n);
                  }
                } else t.preventDefault(), t.stopPropagation(), d(0);
              }
            },
            e.map((e, t) => {
              const n = (null == s ? void 0 : s.value) === e.value,
                a = 0 === t;
              return i.createElement(
                "div",
                {
                  key: e.value,
                  ...(0, r.Sh)(g.radioGroupOption, n ? g.radioGroupOptionSelected : null),
                  role: "radio",
                  tabIndex: n || (a && !s) ? 0 : -1,
                  "aria-checked": n,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation(), d(t);
                  },
                  ref: (e) => o.push(e)
                },
                e.render()
              );
            })
          )
        );
      };
      var y;
      !(function (e) {
        (e.bad = "bad"), (e.ok = "ok"), (e.good = "good");
      })(y || (y = {}));
      var f = n(73610);
      const h = (e) => {
        const t = [y.bad, y.ok, y.good];
        return e.isEnabled
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(p, {
                ariaLabel: "Feedback Score",
                options: t.map((e) => ({
                  value: e,
                  render: () =>
                    i.createElement(
                      "div",
                      { className: f.feedbackFormOption },
                      i.createElement("div", { ...(0, r.Sh)(f.feedbackFormOptionIcon, S(e)) }),
                      i.createElement(
                        "div",
                        null,
                        (function (e) {
                          switch (e) {
                            case y.bad:
                              return "I dislike it";
                            case y.ok:
                              return "It’s OK";
                            case y.good:
                              return "I like it";
                            default:
                              (0, m.vE)(e);
                          }
                        })(e)
                      )
                    )
                })),
                onChange: e.onChange,
                ...(0, r.Sh)(l.feedbackFormScore, e.compactDisplay && l.compact)
              }),
              !e.hideTextBoxTitle && i.createElement("div", { className: l.feedbackFormTextBoxTitle }, "Anything we can improve?")
            )
          : null;
      };
      function S(e) {
        switch (e) {
          case y.bad:
            return f.feedbackFormOptionIconDisheartening;
          case y.ok:
            return f.feedbackFormOptionIconNeutral;
          case y.good:
            return f.feedbackFormOptionIconSmiling;
          default:
            (0, m.vE)(e);
        }
      }
      const v = (e) => (e.isEnabled ? i.createElement("div", { className: l.feedbackFormLogo }) : null),
        b = (e) => {
          var t;
          if (!e.isEnabled) return null;
          const n =
            null !== (t = e.title) && void 0 !== t
              ? t
              : i.createElement("span", null, "How do you like ", i.createElement("br", null), " Grammarly?");
          return i.createElement("h3", { ...(0, r.Sh)(l.feedbackFormTitle, e.isCompact && l.compact) }, n);
        };
      var k = n(68610);
      const _ = (e) =>
          e.domain
            ? i.createElement(
                i.Fragment,
                null,
                e.withHelpText &&
                  i.createElement(
                    "div",
                    { className: l.feedbackFormShareDomainTitle },
                    "Help improve Grammarly by sharing the domain you’re on:"
                  ),
                i.createElement(
                  k.J,
                  { labelId: "feedback-form-share-domain-checkbox", onChange: e.onChange, className: l.feedbackFormShareDomainCheckbox },
                  "Include the domain ",
                  i.createElement("b", null, e.domain),
                  " with my feedback"
                )
              )
            : null,
        w = (e) => {
          var t, n, a;
          const [o, s] = i.useState(null),
            [c, m] = i.useState(""),
            [g, p] = i.useState(!1);
          return i.createElement(
            "form",
            {
              "data-grammarly-part": "surveys-feedback-form-fields",
              ...(0, r.Sh)(l.feedbackFormContainer, "center" === e.align && l.feedbackFormContainerAlignCenter)
            },
            i.createElement(
              "div",
              { className: l.feedbackFormFields },
              i.createElement(v, { isEnabled: !e.hideLogo }),
              i.createElement(b, {
                isEnabled: !e.hideTitle,
                title: e.title,
                isCompact: null !== (t = e.compactDisplay) && void 0 !== t && t
              }),
              i.createElement(h, {
                isEnabled: e.withScore,
                compactDisplay: e.compactDisplay,
                hideTextBoxTitle: e.hideTextBoxTitle,
                onChange: s
              }),
              i.createElement(u.z, {
                onChange: m,
                placeholder: null !== (n = e.placeholderText) && void 0 !== n ? n : "Your thoughts here",
                ariaLabel: "Feedback Text",
                iframeTitle: "Feedback text field",
                ...(0, r.Sh)(l.feedbackFormTextBox, e.compactDisplay && l.compact)
              }),
              i.createElement(_, { domain: e.domain, withHelpText: !e.hideDomainHelpText, onChange: p })
            ),
            i.createElement(
              d,
              {
                type: "submit",
                kind: null !== (a = e.submitButtonKind) && void 0 !== a ? a : "success",
                disabled: e.withScore ? !o : !c,
                fixSubmitButtonOverflowBottomPadding: e.fixSubmitButtonOverflowBottomPadding,
                onClick: (t) => {
                  t.preventDefault();
                  const n = g ? e.domain : void 0;
                  e.withScore && o ? e.onSubmit({ score: o, text: c, domain: n }) : !e.withScore && c && e.onSubmit({ text: c, domain: n });
                }
              },
              "Submit"
            )
          );
        };
      var x = n(86061);
      const C = ({
          hideLogo: e = !1,
          align: t = "center",
          fixSubmitButtonOverflowBottomPadding: n = !1,
          showPostSubmitScreen: a = !0,
          ...r
        }) => {
          const [o, l] = i.useState(!1),
            d = o && a;
          return i.createElement(
            "div",
            {
              style: r.style,
              "data-grammarly-part": "surveys-feedback-form",
              role: "region",
              "aria-label": "Provide feedback",
              "aria-live": "polite"
            },
            d
              ? i.createElement(c, { fixSubmitButtonOverflowBottomPadding: n, onClose: r.onClose })
              : i.createElement(w, {
                  ...r,
                  hideLogo: e,
                  align: t,
                  fixSubmitButtonOverflowBottomPadding: n,
                  onSubmit: (e) => {
                    r.withScore ? ((0, x.n8)(e), r.onSubmit(e)) : ((0, x.TY)(e), r.onSubmit(e)), l(!0);
                  }
                })
          );
        },
        E = ({ hideLogo: e = !1, align: t = "center", fixSubmitButtonOverflowBottomPadding: n = !1, ...a }) => {
          var d;
          const s = [y.bad, y.ok, y.good],
            [c, m] = i.useState(null),
            [g, h] = i.useState(""),
            [S, v] = i.useState(!1),
            [b, _] = i.useState(!1);
          let w;
          return (
            (w =
              b && !1 !== a.showPostSubmitScreen
                ? i.createElement(
                    "div",
                    {
                      "data-grammarly-part": "surveys-feedback-form-thank-you",
                      ...(0, r.Sh)(l.feedbackFormContainer, l.feedbackFormContainerAlignCenter)
                    },
                    i.createElement(
                      "div",
                      { className: l.feedbackFormSuccessMessageTextContainer },
                      i.createElement("div", { className: l.feedbackFormSuccessMessageIcon }),
                      i.createElement("div", { className: l.feedbackFormSuccessMessageTitle }, "Thank you!"),
                      i.createElement("div", { className: l.feedbackFormSuccessMessageSubtitle }, "Your feedback helps us improve.")
                    ),
                    i.createElement(
                      o.z,
                      { className: l.feedbackFormSubmitButton, kind: "success", type: "submit", onClick: a.onClose },
                      "Done"
                    ),
                    n
                      ? i.createElement(
                          "div",
                          { className: l.feedbackFormSubmitButtonFixOverflowBottomPadding },
                          i.createElement("div", { className: l.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
                        )
                      : null
                  )
                : i.createElement(
                    "div",
                    {
                      "data-grammarly-part": "surveys-feedback-form-fields",
                      ...(0, r.Sh)(l.feedbackFormContainer, "center" === t ? l.feedbackFormContainerAlignCenter : null)
                    },
                    i.createElement(
                      "div",
                      { className: l.feedbackFormFields },
                      e ? null : i.createElement("div", { className: l.feedbackFormLogo }),
                      a.hideTitle
                        ? null
                        : i.createElement(
                            "div",
                            { ...(0, r.Sh)(l.feedbackFormTitle, a.compactDisplay ? l.compact : null) },
                            a.title || i.createElement("span", null, "How do you like ", i.createElement("br", null), " Grammarly?")
                          ),
                      a.withScore
                        ? i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(p, {
                              ariaLabel: "Feedback Score",
                              options: s.map((e) => ({
                                value: e,
                                render() {
                                  let t, n;
                                  return (
                                    e === y.bad
                                      ? ((t = f.feedbackFormOptionIconDisheartening), (n = "I dislike it"))
                                      : e === y.ok
                                      ? ((t = f.feedbackFormOptionIconNeutral), (n = "It’s OK"))
                                      : ((t = t = f.feedbackFormOptionIconSmiling), (n = "I like it")),
                                    i.createElement(
                                      "div",
                                      { className: f.feedbackFormOption },
                                      i.createElement("div", { ...(0, r.Sh)(f.feedbackFormOptionIcon, t) }),
                                      i.createElement("div", null, n)
                                    )
                                  );
                                }
                              })),
                              onChange: m,
                              ...(0, r.Sh)(l.feedbackFormScore, a.compactDisplay ? l.compact : null)
                            }),
                            a.hideTextBoxTitle
                              ? null
                              : i.createElement("div", { className: l.feedbackFormTextBoxTitle }, "Anything we can improve?")
                          )
                        : null,
                      i.createElement(u.z, {
                        onChange: h,
                        placeholder: a.placeholderText || "Your thoughts here",
                        ariaLabel: "Feedback Text",
                        ...(0, r.Sh)(l.feedbackFormTextBox, a.compactDisplay ? l.compact : null)
                      }),
                      a.domain
                        ? i.createElement(
                            i.Fragment,
                            null,
                            a.hideDomainHelpText
                              ? null
                              : i.createElement(
                                  "div",
                                  { className: l.feedbackFormShareDomainTitle },
                                  "Help improve Grammarly by sharing the domain you’re on:"
                                ),
                            i.createElement(
                              k.J,
                              { labelId: "feedback-form-share-domain-checkbox", onChange: v, className: l.feedbackFormShareDomainCheckbox },
                              "Include the domain ",
                              i.createElement("b", null, a.domain),
                              " with my feedback"
                            )
                          )
                        : null
                    ),
                    i.createElement(
                      o.z,
                      {
                        className: l.feedbackFormSubmitButton,
                        kind: null !== (d = a.submitButtonKind) && void 0 !== d ? d : "success",
                        type: "submit",
                        disabled: a.withScore ? !c : !g,
                        onClick: () => {
                          var e, t;
                          a.withScore && c
                            ? (null === (e = a.onSubmit) || void 0 === e || e.call(a, { score: c, text: g, domain: S ? a.domain : void 0 }),
                              _(!0))
                            : !a.withScore &&
                              g &&
                              (null === (t = a.onSubmit) || void 0 === t || t.call(a, { text: g, domain: S ? a.domain : void 0 }), _(!0));
                        }
                      },
                      "Submit"
                    ),
                    n
                      ? i.createElement(
                          "div",
                          { className: l.feedbackFormSubmitButtonFixOverflowBottomPadding },
                          i.createElement("div", { className: l.feedbackFormSubmitButtonFixOverflowBottomPaddingChild })
                        )
                      : null
                  )),
            i.createElement(
              "div",
              { style: a.style, "data-grammarly-part": "surveys-feedback-form", role: "region", "aria-label": "Provide feedback" },
              w
            )
          );
        },
        K = ({ experimentClient: e, ...t }) =>
          e.isGateEnabled(a.K.ExtensionA11yKeyboardNavigation) ? i.createElement(C, { ...t }) : i.createElement(E, { ...t });
    },
    86061: (e, t, n) => {
      function i(e) {
        return "score" in e;
      }
      function a(e) {
        if (!i(e)) throw new Error("Received unexpected feedback form data without score");
      }
      function r(e) {
        if (i(e)) throw new Error("Received unexpected feedback form data with score");
      }
      n.d(t, { TY: () => r, dK: () => i, n8: () => a });
    },
    91980: (e, t, n) => {
      var i = n(54933),
        a = n(93476)(i);
      a.push([
        e.id,
        "._z3YOv-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._z3YOv-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",
        ""
      ]),
        (a.locals = { textBox: "_z3YOv-textBox" }),
        (e.exports = a);
    },
    14985: (e) => {
      e.exports = {
        citationFormInput: "xEI8b",
        validationFailed: "y3K5S",
        citationFormContainer: "ciO2T",
        citationFormFullWidthItem: "adkKD",
        citationFormHalfWidthItem: "wM8KF",
        citationFormAutoWidthItem: "UC1qT",
        citationFormCombinedInputContainer: "UB_fF",
        flexWrapDelimiter: "lgYEX",
        verticallySeparatedButton: "EBtwA",
        citationFormLabel: "PTjcO",
        emptyAuthorsInputLabel: "UIWog",
        removeButton: "eDoCo",
        monthDropdownLabel: "CQb_B",
        monthDropdownContainer: "RPcgD",
        monthDropdownList: "XkRyQ",
        monthDropdownListContent: "uP_5p"
      };
    },
    48879: (e) => {
      e.exports = {
        citationPreviewContainer: "eHG3J",
        citationFormsContainer: "EdADf",
        flexSeparator: "SPaBA",
        verticallySeparatedButton: "Wcd0d",
        actionButtonsContainer: "j7PGz"
      };
    },
    99105: (e) => {
      e.exports = {
        citationGButtonContainer: "jW6zC",
        citationGButtonSettings: "Z3z9c",
        citationGButtonSettingsLeft: "Q2AWV",
        visible: "hCj_U",
        hidden: "DskjF",
        citationGButtonSettingsRight: "Akjks",
        citationGButtonSettingsContainer: "u83J9",
        citationGButtonSettingsContainerLeft: "QnTvU",
        citationGButtonSettingsContainerRight: "Eb0bS",
        citationGButton: "bltGM",
        disabledCitationGButton: "lYFIy",
        settingsIcon: "quLN3",
        disableMenuText: "Ten_A",
        dropdownContainer: "i6QYE",
        dropdownContainerLeft: "doIDs",
        dropdownContainerRight: "E2gr6",
        dropdownContainerBottom: "c2KSI",
        dropdownContainerTop: "wb14t",
        spin: "cLcFF"
      };
    },
    6868: (e) => {
      e.exports = {
        citationContainer: "HG2vG",
        citationBody: "OfipI",
        citationFooter: "SXPDa",
        errorState: "c9Dk4",
        fullCitationPreview: "bpkVs",
        fullCitationText: "gYcOY",
        buttonsContainer: "Xrrfg",
        buttonsGroup: "_26_Ju",
        moreButton: "AdRL2",
        moreIcon: "oLHdU",
        copyButton: "ruFrp",
        citationText: "zy8b9",
        reviewMissingDot: "U3yPs",
        reviewMissing: "e4kdK",
        missingIconContainer: "ivQPa",
        missingItemsContainer: "Pes95",
        missingItem: "eJ0Bs"
      };
    },
    53370: (e) => {
      e.exports = {
        styleTypeSelectorContainer: "gTqAM",
        citationBuilderCloseButton: "CGpI8",
        citationBuilderWrapper: "SDOXs",
        citationBuilderWrapperHeader: "mbUFb",
        citationBuilderWrapperContent: "xyaJS",
        spin: "Kz_zR"
      };
    },
    37427: (e) => {
      e.exports = {
        actions_hovered: "H0KY7",
        header: "krAQX",
        citationBuilderHeader: "zQ_WB",
        draggableWrapper: "ZLfwG",
        draggable: "aaK2h",
        headerActions: "NW_wC",
        headerActionBtnProofitIcon: "doZbO",
        headerActionBtnGoalsIcon: "jFXVN",
        logoscore_fadein: "Fye6Z",
        fadein: "LrmXc",
        logoscore_fadeout: "LvNOO",
        fadeout: "k5MPg",
        logo_score: "jHlY6",
        citationBuilderHeaderBottom: "Wq9Bu",
        citationBuilderHeaderTop: "T0w8C",
        headerSeparator: "jyXHU",
        logoIcon: "tcIOu",
        backIcon: "Ym1B0",
        title: "jBHDX",
        headerContent: "qWLF2",
        spin: "qxE7o"
      };
    },
    80190: (e) => {
      e.exports = { dropdownContainer: "rbVgb", settingsButton: "EYG8l" };
    },
    57992: (e) => {
      e.exports = { missingInformationHeader: "z0rlU" };
    },
    33073: (e) => {
      e.exports = {
        container: "PhVhU",
        containerLeft: "Fq4Vh",
        containerRight: "CIeiA",
        baseGrid: "qD0vI",
        bottomLeft: "XFcFy",
        bottomRight: "vEzpC",
        top: "jy8qk",
        notificationWrapper: "CFl7s",
        contentWrapper: "p7tSh"
      };
    },
    9332: (e) => {
      e.exports = {
        onboardingContent: "n12f8",
        onboardingTitle: "VlqXr",
        onboardingGotIt: "RK9xl",
        citationOnboardingCloseButton: "IS16Q"
      };
    },
    73137: (e) => {
      e.exports = {
        selectorButton: "h1AP1",
        arrowIcon: "UmkUb",
        selectorButtonLabel: "Ml3GV",
        selectorPadding: "MAfbF",
        dropdownContainer: "G4Lw1",
        styleButtonGroup: "CyOts",
        styleButton: "rQBK5"
      };
    },
    1469: (e) => {
      e.exports = { citationBuilderMainContainer: "JApPF" };
    },
    6883: (e) => {
      e.exports = { feedbackButtonMediumIcon: "hiv9G", feedbackButtonSmallIcon: "hZk_v", spin: "YouEU" };
    },
    71212: (e) => {
      e.exports = { settingsButtonMediumIcon: "jerdC", settingsButtonSmallIcon: "PlOGe", spin: "MH8w4" };
    },
    66206: (e) => {
      e.exports = {
        checkboxContainer: "Te37e",
        checkbox: "mFHkX",
        checkboxDS: "DdH2q",
        checkboxChecked: "JhHnz",
        checkboxCheckmark: "zShXt",
        spin: "tww6q"
      };
    },
    25985: (e) => {
      e.exports = { radioGroup: "KAzfW", radioGroupOption: "WkjDU", radioGroupOptionSelected: "onilo" };
    },
    13311: (e) => {
      e.exports = {
        feedbackFormContainer: "kjElf",
        feedbackFormContainerAlignCenter: "hkEx2",
        feedbackFormFields: "Ua5wJ",
        feedbackFormTitle: "GnQ_a",
        feedbackFormTextBoxTitle: "kWEW0",
        feedbackFormLogo: "phQGV",
        compact: "b7yYp",
        feedbackFormScore: "ZOSRK",
        feedbackFormTextBox: "l8New",
        feedbackFormShareDomainTitle: "Qbnj_",
        feedbackFormShareDomainCheckbox: "VBCx1",
        feedbackFormSubmitButton: "tYYGU",
        feedbackFormSubmitButtonFixOverflowBottomPadding: "Opd8X",
        feedbackFormSubmitButtonFixOverflowBottomPaddingChild: "QKLT7",
        feedbackFormSuccessMessageTextContainer: "ARBzt",
        feedbackFormSuccessMessageIcon: "kJIzg",
        feedbackFormSuccessMessageTitle: "iXQnf",
        feedbackFormSuccessMessageSubtitle: "Ydufo",
        spin: "Vv6WG"
      };
    },
    73610: (e) => {
      e.exports = {
        feedbackFormOption: "sp8vS",
        feedbackFormOptionIcon: "eH6DL",
        feedbackFormOptionIconDisheartening: "DhaWh",
        feedbackFormOptionIconNeutral: "BS_8d",
        feedbackFormOptionIconSmiling: "dUZNd",
        spin: "uouSO"
      };
    }
  }
]);
