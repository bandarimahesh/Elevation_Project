const router = require("express").Router();

const { verifyToken } = require("../middleware/verifyToken");
const {
  register,
  login,
  forgotpassword,
  resetpassword,
  changePassword,
  emailAccountActivation,
  refreshToken,
  logout,
  emailRegister,
  emailAccountActivate,
} = require("../controllers/authControllers.js");

// register for a user
router.post("/register", register);
router.post("/email-register", emailRegister);
router.post("/email-account-activate/:id", emailAccountActivate);
// login routes
router.post("/login", login);
//logout account

router.post("/logout", verifyToken, logout);
// refresh token
router.post("/refreshToken", refreshToken);
// email account-activation

// router.post("/account-activation", emailAccountActivation);

// to change password when login is successful
router.put("/change-password/:id", verifyToken, changePassword);

// to forgot password
router.post("/forgot-password", forgotpassword);

// to reset password
router.put("/reset-password/:resetToken", resetpassword);

module.exports = router;
