'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9b538b425a3a72e97aaf1b32ea34628",
".git/config": "128c4906e9288211c4cbb33525fdb3d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4e5e33ac22211d90066c53c0bdcfa043",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c3d68eaec2a71844156ee3c93874df8",
".git/logs/refs/heads/gh-pages": "8c3d68eaec2a71844156ee3c93874df8",
".git/logs/refs/remotes/origin/gh-pages": "2e77cf8118692288734af50850dfeb2a",
".git/objects/01/49e2278568f9ba4f583aa07942be520ff1c0e0": "6378e6b608e422220746be9d15fded5c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0e/129ff1f44c09ad9297d9ff0dd6420563253521": "40acf7790766dbd498aec3aab8350f12",
".git/objects/0f/31b922cdcdc94391978ec6cf343ae0605c0523": "664315fa94e0140cf3314a4314c9e1a7",
".git/objects/16/ca168c65157b4ea398c8fd0c82b3c0435d69fd": "490bb22136b52ee7c443fca06ddc6737",
".git/objects/19/3d0dbabec737eab3512c828aa7778a1ae6d61e": "2324ce8c9f2532414f515c1aa54864c0",
".git/objects/1c/559d0ddcd234e9a82601788ad6cd61a03c162b": "dc6bdf72c8f5e86960fb2da989637498",
".git/objects/24/951239e4e05ab188e6e1f177964ac9476a2cfd": "fb2097e90e7ced4e9c498915020784a7",
".git/objects/26/7cc01e815c35de1a8370e50ab83f8e34e267cd": "2304f55d8f74b04ff3cecb37502c7b7d",
".git/objects/28/8e45d36bf0a32e606d4aec4ca558410351df89": "87c8a068ed99decedd26731dbc7f84dc",
".git/objects/2f/a867fe25a53a069f1b91ad5980602a209ccd8d": "ea72dffcef1df16a0468762cc6262f48",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/f5e6e85096ba57623ce84cd3dcc13cb4fceabf": "af3196c659ac5cc3ab805ea365bfe333",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/25d684ecf5dd1e780424f4962d85e1172fd922": "a4c59ed6d673220f71139c306921fd10",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41b840cbf4048cd8712db5f9d6d8999ba6eb86": "14c79375e98a149d1b281d49e90134aa",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/fe4ada572ef69fdf5e093c5aaeb652d6b2008a": "4490c6930eb26ad456d257e05758e0d3",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/17809d899d6e7731909671fd2bbf1b5af99018": "b736939f5dcb04a3dc3ecf37745f97e1",
".git/objects/5e/5ae99ff126719b52760e723d26c54333acf589": "067020b03fa75d09cecee3afeccb1281",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/a1dc2139e13fdd17d0fedd02115b2351998583": "de98b2c9769e47eae191d2622d666b0f",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/65e73b01680f4d091a346da038c4b6d2e6b2b9": "7befcd12ce92f5058e5b41137c07784d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/bd070dd84afdd2083421b30a44694034c8a581": "96ae4d2eaf20b52ee6b5a09b11a598fb",
".git/objects/6e/f9aa1b71f89a21cf712dbf5a75c69893fcf6c7": "1f884702dc22c6e4f652eb9fb5eef456",
".git/objects/71/e8802bfe56ebf39725764c3dc6d066f52f5c40": "06b1dc8995998336f3356cb7a8400659",
".git/objects/72/867210524fb362b93a58c01d488a64cf704ca7": "ab3a34757d787a570c91001ac062b02a",
".git/objects/75/0ca0bb9cc81967a378f441b55f38dc81e4c00f": "95bd783772d1336e57c0f1a6722fd300",
".git/objects/7e/2f06bb4f699163d5dcdf45c7a5a615cfee25ee": "7db5a72cefbb70b5c6a242202efa5f3a",
".git/objects/7f/f48959490cf07aa5728758f56e880bf24de4bf": "8831951fc9fe27c0a7f55e03817682eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3b1f8808c0effa9f70782816a80d6909e76141": "96ebf0d688c820bc0fb16d0cebb02f4a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/45b3b1e2b4693d0cd3b217f71392097d72bb08": "88bd129cf08b609f6516ba2f1625252c",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/516c14904631ce5c32a105c134dee5c56acca3": "28dee2171697542c4593d31833173322",
".git/objects/9a/cf9a427babe7581684073632691c08e4522f20": "20f6fe4eb419718875fd4bb5e77e8f2e",
".git/objects/9f/fbb8463b761dc30219677868ced2607d5e1dea": "de0e157e184caab389abacf4f3d0a657",
".git/objects/a2/f8163fefbb952c31b57963b15e934657acaae8": "036a53e7c67d738c2008ee034bde3a79",
".git/objects/a3/e79a7541b9dcb22db6062074329d3d54c8e7c4": "9c149c32e582e03af099ff6208e580d1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/154865ae794ba128875bab686b03463955e1e0": "8a257569f55a6ef48ec9c0885693844c",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/c70724509cbc95e60a2cef88bd8cde2e90ff21": "2ae8eabe49dd50e578f67eb5bd29236b",
".git/objects/b2/cbb5b15eeba8cb0afaac24332f462e52b90eab": "2da075ac25263ae1004c6a4e71a82e7e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bbc2bf57de5411bac0d6205b3ad8b815c83656": "878a9bf29905d86ec3291aabd014d6fa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ea3b82f1111c5b5e691cce0b70f3ebb8040dc3": "684d5622691368d83a3860e4c4362afe",
".git/objects/ba/047606d279b631fbc0a6d0a838a5a2ed581302": "e958eb5f4d3f5600e3c9a502425b931e",
".git/objects/be/8760ea992cac6e1e9c5068a491fc01e600e177": "c98363cc86c2570e95e4c6ca0a842dc7",
".git/objects/c5/45b873f070dc3eee1e360f505221e98fdd0ac1": "40aba59afb76ac1b2fc9727f2352030c",
".git/objects/d1/ff453b7dd8a441a721466e38240a1ac5eea359": "f19d7018735da7e0061e5f336d43037d",
".git/objects/d3/f43e3c9e126bc79b48bf9ab03d0bc4b680fb9f": "3fb6a3dc4fb4e6c5a0a749ce0843e8fe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ab55ad7210f9cd72bddd6dd9398d54d985c32b": "103b2b2f2256d628dac19c5932ebcae0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e98f9f49047c3e278499337fd795875357222e": "3ae16f0fda354c4f998172bd5107dc1e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/885d6f4131966eca4c891e27dc5cc71c961a6f": "210b243dfdcc01f8757587e51ee358ac",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/efcb98f62fb20b328bba82ad1b82083ce0457b": "e03b36187e2b78b3607aa96d65fdc7dc",
".git/objects/e2/a1a2310e926d8c38e2210670f96e0b8a433786": "c714414ded3ac141ba0bf873b26d379a",
".git/objects/e3/34d7d22d6724c88727173b60d7a50537fea495": "2f092ef1adde6f9051319a8f8dd95b64",
".git/objects/e3/b9ff7009ffc97cf72e10e1a54b41f6899a9df2": "69744c8b74eec74c8c763d01b2c12941",
".git/objects/e8/665bc797844b2630b229e623511b0fc83c9702": "2ee5475b40ab49a19e2d1934ddd93074",
".git/objects/e8/a83545797ec36ccba1e11da65851582e133bb8": "a0385884053f2f90bf6feb65a227e39d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/5247263606a5db44e632f6dee4b92ddbf78a03": "47f2d87ad50dcd2aa321f76dadc5def1",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/72e27e3e079ddc794159dd7896900511278cb6": "07e858514835bcc7b1406dc48cd41abb",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/c8abd84087c96b6116680323c041e5a493ab8d": "bdd674baba4d1436330f1668bbb34349",
".git/objects/f6/370cc3056cc09721166da07d529b9221aebdf0": "03d2c0ea44401767457a979d252c54b7",
".git/objects/f6/853f7a7adf44f35fd2cc16592db7e97459f2ab": "00f0355fcea9a5f479e3447c07b6ca99",
".git/objects/f6/8defd8f168bfffcbf8209fc19cd5d4d8249cf9": "216beedc8d79cbcd6319fed0f0e10901",
".git/objects/f7/92a5b43c598700a1d802ca16a6256f22e49407": "9d93bbd37a1f75a05981cfda18d4a065",
".git/objects/f9/77485406426e0719a3ed8b44e0803b2316a993": "05818cdfad0c29a9cd8430a7e64be8a3",
".git/objects/fb/ebc8bd22d9a7c89c512b632ced66116552df24": "2a5763904227f6306ed2a1492aa21f25",
".git/objects/fc/100ae10ea4fcc4dcf2c9b0d7ce2c692e2a4881": "7208f03cccefca3dcf68a2a76a2a2e51",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/gh-pages": "dce69bb0f0ea0244a753de701e8715be",
".git/refs/remotes/origin/gh-pages": "dce69bb0f0ea0244a753de701e8715be",
"assets/AssetManifest.bin": "5e918a9a180724f28f9bd78b056299d7",
"assets/AssetManifest.bin.json": "0991ac07d73f1639f1c6fdb2a65ecf82",
"assets/AssetManifest.json": "f4de65ee60f35d0b07d5fbe50ebb4743",
"assets/assets/images/facebook.png": "494cb5a2f0c105a4fccf77c068578f52",
"assets/assets/images/facebook_dark.png": "bb203bb8289cd847cbe79a2bea41252a",
"assets/assets/images/frame.png": "b2faab6ad1d891d7381127e7f5a84f94",
"assets/assets/images/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/images/github_dark.png": "0cdd56adf7550b5b97353ab1ad7b2c26",
"assets/assets/images/linkedin.png": "dbce0cfd7ae44f852e206c24bb8c4318",
"assets/assets/images/linkedin_dark.png": "53de2ac008d71b38b8912aa73073cfc4",
"assets/assets/images/me.png": "51b414c5d404b7603239c9d777a01668",
"assets/assets/images/p1.png": "bdd6dc908a08afc11dcfcaaa57c641a0",
"assets/assets/images/p2.png": "57e2480b264591fdb865a31d6ae4944e",
"assets/assets/images/p3.png": "7f35a85833bd4b69b9adc73a46a05222",
"assets/assets/images/p4.png": "52d29e9fca0618f89ea816a1f4f94b6d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8243943dd601cd9e708c95414d9c318b",
"assets/NOTICES": "690582ee4c2990903b4b87a4ca4c33e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3dd20f0f61fb1605634773d87092a3b0",
"icons/icon-192-maskable.png": "f3eaffaa97a24559931283e77f2522c4",
"icons/icon-192.png": "f1bfd725d1ee619d7d06de7a319725bc",
"icons/icon-512-maskable.png": "34615d96794cdf8cb503dd6e3691da08",
"icons/icon-512.png": "53029724143dd3e592f8378739aa3add",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c01af8d5cb811d69eaa9595bf8aa9f0e",
"/": "c01af8d5cb811d69eaa9595bf8aa9f0e",
"main.dart.js": "8a11ed00621f16243b187e407211db29",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
