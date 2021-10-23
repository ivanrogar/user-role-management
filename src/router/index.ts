import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@app/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/role/new",
    name: "New Role",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/role/NewRole.vue"),
  },
  {
    path: "/role/:id",
    name: "Edit Role",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/role/EditRole.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
