!(function fnUserGroupsIIFE() {
  var s = (Okta.fn.userGroups = {}),
    o = Okta._okta.contains,
    e = "pokta_passwordless",
    a = "pokta_sharing",
    n = "pokta_new_arch";
  (s.isUserPartOfGroup = function (r, s) {
    return o(r, s);
  }),
    (s.applyOktaPersonalGroupBasedRolloutOverrides = function (r) {
      r &&
        r.orgSettings &&
        r.userGroups &&
        ((r.orgSettings.pluginOktaPersonalCoreServiceEnabled = s.isUserPartOfGroup(r.userGroups, n)),
        (r.orgSettings.pluginOktaPersonalIsPasswordlessEnabled = s.isUserPartOfGroup(r.userGroups, e)),
        (r.orgSettings.pluginOktaPersonalIsSharingEnabled = s.isUserPartOfGroup(r.userGroups, a)));
    });
})();
