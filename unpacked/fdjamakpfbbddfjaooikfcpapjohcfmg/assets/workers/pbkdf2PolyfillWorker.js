const pbkdf2 = require("pbkdf2");
onmessage = function (a) {
  const d = a.data[0],
    t = a.data[1],
    e = a.data[2],
    f = a.data[3],
    s = a.data[4];
  postMessage(pbkdf2.pbkdf2Sync(d, t, e, f, s).buffer);
};
