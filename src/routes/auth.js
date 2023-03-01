const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/login", [
  check("email", "Please, provide a valid email").isEmail(),
  check("password", "The password must contain at least 6 characters").isLength({ min: 6, max: 255 })
], authController.login);



//TODO: ELiminar este código
const bcrypt = require("bcrypt");
router.get("/pass", async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  res.json({ hashedPassword })
});


module.exports = router;