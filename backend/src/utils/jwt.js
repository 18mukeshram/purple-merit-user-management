const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");

const generateToken = (payload) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret);
};

module.exports = {
  generateToken,
  verifyToken,
};
