const router = require("express").Router();
const {
  updateTrainerProfileDetailsController,
  getTrainerProfileDetailsController,
  updateTrainerUserAccountCtrl,
  updateTrainerProfilePicture,
  updateTechnicalDetails,
  getOnlyTrainerCourses,
} = require("../controllers/trainerProfileController");

const { verifyToken } = require("../middleware/verifyToken");
// post details to trainer profile table
router.post("/new/add/:id", verifyToken, updateTrainerProfileDetailsController);
// get data from the trainer profile table

router.get("/new/get/:id", verifyToken, getTrainerProfileDetailsController);

//
router.put("/update/:id", verifyToken, updateTrainerUserAccountCtrl);

router.put("/update/image/:id", verifyToken, updateTrainerProfilePicture);

// update technical details
router.put("/new/update/:id", verifyToken, updateTechnicalDetails);



// get trainer details in single trainer page
router.get("/get/:id", getTrainerProfileDetailsController);

// get trainer courses in single trainer page
router.get("/courses/get/:id", getOnlyTrainerCourses);

module.exports = router;
