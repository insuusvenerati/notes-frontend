if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise((async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},c=(c,s)=>{Promise.all(c.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(c)};self.define=(c,n,i)=>{s[c]||(s[c]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+c.slice(1)};return Promise.all(n.map((c=>{switch(c){case"exports":return s;case"module":return a;default:return e(c)}}))).then((e=>{const c=i(...e);return s.default||(s.default=c),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/c5W8eKb3okrKmJPbhjcL0/_buildManifest.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/c5W8eKb3okrKmJPbhjcL0/_ssgManifest.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/225-a09855f8cba9a2ea2595.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/279-6279437a8339f8ac49a4.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/288-d633f5b52949684fd305.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/344-a69db41ef98ff567ef32.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/349-d6750da562faeb5cc04d.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/382-91e880cf37a3f15589ae.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/393-ee88990affea9f165f10.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/433-9ac0b85d4cab51eba77f.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/434.4e83c2676ad99860d685.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/741-03100fb4cd80a847d1b1.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/833-316a696fa884ffd601e9.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/925-b7cdf854ba84a3d3bc15.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/be0cb90b-5b6539627864015a5cd3.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/ff239f9d-91d03d5858b40aaea13b.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/framework-680cb54f774dea00c640.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/main-36bbdf33ccc305651763.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/_app-cdb675db1a0a1f719d0d.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/_error-661ae431af6f6678cd9b.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/add-d02f87ae64929fd637ff.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/chat-d761cba9aa4756e65902.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/index-1c6bbaf124df36eeb8c6.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/mynotes-47d6d639ef7f0cee79c4.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/notes-d803c611274e2af03eaa.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/pages/search-94ef9d8d3f985ae4b8cc.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/chunks/webpack-40317ab1724856ef8ad2.js",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/_next/static/css/062fdf61986aaff1c5f9.css",revision:"c5W8eKb3okrKmJPbhjcL0"},{url:"/favicon.ico",revision:"6e1267d9d946b0236cdf6ffd02890894"},{url:"/icons/android-icon-192x192.png",revision:"baf0897766e4a9bcb142ddc253a70b11"},{url:"/icons/apple-icon-114x114.png",revision:"f8f8d4d052489231aba1020b9bc4b775"},{url:"/icons/apple-icon-120x120.png",revision:"e25dc015b1e3a8d568b27beb354d4104"},{url:"/icons/apple-icon-144x144.png",revision:"96caa8081c0d901629d0c78239d8623d"},{url:"/icons/apple-icon-152x152.png",revision:"cf3622a69857a91931f282d37b06ac48"},{url:"/icons/apple-icon-180x180.png",revision:"03237eec3eb70e63e9a9a7b9a03f6340"},{url:"/icons/apple-icon-57x57.png",revision:"6ea880a473061d12b2b8c6929af948b7"},{url:"/icons/apple-icon-60x60.png",revision:"30e78c2f4593479c5b667f6422fb0ccb"},{url:"/icons/apple-icon-72x72.png",revision:"d8db21d429753bf14c17f673421a1f55"},{url:"/icons/apple-icon-76x76.png",revision:"0075e5d39d1119dbc513734ce3db65b9"},{url:"/icons/favicon-16x16.png",revision:"a7937017f3aff8449634dc6af939d1a0"},{url:"/icons/favicon-32x32.png",revision:"ebfb5fe41c50badb2914331c7223f5ca"},{url:"/icons/favicon-96x96.png",revision:"5bfd383f558fad2cd56c77a785e931a5"},{url:"/images/icons/icon-128x128.png",revision:"75566220d45d07d419b37e28ea0c3235"},{url:"/images/icons/icon-144x144.png",revision:"12f2e552e0440b50615111ea2cb46db0"},{url:"/images/icons/icon-152x152.png",revision:"19fd4e9285ee862fe661b9385232aa11"},{url:"/images/icons/icon-192x192.png",revision:"6e74d90c738c7e9447f93ae66be131f7"},{url:"/images/icons/icon-384x384.png",revision:"4c15cf03da787f0a8f6950561decc159"},{url:"/images/icons/icon-512x512.png",revision:"e108e048966a69a825dc36ce57d19e75"},{url:"/images/icons/icon-72x72.png",revision:"01d0ef51bca8e938eae7cb20902c47e1"},{url:"/images/icons/icon-96x96.png",revision:"c855e7c9f71783baa97b54db215fcd94"},{url:"/manifest.json",revision:"e33dfebd939224a23364443863bc9d5a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:s,state:n})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
