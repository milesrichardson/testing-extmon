var lp = lp || {};
lp.pushClient = (function () {
  var s;
  function e(e, t, o, n) {
    s && r();
    try {
      s = new i(e.replace(/^http(s?):/gi, "ws$1:"), c, a, n);
    } catch (e) {
      console.log("Caught error during socket creation " + e);
    }
    function c() {
      try {
        s.send({ channel: "/meta/handshake", version: "1.0", supportedConnectionTypes: ["callback-polling"] });
      } catch (e) {
        console.log("Caught error during socket opening " + e);
      }
    }
    function a(e) {
      try {
        var n,
          c = JSON.parse(e.data)[0];
        switch (c.channel) {
          case "/meta/connect":
            s.send({ clientId: c.clientId, connectionType: "websocket", channel: "/meta/connect" });
            break;
          case "/meta/handshake":
            c.successful &&
              (s.send({ clientId: c.clientId, connectionType: "websocket", channel: "/meta/connect" }),
              s.send({ clientId: c.clientId, subscription: t, channel: "/meta/subscribe" }));
            break;
          case "/ping":
          case "/meta/subscribe":
            break;
          case t:
            void 0 !== c.data.av_update && (console.log("Message received from push server."), o());
        }
      } catch (e) {
        console.log("Caught error " + e);
      }
    }
  }
  function r() {
    s && "function" == typeof s.close && s.close(), (s = null);
  }
  function i(e, n, c, t) {
    var o;
    function a() {
      ((o = new WebSocket(e)).onopen = n), (o.onmessage = c);
    }
    a();
    var s = setInterval(function () {
      o.readyState !== o.OPEN && o.readyState !== o.CONNECTING && a();
    }, t);
    (this.close = function e() {
      clearInterval(s), o.close(), (o = null);
    }),
      (this.send = function e(n) {
        o.readyState === o.OPEN && o.send(JSON.stringify(n));
      });
  }
  return { connect: e, disconnect: r };
})();
