import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  FormAddress,
  FormBtn,
  FormDiv,
  FormFlex,
  FormInput,
  FormInputDate,
  FormInputDiv,
  FormInputFile,
  FormLabel,
  FormOption,
  FormSelect,
  TrainerProfileSect,
  TrainerProfileSection,
  TrainerProfileWrapper,
} from "./TrainerProfileElements.js";
import { useSelector } from "react-redux";

const AddNewCourse = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [startsDate, setStartsDate] = useState("");
  const [endsDate, setEndsDate] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const trainerName = user.username + " " + user.lastname;

  const AddNewCourseHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `/courses/new-course`,
        {
          formData,
        },
        {
          headers: {
            authorization: "Bearer " + token,
            contentType: "multipart/form-data",
            Accept: "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <TrainerProfileSect>
      <TrainerProfileSection>
        <TrainerProfileWrapper>
          <FormDiv>
            <Form onSubmit={AddNewCourseHandler}>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel htmlFor="">Course Title</FormLabel>
                  <FormInput
                    required
                    type="text"
                    placeholder="Enter the Course Heading"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormFlex>
              </FormInputDiv>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel htmlFor="">Course Name</FormLabel>
                  <FormInput
                    required
                    type="text"
                    placeholder="Enter the name of your course like python"
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </FormFlex>
              </FormInputDiv>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel htmlFor="">Course Price:</FormLabel>
                  <FormInput
                    required
                    type="text"
                    placeholder="Enter the price for your course INR"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormFlex>
              </FormInputDiv>{" "}
              <FormInputDiv>
                <FormFlex>
                  <FormLabel htmlFor="">Course Starts Date</FormLabel>
                  <FormInputDate
                    required
                    type="date"
                    onChange={(e) => setStartsDate(e.target.value)}
                  />
                </FormFlex>
              </FormInputDiv>{" "}
              <FormInputDiv>
                <FormFlex>
                  <FormLabel htmlFor="">Course End Date</FormLabel>
                  <FormInputDate
                    required
                    type="date"
                    onChange={(e) => setEndsDate(e.target.value)}
                  />
                </FormFlex>
              </FormInputDiv>
              <FormFlex>
                <FormLabel>Choose the course Category</FormLabel>
                <FormSelect
                  required
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <FormOption>Choose a below option</FormOption>{" "}
                  <FormOption value="software">Software</FormOption>
                  <FormOption value="domain">Domain</FormOption>
                  <FormOption value="it-skills">It Skills</FormOption>
                </FormSelect>
              </FormFlex>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel>Course Tags</FormLabel>
                  <FormAddress
                    required
                    placeholder="Add some tags to your course separated by commas"
                    onChange={(e) => setTags(e.target.value)}
                  ></FormAddress>
                </FormFlex>
              </FormInputDiv>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel>Course Image</FormLabel>
                  <FormInputFile
                    type="file"
                    name="image"
                    onChange={(event) => setFile(event.target.files[0])}
                  />
                </FormFlex>
              </FormInputDiv>
              <FormBtn type="submit">Save</FormBtn>
            </Form>
          </FormDiv>
        </TrainerProfileWrapper>
      </TrainerProfileSection>
    </TrainerProfileSect>
  );
};

export default AddNewCourse;
