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
  FormAddress,
} from "./JoinNowFormElements";

const JoinNowForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [category, setCategory] = useState("");
  const [masterCourses, setMasterCourses] = useState([]);
  const [masterCourseNameId, setMasterCourseNameId] = useState("");
  const [experience, setExperience] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [noOfHrs, setNoOfHrs] = useState("");
  const [engType, setEngType] = useState("");
  const [skills, setSkills] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const email = user?.email;
  const firstName = user?.firstname;
  const lastName = user?.lastname;
  const joinNowFormHandler = async (event) => {
    event.preventDefault();
    console.log(masterCourseNameId);
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
          qualification: qualification,
          prefTime: prefTime,
          noOfHrs: noOfHrs,
          engType: engType,
          skills: skills,
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
        toast.error(res.data.error, {
          position: "top-center",
        });
      }
      setExperience("");
      setMobileNumber("");
      setPrefTime("");
      setCategory("");
      setMasterCourses("");
      setMasterCourseNameId("");
      setQualification("");
      setPrefTime("");
      setEngType("");
      setNoOfHrs("");
      setSkills("");
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
                {masterCourses?.length > 0 ? (
                  masterCourses?.map((course) => (
                    <FormOption
                      key={course.course_master_name_id}
                      value={course.course_master_name_id}
                    >
                      {course.course_master_course_name}
                    </FormOption>
                  ))
                ) : (
                  <FormOption>No courses to display</FormOption>
                )}
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
              <FormLabel>Enter Your Mobile Number :</FormLabel>
              <Input
                required
                onChange={(e) => setMobileNumber(e.target.value)}
                type="number"
                placeholder="Must be a valid Mobile Number"
                min="10"
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </Field>
            <Field>
              <FormLabel>Enter Skills</FormLabel>
              <FormAddress
                onChange={(e) => setSkills(e.target.value)}
                defaultValue="Enter your skills separated by commas"
              ></FormAddress>
            </Field>
            <Field>
              <FormLabel>Your Qualification :</FormLabel>
              <FormSelect
                required
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="graduation">Graduation</FormOption>
                <FormOption value="post-graduation">Post Graduation</FormOption>
                <FormOption value="ph-d">Ph D</FormOption>
                <FormOption value="others">Others</FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>Your Preference Time:</FormLabel>
              <FormSelect
                required
                value={prefTime}
                onChange={(e) => setPrefTime(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="morning">Morning </FormOption>
                <FormOption value="afternoon">Afternoon</FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>How many hours you can teach ?</FormLabel>
              <FormSelect
                required
                value={noOfHrs}
                onChange={(e) => setNoOfHrs(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="2">2 </FormOption>
                <FormOption value="3">3</FormOption>
                <FormOption value="4">4 </FormOption>
                <FormOption value="5">5</FormOption>
                <FormOption value="6">6</FormOption>
              </FormSelect>
            </Field>
            <Field>
              <FormLabel>Your Engagement Type :</FormLabel>
              <FormSelect
                required
                value={engType}
                onChange={(e) => setEngType(e.target.value)}
              >
                <FormOption>Choose an option</FormOption>
                <FormOption value="part-time">Part Time </FormOption>
                <FormOption value="full-time">Full Time </FormOption>
              </FormSelect>
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
