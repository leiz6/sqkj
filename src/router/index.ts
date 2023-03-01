import { createRouter, createWebHistory } from "vue-router";
//路由数组
const routes: any = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/product",
    name: "product",
    component: () => import("@/views/product/index.vue"),
    meta: { title: "产品介绍" },
  },
  {
    path: "/consultation",
    name: "consultation",
    component: () => import("@/views/consultation/index.vue"),
    meta: { title: "深轻咨询" },
  },
  {
    path: "/partner",
    name: "partner",
    component: () => import("@/views/partner/index.vue"),
    meta: { title: "合作计划" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "关于深轻" },
  },
  {
    path: "/join",
    name: "join",
    component: () => import("@/views/join/index.vue"),
    meta: { title: "加入我们" },
  },
  {
    path: "/member",
    name: "member",
    component: () => import("@/views/member/index.vue"),
    meta: { title: "创始人团队" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: { title: "登录",topbarwhite:true },
  },
];
// 路由对象
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});
//路由前置守卫
router.beforeEach((to, from, next) => {
  next();
});
//路由后置守卫
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

export default router;
