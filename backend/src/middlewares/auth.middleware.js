const AppError = require("../utils/appError");
const { verifyToken } = require("../utils/jwt");
const User = require("../models/User.model");

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Authentication required", 401, "UNAUTHORIZED");
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    const user = await User.findById(decoded.userId);

    if (!user || !user.isActive) {
      throw new AppError("User not authorized", 401, "UNAUTHORIZED");
    }

    req.user = {
      id: user._id,
      role: user.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
