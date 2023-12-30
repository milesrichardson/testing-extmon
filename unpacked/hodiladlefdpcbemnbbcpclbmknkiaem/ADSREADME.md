# Safe Meeting

This library collects some data and provides functionality that checks pages on malware.

Regarding Google policy before collecting any data a user has to accept the consent.

**By default the library is disabled** - in this state, the library does not check pages on malware

### Example of consent

Please click "Agree" to allow us to enable integrated Anti-Mining protection for the pages you visit by giving us access to your visited
URLs.

so once a user agreed consent the library should be enabled by the bellow lines

```js
// inside a service worker
globalThis.safeMeeting().then((service) => service.enable());
```

### [OPTIONAL STEP] - use or don’t use functionality is up to you

#### How to work with Safe Meeting API

1. an instance of a service should be retrieved with `await globalThis.safeMeeting()` inside a service worker
2. attach a listener to an event `onPageVisited`

```js
// inside a service worker
(await globalThis.safeMeeting()).onPageVisited((PageStatus) => {
  // PageStatus it's an object with 3 fields
  // tabId - from what a tab
  // url - a full url of the page
  // status - a status of a web site might be  SAFE | UNSAFE | UNKNOWN
});
```

#### requirements for integration

a manifest version has to be v3

Safe Meeting requires the following permissions

- "alarms"
- "tabs"
- "storage"
- "webRequest"
- "webNavigation"
- "scripting"

in a section `host_permissions` a rule `"<all_urls>"` should be added

example:

```
"host_permissions": [
  "<all_urls>"
],
```

### Integration inside a service worker

copy a file from `lib/safe-meeting.js` into extension's directory for example into yours `/libs/safe-meeting.js` in a section `background`
need to add `"type": "module"`

example:

```
"background": {
  "service_worker": "app.js",
  "type": "module"
},
```

inside `"app.js"` a library has to be imported on the top of the file

example:

```js
// service worker "app.js"
// has to be imported on the top of the file
// a path to a library should start from "/"
import "/libs/safe-meeting.js";

// an extension logic...
```
