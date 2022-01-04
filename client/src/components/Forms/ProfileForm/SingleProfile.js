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
  SingleProfileSect,
  SingleProfileSection,
  SingleProfileWrapper,
} from "./SingleProfileElements";

const SingleProfile = () => {
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  // const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [graduate, setGraduate] = useState("");
  const [profession, setProfession] = useState("");
  const { user } = useContext(Context);
  const token = user?.accessToken;
  const profileSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `/trainee/profile/create/${user?.id}`,
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
    <SingleProfileSect>
      <SingleProfileSection>
        <SingleProfileWrapper>
          <FormDiv>
            <Form onSubmit={profileSubmitHandler}>
              <FormInput
                required
                type="number"
                placeholder="Enter your Mobile Name"
                onChange={(e) => setMobile(e.target.value)}
              />
              <FormFlex>
                <FormLabel htmlFor="">Enter your Dob :</FormLabel>
                <FormInputDate
                  required
                  type="date"
                  onChange={(e) => setDob(e.target.value)}
                />
              </FormFlex>
              <FormFlex>
                <FormLabel>Education:</FormLabel>
                <FormSelect
                  required
                  onChange={(event) => setGraduate(event.target.value)}
                >
                  <FormOption>Choose a below option</FormOption>
                  <FormOption value="1">Pursing</FormOption>
                  <FormOption value="2">Graduate</FormOption>
                  <FormOption value="2">Under Graduate</FormOption>
                  <FormOption value="4">Post Graduate</FormOption>
                </FormSelect>
              </FormFlex>
              <FormFlex>
                <FormLabel> Profession:</FormLabel>
                <FormSelect
                  required
                  onChange={(event) => setProfession(event.target.value)}
                >
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
                <FormSelect
                  required
                  onChange={(event) => setExperience(event.target.value)}
                >
                  <FormOption>Choose a below option</FormOption>
                  <FormOption value="0">0</FormOption>
                  <FormOption value="1">1</FormOption>
                  <FormOption value="2">2</FormOption>
                  <FormOption value="3">3</FormOption>
                  <FormOption value="4">4</FormOption>
                  <FormOption value="5">5</FormOption>
                </FormSelect>
              </FormFlex>
              <FormAddress
                required
                onChange={(e) => setAddress(e.target.value)}
              >
                Enter your address
              </FormAddress>
              <FormBtn>Save</FormBtn>
            </Form>
          </FormDiv>
        </SingleProfileWrapper>
      </SingleProfileSection>
    </SingleProfileSect>
  );
};

export default SingleProfile;
