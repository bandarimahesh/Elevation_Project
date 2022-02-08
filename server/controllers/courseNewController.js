const connection = require("../dbConnection.js");

// adding  a new course route
exports.createNewCourse = async (req, res) => {
  const id = req.params.id;
  const file = req.files.image;
  const courseName = req.body.courseName;
  const price = req.body.price;
  const category = req.body.category;
  const tags = req.body.tags;
  const startsDate = req.body.startsDate;
  const endsDate = req.body.endsDate;
  const title = req.body.title;
  const link = req.body.spayeeLink;
  const duration = 4;
  const creationDate = new Date();
  const participants = 20;
  const createdBy = "Navrik Team";
  const description = req.body.description;
  connection.query(
    "SELECT * FROM user_dtls WHERE user_dtls_id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.send(err.message);
      } else {
        let uploadPath;
        file.name = new Date().getTime() + "-" + file.name;
        uploadPath = __dirname + "../../images/" + file.name;
        const firstName = result[0].user_firstname;
        const lastName = result[0].user_lastname;
        const trainerName = firstName + " " + lastName;
        file.mv(uploadPath, (err) => {
          if (err) res.send(err.message);
          connection.query(
            "INSERT INTO courses_dtls (course_name, course_price, course_title,course_duration,course_cr_date, course_start_dt,course_end_dt, course_participants,course_category,course_created_by,course_trainer_name,course_tags,course_spayee_link,course_image,course_desc) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [
              courseName,
              price,
              title,
              duration,
              creationDate,
              startsDate,
              endsDate,
              participants,
              category,
              createdBy,
              trainerName,
              tags,
              link,
              file.name,
              description,
            ],
            (err, response) => {
              if (!err) {
                return res.send({
                  success: "The course was successfully added.",
                });
              } else {
                return res.send({ error: "There was an error the new course" });
              }
            }
          );
        });
      }
    }
  );
};
// get all the course the user is

exports.getAllTheCourses = (req, res) => {
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
// editing the course
exports.editCourse = async (req, res) => {
  const id = req.params.id;
  const file = req.files.image;
  const courseName = req.body.courseName;
  const price = req.body.price;
  const category = req.body.category;
  const tags = req.body.tags;
  const startsDate = req.body.startsDate;
  const endsDate = req.body.endsDate;
  const title = req.body.title;
  const link = req.body.spayeeLink;
  const duration = 4;
  const creationDate = new Date();
  const participants = 20;
  const createdBy = "Navrik Team";
  const description = req.body.description;

  try {
    const sqlUpdate =
      "UPDATE user_dtls SET course_name=?, course_price=?, course_title=?,course_duration=?,course_cr_date=?, course_start_dt=?,course_end_dt=?, course_participants=?,course_category=?,course_created_by=?,course_trainer_name=?,course_tags=?,course_spayee_link=?,course_image=?,course_desc=? WHERE user_dtls_id =?";

    let uploadPath;
    file.name = new Date().getTime() + "-" + file.name;
    uploadPath = __dirname + "../../images/" + file.name;

    file.mv(uploadPath, (err) => {
      if (err) res.send(err.message);
      connection.query(
        sqlUpdate,
        [
          courseName,
          price,
          title,
          duration,
          creationDate,
          startsDate,
          endsDate,
          participants,
          category,
          createdBy,
          trainerName,
          tags,
          link,
          file.name,
          description,
        ],
        (err, response) => {
          if (!err) {
            return res.send({
              success: "The editing of course was successfully completed.",
            });
          } else {
            return res.send({
              error: "There was an error while editing the course",
            });
          }
        }
      );
    });
  } catch (error) {
    res.send(error.message);
  }
};


// deleting the course

exports.deleteCourse = async (req, res) => {
  const id = req.params.id;
  try {
    connection.query(
      "DELETE FROM courses_dtls WHERE course_id=? ;",
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
