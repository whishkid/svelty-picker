import{s as d,f,a as g,g as m,x as p,c as _,i as n,r as i,d as o}from"./scheduler.6381a9b9.js";import{S as h,i as x}from"./index.cf31950d.js";function v(u){let e,r=`By default date picker uses english locale. And at the moment there is only few locales available
(PRs for additional locales are more than welcome).`,l,a,c='Setting locale is perfect use case for using <a href="/global-config">global configuration</a>.';return{c(){e=f("p"),e.textContent=r,l=g(),a=f("p"),a.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-gl2qim"&&(e.textContent=r),l=_(t),a=m(t,"P",{"data-svelte-h":!0}),p(a)!=="svelte-asfj20"&&(a.innerHTML=c)},m(t,s){n(t,e,s),n(t,l,s),n(t,a,s)},p:i,i,o:i,d(t){t&&(o(e),o(l),o(a))}}}const b={title:"Localization"};class y extends h{constructor(e){super(),x(this,e,null,v,d,{})}}export{y as default,b as metadata};