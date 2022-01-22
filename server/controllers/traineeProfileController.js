const connection = require("../dbConnection.js");

// inserting the data to the trainee details
exports.createTraineeProfile = async (req, res, next) => {
  const id = req.params.id;
  const mobile = req.body.mobile;
  const dob = req.body.dob;
  const graduate = req.body.graduate;
  const profession = req.body.profession;
  const experience = req.body.experience;
  const address = req.body.address;

  connection.query(
    "SELECT * FROM user_dtls WHERE user_dtls_id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.send(err.message);
      } else {
        const email = result[0].user_email;
        connection.query(
          "INSERT INTO trainee_dtls (trainee_email, trainee_mobile, trainee_dob,trainee_address, trainee_experience,trainee_graduate, trainee_profession) VALUES (?,?,?,?,?,?,?)",
          [email, mobile, dob, address, experience, graduate, profession],
          (err, response) => {
            if (!err) {
              return res.send(response);
            } else {
              return res.send(err.message);
            }
          }
        );
      }
    }
  );
};

// showing the form the profile form working
exports.checkTraineeDetails = (req, res) => {
  const email = req.body.email;
  connection.query(
    "SELECT * FROM trainee_dtls WHERE email = ?",
    [email],
    (err, result) => {
      if (!err) {
        return res.send(result);
      } else {
        return res.send(err.message);
      }
    }
  );
};

// working
exports.updateTraineeProfile = async (req, res, next) => {
  const id = req.params.id;
  const mobile = req.body.mobile;
  const dob = req.body.dob;
  const graduate = req.body.graduate;
  const profession = req.body.profession;
  const experience = req.body.experience;
  const address = req.body.address;

  connection.query(
    "SELECT * FROM user_dtls WHERE user_dtls_id=? ",
    [id],
    (err, result) => {
      if (result) {
        const email = result[0].user_email;
        connection.query(
          "SELECT * FROM trainee_dtls WHERE trainee_email=? ",
          [email],
          (err, user) => {
            if (user) {
              const sqlUpdate =
                "UPDATE trainee_dtls SET trainee_mobile=?,trainee_dob=?, trainee_address=?, trainee_experience=?, trainee_graduate=?,trainee_profession=?";
              connection.query(
                sqlUpdate,
                [mobile, dob, address, experience, graduate, profession],
                (err, result) => {
                  if (result) {
                    res.send({
                      success: "Successfully updated the personal details",
                    });
                  } else {
                    res.send({
                      error:
                        "There was an error updating the personal details,Please fill all details before updating",
                    });
                  }
                }
              );
            } else {
              return res.send(err.message);
            }
          }
        );
      } else {
        res.send(err.message);
      }
    }
  );
};

exports.updateTraineeAccountDetails = (req, res) => {
  const id = req.params.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  try {
    const sqlUpdate =
      "UPDATE user_dtls SET user_firstname=?, user_lastname=? WHERE user_dtls_id =?";
    connection.query(sqlUpdate, [firstName, lastName, id], (err, result) => {
      if (!err) {
        return res.send("Successfully update the account details");
      } else {
        return res.send(err.message);
      }
    });
  } catch (error) {
    res.send(error.message);
  }
};

exports.getOnlyUserDetails = async (req, res, next) => {
  const id = req.params.id;
  const sqlSelect = "SELECT * FROM user_dtls WHERE user_dtls_id =?";
  connection.query(sqlSelect, [id], (err, result) => {
    if (result) {
      res.send({ success: result });
    } else {
      res.send({
        error: "Please update the details of the user",
      });
    }
  });
};
