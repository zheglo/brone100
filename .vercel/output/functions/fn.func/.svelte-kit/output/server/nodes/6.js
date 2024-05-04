

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/international/__lang__/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.hbmV9LLV.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.B20sN6f-.js"];
export const stylesheets = [];
export const fonts = [];
