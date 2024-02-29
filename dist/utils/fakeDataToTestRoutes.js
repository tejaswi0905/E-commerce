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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create some categories
        const category1 = yield prisma.category.create({
            data: {
                name: "Electronics",
            },
        });
        const category2 = yield prisma.category.create({
            data: {
                name: "Clothing",
            },
        });
        const category3 = yield prisma.category.create({
            data: {
                name: "Books",
            },
        });
        // Create some products
        const product1 = yield prisma.product.create({
            data: {
                name: "Laptop",
                description: "Powerful laptop with SSD storage",
                price: 999.99,
                categories: {
                    connect: [{ id: category1.id }, { id: category3.id }],
                },
            },
        });
        const product2 = yield prisma.product.create({
            data: {
                name: "T-shirt",
                description: "Comfortable cotton t-shirt",
                price: 19.99,
                categories: {
                    connect: [{ id: category2.id }],
                },
            },
        });
        const product3 = yield prisma.product.create({
            data: {
                name: "Book",
                description: "Bestseller novel",
                price: 14.99,
                categories: {
                    connect: [{ id: category3.id }],
                },
            },
        });
        const product4 = yield prisma.product.create({
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
    });
}
main()
    .catch((error) => {
    console.error("Error creating random data:", error);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
