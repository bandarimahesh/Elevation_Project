const connection = require("../dbConnection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox8aea151c6fc5467c9d2f3f60cecd828f.mailgun.org";
const mg = mailgun({ apiKey: process.env.MAIL_GUN_API_KEY, domain: DOMAIN });

// register for a new user controller
// exports.register = async (req, res, next) => {
//   const email = req.body.email;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const type = req.body.type;

//   const saltRound = 10;
//   const saltRounds = await bcrypt.genSalt(saltRound);
//   const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

//   var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

//   try {
//     connection.query(
//       "SELECT * FROM user_dtls WHERE user_email=?",
//       [email],
//       (err, user) => {
//         if (user.length > 0) {
//           return res.send(
//             "This email address is already in use, Please use another email address"
//           );
// stop executions when user has same mail
//         } else {
//           const signupToken = jwt.sign(
//             { email, firstName, lastName },
//             process.env.SIGNUP_JWT_KEY,
//             { expiresIn: "20m" }
//           );
//           const data = {
//             from: "noreply@hello.com",
//             to: email,
//             subject: "Account verification link",
//             html: `<h2>Please click on link to verify your account</h2><br/><a href="http:localhost:3000/authenticate/email/${signupToken}">Verify Account</a>`,
//           };
//           mg.messages().send(data, function (error, body) {
//             if (error) {
//               res.send(error.message);
//             }
//             if (body) {
//               res.send(body);
//             }
//           });
//           connection.query(
//             "INSERT INTO user_dtls (user_email, user_pwd, user_logindate,user_logintime, user_firstname, user_lastname, user_status, user_creation,user_modified_by, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)",
//             [
//               email,
//               hashedPassword,
//               new Date(),
//               mysqlTimestamp,
//               firstName,
//               lastName,
//               1,
//               new Date(),
//               "admin",
//               type,
//             ],
//             (err, result) => {
//               if (err) {
//                 console.log(err.message);
//                 res.send(
//                   "There was an error creating the user please try again later"
//                 );
//               } else {
//                 console.log(result);
//                 res.send(
//                   "Successfully created the new account Please check your email and activate your account"
//                 );
//               }
//             }
//           );
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error.message);
//     res.send("There was an error while signing up.Please try again");
//   }
// };

//without email sign up
exports.register = async (req, res, next) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const type = req.body.type;

  const saltRound = 10;
  const saltRounds = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_email=?",
      [email],
      (err, user) => {
        if (user.length > 0) {
          return res.send(
            "This email address is already in use, Please use another email address"
          );
          // stop executions when user has same mail
        } else {
          connection.query(
            "INSERT INTO user_dtls (user_email, user_pwd, user_logindate,user_logintime, user_firstname, user_lastname, user_status, user_creation,user_modified_by, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)",
            [
              email,
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
                res.send(
                  "There was an error creating the user please try again later"
                );
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
};

// login for a user
exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const type = req.body.type;

  if (!username || !password || !type) {
    res
      .status(500)
      .send("Please enter a username, password and usertype to login");
  }

  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_email=? AND user_type=?",
      [username, type],
      (err, result) => {
        if (!result) {
          console.log(err.message);
          // res.send("Please check your all your fields");
          res.status(403).send(err.message);
        }
        if (result.length > 0) {
          bcrypt.compare(password, result[0].user_pwd, (err, response) => {
            if (response) {
              const accessToken = jwt.sign(
                {
                  id: result[0].user_dtls_id,
                  type: result[0].user_type,
                  isSuperAdmin: result[0].user_superAdmin,
                },
                process.env.JWT_LOGIN_SECRET_KEY,
                { expiresIn: "10m" }
              );
              res.send({
                id: result[0].user_dtls_id,
                email: result[0].user_email,
                username: result[0].user_firstname,
                lastname: result[0].user_lastname,
                type: result[0].user_type,
                accessToken: accessToken,
              });
            } else {
              res.status(404).send("wrong password");
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
};
exports.changePassword = async (req, res, next) => {
  const id = req.params.id;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const saltRounds = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(oldPassword, saltRounds);
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_dtls_id =?",
      [id],
      (err, user) => {
        if (user) {
          res.send(user);
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};

exports.forgotpassword = (req, res, next) => {
  const email = req.body.email;
  connection.query(
    "SELECT * FROM user_dtls WHERE user_email=?",
    [email],
    (err, result) => {
      if (err) {
        return res.send("No email found with this email address");
      }
      if (result.length > 0) {
      }
    }
  );
};

exports.resetpassword = (req, res, next) => {
  res.send("Reset Password");
};

// // email account activation
// exports.emailAccountActivation = (req, res, next) => {
//   const { signupToken } = req.body;
//   if (signupToken) {
//     jwt.verify(signupToken, process.env.SIGNUP_JWT_KEY, (err, decodedToken) => {
//       if (err) {
//         res.send(err.status);
//       } else {
//         const { name, email, password } = decodedToken;
//         try {
//           connection.query(
//             "SELECT * FROM user_dtls WHERE user_email=?",
//             [email],
//             (err, user) => {
//               if (user.length > 0) {
//                 return res.send(
//                   "This email address is already in use, Please use another email address"
//                 );
//                 // stop executions when user has same mail
//               } else {
//                 connection.query(
//                   "INSERT INTO user_dtls (user_email, user_pwd, user_logindate,user_logintime, user_firstname, user_lastname, user_status, user_creation,user_modified_by, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)",
//                   [
//                     email,
//                     hashedPassword,
//                     new Date(),
//                     mysqlTimestamp,
//                     firstName,
//                     lastName,
//                     1,
//                     new Date(),
//                     "admin",
//                     type,
//                   ],
//                   (err, result) => {
//                     if (err) {
//                       console.log(err.message);
//                       res.send(
//                         "There was an error creating the user please try again later"
//                       );
//                     } else {
//                       console.log(result);
//                       res.send(
//                         "Successfully created the new account Please check your email and activate your account"
//                       );
//                     }
//                   }
//                 );
//               }
//             }
//           );
//         } catch (error) {
//           console.log(error.message);
//           res.send("There was an error while signing up.Please try again");
//         }
//       }
//     });
//   } else {
//     return res.status(401).send("incorrect or expired link");
//   }
// };
