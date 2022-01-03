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
  FormInputFile,
  FormLabel,
  FormOption,
  FormSelect,
} from "./FormProfileElements";

const Form1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  // const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [graduate, setGraduate] = useState("");
  const [profession, setProfession] = useState("");

  const profileSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("users/profile/update", {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        dob: dob,
        address: address,
        experience: experience,
        graduate: graduate,
        profession: profession,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <FormDiv>
        <Form onSubmit={profileSubmitHandler}>
          <FormInput
            type="text"
            placeholder="Enter your First Name"
            onChang={(e) => setFirstName(e.target.value)}
          />
          <FormInput type="text" placeholder="Enter your Last Name" />
          <FormInput
            type="number"
            placeholder="Enter your Mobile Name"
            onChange={(e) => setMobile(e.target.value)}
          />
          <FormFlex>
            <FormLabel htmlFor="">Enter your Dob :</FormLabel>
            <FormInputDate type="date" />
          </FormFlex>
          <FormFlex>
            <FormLabel>Education:</FormLabel>
            <FormSelect required>
              <FormOption>Choose a below option</FormOption>
              <FormOption value="1">Pursing</FormOption>
              <FormOption value="2">Graduate</FormOption>
              <FormOption value="2">Under Graduate</FormOption>
              <FormOption value="4">Post Graduate</FormOption>
            </FormSelect>
          </FormFlex>
          <FormFlex>
            <FormLabel> Profession:</FormLabel>
            <FormSelect required>
              <FormOption>Choose a below option</FormOption>
              <FormOption value="graduation">
                Completed the graduation
              </FormOption>
              <FormOption value="trainer">Looking for a trainer</FormOption>
              <FormOption value="job">Seeking for a job</FormOption>
              <FormOption value="skills">Learning a new skills</FormOption>
            </FormSelect>
          </FormFlex>
          <FormAddress>Enter your address</FormAddress>
          <FormFlex>
            <FormLabel htmlFor="">Choose Profile Picture :</FormLabel>
            <FormInputFile type="file" placeholder="choose your profile" />
          </FormFlex>
          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form1;
