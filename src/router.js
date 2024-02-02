import { createRouter, createWebHistory } from "vue-route";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
  ],
});

export { router };
