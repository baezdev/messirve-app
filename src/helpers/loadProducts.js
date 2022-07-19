import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const loadProducts = async () => {
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

export default loadProducts;
