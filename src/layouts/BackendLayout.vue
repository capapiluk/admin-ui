<template>
  <div id="layout-wrapper">
    <!-- sidebar-->
    <Sidebar />
    <!-- navbar-->
    <Navbar />      
    
    <!-- content-->
    <div class="content-page">
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid px-2 pb-5">
          <router-view />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Footer from "@/components/admin/Footer.vue";
import Navbar from "@/components/admin/Navbar.vue";
import Sidebar from "@/components/admin/Sidebar.vue";
</script>

<style scoped></style>
