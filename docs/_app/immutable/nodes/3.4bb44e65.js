import{s as x,p as H,l as O,a as $,f as b,m as P,c as k,g as d,x as T,i as u,y as j,n as q,J as w,d as r}from"../chunks/scheduler.4a748cd6.js";import{S as B,i as D,f as I,b as J,d as N,m as U,a as z,t as A,e as E}from"../chunks/index.7de4484d.js";import{S as F}from"../chunks/SveltyPicker.ac960686.js";function G(a){let n,o,l,m,s,p,f,_,v,i,g="Reset value",c,y,h;function R(e){a[2](e)}let C={format:"hh:ii",pickerOnly:!0,minuteIncrement:7};return a[0]!==void 0&&(C.value=a[0]),s=new F({props:C}),H.push(()=>I(s,"value",R)),{c(){n=O(a[0]),o=$(),l=b("hr"),m=$(),J(s.$$.fragment),f=$(),_=b("hr"),v=$(),i=b("button"),i.textContent=g},l(e){n=P(e,a[0]),o=k(e),l=d(e,"HR",{}),m=k(e),N(s.$$.fragment,e),f=k(e),_=d(e,"HR",{}),v=k(e),i=d(e,"BUTTON",{"data-svelte-h":!0}),T(i)!=="svelte-cjlo2y"&&(i.textContent=g)},m(e,t){u(e,n,t),u(e,o,t),u(e,l,t),u(e,m,t),U(s,e,t),u(e,f,t),u(e,_,t),u(e,v,t),u(e,i,t),c=!0,y||(h=j(i,"click",a[1]),y=!0)},p(e,[t]){(!c||t&1)&&q(n,e[0]);const S={};!p&&t&1&&(p=!0,S.value=e[0],w(()=>p=!1)),s.$set(S)},i(e){c||(z(s.$$.fragment,e),c=!0)},o(e){A(s.$$.fragment,e),c=!1},d(e){e&&(r(n),r(o),r(l),r(m),r(f),r(_),r(v),r(i)),E(s,e),y=!1,h()}}}function K(a,n,o){let l="01:20";function m(){o(0,l=null)}function s(p){l=p,o(0,l)}return[l,m,s]}class V extends B{constructor(n){super(),D(this,n,K,G,x,{})}}export{V as component};