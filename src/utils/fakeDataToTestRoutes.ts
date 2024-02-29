import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create some categories
  const category1 = await prisma.category.create({
    data: {
      name: "Electronics",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Clothing",
    },
  });

  const category3 = await prisma.category.create({
    data: {
      name: "Books",
    },
  });

  // Create some products
  const product1 = await prisma.product.create({
    data: {
      name: "Laptop",
      description: "Powerful laptop with SSD storage",
      price: 999.99,
      categories: {
        connect: [{ id: category1.id }, { id: category3.id }],
      },
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "T-shirt",
      description: "Comfortable cotton t-shirt",
      price: 19.99,
      categories: {
        connect: [{ id: category2.id }],
      },
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: "Book",
      description: "Bestseller novel",
      price: 14.99,
      categories: {
        connect: [{ id: category3.id }],
      },
    },
  });

  const product4 = await prisma.product.create({
    data: {
      name: "Smartphone",
      description: "Latest smartphone model",
      price: 699.99,
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  console.log("Random data created successfully!");
}

main()
  .catch((error) => {
    console.error("Error creating random data:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
