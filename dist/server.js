"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const app_1 = __importDefault(require("./app")); //app.ts is exporting an Express application.
const dotenv_1 = __importDefault(require("dotenv"));
//Loading environment varibles from the .env file.
dotenv_1.default.config({ path: "./../.env" });
//Event listener for uncaught Errors.
process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception! Shutting down");
    console.log(err.name, err.message);
    process.exit(1);
});
const prisma = new client_1.PrismaClient();
app_1.default.get("/", (req, res, next) => {
    res.status(200).json({
        message: "all good you son of a bitch",
    });
});
const PORT = Number(process.env.PORT) || 3000;
const server = app_1.default.listen(PORT, () => {
    console.log("server is running in the port 3000");
});
//Important, Event listener for unhandled rejections,
process.on("unhandledRejection", (err) => {
    console.log("unhandled Rejection, Shutting down");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
