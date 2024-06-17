<script setup lang="ts">
const title = "e621-top";
const description = "Automatically updated top of artists and characters by number of posts on e621.net";
const logo = "https://e621-top.github.io/img/logo-top.png";

useHead({
  titleTemplate: (t) => (t ? `${t} - ` : "") + title,
  meta: [
    { name: "description", content: description }
  ],
  htmlAttrs: { lang: "en", "data-bs-theme": "dark" }
});
useSeoMeta({
  ogType: "website",
  ogTitle: title,
  ogSiteName: title,
  ogUrl: "https://e621-top.github.io/",
  ogDescription: description,
  ogImage: logo,
  ogImageSecureUrl: logo,
  twitterTitle: title,
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
