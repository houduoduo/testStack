import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    children: [
      {
        path: "/categories/create",
        component: () => import("../views/CategoryEdit.vue"),
      },
      {
        path: "/categories/edit/:id",
        component: () => import("../views/CategoryEdit.vue"),
        props: true
      },
      {
        path: "/categories/list",
        component: () => import("../views/CategoryList.vue"),
      },
      {
        path: "/items/create",
        component: () => import("../views/ItemEdit.vue"),
      },
      {
        path: "/items/edit/:id",
        component: () => import("../views/ItemEdit.vue"),
        props: true
      },
      {
        path: "/items/list",
        component: () => import("../views/ItemList.vue"),
      },
      {
        path: "/heroes/create",
        component: () => import("../views/HeroEdit.vue"),
      },
      {
        path: "/heroes/edit/:id",
        component: () => import("../views/HeroEdit.vue"),
        props: true
      },
      {
        path: "/heroes/list",
        component: () => import("../views/HeroList.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
