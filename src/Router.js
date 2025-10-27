import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";
import { createRouter, createWebHistory } from "vue-router";

const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/collatz", component: CollatzComponent },
  { path: "/tabla", component: TablaMultiplicar },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
