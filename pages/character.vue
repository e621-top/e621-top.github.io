<script setup lang="ts">
useHead({
  meta: [{ name: 'description', content: 'Automatically updated top of characters by number of posts on e621.net' }],
});
</script>
<template>
  <div class="container p-3">
    <Title>Character Top</Title>
    <TagList category="character" />
  </div>
</template>
<style scoped>
div {
  max-width: 50rem;
}
</style>
