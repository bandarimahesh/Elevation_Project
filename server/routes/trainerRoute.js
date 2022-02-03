const router = require("express").Router();
const {
  getAllTrainerDetails,
  updateTrainerApprove,
  updateTrainerDisApprove,
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
router.put("/update/approve/:id", updateTrainerApprove);
// disapprove trainer route
router.put("/update/disapprove/:id", updateTrainerDisApprove);

module.exports = router;
