const router = require("express").Router();

const {
  createTraineeProfile,
  updateTraineeProfile,
  getOnlyUserDetails,
  checkTraineeDetails,
  updateTraineeAccountDetails,
  uploadUserImage,
  getTraineeAllDetails,
} = require("../controllers/traineeProfileController");
const connection = require("../dbConnection");

const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");

// creating the new trainee profile details to the trainee_dtls table
router.post("/profile/create/:id", verifyToken, createTraineeProfile);

// get details of the trainee
router.get("/profile/check/:id", verifyToken, checkTraineeDetails);

//updating the personal trainee details  in the database
router.put("/profile/update/:id", verifyToken, updateTraineeProfile);

//updating the account details
router.put("/profile/account/:id", verifyToken, updateTraineeAccountDetails);

// upload an image to the server
router.put("/image/upload/:id", verifyToken, uploadUserImage);

// get user image details
router.get("/details/get/:id", verifyToken, getTraineeAllDetails);

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

router.get("/getDetails", verifyToken, checkTraineeDetails);

//get the trainee and user details
router.get("/details/:id", verifyToken, getOnlyUserDetails);

// get all the trainer Details

module.exports = router;
