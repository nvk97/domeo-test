<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  product: Object,
  photo: Object,
});
const store = useStore();
const isProductExistInCart = computed(
  () =>
    store.getters["cart/cartCountsById"].findIndex(
      (val) => val.id === props.product.id
    ) !== -1
);

const countInCart = computed(() => {
  return (
    store.getters["cart/cartCountsById"].find(
      (item) => item.id === props.product.id
    ).count || 0
  );
});
const setProductToCart = () => {
  const product = { ...props.product };
  const photo = {
    thumbnailUrl: props.photo.thumbnailUrl,
    url: props.photo.url,
  };
  const res = Object.assign(product, photo);
  store.commit("cart/SET_PRODUCT_TO_CART_STATE", res);
};
const incCountInCart = () => {
  store.commit("cart/INC_COUNT_IN_CART_BY_ID", props.product.id);
};
const decCountInCart = () => {
  store.commit("cart/DEC_COUNT_IN_CART_BY_ID", props.product.id);
};
</script>

<template>
  <button
    @click.stop="setProductToCart"
    v-if="!isProductExistInCart"
    class="w-full rounded-xl shadow-sm p-3 bg-green-400 text-white font-medium text-xl hover:bg-green-700 transition hover:shadow-lg"
  >
    Добавить в корзину
  </button>
  <div v-else class="flex justify-center gap-4">
    <div
      @click="decCountInCart"
      class="flex-1 text-xl rounded-lg hover:bg-green-600 transition select-none bg-green-400 text-white py-2 px-4 flex items-center justify-center font-medium cursor-pointer"
    >
      -
    </div>
    <div
      class="text-xl w-20 rounded-lg bg-green-400 text-white py-3 px-4 flex items-center justify-center font-medium select-none"
    >
      {{ countInCart }}
    </div>
    <div
      @click="incCountInCart"
      class="flex-1 text-xl rounded-lg hover:bg-green-600 transition select-none bg-green-400 text-white py-2 px-4 flex items-center justify-center font-medium cursor-pointer"
    >
      +
    </div>
  </div>
</template>
