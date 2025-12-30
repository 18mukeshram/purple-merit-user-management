const User = require("../../models/User.model");

const findById = (id) => User.findById(id);

const updateById = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });

module.exports = {
  findById,
  updateById,
};
