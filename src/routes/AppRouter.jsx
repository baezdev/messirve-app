import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { auth } from "../firebase/firebase.config";
import { login } from "../action/auth";

import MessirveRouter from "./MessirveRouter";
import AuthRouter from "./AuthRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import LoadingScreen from "../components/layout/LoadingScreen";

import { startLoadingProducts } from "../action/product";

const AppRouter = () => {
  const dispatch = useDispatch();

  //Revisa si esta autenticado o no
  const [check, setCheck] = useState(true);
  const [isLoggin, setIsLoggin] = useState(false);

  //Mantener la sesion iniciada
  useEffect(() => {
    //Observable que esta al pendiente de la autenticacion, cada que la auth cambie se va a ejecutar
    auth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggin(true);
        //Como aqui es la primerea vez que conocemos el uid del usuario, se hace el dispatch de la accion asincrona
        dispatch(startLoadingProducts());
      } else {
        setIsLoggin(false);
      }
      setTimeout(() => {
        setCheck(false);
      }, 1000);
    });
  }, [dispatch, check, isLoggin]);

  if (check) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoutes isLoggin={isLoggin}>
              <AuthRouter />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes isLoggin={isLoggin}>
              <MessirveRouter />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
