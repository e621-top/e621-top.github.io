<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  category: Category
}

const inc = 250;
const limit = ref(inc);
const more = () => limit.value += inc;

const { data, pending, tags, filtered } = useData(props.category, limit);
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
