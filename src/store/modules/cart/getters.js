export const cartCountsById = (state) =>
  state.cart.map((item) => {
    return { id: item.id, count: item.count };
  });
