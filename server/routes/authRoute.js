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
} = require("../controllers/authControllers.js");

// register for a user
router.post("/register", register);

// login routes
router.post("/login", login);

// to change password when login is successful

router.put(
  "/change-password/:id",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const id = req.params.id;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    // const saltRounds = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(oldPassword, saltRounds);
    try {
      connection.query(
        "SELECT * FROM users_dtls WHERE user_id =?",
        [id],
        (err, result) => {
          if (result) {
            res.send("User found");
          }
        }
      );
    } catch (error) {
      res.send(error.message);
    }
  }
);

// to forgot password
router.post("/forgotpassword", forgotpassword);

// to reset password
router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router;
