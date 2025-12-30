const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");

let userToken;
let adminToken;

beforeAll(async () => {
  // -------- USER --------
  await request(app).post("/api/auth/signup").send({
    name: "Normal User",
    email: "user@test.com",
    password: "password123",
  });

  const userLogin = await request(app).post("/api/auth/login").send({
    email: "user@test.com",
    password: "password123",
  });

  userToken = userLogin.body.data.accessToken;

  // -------- ADMIN --------
  const hashedPassword = await bcrypt.hash("password123", 10);

  await User.create({
    name: "Admin User",
    email: "admin@test.com",
    password: hashedPassword,
    role: "ADMIN",
  });

  const adminLogin = await request(app).post("/api/auth/login").send({
    email: "admin@test.com",
    password: "password123",
  });

  adminToken = adminLogin.body.data.accessToken;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("RBAC Enforcement", () => {
  it("should forbid USER from accessing admin route", async () => {
    const res = await request(app)
      .get("/api/admin/users")
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.statusCode).toBe(403);
  });

  it("should allow ADMIN to access admin route", async () => {
    const res = await request(app)
      .get("/api/admin/users")
      .set("Authorization", `Bearer ${adminToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.users).toBeDefined();
  });
});
