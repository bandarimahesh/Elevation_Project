import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Field,
  Form,
  FormLabel,
  FormOption,
  FormSelect,
  Input,
  NextButton,
  RegisterFormSect,
  RegisterFormSection,
  RegisterFormWrapper,
} from "./JoinNowFormElements";

const JoinNowForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [category, setCategory] = useState("");
  const [masterCourses, setMasterCourses] = useState([]);
  const [masterCourseNameId, setMasterCourseNameId] = useState("");
  const [experience, setExperience] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const email = user?.email;
  const firstName = user?.firstname;
  const lastName = user?.lastname;
  const joinNowFormHandler = async (event) => {
    event.preventDefault();
    if (mobileNumber.length === 10) {
      const res = await axios.post(
        "/courses/joinNow",
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          experience: experience,
          masterCourseNameId: masterCourseNameId,
          mobileNumber: mobileNumber,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, {
          position: "top-center",
        });
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.success(res.data.error, {
          position: "top-center",
        });
      }
      setExperience("");
      setMobileNumber("");
    } else {
      return setError(
        "Mobile number must be at least 10 characters or less than 11 characters"
      );
    }
  };

  useEffect(() => {
    const getCourseByTitles = async () => {
      const res = await axios.get(`/courses/master?category=${category}`);
      setMasterCourses(res.data);
    };
    getCourseByTitles();
  }, [category]);

  setTimeout(() => {
    setError("");
    setSuccess("");
  }, 9000);
  
  return (
    <RegisterFormSect>
      <RegisterFormSection>
        <RegisterFormWrapper>
          <Form onSubmit={joinNowFormHandler}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <Field>
              <FormLabel>Choose the course Category :</FormLabel>
              <FormSelect
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="it-skills">It Skills</FormOption>
                <FormOption value="domain-skills">Domain</FormOption>
                <FormOption value="software-development">
                  Software Development
                </FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>Choose the Course Name :</FormLabel>
              <FormSelect
                required
                onChange={(e) => setMasterCourseNameId(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                {masterCourses?.map((course) => (
                  <FormOption
                    key={course.course_master_name_id}
                    value={course.course_master_name_id}
                  >
                    {course.course_master_course_name}
                  </FormOption>
                ))}
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>Min Years of Experience :</FormLabel>
              <Input
                required
                onChange={(e) => setExperience(e.target.value)}
                type="number"
                placeholder="Minimum 10 years of experience"
                min="8"
              />
            </Field>
            <Field>
              <FormLabel>Enter your Mobile Number :</FormLabel>
              <Input
                required
                onChange={(e) => setMobileNumber(e.target.value)}
                type="number"
                placeholder="Must be a valid Mobile Number"
                min="10"
              />
            </Field>
            <Field>
              <NextButton
                disabled={!experience || !mobileNumber || !masterCourseNameId}
              >
                Submit
              </NextButton>
            </Field>
          </Form>
        </RegisterFormWrapper>
      </RegisterFormSection>
    </RegisterFormSect>
  );
};

export default JoinNowForm;
