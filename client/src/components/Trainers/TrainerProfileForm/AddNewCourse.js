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
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddNewCourse = () => {
  const [title, setTitle] = useState("");
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [startsDate, setStartsDate] = useState("");
  const [endsDate, setEndsDate] = useState("");
  const [image, setImage] = useState("");
  const [spayeeLink, setSpayeeLink] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const navigate = useNavigate();
  const AddNewCourseHandler = async (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("courseName", courseName);
    data.append("price", price);
    data.append("category", category);
    data.append("tags", tags);
    data.append("startsDate", startsDate);
    data.append("endsDate", endsDate);
    data.append("spayeeLink", spayeeLink);
    data.append("description", description);

    try {
      const res = await axios.post(`/courses/new/add/${user?.id}`, data, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      if (res.data.success) {
        setSuccess(res.data.success);
        navigate("/courses");
      }
      if (res.data.error) {
        setError(res.data.error);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <TrainerProfileSect>
      <TrainerProfileSection>
        <TrainerProfileWrapper>
          <FormDiv>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <Form
              onSubmit={AddNewCourseHandler}
              method="POST"
              encType="multipart/form-data"
            >
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
              </FormInputDiv>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel htmlFor="">Course Starts Date</FormLabel>
                  <FormInputDate
                    required
                    type="date"
                    onChange={(e) => setStartsDate(e.target.value)}
                  />
                </FormFlex>
              </FormInputDiv>
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
                  <FormOption>Choose a below option</FormOption>
                  <FormOption value="software-development">
                    Software Development
                  </FormOption>
                  <FormOption value="domain-skills">Domain Skills</FormOption>
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
                  <FormLabel htmlFor="">Spayee Link</FormLabel>
                  <FormInputDate
                    required
                    type="text"
                    name="spayeeLink"
                    onChange={(e) => setSpayeeLink(e.target.value)}
                  />
                </FormFlex>
              </FormInputDiv>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel>Course Image</FormLabel>
                  <FormInputFile
                    type="file"
                    name="image"
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                </FormFlex>
              </FormInputDiv>
              <FormInputDiv>
                <FormFlex>
                  <FormLabel htmlFor="summernote">Description</FormLabel>
                  <FormAddress
                    id="summernote"
                    required
                    name="description"
                    placeholder=" Give a Brief Description about the course"
                    onChange={(e) => setDescription(e.target.value)}
                  >
                    <Editor />
                  </FormAddress>
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
