import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../../context/Context";
import {
  Form,
  FormAddress,
  FormBtn,
  FormDiv,
  FormFlex,
  FormInput,
  FormInputDate,
  FormLabel,
  FormOption,
  FormSelect,
} from "./FormProfileElements";

const Form1 = () => {
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  // const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [graduate, setGraduate] = useState("");
  const [profession, setProfession] = useState("");
  const { user } = useContext(Context);
  const token = user?.accessToken;

  const profileAccountHandler = async (event) => {
    event.preventDefault();
    console.log(address, experience, graduate, profession, mobile, dob);
    try {
      const res = await axios.put(
        `/trainee/profile/update/${user?.id}`,
        {
          mobile: mobile,
          dob: dob,
          address: address,
          experience: experience,
          graduate: graduate,
          profession: profession,
        },
        { headers: { authorization: "Bearer " + token } }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <FormDiv>
        <Form onSubmit={profileAccountHandler}>
          <FormInput
            type="number"
            placeholder="Enter your Mobile Name"
            onChange={(e) => setMobile(e.target.value)}
          />
          <FormFlex>
            <FormLabel htmlFor="">Enter your Dob :</FormLabel>
            <FormInputDate
              type="date"
              onChange={(e) => setDob(e.target.value)}
            />
          </FormFlex>
          <FormFlex>
            <FormLabel>Education:</FormLabel>
            <FormSelect onChange={(event) => setGraduate(event.target.value)}>
              <FormOption>Choose a below option</FormOption>
              <FormOption value="1">Pursing</FormOption>
              <FormOption value="2">Graduate</FormOption>
              <FormOption value="2">Under Graduate</FormOption>
              <FormOption value="4">Post Graduate</FormOption>
            </FormSelect>
          </FormFlex>
          <FormFlex>
            <FormLabel> Profession:</FormLabel>
            <FormSelect onChange={(event) => setProfession(event.target.value)}>
              <FormOption>Choose a below option</FormOption>
              <FormOption value="graduation">
                Completed the graduation
              </FormOption>
              <FormOption value="trainer">Looking for a trainer</FormOption>
              <FormOption value="job">Seeking for a job</FormOption>
              <FormOption value="skills">Learning a new skills</FormOption>
            </FormSelect>
          </FormFlex>
          <FormFlex>
            <FormLabel>Experience:</FormLabel>
            <FormSelect onChange={(event) => setExperience(event.target.value)}>
              <FormOption>Choose a below option</FormOption>
              <FormOption value="0">0</FormOption>
              <FormOption value="1">1</FormOption>
              <FormOption value="2">2</FormOption>
              <FormOption value="3">3</FormOption>
              <FormOption value="4">4</FormOption>
              <FormOption value="5">5</FormOption>
            </FormSelect>
          </FormFlex>
          <FormAddress onChange={(e) => setAddress(e.target.value)}>
            Enter your address
          </FormAddress>
          <FormBtn>Save</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form1;
