<script setup lang="ts">
import type { Category, Data } from "~/types";
const props = defineProps<{ category: Category }>();

const endpoint_site = "https://e621-top.github.io";
const { data, pending } = useFetch<Data>(`${endpoint_site}/data/${props.category}.json`, { server: false });
const filter = useFilter();

const filtered = computed(() => {
  const { hideMLP, include, exclude } = filter.value;
  return hideMLP || include || exclude;
});

const tags = computed(() => {
  let index = 1;
  const { hideMLP, include, exclude, limit } = filter.value;
  const tags = data.value?.tags
    .filter(t => !(hideMLP && t.name.endsWith("_(mlp)")) &&
      (!include || t.name.match(include)) &&
      (!exclude || !t.name.match(exclude)))
    .map(t => ({ local: index++, ...t }))
    .splice(0, limit);

  return tags;
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
      <table class="table table-striped">
        <colgroup>
          <template v-if="filtered">
            <col style="width:0.5rem">
          </template>
          <col style="width:0.5rem">
          <col style="width:auto">
          <col style="width:5rem">
          <col style="width:1rem">
        </colgroup>
        <thead>
          <th v-if="filtered" v-tooltip title="Local rank" scope="col">
            #
          </th>
          <th v-tooltip:top scope="col" title="Global rank">
            #
          </th>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Count
          </th>
          <th v-tooltip title="Change since last update" scope="col">
            ∆
          </th>
        </thead>
        <tbody v-if="tags">
          <tr v-for="tag in tags" :key="tag.id">
            <th v-if="filtered" scope="row">
              {{ tag.local }}
            </th>
            <th scope="row">
              {{ tag.position }}
            </th>
            <td>
              <NuxtLink target="_blank" :to="`https://e621.net/posts?tags=${tag.name}`">
                {{ tag.name }}
              </NuxtLink>
            </td>
            <td>{{ tag.post_count }}</td>
            <td>{{ (tag?.post_delta ?? 0) > 0 ? "+" : "" }}{{ tag.post_delta ?? "-" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
th,
td {
  padding: 0.25rem 0.5rem;
}
</style>
