(() => {
  function fetchResource(e) {
    const reject = (c) => {
      chrome.runtime.sendMessage({
        source: "react-devtools-fetch-resource-content-script",
        payload: { type: "fetch-file-with-cache-error", url: e, value: c }
      });
    };
    fetch(e, { cache: "force-cache" }).then(
      (c) => {
        c.ok
          ? c
              .text()
              .then((c) => {
                return (
                  (t = c),
                  void chrome.runtime.sendMessage({
                    source: "react-devtools-fetch-resource-content-script",
                    payload: { type: "fetch-file-with-cache-complete", url: e, value: t }
                  })
                );
                var t;
              })
              .catch((e) => reject(null))
          : reject(null);
      },
      (e) => reject(null)
    );
  }
  chrome.runtime.onMessage.addListener((e) => {
    "devtools-page" === e?.source && "fetch-file-with-cache" === e?.payload?.type && fetchResource(e.payload.url);
  });
})();
