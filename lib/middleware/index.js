import React from 'react';
import { renderToString } from 'react-dom/server';
import { load, reload } from '../../webpack.parts';

let assets;

if (process.env.NODE_ENV === "production") {
  assets = load();
}

export function handleRender(req, res) {

  if (process.env.NODE_ENV !== "production") {
    assets = reload();
  }

  const html = `
    <div>Test</div>
  `;

  res.send(renderFullPage(html));
}

function renderFullPage(html, preloadedState = {}) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>
        </title>
        ${
          assets.css && `<link href="/static/${assets.css}" rel="stylesheet">` || ''
        }
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        ${
          assets.js && `<script src="/static/${assets.js}"></script>` || ''
        }
      </body>
    </html>
  `;
}
