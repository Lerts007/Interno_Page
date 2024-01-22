import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./page/Home.vue";
import ErrorPage from "./page/ErrorPage.vue";
import Blog from "./page/Blog.vue";
import BlogDetails from "./page/BlogDetails.vue";

import "@/assets/style/scss/main.scss";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Blog",
      path: "/blog",
      component: Blog,
    },
    {
      name: "BlogDetails",
      path: "/blog_details",
      component: BlogDetails,
    },
    {
      name: "ErrorPage",
      path: "/:catchAll(.*)",
      component: ErrorPage,
    },
  ],
});

createApp(App).use(router).mount("#app");
