import vueCron_ from "./vue3-cron/index.vue";

const components = [vueCron_];

const install = function(Vue) {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export const vueCron = vueCron_;

export default {
  install,
};