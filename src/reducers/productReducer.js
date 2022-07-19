import types from "../types/types";

const init = {
  products: [],
};

const productReducer = (state = init, action) => {
  switch (action.type) {
    case types.productsLoad:
      return {
        products: [...action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
