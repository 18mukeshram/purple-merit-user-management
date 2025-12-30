const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "API is healthy" });
});

// Error middleware (LAST)
app.use(errorHandler);

module.exports = app;
