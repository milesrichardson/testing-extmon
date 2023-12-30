const messageId = "honey:couponResProxy";
let fetchCounter = 0,
  xhrCounter = 0;
const handleFetch = async (e, t) => {
  const [o] = t;
  fetchCounter += 1;
  const n = `${fetchCounter}${o}`;
  window.postMessage({ messageId, type: "request", requestId: n }, window.location.origin);
  try {
    await e, window.postMessage({ messageId, type: "response", requestId: n }, window.location.origin);
  } catch (e) {}
};
function overrideFetch() {
  window.fetch = new Proxy(window.fetch, {
    apply: async (e, t, o) => {
      const n = e.apply(t, o);
      return handleFetch(n, o), n;
    }
  });
}
const handleXHRSend = (e, t) => {
  const o = JSON.stringify(t);
  xhrCounter += 1;
  const n = `${xhrCounter}${o}`;
  window.postMessage({ messageId, type: "request", requestId: n }, window.location.origin),
    e.addEventListener("loadend", (e) => (window.postMessage({ messageId, type: "response", requestId: n }, window.location.origin), e));
};
function overrideXMLHttpRequestSend() {
  const e = new Proxy(window.XMLHttpRequest.prototype.send, {
    apply: async (e, t, o) => {
      const n = e.apply(t, o);
      return handleXHRSend(t, o), n;
    }
  });
  window.XMLHttpRequest.prototype.send = e;
}
const isProxyAvailable = !!window.Proxy;
isProxyAvailable && (overrideFetch(), overrideXMLHttpRequestSend());
