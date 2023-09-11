<template>
  <div class="row">

      <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between" >
          <h4 class="mb-sm-0 font-size-18">{{ props.title }}</h4>
          <div class="page-title-right font-size-16"  v-show="props.pathName">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"  v-for="(item, i) in props.pathName">
                <router-link :to="`/${routeData.linkPage[i]}`">{{ item }}</router-link>
              </li>
              <li class="breadcrumb-item active">{{ props.title  }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script setup>
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";
const route = useRoute();

//รับ props
const props = defineProps({
  title: String,
  pathName:Array,
});

const routeData = reactive({
    linkPage: "",
});

//นำค่าจาก route ไปแสดงใน title bar
onMounted(() => {
  //linlk นำทาง
  routeData.linkPage = route.fullPath.split("/");
});
</script>

<style lang="scss" scoped></style>
