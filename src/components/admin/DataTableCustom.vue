<template>
  <EasyDataTable
    ref="dataTable"
    :headers="headers"
    :items="items"
    table-class-name="customize-table"
    :search-value="searchValue"
    v-model:items-selected="itemsSelected"
    theme-color="#1c84ee"
    :rows-per-page="10"
    :sort-by="sortBy"
    empty-message="ไม่พบข้อมูลในตาราง"
    border-cell
    buttons-pagination
    rows-per-page-message="แสดงแถว"
    rows-of-page-separator-message="จาก"
  >
    <template #item-operation="item">
      <div class="operation-wrapper" style="font-size: 18px">
        <i class="uil-edit mx-2" @click="editItem(item)"></i>

        <i class="uil-trash" @click="deleteItem(item)"></i>
      </div>
    </template>
  </EasyDataTable>

  <br />
  items selected:<br />
  {{ itemsSelected }}

  <div class="edit-item" v-if="isEditing">
    height:<input type="text" v-model="editingItem.player" />
    <br />
    weight:<input type="text" v-model="editingItem.position" />
    <br />
    <button @click="submitEdit">ok</button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
//เรียงคอลัม
const sortBy = ["player", "team", "number", "position"];

let searchValue = ref("");
let headers = ref([]);
let items = ref([]);

//รับ props
const props = defineProps({
  headers: {
    type: Object,
    deafult: () => [{}],
  },
  items: {
    type: Object,
    deafult: () => [{}],
  },
  searchValue: String,
});

//ตรวจจับ props จาก input
watch(props, () => {
  searchValue.value = props.searchValue;
});

onMounted(() => {
  //set หัวตาราง และข้อมูล
  headers = props.headers;
  items.value = props.items;
});

const itemsSelected = ref([]);

//start ส่วน Action button
const isEditing = ref(false);
const editingItem = reactive({
  player: "",
  position: "",
  id: 0,
});

const deleteItem = (val) => {
  items.value = items.value.filter((item) => item.id !== val.id);
};

const editItem = (val) => {
  isEditing.value = true;
  const { player, position, id } = val;
  editingItem.player = player;
  editingItem.position = position;
  editingItem.id = id;
};

const submitEdit = () => {
  isEditing.value = false;
  const item = items.value.find((item) => item.id === editingItem.id);
  item.player = editingItem.player;
  item.position = editingItem.position;
};

</script>

<style scoped>

</style>
