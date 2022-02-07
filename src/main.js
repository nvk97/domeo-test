import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind/tailwind.css";
import "./assets/css/styles.css";
import svgTemplate from "@/components/UI/svgTemplate";

createApp(App)
  .use(store)
  .use(router)
  .component("svg-template", svgTemplate)
  .mount("#app");
