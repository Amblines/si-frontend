import HomeScreen from "@/screens/HomeScreen.vue";
import WebsiteScreen from "@/screens/WebsiteScreen.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomeScreen,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/website/:id",
    component: WebsiteScreen,
    meta: {
      layout: AppLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
