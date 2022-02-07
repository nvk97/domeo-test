<script setup>
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  state: String,
  photoUrl: String,
});
const emits = defineEmits(["set-state"]);
</script>

<template>
  <moon-loader
    v-if="state === 'pending'"
    class="w-full h-full flex justify-center items-center"
    :color="'gray'"
  />
  <img
    v-if="state === 'pending' || state === 'success'"
    class="object-cover w-full h-full opacity-0 transition-opacity"
    :class="{ 'opacity-100': state === 'success' }"
    :src="photoUrl"
    @load.once="$emit('set-state', 'success')"
    @error.once="$emit('set-state', 'error')"
  />
  <img v-if="state === 'error'" :src="require('@/assets/img/404.png')" />
</template>
