if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const c=e=>i(e,r),d={module:{uri:r},exports:s,require:c};t[r]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(o(...e),s)))}}define(["./workbox-f78b6354"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"90236919.js",revision:"b079c1082964df4b9e0e451b5efbea5d"},{url:"index.html",revision:"785b898f9425ca7fb3b4e5928acdb5b6"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("dist/index.html")))}));
//# sourceMappingURL=sw.js.map
