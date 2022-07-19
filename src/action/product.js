import loadProducts from "../helpers/loadProducts";
import types from "../types/types";

export const setProducts = (products) => ({
  type: types.productsLoad,
  payload: products,
});

export const startLoadingProducts = () => {
  return async (dispatch) => {
    const products = await loadProducts();
    dispatch(setProducts(products));
  };
};
