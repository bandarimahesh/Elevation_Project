const router = require("express").Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require("../controllers/authControllers.js");


// register for a user
router.post("/register", register);

// login routes
router.post("/login", login);

// to change password
router.post("/forgotpassword", forgotpassword);

// to reset password
router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router;

// // login routes
// router.post("/login", async (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   try {
//     connection.query(
//       "SELECT * FROM user_dtls WHERE user_name=?",
//       [username],
//       (err, result) => {
//         if (err) {
//           console.log(err.message);
//           res.send("An error occurred: ");
//         }
//         if (result.length > 0) {
//           bcrypt.compare(password, result[0].user_pwd, (err, response) => {
//             if (response) {
//               res.send(result);
//             } else {
//               res.send("wrong password");
//             }
//           });
//         } else {
//           res.send("User not found");
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
// });
