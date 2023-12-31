LPTab = (function () {
  var u = function (t, n, e, i) {
    (this.loadedContexts = {}), (this.data = e), (this.instance = n), (this.tab = t), (this.disconnect = i);
  };
  return (
    (u.prototype.extendInstance = function (t) {
      t &&
        t.context &&
        !this.loadedContexts.hasOwnProperty(t.context) &&
        (Interfaces.createInstance(Interfaces[this.tab.tabDetails.interfaceName], {
          instance: this.instance,
          direct: !1,
          context: t.context,
          requestFunction: this.data.contentScriptRequester
        }),
        (this.loadedContexts[t.context] = !0));
    }),
    (u.prototype.getFrameID = function () {
      return this.data.frameID;
    }),
    (u.prototype.isTop = function () {
      return this.data.topWindow;
    }),
    (u.prototype.getInstance = function () {
      return this.instance;
    }),
    (u.prototype.disconnect = function () {
      this.disconnect();
    }),
    function (t) {
      var i = null,
        a = {},
        n = new LPEventManager(),
        o = 0,
        e = null,
        s =
          ((this.tabDetails = t),
          (this.getTop = function () {
            return i ? i.instance : null;
          }),
          (this.extendTop = function (t) {
            i.extendInstance(t);
          }),
          function () {
            clearTimeout(e),
              c() >= o
                ? n.publishEvent("framesloaded")
                : (e = setTimeout(function () {
                    n.publishEvent("framesloaded");
                  }, 1e3));
          }),
        c =
          ((this.addFrame = function (t, n, e) {
            var t = new u(this, t, n, e);
            t.isTop() ? (i = t) : (a[t.getFrameID()] = t), (o += n.childFrameCount), s();
          }),
          (this.removeFrame = function (t) {
            a[t] ? (delete a[t], --o) : i && i.getFrameID() === t && (i = null);
          }),
          (this.getFrames = function () {
            var t = {},
              n;
            for (n in a) t[n] = this.getFrame(n);
            return t;
          }),
          (this.extendFrames = function (t) {
            for (var n in a) a[n].extendInstance(t);
          }),
          (this.getFrame = function (t) {
            var n = null;
            return a[t] ? (n = a[t]) : i && i.getFrameID() === t && (n = i), n ? n.getInstance() : null;
          }),
          function () {
            return Object.keys(a).length;
          }),
        r =
          ((this.isEmpty = function () {
            return null === i && 0 === c();
          }),
          function (t, n) {
            var e = Object.keys(t).length,
              i = 0,
              a = function () {
                ++i === e && n.done();
              },
              o;
            for (o in t) n.each(t[o], a) || --e;
            0 === e && n.done && n.done();
          });
      (this.forEachFrame = function (t) {
        r(this.getFrames(), t);
      }),
        (this.forEachWindow = function (t) {
          var n = this.getFrames(),
            e = this.getTop();
          e && (n[0] = e), r(n, t);
        }),
        (this.activate = function () {
          LPPlatform.activateTab({ tabID: this.tabDetails.tabID, windowID: this.tabDetails.windowID });
        }),
        (this.close = function () {
          LPPlatform.closeTab({ tabID: this.tabDetails.tabID, windowID: this.tabDetails.windowID });
        }),
        (this.onFramesLoaded = function (t) {
          n.addEventListenerOnce("framesloaded", t), setTimeout(s, 1e3);
        }),
        (this.disconnect = function () {
          for (var t in (i && (i.disconnect(), (i = null)), a)) a[t].disconnect();
          a = null;
        });
    }
  );
})();
