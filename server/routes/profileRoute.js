const router = require("express").Router();
const connection = require("../dbConnection.js");
const bcrypt = require("bcrypt");
const moment = require("moment");

// update profile
router.post("/update", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const dob = req.body.dob;
  const address = req.body.address;
  const experience = req.body.experience;
  const graduate = req.body.graduate;
  const profession = req.body.profession;

  var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  try {
    connection.query(
      "INSERT INTO student_dtls (student_username, student_email, student_mobile,student_dob, student_address, student_experience, student_graduate, student_profession) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [username, email, mobile, dob, address, experience, graduate, profession],
      (err, result) => {
        if (err) {
          console.log(err.message);
        }
        if (result) {
          console.log(result);
          res.send(result);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
