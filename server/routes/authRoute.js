const router = require("express").Router();
const connection = require("../dbConnection.js");
const bcrypt = require("bcrypt");
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
        } else {
          console.log(result);
          res.send(result);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});
// login routes
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const type = req.body.type;
  const saltRound = 10;
  const saltRounds = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_name=? AND user_pwd=? AND user_type=?",
      [username, hashedPassword, type],
      (err, result) => {
        if (err) {
          console.log(err.message);
        }
        if (result) {
          res.send(result);
          console.log("FOund user");
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
