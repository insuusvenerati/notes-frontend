if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-adbd2882"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/K5kqH-jHVJzwPHfDPONy7/_buildManifest.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/K5kqH-jHVJzwPHfDPONy7/_middlewareManifest.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/K5kqH-jHVJzwPHfDPONy7/_ssgManifest.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/363.4a3bfd6e2525969f.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/381-f04385a614870f4d.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/739-54fa02b0839ee1e1.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/framework-43ee36d3d663bd65.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/main-1e5f82b71b341929.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/pages/_app-12806c7136f8abfa.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/pages/_error-b4f7cbdbc4d88f9a.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/pages/add-cb76daf3094978d6.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/pages/index-ec3237add3d532b0.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/pages/mynotes-98a0ce1ff7fa4456.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/pages/notes-4546dcd85840e417.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/pages/search-28fee7f423935afe.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/chunks/webpack-97d43c937c1686b0.js",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/_next/static/css/313e8d4107cd9dac.css",revision:"K5kqH-jHVJzwPHfDPONy7"},{url:"/favicon.ico",revision:"6e1267d9d946b0236cdf6ffd02890894"},{url:"/icons/android-icon-192x192.png",revision:"baf0897766e4a9bcb142ddc253a70b11"},{url:"/icons/apple-icon-114x114.png",revision:"f8f8d4d052489231aba1020b9bc4b775"},{url:"/icons/apple-icon-120x120.png",revision:"e25dc015b1e3a8d568b27beb354d4104"},{url:"/icons/apple-icon-144x144.png",revision:"96caa8081c0d901629d0c78239d8623d"},{url:"/icons/apple-icon-152x152.png",revision:"cf3622a69857a91931f282d37b06ac48"},{url:"/icons/apple-icon-180x180.png",revision:"03237eec3eb70e63e9a9a7b9a03f6340"},{url:"/icons/apple-icon-57x57.png",revision:"6ea880a473061d12b2b8c6929af948b7"},{url:"/icons/apple-icon-60x60.png",revision:"30e78c2f4593479c5b667f6422fb0ccb"},{url:"/icons/apple-icon-72x72.png",revision:"d8db21d429753bf14c17f673421a1f55"},{url:"/icons/apple-icon-76x76.png",revision:"0075e5d39d1119dbc513734ce3db65b9"},{url:"/icons/favicon-16x16.png",revision:"a7937017f3aff8449634dc6af939d1a0"},{url:"/icons/favicon-32x32.png",revision:"ebfb5fe41c50badb2914331c7223f5ca"},{url:"/icons/favicon-96x96.png",revision:"5bfd383f558fad2cd56c77a785e931a5"},{url:"/images/icons/icon-128x128.png",revision:"75566220d45d07d419b37e28ea0c3235"},{url:"/images/icons/icon-144x144.png",revision:"12f2e552e0440b50615111ea2cb46db0"},{url:"/images/icons/icon-152x152.png",revision:"19fd4e9285ee862fe661b9385232aa11"},{url:"/images/icons/icon-192x192.png",revision:"6e74d90c738c7e9447f93ae66be131f7"},{url:"/images/icons/icon-384x384.png",revision:"4c15cf03da787f0a8f6950561decc159"},{url:"/images/icons/icon-512x512.png",revision:"e108e048966a69a825dc36ce57d19e75"},{url:"/images/icons/icon-72x72.png",revision:"01d0ef51bca8e938eae7cb20902c47e1"},{url:"/images/icons/icon-96x96.png",revision:"c855e7c9f71783baa97b54db215fcd94"},{url:"/manifest.json",revision:"e33dfebd939224a23364443863bc9d5a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
