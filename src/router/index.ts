import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout/Layout.js";
import { user } from "@/router/modules/user";
import { example } from "@/router/modules/example";
import { setupRouter } from "./setupRouter";

const { beforeEach, beforeResolve, afterEach } = setupRouter();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
    },
    ...user,
    ...example,
  ],
});

beforeEach(router);
// beforeResolve(router);
afterEach(router);

export default router;
