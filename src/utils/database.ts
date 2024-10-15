import mongoose from "mongoose";

/**
 * データベース接続
 */
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
  } catch {
    console.log("DB接続に失敗しました。");
    throw new Error();
  }
};
