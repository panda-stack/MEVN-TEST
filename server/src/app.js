import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import { initDB } from "./db";
import * as swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import path from "path";
const swaggerDocument = require("./utils/swagger.json");

initDB();
export const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

RegisterRoutes(app);
if (process.env.NODE_ENV === "development") {
  try {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  } catch (err) {
    console.error("unable to read swagger.json", err);
  }
}
