const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/auth");

// router.post("/login", [
//   check("email", "Please, provide a valid email").isEmail(),
//   check("password", "The password must contain at least 6 characters").isLength({ min: 6, max: 255 })
// ], authController.login);
router.post("/login", authController.login);

module.exports = router;