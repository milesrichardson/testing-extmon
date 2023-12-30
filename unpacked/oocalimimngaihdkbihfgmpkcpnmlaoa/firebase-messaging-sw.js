/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  "use strict";
  ({
    2723: function () {
      var e =
        (this && this.t) ||
        function (e, t, i, n) {
          return new (i || (i = Promise))(function (o, s) {
            function r(e) {
              try {
                c(n.next(e));
              } catch (e) {
                s(e);
              }
            }
            function a(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(r, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"),
        importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"),
        firebase.initializeApp({
          apiKey: "AIzaSyDmxz7HsfNuhW52Mti-Q9lAGHJYOzEijb8",
          authDomain: "teleparty-auth---test.firebaseapp.com",
          projectId: "teleparty-auth---test",
          storageBucket: "teleparty-auth---test.appspot.com",
          messagingSenderId: "391169153212",
          appId: "1:391169153212:web:0eae4ff68890df614b18b9",
          measurementId: "G-MFZH5P1Z4E"
        });
      const t = firebase.messaging();
      function i() {
        self.clients.matchAll().then((e) => {
          e.forEach((e) => {
            e.postMessage("tp_update");
          });
        });
      }
      console.log("Service is working"),
        self.addEventListener("notificationclick", (t) =>
          e(void 0, void 0, void 0, function* () {
            console.log("ON notification click: ", t.notification);
            (yield chrome.runtime.getBackgroundClient()).postMessage({ type: "notification_click", tag: t.notification.tag }),
              t.notification.close();
          })
        ),
        t.onBackgroundMessage((t) =>
          e(void 0, void 0, void 0, function* () {
            console.log("[firebase-messaging-sw.js] Received background message ", t);
            const e = t.data,
              { name: n, status: o, type: s } = e,
              r = yield chrome.runtime.getBackgroundClient();
            return (
              i(),
              r.postMessage({ type: "notification_received", data: e }),
              "friend_request" === s
                ? self.registration.showNotification("pending" === o ? "New Friend Request" : "New Friend", {
                    body: "pending" === o ? `You've received a new friend request from ${n}` : `You are now friends with ${n}`,
                    icon: "img/icon.png",
                    type: "basic",
                    tag: "friend",
                    requireInteraction: !1
                  })
                : "dropin_request" === s
                ? (i(),
                  self.registration.showNotification("requested" === o ? "New Party Request" : "New Party Invitation", {
                    body: "requested" === o ? `${n} requested to join your Teleparty.` : `${n} invited you to their Teleparty.`,
                    icon: "img/icon.png",
                    type: "basic",
                    tag: "friend",
                    requireInteraction: !0,
                    silent: !1
                  }))
                : void 0
            );
          })
        );
    }
  })[2723]();
})();
