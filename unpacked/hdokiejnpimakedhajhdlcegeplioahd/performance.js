var timingActions = ["start", "pause", "resume", "stop"],
  eventStore = {};
function storeAndResolveTimingEvents(e, t) {
  var n = null;
  if (timingActions.indexOf(t.action) < 0) console.log("Unknown timing event");
  else if (
    (t.timestamp || (t.timestamp = Date.now()),
    t.allowReporting || (t.allowReporting = !1),
    null == eventStore[e] && (eventStore[e] = []),
    "stop" === t.action
      ? (eventStore[e].push(t), (n = resolveTimingStoreToParams(eventStore[e])), (eventStore[e] = []))
      : ("start" == t.action && (eventStore[e] = []), eventStore[e].push(t)),
    n)
  ) {
    var o = { action: e },
      r;
    for (r in n) n.hasOwnProperty(r) && (o[r] = n[r]);
  }
}
function resolveTimingStoreToParams(e) {
  for (var t = {}, n = 0, o = 0, r = 0, i = 0, s, a = e.length, m = 0; m < a; m++) {
    var v = e[m].action,
      l = e[m].timestamp;
    switch ((void 0 !== e[m].numberOfItems && (s = e[m].numberOfItems), v)) {
      case "start":
        n = l;
        break;
      case "pause":
        r = l;
        break;
      case "resume":
        0 < r && (i += l - r), (r = 0);
        break;
      case "stop":
        o = l;
    }
  }
  if (0 != n && 0 != o) return (t.timeToComplete = o - n - i), void 0 !== s && (t.numberOfItems = s), t;
}
