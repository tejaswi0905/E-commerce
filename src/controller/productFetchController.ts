import { Request, Response, NextFunction } from "express";
import { ProductFetchAdapter } from "../adapters/productFetchAdapter";
import { ProductFetchService } from "../Services/productFetchService";

const productFetchAdapter = new ProductFetchAdapter();
const productFetchService = new ProductFetchService(productFetchAdapter);

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const data = await productFetchAdapter.getProductById(id);

    if (!data) {
      throw Error("data is Null");
    }
    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    const errorMessage = (err as Error).message;
    console.log(errorMessage);
    res.status(404).json({
      status: "fail",
      message: "Failed in fetching data.",
    });
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any | null> => {
  try {
    const data = await productFetchService.getAllProducts();
    if (!data) {
      throw new Error("data is null");
    }
    res.status(200).json({
      status: 200,
      data: {
        data,
      },
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    res.status(404).json({
      status: 404,
      message: "something went wrong",
    });
  }
};
