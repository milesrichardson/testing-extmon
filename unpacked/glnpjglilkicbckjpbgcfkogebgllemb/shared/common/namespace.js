var Okta = { fn: {}, Page: {}, Config: {}, Modal: { Mixins: {}, Views: {} }, loc: { strings: {} } };
Okta.window = this;
var ENV = {
  getCss: function (i) {
    return this._domain + "/plugin/css/" + i;
  },
  getImg: function (i) {
    return this._domain + "/plugin/img/" + i;
  },
  DefaultTimeout: 25e3,
  DefaultWaitDelay: 250
};
