import { useSelector } from "react-redux";

import Container from "../utilities/Container";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useSelector(({ product }) => product);

  return (
    <section className="animate__animated animate__fadeIn">
      <div className="mb-20 md:mb-0">
        <Container>
          <h3 className="my-6 text-2xl font-bold md:text-3xl">
            Nuevos Productos
          </h3>
          <div className="grid grid-cols-2 gap-4 md:gap-7 md:grid-cols-4">
            {products?.map(({ id, nameProduct, price, pictures }) => (
              <ProductCard
                key={nameProduct}
                image={pictures[0]}
                price={price}
                name={nameProduct}
                id={id}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Products;
