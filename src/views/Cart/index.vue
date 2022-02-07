<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import AddToCardBtn from "@/components/utils/AddToCardBtn.vue";
const store = useStore();
let state = ref("hidden");
const cartList = computed(() => store.state.cart.cart);
const cartIsEmpty = computed(() => cartList.value.length === 0);
const showMessage = () => {
  state.value = "active";
};
const closeMessage = () => {
  state.value = "hidden";
  store.commit("cart/CLEAR_CART_STATE");
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="cartItem in cartList"
      :key="cartItem.id"
      class="bg-gray-100 p-10 rounded-lg shadow-sm flex items-center justify-between"
    >
      <div class="text-2xl">{{ cartItem.title }}</div>
      <div>
        <add-to-card-btn
          :product="cartItem"
          :photo="{ url: cartItem.url, thumbnailUrl: cartItem.thumbnailUrl }"
        />
      </div>
    </div>
    <button
      v-if="!cartIsEmpty"
      @click="showMessage"
      class="bg-green-300 hover:bg-green-600 transition p-10 rounded-lg shadow-sm flex items-center justify-center text-4xl font-medium text-white"
    >
      Купить
    </button>
    <div
      v-else
      class="flex items-center text-4xl text-gray-400 justify-center h-96 text-center"
    >
      Корзина пуста
    </div>
    <div
      v-if="state === 'active'"
      class="fixed inset-0 bg-white-t backdrop-filter backdrop-blur-md z-50"
    >
      <div class="flex items-center justify-center h-full p-4">
        <div class="bg-white p-16 rounded-lg relative">
          <div class="text-xl">Спасибо за покупку</div>
          <div
            @click="closeMessage"
            class="absolute top-2 right-4 text-xs text-gray-300 cursor-pointer"
          >
            Закрыть
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
