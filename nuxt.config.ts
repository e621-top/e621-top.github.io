export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  modules: [
    ["nuxt-gtag", { id: "G-2RY5LX8LQK" }]
  ],
  runtimeConfig: {
    public: {
      repository: "https://github.com/e621-top/e621-top.github.io",
      branch: process.env.HEAD || "master",
      hash: process.env.COMMIT_REF || "unknown",
      date: new Date().toISOString()
    }
  }
});
