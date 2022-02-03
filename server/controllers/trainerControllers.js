const connection = require("../dbConnection.js");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox8aea151c6fc5467c9d2f3f60cecd828f.mailgun.org";
const mg = mailgun({ apiKey: process.env.MAIL_GUN_API_KEY, domain: DOMAIN });

exports.getAllTrainerDetails = (req, res, next) => {
  try {
    connection.query(
      "SELECT * FROM trainer_details_post_reg ORDER BY trainer_id DESC;",
      (err, result) => {
        if (err) {
          return res.send(err.message);
        } else {
          return res.send(result);
        }
      }
    );
  } catch (error) {
    return res.send(error.message);
  }
};

// approve trainer
exports.updateTrainerApprove = (req, res, next) => {
  const id = req.params.id;
  try {
    connection.query(
      "SELECT * FROM trainer_details_post_reg WHERE trainer_id=? ",
      [id],
      (err, result) => {
        if (err) {
          return res.send(err.message);
        } else {
          const approveRow = result[0].trainer_approve;
          if (approveRow === "no") {
            const sqlUpdate =
              "UPDATE trainer_details_post_reg SET trainer_approve =? WHERE trainer_id=?";
            const approve = "yes";
            connection.query(sqlUpdate, [approve, id], (err, result) => {
              if (err) {
                return res.send(err.message);
              } else {
                const data = {
                  from: "noreply@elevashun.com",
                  to: "msdeverything@gmail.com",
                  subject: "Trainer approve emails",
                  html: `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;"> 
                      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Elevation Training Programme</h2>
                      <p>Congratulations! You're almost set to start using our Platform .
                          You are now approved as trainer in the Elevashun Programme please contact us through this email address.
                      </p>
                      Do not reply this email address
                      </div>`,
                };
                mg.messages().send(data, function (error, body) {
                  if (error) {
                    res.send(error.message);
                  }
                  if (body) {
                    res.send({
                      approved: "The trainer has been disapproved",
                    });
                  }
                });
              }
            });
          }
        }
      }
    );
  } catch (error) {
    return res.send(error.message);
  }
};

// disapprove trainer route
exports.updateTrainerDisApprove = (req, res, next) => {
  const id = req.params.id;
  try {
    connection.query(
      "SELECT * FROM trainer_details_post_reg WHERE trainer_id=?",
      [id],
      (err, result) => {
        if (err) {
          return res.send(err.message);
        } else {
          const approveRow = result[0].trainer_approve;
          if (approveRow === "yes") {
            const sqlUpdate =
              "UPDATE trainer_details_post_reg SET trainer_approve =? WHERE trainer_id=?";
            const disapprove = "no";
            connection.query(sqlUpdate, [disapprove, id], (err, result) => {
              if (err) {
                return res.send(err.message);
              } else {
                const data = {
                  from: "noreply@elevashun.com",
                  to: "msdeverything@gmail.com",
                  subject: "Trainer rejection emails",
                  html: `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;"> 
                      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Elevation Training Programme</h2>
                      <p>Hello Hope you are doing well with your works this email about the status of a application about trainer in the elevashun Programme ,You have not met our criteria you are not eligible for this trainer post.Thank you for applying.
                      </p>
                      Do not reply this email address
                      </div>`,
                };
                mg.messages().send(data, function (error, body) {
                  if (error) {
                    res.send(error.message);
                  }
                  if (body) {
                    res.send({
                      disapproved: "The trainer has been disapproved",
                    });
                  }
                });
              }
            });
          }
        }
      }
    );
  } catch (error) {
    return res.send(error.message);
  }
};
