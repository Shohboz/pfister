import React from "react";
import { render } from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { configureStore } from "shared/redux/configureStore";
import routes from "shared/routes";
import "shared/initializers";

const store = configureStore();

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
};

render(<AppRouter />, document.querySelector("#root"));
