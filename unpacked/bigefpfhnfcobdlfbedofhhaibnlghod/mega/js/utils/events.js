function MegaEvents() {
  "use strict";
  this._events = Object.create(null);
}

MegaEvents.prototype.trigger = function (name, args) {
  "use strict";

  var count = false;

  if (!this._events) {
    console.error("MegaEvents: This instance is destroyed and cannot dispatch any more events.", name, args);
    return false;
  }

  if (this._events[name]) {
    if (d > 1) {
      console.log(" >>> Triggering " + name, this._events[name].length, args);
    }
    args = args || [];

    var evs = this._events[name];
    for (var i = 0; i < evs.length; ++i) {
      try {
        evs[i].apply(null, args);
      } catch (ex) {
        console.error(ex);

        onIdle(function () {
          // Let window.onerror catch it
          throw ex;
        });
      }
      ++count;
    }
  }

  return count;
};

MegaEvents.prototype.on = function (name, callback) {
  "use strict";

  if (this._events[name]) {
    this._events[name].push(callback);
  } else {
    this._events[name] = [callback];
  }
  return this;
};

/**
 * Referenced, nameless event system that follows the Observer pattern.
 * For named events intended for global usage about application state, see {@see mBroadcaster}.
 * For other named events, see {@var MegaEvents}.
 *
 * @see mBroadcaster
 * @see MegaEvents
 */
class MEvent {
  constructor() {
    this._callbacks = {};
  }

  invoke(...eventArgs) {
    for (const callback of Object.values(this._callbacks)) {
      callback(...eventArgs);
    }
  }

  addListener(callback) {
    this._callbacks[callback] = callback;
  }

  removeListener(callback) {
    delete this._callbacks[callback];
  }
}
