export const useData = (category: Category, limit: Ref<number>) => {
  const endpoint_site = useAppConfig().url;
  const { data, pending } = useFetch<Data>(`${endpoint_site}/data/${category}.json`, { server: false });

  const filter = useFilter();

  const filtered = computed(() => {
    const { hideMLP, include, exclude } = filter.value;
    return hideMLP || !!include || !!exclude;
  });

  const tags = computed(() => {
    let index = 1;
    const { hideMLP, include, exclude } = filter.value;
    const tags = data.value?.tags
      .filter(t => !(hideMLP && t.name.endsWith('_(mlp)'))
        && (!include || t.name.match(include))
        && (!exclude || !t.name.match(exclude)))
      .map(t => ({ local: index++, ...t }))
      .splice(0, limit.value);

    return tags || [];
  });

  return { data, pending, tags, filtered };
};
