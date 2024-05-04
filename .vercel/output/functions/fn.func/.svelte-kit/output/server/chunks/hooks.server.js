async function handle({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace(
      "%unocss-svelte-scoped.global%",
      `<link href="/_app/immutable/assets/unocss-svelte-scoped-global.D_9cg5qK.css" rel="stylesheet" />`
    )
  });
  return response;
}
export {
  handle
};
