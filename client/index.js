import React from "react";
import { render } from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { IntlProvider } from "react-intl";
import Cookie from "js-cookie";
import { configureStore } from "shared/redux/configureStore";
import routes from "shared/routes";
import "shared/initializers";

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const locale = Cookie.get("locale") || "en";

const store = configureStore(preloadedState);

const AppRouter = () => {
  return (
    <IntlProvider locale={locale}>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>
    </IntlProvider>
  );
};

render(<AppRouter />, document.querySelector("#root"));
