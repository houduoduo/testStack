import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
    children: [
      {
        path: "/categories/create",
        name: "CategoryEide",
        component: () => import("../views/CategoryEdit.vue"),
      }
    ]
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
    children: [
      {
        path: "/categories/list",
        name: "CategoryEide",
        component: () => import("../views/CategoryList.vue"),
      }
    ]
    
    
  },
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
