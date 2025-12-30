const mongoose = require("mongoose");
const { mongoUri, mongoTestUri, nodeEnv } = require("./env");

const connectDB = async () => {
  const uri = nodeEnv === "test" ? mongoTestUri : mongoUri;

  if (!uri) {
    throw new Error("MongoDB URI is missing");
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);

    if (nodeEnv !== "test") {
      process.exit(1);
    }

    throw error;
  }
};

module.exports = connectDB;
