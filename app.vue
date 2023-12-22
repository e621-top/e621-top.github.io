<script setup lang="ts">
useHead({
  title: "Character Top - e621",
  link: [
    { rel: "icon", type: "image/png", href: "https://e621.net/favicon.ico" }
  ],
  meta: [
    { name: "description", content: "Automatic e621 character top" }
  ],
  htmlAttrs: {
    "data-bs-theme": "dark"
  }
});
useSeoMeta({
  ogType: "website",
  ogTitle: "Character Top - 621",
  ogSiteName: "Character Top - 621",
  ogUrl: "https://e621-top.github.io/",
  ogDescription: "Automatic e621 character top",
  ogImage: "https://e621-top.github.io/img/logo-crystal.png",
  ogImageSecureUrl: "https://e621-top.github.io/img/logo-crystal.png"
});
</script>
<template>
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>
