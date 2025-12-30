const express = require("express");
const router = express.Router();

const authenticate = require("../../middlewares/auth.middleware");
const authorize = require("../../middlewares/role.middleware");
const adminController = require("./admin.controller");

router.use(authenticate);
router.use(authorize(["ADMIN"]));

router.get("/users", adminController.getUsers);
router.get("/users/:id", adminController.getUser);
router.patch("/users/:id/role", adminController.changeRole);
router.delete("/users/:id", adminController.deleteUser);

module.exports = router;
