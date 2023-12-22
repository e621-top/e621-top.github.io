<script setup lang="ts">
const config = useRuntimeConfig();
const repository = config.public.repository;

const branch = config.public.branch;
const branchURL = `${repository}/tree/${branch}`;

const tree = config.public.hash.substring(0, 7);
const treeURL = `${repository}/tree/${config.public.hash}`;

const date = formatDate(new Date(config.public.date)).replaceAll(".", "");
</script>
<template>
  <footer class="container-fluid py-1 px-3 d-flex justify-content-between font-monospace">
    <div>
      Made with
      <NuxtLink target="_blank" to="https://nuxt.com/">
        Nuxt
      </NuxtLink>
      and
      <NuxtLink target="_blank" to="https://pages.github.com/">
        GitHub Pages
      </NuxtLink>
    </div>

    <div class="d-none d-md-block">
      Build:
      <NuxtLink :to="branchURL" target="_blank">
        {{ config.public.branch }}
      </NuxtLink>
      <span v-if="tree != 'unknown'">@<NuxtLink :to="treeURL" target="_blank"> {{ tree }} </NuxtLink></span>
      <span>#{{ date }}</span>
    </div>
  </footer>
</template>
