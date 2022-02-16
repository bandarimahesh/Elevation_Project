const connection = require("../dbConnection.js");
exports.getTransactionalDetails = (req, res) => {
  const id = req.params.id;

  try {
    connection.query(
      "SELECT * FROM user_dtls WHERE user_dtls_id =?",
      [id],
      (err, data) => {
        if (err) {
          res.send({ error: err.message });
        }
        if (data.length > 0) {
          const email = data[0].user_email;
          connection.query("");
        }
      }
    );
  } catch (error) {}
};
let mahesh = "hello mahesh";

const result = mahesh.replace(/\s/g, "-").toLowerCase();

console.log(result);
