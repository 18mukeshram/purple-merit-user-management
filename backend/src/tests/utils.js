const request = require("supertest");
const app = require("../app");
const User = require("../models/User.model");

const signupUser = async (user) => {
  return request(app).post("/api/auth/signup").send(user);
};

const loginUser = async (credentials) => {
  return request(app).post("/api/auth/login").send(credentials);
};

const createAdminUser = async () => {
  const admin = await User.create({
    name: "Admin",
    email: "admin@test.com",
    password: "hashedpassword",
    role: "ADMIN",
  });
  return admin;
};

module.exports = {
  signupUser,
  loginUser,
  createAdminUser,
};
