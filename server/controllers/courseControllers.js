const connection = require("../dbConnection.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({ storage: storage }).single("image");

exports.addNewCourseControllers = async (req, res, next) => {
  console.log(file);
  // const title = req.body.title;
  // const price = req.body.price;
  // const tags = req.body.tags;
  // const category = req.body.category;
  // const startsDate = req.body.startsDate;
  // const endsDate = req.body.endsDate;
  // const trainerName = req.body.trainerName;
  // const courseCreatedDate = new Date().toDateString();
  // const courseParticipants = 400;
  // const createdBy = "admin";
  // try {
  //   let uploadPath;
  //   uploadPath = __dirname + "/images/" + file.name;

  //   file.mv(uploadPath, (err) => {
  //     if (err) {
  //       res.send(err.message);
  //     }

  //     connection.query(
  //       "INSERT INTO courses_dtls (course_img) VALUES(?)",
  //       [file.name],
  //       (err, data) => {
  //         if (err) {
  //           return res.send(err.message);
  //         } else {
  //           res.send(file.name);
  //         }
  //       }
  //     );
  // const insertQuery =
  //   "INSERT INTO courses_dtls (course_price, course_title,  course_cr_date, course_start_dt, course_end_dt, course_participants, course_category, course_created_by, course_trainer_name, course_rating,course_tags, course_img) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
  // connection.query(
  //   insertQuery,
  //   [
  //     price,
  //     title,
  //     courseCreatedDate,
  //     startsDate,
  //     endsDate,
  //     courseParticipants,
  //     category,
  //     createdBy,
  //     trainerName,
  //     rating,
  //     tags,
  //     sampleFile.name,
  //   ],
  //   (err, result) => {
  //     if (result) {
  //       res.send(result);
  //       console.log("uploaded success");
  //     }
  //     if (err) res.send(err.message);
  //   }
  // );
  //   });
  // } catch (error) {
  //   res.send(error.message);
  // }
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

exports.getCourseByCategoryDomain = (req, res, next) => {
  const category = "domain";
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_category = ? LIMIT 2",
      [category],
      (err, result) => {
        if (err) {
          res.status(500).send("No courses found for this category");
        }
        if (result) {
          res.status(200).send(result);
        }
      }
    );
  } catch (error) {}
};
exports.getCourseByCategoryItSkills = (req, res, next) => {
  const category = "it-skills";
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_category = ? LIMIT 2",
      [category],
      (err, result) => {
        if (err) {
          res.status(500).send("No courses found for this category");
        }
        if (result) {
          res.status(200).send(result);
        }
      }
    );
  } catch (error) {}
};

exports.getCourseByCategoryRpa = (req, res, next) => {
  const category = "rpa";
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_category = ? LIMIT 2",
      [category],
      (err, result) => {
        if (err) {
          res.status(500).send("No courses found for this category");
        }
        if (result) {
          res.status(200).send(result);
        }
      }
    );
  } catch (error) {}
};

exports.getCourseBySearch = (req, res) => {
  const query = req.query.name;
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_name = ? LIMIT 2",
      [query],
      (err, result) => {
        if (err) {
          res.status(500).json("No courses found for this category");
        }
        if (result) {
          res.status(200).send(result);
        }
      }
    );
  } catch (error) {}
};
exports.getMasterCourseByTitles = (req, res) => {
  const query = req.query.category;
  try {
    connection.query(
      "SELECT * FROM course_master WHERE course_master_cat_name = ?",
      [query],
      (err, result) => {
        if (err) {
          return res.status(500).json("Not found anything");
        }
        if (result) {
          return res.status(200).send(result);
        }
      }
    );
  } catch (error) {}
};

exports.addJoinNowCourse = (req, res) => {
  const {
    email,
    firstName,
    lastName,
    mobileNumber,
    experience,
    masterCourseNameId,
  } = req.body;

  try {
    connection.query(
      "SELECT * FROM course_master WHERE course_master_name_id = ?",
      [masterCourseNameId],
      (err, result) => {
        if (err) {
          return res.status(500).json("Not found anything");
        }
        if (result) {
          const courseCatId = result[0].course_master_cat_id;
          connection.query(
            "INSERT INTO trainer_details_post_reg (trainer_email,trainer_firstname,trainer_lastname,trainer_mobile, trainer_course_id,trainer_exp_yrs,trainer_course_cat_id) VALUES(?,?,?,?,?,?,?)",
            [
              email,
              firstName,
              lastName,
              mobileNumber,
              masterCourseNameId,
              experience,
              courseCatId,
            ],
            (err, result) => {
              if (err) {
                return res.send(err.message);
              } else {
                return res.send({
                  success:
                    "Successfully submitted the form , wait for the email to be sent",
                });
              }
            }
          );
        }
      }
    );
  } catch (error) {
    return res.send({ error: error.message });
  }
};
