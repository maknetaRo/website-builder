import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/builder",
    name: "builder",
    component: () =>
      import(/* webpackChunkName: "builder" */ "../views/BuilderView.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../views/DemoView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
