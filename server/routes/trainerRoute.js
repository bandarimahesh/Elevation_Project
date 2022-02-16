const router = require("express").Router();
const {
  getAllTrainerDetails,
  updateTrainerApprove,
  updateTrainerDisApprove,
  getTrainerDetailsApproveOrNot,
  getOnlyTrainerDetails,
  getAllTrainersDetailsInTrainers,
} = require("../controllers/trainerControllers");

const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");

router.get(
  "/getAllTrainers",
  verifyTokenAndAuthorization,
  getAllTrainerDetails
);
// approve trainer route
router.put(
  "/update/approve",
  verifyTokenAndAuthorization,
  updateTrainerApprove
);

// disapprove trainer route
router.put(
  "/update/disapprove",
  verifyTokenAndAuthorization,
  updateTrainerDisApprove
);

// trainer/get/trainer/TrainerDetails
router.get("/get/details/:id", getTrainerDetailsApproveOrNot);


// giving permission to add new course page
router.get("/get/trainer/find/:id", verifyToken, getOnlyTrainerDetails);

// all trainers in trainer section
router.get("/get/all-trainers", getAllTrainersDetailsInTrainers);

module.exports = router;
