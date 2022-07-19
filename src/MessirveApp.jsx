import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";

import { store } from "./store/store";

import "animate.css";

function MessirveApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default MessirveApp;
