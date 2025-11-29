import { createRouter, createWebHistory } from "vue-router";
import Lab1PY00119 from "../components/lab1.vue";

const routes = [{ path: "/lab1", component: Lab1PY00119 }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
