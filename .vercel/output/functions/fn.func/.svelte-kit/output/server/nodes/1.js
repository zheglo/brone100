

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CNFWo-Ur.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.B20sN6f-.js"];
export const stylesheets = [];
export const fonts = [];
