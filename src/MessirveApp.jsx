import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";

import { store } from "./store/store";

function MessirveApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default MessirveApp;
