<script setup>
import { useStore } from "vuex";
const store = useStore();
const categoriesList = store.state.categories.categoriesList;
</script>

<template>
  <div class="text-4xl">Список категорий:</div>
  <ul class="grid grid-cols-4 gap-4 mt-8">
    <li v-for="category in categoriesList" :key="category.id">
      <router-link :to="`/categories/${category.id}`">
        <div
          class="p-4 bg-gray-400 h-64 flex items-center justify-center text-white text-2xl font-medium cursor-pointer"
        >
          {{ category.name }}
        </div>
      </router-link>
    </li>
  </ul>
</template>
