var LPPartner = (function () {
  function r() {}
  return (
    (r.getPartnerInfo = function (r) {
      var e = null;
      g_partner_type && (e = this.partnerInfoAll[g_partner_type.toLowerCase()]), r && r(e);
    }),
    (r.partnerInfoAll = {
      verizon: {
        logoUrl: (r.baseUrl = "images/vault_4.0/partner/") + "partner_verizon.svg",
        logoWhiteUrl: r.baseUrl + "partner_verizon_white.svg",
        class: "logo-verizon",
        classWhite: "logo-verizon-white"
      },
      verizoncloud: {
        logoUrl: r.baseUrl + "partner_verizon.svg",
        logoWhiteUrl: r.baseUrl + "partner_verizon_white.svg",
        class: "logo-verizon",
        classWhite: "logo-verizon-white"
      },
      webroot: {
        logoUrl: r.baseUrl + "partner_webroot.svg",
        logoWhiteUrl: r.baseUrl + "partner_webroot_white.svg",
        class: "logo-webroot",
        classWhite: "logo-webroot-white"
      }
    }),
    r
  );
})();
