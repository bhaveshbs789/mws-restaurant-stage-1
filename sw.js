//console.log('Hi , i am serice worker');

let cacheName = 'restaurant-app-stage-1';
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
  './img/10.jpg'
];

self.addEventListener('install', function(evt){
	evt.waitUntil(
		caches.open(cacheName)
		.then(function(cache){
			console.log('Cache Opened');
			return cache.addAll(urlsToCache);
		}).catch(function(err){
			console.log(err);
		})
	);
});

