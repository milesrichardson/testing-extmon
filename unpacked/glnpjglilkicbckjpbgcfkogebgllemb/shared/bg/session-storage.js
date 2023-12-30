Okta.sessionStorage = (function () {
  var e = {};
  return {
    get: function (n) {
      return e[n];
    },
    set: function (n, t) {
      return (e[n] = t);
    },
    clear: function (n) {
      delete e[n];
    }
  };
})();
