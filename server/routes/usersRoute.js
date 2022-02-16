const router = require("express").Router();
const {
  getAllTheUsersData,
  updateAdminApprove,
  updateAdminDisapprove,
} = require("../controllers/usersController");
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken.js");

router.get("/get", verifyTokenAndAuthorization, getAllTheUsersData);

// approve admin route
router.put(
  "/update/approve/:id",
  verifyTokenAndAuthorization,
  updateAdminApprove
);
// disapprove admin route
router.put(
  "/update/disapprove/:id",
  verifyTokenAndAuthorization,
  updateAdminDisapprove
);
module.exports = router;
