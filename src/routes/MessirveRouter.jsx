import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../components/home/HomeScreen";
import SellScreen from "../page/SellScreen";
import ShoppingCart from "../page/ShoppingCart";

const MessirveRouter = () => {
  return (
    <Routes>
      <Route path="shopping-cart" element={<ShoppingCart />} />
      <Route path="sell" element={<SellScreen />} />
      <Route path="*" element={<HomeScreen />} />
    </Routes>
  );
};

export default MessirveRouter;
