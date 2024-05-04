import{s as U,n as X,o as Y}from"../chunks/scheduler.DLmczG9q.js";import{S as Z,i as ee,e as w,u as k,s as H,c as E,f as y,v as I,k as L,d as h,b as $,a as _,w as q,y as x,t as B,h as N,x as C}from"../chunks/index.B20sN6f-.js";import{_ as te,P as ne}from"../chunks/5.B9yRTFvF.js";import{component as se}from"./7.khN7N3x9.js";import{component as ie}from"./8.BgHqdNGW.js";/* empty css                                                    */import{r as re,i as J,p as oe,c as K,d as Q,e as ce,f as le,n as ae}from"../chunks/stagger.es.B8K67XSV.js";import{a as fe}from"../chunks/animate.es.Doo0FGWD.js";function ue(e,n){return n?e*(1e3/n):0}const T=new WeakMap;let g;function de(e,n){if(n){const{inlineSize:t,blockSize:i}=n[0];return{width:t,height:i}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function he({target:e,contentRect:n,borderBoxSize:t}){var i;(i=T.get(e))===null||i===void 0||i.forEach(s=>{s({target:e,contentSize:n,get size(){return de(e,t)}})})}function me(e){e.forEach(he)}function pe(){typeof ResizeObserver>"u"||(g=new ResizeObserver(me))}function ge(e,n){g||pe();const t=re(e);return t.forEach(i=>{let s=T.get(i);s||(s=new Set,T.set(i,s)),s.add(n),g==null||g.observe(i)}),()=>{t.forEach(i=>{const s=T.get(i);s==null||s.delete(n),s!=null&&s.size||g==null||g.unobserve(i)})}}const P=new Set;let S;function ve(){S=()=>{const e={width:window.innerWidth,height:window.innerHeight},n={target:window,size:e,contentSize:e};P.forEach(t=>t(n))},window.addEventListener("resize",S)}function we(e){return P.add(e),S||ve(),()=>{P.delete(e),!P.size&&S&&(S=void 0)}}function Ee(e,n){return J(e)?we(e):ge(e,n)}const ye=50,F=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),$e=()=>({time:0,x:F(),y:F()}),xe={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function D(e,n,t,i){const s=t[n],{length:r,position:o}=xe[n],d=s.current,p=t.time;s.current=e["scroll"+o],s.scrollLength=e["scroll"+r]-e["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=oe(0,s.scrollLength,s.current);const l=i-p;s.velocity=l>ye?0:ue(s.current-d,l)}function ze(e,n,t){D(e,"x",n,t),D(e,"y",n,t),n.time=t}function He(e,n){let t={x:0,y:0},i=e;for(;i&&i!==n;)if(i instanceof HTMLElement)t.x+=i.offsetLeft,t.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){const{top:s,left:r}=i.getBBox();for(t.x+=r,t.y+=s;i&&i.tagName!=="svg";)i=i.parentNode}return t}const Le={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},R={start:0,center:.5,end:1};function G(e,n,t=0){let i=0;if(R[e]!==void 0&&(e=R[e]),K(e)){const s=parseFloat(e);e.endsWith("px")?i=s:e.endsWith("%")?e=s/100:e.endsWith("vw")?i=s/100*document.documentElement.clientWidth:e.endsWith("vh")?i=s/100*document.documentElement.clientHeight:e=s}return Q(e)&&(i=n*e),t+i}const _e=[0,0];function Oe(e,n,t,i){let s=Array.isArray(e)?e:_e,r=0,o=0;return Q(e)?s=[e,e]:K(e)&&(e=e.trim(),e.includes(" ")?s=e.split(" "):s=[e,R[e]?e:"0"]),r=G(s[0],t,i),o=G(s[1],n),r-o}const Se={x:0,y:0};function We(e,n,t){let{offset:i=Le.All}=t;const{target:s=e,axis:r="y"}=t,o=r==="y"?"height":"width",d=s!==e?He(s,e):Se,p=s===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:s.clientWidth,height:s.clientHeight},l={width:e.clientWidth,height:e.clientHeight};n[r].offset.length=0;let u=!n[r].interpolate;const f=i.length;for(let a=0;a<f;a++){const v=Oe(i[a],l[o],p[o],d[r]);!u&&v!==n[r].interpolatorOffsets[a]&&(u=!0),n[r].offset[a]=v}u&&(n[r].interpolate=ce(le(f),n[r].offset),n[r].interpolatorOffsets=[...n[r].offset]),n[r].progress=n[r].interpolate(n[r].current)}function be(e,n=e,t){if(t.x.targetOffset=0,t.y.targetOffset=0,n!==e){let i=n;for(;i&&i!=e;)t.x.targetOffset+=i.offsetLeft,t.y.targetOffset+=i.offsetTop,i=i.offsetParent}t.x.targetLength=n===e?n.scrollWidth:n.clientWidth,t.y.targetLength=n===e?n.scrollHeight:n.clientHeight,t.x.containerLength=e.clientWidth,t.y.containerLength=e.clientHeight}function Ae(e,n,t,i={}){const s=i.axis||"y";return{measure:()=>be(e,i.target,t),update:r=>{ze(e,t,r),(i.offset||i.target)&&We(e,t,i)},notify:J(n)?()=>n(t):Te(n,t[s])}}function Te(e,n){return e.pause(),e.forEachNative((t,{easing:i})=>{var s,r;if(t.updateDuration)i||(t.easing=ae),t.updateDuration(1);else{const o={duration:1e3};i||(o.easing="linear"),(r=(s=t.effect)===null||s===void 0?void 0:s.updateTiming)===null||r===void 0||r.call(s,o)}}),()=>{e.currentTime=n.progress}}const O=new WeakMap,V=new WeakMap,M=new WeakMap,j=e=>e===document.documentElement?window:e;function Pe(e,n={}){var{container:t=document.documentElement}=n,i=te(n,["container"]);let s=M.get(t);s||(s=new Set,M.set(t,s));const r=$e(),o=Ae(t,e,r,i);if(s.add(o),!O.has(t)){const l=()=>{const f=performance.now();for(const a of s)a.measure();for(const a of s)a.update(f);for(const a of s)a.notify()};O.set(t,l);const u=j(t);window.addEventListener("resize",l,{passive:!0}),t!==document.documentElement&&V.set(t,Ee(t,l)),u.addEventListener("scroll",l,{passive:!0})}const d=O.get(t),p=requestAnimationFrame(d);return()=>{var l;typeof e!="function"&&e.stop(),cancelAnimationFrame(p);const u=M.get(t);if(!u||(u.delete(o),u.size))return;const f=O.get(t);O.delete(t),f&&(j(t).removeEventListener("scroll",f),(l=V.get(t))===null||l===void 0||l(),window.removeEventListener("resize",f))}}function ke(e){let n,t,i,s,r,o,d,p,l,u,f,a,v,z,W;return t=new ne({}),d=new se({}),a=new ie({}),{c(){n=w("section"),k(t.$$.fragment),i=H(),s=w("h2"),r=H(),o=w("section"),k(d.$$.fragment),p=H(),l=w("h2"),u=H(),f=w("section"),k(a.$$.fragment),v=H(),z=w("h2"),this.h()},l(c){n=E(c,"SECTION",{class:!0});var m=y(n);I(t.$$.fragment,m),i=L(m),s=E(m,"H2",{class:!0}),y(s).forEach(h),m.forEach(h),r=L(c),o=E(c,"SECTION",{class:!0});var b=y(o);I(d.$$.fragment,b),p=L(b),l=E(b,"H2",{class:!0}),y(l).forEach(h),b.forEach(h),u=L(c),f=E(c,"SECTION",{class:!0});var A=y(f);I(a.$$.fragment,A),v=L(A),z=E(A,"H2",{class:!0}),y(z).forEach(h),A.forEach(h),this.h()},h(){$(s,"class","usp-c54vph"),$(n,"class","usp-sm03qg"),$(l,"class","usp-k3gp6f"),$(o,"class","usp-sm03qg"),$(z,"class","usp-c54vph"),$(f,"class","usp-sm03qg")},m(c,m){_(c,n,m),q(t,n,null),x(n,i),x(n,s),_(c,r,m),_(c,o,m),q(d,o,null),x(o,p),x(o,l),_(c,u,m),_(c,f,m),q(a,f,null),x(f,v),x(f,z),W=!0},p:X,i(c){W||(B(t.$$.fragment,c),B(d.$$.fragment,c),B(a.$$.fragment,c),W=!0)},o(c){N(t.$$.fragment,c),N(d.$$.fragment,c),N(a.$$.fragment,c),W=!1},d(c){c&&(h(n),h(r),h(o),h(u),h(f)),C(t),C(d),C(a)}}}function Ie(e){return Y(()=>{document.querySelectorAll("section"),forEach(n=>{const t=n.querySelector("h2");Pe(fe(t,{y:[-400,400]}),{target:t})})}),[]}class Ge extends Z{constructor(n){super(),ee(this,n,Ie,ke,U,{})}}export{Ge as component};
