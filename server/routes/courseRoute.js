const {
  getCourseController,
  allCourseControllers,
  getCourseByCategoryDomain,
  getCourseByCategoryRpa,
  getCourseByCategoryItSkills,
  getCourseBySearch,
  getMasterCourseByTitles,
  addJoinNowCourse,
} = require("../controllers/courseControllers");

const { verifyToken } = require("../middleware/verifyToken");
const router = require("express").Router();

// sp course

router.get("/full-course/:id", getCourseController);
// get course by name

router.get("/all-courses", allCourseControllers);
router.get("/search", getCourseBySearch);
router.get("/category/domain", getCourseByCategoryDomain);
router.get("/category/it-skills", getCourseByCategoryItSkills);
router.get("/category/rpa", getCourseByCategoryRpa);

router.get("/master", getMasterCourseByTitles);

// join now form submission
router.post("/joinNow", verifyToken, addJoinNowCourse);

module.exports = router;
