const translated = {
  "/en/about": "/en/about",
  "/de/ueber-uns": "/de/about",
  "/fr/a-propos": "/fr/about"
};
const reroute = ({ url }) => {
  if (url.pathname in translated) {
    return translated[url.pathname];
  }
};
export {
  reroute
};
