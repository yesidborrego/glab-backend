const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/login", [
  check("email").isEmail().withMessage("Please, provide a valid email").isEmail(),
  check("password").isLength({ min: 6, max: 255 }).withMessage("The password must contain at least 6 characters"),
], authController.login);

module.exports = router;