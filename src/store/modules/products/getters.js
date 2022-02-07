const sortValuesInc = (val1, val2) => {
  if (val1 > val2) {
    return 1;
  } else if (val1 < val2) {
    return -1;
  }
  return 0;
};
const sortValuesDec = (val1, val2) => {
  if (val1 > val2) {
    return -1;
  } else if (val1 < val2) {
    return 1;
  }
  return 0;
};

export const productsListSortedByInc = (state) => {
  const productsList = [...state.productsList];
  productsList.sort((val1, val2) => sortValuesInc(val1.title, val2.title));
  return productsList;
};
export const productsListSortedByDec = (state) => {
  const productsList = [...state.productsList];
  productsList.sort((val1, val2) => sortValuesDec(val1.title, val2.title));
  return productsList;
};
