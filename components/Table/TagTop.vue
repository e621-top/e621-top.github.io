<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  tags?: Tag[]
  filtered: boolean
}
</script>
<template>
  <table class="table table-striped">
    <colgroup>
      <template v-if="props.filtered">
        <col style="width:0.5rem">
      </template>
      <col style="width:0.5rem">
      <col style="width:auto">
      <col style="width:5rem">
      <col style="width:1rem">
    </colgroup>
    <thead>
      <tr>
        <th v-if="props.filtered" v-tooltip title="Local rank" scope="col">
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
      </tr>
    </thead>
    <tbody v-if="props.tags">
      <tr v-for="tag in props.tags" :key="tag.id">
        <th v-if="props.filtered" scope="row">
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
</template>
<style scoped>
th,
td {
  padding: 0.25rem 0.5rem;
}
</style>
