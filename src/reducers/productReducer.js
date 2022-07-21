import types from "../types/types";

const init = {
  products: [],
  productActive: null,
};

const productReducer = (state = init, action) => {
  switch (action.type) {
    case types.productsLoad:
      return {
        ...state,
        products: [...action.payload],
      };
    case types.productActive:
      return {
        ...state,
        productActive: { ...action.payload },
      };
    default:
      return state;
  }
};

export default productReducer;
