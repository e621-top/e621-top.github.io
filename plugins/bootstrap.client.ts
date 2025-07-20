import * as bootstrap from 'bootstrap';
import { Tooltip } from 'bootstrap';
// const Tooltip = bootstrap.Tooltip;

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive('tooltip', {
    mounted(el, binding) {
      const placement = binding.arg as Tooltip.PopoverPlacement || 'top';
      new Tooltip(el, { placement });
    },
  });
  return {
    provide: {
      bootstrap: bootstrap,
    },
  };
});
