import React from "react";
import Layout from "./layouts/Layout";
import Card from "./components/Card";
import NotFound from "./components/NotFound";

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: "/p/:projectId",
        component: Card
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];

export default routes;
