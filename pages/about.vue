<script setup lang="ts">
useHead({
  meta: [
    { name: "description", content: "About e621-top.github.io" }
  ]
});
</script>
<template>
  <div class="container p-3">
    <Title>About</Title>
    <div class="card">
      <div class="card-header text-center">
        <b>
          e621-top.github.io
        </b>
      </div>
      <div class="card-body">
        <p>
          Made by
          <NuxtLink to="https://github.com/Virenbar" target="_blank">
            Virenbar
          </NuxtLink>
          by request from a few friends.
        </p>
        <p>
          The data source is
          <NuxtLink to="https://github.com/e621-top/data" target="_blank">
            this repository{{ }}
          </NuxtLink>,
          which publishes new data every day using Github Actions and Github Pages.
        </p>
        <div class="text-center">
          <div class="btn-group">
            <NuxtLink class="btn btn-primary" to="https://e621.net/" target="_blank">
              e621.net
            </NuxtLink>
            <button class="btn btn-primary disabled">
              and
            </button>
            <NuxtLink class="btn btn-primary" to="https://e926.net/" target="_blank">
              e926.net
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
div {
  max-width: 50rem;
}
</style>
