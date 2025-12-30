const User = require("../../models/User.model");
const AppError = require("../../utils/appError");

const getAllUsers = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const users = await User.find({ isActive: true })
    .skip(skip)
    .limit(limit)
    .select("-password");

  const total = await User.countDocuments({ isActive: true });

  return {
    users,
    meta: {
      page,
      limit,
      total,
    },
  };
};

const getUserById = async (id) => {
  const user = await User.findById(id).select("-password");

  if (!user) {
    throw new AppError("User not found", 404, "NOT_FOUND");
  }

  return user;
};

const updateUserRole = async (adminId, targetUserId, role) => {
  if (adminId === targetUserId) {
    throw new AppError(
      "Admin cannot change their own role",
      400,
      "INVALID_OPERATION"
    );
  }

  const user = await User.findByIdAndUpdate(
    targetUserId,
    { role },
    { new: true }
  );

  if (!user) {
    throw new AppError("User not found", 404, "NOT_FOUND");
  }

  return {
    id: user._id,
    role: user.role,
  };
};

const deactivateUser = async (adminId, targetUserId) => {
  if (adminId === targetUserId) {
    throw new AppError(
      "Admin cannot deactivate themselves",
      400,
      "INVALID_OPERATION"
    );
  }

  const user = await User.findByIdAndUpdate(
    targetUserId,
    { isActive: false },
    { new: true }
  );

  if (!user) {
    throw new AppError("User not found", 404, "NOT_FOUND");
  }

  return { message: "User deactivated successfully" };
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserRole,
  deactivateUser,
};
