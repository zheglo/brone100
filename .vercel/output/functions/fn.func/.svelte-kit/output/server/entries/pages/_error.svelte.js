import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<strong data-svelte-h="svelte-1a4mrmz">Uncaught Error: No valid element provided</strong>`;
});
export {
  Error as default
};
