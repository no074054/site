self.addEventListener('install', function(event) {
    console.log('[Service worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open("static")
            .then(function(cache) {
                console.log("precaching");
                cache.add('index.html');
                cache.add('/');
            })
    );
});

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something ...', event);
    event.respondWith(fetch(event.request));
});