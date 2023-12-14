import Vue from "vue";
import Router from "vue-router";

import NotFound from "../views/NotFound.vue";

Vue.use(Router);
const routes = [
  {
    path: "*",
    component: NotFound,
  },
  {
    path: "/moviesList", // The URL path that corresponds to this route
    component: () => import("@/views/MoviesList.vue"),
  },
  {
    path: "/addMovie", // Another URL path for a different route
    component: () => import("@/views/AddMovie.vue"),
  },
  {
    path: "/designpage", // Another URL path for a different route
    component: () => import("@/views/DesignPage.vue"),
  },
  // Add more routes as needed
];
export default new Router({
  mode: "history", // Choose history or hash mode
  base: process.env.BASE_URL,
  routes,
});
