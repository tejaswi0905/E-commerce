import express from "express";
import { Request, Response, NextFunction } from "express";

import productFetchRouter from "./routes/productingFetchingRoutes";

const app = express();

app.use("/api/products", productFetchRouter);

export default app;
