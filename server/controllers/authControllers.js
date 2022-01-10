const connection = require("../dbConnection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// register for a new user controller
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
          res.send(
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
          res.send(err.message);
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
                process.env.JWT_SECRET_KEY,
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
};
exports.changePassword = async (req, res, next) => {
  const id = req.params.id;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const saltRounds = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(oldPassword, saltRounds);
  try {
    connection.query(
      "SELECT * FROM users_dtls WHERE user_id =?",
      [id],
      (err, users) => {
        if (users.length > 0) {
          res.send("User found");
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};
exports.forgotpassword = (req, res, next) => {
  res.send("Forgot Password");
};
exports.resetpassword = (req, res, next) => {
  res.send("Reset Password");
};
