// Offline-Speicher der KAR-Mischpult-App. Bei Änderungen VERSION erhöhen.
const VERSION = 'kar-app-v1';
const FILES = [
  "./",
  "index.html",
  "mischpult.html",
  "einstieg.html",
  "manifest.webmanifest",
  "fonts/fonts.css",
  "fonts/barlowcondensed-0.woff2",
  "fonts/barlowcondensed-1.woff2",
  "fonts/barlowcondensed-2.woff2",
  "fonts/jetbrainsmono-3.woff2",
  "fonts/sourcesans3-4.woff2",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Sofort aus dem Speicher (schnell, auch ohne WLAN), im Hintergrund aktualisieren.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(c => c.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; });
    if (hit) { net.catch(() => {}); return hit; }
    return net.catch(() => c.match('index.html'));
  })));
});
