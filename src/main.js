import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query";

// import fonts

import "vfonts/Inter.css";

createApp(App).use(router).use(VueQueryPlugin).mount("#app");
