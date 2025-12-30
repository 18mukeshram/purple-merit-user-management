const AppError = require("../utils/appError");

const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError("Access forbidden", 403, "FORBIDDEN");
    }
    next();
  };
};

module.exports = authorize;
