import types from "../types/types";

const init = {
  products: [],
  productActive: null,
  shoppingCart: [],
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
    case types.productsCart:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };
    case types.productCartDelete:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (product) => product.id !== action.payload
        ),
      };
  }
};

export default productReducer;
