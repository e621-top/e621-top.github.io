function getHash() {
  return new URLSearchParams(location.hash.replace('#', '?'));
}

export default function () {
  return { getHash };
}
