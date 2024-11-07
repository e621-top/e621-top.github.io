import { execSync } from "child_process";

const exec = (command: string) => execSync(command).toString().trim();
const branch = exec("git branch --show-current") || process.env.HEAD;
const hash = exec("git rev-parse HEAD") || process.env.COMMIT_REF;
const date = new Date().toISOString();

export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  modules: [
    "@nuxt/eslint",
    ["nuxt-gtag", { id: "G-2RY5LX8LQK" }]
  ],
  runtimeConfig: {
    public: {
      repository: "https://github.com/e621-top/e621-top.github.io",
      branch,
      hash,
      date
    }
  }
});
