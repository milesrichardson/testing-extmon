import { chrome } from "../polyfill";
export function sentryInit(e = {}) {
  let t = {
    dsn: "https://708a324f1a7ec87a2658346fb4bb7586@o438337.ingest.sentry.io/4506062147551232",
    tracesSampleRate: 0.6,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    environment: ENVIRONMENT,
    enabled: !1,
    release: chrome.runtime.getManifest().version
  };
  Object.assign(t, e);
}
