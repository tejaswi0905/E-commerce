import { PrismaClient, Product } from "@prisma/client";
import { ProductFetchInterface } from "./Interfaces/productFetchInterface";

const prisma = new PrismaClient();

export class ProductFetchAdapter implements ProductFetchInterface {
  async getProductById(id: number): Promise<Product | null> {
    return await prisma.product.findUnique({
      where: { id },
    });
  }

  async getAllProducts(): Promise<Product[] | null> {
    return await prisma.product.findMany();
  }
}
