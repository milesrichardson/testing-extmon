document.getElementById("googleauthauth") && set_innertext(document.getElementById("googleauthauth"), gs("Authenticate")),
  document.getElementById("outofbandauth") && set_innertext(document.getElementById("outofbandauth"), gs("Authenticate")),
  document.getElementById("gridauth") && set_innertext(document.getElementById("gridauth"), gs("Authenticate")),
  document.getElementById("yubiauth") && (document.getElementById("yubiauth").value = gs("Authenticate")),
  document.getElementById("securityquestionauth") && set_innertext(document.getElementById("securityquestionauth"), gs("Authenticate"));
