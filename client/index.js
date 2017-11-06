import React from "react";
import { render } from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { addLocaleData, IntlProvider } from "react-intl";
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";
import { configureStore } from "shared/redux/configureStore";
import routes from "shared/routes";
import "shared/initializers";

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

const locale = Cookie.get("locale") || "en";

const AppRouter = ({ messages, locale }) => (
  <IntlProvider
    locale={locale}
    initialNow={parseInt(window.INITIAL_NOW, 10)}
    messages={messages}
  >
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  </IntlProvider>
);

fetch(`/public/assets/${locale}.json`)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    return res.json();
  })
  .then(localeData => {
    addLocaleData(window.ReactIntlLocaleData[locale]);

    return localeData;
  })
  .catch(e => console.error(e))
  .then(messages => {
    render(
      <AppRouter messages={messages} locale={locale} />,
      document.querySelector("#root")
    );
  });
