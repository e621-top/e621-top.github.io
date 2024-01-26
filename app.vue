<script setup lang="ts">
const logo = "https://e621-top.github.io/img/logo-top.png";
const description = "Automatically updated top of artists and characters by number of posts on e621.net";

useHead({
  titleTemplate: (title) => (title ? `${title} - ` : "") + "e621-top",
  meta: [
    { name: "description", content: description }
  ],
  htmlAttrs: { lang: "en", "data-bs-theme": "dark" }
});
useSeoMeta({
  ogType: "website",
  ogTitle: "621-top",
  ogSiteName: "621-top",
  ogUrl: "https://e621-top.github.io/",
  ogDescription: description,
  ogImage: logo,
  ogImageSecureUrl: logo,
  twitterTitle: "e621-top",
  twitterDescription: description,
  twitterImage: logo,
  twitterCard: "summary"
});
</script>
<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>
