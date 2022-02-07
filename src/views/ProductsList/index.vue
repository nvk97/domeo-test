<script setup>
import ProductCard from "@/components/utils/ProductCard.vue";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch, defineProps } from "vue";
import useProduct from "@/composables/useProduct";
import SortDropdown from "@/components/utils/SortDropdown.vue";
const {
  fetchAllProducts,
  fetchProductsListByCategoryId,
  productsList,
  productsListState,
  sortState,
  changeSort,
} = useProduct();
const props = defineProps({
  usePagination: Boolean,
  fetchBy: String,
});
const route = useRoute();
const router = useRouter();
const minPage = 1;
const maxPage = 10;
const currentPage = ref(parseInt(route.query.page) || minPage);

const prevPage = () => {
  currentPage.value = currentPage.value - 1;
  router.push({ query: { page: currentPage.value } });
};

const nextPage = () => {
  currentPage.value = currentPage.value + 1;
  router.push({ query: { page: currentPage.value } });
};
if (props.fetchBy === "all") {
  watch(
    () => currentPage.value,
    () => {
      fetchAllProducts(currentPage.value);
    }
  );
  fetchAllProducts(currentPage.value);
} else if (props.fetchBy === "category") {
  fetchProductsListByCategoryId(route.params.id);
}
</script>

<template>
  <div class="flex justify-end">
    <sort-dropdown class="mb-4" :state="sortState" @change-sort="changeSort" />
  </div>
  <div class="grid grid-cols-4 gap-4 relative">
    <product-card
      v-for="product in productsList"
      :productInfo="product"
      :key="product.id"
    />
    <div
      class="fixed inset-0 bg-white-t backdrop-filter backdrop-blur-md z-10"
      v-if="productsListState === 'pending'"
    >
      <moon-loader
        class="w-full h-full flex justify-center items-center"
        :color="'black'"
      />
    </div>
  </div>
  <div v-if="usePagination" class="flex justify-center mt-8 gap-4 items-center">
    <div
      class="rounded-lg w-8 h-8 bg-green-400 flex items-center justify-center cursor-pointer"
      @click="prevPage"
      :class="{
        'cursor-not-allowed opacity-20 pointer-events-none':
          currentPage <= minPage,
      }"
    >
      <svg-template
        class="w-4 h-4 transform rotate-90 text-white"
        :name="'chevron-down'"
      />
    </div>
    <div
      class="rounded-2xl w-16 h-16 bg-green-400 flex items-center justify-center text-white text-2xl select-none"
    >
      {{ currentPage }}
    </div>
    <div
      class="rounded-lg w-8 h-8 bg-green-400 flex items-center justify-center cursor-pointer"
      :class="{
        'cursor-not-allowed opacity-20 pointer-events-none':
          currentPage >= maxPage,
      }"
      @click="nextPage"
    >
      <svg-template
        class="w-4 h-4 transform -rotate-90 text-white"
        :name="'chevron-down'"
      />
    </div>
  </div>
</template>
