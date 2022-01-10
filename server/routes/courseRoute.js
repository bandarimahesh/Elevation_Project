const {
  courseControllers,
  getCourseController,
  allCourseControllers,
} = require("../controllers/courseControllers");

const router = require("express").Router();

router.post("/new-course", courseControllers);
// sp course

router.get("/full-course/:id", getCourseController);

router.get("/all-courses", allCourseControllers);

module.exports = router;
