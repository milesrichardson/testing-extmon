"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1554, 3990],
  {
    71554: (M, N, D) => {
      D.r(N), D.d(N, { default: () => y });
      var e = D(99437),
        I = D(31624);
      const g = new (e.Z.extend({
        unreactive: () => ({ type: "clocks" }),
        defaultPath: "clocks",
        mixins: [I.X],
        methods: {
          findTimezone(M) {
            return this.$xhr.get("timezones/search?name=" + M.toLowerCase()).then((M) => M.data);
          }
        }
      }))();
      var t = D(2770),
        j = D(40531);
      const A = e.Z.extend({
        mixins: [t.Z, t.H],
        data: () => ({
          id: null,
          timezone: { timeZoneId: "", shortName: "", timeZoneName: "", offset: 0 },
          name: "",
          pinned: !1,
          random: !1,
          isTeam: null,
          readOnly: !1,
          props: ["pinned", "timezone", "name"]
        }),
        computed: {
          date: () => m.models.date,
          offset() {
            return this.timezone.offset;
          },
          offsetDate() {
            let M = new Date(this.date.get("date"));
            return this.offset && M.setUTCSeconds(M.getUTCSeconds() + this.offset), M;
          },
          time() {
            let M = this.offsetDate.getUTCHours(),
              N = m.utils.twoDigit(this.offsetDate.getUTCMinutes());
            return j.ax.hour12clock ? `${M > 12 ? M - 12 : 0 === M ? 12 : M}:${N}${M >= 12 ? "p" : "a"}` : `${M < 10 ? 0 : ""}${M}:${N}`;
          },
          difference: function () {
            const M = this.date.get("date"),
              N = this.offsetDate,
              D = M.getDate() == N.getUTCDate() ? "Today" : M.getDate() + 1 == N.getUTCDate() ? "Tomorrow" : "Yesterday",
              e = M.getTime(),
              I = N.getTime() + 60 * N.getTimezoneOffset() * 1e3,
              g = I > e ? (I - e) / m.utils.mConst("msPerHour") : (e - I) / m.utils.mConst("msPerHour");
            return D + ", " + (e > I ? "-" : "+") + (g % 1 != 0 ? Math.round(10 * g) / 10 : Math.round(g)) + " hrs";
          },
          value() {
            return this.time;
          },
          tooltip() {
            return this.difference;
          }
        },
        watch: {
          "editProps.timezone.shortName"(M) {
            M && !this.editProps.name && (this.editProps.name = M);
          }
        },
        methods: {
          updateData(M) {
            (this.timezone.timeZoneId = M.timeZoneId),
              (this.timezone.timeZoneName = M.timeZoneName),
              (this.timezone.offset = parseInt(M.currentOffset)),
              (this.name = M.name),
              (this.archived = M.archived),
              (this.isTeam = M.isTeam || !1),
              (this.id = M.id),
              (this.pinned = M.pinned),
              (this.readOnly = M.readOnly);
          }
        }
      });
      var i = D(94234),
        T = D(13990),
        u = D(61250);
      const z = () => D.e(7490).then(D.bind(D, 97490)),
        y = new (e.Z.extend({
          mixins: [i.FZ, i.cl, i.TF, i.Ox, i.mX, (0, u.Z)(() => ({ is_paid_event: !0 }))],
          unreactive() {
            return {
              ...T.Z.clocks,
              Model: A,
              dataService: g,
              visibleSetting: "multiClockVisible",
              sort: (M, N) => this.sortPinned(M, N, this.dashSort),
              dashSort: (M, N) => M.offset - N.offset,
              fields: [
                { property: "timezone", type: z, label: "Timezone", required: !0, requiredComponentFields: ["timeZoneId"] },
                { property: "name", label: "Name", required: !0, type: "input", dataTest: "name" },
                { property: "pinned", type: "toggle", label: "Pin to Dashboard", dataTest: "pinned" }
              ]
            };
          },
          methods: {
            getAddRequestBody: ({ editProps: M }) => ({
              pinned: M.pinned,
              timeZoneId: M.timezone.timeZoneId,
              name: M.name,
              timeZoneName: M.timezone.timeZoneName
            })
          }
        }))();
    },
    13990: (M, N, D) => {
      D.d(N, { Z: () => e });
      const e = {
        countdowns: { type: "countdowns", icon: D(77917), upsellId: "UPSELL_COUNTDOWNS" },
        metrics: { type: "metrics", icon: D(80660), upsellId: "UPSELL_METRICS" },
        clocks: { type: "clocks", names: { fullLowerCasePlural: "world clocks" }, icon: D(31584), upsellId: "UPSELL_WORLD_CLOCKS" }
      };
    },
    61250: (M, N, D) => {
      D.d(N, { Z: () => I });
      var e = D(81405);
      function I(M = () => ({})) {
        return {
          methods: {
            capture(N, { properties: D = {}, context: I = {} } = {}) {
              Object.assign(D, M({ ...I, eventName: N, properties: D })),
                !D.feature && this.fullNameLCP
                  ? (D.feature = this.fullNameLCP)
                  : console.warn(
                      'captureMixin used without a "feature" property. Please add the namesMixin to the component or return a "feature" property when adding captureMixin'
                    ),
                e.ZP.capture(N, D);
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
