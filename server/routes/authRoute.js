const router = require("express").Router();
const connection = require("../dbConnection.js");
const bcrypt = require("bcrypt");

// register for a user
router.post("/register", async (req, res) => {
  const username = req.body.username;
  const saltRound = 10;
  const saltRounds = await bcrypt.genSalt(saltRound);
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  try {
    const result = connection.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const saltRound = 10;
  const saltRounds = await bcrypt.genSalt(saltRound);

  try {
    const result = connection.query(
      "SELECT password from users where username=?",
      [username],
      (err, rows) => {
        var output = {};
        if (rows.length != 0) {
          var password_hash = rows[0]["password"];
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
