import { Product } from "@prisma/client";
import { ProductFetchInterface } from "../adapters/Interfaces/productFetchInterface";

export class ProductFetchService {
  private adapter: ProductFetchInterface;

  constructor(adapter: ProductFetchInterface) {
    this.adapter = adapter;
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.adapter.getProductById(id);
  }

  async getAllProducts(): Promise<Product[] | null> {
    return this.adapter.getAllProducts();
  }
}
