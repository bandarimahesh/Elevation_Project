const {
  courseControllers,
  getCourseController,
} = require("../controllers/courseControllers");

const router = require("express").Router();


router.post('/new-course', courseControllers)
router.get('/new-course', getCourseController)
module.exports = router;
