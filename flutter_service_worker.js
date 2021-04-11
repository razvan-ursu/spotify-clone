'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "414c5c4288211f9701582431e264ff98",
"index.html": "984b83e3c1ffa791c350219d5c164a35",
"/": "984b83e3c1ffa791c350219d5c164a35",
"main.dart.js": "31e9fa636715955c2fb01ce6e6ce8c8c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ed04f81a22ce3aaf4292b2e15f8f3192",
".git/config": "bef20d147930cdaa97bf7b2d632e56f6",
".git/objects/0c/49082eb51c5c412ba40cc5928fefedd882283f": "6fc0e0552f5ba9f8ae9030842c9c4afb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/e64ad729d8d411231121939ce18346714eaddc": "3806451934be0fa299debac5da310500",
".git/objects/60/aa838d6f80639f10d64f5dd3d2af1bd3853557": "e6890f65c3922471c31687cd0866bb3a",
".git/objects/34/d737af2679198016ac94a1b80b50bc12d04f8f": "7b873f9ede8fc7b49ce7fc1753c03967",
".git/objects/34/41f4ae24aea182fc4aee1ce23c1721bf042eb0": "ebd72308fc835381d1c62f06d3210dd9",
".git/objects/05/3246a17fa6fdcb4e37a6a2a4cded2bfd08902f": "ee87cf9ca50fdf0e9f6a535090cc49e2",
".git/objects/ac/951c0da9c1f79a3cde18f2fab883f2817c540e": "cb99e7d939eb6754264b0dc52156e9fa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/deb7c4c2bf869b865272781c4027b80d8ffebc": "487be17e0535eb9aed5b8b3023fe6742",
".git/objects/16/93fb25ec471bf345309a04907c69bd455154be": "1b82370c9af92c704dee6f95d9aab052",
".git/objects/74/3a03b97afaf64da95da3ad8afd58381a7a2af4": "3f4eb47f75b14f6c04d5348d2a8588b0",
".git/objects/28/1eb85c1637da4ce490ed57f063821eba3e8518": "db821e2537cfbcb168535f6d16f3fb35",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/b4e968dfe55ca01840230910cc4348254e70d1": "9ad9806c0ae84e89a2aaf45635c67097",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/b135bd075ab42875e79101e6018c246407e8fd": "18afd104c785d9c2772aac4e8ec7d64d",
".git/objects/00/fe107d5eb21afb54d659193727a56dc5126d5a": "022da958f3b2311fcba5a308427a7493",
".git/objects/6e/b3a172758004a26efe4222d6f1d53d0238190d": "1ed370184bd283fd5fe108cac9ce062f",
".git/objects/55/9280f02d2e646d7f7fbc4b62188794613a5d66": "782c410612d6253d6e410cb270525a70",
".git/objects/97/6a41fc1e9204b95952a027b39bb3209e9a0b53": "150fc24e4a4fbe89a1300db4898e17e5",
".git/objects/b1/3caa7e166ffb4814be688d1e1c990b2704c5f2": "6cec78ff253aa77be4986649378f9d2e",
".git/objects/b1/8e3a364b9ba81db517a2b3a24b4e7c53879731": "819496affbfe2eacc18fe9d2bf1b2b1a",
".git/objects/dc/c83a00463e98b7340a84ac31c50a32bc389fbd": "8811f4c0efc4bb1aa80676f7eac72dcb",
".git/objects/dc/76d87b2d7bdb621b5612725ec00cc5f422a4dc": "759461ad1e1ade7f7d3732dd4024fccf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/f7360454becab27d2d635ca182a85ae992b2db": "0e7a1ccd7a64e3bbb7284ef39f00b38b",
".git/objects/b0/78878bfdf62c16c0c22a4e945678bf8a29d656": "c730c586f8d24f1aba20fffab8d6f46b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/17e8baf169eacd7da8bbe1e6be333eae3a20e4": "842293b411a518f4059b9c5996dffb66",
".git/objects/e7/32781569480b14187edf0650386ee7a597c10c": "b70c1c78f9d4316398181c6da0f4a9fc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/96a48d00d378a06f1b9bd322079477cc81a67a": "a1b67bed339c52303f034501dfb5cc5d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/7aa5a18a654d2cbb6c28c57b65e2e0462fcd50": "732f9aeb574f478ff9e0a007f5524897",
".git/objects/41/61ebd844a0d3db82a543a9a4bd0f0e7a061b27": "27ac8a669bc6ac3fddc03120a7b0599e",
".git/objects/2b/3511d441b86e356e0022ce8673ace084328b7b": "a9b1a0d709b35b7aa82a0a5f19bf4347",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "392a419c13f96f69d0ae4bca2a2e0a4f",
".git/logs/refs/heads/master": "392a419c13f96f69d0ae4bca2a2e0a4f",
".git/logs/refs/remotes/spotify/master": "23edb1fa111c6ed1da91a06e2f44efb7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "aac25ac4a84e43fbda7c466e84be0145",
".git/refs/remotes/spotify/master": "aac25ac4a84e43fbda7c466e84be0145",
".git/index": "ef581845544901e5001ff850929b310f",
".git/COMMIT_EDITMSG": "9231d1a8f4b2b2ac54b135df0efe4b42",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/en.jpeg": "64287ffe306a7d6464c9c27ccdc14303",
"assets/images/liked_songs.jpeg": "a432a7ec089a9daf7cb214c4133ba7ff",
"assets/images/liked_songs.png": "2d5aaeb6e5706c98be06acd1ae304f45",
"assets/images/dm3.jpg": "ac6d5a3fdd55fb835d7c7e05f339a8a9",
"assets/AssetManifest.json": "d3fda5d4dd7ce8c96d0090003699ace0",
"assets/NOTICES": "6764d8a373111b51394c9378a69e3119",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
