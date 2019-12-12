import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          component: Home
        },
        {
          path: "/about",
          component: About
        }
      ]
    }
  ]
});
