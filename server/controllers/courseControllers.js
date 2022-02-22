const connection = require("../dbConnection.js");
const moment = require("moment");

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
  const qCategory = req.query.category;
  if (qCategory) {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_category=?",
      [qCategory],
      (err, result) => {
        if (result) {
          res.send(result);
        }
        if (err) {
          res.send(err.message);
        }
      }
    );
  } else {
    try {
      connection.query(
        "SELECT * FROM courses_dtls ORDER BY course_priority DESC LIMIT 10000;",
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
  }
};

exports.getCourseByCategoryDomain = (req, res, next) => {
  const category = "domain-skills";
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_category = ? ORDER BY course_id DESC LIMIT 2",
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
      "SELECT * FROM courses_dtls WHERE course_category = ? ORDER BY course_id DESC LIMIT 2",
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
  const category = "software-development";
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_category = ? ORDER BY course_id DESC LIMIT 2",
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
    qualification,
    prefTime,
    noOfHrs,
    engType,
    skills,
  } = req.body;
  connection.query(
    "SELECT * FROM course_master WHERE course_master_name_id=?",
    [masterCourseNameId],
    (err, result) => {
      if (err) {
        return res.send(err.message);
      }
      if (result.length > 0) {
        const masterCourseId = result[0].course_master_name_id;
        connection.query(
          "SELECT * FROM trainer_details_approve WHERE trainer_email = ? AND trainer_course_id =?",
          [email, masterCourseId],
          (err, result) => {
            if (err) {
              return res.status(500).json("Not found anything");
            }
            if (result.length > 0) {
              let courseId = result[0].trainer_course_id;
              if (masterCourseId === courseId) {
                res.send({
                  error:
                    "You have all ready applied for this course wait for the verification to complete",
                });
              }
            } else {
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
                      let mysqlTimestamp = moment(Date.now()).format(
                        "YYYY-MM-DD HH:mm:ss"
                      );
                      connection.query(
                        "INSERT INTO trainer_details_approve (trainer_email,trainer_firstname,trainer_lastname,trainer_mobile,trainer_qualifications,trainer_skills,trainer_exp_yrs,trainer_pref_time,trainer_engment_typ,trainer_no_of_hrs_daily,trainer_creation_date,trainer_course_id,trainer_course_cat_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        [
                          email,
                          firstName,
                          lastName,
                          mobileNumber,
                          qualification,
                          skills,
                          experience,
                          prefTime,
                          engType,
                          noOfHrs,
                          mysqlTimestamp,
                          masterCourseNameId,
                          courseCatId,
                        ],
                        (err, result) => {
                          if (err) {
                            return res.send(err.message);
                          } else {
                            return res.send({
                              success:
                                "Successfully submitted the form ,Wait for the approval process from the admin",
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
            }
          }
        );
      }
    }
  );
};

exports.getCourseBySearchInAllCourses = (req, res) => {
  let search = req.query.search;
  search = "%search%";
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_name LIKE ? OR course_title Like ? OR course_tags LIKE ?",
      [search, search, search, search],
      (err, results) => {
        if (err) {
          res.send(err.message);
        } else {
          res.send(results);
        }
      }
    );
  } catch (error) {}
};

exports.getCourseByCategory = (req, res) => {
  const query = req.query.category;
  try {
    connection.query(
      "SELECT * FROM courses_dtls WHERE course_category= ?",
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
