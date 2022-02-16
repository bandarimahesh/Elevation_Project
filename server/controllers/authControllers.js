const connection = require("../dbConnection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const mailgun = require("mailgun-js");
const { sendEmail } = require("../middleware/sendEmail.js");
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
  const lowEmail = email.toLowerCase();
  const saltRound = 10;
  const saltRounds = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  if (!lowEmail && !password && firstName && !lastName && !type) {
    res.json({
      required: "ALl details must be required",
    });
  }
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_email=?",
      [lowEmail],
      (err, user) => {
        if (user.length > 0) {
          res.json({
            exists:
              "This email address is already in use, Please use another email address",
          });
          // stop executions when user has same mail
        } else {
          connection.query(
            "INSERT INTO user_dtls (user_email, user_pwd, user_logindate,user_logintime, user_firstname, user_lastname, user_status, user_creation,user_modified_by, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)",
            [
              lowEmail,
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
                res.json({
                  error:
                    "There was an error while creating the account please try again later",
                });
              } else {
                console.log(result);
                res.json({
                  success:
                    "Successfully created the account, Please check your email and activate",
                });
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

exports.logout = async (req, res) => {
  const refreshToken = req.body.token;
  refreshTokenArray = refreshTokenArray.filter(
    (token) => token !== refreshToken
  );
  res.send({ logout: "You are successfully logged out" });
};
//array

let refreshTokenArray = [];

exports.refreshToken = async (req, res, next) => {
  let refreshToken = req.body.token;

  if (!refreshToken) {
    return res.send({ error: "You are not authenticated." });
  }
  if (!refreshTokenArray.includes(refreshToken)) {
    res.send({ error: "Invalid refresh token." });
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
    if (err) res.send({ error: err.message });

    refreshTokenArray.filter((token) => token !== refreshToken);

    const newAccessToken = jwt.sign(user, process.env.JWT_LOGIN_SECRET_KEY, {
      expiresIn: "10m",
    });
    const newRefreshToken = jwt.sign(user, process.env.JWT_REFRESH_TOKEN);

    refreshTokenArray.push(newRefreshToken);
    res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  });
};

// login for a user
exports.login = async (req, res, next) => {
  const username = req.body.username;
  const lowEmail = username.toLowerCase();
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
      [lowEmail, type],
      (err, result) => {
        if (!result) {
          res.status(403).send(err.message);
        }
        if (result.length > 0) {
          bcrypt.compare(password, result[0].user_pwd, (err, response) => {
            if (response) {
              const id = result[0].user_dtls_id;
              const accessToken = jwt.sign(
                {
                  id: result[0].user_dtls_id,
                  email: result[0].user_email,
                  type: result[0].user_type,
                  isSuperAdmin: result[0].user_is_superadmin,
                },
                process.env.JWT_LOGIN_SECRET_KEY
              );
              const refreshToken = jwt.sign(
                {
                  id: result[0].user_dtls_id,
                  email: result[0].user_email,
                  type: result[0].user_type,
                  isSuperAdmin: result[0].user_is_superadmin,
                },
                process.env.JWT_REFRESH_TOKEN
              );
              refreshTokenArray.push(refreshToken);
              res.json({
                success: {
                  id: result[0].user_dtls_id,
                  email: result[0].user_email,
                  firstname: result[0].user_firstname,
                  lastname: result[0].user_lastname,
                  type: result[0].user_type,
                  role: result[0].user_is_superadmin,
                  accessToken: accessToken,
                  refreshToken: refreshToken,
                },
              });
            } else {
              res.json({
                wrong: "Sorry you entered incorrect password",
              });
            }
          });
        } else {
          res.json({
            notFound:
              "There is no account with that email address, Please sign Up!",
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

exports.changePassword = async (req, res, next) => {
  const id = req.params.id;
  const password = req.body.password;
  if (!password) {
    res.send({ required: "The password must be required" });
  }
  const saltRounds = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_dtls_id =?",
      [id],
      (err, user) => {
        if (user) {
          connection.query(
            "UPDATE user_dtls SET user_pwd=? WHERE user_dtls_id=?",
            [hashedPassword, id],
            (err, response) => {
              if (response) {
                res.send({ success: "Successfully updated the password" });
              } else {
                res.send(error.message);
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};

exports.forgotpassword = (req, res, next) => {
  const email = req.body.email;
  if (!email) return;
  const lowEmail = email.toLowerCase();

  connection.query(
    "SELECT * FROM user_dtls WHERE user_email=?",
    [lowEmail],
    (err, result) => {
      if (err) {
        return res.send({ error: err.message });
      }
      if (!result.length) {
        res.send({
          error: "There is no account with this email address. Please sign up!",
        });
      }
      if (result.length > 0) {
        const forgotPasswordToken = jwt.sign(
          {
            id: result[0].user_dtls_id,
            email: result[0].user_email,
            type: result[0].user_type,
          },
          process.env.JWT_FORGOT_PASSWORD_TOKEN,
          { expiresIn: "15m" }
        );
        const url = `${process.env.FRONT_END_LINK}/user/activate/reset-password/${forgotPasswordToken}`;
        const data = sendEmail(
          "msdeverything@gmail.com",
          url,
          "Forgot password link",
          "Click to reset password"
        );
        mg.messages().send(data, function (error, body) {
          if (error) {
            res.send({ error: "There was an error sending the link" });
          }
          if (body) {
            res.send({
              success:
                "Email has been sent to your register account,Link will be expired in 10 minutes",
            });
          }
        });
      }
    }
  );
};

exports.resetpassword = async (req, res, next) => {
  const password = req.body.password;
  if (!password) {
    res.send({ error: "The password must be required" });
  }
  const saltRounds = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_FORGOT_PASSWORD_TOKEN, (err, user) => {
        if (!err) {
          const id = user.id;
          connection.query(
            "SELECT * FROM user_dtls WHERE user_dtls_id =?",
            [id],
            (err, user) => {
              if (user) {
                connection.query(
                  "UPDATE user_dtls SET user_pwd=? WHERE user_dtls_id=?",
                  [hashedPassword, id],
                  (err, response) => {
                    if (response) {
                      res.send({
                        success: "Successfully updated the password",
                      });
                    } else {
                      res.send({
                        error: "There was an error updating the password",
                      });
                    }
                  }
                );
              }
            }
          );
        } else {
          return res.send({ token: "Token is invalid or expired" });
        }
      });
    } else {
      return res.send({ token: "You are not authenticated" });
    }
  } catch (error) {
    res.send(error.message);
  }
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

exports.emailRegister = async (req, res, next) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const type = req.body.type;
  const lowEmail = email.toLowerCase();
  const password = req.body.password;
  let hashedPassword = await bcrypt.hash(password, 12);

  if (!lowEmail && !password && firstName && !lastName && !type) {
    res.json({
      required: "ALl details must be required",
    });
  }
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_email=?",
      [email],
      (err, user) => {
        if (err) {
          res.send(err.message);
        }
        if (user.length > 0) {
          res.json({
            exists:
              "This email address is already in use, Please use another email address",
          });
          // stop executions when user has same mail
        } else {
          const emailActivationToken = jwt.sign(
            {
              email: lowEmail,
              firstName: firstName,
              lastName: lastName,
              type: type,
              password: hashedPassword,
            },
            process.env.JWT_EMAIL_ACTIVATION_KEY,
            { expiresIn: "30m" }
          );
          const url = `${process.env.FRONT_END_LINK}/user/activate/account/${emailActivationToken}`;
          const data = sendEmail(
            email,
            url,
            "Account Activation Link",
            "Click to Activate the account"
          );
          mg.messages().send(data, function (error, body) {
            if (error) {
              res.send({ error: "There was an error sending the link" });
            }
            if (body) {
              res.send({
                success:
                  "Email has been sent to your email account,Link will be expired in 10 minutes",
              });
            }
          });
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};

exports.emailAccountActivate = async (req, res, next) => {
  const id = req.params.id;
  const signupToken = req.body.signUpToken;

  if (signupToken) {
    jwt.verify(
      signupToken,
      process.env.JWT_EMAIL_ACTIVATION_KEY,
      (err, decodedToken) => {
        if (err) {
          res.send(err.status);
        } else {
          const { email, firstName, lastName, type, password } = decodedToken;
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
                  var mysqlTimestamp = moment(Date.now()).format(
                    "YYYY-MM-DD HH:mm:ss"
                  );
                  connection.query(
                    "INSERT INTO user_dtls (user_email, user_pwd, user_logindate,user_logintime, user_firstname, user_lastname, user_status, user_creation,user_modified_by, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)",
                    [
                      email,
                      password,
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
                        res.send({
                          error:
                            "There was an error creating the user please try again later",
                        });
                      } else {
                        res.send({
                          success:
                            "Successfully created the new account Please login your account update all your details",
                        });
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
        }
      }
    );
  } else {
    return res.status(401).send("incorrect or expired link");
  }
};
