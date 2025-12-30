process.env.NODE_ENV = "test";

require("dotenv").config({ path: ".env" });

const mongoose = require("mongoose");
const connectDB = require("../config/db");

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});
