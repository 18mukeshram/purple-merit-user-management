const express = require("express");
const router = express.Router();

const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/users/user.routes");
const adminRoutes = require("./modules/admin/admin.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
