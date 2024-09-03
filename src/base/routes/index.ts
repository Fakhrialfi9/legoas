// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Layout from "../layout/layout.vue";
import Pages from "../../ui/views/pages.vue";

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Pages",
        component: Pages,
      },
    ],
  },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
