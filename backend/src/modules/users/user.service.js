const AppError = require("../../utils/appError");
const userRepo = require("./user.repository");

const getProfile = async (userId) => {
  const user = await userRepo.findById(userId);
  if (!user) {
    throw new AppError("User not found", 404, "NOT_FOUND");
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
};

const updateProfile = async (userId, data) => {
  const user = await userRepo.updateById(userId, data);
  if (!user) {
    throw new AppError("User not found", 404, "NOT_FOUND");
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

module.exports = {
  getProfile,
  updateProfile,
};
