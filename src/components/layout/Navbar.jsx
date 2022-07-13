import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { startLogout } from "../../action/auth";

import { MdAttachMoney } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { IoLogOut, IoCart } from "react-icons/io5";

import Container from "../utilities/Container";
import Image from "../utilities/Image";

import logo from "../../images/logo.svg";
import { auth } from "../../firebase/firebase.config";

const Navbar = () => {
  const dispatch = useDispatch();
  const name = useSelector(({ auth }) => auth.name);

  console.log(name);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const links = [
    { name: "Inicio", url: "/", icon: <HiHome size={30} /> },
    { name: "Carrito", url: "/shopping-cart", icon: <IoCart size={30} /> },
    { name: "Vender", url: "/sell", icon: <MdAttachMoney size={30} /> },
  ];

  return (
    <>
      <nav className="fixed bottom-0 grid items-center w-full h-16 grid-cols-4 bg-white border md:hidden md:relative md:top-0 md:bg-background place-content-center bottom- rounded-t-3xl rounded-tr-3xl border-gray2">
        {links.map(({ name, url, icon }) => (
          <NavLink
            key={name}
            to={url}
            className={({ isActive }) =>
              isActive
                ? "mx-auto text-blue -translate-y-1 duration-200"
                : "mx-auto text-gray"
            }
          >
            {icon}
          </NavLink>
        ))}
        <button className="mx-auto text-gray" onClick={handleLogout}>
          <IoLogOut size={30} />
        </button>
      </nav>
      <nav className="relative top-0 hidden md:block">
        <Container>
          <div className="flex items-center justify-between h-28">
            <div className="flex items-center">
              <Image src={logo} width={80} className="mb-0" />
              <div className="flex text-2xl font-semibold ml-7">
                {links.map(({ name, url }) => (
                  <NavLink
                    key={name}
                    to={url}
                    className={({ isActive }) =>
                      isActive ? "text-blue mr-5" : "text-black mr-5"
                    }
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <p className="mr-5 text-xl font-semibold text-black">
                Bienvenid@, <span className="text-blue">{name}</span>
              </p>
              <button className="text-gray" onClick={handleLogout}>
                <IoLogOut size={30} />
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
