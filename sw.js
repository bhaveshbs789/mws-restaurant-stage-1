
let CACHE_NAME = 'restaurant-app-stage-1';
let urlsToCache = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/main.js',
  './js/restaurant_info.js',
  './js/dbhelper.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
];

self.addEventListener('install', function(evt){
	evt.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache){
			console.log('Cache Opened');
			return cache.addAll(urlsToCache);
		}).catch(function(err){
			console.log(err);
		})
	);
});

// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//         caches.keys().then(function(cacheNames) {
//             return Promise.all(
//                 cacheNames.filter(function(cacheName) {
//                     return cacheName.startsWith('restaurant-') &&
//                         cacheName != CACHE_NAME;
//                 }).map(function(cacheName) {
//                     return caches.delete(cacheName);
//                 })
//             );
//         })
//     );
// });


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
          console.log(response);
          return response || fetch(event.request);
        })
      );
});

