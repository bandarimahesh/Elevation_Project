const router = require("express").Router();
const {
  getTransactionalDetails,
} = require("../controllers/trainerEarningCtrl");

router.get("/account/get/:id", getTransactionalDetails);
module.exports = router;
