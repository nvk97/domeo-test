<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  state: String,
});
const emits = defineEmits(["change-sort"]);
</script>

<template>
  <div
    @click="$emit('change-sort')"
    class="flex rounded-lg bg-green-400 hover:bg-green-600 transition w-40 justify-center py-4 text-white gap-2 cursor-pointer"
  >
    <svg-template
      class="w-4 h-4 transform -rotate-90 select-none"
      v-if="state !== 'notSorted'"
      :name="`sort-${state}`"
    />
    <div class="select-none">Сортировать</div>
  </div>
</template>
