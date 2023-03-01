const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");


  if(!token) {
    return res.status(400).json({
        errors: "Token not found"
      })
  }

  try {
    const user = await JWT.verify(token, process.env.HASH_SALT);
    req.user = user.email;
    next();
  } catch (error) {
    return res.status(403).json({
        errors: "Token invalid"
      })
  }
}