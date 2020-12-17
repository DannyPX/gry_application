import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/donate",
    name: "Donate",
    component: () => import("../views/Donate.vue")
  },
  {
    path: "/newsfeed",
    name: "Newsfeed",
    component: () => import("../views/Newsfeed.vue")
  },
  {
    path: "/donate-money",
    name: "/Donate-Money",
    component: () => import("../views/DonateMoney.vue")
  },
  {
    path: "/donate-goods",
    name: "/Donate-Goods",
    component: () => import("../views/DonateGoods.vue")
  },
  {
    path: "/donate-product",
    name: "/Donate-Product",
    component: () => import("../views/DonateProduct.vue")
  },
  {
    path: "/donate-complete",
    name: "Donate-Complete",
    component: () => import("../views/DonateComplete.vue"),
    props: true
  },
  {
    path: "/project-details",
    name: "/Project-Details",
    component: () => import("../views/ProjectDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
