const CACHE = 'avaliacao-pratica-v2';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './evaluation-data.mjs', './scoring.mjs', './manifest.webmanifest', './app-icon-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
