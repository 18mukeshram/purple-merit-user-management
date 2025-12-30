const userService = require("./user.service");
const { successResponse } = require("../../utils/response");

const getMe = async (req, res, next) => {
  try {
    const data = await userService.getProfile(req.user.id);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

const updateMe = async (req, res, next) => {
  try {
    const data = await userService.updateProfile(req.user.id, req.body);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMe,
  updateMe,
};
