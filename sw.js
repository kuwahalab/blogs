importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3ca74d493bfe5d6c3fbb.js",
    "revision": "ff34b65334c609887ae25439215c2bdd"
  },
  {
    "url": "/_nuxt/dd15dd52e0e07f918cd4.js",
    "revision": "58ff068548f9b8765747a8e8977bd227"
  },
  {
    "url": "/_nuxt/e9292d4b2fa218ff86d9.js",
    "revision": "33625f0810032ee555a9aed59ec8f996"
  },
  {
    "url": "/_nuxt/ee48e44a99f780eea4c0.js",
    "revision": "6a1bebbb09b1501e989cc3f9929ba0b9"
  }
], {
  "cacheId": "demo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
