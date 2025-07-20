import { execSync } from 'child_process';

const exec = (command: string) => execSync(command).toString().trim();
const repository = 'https://github.com/e621-top/e621-top.github.io';
const branch = exec('git branch --show-current') || process.env.HEAD;
const hash = exec('git rev-parse HEAD') || process.env.COMMIT_REF;
const date = new Date().toISOString();

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-gtag',
  ], css: ['@/assets/css/styles.scss'],
  runtimeConfig: {
    public: { repository, branch, hash, date },
  },
  compatibilityDate: '2025-07-20',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  gtag: { id: 'G-J31NMXDD2E' },
});
