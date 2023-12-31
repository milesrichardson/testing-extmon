LPMessaging = (function (o) {
  var e = 0,
    s = {},
    a = 0,
    c = function (t) {
      var e = {},
        n = !1,
        r;
      for (r in t)
        if (t.hasOwnProperty(r)) {
          var a = t[r];
          switch (typeof a) {
            case "function":
              (n = n || !0), (e[r] = a.length);
              break;
            case "object":
              (e[r] = c(a)), (n = n || null !== e[r]);
          }
        }
      return n ? e : null;
    },
    u = function (t) {
      var e = {},
        n;
      for (n in t)
        if (t.hasOwnProperty(n)) {
          var r = t[n];
          switch (typeof r) {
            case "function":
              (e[n] = r), delete t[n];
              break;
            case "object":
              e[n] = u(r);
          }
        }
      return e;
    },
    i = function (t) {
      return t && "object" == typeof t;
    },
    f = function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    },
    p = function (t) {
      if (i(t))
        switch (Object.prototype.toString.call(t)) {
          case "[object Array]":
            return !1;
          case "[object Element]":
            return !0;
          case "[object Object]":
            return null !== Object.getPrototypeOf(Object.getPrototypeOf(t));
        }
      return !1;
    },
    l = function (t) {
      var e = f(t) ? [] : {},
        n;
      if (!p(t))
        for (var r in t) {
          t.hasOwnProperty(r) && ((n = t[r]), (e[r] = i(n) ? l(n) : n));
        }
      return e;
    },
    h = function (t, e) {
      t.args = l(t.args);
      var n = c(t.args),
        r;
      n && ((r = ++a), (s[r] = { functions: u(t.args), sender: e }), (t.requestID = r), (t.functions = n));
    },
    t,
    n,
    y = function (a, c, o, t) {
      var s = function () {
        for (var t = { responseRequestID: c.requestID, callbackPath: o }, e = [], n = 0, r = arguments.length; n < r; ++n)
          e.push(arguments[n]);
        (t.args = e), h(t, a), a(t);
      };
      switch (t) {
        case 1:
          return function (t) {
            s.apply(this, arguments);
          };
        case 2:
          return function (t, e) {
            s.apply(this, arguments);
          };
        case 3:
          return function (t, e, n) {
            s.apply(this, arguments);
          };
        case 4:
          return function (t, e, n, r) {
            s.apply(this, arguments);
          };
        case 5:
          return function (t, e, n, r, a) {
            s.apply(this, arguments);
          };
        default:
          return (
            5 < t && Raven.captureException(new Error("Too many arguments passed.")),
            function () {
              s.apply(this, arguments);
            }
          );
      }
    },
    g = function (t, e, n, r, a) {
      for (var c in ((a = a || []), n)) {
        var o = n[c];
        "object" == typeof o ? g(t, e[c], o, r, a.concat(c)) : (e[c] = y(t, r, a.concat(c), o));
      }
    },
    r,
    b;
  return {
    handleRequest: function (t, e, n, r) {
      var a = e.args;
      g(n, a, e.functions, e), LPReflection.callFunction(t, e.cmd, a, r);
    },
    makeRequest: function (t, e, n) {
      return h(e.data, n), t(e);
    },
    handleResponse: function (t) {
      var e = s[t.responseRequestID].functions,
        n = s[t.responseRequestID].sender;
      delete s[t.responseRequestID];
      for (var r = 0, a = t.callbackPath.length; r < a; ++r) e = e[t.callbackPath[r]];
      var c = t.args;
      g(n, c, t.functions, t), e.apply(o, c);
    },
    getNewMessageSourceID: function (t) {
      return ++e;
    }
  };
})(this);
