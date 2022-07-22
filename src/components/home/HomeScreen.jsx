import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { startLoadingProducts } from "../../action/product";

import Navbar from "../layout/Navbar";
import Products from "../products/Products";
import Container from "../utilities/Container";
import Header from "./Header";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  return (
    <main className="relative h-screen">
      <Container>
        <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center md:hidden">
          Messirve
        </h1>
      </Container>
      <Navbar />
      <Header />

      <Products />
    </main>
  );
};

export default HomeScreen;
