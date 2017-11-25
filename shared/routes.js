import Layout from "./layouts/Layout";
import Card from "./routes/Card";
import Cards from "./routes/Cards";
import NotFound from "./components/NotFound";

const routes = [
  {
    component: Layout,
    routes: [
      {
        exact: true,
        path: "/",
        component: Cards
      },
      {
        path: "/p/:projectId",
        component: Card
      },
      {
        path: "/p/",
        component: Cards
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];

export default routes;
