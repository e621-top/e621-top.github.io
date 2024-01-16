<script setup lang="ts">
const logo = "https://e621-top.github.io/img/logo-top.png";

useHead({
  titleTemplate: (title) => (title ? `${title} - ` : "") + "e621-top",
  meta: [
    { name: "description", content: "Automatically updated artist and character tag tops of e621.net" }
  ],
  htmlAttrs: { lang: "en", "data-bs-theme": "dark" }
});
useSeoMeta({
  ogType: "website",
  ogTitle: "621-top",
  ogSiteName: "621-top",
  ogUrl: "https://e621-top.github.io/",
  ogDescription: "Automatically updated artist and character tag tops of e621.net",
  ogImage: logo,
  ogImageSecureUrl: logo,
  twitterTitle: "e621-top",
  twitterDescription: "Automatically updated artist and character tag tops of e621.net",
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
