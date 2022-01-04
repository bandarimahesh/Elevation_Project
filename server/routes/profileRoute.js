const router = require("express").Router();
const bcrypt = require("bcrypt");
const connection = require("../dbConnection");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");

//update the user
router.post("/profile/:id", verifyToken, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const id = req.params.id;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);

  const sqlUpdate = "UPDATE users SET username= ?, password = ? WHERE id = ?";

  connection.query(sqlUpdate, [username, hashPassword, id], (err, result) => {
    if (result) {
      res.send("Successfully updated the username and password");
    } else {
      res.send(err.message);
    }
  });
});

// deleting the user account

router.delete("/profile/:id", verifyToken, async (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM users WHERE id= ?";

  connection.query(sqlDelete, [id], (err, result) => {
    if (result) {
      res.send("Successfully deleted the user from the database");
    } else {
      res.send("Failed to delete the user from database");
    }
  });
});

//get the user details
router.get("/details/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const sqlSelect = "SELECT * FROM users WHERE id =?";

  connection.query(sqlSelect, [id], (err, result) => {
    if (result) {
      res.send(result);
    } else {
      res.send("Please update the details of the user");
    }
  });
});

module.exports = router;
