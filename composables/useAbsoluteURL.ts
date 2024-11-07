export default function () {
  const url = useRequestURL();

  const getAbsoluteURL = (path?: string) => {
    const baseUrl = url.protocol + "//" + url.host;
    return baseUrl + path;
  };
  return {
    getAbsoluteURL
  };
};

