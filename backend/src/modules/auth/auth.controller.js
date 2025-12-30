const authService = require("./auth.service");
const { successResponse } = require("../../utils/response");

const signup = async (req, res, next) => {
  try {
    const data = await authService.signup(req.body);
    successResponse(res, data, 201);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
};
