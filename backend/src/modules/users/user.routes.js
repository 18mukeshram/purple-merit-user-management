const express = require("express");
const router = express.Router();

const authenticate = require("../../middlewares/auth.middleware");
const validate = require("../../middlewares/validate.middleware");
const userController = require("./user.controller");
const { updateProfileSchema } = require("./user.validation");

router.get("/me", authenticate, userController.getMe);
router.put(
  "/me",
  authenticate,
  validate(updateProfileSchema),
  userController.updateMe
);

module.exports = router;
