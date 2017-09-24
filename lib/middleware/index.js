import React from "react";
import { renderToString } from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";
import { renderRoutes } from "react-router-config";
import routes from "../shared/routes";
import { load, reload } from "../../webpack.parts";

let assets;

if (process.env.NODE_ENV === "production") {
  assets = load();
}

export function handleRender(req, res) {
  if (process.env.NODE_ENV !== "production") {
    assets = reload();
  }

  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  res.send(renderFullPage(content));
}

function renderFullPage(html, preloadedState = {}) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>
        </title>
        ${(assets.css && `<link href="/static/${assets.css}" rel="stylesheet">`) || ""}
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
