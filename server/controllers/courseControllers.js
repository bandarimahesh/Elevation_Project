const connection = require("../dbConnection.js");

exports.courseControllers = async (req, res, next) => {
  const name = req.body.name;
  const duration = req.body.duration;
  const price = req.body.price;
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
      "INSERT INTO courses_dtls (course_name,course_price course_duration, course_cr_date, course_start_dt, course_end_dt, course_participants, course_category, course_created_by, course_trainer_name, course_rating,course_tags) VALUES(?,?,?,?,?,?,?,?,?,?,?,?) ",
      [
        name,
        price,
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
  const id = req.params.id;
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_id =?",
      [id],
      (err, result) => {
        if (result) {
          res.send(result);
        }
        if (err) {
          res.send(err.message);
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};
exports.allCourseControllers = (req, res, next) => {
  try {
    connection.query(
      "SELECT * FROM courses_dtls ORDER BY course_id DESC LIMIT 10000 ;",
      (err, result) => {
        if (result) {
          res.send(result);
        }
        if (err) {
          res.send(err.message);
        }
      }
    );
  } catch (error) {
    res.send(error.message);
  }
};
