import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../action/auth";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div>
      <Link to="/auth/login">Login</Link>
      <br />
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
