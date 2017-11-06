import Express from "express";
import cookieParser from "cookie-parser";
import { port } from "../config";
import { handleRender } from "./middleware";

const app = Express();

app.use(cookieParser());
app.use("/public/assets", Express.static("public/assets"));
app.get("/p/:projectId", handleRender);
app.use(handleRender);
app.listen(port);
