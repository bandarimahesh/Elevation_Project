const {
  addNewCourseControllers,
  getCourseController,
  allCourseControllers,
  getCourseByCategoryDomain,
  getCourseByCategorySoftware,
  getCourseByCategoryItSkills,
  getCourseBySearch,
  upload,
} = require("../controllers/courseControllers");

const router = require("express").Router();

router.post("/new-course", upload, addNewCourseControllers);
// sp course

router.get("/full-course/:id", getCourseController);
// get course by name

router.get("/all-courses", allCourseControllers);
router.get("/search", getCourseBySearch);
router.get("/category/domain", getCourseByCategoryDomain);
router.get("/category/it-skills", getCourseByCategoryItSkills);
router.get("/category/software", getCourseByCategorySoftware);

module.exports = router;
