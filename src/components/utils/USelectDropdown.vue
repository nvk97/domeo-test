<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  list: Array,
  baseHref: String,
});

const isListVisible = ref(false);

const hideList = () => {
  isListVisible.value = false;
};
const showList = () => {
  isListVisible.value = true;
};
</script>

<template>
  <div
    class="h-full relative hover:bg-gray-200"
    @mouseenter="showList"
    @mouseleave="hideList"
  >
    <slot></slot>
    <div>
      <ul
        class="absolute mt-0 bg-gray-200 p-4 flex flex-col gap-y-3 rounded-b-md shadow-md"
        v-show="isListVisible"
      >
        <li v-for="item in list" :key="item.id">
          <router-link
            class="hover:text-gray-600"
            :to="`${baseHref}/${item.id}`"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
