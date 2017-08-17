import Express from "express";
import { port } from "../config";
import { handleRender } from "./middleware";

const app = Express();

app.use(handleRender);
app.listen(port);
