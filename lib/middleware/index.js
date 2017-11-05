import React from "react";
import { renderToString } from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { configureStore } from "../shared/redux/configureStore";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { IntlProvider } from "react-intl";
import { detectLocale } from "../utilities";
import routes from "../shared/routes";
import { load, reload } from "../../webpack.parts";

let assets;
const sheet = new ServerStyleSheet();
const store = configureStore();

if (process.env.NODE_ENV === "production") {
  assets = load();
}

export function handleRender(req, res) {
  if (process.env.NODE_ENV !== "production") {
    assets = reload();
  }
  const locale = detectLocale(req);
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store, req.params) : Promise.resolve(null)
  });
  return Promise.all(promises).then(data => {
    const context = {};
    const content = renderToString(
      <IntlProvider locale={locale}>
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
    res.cookie("locale", locale, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600)});
    res.send(renderFullPage(content, store.getState(), { css }));
  });
}

function renderFullPage(html, preloadedState = {}, { css } = {}) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>
        </title>
        ${(assets.css && `<link href="/static/${assets.css}" rel="stylesheet">`) || ""}
        ${css}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")};
        </script>
        ${(assets.js && `<script src="/static/${assets.js}"></script>`) || ""}
      </body>
    </html>
  `;
}
