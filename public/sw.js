if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/225-a09855f8cba9a2ea2595.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/349-94c560f2263b48cfca0d.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/381-d17b471ace3fea06a753.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/393-ee88990affea9f165f10.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/413-6b4a4c3e2f31676f21e3.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/433-40688ecb787fbd5c96b8.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/434.4e83c2676ad99860d685.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/572-5671df394993e060bd68.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/741-03100fb4cd80a847d1b1.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/743-11bbbd41257bc9312a99.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/758-66c994336fa1dca39f25.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/786.5aee5933e668732a8117.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/809-9465913bd72a802cb399.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/826-a0b4067c0338fcc9de17.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/900-4405a38ca2ec145d3105.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/be0cb90b-5b6539627864015a5cd3.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/ff239f9d-91d03d5858b40aaea13b.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/framework-680cb54f774dea00c640.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/main-8fffe3b70faedfdf9270.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/_app-c5f273869937dd1c957b.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/_error-661ae431af6f6678cd9b.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/add-364da05023cce0e41855.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/chat-fa373d429ed16af87457.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/index-1c6bbaf124df36eeb8c6.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/mynotes-7f91b366e8cdbabc79ea.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/notes-57991dd3ab65b10fb3f0.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/pages/search-d694b28fe229a37d75ba.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/chunks/webpack-e82324d6e61ade0e22c8.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/css/062fdf61986aaff1c5f9.css",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/lS52Qp4lQ95XXsdEeMkxG/_buildManifest.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/_next/static/lS52Qp4lQ95XXsdEeMkxG/_ssgManifest.js",revision:"lS52Qp4lQ95XXsdEeMkxG"},{url:"/favicon.ico",revision:"6e1267d9d946b0236cdf6ffd02890894"},{url:"/icons/android-icon-192x192.png",revision:"baf0897766e4a9bcb142ddc253a70b11"},{url:"/icons/apple-icon-114x114.png",revision:"f8f8d4d052489231aba1020b9bc4b775"},{url:"/icons/apple-icon-120x120.png",revision:"e25dc015b1e3a8d568b27beb354d4104"},{url:"/icons/apple-icon-144x144.png",revision:"96caa8081c0d901629d0c78239d8623d"},{url:"/icons/apple-icon-152x152.png",revision:"cf3622a69857a91931f282d37b06ac48"},{url:"/icons/apple-icon-180x180.png",revision:"03237eec3eb70e63e9a9a7b9a03f6340"},{url:"/icons/apple-icon-57x57.png",revision:"6ea880a473061d12b2b8c6929af948b7"},{url:"/icons/apple-icon-60x60.png",revision:"30e78c2f4593479c5b667f6422fb0ccb"},{url:"/icons/apple-icon-72x72.png",revision:"d8db21d429753bf14c17f673421a1f55"},{url:"/icons/apple-icon-76x76.png",revision:"0075e5d39d1119dbc513734ce3db65b9"},{url:"/icons/favicon-16x16.png",revision:"a7937017f3aff8449634dc6af939d1a0"},{url:"/icons/favicon-32x32.png",revision:"ebfb5fe41c50badb2914331c7223f5ca"},{url:"/icons/favicon-96x96.png",revision:"5bfd383f558fad2cd56c77a785e931a5"},{url:"/images/icons/icon-128x128.png",revision:"75566220d45d07d419b37e28ea0c3235"},{url:"/images/icons/icon-144x144.png",revision:"12f2e552e0440b50615111ea2cb46db0"},{url:"/images/icons/icon-152x152.png",revision:"19fd4e9285ee862fe661b9385232aa11"},{url:"/images/icons/icon-192x192.png",revision:"6e74d90c738c7e9447f93ae66be131f7"},{url:"/images/icons/icon-384x384.png",revision:"4c15cf03da787f0a8f6950561decc159"},{url:"/images/icons/icon-512x512.png",revision:"e108e048966a69a825dc36ce57d19e75"},{url:"/images/icons/icon-72x72.png",revision:"01d0ef51bca8e938eae7cb20902c47e1"},{url:"/images/icons/icon-96x96.png",revision:"c855e7c9f71783baa97b54db215fcd94"},{url:"/manifest.json",revision:"e33dfebd939224a23364443863bc9d5a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));