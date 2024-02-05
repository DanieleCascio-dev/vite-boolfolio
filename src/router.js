import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppShow from "./pages/AppShow.vue";
import pageNotFound from "./pages/pageNotFound.vue";

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
    {
      path: "/show/:slug",
      name: "show",
      component: AppShow,
    },
    {
      //Not found page, ultima ad essere inserita
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: pageNotFound,
    },
  ],
});

export { router };
