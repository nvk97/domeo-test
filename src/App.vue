<script setup>
import defaulLayout from "@/components/layouts/default";
import { useStore } from "vuex";
const store = useStore();
store.commit("cart/GET_FROM_LOCAL_STORAGE_CART");
</script>
<template>
  <defaul-layout>
    <router-view />
  </defaul-layout>
</template>

<style>
#app {
  font-family: sans-serif;
}
</style>
