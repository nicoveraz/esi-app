/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class i{constructor(e,t,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=s.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,o,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1]),e[0]);return new i(s,e,o)},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,o))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",h=l.reactiveElementPolyfillSupport,u={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},p=(e,t)=>t!==e&&(t==t||e==e),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},_="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const s=this._$Ep(o,t);void 0!==s&&(this._$Ev.set(s,o),e.push(s))})),e}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,o,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const s=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,s)=>{t?o.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=e.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,o.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=m){var s;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==(null===(s=o.converter)||void 0===s?void 0:s.toAttribute)?o.converter:u).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(e,t){var o;const s=this.constructor,i=s._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=s.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:u;this._$El=i,this[i]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let s=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;f[_]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.2");const g=window,b=g.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,A=`<${C}>`,E=document,I=()=>E.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,S=Array.isArray,T="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,z=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,M=/"/g,D=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),R=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),B=new WeakMap,$=E.createTreeWalker(E,129,null,!1);function H(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(t):t}const U=(e,t)=>{const o=e.length-1,s=[];let i,r=2===t?"<svg>":"",n=k;for(let t=0;t<o;t++){const o=e[t];let a,l,d=-1,c=0;for(;c<o.length&&(n.lastIndex=c,l=n.exec(o),null!==l);)c=n.lastIndex,n===k?"!--"===l[1]?n=O:void 0!==l[1]?n=N:void 0!==l[2]?(D.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=null!=i?i:k,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?M:L):n===M||n===L?n=z:n===O||n===N?n=k:(n=z,i=void 0);const h=n===z&&e[t+1].startsWith("/>")?" ":"";r+=n===k?o+A:d>=0?(s.push(a),o.slice(0,d)+x+o.slice(d)+w+h):o+w+(-2===d?(s.push(void 0),t):h)}return[H(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),s]};class q{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let i=0,r=0;const n=e.length-1,a=this.parts,[l,d]=U(e,t);if(this.el=q.createElement(l,o),$.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=$.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith(x)||t.startsWith(w)){const o=d[r++];if(e.push(t),void 0!==o){const e=s.getAttribute(o.toLowerCase()+x).split(w),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Z:"@"===t[1]?X:G})}else a.push({type:6,index:i})}for(const t of e)s.removeAttribute(t)}if(D.test(s.tagName)){const e=s.textContent.split(w),t=e.length-1;if(t>0){s.textContent=b?b.emptyScript:"";for(let o=0;o<t;o++)s.append(e[o],I()),$.nextNode(),a.push({type:2,index:++i});s.append(e[t],I())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=s.data.indexOf(w,e+1));)a.push({type:7,index:i}),e+=w.length-1}i++}}static createElement(e,t){const o=E.createElement("template");return o.innerHTML=e,o}}function j(e,t,o=e,s){var i,r,n,a;if(t===R)return t;let l=void 0!==s?null===(i=o._$Co)||void 0===i?void 0:i[s]:o._$Cl;const d=P(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,o,s)),void 0!==s?(null!==(n=(a=o)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:o._$Cl=l),void 0!==l&&(t=j(e,l._$AS(e,t.values),l,s)),t}class W{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:s}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(o,!0);$.currentNode=i;let r=$.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new Y(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new Q(r,this,e)),this._$AV.push(t),l=s[++a]}n!==(null==l?void 0:l.index)&&(r=$.nextNode(),n++)}return $.currentNode=E,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Y{constructor(e,t,o,s){var i;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cp=null===(i=null==s?void 0:s.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),P(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>S(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=q.createElement(H(s.h,s.h[0]),this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new W(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new q(e)),t}T(e){S(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const i of e)s===t.length?t.push(o=new Y(this.k(I()),this.k(I()),this,this.options)):o=t[s],o._$AI(i),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class G{constructor(e,t,o,s,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,s){const i=this.strings;let r=!1;if(void 0===i)e=j(this,e,t,0),r=!P(e)||e!==this._$AH&&e!==R,r&&(this._$AH=e);else{const s=e;let n,a;for(e=i[0],n=0;n<i.length-1;n++)a=j(this,s[o+n],t,n),a===R&&(a=this._$AH[n]),r||(r=!P(a)||a!==this._$AH[n]),a===F?e=F:e!==F&&(e+=(null!=a?a:"")+i[n+1]),this._$AH[n]=a}r&&!s&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}const J=b?b.emptyScript:"";class Z extends G{constructor(){super(...arguments),this.type=4}j(e){e&&e!==F?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class X extends G{constructor(e,t,o,s,i){super(e,t,o,s,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=j(this,e,t,0))&&void 0!==o?o:F)===R)return;const s=this._$AH,i=e===F&&s!==F||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class Q{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}const ee=g.litHtmlPolyfillSupport;null==ee||ee(q,Y),(null!==(v=g.litHtmlVersions)&&void 0!==v?v:g.litHtmlVersions=[]).push("2.7.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var te,oe;class se extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var s,i;const r=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:t;let n=r._$litPart$;if(void 0===n){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=n=new Y(t.insertBefore(I(),e),e,void 0,null!=o?o:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return R}}se.finalized=!0,se._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:se});const ie=globalThis.litElementPolyfillSupport;
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function re(e){const t=customElements.get(e.is);if(t){const o=t.version;o&&e.version&&o===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}else customElements.define(e.is,e)}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */null==ie||ie({LitElement:se}),(null!==(oe=globalThis.litElementVersions)&&void 0!==oe?oe:globalThis.litElementVersions=[]).push("3.3.2");class ne extends HTMLElement{static get is(){return"vaadin-lumo-styles"}static get version(){return"24.2.3"}}re(ne);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const ae=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"theme"===e&&this._set_theme(o)}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,le=[];function de(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function ce(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():le}function he(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function ue(e){const t=[];return e.include&&[].concat(e.include).forEach((e=>{const o=ce().find((t=>t.moduleId===e));o?t.push(...ue(o),...o.styles):console.warn(`Included moduleId ${e} not found in style registry`)}),e.styles),t}function pe(e){const t=`${e}-default-theme`,o=ce().filter((o=>o.moduleId!==t&&function(e,t){return(e||"").split(" ").some((e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t)))}(o.themeFor,e))).map((e=>({...e,styles:[...ue(e),...e.styles],includePriority:he(e.moduleId)}))).sort(((e,t)=>t.includePriority-e.includePriority));return o.length>0?o:ce().filter((e=>e.moduleId===t))}const me=e=>class extends(ae(e)){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;e&&!de(this)&&function(e,t){const o=document.createElement("style");o.innerHTML=e.map((e=>e.cssText)).join("\n"),t.content.appendChild(o)}(this.getStylesForThis(),e)}static finalizeStyles(e){const t=this.getStylesForThis();return e?[...super.finalizeStyles(e),...t]:t}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),t=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...pe(this.is)];const o=this.__themes.flatMap((e=>e.styles));return o.filter(((e,t)=>t===o.lastIndexOf(e)))}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;((e,...t)=>{((e,...t)=>{const o=document.createElement("style");o.id=e,o.textContent=t.map((e=>e.toString())).join("\n").replace(":host","html"),document.head.insertAdjacentElement("afterbegin",o)})(`lumo-${e}`,t)})("spacing-props",r`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`),function(e,t,o={}){var s;e&&(s=e,de(customElements.get(s))&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),t=function(e=[]){return[e].flat(1/0).filter((e=>e instanceof i||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,o):le.push({themeFor:e,styles:t,include:o.include,moduleId:o.moduleId})}("vaadin-form-layout",r`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"}),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let _e,fe,ve=/(url\()([^)]*)(\))/g,ge=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function be(e,t){if(e&&ge.test(e))return e;if("//"===e)return e;if(void 0===_e){_e=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",_e="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),_e)try{return new URL(e,t).href}catch(t){return e}return fe||(fe=document.implementation.createHTMLDocument("temp"),fe.base=fe.createElement("base"),fe.head.appendChild(fe.base),fe.anchor=fe.createElement("a"),fe.body.appendChild(fe.anchor)),fe.base.href=t,fe.anchor.href=e,fe.anchor.href||e}function ye(e,t){return e.replace(ve,(function(e,o,s,i){return o+"'"+be(s.replace(/["']/g,""),t)+"'"+i}))}function xe(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const we=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Ce=we&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let Ae=window.Polymer&&window.Polymer.rootPath||xe(document.baseURI||window.location.href),Ee=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Ie=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Pe=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Se=window.Polymer&&window.Polymer.legacyOptimizations||!1,Te=window.Polymer&&window.Polymer.legacyWarnings||!1,ke=window.Polymer&&window.Polymer.syncInitialRender||!1,Oe=window.Polymer&&window.Polymer.legacyUndefined||!1,Ne=window.Polymer&&window.Polymer.orderedComputed||!1,ze=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Le=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Me=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,De=0;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ve=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let o=De++;return function(s){let i=s.__mixinSet;if(i&&i[o])return s;let r=t,n=r.get(s);if(!n){n=e(s),r.set(s,n);let t=Object.create(n.__mixinSet||i||null);t[o]=!0,n.__mixinSet=t}return n}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Re={},Fe={};function Be(e,t){Re[e]=Fe[e.toLowerCase()]=t}function $e(e){return Re[e]||Fe[e.toLowerCase()]}class He extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let o=$e(e);return o&&t?o.querySelector(t):o}return null}attributeChangedCallback(e,t,o,s){t!==o&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=be(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=xe(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Ie&&void 0!==$e(e))throw Be(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Be(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}He.prototype.modules=Re,customElements.define("dom-module",He);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ue="link[rel=import][type~=css]",qe="include",je="shady-unscoped";function We(e){return He.import(e)}function Ye(e){const t=ye((e.body?e.body:e).textContent,e.baseURI),o=document.createElement("style");return o.textContent=t,o}function Ge(e){const t=e.trim().split(/\s+/),o=[];for(let e=0;e<t.length;e++)o.push(...Ke(t[e]));return o}function Ke(e){const t=We(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...Ze(t));const o=t.querySelector("template");o&&e.push(...Je(o,t.assetpath)),t._styles=e}return t._styles}function Je(e,t){if(!e._styles){const o=[],s=e.content.querySelectorAll("style");for(let e=0;e<s.length;e++){let i=s[e],r=i.getAttribute(qe);r&&o.push(...Ge(r).filter((function(e,t,o){return o.indexOf(e)===t}))),t&&(i.textContent=ye(i.textContent,t)),o.push(i)}e._styles=o}return e._styles}function Ze(e){const t=[],o=e.querySelectorAll(Ue);for(let e=0;e<o.length;e++){let s=o[e];if(s.import){const e=s.import,o=s.hasAttribute(je);if(o&&!e._unscopedStyle){const t=Ye(e);t.setAttribute(je,""),e._unscopedStyle=t}else e._style||(e._style=Ye(e));t.push(o?e._unscopedStyle:e._style)}}return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function Qe(e){return e.indexOf(".")>=0}function et(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function tt(e,t){return 0===t.indexOf(e+".")}function ot(e,t,o){return t+o.slice(e.length)}function st(e){if(Array.isArray(e)){let t=[];for(let o=0;o<e.length;o++){let s=e[o].toString().split(".");for(let e=0;e<s.length;e++)t.push(s[e])}return t.join(".")}return e}function it(e){return Array.isArray(e)?st(e).split("."):e.toString().split(".")}function rt(e,t,o){let s=e,i=it(t);for(let e=0;e<i.length;e++){if(!s)return;s=s[i[e]]}return o&&(o.path=i.join(".")),s}function nt(e,t,o){let s=e,i=it(t),r=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){if(s=s[i[e]],!s)return}s[r]=o}else s[t]=o;return i.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const at={},lt=/-[a-z]/g,dt=/([A-Z])/g;function ct(e){return at[e]||(at[e]=e.indexOf("-")<0?e:e.replace(lt,(e=>e[1].toUpperCase())))}function ht(e){return at[e]||(at[e]=e.replace(dt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ut=0,pt=0,mt=[],_t=0,ft=!1,vt=document.createTextNode("");new window.MutationObserver((function(){ft=!1;const e=mt.length;for(let t=0;t<e;t++){let e=mt[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}mt.splice(0,e),pt+=e})).observe(vt,{characterData:!0});const gt={run:e=>(ft||(ft=!0,vt.textContent=_t++),mt.push(e),ut++),cancel(e){const t=e-pt;if(t>=0){if(!mt[t])throw new Error("invalid async handle: "+e);mt[t]=null}}},bt=gt,yt=Ve((e=>class extends e{static createProperties(e){const t=this.prototype;for(let o in e)o in t||t._createPropertyAccessor(o)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,o){let s=this.__data[e],i=this._shouldPropertyChange(e,t,s);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=s),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,bt.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(e,t,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,o)),this.__dataCounter--}_shouldPropertiesChange(e,t,o){return Boolean(t)}_propertiesChanged(e,t,o){}_shouldPropertyChange(e,t,o){return o!==t&&(o==o||t==t)}attributeChangedCallback(e,t,o,s){t!==o&&this._attributeToProperty(e,o),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,o,s)}_attributeToProperty(e,t,o){if(!this.__serializing){const s=this.__dataAttributes,i=s&&s[e]||e;this[i]=this._deserializeValue(t,o||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,o){this.__serializing=!0,o=arguments.length<3?this[e]:o,this._valueToNodeAttribute(this,o,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,o){const s=this._serializeValue(t);"class"!==o&&"name"!==o&&"slot"!==o||(e=Xe(e)),void 0===s?e.removeAttribute(o):e.setAttribute(o,""===s&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),xt={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let wt=HTMLElement.prototype;for(;wt;){let e=Object.getOwnPropertyNames(wt);for(let t=0;t<e.length;t++)xt[e[t]]=!0;wt=Object.getPrototypeOf(wt)}const Ct=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;const At=Ve((e=>{const t=yt(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ct(e[t]))}static attributeNameForProperty(e){return ht(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const o=this;o.hasAttribute(e)||this._valueToNodeAttribute(o,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e){if(Ct(e))return e;try{return JSON.stringify(e)}catch(e){return""}}}return super._serializeValue(e)}_deserializeValue(e,t){let o;switch(t){case Object:try{o=JSON.parse(e)}catch(t){o=e}break;case Array:try{o=JSON.parse(e)}catch(t){o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:o=isNaN(e)?String(e):Number(e),o=new Date(o);break;default:o=super._deserializeValue(e,t)}return o}_definePropertyAccessor(e,t){!function(e,t){if(!xt[t]){let o=e[t];void 0!==o&&(e.__data?e._setPendingProperty(t,o):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=o))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Et={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let It=!1,Pt=!1;function St(e){(function(){if(!It){It=!0;const e=document.createElement("textarea");e.placeholder="a",Pt=e.placeholder===e.textContent}return Pt})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Tt=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(t,o,s)=>{const i=o.getAttribute(s);e&&s.startsWith("on-")?t.setAttribute(s,e.createScript(i,s)):t.setAttribute(s,i)}})();function kt(e){let t=e.getAttribute("is");if(t&&Et[t]){let o=e;for(o.removeAttribute("is"),e=o.ownerDocument.createElement(t),o.parentNode.replaceChild(e,o),e.appendChild(o);o.attributes.length;){const{name:t}=o.attributes[0];Tt(e,o,t),o.removeAttribute(t)}}return e}function Ot(e,t){let o=t.parentInfo&&Ot(e,t.parentInfo);if(!o)return e;for(let e=o.firstChild,s=0;e;e=e.nextSibling)if(t.parentIndex===s++)return e}function Nt(e,t,o,s){s.id&&(t[s.id]=o)}function zt(e,t,o){if(o.events&&o.events.length)for(let s,i=0,r=o.events;i<r.length&&(s=r[i]);i++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function Lt(e,t,o,s){o.templateInfo&&(t._templateInfo=o.templateInfo,t._parentTemplateInfo=s)}const Mt=Ve((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let o=e._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=Boolean(t),o.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,o,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,o){return this._parseTemplateNode(e.content,t,o)}static _parseTemplateNode(e,t,o){let s=!1,i=e;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(t.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(i,t,o)||s,St(i),i.firstChild&&this._parseTemplateChildNodes(i,t,o),i.hasAttributes&&i.hasAttributes()&&(s=this._parseTemplateNodeAttributes(i,t,o)||s),s||o.noted}static _parseTemplateChildNodes(e,t,o){if("script"!==e.localName&&"style"!==e.localName)for(let s,i=e.firstChild,r=0;i;i=s){if("template"==i.localName&&(i=kt(i)),s=i.nextSibling,i.nodeType===Node.TEXT_NODE){let o=s;for(;o&&o.nodeType===Node.TEXT_NODE;)i.textContent+=o.textContent,s=o.nextSibling,e.removeChild(o),o=s;if(t.stripWhiteSpace&&!i.textContent.trim()){e.removeChild(i);continue}}let n={parentIndex:r,parentInfo:o};this._parseTemplateNode(i,t,n)&&(n.infoIndex=t.nodeInfoList.push(n)-1),i.parentNode&&r++}}static _parseTemplateNestedTemplate(e,t,o){let s=e,i=this._parseTemplate(s,t);return(i.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),o.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,o){let s=!1,i=Array.from(e.attributes);for(let r,n=i.length-1;r=i[n];n--)s=this._parseTemplateNodeAttribute(e,t,o,r.name,r.value)||s;return s}static _parseTemplateNodeAttribute(e,t,o,s,i){return"on-"===s.slice(0,3)?(e.removeAttribute(s),o.events=o.events||[],o.events.push({name:s.slice(3),value:i}),!0):"id"===s&&(o.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let o=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,s=t.content||e.content,i=document.importNode(s,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let r=i.nodeList=new Array(o.length);i.$={};for(let e,s=0,n=o.length;s<n&&(e=o[s]);s++){let o=r[s]=Ot(i,e);Nt(0,i.$,o,e),Lt(0,o,e,t),zt(this,o,e)}return i}_addMethodEventListenerToNode(e,t,o,s){let i=function(e,t,o){return e=e._methodHost||e,function(t){e[o]?e[o](t,t.detail):console.warn("listener method `"+o+"` not defined")}}(s=s||e,0,o);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,o){e.addEventListener(t,o)}_removeEventListenerFromNode(e,t,o){e.removeEventListener(t,o)}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Dt=0;const Vt=[],Rt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ft="__computeInfo",Bt=/[A-Z]/;function $t(e,t,o){let s=e[t];if(s){if(!e.hasOwnProperty(t)&&(s=e[t]=Object.create(e[t]),o))for(let e in s){let t=s[e],o=s[e]=Array(t.length);for(let e=0;e<t.length;e++)o[e]=t[e]}}else s=e[t]={};return s}function Ht(e,t,o,s,i,r){if(t){let n=!1;const a=Dt++;for(let l in o){let d=t[i?et(l):l];if(d)for(let t,c=0,h=d.length;c<h&&(t=d[c]);c++)t.info&&t.info.lastRun===a||i&&!qt(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,o,s,t.info,i,r),n=!0)}return n}return!1}function Ut(e,t,o,s,i,r,n,a){let l=!1,d=t[n?et(s):s];if(d)for(let t,c=0,h=d.length;c<h&&(t=d[c]);c++)t.info&&t.info.lastRun===o||n&&!qt(s,t.trigger)||(t.info&&(t.info.lastRun=o),t.fn(e,s,i,r,t.info,n,a),l=!0);return l}function qt(e,t){if(t){let o=t.name;return o==e||!(!t.structured||!function(e,t){return 0===e.indexOf(t+".")}(o,e))||!(!t.wildcard||!tt(o,e))}return!0}function jt(e,t,o,s,i){let r="string"==typeof i.method?e[i.method]:i.method,n=i.property;r?r.call(e,e.__data[n],s[n]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Wt(e,t,o){let s=et(t);if(s!==t){return Yt(e,ht(s)+"-changed",o[t],t),!0}return!1}function Yt(e,t,o,s){let i={value:o,queueProperty:!0};s&&(i.path=s),Xe(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Gt(e,t,o,s,i,r){let n=(r?et(t):t)!=t?t:null,a=n?rt(e,n):e.__data[t];n&&void 0===a&&(a=o[t]),Yt(e,i.eventName,a,n)}function Kt(e,t,o,s,i){let r=e.__data[t];Ee&&(r=Ee(r,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,r)}function Jt(e,t,o,s){let i=e[Rt.COMPUTE];if(i)if(Ne){Dt++;const r=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const o=e[Rt.COMPUTE];let s,{counts:i,ready:r,total:n}=function(e){const t=e[Ft],o={},s=e[Rt.COMPUTE],i=[];let r=0;for(let e in t){const s=t[e];r+=o[e]=s.args.filter((e=>!e.literal)).length+(s.dynamicFn?1:0)}for(let e in s)t[e]||i.push(e);return{counts:o,ready:i,total:r}}(e);for(;s=r.shift();){t.set(s,t.size);const e=o[s];e&&e.forEach((e=>{const t=e.info.methodInfo;--n,0==--i[t]&&r.push(t)}))}if(0!==n){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),n=[];for(let e in t)Xt(e,i,n,r,s);let a;for(;a=n.shift();)Qt(e,"",t,o,a)&&Xt(a.methodInfo,i,n,r,s);Object.assign(o,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Ht(e,i,r,o,s);)Object.assign(o,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const Zt=(e,t,o)=>{let s=0,i=t.length-1,r=-1;for(;s<=i;){const n=s+i>>1,a=o.get(t[n].methodInfo)-o.get(e.methodInfo);if(a<0)s=n+1;else{if(!(a>0)){r=n;break}i=n-1}}r<0&&(r=i+1),t.splice(r,0,e)},Xt=(e,t,o,s,i)=>{const r=t[i?et(e):e];if(r)for(let t=0;t<r.length;t++){const n=r[t];n.info.lastRun===Dt||i&&!qt(e,n.trigger)||(n.info.lastRun=Dt,Zt(n.info,o,s))}};function Qt(e,t,o,s,i){let r=no(e,t,o,s,i);if(r===Vt)return!1;let n=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[n]?e._setPendingProperty(n,r,!0):(e[n]=r,!1)}function eo(e,t,o,s,i,r,n){o.bindings=o.bindings||[];let a={kind:s,target:i,parts:r,literal:n,isCompound:1!==r.length};if(o.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||ht(i)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let o=0;o<a.parts.length;o++){let s=a.parts[o];s.compoundIndex=o,to(e,t,a,s,l)}}function to(e,t,o,s,i){if(!s.literal)if("attribute"===o.kind&&"-"===o.target[0])console.warn("Cannot set attribute "+o.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,n={index:i,binding:o,part:s,evaluator:e};for(let o=0;o<r.length;o++){let s=r[o];"string"==typeof s&&(s=mo(s),s.wildcard=!0),e._addTemplatePropertyEffect(t,s.rootProperty,{fn:oo,info:n,trigger:s})}}}function oo(e,t,o,s,i,r,n){let a=n[i.index],l=i.binding,d=i.part;if(r&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let s=o[t];t=ot(d.source,l.target,t),a._setPendingPropertyOrPath(t,s,!1,!0)&&e._enqueueClient(a)}else{let n=i.evaluator._evaluateBinding(e,d,t,o,s,r);n!==Vt&&function(e,t,o,s,i){i=function(e,t,o,s){if(o.isCompound){let i=e.__dataCompoundStorage[o.target];i[s.compoundIndex]=t,t=i.join("")}"attribute"!==o.kind&&("textContent"!==o.target&&("value"!==o.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,i,o,s),Ee&&(i=Ee(i,o.target,o.kind,t));if("attribute"==o.kind)e._valueToNodeAttribute(t,i,o.target);else{let s=o.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?t[Rt.READ_ONLY]&&t[Rt.READ_ONLY][s]||t._setPendingProperty(s,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,i)}}(e,a,l,d,n)}}function so(e,t){if(t.isCompound){let o=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,i=new Array(s.length);for(let e=0;e<s.length;e++)i[e]=s[e].literal;let r=t.target;o[r]=i,t.literal&&"property"==t.kind&&("className"===r&&(e=Xe(e)),e[r]=t.literal)}}function io(e,t,o){if(o.listenerEvent){let s=o.parts[0];e.addEventListener(o.listenerEvent,(function(e){!function(e,t,o,s,i){let r,n=e.detail,a=n&&n.path;a?(s=ot(o,s,a),r=n&&n.value):r=e.currentTarget[o],r=i?!r:r,t[Rt.READ_ONLY]&&t[Rt.READ_ONLY][s]||!t._setPendingPropertyOrPath(s,r,!0,Boolean(a))||n&&n.queueProperty||t._invalidateProperties()}(e,t,o.target,s.source,s.negate)}))}}function ro(e,t,o,s,i,r){r=t.static||r&&("object"!=typeof r||r[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:r};for(let i,r=0;r<t.args.length&&(i=t.args[r]);r++)i.literal||e._addPropertyEffect(i.rootProperty,o,{fn:s,info:n,trigger:i});return r&&e._addPropertyEffect(t.methodName,o,{fn:s,info:n}),n}function no(e,t,o,s,i){let r=e._methodHost||e,n=r[i.methodName];if(n){let s=e._marshalArgs(i.args,t,o);return s===Vt?Vt:n.apply(r,s)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const ao=[],lo="(?:[a-zA-Z_$][\\w.:$\\-*]*)",co="(?:("+lo+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",ho=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+lo+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+co+"(?:,\\s*"+co+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function uo(e){let t="";for(let o=0;o<e.length;o++){t+=e[o].literal||""}return t}function po(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ao};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let o=mo(e);return o.literal||(t.static=!1),o}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function mo(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),o={name:t,value:"",literal:!1},s=t[0];switch("-"===s&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':o.value=t.slice(1,-1),o.literal=!0;break;case"#":o.value=Number(t),o.literal=!0}return o.literal||(o.rootProperty=et(t),o.structured=Qe(t),o.structured&&(o.wildcard=".*"==t.slice(-2),o.wildcard&&(o.name=t.slice(0,-2)))),o}function _o(e,t,o){let s=rt(e,o);return void 0===s&&(s=t[o]),s}function fo(e,t,o,s){const i={indexSplices:s};Oe&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(o+".splices",i),e.notifyPath(o+".length",t.length),Oe&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function vo(e,t,o,s,i,r){fo(e,t,o,[{index:s,addedCount:i,removed:r,object:t,type:"splice"}])}const go=Ve((e=>{const t=Mt(At(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Rt}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(bo.length){let e=bo[bo.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Rt.READ_ONLY];for(let o in e)t&&t[o]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=e[o])}_addPropertyEffect(e,t,o){this._createPropertyAccessor(e,t==Rt.READ_ONLY);let s=$t(this,t,!0)[e];s||(s=this[t][e]=[]),s.push(o)}_removePropertyEffect(e,t,o){let s=$t(this,t,!0)[e],i=s.indexOf(o);i>=0&&s.splice(i,1)}_hasPropertyEffect(e,t){let o=this[t];return Boolean(o&&o[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Rt.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Rt.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Rt.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Rt.COMPUTE)}_setPendingPropertyOrPath(e,t,o,s){if(s||et(Array.isArray(e)?e[0]:e)!==e){if(!s){let o=rt(this,e);if(!(e=nt(this,e,t))||!super._shouldPropertyChange(e,t,o))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,o))return function(e,t,o){let s=e.__dataLinkedPaths;if(s){let i;for(let r in s){let n=s[r];tt(r,t)?(i=ot(r,n,t),e._setPendingPropertyOrPath(i,o,!0,!0)):tt(n,t)&&(i=ot(n,r,t),e._setPendingPropertyOrPath(i,o,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,o);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,o){o===e[t]&&"object"!=typeof o||("className"===t&&(e=Xe(e)),e[t]=o)}_setPendingProperty(e,t,o){let s=this.__dataHasPaths&&Qe(e),i=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,i[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),s?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(s||this[Rt.NOTIFY]&&this[Rt.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=o),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let o=e[t];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let o in e)!t&&this[Rt.READ_ONLY]&&this[Rt.READ_ONLY][o]||this._setPendingPropertyOrPath(o,e[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,o){let s,i=this.__dataHasPaths;this.__dataHasPaths=!1,Jt(this,t,o,i),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,o,i),this._flushClients(),Ht(this,this[Rt.REFLECT],t,o,i),Ht(this,this[Rt.OBSERVE],t,o,i),s&&function(e,t,o,s,i){let r,n,a=e[Rt.NOTIFY],l=Dt++;for(let n in t)t[n]&&(a&&Ut(e,a,l,n,o,s,i)||i&&Wt(e,n,o))&&(r=!0);r&&(n=e.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,s,t,o,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,o){this[Rt.PROPAGATE]&&Ht(this,this[Rt.PROPAGATE],e,t,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,o)}_runEffectsForTemplate(e,t,o,s){const i=(t,s)=>{Ht(this,e.propertyEffects,t,o,s,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,o,s)};e.runEffects?e.runEffects(i,t,s):i(t,s)}linkPaths(e,t){e=st(e),t=st(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=st(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let o={path:""};fo(this,rt(this,e,o),o.path,t)}get(e,t){return rt(t||this,e)}set(e,t,o){o?nt(o,e,t):this[Rt.READ_ONLY]&&this[Rt.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let o={path:""},s=rt(this,e,o),i=s.length,r=s.push(...t);return t.length&&vo(this,s,o.path,i,t.length,[]),r}pop(e){let t={path:""},o=rt(this,e,t),s=Boolean(o.length),i=o.pop();return s&&vo(this,o,t.path,o.length,0,[i]),i}splice(e,t,o,...s){let i,r={path:""},n=rt(this,e,r);return t<0?t=n.length-Math.floor(-t):t&&(t=Math.floor(t)),i=2===arguments.length?n.splice(t):n.splice(t,o,...s),(s.length||i.length)&&vo(this,n,r.path,t,s.length,i),i}shift(e){let t={path:""},o=rt(this,e,t),s=Boolean(o.length),i=o.shift();return s&&vo(this,o,t.path,0,0,[i]),i}unshift(e,...t){let o={path:""},s=rt(this,e,o),i=s.unshift(...t);return t.length&&vo(this,s,o.path,0,t.length,[]),i}notifyPath(e,t){let o;if(1==arguments.length){let s={path:""};t=rt(this,e,s),o=s.path}else o=Array.isArray(e)?st(e):e;this._setPendingPropertyOrPath(o,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var o;this._addPropertyEffect(e,Rt.READ_ONLY),t&&(this["_set"+(o=e,o[0].toUpperCase()+o.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,o){let s={property:e,method:t,dynamicFn:Boolean(o)};this._addPropertyEffect(e,Rt.OBSERVE,{fn:jt,info:s,trigger:{name:e}}),o&&this._addPropertyEffect(t,Rt.OBSERVE,{fn:jt,info:s,trigger:{name:t}})}_createMethodObserver(e,t){let o=po(e);if(!o)throw new Error("Malformed observer expression '"+e+"'");ro(this,o,Rt.OBSERVE,no,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Rt.NOTIFY,{fn:Gt,info:{eventName:ht(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Rt.REFLECT,{fn:Kt,info:{attrName:t}})}_createComputedProperty(e,t,o){let s=po(t);if(!s)throw new Error("Malformed computed expression '"+t+"'");const i=ro(this,s,Rt.COMPUTE,Qt,e,o);$t(this,Ft)[e]=i}_marshalArgs(e,t,o){const s=this.__data,i=[];for(let r=0,n=e.length;r<n;r++){let{name:n,structured:a,wildcard:l,value:d,literal:c}=e[r];if(!c)if(l){const e=tt(n,t),i=_o(s,o,e?t:n);d={path:e?t:n,value:i,base:e?rt(s,n):i}}else d=a?_o(s,o,n):s[n];if(Oe&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return Vt;i[r]=d}return i}static addPropertyEffect(e,t,o){this.prototype._addPropertyEffect(e,t,o)}static createPropertyObserver(e,t,o){this.prototype._createPropertyObserver(e,t,o)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,o){this.prototype._createComputedProperty(e,t,o)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let o=this.constructor._parseTemplate(e),s=this.__preBoundTemplateInfo==o;if(!s)for(let e in o.propertyEffects)this._createPropertyAccessor(e);if(t)if(o=Object.create(o),o.wasPreBound=s,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,s=t.lastChild;o.parent=t,t.lastChild=o,o.previousSibling=s,s?s.nextSibling=o:t.firstChild=o}else this.__templateInfo=o;else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(e,t,o){(e.hostProps=e.hostProps||{})[t]=!0;let s=e.propertyEffects=e.propertyEffects||{};(s[t]=s[t]||[]).push(o)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),bo.push(this);let o=super._stampTemplate(e,t);if(bo.pop(),t.nodeList=o.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=o.firstChild;t;t=t.nextSibling)e.push(t)}return o.templateInfo=t,function(e,t){let{nodeList:o,nodeInfoList:s}=t;if(s.length)for(let t=0;t<s.length;t++){let i=s[t],r=o[t],n=i.bindings;if(n)for(let t=0;t<n.length;t++){let o=n[t];so(r,o),io(r,e,o)}r.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:o,nextSibling:s,parent:i}=t;o?o.nextSibling=s:i&&(i.firstChild=s),s?s.previousSibling=o:i&&(i.lastChild=o),t.nextSibling=t.previousSibling=null;let r=t.childNodes;for(let e=0;e<r.length;e++){let t=r[e];Xe(Xe(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,o,s){let i=t._parseTemplateNode.call(this,e,o,s);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,o);t&&(e.textContent=uo(t)||" ",eo(this,o,s,"text","textContent",t),i=!0)}return i}static _parseTemplateNodeAttribute(e,o,s,i,r){let n=this._parseBindings(r,o);if(n){let t=i,r="property";Bt.test(i)?r="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),r="attribute");let a=uo(n);return a&&"attribute"==r&&("class"==i&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(i)),e.setAttribute(i,a)),"attribute"==r&&"disable-upgrade$"==t&&e.setAttribute(i,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===r&&(i=ct(i)),eo(this,o,s,r,i,n,a),!0}return t._parseTemplateNodeAttribute.call(this,e,o,s,i,r)}static _parseTemplateNestedTemplate(e,o,s){let i=t._parseTemplateNestedTemplate.call(this,e,o,s);const r=e.parentNode,n=s.templateInfo,a="dom-if"===r.localName,l="dom-repeat"===r.localName;ze&&(a||l)&&(r.removeChild(e),(s=s.parentInfo).templateInfo=n,s.noted=!0,i=!1);let d=n.hostProps;if(Le&&a)d&&(o.hostProps=Object.assign(o.hostProps||{},d),ze||(s.parentInfo.noted=!0));else{let e="{";for(let t in d){eo(this,o,s,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return i}static _parseBindings(e,t){let o,s=[],i=0;for(;null!==(o=ho.exec(e));){o.index>i&&s.push({literal:e.slice(i,o.index)});let r=o[1][0],n=Boolean(o[2]),a=o[3].trim(),l=!1,d="",c=-1;"{"==r&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let h=po(a),u=[];if(h){let{args:e,methodName:o}=h;for(let t=0;t<e.length;t++){let o=e[t];o.literal||u.push(o)}let s=t.dynamicFns;(s&&s[o]||h.static)&&(u.push(o),h.dynamicFn=!0)}else u.push(a);s.push({source:a,mode:r,negate:n,customEvent:l,signature:h,dependencies:u,event:d}),i=ho.lastIndex}if(i&&i<e.length){let t=e.substring(i);t&&s.push({literal:t})}return s.length?s:null}static _evaluateBinding(e,t,o,s,i,r){let n;return n=t.signature?no(e,o,s,0,t.signature):o!=t.source?rt(e,t.source):r&&Qe(o)?rt(e,o):e.__data[o],t.negate&&(n=!n),n}}})),bo=[];const yo=Ve((e=>{const t=yt(e);function o(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function s(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const o=e.properties;o&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let o in e){const s=e[o];t[o]="function"==typeof s?{type:s}:s}return t}(o))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=o(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=s(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=o(this);this.__properties=Object.assign({},e&&e._properties,s(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})),xo=window.ShadyCSS&&window.ShadyCSS.cssBuild,wo=Ve((e=>{const t=yo(go(e));function o(e,t,o,s){o.computed&&(o.readOnly=!0),o.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,o.computed,s)),o.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!o.computed):!1===o.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),o.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===o.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),o.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===o.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),o.observer&&e._createPropertyObserver(t,o.observer,s[o.observer]),e._addPropertyToAttributeMap(t)}function s(e,t,o,s){if(!xo){const i=t.content.querySelectorAll("style"),r=Je(t),n=function(e){let t=We(e);return t?Ze(t):[]}(o),a=t.content.firstElementChild;for(let o=0;o<n.length;o++){let i=n[o];i.textContent=e._processStyleText(i.textContent,s),t.content.insertBefore(i,a)}let l=0;for(let t=0;t<r.length;t++){let o=r[t],n=i[l];n!==o?(o=o.cloneNode(!0),n.parentNode.insertBefore(o,n)):l++,o.textContent=e._processStyleText(o.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,o),Me&&xo&&Ce){const o=t.content.querySelectorAll("style");if(o){let t="";Array.from(o).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((o=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",o))||(o.__ownObservers=o.hasOwnProperty(JSCompiler_renameProperty("observers",o))?o.observers:null),o.__ownObservers);var o;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Se||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)o(this.prototype,t,e[t],e)}static createObservers(e,t){const o=this.prototype;for(let s=0;s<e.length;s++)o._createMethodObserver(e[s],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof e&&(e=e()),this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!Ie||Pe)&&(t=He.import(e,"template"),Ie&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=xe(e.url);else{const e=He.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ae,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let o in t){let s=t[o];"value"in s&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[o]=s)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let o=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof o.value?o.value.call(this):o.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return ye(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const o=this.importPath;s(this,t,e,o?be(o):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=Xe(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ke&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=be(this.importPath)),be(e,t)}static _parseTemplateContent(e,o,s){return o.dynamicFns=o.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,o,s)}static _addTemplatePropertyEffect(e,o,s){return!Te||o in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,o,s)}}})),Co=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */class Ao{constructor(e,t){Po(e,t);const o=t.reduce(((t,o,s)=>t+Eo(o)+e[s+1]),e[0]);this.value=o.toString()}toString(){return this.value}}function Eo(e){if(e instanceof Ao)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const Io=function(e,...t){Po(e,t);const o=document.createElement("template");let s=t.reduce(((t,o,s)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ao)return Eo(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(o)+e[s+1]),e[0]);return Co&&(s=Co.createHTML(s)),o.innerHTML=s,o},Po=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},So=wo(HTMLElement),To=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ko=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Oo(e,t){if("function"!=typeof e)return;const o=To.exec(e.toString());if(o)try{e=new Function(o[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const No=function(e,t){if(window.Vaadin.developmentMode)return Oo(e,t)};function zo(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ko?!(ko&&Object.keys(ko).map((e=>ko[e])).filter((e=>e.productionMode)).length>0):!Oo((function(){return!0})))}catch(e){return!1}}());const Lo=function(){return No(zo)},Mo={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Do=new Set;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */class Vo{static debounce(e,t,o){return e instanceof Vo?e._cancelAsync():e=new Vo,e.setConfig(t,o),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Do.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Do.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ro=[];function Fo(e,t,o=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=o&&e.removeAttribute("dir")}function Bo(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const e=Bo();Ro.forEach((t=>{Fo(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const $o=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>""===e?null:e}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),Fo(this,Bo(),null))}attributeChangedCallback(e,t,o){if(super.attributeChangedCallback(e,t,o),"dir"!==e)return;const s=Bo(),i=o===s&&-1===Ro.indexOf(this),r=!o&&t&&-1===Ro.indexOf(this),n=o!==s&&t===s;i||r?(this.__subscribe(),Fo(this,s,o)):n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Ro.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,t,o){("dir"!==o||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,o)}_attributeToProperty(e,t,o){"dir"!==e||t?super._attributeToProperty(e,t,o):this.dir=""}__subscribe(){Ro.includes(this)||Ro.push(this)}__unsubscribe(){Ro.includes(this)&&Ro.splice(Ro.indexOf(this),1)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;let Ho;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Lo()};const Uo=new Set,qo=e=>class extends($o(e)){static get version(){return"24.2.3"}static finalize(){super.finalize();const{is:e}=this;var t;e&&!Uo.has(e)&&(window.Vaadin.registrations.push(this),Uo.add(e),window.Vaadin.developmentModeCallback&&(Ho=Vo.debounce(Ho,Mo,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),t=Ho,Do.add(t)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,jo=new ResizeObserver((e=>{setTimeout((()=>{e.forEach((e=>{e.target.resizables?e.target.resizables.forEach((t=>{t._onResize(e.contentRect)})):e.target._onResize(e.contentRect)}))}))})),Wo=Ve((e=>class extends e{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),jo.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,jo.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),jo.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),0===t.size&&jo.unobserve(e)),this.__parent=null}}_onResize(e){}}));
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Yo extends(Wo(qo(me(So)))){static get template(){return Io`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value:()=>[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}],observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame((()=>this._selectResponsiveStep())),requestAnimationFrame((()=>this._updateLayout())),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const e={attributes:!0};this.__mutationObserver=new MutationObserver((e=>{e.forEach((e=>{"attributes"!==e.type||"colspan"!==e.attributeName&&"hidden"!==e.attributeName||this._updateLayout()}))})),[...this.children].forEach((t=>{this.__mutationObserver.observe(t,e)})),this.__childObserver=new MutationObserver((t=>{const o=[],s=[];t.forEach((e=>{o.push(...this._getObservableNodes(e.addedNodes)),s.push(...this._getObservableNodes(e.removedNodes))})),o.forEach((t=>{this.__mutationObserver.observe(t,e)})),(o.length>0||s.length>0)&&this._updateLayout()})),this.__childObserver.observe(this,{childList:!0})}_getObservableNodes(e){const t=["template","style","dom-repeat","dom-if"];return Array.from(e).filter((e=>e.nodeType===Node.ELEMENT_NODE&&-1===t.indexOf(e.localName.toLowerCase())))}_naturalNumberOrOne(e){return"number"==typeof e&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return"inherit"!==e&&"normal"!==e&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach((e=>{if(this._naturalNumberOrOne(e.columns)!==e.columns)throw new Error(`Invalid 'columns' value of ${e.columns}, a natural number is required.`);if(void 0!==e.minWidth&&!this._isValidCSSLength(e.minWidth))throw new Error(`Invalid 'minWidth' value of ${e.minWidth}, a valid CSS length required.`);if(void 0!==e.labelsPosition&&-1===["aside","top"].indexOf(e.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${e.labelsPosition}, 'aside' or 'top' string is required.`)}))}catch(o){t&&t!==e?(console.warn(`${o.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=t):(console.warn(`${o.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){0===e.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let e;const t="background-position";this.responsiveSteps.forEach((o=>{this.$.layout.style.setProperty(t,o.minWidth);parseFloat(getComputedStyle(this.$.layout).getPropertyValue(t))<=this.offsetWidth&&(e=o)})),this.$.layout.style.removeProperty(t),e&&(this._columnCount=e.columns,this._labelsOnTop="top"===e.labelsPosition)}_invokeUpdateLayout(){this._updateLayout()}_updateLayout(){const e=getComputedStyle(this),t=e.getPropertyValue("--vaadin-form-layout-column-spacing"),o=e.direction,s="margin-"+("ltr"===o?"left":"right"),i="margin-"+("ltr"===o?"right":"left"),r=this.offsetWidth;let n=0;Array.from(this.children).filter((e=>"br"===e.localName||"none"!==getComputedStyle(e).display)).forEach(((e,o,a)=>{if("br"===e.localName)return void(n=0);let l;l=this._naturalNumberOrOne(parseFloat(e.getAttribute("colspan"))),l=Math.min(l,this._columnCount);const d=l/this._columnCount;e.style.width=`calc(${99.9*d}% - ${1-d} * ${t})`,n+l>this._columnCount&&(n=0),0===n?e.style.setProperty(s,"0px"):e.style.removeProperty(s);const c=o+1,h=c<a.length&&"br"===a[c].localName;if(n+l===this._columnCount)e.style.setProperty(i,"0px");else if(h){const o=(this._columnCount-n-l)/this._columnCount;e.style.setProperty(i,`calc(${o*r}px + ${o} * ${t})`)}else e.style.removeProperty(i);n=(n+l)%this._columnCount,"vaadin-form-item"===e.localName&&(this._labelsOnTop?"top"!==e.getAttribute("label-position")&&(e.__useLayoutLabelPosition=!0,e.setAttribute("label-position","top")):e.__useLayoutLabelPosition&&(delete e.__useLayoutLabelPosition,e.removeAttribute("label-position")))}))}_onResize(){this._selectResponsiveStep()}}re(Yo);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Go extends HTMLElement{static get version(){return"24.1.5"}}customElements.define("vaadin-lumo-styles",Go);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ko=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"theme"===e&&this._set_theme(o)}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Jo=[];function Zo(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function Xo(e,t,o={}){var s;e&&(s=e,Zo(customElements.get(s))&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),t=function(e=[]){return[e].flat(1/0).filter((e=>e instanceof i||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,o):Jo.push({themeFor:e,styles:t,include:o.include,moduleId:o.moduleId})}function Qo(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Jo}function es(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function ts(e){const t=[];return e.include&&[].concat(e.include).forEach((e=>{const o=Qo().find((t=>t.moduleId===e));o?t.push(...ts(o),...o.styles):console.warn(`Included moduleId ${e} not found in style registry`)}),e.styles),t}function os(e){const t=`${e}-default-theme`,o=Qo().filter((o=>o.moduleId!==t&&function(e,t){return(e||"").split(" ").some((e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t)))}(o.themeFor,e))).map((e=>({...e,styles:[...ts(e),...e.styles],includePriority:es(e.moduleId)}))).sort(((e,t)=>t.includePriority-e.includePriority));return o.length>0?o:Qo().filter((e=>e.moduleId===t))}const ss=e=>class extends(Ko(e)){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;e&&!Zo(this)&&function(e,t){const o=document.createElement("style");o.innerHTML=e.map((e=>e.cssText)).join("\n"),t.content.appendChild(o)}(this.getStylesForThis(),e)}static finalizeStyles(e){const t=this.getStylesForThis();return e?[...super.finalizeStyles(e),...t]:t}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),t=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...os(this.is)];const o=this.__themes.flatMap((e=>e.styles));return o.filter(((e,t)=>t===o.lastIndexOf(e)))}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,is=(e,...t)=>{((e,...t)=>{const o=document.createElement("style");o.id=e,o.textContent=t.map((e=>e.toString())).join("\n").replace(":host","html"),document.head.insertAdjacentElement("afterbegin",o)})(`lumo-${e}`,t)};is("color-props",r`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`);Xo("",r`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`,{moduleId:"lumo-color"});is("sizing-props",r`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const rs=r`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;r`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
  }
`,is("style-props",rs);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const ns=r`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;Xo("",r`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"}),is("typography-props",ns),Xo("vaadin-input-container",r`
    :host {
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const as=[];function ls(e,t,o=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=o&&e.removeAttribute("dir")}function ds(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const e=ds();as.forEach((t=>{ls(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const cs=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>""===e?null:e}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),ls(this,ds(),null))}attributeChangedCallback(e,t,o){if(super.attributeChangedCallback(e,t,o),"dir"!==e)return;const s=ds(),i=o===s&&-1===as.indexOf(this),r=!o&&t&&-1===as.indexOf(this),n=o!==s&&t===s;i||r?(this.__subscribe(),ls(this,s,o)):n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=as.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,t,o){("dir"!==o||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,o)}_attributeToProperty(e,t,o){"dir"!==e||t?super._attributeToProperty(e,t,o):this.dir=""}__subscribe(){as.includes(this)||as.push(this)}__unsubscribe(){as.includes(this)&&as.splice(as.indexOf(this),1)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class hs extends(ss(cs(So))){static get is(){return"vaadin-input-container"}static get template(){return Io`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
            var(--vaadin-input-field-top-start-radius, var(--__border-radius))
            var(--vaadin-input-field-top-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
          --_border-radius: var(--vaadin-input-field-border-radius, 0px);
          --_input-border-width: var(--vaadin-input-field-border-width, 0);
          --_input-border-color: var(--vaadin-input-field-border-color, transparent);
          box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
        }

        :host([dir='rtl']) {
          border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
            var(--vaadin-input-field-top-end-radius, var(--_border-radius))
            var(--vaadin-input-field-top-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",(e=>{e.target===this&&e.preventDefault()})),this.addEventListener("click",(e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach((e=>e.focus&&e.focus()))}))}}customElements.define(hs.is,hs);is("font-icons",r`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const us=r`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;Xo("",us,{moduleId:"lumo-field-button"});is("spacing-props",r`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const ps=r`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ms=r`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a 
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;Xo("",ms,{moduleId:"lumo-required-field"});
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const _s=[ms,us,ps,r`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`];Xo("",_s,{moduleId:"lumo-input-field-shared-styles"});Xo("vaadin-number-field",[_s,us,r`
  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`],{moduleId:"lumo-number-field"});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let fs=0,vs=0;const gs=[];let bs=!1;const ys={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},xs={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},ws={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Cs={run(e){bs||(bs=!0,queueMicrotask((()=>function(){bs=!1;const e=gs.length;for(let t=0;t<e;t++){const e=gs[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}gs.splice(0,e),vs+=e}()))),gs.push(e);const t=fs;return fs+=1,t},cancel(e){const t=e-vs;if(t>=0){if(!gs[t])throw new Error(`invalid async handle: ${e}`);gs[t]=null}}},As=new Set;class Es{static debounce(e,t,o){return e instanceof Es?e._cancelAsync():e=new Es,e.setConfig(t,o),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,As.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),As.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}function Is(e){As.add(e)}function Ps(){const e=Boolean(As.size);return As.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e}const Ss=()=>{let e;do{e=Ps()}while(e)};
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ts;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Lo()};const ks=new Set,Os=e=>class extends(cs(e)){static get version(){return"24.1.5"}static finalize(){super.finalize();const{is:e}=this;e&&!ks.has(e)&&(window.Vaadin.registrations.push(this),ks.add(e),window.Vaadin.developmentModeCallback&&(Ts=Es.debounce(Ts,ws,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),Is(Ts)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;function Ns(e,t,o){return{index:e,removed:t,addedCount:o}}const zs=0,Ls=1,Ms=2,Ds=3;function Vs(e,t,o,s,i,r){let n,a=0,l=0,d=Math.min(o-t,r-i);if(0==t&&0==i&&(a=function(e,t,o){for(let s=0;s<o;s++)if(!Rs(e[s],t[s]))return s;return o}(e,s,d)),o==e.length&&r==s.length&&(l=function(e,t,o){let s=e.length,i=t.length,r=0;for(;r<o&&Rs(e[--s],t[--i]);)r++;return r}(e,s,d-a)),i+=a,r-=l,(o-=l)-(t+=a)==0&&r-i==0)return[];if(t==o){for(n=Ns(t,[],0);i<r;)n.removed.push(s[i++]);return[n]}if(i==r)return[Ns(t,[],o-t)];let c=function(e){let t=e.length-1,o=e[0].length-1,s=e[t][o],i=[];for(;t>0||o>0;){if(0==t){i.push(Ms),o--;continue}if(0==o){i.push(Ds),t--;continue}let r,n=e[t-1][o-1],a=e[t-1][o],l=e[t][o-1];r=a<l?a<n?a:n:l<n?l:n,r==n?(n==s?i.push(zs):(i.push(Ls),s=n),t--,o--):r==a?(i.push(Ds),t--,s=a):(i.push(Ms),o--,s=l)}return i.reverse(),i}(function(e,t,o,s,i,r){let n=r-i+1,a=o-t+1,l=new Array(n);for(let e=0;e<n;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let o=1;o<n;o++)for(let r=1;r<a;r++)if(Rs(e[t+r-1],s[i+o-1]))l[o][r]=l[o-1][r-1];else{let e=l[o-1][r]+1,t=l[o][r-1]+1;l[o][r]=e<t?e:t}return l}(e,t,o,s,i,r));n=void 0;let h=[],u=t,p=i;for(let e=0;e<c.length;e++)switch(c[e]){case zs:n&&(h.push(n),n=void 0),u++,p++;break;case Ls:n||(n=Ns(u,[],0)),n.addedCount++,u++,n.removed.push(s[p]),p++;break;case Ms:n||(n=Ns(u,[],0)),n.addedCount++,u++;break;case Ds:n||(n=Ns(u,[],0)),n.removed.push(s[p]),p++}return n&&h.push(n),h}function Rs(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fs(e){return"slot"===e.localName}function Bs(e){return e?new Set(e.split(" ")):new Set}function $s(e){return e?[...e].join(" "):""}function Hs(e,t,o){const s=Bs(e.getAttribute(t));s.add(o),e.setAttribute(t,$s(s))}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
let Us=0;function qs(){return Us++}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class js extends EventTarget{static generateId(e,t){return`${t||"default"}-${e.localName}-${qs()}`}constructor(e,t,o,s={}){super();const{initializer:i,multiple:r,observe:n,useUniqueId:a}=s;this.host=e,this.slotName=t,this.tagName=o,this.observe="boolean"!=typeof n||n,this.multiple="boolean"==typeof r&&r,this.slotInitializer=i,r&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(e,t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(0===e.length){const e=this.attachDefaultNode();this.nodes=[e],this.initNode(e)}else this.nodes=e,e.forEach((e=>{this.initAddedNode(e)}))}attachDefaultNode(){const{host:e,slotName:t,tagName:o}=this;let s=this.defaultNode;return!s&&o&&(s=document.createElement(o),s instanceof Element&&(""!==t&&s.setAttribute("slot",t),this.node=s,this.defaultNode=s)),s&&e.appendChild(s),s}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter((t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&""===e))}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:t}=this;t&&t(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,t=""===e?"slot:not([name])":`slot[name=${e}]`,o=this.host.shadowRoot.querySelector(t);this.__slotObserver=new class{static getFlattenedNodes(e){const t=Xe(e);return Fs(e)?t.assignedNodes({flatten:!0}):Array.from(t.childNodes).map((e=>Fs(e)?Xe(e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Fs(this._target)?this._listenSlots([this._target]):Xe(this._target).children&&(this._listenSlots(Xe(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Fs(this._target)?this._unlistenSlots([this._target]):Xe(this._target).children&&(this._unlistenSlots(Xe(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,gt.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let o=e[t];o.addedNodes&&this._listenSlots(o.addedNodes),o.removedNodes&&this._unlistenSlots(o.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),o=(s=t,i=this._effectiveNodes,Vs(s,0,s.length,i,0,i.length));var s,i;for(let t,s=0;s<o.length&&(t=o[s]);s++)for(let o,s=0;s<t.removed.length&&(o=t.removed[s]);s++)e.removedNodes.push(o);for(let s,i=0;i<o.length&&(s=o[i]);i++)for(let o=s.index;o<s.index+s.addedCount;o++)e.addedNodes.push(t[o]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let o=e[t];Fs(o)&&o.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let o=e[t];Fs(o)&&o.removeEventListener("slotchange",this._boundSchedule)}}}(o,(e=>{const t=this.multiple?this.nodes:[this.node],o=e.addedNodes.filter((e=>!function(e){return e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim()}(e)&&!t.includes(e)));e.removedNodes.length&&e.removedNodes.forEach((e=>{this.teardownNode(e)})),o&&o.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...t,...o].filter((e=>e!==this.defaultNode)),o.forEach((e=>{this.initAddedNode(e)}))):(this.node&&this.node.remove(),this.node=o[0],this.initAddedNode(this.node)))}))}}
/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ws extends js{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,void 0!==this.context&&(e.context=this.context),void 0!==this.manual&&(e.manual=this.manual),void 0!==this.opened&&(e.opened=this.opened),void 0!==this.position&&(e._position=this.position),void 0!==this.shouldShow&&(e.shouldShow=this.shouldShow)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ys=r`[part=clear-button]{display:none;cursor:default}[part=clear-button]::before{content:'\\2715'}:host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part=clear-button]{display:block}`
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Gs=[r`:host{display:inline-flex;outline:0}:host::before{content:'\\2003';width:0;display:inline-block}:host([hidden]){display:none!important}:host(:not([has-label])) [part=label]{display:none}@media (forced-colors:active){:host(:not([readonly])) [part=input-field]{outline:1px solid;outline-offset:-1px}:host([focused]) [part=input-field]{outline-width:2px}:host([disabled]) [part=input-field]{outline-color:GrayText}}`
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,r`[class$=container]{display:flex;flex-direction:column;min-width:100%;max-width:100%;width:var(--vaadin-field-default-width,12em)}`
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Ys];
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Ks extends js{constructor(e,t){super(e,"input","input",{initializer:(e,o)=>{o.value&&e.setAttribute("value",o.value),o.type&&e.setAttribute("type",o.type),e.id=this.defaultId,"function"==typeof t&&t(e)},useUniqueId:!0})}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Js=!1;function Zs(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}function Xs(e,t){const o=Math.max(e.tabIndex,0),s=Math.max(t.tabIndex,0);return 0===o||0===s?s>o:o>s}function Qs(e){const t=e.length;if(t<2)return e;const o=Math.ceil(t/2);return function(e,t){const o=[];for(;e.length>0&&t.length>0;)Xs(e[0],t[0])?o.push(t.shift()):o.push(e.shift());return o.concat(e,t)}(Qs(e.slice(0,o)),Qs(e.slice(o)))}function ei(e){return e.getRootNode().activeElement===e}function ti(e,t){if(e.nodeType!==Node.ELEMENT_NODE||function(e){const t=e.style;if("hidden"===t.visibility||"none"===t.display)return!0;const o=window.getComputedStyle(e);return"hidden"===o.visibility||"none"===o.display}(e))return!1;const o=e,s=function(e){if(!function(e){return!e.matches('[tabindex="-1"]')&&(e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]"))}(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}(o);let i=s>0;s>=0&&t.push(o);let r=[];return r="slot"===o.localName?o.assignedNodes({flatten:!0}):(o.shadowRoot||o).children,[...r].forEach((e=>{i=ti(e,t)||i})),i}window.addEventListener("keydown",(()=>{Js=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{Js=!1}),{capture:!0});
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const oi=Ve((e=>class extends e{get _keyboardActive(){return Js}ready(){this.addEventListener("focusin",(e=>{this._shouldSetFocus(e)&&this._setFocused(!0)})),this.addEventListener("focusout",(e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}})),si=Ve((e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),ii=e=>class extends(si(e)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&-1!==e&&(this._lastTabIndex=e,this.tabindex=-1)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ri=Ve((e=>class extends(oi(ii(e))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){void 0!==e&&this.focusElement&&(this.focusElement.tabIndex=e,-1!==e&&(this.tabindex=void 0)),this.disabled&&e&&(-1!==e&&(this._lastTabIndex=e),this.tabindex=void 0)}})),ni=Ve((e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",(e=>{this._onKeyDown(e)})),this.addEventListener("keyup",(e=>{this._onKeyUp(e)}))}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e)}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}})),ai=e=>e.test(navigator.userAgent),li=e=>e.test(navigator.platform);
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ai(/Android/u),ai(/Chrome/u)&&/Google Inc/u.test(navigator.vendor),ai(/Firefox/u);const di=li(/^iPad/u)||li(/^Mac/u)&&navigator.maxTouchPoints>1,ci=li(/^iPhone/u)||di,hi=ai(/^((?!chrome|android).)*safari/iu),ui=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})(),pi=Ve((e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=null!=e?e:"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_hasInputValueChanged(e,t){(e||t)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),""===e&&void 0===t||this.__userInput||this._forwardInputValue(e)}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0}})),mi=e=>class extends(pi(ni(e))){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",(e=>this._onClearButtonMouseDown(e))),this.clearElement.addEventListener("click",(e=>this._onClearButtonClick(e))))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),ui||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}}
/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,_i=new Map;function fi(e){return _i.has(e)||_i.set(e,new WeakMap),_i.get(e)}function vi(e,t){e&&e.removeAttribute(t)}function gi(e,t){if(!e||!t)return;const o=fi(t);if(o.has(e))return;const s=Bs(e.getAttribute(t));o.set(e,new Set(s))}function bi(e,t,o={newId:null,oldId:null,fromUser:!1}){if(!e||!t)return;const{newId:s,oldId:i,fromUser:r}=o,n=fi(t),a=n.get(e);if(!r&&a)return i&&a.delete(i),void(s&&a.add(s));r&&(a?s||n.delete(e):gi(e,t),vi(e,t)),function(e,t,o){const s=Bs(e.getAttribute(t));s.delete(o),0!==s.size?e.setAttribute(t,$s(s)):e.removeAttribute(t)}(e,t,i);const l=s||$s(a);l&&Hs(e,t,l)}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class yi{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),null!=this.__labelIdFromUser&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setAriaLabel(e){this.__setAriaLabelToAttribute(e),this.__label=e}setLabelId(e,t=!1){const o=t?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(e,o,t),t?this.__labelIdFromUser=e:this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}__setAriaLabelToAttribute(e){var t,o;this.__target&&(e?(gi(t=this.__target,o="aria-labelledby"),vi(t,o),this.__target.setAttribute("aria-label",e)):this.__label&&(!function(e,t){if(!e||!t)return;const o=fi(t),s=o.get(e);s&&0!==s.size?Hs(e,t,$s(s)):e.removeAttribute(t),o.delete(e)}(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(e,t,o){bi(this.__target,"aria-labelledby",{newId:e,oldId:t,fromUser:o})}__setErrorIdToAriaAttribute(e,t){bi(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setHelperIdToAriaAttribute(e,t){bi(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setAriaRequiredAttribute(e){this.__target&&(["input","textarea"].includes(this.__target.localName)||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xi=Ve((e=>class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((e=>{e.hostConnected&&e.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((e=>{e.hostDisconnected&&e.hostDisconnected()}))}addController(e){this.__controllers.add(e),void 0!==this.$&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}));
/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wi extends js{constructor(e,t,o,s={}){super(e,t,o,{...s,useUniqueId:!0})}initCustomNode(e){this.__updateNodeId(e),this.__notifyChange(e)}teardownNode(e){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const e=super.attachDefaultNode();return e&&this.__updateNodeId(e),e}restoreDefaultNode(){}updateDefaultNode(e){this.__notifyChange(e)}observeNode(e){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver((e=>{e.forEach((e=>{const t=e.target,o=t===this.node;"attributes"===e.type?o&&this.__updateNodeId(t):(o||t.parentElement===this.node)&&this.__notifyChange(this.node)}))})),this.__nodeObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(e){return!!e&&(e.nodeType===Node.ELEMENT_NODE&&(customElements.get(e.localName)||e.children.length>0)||e.textContent&&""!==e.textContent.trim())}__notifyChange(e){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(e),node:e}}))}__updateNodeId(e){const t=!this.nodes||e===this.nodes[0];e.nodeType!==Node.ELEMENT_NODE||this.multiple&&!t||e.id||(e.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ci extends wi{constructor(e){super(e,"error-message","div")}setErrorMessage(e){this.errorMessage=e,this.updateDefaultNode(this.node)}setInvalid(e){this.invalid=e,this.updateDefaultNode(this.node)}initAddedNode(e){e!==this.defaultNode&&this.initCustomNode(e)}initNode(e){this.updateDefaultNode(e)}initCustomNode(e){e.textContent&&!this.errorMessage&&(this.errorMessage=e.textContent.trim()),super.initCustomNode(e)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(e){const{errorMessage:t,invalid:o}=this,s=Boolean(o&&t&&""!==t.trim());e&&(e.textContent=s?t:"",e.hidden=!s,s?e.setAttribute("role","alert"):e.removeAttribute("role")),super.updateDefaultNode(e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ai extends wi{constructor(e){super(e,"helper",null)}setHelperText(e){this.helperText=e;this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:e}=this;if(e&&""!==e.trim()){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(e){e&&(e.textContent=this.helperText),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ei extends wi{constructor(e){super(e,"label","label")}setLabel(e){this.label=e;this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:e}=this;if(e&&""!==e.trim()){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(e){e&&(e.textContent=this.label),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ii=Ve((e=>class extends(xi(e)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Ei(this),this._labelController.addEventListener("slot-content-changed",(e=>{this.toggleAttribute("has-label",e.detail.hasContent)}))}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}})),Pi=Ve((e=>class extends e{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}})),Si=e=>class extends(Pi(Ii(xi(e)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new yi(this),this._helperController=new Ai(this),this._errorController=new Ci(this),this._errorController.addEventListener("slot-content-changed",(e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)})),this._labelController.addEventListener("slot-content-changed",(e=>{const{hasContent:t,node:o}=e.detail;this.__labelChanged(t,o)})),this._helperController.addEventListener("slot-content-changed",(e=>{const{hasContent:t,node:o}=e.detail;this.toggleAttribute("has-helper",t),this.__helperChanged(t,o)}))}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,t){e?this._fieldAriaController.setHelperId(t.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,t){e?this._fieldAriaController.setLabelId(t.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout((()=>{if(e){const e=this._errorNode;this._fieldAriaController.setErrorId(e&&e.id)}else this._fieldAriaController.setErrorId(null)}))}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Ti=Ve((e=>class extends e{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((e=>{this._delegateAttribute(e,this[e])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((e=>{this._delegateProperty(e,this[e])}))}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach(((t,o)=>{this._delegateAttribute(t,e[o])}))}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach(((t,o)=>{this._delegateProperty(t,e[o])}))}_delegateAttribute(e,t){this.stateTarget&&("invalid"===e&&this._delegateAttribute("aria-invalid",!!t&&"true"),"boolean"==typeof t?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}})),ki=Ve((e=>class extends(Ti(Pi(pi(e)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map((e=>this[e])))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some((e=>this.__isValidConstraint(e)))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...t){if(!e)return;const o=this._hasValidConstraints(t),s=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this.validate():s&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return Boolean(e)||0===e}})),Oi=new WeakMap;
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ni=Ve((e=>class extends e{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),t=function(e){return Oi.has(e)||Oi.set(e,new Set),Oi.get(e)}(e);this.slotStyles.forEach((o=>{t.has(o)||(!function(e,t){const o=document.createElement("style");o.textContent=e,t===document?document.head.appendChild(o):t.insertBefore(o,t.firstChild)}(o,e),t.add(o))}))}})),zi=e=>class extends(Ni(ri(ki(Si(mi(ni(e))))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return["\n          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {\n            font: inherit;\n            color: inherit;\n          }\n        "]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=Es.debounce(this._preventInputDebouncer,ys.after(200),(()=>{this.removeAttribute("input-prevented")}))}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const t=e.clipboardData.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const t=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(e){console.error(e)}}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Li=e=>class extends(zi(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,t){super._valueChanged(e,t),void 0!==t&&this.invalid&&this.validate()}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mi{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",(e=>{this.__initLabel(e.detail.node)})),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Di=e=>class extends(Li(e)){static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const e=this.localName;return[`\n          ${e} input[type="number"]::-webkit-outer-spin-button,\n          ${e} input[type="number"]::-webkit-inner-spin-button {\n            -webkit-appearance: none;\n            margin: 0;\n          }\n\n          ${e} input[type="number"] {\n            -moz-appearance: textfield;\n          }\n\n          ${e}[dir='rtl'] input[type="number"]::placeholder {\n            direction: rtl;\n          }\n\n          ${e}[dir='rtl']:not([step-buttons-visible]) input[type="number"]::placeholder {\n            text-align: left;\n          }\n        `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ks(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}))),this.addController(new Mi(this.inputElement,this._labelController))}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_onDecreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_onIncreaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}_onDecreaseButtonClick(){this._decreaseValue()}_onIncreaseButtonClick(){this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;const t=this.step||1;let o=parseFloat(this.value);this.value?o<this.min?(e=0,o=this.min):o>this.max&&(e=0,o=this.max):0===this.min&&e<0||0===this.max&&e>0||0===this.max&&0===this.min?(e=0,o=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?o=0:this.min>0?(o=this.min,this.max<0&&e<0&&(o=this.max),e=0):this.max<0&&(o=this.max,e<0?e=0:this._getIncrement(1,o-t)>this.max?o-=2*t:o-=t);const s=this._getIncrement(e,o);this.value&&0!==e&&!this._incrementIsInsideTheLimits(e,o)||this._setValue(s)}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){let o=this.step||1,s=this.min||0;const i=Math.max(this._getMultiplier(t),this._getMultiplier(o),this._getMultiplier(s));o*=i,s*=i;const r=((t=Math.round(t*i))-s)%o;return e>0?(t-r+o)/i:e<0?(t-(r||o))/i:t/i}_getDecimalCount(e){const t=String(e),o=t.indexOf(".");return-1===o?1:t.length-o-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,t){return e<0?null==this.min||this._getIncrement(e,t)>=this.min:e>0?null==this.max||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_isButtonEnabled(e){const t=e*(this.step||1),o=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,o)}_stepChanged(e,t){t&&(t.step=e||"any")}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){"ArrowUp"===e.key?(e.preventDefault(),this._increaseValue()):"ArrowDown"===e.key&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0||t.validity.badInput}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Xo("vaadin-number-field",[Gs,r`:host([readonly]) [part$=button]{pointer-events:none}[part=decrease-button]::before{content:'\\2212'}[part=increase-button]::before{content:'+'}[part=decrease-button],[part=increase-button]{-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([dir=rtl]) [part=input-field]{direction:ltr}`],{moduleId:"vaadin-number-field-styles"});class Vi extends(Di(ss(Os(So)))){static get is(){return"vaadin-number-field"}static get template(){return Io`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_isButtonEnabled(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_onDecreaseButtonClick"
            on-touchend="_onDecreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_isButtonEnabled(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_onIncreaseButtonClick"
            on-touchend="_onIncreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Ws(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}}customElements.define(Vi.is,Vi);const Ri=r`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;Xo("vaadin-item",Ri,{moduleId:"lumo-item"});Xo("vaadin-combo-box-item",[Ri,r`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`],{moduleId:"lumo-combo-box-item"});
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Fi=r`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;Xo("",Fi,{moduleId:"lumo-overlay"}),Xo("vaadin-overlay",Fi,{moduleId:"lumo-vaadin-overlay"});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Bi=!1,$i=[],Hi=[];function Ui(){Bi=!0,requestAnimationFrame((function(){Bi=!1,function(e){for(;e.length;)qi(e.shift())}($i),setTimeout((function(){!function(e){for(let t=0,o=e.length;t<o;t++)qi(e.shift())}(Hi)}))}))}function qi(e){const t=e[0],o=e[1],s=e[2];try{o.apply(t,s)}catch(e){setTimeout((()=>{throw e}))}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function ji(e){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(e):e.querySelector("template")&&console.warn(`WARNING: <template> inside <${e.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}
/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Wi=new WeakMap,Yi=new WeakMap,Gi={},Ki=0;const Ji=e=>e?e.host||Ji(e.parentNode):null,Zi=e=>e&&e.nodeType===Node.ELEMENT_NODE,Xi=(...e)=>{console.error(`Error: ${e.join(" ")}. Skip setting aria-hidden.`)},Qi=(e,t,o,s)=>{const i=((e,t)=>Zi(e)?t.map((t=>{if(!Zi(t))return Xi(t,"is not a valid element"),null;if(e.contains(t))return t;const o=Ji(t);return o&&e.contains(o)?o:(Xi(t,"is not contained inside",e),null)})).filter((e=>Boolean(e))):(Xi(e,"is not a valid element"),[]))(t,Array.isArray(e)?e:[e]);Gi[o]||(Gi[o]=new WeakMap);const r=Gi[o],n=[],a=new Set,l=new Set(i),d=e=>{e&&!a.has(e)&&(a.add(e),d(e.parentNode))};i.forEach(d);const c=e=>{e&&!l.has(e)&&[...e.children].forEach((e=>{if(!["template","script","style"].includes(e.localName))if(a.has(e))c(e);else{const t=e.getAttribute(s),i=null!==t&&"false"!==t,a=(Wi.get(e)||0)+1,l=(r.get(e)||0)+1;Wi.set(e,a),r.set(e,l),n.push(e),1===a&&i&&Yi.set(e,!0),1===l&&e.setAttribute(o,"true"),i||e.setAttribute(s,"true")}}))};return c(t),a.clear(),Ki+=1,()=>{n.forEach((e=>{const t=Wi.get(e)-1,i=r.get(e)-1;Wi.set(e,t),r.set(e,i),t||(Yi.has(e)?Yi.delete(e):e.removeAttribute(s)),i||e.removeAttribute(o)})),Ki-=1,Ki||(Wi=new WeakMap,Wi=new WeakMap,Yi=new WeakMap,Gi={})}};
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class er{constructor(e,t){this.host=e,this.callback="function"==typeof t?t:()=>e}showModal(){const e=this.callback();this.__showOthers=((e,t=document.body,o="data-aria-hidden")=>{const s=Array.from(Array.isArray(e)?e:[e]);return t&&s.push(...Array.from(t.querySelectorAll("[aria-live]"))),Qi(s,t,o,"aria-hidden")})(e)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tr{saveFocus(e){this.focusNode=e||Zs()}restoreFocus(){const e=this.focusNode;e&&(Zs()===document.body?setTimeout((()=>e.focus())):e.focus(),this.focusNode=null)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const or=[];class sr{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return function(e){const t=[];return ti(e,t)?Qs(t):t}(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(ei).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,0===this.__focusableElements.length)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");or.push(this),-1===this.__focusedElementIndex&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,or.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(or).pop()&&"Tab"===e.key){e.preventDefault();const t=e.shiftKey;this.__focusNextElement(t)}}__focusNextElement(e=!1){const t=this.__focusableElements,o=e?-1:1,s=this.__focusedElementIndex,i=t[(t.length+s+o)%t.length];i.focus(),"input"===i.localName&&i.select()}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ir=e=>class extends(xi(e)){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new er(this),this.__focusTrapController=new sr(this),this.__focusRestorationController=new tr}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=Zs();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let t=e;const o=e.ownerDocument;for(;t&&t!==o&&t!==this;)t=t.parentNode||t.host;return t===this}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class rr extends(ir(ss(cs(So)))){static get template(){return Io`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_oldOwner:Element,_oldModel:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}static get __attachedInstances(){return Array.from(document.body.children).filter((e=>e instanceof rr&&!e.hasAttribute("closing"))).sort(((e,t)=>e.__zIndex-t.__zIndex||0))}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),ci&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}get _last(){return this===rr.__attachedInstances.pop()}ready(){super.ready(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{})),ji(this)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,o=document.documentElement.clientHeight;t&&o>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",o-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._shouldCloseOnOutsideClick(e))return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&(!this.modeless||e.composedPath().includes(this.$.overlay))&&"Escape"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_openedChanged(e,t){var o,s,i;e?(this._saveFocus(),this._animatedOpening(),o=this,s=()=>{this._trapFocus();const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)},Bi||Ui(),Hi.push([o,s,i]),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):t&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),t=e.getPropertyValue("animation-name");return!("none"===e.getPropertyValue("display"))&&t&&"none"!==t}_enqueueAnimation(e,t){const o=`__${e}Handler`,s=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",s),delete this[o])};this[o]=s,this.addEventListener("animationend",s)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",(()=>{this._finishOpening()})):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",(()=>{this._finishClosing()})):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),rr.__attachedInstances.forEach((e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=rr.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_rendererOrDataChanged(e,t,o,s){const i=this._oldOwner!==t||this._oldModel!==o;this._oldModel=o,this._oldOwner=t;const r=this._oldRenderer!==e;this._oldRenderer=e;const n=this._oldOpened!==s;this._oldOpened=s,r&&(this.innerHTML="",delete this._$litPart$),s&&e&&(r||n||i)&&this.requestContentUpdate()}bringToFront(){let e="";const t=rr.__attachedInstances.filter((e=>e!==this)).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(rr.is,rr);
/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const nr=r`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ar=r`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;Xo("",ar,{moduleId:"lumo-menu-overlay-core"});Xo("",[Fi,ar,r`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`],{moduleId:"lumo-menu-overlay"});Xo("vaadin-combo-box-overlay",[Fi,ar,r`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,nr,r`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`,r`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});Xo("vaadin-combo-box",[_s,r`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`],{moduleId:"lumo-combo-box"});
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const lr=e=>class extends e{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,t,o){void 0!==o&&void 0!==t&&(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class dr extends(lr(ss(cs(So)))){static get template(){return Io`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}customElements.define(dr.is,dr);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const cr={start:"top",end:"bottom"},hr={start:"left",end:"right"},ur=new ResizeObserver((e=>{setTimeout((()=>{e.forEach((e=>{e.target.__overlay&&e.target.__overlay._updatePosition()}))}))})),pr=e=>class extends e{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function(e){const t=[];for(;e;){if(e.nodeType===Node.DOCUMENT_NODE){t.push(e);break}e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE?e=e.assignedSlot?e.assignedSlot:e.parentNode:(t.push(e),e=e.host)}return t}(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach((e=>{e.addEventListener("scroll",this.__onScroll,!0)}))}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach((e=>{e.removeEventListener("scroll",this.__onScroll,!0)})),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,ur.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,ur.observe(t))),e){const e=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach((t=>{this.__margins[t]=parseInt(e[t],10)}))),this.setAttribute("dir",e.direction),this._updatePosition(),requestAnimationFrame((()=>this._updatePosition()))}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const o=this.__isRTL,s=this.__shouldAlignStartHorizontally(e,o),i=!o&&s||o&&!s;this.style.alignItems=i?"flex-start":"flex-end";const r=this.getBoundingClientRect(),n=this.__calculatePositionInOneDimension(e,r,this.noVerticalOverlap,cr,this,t),a=this.__calculatePositionInOneDimension(e,r,this.noHorizontalOverlap,hr,this,s);Object.assign(this.style,n,a),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!i),this.toggleAttribute("start-aligned",i)}__shouldAlignStartHorizontally(e,t){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const s=Math.min(window.innerWidth,document.documentElement.clientWidth),i=!t&&"start"===this.horizontalAlign||t&&"end"===this.horizontalAlign;return this.__shouldAlignStart(e,o,s,this.__margins,i,this.noHorizontalOverlap,hr)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),s="top"===this.verticalAlign;return this.__shouldAlignStart(e,t,o,this.__margins,s,this.noVerticalOverlap,cr)}__shouldAlignStart(e,t,o,s,i,r,n){const a=o-e[r?n.end:n.start]-s[n.end],l=e[r?n.start:n.end]-s[n.start],d=i?a:l;return i===(d>(i?l:a)||d>t)}__adjustBottomProperty(e,t,o){let s;if(e===t.end){if(t.end===cr.end){const e=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>e&&this.__oldViewportHeight){s=o-(this.__oldViewportHeight-e)}this.__oldViewportHeight=e}if(t.end===hr.end){const e=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>e&&this.__oldViewportWidth){s=o-(this.__oldViewportWidth-e)}this.__oldViewportWidth=e}}return s}__calculatePositionInOneDimension(e,t,o,s,i,r){const n=r?s.start:s.end,a=r?s.end:s.start,l=parseFloat(i.style[n]||getComputedStyle(i)[n]),d=this.__adjustBottomProperty(n,s,l),c=t[r?s.start:s.end]-e[o===r?s.end:s.start];return{[n]:d?`${d}px`:`${l+c*(r?-1:1)}px`,[a]:""}}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,mr=e=>class extends(pr(e)){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,t=e&&e.getAttribute("dir");t&&this.setAttribute("dir",t)}_shouldCloseOnOutsideClick(e){const t=e.composedPath();return!t.includes(this.positionTarget)&&!t.includes(this)}_setOverlayWidth(e,t){if(e&&t){const t=this.localName;this.style.setProperty(`--_${t}-default-width`,`${e.clientWidth}px`);const o=getComputedStyle(this._comboBox).getPropertyValue(`--${t}-width`);""===o?this.style.removeProperty(`--${t}-width`):this.style.setProperty(`--${t}-width`,o),this._updatePosition()}}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;let _r;Xo("vaadin-combo-box-overlay",r`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});class fr extends(mr(rr)){static get is(){return"vaadin-combo-box-overlay"}static get template(){if(!_r){_r=super.template.cloneNode(!0);const e=_r.content.querySelector('[part~="overlay"]');e.removeAttribute("tabindex");const t=document.createElement("div");t.setAttribute("part","loader"),e.insertBefore(t,e.firstElementChild)}return _r}}customElements.define(fr.is,fr);
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
const vr=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),gr=vr&&vr[1]>=8,br={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const e=this._virtualCount;return Math.max(0,e-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(e){this._physicalCountVal=e},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems(((e,o)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return o}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems(((o,s)=>{t<this._scrollBottom&&(e=s),t+=this._getPhysicalSizeIncrement(o)})),this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const o=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart+=e,this._physicalStart+=e,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const e=this._getReusables(o);o?(this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length):(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length),this._update(e.indexes,o?null:e.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Cs)}},_getReusables(e){let t,o,s;const i=[],r=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,h=this._scrollPosition,u=this._scrollBottom;for(e?(t=this._physicalStart,o=h-d):(t=this._physicalEnd,o=c-u);s=this._getPhysicalSizeIncrement(t),o-=s,!(i.length>=l||o<=r);)if(e){if(a+i.length+1>=this._virtualCount)break;if(d+s>=h-this._scrollOffset)break;i.push(t),d+=s,t=(t+1)%l}else{if(n-i.length<=0)break;if(d+this._physicalSize-s<=u)break;i.push(t),d-=s,t=0===t?l-1:t-1}return{indexes:i,physicalTop:d-this._scrollOffset}},_update(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(e){const t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart)-this._physicalCount;let o=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let e=0;e<t;e++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-e)/t,o=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===o||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,o)),ws):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,o),Cs))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,xs))},_iterateItems(e,t){let o,s,i,r;if(2===arguments.length&&t){for(r=0;r<t.length;r++)if(o=t[r],s=this._computeVidx(o),null!=(i=e.call(this,o,s)))return i}else{for(o=this._physicalStart,s=this._virtualStart;o<this._physicalCount;o++,s++)if(null!=(i=e.call(this,o,s)))return i;for(o=0;o<this._physicalStart;o++,s++)if(null!=(i=e.call(this,o,s)))return i}},_computeVidx(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_positionItems(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((t=>{this.translate3d(0,`${e}px`,0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement(e){return this._physicalSizes[e]},_adjustScrollPosition(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop-=e;const t=this._scrollPosition;!gr&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize(e){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(e||0===this._scrollHeight||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(e){if("number"!=typeof e||e<0||e>this.items.length-1)return;if(Ss(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,o=this._virtualStart,s=0;const i=this._hiddenContentSize;for(;o<e&&s<=i;)s+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,o+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),xs)},_isIndexRendered(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:(e,t,o)=>Math.min(o,Math.max(t,e)),_debounce(e,t,o){this._debouncers||(this._debouncers={}),this._debouncers[e]=Es.debounce(this._debouncers[e],o,t.bind(this)),Is(this._debouncers[e])}},yr=1e3;class xr{constructor({createElements:e,updateElement:t,scrollTarget:o,scrollContainer:s,elementsContainer:i,reorderElements:r}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=t,this.scrollTarget=o,this.scrollContainer=s,this.elementsContainer=i||s,this.reorderElements=r,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(e=>this.__onWheel(e))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>{this.__mouseDown=!0})),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(e){if("number"!=typeof e||isNaN(e)||0===this.size||!this.scrollTarget.offsetHeight)return;e=this._clamp(e,0,this.size-1);const t=this.__getVisibleElements().length;let o=Math.floor(e/this.size*this._virtualCount);this._virtualCount-o<t?(o=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):o<t?e<yr?(o=e,this._vidxOffset=0):(o=yr,this._vidxOffset=e-o):this._vidxOffset=e-o,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(o),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler()}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),Ss(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(e=0,t=this.size-1){const o=[];this.__getVisibleElements().forEach((s=>{s.__virtualIndex>=e&&s.__virtualIndex<=t&&(this.__updateElement(s,s.__virtualIndex,!0),o.push(s))})),this.__afterElementsUpdated(o)}_updateMetrics(e){Ss();let t=0,o=0;const s=this._physicalAverageCount,i=this._physicalAverage;this._iterateItems(((e,s)=>{o+=this._physicalSizes[e],this._physicalSizes[e]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[e])),t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this._physicalSize=this._physicalSize+t-o,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((i*s+t)/this._physicalAverageCount))}__getBorderBoxHeight(e){const t=getComputedStyle(e),o=parseFloat(t.height)||0;if("border-box"===t.boxSizing)return o;return o+(parseFloat(t.paddingBottom)||0)+(parseFloat(t.paddingTop)||0)+(parseFloat(t.borderBottomWidth)||0)+(parseFloat(t.borderTopWidth)||0)}__updateElement(e,t,o){e.style.paddingTop&&(e.style.paddingTop=""),this.__preventElementUpdates||e.__lastUpdatedIndex===t&&!o||(this.updateElement(e,t),e.__lastUpdatedIndex=t)}__afterElementsUpdated(e){e.forEach((e=>{const t=e.offsetHeight;if(0===t)e.style.paddingTop=`${this.__placeholderHeight}px`,this.__placeholderClearDebouncer=Es.debounce(this.__placeholderClearDebouncer,xs,(()=>this._resizeHandler()));else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const e=this.__elementHeightQueue.filter((e=>void 0!==e));this.__placeholderHeight=Math.round(e.reduce(((e,t)=>e+t),0)/e.length)}}))}__getIndexScrollOffset(e){const t=this.__getVisibleElements().find((t=>t.__virtualIndex===e));return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(e){e!==this.size&&(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__size=e,this._physicalItems?this._virtualCount=this.items.length:(this._itemsChanged({path:"items"}),this.__preventElementUpdates=!0,Ss(),this.__preventElementUpdates=!1),this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this._resizeHandler(),Ss())}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const t=this.createElements(e),o=document.createDocumentFragment();return t.forEach((e=>{e.style.position="absolute",o.appendChild(e),this.__resizeObserver.observe(e)})),this.elementsContainer.appendChild(o),t}_assignModels(e){const t=[];this._iterateItems(((e,o)=>{const s=this._physicalItems[e];s.hidden=o>=this.size,s.hidden?delete s.__lastUpdatedIndex:(s.__virtualIndex=o+(this._vidxOffset||0),this.__updateElement(s,s.__virtualIndex),t.push(s))}),e),this.__afterElementsUpdated(t)}_isClientFull(){return setTimeout((()=>{this.__clientFull=!0})),this.__clientFull||super._isClientFull()}translate3d(e,t,o,s){s.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){if(0===this.scrollTarget.offsetHeight)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const e=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),0!==this._physicalCount){const t=e>=0,o=this._getReusables(!t);o.indexes.length&&(this._physicalTop=o.physicalTop,t?(this._virtualStart-=o.indexes.length,this._physicalStart-=o.indexes.length):(this._virtualStart+=o.indexes.length,this._physicalStart+=o.indexes.length),this._resizeHandler())}e&&(this.__fixInvalidItemPositioningDebouncer=Es.debounce(this.__fixInvalidItemPositioningDebouncer,ys.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),(()=>this.__fixInvalidItemPositioning()))),this.reorderElements&&(this.__scrollReorderDebouncer=Es.debounce(this.__scrollReorderDebouncer,ys.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop,0===this._scrollTop&&0!==this.firstVisibleIndex&&Math.abs(e)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const e=this._physicalTop>this._scrollTop,t=this._physicalBottom<this._scrollBottom,o=0===this.adjustedFirstVisibleIndex,s=this.adjustedLastVisibleIndex===this.size-1;if(e&&!o||t&&!s){const e=t,o=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(e?-1:1),this._scrollHandler(),this._ratio=o}}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame)return this._deltaYAcc+=t,void e.preventDefault();t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=Es.debounce(this.__debouncerWheelAnimationFrame,xs,(()=>{this._wheelAnimationFrame=!1}));const o=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Es.debounce(this._debouncerIgnoreNewWheel,ys.after(this.timeouts.IGNORE_WHEEL),(()=>{this._ignoreNewWheel=!1}))):this._hasResidualMomentum&&o<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():o>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=o}_hasScrolledAncestor(e,t,o){return e!==this.scrollTarget&&e!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(e,t,o)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,o):void 0))}_canScroll(e,t,o){return o>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||o<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_increasePoolIfNeeded(e){if(this._physicalCount>2&&e){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(e,Math.min(100,t)))}else super._increasePoolIfNeeded(e)}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((e=>!e.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),o=t.find((e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement)))||t[0];if(!o)return;const s=o.__virtualIndex-e,i=t.indexOf(o)-s;if(i>0)for(let e=0;e<i;e++)this.elementsContainer.appendChild(t[e]);else if(i<0)for(let e=t.length+i;e<t.length;e++)this.elementsContainer.insertBefore(t[e],t[0]);if(hi){const{transform:e}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>{this.scrollTarget.style.transform=e}))}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(e)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),t=e*this.size;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset,t=yr,o=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const s=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=s,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<s&&(this._vidxOffset+=Math.min(s-this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(xr.prototype,br);class wr{constructor(e){this.__adapter=new xr(e)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(e){this.__adapter.size=e}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,t=this.size-1){this.__adapter.update(e,t)}flush(){this.__adapter.flush()}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cr=class{toString(){return""}},Ar=e=>class extends e{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map((e=>parseInt(e,10))).reduce(((e,t)=>e+t))}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${qs()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",(e=>e.stopPropagation())),this.__patchWheelOverScrolling(),this.__virtualizer=new wr({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let o=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),o=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(o=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,o));const s=[...this.children].find((e=>!e.hidden&&e.index===this.__virtualizer.lastVisibleIndex));if(!s||e!==s.index)return;const i=s.getBoundingClientRect(),r=this.getBoundingClientRect(),n=i.bottom-r.bottom+this._viewportTotalPaddingBottom;n>0&&(this.scrollTop+=n)}_isItemSelected(e,t,o){return!(e instanceof Cr)&&(o&&void 0!==e&&void 0!==t?this.get(o,e)===this.get(o,t):e===t)}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,t){e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map((()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e}))}_updateElement(e,t){const o=this.items[t],s=this.focusedIndex,i=this._isItemSelected(o,this.selectedItem,this.itemIdPath);e.setProperties({item:o,index:t,label:this.getItemLabel(o),selected:i,renderer:this.renderer,focused:!this.loading&&s===t}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",void 0!==t&&"option"),e.setAttribute("aria-selected",i.toString()),e.setAttribute("aria-posinset",t+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),o instanceof Cr&&this.__requestItemByIndex(t)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",(e=>{const t=0===this.scrollTop,o=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||o&&e.deltaY>0)&&e.preventDefault()}))}__requestItemByIndex(e){requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))}))}_visibleItemsCount(){this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex);return this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Er extends(Ar(So)){static get is(){return"vaadin-combo-box-scroller"}static get template(){return Io`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}customElements.define(Er.is,Er);
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ir=e=>class extends(ki(e)){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Pr=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Cr},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",(e=>{const t=e.detail.index,o=e.detail.currentScrollerPos,s=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,s,o)&&void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}}))}_dataProviderFilterChanged(e){void 0!==this.__previousDataProviderFilter||""!==e?this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache()):this.__previousDataProviderFilter=e}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,o){return 0!==o&&e>=o-t&&e<=o+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof Cr:void 0===this.size}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const t={page:e,pageSize:this.pageSize,filter:this.filter},o=(s,i)=>{if(this._pendingRequests[e]!==o)return;const r=this.filteredItems?[...this.filteredItems]:[];r.splice(t.page*t.pageSize,s.length,...s),this.filteredItems=r,this.opened||this._isInputFocused()||this._commitValue(),void 0!==i&&(this.size=i),delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1)};this._pendingRequests[e]=o,this.loading=!0,this.dataProvider(t,o)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let o=0;o<e;o++)t[o]=void 0!==t[o]?t[o]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.dataProvider=t})),this.clearCache()}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this.__getItemIndexByValue(this.filteredItems,t);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize);Object.entries(this._pendingRequests).forEach((([o,s])=>{parseInt(o)>=t&&s([],e)}))}}}
/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Sr=e=>class extends e{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,t){if(!t)return;if(void 0===e)return;const{classList:o}=t;if(this.__initialClasses||(this.__initialClasses=new Set(o)),Array.isArray(this.__previousClasses)){const e=this.__previousClasses.filter((e=>!this.__initialClasses.has(e)));e.length>0&&o.remove(...e)}const s="string"==typeof e?e.split(" "):[];s.length>0&&o.add(...s),this.__previousClasses=s}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class Tr{constructor(e){this.host=e,e.addEventListener("opened-changed",(()=>{e.opened||this.__setVirtualKeyboardEnabled(!1)})),e.addEventListener("blur",(()=>this.__setVirtualKeyboardEnabled(!0))),e.addEventListener("touchstart",(()=>this.__setVirtualKeyboardEnabled(!0)))}__setVirtualKeyboardEnabled(e){this.host.inputElement&&(this.host.inputElement.inputMode=e?"":"none")}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function kr(e){return null!=e}function Or(e,t){return e.findIndex((e=>!(e instanceof Cr)&&t(e)))}const Nr=e=>class extends(Sr(xi(ni(pi(si(e)))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const t=this._nativeInput;t&&(t.autocomplete="off",t.autocapitalize="off",t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-expanded",!!this.opened),t.setAttribute("spellcheck","false"),t.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame((()=>{this._overlayElement.bringToFront()}))};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),ji(this),this.addController(new Tr(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach((e=>{e.requestContentUpdate()})))}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),void 0!==t.filter&&this._filterChanged(t.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("opened-changed",(e=>{this._overlayOpened=e.detail.value})),this._overlayElement=e}_initScroller(e){const t=`${this._tagNamePrefix}-scroller`,o=this._overlayElement;o.renderer=e=>{e.firstChild||e.appendChild(document.createElement(t))},o.requestContentUpdate();const s=o.querySelector(t);s.owner=e||this,s.getItemLabel=this._getItemLabel.bind(this),s.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=s}_updateScroller(e,t,o,s,i,r,n,a,l){e&&(o&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:o?t:[],opened:o,loading:s,selectedItem:i,itemIdPath:r,focusedIndex:n,renderer:a,theme:l}))}_openedOrItemsChanged(e,t,o){this._overlayOpened=!(!e||!(o||t&&t.length))}_overlayOpenedChanged(e,t){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):t&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,t){void 0!==t&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&ei(this.inputElement)}_updateActiveDescendant(e){const t=this._nativeInput;if(!t)return;const o=this._getItemElements().find((t=>t.index===e));o?t.setAttribute("aria-activedescendant",o.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(void 0===t)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),this._isInputFocused()||ui||this.inputElement&&this.inputElement.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const o=this._nativeInput;o&&(o.setAttribute("aria-expanded",!!e),e?o.setAttribute("aria-controls",this._scroller.id):o.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),"Tab"===e.key?this._overlayElement.restoreFocusOnClose=!1:"ArrowDown"===e.key?(this._onArrowDown(),e.preventDefault()):"ArrowUp"===e.key&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let t=e&&this.itemLabelPath?this.get(this.itemLabelPath,e):void 0;return null==t&&(t=e?e.toString():""),t}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this.filteredItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this.filteredItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,t){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){const t=this._focusedIndex<0&&""!==this._inputElementValue&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&t)return e.preventDefault(),void e.stopPropagation();this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._onClearAction()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("click",(()=>{ui&&!this._isInputFocused()&&document.activeElement.blur()})))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this.filteredItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[...this.filteredItems||[],this.selectedItem],t=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!t){const e=this._inputElementValue;this._lastCustomValue=e;const t=new CustomEvent("custom-value-set",{detail:e,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(t),t.defaultPrevented||(this.value=e)}else this.allowCustomValue||this.opened||!t?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(t)}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(e){const t=this._inputElementValue,o={};this.filter===t?this._filterChanged(this.filter):o.filter=t,this.opened||this._isClearButton(e)||this.autoOpenDisabled||(o.opened=!0),this.setProperties(o)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,t){""===e&&void 0===t||(kr(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.items=t})),e?this.filteredItems=e.slice(0):t&&(this.filteredItems=null)}_filteredItemsChanged(e,t){const o=t?t[this._focusedIndex]:null,s=this.__getItemIndexByValue(e,this.value);(null===this.selectedItem||void 0===this.selectedItem)&&s>=0&&(this.selectedItem=e[s]);const i=this.__getItemIndexByValue(e,this._getItemValue(o));this._focusedIndex=i>-1?i:this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,t){if(!e)return e;const o=e.filter((e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)));return o}_selectItemForValue(e){const t=this.__getItemIndexByValue(this.filteredItems,e),o=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?this.selectedItem=void 0:this.selectedItem=null,null===this.selectedItem&&null===o&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,t){return e&&kr(t)?Or(e,(e=>this._getItemValue(e)===t)):-1}__getItemIndexByLabel(e,t){return e&&t?Or(e,(e=>this._getItemLabel(e).toString().toLowerCase()===t.toString().toLowerCase())):-1}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof Cr||this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_onFocusout(e){if(!e.relatedTarget||e.relatedTarget.localName!==`${this._tagNamePrefix}-item`)if(e.relatedTarget!==this._overlayElement){if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue)return void delete this._lastCustomValue;this._closeOrCommit()}}else e.composedPath()[0].focus()}_onTouchend(e){this.clearElement&&e.composedPath()[0]===this.clearElement&&(e.preventDefault(),this._onClearAction())}}
/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;Xo("vaadin-combo-box",Gs,{moduleId:"vaadin-combo-box-styles"});class zr extends(Pr(Nr(Ir(zi(ss(Os(So))))))){static get is(){return"vaadin-combo-box"}static get template(){return Io`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ks(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}))),this.addController(new Mi(this.inputElement,this._labelController)),this._tooltipController=new Ws(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow((e=>!e.opened)),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_shouldRemoveFocus(e){return e.relatedTarget!==this._overlayElement||(e.composedPath()[0].focus(),!1)}_onClearButtonClick(e){e.stopPropagation(),super._onClearButtonClick(e)}_onHostClick(e){const t=e.composedPath();(t.includes(this._labelNode)||t.includes(this._positionTarget))&&super._onHostClick(e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function Lr(e){const t=customElements.get(e.is);if(t){const o=t.version;o&&e.version&&o===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}else customElements.define(e.is,e)}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */customElements.define(zr.is,zr);class Mr extends HTMLElement{static get is(){return"vaadin-lumo-styles"}static get version(){return"24.2.3"}}Lr(Mr);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Dr=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"theme"===e&&this._set_theme(o)}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Vr=[];function Rr(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function Fr(e,t,o={}){var s;e&&(s=e,Rr(customElements.get(s))&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),t=function(e=[]){return[e].flat(1/0).filter((e=>e instanceof i||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,o):Vr.push({themeFor:e,styles:t,include:o.include,moduleId:o.moduleId})}function Br(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Vr}function $r(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function Hr(e){const t=[];return e.include&&[].concat(e.include).forEach((e=>{const o=Br().find((t=>t.moduleId===e));o?t.push(...Hr(o),...o.styles):console.warn(`Included moduleId ${e} not found in style registry`)}),e.styles),t}function Ur(e){const t=`${e}-default-theme`,o=Br().filter((o=>o.moduleId!==t&&function(e,t){return(e||"").split(" ").some((e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t)))}(o.themeFor,e))).map((e=>({...e,styles:[...Hr(e),...e.styles],includePriority:$r(e.moduleId)}))).sort(((e,t)=>t.includePriority-e.includePriority));return o.length>0?o:Br().filter((e=>e.moduleId===t))}const qr=e=>class extends(Dr(e)){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;e&&!Rr(this)&&function(e,t){const o=document.createElement("style");o.innerHTML=e.map((e=>e.cssText)).join("\n"),t.content.appendChild(o)}(this.getStylesForThis(),e)}static finalizeStyles(e){const t=this.getStylesForThis();return e?[...super.finalizeStyles(e),...t]:t}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),t=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...Ur(this.is)];const o=this.__themes.flatMap((e=>e.styles));return o.filter(((e,t)=>t===o.lastIndexOf(e)))}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,jr=(e,...t)=>{((e,...t)=>{const o=document.createElement("style");o.id=e,o.textContent=t.map((e=>e.toString())).join("\n").replace(":host","html"),document.head.insertAdjacentElement("afterbegin",o)})(`lumo-${e}`,t)};jr("color-props",r`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`);Fr("",r`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`,{moduleId:"lumo-color"});jr("font-icons",r`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`);jr("sizing-props",r`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`);jr("spacing-props",r`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Wr=r`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;r`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
  }
`,jr("style-props",Wr);
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Yr=r`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;Fr("",r`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"}),jr("typography-props",Yr),Fr("vaadin-checkbox",r`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let Gr=0,Kr=0;const Jr=[];let Zr=!1;const Xr={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Qr={run(e){Zr||(Zr=!0,queueMicrotask((()=>function(){Zr=!1;const e=Jr.length;for(let t=0;t<e;t++){const e=Jr[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}Jr.splice(0,e),Kr+=e}()))),Jr.push(e);const t=Gr;return Gr+=1,t},cancel(e){const t=e-Kr;if(t>=0){if(!Jr[t])throw new Error(`invalid async handle: ${e}`);Jr[t]=null}}},en=new Set;class tn{static debounce(e,t,o){return e instanceof tn?e._cancelAsync():e=new tn,e.setConfig(t,o),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,en.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),en.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const on=[];function sn(e,t,o=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=o&&e.removeAttribute("dir")}function rn(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const e=rn();on.forEach((t=>{sn(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const nn=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>""===e?null:e}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),sn(this,rn(),null))}attributeChangedCallback(e,t,o){if(super.attributeChangedCallback(e,t,o),"dir"!==e)return;const s=rn(),i=o===s&&-1===on.indexOf(this),r=!o&&t&&-1===on.indexOf(this),n=o!==s&&t===s;i||r?(this.__subscribe(),sn(this,s,o)):n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=on.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,t,o){("dir"!==o||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,o)}_attributeToProperty(e,t,o){"dir"!==e||t?super._attributeToProperty(e,t,o):this.dir=""}__subscribe(){on.includes(this)||on.push(this)}__unsubscribe(){on.includes(this)&&on.splice(on.indexOf(this),1)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;let an;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Lo()};const ln=new Set,dn=e=>class extends(nn(e)){static get version(){return"24.2.3"}static finalize(){super.finalize();const{is:e}=this;var t;e&&!ln.has(e)&&(window.Vaadin.registrations.push(this),ln.add(e),window.Vaadin.developmentModeCallback&&(an=tn.debounce(an,Xr,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),t=an,en.add(t)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class cn{constructor(e,t){this.slot=e,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask((()=>{this.flush()})))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const e=this.slot.assignedNodes({flatten:!0});let t=[];const o=[],s=[];e.length&&(t=e.filter((e=>!this._storedNodes.includes(e)))),this._storedNodes.length&&this._storedNodes.forEach(((t,i)=>{const r=e.indexOf(t);-1===r?o.push(t):r!==i&&s.push(t)})),(t.length||o.length||s.length)&&this.callback({addedNodes:t,movedNodes:s,removedNodes:o}),this._storedNodes=e}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let hn=0;
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class un extends EventTarget{static generateId(e,t){return`${t||"default"}-${e.localName}-${hn++}`}constructor(e,t,o,s={}){super();const{initializer:i,multiple:r,observe:n,useUniqueId:a}=s;this.host=e,this.slotName=t,this.tagName=o,this.observe="boolean"!=typeof n||n,this.multiple="boolean"==typeof r&&r,this.slotInitializer=i,r&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(e,t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(0===e.length){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=e,e.forEach((e=>{this.initAddedNode(e)}))}attachDefaultNode(){const{host:e,slotName:t,tagName:o}=this;let s=this.defaultNode;return!s&&o&&(s=document.createElement(o),s instanceof Element&&(""!==t&&s.setAttribute("slot",t),this.node=s,this.defaultNode=s)),s&&e.appendChild(s),s}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter((t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&""===e))}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:t}=this;t&&t(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,t=""===e?"slot:not([name])":`slot[name=${e}]`,o=this.host.shadowRoot.querySelector(t);this.__slotObserver=new cn(o,(({addedNodes:e,removedNodes:t})=>{const o=this.multiple?this.nodes:[this.node],s=e.filter((e=>!function(e){return e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim()}(e)&&!o.includes(e)));t.length&&(this.nodes=o.filter((e=>!t.includes(e))),t.forEach((e=>{this.teardownNode(e)}))),s&&s.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...o,...s].filter((e=>e!==this.defaultNode)),s.forEach((e=>{this.initAddedNode(e)}))):(this.node&&this.node.remove(),this.node=s[0],this.initAddedNode(this.node)))}))}}
/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pn extends un{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,void 0!==this.ariaTarget&&(e.ariaTarget=this.ariaTarget),void 0!==this.context&&(e.context=this.context),void 0!==this.manual&&(e.manual=this.manual),void 0!==this.opened&&(e.opened=this.opened),void 0!==this.position&&(e._position=this.position),void 0!==this.shouldShow&&(e.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(e){this.ariaTarget=e;const t=this.node;t&&(t.ariaTarget=e)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mn=!1,_n=e=>e,fn="string"==typeof document.head.style.touchAction,vn="__polymerGestures",gn="__polymerGesturesHandled",bn="__polymerGesturesTouchAction",yn=["mousedown","mousemove","mouseup","click"],xn=[0,1,4,2],wn=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Cn(e){return yn.indexOf(e)>-1}let An=!1;function En(e){if(!Cn(e)&&"touchend"!==e)return fn&&An&&mn?{passive:!0}:void 0}!function(){try{const e=Object.defineProperty({},"passive",{get(){An=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();const In=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Pn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Sn(e){const t=e.type;if(!Cn(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!wn&&(t=xn[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}const Tn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function kn(e,t,o){e.movefn=t,e.upfn=o,document.addEventListener("mousemove",t),document.addEventListener("mouseup",o)}function On(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const Nn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],zn={},Ln=[];function Mn(e){const t=Nn(e);return t.length>0?t[0]:e.target}function Dn(e){const t=e.type,o=e.currentTarget[vn];if(!o)return;const s=o[t];if(!s)return;if(!e[gn]&&(e[gn]={},t.startsWith("touch"))){const o=e.changedTouches[0];if("touchstart"===t&&1===e.touches.length&&(Tn.touch.id=o.identifier),Tn.touch.id!==o.identifier)return;fn||"touchstart"!==t&&"touchmove"!==t||function(e){const t=e.changedTouches[0],o=e.type;if("touchstart"===o)Tn.touch.x=t.clientX,Tn.touch.y=t.clientY,Tn.touch.scrollDecided=!1;else if("touchmove"===o){if(Tn.touch.scrollDecided)return;Tn.touch.scrollDecided=!0;const o=function(e){let t="auto";const o=Nn(e);for(let e,s=0;s<o.length;s++)if(e=o[s],e[bn]){t=e[bn];break}return t}(e);let s=!1;const i=Math.abs(Tn.touch.x-t.clientX),r=Math.abs(Tn.touch.y-t.clientY);e.cancelable&&("none"===o?s=!0:"pan-x"===o?s=r>i:"pan-y"===o&&(s=i>r)),s?e.preventDefault():Bn("track")}}(e)}const i=e[gn];if(!i.skip){for(let t,o=0;o<Ln.length;o++)t=Ln[o],s[t.name]&&!i[t.name]&&t.flow&&t.flow.start.indexOf(e.type)>-1&&t.reset&&t.reset();for(let o,r=0;r<Ln.length;r++)o=Ln[r],s[o.name]&&!i[o.name]&&(i[o.name]=!0,o[t](e))}}function Vn(e,t,o){return!!zn[t]&&(function(e,t,o){const s=zn[t],i=s.deps,r=s.name;let n=e[vn];n||(e[vn]=n={});for(let t,o,s=0;s<i.length;s++)t=i[s],In&&Cn(t)&&"click"!==t||(o=n[t],o||(n[t]=o={_count:0}),0===o._count&&e.addEventListener(t,Dn,En(t)),o[r]=(o[r]||0)+1,o._count=(o._count||0)+1);e.addEventListener(t,o),s.touchAction&&function(e,t){fn&&e instanceof HTMLElement&&Qr.run((()=>{e.style.touchAction=t}));e[bn]=t}(e,s.touchAction)}(e,t,o),!0)}function Rn(e){Ln.push(e),e.emits.forEach((t=>{zn[t]=e}))}function Fn(e,t,o){const s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=o,_n(e).dispatchEvent(s),s.defaultPrevented){const e=o.preventer||o.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Bn(e){const t=function(e){for(let t,o=0;o<Ln.length;o++){t=Ln[o];for(let o,s=0;s<t.emits.length;s++)if(o=t.emits[s],o===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function $n(e,t,o,s){t&&Fn(t,e,{x:o.clientX,y:o.clientY,sourceEvent:o,preventer:s,prevent:e=>Bn(e)})}function Hn(e,t,o){if(e.prevent)return!1;if(e.started)return!0;const s=Math.abs(e.x-t),i=Math.abs(e.y-o);return s>=5||i>=5}function Un(e,t,o){if(!t)return;const s=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],r=i.x-e.x,n=i.y-e.y;let a,l=0;s&&(a=i.x-s.x,l=i.y-s.y),Fn(t,"track",{state:e.state,x:o.clientX,y:o.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:o,hover:()=>function(e,t){let o=document.elementFromPoint(e,t),s=o;for(;s&&s.shadowRoot&&!window.ShadyDOM;){const i=s;if(s=s.shadowRoot.elementFromPoint(e,t),i===s)break;s&&(o=s)}return o}(o.clientX,o.clientY)})}function qn(e,t,o){const s=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),r=Mn(o||t);!r||Pn[r.localName]&&r.hasAttribute("disabled")||(isNaN(s)||isNaN(i)||s<=25&&i<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;const t=Mn(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const o=t.getBoundingClientRect(),s=e.pageX,i=e.pageY;return!(s>=o.left&&s<=o.right&&i>=o.top&&i<=o.bottom)}return!1}(t))&&(e.prevent||Fn(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:o}))}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Rn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){On(this.info)},mousedown(e){if(!Sn(e))return;const t=Mn(e),o=this;kn(this.info,(e=>{Sn(e)||($n("up",t,e),On(o.info))}),(e=>{Sn(e)&&$n("up",t,e),On(o.info)})),$n("down",t,e)},touchstart(e){$n("down",Mn(e),e.changedTouches[0],e)},touchend(e){$n("up",Mn(e),e.changedTouches[0],e)}}),Rn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,On(this.info)},mousedown(e){if(!Sn(e))return;const t=Mn(e),o=this,s=e=>{const s=e.clientX,i=e.clientY;Hn(o.info,s,i)&&(o.info.state=o.info.started?"mouseup"===e.type?"end":"track":"start","start"===o.info.state&&Bn("tap"),o.info.addMove({x:s,y:i}),Sn(e)||(o.info.state="end",On(o.info)),t&&Un(o.info,t,e),o.info.started=!0)};kn(this.info,s,(e=>{o.info.started&&s(e),On(o.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=Mn(e),o=e.changedTouches[0],s=o.clientX,i=o.clientY;Hn(this.info,s,i)&&("start"===this.info.state&&Bn("tap"),this.info.addMove({x:s,y:i}),Un(this.info,t,o),this.info.state="track",this.info.started=!0)},touchend(e){const t=Mn(e),o=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:o.clientX,y:o.clientY}),Un(this.info,t,o))}}),Rn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){Sn(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){Sn(e)&&qn(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){qn(this.info,e.changedTouches[0],e)}});const jn=Ve((e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),Wn=Ve((e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",(e=>{this._onKeyDown(e)})),this.addEventListener("keyup",(e=>{this._onKeyUp(e)}))}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e)}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}})),Yn=e=>class extends(jn(Wn(e))){get _activeKeys(){return[" "]}ready(){super.ready(),Vn(this,"down",(e=>{this._shouldSetActive(e)&&this._setActive(!0)})),Vn(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",(e=>{this._activeKeys.includes(e.key)&&this._setActive(!1)}),{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Gn=!1;window.addEventListener("keydown",(()=>{Gn=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{Gn=!1}),{capture:!0});
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Kn=Ve((e=>class extends e{get _keyboardActive(){return Gn}ready(){this.addEventListener("focusin",(e=>{this._shouldSetFocus(e)&&this._setFocused(!0)})),this.addEventListener("focusout",(e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}})),Jn=e=>class extends(jn(e)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&-1!==e&&(this._lastTabIndex=e,this.tabindex=-1)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Zn=Ve((e=>class extends(Kn(Jn(e))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){void 0!==e&&this.focusElement&&(this.focusElement.tabIndex=e,-1!==e&&(this.tabindex=void 0)),this.disabled&&e&&(-1!==e&&(this._lastTabIndex=e),this.tabindex=void 0)}})),Xn=Ve((e=>class extends e{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((e=>{this._delegateAttribute(e,this[e])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((e=>{this._delegateProperty(e,this[e])}))}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach(((t,o)=>{this._delegateAttribute(t,e[o])}))}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach(((t,o)=>{this._delegateProperty(t,e[o])}))}_delegateAttribute(e,t){this.stateTarget&&("invalid"===e&&this._delegateAttribute("aria-invalid",!!t&&"true"),"boolean"==typeof t?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}})),Qn=Ve((e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=null!=e?e:"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_hasInputValueChanged(e,t){(e||t)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),""===e&&void 0===t||this.__userInput||this._forwardInputValue(e)}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0}})),ea=Ve((e=>class extends(Xn(jn(Qn(e)))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;var o;this._toggleChecked(t.checked),(o=t).getRootNode().activeElement!==o&&t.focus()}_toggleChecked(e){this.checked=e}}));
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class ta extends un{constructor(e,t){super(e,"input","input",{initializer:(e,o)=>{o.value&&(e.value=o.value),o.type&&e.setAttribute("type",o.type),e.id=this.defaultId,"function"==typeof t&&t(e)},useUniqueId:!0})}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oa=Ve((e=>"function"==typeof e.prototype.addController?e:class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((e=>{e.hostConnected&&e.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((e=>{e.hostDisconnected&&e.hostDisconnected()}))}addController(e){this.__controllers.add(e),void 0!==this.$&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}));
/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sa extends un{constructor(e,t,o,s={}){super(e,t,o,{...s,useUniqueId:!0})}initCustomNode(e){this.__updateNodeId(e),this.__notifyChange(e)}teardownNode(e){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const e=super.attachDefaultNode();return e&&this.__updateNodeId(e),e}restoreDefaultNode(){}updateDefaultNode(e){this.__notifyChange(e)}observeNode(e){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver((e=>{e.forEach((e=>{const t=e.target,o=t===this.node;"attributes"===e.type?o&&this.__updateNodeId(t):(o||t.parentElement===this.node)&&this.__notifyChange(this.node)}))})),this.__nodeObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(e){return!!e&&(e.nodeType===Node.ELEMENT_NODE&&(customElements.get(e.localName)||e.children.length>0)||e.textContent&&""!==e.textContent.trim())}__notifyChange(e){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(e),node:e}}))}__updateNodeId(e){const t=!this.nodes||e===this.nodes[0];e.nodeType!==Node.ELEMENT_NODE||this.multiple&&!t||e.id||(e.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ia extends sa{constructor(e){super(e,"label","label")}setLabel(e){this.label=e;this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:e}=this;if(e&&""!==e.trim()){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(e){e&&(e.textContent=this.label),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ra=Ve((e=>class extends(oa(e)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new ia(this),this._labelController.addEventListener("slot-content-changed",(e=>{this.toggleAttribute("has-label",e.detail.hasContent)}))}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}}));
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class na{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",(e=>{this.__initLabel(e.detail.node)})),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const aa=e=>class extends(ra(ea(Zn(Yn(e))))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new ta(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}))),this.addController(new na(this.inputElement,this._labelController))}_shouldSetActive(e){return"a"!==e.target.localName&&super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}}
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Fr("vaadin-checkbox",r`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`,{moduleId:"vaadin-checkbox-styles"});class la extends(aa(dn(qr(So)))){static get is(){return"vaadin-checkbox"}static get template(){return Io`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new pn(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}function da(e,t,o,s){var i,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r<3?i(n):r>3?i(t,o,n):i(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n}Lr(la),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ca=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:s}=t;return{kind:o,elements:s,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ha=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},ua=(e,t,o)=>{t.constructor.createProperty(o,e)};function pa(e){return(t,o)=>void 0!==o?ua(e,t,o):ha(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ma(e){return pa({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;null===(_a=window.HTMLSlotElement)||void 0===_a||_a.prototype.assignedElements;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class fa extends se{render(){return V`<span class="shadow"></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const va=r`:host{--_level:var(--md-elevation-level, 0);--_shadow-color:var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}.shadow,.shadow::after,.shadow::before,:host{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::after,.shadow::before{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0 calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0 var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0 calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ga=class extends fa{};ga.styles=[va],ga=da([ca("md-elevation")],ga);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ba=Symbol("attachableController");let ya;ya=new MutationObserver((e=>{for(const t of e)t.target[ba]?.hostConnected()}));class xa{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[ba]=this,ya?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wa=["focusin","focusout","pointerdown"];class Ca extends se{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new xa(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){if(!e[Aa]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[Aa]=!0}}onControlChange(e,t){for(const o of wa)e?.removeEventListener(o,this),t?.addEventListener(o,this)}}da([pa({type:Boolean,reflect:!0})],Ca.prototype,"visible",void 0),da([pa({type:Boolean,reflect:!0})],Ca.prototype,"inward",void 0);const Aa=Symbol("handledByFocusRing"),Ea=r`:host{--_active-width:var(--md-focus-ring-active-width, 8px);--_color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration:var(--md-focus-ring-duration, 600ms);--_inward-offset:var(--md-focus-ring-inward-offset, 0px);--_outward-offset:var(--md-focus-ring-outward-offset, 2px);--_shape:var(--md-focus-ring-shape, 9999px);--_width:var(--md-focus-ring-width, 3px);--_shape-start-start:var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end:var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end:var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start:var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(.2,0,0,1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */let Ia=class extends Ca{};Ia.styles=[Ea],Ia=da([ca("md-focus-ring")],Ia);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pa=1;class Sa{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ta=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Sa{constructor(e){var t;if(super(e),e.type!==Pa||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var o,s;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(e))&&this.it.add(e);return this.render(t)}const i=e.element.classList;this.it.forEach((e=>{e in t||(i.remove(e),this.it.delete(e))}));for(const e in t){const o=!!t[e];o===this.it.has(e)||(null===(s=this.nt)||void 0===s?void 0:s.has(e))||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return R}}),ka="cubic-bezier(0.2, 0, 0, 1)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Oa;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Oa||(Oa={}));const Na=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"];class za extends se{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Oa.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new xa(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return V`<div class="surface ${Ta(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Oa.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==Oa.HOLDING)return this.state===Oa.TOUCH_DELAY?(this.state=Oa.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Oa.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=Oa.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Oa.TOUCH_DELAY,await new Promise((e=>{setTimeout(e,150)})),this.state===Oa.TOUCH_DELAY&&(this.state=Oa.HOLDING,this.startPressAnimation(e)))}}handleClick(){this.disabled||(this.state!==Oa.WAITING_FOR_CLICK?this.state===Oa.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),o=Math.max(e,t),s=Math.max(.35*o,75),i=Math.floor(.2*o),r=Math.sqrt(t**2+e**2)+10;this.initialSize=i,this.rippleScale=""+(r+s)/i,this.rippleSize=`${i}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:o}=window,{left:s,top:i}=this.getBoundingClientRect(),r=t+s,n=o+i,{pageX:a,pageY:l}=e;return{x:a-r,y:l-n}}getTranslationCoordinates(e){const{height:t,width:o}=this.getBoundingClientRect(),s={x:(o-this.initialSize)/2,y:(t-this.initialSize)/2};let i;return i=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:o/2,y:t/2},i={x:i.x-this.initialSize/2,y:i.y-this.initialSize/2},{startPoint:i,endPoint:s}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:o}=this.getTranslationCoordinates(e),s=`${t.x}px, ${t.y}px`,i=`${o.x}px, ${o.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${i}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:ka,fill:"forwards"})}async endPressAnimation(){this.state=Oa.INACTIVE;const e=this.growAnimation,t=e?.currentTime??1/0;t>=225?this.pressed=!1:(await new Promise((e=>{setTimeout(e,225-t)})),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}inBounds({x:e,y:t}){const{top:o,left:s,bottom:i,right:r}=this.getBoundingClientRect();return e>=s&&e<=r&&t>=o&&t<=i}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const o of Na)e?.removeEventListener(o,this),t?.addEventListener(o,this)}}da([pa({type:Boolean,reflect:!0})],za.prototype,"disabled",void 0),da([ma()],za.prototype,"hovered",void 0),da([ma()],za.prototype,"pressed",void 0),da([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e,t){return(({finisher:e,descriptor:t})=>(o,s)=>{var i;if(void 0===s){const s=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(o.key)}:{...o,key:s};return null!=e&&(r.finisher=function(t){e(t,s)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,s,t(s)),null==e||e(i,s)}})({descriptor:o=>{const s={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;s.get=function(){var o,s;return void 0===this[t]&&(this[t]=null!==(s=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==s?s:null),this[t]}}return s}})}(".surface")],za.prototype,"mdRoot",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const La=r`:host{--_hover-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity:var(--md-ripple-hover-opacity, 0.08);--_pressed-color:var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity:var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors:active){:host{display:none}}.surface,:host{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:transparent}.surface::after,.surface::before{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side,var(--_pressed-color) max(100% - 70px,65%),transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ma=class extends za{};Ma.styles=[La],Ma=da([ca("md-ripple")],Ma);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Da=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];function Va(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Da.map(Va);class Ra extends se{constructor(){super(...arguments),this.size="medium",this.label="",this.lowered=!1,this.hasIcon=!1,this.reducedTouchTarget=!1}render(){const{ariaLabel:e}=this;return V` <button class="fab ${Ta(this.getRenderClasses())}" aria-label="${e||F}"> <md-elevation></md-elevation> <md-focus-ring></md-focus-ring> <md-ripple class="ripple"></md-ripple> ${this.renderTouchTarget()} ${this.renderIcon()} ${this.renderLabel()} </button> `}getRenderClasses(){const e=!!this.label;return{lowered:this.lowered,small:"small"===this.size&&!e,large:"large"===this.size&&!e,extended:e,hasIcon:!e||this.hasIcon}}renderTouchTarget(){return this.reducedTouchTarget?V``:V`<div class="touch-target"></div>`}renderLabel(){return this.label?V`<span class="label">${this.label}</span>`:""}renderIcon(){const{ariaLabel:e}=this;return V`<span class="icon"> <slot name="icon" aria-hidden="${e||this.label?"true":F}" @slotchange="${this.onSlotchange}"> </slot> </span>`}onSlotchange(e){const t=e.target.assignedElements({flatten:!0});this.hasIcon=0!==t.length}}(function(e){for(const t of Da)e.createProperty(t,{attribute:Va(t),reflect:!0});e.addInitializer((e=>{const t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)}))}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */)(Ra),Ra.shadowRootOptions={mode:"open",delegatesFocus:!0},da([pa()],Ra.prototype,"size",void 0),da([pa()],Ra.prototype,"label",void 0),da([pa({type:Boolean})],Ra.prototype,"lowered",void 0),da([pa({type:Boolean,attribute:"has-icon"})],Ra.prototype,"hasIcon",void 0),da([pa({type:Boolean,attribute:"reduced-touch-target"})],Ra.prototype,"reducedTouchTarget",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fa extends Ra{constructor(){super(...arguments),this.variant="surface"}getRenderClasses(){return{...super.getRenderClasses(),primary:"primary"===this.variant,secondary:"secondary"===this.variant,tertiary:"tertiary"===this.variant}}}da([pa()],Fa.prototype,"variant",void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const Ba=r`:host{--_container-color:var(--md-fab-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation:var(--md-fab-container-elevation, 3);--_container-height:var(--md-fab-container-height, 56px);--_container-shadow-color:var(--md-fab-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape:var(--md-fab-container-shape, 16px);--_container-width:var(--md-fab-container-width, 56px);--_focus-container-elevation:var(--md-fab-focus-container-elevation, 3);--_focus-icon-color:var(--md-fab-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation:var(--md-fab-hover-container-elevation, 4);--_hover-icon-color:var(--md-fab-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color:var(--md-fab-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity:var(--md-fab-hover-state-layer-opacity, 0.08);--_icon-color:var(--md-fab-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size:var(--md-fab-icon-size, 24px);--_lowered-container-color:var(--md-fab-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation:var(--md-fab-lowered-container-elevation, 1);--_lowered-focus-container-elevation:var(--md-fab-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation:var(--md-fab-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation:var(--md-fab-lowered-pressed-container-elevation, 1);--_pressed-container-elevation:var(--md-fab-pressed-container-elevation, 3);--_pressed-icon-color:var(--md-fab-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color:var(--md-fab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity:var(--md-fab-pressed-state-layer-opacity, 0.12);--_focus-label-text-color:var(--md-fab-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color:var(--md-fab-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color:var(--md-fab-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type:var(--md-fab-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_large-container-height:var(--md-fab-large-container-height, 96px);--_large-container-shape:var(--md-fab-large-container-shape, 28px);--_large-container-width:var(--md-fab-large-container-width, 96px);--_large-icon-size:var(--md-fab-large-icon-size, 36px);--_pressed-label-text-color:var(--md-fab-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_primary-container-color:var(--md-fab-primary-container-color, var(--md-sys-color-primary-container, #eaddff));--_primary-focus-icon-color:var(--md-fab-primary-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-focus-label-text-color:var(--md-fab-primary-focus-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-icon-color:var(--md-fab-primary-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-label-text-color:var(--md-fab-primary-hover-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-state-layer-color:var(--md-fab-primary-hover-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-icon-color:var(--md-fab-primary-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-label-text-color:var(--md-fab-primary-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-icon-color:var(--md-fab-primary-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-label-text-color:var(--md-fab-primary-pressed-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-state-layer-color:var(--md-fab-primary-pressed-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_secondary-container-color:var(--md-fab-secondary-container-color, var(--md-sys-color-secondary-container, #e8def8));--_secondary-focus-icon-color:var(--md-fab-secondary-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-focus-label-text-color:var(--md-fab-secondary-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-icon-color:var(--md-fab-secondary-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-label-text-color:var(--md-fab-secondary-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-state-layer-color:var(--md-fab-secondary-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-icon-color:var(--md-fab-secondary-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-label-text-color:var(--md-fab-secondary-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-icon-color:var(--md-fab-secondary-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-label-text-color:var(--md-fab-secondary-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-state-layer-color:var(--md-fab-secondary-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_small-container-height:var(--md-fab-small-container-height, 40px);--_small-container-shape:var(--md-fab-small-container-shape, 12px);--_small-container-width:var(--md-fab-small-container-width, 40px);--_small-icon-size:var(--md-fab-small-icon-size, 24px);--_tertiary-container-color:var(--md-fab-tertiary-container-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_tertiary-focus-icon-color:var(--md-fab-tertiary-focus-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-focus-label-text-color:var(--md-fab-tertiary-focus-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-icon-color:var(--md-fab-tertiary-hover-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-label-text-color:var(--md-fab-tertiary-hover-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-state-layer-color:var(--md-fab-tertiary-hover-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-icon-color:var(--md-fab-tertiary-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-label-text-color:var(--md-fab-tertiary-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-icon-color:var(--md-fab-tertiary-pressed-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-label-text-color:var(--md-fab-tertiary-pressed-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-state-layer-color:var(--md-fab-tertiary-pressed-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_container-shape-start-start:var( --md-fab-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end:var( --md-fab-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end:var( --md-fab-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start:var( --md-fab-container-shape-end-start, var(--_container-shape) );--_large-container-shape-start-start:var( --md-fab-large-container-shape-start-start, var(--_large-container-shape) );--_large-container-shape-start-end:var( --md-fab-large-container-shape-start-end, var(--_large-container-shape) );--_large-container-shape-end-end:var( --md-fab-large-container-shape-end-end, var(--_large-container-shape) );--_large-container-shape-end-start:var( --md-fab-large-container-shape-end-start, var(--_large-container-shape) );--_small-container-shape-start-start:var( --md-fab-small-container-shape-start-start, var(--_small-container-shape) );--_small-container-shape-start-end:var( --md-fab-small-container-shape-start-end, var(--_small-container-shape) );--_small-container-shape-end-end:var( --md-fab-small-container-shape-end-end, var(--_small-container-shape) );--_small-container-shape-end-start:var( --md-fab-small-container-shape-end-start, var(--_small-container-shape) )}.fab .icon ::slotted(*){color:var(--_icon-color)}.fab:focus{color:var(--_focus-icon-color)}.fab:hover{color:var(--_hover-icon-color)}.fab:active{color:var(--_pressed-icon-color)}.fab.primary{background-color:var(--_primary-container-color);--md-ripple-hover-color:var(--_primary-hover-state-layer-color);--md-ripple-pressed-color:var(--_primary-pressed-state-layer-color)}.fab.primary .icon ::slotted(*){color:var(--_primary-icon-color)}.fab.primary:focus{color:var(--_primary-focus-icon-color)}.fab.primary:hover{color:var(--_primary-hover-icon-color)}.fab.primary:active{color:var(--_primary-pressed-icon-color)}.fab.primary .label{color:var(--_primary-label-text-color)}.fab:hover .fab.primary .label{color:var(--_primary-hover-label-text-color)}.fab:focus .fab.primary .label{color:var(--_primary-focus-label-text-color)}.fab:active .fab.primary .label{color:var(--_primary-pressed-label-text-color)}.fab.secondary{background-color:var(--_secondary-container-color);--md-ripple-hover-color:var(--_secondary-hover-state-layer-color);--md-ripple-pressed-color:var(--_secondary-pressed-state-layer-color)}.fab.secondary .icon ::slotted(*){color:var(--_secondary-icon-color)}.fab.secondary:focus{color:var(--_secondary-focus-icon-color)}.fab.secondary:hover{color:var(--_secondary-hover-icon-color)}.fab.secondary:active{color:var(--_secondary-pressed-icon-color)}.fab.secondary .label{color:var(--_secondary-label-text-color)}.fab:hover .fab.secondary .label{color:var(--_secondary-hover-label-text-color)}.fab:focus .fab.secondary .label{color:var(--_secondary-focus-label-text-color)}.fab:active .fab.secondary .label{color:var(--_secondary-pressed-label-text-color)}.fab.tertiary{background-color:var(--_tertiary-container-color);--md-ripple-hover-color:var(--_tertiary-hover-state-layer-color);--md-ripple-pressed-color:var(--_tertiary-pressed-state-layer-color)}.fab.tertiary .icon ::slotted(*){color:var(--_tertiary-icon-color)}.fab.tertiary:focus{color:var(--_tertiary-focus-icon-color)}.fab.tertiary:hover{color:var(--_tertiary-hover-icon-color)}.fab.tertiary:active{color:var(--_tertiary-pressed-icon-color)}.fab.tertiary .label{color:var(--_tertiary-label-text-color)}.fab:hover .fab.tertiary .label{color:var(--_tertiary-hover-label-text-color)}.fab:focus .fab.tertiary .label{color:var(--_tertiary-focus-label-text-color)}.fab:active .fab.tertiary .label{color:var(--_tertiary-pressed-label-text-color)}.fab:not(.hasIcon){padding-inline-start:20px}.fab:not(.hasIcon) .icon{display:none}.fab:not(.hasIcon) .label{padding-inline-start:0}.fab.small{width:var(--_small-container-width);height:var(--_small-container-height)}.fab.small .icon ::slotted(*){width:var(--_small-icon-size);height:var(--_small-icon-size);font-size:var(--_small-icon-size)}.fab.small,.fab.small .ripple{border-start-start-radius:var(--_small-container-shape-start-start);border-start-end-radius:var(--_small-container-shape-start-end);border-end-start-radius:var(--_small-container-shape-end-start);border-end-end-radius:var(--_small-container-shape-end-end);--md-focus-ring-shape-start-start:var(--_small-container-shape-start-start);--md-focus-ring-shape-start-end:var(--_small-container-shape-start-end);--md-focus-ring-shape-end-end:var(--_small-container-shape-end-end);--md-focus-ring-shape-end-start:var(--_small-container-shape-end-start)}`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */,$a=r`@media(forced-colors:active){.fab{--md-focus-ring-outward-offset:3px;border:1px solid ButtonText}.fab.extended{padding-inline-start:15px;padding-inline-end:19px}}`
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */,Ha=r`:host{--md-ripple-hover-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity:var(--_pressed-state-layer-opacity);display:inline-flex}.fab,.icon,.icon ::slotted(*){display:flex}.fab{align-items:center;justify-content:center;vertical-align:middle;padding:0;position:relative;height:var(--_container-height);transition-property:background-color;border-width:0;outline:0;z-index:0;--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);background-color:var(--_container-color);--md-ripple-hover-color:var(--_hover-state-layer-color);--md-ripple-pressed-color:var(--_pressed-state-layer-color)}.fab.extended{width:inherit;box-sizing:border-box;padding-inline-start:16px;padding-inline-end:20px}.fab:not(.extended){width:var(--_container-width)}.fab.large{width:var(--_large-container-width);height:var(--_large-container-height)}.fab.large .icon ::slotted(*){width:var(--_large-icon-size);height:var(--_large-icon-size);font-size:var(--_large-icon-size)}.fab.large,.fab.large .ripple{border-start-start-radius:var(--_large-container-shape-start-start);border-start-end-radius:var(--_large-container-shape-start-end);border-end-start-radius:var(--_large-container-shape-end-start);border-end-end-radius:var(--_large-container-shape-end-end);--md-focus-ring-shape-start-start:var(--_large-container-shape-start-start);--md-focus-ring-shape-start-end:var(--_large-container-shape-start-end);--md-focus-ring-shape-end-end:var(--_large-container-shape-end-end);--md-focus-ring-shape-end-start:var(--_large-container-shape-end-start)}.fab:focus{--md-elevation-level:var(--_focus-container-elevation)}.fab:hover{--md-elevation-level:var(--_hover-container-elevation)}.fab:active{--md-elevation-level:var(--_pressed-container-elevation)}.fab.lowered{background-color:var(--_lowered-container-color);--md-elevation-level:var(--_lowered-container-elevation)}.fab.lowered:focus{--md-elevation-level:var(--_lowered-focus-container-elevation)}.fab.lowered:hover{--md-elevation-level:var(--_lowered-hover-container-elevation)}.fab.lowered:active{--md-elevation-level:var(--_lowered-pressed-container-elevation)}.fab .label{color:var(--_label-text-color)}.fab:hover .fab .label{color:var(--_hover-label-text-color)}.fab:focus .fab .label{color:var(--_focus-label-text-color)}.fab:active .fab .label{color:var(--_pressed-label-text-color)}.label{padding-inline-start:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--_label-text-type)}.ripple{overflow:hidden}.ripple,md-elevation{z-index:-1}.touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.fab,md-elevation{transition-duration:280ms;transition-timing-function:cubic-bezier(.2,0,0,1)}.fab,.ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}.icon ::slotted(*){width:var(--_icon-size);height:var(--_icon-size);font-size:var(--_icon-size)}`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ua=class extends Fa{};Ua.styles=[Ha,Ba,$a],Ua=da([ca("md-fab")],Ua);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qa extends se{render(){return V`<span><slot></slot></span>`}}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ja=r`:host{--_color:var(--md-icon-color, inherit);--_font:var(--md-icon-font, "Material Symbols Outlined");--_font-variation-settings:var(--md-icon-font-variation-settings, inherit);--_size:var(--md-icon-size, 24px);--_weight:var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-variation-settings);line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Wa=class extends qa{};Wa.styles=[ja],Wa=da([ca("md-icon")],Wa);class Ya extends se{static get properties(){return{title:{type:String},life_saving:{type:String},high_risk:{type:String},num_resources:{type:String},edad:{type:String},sgs_vitales_alto_riesgo:{type:Array},sgs_vitales_riesgo:{type:Array},sgs_vitales_mediano_riesgo_1_3m:{type:Array},sgs_vitales_riesgo_1_3m:{type:Array},sgs_vitales_riesgo_3_12m:{type:Array},sgs_vitales_riesgo_1_3a:{type:Array},sgs_vitales_riesgo_3_5a:{type:Array},sgs_vitales_riesgo_5_12a:{type:Array},sgs_vitales_riesgo_12_18a:{type:Array},sgs_vitales_riesgo_18a:{type:Array},version:{type:String}}}static get styles(){return r`:host{--background-color:#ededed;--header-background-color:rgb(52, 143, 255);--header-color:#fff;--content-font-size:calc(10px + 2vmin);--default-padding:1rem;--default-box-sizing:border-box;--primary-font-size:1.5rem;--primary-line-height:1.5rem;--primary-font-weight:400;--label-font-size:1.6rem;--esi-uno-color:#fff;--esi-uno-background-color:#ff0000;--esi-dos-background-color:orange;--esi-tres-background-color:#ffd700;--esi-cuatro-background-color:#228B22;--esi-cinco-background-color:#1E90FF;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;font-size:var(--content-font-size);color:#1a2b42;margin:0 auto;text-align:center;background-color:var(--background-color);height:100%;box-sizing:var(--default-box-sizing)}.def-esi-uno,.esi-uno,vaadin-form-layout{box-sizing:var(--default-box-sizing);padding:var(--default-padding)}main{flex-grow:1;padding:0}main>div{max-width:720px;margin:var(--default-padding) auto;background-color:#fff;min-height:calc(100vh - 72px - var(--default-padding));border-radius:.5rem}header{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100vw;height:auto;background-color:var(--header-background-color);color:var(--header-color);font-size:var(--primary-font-size);padding:calc(var(--default-padding)/ 2) var(--default-padding);box-sizing:var(--default-box-sizing)}header h1{margin:0;font-size:var(--primary-font-size);font-weight:var(--primary-font-weight);line-height:var(--primary-line-height);text-align:left}.esi-uno{background-color:var(--esi-uno-background-color);color:var(--esi-uno-color);font-size:var(--primary-font-size);font-weight:var(--primary-font-weight);line-height:var(--primary-line-height);text-align:center;margin:0 var(--default-padding)}.esi-dos{background-color:var(--esi-dos-background-color);color:var(--esi-uno-color)}.esi-tres{background-color:var(--esi-tres-background-color);color:var(--esi-uno-color)}.esi-cuatro{background-color:var(--esi-cuatro-background-color);color:var(--esi-uno-color)}.esi-cinco{background-color:var(--esi-cinco-background-color);color:var(--esi-uno-color)}vaadin-combo-box>label{font-size:var(--label-font-size)}.titulo_riesgo{font-size:var(--label-font-size);text-align:left;margin-top:2rem}md-fab{position:fixed;bottom:var(--default-padding);right:var(--default-padding)}.def-esi-uno{display:block;color:var(--esi-uno-text-color,#000);font-size:1.2rem;text-align:left}.def-esi-uno>img{width:100%}.recargar{--mdc-theme-primary:var(--header-background-color);--mdc-theme-on-primary:var(--header-color)}h1>span{font-size:.5em}`}constructor(){super(),this.title="Categorización ESI",this.version="v0.1.4.26",this.sgs_vitales_alto_riesgo=[{label:"T > 38°C",value:"NO"}],this.sgs_vitales_riesgo=[{label:"FC > 190",value:"NO"},{label:"FR > 60",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],this.sgs_vitales_mediano_riesgo_1_3m=[{label:"T > 38°C",value:"NO"}],this.sgs_vitales_riesgo_1_3m=[{label:"FC > 180",value:"NO"},{label:"FR > 55",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],this.sgs_vitales_riesgo_3_12m=[{label:"T > 39°C",value:"NO"},{label:"T < 36°C",value:"NO"},{label:"Inmunizaciones incompletas",value:"NO"},{label:"Fiebre sin foco",value:"NO"},{label:"FC > 180",value:"NO"},{label:"FR > 55",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],this.sgs_vitales_riesgo_1_3a=[{label:"T > 39°C",value:"NO"},{label:"T < 36°C",value:"NO"},{label:"Inmunizaciones incompletas",value:"NO"},{label:"Fiebre sin foco",value:"NO"},{label:"FC > 140",value:"NO"},{label:"FR > 40",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],this.sgs_vitales_riesgo_3_5a=[{label:"T > 39°C",value:"NO"},{label:"T < 36°C",value:"NO"},{label:"Inmunizaciones incompletas",value:"NO"},{label:"Fiebre sin foco",value:"NO"},{label:"FC > 140",value:"NO"},{label:"FR > 35",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],this.sgs_vitales_riesgo_5_12a=[{label:"T > 39°C",value:"NO"},{label:"T < 36°C",value:"NO"},{label:"Inmunizaciones incompletas",value:"NO"},{label:"Fiebre sin foco",value:"NO"},{label:"FC > 120",value:"NO"},{label:"FR > 30",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],this.sgs_vitales_riesgo_12_18a=[{label:"T > 39°C",value:"NO"},{label:"T < 36°C",value:"NO"},{label:"Inmunizaciones incompletas",value:"NO"},{label:"Fiebre sin foco",value:"NO"},{label:"FC > 100",value:"NO"},{label:"FR > 20",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],this.sgs_vitales_riesgo_18a=[{label:"T > 39°C",value:"NO"},{label:"T < 36°C",value:"NO"},{label:"FC > 100",value:"NO"},{label:"FR > 20",value:"NO"},{label:"SpO2 < 92%",value:"NO"}],window.isUpdateAvailable.then((e=>{!0===e&&window.confirm("Hay una nueva versión disponible, ¿recargar?")&&window.location.reload()}))}handleCheckboxChange(e,t,o){const s=this["sgs_vitales_"+o];s&&(s[e].value=t.target.checked?"SI":"NO",this.requestUpdate())}render(){return V` <main> <header> <h1>${this.title} <span>${this.version}</span></h1> <a href="https://github.com/nicoveraz/esi-app" target="_blank"> <img src="./assets/github.svg" alt="GitHub Logo" width="32" height="32"> </a> </header> <div> ${this.renderLifeSavingQuestion()} ${this.renderHighRiskQuestion()} ${this.renderResourceAgeQuestions()} </div> <md-fab @click="${this.reset}"><md-icon slot="icon">restart_alt</md-icon></md-fab> </main> `}renderLifeSavingQuestion(){return V` <vaadin-form-layout> <vaadin-combo-box clear-button-visible label="¿Requiere intervención inmediata para salvar su vida?" @change="${e=>{this.life_saving=e.target.value,this.high_risk=null,this.num_resources=null,this.edad=null}}" .value="${this.life_saving}" .items="${["SI","NO"]}"> </vaadin-combo-box> </vaadin-form-layout> ${this.life_saving?"":this.renderDefEsiUno()} ${"SI"===this.life_saving?this.renderEsiOne():""} `}renderEsiOne(){return V` <div class="esi-uno">ESI 1</div> ${this.renderDefEsiUno()} `}renderEsiTwo(e){return V` <div class="esi-uno esi-dos">${e?e+" ":""}ESI 2</div> ${this.sgs_vitales_alto_riesgo.some((e=>"SI"===e.value))||this.sgs_vitales_riesgo.some((e=>"SI"===e.value))||this.sgs_vitales_riesgo_1_3m.some((e=>"SI"===e.value))||this.sgs_vitales_riesgo_3_12m.some((e=>"SI"===e.value))?"":this.renderDefEsiDos()} `}renderEsiThree(){return V` ${"Muchos"===this.num_resources?V`<div class="esi-uno esi-tres">ESI 3</div>`:""} <vaadin-form-layout> <vaadin-combo-box clear-button-visible label="Edad" @change="${e=>{this.edad=e.target.value,this.borradatosedad()}}" .value="${this.edad}" .items="${["<1m","1-3m","3-12m","1-3a","3-5a","5-12a","12-18a",">18a"]}"> </vaadin-combo-box> ${this.renderSignosDeRiesgo(this.edad)} </vaadin-form-layout> `}renderEsiFour(){return V` <div class="esi-uno esi-cuatro">ESI 4</div> ${this.renderEsiThree()} `}renderEsiFive(){return V` <div class="esi-uno esi-cinco">ESI 5</div> ${this.renderEsiThree()} `}renderHighRiskQuestion(){return"NO"===this.life_saving?V` <vaadin-form-layout> <vaadin-combo-box clear-button-visible label="¿Situación de alto riesgo?" @change="${e=>{this.high_risk=e.target.value,this.num_resources=null,this.edad=null}}" .value="${this.high_risk}" .items="${["SI","NO"]}"> </vaadin-combo-box> </vaadin-form-layout> ${this.high_risk?"":this.renderDefEsiDos()} ${"SI"===this.high_risk?this.renderEsiTwo():""} `:""}renderResourceAgeQuestions(){if("NO"!==this.high_risk)return"";const e={Ninguno:()=>this.renderEsiFive(),Uno:()=>this.renderEsiFour(),Muchos:()=>this.renderEsiThree()}[this.num_resources];return V` <vaadin-form-layout> <vaadin-combo-box clear-button-visible label="¿Cuántos recursos diferentes se necesitan?" @change="${e=>this.num_resources=e.target.value}" .value="${this.num_resources}" .items="${["Ninguno","Uno","Muchos"]}"> </vaadin-combo-box> </vaadin-form-layout> ${this.num_resources?"":this.renderDefRecursos()} ${e?e():""} `}renderDefEsiUno(){return V` <div class="def-esi-uno"> <p><strong>Intervención inmediata para salvar la vida:</strong> Soporte de vía aérea o respiratorio, medicamentos de emergencia, intervenciones hemodinámicas como reanimación con líquidos o productos sanguíneos.</p> <p><strong>Las presentaciones clínicas que requieren intervenciones para salvar la vida incluyen las siguientes:</strong></p> <ul> <li>Intubado</li> <li>Inconsciente</li> <li>Sin pulso</li> <li>Dificultad respiratoria severa</li> <li>Hipotensión profunda</li> <li>Hipoglicemia</li> </ul> <p><strong>La inconsciencia se define como un paciente que:</strong></p> <ol> <li>No es verbal y no sigue órdenes (agudamente)</li> <p>Ó</p> <li>Requiere estímulo nocivo (D o I en la escala AVDI)</li> </ol> <img src="./assets/avdi.jpg" alt="Escala AVDI"> </div> `}renderDefEsiDos(){return V` <div class="def-esi-uno"> <p><strong>Se utilizan 3 preguntas generales para determinar si el paciente cumple con los criterios correspondientes al nivel 2:</strong></p> <ol> <li>¿Es una situación de alto riesgo?</li> <li>¿El paciente está confundido, letárgico o desorientado?</li> <li>¿El paciente experimenta dolor o malestar severo? (EVA ≥7)</li> </ol> <p>En este ítem se debe aplicar Escala numérica del dolor y AVDI</p> <img src="./assets/avdi.jpg" alt="Escala AVDI"> <img src="./assets/eva.jpg" alt="Escala EVA"> </div> `}renderDefRecursos(){return V` <div class="def-esi-uno"> <p>Contar el número de diferentes tipos de recursos, no las pruebas individuales o las radiografías (ejemplos: Creatinina, electrolitos y coagulación es igual a un recurso; hemograma más radiografía de tórax es igual a dos recursos).</p> <p>Recursos:</p> <ul> <li>fluidos IV (hidratación)</li> <li>Medicamentos IV o IM o nebulizados</li> <li>Consulta especialista</li> <li>Procedimiento simple = 1 (sonda foley)</li> <li>Procedimiento complejo = 2 (sutura)</li> </ul> <p>NO son recursos:</p> <ul> <li>Historia y examen físico (incluyendo pélvico)</li> <li>Medicamentos VO</li> <li>Hemoglucotest</li> <li>Inmunización contra el tétanos</li> <li>Repetición de recetas</li> <li>Cuidado de heridas simples (vendajes, reevaluación)</li> <li>Bastones, férulas, cabestrillos</li> </ul> </div> `}renderSignosDeRiesgo(e){const t=[{range:"<1m",properties:["alto_riesgo","riesgo"]},{range:"1-3m",properties:["mediano_riesgo_1_3m","riesgo_1_3m"]},{range:"3-12m",properties:["riesgo_3_12m"]},{range:"1-3a",properties:["riesgo_1_3a"]},{range:"3-5a",properties:["riesgo_3_5a"]},{range:"5-12a",properties:["riesgo_5_12a"]},{range:"12-18a",properties:["riesgo_12_18a"]},{range:">18a",properties:["riesgo_18a"]}].find((t=>t.range===e));if(!t)return"";const o=e=>this["sgs_vitales_"+e].some((e=>"SI"===e.value)),s=t.properties.includes("alto_riesgo")&&o("alto_riesgo"),i=t.properties.filter((e=>"alto_riesgo"!==e)).some(o),r=s||i;let n="";return s?n=this.renderEsiTwo("Al menos"):i&&(n=this.renderEsiTwo("Considerar")),V` <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label> <vaadin-form-layout> <div> ${t.properties.flatMap((e=>this["sgs_vitales_"+e].map(((t,o)=>V` <vaadin-checkbox label="${t.label}" .checked="${"SI"===t.value}" @change="${t=>this.handleCheckboxChange(o,t,e)}"></vaadin-checkbox> `))))} </div> </vaadin-form-layout> ${n} ${r?this.renderDefEsiDos():""} `}static get SIGNO_PROPERTIES(){return["alto_riesgo","riesgo","mediano_riesgo_1_3m","riesgo_1_3m","riesgo_3_12m","riesgo_1_3a","riesgo_3_5a","riesgo_5_12a","riesgo_12_18a","riesgo_18a"]}borradatosedad(){Ya.SIGNO_PROPERTIES.forEach((e=>{this["sgs_vitales_"+e].forEach((e=>e.value="NO"))})),this.requestUpdate()}reset(){["life_saving","high_risk","num_resources","edad"].forEach((e=>{this[e]=null})),this.borradatosedad()}}customElements.define("esi-app",Ya);
