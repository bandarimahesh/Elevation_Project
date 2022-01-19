import React, { useEffect, useState } from "react";
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
  SingleProfileSect,
  SingleProfileSection,
  SingleProfileWrapper,
  SkipButton,
  SkipBtnDiv,
} from "./SingleProfileElements";
import { useSelector } from "react-redux";

const SingleProfile = () => {
  const [hideForm, setFormHide] = useState(false);
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [graduate, setGraduate] = useState("");
  const [profession, setProfession] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const email = user?.email;
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
          file: image,
        },
        { headers: { authorization: "Bearer " + token } }
      );
      if (res.data) {
        setFormHide(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const hideFormBtn = (e) => {
    e.preventDefault();
    alert("Please dont skip this step.");
    setFormHide(true);
  };

  useEffect(() => {
    const checkTraineeDetails = async () => {
      const res = await axios.get(`/trainee/profile/check`, {
        email: email,
      });
      if (res.data) {
        setFormHide(true);
      }
    };
    checkTraineeDetails();
  }, [email]);
  return (
    <SingleProfileSect>
      {!hideForm && (
        <SingleProfileSection>
          <SingleProfileWrapper>
            <FormDiv>
              <Form onSubmit={profileSubmitHandler}>
                <FormInputDiv>
                  <FormFlex>
                    <FormLabel htmlFor="">Mobile :</FormLabel>
                    <FormInput
                      type="number"
                      placeholder="Must be 10 digits"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </FormFlex>
                </FormInputDiv>
                <FormInputDiv>
                  <FormFlex>
                    <FormLabel htmlFor="">DoB:</FormLabel>
                    <FormInputDate
                      type="date"
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </FormFlex>
                </FormInputDiv>

                <FormFlex>
                  <FormLabel>Education:</FormLabel>
                  <FormSelect
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
                    onChange={(event) => setProfession(event.target.value)}
                  >
                    <FormOption>Choose a below option</FormOption>
                    <FormOption value="graduation">
                      Completed the graduation
                    </FormOption>
                    <FormOption value="trainer">
                      Looking for a trainer
                    </FormOption>
                    <FormOption value="job">Seeking for a job</FormOption>
                    <FormOption value="skills">
                      Learning a new skills
                    </FormOption>
                  </FormSelect>
                </FormFlex>
                <FormFlex>
                  <FormLabel>Experience:</FormLabel>
                  <FormSelect
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
                <FormInputDiv>
                  <FormFlex>
                    <FormLabel>Address</FormLabel>
                    <FormAddress
                      onChange={(e) => setAddress(e.target.value)}
                    ></FormAddress>
                  </FormFlex>
                </FormInputDiv>
                <FormInputDiv>
                  <FormFlex>
                    <FormLabel>Profile Picture:</FormLabel>
                    <FormInputFile
                      type="file"
                      name="file"
                      onChange={(event) => setImage(event.target.files)}
                    />
                  </FormFlex>
                </FormInputDiv>
                <FormBtn>Save</FormBtn>
              </Form>
            </FormDiv>
          </SingleProfileWrapper>
          <SkipBtnDiv>
            <SkipButton onClick={hideFormBtn}>Skip for now</SkipButton>
          </SkipBtnDiv>
        </SingleProfileSection>
      )}
    </SingleProfileSect>
  );
};

export default SingleProfile;
