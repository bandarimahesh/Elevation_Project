const {
  createNewCourse,
  getAllTheCourses,
  editCourse,
  deleteCourse,
} = require("../controllers/courseNewController");
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");
const router = require("express").Router();


// adding new course route
router.post("/add/:id", verifyTokenAndAuthorization, createNewCourse);
// getting the all the courses in dashboard
router.get("/dashboard/courses", verifyTokenAndAuthorization, getAllTheCourses);
// edit specific course
router.put("/edit/:id", verifyTokenAndAuthorization, editCourse);
// delete specific course
router.delete("/delete/:id", verifyTokenAndAuthorization, deleteCourse);
module.exports = router;
