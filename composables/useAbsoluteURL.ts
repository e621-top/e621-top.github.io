export default function (path?: string) {
  // if (!import.meta.server || !import.meta.client) return;
  if (!path) {
    path = useRoute().path;
  }
  else {
    path = path?.startsWith('/') ? `${useRuntimeConfig().app.baseURL}${path.slice(1)}` : path;
  }
  return new URL(path, useAppConfig().url).toString();
  /*
  if (import.meta.client) {
    const t = useAppConfig().url;
    const route = useRoute();
    return new URL(route.path, t).toString();
  } */

  // path = path?.startsWith('/') ? `${useRuntimeConfig().app.baseURL}${path.slice(1)}` : path;
  // return url.protocol + '//' + url.host + path;
};
