if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const d=e=>i(e,r),l={module:{uri:r},exports:s,require:d};t[r]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(o(...e),s)))}}define(["./workbox-f78b6354"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"ba102b60.js",revision:"a64e731b688678eab16ca3a917de7ba0"},{url:"index.html",revision:"7143f61072ed85137a41e23fc79d5e43"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("dist/index.html")))}));
//# sourceMappingURL=sw.js.map
