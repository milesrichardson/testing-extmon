(LPPlatform = "undefined" == typeof LPPlatform ? {} : LPPlatform),
  (function () {
    LPPlatform.isMac = function () {
      return "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Mac");
    };
    var t = function () {
      var e = {},
        n = document.location.href.split("?");
      if (2 === n.length)
        for (var t = n[1].split("&"), r = 0; r < t.length; ++r) {
          var a = t[r].split("=");
          2 === a.length && (e[a[0]] = a[1]);
        }
      return e;
    };
    LPPlatform.getUILanguage = function () {
      var e, n;
      return (t().lplanguage || "en-US").replace(/_/g, "-");
    };
  })(),
  (function (c) {
    var n, t, e, o, i;
    (c.translate = function (e) {
      return gs(e);
    }),
      (c.isWin = function () {
        return "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Windows");
      }),
      (t = []),
      (e = n = null),
      (o = function (e) {
        var t = e.callback;
        (e.callback = function (e) {
          for (var n in e) window[n] = e[n];
          t && t();
        }),
          n.LPData.getData(e);
      }),
      (i = function (e) {
        "string" == typeof e && -1 === t.indexOf(e) && t.push(e),
          setInterval(function () {
            o({ context: t, triggers: { g_local_accts_version: n.get("g_local_accts_version") } });
          }, 1e3);
      }),
      (c.getBackgroundInterface = function (e) {
        return (
          null === n && (n = c.createBackgroundInterface(e)),
          e.getData ? n.getData({ context: e.context, callback: e.callback }) : e.callback && e.callback(n),
          n
        );
      }),
      (c.createBackgroundInterface = function (t) {
        g_bg = window;
        var n = new LPBackgroundRequester(c.requestFrameworkInitializer, {
            interfaceDefinition: t.interfaceDefinition,
            interfaceName: t.interfaceDefinition ? parent.Interfaces.getName(t.interfaceDefinition) : null,
            reflectionContext: parent,
            mainRequestFramework: void 0 === t.mainRequestFramework || t.mainRequestFramework
          }),
          r =
            (n.initialize(),
            function (e) {
              n.sendRequest({ type: "backgroundRequest", data: e });
            }),
          a = Interfaces.createInstance(Interfaces.BackgroundInterface, {
            context: t.context,
            source: window,
            direct: !1,
            requestFunction: r
          });
        return (
          (a.getData = function (e) {
            var n = e.callback;
            (e.callback = function () {
              t.pollBackground && i(e.context), n && n(a);
            }),
              o(e);
          }),
          parent.LPDialog &&
            (parent.LPDialog.beforeLoad = function (e, n) {
              Interfaces.createInstance(Interfaces.BackgroundInterface, {
                instance: a,
                context: e,
                source: window,
                direct: !1,
                requestFunction: r
              }),
                a.getData({
                  context: e,
                  callback: function () {
                    parent.LPProxy.initializeModel(), n();
                  }
                });
            }),
          t.backgroundIntitialization && t.backgroundIntitialization(a),
          a
        );
      }),
      (c.adjustPreferenceDefaults = function (e) {
        e.disablepasswordmanagerasked = !1;
      }),
      (c.getPreference = function (e) {
        return top.reduxApp && top.reduxApp.getPreference ? top.reduxApp.getPreference(e) : extensionPreferences[e];
      }),
      (c.setUserPreference = function (e, n) {
        top.reduxApp && top.reduxApp.setExtensionPreference ? top.reduxApp.setExtensionPreference(e, n) : (extensionPreferences[e] = n);
      }),
      (c.setGlobalPreference = function (e, n) {
        top.reduxApp && top.reduxApp.setExtensionPreference ? top.reduxApp.setExtensionPreference(e, n) : (extensionPreferences[e] = n);
      }),
      (c.writePreferences = function () {});
  })(LPPlatform);
