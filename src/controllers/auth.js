const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { User, Role } = require("../model/User");

const authController = {
  login: async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400)
        .json({
          errors: errors.array()
        })
    }
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
      include: Role,
    })
    console.log(user)
    if(!user) {
      return res.status(200).json({
        status: 200,
        message: "User not found",
      })
    }

    await bcrypt.compare(password, user.password, async (err, isMatch) => {
      if(!isMatch || err) {
        return res.status(403)
          .json({
            status: 403,
            message: err || "Invalid credentials"
          })
      }

      const { id, first_name, last_name, email } =  user;
      const [ userRole ] = user.roles;
      const token = await JWT.sign({ email }, process.env.HASH_SALT);
      return res.status(200).json({
        status: 200,
        user: {
          id,
          first_name,
          last_name,
          email,
          role: {
            id: userRole.id,
            name: userRole.name,
          }
        },
        token,
      });
    })

  }
}

module.exports = authController;
