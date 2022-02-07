import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("@/views/Categories/index.vue"),
  },
  {
    path: "/categories/:id",
    name: "productsByCategories",
    component: () => import("@/views/ProductsList/index.vue"),
    props: { usePagination: false, fetchBy: "category" },
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/ProductsList/index.vue"),
    props: { usePagination: true, fetchBy: "all" },
  },
  {
    path: "/products/:id",
    name: "productPageById",
    component: () => import("@/views/ProductsCart/index.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("@/views/Contacts/index.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404-page",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
