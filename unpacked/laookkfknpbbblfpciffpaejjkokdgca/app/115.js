(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [115],
  {
    91547: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      var o = s(8081),
        i = s.n(o),
        a = s(23645),
        n = s.n(a)()(i());
      n.push([
        e.id,
        "\n/* stylelint-disable */\n.benefit-list[data-v-2627579e] { display: flex; flex-direction: column; gap: 0.6em; font-size: 1.1875rem;\n}\n.benefit[data-v-2627579e] { display: flex; gap: 0.8em; align-items: center; line-height: 130%;\n}\n.icon-check[data-v-2627579e] { --icon-size: 18px; flex-shrink: 0; color: #2cd2d2;\n}\n",
        ""
      ]);
      const r = n;
    },
    43082: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      var o = s(8081),
        i = s.n(o),
        a = s(23645),
        n = s.n(a)()(i());
      n.push([
        e.id,
        "\n/* stylelint-disable */\n.body[data-v-45e4f87e] { font-size: 1.0625rem; font-style: italic; font-weight: 500; line-height: 160%; text-indent: -0.7ch;\n}\n.source[data-v-45e4f87e] { margin-top: 0.75rem; display: flex; gap: 1rem; align-items: center; justify-content: center;\n}\n.source-photo[data-v-45e4f87e] { --size: 60px; height: var(--size); width: var(--size); display: inline-block; border-radius: var(--size);\n}\n.source-name[data-v-45e4f87e] { padding-bottom: 1px; opacity: 0.8; font-size: 0.9375rem; font-weight: 600; line-height: 1;\n}\n",
        ""
      ]);
      const r = n;
    },
    48608: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      var o = s(8081),
        i = s.n(o),
        a = s(23645),
        n = s.n(a)()(i());
      n.push([
        e.id,
        "\n/* stylelint-disable */\n.testimonials[data-v-d73ebfc0] { position: relative; align-self: stretch; flex: 1 0 auto; display: flex;\n}\n.testimonial-container[data-v-d73ebfc0] { width: 100%; min-width: 0; margin-right: -100%; display: flex; gap: 2em;\n}\n.testimonial-wrapper[data-v-d73ebfc0] { position: relative;\n}\n.hidden[data-v-d73ebfc0] { visibility: hidden;\n}\n.visible[data-v-d73ebfc0] { position: absolute; top: 0; right: 0; left: 0;\n}\n.control[data-v-d73ebfc0] { --size: 36px; height: var(--size); width: var(--size); margin-top: 1em; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, var(--opacity-stop-4)); border-radius: var(--size); cursor: pointer; transition: 0.05s var(--a-curve);\n}\n.control[data-v-d73ebfc0]:hover { background: var(--color-stop-2);\n}\n.control[data-v-d73ebfc0]:hover:active { transform: scale(0.9);\n}\n.control .icon[data-v-d73ebfc0] { --icon-size: 11px; --centering-adjustment: 1.5px;\n}\n.control .icon-back[data-v-d73ebfc0] { margin-left: calc(var(--centering-adjustment) * -1);\n}\n.control .icon-fwd[data-v-d73ebfc0] { margin-left: var(--centering-adjustment); transform: rotate(180deg);\n}\n\n/* Compact mode */\n.compact .testimonial-container[data-v-d73ebfc0] { gap: 0.75rem;\n}\n.compact .control[data-v-d73ebfc0] { --size: 20px; opacity: 0; border: none;\n}\n.compact.testimonials:hover .control[data-v-d73ebfc0] { opacity: var(--opacity-stop-4);\n}\n.compact[data-v-d73ebfc0] .body { font-size: 0.875rem; font-weight: 400; line-height: 140%;\n}\n.compact[data-v-d73ebfc0] .source { margin-top: 0.5rem; gap: 0.5rem;\n}\n.compact[data-v-d73ebfc0] .source-photo { --size: 30px;\n}\n.compact[data-v-d73ebfc0] .source-name { font-size: 0.8125rem;\n}\n\n/* Animations */\n.slide-fade-enter-active[data-v-d73ebfc0], .slide-fade-leave-active[data-v-d73ebfc0], .slide-fade-reverse-enter-active[data-v-d73ebfc0], .slide-fade-reverse-leave-active[data-v-d73ebfc0] { transition: .4s ease-in-out;\n}\n.slide-fade-enter[data-v-d73ebfc0], .slide-fade-reverse-leave-to[data-v-d73ebfc0] { opacity: 0; transform: translateX(40%);\n}\n.slide-fade-leave-to[data-v-d73ebfc0], .slide-fade-reverse-enter[data-v-d73ebfc0] { opacity: 0; transform: translateX(-40%);\n}\n",
        ""
      ]);
      const r = n;
    },
    77471: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => a });
      var o = function () {
        var e = this,
          t = e._self._c;
        return t(
          "ul",
          { staticClass: "benefit-list" },
          e._l(e.benefits, function (s, o) {
            return t("li", { key: o, staticClass: "benefit" }, [
              t(
                "svg",
                { staticClass: "icon icon-check benefit-icon", attrs: { viewBox: "0 0 15 17", xmlns: "http://www.w3.org/2000/svg" } },
                [
                  t("path", {
                    attrs: {
                      d: "M14.1006 2.59263C14.4279 1.98479 14.2005 1.22671 13.5926 0.899411C12.9848 0.572114 12.2267 0.799536 11.8994 1.40737L14.1006 2.59263ZM4.89941 14.4074C4.57211 15.0152 4.79954 15.7733 5.40738 16.1006C6.01521 16.4279 6.77329 16.2005 7.10059 15.5926L4.89941 14.4074ZM5.06574 15.8305C5.52439 16.3464 6.31448 16.3929 6.83045 15.9343C7.34643 15.4756 7.39291 14.6855 6.93426 14.1695L5.06574 15.8305ZM2.93426 9.66955C2.47561 9.15357 1.68552 9.10709 1.16955 9.56574C0.653567 10.0244 0.607091 10.8145 1.06574 11.3305L2.93426 9.66955ZM11.8994 1.40737L4.89941 14.4074L7.10059 15.5926L14.1006 2.59263L11.8994 1.40737ZM6.93426 14.1695L2.93426 9.66955L1.06574 11.3305L5.06574 15.8305L6.93426 14.1695Z",
                      fill: "currentColor"
                    }
                  })
                ]
              ),
              e._v(" "),
              t("span", { staticClass: "benefit-text" }, [e._v(e._s(s))])
            ]);
          }),
          0
        );
      };
      o._withStripped = !0;
      const i = {
        name: "BenefitList",
        props: {
          benefits: {
            type: Array,
            default: () => [
              "More widgets and features",
              "Todo integrations",
              "Customize the photos, quotes and mantras",
              "Priority support",
              "Support development"
            ]
          }
        }
      };
      s(59100);
      const a = (0, s(51900).Z)(i, o, [], !1, null, "2627579e", null).exports;
    },
    35323: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => l });
      var o = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          { staticClass: "testimonials", class: { compact: !0 === e.compact } },
          [
            t("transition", { attrs: { name: e.transitionName } }, [
              t("div", { key: e.testimonialIndex, staticClass: "testimonial-container" }, [
                t(
                  "span",
                  {
                    staticClass: "control",
                    on: {
                      click: function (t) {
                        return e.prev();
                      }
                    }
                  },
                  [t("inline-svg", { staticClass: "icon icon-back", attrs: { src: s(86043) } })],
                  1
                ),
                e._v(" "),
                t(
                  "div",
                  { staticClass: "testimonial-wrapper" },
                  [
                    t("testimonial", e._b({ staticClass: "hidden" }, "testimonial", e.longestTestimonial, !1)),
                    e._v(" "),
                    t("testimonial", e._b({ staticClass: "visible" }, "testimonial", e.testimonial, !1))
                  ],
                  1
                ),
                e._v(" "),
                t(
                  "span",
                  {
                    staticClass: "control",
                    on: {
                      click: function (t) {
                        return e.next();
                      }
                    }
                  },
                  [t("inline-svg", { staticClass: "icon icon-fwd", attrs: { src: s(86043) } })],
                  1
                )
              ])
            ])
          ],
          1
        );
      };
      o._withStripped = !0;
      var i = function () {
        var e = this,
          t = e._self._c;
        return t("div", { staticClass: "testimonial" }, [
          t("div", { staticClass: "body" }, [e._v("\n\t\t“" + e._s(e.body) + "”\n\t")]),
          e._v(" "),
          t("div", { staticClass: "source" }, [
            t("img", { staticClass: "source-photo", attrs: { src: e.photo } }),
            e._v(" "),
            t("span", { staticClass: "source-name" }, [e._v(e._s(e.source))])
          ])
        ]);
      };
      i._withStripped = !0;
      const a = {
        name: "Testimonial",
        props: { body: { type: String, required: !0 }, photo: { type: String, required: !0 }, source: { type: String, required: !0 } }
      };
      s(57941);
      var n = s(51900);
      const r = (0, n.Z)(a, i, [], !1, null, "45e4f87e", null).exports;
      let c = [
        {
          body: "I love Momentum for urgent things thanks to its visibility (it’s always my browser launch page). I have a tech PM/scrum master background and believe strongly that good software is worth paying for.",
          source: "Emily Fleck",
          photo: s(16118)
        },
        {
          body: "Awesome extension. I've just upgraded to Plus so I could integrate my Microsoft To Do and add a background. There was a slight issue so I contacted the support team. They got back to me with some personal service and fixed the issue within a day.",
          source: "Mark L.",
          photo: s(82618)
        },
        {
          body: "Super clean and easy to use. Easily my favourite Chrome extension. Definitely worth the upgrade! Keep up the great work, guys!",
          source: "Emily C.",
          photo: s(20098)
        },
        {
          body: "I love paying for Momentum. It has brought me so much joy and inspiration in the past few years. So happy to support and get access to awesome features like: adding my own photos, countdown timers, to-do list integrations, and tons of other customizations!",
          source: "Izzy Piyale-Sheard",
          photo: s(25127)
        },
        {
          body: "This was about the fastest I've ever moved to a premium subscription for anything! I've been looking for ages for something that would let me manage multiple to-do lists but without having to go into a different app. Momentum is perfect.",
          source: "Lucy E.",
          photo: s(69443)
        },
        {
          body: "Something about managing my rituals, tasks, notes, and Pomodoros in Momentum seriously clicked. Momentum has become the “nerve center” of my computer use, with a permanent full-screen display on my second monitor.",
          source: "Misha Kessler",
          photo: s(62317)
        },
        {
          body: "I've been paying for Premium since 2015, and don't think I'll ever stop. I love this product and have gotten just about everyone in my workplace to start using it too.",
          source: "Sher S.",
          photo: s(96831)
        },
        {
          body: "I appreciate how Momentum is a calm oasis in the middle of my hectic online worklife. I often find myself opening a new tab just so I can pause and reset. With Momentum much of what I need is at my fingertips.",
          source: "Peter Svensk",
          photo: s(55205)
        },
        {
          body: "I was trying to become more productive and found that my browser kept distracting me all the time. I wanted something that could help me to focus, to stay calm and achieve what I wanted to. When I found Momentum I immediately fell in love with it.",
          source: "Florian W.",
          photo: s(97239)
        },
        {
          body: "I LOVE using Momentum Plus and it's now a permanent part of my productivity routine. Sitting down at my computer to work or study is such a joy when the first thing I do every day is create a clear focus (or several!) and choose a stunning photo & quote that fits my mood and goals.",
          source: "Bea H.",
          photo: s(83337)
        },
        {
          body: "Thank you sincerely for giving me back the momentum during work. My company is building up sustainability since over 7 years in a highly complex and challenging market. However since you are my new tab, I get time to breathe and readjust focus.",
          source: "Bernhard H.",
          photo: s(88828)
        },
        {
          body: "Momentum Plus really helps me set up my day by greeting me with absolutely stunning photography and an always thought provoking quote. My absolute favorite features are Todos and Notes. I quickly enter to-dos as they present themselves and use the notes almost every time the phone rings.",
          source: "John K.",
          photo: s(17913)
        },
        {
          body: "Phenomenal, way beyond expectations. Love the images; Plus is well worth the customization and integration with my task manager. Awesome.",
          source: "Kevin L.",
          photo: s(25033)
        },
        { body: "Never thought I'd pay for a Chrome new tab extension. This thing is killer.", source: "Etienne J.", photo: s(16781) },
        {
          body: "When I was using just the free version I still would have easily rated Momentum 5 stars, but with Momentum Plus it is so far beyond that. I like my New Tab page now.",
          source: "Spencer C.",
          photo: s(98592)
        },
        { body: "This is one of my fave apps. I was glad to pay to upgrade to Plus.", source: "Scott W.", photo: s(8501) }
      ];
      const d = {
        name: "Testimonials",
        components: { Testimonial: r },
        props: { compact: { type: Boolean, required: !1, default: !1 } },
        data: () => ({ testimonialIndex: 0, reverseTransition: !1 }),
        computed: {
          longestTestimonial: () => c.reduce((e, t) => (e.body.length > t.body.length ? e : t)),
          testimonial() {
            return c[this.testimonialIndex];
          },
          transitionName() {
            return this.reverseTransition ? "slide-fade-reverse" : "slide-fade";
          }
        },
        created() {
          this.shuffle(c), this.startTimeout(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1);
        },
        destroyed() {
          this.stopTimeout();
        },
        methods: {
          next() {
            (this.reverseTransition = !1),
              this.testimonialIndex < c.length - 1 ? this.testimonialIndex++ : (this.testimonialIndex = 0),
              this.resetTimeout();
          },
          prev() {
            (this.reverseTransition = !0),
              this.testimonialIndex > 0 ? this.testimonialIndex-- : (this.testimonialIndex = c.length - 1),
              this.resetTimeout();
          },
          startTimeout() {
            this.timeout = setTimeout(() => this.next(), 12e3);
          },
          stopTimeout() {
            clearTimeout(this.timeout);
          },
          resetTimeout() {
            this.stopTimeout(), this.startTimeout();
          },
          shuffle(e) {
            for (let t = e.length - 1; t > 0; t--) {
              const s = Math.floor(Math.random() * (t + 1));
              [e[t], e[s]] = [e[s], e[t]];
            }
          },
          handleVisibilityChange() {
            document.hidden ? this.stopTimeout() : this.startTimeout();
          }
        }
      };
      s(42022);
      const l = (0, n.Z)(d, o, [], !1, null, "d73ebfc0", null).exports;
    },
    59100: (e, t, s) => {
      var o = s(91547);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals),
        (0, s(45346).Z)("6ae3081f", o, !1, { ssrId: !0 });
    },
    57941: (e, t, s) => {
      var o = s(43082);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals),
        (0, s(45346).Z)("574e67e8", o, !1, { ssrId: !0 });
    },
    42022: (e, t, s) => {
      var o = s(48608);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals),
        (0, s(45346).Z)("7dc9ce48", o, !1, { ssrId: !0 });
    },
    86043: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkuMDQgNDkyIj48cGF0aCBkPSJNMTk4LjYxLDI0Ni4xLDM4Mi42Niw2MmEyNywyNywwLDAsMCwwLTM4LjA2TDM2Ni41NCw3Ljg2YTI3LDI3LDAsMCwwLTM4LjA2LDBMMTA5LjMzLDIyN2EyNy4xNSwyNy4xNSwwLDAsMCwwLDM4LjE5TDMyOC4yNyw0ODQuMTRhMjcsMjcsMCwwLDAsMzguMDcsMEwzODIuNDYsNDY4YTI3LDI3LDAsMCwwLDAtMzguMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjQ4KSIgLz48L3N2Zz4K";
    },
    83337: (e, t, s) => {
      "use strict";
      e.exports = s.p + "2ce8055f986bc6dee8c5.jpg";
    },
    88828: (e, t, s) => {
      "use strict";
      e.exports = s.p + "bf1746205b63bd682b61.jpg";
    },
    20098: (e, t, s) => {
      "use strict";
      e.exports = s.p + "7dcd749eb052076cf7ab.jpg";
    },
    16118: (e, t, s) => {
      "use strict";
      e.exports = s.p + "e07bb0de02c6085d4f5c.jpg";
    },
    16781: (e, t, s) => {
      "use strict";
      e.exports = s.p + "4320de402212b955425f.jpg";
    },
    97239: (e, t, s) => {
      "use strict";
      e.exports = s.p + "c0a46f213f7639c14820.jpg";
    },
    25127: (e, t, s) => {
      "use strict";
      e.exports = s.p + "da5af1cc3b49cc00a51f.jpg";
    },
    17913: (e, t, s) => {
      "use strict";
      e.exports = s.p + "234af0777b41aa816758.jpg";
    },
    25033: (e, t, s) => {
      "use strict";
      e.exports = s.p + "54db86154489c3132fcb.jpg";
    },
    69443: (e, t, s) => {
      "use strict";
      e.exports = s.p + "46141c2fef12b200c898.jpg";
    },
    82618: (e, t, s) => {
      "use strict";
      e.exports = s.p + "07da12a3adcc9450412a.jpg";
    },
    62317: (e, t, s) => {
      "use strict";
      e.exports = s.p + "1b5529b45aad093edd6e.jpg";
    },
    55205: (e, t, s) => {
      "use strict";
      e.exports = s.p + "33903d3b1c6ada29c899.jpg";
    },
    8501: (e, t, s) => {
      "use strict";
      e.exports = s.p + "b37049aad45a0f19f1be.jpg";
    },
    96831: (e, t, s) => {
      "use strict";
      e.exports = s.p + "94632686d9dc53be5c53.jpg";
    },
    98592: (e, t, s) => {
      "use strict";
      e.exports = s.p + "943a180d36d895917bdd.jpg";
    }
  }
]);
