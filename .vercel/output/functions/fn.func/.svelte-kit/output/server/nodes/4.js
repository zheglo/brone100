

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/heritage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.hbmV9LLV.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.B20sN6f-.js"];
export const stylesheets = [];
export const fonts = [];
