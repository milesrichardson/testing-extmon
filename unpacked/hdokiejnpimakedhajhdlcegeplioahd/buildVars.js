BuildVariables = {
  partner: "",
  getPartnerURL: function (e) {
    return this.partner && (e += (0 <= e.indexOf("?") ? "&" : "?") + "partnername=" + encodeURIComponent(this.partner)), e;
  }
};
