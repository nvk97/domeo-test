<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import USelectDropdown from "@/components/utils/USelectDropdown.vue";
import svgSprites from "@/components/UI/svgSprites.vue";

const route = useRoute();
const store = useStore();

const navList = ref([
  {
    label: "Категории",
    href: "/categories",
    type: "dropdown",
  },
  {
    label: "Все товары",
    href: "/products",
    type: "link",
  },
  {
    label: "Контакты",
    href: "/contacts",
    type: "link",
  },
  {
    label: "Корзина",
    href: "/cart",
    type: "link",
  },
]);
const categoriesList = store.state.categories.categoriesList;
</script>

<template>
  <svg-sprites />
  <header class="h-20 rounded-b-xl shadow-lg bg-gray-100 sticky top-0 z-20">
    <section class="container mx-auto flex justify-between items-center h-full">
      <router-link :to="'/'" class="font-bold text-3xl cursor-pointer"
        >Магазин</router-link
      >
      <nav class="h-full">
        <ul class="flex gap-4 h-full">
          <li v-for="(navItem, index) in navList" :key="index">
            <router-link
              v-if="navItem.type === 'link'"
              class="px-4 h-full flex items-center hover:bg-gray-200"
              :to="navItem.href"
              >{{ navItem.label }}</router-link
            >
            <u-select-dropdown
              v-else
              :list="categoriesList"
              :baseHref="navItem.href"
            >
              <router-link
                class="px-4 h-full flex items-center"
                :to="navItem.href"
                >{{ navItem.label }}</router-link
              >
            </u-select-dropdown>
          </li>
        </ul>
      </nav>
    </section>
  </header>
  <main class="container mx-auto py-8" :key="route.path">
    <slot></slot>
  </main>
  <footer></footer>
</template>
