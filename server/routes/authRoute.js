const router = require("express").Router();
const connection = require("../dbConnection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// register for a user
router.post("/register", async (req, res) => {
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const type = req.body.type;

  const saltRound = 10;
  const saltRounds = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  try {
    connection.query(
      "SELECT  FROM user_dtls WHERE user_name=? ",
      [username],
      (err, user) => {
        if (user) {
          res.send(
            "The email address is already in use, Please use another email address"
          );
        } else {
          connection.query(
            "INSERT INTO user_dtls (user_name, user_pwd, user_logindate,user_logintime, user_firstname, user_lastname, user_status, user_creation,user_modified_by, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)",
            [
              username,
              hashedPassword,
              new Date(),
              mysqlTimestamp,
              firstName,
              lastName,
              1,
              new Date(),
              "admin",
              type,
            ],
            (err, result) => {
              if (err) {
                console.log(err.message);
                res.send(err.message);
              } else {
                console.log(result);
                res.send(
                  "Successfully created the new account Please check your email and activate your account"
                );
              }
            }
          );
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    res.send("There was an error while signing up.Please try again");
  }
});

// login routes
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const type = req.body.type;

  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_name=? AND user_type=?",
      [username, type],
      (err, result) => {
        if (!result) {
          console.log(err.message);
          res.send("Please check your all your fields");
        }
        if (result.length > 0) {
          bcrypt.compare(password, result[0].user_pwd, (err, response) => {
            if (response) {
              const accessToken = jwt.sign(
                {
                  id: result[0].user_dtls_id,
                  type: result[0].user_type,
                },
                process.env.LOGIN_SECRET_KEY
              );
              res.send({
                id: result[0].user_dtls_id,
                username: result[0].user_firstname,
                lastname: result[0].user_lastname,
                type: result[0].user_type,
                accessToken: accessToken,
              });
            } else {
              res.send("wrong password");
            }
          });
        } else {
          res.send("User not found");
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});
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
