import Express from "express";
import { port } from "../config";
import { handleRender } from "./middleware";

const app = Express();

app.get("/p/:projectId", handleRender);
app.use(handleRender);
app.listen(port);
