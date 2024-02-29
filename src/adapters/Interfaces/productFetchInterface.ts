import { PrismaClient, Product } from "@prisma/client";

export interface ProductFetchInterface {
  getProductById(id: number): Promise<Product | null>;
  getAllProducts(): Promise<Product[] | null>;
}
