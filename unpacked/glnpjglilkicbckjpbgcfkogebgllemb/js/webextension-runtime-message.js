Okta.RuntimeMessage = function () {
  var e = Okta._okta;
  var a = e.isNumber;
  var n = e.isFunction;
  var i = {};
  var s = [];
  var o = [];
  var u = "Okta.RuntimeMessage::";
  i.webExtension = typeof chrome !== "undefined" ? chrome : null;
  if (i.webExtension && i.webExtension.runtime) {
    i.remove = function (e) {
      var n = s.indexOf(e);
      if (n >= 0) {
        i.webExtension.runtime.onMessage.removeListener(o[n]);
        s.splice(n, 1);
        o.splice(n, 1);
      }
    };
  }
  i.init = function (r, t) {
    if (!r) {
      Log.warn(u + "init: runtime message doesn't have moduleName");
    }
    if (i.webExtension && i.webExtension.runtime) {
      if (n(t)) {
        var e = function (e, n, i) {
          if (!e) {
            Log.warn(u + "handlerWrapper: missing msg, skip");
            return;
          }
          if (!n || !n.tab || !a(n.tab.id)) {
            Log.warn(u + "handlerWrapper: invalid sender, skip");
            return;
          }
          if (r === e.module) {
            return t(e, n, i);
          } else {
            Log.warn(u + "handlerWrapper: message from " + e.module + " mismatch current module " + r);
          }
        };
        s.push(t);
        o.push(e);
        i.webExtension.runtime.onMessage.addListener(e);
      }
    }
  };
  return i;
};
