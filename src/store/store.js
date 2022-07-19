import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/authReducer";
import productReducer from "../reducers/productReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//Adjunta los reducers para poder usarlos en el createStore
const reducers = combineReducers({
  //La estructura de este objeto es como se vera el state
  auth: authReducer,
  product: productReducer,
});
//Para crear un store usamos createStore al cual se le pasa SOLO un reducer como parametro
export const store = createStore(
  reducers,
  //Esto nos permite trabajar con acciones asincronas
  composeEnhancers(applyMiddleware(thunk))
);
//Despues lo importamos en el punto mas alto de la aplicacion
