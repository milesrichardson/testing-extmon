## Ad blocker

This library collects some data and provides ad blocking functionality. Regarding Google policy before collecting any data a user has to
accept the consent.

**By default, the library does not collect any data and does not hide any ads**

### Example of consent

Please click "Agree" to allow us to enable integrated Ad-Block for the pages you visit by giving us access to your visited URLs. We collect
the URLs and ads that we block to improve our ad-blocking detection and websites analytics rate.

so once a user agreed consent the library should be enabled by calling `ActivatePanelOS()` and then need to enable data collection by a
calling bellow API

```js
EnableDataCollection(
  () => console.log("SUCCESS"),
  () => console.log("ERROR")
);
```

if for some premium users data collection needed to be disabled it's can be done by a calling bellow API

```js
DisableDataCollection(
  () => console.log("SUCCESS"),
  () => console.log("ERROR")
);
```

#### How to work with Ad Blocker API

All methods from API has to be called inside a background page all list of available methods you can find in a `ad-blocker.d.ts`

**[ATTENTION]** - Please use bellow examples how to activate or deactivate ad blocking functionality on production **[ATTENTION]** - If your
extension is VPN like then method `UpdatePanelOSConfig()` should be called once a user is connected to VPN and after disconnection

##### Activate Ad blocking functionality

```js
EnableAdBlocker(
  () => console.log("SUCCESS"),
  () => console.log("ERROR"),
  ["DISPLAY", "TWITTER", "FACEBOOK"]
);
```

##### Deactivate Ad blocking functionality

```js
DisableAdBlocker(
  () => console.log("SUCCESS"),
  () => console.log("ERROR"),
  ["DISPLAY", "TWITTER", "FACEBOOK"]
);
```

#### requirements for integration

You can check the final result of the minimum requirements to manifest in `manifest.example.json`

Ad blocker requires the following modifications in the `manifest.json` in a section `permissions` should be added

- tabs
- webNavigation
- http://\*/\*
- https://\*/\*

in a section `background` should be added a file `ad-blocker/background.js` into the first position

in a section `content_scripts` should be added the bellow lines into the first position

```js
    {
      "matches": [
        "https://*/*",
        "http://*/*"
      ],
      "js": [
        "ad-blocker/content.js"
      ],
      "run_at": "document_start",
      "all_frames": true,
      "match_about_blank": true
    }
```

### How to explain to Google why we need such permissions

**tabs** - required to enable and improve safe browsing capabilities, also needed for communication between background script and content
scripts of tabs

**webNavigation** - required to enable effective adb locking capabilities by detecting information on frames with advertisement (e.g.
frame's url) and to detect and block HTML5 ads properly and sample ads to improve detection rate

**Host permission justification** - required to enable and improve safe browsing capabilities
