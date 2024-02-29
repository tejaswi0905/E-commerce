import express from "express";
import {
  getProductById,
  getAllProducts,
} from "../controller/productFetchController";

const productFetchRouter = express.Router();

productFetchRouter.get("/", getAllProducts);
productFetchRouter.get("/:id", getProductById);

export default productFetchRouter;
