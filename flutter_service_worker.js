'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f750e154ea41fb1cdf1dfe8881262852",
"favicon.ico": "5e8857e3a20d0c2f070a826355d18bf3",
"index.html": "874cc3f59e08e20768002d756e802554",
"/": "874cc3f59e08e20768002d756e802554",
"main.dart.js": "33ff52dcc5bab36401e60d927441cf37",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "85e8f3eaccb0896392807883775fa388",
"assets/AssetManifest.json": "57ed7ae71fadd544c2ff1640842794bb",
"assets/NOTICES": "65e9209c2e53aaf9a43ce3428b1aad4b",
"assets/FontManifest.json": "e4250421d07a234ecc6517a4d8cffb56",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/pay_platform_interface/pubspec.yaml": "ce62e8952c066e8507f555f896f28a0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/moyasar/assets/images/visa.png": "b5b468913fc30cad4635fed4de9544ab",
"assets/packages/moyasar/assets/images/amex.png": "31520ab000dea0aaf6f5f000a6a0ee09",
"assets/packages/moyasar/assets/images/mastercard.png": "c376b0b9c33c308e330f0edd789a2fe2",
"assets/packages/moyasar/assets/images/mada.png": "95ce9fd8a741b34cd1a9db1452c8f049",
"assets/packages/pay_android/assets/sl/subscribe_with.svg": "cec97c1774af765e84a14b70ad360214",
"assets/packages/pay_android/assets/sl/checkout_with.svg": "72e752b5950544e1090850686c5b6de9",
"assets/packages/pay_android/assets/sl/donate_with.svg": "8fe271e938ad174fde2110ac55ed3d9f",
"assets/packages/pay_android/assets/sl/pay_with.svg": "39aa5ba8c0602e5ca1f4053b0f3f973b",
"assets/packages/pay_android/assets/sl/book_with.svg": "c3b7b177b968ce9e2777295d31765ed0",
"assets/packages/pay_android/assets/sl/buy_with.svg": "0d329d0d3a218f0622d2a1ca9c1a9684",
"assets/packages/pay_android/assets/sl/order_with.svg": "1654a93363261f2f5d8b91baa2072be9",
"assets/packages/pay_android/assets/sl/add_to.svg": "1a1b772b764e381b4205c78d59b61e7a",
"assets/packages/pay_android/assets/sk/subscribe_with.svg": "7cf1b3d1ef625f83e7fd0079e4bdc303",
"assets/packages/pay_android/assets/sk/checkout_with.svg": "159ea444626e2b950cc69cf54c850808",
"assets/packages/pay_android/assets/sk/donate_with.svg": "f6df0117e4b724d292556b4e6ebb216b",
"assets/packages/pay_android/assets/sk/pay_with.svg": "0b01f6484ed710b41b56155f2078081e",
"assets/packages/pay_android/assets/sk/book_with.svg": "c0b8d28152bbe05663888c246af999a6",
"assets/packages/pay_android/assets/sk/buy_with.svg": "e92b318a6e6ec8213d60d19692e2dd53",
"assets/packages/pay_android/assets/sk/order_with.svg": "7c0210ac18b4ffe5702b6467058679bd",
"assets/packages/pay_android/assets/sk/add_to.svg": "00c04b0acc20a448fa6dfee0b966545c",
"assets/packages/pay_android/assets/pl/subscribe_with.svg": "4efdfc25f0b0a08f03d361378008d509",
"assets/packages/pay_android/assets/pl/checkout_with.svg": "5375607852a44e0bcf9dd03c1566cf6f",
"assets/packages/pay_android/assets/pl/donate_with.svg": "c19b6c96de520b8d0ade219079ed074d",
"assets/packages/pay_android/assets/pl/pay_with.svg": "d900fccfc783241afd48264ba57663d5",
"assets/packages/pay_android/assets/pl/book_with.svg": "23b2f875070896871c9962bee6cec0da",
"assets/packages/pay_android/assets/pl/buy_with.svg": "98f1f1c19592a0f03bef3323a96f6536",
"assets/packages/pay_android/assets/pl/order_with.svg": "22d53804e79ea15b494d000228ffb590",
"assets/packages/pay_android/assets/pl/add_to.svg": "a9bdfbc147a9036ca9c2e0f2a5e44054",
"assets/packages/pay_android/assets/sv/subscribe_with.svg": "db6ba6d478437b7b1379c854338fc2fd",
"assets/packages/pay_android/assets/sv/checkout_with.svg": "8c0811d30b32d77e85752612e16347a9",
"assets/packages/pay_android/assets/sv/donate_with.svg": "e0888ff4e14a434daf98167d9f11c849",
"assets/packages/pay_android/assets/sv/pay_with.svg": "611dc13ea36a14458c0a103ebf344c5a",
"assets/packages/pay_android/assets/sv/book_with.svg": "1ff19d0dcbacb1ef977f18eded0931f6",
"assets/packages/pay_android/assets/sv/buy_with.svg": "36e951a4737af9b7541342620a6e0f03",
"assets/packages/pay_android/assets/sv/order_with.svg": "13e3a0b6444a9765762d1cdea97158bf",
"assets/packages/pay_android/assets/sv/add_to.svg": "0fa576dfcac72a70fead63c960b066cf",
"assets/packages/pay_android/assets/ms/subscribe_with.svg": "fff5fd19393074960efdef781bc2f3ce",
"assets/packages/pay_android/assets/ms/checkout_with.svg": "65cf7be75645cc6ac90c9ee4cb40e4f3",
"assets/packages/pay_android/assets/ms/donate_with.svg": "79cea13f10775a1f47107fd0d1d77c0d",
"assets/packages/pay_android/assets/ms/pay_with.svg": "d87232bd00f4754d945776a1c11a9a83",
"assets/packages/pay_android/assets/ms/book_with.svg": "5976935ace72bcc9b898c47fbb3ab8b0",
"assets/packages/pay_android/assets/ms/buy_with.svg": "6ad18fe663279303a53da0bcb28c88ff",
"assets/packages/pay_android/assets/ms/order_with.svg": "732033acf5ea72bd8b8b939e7d92da7e",
"assets/packages/pay_android/assets/ms/add_to.svg": "967674567e0a256ba609e85ac9efa415",
"assets/packages/pay_android/assets/da/subscribe_with.svg": "5047cf4f6315ff4e10a5947adf94efb0",
"assets/packages/pay_android/assets/da/checkout_with.svg": "d9f8ab3a339a1ad79b51d63e3130567b",
"assets/packages/pay_android/assets/da/donate_with.svg": "cf378b633e41e235b1350055cc97eeda",
"assets/packages/pay_android/assets/da/pay_with.svg": "dcab745dfb348a6270259cb5915153b5",
"assets/packages/pay_android/assets/da/book_with.svg": "ee368d45b04e4c6ebf678f86bc62b7bb",
"assets/packages/pay_android/assets/da/buy_with.svg": "785e848cf8c9c762d085aa871d8d7410",
"assets/packages/pay_android/assets/da/order_with.svg": "21e745b5861635499942889d99cdeffa",
"assets/packages/pay_android/assets/da/add_to.svg": "d92a6bc7db33fda96c29fda5ba616a83",
"assets/packages/pay_android/assets/no/subscribe_with.svg": "81caffa3709ecb2e73cb74439079331d",
"assets/packages/pay_android/assets/no/checkout_with.svg": "dccdc27802c8e214a65b7b1e02838ede",
"assets/packages/pay_android/assets/no/donate_with.svg": "6a7a6ab52b16d8091f709b47e1f667d1",
"assets/packages/pay_android/assets/no/pay_with.svg": "48f54a7c71e8a9b1d2bcf853c0254b8c",
"assets/packages/pay_android/assets/no/book_with.svg": "6237f51d85d10760e6ca7a4ea2d90400",
"assets/packages/pay_android/assets/no/buy_with.svg": "6d85d37387e56f1dd7c7e37f9ae29a88",
"assets/packages/pay_android/assets/no/order_with.svg": "e687d46a19efbd7c6f9e02495663d908",
"assets/packages/pay_android/assets/no/add_to.svg": "63eea58c795662bd6a6613bcb7e7a0b2",
"assets/packages/pay_android/assets/ja/subscribe_with.svg": "faa9e34a03afc68145627a45757c0c51",
"assets/packages/pay_android/assets/ja/checkout_with.svg": "ffa79096847796389212aec30b44d7ba",
"assets/packages/pay_android/assets/ja/donate_with.svg": "3050d160d31becee6cdd6e3397d722d7",
"assets/packages/pay_android/assets/ja/pay_with.svg": "271c5a7adce4a6da1b10aab271180e33",
"assets/packages/pay_android/assets/ja/book_with.svg": "643a14c418f3e061d86038d28b473d07",
"assets/packages/pay_android/assets/ja/buy_with.svg": "b460024b19fd6c17cee1677dabe142a5",
"assets/packages/pay_android/assets/ja/order_with.svg": "f62cb0a507f6fcdd44ff3862230eaf61",
"assets/packages/pay_android/assets/ja/add_to.svg": "42ad478d343da3aca3226ddbcc1bbe96",
"assets/packages/pay_android/assets/el/subscribe_with.svg": "3892ae846e04df415254e02643b76525",
"assets/packages/pay_android/assets/el/checkout_with.svg": "ff4d7e33f2fb9d45cd81b477982086d2",
"assets/packages/pay_android/assets/el/donate_with.svg": "db2d3ecc06967c60aa1494065ba6b112",
"assets/packages/pay_android/assets/el/pay_with.svg": "b46ee5b6236b73184cc752c91877acd6",
"assets/packages/pay_android/assets/el/book_with.svg": "232425855bbbec477ac75fc6201eb658",
"assets/packages/pay_android/assets/el/buy_with.svg": "c572bb24c6f8fd7b407e828fe765bcd1",
"assets/packages/pay_android/assets/el/order_with.svg": "3d3d3b64d4ccb81c49140382562b890a",
"assets/packages/pay_android/assets/el/add_to.svg": "e7943d08bb521077313bb7333c8ee87f",
"assets/packages/pay_android/assets/it/subscribe_with.svg": "03fa498042e0d13949373b545b6c1271",
"assets/packages/pay_android/assets/it/checkout_with.svg": "2440a69133831cd23bb33d529a4e67b1",
"assets/packages/pay_android/assets/it/donate_with.svg": "23d3b8d82dbf9756394ca2308e1c8119",
"assets/packages/pay_android/assets/it/pay_with.svg": "367408b9d6b9f43168e84ee5e21753e7",
"assets/packages/pay_android/assets/it/book_with.svg": "1a26e5ccf20ca263391873a3a4e3364e",
"assets/packages/pay_android/assets/it/buy_with.svg": "0a1c6a223718b57693f5180f49e4069c",
"assets/packages/pay_android/assets/it/order_with.svg": "3b21e5135549ffa89b0891d331339e0a",
"assets/packages/pay_android/assets/it/add_to.svg": "5492101c855444bad5c566051da99a51",
"assets/packages/pay_android/assets/ca/subscribe_with.svg": "42a8215967dd4e3135ea5f45ad5b5409",
"assets/packages/pay_android/assets/ca/checkout_with.svg": "0208700e968fa9842d118a4cbf7cae83",
"assets/packages/pay_android/assets/ca/donate_with.svg": "f3df2bb3d2749d0c9739b2497168f00e",
"assets/packages/pay_android/assets/ca/pay_with.svg": "0f6fbb7dbe57f8743244b6facc9b2f2e",
"assets/packages/pay_android/assets/ca/book_with.svg": "3b14295758a4242d5c298c6cf97061a0",
"assets/packages/pay_android/assets/ca/buy_with.svg": "99fef5027c4f2178c8807e2618252a38",
"assets/packages/pay_android/assets/ca/order_with.svg": "a51dec487a696e1717bed6d91110d82b",
"assets/packages/pay_android/assets/ca/add_to.svg": "5ce822e74e207e40e6432cecb18e614b",
"assets/packages/pay_android/assets/cs/subscribe_with.svg": "fc0fe63fe043594f83dfc926dad10d03",
"assets/packages/pay_android/assets/cs/checkout_with.svg": "80db31e271199b3fe8e3c8ecda21bd93",
"assets/packages/pay_android/assets/cs/donate_with.svg": "1f6536a413fc8b2688938f4b7c62f6c2",
"assets/packages/pay_android/assets/cs/pay_with.svg": "9de2c26db512d92786ce3444df48bba1",
"assets/packages/pay_android/assets/cs/book_with.svg": "7a4623865e0833b7d7946cd367d9bdb9",
"assets/packages/pay_android/assets/cs/buy_with.svg": "8620a6648b29a9fa58cc3cc0cbdee343",
"assets/packages/pay_android/assets/cs/order_with.svg": "bb08acff12ddd7ddac7871ca025b2431",
"assets/packages/pay_android/assets/cs/add_to.svg": "6d81b51062de8f50a78a894dd0a1f615",
"assets/packages/pay_android/assets/ru/subscribe_with.svg": "56e37dc3ff3a80ed7e39f5aa91df4c29",
"assets/packages/pay_android/assets/ru/checkout_with.svg": "8b0b720f11b553f67994743dfd0c037e",
"assets/packages/pay_android/assets/ru/donate_with.svg": "2e5a2d0b92282c39d629e4f2cd80976c",
"assets/packages/pay_android/assets/ru/pay_with.svg": "2740ef0a026e9121a71e8955c5d916b2",
"assets/packages/pay_android/assets/ru/book_with.svg": "97a21c6530057a45d4eaf801219b7031",
"assets/packages/pay_android/assets/ru/buy_with.svg": "c37576af5a19737790bc312bd2a96bee",
"assets/packages/pay_android/assets/ru/order_with.svg": "fbe5b45a2c3582746032ad38df0cfca1",
"assets/packages/pay_android/assets/ru/add_to.svg": "f60d842274a4c1e031f138a9df9ba6bc",
"assets/packages/pay_android/assets/pt/subscribe_with.svg": "7623533120b9421ded9bb33b824f5bc8",
"assets/packages/pay_android/assets/pt/checkout_with.svg": "6705f22ed640ae242d97b1eb2ca66576",
"assets/packages/pay_android/assets/pt/donate_with.svg": "6fe25733f5ace8d8692a6ef53ba8af3c",
"assets/packages/pay_android/assets/pt/pay_with.svg": "a55736ba5eb3056cb6bfbfedd93e3ecc",
"assets/packages/pay_android/assets/pt/book_with.svg": "ae15c095294c005c0cd3b129ceb3d983",
"assets/packages/pay_android/assets/pt/buy_with.svg": "471f610e7e2126e5f676f411f38ffa72",
"assets/packages/pay_android/assets/pt/order_with.svg": "b0487e040573c9bee4dc8a005b0dae33",
"assets/packages/pay_android/assets/pt/add_to.svg": "c8065cd21e8bf7c57b08201b5195e03b",
"assets/packages/pay_android/assets/gpay_logo.svg": "3564204149c26f43d43cb236d4ff97a3",
"assets/packages/pay_android/assets/zh/subscribe_with.svg": "dc73191614afeaf76abf2be904821744",
"assets/packages/pay_android/assets/zh/checkout_with.svg": "12e7529fb599e632fe130a6cc1aafbe3",
"assets/packages/pay_android/assets/zh/donate_with.svg": "3207f3b513ba810952d797e6fd2faf77",
"assets/packages/pay_android/assets/zh/pay_with.svg": "1c8f6a08eeff10a93f9fe78af091b6fb",
"assets/packages/pay_android/assets/zh/book_with.svg": "3890280055e8b622a6cb73cb2aa6e111",
"assets/packages/pay_android/assets/zh/buy_with.svg": "4e9f08fd3c90121c12a711f45cdfbcc8",
"assets/packages/pay_android/assets/zh/order_with.svg": "1e4fb2c463f50e6d9b07deff3eff47bb",
"assets/packages/pay_android/assets/zh/add_to.svg": "7cd05c87ef08317720372ff96000fcaf",
"assets/packages/pay_android/assets/uk/subscribe_with.svg": "98ab77df273ccf318c099278e7ca767b",
"assets/packages/pay_android/assets/uk/checkout_with.svg": "4295c540e4be0e1e88b134ce1c7ed28a",
"assets/packages/pay_android/assets/uk/donate_with.svg": "cf8511ce785f0699f8d270682c99e276",
"assets/packages/pay_android/assets/uk/pay_with.svg": "673c44c6bfee363fd974e3d469dd765d",
"assets/packages/pay_android/assets/uk/book_with.svg": "f42d7fe05b8641eb400b2d189e1268f7",
"assets/packages/pay_android/assets/uk/buy_with.svg": "ee21017c523db6ed41355a984ac2773d",
"assets/packages/pay_android/assets/uk/order_with.svg": "c30bacc2e3f81b8d15e97df98269d6c8",
"assets/packages/pay_android/assets/uk/add_to.svg": "4fa73cb089fa5227926498f32b701665",
"assets/packages/pay_android/assets/sr/subscribe_with.svg": "62445480dc5ddd0ef26d2a48ffe1d2a2",
"assets/packages/pay_android/assets/sr/checkout_with.svg": "3725fb1399a3b4c8db5a2c372778b289",
"assets/packages/pay_android/assets/sr/donate_with.svg": "12d74be686c4eb1d10fbbd9ada5ab5a3",
"assets/packages/pay_android/assets/sr/pay_with.svg": "5748ab84509f6ce61b57a5f922de078e",
"assets/packages/pay_android/assets/sr/book_with.svg": "1ebf2b71a0938eec49672ce0d3a7e1a9",
"assets/packages/pay_android/assets/sr/buy_with.svg": "f5d8a9607826c3d061ee3a49aa8cc7a8",
"assets/packages/pay_android/assets/sr/order_with.svg": "ff8af34524e7704744bf1b5abbda4b9e",
"assets/packages/pay_android/assets/sr/add_to.svg": "339ac278a3ca72a11035bf600c081655",
"assets/packages/pay_android/assets/ar/subscribe_with.svg": "bbc5ab1254c834e3ad50142802732370",
"assets/packages/pay_android/assets/ar/checkout_with.svg": "2cf67466b34fada10c0ff693438adde8",
"assets/packages/pay_android/assets/ar/donate_with.svg": "2d9a8344409330f310d6e098212f8e86",
"assets/packages/pay_android/assets/ar/pay_with.svg": "9324e9688c2c3563b1aac257c55b332f",
"assets/packages/pay_android/assets/ar/book_with.svg": "9e3a15fa087dfa8ab5c95577a504125f",
"assets/packages/pay_android/assets/ar/buy_with.svg": "9828d8a5a5c5e860a9c0ed6d502ecd9a",
"assets/packages/pay_android/assets/ar/order_with.svg": "014b4acf694733db5560b40e93a8773b",
"assets/packages/pay_android/assets/ar/add_to.svg": "68d78045fe1fffd74fe47f4a29b2a427",
"assets/packages/pay_android/assets/hr/subscribe_with.svg": "ff158be92c02c121f7467c6edcf3cf81",
"assets/packages/pay_android/assets/hr/checkout_with.svg": "e3e05f46435cccc7675b7639a02e051a",
"assets/packages/pay_android/assets/hr/donate_with.svg": "1f3ee9c7f4310da39c6caa910dbfc86e",
"assets/packages/pay_android/assets/hr/pay_with.svg": "2d73f342e8c91370c1128ebc51aa0a16",
"assets/packages/pay_android/assets/hr/book_with.svg": "1654f1c7b29f575fd8746c593b11f2b0",
"assets/packages/pay_android/assets/hr/buy_with.svg": "159492769a625370e20245cae84d2b0f",
"assets/packages/pay_android/assets/hr/order_with.svg": "e8da0122c88bcf2e8976f73e8ad51e53",
"assets/packages/pay_android/assets/hr/add_to.svg": "da2abdcd0e4e56e9430bfeb6734443e1",
"assets/packages/pay_android/assets/nl/subscribe_with.svg": "81960c4729df02d9b4ef626515ae7ecc",
"assets/packages/pay_android/assets/nl/checkout_with.svg": "d8c455f43207bf5264ceb331520516c3",
"assets/packages/pay_android/assets/nl/donate_with.svg": "72b927ee6f58784cfc2b6cea1517b234",
"assets/packages/pay_android/assets/nl/pay_with.svg": "bbd9854482ed17fb476fe6181cebdee0",
"assets/packages/pay_android/assets/nl/book_with.svg": "a7fdc9acb2e5d40386e359cd74bb476e",
"assets/packages/pay_android/assets/nl/buy_with.svg": "c9b427cbce42daacf7f014cfe6c9f4cd",
"assets/packages/pay_android/assets/nl/order_with.svg": "bb0a74363748fb38c212c7d9bb00c393",
"assets/packages/pay_android/assets/nl/add_to.svg": "12b15901165211e6faea8c59bedf46bc",
"assets/packages/pay_android/assets/bg/subscribe_with.svg": "664e314a9401ed1817ee4c0812f72632",
"assets/packages/pay_android/assets/bg/checkout_with.svg": "2b8d63fc4636093ec3c8c7cefcd156af",
"assets/packages/pay_android/assets/bg/donate_with.svg": "c5b2eb3920fedf5dcad83fa4c30c817e",
"assets/packages/pay_android/assets/bg/pay_with.svg": "317d4d5111d4ad4c6702144652db14c2",
"assets/packages/pay_android/assets/bg/book_with.svg": "2a38f23b87e4b55bf498b61026b3dd04",
"assets/packages/pay_android/assets/bg/buy_with.svg": "681850b53f3f1680b33f970c0250a750",
"assets/packages/pay_android/assets/bg/order_with.svg": "b70e82856b7966b21bdf8433d3153f22",
"assets/packages/pay_android/assets/bg/add_to.svg": "17ca05b123a4c3d64ec032a41875ab41",
"assets/packages/pay_android/assets/de/subscribe_with.svg": "17564aaa647332fba304d2d8ef62bb1b",
"assets/packages/pay_android/assets/de/checkout_with.svg": "8d6a7a750f7ba2aa300b90767dd07eb8",
"assets/packages/pay_android/assets/de/donate_with.svg": "4914084db3ff67c67193771f67e55444",
"assets/packages/pay_android/assets/de/pay_with.svg": "b2225cf95901601945b40f99b4f7ff43",
"assets/packages/pay_android/assets/de/book_with.svg": "c50d34aabdf5f8614e0fbae3596d9ac2",
"assets/packages/pay_android/assets/de/buy_with.svg": "f754c418b05447dc0df319af21deffb2",
"assets/packages/pay_android/assets/de/order_with.svg": "d1dc943018db9f27399f1ebd4ca447b8",
"assets/packages/pay_android/assets/de/add_to.svg": "f8a091aa3526391479087368eff94059",
"assets/packages/pay_android/assets/ko/subscribe_with.svg": "c92fbf545a01ff6182d6733097fd056b",
"assets/packages/pay_android/assets/ko/checkout_with.svg": "73219d3fa26f7e1d4fb9c62f2a86a47d",
"assets/packages/pay_android/assets/ko/donate_with.svg": "0ecf99c7cabf3d971092e2d26518d280",
"assets/packages/pay_android/assets/ko/pay_with.svg": "cf54a6042572e4b5232eea80ce93aa06",
"assets/packages/pay_android/assets/ko/book_with.svg": "9cf579fa3892daf5bd1e651e7e8e07b1",
"assets/packages/pay_android/assets/ko/buy_with.svg": "6289d89e0d8a11b933f421ad48dd574f",
"assets/packages/pay_android/assets/ko/order_with.svg": "6c0ceb1ae67bb1a486a1d9bee8b9844d",
"assets/packages/pay_android/assets/ko/add_to.svg": "02994d33528d1b69af6eb866ee39ec76",
"assets/packages/pay_android/assets/fi/subscribe_with.svg": "506797abab6aede6f294170c1466dedd",
"assets/packages/pay_android/assets/fi/checkout_with.svg": "f1053427d6a1ed38c82165da295ae55d",
"assets/packages/pay_android/assets/fi/donate_with.svg": "51ecef133092b7f3ec375fecd6978c9d",
"assets/packages/pay_android/assets/fi/pay_with.svg": "403b06e4c62fa40adab9a6f73b981969",
"assets/packages/pay_android/assets/fi/book_with.svg": "062bc8a8698494962ad6f80be0f72064",
"assets/packages/pay_android/assets/fi/buy_with.svg": "dbffd9f6838c0c7015f56b4ca6e2973d",
"assets/packages/pay_android/assets/fi/order_with.svg": "748d6674d9441d8ac19ccab303ec7abe",
"assets/packages/pay_android/assets/fi/add_to.svg": "27475a2afa900c8c213cee14b031ac45",
"assets/packages/pay_android/assets/id/subscribe_with.svg": "5dc280aac3d0c98f537055f47eed979a",
"assets/packages/pay_android/assets/id/checkout_with.svg": "7f8ae4686a866886f91048d0c15607c5",
"assets/packages/pay_android/assets/id/donate_with.svg": "65ebe635f7ee6e5926153e199fc52e1b",
"assets/packages/pay_android/assets/id/pay_with.svg": "b13a28beee4ab06f6b837ff53d485c3e",
"assets/packages/pay_android/assets/id/book_with.svg": "ad720d063a1c28c182d405aba95e018d",
"assets/packages/pay_android/assets/id/buy_with.svg": "a6ca8e78f15523f0b879b5fd8acc2281",
"assets/packages/pay_android/assets/id/order_with.svg": "1b751923e4feb8694879ebe44bd1c2a1",
"assets/packages/pay_android/assets/id/add_to.svg": "2869480691c5825d68111e6247e4e403",
"assets/packages/pay_android/assets/fr/subscribe_with.svg": "4f27ea754516e1604b956e71a2cfb95a",
"assets/packages/pay_android/assets/fr/checkout_with.svg": "ea2a1cfff17a42cc88911e8cda90f7df",
"assets/packages/pay_android/assets/fr/donate_with.svg": "07900374e3368d6f20546626f70aa82b",
"assets/packages/pay_android/assets/fr/pay_with.svg": "28450f3a76f521389ab858da00ab5b77",
"assets/packages/pay_android/assets/fr/book_with.svg": "43339eec255db0b9717f9db53821c5af",
"assets/packages/pay_android/assets/fr/buy_with.svg": "7c13503ee92f1b65172b25339f5f0e1f",
"assets/packages/pay_android/assets/fr/order_with.svg": "22309a4f9eeb40274d56918e1ed7c23a",
"assets/packages/pay_android/assets/fr/add_to.svg": "bb8e7485548aa8151f77ef0575106c44",
"assets/packages/pay_android/assets/es/subscribe_with.svg": "ca7000156d48017c3bc6ecc8cda2bb97",
"assets/packages/pay_android/assets/es/checkout_with.svg": "1e235642b81d8b6ae92eecd688eac24c",
"assets/packages/pay_android/assets/es/donate_with.svg": "b054132090848644db1dc7078cd9a8c5",
"assets/packages/pay_android/assets/es/pay_with.svg": "9921e330c6a6bfdee41a0f64d9d6998f",
"assets/packages/pay_android/assets/es/book_with.svg": "34db8f394f368a8e03ed0abd7d69fcec",
"assets/packages/pay_android/assets/es/buy_with.svg": "0448cda0cbfd85a1273194152012b774",
"assets/packages/pay_android/assets/es/order_with.svg": "f212e0fafa51de5aaa362e66c476d947",
"assets/packages/pay_android/assets/es/add_to.svg": "5e1355ae1b7659728c9ef75ce493d9e9",
"assets/packages/pay_android/assets/et/subscribe_with.svg": "38898d3970fb21a449381d9a7874877b",
"assets/packages/pay_android/assets/et/checkout_with.svg": "22022a77107fa184c7ed2c70d0258665",
"assets/packages/pay_android/assets/et/donate_with.svg": "761284824f888f7bf5c5d4ca5a38ff95",
"assets/packages/pay_android/assets/et/pay_with.svg": "c770b65139ed858e0101ba234e5e52d0",
"assets/packages/pay_android/assets/et/book_with.svg": "049ed3012d315deadbe05d3eb58772a3",
"assets/packages/pay_android/assets/et/buy_with.svg": "8a9dca34ca0aedaed2a27ca4fca20bf9",
"assets/packages/pay_android/assets/et/order_with.svg": "d4243c1f7258d18b989d0be86c7df8b6",
"assets/packages/pay_android/assets/et/add_to.svg": "b88ca15b4e6722d753840566d441c33e",
"assets/packages/pay_android/assets/en/subscribe_with.svg": "13338a44a4414b97b68c513ab5ef6ffc",
"assets/packages/pay_android/assets/en/checkout_with.svg": "48303924df98f31d6e74b192b659ed2b",
"assets/packages/pay_android/assets/en/donate_with.svg": "ac7e1e899237d80f3de63c037f8b1e3e",
"assets/packages/pay_android/assets/en/pay_with.svg": "9ec84a697747c32353f4d4a47a4f65fe",
"assets/packages/pay_android/assets/en/book_with.svg": "f1d051fd124907c5925f690313642100",
"assets/packages/pay_android/assets/en/buy_with.svg": "746e508afbe124ecee51e6805705d840",
"assets/packages/pay_android/assets/en/order_with.svg": "d61e5e067227ce9a19eecb48c276d0a0",
"assets/packages/pay_android/assets/en/add_to.svg": "c1bc5877a9e2886311b0bbe2a78cb1df",
"assets/packages/pay_android/assets/th/subscribe_with.svg": "d995c84c7369f9617917f8b0dfde18cd",
"assets/packages/pay_android/assets/th/checkout_with.svg": "c0e9836a6073f2b8e8ef0ae790519102",
"assets/packages/pay_android/assets/th/donate_with.svg": "f690e4cfa2407e46c1100794a0379179",
"assets/packages/pay_android/assets/th/pay_with.svg": "9bebf557fd04d41d19d5bd3b11bf329e",
"assets/packages/pay_android/assets/th/book_with.svg": "d1ea78f759c0730765b1566234e03ed5",
"assets/packages/pay_android/assets/th/buy_with.svg": "3837161aed04fdd24818337f4f568464",
"assets/packages/pay_android/assets/th/order_with.svg": "dcc18c36a5c21b3ce4e0dd8dc0b6490c",
"assets/packages/pay_android/assets/th/add_to.svg": "b741a2d0656aaaefc1cf4ea60bcdecf6",
"assets/packages/pay_android/assets/tr/subscribe_with.svg": "9806d0f37dd28211b575219569ec0267",
"assets/packages/pay_android/assets/tr/checkout_with.svg": "a0795172799ae5ef54447e03e2ee0bbd",
"assets/packages/pay_android/assets/tr/donate_with.svg": "c64a19f7861bed2875ea0d0d9947f69d",
"assets/packages/pay_android/assets/tr/pay_with.svg": "740416884081b4de669c677f8176bc60",
"assets/packages/pay_android/assets/tr/book_with.svg": "c5e289ea0a8f031c63fb472254b09138",
"assets/packages/pay_android/assets/tr/buy_with.svg": "3b11a3fbfd947bad5801c806e33974ee",
"assets/packages/pay_android/assets/tr/order_with.svg": "aa94f2a090070d84fee97aa1f56d63ce",
"assets/packages/pay_android/assets/tr/add_to.svg": "c0626c594a4957f17213f34dcc7f9334",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3995aaffa723cb68c70c454f1956b525",
"assets/fonts/MaterialIcons-Regular.otf": "5fb545dfc3dc356c5c0da4f3bfb8831f",
"assets/assets/images/carpet.png": "da7d1ad933bfe2b8b9ab4a7d47dad697",
"assets/assets/images/flag.png": "33a7e0f0f81982d73d35ec65fe3ceef1",
"assets/assets/images/logo_app.png": "ea7da67e56e1254049fcf2ad4ed268aa",
"assets/assets/images/logo_black.png": "794aea0826b74a40adef3aeabafe8eac",
"assets/assets/images/pin.png": "ede13f32cbef520a2508539b7366c68a",
"assets/assets/images/map.png": "796f9e5c456cadeba4ddd565fc3f2edb",
"assets/assets/images/person.png": "795a8829a7b903feb3a4e465b63004d0",
"assets/assets/images/user.png": "b59e769d1686138c8a6be4739c85a115",
"assets/assets/images/colock.png": "c30da7b0084aa4dc2cba088b523dd963",
"assets/assets/images/person2.png": "dfe33e046f5985933364eaa26b475d75",
"assets/assets/images/person-imag.png": "0861d64743c5d65a3b94fa1dbd4ae3b2",
"assets/assets/images/man2.png": "ab134af20764150c974d2dec539f360d",
"assets/assets/images/man.png": "80a54ea8cfeb052d7b1f8ad633dc315d",
"assets/assets/images/splash.png": "0f745867907452a3fa2a1f5d6a92bf15",
"assets/assets/images/splashhattli.png": "9a202b91abea1c0a8053ca07e462cf23",
"assets/assets/images/mylocation.png": "afe45c75f72dcdcaad78e4900d2d468f",
"assets/assets/images/logo_white.png": "bcdac86a60276eb0c6ef6573836e5ab3",
"assets/assets/images/provider.png": "ab453899dbb1184cf9fe22c59b3fa204",
"assets/assets/images/image.png": "adb3aaa9f485b8c67dad1048f9ce5815",
"assets/assets/images/marker.png": "f700ad58312594b064f2be137f689cf3",
"assets/assets/icons/search.svg": "2662189b3c56c8ac3a9ae8f4b8d8abad",
"assets/assets/icons/edit2.svg": "50badb056e2cfcac21be39bf69e683e8",
"assets/assets/icons/marker_black.svg": "bdc97cbb0481aadc9a539337e87daa86",
"assets/assets/icons/cart_menu.svg": "7f4bd05d9008036f23ade03d11865350",
"assets/assets/icons/call2.svg": "69dd1ba070278809b328a0e2abbbabf7",
"assets/assets/icons/translate.svg": "3361134987d6078db47da93b1dac9c1b",
"assets/assets/icons/account.svg": "e5cae2ca150557f352c16f5f2818dec1",
"assets/assets/icons/home.svg": "e0eeba55296e1fb5a305e1b51778af7b",
"assets/assets/icons/logout.svg": "6b2ecc644a3455d2f5ea743378ac50cc",
"assets/assets/icons/alrm.svg": "3338928ee3603c8a50f31cb075c71b2b",
"assets/assets/icons/icon_logo.svg": "ef43869a45b9481eb06d27cd55658e5f",
"assets/assets/icons/locationitem.svg": "aad61075445008ca2a9d5b6ce45e7a11",
"assets/assets/icons/review.svg": "3a1f14a09c6bb591d5bdc9a2966676c1",
"assets/assets/icons/cart_item.svg": "55b72f106b047a24977204c143f28706",
"assets/assets/icons/city.svg": "a07d1b11d4056597ffc979e792b1fa37",
"assets/assets/icons/fillter2.svg": "26ddaeb3205a015f3dcc35640872834c",
"assets/assets/icons/successd.svg": "186ec3754bc5e4da59eea053c2e23829",
"assets/assets/icons/us.svg": "54e02e35564fca45062049b575ccd37a",
"assets/assets/icons/logo_black.svg": "89953f1e828c89aebf32def2bc771a96",
"assets/assets/icons/offer.svg": "c43b686e4630d5dbf0c16cf3817cb2ae",
"assets/assets/icons/chate.svg": "bd8b5206cd3d36f606e764cfc816c60c",
"assets/assets/icons/marker_e.svg": "bf839e55844e88fa8c616f6ac49a67f9",
"assets/assets/icons/logout2.svg": "2382bb46a532b03601fa04f672ac3595",
"assets/assets/icons/upload2.svg": "e073bc383c8ed3bde7a15e4eaa5c5b63",
"assets/assets/icons/call_menu.svg": "628ff439a60e368bb9e375fffdffa2cd",
"assets/assets/icons/fav_menu.svg": "354d0697cdcf2b99609d780de5ab8f9f",
"assets/assets/icons/fillter.svg": "2b7cd37b8bae255d029adb6745e03f1d",
"assets/assets/icons/add.svg": "2766a5e9d7ce61e9c263668040119f20",
"assets/assets/icons/close.svg": "ac2e735cda4319c8cbcb93bad9c1596c",
"assets/assets/icons/orders.svg": "89d9d7a66113de4b7d6e2736f63b1c45",
"assets/assets/icons/map2.svg": "570fa3b2a11b06525b79336bff42d1b7",
"assets/assets/icons/noty.svg": "69d0951a9c23eb295d59bf91dd148254",
"assets/assets/icons/marker.svg": "87a1233be30c16cf3e0409f09a639144",
"assets/assets/icons/back.svg": "78e60280fb444e74544962f21f88f3d9",
"assets/assets/icons/paypal.svg": "ffeeec3da8e51b5880f1e885f1a54e38",
"assets/assets/icons/logo_whit.svg": "986b267533dfb7c3b44c2dd09a0f91ce",
"assets/assets/icons/google.svg": "6508216d44891b29f7302f95b5732914",
"assets/assets/icons/provider.svg": "f6ac80eae6e35f069a93fb5e0cb02701",
"assets/assets/icons/providers.svg": "2599ecb4f9832dfb590531a01b781297",
"assets/assets/icons/star.svg": "76251bb034babd32a0dbd7c3f5fcae2d",
"assets/assets/icons/edit.svg": "9b048eb43da7872395c8cd15053b7c5e",
"assets/assets/icons/cash.svg": "8867bd9034148251e2550e0cc7f2fbe7",
"assets/assets/icons/payment1.png": "91e8aa3f5c5583f2e34523e4b5be4e62",
"assets/assets/icons/home_menu.svg": "16657b9cafa3914d80d5606228429f98",
"assets/assets/icons/walet.svg": "86703763eda16a116d8d97f2ea7cafc8",
"assets/assets/icons/delete.svg": "cb0a8f287b047049104916fa949dc8a7",
"assets/assets/icons/aboute_provider.svg": "55c02727d2f4c2d72b75c9efda553a2e",
"assets/assets/icons/success.svg": "a2edb090352ea474edb1cb2b7eb3036f",
"assets/assets/icons/call.svg": "56b0adf540d8259a3ffa099a61f46447",
"assets/assets/icons/location.svg": "69e78170d5313e0f11b328afefd5013e",
"assets/assets/icons/location_tick.svg": "a07d1b11d4056597ffc979e792b1fa37",
"assets/assets/icons/arrow-left.svg": "79112960ee251e7efa6b3ae78ddd6a44",
"assets/assets/icons/pay1.svg": "bd59eb36a070cb8902be0786d1a4de87",
"assets/assets/icons/upload.svg": "36766f3fc45b793c70f00340eab4391f",
"assets/assets/icons/date.svg": "d1cda606aafaf4e4403cd760b49c4d26",
"assets/assets/icons/account2.svg": "d6edb5d61085d45a5965d9741412f525",
"assets/assets/icons/drop.svg": "511bbb781cbae3084981b0959a423a28",
"assets/assets/icons/menu.svg": "6a9e09530073cabc03b2debc69fefd71",
"assets/assets/icons/menu2.svg": "d75f507a933512fb6a0bf45f4abe14f8",
"assets/assets/icons/graph.svg": "df98ca6c9d538744c19ed42cfe305b13",
"assets/assets/icons/print.svg": "d9c4a199aff981d828a0146a674d1a40",
"assets/assets/i18n/en.json": "6a24612d23a58c5482c54dfa246c1716",
"assets/assets/i18n/ar.json": "c3f63137e5c160acd046c7eaa3a2e2c1",
"assets/assets/fonts/montserrat_medium.ttf": "128c3c68ca7303b88442a347292291fa",
"assets/assets/fonts/montserrat_regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/fonts/cairo_medium.ttf": "4592243cbbb2e907ed45f50ab8dc04f9",
"assets/assets/fonts/montserrat_semibold.ttf": "cbdecee7a45d92a998429b0290bf02b0",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/montserrat_light.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/assets/fonts/tajawal_medium.ttf": "c81990ce0e3f3273528f89d0e3942fcb",
"assets/assets/fonts/cairo-bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/tajawal_bold.ttf": "b7fe4edd2139b0fa72371f56f0ec0b69",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
