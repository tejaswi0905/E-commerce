"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productFetchController_1 = require("../controller/productFetchController");
const productFetchRouter = express_1.default.Router();
productFetchRouter.get("/", productFetchController_1.getAllProducts);
productFetchRouter.get("/:id", productFetchController_1.getProductById);
exports.default = productFetchRouter;
