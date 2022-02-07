<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { watch, computed } from "vue";
import usePhoto from "@/composables/usePhoto";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import AddToCardBtn from "@/components/utils/AddToCardBtn.vue";
import PhotoWithLoader from "@/components/utils/PhotoWithLoader.vue";

const { state, photoData, getPhoto, setState } = usePhoto();
const route = useRoute();
const store = useStore();
const product = computed(() => store.state.products.product);
const productState = computed(() => store.state.products.state.product);

const fetchProductById = (id) => {
  store.dispatch("products/getProductById", id);
};
fetchProductById(route.params.id);
getPhoto(route.params.id);
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="text-4xl font-semibold mb-4">{{ product.title }}</div>
    <div class="flex gap-8">
      <div>
        <div class="w-96 h-96">
          <photo-with-loader
            :state="state"
            :photoUrl="photoData.url"
            @set-state="setState"
          />
        </div>
      </div>
      <div class="w-96 flex flex-col justify-center gap-8">
        <div class="text-xl font-semibold">Описание:</div>
        <div class="text-xl">{{ product.body }}</div>
        <add-to-card-btn :product="product" :photo="photoData" />
      </div>
    </div>
    <div
      class="fixed inset-0 bg-white-t backdrop-filter backdrop-blur-md z-10"
      v-if="productState === 'pending'"
    >
      <moon-loader
        class="w-full h-full flex justify-center items-center"
        :color="'black'"
      />
    </div>
  </div>
</template>
