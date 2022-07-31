import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { startLoadingProducts, startProductToCart } from "../../action/product";

import Footer from "../layout/Footer";
import LoadingScreen from "../layout/LoadingScreen";
import Navbar from "../layout/Navbar";
import Products from "../products/Products";
import Container from "../utilities/Container";
import Header from "./Header";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (loading) {
    return <LoadingScreen />;
  }

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
      <Footer />
    </main>
  );
};

export default HomeScreen;
