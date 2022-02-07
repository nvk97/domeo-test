export const SET_TO_LOCAL_STORAGE_CART = (val) => {
  localStorage.setItem("cart", JSON.stringify(val));
};

export const GET_FROM_LOCAL_STORAGE_CART = (state) => {
  state.cart = JSON.parse(localStorage.getItem("cart")).cart || [];
};

export const SET_PRODUCT_TO_CART_STATE = function (state, product) {
  const productId = product.id;
  const cartList = state.cart;
  const uniquesId = cartList
    .map((val) => val.id)
    .filter((value, index, self) => self.indexOf(value) === index);
  if (uniquesId.includes(productId)) {
    const userIndex = cartList.findIndex((elem) => elem.id === productId);
    state.cart[userIndex].count++;
  } else {
    product.count = 1;
    state.cart.push(product);
  }
  this.commit("cart/SET_TO_LOCAL_STORAGE_CART", state.cart);
};

export const INC_COUNT_IN_CART_BY_ID = function (state, id) {
  const cartList = state.cart;
  const productId = id;
  const userIndex = cartList.findIndex((elem) => elem.id === productId);
  state.cart[userIndex].count++;
  this.commit("cart/SET_TO_LOCAL_STORAGE_CART", state.cart);
};
export const DEC_COUNT_IN_CART_BY_ID = function (state, id) {
  const cartList = state.cart;
  const productId = id;
  const userIndex = cartList.findIndex((elem) => elem.id === productId);
  if (state.cart[userIndex].count === 1) {
    state.cart.splice(userIndex, 1);
  } else {
    state.cart[userIndex].count--;
  }
  this.commit("cart/SET_TO_LOCAL_STORAGE_CART", state.cart);
};

export const CLEAR_CART_STATE = function (state) {
  state.cart = [];
  this.commit("cart/SET_TO_LOCAL_STORAGE_CART", state.cart);
};
