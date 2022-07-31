import { FaShoppingBag } from "react-icons/fa";
import Swal from "sweetalert2";

import Button from "../layout/Button";
import CardProductCart from "./CardProductCart";

const ShoppingCartContainer = ({ productInShoppingCart }) => {
  const total = productInShoppingCart.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );

  const handleShop = () => {
    Swal.fire({
      title: "Gracias! ❤️",
      html: "Por usar Messirve App ❤️",
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

  return (
    <section className="gap-16 my-24 md:grid md:grid-cols-2">
      <aside className="md:mx-7">
        {productInShoppingCart.map((product) => (
          <CardProductCart product={product} key={product.id} />
        ))}
      </aside>
      <aside className="md:mx-7">
        <div className="w-full">
          <p className="text-xl font-medium">Total:</p>
          <p className="text-3xl font-semibold mb-7">${total}</p>
          <Button onClick={handleShop}>
            <FaShoppingBag size={20} /> Comprar
          </Button>
        </div>
      </aside>
    </section>
  );
};

export default ShoppingCartContainer;
