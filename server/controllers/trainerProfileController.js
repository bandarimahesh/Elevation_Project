const connection = require("../dbConnection.js");
const moment = require("moment");
const bcrypt = require("bcrypt");

exports.updateTrainerProfileDetailsController = (req, res, next) => {
  const id = req.params.id;
  const file = req.files.image;
  const {
    firstName,
    lastName,
    mobileNumber,
    experience,
    qualification,
    prefTime,
    noOfHrs,
    engType,
    skills,
    lnProfile,
    description,
    location,
  } = req.body;

  try {
    let uploadPath;
    file.name = new Date().getTime() + "-" + file.name;
    uploadPath = __dirname + "../../images/" + file.name;
    file.mv(uploadPath, (err) => {
      if (err) res.send(err.message);
      connection.query(
        "SELECT * FROM user_dtls WHERE user_dtls_id=?",
        [id],
        (err, user) => {
          if (err) {
            res.send({ error: err.message });
          }
          if (user) {
            const email = user[0].user_email;
            connection.query(
              "INSERT INTO trainer_profile (trainer_email,trainer_firstname,trainer_lastname,trainer_mobile,trainer_lnprofile,trainer_qualifications,trainer_skills,trainer_exp_yrs,trainer_pref_time,trainer_engment_typ,trainer_no_of_hrs_daily,trainer_location,trainer_description,trainer_image) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
              [
                email,
                firstName,
                lastName,
                mobileNumber,
                lnProfile,
                qualification,
                skills,
                experience,
                prefTime,
                engType,
                noOfHrs,
                location,
                description,
                file.name,
              ],
              (err, result) => {
                if (err) {
                  return res.send({ error: err.message });
                } else {
                  return res.send({
                    success: "Successfully uploaded the trainer details",
                  });
                }
              }
            );
          } else {
            res.send("no user found");
          }
        }
      );
    });
  } catch (error) {
    res.send(error.message);
  }
};

exports.getTrainerProfileDetailsController = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM user_dtls WHERE user_dtls_id =?",
    [id],
    (err, result) => {
      if (err) {
        res.send({ error: err.message });
      }
      if (result.length > 0) {
        const email = result[0].user_email;
        connection.query(
          "SELECT * FROM trainer_profile WHERE  trainer_email=?",
          [email],
          (err, result) => {
            if (err) {
              res.send({ error: err.message });
            }
            if (result.length > 0) {
              res.send(result);
            } else {
              return;
            }
          }
        );
      }
    }
  );
};

// update in the users table firstname and lastname
exports.updateTrainerUserAccountCtrl = (req, res) => {
  const id = req.params.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  connection.query(
    "SELECT * FROM user_dtls WHERE user_dtls_id =?",
    [id],
    (err, result) => {
      if (err) {
        res.send({ error: err.message });
      }
      if (result.length > 0) {
        const sqlUpdate =
          "UPDATE user_dtls SET user_firstname=?, user_lastname=? WHERE user_dtls_id =?";
        connection.query(
          sqlUpdate,
          [firstName, lastName, id],
          (err, result) => {
            if (!err) {
              return res.send({
                success: "Successfully update the account details",
              });
            } else {
              return res.send({
                error: "There was an error updating the account details",
              });
            }
          }
        );
      }
    }
  );
};

exports.updateTrainerProfilePicture = (req, res) => {
  const file = req.files.image;
  const id = req.params.id;
  let uploadPath;
  file.name = new Date().getTime() + "-" + file.name;
  uploadPath = __dirname + "../../images/" + file.name;
  const sqlSelect = "SELECT * FROM user_dtls WHERE user_dtls_id =?";
  connection.query(sqlSelect, [id], (err, result) => {
    if (result) {
      const email = result[0].user_email;
      const sqlSelect = "SELECT * FROM trainer_profile WHERE trainer_email =?";
      connection.query(sqlSelect, [email], (err, user) => {
        if (user.length > 0) {
          file.mv(uploadPath, (err) => {
            if (err) {
              res.send(err.message);
            } else {
              const sqlUpdate =
                "UPDATE trainer_profile SET trainer_image = ? WHERE trainer_email = ?";
              connection.query(sqlUpdate, [file.name, email], (err, result) => {
                if (!result) {
                  res.send("Please update your trainer details");
                }
                res.send({ success: "Profile picture updated successfully" });
              });
            }
          });
        } else {
          res.send("Please update the trainee details");
        }
      });
    } else {
      res.send({
        error: "No user found",
      });
    }
  });
};

exports.updateTechnicalDetails = (req, res) => {
  const id = req.params.id;
  const {
    firstName,
    lastName,
    mobileNumber,
    experience,
    qualification,
    prefTime,
    noOfHrs,
    engType,
    skills,
    lnProfile,
    description,
    location,
  } = req.body;
  const sqlSelect = "SELECT * FROM user_dtls WHERE user_dtls_id =?";
  connection.query(sqlSelect, [id], (err, result) => {
    if (err) return res.send(err.message);
    if (result.length > 0) {
      const email = result[0].user_email;
      const sqlSelect = "SELECT * FROM trainer_profile WHERE trainer_email =?";
      connection.query(sqlSelect, [email], (err, data) => {
        if (err) {
          res.send({ error: err.message });
        }
        if (data.length > 0) {
          const trainerId = data[0].trainer_id;
          const sqlUpdate =
            "UPDATE trainer_profile SET trainer_firstname=?, trainer_lastname=?,trainer_mobile=?,trainer_lnprofile=?,trainer_qualifications=?,trainer_skills=?,trainer_exp_yrs=?,trainer_pref_time=?,trainer_engment_typ=?,trainer_no_of_hrs_daily=?,trainer_location=?,trainer_description=?, WHERE trainer_id =?";
          connection.query(
            sqlUpdate,
            [
              firstName,
              lastName,
              mobileNumber,
              lnProfile,
              qualification,
              skills,
              experience,
              prefTime,
              engType,
              noOfHrs,
              location,
              description,
              trainerId,
            ],
            (error, response) => {
              if (error) {
                res.send({ error: error.message });
              } else {
                res.send({
                  success: "Successfully updated the technical details",
                });
              }
            }
          );
        } else {
          res.send({
            error:
              "no user found please update the trainer details clicking on the button",
          });
        }
      });
    }
  });
};

// get courses by trainer in the single trainer pages
exports.getOnlyTrainerCourses = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM courses_dtls WHERE course_trainer_profile_id=?",
    [id],
    (err, result) => {
      if (err) {
        res.send({ error: err.message });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        return;
      }
    }
  );
  // connection.query(
  //   "SELECT * FROM user_dtls WHERE user_dtls_id =?",
  //   [id],
  //   (err, result) => {
  //     if (err) {
  //       res.send({ error: err.message });
  //     }
  //     if (result.length > 0) {
  //       const email = result[0].user_email;
  //     }
  //   }
  // );
};

// add bank account details to the dbConnection
exports.addBankAccountDetails = async (req, res, next) => {
  const id = req.params.id;
  let { accountNumber, ifscCode, fullName } = req.body;
  fullName = fullName.toUpperCase();
  const hashedIfscCode = await bcrypt.hash(ifscCode, 12);
  const hashedAccountNumber = await bcrypt.hash(accountNumber, 12);
  console.log(hashedIfscCode, hashedAccountNumber);
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_dtls_id =?",
      [id],
      (err, result) => {
        if (err) {
          res.send(err.message);
        }
        if (result.length > 0) {
          const email = result[0].user_email;
          const userId = result[0].user_dtls_id;
          connection.query(
            "SELECT * FROM trainer_profile WHERE trainer_email=?",
            [email],
            (err, result) => {
              if (err) {
                res.send(err.message);
              }
              if (result.length > 0) {
                const trainerProfileId = result[0].trainer_profile_id;
                var mysqlTimestamp = moment(Date.now()).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
                connection.query(
                  "SELECT * FROM trainer_bank_ac_dtls WHERE trainer_bank_ac_user_id=? AND  trainer_bank_ac_trainer_profile_id=? AND trainer_bank_ac_trainer_email=? ",
                  [userId, trainerProfileId, email],
                  (err, data) => {
                    if (err) {
                      res.send({
                        error:
                          "There was and was an error while uploading the account details",
                      });
                    }
                    if (data.length > 0) {
                      res.send({
                        success:
                          "You have all ready fill this bank account details",
                      });
                    } else {
                      connection.query(
                        "INSERT INTO trainer_bank_ac_dtls (trainer_bank_ac_user_id, trainer_bank_ac_trainer_profile_id,trainer_bank_ac_trainer_email,trainer_bank_ac_fullname, trainer_bank_ac_number,trainer_bank_ac_ifsc,trainer_bank_ac_cr_date) VALUES(?, ?, ?, ?, ?, ?, ?) ",
                        [
                          userId,
                          trainerProfileId,
                          email,
                          fullName,
                          hashedAccountNumber,
                          hashedIfscCode,
                          mysqlTimestamp,
                        ],
                        (err, result) => {
                          if (err) {
                            res.send({
                              error:
                                "There was and was an error while uploading the account details",
                            });
                          }
                          if (result) {
                            res.send({
                              success:
                                "Bank account details added successfully,Thank You!",
                            });
                          }
                        }
                      );
                    }
                  }
                );
              } else {
                res.send({
                  error: "No user found Please update the profile details",
                });
              }
            }
          );
        } else {
          res.send({
            error: "No user found Please update the profile details",
          });
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};

// get trainer courses in single trainer page
exports.getTrainerProfileDetailsInSinglePage = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM trainer_profile WHERE trainer_profile_id=?",
    [id],
    (err, result) => {
      if (err) {
        res.send({ error: err.message });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        return;
      }
    }
  );
  // connection.query(
  //   "SELECT * FROM user_dtls WHERE user_dtls_id =?",
  //   [id],
  //   (err, result) => {
  //     if (err) {
  //       res.send({ error: err.message });
  //     }
  //     if (result.length > 0) {
  //       const email = result[0].user_email;

  //     }
  //   }
  // );
};
