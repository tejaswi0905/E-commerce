import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import app from "./app"; //app.ts is exporting an Express application.
import dotenv from "dotenv";

//Loading environment varibles from the .env file.
dotenv.config({ path: "./../.env" });

//Event listener for uncaught Errors.
process.on("uncaughtException", (err: Error) => {
  console.log("Uncaught Exception! Shutting down");
  console.log(err.name, err.message);
  process.exit(1);
});

const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "all good you son of a bitch",
  });
});

const PORT: number = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, () => {
  console.log("server is running in the port 3000");
});

//Important, Event listener for unhandled rejections,
process.on("unhandledRejection", (err: Error) => {
  console.log("unhandled Rejection, Shutting down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
