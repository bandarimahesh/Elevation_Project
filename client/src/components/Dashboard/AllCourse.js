import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Model from "../Trainee/Model";
import ConfirmModel from "./ConfirmModel";
import EditCourse from "./EditCourse";

const AllCourse = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allCourses, setAllCourse] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  useEffect(() => {
    const getAllTheCourse = async () => {
      const res = await axios.get(`/courses/new/dashboard/courses`, {
        headers: { authorization: "Bearer " + token },
      });
      setAllCourse(res.data);
    };
    getAllTheCourse();
  }, [token]);

  const courseDeleteHandler = async (course) => {
    const res = await axios.delete(`/courses/new/delete/${course.course_id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log(res);
  };
  const courseEditHandler = async (course) => {
    // const res = await axios.put(`/courses/new/edit/${course.course_id}`, {
    //   headers: { authorization: "Bearer " + token },
    // });
    // console.log(res);
    setShowEditForm(true);
  };
  return (
    <div className="rightbarSect">
      <div className="tableDiv">
        <h1>All course</h1>
        <div className="itmes">
          <div className="flex1">
            <div className="redBox"></div>
            <p className="tag"> Course Will be deleted</p>
          </div>
          <div className="flex1">
            <div className="yellowBox"></div>
            <p className="tag"> Course Edit</p>
          </div>
        </div>
        <table>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Course Title</th>
            <th>Course Starts & End Date</th>
            <th>Course Category</th>
            <th>Course Created By</th>
            <th>Course Trainer Name</th>
            <th>Course Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {allCourses?.map((course) => (
            <tr key={course.course_id}>
              <td>{course.course_id}</td>
              <td>{course.course_name}</td>
              <td>{course.course_title}</td>
              <td>
                {new Date(course.course_start_dt).toLocaleDateString()}-
                {new Date(course.course_end_dt).toLocaleDateString()}
              </td>
              <td>{course.course_category}</td>
              <td>{course.course_created_by}</td>
              <td>{course.course_trainer_name}</td>
              <td>Rs:{course.course_price}</td>
              <td>
                <button
                  className="disapprove"
                  onClick={() => courseEditHandler(course)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="disapproved1"
                  onClick={() => courseDeleteHandler(course)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllCourse;
