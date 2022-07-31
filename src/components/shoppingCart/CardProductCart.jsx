import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { TiDelete } from "react-icons/ti";
import { CgArrowBottomLeftR } from "react-icons/cg";
import { setDeleteProductToCart } from "../../action/product";

const CardProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { price, nameProduct, pictures, id } = product;

  const handleToProduct = () => navigate(`/product/${id}`);
  const handleDelete = () => {
    dispatch(setDeleteProductToCart(id));
  };

  return (
    <div className="flex justify-between p-4 mb-6 bg-white border rounded-xl border-gray2 animate__animated animate__fadeIn">
      <div className="flex items-center">
        <img
          src={pictures[0]}
          alt={nameProduct}
          className="w-20 h-20 rounded-md"
        />
        <div className="ml-4">
          <p className="text-xl font-semibold">{nameProduct}</p>
          <p className="text-lg font-medium">${price}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button onClick={handleToProduct}>
          <CgArrowBottomLeftR size={20} className="text-blue" />
        </button>
        <button onClick={handleDelete}>
          <TiDelete size={30} className="text-red" />
        </button>
      </div>
    </div>
  );
};

export default CardProductCart;
