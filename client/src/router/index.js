import Vue from "vue";
import VueRouter from "vue-router";
import Clients from "../views/Clients.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Clients",
    component: Clients,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
