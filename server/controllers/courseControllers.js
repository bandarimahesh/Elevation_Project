const connection = require("../dbConnection.js");

exports.courseControllers = async (req, res, next) => {
  const name = req.body.name;
  const duration = req.body.duration;
  const creationDate = req.body.creationDate;
  const start = req.body.start;
  const end = req.body.end;
  const participants = req.body.participants;
  const category = req.body.category;
  const createdBy = req.body.createdBy;
  const trainerName = req.body.trainerName;
  const rating = req.body.rating;
  const tags = req.body.tags;
  try {
    connection.query(
      "INSERT INTO courses_dtls (course_name, course_duration, course_cr_date, course_start_dt, course_end_dt, course_participants, course_category, course_created_by, course_trainer_name, course_rating,course_tags) VALUES(?,?,?,?,?,?,?,?,?,?,?) ",
      [
        name,
        duration,
        creationDate,
        start,
        end,
        participants,
        category,
        createdBy,
        trainerName,
        rating,
        tags,
      ],
      (err, result) => {
        if (result) {
          res.send(result);
        }
        if (err) res.send(err.message);
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};
exports.getCourseController = async (req, res, next) => {
  res.send("hello from the new course");
};
