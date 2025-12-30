const request = require("supertest");
const app = require("../app");

let token;

beforeAll(async () => {
  const loginRes = await request(app).post("/api/auth/login").send({
    email: "testuser@example.com",
    password: "password123",
  });

  token = loginRes.body.data.accessToken;
});

describe("User Protected Routes", () => {
  it("should block access without token", async () => {
    const res = await request(app).get("/api/users/me");
    expect(res.statusCode).toBe(401);
  });

  it("should allow access with valid token", async () => {
    const res = await request(app)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.email).toBe("testuser@example.com");
  });
});
