Okta.localStorage = {
  get: function (t) {
    return localStorage.getItem(t);
  },
  set: function (t, e) {
    return localStorage.setItem(t, e), e;
  },
  clear: function () {
    return localStorage.clear(), !0;
  }
};
