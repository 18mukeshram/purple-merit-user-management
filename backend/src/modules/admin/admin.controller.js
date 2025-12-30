const adminService = require("./admin.service");
const { successResponse } = require("../../utils/response");

const getUsers = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const data = await adminService.getAllUsers(page, limit);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const data = await adminService.getUserById(req.params.id);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

const changeRole = async (req, res, next) => {
  try {
    const data = await adminService.updateUserRole(
      req.user.id,
      req.params.id,
      req.body.role
    );
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const data = await adminService.deactivateUser(req.user.id, req.params.id);
    successResponse(res, data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  changeRole,
  deleteUser,
};
