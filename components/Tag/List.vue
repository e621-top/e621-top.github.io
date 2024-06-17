<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  category: Category
}

const inc = 250;
const limit = ref(inc);

function more() {
  limit.value += inc;
}

const endpoint_site = "https://e621-top.github.io";
const { data, pending } = useFetch<Data>(`${endpoint_site}/data/${props.category}.json`, { server: false });
const filter = useFilter();

const filtered = computed(() => {
  const { hideMLP, include, exclude } = filter.value;
  return hideMLP || !!include || !!exclude;
});

const tags = computed(() => {
  let index = 1;
  const { hideMLP, include, exclude } = filter.value;
  const tags = data.value?.tags
    .filter(t => !(hideMLP && t.name.endsWith("_(mlp)")) &&
      (!include || t.name.match(include)) &&
      (!exclude || !t.name.match(exclude)))
    .map(t => ({ local: index++, ...t }))
    .splice(0, limit.value);

  return tags || [];
});
</script>
<template>
  <TagFilter :category="props.category" />
  <div v-if="pending" class="card my-1">
    <div class="card-header text-muted">
      Loading...
    </div>
  </div>
  <div v-else class="card my-1">
    <div class="card-header text-muted text-end">
      Updated at: {{ formatDate(new Date(data?.updated_at ?? 0)) }}
    </div>
    <div class="card-body">
      <TableTagTop :tags="tags" :filtered="filtered" />
    </div>
    <div v-if="(data?.tags.length ?? 0) > tags.length" class="card-footer text-center">
      <button class="btn btn-primary" @click="more">
        Show more
      </button>
    </div>
  </div>
</template>
<style scoped>
th,
td {
  padding: 0.25rem 0.5rem;
}
</style>
