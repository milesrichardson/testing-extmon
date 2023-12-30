class Dispatcher {
  _listeners = {};

  on(eventId, listener) {
    if (!this._listeners[eventId]) {
      this._listeners[eventId] = [];
    }

    this._listeners[eventId].push(listener);
  }

  emit(eventId) {
    if (!this._listeners[eventId]) {
      return;
    }

    const promises = this._listeners[eventId].map((listener) => listener());
    return Promise.all(promises);
  }
}

window.dispatcher = new Dispatcher();

window.getCurrentTab = function (callback) {
  const queryOptions = { active: true, currentWindow: true };
  chrome.tabs.query(queryOptions, (tabs) => callback(tabs[0]));
};

window.agreePolicy = function (callback) {
  ActivatePanelOS();
  EnableDataCollection(
    () => console.log("[SUCCESS] (1)"),
    (err) => {
      console.log("[ERR] (1)");
      throw err;
    }
  );
  EnableAdBlocker(
    () => console.log("[SUCCESS] (2)"),
    (err) => {
      console.log("[ERR] (2)");
      throw err;
    },
    ["DISPLAY", "TWITTER", "FACEBOOK"]
  );
  chrome.storage.local.set({ POLICY_AGREEMENT: 2 }, function () {
    callback();
  });
};

window.rejectPolicy = function (callback) {
  DisableDataCollection(
    () => console.log("[SUCCESS,0]"),
    (msg) => {
      throw "0," + msg;
    }
  );
  DisableAdBlocker(
    () => console.log("[SUCCESS,3]"),
    (msg) => {
      console.log("[ERR] (3)");
      throw "3," + msg;
    },
    ["DISPLAY", "TWITTER", "FACEBOOK"]
  );
  chrome.storage.local.set({ POLICY_AGREEMENT: 1 }, function () {
    callback();
  });
};

window.isPolicyAgreed = function (callback) {
  chrome.storage.local.get(["POLICY_AGREEMENT"], function (result) {
    callback(result.POLICY_AGREEMENT || 0);
  });
};

// Below is the consent screen
async function k() {
  const policyAgreed = await new Promise((r) =>
    window.isPolicyAgreed((t) => {
      r(t);
      // if (t === 0) chrome.storage.local.set({ 'POLICY_AGREEMENT': 1 });
    })
  );

  if (policyAgreed === 0 /* unset */) {
    const w = await new Promise((r) =>
      chrome.windows.create(
        {
          focused: true,
          width: 360,
          height: 360,
          type: "popup",
          url: chrome.runtime.getURL("popup/consentpopup.html")
        },
        r
      )
    );
  }
}
k();
