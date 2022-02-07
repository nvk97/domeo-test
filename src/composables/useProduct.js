import { useStore } from "vuex";
import { computed, ref } from "vue";
export default function useProduct() {
  const store = useStore();

  const fetchProductsListByCategoryId = (id) => {
    const query = {
      userId: id,
    };
    store.dispatch("products/getProductsListByQuery", query);
  };
  const fetchAllProducts = (page) => {
    const query = {
      _page: page,
      limit: 10,
    };
    store.dispatch("products/getProductsListByQuery", query);
  };
  const changeSort = () => {
    switch (sortState.value) {
      case "notSorted":
        sortState.value = "inc";
        break;
      case "inc":
        sortState.value = "dec";
        break;
      case "dec":
        sortState.value = "notSorted";
        break;
    }
  };

  const sortState = ref("notSorted");
  const productsList = computed(() => {
    let res;

    switch (sortState.value) {
      case "notSorted":
        res = store.state.products.productsList;
        break;
      case "inc":
        res = store.getters["products/productsListSortedByDec"];
        break;
      case "dec":
        res = store.getters["products/productsListSortedByInc"];
        break;
    }
    return res;
  });
  const productsListState = computed(
    () => store.state.products.state.productsList
  );

  return {
    fetchProductsListByCategoryId,
    fetchAllProducts,
    productsList,
    productsListState,
    changeSort,
    sortState,
  };
}
