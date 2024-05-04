

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/destiny/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DVSnHp64.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.B20sN6f-.js"];
export const stylesheets = ["_app/immutable/assets/_page.RWQfhDoB.css"];
export const fonts = [];
