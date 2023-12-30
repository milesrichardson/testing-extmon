!(function fnBaseIIFE() {
  var r = Okta._okta,
    u = r.toArray,
    t = r.delay,
    e = r.isNull,
    i = r.isUndefined,
    o = r.tap,
    n = r.map,
    c = JSON.stringify,
    r = Okta.guid,
    a = (Okta.fn.base = {});
  (a.curry2 = function (t) {
    return function (n) {
      return function (r) {
        return t(n, r);
      };
    };
  }),
    (a.curry3 = function (u) {
      return function (t) {
        return function (n) {
          return function (r) {
            return u(t, n, r);
          };
        };
      };
    }),
    (a.always = a.curry2(function (r) {
      return r;
    })),
    (a.dot = a.curry2(function (r, n) {
      return n[r];
    })),
    (a.dot2 = a.curry3(function (r, n, t) {
      return t[r][n];
    })),
    (a.splat = a.curry2(function (r, n) {
      return r.apply(this, n);
    })),
    (a.argsToTuple = function () {
      return u(arguments);
    }),
    (a.timestamp = function () {
      return new Date().getTime();
    }),
    (a.guid = r),
    (a.delay = a.curry2(function (r, n) {
      return t(n, r);
    })),
    (a.invoke = function (r) {
      return r.call();
    }),
    (a.equal = a.curry2(function (r, n) {
      return r === n;
    })),
    (a.not = function (r) {
      return !r;
    }),
    (a.emptyOrTimeout = function (r, n) {
      return !n || a.timestamp() - n > r;
    }),
    (a.orDefault = a.curry2(function (r, n) {
      return e(n) || i(n) ? r : n;
    })),
    (a.fmapObject = a.curry3(function (r, n, t) {
      return (t[r] = n(t[r])), t;
    })),
    (a.tap = a.curry2(function (r, n) {
      return o(n, r);
    })),
    (a.validator = function (n, t) {
      return function () {
        var r = u(arguments);
        if (!n.apply(this, r)) throw new Error(t + ": " + c(r));
        return r;
      };
    }),
    (a.keyToCamelCase = function (r) {
      return n(r.toLowerCase().split("_"), function (r) {
        return r.charAt(0).toUpperCase() + r.slice(1);
      }).join("");
    });
})();
