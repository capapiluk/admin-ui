<template>
  <Notivue v-slot="item">
    <Notifications :item="item" 
    :theme="pastelTheme" 
    />
    
  </Notivue>
  <RouterView />
</template>

<script setup>
import { Notivue, Notifications,pastelTheme } from "notivue";

</script>

<style lang="scss" scoped></style>
