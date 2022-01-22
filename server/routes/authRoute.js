const router = require("express").Router();
const connection = require("../dbConnection.js");

const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");
const {
  register,
  login,
  forgotpassword,
  resetpassword,
  changePassword,
  emailAccountActivation,
} = require("../controllers/authControllers.js");

// register for a user
router.post("/register", register);

// login routes
router.post("/login", login);

// email account-activation

// router.post("/account-activation", emailAccountActivation);


// to change password when login is successful
router.put("/change-password/:id", verifyToken, changePassword);

// to forgot password
router.put("/forgotpassword", forgotpassword);

// to reset password
router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router;
