import { useNavigate } from "react-router-dom";

import { IoCart } from "react-icons/io5";

import Image from "../utilities/Image";

const ProductCard = ({ name, price, image, id }) => {
  const navigate = useNavigate();

  const handleClickProduct = () => {
    navigate(`product/${id}`);
  };

  return (
    <div
      className="p-3 mx-auto bg-white cursor-pointer rounded-xl w-fit h-fit"
      onClick={handleClickProduct}
    >
      <Image src={image} className="mb-2" />
      <div>
        <h4 className="text-base font-bold md:text-2xl">{name}</h4>
        <div className="flex flex-col md:items-center md:justify-between md:gap-3 md:flex-row ">
          <p className="text-lg font-bold text-blue md:text-2xl">
            $ <span className="text-black">{price}</span>
          </p>
          <button className="flex items-center justify-center w-full p-2 mt-1 text-xs font-bold text-white rounded-lg md:p-3 md:text-lg md:w-fit bg-blue">
            <IoCart /> <span className="ml-1">Añadir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
