import HomeScreen from "@/screens/HomeScreen.vue";
import WebsiteScreen from "@/screens/WebsiteScreen.vue";
import AuthScreen from "@/screens/AuthScreen.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAccount } from "@/hooks/account";

const routes = [
  {
    path: "/",
    component: HomeScreen,
    meta: {
      layout: AppLayout,
      authRequired: true,
    },
  },
  {
    path: "/website/:website",
    component: WebsiteScreen,
    meta: {
      layout: AppLayout,
      authRequired: true,
    },
  },
  {
    path: "/auth",
    component: AuthScreen,
    meta: {
      layout: AuthLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { code } = useAccount();

  if (to.meta.authRequired && !code.value) {
    next({ path: "/auth" });
  }

  if (code.value && to.path === "/auth") {
    next({ path: "/" });
  }

  next();
});

export default router;
