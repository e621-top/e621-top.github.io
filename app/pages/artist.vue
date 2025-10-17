<script setup lang="ts">
useHead({
  meta: [{ name: 'description', content: 'Automatically updated top of artists by number of posts on e621.net' }],
});
</script>
<template>
  <div class="container p-3">
    <Title>Artist Top</Title>
    <TagList category="artist" />
  </div>
</template>
<style scoped>
div {
  max-width: 50rem;
}
</style>
