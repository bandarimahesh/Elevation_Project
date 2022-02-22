const connection = require("../dbConnection.js");

// inserting the data to the trainee details
exports.createTraineeProfile = async (req, res, next) => {
  const id = req.params.id;
  const file = req.files.image;
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
        let uploadPath;
        file.name = new Date().getTime() + "-" + file.name;
        uploadPath = __dirname + "../../images/" + file.name;
        const email = result[0].user_email;
        file.mv(uploadPath, (err) => {
          connection.query(
            "INSERT INTO trainee_dtls (trainee_email, trainee_mobile, trainee_dob,trainee_image,trainee_address, trainee_experience,trainee_graduate, trainee_profession) VALUES (?,?,?,?,?,?,?,?)",
            [
              email,
              mobile,
              dob,
              file.name,
              address,
              experience,
              graduate,
              profession,
            ],
            (err, response) => {
              if (!err) {
                return res.send({
                  success: "Profile details is success fully saved",
                });
              } else {
                return res.send({ error: "There is some error while saving" });
              }
            }
          );
        });
      }
    }
  );
};

// showing the form the profile form working
exports.checkTraineeDetails = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM user_dtls WHERE user_dtls_id = ?",
    [id],
    (err, result) => {
      if (result.length > 0) {
        const email = result[0].user_email;
        connection.query(
          "SELECT * FROM trainee_dtls WHERE trainee_email = ?",
          [email],
          (err, result) => {
            if (result.length > 0) {
              return res.send({ found: "Data found" });
            } else {
              return res.send({ notFound: "Data not found" });
            }
          }
        );
      } else {
        return res.send({ notFound: "Data not found" });
      }
    }
  );
};

// to get trainee image in navbar
exports.getTraineeAllDetails = (req, res) => {
  const id = req.params.id;
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
            if (err) {
              res.send(err);
            }
            if (user.length > 0) {
              res.send(user);
            } else {
              return;
            }
          }
        );
      } else {
        res.send(err.message);
      }
    }
  );
};
// win trainer profile section updating the personal details working
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
                "UPDATE trainee_dtls SET trainee_mobile=?,trainee_dob=?, trainee_address=?, trainee_experience=?, trainee_graduate=?,trainee_profession=? WHERE trainee_email=?";
              connection.query(
                sqlUpdate,
                [mobile, dob, address, experience, graduate, profession, email],
                (err, result) => {
                  if (result) {
                    res.send({
                      success: "Successfully updated the personal details",
                    });
                  } else {
                    res.send({
                      error: "There was an error updating the personal details",
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
        return res.send({ success: "Successfully update the account details" });
      } else {
        return res.send({
          error: "There was an error updating the account details",
        });
      }
    });
  } catch (error) {
    res.send(error.message);
  }
};

// image upload
exports.uploadUserImage = (req, res) => {
  const file = req.files.image;
  const id = req.params.id;

  let uploadPath;
  file.name = new Date().getTime() + "-" + file.name;
  uploadPath = __dirname + "../../images/" + file.name;

  const sqlSelect = "SELECT * FROM user_dtls WHERE user_dtls_id =?";

  connection.query(sqlSelect, [id], (err, result) => {
    if (result) {
      const email = result[0].user_email;
      const sqlSelect = "SELECT * FROM trainee_dtls WHERE trainee_email =?";
      connection.query(sqlSelect, [email], (err, user) => {
        if (user.length > 0) {
          file.mv(uploadPath, (err) => {
            if (err) {
              res.send(err.message);
            } else {
              const sqlUpdate =
                "UPDATE trainee_dtls SET trainee_image = ? WHERE trainee_email = ?";
              connection.query(sqlUpdate, [file.name, email], (err, result) => {
                if (!result) {
                  res.send("Please update your trainee details 1");
                }
                res.send({ success: "Profile picture updated successfully" });
              });
            }
          });
        } else {
          res.send("Please update the trainee details 2");
        }
      });
    } else {
      res.send({
        error: "No user found",
      });
    }
  });
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
