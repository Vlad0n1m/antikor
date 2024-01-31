const cacheName = 'antikor-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  '/article'
  // Добавьте другие ресурсы вашего приложения
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
