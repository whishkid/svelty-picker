import{r as p,s as x,T as N,N as O,Q as U}from"./scheduler.8d4e2d99.js";const f=[];function L(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const r=new Set;function o(s){if(x(e,s)&&(e=s,n)){const i=!f.length;for(const l of r)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){o(s(e))}function a(s,i=p){const l=[s,i];return r.add(l),r.size===1&&(n=t(o,c)||p),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:a}}function K(e,t,n){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return L(n,(a,s)=>{let i=!1;const l=[];let _=0,g=p;const v=()=>{if(_)return;g();const u=t(r?l[0]:l,a,s);c?a(u):g=U(u)?u:p},S=o.map((u,h)=>N(u,I=>{l[h]=I,_&=~(1<<h),i&&v()},()=>{_|=1<<h}));return i=!0,v(),function(){O(S),g(),i=!1}})}var w;const z=((w=globalThis.__sveltekit_1cfsnzn)==null?void 0:w.base)??"/svelty-picker";var A;const P=((A=globalThis.__sveltekit_1cfsnzn)==null?void 0:A.assets)??z,V="1709745083765",$="sveltekit:snapshot",B="sveltekit:scroll",C="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},E=location.origin;function D(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function G(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...k,"":k.hover};function T(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function X(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=T(e)}}function H(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!r||j(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===E&&e.hasAttribute("download");return{url:n,external:o,target:r,download:c}}function Q(e){let t=null,n=null,r=null,o=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),o===null&&(o=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=T(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[r??"off"],preload_data:y[o??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function m(e){const t=b(e);let n=!0;function r(){n=!0,t.update(a=>a)}function o(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:r,set:o,subscribe:c}}function Y(){const{set:e,subscribe:t}=b(!1);let n;async function r(){clearTimeout(n);try{const o=await fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==V;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:r}}function j(e,t){return e.origin!==E||!e.pathname.startsWith(t)}let R;function W(e){R=e.client}function F(e){return(...t)=>R[e](...t)}const J={url:m({}),page:m({}),navigating:b(null),updated:Y()};export{C as I,k as P,B as S,$ as a,H as b,Q as c,J as d,z as e,X as f,D as g,W as h,j as i,F as j,K as k,E as o,L as r,G as s,b as w};