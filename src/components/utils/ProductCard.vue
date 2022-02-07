<script setup>
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import PhotoWithLoader from "@/components/utils/PhotoWithLoader";
import AddToCardBtn from "@/components/utils/AddToCardBtn.vue";
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import twoWords from "@/assets/js/utils/getTwoFirstWord";
import formatDescription from "@/assets/js/utils/formatDescription";
import { getPhotoByQuery } from "@/api/photos";
import usePhoto from "@/composables/usePhoto";

const { state, photoData, getPhoto, setState } = usePhoto();

const props = defineProps({
  productInfo: Object,
});
const router = useRouter();
getPhoto(props.productInfo.id);
</script>

<template>
  <div
    class="rounded-md transition hover:shadow-md shadow-sm cursor-pointer bg-gray-100 flex flex-col gap-4 h-full"
  >
    <div
      class="p-1/3 rounded-t-md overflow-hidden relative w-full"
      @click.stop="router.push(`/products/${productInfo.id}`)"
    >
      <div class="absolute h-full max-w-full inset-0 bg-white">
        <photo-with-loader
          :state="state"
          :photoUrl="photoData.thumbnailUrl"
          @set-state="setState"
        />
      </div>
    </div>
    <div class="px-4 text-3xl font-semibold">
      {{ twoWords(productInfo.title) }}
    </div>
    <div class="px-4 text-gray-600 text-md">
      {{ formatDescription(productInfo.body) }}
    </div>
    <div class="px-4 pb-4 w-full mt-auto">
      <add-to-card-btn :product="productInfo" :photo="photoData" />
    </div>
  </div>
</template>
