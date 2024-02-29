"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productingFetchingRoutes_1 = __importDefault(require("./routes/productingFetchingRoutes"));
const app = (0, express_1.default)();
app.use("/api/products", productingFetchingRoutes_1.default);
exports.default = app;
