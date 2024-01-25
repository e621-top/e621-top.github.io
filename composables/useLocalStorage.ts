export default function () {
  const storage = window.localStorage;

  function getItem<K extends keyof Storage>(key: K): Storage[K] | null {
    const value = storage.getItem(key);
    if (!value) { return null; }
    return JSON.parse(value) as Storage[K];
  }

  function setItem<K extends keyof Storage>(key: K, value: Storage[K]) {
    storage.setItem(key, JSON.stringify(value));
  }

  return {
    getItem,
    setItem
  };
}

interface Storage {
  favorites: FavoriteData
}

