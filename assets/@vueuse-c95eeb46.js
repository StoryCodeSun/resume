import{s as e,w as t,r as n,g as o,d as i,e as r,f as a,u,h as l,i as s,n as c,j as d}from"./@vue-3f1443a7.js";var v,f=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function O(o,i){var r;const a=e();var u,l;return t((()=>{a.value=o()}),(u=((e,t)=>{for(var n in t||(t={}))w.call(t,n)&&b(e,n,t[n]);if(y)for(var n of y(t))h.call(t,n)&&b(e,n,t[n]);return e})({},i),l={flush:null!=(r=null==i?void 0:i.flush)?r:"sync"},p(u,m(l)))),n(a)}const g="undefined"!=typeof window,P=e=>"string"==typeof e,I=()=>{},E=g&&(null==(v=null==window?void 0:window.navigator)?void 0:v.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function j(e){return"function"==typeof e?e():u(e)}function S(e,t){return function(...n){return new Promise(((o,i)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(o).catch(i)}))}}function T(e){return!!o()&&(i(e),!0)}function A(e,t=200,n={}){return S(function(e,t={}){let n,o,i=I;const r=e=>{clearTimeout(e),i(),i=I};return a=>{const u=j(e),l=j(t.maxWait);return n&&r(n),u<=0||void 0!==l&&l<=0?(o&&(r(o),o=null),Promise.resolve(a())):new Promise(((e,s)=>{i=t.rejectOnCancel?s:e,l&&!o&&(o=setTimeout((()=>{n&&r(n),o=null,e(a())}),l)),n=setTimeout((()=>{o&&r(o),o=null,e(a())}),u)}))}}(t,n),e)}function x(e,t=200,n={}){const o=r(e.value),i=A((()=>{o.value=e.value}),t,n);return a(e,(()=>i())),o}function N(e,t=200,n=!1,o=!0,i=!1){return S(function(e,t=!0,n=!0,o=!1){let i,r,a=0,u=!0,l=I;const s=()=>{i&&(clearTimeout(i),i=void 0,l(),l=I)};return c=>{const d=j(e),v=Date.now()-a,f=()=>r=c();return s(),d<=0?(a=Date.now(),f()):(v>d&&(n||!u)?(a=Date.now(),f()):t&&(r=new Promise(((e,t)=>{l=o?t:e,i=setTimeout((()=>{a=Date.now(),u=!0,e(f()),s()}),Math.max(0,d-v))}))),n||i||(i=setTimeout((()=>u=!0),d)),u=!1,r)}}(t,n,o,i),e)}function C(e,t=!0){l()?s(e):t?e():c(e)}function Q(e,t,o={}){const{immediate:i=!0}=o,a=r(!1);let u=null;function l(){u&&(clearTimeout(u),u=null)}function s(){a.value=!1,l()}function c(...n){l(),a.value=!0,u=setTimeout((()=>{a.value=!1,u=null,e(...n)}),j(t))}return i&&(a.value=!0,g&&c()),T(s),{isPending:n(a),start:c,stop:s}}function D(e){var t;const n=j(e);return null!=(t=null==n?void 0:n.$el)?t:n}const R=g?window:void 0,k=g?window.document:void 0;function B(...e){let t,n,o,i;if(P(e[0])||Array.isArray(e[0])?([n,o,i]=e,t=R):[t,n,o,i]=e,!t)return I;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],u=()=>{r.forEach((e=>e())),r.length=0},l=a((()=>[D(t),j(i)]),(([e,t])=>{u(),e&&r.push(...n.flatMap((n=>o.map((o=>((e,t,n,o)=>(e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)))(e,n,o,t))))))}),{immediate:!0,flush:"post"}),s=()=>{l(),u()};return T(s),s}let W=!1;function _(e,t,n={}){const{window:o=R,ignore:i=[],capture:r=!0,detectIframe:a=!1}=n;if(!o)return;E&&!W&&(W=!0,Array.from(o.document.body.children).forEach((e=>e.addEventListener("click",I))));let u=!0;const l=e=>i.some((t=>{if("string"==typeof t)return Array.from(o.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=D(t);return n&&(e.target===n||e.composedPath().includes(n))}})),s=[B(o,"click",(n=>{const o=D(e);o&&o!==n.target&&!n.composedPath().includes(o)&&(0===n.detail&&(u=!l(n)),u?t(n):u=!0)}),{passive:!0,capture:r}),B(o,"pointerdown",(t=>{const n=D(e);n&&(u=!t.composedPath().includes(n)&&!l(t))}),{passive:!0}),a&&B(o,"blur",(n=>{var i;const r=D(e);"IFRAME"!==(null==(i=o.document.activeElement)?void 0:i.tagName)||(null==r?void 0:r.contains(o.document.activeElement))||t(n)}))].filter(Boolean);return()=>s.forEach((e=>e()))}const z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},H="__vueuse_ssr_handlers__";function L(e,t,{window:n=R,initialValue:o=""}={}){const i=r(o),u=d((()=>{var e;return D(t)||(null==(e=null==n?void 0:n.document)?void 0:e.documentElement)}));return a([u,()=>j(e)],(([e,t])=>{var r;if(e&&n){const a=null==(r=n.getComputedStyle(e).getPropertyValue(t))?void 0:r.trim();i.value=a||o}}),{immediate:!0}),a(i,(t=>{var n;(null==(n=u.value)?void 0:n.style)&&u.value.style.setProperty(j(e),t)})),i}function F({document:e=k}={}){if(!e)return r("visible");const t=r(e.visibilityState);return B(e,"visibilitychange",(()=>{t.value=e.visibilityState})),t}z[H]=z[H]||{};var V,$,M=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,U=(e,t)=>{var n={};for(var o in e)G.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&M)for(var o of M(e))t.indexOf(o)<0&&J.call(e,o)&&(n[o]=e[o]);return n};function q(e,t,n={}){const o=n,{window:i=R}=o,u=U(o,["window"]);let l;const s=function(e,t=!1){const n=r(),o=()=>n.value=Boolean(e());return o(),C(o,t),n}((()=>i&&"ResizeObserver"in i)),c=()=>{l&&(l.disconnect(),l=void 0)},d=a((()=>D(e)),(e=>{c(),s.value&&i&&e&&(l=new ResizeObserver(t),l.observe(e,u))}),{immediate:!0,flush:"post"}),v=()=>{c(),d()};return T(v),{isSupported:s,stop:v}}function K(e,t={}){const{reset:n=!0,windowResize:o=!0,windowScroll:i=!0,immediate:u=!0}=t,l=r(0),s=r(0),c=r(0),d=r(0),v=r(0),f=r(0),p=r(0),m=r(0);function y(){const t=D(e);if(!t)return void(n&&(l.value=0,s.value=0,c.value=0,d.value=0,v.value=0,f.value=0,p.value=0,m.value=0));const o=t.getBoundingClientRect();l.value=o.height,s.value=o.bottom,c.value=o.left,d.value=o.right,v.value=o.top,f.value=o.width,p.value=o.x,m.value=o.y}return q(e,y),a((()=>D(e)),(e=>!e&&y())),i&&B("scroll",y,{capture:!0,passive:!0}),o&&B("resize",y,{passive:!0}),C((()=>{u&&y()})),{height:l,bottom:s,left:c,right:d,top:v,width:f,x:p,y:m,update:y}}($=V||(V={})).UP="UP",$.RIGHT="RIGHT",$.DOWN="DOWN",$.LEFT="LEFT",$.NONE="NONE";var X=Object.defineProperty,Y=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ne(e,t,n,o={}){var i,u,s;const{clone:c=!1,passive:v=!1,eventName:f,deep:p=!1,defaultValue:m}=o,y=l(),w=n||(null==y?void 0:y.emit)||(null==(i=null==y?void 0:y.$emit)?void 0:i.bind(y))||(null==(s=null==(u=null==y?void 0:y.proxy)?void 0:u.$emit)?void 0:s.bind(null==y?void 0:y.proxy));let h=f;t||(t="modelValue"),h=f||h||`update:${t.toString()}`;const b=e=>{return c?(e=>"function"==typeof e)(c)?c(e):(t=e,JSON.parse(JSON.stringify(t))):e;var t},O=()=>void 0!==e[t]?b(e[t]):m;if(v){const n=O(),o=r(n);return a((()=>e[t]),(e=>o.value=b(e))),a(o,(n=>{(n!==e[t]||p)&&w(h,n)}),{deep:p}),o}return d({get:()=>O(),set(e){w(h,e)}})}function oe({window:e=R}={}){if(!e)return r(!1);const t=r(e.document.hasFocus());return B(e,"blur",(()=>{t.value=!1})),B(e,"focus",(()=>{t.value=!0})),t}function ie(e={}){const{window:t=R,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:a=!0}=e,u=r(n),l=r(o),s=()=>{t&&(a?(u.value=t.innerWidth,l.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return s(),C(s),B("resize",s,{passive:!0}),i&&B("orientationchange",s,{passive:!0}),{width:u,height:l}}((e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&te(e,n,t[n]);if(Y)for(var n of Y(t))ee.call(t,n)&&te(e,n,t[n])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{B as a,ie as b,K as c,q as d,N as e,L as f,Q as g,E as h,g as i,F as j,oe as k,O as l,ne as m,_ as o,x as r,T as t,D as u};
