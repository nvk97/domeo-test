export const PRODUCTS_LIST_SUCCESS = (state, val) => {
  state.productsList = val;
};
export const PRODUCT_SUCCESS = (state, val) => {
  state.product = val;
};
export const SET_PRODUCTS_LIST_STATE = (state, val) => {
  state.state.productsList = val;
};
export const SET_PRODUCT_STATE = (state, val) => {
  state.state.product = val;
};
