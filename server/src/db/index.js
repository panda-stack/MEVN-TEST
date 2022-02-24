export * from "./client";
export * from "./provider";
import { connect } from "mongoose";

export const initDB = async () => {
  try {
    const db = await connect(
      process.env.MONGO_URL || "mongodb://localhost:27017/test"
    );
    console.log("DB is connected!");
    return db;
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
};
