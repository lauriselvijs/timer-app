const CACHE_NAME = "version-2";

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  console.log("Service Worker: installed");
});
// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        // Make copy/clone of response
        const resClone = res.clone();
        // Open cache
        caches.open(CACHE_NAME).then((cache) => {
          // Add response to cache
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(event.request).then((res) => res))
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
