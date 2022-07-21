import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const loadProducts = async () => {
  //Consulta a la base de datos
  const docSnap = await getDocs(collection(db, "/products"));
  const products = [];
  docSnap.forEach((product) =>
    products.push({
      id: product.id,
      ...product.data(),
    })
  );

  return products;
};

export const loadProductById = async (id) => {
  //TODO Refactorizar esta funcion
  /* const q = query(collection(db, `/products/`), where("uid", "==", "gbKXruXtAoUulY7nvoI4"));
  const querySnapshot = await getDocs(q);
  const products = [];
  querySnapshot.forEach((product) =>
    products.push({
      id: product.id,
      ...product.data(),
    })
  ); */
  const products = await loadProducts();

  return products.filter((p) => p.id === id);
};
