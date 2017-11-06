import React from "react";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { configureStore } from "../shared/redux/configureStore";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { addLocaleData, IntlProvider } from "react-intl";
import { detectLocale } from "../utilities";
import routes from "../shared/routes";
import { load, reload } from "../../webpack.parts";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

let assets;
const sheet = new ServerStyleSheet();
const store = configureStore();

if (process.env.NODE_ENV === "production") {
  assets = load();
}

addLocaleData([...ru, ...en]);

const messages = {};
const localeData = {};

["en", "ru"].forEach(locale => {
  localeData[locale] = fs
    .readFileSync(
      path.join(
        __dirname,
        `../../node_modules/react-intl/locale-data/${locale}.js`
      )
    )
    .toString();
  messages[locale] = require(`../../public/assets/${locale}.json`);
});

export function handleRender(req, res) {
  if (process.env.NODE_ENV !== "production") {
    assets = reload();
  }
  const locale = detectLocale(req);
  const initialNow = Date.now();
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function
      ? fetchData(store, req.params)
      : Promise.resolve(null);
  });
  return Promise.all(promises).then(data => {
    const context = {};
    const content = renderToString(
      <IntlProvider
        initialNow={initialNow}
        locale={locale}
        messages={messages[locale]}
      >
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <StyleSheetManager sheet={sheet.instance}>
              {renderRoutes(routes)}
            </StyleSheetManager>
          </StaticRouter>
        </Provider>
      </IntlProvider>
    );
    const css = sheet.getStyleTags();
    res.cookie("locale", locale, {
      maxAge: new Date() * 0.001 + 365 * 24 * 3600
    });
    res.send(
      renderFullPage(content, store.getState(), { css, locale, initialNow })
    );
  });
}

function renderFullPage(
  html,
  preloadedState = {},
  { css, locale, initialNow } = {}
) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>
        </title>
        ${(assets.css &&
          `<link href="/static/${assets.css}" rel="stylesheet">`) ||
          ""}
        ${css}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )};
        </script>
        ${(locale && `<script>${localeData[locale]}</script>`) || ""}
        ${(initialNow &&
          `<script>window.INITIAL_NOW=${JSON.stringify(
            initialNow
          )}</script>`) ||
          ""}
        ${(assets.js && `<script src="/static/${assets.js}"></script>`) || ""}
      </body>
    </html>
  `;
}
