"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5535, 3990],
  {
    55535: (M, t, N) => {
      N.r(t), N.d(t, { default: () => T });
      var D = N(99437),
        e = N(2770);
      const I = D.Z.extend({
        mixins: [e.Z, e.H],
        data: () => ({
          id: null,
          dateEdit: { date: null, hasHours: !1, utcDate: null },
          name: "",
          isTeam: null,
          pinned: !1,
          random: !1,
          readOnly: !1,
          props: ["pinned", "name", "dateEdit"]
        }),
        unreactive: () => ({
          months: m.constants.monthNamesShort,
          daysOfWeek: m.constants.dayNamesShort,
          timeOptions: { hour: "numeric", minute: "2-digit" }
        }),
        computed: {
          date: () => m.models.date,
          currentTime() {
            return this.date.get("date").getTime();
          },
          tooltip() {
            let M = new Date(this.dateEdit.utcDate);
            return `${this.daysOfWeek[M.getDay()]} ${this.months[M.getMonth()]} ${M.getDate()}, ${M.getFullYear()}`;
          },
          time() {
            return new Date(this.dateEdit.utcDate).toLocaleTimeString("en-US", this.timeOptions) + " ";
          },
          value() {
            let M,
              t = this.dateEdit.utcDate,
              N = this.calcTimeLeft(this.currentTime, t),
              D = this.dateEdit.hasHours,
              e = "";
            return (
              D && N.minsTot < 60
                ? ((M = 0 === N.minsTot ? "Now" : N.minsTot), (e = "m"))
                : D && N.hoursTot < 24
                ? ((M = N.hoursTot), (e = "h"))
                : ((M = D || 0 !== N.nights ? N.nights : "Today"), (e = "d")),
              N.past && (e += " ago"),
              ("Now" !== M && "Today" !== M) || (e = ""),
              M + e
            );
          }
        },
        watch: {
          "editProps.dateEdit.date"(M) {
            this.editProps.dateEdit && M && M.getTime && (this.editProps.dateEdit.utcDate = M.getTime());
          },
          "dateEdit.date"(M) {
            this.dateEdit && M && M.getTime && (this.dateEdit.utcDate = M.getTime());
          }
        },
        methods: {
          updateData: function (M) {
            (this.dateEdit.utcDate = Number.parseInt(M.utcDate)),
              (this.dateEdit.hasHours = M.hasHours),
              (this.dateEdit.date = new Date(this.dateEdit.utcDate)),
              (this.archived = M.archived),
              (this.isTeam = M.isTeam || !1),
              (this.name = M.name),
              (this.pinned = M.pinned),
              (this.id = M.id),
              (this.readOnly = M.readOnly);
          },
          setDefaultDate: function () {
            if (!this.dateEdit.utcDate) {
              let M = new Date(new Date().getTime() + 6048e5);
              this.dateEdit.utcDate = M.getTime();
            }
            return this.dateEdit.utcDate;
          },
          nightsBetween(M, t, N) {
            let D = M,
              e = t;
            M >= t && ((D = t), (e = M));
            let I = e - D,
              g = this.calcDayMs(D, N) + I,
              i = Math.floor(g / 864e5);
            return 0 !== i && M >= t && (i *= -1), i;
          },
          calcDayMs(M, t) {
            let N = M - new Date(M).setHours(0, 0, 0, 0) - 36e5 * t;
            return N < 0 && (N += 864e5), N;
          },
          calcTimeLeft(M, t) {
            let N = (t - M) / 6e4,
              D = N / 60,
              e = this.nightsBetween(M, t, 4),
              I = N < 0;
            return { minsTot: Math.abs(Math.round(N)), hoursTot: Math.abs(Math.round(D)), nights: Math.abs(e), past: I };
          }
        }
      });
      var g = N(31624);
      const i = new (D.Z.extend({ unreactive: () => ({ type: "countdowns" }), mixins: [g.X] }))();
      var j = N(94234),
        A = N(13990),
        u = N(61250);
      const a = () => Promise.all([N.e(4427), N.e(338)]).then(N.bind(N, 60338)),
        T = new (D.Z.extend({
          mixins: [j.FZ, j.cl, j.TF, j.Ox, j.mX, (0, u.Z)(() => ({ is_paid_event: !0 }))],
          unreactive() {
            return {
              ...A.Z.countdowns,
              Model: I,
              dataService: i,
              visibleSetting: "countdownVisible",
              sort: (M, t) => this.sortPinned(M, t, this.dashSort),
              dashSort: (M, t) => M.dateEdit.date - t.dateEdit.date,
              fields: [
                { property: "name", class: "item-body", type: "input", label: "Name", required: !0, dataTest: "name", autoCapitalize: !0 },
                { property: "dateEdit", type: a },
                { property: "pinned", type: "toggle", label: "Pin to dashboard", dataTest: "pinned" }
              ]
            };
          },
          methods: {
            getAddRequestBody: (M) => (
              M.editProps.dateEdit.utcDate || (M.editProps.dateEdit.utcDate = M.setDefaultDate()),
              {
                name: m.utils.capitalizeFirstLetter(M.editProps.name),
                utcDate: M.editProps.dateEdit.utcDate,
                hasHours: M.editProps.dateEdit.hasHours,
                pinned: M.editProps.pinned
              }
            )
          }
        }))();
    },
    13990: (M, t, N) => {
      N.d(t, { Z: () => D });
      const D = {
        countdowns: { type: "countdowns", icon: N(77917), upsellId: "UPSELL_COUNTDOWNS" },
        metrics: { type: "metrics", icon: N(80660), upsellId: "UPSELL_METRICS" },
        clocks: { type: "clocks", names: { fullLowerCasePlural: "world clocks" }, icon: N(31584), upsellId: "UPSELL_WORLD_CLOCKS" }
      };
    },
    61250: (M, t, N) => {
      N.d(t, { Z: () => e });
      var D = N(81405);
      function e(M = () => ({})) {
        return {
          methods: {
            capture(t, { properties: N = {}, context: e = {} } = {}) {
              Object.assign(N, M({ ...e, eventName: t, properties: N })),
                !N.feature && this.fullNameLCP
                  ? (N.feature = this.fullNameLCP)
                  : console.warn(
                      'captureMixin used without a "feature" property. Please add the namesMixin to the component or return a "feature" property when adding captureMixin'
                    ),
                D.ZP.capture(t, N);
            }
          }
        };
      }
    },
    31584: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTIyLjU2MyAzMS4zMTNhOC43NSA4Ljc1IDAgMSAxIDguNzUtOC43NSA4Ljc2IDguNzYgMCAwIDEtOC43NSA4Ljc1em0wLTE1YTYuMjUgNi4yNSAwIDEgMCA2LjI1IDYuMjUxIDYuMjU5IDYuMjU5IDAgMCAwLTYuMjUtNi4yNTF6Ii8+PHBhdGggZD0iTTI1Ljg3OCAyMy44MTNoLTMuMzE2YTEuMjUgMS4yNSAwIDAgMS0xLjI1LTEuMjV2LTMuMzE0YTEuMjUgMS4yNSAwIDAgMSAyLjUgMHYyLjA2NGgyLjA2NmExLjI1IDEuMjUgMCAwIDEgMCAyLjV6Ii8+PHBhdGggZD0iTTE0LjExOSAzMS4xODhhMS4yNDQgMS4yNDQgMCAwIDEtLjE2OS0uMDEyQTE1LjMxNCAxNS4zMTQgMCAwIDEgNi43MiAzLjgyYTE1LjMxNCAxNS4zMTQgMCAwIDEgMjQuNDYgMTAuMTQ2IDEuMjUgMS4yNSAwIDAgMS0yLjQ4LjMzNCAxMi44MTMgMTIuODEzIDAgMSAwLTE0LjQxNSAxNC40IDEuMjUgMS4yNSAwIDAgMS0uMTY2IDIuNDg4eiIvPjxwYXRoIGQ9Ik0xMi42MTIgMzAuOWExLjI1IDEuMjUgMCAwIDEtMS4wMzQtLjU0NkExOS4xNzcgMTkuMTc3IDAgMCAxIDkgMjMuODEzSDMuNTZhMS4yNSAxLjI1IDAgMCAxIDAtMi41aDQuOTg3YTM4LjM4MyAzOC4zODMgMCAwIDEtLjM1OS01SDEuOTY5YTEuMjUgMS4yNSAwIDAgMSAwLTIuNWg2LjI3N2EzNS42NSAzNS42NSAwIDAgMSAuNjE4LTVINC43NDlhMS4yNSAxLjI1IDAgMSAxIDAtMi41aDQuNzNhMTYuOTg3IDE2Ljk4NyAwIDAgMSAyLjEtNC42NjcgMS4yNSAxLjI1IDAgMCAxIDIuMDY2IDEuNDA3IDEzLjQ2MSAxMy40NjEgMCAwIDAtMS41NDUgMy4yNmg3Ljc4M2EyMC4wNTcgMjAuMDU3IDAgMCAwLTEuNTcyLTMuMzI3IDEuMjUgMS4yNSAwIDEgMSAyLjE1LTEuMjczIDIyLjQ4MSAyMi40ODEgMCAwIDEgMi4wNjMgNC42aDQuNzI2YTEuMjUgMS4yNSAwIDAgMSAwIDIuNWgtNC4wNzhhMjIuMTQ2IDIyLjE0NiAwIDAgMSAuMzM3IDIuMzQ1IDEuMjUgMS4yNSAwIDEgMS0yLjQ5LjIyMyAxOS44NzUgMTkuODc1IDAgMCAwLS40LTIuNTY3aC05LjJhMzIuODMxIDMyLjgzMSAwIDAgMC0uNjY5IDVoMy4xMjJhMS4yNSAxLjI1IDAgMCAxIDAgMi41aC0zLjE4NGEzNS41NDQgMzUuNTQ0IDAgMCAwIC4zODggNWguMjM1YTEuMjUgMS4yNSAwIDAgMSAuMjQ3IDIuNDc2IDE2LjA1NiAxNi4wNTYgMCAwIDAgMi4wODUgNS4xNTggMS4yNSAxLjI1IDAgMCAxLTEuMDMxIDEuOTUyeiIvPjwvc3ZnPgo=";
    },
    77917: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjEyMTMgNDQuMzY0QzIxLjk0OTcgNDMuMTkyNCAyMS45NDk3IDQxLjI5MjkgMjMuMTIxMyA0MC4xMjEzQzI0LjI5MjkgMzguOTQ5NyAyNi4xOTI0IDM4Ljk0OTcgMjcuMzY0IDQwLjEyMTNMMjkuNjAyIDQyLjM1OTRMMzYuODQwMSAzNS4xMjEzQzM4LjAxMTcgMzMuOTQ5NyAzOS45MTEyIDMzLjk0OTcgNDEuMDgyNyAzNS4xMjEzQzQyLjI1NDMgMzYuMjkyOSA0Mi4yNTQzIDM4LjE5MjQgNDEuMDgyNyAzOS4zNjRMMzEuNzIzNiA0OC43MjMxQzMwLjU1MiA0OS44OTQ3IDI4LjY1MjUgNDkuODk0NyAyNy40ODA5IDQ4LjcyMzFDMjcuNDYyOCA0OC43MDUgMjcuNDQ1IDQ4LjY4NjcgMjcuNDI3NSA0OC42NjgzQzI3LjQwNjEgNDguNjQ4MSAyNy4zODQ5IDQ4LjYyNzUgMjcuMzY0IDQ4LjYwNjZMMjMuMTIxMyA0NC4zNjRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiA2SDQyVjNDNDIgMS4zNDMxNSA0My4zNDMxIDAgNDUgMEM0Ni42NTY5IDAgNDggMS4zNDMxNSA0OCAzVjZINTRDNTkuNTIyOCA2IDY0IDEwLjQ3NzIgNjQgMTZWNTRDNjQgNTkuNTIyOSA1OS41MjI4IDY0IDU0IDY0SDEwQzQuNDc3MTUgNjQgMCA1OS41MjI4IDAgNTRWMTZDMCAxMC40NzcyIDQuNDc3MTUgNiAxMCA2SDE2VjNDMTYgMS4zNDMxNSAxNy4zNDMxIDAgMTkgMEMyMC42NTY5IDAgMjIgMS4zNDMxNSAyMiAzVjZaTTE5IDE4QzIwLjY1NjkgMTggMjIgMTYuNjU2OSAyMiAxNVYxMkg0MlYxNUM0MiAxNi42NTY5IDQzLjM0MzEgMTggNDUgMThDNDYuNjU2OSAxOCA0OCAxNi42NTY5IDQ4IDE1VjEySDU0QzU2LjIwOTEgMTIgNTggMTMuNzkwOSA1OCAxNlYyMEg2VjE2QzYgMTMuNzkwOSA3Ljc5MDg2IDEyIDEwIDEySDE2VjE1QzE2IDE2LjY1NjkgMTcuMzQzMSAxOCAxOSAxOFpNNiAyNlY1NEM2IDU2LjIwOTEgNy43OTA4NiA1OCAxMCA1OEg1NEM1Ni4yMDkxIDU4IDU4IDU2LjIwOTEgNTggNTRWMjZINloiLz48L3N2Zz4=";
    },
    80660: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDFDNjEuNjU2OCAxIDYzIDIuMzQzMTUgNjMgNFY0Ljk3NTcyQzYzLjAwMDEgNC45OTA3OCA2My4wMDAxIDUuMDA1ODMgNjMgNS4wMjA4OFYxM0M2MyAxNC42NTY5IDYxLjY1NjggMTYgNjAgMTZDNTguMzQzMSAxNiA1NyAxNC42NTY5IDU3IDEzVjExLjM1N0w0Ni42NzI2IDE5Ljg2MThDNDQuODc4OCAyMS4zMzkxIDQyLjUzMTMgMjEuOTYzNCA0MC4yNDA2IDIxLjU3MjNMMjMuOTczMiAxOC43OTQ5QzIzLjQ2NTQgMTguNzA4MiAyMi45NDM3IDE4LjgyMDggMjIuNTE2OSAxOS4xMDkyTDUuNjc5NTcgMzAuNDg1OEM0LjMwNjcyIDMxLjQxMzQgMi40NDE4MyAzMS4wNTI0IDEuNTE0MjMgMjkuNjc5NkMwLjU4NjYyOCAyOC4zMDY3IDAuOTQ3NTczIDI2LjQ0MTggMi4zMjA0MiAyNS41MTQyTDE5LjE1NzcgMTQuMTM3N0MyMC44NjUxIDEyLjk4NDEgMjIuOTUxOCAxMi41MzM3IDI0Ljk4MjkgMTIuODgwNUw0MS4yNTA0IDE1LjY1NzlDNDEuODIzIDE1Ljc1NTYgNDIuNDA5OSAxNS41OTk2IDQyLjg1ODQgMTUuMjMwM0w1Mi44NTIzIDdINTFDNDkuMzQzMSA3IDQ4IDUuNjU2ODUgNDggNEM0OCAyLjM0MzE1IDQ5LjM0MzEgMSA1MSAxSDYwWiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkgMjVDMjYuMjM4NiAyNSAyNCAyNy4yMzg2IDI0IDMwVjU4QzI0IDYwLjc2MTQgMjYuMjM4NiA2MyAyOSA2M0gzNUMzNy43NjE0IDYzIDQwIDYwLjc2MTQgNDAgNThWMzBDNDAgMjcuMjM4NiAzNy43NjE0IDI1IDM1IDI1SDI5Wk0zNCA1N0gzMFYzMUgzNFY1N1oiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDM5QzcuMjM4NTcgMzkgNSA0MS4yMzg2IDUgNDRWNThDNSA2MC43NjE0IDcuMjM4NTcgNjMgMTAgNjNIMTZDMTguNzYxNCA2MyAyMSA2MC43NjE0IDIxIDU4VjQ0QzIxIDQxLjIzODYgMTguNzYxNCAzOSAxNiAzOUgxMFpNMTEgNTdWNDVIMTVWNTdIMTFaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAzN0M0MyAzNC4yMzg2IDQ1LjIzODYgMzIgNDggMzJINTRDNTYuNzYxNCAzMiA1OSAzNC4yMzg2IDU5IDM3VjU4QzU5IDYwLjc2MTQgNTYuNzYxNCA2MyA1NCA2M0g0OEM0NS4yMzg2IDYzIDQzIDYwLjc2MTQgNDMgNThWMzdaTTQ5IDM4VjU3SDUzVjM4SDQ5WiIgLz48L3N2Zz4=";
    }
  }
]);
