import {createWebHistory, createRouter} from "vue-router";
import type {RouteRecordRaw} from "vue-router";

const route: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(),
  routes: route,
});

export default router;
