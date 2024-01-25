<script setup lang="ts">
const props = defineProps<{ tags?: TagCount[] }>();
</script>
<template>
  <table class="table table-striped">
    <colgroup>
      <col style="width:auto">
      <col style="width:5rem">
    </colgroup>
    <thead>
      <th scope="col">
        Name
      </th>
      <th scope="col">
        Count
      </th>
    </thead>
    <tbody v-if="props.tags">
      <tr v-for="tag in props.tags" :key="tag.name">
        <td>
          <NuxtLink target="_blank" :to="`https://e621.net/posts?tags=${tag.name}`">
            {{ tag.name }}
          </NuxtLink>
        </td>
        <td>{{ tag.post_count }}</td>
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
