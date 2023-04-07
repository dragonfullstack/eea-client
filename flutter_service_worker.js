'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9024855b2fe11c30a9a138b43bee6b24",
"index.html": "7dc895a9d64985e55b8c6f30e12f44a9",
"/": "7dc895a9d64985e55b8c6f30e12f44a9",
"main.dart.js": "e86614030a2b44398d4c1c0273eee6d7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6182f6e2a5c611d4a788cce817215748",
".git/config": "e76e6f49fd19bd3e8dc9518e0ae7b954",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/66/9b2f44fae26ff729b6972fe93ffbc05d9fec27": "345504d10722bda160eacfba6853cdb7",
".git/objects/66/4097323b94bb0a1647efb199b9fb7beaa1a789": "832185bdef80ccc8e352fb06e4312667",
".git/objects/6f/faa9ebeb4a0b5fb49cd73cfe9949092c59d9f6": "b2051c55cbcdd8e9374b606c06b69cb2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/0b/8cbc23aefa060d2e9b384c2f1b517c51ed92bc": "8ee008b0ed60ad89bcbe4dea1eaf64d3",
".git/objects/0e/325fb115abc3f00ea14f0cd6d5f9e666a4f09e": "7798bf920c7e8848b3b7cdaaec79f7d0",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/b5/060ca6859b5ebcd90604ece84685fbcd898e2b": "1d72afa0c58e6e2a97282673fbd2722f",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/ac/0999dc47e2e7f973cdafb2f96c2b73897b377f": "df556cd70c3062a73a30ff1ec09c4b95",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/df/6f76f71fe2c65f8b3d25bade5a210f2afd9463": "004143f3c79c7390884c41b8c7c3fa5d",
".git/objects/bd/50589d7da8de7938f6e521a26d3ea71cbdc6c4": "ab0421a2ea8dfa3f687815ce664f3c93",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/105ccae09ae8adc2c1790bf5a5265ba5ba8fae": "dad5a8bdb038ed573366af84b20d03b1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/cb77fc333ea6e6cd11cdb3d10dea8091d9dc84": "da24c78470575b2d855a61b1b110b494",
".git/objects/f5/46686c2f6bbd7a397413614d8eda4234e09601": "9556589eb06874462990317fd0b98568",
".git/objects/e3/70f29ff7570aa10a73f523b3f38341dce1b28b": "f3e90d860627b3fc0fd7d4d6f371d707",
".git/objects/ca/a2a53780767f0158f556701f75cafb41f18294": "56566223c1773904d797deb5d09b8811",
".git/objects/ca/4618e9f26e079946f8809f3d207712878f0318": "7560f0658625272cc97d0950f6f4c7b9",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/aeeb16a6d7f754258bc7f3f2101d287976e6e6": "ea0f32909c0e06fc9256a959692bc0d3",
".git/objects/ec/85686c8c9982b44c47484867ed5c86be5f5b3f": "a505c1040e6ae0e19a2bc966cb4d5664",
".git/objects/18/759c26a16eda3dae629f5ccdc5b15e6a0e3295": "cbbe3fca4de2d0880f99dd7a01ee287b",
".git/objects/27/bbefd68c305c1974d2ec5169e84b6679e5cdc2": "edd1d60476294438a2ce8c991506d365",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/839f4a3dbd92f014fb6b1d29224bcf13ceed44": "90d25a999741f764d9c4c1c7e693ae91",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/73bbd93e071494c6fd49f513814891a5d0c6ef": "6cf7387fb8c524eb35b26ae7bb5eb370",
".git/objects/21/8f43b46825b94563bd5bc8e9a4c3d8fd31473a": "7eb9b0764d49a741b95b22e0258d746e",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/258b024b953f407423a502867ee11f7bce1e31": "1f418b7889c160496fc54a0f67b3668d",
".git/objects/9f/7db35a607ac26b29a9f5589a199dcbc18c0f09": "ad2f0df21028e12fcb15deda60e5161d",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/6e/cdbe43e43055688bb1a1a1da34f874ee9546ad": "de9a0e3b3e9f5426684ce5d1190b27f0",
".git/objects/36/7d470587b9b1f112512e0310baaf9a79fe5af5": "2ab7daae83ef3f66f7eacc879394b091",
".git/objects/09/13adc378aa1523710ab7a97b743f14885199a1": "a5984afe11609b3e7e87a03a67ae5bea",
".git/objects/53/6a45d03ba2b6bb5aa2fd9ede796b3c4a827a93": "47382c008c9625c83a0b9d9f375ae865",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/01/6a4952e2213b0573a0575f0bdffd1d88e65371": "9639c8dd870fb588500c21f46009d8ed",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/52/95ff1643caf7b575212609005beb696e761646": "42af006437f2d24ea6db7251cbbaaf43",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/54cc1c55ae5b0877c282323915e386579563ea": "32b58135b9128f225ce7c26ea0e572ec",
".git/objects/0f/b965255eddd423a9fefc9bddb2047078d66cf4": "9c7a4e455d80405ac09c402b3d13c1ab",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/dd/c9d41719b1cb16ef2f9f60a40615e58386dddc": "c484e1ad7ef2672fd209fd373821191a",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/ea/97269c2679ef23eac99a3b483b9247b7c4842b": "3694c69a9216839e5aca05efbf7e6a04",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f0/b565e1a0195dfb327b06bc64c53b5e01ff0fe1": "0b38a756c891506a35a75406a566f482",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/c5/23d46fa4915484f46ffc760ef6b4e42a94980a": "d6c08b56ef35be4f075fd32a7ef057db",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/c417ebfd780ef81c9078a7622b8a5312b8ab0a": "9d2e8a1f408a96391c6782b287cb9a69",
".git/objects/84/0d828d2acf9843218dce8567e78d28d61d4dae": "d74193eb5ba229dccf40cdd96019d2ca",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4a/b4761b4f71ebb69f7481ea47d6c91ac7afd41e": "159c19bd93ecd45be51ebd0f196a9fdf",
".git/objects/24/55bed370e997601f3590d94d1b9c7c93ab2fb4": "c00f7ac8d96b5527e39f5767891dc121",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/004b5eb043c70c914ad5222a116f8df1d5a4df": "584062ddab768dbe49b497ef3ab93a66",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/daf5e1a218f0e87735c6c0883d0a00db284c1c": "2e30e35cc47406b6b626597ce087d4c2",
".git/objects/76/21e92dd2b43eae6dc0ad9aa41f376cf1aa16fe": "db1ccdf8b6c8c5ad7ea60b2b2e506da5",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/82/60d449a9fce7d708767a8e452f9f70ae4c699f": "6c7d9764e01f75415442b8217bb29333",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/7a/a6cc5f5970659f3ca041526fe8ddefa3463e4d": "12db5ef1478b776f33b0c9ec4af95ae8",
".git/objects/7a/3d765dcb27cf668c7e3cd2a5d5e5cf8a61aa5c": "14eddae81c4ee27b66bb2329f817bdb2",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/25/1f2c02788f26496ceadec656d3862850cc84c4": "b1b11ea9218f2f2d279ff9a70a40810b",
".git/objects/25/fe72c6a119c480bd2ef03de35ffa6e28b80f24": "36e6f368dbc9d5be238a08a2ea2ad059",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "8164387fd15e3313421659a3411e5236",
".git/logs/refs/heads/master": "8164387fd15e3313421659a3411e5236",
".git/logs/refs/remotes/origin/master": "7201779918916f09c4fc818aa2109b8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "482f285ba8750d44007e08bf061833ef",
".git/refs/remotes/origin/master": "482f285ba8750d44007e08bf061833ef",
".git/index": "49f435635a643b7d24600ee0b95c07c1",
".git/COMMIT_EDITMSG": "eef3e1918093ebb099016fc4296bcf2e",
"assets/AssetManifest.json": "a5162c30027381c7a7e24d8b9ace1abd",
"assets/NOTICES": "3348dc623f7388edf5729b54e837557e",
"assets/FontManifest.json": "c3825d24219536090e36232bbde438be",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/img_reply.svg": "954bdee68227b3e84018b065e39c4222",
"assets/assets/images/img_arrowleft.svg": "5abfc34886572cc2ed1ad680b8b02360",
"assets/assets/images/Rectangle30.png": "742e85c75527b1c7e2d4e9a6cca57e32",
"assets/assets/images/img_radar2.svg": "b25d7543bfa8c06e40594797561a2590",
"assets/assets/images/vector.png": "a0028b1210100a8e356dc865fb1771cf",
"assets/assets/images/img_file.svg": "b0bb72ebf93ebc5f293c0742c9f77e99",
"assets/assets/images/img_sct1.png": "c787bb0d01f7add808d277b6122b3eb1",
"assets/assets/images/Rectangle.png": "7b62e42bedc01292fc268959ef377019",
"assets/assets/images/img_user.svg": "d999e9ca9c689b8ad85c62b220e5fd00",
"assets/assets/images/img_trophy_blue_900.svg": "d2c07b89345daedfc4e1138065045acd",
"assets/assets/images/img_menu.svg": "cd4d3ccb906c594d8e2fd2763b85d25d",
"assets/assets/images/img_car.svg": "1fbf444697e82b9ef52677de102b0a1a",
"assets/assets/images/img_trash.svg": "a1f29b7dfab99303e152453d067dc446",
"assets/assets/images/img_trophy.svg": "68338a8b5b49b995f20b76bbb902939b",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_arrowright.svg": "da8edd9daec7bfa5c1ee8c7f7507251f",
"assets/assets/images/img_logousaid1.png": "8d2e170308adad30b29c4cf293b5c06c",
"assets/assets/images/img_arrowright_gray_800.svg": "4cc9f6b2c5680a20010dd45171976167",
"assets/assets/fonts/InterMedium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/InterSemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/InterBold.ttf": "275bfea5dc74c33f51916fee80feae67",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
