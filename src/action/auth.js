import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

import { auth, googleProvider } from "../firebase/firebase.config";
import types from "../types/types";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: types.logout,
});

export const startWithGoogle = () => {
  //Cuando se retorna un callback, significa que es una accion asincrona y el dispatch no los proporciona thunk
  return (dispatch) => {
    signInWithPopup(auth, googleProvider).then(({ user }) =>
      dispatch(login(user.uid, user.displayName))
    );
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    /* dispatch(startLoading()); */

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));

        /* dispatch(finishLoading()); */
      })
      .catch((e) => {
        Swal.fire({
          title: "Ups!!",
          icon: "error",
          text: `${
            e.code === "auth/user-not-found"
              ? "El usuario no existe"
              : "La contraseña es incorrecta"
          }`,
        });
        /* dispatch(finishLoading()); */
      });
  };
};

export const startCreateUserWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        //Actualizar los datos del perfil
        await updateProfile(user, {
          displayName: name,
        });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire({
          title: "Ups!!",
          icon: "error",
          text: `${
            e.code === "auth/email-already-in-use"
              ? "El correo ya esta en uso"
              : e.message
          }`,
        });
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut();
    dispatch(logout());
    //Aqui se limpia al cerrar sesion
    /*     dispatch(noteLogout()); */
  };
};
