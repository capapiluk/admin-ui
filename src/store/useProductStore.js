import { defineStore } from "pinia";
import axios from "axios";
const urlApi = `${import.meta.env.VITE_URL_API}`;
import { ref, computed } from "vue";
import { useProgress } from "@marcoschulte/vue3-progress";

import { usePush } from 'notivue'

export const useProductsStore = defineStore("useProductsStore", () => {
  //alert
  const push = usePush()
  //เก็บค่าจาก api
  const products = ref({});
  //ตรวจสอบการเปลี่ยนแปลงของ data
  const listProducts = computed(() => products.value);
  //นับจำนวน data
  const loading = computed(() => products.value.length > 0);

  //get api products
  const fetchProducts = async () => {
    //start progress bar
    const progress = useProgress().start(); // Create a new progress bar for this component
    await axios
      .get(`${urlApi}/products`)
      .then((response) => {
        products.value = response.data.products;
        //stop progress bar
        console.log(response)
        progress.finish();
      })
      .catch((err) => {
        console.log(err)
        push.error({
          title: 'เกิดข้อผิดพลาด',
          message: 'ไม่สามารถติดต่อ Server ได้'
        })
        //stop progress bar
        progress.finish();
      });
  };
  return { fetchProducts, listProducts, loading };
});
