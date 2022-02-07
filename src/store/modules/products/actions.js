import { getProductsWithParams, getProductId } from "@/api/product";

export const getProductsListByQuery = ({ commit }, query) => {
  commit("SET_PRODUCTS_LIST_STATE", "pending");
  getProductsWithParams(query)
    .then((res) => {
      commit("PRODUCTS_LIST_SUCCESS", res.data);
      commit("SET_PRODUCTS_LIST_STATE", "success");
    })
    .catch(() => {
      commit("SET_PRODUCTS_LIST_STATE", "error");
    });
};

export const getProductById = ({ commit }, id) => {
  commit("SET_PRODUCT_STATE", "pending");
  getProductId(id)
    .then((res) => {
      commit("PRODUCT_SUCCESS", res.data);
      commit("SET_PRODUCT_STATE", "success");
    })
    .catch(() => {
      commit("SET_PRODUCT_STATE", "error");
    });
};
