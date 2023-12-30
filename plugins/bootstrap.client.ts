import * as bootstrap from "bootstrap";

const Tooltip = bootstrap.Tooltip;

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive("tooltip", {
    mounted(el, binding) {
      const placement = binding.arg as any || "top";
      new Tooltip(el, { placement });
    }
  });
  return {
    provide: {
      bootstrap: bootstrap
    }
  };
});
