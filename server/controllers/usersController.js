const connection = require("../dbConnection.js");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox8aea151c6fc5467c9d2f3f60cecd828f.mailgun.org";
const mg = mailgun({ apiKey: process.env.MAIL_GUN_API_KEY, domain: DOMAIN });

exports.getAllTheUsersData = (req, res) => {
  try {
    connection.query(
      "SELECT * FROM user_dtls ORDER BY user_dtls_id DESC",
      (err, result) => {
        if (err) {
          res.send(err.message);
        } else {
          res.send({ success: result });
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};

exports.updateAdminApprove = (req, res, next) => {
  const params = req.params.id;
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_dtls_id=? ",
      [params],
      (err, result) => {
        if (err) {
          return res.send(err.message);
        } else {
          const admin = result[0].user_is_superadmin;

          if (admin === 0) {
            const sqlUpdate =
              "UPDATE user_dtls SET user_is_superadmin =? WHERE user_dtls_id=? ";
            const admin = 1;
            connection.query(sqlUpdate, [admin, params], (err, result) => {
              if (err) {
                return res.send(err.message);
              } else {
                const data = {
                  from: "noreply@elevashun.com",
                  to: "msdeverything@gmail.com",
                  subject: "Admin approve emails",
                  html: `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Elevation Training Programme</h2>
                      <p>Congratulations! You're almost set to start using our Platform .
                          You are now approved as admin in the Elevashun Programme please contact us through this email address.
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

exports.updateAdminDisapprove = (req, res, next) => {
  const params = req.params.id;
  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_dtls_id=? ",
      [params],
      (err, result) => {
        if (err) {
          return res.send(err.message);
        } else {
          const admin = result[0].user_is_superadmin;
          if (admin === 1) {
            const sqlUpdate =
              "UPDATE user_dtls SET user_is_superadmin =? WHERE user_dtls_id=? ";
            const notAdmin = 0;
            connection.query(sqlUpdate, [notAdmin, params], (err, result) => {
              if (err) {
                return res.send(err.message);
              } else {
                const data = {
                  from: "noreply@elevashun.com",
                  to: "msdeverything@gmail.com",
                  subject: "You are not a admin ",
                  html: `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Elevation Training Programme</h2>
                      <p>Congratulations! You're almost set to start using our Platform .
                          You are not a admin anymore in the Elevashun Programme please contact us through this email address.
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
                      disapproved: "Ypu are not admin",
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
