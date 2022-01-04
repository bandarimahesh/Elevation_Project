const router = require("express").Router();
const {
  createTraineeProfile,
  updateTraineeProfile,
  getOnlyUserDetails,
} = require("../controllers/traineeProfileController");
const connection = require("../dbConnection");

const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");

// creating the new profile details to the trainee_dtls table
router.post(
  "/profile/create/:id",
  verifyTokenAndAuthorization,
  createTraineeProfile
);

//updating the trainee details  in the database
router.put(
  "/profile/update/:id",
  verifyTokenAndAuthorization,
  updateTraineeProfile
);

// deleting the user account
router.delete(
  "/profile/delete/:id",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const id = req.params.id;

    const sqlDelete = "DELETE FROM users WHERE id= ?";

    connection.query(sqlDelete, [id], (err, result) => {
      if (result) {
        res.send("Successfully deleted the user from the database");
      } else {
        res.send("Failed to delete the user from database");
      }
    });
  }
);

//get the user details
router.get("/details/:id", verifyTokenAndAuthorization, getOnlyUserDetails);

module.exports = router;
