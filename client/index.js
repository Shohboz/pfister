import React from "react";
import { render } from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { renderRoutes } from "react-router-config";
import routes from "shared/routes";
import "../shared/initializers";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
};

render(<AppRouter />, document.querySelector("#root"));
