export default function (path?: string) {
  if (!path) {
    path = useRoute().path;
  }
  else {
    path = path?.startsWith('/') ? `${useRuntimeConfig().app.baseURL}${path.slice(1)}` : path;
  }
  return new URL(path, useAppConfig().url).toString();
};
