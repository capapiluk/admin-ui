<template>
  <TitleBar title="ตารางสินค้า" />
  <div class="card">
    <div class="card-header justify-content-between d-flex align-items-center">
      <h4 class="card-title">ตารางสินค้า</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-3 mb-4">
          <input
            v-model="params.search"
            type="text"
            class="form-control"
            placeholder="ค้นหา..."
          />
        </div>
        <vue3-datatable
          :rows="rows"
          :columns="cols"
          :loading="loading"
          :totalRows="total_rows"
          :pageSize="params.pagesize"
          :sortable="true"
          :hasCheckbox="true"
          :pageSizeOptions="[5, 10, 15, 30, 50]"
          :sortColumn="params.sort_column"
          :sortDirection="params.sort_direction"
          :search="params.search"
          skin="bh-table-bordered"
          noDataContent="ไม่พบข้อมูลในตาราง"
          ref="datatable"
          
          paginationInfo="{0} ถึง {1} จาก {2}"
          @rowSelect="rowSelect"
        >
          <template #actions="data">
            <div class="flex gap-1">
              <button
                type="button"
                class="btn btn-danger btn-sm mx-1"
                @click="viewUser(data.value)"
              >
                ลบ
              </button>
              <button
                type="button"
                class="btn btn-warning btn-sm"
                @click="deleteUser(data.value)"
              >
                แก้ไข
              </button>
            </div>
          </template>
        </vue3-datatable>
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleBar from "@/components/admin/TitleBar.vue";
import { ref, reactive, onMounted } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import axios from "axios";
const datatable = ref(null);

onMounted(() => {
  getUsers();
});
// methods
const item = ref();

const rowSelect = () => {
  const selected = datatable.value.getSelectedRows();
  item.value = selected;
};

const loading = ref(true);
const total_rows = ref(0);
const params = reactive({
  current_page: 1,
  pagesize: 5,
  sort_column: "id",
  sort_direction: "asc",
  search: "",
});
const rows = ref(null);
const cols =
  ref([
    { field: "id", title: "ID", isUnique: true },
    { field: "name", title: "First Name" },
    { field: "phone", title: "Last Name" },
    { field: "username", title: "Email" },
    { field: "actions", title: "Actions" },
  ]) || [];

const getUsers = async () => {
  try {
    loading.value = true;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response.data;
    rows.value = data;

    total_rows.value = data?.meta?.total;
  } catch {}

  loading.value = false;
};

const viewUser = (user) => {
  alert("View User \n" + user.id + ", " + user.name);
  getSelectedRows();
};
const deleteUser = (user) => {
  alert("Delete User \n" + user.id + ", " + user.name);
};
</script>
<style>

</style>
