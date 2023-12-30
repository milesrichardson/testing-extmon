var bg, csTop;
!function () {
  "use strict";
  var t = this,
    e = [],
    n = !1,
    c =
      (document.addEventListener("visibilitychange", function () {
        var t;
        bg &&
          !document.hidden &&
          ((t = setTimeout(o, 200)),
          bg.getLinkedAccount(function () {
            clearTimeout(t);
          }));
      }),
      function (t) {
        e.push(t);
      }),
    r = function () {
      (c = function (t) {
        t();
      }),
        e.forEach(c),
        Topics.get(Topics.INITIALIZED).publish(),
        "function" != typeof webclientInit || n || ((n = !0), webclientInit(bg));
    };
  function o() {
    LPPlatform.requestFramework = new LPBackgroundRequester(LPPlatform.requestFrameworkInitializer, {
      mainRequestFramework: window === top,
      interfaceDefinition: Interfaces.ContentScriptInterface,
      interfaceName: "ContentScriptInterface"
    });
    var n = {},
      e =
        ((bg = Interfaces.createInstance(Interfaces.BackgroundInterface, {
          direct: !1,
          context: "contentScript",
          source: n,
          asyncOnly: !0,
          requestFunction: function (t) {
            LPPlatform.requestFramework.sendRequest({ type: "backgroundRequest", data: t });
          }
        })),
        window === top
          ? (csTop = Interfaces.createInstance(Interfaces.ContentScriptInterface, { context: "contentScript", direct: !0, source: t }))
          : Topics.get(Topics.REQUEST_FRAMEWORK_INITIALIZED).subscribe(function (t) {
              var e = parseInt(t.topFrameID);
              csTop = Interfaces.createInstance(Interfaces.ContentScriptInterface, {
                direct: !1,
                context: "contentScript",
                requestFunction: function (t) {
                  LPPlatform.requestFramework.sendRequest({ type: "contentScriptRequest", data: t, frameID: e });
                }
              });
            }),
        function () {
          bg.LPData.getData({
            context: "contentScript",
            callback: function (t) {
              for (var e in t) n[e] = t[e];
              r();
            }
          });
        });
    Topics.get(Topics.LOGIN).subscribe(function (t) {
      e();
    }),
      e();
  }
  o();
}.call(this);
