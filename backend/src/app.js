const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "API is healthy" });
});

// Error middleware (LAST)
app.use(errorHandler);

module.exports = app;
