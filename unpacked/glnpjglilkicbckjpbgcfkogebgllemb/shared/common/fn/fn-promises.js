!(function FnPromisesIIFE() {
  var e = Okta.Q,
    n = Okta._okta,
    o = n.delay,
    t = n.reduce,
    r = n.rest,
    f = Okta.Q.when,
    u = Okta.fn.base.curry2,
    i = Okta.fn.base.curry3,
    c = Okta.fn.base.splat,
    a = n.toArray,
    s = Okta.Q.defer,
    l = (Okta.fn.promises = {});
  (l.pipelineP = function (n) {
    return t(r(arguments), f, n);
  }),
    (l.composeP = function () {
      var t = a(arguments).reverse();
      return (
        (t[0] = c(t[0])),
        function () {
          var n = a(arguments);
          return t.unshift(n), l.pipelineP.apply(this, t);
        }
      );
    }),
    (l.tapP = u(function (n, t) {
      return f(n(t), function () {
        return t;
      });
    })),
    (l.fmapObjectP = i(function (t, n, e) {
      return f(n(e[t]), function (n) {
        return (e[t] = n), e;
      });
    })),
    (l.pollP = function (n, r, u, t) {
      var e = s();
      return (
        (function i(t, e) {
          f(
            t(),
            function (n) {
              r(n)
                ? e.resolve(n)
                : setTimeout(function () {
                    i(t, e);
                  }, u);
            },
            function (n) {
              e.reject(n);
            }
          );
        })(n, e),
        t &&
          o(function () {
            e.reject("pollP timeout");
          }, t),
        e.promise
      );
    }),
    (l.filterP = function (n, t) {
      return e.all(t.map(n)).then(function (e) {
        return t.filter(function (n, t) {
          return !!e[t];
        });
      });
    }),
    (l.rejectIfFalse = function (n) {
      return n || e.reject();
    }),
    (l.runIfTrue = u(function (n, t) {
      return t && n(t);
    }));
})();
