import { getPhotoByQuery } from "@/api/photos";
import { ref } from "vue";
export default function usePhoto() {
  const state = ref("no-data");
  const photoData = ref({});
  const getPhoto = (id) => {
    const query = { id };
    state.value = "pending";
    getPhotoByQuery(query)
      .then((res) => {
        photoData.value = res.data[0];
      })
      .catch(() => {
        state.value = "error";
      });
  };
  const setState = (val) => {
    state.value = val;
  };
  return { state, photoData, getPhoto, setState };
}
