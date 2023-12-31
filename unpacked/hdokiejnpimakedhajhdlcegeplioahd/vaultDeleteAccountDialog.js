var VaultDeleteAccountDialog = function (e) {
  Dialog.call(this, e, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !1,
    hidePreviousDialogs: !0,
    overlayDialog: !0,
    blurOverlay: !0
  });
};
(VaultDeleteAccountDialog.prototype = Object.create(Dialog.prototype)),
  ((VaultDeleteAccountDialog.prototype.constructor = VaultDeleteAccountDialog).prototype.initialize = function (e, t) {
    var o, n, s, r, a, l, i, c, d, u, g, m, y, p, D, E, _, h, f, A, I, v, B, b, w, L, S, k, T;
    Dialog.prototype.initialize.apply(this, arguments),
      (o = this),
      (n = bg.get("g_username")),
      (s = document.getElementById("DA_closeDialog")),
      (r = document.getElementById("DA_email")),
      (a = document.getElementById("DA_password")),
      (l = document.getElementById("DA_showPasswordButton")),
      (i = document.getElementById("DA_hidePasswordIcon")),
      (c = document.getElementById("DA_showPasswordIcon")),
      (d = document.getElementById("DA_cancelButton")),
      (u = document.getElementById("DA_deleteButton")),
      (g = document.getElementById("DA_passwordErrorMessage")),
      (m = document.getElementById("DA_errorMessage")),
      (y = document.getElementById("DA_errorMessageLabel")),
      (p = {
        install: document.getElementById("DA_reason_install"),
        forgot: document.getElementById("DA_reason_forgot"),
        usability: document.getElementById("DA_reason_usability"),
        function: document.getElementById("DA_reason_function"),
        feature: document.getElementById("DA_reason_feature"),
        security: document.getElementById("DA_reason_security"),
        import: document.getElementById("DA_reason_import"),
        other: document.getElementById("DA_reason_other")
      }),
      (D = document.getElementById("DA_reason_text")),
      (r.placeholder = Strings.translateString("Enter account email")),
      (r.value = n),
      (a.placeholder = Strings.translateString("Enter master password")),
      (D.placeholder = Strings.translateString("Any additional feedback for us?")),
      (D.disabled = !p.other.checked),
      (u.disabled = !0),
      (E = function () {
        var e = {},
          t;
        for (t in p) p[t].checked && (e[t] = "on");
        return e;
      }),
      (_ = function () {
        return p.other.checked ? D.value : "";
      }),
      (h = ""),
      (n = function () {
        p.other.checked ? ((D.value = h), (D.disabled = !1)) : ((h = D.value), (D.value = ""), (D.disabled = !0));
      }),
      (f = function () {
        g.classList.add("show-error"), a.classList.add("show-error");
      }),
      (A = function (e) {
        b(), (y.innerHTML = e), m.classList.add("show-error");
      }),
      (I = function () {
        g.classList.remove("show-error"), a.classList.remove("show-error");
      }),
      (v = function () {
        I(), m.classList.remove("show-error");
      }),
      (b = function () {
        (a.value = ""), f();
      }),
      (w = function () {
        (a.type = "text"), (i.style.display = "none"), (c.style.display = "block");
      }),
      (L = function () {
        (a.type = "password"), (i.style.display = "block"), (c.style.display = "none");
      }),
      (S = function () {
        ("password" === a.type ? w : L)();
      }),
      (k = function () {
        b(), L(), v(), o.close();
      }),
      (T = function () {
        v();
        var t = LPRequest.getNewRequestID();
        Topics.get(Topics.REQUEST_START).publish({ requestID: t }),
          bg.LPPlatform.deleteAccount({
            username: r.value,
            password: a.value,
            reasons: E(),
            reasontext: _(),
            successCallback: function (e) {
              e.success
                ? (Topics.get(Topics.REQUEST_SUCCESS).publish({ requestID: t }), LPProxy.logout())
                : e.errortxt && (Topics.get(Topics.REQUEST_ERROR).publish({ requestID: t }), A(e.errortxt));
            }
          });
      }),
      a.addEventListener("input", function (e) {
        var e = "" === e.target.value;
        ((u.disabled = e) ? f : I)();
      }),
      l.addEventListener("click", S),
      p.other.addEventListener("input", n),
      s.addEventListener("click", k),
      d.addEventListener("click", k),
      u.addEventListener("click", T);
  });
