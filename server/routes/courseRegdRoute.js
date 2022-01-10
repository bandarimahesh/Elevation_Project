const connection = require("../dbConnection");
const router = require("express").Router();
// add new course details and trainee details
router.post("/new-course/register", registerNewCourseController);
// remove course details and trainee details
