var IntroTourData = (function (t, u, n) {
  "use strict";
  var r = function () {};
  return (
    (r.prototype.getAvailableTours = function () {
      var r = {},
        a = { omarMigrationTour: n.getTourData(), omarVaultTour: t.getTourData(), vault41Tour: u.getTourData() },
        o;
      for (o in a) a.hasOwnProperty(o) && a[o] && a[o].isAvailable() && (r[o] = a[o]);
      return r;
    }),
    r
  );
})(omarVaultTour, vault41Tour, omarMigrationTour);
