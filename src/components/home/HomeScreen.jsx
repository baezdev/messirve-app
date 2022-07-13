import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { startLogout } from "../../action/auth";
import ShoppingCart from "../../page/ShoppingCart";
import Navbar from "../layout/Navbar";

import Container from "../utilities/Container";
import Header from "./Header";

const HomeScreen = () => {
  return (
    <main className="relative h-screen">
      <Container>
        <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center md:hidden">
          Messirve
        </h1>
      </Container>
      <Navbar />
      <Container>
        <h2 className="my-6 text-5xl font-extrabold text-center">
          Vende y Compra
        </h2>
        <p className="mb-6 text-2xl font-semibold text-center capitalize">
          Cosas de Segunda Mano, busca cobre y encontrarás oro 🤑
        </p>
        <Header />
      </Container>
    </main>
  );
};

export default HomeScreen;
