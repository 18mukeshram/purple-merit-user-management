const request = require("supertest");
const app = require("../app");

describe("Auth API", () => {
  it("should fail signup without email", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({ name: "Test", password: "password123" });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("should signup successfully", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      name: "Test User",
      email: "testuser@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.data.email).toBe("testuser@example.com");
  });

  it("should login successfully", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "testuser@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.accessToken).toBeDefined();
  });
});
