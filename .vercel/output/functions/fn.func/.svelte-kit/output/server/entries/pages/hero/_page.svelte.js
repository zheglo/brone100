import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const css$7 = {
  code: ".usp-o3h0fx{position:relative;height:50cqh;display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"Onimation.svelte","sources":["Onimation.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { timeline, animate } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const draw = (progress) => ({\\n    strokeDashoffset: 1 - progress,\\n    visibility: \\"visible\\"\\n  });\\n  const animateO = [\\n    [\\"circle\\", draw(1), { duration: 5 }],\\n    [\\"circle\\", { scale: 0.21 }, { duration: 1 }],\\n    [\\"path\\", { scale: 0.21 }, { duration: 1 }],\\n    [\\"path\\", draw(1), { duration: 0.5 }]\\n  ];\\n  timeline(animateO);\\n});\\n<\/script>\\n\\n\\n<div class=\\"usp-o3h0fx\\">\\n  <svg\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n    viewBox=\\"-500 -500 1000 1000\\"\\n    height=\\"100cqh\\"\\n    width=\\"50cqw\\"\\n    preserveAspectRatio=\\"xMidYMid meet\\"\\n  >\\n    <circle\\n      fill=\\"none\\"\\n      stroke=\\"#ff1493\\"\\n      stroke-width=\\"200px\\"\\n      rotate=\\"-90deg\\"\\n      stroke-dasharray=\\"1\\"\\n      stroke-dashoffset=\\"1\\"\\n      cx=\\"0\\"\\n      cy=\\"0\\"\\n      r=\\"400\\"\\n      pathLength=\\"1\\"\\n    >\\n    </circle>\\n\\n    <path d='M2000 340 C2000 740 1700 740 1600 740'\\n      pathLength=\\"1\\"\\n      fill=\\"none\\"\\n      stroke=\\"#ff1493\\"\\n      stroke-width=\\"200px\\"\\n      stroke-dasharray=\\"1\\"\\n      stroke-dashoffset=\\"1\\"\\n      visibility: hidden\\n      position: fixed\\n      stroke-miterlimit=\\"10\\"\\n      >\\n    </path>\\n\\n    <path d='M1700 740 C1700 1300 1200 1600 640 1300\\n                        C600 2000 -650 2000 -700 1300\\n                        C-1600 1700 -1900 1000 -1900 850'\\n      pathLength=\\"1\\"\\n      fill=\\"none\\"\\n      stroke=\\"#ff1493\\"\\n      stroke-width=\\"200px\\"\\n      stroke-dasharray=\\"1\\"\\n      stroke-dashoffset=\\"1\\"\\n      visibility: hidden\\n      position: fixed\\n      stroke-miterlimit=\\"10\\"\\n      >\\n    </path>\\n\\n    <path d='M-2000 -649 C-2000 -1200 -1200 -1500 -740 -1100\\n                          C-650 -1800 650 -1800 700 -1100\\n                          C1150 -1500 2000 -1340 2000 -649'\\n      pathLength=\\"1\\"\\n      fill=\\"none\\"\\n      stroke=\\"#ff1493\\"\\n      stroke-width=\\"200px\\"\\n      stroke-dasharray=\\"1\\"\\n      stroke-dashoffset=\\"1\\"\\n      visibility: hidden\\n      position: fixed\\n      stroke-miterlimit=\\"10\\"\\n      >\\n    </path>\\n  </svg>\\n</div>\\n\\n<style>:global(.usp-o3h0fx){position:relative;height:50cqh;display:flex;align-items:center;justify-content:center;}</style>"],"names":[],"mappings":"AAqFe,WAAY,CAAC,SAAS,QAAQ,CAAC,OAAO,KAAK,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,MAAO"}`
};
const Onimation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="usp-o3h0fx" data-svelte-h="svelte-cde98r"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-500 -500 1000 1000" height="100cqh" width="50cqw" preserveAspectRatio="xMidYMid meet"><circle fill="none" stroke="#ff1493" stroke-width="200px" rotate="-90deg" stroke-dasharray="1" stroke-dashoffset="1" cx="0" cy="0" r="400" pathLength="1"></circle><path d="M2000 340 C2000 740 1700 740 1600 740" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed stroke-miterlimit="10"></path><path d="M1700 740 C1700 1300 1200 1600 640 1300
                        C600 2000 -650 2000 -700 1300
                        C-1600 1700 -1900 1000 -1900 850" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed stroke-miterlimit="10"></path><path d="M-2000 -649 C-2000 -1200 -1200 -1500 -740 -1100
                          C-650 -1800 650 -1800 700 -1100
                          C1150 -1500 2000 -1340 2000 -649" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed stroke-miterlimit="10"></path></svg> </div>`;
});
const css$6 = {
  code: '.usp-8f2u8p{position:absolute;bottom:0;height:10%;width:45%;display:flex;animation:svelte-jsjqu9-bounce-alt 1s linear infinite;transform-origin:center bottom;justify-content:center}.usp-jvykvz{margin:auto;width:10%}.usp-1d1bjp{display:block;height:25%;width:45%;display:flex;align-items:center;justify-content:flex-end}.usp-v72lai{display:block;height:25%;width:45%;display:flex;align-items:center;justify-content:flex-start}.usp-m2v7ao{height:80%;width:100%;display:flex;align-items:center;justify-content:space-between}.usp-sqnf98{width:10%}.usp-wfyd9c{justify-content:flex-start;overflow:hidden;padding-left:8px;padding-right:8px;font-size:4vw;--un-text-opacity:1;color:rgb(255 0 0 / var(--un-text-opacity));font-family:"Magical Childhood Regular"}.usp-g73n2t{justify-content:flex-end;overflow:hidden;padding-left:8px;padding-right:8px;font-size:4vw;--un-text-opacity:1;color:rgb(255 0 0 / var(--un-text-opacity));font-family:"Magical Childhood Regular"}.usp-wpxg45{padding-left:8px;padding-right:8px;text-align:center;font-size:6vw;--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity));font-family:"Magical Childhood Regular"}@keyframes svelte-jsjqu9-bounce-alt{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}',
  map: `{"version":3,"file":"Sto.svelte","sources":["Sto.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { animate, timeline, spring } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const numb = document.querySelector(\\"numb\\");\\n  let counter = 0;\\n  setInterval(() => {\\n    if (counter == 100) {\\n      clearInterval();\\n    } else {\\n      counter += 2;\\n      numb.textContent = counter;\\n    }\\n  }, 100);\\n  const animateOOO = [\\n    [\\"wrapper100\\", { y: \\"-45%\\" }, { delay: 5 }, { duration: 1 }],\\n    [\\"numb\\", { color: \\"#8b0000\\" }],\\n    [\\"wrapperL\\", { opacity: [0, 1] }, { delay: 1 }],\\n    [\\"wrapperR\\", { opacity: [0, 1] }],\\n    [\\"wrapperL\\", { x: [\\"0\\", \\"-100%\\", \\"-20%\\"] }, { duration: 0.7 }, { delay: 1 }],\\n    [\\"wrapperR\\", { x: [\\"0\\", \\"100%\\", \\"20%\\"] }, { duration: 0.5 }],\\n    [\\"span\\", { opacity: [0, 1] }, { delay: 0.2 }],\\n    [\\"wrapperB\\", { opacity: [0, 1] }]\\n  ];\\n  timeline(animateOOO);\\n});\\n<\/script>\\n\\n\\n<wrapper100 class='usp-m2v7ao'>\\n  <wrapperL class=\\"usp-1d1bjp\\">\\n    <span class=\\"usp-wfyd9c\\" id='1924'>1924</span>\\n    <img class='usp-sqnf98' src=\\"assets/hero/arrowL.svg\\" alt=\\"arrow left\\" >\\n  </wrapperL>\\n\\n  <div class=\\"\\">\\n    <numb class=\\"usp-wpxg45\\">0</numb>\\n  </div>\\n\\n  <wrapperR class=\\"usp-v72lai\\">\\n    <img class='usp-sqnf98' src=\\"assets/hero/arrowR.svg\\" alt=\\"arrow right\\">\\n    <span class=\\"usp-g73n2t\\" id='2004'>2004 </span>\\n  </wrapperR>\\n</wrapper100>\\n\\n<wrapperB class='usp-8f2u8p'>\\n  <img class='usp-jvykvz' src=\\"assets/hero/arrowB.svg\\" alt=\\"weiter\\">\\n</wrapperB>\\n\\n<style>:global(.usp-8f2u8p){position:absolute;bottom:0;height:10%;width:45%;display:flex;animation:bounce-alt 1s linear infinite;transform-origin:center bottom;justify-content:center;}:global(.usp-jvykvz){margin:auto;width:10%;}:global(.usp-1d1bjp){display:block;height:25%;width:45%;display:flex;align-items:center;justify-content:flex-end;}:global(.usp-v72lai){display:block;height:25%;width:45%;display:flex;align-items:center;justify-content:flex-start;}:global(.usp-m2v7ao){height:80%;width:100%;display:flex;align-items:center;justify-content:space-between;}:global(.usp-sqnf98){width:10%;}:global(.usp-wfyd9c){justify-content:flex-start;overflow:hidden;padding-left:8px;padding-right:8px;font-size:4vw;--un-text-opacity:1;color:rgb(255 0 0 / var(--un-text-opacity));font-family:\\"Magical Childhood Regular\\";}:global(.usp-g73n2t){justify-content:flex-end;overflow:hidden;padding-left:8px;padding-right:8px;font-size:4vw;--un-text-opacity:1;color:rgb(255 0 0 / var(--un-text-opacity));font-family:\\"Magical Childhood Regular\\";}:global(.usp-wpxg45){padding-left:8px;padding-right:8px;text-align:center;font-size:6vw;--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity));font-family:\\"Magical Childhood Regular\\";}@keyframes bounce-alt{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}</style>"],"names":[],"mappings":"AAgDe,WAAY,CAAC,SAAS,QAAQ,CAAC,OAAO,CAAC,CAAC,OAAO,GAAG,CAAC,MAAM,GAAG,CAAC,QAAQ,IAAI,CAAC,UAAU,wBAAU,CAAC,EAAE,CAAC,MAAM,CAAC,QAAQ,CAAC,iBAAiB,MAAM,CAAC,MAAM,CAAC,gBAAgB,MAAO,CAAS,WAAY,CAAC,OAAO,IAAI,CAAC,MAAM,GAAI,CAAS,WAAY,CAAC,QAAQ,KAAK,CAAC,OAAO,GAAG,CAAC,MAAM,GAAG,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,QAAS,CAAS,WAAY,CAAC,QAAQ,KAAK,CAAC,OAAO,GAAG,CAAC,MAAM,GAAG,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,UAAW,CAAS,WAAY,CAAC,OAAO,GAAG,CAAC,MAAM,IAAI,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,aAAc,CAAS,WAAY,CAAC,MAAM,GAAI,CAAS,WAAY,CAAC,gBAAgB,UAAU,CAAC,SAAS,MAAM,CAAC,aAAa,GAAG,CAAC,cAAc,GAAG,CAAC,UAAU,GAAG,CAAC,kBAAkB,CAAC,CAAC,MAAM,IAAI,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,YAAY,2BAA4B,CAAS,WAAY,CAAC,gBAAgB,QAAQ,CAAC,SAAS,MAAM,CAAC,aAAa,GAAG,CAAC,cAAc,GAAG,CAAC,UAAU,GAAG,CAAC,kBAAkB,CAAC,CAAC,MAAM,IAAI,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,YAAY,2BAA4B,CAAS,WAAY,CAAC,aAAa,GAAG,CAAC,cAAc,GAAG,CAAC,WAAW,MAAM,CAAC,UAAU,GAAG,CAAC,kBAAkB,CAAC,CAAC,MAAM,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC,YAAY,2BAA4B,CAAC,WAAW,wBAAU,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,EAAE,CAAC,0BAA0B,aAAa,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,UAAU,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,0BAA0B,aAAa,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,UAAU,YAAY,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,0BAA0B,aAAa,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,UAAU,YAAY,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,UAAU,YAAY,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC"}`
};
const Sto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<wrapper100 class="usp-m2v7ao" data-svelte-h="svelte-11w7aa3"><wrapperL class="usp-1d1bjp"><span class="usp-wfyd9c" id="1924">1924</span> <img class="usp-sqnf98" src="assets/hero/arrowL.svg" alt="arrow left"></wrapperL> <div class=""><numb class="usp-wpxg45">0</numb></div> <wrapperR class="usp-v72lai"><img class="usp-sqnf98" src="assets/hero/arrowR.svg" alt="arrow right"> <span class="usp-g73n2t" id="2004">2004</span></wrapperR></wrapper100> <wrapperB class="usp-8f2u8p" data-svelte-h="svelte-1w4so35"><img class="usp-jvykvz" src="assets/hero/arrowB.svg" alt="weiter"> </wrapperB>`;
});
const css$5 = {
  code: ".usp-2641lj{position:absolute;inset:0;z-index:5;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}",
  map: `{"version":3,"file":"White.svelte","sources":["White.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { timeline, animate } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const escape = [\\n    [\\"item\\", { opacity: \\"0\\" }, { duration: 0.2 }]\\n  ];\\n  timeline(escape);\\n});\\n<\/script>\\n\\n<item class='usp-2641lj'>\\n</item>\\n\\n<style>:global(.usp-2641lj){position:absolute;inset:0;z-index:5;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));}</style>"],"names":[],"mappings":"AAae,WAAY,CAAC,SAAS,QAAQ,CAAC,MAAM,CAAC,CAAC,QAAQ,CAAC,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAE"}`
};
const White = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<item class="usp-2641lj" data-svelte-h="svelte-1arxgfl"></item>`;
});
const css$4 = {
  code: ".usp-99lky8{position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"R.svelte","sources":["R.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { timeline, animate } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const animateR = [\\n    [\\"wrapper\\", { x: \\"-22.9%\\" }, { delay: 6 }, { duration: 0.5 }]\\n  ];\\n  timeline(animateR);\\n});\\n<\/script>\\n\\n<wrapper\\n  class=\\"usp-99lky8\\"\\n>\\n  <svg\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\n  viewBox=\\"-500 -500 1000 1000\\"\\n  height=\\"100cqh\\"\\n  width=\\"50cqw\\"\\n  preserveAspectRatio=\\"xMidYMid meet\\"\\n  >\\n    <circle\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    rotate=\\"-90deg\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    cx=\\"0\\"\\n    cy=\\"0\\"\\n    r=\\"400\\"\\n    pathLength=\\"1\\"\\n    >\\n    </circle>\\n\\n    <path\\n    d='M-400 -500 L-400 850' pathLength=\\"1\\"\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    visibility: hidden\\n    position: fixed\\n    ></path>\\n\\n  </svg>\\n</wrapper>\\n\\n<style>:global(.usp-99lky8){position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center;}</style>"],"names":[],"mappings":"AAgDe,WAAY,CAAC,SAAS,QAAQ,CAAC,OAAO,KAAK,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,MAAO"}`
};
const R = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<wrapper class="usp-99lky8" data-svelte-h="svelte-sen76k"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-500 -500 1000 1000" height="100cqh" width="50cqw" preserveAspectRatio="xMidYMid meet"><circle fill="none" stroke="#ff1493" stroke-width="200px" rotate="-90deg" stroke-dasharray="1" stroke-dashoffset="1" cx="0" cy="0" r="400" pathLength="1"></circle><path d="M-400 -500 L-400 850" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed></path></svg> </wrapper>`;
});
const css$3 = {
  code: ".usp-qpeqv4{position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"B.svelte","sources":["B.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { timeline, animate } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const animateB = [\\n    [\\"wrapper2\\", { x: \\"-45.8%\\" }, { delay: 6 }, { duration: 0.5 }]\\n  ];\\n  timeline(animateB);\\n});\\n<\/script>\\n\\n<wrapper2\\n  class=\\"usp-qpeqv4\\"\\n>\\n  <svg\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\n  viewBox=\\"-500 -500 1000 1000\\"\\n  height=\\"100cqh\\"\\n  width=\\"50cqw\\"\\n  preserveAspectRatio=\\"xMidYMid meet\\"\\n  >\\n    <circle\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    rotate=\\"-90deg\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    cx=\\"0\\"\\n    cy=\\"0\\"\\n    r=\\"400\\"\\n    pathLength=\\"1\\"\\n    >\\n    </circle>\\n\\n    <path\\n    d='M-400 500 L-400 -750 L200 -750' pathLength=\\"1\\"\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    visibility: hidden\\n    position: fixed\\n    ></path>\\n\\n  </svg>\\n</wrapper2>\\n\\n\\n<style>:global(.usp-qpeqv4){position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center;}</style>"],"names":[],"mappings":"AAiDe,WAAY,CAAC,SAAS,QAAQ,CAAC,OAAO,KAAK,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,MAAO"}`
};
const B = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<wrapper2 class="usp-qpeqv4" data-svelte-h="svelte-11nrx3j"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-500 -500 1000 1000" height="100cqh" width="50cqw" preserveAspectRatio="xMidYMid meet"><circle fill="none" stroke="#ff1493" stroke-width="200px" rotate="-90deg" stroke-dasharray="1" stroke-dashoffset="1" cx="0" cy="0" r="400" pathLength="1"></circle><path d="M-400 500 L-400 -750 L200 -750" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed></path></svg> </wrapper2>`;
});
const css$2 = {
  code: ".usp-2f9r7o{position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"N.svelte","sources":["N.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { timeline, animate } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const animateN = [\\n    [\\"wrapper4\\", { x: \\"22.9%\\" }, { delay: 6 }, { duration: 0.5 }]\\n  ];\\n  timeline(animateN);\\n});\\n<\/script>\\n\\n<wrapper4\\n  class=\\"usp-2f9r7o\\"\\n>\\n  <svg\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\n  viewBox=\\"-500 -500 1000 1000\\"\\n  height=\\"50cqw\\"\\n  width=\\"50cqw\\"\\n  preserveAspectRatio=\\"xMidYMid meet\\"\\n  >\\n\\n    <path\\n    d='M-400 -500 L-400 500' pathLength=\\"1\\"\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    visibility: hidden\\n    position: fixed\\n    ></path>\\n\\n    <path\\n    d='M270 500 L250 -500' pathLength=\\"1\\"\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    visibility: hidden\\n    position: fixed\\n    ></path>\\n\\n    <path\\n    d='M-350 0 L250 0' pathLength=\\"1\\"\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    visibility: hidden\\n    position: fixed\\n    ></path>\\n\\n  </svg>\\n</wrapper4>\\n\\n<style>:global(.usp-2f9r7o){position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center;}</style>"],"names":[],"mappings":"AAyDe,WAAY,CAAC,SAAS,QAAQ,CAAC,OAAO,KAAK,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,MAAO"}`
};
const N = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<wrapper4 class="usp-2f9r7o" data-svelte-h="svelte-1ctfg96"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-500 -500 1000 1000" height="50cqw" width="50cqw" preserveAspectRatio="xMidYMid meet"><path d="M-400 -500 L-400 500" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed></path><path d="M270 500 L250 -500" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed></path><path d="M-350 0 L250 0" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed></path></svg> </wrapper4>`;
});
const css$1 = {
  code: ".usp-tjw55e{position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"Ia.svelte","sources":["Ia.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { timeline, animate } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const animateIa = [\\n    [\\"wrapperI\\", { x: \\"43%\\" }, { delay: 6 }, { duration: 0.5 }]\\n  ];\\n  timeline(animateIa);\\n});\\n<\/script>\\n\\n<wrapperI class=\\"usp-tjw55e\\">\\n  <svg\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n    viewBox=\\"-500 -500 1000 1000\\"\\n    height=\\"100cqh\\"\\n    width=\\"50cqw\\"\\n    preserveAspectRatio=\\"xMidYMid meet\\"\\n  >\\n    <circle\\n      fill=\\"none\\"\\n      stroke=\\"#ff1493\\"\\n      stroke-width=\\"200px\\"\\n      rotate=\\"-90deg\\"\\n      stroke-dasharray=\\"1\\"\\n      stroke-dashoffset=\\"1\\"\\n      cx=\\"0\\"\\n      cy=\\"0\\"\\n      r=\\"400\\"\\n      pathLength=\\"1\\"\\n    >\\n    </circle>\\n\\n    <path\\n    d='M400 -500 L400 850' pathLength=\\"1\\"\\n    fill=\\"none\\"\\n    stroke=\\"#ff1493\\"\\n    stroke-width=\\"200px\\"\\n    stroke-dasharray=\\"1\\"\\n    stroke-dashoffset=\\"1\\"\\n    visibility: hidden\\n    position: fixed\\n    >\\n  </path>\\n </svg>\\n</wrapperI>\\n\\n<style>:global(.usp-tjw55e){position:absolute;height:50cqh;display:flex;align-items:center;justify-content:center;}</style>"],"names":[],"mappings":"AA8Ce,WAAY,CAAC,SAAS,QAAQ,CAAC,OAAO,KAAK,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,MAAO"}`
};
const Ia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<wrapperI class="usp-tjw55e" data-svelte-h="svelte-9otbgq"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-500 -500 1000 1000" height="100cqh" width="50cqw" preserveAspectRatio="xMidYMid meet"><circle fill="none" stroke="#ff1493" stroke-width="200px" rotate="-90deg" stroke-dasharray="1" stroke-dashoffset="1" cx="0" cy="0" r="400" pathLength="1"></circle><path d="M400 -500 L400 850" pathLength="1" fill="none" stroke="#ff1493" stroke-width="200px" stroke-dasharray="1" stroke-dashoffset="1" visibility: hidden position: fixed></path></svg> </wrapperI>`;
});
const css = {
  code: ".usp-0f9bxp{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.usp-1rkcho{position:absolute;z-index:-10;height:100%;width:100%;object-fit:cover}.usp-onx5eb{position:relative;height:100dvh;width:100dvw;display:flex;align-items:center;justify-content:center}.usp-q4175x{position:absolute;margin-left:10px;margin-right:10px;display:flex}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Onimation from \\"components/animateO/Onimation.svelte\\";\\nimport Sto from \\"components/animateO/Sto.svelte\\";\\nimport White from \\"components/animateO/White.svelte\\";\\nimport R from \\"components/animateO/R.svelte\\";\\nimport B from \\"components/animateO/B.svelte\\";\\nimport N from \\"components/animateO/N.svelte\\";\\nimport Ia from \\"components/animateO/Ia.svelte\\";\\n<\/script>\\n\\n<section\\n  class=\\"usp-onx5eb\\"\\n>\\n  <White />\\n\\n  <div class=\\"usp-0f9bxp\\">\\n    <video\\n      class=\\"usp-1rkcho\\"\\n      muted\\n      autoplay\\n      loop\\n      playsinline\\n      disablepictureinpicture\\n    >\\n      <source src=\\"assets/punkvideo/probrone.webm\\" type=\\"video/webm\\" />\\n      <source src=\\"assets/punkvideo/probrone.mp4\\" type=\\"video/mp4\\" />\\n    </video>\\n  </div>\\n\\n\\n  <div class='usp-q4175x'>\\n\\n    <B />\\n    <R />\\n    <Onimation />\\n    <N />\\n    <Ia />\\n  </div>\\n\\n  <Sto />\\n\\n</section>\\n\\n\\n<style>:global(.usp-0f9bxp){position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden;}:global(.usp-1rkcho){position:absolute;z-index:-10;height:100%;width:100%;object-fit:cover;}:global(.usp-onx5eb){position:relative;height:100dvh;width:100dvw;display:flex;align-items:center;justify-content:center;}:global(.usp-q4175x){position:absolute;margin-left:10px;margin-right:10px;display:flex;}</style>"],"names":[],"mappings":"AA2Ce,WAAY,CAAC,SAAS,QAAQ,CAAC,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,MAAO,CAAS,WAAY,CAAC,SAAS,QAAQ,CAAC,QAAQ,GAAG,CAAC,OAAO,IAAI,CAAC,MAAM,IAAI,CAAC,WAAW,KAAM,CAAS,WAAY,CAAC,SAAS,QAAQ,CAAC,OAAO,MAAM,CAAC,MAAM,MAAM,CAAC,QAAQ,IAAI,CAAC,YAAY,MAAM,CAAC,gBAAgB,MAAO,CAAS,WAAY,CAAC,SAAS,QAAQ,CAAC,YAAY,IAAI,CAAC,aAAa,IAAI,CAAC,QAAQ,IAAK"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="usp-onx5eb">${validate_component(White, "White").$$render($$result, {}, {}, {})} <div class="usp-0f9bxp" data-svelte-h="svelte-1gqnwc7"><video class="usp-1rkcho" muted autoplay loop playsinline disablepictureinpicture><source src="assets/punkvideo/probrone.webm" type="video/webm"><source src="assets/punkvideo/probrone.mp4" type="video/mp4"></video></div> <div class="usp-q4175x">${validate_component(B, "B").$$render($$result, {}, {}, {})} ${validate_component(R, "R").$$render($$result, {}, {}, {})} ${validate_component(Onimation, "Onimation").$$render($$result, {}, {}, {})} ${validate_component(N, "N").$$render($$result, {}, {}, {})} ${validate_component(Ia, "Ia").$$render($$result, {}, {}, {})}</div> ${validate_component(Sto, "Sto").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};