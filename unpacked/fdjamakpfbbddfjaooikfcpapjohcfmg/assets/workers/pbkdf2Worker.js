var pidCryptUtil = null,
  PBKDF2 = null;
(pidCryptUtil = require("./pidcrypt/pidcrypt_util.js")), (PBKDF2 = require("./pbkdf2.js"));
var password = null,
  salt = null,
  num_iterations = null,
  num_bytes = null;
function start() {
  new PBKDF2(password, salt, num_iterations, num_bytes).deriveKey_webworker(
    function (t) {
      postMessage("progress " + t);
    },
    function (t) {
      postMessage("finished " + t);
    }
  );
}
onmessage = function (t) {
  var s = t.data.split(" ");
  if ("set" == s.shift()) {
    var e = s.shift(),
      n = s.join(" ");
    "password" == e
      ? (password = decodeURIComponent(pidCryptUtil.decodeBase64(n)))
      : "salt" == e
      ? (salt = decodeURIComponent(pidCryptUtil.decodeBase64(n)))
      : "num_iterations" == e
      ? (num_iterations = n)
      : "num_bytes" == e && (num_bytes = n);
  } else "start" == t.data && start();
};
