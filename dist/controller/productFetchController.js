"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getProductById = void 0;
const productFetchAdapter_1 = require("../adapters/productFetchAdapter");
const productFetchService_1 = require("../Services/productFetchService");
const productFetchAdapter = new productFetchAdapter_1.ProductFetchAdapter();
const productFetchService = new productFetchService_1.ProductFetchService(productFetchAdapter);
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const data = yield productFetchAdapter.getProductById(id);
        if (!data) {
            throw Error("data is Null");
        }
        res.status(200).json({
            status: "success",
            data: {
                data,
            },
        });
    }
    catch (err) {
        const errorMessage = err.message;
        console.log(errorMessage);
        res.status(404).json({
            status: "fail",
            message: "Failed in fetching data.",
        });
    }
});
exports.getProductById = getProductById;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productFetchService.getAllProducts();
        if (!data) {
            throw new Error("data is null");
        }
        res.status(200).json({
            status: 200,
            data: {
                data,
            },
        });
    }
    catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        res.status(404).json({
            status: 404,
            message: "something went wrong",
        });
    }
});
exports.getAllProducts = getAllProducts;
