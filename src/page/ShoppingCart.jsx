import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/layout/Navbar";
import ShoppingCartContainer from "../components/shoppingCart/ShoppingCartContainer";
import Container from "../components/utilities/Container";

const ShoppingCart = () => {
  const productsInCart = useSelector(({ product }) => product.shoppingCart);

  return (
    <>
      <Navbar />
      <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center md:hidden">
        Carrito
      </h1>
      <Container>
        {productsInCart.length < 1 ? (
          <section className="flex items-center justify-center text-center h-screen3">
            <p className="text-4xl font-bold">Aún no tienes productos 🤡</p>
          </section>
        ) : (
          <ShoppingCartContainer productInShoppingCart={productsInCart} />
        )}
      </Container>
    </>
  );
};

export default ShoppingCart;
