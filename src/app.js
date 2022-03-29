import express from "express";
import expressListRoutes from "express-list-routes";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use("/companies", router);

expressListRoutes(app);

export default app;
