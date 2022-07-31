import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

import Swal from "sweetalert2";

import types from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
import { loadProducts, loadProductById } from "../helpers/loadProducts";

export const setProducts = (products) => ({
  type: types.productsLoad,
  payload: products,
});

export const setActiveProduct = (product) => ({
  type: types.productActive,
  payload: product,
});

export const setProductToCart = (productId) => ({
  type: types.productsCart,
  payload: productId,
});

export const setDeleteProductToCart = (productId) => ({
  type: types.productCartDelete,
  payload: productId,
});

/* export const getListProductsCard = async (ids) => {
  const products = []
  ids.map(id => {
    const info = await loadProductById(id)
    products.push(info)
  })
  return products
} */

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

export const startNewProduct = async (product) => {
  const { pictures } = product;
  const arr = await Promise.all(
    pictures.map(async (picture) => {
      return await fileUpload(picture);
    })
  );
  const arrPictures = arr.reverse();

  const newProduct = {
    ...product,
    pictures: arrPictures,
  };
  await addDoc(collection(db, "products"), newProduct);
  Swal.fire({
    title: "Exito! 🤑",
    html: "El producto se publicó exitosamente",
    icon: "success",
    buttonsStyling: false,
    customClass: {
      confirmButton: "button",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/";
    }
  });
};

export const startProductToCart = (product) => {
  return (dispatch, getState) => {
    dispatch(setProductToCart(product));
    const { shoppingCart } = getState().product;
    localStorage.setItem("shoppingCart", `${JSON.stringify(shoppingCart)}`);
  };
};
