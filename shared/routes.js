import React from "react";
import Layout from "./layouts/Layout";
import NotFound from "./components/NotFound";

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];

export default routes;
