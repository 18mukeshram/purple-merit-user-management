const requiredEnvVars = ["JWT_SECRET"];

if (process.env.NODE_ENV !== "test") {
  requiredEnvVars.push("MONGO_URI");
}

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing required env variable: ${key}`);
    process.exit(1);
  }
});

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  mongoTestUri: process.env.MONGO_TEST_URI,
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || "development",
};
