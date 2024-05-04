

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hero/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CKpcODP7.js","_app/immutable/chunks/5.B9yRTFvF.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.B20sN6f-.js","_app/immutable/chunks/stagger.es.B8K67XSV.js"];
export const stylesheets = ["_app/immutable/assets/5.BasYN5ss.css"];
export const fonts = [];
