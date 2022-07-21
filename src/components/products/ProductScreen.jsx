import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IoCart } from "react-icons/io5";

import { startActiveProduct } from "../../action/product";

import Navbar from "../layout/Navbar";
import Container from "../utilities/Container";
import Carousel from "./Carousel";
import Button from "../layout/Button";
import Label from "../utilities/Label";
import LoadingScreen from "../layout/LoadingScreen";

const ProductScreen = () => {
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startActiveProduct(idProduct));
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const product = useSelector(({ product }) => product.productActive);
  const info = product?.[0];
  console.log(info);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!info) {
    return;
  }

  return (
    <section className="mb-20 md:mb-0">
      <Navbar />
      <Container>
        <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center md:hidden">
          Messirve
        </h1>
        <div className="items-center grid-cols-2 gap-20 md:grid place-content-center h-screen2">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-5xl font-extrabold mb-7 md:text-7xl">
                {info && info.nameProduct}
              </h3>
              <p className="mb-4 text-2xl font-medium text-gray">
                {info && info.description}
              </p>
              <p className="mb-1 text-sm text-gray">Estado del producto</p>
              <Label>{info.status}</Label>
            </div>
            <div className="items-center gap-10 mt-7 md:mt-0 md:grid-cols-2 md:grid">
              <p className="mb-3 text-4xl font-extrabold md:mb-0">
                $<span>{info.price}</span>
              </p>
              <Button>
                <IoCart size={25} /> Agregar Al Carrito
              </Button>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Carousel pictures={info.pictures} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductScreen;
