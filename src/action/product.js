import { loadProducts, loadProductById } from "../helpers/loadProducts";
import types from "../types/types";

export const setProducts = (products) => ({
  type: types.productsLoad,
  payload: products,
});

export const setActiveProduct = (product) => ({
  type: types.productActive,
  payload: product,
});

//Acciones asincronas
export const startLoadingProducts = () => {
  return async (dispatch) => {
    const products = await loadProducts();
    dispatch(setProducts(products));
  };
};

export const startActiveProduct = (id) => {
  return async (dispatch) => {
    const product = await loadProductById(id);
    dispatch(setActiveProduct(product));
  };
};
