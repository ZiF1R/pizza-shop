import { createRouter, createWebHistory } from "vue-router";
import OrderPage from "../views/OrderPage.vue";

const routes = [
  {
    path: "/",
    name: "OrderPage",
    component: OrderPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
