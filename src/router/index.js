import { createRouter, createWebHistory } from "vue-router";
import BackendLayout from "../layouts/BackendLayout.vue";
import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage.vue";
import ProductTablePage from "../pages/ProductTablePage .vue";

const routes = [
  {
    path: "/",
    name: "Backend",
    component: BackendLayout,

    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
        meta: {
          title: "หน้าหลัก",
        },
      },
      {
        path: "/product",
        name: "product",
        component: ProductPage,
        meta: {
          title: "รายการสินค้า",
        },
      },
      {
        path: "/table",
        name: "table",
        component: ProductTablePage,
        meta: {
          title: "ตารางสินค้า",
        },
      }
    ],
  },
];
const router = createRouter({ history: createWebHistory(), routes });

// การเรียกทำงานก่อนที่ route จะโหลด
router.beforeEach((to, _, next) => {
  if (typeof to.meta.title == "string") {
    document.title = to.meta.title;
  }
  next();
});

export default router;
