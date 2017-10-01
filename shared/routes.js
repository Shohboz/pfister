import React from "react";
import Layout from "./layouts/Layout";
import Card from "./components/Card";
import List from "./components/List";
import NotFound from "./components/NotFound";

const routes = [
  {
    component: Layout,
    routes: [
      {
        exact: true,
        path: "/",
        component: List
      },
      {
        path: "/p/:projectId",
        component: Card
      },
      {
        path: "/p/",
        component: List
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];

export default routes;
