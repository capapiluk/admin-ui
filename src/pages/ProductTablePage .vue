<template>
  <vue3-progress-bar></vue3-progress-bar>
  <TitleBar title="ตารางสินค้า" />
  <div class="card" v-if="productsStore.loading">
    <div class="card-header justify-content-between d-flex align-items-center">
      <h4 class="card-title">ตารางสินค้า</h4>
    </div>
    <div class="card-body">
      <div class="row">
      <div class="px-4">
        <DataTableCustom
          :headers="headers"
          :items="listProduct"
          :searchValue="searchValue"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import TitleBar from "@/components/admin/TitleBar.vue";
import DataTableCustom from "@/components/admin/DataTableCustom.vue";
import { ref, onMounted, computed } from "vue";
import { useProductsStore } from "../store/useProductStore";
const productsStore = useProductsStore();

onMounted(() => productsStore.fetchProducts());

const listProduct = computed(() => productsStore.listProducts);

let searchValue = ref("");

const headers = [
  { text: "ลำดับ", value: "id", sortable: true },
  { text: "หัวข้อ", value: "title", sortable: true },
  { text: "ราคา", value: "price", sortable: true },
];
</script>

<style scoped></style>
