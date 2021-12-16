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
    const result = connection.query(
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
      ]
    );
    if (!result) {
      console.log("There is an error while creating the user");
    } else {
      console.log("Successfully created the registration");
    }
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

  try {
    const result = connection.query(
      "SELECT user_pwd FROM user_dtls where user_name= ? AND user_type= ? ",
      [username, type],
      (err, rows) => {
        var output = {};
        if (rows.length != 0) {
          var password_hash = rows[0]["user_pwd"];
          const verified = bcrypt.compare(password, password_hash);
          if (verified) {
            output["status"] = 1;
          } else {
            output["status"] = 0;
            output["message"] = "Invalid password";
          }
        } else {
          output["status"] = 0;
          output["message"] = "Invalid username and password";
        }
        console.log(output);
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
